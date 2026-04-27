# Guía de Estudio para iko 🩵

App web para preparar el examen de ingreso (30 de mayo, 2026), con:

- Countdown al día del examen
- 5 materias con 61 días de estudio
- Quizzes generados con IA (10 preguntas por día, 20 por materia, 30 generales)
- Progreso guardado en el navegador

## Tecnologías

- React 18 + Vite + TypeScript
- TailwindCSS v4
- OpenAI API (GPT-4o-mini) para generar quizzes
- Vercel Serverless Functions para el endpoint de IA

## Cómo correrlo localmente

```bash
npm install
cp .env.example .env
# editá .env y poné tu OPENAI_API_KEY
npm run dev
```

Abre `http://localhost:5173`.

> **Nota:** En desarrollo local, el endpoint `/api/quiz/generate` solo funciona con `vercel dev` (instalá Vercel CLI: `npm i -g vercel`). Con `npm run dev` solo se sirve el frontend.

## Cómo desplegar en Vercel

1. Subí el proyecto a GitHub.
2. Entrá a [vercel.com](https://vercel.com), crea un nuevo proyecto e importá el repo.
3. En **Environment Variables**, agregá `OPENAI_API_KEY` con tu clave de OpenAI.
4. Hacé clic en **Deploy** — Vercel detecta Vite automáticamente.

¡Listo! Vercel te da una URL `.vercel.app` para compartir.

## Estructura

```
.
├── api/
│   └── quiz/
│       └── generate.ts      # Serverless function (OpenAI)
├── src/
│   ├── App.tsx              # Componente principal
│   ├── data.ts              # Contenido de estudio
│   ├── index.css            # Estilos + Tailwind
│   └── main.tsx             # Entry point React
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── .env.example
```

## Obtener una API key de OpenAI

1. Andá a [platform.openai.com](https://platform.openai.com/api-keys).
2. Creá una cuenta y agregá un método de pago (los quizzes con `gpt-4o-mini` cuestan centavos).
3. Generá una nueva API key y copiala en `.env` o en las env vars de Vercel.
