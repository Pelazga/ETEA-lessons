// let age = 18;
// function fooAge (){
//     if (age > 18 && age < 60) console.log("Входите");
//     else if (age > 60) console.log("Пора на пенсию");
//     else console.log("Еще рано");   
// };

// console.log(fooAge());
// console.log(fooAge);

// function max(x,y) {
//     if (x > y ) return x;
//     return y;
// }

// function fillRandomNumbers(num, max, min) {
//     let arr = new Array(num);
//     for (let i = 0; i < num; i++) {
//         arr[i] = Math.floor(Math.random() * (max - min) + min)
//     }
//     return arr;
// }
// console.log(fillRandomNumbers(30, 100, -100));
// console.log(fillRandomNumbers(3, 100, 0));

// function foo (x) {
//     console.log(x);
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// foo (1, 2, 3, 4 );

// let mass = [1, 2, 3, 4];
// let mass2 = [5, 2, 3, 4];

// console.log(maxMass(mass, mass2));

// function maxMass(arguments) {
//     let max = 0;
//     let maxIndex;
//     for (let i = 0; i < arguments.length; i++) {
//         let summ = 0;
//         for (let k = 0; k < arguments[i].length; k++) {
//             summ += arguments[i][k]
//         }
//         if (summ > max){
//             max = summ;
//             maxIndex = arguments[i];
//         }
//     }
//     return maxIndex;
// }


// let name = (x, y, z) =>  x * y - z;




// function myMath(x, znak, y) {
//     let result;
//     switch (znak) {
//         case "+":
//             result = x + y;
//             break;
//         case "-":
//             result = x - y;
//             break;
//         case "*":
//             result = x * y;
//             break;
//         case "/":
//             if (y !=0) result = x / y;
//             break;
//         case "%":
//             result = x % y;
//             break;
//         case "^":
//             result = Math.pow(x, y);
//             break;    
//         default:
//             break;
//     }
//     return result;
// }


// let firstNum = +prompt("Enter first number", "1");
// let operation = prompt("Enter operation +, -, *,  /, %, ^", "+");
// let secondNum = +prompt("Enter second number", "2");
// alert(myMath(firstNum, operation ,secondNum));


// arr = [];
// for{
//     идем по аргументс
//     for{
//         по массиву
//         if{
//             парный или нет
//             для не парных делим длинну и округляем вниз
//             для не парных делим напополам и берем выбранный элемент и предыдущий
//         }
//     }
// }