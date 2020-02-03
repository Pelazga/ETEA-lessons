// let nim = 10;
// alert (nim);

// let name = prompt("Enter your name", "Pidor");
// alert("Hello " + name + "!" );

// let dish = confirm("Вы сегодня обедали?");
// console.log(dish);\

// let userNumber = +prompt("Enter yor number", "10");
// let defNumber = 10;
// console.log(userNumber + defNumber - 20);

// let x = 20;
// let y = 40;
// let z = x + y;
// let k = "2";
// let result = z + +k;
// console.log(result);

// let r = +prompt("Enter radius", "10");
// let h = +prompt("Enter height", "10");
// let V = 3.14*(r*r)*h;
// alert("V of celinder " + V);

let userSumm = +prompt("How much money do you want?", "100");
let userMonth = +prompt("For how maeny nonth?", "5");
let percent = 20;
result = userMonth / 12 * percent / 100 * userSumm;
total = result + userSumm
document.write("<table><tr><td>Переплата</td><td>" + result + "</td></tr><tr><td></td><td>" + total + "</td></tr></table>");