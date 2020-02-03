// Задание 1

let userDays = +prompt("Укажите колличество дней:", "3");
alert("В " + userDays + " днях " + (userDays * 24 * 60 * 60) + " секунд");

// Задание 2

let userNumber = +prompt("Укадите Ваше число", "3");
console.log("Квадрат " + userNumber + " равняется " + (userNumber*userNumber));

// задание 3

let x = 4,
    y = 20,
    z = 38,
    k = 518
let averege = (x + y + z + k) / 4;
document.write("<p>Среднее арифметическое с чисел 4, 20, 38 и 518 будет " + averege + "</p>");

// задане 4 

let katetA = +prompt("Укажите длинну первого катета", "3");
let katetB = +prompt("Укажите длинну второго катета", "4");
let userSquare = katetA * katetB / 2;
let userPer = katetA + katetB + Math.round(Math.sqrt(katetA * katetA + katetB * katetB ));
console.log("**********");
console.log("Площадь прямоугольного треугольника со сторонами " + katetA + " и " + katetB + " равна " + userSquare);
console.log("**********");
console.log("Периметр прямоугольного треугольника  " + userPer);
console.log("**********");