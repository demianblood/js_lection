// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// // 1) Напишіть код, який:
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь(mon - year)
// let getElement = document.getElementById('main_header')
// console.log('a', getElement);
// getElement.innerText = "April Tuesday 2021"


// b) робить шириниу елементу ul 400px

// let ulu = document.querySelector('body ul')
// ulu.classList.add('wight')
// ulu.style.width = '400px'
// console.log('b', ulu)


// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList')
// console.log('c', linkList)
// for (const item of linkList) {
//     item.style.width = '50%'
// }



//     d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.querySelector('li.listElement2')
// console.log('d', listElement2)
// listElement2.innerHTML = '<a href="#">link2</a> some text'





// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liElement = document.getElementsByTagName('li');

// for (const elementLi of liElement) {
//     elementLi.style.backgroundColor = 'gray';
// }



//     f) отримує всі елементи 'a' та додає їм клас anchor

// let liElements = document.getElementsByTagName('a');
// console.log('f', liElements)

// for (const a of liElements) {
//     a.classList.add('anchor')
// }

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let tag = document.getElementsByTagName('a');
// for (const tagElement of tag) {
//     if (tagElement.innerText === 'link3') {
//         tagElement.style.fontSize = '40px'
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let liElements2 = document.getElementsByTagName('a');
// console.log('h', liElements2)

// for (const tagElement of liElements2) {
//     tagElement.setAttribute('class', ` element_$ { tagElement.innerText}`);
// }

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeaders = document.getElementsByClassName('sub-header')
// console.log('i', subHeaders)
// let color = prompt('What color do you want?', [])
// for (const tag of subHeaders) {
//     tag.style.backgroundColor = color;
// }

// //     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let colorItem = prompt('What color do you want,next?', [])
// for (const textElement of subHeaders) {
//     if (textElement.innerText === "content 2 segment") {
//         textElement.style.color = colorItem
//     }
// }



//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let contentText = document.getElementsByClassName('content_1');
// let colorItem2 = prompt('Ok.What you want to read', [])
// for(const item of contentText){
//    item.innerText = colorItem2 
// }

// console.log('k', contentText)




//     l) отримати елементи p та змінити їм padding на 20px

// let paddingList = document.getElementsByTagName('p')
// console.log('l', paddingList);

// for (const p of paddingList) {
//     p.style.padding = '20px'
// }


//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let textTwo = document.getElementsByClassName('text2');
// console.log('m', textTwo)
// for(const items of textTwo){
//    items.innerText = "April Tuesday 2021"
// }





// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// let formCreated = document.createElement('form')
// formCreated.name = 'formCreated'
// formCreated.action = 'index2.html'
// document.body.append(formCreated);

// let formInput = document.createElement('input')
// formInput.name = 'name';
// formCreated.append(formInput);

// let buttonForm = document.createElement('button');
// buttonForm.innerText = 'Save';
// formCreated.append(buttonForm);

// document.forms.formCreated.addEventListener('submit',(event)=>{
//     let name=formInput.value;
//     console.log(name);
//     localStorage.setItem('name',name)
// })

// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


const {name,price,img} = document.forms.form;
const btn = document.getElementById('btn');
const key = 'key';

const save = (name, price, img) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];

    store.push({ id: Math.random(),name,price,img})
    localStorage.setItem(key, JSON.stringify(store))
}
btn.onclick = () => {
    save(name.value,price.value,img.value)
}