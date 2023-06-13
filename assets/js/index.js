
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

let nameMass = ['Анна', 'Антон', 'Зелебоба', 'Умпа Лумп', "Витя", "Петя", "Маша", "Г.Л.А.Ш.А"]


let personItems = document.querySelectorAll('.person-item')
console.log(personItems);
function Generate() {
    person.name = nameMass[Math.floor(Math.random() * (nameMass.length - 1 - 0 + 1) + 0)]
    person.age = Math.floor(Math.random() * (10 - 85 + 1) + 85)

    person.work_experience = Math.floor(Math.random() * (10 - 20 + 1) + 20)


    personItems[0].innerHTML=`Имя: ${person.name}`
    personItems[1].innerHTML=`Возраст: ${person.age}`
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