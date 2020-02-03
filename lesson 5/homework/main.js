// 1.
// Напишите функцию filterArray, которая принимает callback функцию и массив. 
// Возвращает массив значений, для которых callback вернет true.
// let  input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 != 0; }
// console.log(filterArray(input, isEven)); // [2, 4, 6]

let  input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 != 0; }

function filterArray(arr, foo) {
    // debugger;
    let newArr = [];
    arr.forEach(function (item) {
        if (foo(item)){ 
        } else {
            newArr.push(item);
        }
    });
    return newArr;
}

console.log(filterArray(input, isEven)); // [2, 4, 6]




// 2.
// Вывести в консоль последовательность чисел в обратном порядке, 
// используя рекурсивный вызов функиции
// row (6) // 6 5 4 3 2 1 

function row(number) {
    let i = number;
    console.log(i);
    --number;
    if (i > 1) {
        row(number)
    }
}
row(6);




// 3.
// Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!
// Предусмотреть return 'error' в случае если функция вызывается с числом меньше нуля включительно

let result = 1;
function factorial(n){
    // debugger;
    if (n > 1){
        let i = n;
        --n;
        result = i * factorial(n)
        return result;
    } else if (n == 1){
        return n;
    } else if ( n<= 0) {
        return 'error'
    }
}
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(5));

// 4.
// Сделайте функцию inArray('hello', ['helloo', hello', 'hihi']), которая определяет, 
// есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором ищем. 
// Функция должна вернуть true или false. 


function inArray (string, arr){
    // debugger;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            return inArray(string, arr[i]);
        } else {
            if (arr[i] == string) {
               return true; 
            } else {
                continue;
            }
        }
    }
}
console.log(inArray('hello', ['helloo', ['helloo', 'hello', 'hihi'], 'hihi']));
