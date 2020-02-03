//  ИЛИ ищет первый тру и возвращает его, И ищет первый фолз и возвращает его, если искомое не найдено возвращаем правый (последний) операнд.

// let x = null || 2 && 3 || 4 && 0 || 1;
// console.log( x );

// *************************************************************************
// let age = +prompt("Сколько Вам лет?", "0")
// if ( age >= 18 ){
//     console.log("Welcome!")
// };

// *************************************************************************
// let a = 10;
// let b = 12;
// if ((a > 2 && a < 10) || (14 > b >= 6)){
//     console.log("Right");
// } else {
//     console.log("Wrong");
// }

// *************************************************************************
// let price = 10;
// let glass = +prompt("Q-ty of glass", "2");
// let cash = +prompt("Insert coin", "1");

// let summ = price * glass;


// if( cash < summ ){
//     console.log("Not enough coins. Insert " + (summ - cash) + " more.");
// } else if (cash > summ) {
//     console.log("Your change " + (cash - summ));
// } else {
//     console.log ("Thank u for using our service!")
// }

// *************************************************************************

// let season = "1";

// switch(season){
//     case "1":
//         console.log("Winter is comming!");
//         break;
//     case "2":
//         console.log("Oughtem");
//         break;
//     case "3":
//         console.log("Summer");
//         break;
//     case "4":
//         console.log("Spring");
//         break;
//     default:
//         console.log("Not a season!");
// };

// *************************************************************************
// let a = 10,
//     b = 12;
// let result = (a > b) ? "yes" : "no";

// console.log(result);
// Вариант с ЕЛс иф
// if (a > b){
//     console.log("yes");
// } else {
//     console.log("no");
// };

// *************************************************************************
// циклы 
// *************************************************************************
// While

// let a = 0;
// while(a < 10){
//     debugger;
//     document.write(a + "<br>");
//     a = a + 1;
// };
// document.write("Ufter while");

// *************************************************************************
// let counter = 0;
// while (counter < 4){
//     counter = counter + 1
//     console.log(counter);
//     // break;
//     // continue;
//     console.log("This line would be done");
// };
// console.log("Code ufter while");    

// *************************************************************************
// Инкримент и декримент ++ и --

// let count = 10;
// number = count++;
// console.log(number);

// let count = 10;
// number = ++count;
// console.log(number);

// let count = 5;
// count = 5 + ++count;
// console.log(count);

// let count = 5;
// count = 5 + count++;
// console.log(count);

// let i = 0;

// while ( i <= 60){
//     if (i % 2 == 1){ 
//         console.log(i);
//     };
//     i++;
// };

// *************************************************************************
// DO WHILE


// let input;

// do {
//     input = prompt("Type something");
//     console.log(input);
// } while (input !== null);

// *************************************************************************
// FOR


//--------------------------------------------------------------------------
// let a = +prompt("Enter firs number");
// let b = +prompt("Enter second number");
// let c = +prompt("Enter third number");
// let max = 0;

// if (a > b && a > c){
//     max = a;
// } else if ( b > c) {
//     max = b;
// } els;
// console.log(max + "")
//--------------------------------------------------------------------------

// let a = 5;
// let b = 3;
// let result = 1;
// for (let i = 0; i < 3; i++){
//     result *= a;
// }
// console.log(result);

// let a = +prompt("Factorial of a number. Enter a number", "6");
// let result = 1;
// for (let i = 1; i <= a; i++){
//     result *= i;
// };
// alert(result);


// let a = +prompt("enter number", "1");
// let b = +prompt("enter bigger number", "2");
// if (a > b){
//     alert("Wrong combination!");
// } else {
//     for (let i = a; i < b; i++){
//         // debugger;
//         if (i%2 == 0){
//             console.log(i* i);
//         };
//     };
// }
document.write("<>");
for(let i = 1; i <= 9; i++){
    document.write("<tr>");
    for (let j = 1; j <= 9; j++){
        document.write(j + " * " + i + " = " + i*j + "<br>")
    }
    document.write("</tr>");
}
document.write("</table>");
