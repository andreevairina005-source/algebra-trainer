import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Award, Menu, X } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "§ 1. Числовые выражения",
    rule: "Числовые выражения составляются из чисел с помощью знаков действий и скобок. Число, которое получается в результате выполнения действий в числовом выражении, называют значением выражения. Если в выражении встречается деление на нуль, то это выражение не имеет значения (не имеет смысла).",
    example: {
      task: "Найдите значение выражения: 85 - 3 · 4²",
      steps: ["1) Сначала выполняем возведение в степень: 4² = 16", "2) Затем умножение: 3 · 16 = 48", "3) И вычитание: 85 - 48 = 37"]
    },
    quiz: [
           { question: "Найдите значение выражения: 120 - 2 · 5²", options: ["70", "50", "100", "80"], correct: 0 },
      { question: "Какое выражение не имеет смысла?", options: ["15 : (2 + 3)", "8 : 0", "0 · 45", "10 - 2"], correct: 1 },
      { question: "Найдите значение выражения: 85 - 3 · 4²", options: ["37", "49", "13", "85"], correct: 0 },
      { question: "Вычислите: (15 - 7) · 2 + 10", options: ["26", "16", "20", "36"], correct: 0 },
      { question: "Найдите значение выражения: 48 : 6 + 2³", options: ["16", "14", "24", "10"], correct: 0 },
      { question: "Найдите значение выражения: 5 · (7,4 - 6,1)", options: ["6,5", "5,5", "7,5", "6,1"], correct: 0 },
      { question: "Вычислите: 96 - 2 · 6²", options: ["24", "48", "84", "12"], correct: 0 },
      { question: "Найдите значение выражения: (10 - 2,7) : 5", options: ["1,46", "1,6", "14,6", "0,146"], correct: 0 },
      { question: "Какое выражение не имеет смысла?", options: ["12 : (6 - 6)", "12 : (6 + 6)", "12 · (6 - 6)", "12 - (6 - 6)"], correct: 0 },
            { question: "Вычислите: (3² + 4²) : 5", options: ["5", "25", "7", "1"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "§ 2. Выражения с переменными",
    rule: "Букву в выражении называют переменной, а само выражение — выражением с переменной. Если в выражение с переменными подставить вместо каждой переменной какое-либо ее значение, то получится числовое выражение.",
    example: {
      task: "Автомобиль за t часов проедет 70t км. Найдите путь при t = 4.",
      steps: ["1) Подставляем t = 4: 70 · 4", "2) Умножение: 280", "3) Значение равно 280 (км)"]
    },
    quiz: [
      { question: "Найдите 5x - 2, если x = 10", options: ["50", "48", "52", "40"], correct: 1 },
      { question: "При каком y выражение 12 / y не имеет смысла?", options: ["y = 1", "y = 2", "y = 0", "y = 12"], correct: 2 }
    ]
  },
  {
    id: 3,
    title: "§ 3. Сравнение значений выражений",
    rule: "Для любых двух числовых выражений можно установить, равны их значения или нет, и если они не равны, то какое из них больше и какое меньше.",
    example: {
      task: "Сравним производительность: 2400 книг за 3 дня и 3500 книг за 5 дней.",
      steps: ["1) 2400 : 3 = 800", "2) 3500 : 5 = 700", "3) 800 > 700."]
    },
    quiz: [
      { question: "Сравните 15 : 3 и 20 : 4", options: ["15 : 3 > 20 : 4", "15 : 3 < 20 : 4", "15 : 3 = 20 : 4"], correct: 2 },
      { question: "Верно ли 2x < x + 5 при x = 3?", options: ["Да", "Нет"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "§ 4. Тождества",
    rule: "Равенство, верное при любых значениях переменных, называется тождеством. Тождествами считают и верные числовые равенства.",
    example: {
      task: "Является ли тождеством 5(a + b) = 5a + 5b?",
      steps: ["1) a = 2, b = 3: 5(2 + 3) = 25", "2) 5·2 + 5·3 = 25", "3) Совпало. Это тождество."]
    },
    quiz: [
      { question: "Какое равенство является тождеством?", options: ["2x = x + x", "x^2 = x", "3 + x = 5", "a - b = b - a"], correct: 0 },
      { question: "a + (-a) = 0 — это тождество?", options: ["Да", "Нет"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "§ 5. Тождественные преобразования",
    rule: "Замену одного выражения другим, тождественно равным ему, называют тождественным преобразованием.",
    example: {
      task: "Упростим 7y + 3y - 5y.",
      steps: ["1) (7 + 3 - 5)y", "2) 5y."]
    },
    quiz: [
      { question: "Упростите: 8x + 2x - 4x", options: ["6x", "14x", "10x", "4x"], correct: 0 },
      { question: "Раскройте: 3a - (b + 2a)", options: ["3a - b - 2a", "3a - b + 2a", "3a + b - 2a", "3a + b + 2a"], correct: 0 }
    ]
  },
  {
    id: 6,
    title: "§ 6. Уравнение и его корни",
    rule: "Корнем уравнения называется значение переменной, при котором уравнение обращается в верное равенство.",
    example: {
      task: "Является ли 10 корнем 5x - 12 = 2x + 18?",
      steps: ["1) 5·10 - 12 = 38", "2) 2·10 + 18 = 38", "3) 38 = 38. Да."]
    },
    quiz: [
      { question: "Является ли 4 корнем 3x - 5 = 7?", options: ["Да", "Нет"], correct: 0 },
      { question: "Корень x^2 = 16?", options: ["Только 4", "Только -4", "И 4, и -4", "Ни одно"], correct: 2 }
    ]
  },
  {
    id: 7,
    title: "§ 7. Линейное уравнение",
    rule: "Уравнение вида ax = b. При a ≠ 0 один корень. При a = 0 и b ≠ 0 нет корней.",
    example: {
      task: "Решим 3(x + 5) = 2 - x.",
      steps: ["1) 3x + 15 = 2 - x", "2) 4x = -13", "3) x = -3,25"]
    },
    quiz: [
      { question: "Решите: 2x + 6 = 0", options: ["x = 3", "x = -3", "x = 0", "x = 12"], correct: 1 },
      { question: "Имеет ли корни 0x = 5?", options: ["Один", "Много", "Нет корней"], correct: 2 }
    ]
  },
  {
    id: 8,
    title: "§ 8. Решение задач с помощью уравнений",
    rule: "Обозначают неизвестное буквой, составляют уравнение и решают его.",
    example: {
      task: "Брат в 4 раза старше. Через 6 лет в 2 раза. Сколько лет сестре?",
      steps: ["1) 4x + 6 = 2(x + 6)", "2) 2x = 6", "3) x = 3."]
    },
    quiz: [
      { question: "Задумали число, умножили на 5, прибавили 12. Получили 37. Какое?", options: ["5", "10", "7", "15"], correct: 0 },
      { question: "3 карандаша дороже ручки на 5р. Ручка 25р. Карандаш?", options: ["5", "10", "15", "20"], correct: 1 }
    ]
  },
  {
    id: 9,
    title: "§ 9. Что такое функция",
    rule: "Зависимость одной переменной от другой называют функцией. Независимая — аргумент.",
    example: {
      task: "Периметр квадрата P = 4a.",
      steps: ["1) a — аргумент, P — функция.", "2) a = 3 => P = 12."]
    },
    quiz: [
      { question: "В y = 5x - 2 аргумент?", options: ["x", "y", "5", "-2"], correct: 0 },
      { question: "y = x² при x = 4?", options: ["8", "16", "4", "2"], correct: 1 }
    ]
  },
  {
    id: 10,
    title: "§ 10. Вычисление значений функции",
    rule: "Формула позволяет находить значение функции для любого аргумента.",
    example: {
      task: "y = 3x - 7 при x = -2.",
      steps: ["1) y = 3(-2) - 7", "2) y = -13."]
    },
    quiz: [
      { question: "y = 4x + 1 при x = 2", options: ["9", "8", "5", "6"], correct: 0 },
      { question: "y = 2x равно 10 при x?", options: ["20", "8", "5", "12"], correct: 2 }
    ]
  },
  {
    id: 11,
    title: "§ 11. График функции",
    rule: "Множество точек координатной плоскости.",
    example: {
      task: "График y = 2x - 3.",
      steps: ["1) x=-1, y=-5", "2) x=0, y=-3", "3) Прямая."]
    },
    quiz: [
      { question: "A(2; 5) на графике y = x + 3?", options: ["Да", "Нет"], correct: 0 },
      { question: "График y = kx + b?", options: ["Окружность", "Прямая", "Парабола", "Кривая"], correct: 1 }
    ]
  },
  {
    id: 12,
    title: "§ 12. Линейная функция",
    rule: "y = kx + b. График — прямая.",
    example: {
      task: "y = 2x + 1.",
      steps: ["1) x=0, y=1", "2) x=2, y=5"]
    },
    quiz: [
      { question: "y = 4x - 7 линейная?", options: ["Да", "Нет"], correct: 0 },
      { question: "k в y = -3x + 2?", options: ["2", "-3", "3", "-2"], correct: 1 }
    ]
  },
  {
    id: 13,
    title: "§ 13. Прямая пропорциональность",
    rule: "y = kx. График — прямая через (0;0).",
    example: {
      task: "y = 3x.",
      steps: ["1) (0;0)", "2) x=1, y=3"]
    },
    quiz: [
      { question: "Прямая пропорциональность?", options: ["y = 2x + 3", "y = -5x", "y = x^2", "y = 4"], correct: 1 },
      { question: "Четверти y = 2x?", options: ["1-я", "1 и 3", "2 и 4", "2-я"], correct: 1 }
    ]
  },
  {
    id: 14,
    title: "§ 14. Взаимное расположение графиков",
    rule: "Пересекаются при k1 ≠ k2. Параллельны при k1 = k2, b1 ≠ b2.",
    example: {
      task: "y = 3x + 2 и y = 3x - 5.",
      steps: ["1) k=3", "2) Параллельны."]
    },
    quiz: [
      { question: "Пересекаются y = 4x + 1 и y = -2x + 3?", options: ["Да", "Нет"], correct: 0 },
      { question: "k для параллельности с y = 7x - 2?", options: ["5", "-2", "7", "0"], correct: 2 }
    ]
  },
  {
    id: 15,
    title: "§ 15. Определение степени",
    rule: "a^n — произведение n множителей.",
    example: {
      task: "2³ и (-3)².",
      steps: ["1) 8", "2) 9"]
    },
    quiz: [
      { question: "4³?", options: ["12", "64", "16", "32"], correct: 1 },
      { question: "(-5)⁴?", options: ["Положительное", "Отрицательное"], correct: 0 }
    ]
  },
  {
    id: 16,
    title: "§ 16. Умножение и деление степеней",
    rule: "a^m · a^n = a^(m+n). a^m : a^n = a^(m-n).",
    example: {
      task: "x⁵ · x³ и y⁷ : y².",
      steps: ["1) x⁸", "2) y⁵"]
    },
    quiz: [
      { question: "a⁴ · a⁶?", options: ["a^24", "a^10", "a^2", "2a^10"], correct: 1 },
      { question: "c⁹ : c³?", options: ["c^3", "c^12", "c^6", "c^27"], correct: 2 }
    ]
  },
  {
    id: 17,
    title: "§ 17. Возведение в степень",
    rule: "(ab)^n = a^n b^n. (a^m)^n = a^(mn).",
    example: {
      task: "(2x)³ и (y⁴)².",
      steps: ["1) 8x³", "2) y⁸"]
    },
    quiz: [
      { question: "(3a)²?", options: ["3a^2", "9a^2", "6a^2", "9a"], correct: 1 },
      { question: "(x³)⁵?", options: ["x^8", "x^15", "x^2", "x^125"], correct: 1 }
    ]
  },
  {
    id: 18,
    title: "§ 18. Одночлен",
    rule: "Один числовой множитель и степени переменных.",
    example: {
      task: "4x²y · 3xy³.",
      steps: ["1) 12x³y⁴"]
    },
    quiz: [
      { question: "Коэффициент -7a²b?", options: ["7", "-7", "2", "1"], correct: 1 },
      { question: "2a · 5b?", options: ["10ab", "7ab", "10a+b", "25ab"], correct: 0 }
    ]
  },
  {
    id: 19,
    title: "§ 19. Умножение одночленов",
    rule: "Перемножают коэффициенты и степени.",
    example: {
      task: "(-3a²b) · (2ab³).",
      steps: ["1) -6a³b⁴"]
    },
    quiz: [
      { question: "4x² · 3x³?", options: ["7x^5", "12x^6", "12x^5", "12x"], correct: 2 },
      { question: "(2y³)²?", options: ["4y^6", "2y^6", "4y^5", "4y^9"], correct: 0 }
    ]
  },
  {
    id: 20,
    title: "§ 20. Функции y = x² и y = x³",
    rule: "y = x² — парабола, y = x³ — кубическая парабола.",
    example: {
      task: "y = x² при x = -3, 0, 2.",
      steps: ["1) 9", "2) 0", "3) 4"]
    },
    quiz: [
      { question: "y = x² при x = 5?", options: ["10", "25", "125", "5"], correct: 1 },
      { question: "Четверти y = x³?", options: ["1", "1 и 2", "1 и 3", "2 и 4"], correct: 2 }
    ]
  },
  {
    id: 21,
    title: "§ 21. Многочлен",
    rule: "Сумма одночленов.",
    example: {
      task: "4x² - 3x + 2x² - 5.",
      steps: ["1) 6x² - 3x - 5."]
    },
    quiz: [
      { question: "5a + 3b - 2a + b?", options: ["3a + 4b", "7a + 4b", "3a + 2b", "7a + 2b"], correct: 0 },
      { question: "Степень 3x²y - 4xy + 7?", options: ["1", "2", "3", "4"], correct: 2 }
    ]
  },
  {
    id: 22,
    title: "§ 22. Сложение и вычитание многочленов",
    rule: "Раскрытие скобок и приведение подобных.",
    example: {
      task: "(5x - 2y) - (3x + y).",
      steps: ["1) 5x - 2y - 3x - y", "2) 2x - 3y."]
    },
    quiz: [
      { question: "(2a + 5) + (3a - 2)?", options: ["5a + 3", "5a - 3", "a + 3", "6a + 10"], correct: 0 },
      { question: "(4x + 1) - (2x + 3)?", options: ["2x + 4", "2x - 2", "6x + 4", "2x + 2"], correct: 1 }
    ]
  },
  {
    id: 23,
    title: "§ 23. Умножение одночлена на многочлен",
    rule: "Умножить на каждый член.",
    example: {
      task: "3x(2x - 5).",
      steps: ["1) 6x² - 15x."]
    },
    quiz: [
      { question: "2a(3a - 4)?", options: ["6a² - 8a", "6a - 8a", "6a² - 4", "5a² - 8a"], correct: 0 },
      { question: "-3y(y + 2)?", options: ["-3y² - 6y", "-3y² + 6y", "3y² - 6y", "-3y - 6y"], correct: 0 }
    ]
  },
  {
    id: 24,
    title: "§ 24. Квадрат суммы и разности",
    rule: "(a ± b)² = a² ± 2ab + b².",
    example: {
      task: "(3x + 4)².",
      steps: ["1) 9x² + 24x + 16."]
    },
    quiz: [
      { question: "(x + 3)²?", options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² - 6x + 9"], correct: 1 },
      { question: "(y - 4)²?", options: ["y² - 16", "y² - 8y + 16", "y² + 8y + 16", "y² - 4y + 16"], correct: 1 }
    ]
  },
  {
    id: 25,
    title: "§ 25. Разность квадратов",
    rule: "(a - b)(a + b) = a² - b².",
    example: {
      task: "(4x - 3y)(4x + 3y).",
      steps: ["1) 16x² - 9y²."]
    },
    quiz: [
      { question: "(x - 5)(x + 5)?", options: ["x² - 25", "x² + 25", "x² - 10x + 25", "x² - 5"], correct: 0 },
      { question: "9a² - 16b²?", options: ["(3a - 4b)²", "(3a - 16b)(3a + 16b)", "(3a - 4b)(3a + 4b)", "(9a - 16b)(9a + 16b)"], correct: 2 }
    ]
  },
  {
    id: 26,
    title: "§ 26. Сумма и разность кубов",
    rule: "a³ ± b³ = (a ± b)(a² ∓ ab + b²).",
    example: {
      task: "8x³ + 27.",
      steps: ["1) (2x + 3)(4x² - 6x + 9)."]
    },
    quiz: [
      { question: "x³ - 8?", options: ["(x - 2)(x² + 4x + 4)", "(x - 2)(x² + 2x + 4)", "(x - 2)³", "(x + 2)(x² - 2x + 4)"], correct: 1 },
      { question: "(a + b)(a² - ab + b²)?", options: ["a³ + b³", "a³ - b³", "a² + b²", "a² - b²"], correct: 0 }
    ]
  },
  {
    id: 27,
    title: "§ 27. Преобразование целых выражений",
    rule: "Представление в виде многочлена.",
    example: {
      task: "(x + 2)² - (x - 3)(x + 1).",
      steps: ["1) 6x + 7."]
    },
    quiz: [
      { question: "(a - 3)(a + 3) + a(a - 2)?", options: ["2a² - 2a - 9", "2a² + 2a - 9", "a² - 2a - 9", "2a² - 2a + 9"], correct: 0 },
      { question: "5x² - 3x + 1 целое?", options: ["Да", "Нет"], correct: 0 }
    ]
  },
  {
    id: 28,
    title: "§ 28. Разложение на множители",
    rule: "Вынесение, группировка, формулы.",
    example: {
      task: "2x³ - 8x.",
      steps: ["1) 2x(x - 2)(x + 2)."]
    },
    quiz: [
      { question: "3a² - 12?", options: ["3(a² - 4)", "3(a - 2)(a + 2)", "(3a - 2)(a + 6)", "3(a - 4)(a + 4)"], correct: 1 },
      { question: "Что НЕ применяется?", options: ["Вынесение", "Группировка", "Формулы", "Возведение в квадрат"], correct: 3 }
    ]
  },
  {
    id: 29,
    title: "§ 29. Доказательство тождеств",
    rule: "Преобразование одной части в другую.",
    example: {
      task: "(x - 5)(x + 2) = x² - 3x - 10.",
      steps: ["1) x² - 3x - 10. Совпало."]
    },
    quiz: [
      { question: "Метод доказательства?", options: ["Тождественные преобразования", "График", "Уравнения", "Калькулятор"], correct: 0 },
      { question: "2(x + 3) = 2x + 6 — тождество?", options: ["Да", "Нет"], correct: 0 }
    ]
  },
  {
    id: 30,
    title: "§ 30. Линейное уравнение с двумя переменными",
    rule: "ax + by = c.",
    example: {
      task: "3x + 2y = 12.",
      steps: ["1) (2; 3), (0; 6)."]
    },
    quiz: [
      { question: "(1; 2) для x + y = 3?", options: ["Да", "Нет"], correct: 0 },
      { question: "Линейное с двумя?", options: ["x² + y = 5", "5x - 3y = 8", "xy = 10", "x/y = 2"], correct: 1 }
    ]
  },
  {
    id: 31,
    title: "§ 31. График линейного уравнения",
    rule: "Прямая.",
    example: {
      task: "x - y = 3.",
      steps: ["1) y = x - 3."]
    },
    quiz: [
      { question: "2x + y = 4?", options: ["Окружность", "Парабола", "Прямая", "Кривая"], correct: 2 },
      { question: "(3; 0) для x - y = 3?", options: ["Да", "Нет"], correct: 0 }
    ]
  },
  {
    id: 32,
    title: "§ 32. Системы линейных уравнений",
    rule: "Пара, удовлетворяющая обоим уравнениям.",
    example: {
      task: "x + y = 5, x - y = 1.",
      steps: ["1) (3; 2)."]
    },
    quiz: [
      { question: "(2; 1) для {x+y=3, x-y=1}?", options: ["Да", "Нет"], correct: 0 },
      { question: "Сколько решений?", options: ["Одно", "Два", "Одно, много или ни одного", "Всегда много"], correct: 2 }
    ]
  },
  {
    id: 33,
    title: "§ 33. Способ подстановки",
    rule: "Выразить и подставить.",
    example: {
      task: "x + y = 7, 2x - y = 2.",
      steps: ["1) y = 7 - x", "2) (3; 4)."]
    },
    quiz: [
      { question: "y = x + 2, x + y = 8?", options: ["(3; 5)", "(5; 3)", "(2; 6)", "(4; 4)"], correct: 0 },
      { question: "y из 3x + y = 10?", options: ["y = 10 + 3x", "y = 10 - 3x", "y = 3x - 10", "y = -10 - 3x"], correct: 1 }
    ]
  },
  {
    id: 34,
    title: "§ 34. Способ сложения",
    rule: "Сложение для исключения.",
    example: {
      task: "2x + y = 9, x - y = 3.",
      steps: ["1) 3x = 12", "2) (4; 1)."]
    },
    quiz: [
      { question: "5x + y = 10 и 5x - y = 2?", options: ["Подстановка", "Сложение", "График"], correct: 1 },
      { question: "x + y = 6, x - y = 2?", options: ["(2; 4)", "(4; 2)", "(3; 3)", "(5; 1)"], correct: 1 }
    ]
  },
  {
    id: 35,
    title: "§ 35. Решение задач с помощью систем",
    rule: "Два уравнения.",
    example: {
      task: "Сумма 15, разность 5.",
      steps: ["1) x = 10, y = 5."]
    },
    quiz: [
      { question: "2 карандаша и ручка 30, 1 и 1 - 20. Карандаш?", options: ["5", "10", "15", "20"], correct: 1 },
      { question: "По течению 10, против 6. Лодка?", options: ["8", "4", "2", "16"], correct: 0 }
    ]
  },
  {
    id: 36,
    title: "§ 36. Повторение и обобщение",
    rule: "Основные темы курса.",
    example: {
      task: "(x + 3)² - x(2x + 5) при x = 2.",
      steps: ["1) 7."]
    },
    quiz: [
      { question: "2x³ при x = -2?", options: ["-16", "16", "-8", "8"], correct: 0 },
      { question: "5x - 15 = 0?", options: ["x = -3", "x = 3", "x = 0", "x = 5"], correct: 1 }
    ]
  },
  {
    id: 37,
    title: "🏆 Итоговый тест по курсу",
    rule: "Проверьте свои знания по всему курсу.",
    example: {
      task: "Памятка.",
      steps: ["1) Читайте", "2) Вспоминайте", "3) Вычисляйте"]
    },
    quiz: [
      { question: "3x - 5 при x = 4?", options: ["7", "12", "5", "17"], correct: 0 },
      { question: "a³ · a⁵?", options: ["a^15", "a^8", "2a^8", "a^2"], correct: 1 },
      { question: "x² - 9?", options: ["(x - 3)²", "(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x + 3)²"], correct: 1 },
      { question: "x + y = 10, x - y = 2?", options: ["(4; 6)", "(6; 4)", "(8; 2)", "(5; 5)"], correct: 1 }
    ]
  }
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