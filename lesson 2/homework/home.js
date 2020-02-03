// Задание 1

userLogin = prompt("Ведите логин", "логин");

switch (userLogin){
    case null:
        alert("Вход отменен");
        break;
    case "admin":
        userPass = prompt("Введите пароль", "Пароль");
        switch (userPass) {
            case null:
                alert("Вход отменен");                
                break;
            case "qwerty":
                alert("Привет!");
                break;
            default:
                alert("Пароль не верен"); 
                break;
        };
        break;
    default:
        alert ("Такого пользователя нет.");
        break;
};

// Задание 2

let firstUserNumber = +prompt("Ведите первое число", "1");
let secondUSerNumber = +prompt("Ведите второе число", "2");
let thirdUserNumber = +prompt("Ведите третье число", "3");
// debugger;

if (firstUserNumber == secondUSerNumber || secondUSerNumber == thirdUserNumber || firstUserNumber == thirdUserNumber){
    alert("Ошибка, есть одинаковые числа");
} else {
    alert("Среднее арифметическое равно: " + ( (firstUserNumber + secondUSerNumber + thirdUserNumber) / 3));
};

// Задание 3

let userLength = prompt("Введите число больше нуля", "1");

let fragment = "* ";
let line = fragment;

document.write(fragment + "</br>");
for (let trSide = 2; trSide <= userLength; trSide++) {
    +userLength;
    line = line  + fragment;
    document.write(line + "</br>");    
};

while (trSide <= userLength) {
    +userLength;
    line = line  + fragment;
    document.write(line + "</br>");
    ++trSide;
};

// Задание 4

let userFiban = +prompt("Введите число ,больше 0", "1");
let fib = 0;
let summ = 1;
let prevNumb = 0;
let fiban = userFiban-2;

if (isNaN(userFiban)) {
    alert("Введена не цыфра!");
} else if (userFiban < 0 ){
    alert("Введеное число меньше 0");
} else if (userFiban == 1){
    alert(userFiban + "-е число фибоначи: 0");      
} else {
    while (fib <= fiban){  
        summ = prevNumb + summ;
        prevNumb = summ - prevNumb; 
        ++fib;  
    }
    alert(userFiban + "-е число фибоначи: " + summ);
}

// Задание 5

let userA = +prompt("Введите число", "1");
let userB = +prompt("ВВедите число больше чем предыдущее", "2");
let summ = 0;
let i = userA;
let userOdd = "";
if (userA > userB){
    alert("Первое число должно быть меньше второго");
} else if (isNaN(userA) || isNaN(userB)) {
    alert("Введены не цыфры!")
} else {
    do{
        if (i%2 !== 0){
            userOdd = userOdd + " " + i + "," ;
        }
            summ = summ + i;
            ++i;
    } while ( i <= userB); 
    document.write("Сумма чисел от " + userA + " до " + userB + " равна " + summ + ".</br> Нечетные числа между " + userA + " и " + userB + ":" + userOdd);
};

// Задание 6

let userNumber = +prompt("Ведите число больше чем 1", "2");

if(isNaN(userNumber)){
    alert("Ведена не цыфра");
}
else if (userNumber <1 ){
    alert("Число меньше 1");
} else {
    goToNextNumber: 
    for (let i = 2; i <= userNumber; i++) {
    for (let j = 2; j < i; j++) {
        if (i%j == 0) continue goToNextNumber;
        };
        console.log(i);
    };
};