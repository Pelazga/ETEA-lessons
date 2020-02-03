// Первая "команда" и порядок обработки кода
// console.log('Hello me!');
// let user = 10;
// console.log(user);
// user = 30;
// console.log(user);

// Типы данных Намбер и Стринг
// let name = "Dimon";
// console.log(name);
// name = 10;
// console.log(name);
// console.log(Infinity);
// console.log(-Infinity);
// console.log(NaN);

// Арифметические операторы и их работа с разными типами данных
// let a = 11, b = 2, result = 0;
// console.log(a + '+' + b + '=', a + b);
// console.log(a + '*' + b + '=', a * b);
// result = a / b;
// console.log(a + '/' + b + '=' + result);
// result = a - b;
// console.log(a + '-' + b + '=' + result);
// result = a % b;
// console.log(a + '%' + b + '=' + result);

//  + - это операция конкатенации и сливает строки в одну
// let name = "Jhon";
// let surname = "Silver";
// let result = "My name is " + name + " " + surname;
// console.log(result);

// порядок работы операторов слева-направо по порядку действий как в математике
// console.log(5 + 5 + "1");
// console.log("1" + 5 + 5);
// console.log(5 * 8 + 2);
// console.log(5 * '8 + 2');

// Переобразование в строку и обратно разница между парс и +
// eyfhyst + b -
// let b = "4";
// let c = 5;
// let result = +b + c;
// console.log(result);
// let b = 4;
// let c = -b;
// console.log(c);
// let x = -4;
// let y = -x;
// console.log(y);
// let x = "100";
// let res = parseInt(x);
// console.log(res);
// x = "10px";
// res = parseInt(x);
// console.log(res);
// x = "13.5em";
// res = parseInt(x);
// console.log(res);
// let x = "10.5";
// console.log(parseInt(x));
// console.log(+x);
// console.log(parseFloat(x));

// Тип данніх Булевое
// let sun = true;
// console.log(sun);
// console.log(typeof sun);
// console.log(typeof 2);
// console.log(typeof "sun");

// Операторы сравнения пытается привести к числу
// let a = 5;
// let b = 23;
// console.log(a > b), "a>b";
// let c = a == b;
// console.log(c);

// let a = 5;
// let b = "5";
// console.log(a == b, "a == b");

// Сравнение строк true == 1, false == 0; пустая строка тоже ноль.
// let a = 1;
// let b = true;
// console.log(a == b, "a == true");

// let a = "   "; // пробелы игнорируются
// let b = 0;
// console.log(a == b, "' ' == 0");

// let a = "Маша"; // пробелы игнорируются
// let b = "Мария";
// console.log(a == b, "Маша == Мария");

//  != - оператор не равенства

//  Undefined преобразуется в NaN
// let a;
// let b = NaN;
// console.log(a == b, "Undefined == NaN");

// null == undefined выдаст тру и они неравны ничему другому

// преобразование к булевому
// let a = 0;
// let b = "0";
// console.log(!!a == !!b);
// console.log(Boolean(a)  == Boolean(b));