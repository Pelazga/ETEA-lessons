// В этих заданиях НЕЛЬЗЯ использовать встроенные методы

// Задание 1

let A = new Array(15);

for (let i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * (100 - 10) + 10);
};
console.log(A);
for (let i = 0; i < A.length; i++) {
    if (i%2 == 0) {
        A[i] = "*";
    };
};
console.log(A);

// Задание 2

let userArr = new Array();

let userSize  = +prompt("Введите длинну масива", "1");
if (userSize < 0 || isNaN(userSize)){
    do{
        alert("Введено не верное значение!");
        userSize = +prompt("Введите длинну масива", "1");
        
    } while (userSize < 0 || isNaN(userSize));
};
userArr.length = userSize;

console.log(userArr);

let userValue = NaN;
for (let i = 0; i < userArr.length; i++) {
    let currentIndex = i + 1;
    userValue = +prompt("Введите " + currentIndex +"-е значение масива", "1");
    if (userValue < 0 || isNaN(userValue)) {
        do {
            alert("Введено не верное значение!");
            userValue = +prompt("Введите " + currentIndex +"-е значение масива", "1");
        } while (userValue < 0 || isNaN(userValue));
    };
    userArr[i] = userValue;
};

console.log(userArr);


// 3.
// В двумерном массиве A размером 5 на 10. Заполнить случайными числами.
// Найти ряд, где сумма элементов наименьшая
// Найти ряд, где сумма элементов найбольшая
// Вывод на экран:
// Минимальная сумма чисел Summa в массиве c индексом X
// Максимальная сумма чисел Summa в массиве c индексом Y
let A = new Array(10);

for (let i = 0; i < A.length; i++){
    A[i] = new Array(5);
};
// console.log(A);
for (let k = 0; k < A.length; k++) {
    for (let j = 0; j < A[k].length; j++) {
        A[k][j] = Math.floor(Math.random() * (100 - 10) + 10);  
    };
};
// console.log(A);

let ASumm = new Array();

for (let i = 0; i < A.length; i++) {
    ASumm[i] = 0;
    for (let k = 0; k < A[i].length; k++) {
        ASumm[i] += A[i][k];
    };
};
// console.log(ASumm);
let minIndex = 0;
let maxIndex = 0;
let min = ASumm[0];
let max = ASumm[0];
for (let i = 1; i < ASumm.length; i++) {
    if (max < ASumm[i]) {
        max = ASumm[i];
        maxIndex = i;
    }
}
for (let i = 1; i < ASumm.length; i++) {
    
    if (min > ASumm[i]) {
        min = ASumm[i];
        minIndex = i;
    }
}
document.write("Минимальная сумма чисел: " + min + ". В массиве под индексом " + minIndex + "</br> Максимальная сумма чисел: " + max + ". В массиве под индексом " + maxIndex); 


// **********************************************************************
// В этих заданиях МОЖНО использовать встроенные методы

// Задание 4.

let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
let userMonth = prompt("Введите название нового месяца", "Новомесяцабрь");
let userOrder = +prompt("Под каким номером будет месяц?", "5");
if (userOrder > month.length+1 || userOrder < 0 || isNaN(userOrder)){
    do {
        alert("Значение должно быть между 1 и " + (month.length+1));
        userOrder = +prompt("Под каким номером будет месяц?", "5");
    } while (userOrder > month.length+1 || userOrder < 0 || isNaN(userOrder));
}
month.splice(userOrder - 1, 0, userMonth);
let monthList ="<ol>";
for (let i = 0; i < month.length; i++) {
    monthList = monthList + "<li>" + month[i] + "</li>"
};
document.write(monthList + "</ol>");