"use strict";

// Функции и циклы.
// Запуск: node index.js

function section(title) {
  console.log(`\n--- ${title} ---`);
}

section("1. Function Declaration");

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 7));
console.log(sum(10, 20));

section("2. Параметры по умолчанию");

function powerWithOperator(base, exponent = 2) {
  return base ** exponent;
}

console.log(powerWithOperator(5));
console.log(powerWithOperator(5, 3));

section("3. return");

function getMax(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}

console.log(getMax(10, 7));

section("4. Function Expression");

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 4));

section("5. Arrow Function");

const square = value => value ** 2;
console.log(square(6));

section("6. Локальная переменная");

function calculatePrice(price, quantity) {
  const total = price * quantity;
  return total;
}

console.log(calculatePrice(250, 3));

section("7. for");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

section("8. Сумма в цикле");

let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(total);

section("9. while");

let value = 1;

while (value <= 5) {
  console.log(value);
  value++;
}

section("10. do...while");

let attempt = 1;

do {
  console.log(`Попытка ${attempt}`);
  attempt++;
} while (attempt <= 3);

section("11. continue");

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

section("12. break");

for (let i = 1; i <= 100; i++) {
  if (i % 17 === 0) {
    console.log(`Первое число, кратное 17: ${i}`);
    break;
  }
}

section("13. Функция + цикл: сумма диапазона");

function sumRange(from, to) {
  let result = 0;

  for (let current = from; current <= to; current++) {
    result += current;
  }

  return result;
}

console.log(sumRange(1, 5));

section("14. Функция + цикл: степень без **");

function power(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 5));

section("15. Функция + while: факториал");

function factorial(n) {
  let result = 1;
  let current = 2;

  while (current <= n) {
    result *= current;
    current++;
  }

  return result;
}

console.log(factorial(5));
