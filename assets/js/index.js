import profession from "./massives/profession.js";
import nameMass from "./massives/name.js";

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

let createCharacter = document.getElementById('create-character')
let title = document.querySelector('.main-title')
let personEl = document.querySelector('.person')

function Random(max,min) {
    return Math.floor(Math.random() * (max - min) + min)
}

let personItems = document.querySelectorAll('.person-item')

function Generate() {
    person.name = nameMass[Math.floor(Math.random() * (nameMass.length - 1 - 0 + 1) + 0)]
    person.age = Math.floor(Math.random() * (10 - 85 + 1) + 85)
    person.profession = profession[Math.floor(Math.random() * (profession.length - 1 - 0 + 1) + 0)]
    person.work_experience = Random(person.age/1.2,0)


    personItems[0].innerHTML=`Имя: ${person.name}`
    personItems[1].innerHTML=`Возраст: ${person.age}`
    personItems[2].innerHTML=`Профессия: ${person.profession}`
    personItems[3].innerHTML=`Стаж работы: ${person.work_experience}`


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
let isPlay = true
music.volume = 0.2
control_range.value = music.volume * 100

control_range.addEventListener('change', ()=>{

    music.volume = control_range.value/100
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


let timeOfDay = 12
let background = document.querySelector('.main-background')

// setInterval(()=>{
//     switch (timeOfDay) {
//         case 12:
//             background.src = "./assets/images/pngwing.com.png"
//             timeOfDay = 18
//             break;
//         case 18:
//             background.src = "./assets/images/radio.png"
//             break;
//         case 24:
//             background.src = "./assets/images/pngwing.com.png"
//             break;
//         case 6:
//             background.src = "./assets/images/bunker-background.jpg"
//             break;
//         default:
//             background.src = "./assets/images/bunker-background.jpg"
//             break;
//     }
// },5000)


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