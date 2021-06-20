// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
// class Prince extends Human {
//     constructor(name, age, shoeSize) {
//         super(name, age);
//         this.shoeSize = shoeSize;
//     }
//     findCenderell(array) {
//         let find = null;
//         for (const item of array) {
//             if (item.footSize === this.shoeSize) {
//                 find = item
//             }
//         }
//         if(find){
//             console.log('Cinderella is '+ find.name)
//         }
//     }
// }

// let Maria = new Cinderella("Maria", 17, 45)
// let Katya = new Cinderella("Katya", 17, 40)
// let Anya = new Cinderella("Anya", 15, 35)
// let Sophia = new Cinderella("Sophia", 16, 36)
// let Mari = new Cinderella("Mari", 17, 39)
// let Ira = new Cinderella("Iraa", 18, 43)
// let Inna = new Cinderella("Inna", 14, 32)
// let Sophi = new Cinderella("Sophi", 15, 38)
// let Tania = new Cinderella("Tania", 14, 34)
// let Sasha = new Cinderella("Sasha", 16, 41)
// let cinderellas = [Maria, Katya, Anya, Sophia, Mari, Ira, Inna, Sophi, Tania, Sasha]

// let Petya = new Prince("Petya", 19, 40);
// Petya.findCenderell(cinderellas)



// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }



// // --Створити 10 попелюшок , покласти їх в масив
// let Maria = new Cinderella("Maria", 17, 45)
// let Katya = new Cinderella("Katya", 17, 40)
// let Anya = new Cinderella("Anya", 15, 35)
// let Sophia = new Cinderella("Sophia", 16, 36)
// let Mari = new Cinderella("Mari", 17, 39)
// let Ira = new Cinderella("Iraa", 18, 43)
// let Inna = new Cinderella("Inna", 14, 32)
// let Sophi = new Cinderella("Sophi", 15, 38)
// let Tania = new Cinderella("Tania", 14, 34)
// let Sasha = new Cinderella("Sasha", 16, 41)

// let cinderellas = [Maria, Katya, Anya, Sophia, Mari, Ira, Inna, Sophi, Tania, Sasha]
// console.log(cinderellas)


// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;

// }

// function Prince(name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     this.findCinderell = function (array) {
//         let find = null;
//         find = array.find(item => item.footSize === this.shoeSize);
//         if (find) {
//             console.log('Cinderella is ' + find.name)
//         }
//     }
// }
// let Maria = new Cinderella("Maria", 17, 45)
// let Katya = new Cinderella("Katya", 17, 40)
// let Anya = new Cinderella("Anya", 15, 35)
// let Sophia = new Cinderella("Sophia", 16, 36)
// let Mari = new Cinderella("Mari", 17, 39)
// let Ira = new Cinderella("Iraa", 18, 43)
// let Inna = new Cinderella("Inna", 14, 32)
// let Sophi = new Cinderella("Sophi", 15, 38)
// let Tania = new Cinderella("Tania", 14, 34)
// let Sasha = new Cinderella("Sasha", 16, 41)
// let Petya = new Prince("Petya", 19, 40);

// let cinderellas = [Maria, Katya, Anya, Sophia, Mari, Ira, Inna, Sophi, Tania, Sasha]

// Petya.findCinderell(cinderellas)



// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки.';
// let attibytes = [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//     },
//     {
//         titleOfAttr: 'coords/n',
//         actionOfAttr: 'Устанавливает координаты активной области.'
//     },
//     {
//         titleOfAttr: 'download',
//         actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'
//     }
// ];
// let a = new Tag(title, action, attibytes);
// console.log(a);




// let title = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let attibytes = [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     },

// ];

// let div = new Tag(title, action, attibytes);
// console.log(div);


// let title = '<h1>';
// let action = 'Тег <h1> представляет собой наиболее важный заголовок первого уровня,по умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания';
// let attibytes = [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     },
// {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// },
// ];
// let h1 = new Tag(title, action, attibytes);
// console.log(h1);



// let title = '<span> ';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attibytes = [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     },
//     {
//         titleOfAttr: 'hidden',
//         actionOfAttr: 'Скрывает содержимое элемента от просмотра.'
//     }
// ];
// let span = new Tag(title, action, attibytes);
// console.log(span);


// let title = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.';
// let attibytes = [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//     },
//     {
//         titleOfAttr: 'accept',
//         actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
//     },
//     {
//         titleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание изображения.'
//     }
// ];
// let input = new Tag(title, action, attibytes);
// console.log(input);



// let title = '<form>';
// let action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let attibytes = [{
//         titleOfAttr: 'accept-charset',
//         actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
//     },
//     {
//         titleOfAttr: 'action',
//         actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
//     },
//     {
//         titleOfAttr: 'autocomplete',
//         actionOfAttr: 'Включает автозаполнение полей формы.'
//     }
// ];
// let form = new Tag(title, action, attibytes);
// console.log(form);


// let title = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.';
// let attibytes = [{
//         titleOfAttr: 'disabled',
//         actionOfAttr: 'Заблокировать для доступа элемент списка.'
//     },
//     {
//         titleOfAttr: 'label',
//         actionOfAttr: 'Указание метки пункта списка.'
//     },
//     {
//         titleOfAttr: 'selected',
//         actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'
//     }
// ];
// let option = new Tag(title, action, attibytes);
// console.log(option);

// let title = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.';
// let attibytes = [{
//         titleOfAttr: 'autofocus',
//         actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//     },
//     {
//         titleOfAttr: 'disabled',
//         actionOfAttr: 'Блокирует доступ и изменение элемента.'
//     },
//     {
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//     }
// ];
// let select = new Tag(title, action, attibytes);
// console.log(select);