// подключаем массивы с данными из отдельных файлов
import profession from "./massives/profession.js";
import nameMass from "./massives/name.js";
import { diseas } from "./massives/disease.js";

// Создаем объект для нашего персонажа, в него будем записывать храктеристики
let person = {
    name: null,
    age: null,
    profession: null,
    hobby: null,
    work_experience: null,
    fears: null,
    fertility: null,
    healthy: null,

}

// обращаемся к нужным элементам
let createCharacter = document.getElementById('create-character')
let title = document.querySelector('.main-title')
let personEl = document.querySelector('.person')

function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let personItems = document.querySelectorAll('.person-item')

function Generate() {
    person.name = nameMass[Random(0, nameMass.length)]
    person.age = Random(10, 85)
    if (person.age > 18) {
        person.profession = profession[Random(0, profession.length)]
        person.work_experience = Random(0, person.age / 1.2)
    }
    else {
        person.profession = "Безработный"
        person.work_experience = "нет"
    }
    let hel = Random(1, 3);
    console.log(hel);
    if (hel === 1) {
        person.healthy = "Здоров"
    }
    else {
        person.healthy = diseas[Random(0, diseas.length)]
    }


    personItems[0].innerHTML = `Имя: ${person.name}`
    personItems[1].innerHTML = `Возраст: ${person.age}`
    personItems[2].innerHTML = `Профессия: ${person.profession}`
    personItems[3].innerHTML = `Стаж работы: ${person.work_experience}`
    personItems[4].innerHTML = `Здоровье: ${person.healthy}`


}

createCharacter.onclick = () => {
    title.style.opacity = 0
    setTimeout(() => {
        title.style.display = 'none'
        personEl.style.display = 'flex'
        setTimeout(() => {
            personEl.style.opacity = 100
            person.name = nameMass[0]
            Generate()
        }, 100);
    }, 500);
}

let radio = document.querySelector('.music')
let music = document.querySelector('audio')
let control_range = document.querySelector('.range')
let isPlay = false
music.volume = 0.2
control_range.value = music.volume * 100

control_range.addEventListener('input', () => {

    music.volume = control_range.value / 100
    console.log(control_range.value);
})


radio.onclick = () => {
    if (isPlay) {
        music.pause()
        console.log('Остановили');
        isPlay = false
    } else {
        music.play()
        console.log('Запустили');
        isPlay = true
    }
}

setInterval(() => {
    if (music.duration == music.currentTime) {
        music.currentTime = 0
        setTimeout(() => {
            music.play()
            console.log("Запустили снова");
        }, 5000)
    }
}, 1000);


/*
Имя
Возраст
Профессия
Хобби
Стаж работы
Страхи
Плодовитость
Что по здоровью
*/



let massOkon = ["а", "и", "я", "ия", "ь"]
let manOkon = ["ас", "ик", "иг", "ан", "ай", "ис", "аз", "ьб", "ад", "ар", "ий"]
function checkGender(name) {
    let isWoman = false
    for (const okon of massOkon) {
        if (name.includes(okon, name.length - 2)) {
            isWoman = true
            break
        }
    }
    for (const okon of manOkon) {
        if (name.includes(okon, name.length - 2)) {
            isWoman = false
            break
        }
    }
    return isWoman ? "женское" : "мужское"
}
