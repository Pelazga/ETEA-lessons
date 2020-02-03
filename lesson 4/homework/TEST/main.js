// test.
// Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4 

// console.log(determineMiddle([1,2,3,4,5],[9,8,7,6], [9,8,7,6])); // [3,8,7,8,7]



// userArr = [[1,2,3,4,5,6],[1, 2, 3]];


// возвращает масивы из центральных элементов принимает 2-мерные массивы
// function determineMiddle(arr) {
//     let rearengedArr= [];
//     for (let i = 0; i < arr.length; i++) {
//         let newArr= [];
//         if (arr[i].length % 2 == 0) {
//             newArr.push(arr[i][(arr[i].length/2)-1]);
//             newArr.push(arr[i][(arr[i].length/2)]);
//             rearengedArr.push(newArr);
//         } else {
//         newArr.push(arr[i][Math.floor(arr[i].length/2)]);
//         rearengedArr.push(newArr);
//         }
//     }
//     return rearengedArr;  
// }


// console.log(determineMiddle(userArr)); 

// возвращает массив из центральных элементов принимает перечень массивов
function determineMiddle(){
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length % 2 == 0){
            newArr.push(arguments[i][(arguments[i].length/2)-1]);
            newArr.push(arguments[i][(arguments[i].length/2)]);
        } else {
            newArr.push(arguments[i][Math.floor(arguments[i].length/2)])
        }
    }
    return newArr;
}


console.log(determineMiddle([1,2,3,4,5],[9,8,7,6],[9,8,7,6]))