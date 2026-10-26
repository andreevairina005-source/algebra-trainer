import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Award, Menu, X } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "§ 1. Числовые выражения",
    rule: "Числовые выражения составляются из чисел с помощью знаков действий и скобок. Число, которое получается в результате выполнения действий в числовом выражении, называют значением выражения. Если в выражении встречается деление на нуль, то это выражение не имеет значения (не имеет смысла).",
    example: {
      task: "Примеры из учебника:",
      steps: [
        "1) Туристы в течение двух часов ехали на велосипедах по шоссе со скоростью 16 км/ч, а затем шли лесом еще 7 км. По шоссе они проехали 16·2 км, а лесом прошли 7 км. Длина маршрута: (16·2+7) км, т.е. 39 км.",
        "2) Найдем значение выражения 96 — 2·6². Сначала выполняем возведение в степень, затем умножение и вычитание: 1) 6² = 36; 2) 2·36 = 72; 3) 96 — 72 = 24.",
        "3) Выражение 35:(4·2—8) не имеет смысла, так как 4·2—8 = 0, а на нуль делить нельзя."
      ]
    },
    quiz: [
      { question: "Найдите значение выражения: 43 : 5", options: ["8,6", "8", "9", "8,5"], correct: 0 },
      { question: "Вычислите: 9,6 — 3 · 1,2", options: ["6", "5,4", "6,2", "4,8"], correct: 0 },
      { question: "Вычислите: 5 · (7,4 — 6,1)", options: ["6,5", "5,5", "7,5", "6,1"], correct: 0 },
      { question: "Не имеет смысла выражение:", options: ["35 : (4·2—8)", "15 : (2+3)", "0 · 45", "10 - 2"], correct: 0 },
      { question: "Найдите значение: 6,965 + 23,3", options: ["30,265", "29,265", "30,125", "31,265"], correct: 0 },
      { question: "Вычислите: 50,4 - 6,98", options: ["43,42", "43,58", "44,42", "43,52"], correct: 0 },
      { question: "Найдите значение: 96 - 2 · 6²", options: ["24", "48", "84", "12"], correct: 0 },
      { question: "ЗАДАЧА (№ 12): Из двух населенных пунктов, расстояние между которыми 40 км, вышли одновременно навстречу друг другу два пешехода. Скорость одного 4 км/ч, другого 5 км/ч. Какое расстояние будет между ними через 3 ч?", options: ["13 км", "27 км", "15 км", "12 км"], correct: 0 },
      { question: "ЗАДАЧА (№ 13): Один рабочий изготовляет за час 7 деталей, а другой 9 деталей. Сколько деталей они изготовят за 4 ч?", options: ["64", "32", "63", "28"], correct: 0 },
      { question: "ЗАДАЧА (№ 16): Найдите 150% числа 240.", options: ["360", "120", "240", "400"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "§ 2. Выражения с переменными",
    rule: "Букву в выражении называют переменной, а само выражение — выражением с переменной. Если в выражение с переменными подставить вместо каждой переменной какое-либо ее значение, то получится числовое выражение. Его значение называют значением выражения с переменными.",
    example: {
      task: "Объяснение из учебника:",
      steps: [
        "1) Двигаясь со скоростью 60 км/ч, автомобиль за t ч пройдет 60t км. Букву t называют переменной, а выражение 60t — выражением с переменной.",
        "2) Если t = 4, то 60 · 4 = 240 (км). Число 240 есть значение выражения 60t при t = 4.",
        "3) Пусть длины сторон прямоугольника равны a см и b см. Тогда его площадь равна ab см². Если a = 8 и b = 11, то ab = 8·11 = 88."
      ]
    },
    quiz: [
      { question: "Найдите значение выражения 4x — 12 при x = 7", options: ["16", "28", "12", "40"], correct: 0 },
      { question: "Найдите значение выражения 2,8 — 0,5y при y = 3", options: ["1,3", "1,8", "2,3", "0,3"], correct: 0 },
      { question: "При каком значении x выражение 18/x не имеет смысла?", options: ["x = 0", "x = 1", "x = 18", "x = -18"], correct: 0 },
      { question: "При каком значении b выражение 1/(b-7) не имеет смысла?", options: ["b = 7", "b = 0", "b = 1", "b = -7"], correct: 0 },
      { question: "Запишите формулу четного числа m.", options: ["m = 2n", "m = 2n + 1", "m = n/2", "m = 3n"], correct: 0 },
      { question: "Найдите значение выражения 5m - 3n при m = 2/5, n = 2/3", options: ["0", "-2", "2", "1"], correct: 0 },
      { question: "Найдите значение выражения 1/2x - y, если x = 2,4, y = 0,8", options: ["0,4", "0,8", "-0,4", "1,2"], correct: 0 },
      { question: "ЗАДАЧА (№ 32): В классе 35 учеников. Каждый из них получил бесплатно учебники по математике стоимостью 0,55 р. и остальные учебники общей стоимостью n р. Сколько денег было израсходовано, чтобы обеспечить этот класс учебниками? (При n = 50)", options: ["69,25", "19,25", "50,55", "60"], correct: 0 },
      { question: "ЗАДАЧА (№ 31): Длина прямоугольника a см, ширина b см. Что означает выражение a + 2b?", options: ["Половина периметра", "Площадь", "Периметр", "Разность сторон"], correct: 0 },
      { question: "ЗАДАЧА: Скорость автомобиля 60 км/ч. Запишите выражение для пути за t часов.", options: ["60t", "60/t", "60 + t", "t/60"], correct: 0 }
    ]
  },
  {
    id: 3,
    title: "§ 3. Сравнение значений выражений",
    rule: "Для любых двух числовых выражений можно установить, равны их значения или нет, и если они не равны, то какое из них больше и какое меньше. Если выражения содержат переменные, то для разных значений переменных результат сравнения значений этих выражений может оказаться различным.",
    example: {
      task: "Задача из учебника:",
      steps: [
        "1) Колхоз засеял пшеницей два опытных участка площадью 48 и 60 га. С первого собрали 1800 ц, а со второго 2100 ц. На каком участке урожайность выше?",
        "2) Урожайность выражается частным от деления массы пшеницы на площадь участка.",
        "3) Сравним значения выражений 1800:48 и 2100:60. Так как 1800:48 = 37,5, а 2100:60 = 35, то 1800:48 > 2100:60.",
        "4) Значит, урожайность выше на первом участке."
      ]
    },
    quiz: [
      { question: "Сравните значения выражений: 2,06 - 3,05 и 21,28 : 3,5", options: ["<", ">", "="], correct: 0 },
      { question: "Сравните: 97,2 : 2,4 и 62 - 21,6", options: ["<", ">", "="], correct: 0 },
      { question: "Сравните значения выражений при a = -20: 2a - 7 и 3a + 4", options: [">", "<", "="], correct: 0 },
      { question: "Верно ли неравенство: 2 1/2 : 3/4 - 2 1/3 > (1 1/2 - 1 1/3) · 4", options: ["Да", "Нет"], correct: 0 },
      { question: "Верно ли, что 8,1 < 8,14 < 8,6?", options: ["Да", "Нет"], correct: 0 },
      { question: "Сравните: 56 · 2/7 и 56 : 7/2", options: ["<", ">", "="], correct: 2 },
      { question: "Верно ли неравенство: -7,62 + 3,38 < 4,2 - 7,31?", options: ["Да", "Нет"], correct: 0 },
      { question: "ЗАДАЧА (№ 18): За несколько книг уплатили 5,2 р. Стоимость одной составила 30%, а другой 45% израсходованных денег. На сколько копеек первая книга дешевле второй?", options: ["78 коп.", "85 коп.", "72 коп.", "80 коп."], correct: 0 },
      { question: "ЗАДАЧА (№ 19): Площадь участка поля 80 га. Первый тракторист вспахал 40% этого участка, а второй 60% оставшейся части. Кто из них вспахал больше и на сколько?", options: ["Первый, на 3,2 га", "Второй, на 3,2 га", "Одинаково"], correct: 0 },
      { question: "ЗАДАЧА (№ 20): Колхоз собирал с каждого гектара 44 ц пшеницы. Применив интенсивную технологию, он увеличил производство на 25%. Сколько центнеров пшеницы с гектара стал собирать колхоз?", options: ["55", "69", "50", "60"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "§ 4. Тождества",
    rule: "Равенство, верное при любых значениях переменных, называется тождеством. Тождествами считают и верные числовые равенства. К тождествам относятся, например, равенства, выражающие основные свойства действий над числами.",
    example: {
      task: "Рассмотрим пример из учебника:",
      steps: [
        "Найдем значения выражений 3(x+y) и 3x+3y при x=5, y=4:",
        "1) 3(x + y) = 3(5 + 4) = 3·9 = 27",
        "2) 3x + 3y = 3·5 + 3·4 = 15 + 12 = 27",
        "Мы получили один и тот же результат. Так как значения выражений равны при любых значениях переменных, эти выражения называются тождественно равными.",
        "А равенство 3(x+y) = 3x+3y называется тождеством."
      ]
    },
    quiz: [
      { question: "Какое из данных равенств является тождеством?", options: ["a(b + c) = ab + ac", "2x + y = 2xy", "x + 3 = 5", "a - b = b - a"], correct: 0 },
      { question: "Является ли тождеством равенство a + 0 = a?", options: ["Да", "Нет"], correct: 0 },
      { question: "Является ли тождеством равенство a · (-b) = -ab?", options: ["Да", "Нет"], correct: 0 },
      { question: "Является ли тождеством равенство (-a)(-b) = ab?", options: ["Да", "Нет"], correct: 0 },
      { question: "Укажите, на основании каких свойств тождественно равны выражения: 2x + 3 и 3 + 2x", options: ["Переместительное", "Сочетательное", "Распределительное"], correct: 0 },
      { question: "Является ли тождеством равенство 5y - 15 = 5(y - 2)?", options: ["Нет", "Да"], correct: 0 },
      { question: "Является ли тождеством равенство 6(x - y) = 6x - 6y?", options: ["Да", "Нет"], correct: 0 },
      { question: "ЗАДАЧА (№ 90): Запишите в виде равенства утверждение: произведение любого числа и нуля равно нулю.", options: ["a · 0 = 0", "a + 0 = a", "a - 0 = a", "a / 0 = 0"], correct: 0 },
      { question: "ЗАДАЧА: Запишите в виде равенства: квадрат любого положительного числа равен квадрату числа, ему противоположного.", options: ["a² = (-a)²", "a² = -a²", "a = -a", "a³ = (-a)³"], correct: 0 },
      { question: "ЗАДАЧА: Докажите, что x + (-x) + y = y. Это тождество?", options: ["Да", "Нет"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "§ 5. Тождественные преобразования",
    rule: "Замену одного выражения другим, тождественно равным ему выражением, называют тождественным преобразованием или просто преобразованием выражения. Тождественные преобразования выполняются на основе свойств действий над числами.",
    example: {
      task: "Рассмотрим примеры из учебника:",
      steps: [
        "1) Приведем подобные слагаемые в сумме 5x + 2x - 3x: 5x + 2x - 3x = (5 + 2 - 3)x = 4x.",
        "2) Раскроем скобки в выражении 2a + (b - 3c): 2a + (b - 3c) = 2a + b - 3c.",
        "3) Раскроем скобки в выражении a - (4b - c): a - (4b - c) = a - 4b + c."
      ]
    },
    quiz: [
      { question: "Упростите, используя переместительное свойство: -6,2a · 5", options: ["-31a", "31a", "-1,24a", "11,2a"], correct: 0 },
      { question: "Преобразуйте выражение: 7(x - y)", options: ["7x - 7y", "7x + 7y", "x - 7y", "7xy"], correct: 0 },
      { question: "Приведите подобные слагаемые: 5a + 27a - a", options: ["31a", "32a", "33a", "28a"], correct: 0 },
      { question: "Раскройте скобки: x + (b + c + d - m)", options: ["x + b + c + d - m", "x - b - c - d + m", "x + b - c + d - m", "x - b + c - d + m"], correct: 0 },
      { question: "Раскройте скобки: a - (b - c - d)", options: ["a - b + c + d", "a - b - c - d", "a + b - c - d", "a + b + c + d"], correct: 0 },
      { question: "Упростите выражение: 5 - (a - 3)", options: ["8 - a", "2 - a", "8 + a", "2 + a"], correct: 0 },
      { question: "Раскройте скобки и приведите подобные: 3(6 - 5x) + 17x - 10", options: ["8 + 2x", "8 - 2x", "28 - 2x", "28 + 2x"], correct: 0 },
      { question: "ЗАДАЧА (№ 112): Упростите выражение и найдите его значение: (6 - 2x) + (15 - 3x) при x = -0,2", options: ["22", "20", "24", "18"], correct: 0 },
      { question: "ЗАДАЧА (№ 114): Докажите, что при любом a значение выражения 3(a+2) - 3a равно 6.", options: ["Тождество верно", "Тождество неверно"], correct: 0 },
      { question: "ЗАДАЧА (№ 132): Упростите выражение: 0,4(7x - 2) - 1,6 + 1,7x", options: ["4,5x - 2,4", "4,5x + 2,4", "2,8x - 2,4", "2,8x + 2,4"], correct: 0 }
    ]
  },
  ];

export default function App() {
  const [activeModule, setActiveModule] = useState(() => {
    const savedId = localStorage.getItem('algebra_active_topic');
    if (savedId) {
      const index = modules.findIndex(m => m.id === parseInt(savedId, 10));
      return index !== -1 ? index : 0;
    }
    return 0;
  });
  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (modules[activeModule]) {
      localStorage.setItem('algebra_active_topic', modules[activeModule].id);
    }
  }, [activeModule]);

  const currentMod = modules[activeModule];

  if (!currentMod) return <div>Ошибка: Темы не найдены</div>;

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
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col md:flex-row">
      
      <header className="md:hidden bg-slate-800 p-4 flex items-center justify-between border-b border-slate-700 sticky top-0 z-20">
        <h1 className="text-lg font-bold text-blue-400 flex items-center gap-2">
          <BookOpen size={20} /> Алгебра
        </h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <aside className={`w-64 bg-slate-800 p-4 border-r border-slate-700 flex-col gap-2 md:flex md:sticky md:top-0 md:h-screen overflow-y-auto transition-transform duration-300 ${isMobileMenuOpen ? 'flex fixed top-[60px] left-0 bottom-0 z-10' : 'hidden'}`}>
        <h1 className="text-xl font-bold text-blue-400 mb-6 items-center gap-2 hidden md:flex">
          <BookOpen size={24} /> Алгебра 7 класс
        </h1>
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Темы</p>
        {modules.map((m, i) => (
          <button
            key={m.id}
            onClick={() => { 
              setActiveModule(i); 
              setSelectedAnswers({}); 
              setShowResult(false); 
              window.scrollTo(0, 0);
              setIsMobileMenuOpen(false);
            }}
            className={`text-left p-3 rounded-lg transition-colors ${activeModule === i ? 'bg-blue-600 text-white' : 'hover:bg-slate-700 text-slate-300'}`}
          >
            {m.title}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{currentMod.title}</h2>

        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border-l-4 border-blue-500 mb-6 md:mb-8 shadow-lg">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">📖 Правило</h3>
          <p className="text-slate-200 leading-relaxed text-base md:text-lg">{currentMod.rule}</p>
        </div>

        <div className="bg-slate-800 p-4 md:p-6 rounded-xl mb-6 md:mb-8 border border-slate-700">
          <h3 className="text-lg font-semibold text-green-400 mb-3">💡 Разобранный пример</h3>
          <p className="text-base md:text-xl font-mono mb-4 bg-slate-900 p-3 rounded inline-block whitespace-pre-wrap">{currentMod.example.task}</p>
          <ul className="space-y-2 text-slate-300">
            {currentMod.example.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-700 mb-12">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">📝 Проверь себя</h3>
          
          {currentMod.quiz.map((q, qIndex) => (
            <div key={qIndex} className="mb-6">
              <p className="text-base md:text-lg mb-3 text-white font-medium">{qIndex + 1}. {q.question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((opt, oIndex) => {
                  const isSelected = selectedAnswers[qIndex] === oIndex;
                  const isCorrect = q.correct === oIndex;
                  
                  let btnClass = "p-3 rounded-lg border text-left transition-all text-sm md:text-base ";
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
            <button onClick={checkQuiz} className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full">
              Проверить ответы
            </button>
          ) : (
            <div className="mt-6 p-4 bg-slate-900 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4 border border-slate-700">
              <Award size={32} className="text-yellow-400 shrink-0" />
              <div>
                <p className="text-lg md:text-xl font-bold text-white">Твой результат: {calculateScore()} из {currentMod.quiz.length}</p>
                <p className="text-slate-400 text-sm md:text-base">
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