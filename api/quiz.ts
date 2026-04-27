import OpenAI from "openai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { content, count = 10 } = req.body as {
    content: string;
    count: number;
  };

  if (!content) {
    return res.status(400).json({ error: "content is required" });
  }

  const stripped = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 6000);

  const prompt = `Eres un profesor que genera preguntas de opción múltiple.

Genera exactamente ${count} preguntas.

CONTENIDO:
${stripped}

Responde SOLO en JSON:
{
  "questions": [
    {
      "question": "...",
      "options": ["A","B","C","D"],
      "correct": 0
    }
  ]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";

    const jsonMatch = raw.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      return res.status(500).json({ error: "Invalid AI response" });
    }

    return res.status(200).json(JSON.parse(jsonMatch[0]));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate quiz" });
  }
}
