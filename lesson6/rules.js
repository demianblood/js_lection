// 3 Є масив котрий характеризує правила.
// Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// let rules = [{
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
// let divContent= document.createElement('div')
// divContent.name='divContent'
// document.body.append(divContent)
// let rulesList=document.createElement('h1')
// rulesList.name='h1'
// rulesList.textContent='Правила бойцовского клуба'
// document.body.append(rulesList)
// let divWrap = document.createElement('div');
// divWrap.name = 'divWrap'
// document.body.append(divWrap)
// for (let i in rules) {
//     let divRules = document.createElement('div')
//     let numberRules = document.createElement('h2')
//     let textRules = document.createElement('p')
//     numberRules.innerText = `${rules[i].title}`
//     textRules.innerText = `${rules[i].body}`
//     divRules.appendChild(numberRules)
//     divRules.appendChild(textRules)
//     divWrap.appendChild(divRules)
// }