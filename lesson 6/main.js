// let array = [1, 2, 3, 4, 5, 6];

// array.forEach(function (elem, index, arr){
//     console.log(elem);
//     console.log(index);    
//     console.log(arr);    
// });

// let newArr = array.map(function (elem, index, arr){
//     console.log(elem);
//     console.log(index);    
//     console.log(arr);    
// });

// let filteredArr = array.filter(function (elem, index) {
//    if (elem%2 == 0) return elem;    
// });

// console.log(filteredArr);


// let newArray = array.reduce(function (summ, elem) {
//     return summ + elem;
// });

// console.log(newArray);


// let obj = {
//     username : "Vlad",
//     age : 30,
//     year : 2000,
//     mar: true,
//     skils: ["js", "css"]
// };
// console.log(obj);

// let married = "mar";
// console.log(obj.username);
// console.log(obj.age);
// console.log(obj.skils);

// console.log(obj["age"]);
// console.log(obj[married]);

// obj.color = "black";

// console.log(obj);

// delete obj.mar;

// console.log(obj);

// let obj = {
//     username: "Dasha",
//     age: 25,
//     year: 2000,
//     mar: true,
//     skils: {
//         html: true,
//         css: false,
//         js: "so-so"
//     }
// };
// console.log(obj.skils["css"]);

// obj.master = new Object ();
// obj.master.name = "Dmytro";
// console.log(obj);

// let bool = "age" in obj;
// console.log(bool);


// let car = {
//     color: "black",
//     carName: "audi",
//     id: 0987654
// }

// for(key in car){
//     console.log(key + " - " + car[key]);
    
// }

// let array = [
//     {
//         color: "black",
//         carName: "audi",
//         id: 0987654,
//     },
//     {
//         color: "black",
//         carName: "audi",
//         id: 0987654,
//     },
//     {
//         color: "black",
//         carName: "audi",
//         id: 0987654,
//     }
// ]
// for (let i = 0; i < array.length; i++) {
//     for (key in array[i]) {
//         console.log(array[i][key]);
        
//     }
// }

// let car = {
//     color: "black",
//     carName: "audi",
//     id: 0987654,
//     go: function () {
//         console.log("Поехали!");
//     }
// }

// // Короткий способ написания метода 
// let car = {
//     color: "black",
//     carName: "audi",
//     id: 0987654,
//     go() {
//         console.log("Поехали!");
//     },

// }
// car.go();

let go = function () {
    console.log('Ehai.');
}

let car = {
    color: "black",
    carName: "audi",
    id: 0987654,
    foo: go
}

go();

car.foo(); 

// let car = {
//     color: "black",
//     carName: "audi",
//     id: 0987654,
//     foo: function (speed) {
//         console.log(car.carName + " поехали со скоростью " + speed);
//     }
// }
// let userSpeed = prompt("С какой скоростью будем ехать?", "120");
// car.foo(userSpeed)


// console.log(this);

// let car = {
//     color: "black",
//     carName: "audi",
//     id: 0987654,
//     foo: function () {
//         console.log(this);
//     }
// }
// car.foo();

// function song() {
//     return this.speak;
// }
// let bird = {
//     speak: "tweet",
//     letSpeack: song,
// }
// let human = {
//     speak: "Bla-bla",
//     letSpeack: song,
// };
// let dog = {
//     speak: "bark!",
//     letSpeack: song,
// }

// console.log(bird.letSpeack());
// console.log(human.letSpeack());

// function go() {
//     console.log(this.carName + " go!");
//     return this;
// }

// function stop() {
//     console.log(this.carName + " stop!");
//     return this;
// }


// let car = {
//     color: "black",
//     carName: "audi",
//     id: 0987654,
//     go,
//     stop,
//     go2: () => console.log(this),
//     go3: function () {
//             console.log(this);       
//     }
// }


// // car.go();
// // car.stop();
// car.go().stop();
// car.go2();
// car.go3();

// let point = {
//     x: 20,
//     y: 12,
//     getQuadrant: function(){
//         if (this.x > 0 && this.y > 0) {
//             console.log(this.x + ' ' + this.y + ': первая четверть');
//         } else if (x < 0 && y > 0) {
//             console.log(this.x + ' ' + this.y + ': вторая четверть');
//         } else if (x < 0 && y < 0) {
//             console.log(this.x + ' ' + this.y + ': третья четверть');
//         } else if (x > 0 && y < 0) {
//             console.log(this.x + ' ' + this.y + ': четвертая четверть');
//         } else {
//             console.log('Ноль');
//         }
//     }
// }

// point.getQuadrant();

// let arr = [1, 2, 3, 4];
// let arr222 = [1, 2, 3, 42222];

// function myPush (){
//     for (let i = 0; i < arguments.length; i++) {
//         this[this.length] = arguments[i];
        
//     }
// }

// arr.myPush = myPush;
// arr222.myPush = myPush;

// arr.myPush(1222, 12321321, 212);
// arr222.myPush(1222, 123, 212);

// console.log(arr);
// console.log(arr222);

// let x = 10;
// let y = 20;

// console.log(x + " єто мой икс " + y + " єто мой игрик");
// console.log(`${x} это мой икс, 
// ${y} это мой игрик`);
