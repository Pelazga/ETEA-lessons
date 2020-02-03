// _________________

// test 2
// Создать игру "Камень-Ножницы-Бумага". 
// Логика работы как в реальной игре: камень побеждает ножницы, ножницы побеждают бумагу, бумага побеждает камень
// Выбор компьютера определяется случайным образом, используйте для этого Math.random()  
// Пользователь должен ввести одно из трех слов: камень, ножницы, бумага.
// Пример вывода результата работы:
// Ваш выбор: камень
// Компьютер: ножницы
// Вы победили!

function randomPCChoice (){
    let result = Math.ceil(Math.random() * (3 - 0));
    if (result == 1) {
        return 'Ножницы'
    } else if (result == 2) {
        return 'Камень'
    } else {
        return 'Бумага'
    }
}

function rUWin (choice1, choice2){
    if (choice1 == choice2){
        return 0;       // ничья
    } else if (choice1 == 'Ножницы' && choice2 == 'Камень' || choice1 == 'Камень' && choice2 == 'Бумага' || choice1 == 'Бумага' && choice2 == 'Ножницы'){
        return 1;       // проиграл
    } else return 2;
}


function anounceResult (choice1, choice2, foo) {
    let result = foo(choice1, choice2)
    if (result == 0){
        return `Ваш выбор: ${choice1}
Компьютер: ${choice2}
Ничья`;
    } else if(result == 1){
        return `Ваш выбор: ${choice1}
Компьютер: ${choice2}
Вы проиграли`;
    } else {
        return `Ваш выбор: ${choice1}
Компьютер: ${choice2}
Вы победили!`;   
    }
}

let userChoice = prompt('Введите: Камень, Ножницы или Бумага', 'Бумага');   // 'Камень' 'Ножницы'
let pcChoice = randomPCChoice();   // 'Камень' 'Бумага'
alert(anounceResult(userChoice, pcChoice, rUWin));