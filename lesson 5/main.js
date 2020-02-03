// function foo(){
//     return "string";
// }

// function fooMain(x){
//     console.log(x, "x");
// }
// fooMain(foo());
// fooMain(foo);

// function foo2(){
//     return 10;
// }
// function foo2Main(userfunc){
//     let num = 5;
//     return num + userfunc();
// }
// console.log(foo2Main(foo2));


// Callback aфункция - єто функция которая передается как параметр.

// function foo(a) {
//     let number
// }

// function fooMain(fooParam) {
//     fooParam();
// }


// До этого разберали функции,Ю параметры которой квазана в внутри функции (функция которую вызываем внутри функции). Теперь попробуем по-другому.

// function fooMain(x) {
//     console.log("1");
//     fooMain();
// }
// function foo (a, b) {
//     console.log(A+B);    
// }
// fooMain(function() {
//     return foo(10, 100);
// }

// function div(a, b) {
//         return a/b;
// }
// function summ(a, b) {
//         return a/b;
// }
// function calculate (x, y,, func) {
//     func(x, y);    
// }

// let result = calcukate(3,4, div);
// console.log(result);



// let x = [1, 2, 3, 4, 5, 6];

// function add(x) {
//     return x * 10;
// }

// function copyArr(ar, func) {
//     let newArr = [];
//     for (let i = 0; i < ar.length; i++) {
//         newArr.push(func(ar[i]));
//     }
//     return newArr;
// }

// let result = copyArr(x);
// console.log(result);



// function foo() {
//     foo();
// }
// foo();

// function summ(i) {
//     if (i < 10) {
//         console.log(i);
//         i++;
//         summ(i);
//     }
// }
// summ(0);



// let array = [1, 2, 3, 4];
// debugger;
// function summArr (arr) {
//     if (arr.length == 1) {
//         return arr[0];
//     } else {
//         return arr.pop() + summArr(arr);
//     }
// }

// console.log(summArr(array));



// function summ(i) {
//     if (i== 0) {
//         return 0;
//     } else {
//         return i + summ(i-1);
//     }
// }

// console.log(summ(3));






// let arr = [1, 2, 3, [1, 2, 3, [56, 123, [123, 132]]]];
// let summ = 0;
// function arraySumm (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "object") {
//             arraySumm(array[i]);
//         } else {
//             summ += array[i];
//         }
//     }
//     return summ;
// }
// console.log(arraySumm(arr));



// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.slice(1, -1);

// console.log(newArr);

// arr.forEach(function (item, index, mass) {
//     console.log(item);
//     console.log(index, "index");
//     console.log(mass);
// });


