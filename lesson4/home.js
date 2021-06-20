// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }

// let Kristina= new User(238,"Kristina","Bobrova","gaiak@gmail.com",389214882,)

// console.log(Kristina);

// let Sonia = new User(240, "Sonia", "Bobrova", "AUVHISP@gmail.com", 3892199462)
// let Sacha = new User(247, "Sacha", "Borov", "alvaih/;@gmail.com", 389214882)
// let Kamila = new User(249, "Kamila", "Bobla", ",;OISFH@gmail.com", 389216898)
// let Sergi = new User(230, "Sergi", "Bomba", "owhjt@gmail.com", 3892657482)
// let Kolia = new User(260, "Kolia", "Sova", "aVOI@gmail.com", 385846882)
// let Ivan = new User(243, "Ivan", "Tronah", "OXPAVJABUCO@gmail.com", 389214882)
// let Vlad = new User(214, "Vlad", "Boslov", "vvuifyct@gmail.com", 389214882)
// let Anya = new User(276, "Anya", "loder", "opqigi@gmail.com", 389214882)
// let Anton = new User(266, "Anton", "ler", "opqigi@gmail.com", 389214882)
// let Vasya = new User(256, "Vasya", "Derau", "opqigi@gmail.com", 389214882)




// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }

// }
// let Kristina = new Client(238, "Kristina", "Bobrova", "gaiak@gmail.com", 389214882, ["кобаса", "хліб", "сир", "молоко", "цукор", "вафлі"])
// console.log(Kristina);
// let Sonia = new Client(240, "Sonia", "Bobrova", "AUVHISP@gmail.com", 3892199462, ["кобаса", "хліб", "сир"]);
// let Sacha = new Client(247, "Sacha", "Borov", "alvaih/;@gmail.com", 389214882, ["кобаса", "хліб"]);
// let Kamila = new Client(249, "Kamila", "Bobla", ",;OISFH@gmail.com", 389216898, ["хліб", "сир", "молоко"]);
// let Sergi = new Client(230, "Sergi", "Bomba", "owhjt@gmail.com", 3892657482, ["сир", "молоко", "цукор"]);
// let Kolia = new Client(260, "Kolia", "Sova", "aVOI@gmail.com", 385846882, ["сир", "молоко", "цукор", "вафлі"]);
// let Ivan = new Client(243, "Ivan", "Tronah", "OXPAVJABUCO@gmail.com", 389214882, ["сир", "молоко", "цукор", "вафлі", "кобаса"]);
// let Vlad = new Client(214, "Vlad", "Boslov", "vvuifyct@gmail.com", 389214882, ["кобаса", "хліб", "сир", "молоко", "цукор"]);
// let Anya = new Client(276, "Anya", "loder", "opqigi@gmail.com", 389214882, ["кобаса", "сир", "молоко", "цукор"]);
// let Anton = new Client(266, "Anton", "ler", "opqigi@gmail.com", 389214882, ["кобаса", "хліб", "цукор"]);
// let Vasya = new Client(256, "Vasya", "Derau", "opqigi@gmail.com", 389214882, ["кобаса", "хліб", "сир", "молоко", "цукор", "хліб"]);



// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineСapacity) {
//     this.model = model
//     this.manufacturer = manufacturer
//     this.yearOfManufacture = yearOfManufacture
//     this.maximumSpeed = maximumSpeed
//     this.engineСapacity = engineСapacity
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`)
//     }
//     this.info = function info() {
//         console.log(` ${model},${manufacturer},${yearOfManufacture}, ${maximumSpeed},${engineСapacity}`)
//     }
//     this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
//         console.log(maximumSpeed * newSpeed)
//     }
//     this.changeYear = function changeYear(newValue) {
//         console.log(yearOfManufacture = newValue)
//     }
//     this.addDriver= function addDriver (driver){
//         this.driver = driver
//     }
// }

// let Toyota = new Car('pfs-68', 'завод', 2016, 306, "Афанасій")
// console.log(Toyota)
// Toyota.drive()
// Toyota.info()
// Toyota.increaseMaxSpeed(2)
// Toyota.changeYear(1998)
// Toyota.addDriver('Конрад')


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineСapacity) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.yearOfManufacture = yearOfManufacture
//         this.maximumSpeed = maximumSpeed
//         this.engineСapacity = engineСapacity
//         this.drive = function drive() {
//             console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`)
//         }
//         this.info = function info() {
//             console.log(` ${model},${manufacturer},${yearOfManufacture}, ${maximumSpeed},${engineСapacity}`)
//         }
//         this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
//             console.log(maximumSpeed * newSpeed)
//         }
//         this.changeYear = function changeYear(newValue) {
//             console.log(yearOfManufacture = newValue)
//         }
//         this.addDriver = function addDriver(driver) {
//             this.driver = driver
//         }
//     }
// }

// const Mazda = new Car('pfs-68', 'завод', 2018, 105, "Афанасій");
// console.log(Mazda)

// Mazda.drive()
// Mazda.info()
// Mazda.increaseMaxSpeed(6)
// Mazda.changeYear(2008)
// Mazda.addDriver("Borus")


// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }

// let Sonia = new User(240, "Sonia", "Bobrova", "AUVHISP@gmail.com", 3892199462)
// let Sacha = new User(247, "Sacha", "Borov", "alvaih/;@gmail.com", 389214882)
// let Kamila = new User(249, "Kamila", "Bobla", ",;OISFH@gmail.com", 389216898)
// let Sergi = new User(230, "Sergi", "Bomba", "owhjt@gmail.com", 3892657482)
// let Kolia = new User(260, "Kolia", "Sova", "aVOI@gmail.com", 385846882)
// let Ivan = new User(243, "Ivan", "Tronah", "OXPAVJABUCO@gmail.com", 389214882)
// let Vlad = new User(214, "Vlad", "Boslov", "vvuifyct@gmail.com", 389214882)
// let Anya = new User(276, "Anya", "loder", "opqigi@gmail.com", 389214882)
// let Anton = new User(266, "Anton", "ler", "opqigi@gmail.com", 389214882)
// let Vasya = new User(256, "Vasya", "Derau", "opqigi@gmail.com", 389214882)


// let users = [Sonia, Sacha, Kamila, Sergi, Kolia, Ivan, Vlad, Anya, Anton, Vasya];
// // let filter = users.filter(user=>!(user.id % 2));
// // console.log(filter);

// users.sort((user1,user2)=>user1.id- user2.id);
// console.log(users)


// users.sort((user1,user2)=>user2.id- user1.id);
// console.log(users)






// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }

// }

// let Sonia = new Client(240, "Sonia", "Bobrova", "AUVHISP@gmail.com", 3892199462, ["кобаса", "хліб", "сир"]);
// let Sacha = new Client(247, "Sacha", "Borov", "alvaih/;@gmail.com", 389214882, ["кобаса", "хліб"]);
// let Kamila = new Client(249, "Kamila", "Bobla", ",;OISFH@gmail.com", 389216898, ["хліб", "сир", "молоко"]);
// let Sergi = new Client(230, "Sergi", "Bomba", "owhjt@gmail.com", 3892657482, ["сир", "молоко", "цукор"]);
// let Kolia = new Client(260, "Kolia", "Sova", "aVOI@gmail.com", 385846882, ["сир", "молоко", "цукор", "вафлі"]);
// let Ivan = new Client(243, "Ivan", "Tronah", "OXPAVJABUCO@gmail.com", 389214882, ["сир", "молоко", "цукор", "вафлі", "кобаса"]);
// let Vlad = new Client(214, "Vlad", "Boslov", "vvuifyct@gmail.com", 389214882, ["кобаса", "хліб", "сир", "молоко", "цукор"]);
// let Anya = new Client(276, "Anya", "loder", "opqigi@gmail.com", 389214882, ["кобаса", "сир", "молоко", "цукор"]);
// let Anton = new Client(266, "Anton", "ler", "opqigi@gmail.com", 389214882, ["кобаса", "хліб", "цукор"]);
// let Vasya = new Client(256, "Vasya", "Derau", "opqigi@gmail.com", 389214882, ["кобаса", "хліб", "сир", "молоко", "цукор", "хліб"]);

// let users = [Sonia, Sacha, Kamila, Sergi, Kolia, Ivan, Vlad, Anya, Anton, Vasya];

// users.sort((user1,user2)=>user2.order.length - user1.order.length);
// console.log(users)

