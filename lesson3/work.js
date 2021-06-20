// - створити функцію яка обчислює та повертає площу прямокутника висотою
// function square (w, h) {
//     return w*h;
//     }
//     let square1 = square(4,5);
//     console.log(square1)

// - створити функцію яка обчислює та повертає площу кола

// function square(d, r) {
//     const p=3.14;

//     return p*(r*r)
// }
// let square1 = square(10, 5);
// console.log(square1)



// - створити функцію яка обчислює та повертає площу циліндру

// function square(h, r) {
//     const p=3.14;

//     return 2*p*r*h
// }
// let square1 = square(10, 5);
// console.log(square1)




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//         if (item < min) min = item
//     }
//     return min;
// }
// const max = returnMinPrintMax(10, 111, 13)
// console.log(max)



// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let element=[1,2,3,4,5]
// function changeElement(arr,index){
//     let array=[...arr];
//     if(index<arr.length-1);{
//         let temp= array[index];
//         array[index]=array[index+1];
//         array[index+1]= temp;
//     }
//      return array
// }
// const changeElement1= changeElement(element,2)
// console.log( element)
// console.log(changeElement1)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function nomberFunk(array){
//     let zero=[];
//     let number=[];
//     for(const item of array){
//         if( item ===0){
//             zero.push(0);
//         }else{
//             number.push(item);
//         }
//     }
//     return number.concat(zero);
// }
// console.log(nomberFunk([1,0,6,0,3]));
// console.log(nomberFunk([0,1,2,3,4]));
// console.log(nomberFunk([0,0,1,0]));



// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '

// function normalName(str) {
//     str = str.trim();
//     while (str.includes('  ')) {
//         str = str.replace('  ', ' ');
//     }
//     return str;
// }
// const normalName1 = normalName(n1);
// console.log(normalName1)