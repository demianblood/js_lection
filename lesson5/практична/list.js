const listDiv = document.getElementById('list');
const key = 'key';
let store = JSON.parse(localStorage.getItem(key)) || [];
const showList = () => {
    if (!store.length) {
        const empty = document.createElement('h3');
        empty.innerText = 'none list'
        listDiv.appendChild(empty)
    }


    for (let item of store) {
        const itemDiv = document.createElement('div');
        const imgE = document.createElement('img');
        const nameI = document.createElement('div');
        const priceI = document.createElement('div');
        const buttonI = document.createElement('button');
        imgE.src = item.img
        nameI.innerText = `Name:${item.name}`
        priceI.innerText = `Price:${item.price}`
        buttonI.innerText='Delete Item'
        buttonI.onclick = () => {
            deleteItem(item.id)
        }
        itemDiv.append(imgE, nameI, priceI, buttonI);
        listDiv.appendChild(itemDiv);
    }
}
console.log(showList)
const deleteItem = (id) => {
    store = store.filter(value => value.id != id)
    localStorage.setItem(key, JSON.stringify(store))
    listDiv.innerHTML = '';
    showList()
}
showList()