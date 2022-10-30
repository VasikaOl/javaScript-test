// ==============>  Цикл for  <=====================

// for (ініціалізація; умова; пост - вираз)
// тіло цикла
// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//     }
// console.log(`qeqeqeq`)


// @@@   Pre-increment і Post-increment   @@@
// Не використовувати
// for (let i = 0; i < 5; i ++ або ++i) {
//     console.log(i);
//     }
// console.log(`qeqeqeq`)


// @@@   Задача№1   @@@
// Напиши скрипт котрий підраховує загальну суму зарплат працівників
// Кількість працівників зберігається в змінній employees
// Зарплата кожного працівника це випадкове число від 500 до 5000
// Записати суму в змінну totalSalary і вивести в консоль

// План виконання:
// 1. зробити вари
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;
// 2. перебрати працівників в циклі
// for (let i = 1; i <= employees; i += 1) {
// 3. згенерувати випадкову ЗП
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`ЗП працівника номер ${i} - ${salary}`);
//     // 4. додати до total
//     totalSalary += salary;
// }

// 5. лог
// console.log(`totalSalary: `, totalSalary);

// @@@   Задача№2   @@@
// Напиши скрипт котрий підраховує суму всих парних чисел,
// котрі входять діапазон чисел в змінних від min до max
// Наприклад якщо min=0 і max=5 то діапазон 0-5,
// і в ньому два парних числа 2 і 4, їх сума = 6

// План виконання:
// 1. зробити вари
// const min = 0;
// const max = 10;
// let total = 0;

// 2. for від min до max з кроком 1
// for (let i = min; i <= max; i += 1) {
//     console.log(i);

// 3. перевіряємо залишок від ділення
//     if (i % 2 === 0) {
//         console.log(`парне число: `, i);

//         total += i;
//     }
// }
// 4. пишемо в суму
// console.log(`total: `, total);

// Більш правильне вирішення задачі.
// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log(`непарне число: `, i);
//         continue;
//     }
//     console.log(`парне число: `, i);
//     total += i;
// }
// console.log(`total: `, total);

// @@@   Задача№3   @@@


