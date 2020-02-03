// Сделать или первое или второе

// 1.1.
// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 или более обьекта(ов) и возвращает новый, 
// который состоит из свойств обоих обьектов (склеить). 
// Если свойство повторяется, то взять значение второго обьекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }

// 1.2.
// Добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии свойства в обоих объектов 
// в результат пойдет значение из первого обьекта, false - из второго.
// assignObjects({...}, {...}, false);

// 1.3.
// сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.

// ______________________________________
// или
// _____________________________________

// 2.1.
// Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках. 

// 2.2.
// Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
// • "director" — 3000;
// • "manager" — 1500;
// • "programmer" — 2000;
// • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.

let showInfo = function (){
    return`Name: ${this.name},
Surname: ${this.sName},
Age: ${this.age},
Occupation: ${this.occupation}
Salary: ${this.salary}`;
}

function addWorker(workerArr){
    workerArr[workerArr.length] = {};
    workerArr[workerArr.length-1].name = prompt('Enter new worker name', 'Edde');
    workerArr[workerArr.length-1].sName = prompt('Enter new worker surname', 'Philipson');
    workerArr[workerArr.length-1].age = prompt('Enter new worker age', '30');
    workerArr[workerArr.length-1].occupation = prompt('Enter new worker occupation', 'coworker');
    workerArr[workerArr.length-1].show = showInfo;
    for (let i = 0; i < workerArr.length; i++) {
        console.log(workerArr[i].show());
    }
}

function addSalary(workerArr) {
    for (let i = 0; i < workerArr.length; i++) {
        switch (workerArr[i].occupation) {
            case 'director':
                workerArr[i].salary = 3000;
                break;
            case 'manager':
                workerArr[i].salary = 1500;
                break;
            case 'programmer':
                workerArr[i].salary = 2000;
                break;
            default:
                workerArr[i].salary = 1000;
                break;
        }
        console.log(workerArr[i].show());
    }
}


let companyWorkers = [
    {
        name: 'Dmytro',
        sName: 'Dmyterko',
        age: '27',
        occupation: 'director',
        show: showInfo,
    },
    {
        name: 'Dasha',
        sName: 'Kruhtina',
        age: '27',
        occupation: 'manager',
        show: showInfo,
    },
    {
        name: 'Julia',
        sName: 'Bushkina',
        age: '25',
        occupation: 'programmer',
        show: showInfo,
    },
    {
        name: 'Rufus',
        sName: 'Kupus',
        age: '28',
        occupation: 'bubus',
        show: showInfo,
    }
]

addWorker(companyWorkers);
console.log("======================================================================");
addSalary(companyWorkers);