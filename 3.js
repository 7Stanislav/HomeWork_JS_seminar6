"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstNumber = +prompt("Введите первое число: ");
const secondNumber = +prompt("Введите второе число: ");
const thirdNumber = +prompt("Введите третье число: ");

function maxNumber(first, second, third) {
    let max = first;
    if (second > max) {
        max = second
    };
    if (third > max) {
        max = third
    };
    return max;
};
console.log(`Максимальное значение среди чисел ${firstNumber}, ${secondNumber},
 ${thirdNumber} равно ${maxNumber(firstNumber, secondNumber, thirdNumber)}`);