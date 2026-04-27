import { useState, useEffect } from "react";
import { planes } from "./data";

const EXAM_DATE = new Date("2026-05-30");

const materias: Record<string, number> = {
  matematicas: 21,
  fisica: 13,
  Biología: 13,
  comprension: 6,
  lengua: 8,
};

const nombres: Record<string, string> = {
  matematicas: "Matemáticas",
  fisica: "Física",
  Biología: "Biología",
  comprension: "Comprensión lectora",
  lengua: "Lengua",
};

const subjectColors: Record<string, { bg: string; light: string; accent: string }> = {
  matematicas: { bg: "from-sky-300 to-blue-400", light: "bg-sky-50 border-sky-200", accent: "bg-sky-300" },
  fisica: { bg: "from-blue-300 to-indigo-400", light: "bg-blue-50 border-blue-200", accent: "bg-blue-300" },
  Biología: { bg: "from-cyan-300 to-sky-400", light: "bg-cyan-50 border-cyan-200", accent: "bg-cyan-300" },
  comprension: { bg: "from-indigo-300 to-blue-400", light: "bg-indigo-50 border-indigo-200", accent: "bg-indigo-300" },
  lengua: { bg: "from-blue-400 to-cyan-400", light: "bg-blue-50 border-blue-200", accent: "bg-blue-400" },
};

type Screen = "home" | "subject" | "day" | "topic" | "quiz";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function getContentForDay(subject: string, dayIndex: number): string {
  const data = planes[subject]?.[dayIndex];
  if (!data) return "";
  const parts = [data.tema || "", data.exp || "", data.exp2 || "", data.exp3 || ""];
  return parts.map(stripHtml).filter(Boolean).join(". ");
}

function getContentForSubject(subject: string): string {
  const count = materias[subject];
  return Array.from({ length: count }, (_, i) => getContentForDay(subject, i)).join(" ");
}

function getContentForAll(): string {
  return Object.keys(materias).map(getContentForSubject).join(" ");
}

function useProgress() {
  const [progress, setProgress] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("progreso") || "{}");
    } catch {
      return {};
    }
  });

  const markDone = (key: string) => {
    const next = { ...progress, [key]: true };
    setProgress(next);
    localStorage.setItem("progreso", JSON.stringify(next));
  };

  const reset = () => {
    setProgress({});
    localStorage.removeItem("progreso");
  };

  return { progress, markDone, reset };
}

function CountdownBanner() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(EXAM_DATE);
  exam.setHours(0, 0, 0, 0);
  const diff = exam.getTime() - today.getTime();
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

  let colorClass = "from-sky-300 to-blue-400";
  if (days <= 30) colorClass = "from-blue-400 to-indigo-400";
  if (days <= 10) colorClass = "from-indigo-400 to-violet-500";

  return (
    <div className={`bg-gradient-to-r ${colorClass} rounded-2xl p-5 text-white text-center shadow-lg mb-6`}>
      <div className="text-4xl font-bold">
        {days > 0 ? days : "🎯"}
      </div>
      <div className="text-sm font-medium mt-1 opacity-90">
        {days > 0 ? `días para el examen` : "¡Hoy es tu examen! ¡Mucha suerte!"}
      </div>
      <div className="text-xs mt-1 opacity-75">30 de mayo, 2026</div>
    </div>
  );
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-sky-300 to-blue-400 rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// --- Quiz Component ---

interface QuizProps {
  title: string;
  content: string;
  questionCount: number;
  gradientBg: string;
  onBack: () => void;
}

function Quiz({ title, content, questionCount, gradientBg, onBack }: QuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    async function fetchQuiz() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/quiz/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: content.slice(0, 8000), count: questionCount }),
        });
        if (!res.ok) throw new Error("Error al generar el quiz");
        const data = await res.json() as { questions: QuizQuestion[] };
        setQuestions(data.questions || []);
        setAnswers(new Array(data.questions?.length || 0).fill(null));
      } catch (e) {
        setError("No se pudo generar el quiz. Intentá de nuevo.");
      } finally {
        setLoading(false);
      }
    }
    fetchQuiz();
  }, []);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(answers[current + 1] ?? null);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(c => c - 1);
      setSelected(answers[current - 1] ?? null);
    }
  };

  const score = answers.filter((a, i) => a === questions[i]?.correct).length;

  if (loading) {
    return (
      <div className="max-w-lg mx-auto px-4 py-10 text-center">
        <div className={`bg-gradient-to-br ${gradientBg} rounded-2xl p-6 text-white mb-6`}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm opacity-80">Quiz · {questionCount} preguntas</p>
        </div>
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="w-12 h-12 border-4 border-sky-300 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Generando preguntas con IA...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto px-4 py-10">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-5 text-sm">
          <span>←</span> Volver
        </button>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-red-700 font-medium mb-4">{error}</p>
          <button onClick={onBack} className="bg-red-500 text-white rounded-xl px-6 py-2 text-sm font-medium">
            Volver
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const pct = Math.round((score / questions.length) * 100);
    const emoji = pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "📚";
    return (
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className={`bg-gradient-to-br ${gradientBg} rounded-2xl p-6 text-white text-center mb-6`}>
          <div className="text-4xl mb-2">{emoji}</div>
          <h2 className="text-2xl font-bold">{score}/{questions.length}</h2>
          <p className="text-sm opacity-80 mt-1">{pct}% correcto</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50 mb-6">
          {questions.map((q, i) => {
            const userAns = answers[i];
            const correct = q.correct;
            const isRight = userAns === correct;
            return (
              <div key={i} className="p-4">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  <span className={`mr-2 ${isRight ? "text-green-500" : "text-red-500"}`}>
                    {isRight ? "✓" : "✗"}
                  </span>
                  {q.question}
                </p>
                {!isRight && (
                  <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-1">
                    Correcto: {q.options[correct]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={onBack}
          className={`w-full bg-gradient-to-r ${gradientBg} text-white rounded-xl py-3 font-medium shadow-sm hover:opacity-90 transition-opacity`}
        >
          Volver
        </button>
      </div>
    );
  }

  const q = questions[current];
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-5 text-sm">
        <span>←</span> Volver
      </button>

      <div className={`bg-gradient-to-br ${gradientBg} rounded-2xl p-4 text-white mb-5`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium opacity-80">{title}</span>
          <span className="text-sm font-bold">{current + 1}/{questions.length}</span>
        </div>
        <div className="mt-2 w-full bg-white/20 rounded-full h-1.5">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
        <p className="text-gray-800 font-medium text-base leading-relaxed">{q.question}</p>
      </div>

      <div className="grid grid-cols-1 gap-2.5 mb-5">
        {q.options.map((opt, idx) => {
          let cls = "w-full text-left rounded-xl p-4 border transition-all duration-200 flex items-start gap-3 ";
          if (selected === null) {
            cls += "bg-white border-gray-100 hover:border-sky-300 hover:bg-sky-50";
          } else if (idx === q.correct) {
            cls += "bg-green-50 border-green-300 text-green-800";
          } else if (idx === selected && selected !== q.correct) {
            cls += "bg-red-50 border-red-300 text-red-800";
          } else {
            cls += "bg-gray-50 border-gray-100 text-gray-400";
          }
          return (
            <button key={idx} onClick={() => handleSelect(idx)} className={cls}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                selected === null
                  ? "bg-sky-100 text-sky-600"
                  : idx === q.correct
                  ? "bg-green-200 text-green-800"
                  : idx === selected
                  ? "bg-red-200 text-red-800"
                  : "bg-gray-200 text-gray-500"
              }`}>
                {optionLabels[idx]}
              </span>
              <span className="text-sm leading-relaxed">{opt}</span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        {current > 0 && (
          <button
            onClick={handlePrev}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            ← Anterior
          </button>
        )}
        {selected !== null && (
          <button
            onClick={handleNext}
            className={`flex-1 bg-gradient-to-r ${gradientBg} text-white rounded-xl py-3 font-medium shadow-sm hover:opacity-90 transition-opacity text-sm`}
          >
            {current + 1 >= questions.length ? "Ver resultado →" : "Siguiente →"}
          </button>
        )}
      </div>
    </div>
  );
}

// --- Screens ---

function HomeScreen({
  progress,
  onSubject,
  onReset,
  onGlobalQuiz,
}: {
  progress: Record<string, boolean>;
  onSubject: (m: string) => void;
  onReset: () => void;
  onGlobalQuiz: () => void;
}) {
  const total = Object.values(materias).reduce((a, b) => a + b, 0);
  const completed = Object.keys(progress).length;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Guía de Estudio</h1>
        <p className="text-gray-500 text-sm mt-1">para iko 🩵</p>
      </div>

      <CountdownBanner />

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-gray-700">Progreso general</span>
          <span className="text-sm font-medium text-gray-500">{completed}/{total} días</span>
        </div>
        <ProgressBar value={completed} max={total} />
        <p className="text-xs text-gray-400 mt-2">{Math.round((completed / total) * 100)}% completado</p>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        {Object.keys(materias).map((m) => {
          const count = materias[m];
          const done = Object.keys(progress).filter(k => k.startsWith(m + "-")).length;
          return (
            <button
              key={m}
              onClick={() => onSubject(m)}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 text-left flex items-center gap-4 group"
            >
              <span className="text-2xl flex-shrink-0" style={{ color: "#c0185a" }}>♥</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800 group-hover:text-gray-900">{nombres[m]}</span>
                  <span className="text-xs text-gray-400">{done}/{count}</span>
                </div>
                <ProgressBar value={done} max={count} />
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={onGlobalQuiz}
        className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl p-4 shadow-sm hover:opacity-90 transition-opacity mb-3 flex items-center justify-center gap-2 font-semibold"
      >
        <span>🧠</span> Quiz general · 30 preguntas
      </button>

      <button
        onClick={() => {
          if (confirm("¿Seguro que quieres reiniciar todo el progreso?")) onReset();
        }}
        className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition-colors"
      >
        Reiniciar progreso
      </button>
    </div>
  );
}

function SubjectScreen({
  subject,
  progress,
  onDay,
  onBack,
  onSubjectQuiz,
}: {
  subject: string;
  progress: Record<string, boolean>;
  onDay: (d: number) => void;
  onBack: () => void;
  onSubjectQuiz: () => void;
}) {
  const col = subjectColors[subject];
  const count = materias[subject];
  const done = Object.keys(progress).filter(k => k.startsWith(subject + "-")).length;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-5 text-sm">
        <span>←</span> Volver
      </button>

      <div className={`bg-gradient-to-br ${col.bg} rounded-2xl p-5 text-white mb-5`}>
        <h2 className="text-2xl font-bold">{nombres[subject]}</h2>
        <p className="text-sm opacity-80 mt-1">{done} de {count} días completados</p>
        <div className="mt-3 w-full bg-white/20 rounded-full h-2">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${(done / count) * 100}%` }}
          />
        </div>
      </div>

      <button
        onClick={onSubjectQuiz}
        className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl p-3.5 shadow-sm hover:opacity-90 transition-opacity mb-5 flex items-center justify-center gap-2 font-semibold text-sm"
      >
        <span>🧠</span> Quiz de {nombres[subject]} · 20 preguntas
      </button>

      <div className="grid grid-cols-3 gap-2.5">
        {Array.from({ length: count }, (_, i) => i + 1).map((day) => {
          const key = `${subject}-${day}`;
          const isDone = !!progress[key];
          return (
            <button
              key={day}
              onClick={() => onDay(day)}
              className={`rounded-xl py-3 px-2 text-center font-medium text-sm transition-all duration-200 ${
                isDone
                  ? `bg-gradient-to-br ${col.bg} text-white shadow-sm`
                  : "bg-white border border-gray-100 text-gray-700 hover:shadow-sm hover:border-gray-200"
              }`}
            >
              {isDone ? "✓" : ""} Día {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DayScreen({
  subject,
  day,
  progress,
  onTopic,
  onComplete,
  onBack,
  onDayQuiz,
}: {
  subject: string;
  day: number;
  progress: Record<string, boolean>;
  onTopic: () => void;
  onComplete: () => void;
  onBack: () => void;
  onDayQuiz: () => void;
}) {
  const col = subjectColors[subject];
  const key = `${subject}-${day}`;
  const isDone = !!progress[key];
  const data = planes[subject]?.[day - 1];

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-5 text-sm">
        <span>←</span> Volver
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className={`bg-gradient-to-br ${col.bg} p-5 text-white`}>
          <div className="text-xs font-medium opacity-75 mb-1">{nombres[subject]} · Día {day}</div>
          <h2 className="text-xl font-bold">{data?.tema || "Tema pendiente"}</h2>
        </div>

        <div className="p-5 flex flex-col gap-3">
          {isDone && (
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center gap-2">
              <span className="text-sky-500 text-lg">✓</span>
              <span className="text-sky-700 text-sm font-medium">¡Día completado!</span>
            </div>
          )}

          <button
            onClick={onTopic}
            className={`w-full bg-gradient-to-r ${col.bg} text-white rounded-xl py-3 font-medium shadow-sm hover:opacity-90 transition-opacity`}
          >
            Ver explicación →
          </button>

          <button
            onClick={onDayQuiz}
            className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-xl py-3 font-medium shadow-sm hover:opacity-90 transition-opacity"
          >
            🧠 Quiz del día · 10 preguntas
          </button>

          {!isDone && (
            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-sky-300 to-blue-400 text-white rounded-xl py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Marcar como completado ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function TopicScreen({
  subject,
  day,
  onBack,
}: {
  subject: string;
  day: number;
  onBack: () => void;
}) {
  const col = subjectColors[subject];
  const data = planes[subject]?.[day - 1];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-5 text-sm">
        <span>←</span> Volver
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className={`bg-gradient-to-br ${col.bg} p-5 text-white`}>
          <div className="text-xs font-medium opacity-75 mb-1">{nombres[subject]} · Día {day}</div>
          <h2 className="text-xl font-bold">{data?.tema || "Tema pendiente"}</h2>
        </div>

        <div className="p-5 study-content">
          {data?.img && (
            <img
              src={data.img}
              alt={data.tema}
              className="w-full max-w-xs mx-auto rounded-xl mb-5 block"
            />
          )}

          {data?.exp && (
            <div
              dangerouslySetInnerHTML={{ __html: data.exp }}
            />
          )}

          {data?.exp2 && (
            <div className="mt-4">
              <strong className="text-gray-700">Extra:</strong>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: data.exp2.replace(/\n/g, "<br>") }}
              />
            </div>
          )}

          {data?.exp3 && (
            <div className="mt-4">
              <strong className="text-gray-700">Propiedades:</strong>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: data.exp3 }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Root App ---

export default function App() {
  const { progress, markDone, reset } = useProgress();
  const [screen, setScreen] = useState<Screen>("home");
  const [subject, setSubject] = useState<string>("");
  const [day, setDay] = useState<number>(1);

  // Quiz config
  const [quizTitle, setQuizTitle] = useState("");
  const [quizContent, setQuizContent] = useState("");
  const [quizCount, setQuizCount] = useState(10);
  const [quizGradient, setQuizGradient] = useState("from-sky-300 to-blue-400");
  const [quizReturnScreen, setQuizReturnScreen] = useState<Screen>("home");

  const goHome = () => setScreen("home");
  const goSubject = (m: string) => { setSubject(m); setScreen("subject"); };
  const goDay = (d: number) => { setDay(d); setScreen("day"); };
  const goTopic = () => setScreen("topic");

  const startQuiz = (title: string, content: string, count: number, gradient: string, returnTo: Screen) => {
    setQuizTitle(title);
    setQuizContent(content);
    setQuizCount(count);
    setQuizGradient(gradient);
    setQuizReturnScreen(returnTo);
    setScreen("quiz");
  };

  const complete = () => {
    markDone(`${subject}-${day}`);
    goHome();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {screen === "home" && (
        <HomeScreen
          progress={progress}
          onSubject={goSubject}
          onReset={reset}
          onGlobalQuiz={() =>
            startQuiz("Quiz general", getContentForAll(), 30, "from-pink-400 to-rose-500", "home")
          }
        />
      )}
      {screen === "subject" && (
        <SubjectScreen
          subject={subject}
          progress={progress}
          onDay={goDay}
          onBack={goHome}
          onSubjectQuiz={() =>
            startQuiz(
              `Quiz · ${nombres[subject]}`,
              getContentForSubject(subject),
              20,
              subjectColors[subject].bg,
              "subject"
            )
          }
        />
      )}
      {screen === "day" && (
        <DayScreen
          subject={subject}
          day={day}
          progress={progress}
          onTopic={goTopic}
          onComplete={complete}
          onBack={() => setScreen("subject")}
          onDayQuiz={() =>
            startQuiz(
              `${nombres[subject]} · Día ${day}`,
              getContentForDay(subject, day - 1),
              10,
              subjectColors[subject].bg,
              "day"
            )
          }
        />
      )}
      {screen === "topic" && (
        <TopicScreen subject={subject} day={day} onBack={() => setScreen("day")} />
      )}
      {screen === "quiz" && (
        <Quiz
          title={quizTitle}
          content={quizContent}
          questionCount={quizCount}
          gradientBg={quizGradient}
          onBack={() => setScreen(quizReturnScreen)}
        />
      )}
    </div>
  );
}
