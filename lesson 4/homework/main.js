// 1. 
// Написать функицию которая вернет сумму переданных фактических аргументов

function calculateSumm() {
    let summ = 0;
    for (let i = 0; i < arguments.length; i++) {
        summ = summ + arguments[i]; 
    }
    return summ
}

console.log(calculateSumm(1, 2, 3, 4, 5));


// 2.
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// Например,
// func("hello vasiliy", ['l', 'a']);
// должна вернуть "heo vsiiy"	

function removeSimbol(string, forbidenSimbols) {
    let arrFromString = string.split("");
    let changedArr = [];
    
    function checkSimbol(ismbol, forbidenSimbols) {
        for (let i = 0; i < forbidenSimbols.length; i++) {
            if (ismbol == forbidenSimbols[i]) {
                return true;
            }
        }
        return false;
    }


    for (let i = 0; i < arrFromString.length; i++) {
        let check = checkSimbol(arrFromString[i], forbidenSimbols);
        if (check == false) {
            changedArr.push(arrFromString[i]);
        }
    }
    let changedString = changedArr.join("");
    return changedString;
}

console.log(removeSimbol("I love reading Books", ["o", "v", "e", "l"]));


// 3. 
// Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции. 
// Функция должна расчитывать результат операции, исходя из переданного ей знака.
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.
function chechNumber(x){
    if (isNaN(x)) {
        do {
            alert("It is not a number. Enter number please.");
            x = +prompt("Enter new operand", "1");
        } while (isNaN(x));
    }
}
function checkOperator(sign) {
    function checkSign(sign) {
        switch (sign) {
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
            case "^":
                return true;  
            default:
                alert("There are no such operation. Use one of: +, -, *, /, %, ^");
                operator = prompt("Enter operator", "2");
        }
        return false;
    };

    if (checkSign(operator) == false) {
        do {
            checkSign(operator);
        } while (checkOperator(operator) == false);
    
    }
}

function calculate(x, y, znak) {
    let result;
    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            if (y !=0) result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x, y);
            break;    
        default:
            break;
    }
    return result;
}

let operand1 = +prompt("Enter 1-st operand", "1");
chechNumber(operand1);

let operand2 = +prompt("Enter 2-nd operand", "2");
chechNumber(operand2);

let operator = prompt("Enter operator", "+");
checkOperator(operator);

console.log(calculate(operand1, operand2, operator));


// 4. 
// Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
function calculateFiban(userFiban) {
    let fib = 0;
    let summ = 1;
    let prevNumb = 0;
    let fiban = userFiban-2;

    if (isNaN(userFiban)) {
        alert("Введена не цыфра!");
        enteredNumber = +prompt("Введите число ,больше 0", "1");
        return -1;
    } else if (userFiban <= 0 ){
        alert("Введеное число не больше 0");
        enteredNumber = +prompt("Введите число ,больше 0", "1");
        return -1;
    } else if (userFiban == 1){
        return 0;
    } else {
        while (fib <= fiban){  
            summ = prevNumb + summ;
            prevNumb = summ - prevNumb; 
            ++fib;  
        }
        return summ;
    }
}

let enteredNumber = +prompt("Введите число ,больше 0", "1");

do {
    calculateFiban(enteredNumber);
} while (calculateFiban(enteredNumber) < 0);
alert("Число фибоначи: " + calculateFiban(enteredNumber));