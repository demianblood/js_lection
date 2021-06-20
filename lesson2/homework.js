// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [10, 5, 8, 9, 7]
// let string = ['я', 'ти', 'він', 'вона', 'вони']
// let combo = [false, 59, 'local', true, 4]
// console.log(combo);
// console.log(number);
// console.log(string);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let zero=[];
// zero[0]='fruits'
// console.log(zero)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let word = ['home', 'travel', 'time', 'trabl', 'fitback', 'tomorrow', 'я', 'ти', 'він', 'вона'];

// for (let i = 0; i < word.length; i++) {
//     document.write(`<div>${word[i]}</div>`)
// }



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let word = ['home', 'travel', 'time', 'trabl', 'fitback', 'tomorrow', 'я', 'ти', 'він', 'вона'];
// for (let i = 3; i < word.length - 1; i++) {
//     document.write(`<div>${word[i]}</div>`)
// };


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let word = ['home', 'travel', 'time', 'trabl', 'fitback', 'tomorrow', 'я', 'ти', 'він', 'вона','home', 'travel', 'time', 'trabl', 'fitback', 'tomorrow', 'я', 'ти', 'він', 'вона'];
// let i = 0;
// while (i < word.length) {
//     document.write(`<h1>${word[i]}</h1>`);
//     i++
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// 
// let word = ['home', 'travel', 'time', 'trabl', 'fitback', 'tomorrow', 'я', 'ти', 'він', 'вона','home', 'travel', 'time', 'trabl', 'fitback', 'tomorrow', 'я', 'ти', 'він', 'вона'];
// let i = 5;
// while (i < word.length-3){
//     document.write(`<h1>${word[i]}</h1>`);
//     i++
// }


// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі

// let nomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < nomb.length; i++) {
//     console.log(nomb[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let text = ['mom', 'dad', 'son', 'big', 'ban', 'city', 'ok', 'no', 'tower', 'box'];
// for (let i = 0; i < text.length; i++) {
//     console.log(text[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mix = ['mom', 11, 'dad', 14, 'son', 15, 'big', 16, 'ban', 17]
// for (let i = 0; i < mix.length; i++){
//     console.log(mix[i])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let Mix= [4,'ter',true,'most',6,'kitty',false,'you',false]
// for (const MixElement of Mix)
// {
//     if(typeof MixElement === 'boolean')
//  console.log(MixElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let Mix= [4,'ter',true,'most',6,'kitty',false,'you',false]
// for (const MixElement of Mix){
//     if( typeof MixElement === 'number')
//     console.log(MixElement)
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let Mix= [4,'ter',true,'most',6,'kitty',false,'you',false]
// for (const MixElement of Mix){
//     if( typeof MixElement === 'string')
//     console.log(MixElement)
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr=[];
// arr[0]=120;
// arr[1]="text";
// arr[2]= true;
// arr[3]=[1,12];
// arr[4]=389;
// arr[5]=false;
// arr[6]='figaro';
// arr[7]= 36;
// arr[8]='Jim';
// arr[9]='monday'
// console.log(arr)



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i=i + 1) {
//     console.log(i)
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i=i + 1) {
//     console.log('step :', i)
//     document.write('step :', i);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i=i + 2) {
//     console.log('step :', i)
//     document.write('step :', i);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 2; i < 102; i=i + 2) {
//     if(!(i%2))
//     console.log(i)
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 1; i < 101; i=i + 2) {
//     if(!(i%1)&&!(i!==2))
//     console.log(i)
//     document.write(i)
// }



// - Дано 2 масиви з рівною кількістю об'єктів.// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// for( const user of usersWithId){
//     for( const city of citiesWithId){
//         if (user.id === city.user_id){
//             user.city=city;
//         }
//     }
// }
// console.log(usersWithId)