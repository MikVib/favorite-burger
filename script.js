const data = {
    burgers: [
        {
            name: 'super burger',
            img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
            price: 100,
            category: 'burgers'
        },
        {
            name: 'pro burger',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
            price: 150,
            category: 'burgers'
        },
        {
            name: 'extra burger',
            img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
            price: 180,
            category: 'burgers'
        },
    ],
}

let datB = data.burgers
// for (let el in datB) {
//     )
// console.log(...datB,datB);
// value0 = "Выбрать"
value1 = datB[0].name
value2 = datB[1].name
value3 = datB[2].name

const list = {
    // key0: value0,
    key1: value1,
    key2: value2,
    key3: value3
}

localStorage.setItem('list', JSON.stringify(list));
const selectData = JSON.parse(localStorage.getItem('list'));
// Создадим пустую строку, куда будем закидывать теги option для списка
let selectHTML = '';

// Циклом обходим объект, полученный из LS и записываем в selectHTML 
for (const key in selectData) {
    selectHTML += ` <option value="${key}" >${selectData[key]}</option>`;
}

// Выбираем наш выпадающий список и записываем в него обработанные ранее данные
document.querySelector('.my-select').innerHTML = selectHTML;


function SaveSelectValue(el) {
    localStorage.setItem(el.name, el.value);
}

function LoadSelectValue(el) {
    return localStorage.getItem(el.name);
}

let selectCheck = document.querySelector("[name='selectcheck']");
selectCheck.value = LoadSelectValue(selectCheck);

// const addFavorite = document.querySelector('.addFavorite')

// addFavorite.addEventListener('click', () => {

//     let a = document.getElementById('my-select').value;

//     // проверка формы:
//     localStorage.setItem('select', a);
//     console.log(a);
//     if (a == '') {
//         alert('Выберете вариант')
//         let select = document.getElementById('my-select')
//         select.focus()
//     }
// })

// alert(selectCheck.value)



var select = document.querySelector('select');


if (localStorage.selectcheck === undefined) {
    document.querySelector('.imgFavorite').innerHTML = '<p>Какой вам нравится бургер?</p>';
    
}

let imgSubLS = select.addEventListener("change",  rendImgFavorite = () => {
    
    for (let el in datB) {
        if (datB[el].name == list[localStorage.selectcheck]){
            let imgL =`${datB[el].img}`;
            let imgN =`${datB[el].name}`;
            localStorage.setItem('linkImg',`${imgL}`); 
            localStorage.setItem('nameImg',`${imgN}`);
        }
    }
}
);

const imgFavorite = document.getElementsByClassName ('imgFavorite');


select.addEventListener('change', setFavorite);

function setFavorite() {
    
    let choice = select.value;
    nameImg = localStorage.getItem('nameImg');
    linkImg = localStorage.getItem('linkImg');
    inImg = `<img src=" ${linkImg} " alt=" ${nameImg} "> <p>${nameImg}</p>`
    inBtn = '<button id="clearButton" >Отмена</button>'
    dcsF = document.querySelector('.imgFavorite')

    if (choice === 'key1' || selectCheck == 'key1') {
        dcsF.innerHTML 
        = inImg + inBtn;
        document.getElementById("clearButton").onclick = clearStorage
    } else if (choice === 'key2' || selectCheck == 'key2') {
        dcsF.innerHTML 
        = inImg + inBtn;
        document.getElementById("clearButton").onclick = clearStorage
    } else if (choice === 'key3' || selectCheck == 'key3') {
        dcsF.innerHTML 
        = inImg + inBtn;
        document.getElementById("clearButton").onclick = clearStorage
    } else if (choice === null || selectCheck === null) {
        dcsF.innerHTML
        = 'Какой вам нравится бургер?';
    } else {
        dcsF.innerHTML 
        = 'Какой вам нравится бургер?';
    }
    
}
window.onload = setFavorite();

function clearStorage(){ 
//     let el = document.getElementById('clearButton');
// el.remove();
    localStorage.removeItem("selectcheck");
    localStorage.removeItem("select");
    localStorage.removeItem("linkImg");
    localStorage.removeItem("nameImg");
    
        console.log("clear records");

        if(localStorage.getItem('select') == null){
            document.querySelector('.imgFavorite').innerHTML 
        = 'Какой вам нравится бургер?';
        
        }

    alert('Данные удалены')

    

    }


    
    


    // 


    // if (localStorage.selectcheck !== null){
    //     document.querySelector('.my-select').innerHTML = '<button id="clearButton" >Отмена</button>'
    // }










// for (const key in selectData) {
// // console.log(list[localStorage.selectcheck]);
// }

// function f() {
//     let a = document.getElementById('s1').value;
//     alert(a); // "msk", если выбрана Москва
// }



// function store(){ //stores items in the localStorage
//     var brand = document.getElementById('carBrand').value;
//     var price = document.getElementById('carPrice').value;
//     var key = document.getElementById('key').value;

//     const car = {
//         brand: brand,
//         price: price,
//     }

//     window.localStorage.setItem(key,JSON.stringify(car));
//     //converting object to string
// }

// function retrieveRecords(){ //retrieves items in the localStorage
//     var key = document.getElementById('retrieveKey').value; //gets key from user
//     console.log("retrive records");
//     var records = window.localStorage.getItem(key); //searches for the key in localStorage
//     var paragraph = document.createElement("p");
//     var infor = document.createTextNode(records);
//     paragraph.appendChild(infor);
//     var element = document.getElementById("retrieve");
//     element.appendChild(paragraph);
// }

// function removeItem(){ //deletes item from localStorage
//     var key = document.getElementById('removeKey').value; //gets key from user
//     localStorage.removeItem(key) //passes key to the removeItem method
//     console.log("remove items");
// }

// function clearStorage(){ //clears the entire localStorage
//     localStorage.clear()
//     console.log("clear records");
// }

// window.onload =function(){ //ensures the page is loaded before functions are executed.
//     document.getElementById("carForm").onsubmit = store
//     document.getElementById("clearButton").onclick = clearStorage
//     document.getElementById("removeButton").onclick = removeItem
//     document.getElementById("retrieveButton").onclick = retrieveRecords
// }





// var form = document.getElementById('formTesting'),
//     testingSetup = form.elements.testingSetup,
//     aboutSetupOne = localStorage && localStorage.getItem('aboutSetupOne');

// if (aboutSetupOne) {
//     testingSetup.options.add(new Option(aboutSetupOne, aboutSetupOne));
// }

// localStorage.setItem('aboutSetupOne', 'aboutSetupOne');

// testingSetup.onchange = function () {
//     var form = this.form;
//     form.elements.testingSetupLoad.value = this.value;
// };