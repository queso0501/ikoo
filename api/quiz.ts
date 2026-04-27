import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { content, count = 10 } = req.body as { content: string; count: number };

  if (!content) {
    res.status(400).json({ error: "content is required" });
    return;
  }

  const stripped = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 6000);

  const prompt = `Eres un profesor que genera preguntas de opción múltiple para un examen de ingreso universitario en Argentina (estilo UNCUYO/CBC).

Basándote en el siguiente contenido de estudio, genera exactamente ${count} preguntas de opción múltiple.

CONTENIDO:
${stripped}

REGLAS ESTRICTAS:
- Cada pregunta debe tener exactamente 4 opciones (A, B, C, D)
- Solo una opción es correcta
- Las preguntas deben evaluar comprensión, no solo memorización
- Las preguntas deben ser claras y sin ambigüedad
- Varía el tipo: definiciones, aplicaciones, comparaciones, cálculos si aplica
- Responde ÚNICAMENTE con JSON válido, sin texto adicional

Formato de respuesta (JSON):
{
  "questions": [
    {
      "question": "texto de la pregunta",
      "options": ["opción A", "opción B", "opción C", "opción D"],
      "correct": 0
    }
  ]
}

El campo "correct" es el índice (0-3) de la respuesta correcta.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 4096,
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      res.status(500).json({ error: "Invalid AI response" });
      return;
    }
    const parsed = JSON.parse(jsonMatch[0]);
    res.status(200).json(parsed);
  } catch (err) {
    console.error("Quiz generation error:", err);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
}
