// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let abc=['a', 'b', 'c'];
// for(i=3;i<5;i++){
//     abc[3]=1;
//     abc[4]=2;
//     abc[5]=3;
//     console.log(abc);
// }

// let abc=['a', 'b', 'c'];
// for(i=1;i<4;i++){
//     abc.push(i);

// }
// console.log(abc);



// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let nambers=[1, 2, 3];
// nambers[0]=3;
// nambers[2]=1;
// console.log(nambers);


// let nambers=[1, 2, 3];
// let numbers1 = [];
// for (let i = 3; i >0 ; i--) {
//     numbers1.push(i)
// }
// console.log(numbers1);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let nambers=[1, 2, 3];
// nambers.push(4)
// nambers.push(5)
// nambers.push(6)
// console.log(nambers);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let nambers=[1, 2, 3];
// nambers.unshift(6)
// nambers.unshift(5)
// nambers.unshift(4)
// console.log(nambers);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let nambers=[1, 2, 3, 4, 5];
// nambers.shift()
// nambers.shift()
// nambers.shift()
// console.log(nambers);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// let nambers=[1, 2, 3, 4, 5];
// nambers.pop()
// nambers.pop()
// nambers.pop()
// console.log(nambers);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// let nambers=[1, 2, 3, 4, 5];
// nambers.push('a')
// nambers.push('b')
// nambers.push('c')
// console.log(nambers);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 2; i < nambers.length+1; i=i + 2) {
//         if(!(i%2))
//         console.log(i)
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nambers)
// let nomb = [];

// for (let i = 0; i < nambers.length; i++) {
//     nomb[i] = nambers[i];
//     console.log(nomb);
// }



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let text = ['a', 'b', 'c'];
// let str="";
// for (i = 0; i < text.length; i++) {
//     str = str + text[i]
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i=0;
// while(i<text.length){
//     str+=text[i]
//     i++;
// }
// console.log(str)



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let text = ['a', 'b', 'c'];
// let str=""
// for(const string of text){
//     str+=string;
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// let text = ['a', 'b', 'c'];
// let str=""
// for(const string in text){
//    str=str+ arr[string];
// }
// console.log(str)


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// let i=0;
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// while(i<arr.length){
//     console.log(arr);
//     i++;
// }


// 2. перебрати його циклом for

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i<arr.length;i++){
//     console.log(arr)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i=1;
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// while(i<arr.length){
//     if(i%2!==0)
//     console.log(arr[i])
//     i++;
// }




// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i<arr.length;i++){
//     if(i%2!==0)
//     console.log(arr[i])
// }



// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i=0;
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// while(i<arr.length){
//     if(arr[i]%2===0)
//     console.log(arr[i])
//     i++;
// }



// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0)
//     console.log(arr[i])
// }



// 7. замінити кожне число кратне 3 на слово "okten"

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%3===0)
//     arr[i]='okten'
// }
// console.log(arr)

// 8. вивести масив в зворотньому порядку.
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// console.log(arr)


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1.
// let i=0;
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// while(i<arr.length){
//     arr.reverse()
//     console.log(arr)
//     i++;
// }

// 2.
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i<arr.length;i++){
//     arr.reverse()
//     console.log(arr)
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=0;
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// while(i<arr.length){
//     if(i%2==0)
//     console.log(arr[i])
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// for(i=0;i<arr.length;i++){
//     if(i%2==0)
//     console.log(arr[i])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i=0;
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// while(i<arr.length){
//     if(arr[i]%2===0)
//     console.log(arr[i])
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0)
//     console.log(arr[i])
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse()
// for(i=0;i<arr.length;i++){
//     if(arr[i]%3===0)
//     arr[i]='okten'
// }
// console.log(arr)





// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// let arr=[];
// for(let i=2;i<102;i++){
//     if(i%2===0){
//         arr.push(i);
//     }
// }
// console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу.
// let arr=[];
// for(let i=1;i<101;i++){
//     if(i%2!==0){
//         arr.push(i);
//     }
// }
// console.log(arr);

// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.

// let arr=[];
// for(let i=2;i<102;i++){
//     if(i%2===0){
//         arr.push(i);
//     }
// }
// console.log(arr);

//        b. заповнити його 50 непарними числами за допомоги циклу.

// let arr=[];
// for(let i=2;i<102;i++){
//     if(i%2===0){
//         arr.push(i);
//     }
// }
// console.log(arr);

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let rand=[]
// for(i=0;i<20;i++){
//     let rand = Math.random() * (20);
//     console.log(rand)
// }

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let twelve = [];
// for (let i = 0; i < 20; i++) {
//     k = Math.floor((Math.random() * 732))
//     if (k >= 8) {
//         twelve[i] = k;
//     } else {
//         i = i - 1
//     };
// }
// console.log( twelve);
//  let array = [];
// for (let i = 0; i <20; i++) {
//     array[i] = Math.floor((Math.random()*732-8) + 8);
// }
// console.log('array');
// console.log(array);

//  2. Вивести за допомогою console.log кожен третій елемен
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 2; i < arr.lenght; i += 3) {

//    console.log(arr[i])
// }



//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.


// let arr = [2, 17, 14, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 2; i < arr.length; i += 2) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }

// }

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let array = [2, 17, 14, 6, 22, 31, 45, 66, 100, -18]
// let newArray=[];
// for (let i=2;i<array.length;i+=3){
//     if(array[i]%2===0){
//         newArray.push(array[i])
//     }
// }
// console.log(newArray)

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// let array = [2, 17, 14, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i])
//     }
// }

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let chek=[100,250,50,168,120,345,188];
// let sum=0;
// for(i=0;i<chek.length;i++){
//   sum+=chek[i]
//   if(i+1>=chek.length){
//       sum/=i
//   }
// }
// console.log(sum)

// let items =[100,200,300,400,500];
// let sum = 0;

// for (i = 0; i < items.length; i++) {
//     sum += items[i];
// }
// let result = sum / items.length;
// console.log(sum);
// console.log(result);


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// let twelve = [];
// for (let i = 0; i < 20; i++) {
//     twelve[i]=Math.floor(Math.random()*732-8)+8
// }
// let twelve_two=[];

// for (let i = 0; i < twelve.length; i++){
//     twelve_two[i]=twelve[i]*5;
// }
// console.log( twelve_two)

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let mix = ['mom', 11, 'dad', 14, 'son', 15, 'big', 16, 'ban', 17]
// let numb = [];
// for (const mixy of mix) {
//     if (typeof mixy === 'number')
//         numb = mixy;
//         console.log(numb)
// }