// 1) створити функцію яка приймає масив та виводить його

// let arr = [1, 2, 3, 4, 5]

// function printArr(arr) {

//     console.log(arr);
// }
// // printArr(arr)


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function createArr(length, min, max) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return arr;
// }
// const arr1 = createArr(10, 10, 100)
// printArr(arr1);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function returnMin(a, b, c) {
//     let min;
//     let max;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= b && c <= a) min = c;

//     console.log('min',min)
//     return min;
// }

// const min=returnMin(10,21,13)
// console.log(min);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//         if (item < min) min = item
//     }
//     console.log('max', max);
// }

// const max = returnMinPrintMax(10, 111, 13)




// 5) створити функцію яка повертає найбільше число з масиву
// function returnMax() {
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//     }
//     return max;
// }
// const returnMax1 = returnMax(1, 8, 3, 4, 5,)
// console.log(returnMax1)


// 6) створити функцію яка повертає найменьше число з масиву

// function returnMin(){
//     let min=arguments[0];
//     for (const item of arguments){
//         if(item<min) min=item;
//     }
//     return min;
// }
// const returnMin1 = returnMin(1, 20, 3, 4, 5,)
// console.log(returnMin1)

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumation(array){
//     let sum=0;
//     for(const item of array){
//         sum+=item;
//     }
//     return sum;
// }
// const sumation1= sumation([4,6,5,7])
// console.log(sumation1)




// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum/array.length;
// }
// const average1 = average([3,3,3,9]);
// console.log('average', average1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// const users=[{name:'Fransua',age: 15, country: 'Italy'}]
// function object(arr=[]) {
//     let i=0;
//     let keys = [];
//     for(let obj of arr){
//         for(let kee in obj){
//             keys[i]=kee;
//             i++;
//         }
//     }
//     return keys
// }
// const obj1=object(users);
// console.log('keys',obj1)


// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// const users=[{name:'Fransua',age: 15, country: 'Italy'}]
// function countFields(arrayObj) {
//     let count = [];
//     for (const item of arrayObj) {
//        if (typeof item === 'object' && !Array.isArray(item)){
//            for (const value in item) {
//              count.push(item[value]);
//            }
//        }

//     }
//        return count;
// }
// let number = countFields(users);
// console.log(number);




// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function splitArr(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     return result;
// }
// const splitArr1 = splitArr([2, 3, 4, 5], [3, 4, 6, 7])
// console.log(splitArr1)