import React, { useState } from 'react';
import { BookOpen, CheckCircle, Award } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "§ 1. Числовые выражения",
    rule: "Числовые выражения составляются из чисел с помощью знаков действий и скобок. Число, которое получается в результате выполнения действий в числовом выражении, называют значением выражения. Если в выражении встречается деление на нуль, то это выражение не имеет значения (не имеет смысла).",
    example: {
      task: "Найдите значение выражения: 85 - 3 · 4²",
      steps: [
        "1) Сначала выполняем возведение в степень: 4² = 16",
        "2) Затем умножение: 3 · 16 = 48",
        "3) И вычитание: 85 - 48 = 37"
      ]
    },
    quiz: [
      {
        question: "Найдите значение выражения: 120 - 2 · 5²",
        options: ["70", "50", "100", "80"],
        correct: 0
      },
      {
        question: "Какое выражение не имеет смысла?",
        options: ["15 : (2 + 3)", "8 : 0", "0 · 45", "10 - 2"],
        correct: 1
      }
    ]
  },
    {
    id: 2,
    title: "§ 2. Выражения с переменными",
    rule: "Букву в выражении называют переменной, а само выражение — выражением с переменной. Если в выражение с переменными подставить вместо каждой переменной какое-либо ее значение, то получится числовое выражение. Его значение называют значением выражения с переменными при выбранных значениях переменных. Если в выражении встречается деление на нуль, то это выражение не имеет смысла.",
    example: {
      task: "Двигаясь со скоростью 70 км/ч, автомобиль за t часов проедет 70t км. Найдите путь при t = 4.",
      steps: [
        "1) Подставляем значение t = 4 в выражение: 70 · 4",
        "2) Выполняем умножение: 70 · 4 = 280",
        "3) Значение выражения с переменной равно 280 (км)"
      ]
    },
    quiz: [
      {
        question: "Найдите значение выражения 5x - 2, если x = 10",
        options: ["50", "48", "52", "40"],
        correct: 1
      },
      {
        question: "При каком значении y выражение 12 / y не имеет смысла?",
        options: ["y = 1", "y = 2", "y = 0", "y = 12"],
        correct: 2
      }
    ]
  },
    {
    id: 3,
    title: "§ 3. Сравнение значений выражений",
    rule: "Для любых двух числовых выражений можно установить, равны их значения или нет, и если они не равны, то какое из них больше и какое меньше. Результат сравнения значений выражений можно записать в виде равенства или неравенства. Если выражения содержат переменные, то для разных значений переменных результат сравнения может оказаться различным.",
    example: {
      task: "Сравним производительность двух магазинов. Первый продал 2400 книг за 3 дня, а второй 3500 книг за 5 дней.",
      steps: [
        "1) Найдем производительность первого: 2400 : 3 = 800 (книг в день)",
        "2) Найдем производительность второго: 3500 : 5 = 700 (книг в день)",
        "3) Сравним значения: 800 > 700. Значит, первый магазин работал эффективнее."
      ]
    },
    quiz: [
      {
        question: "Сравните значения выражений 15 : 3 и 20 : 4",
        options: ["15 : 3 > 20 : 4", "15 : 3 < 20 : 4", "15 : 3 = 20 : 4"],
        correct: 2
      },
      {
        question: "Верно ли неравенство 2x < x + 5 при x = 3?",
        options: ["Да", "Нет"],
        correct: 0
      }
    ]
  },
  {
    id: 4,
    title: "§ 4. Тождества",
    rule: "Равенство, верное при любых значениях переменных, называется тождеством. Тождествами считают и верные числовые равенства. К тождествам относятся, например, равенства, выражающие основные свойства действий над числами: a + b = b + a; (a + b) + c = a + (b + c); ab = ba; a(b + c) = ab + ac.",
    example: {
      task: "Проверим, является ли тождеством равенство 5(a + b) = 5a + 5b.",
      steps: [
        "1) Возьмем произвольные значения a = 2, b = 3. Левая часть: 5(2 + 3) = 25",
        "2) Правая часть: 5·2 + 5·3 = 10 + 15 = 25",
        "3) Значения совпали. Это равенство верно при любых a и b, значит это тождество."
      ]
    },
    quiz: [
      {
        question: "Какое из равенств является тождеством?",
        options: ["2x = x + x", "x^2 = x", "3 + x = 5", "a - b = b - a"],
        correct: 0
      },
      {
        question: "Является ли равенство a + (-a) = 0 тождеством?",
        options: ["Да", "Нет"],
        correct: 0
      }
    ]
  },
  {
    id: 5,
    title: "§ 5. Тождественные преобразования",
    rule: "Замену одного выражения другим, тождественно равным ему выражением, называют тождественным преобразованием или просто преобразованием выражения. Тождественные преобразования выражений с переменными выполняются на основе свойств действий над числами.",
    example: {
      task: "Упростим выражение 7y + 3y - 5y.",
      steps: [
        "1) Воспользуемся распределительным свойством умножения: вынесем общий множитель y.",
        "2) 7y + 3y - 5y = (7 + 3 - 5)y",
        "3) Выполним действия в скобках: (10 - 5)y = 5y. Выражение упрощено."
      ]
    },
    quiz: [
      {
        question: "Упростите выражение: 8x + 2x - 4x",
        options: ["6x", "14x", "10x", "4x"],
        correct: 0
      },
      {
        question: "Раскройте скобки: 3a - (b + 2a)",
        options: ["3a - b - 2a", "3a - b + 2a", "3a + b - 2a", "3a + b + 2a"],
        correct: 0
      }
    ]
  },
];

export default function App() {
  const [activeModule, setActiveModule] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentMod = modules[activeModule];

  const handleAnswer = (qIndex, oIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: oIndex });
  };

  const checkQuiz = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;
    currentMod.quiz.forEach((q, i) => {
      if (selectedAnswers[i] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex">
      {/* Боковое меню */}
      <aside className="w-64 bg-slate-800 p-4 border-r border-slate-700 flex flex-col gap-2">
        <h1 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <BookOpen size={24} /> Алгебра 7 класс
        </h1>
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Темы</p>
        {modules.map((m, i) => (
          <button
            key={m.id}
            onClick={() => { setActiveModule(i); setSelectedAnswers({}); setShowResult(false); }}
            className={`text-left p-3 rounded-lg transition-colors ${activeModule === i ? 'bg-blue-600 text-white' : 'hover:bg-slate-700 text-slate-300'}`}
          >
            {m.title}
          </button>
        ))}
      </aside>

      {/* Основной контент */}
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">{currentMod.title}</h2>

        {/* Блок правила */}
        <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-blue-500 mb-8 shadow-lg">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">📖 Правило</h3>
          <p className="text-slate-200 leading-relaxed text-lg">{currentMod.rule}</p>
        </div>

        {/* Блок примера */}
        <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">
          <h3 className="text-lg font-semibold text-green-400 mb-3">💡 Разобранный пример</h3>
          <p className="text-xl font-mono mb-4 bg-slate-900 p-3 rounded inline-block">{currentMod.example.task}</p>
          <ul className="space-y-2 text-slate-300">
            {currentMod.example.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Блок теста */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">📝 Проверь себя</h3>
          
          {currentMod.quiz.map((q, qIndex) => (
            <div key={qIndex} className="mb-6">
              <p className="text-lg mb-3 text-white font-medium">{qIndex + 1}. {q.question}</p>
              <div className="grid grid-cols-2 gap-3">
                {q.options.map((opt, oIndex) => {
                  const isSelected = selectedAnswers[qIndex] === oIndex;
                  const isCorrect = q.correct === oIndex;
                  
                  let btnClass = "p-3 rounded-lg border text-left transition-all ";
                  if (!showResult) {
                    btnClass += isSelected ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-700 border-slate-600 hover:bg-slate-600";
                  } else {
                    if (isCorrect) btnClass += "bg-green-600/20 border-green-500 text-green-400";
                    else if (isSelected && !isCorrect) btnClass += "bg-red-600/20 border-red-500 text-red-400";
                    else btnClass += "bg-slate-700 border-slate-600 opacity-50";
                  }

                  return (
                    <button
                      key={oIndex}
                      disabled={showResult}
                      onClick={() => handleAnswer(qIndex, oIndex)}
                      className={btnClass}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {!showResult ? (
            <button onClick={checkQuiz} className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto">
              Проверить ответы
            </button>
          ) : (
            <div className="mt-6 p-4 bg-slate-900 rounded-lg flex items-center gap-4 border border-slate-700">
              <Award size={32} className="text-yellow-400" />
              <div>
                <p className="text-xl font-bold text-white">Твой результат: {calculateScore()} из {currentMod.quiz.length}</p>
                <p className="text-slate-400">
                  {calculateScore() === currentMod.quiz.length ? "Идеально! Тема усвоена." : "Есть над чем поработать. Перечитай правило и попробуй снова."}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}