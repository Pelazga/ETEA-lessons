// Объект МАTH

// let x = 20.4;
// let y = 20.5;

// console.log(Math.round(x), "x");
// console.log(Math.round(y), "y");

// console.log(Math.ceil(x), "x");
// console.log(Math.ceil(y), "y");

// console.log(Math.floor(x), "x");
// console.log(Math.floor(y), "y");

// console.log(Math.random());
// console.log(Math.random());

// let min = 10;
// let max = 100;

// let result = Math.floor(Math.random() * (max - min) + min);

// console.log(result);

// let name = "Sergey";
// let userDasha = ["Даша", 18, "test@gmail.com"];

// console.log(name);
// console.log(userDasha);
// console.log(userDasha[1]);

// userDasha[3] = false;
// console.log(userDasha);
// userDasha[3] = true;
// console.log(userDasha);

// console.log(userDasha.length, "Длинна масива Даша");
// console.log(userDasha[userDasha.length]);

// console.log(userDasha[userDasha.length - 1], "bool");

// userDasha[userDasha.length] = "available";
// console.log(userDasha);
// userDasha[userDasha.length] = "available not";
// console.log(userDasha);

// userDasha[20] = 100;
// console.log(userDasha);

// userDasha.length = 2;
// console.log(userDasha);

// let r1 = new Array();
// let r2 = new Array(1, 2, 3, 4);
// let r3 = new Array(10);

// console.log(r1);
// console.log(r2);
// console.log(r3);

// let mass = [1, 2, 3, 4];
// let array = mass;

// mass[mass.length] = 5;

// console.log(mass);
// console.log(array);

// let users = ["Pasha", "Masha", "Dasha", "Tanya"];

// document.write("<ul>");
// for (let i = 0; i < users.length; i++) {
//     document.write("<li>" + users[i] + "</li>");
    
// };
// document.write("</ul>");

// let users = ["Pasha", "Masha", "Dasha", "Tanya"];
// let userlist = "";

// document.write("<ul>");
// for (let i = 0; i < users.length; i++) {
//     result += "<li>" + users[i] + "</li>";
    
// };
// document.write("<ul>" + result + "</ul>");

// let users = ["Pasha", "Masha", "Dasha", "Tanya"];
// let userlist = "";

// for (let i = users.length - 1; i >= 0; i--) {
//     userlist += "<li>" + i + "-" + users[i] + "</li>";  
// };
// document.write("<ul>" + userlist + "</ul>");

// let mass = new Array (30);

// console.log(mass);

// let randomArray = new Array (30);

// for (let i = 0; i < randomArray.length; i++) {
//     randomArray[i] = Math.floor(Math.random() * (100 - 10) + 10);
    
// }
// console.log(randomArray);



// let mass = [25 5, 10];
// let result = 0;

// for (let i = 0; i < mass.length; i++) {
//     result += mass[i];
    
// }
// console.log(result);



// let array = [2, 3, 4, 5, 6];
// let result = 0;
// for (let i = 0; i < array.length - 1; i++) {
//     result += array[i] * array[i + 1]; 
// };
// console.log(result);




// let randomArray = new Array (10);

// for (let i = 0; i < randomArray.length; i++) {
//     randomArray[i] = Math.floor(Math.random() * (100 - 10) + 10);
    
// }
// console.log(randomArray);

// for (let i = 0; i < randomArray.length; i++) {
//     let count;
//     for (let j = 1; j <= randomArray[i]; j++) {
//         if (randomArray[i] % j == 0) {
//             count++;
//         };
//     };
//     if (count <= 2) {
//         console.log(randomArray[i], "простое число")
//     };
// };

// let array = ["Masha", "Dasha", "Kolya", "Yana"];

// for (let key of array) {
//     console.log(key);
// }




// let ukr = ["Kiev", "Lvov"];
// let spain = ["Madrid", "Sevilia"];
// let poland = ["Varshava", "Krakov"];

// let countries = [ukr, spain, poland];

// console.log(countries[1] [0]);




// let randomArray = new Array (10);

// for (let i = 0; i < randomArray.length; i++) {
//     randomArray[i] = new Array(10);
//     for (let j = 0; j < randomArray.length; j++) {
//         randomArray[i][j] = Math.floor(Math.random() * (100 - 10) + 10);
//     }

// }
// console.log(randomArray);




// let array = new Array(5);

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (i+j == array.length - 1 || i == j) {
//             document.write(" ** ");
//         } else {

//             document.write(" " + i + j + " ");
//         }
//     }
//     document.write("<br>");
// }





// let userSize = +prompt("Enter number", "3");
// let arr = new Array(userSize);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(3);
// };

// for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//         if (i%2 == 0) {
//             arr[i][k] = "even";
//         } else {
//             arr[i][k] = "odd";
//         }
//     }
// };
// console.log(arr);




// -------------------------------------------------------------------------------------

// let str = "a, b, c, d, e, f";
// let arr = str.split(', ', 4);

// console.log(arr);



// let cars = ["audi", "bmw", "suzuki"];
// let cars = ["audi2", "bmw2", "suzuki2"];

// let carsStr = cars.join("</li><li>");

// document.write("<ul><li>" + carsStr + "</li></ul>");

let arr = [1,2,3,4,5];
// arr = arr.reverse();
// let arrSlice = arr.slice(1, 3);
console.log(arr);
// console.log(arrSlice);
let nn = arr.push(6, 7, 8, 9999);
console.log(nn);
console.log(arr);

let mm = arr.pop();
console.log(arr);
console.log(mm);
