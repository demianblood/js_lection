// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// b) отримує текст з блоку з id "rules"
// c) замініть текст параграфа з id 'content' на будь-який інший
// d) замініть текст параграфа з id 'rules' на будь-який інший
// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний



// a

// let content = document.getElementById('content');
// console.log(content);
// console.log('_________')
// let  content1= document.getElementsByClassName('content');
// console.log(content1);
// console.log('_________')
// let content2= document.getElementsByTagName('content');
// console.log(content2)
// console.log('_________')

// let elementById = document.getElementById('content');
// let text = elementById.innerText;
// console.log(text);
// b

// let rules = document.getElementById('rules');
// console.log(rules)
// console.log('_________')
// let  rules1= document.getElementsByClassName('rules');
// console.log(rules1);
// console.log('_________')


// let elementById2 = document.getElementById('rules');
// let text2 = elementById2.innerText;
// console.log(text2);
// c
// content.innerHTML='chsgiauvcihkbvclaHDVBICilc akudgcvjlzxcnLAC;O CBLIDFHBihbC k.c'

// // d
// rules.innerText='ilabavbjc;aoscj n.kajdin jdm;aova; ;oihqva;ibvq.sn lfiwe hqo hrfpUDHF;AVJS E;H JHVAIEFV/A, I '

 // e
// content.style.backgroundColor = "red";

// rules.style.backgroundColor = "red";


// // f
// content.style.color = "blue";

// rules.style.color = "blue";


// console.log('_________')
// // q
// let ruleses=document.querySelectorAll('#rules')
// console.log(ruleses)
// console.log('_________')

// // h
// let  fc_rules= document.getElementsByClassName('fc_rules');
// console.log(fc_rules);

// // i
// for(const item of fc_rules){
//     item.style.color="red"
// }