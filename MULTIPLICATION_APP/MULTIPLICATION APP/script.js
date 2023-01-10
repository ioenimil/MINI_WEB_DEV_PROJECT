const firstRandom = Math.floor(Math.random() * 11)
const secondRandom = Math.floor(Math.random() * 13)
const qElement = document.getElementById('question')
let score = Number(localStorage.getItem('score'))

qElement.innerText = `What is ${firstRandom} multiply by ${secondRandom}?`

if (!score) {
    score = 0
}

const answer = firstRandom * secondRandom
const scoreElement = document.getElementById('score')
function letScore() {


    if (Number(document.getElementById('input').value) === answer) {
        score += 1
        updateLocalStorage()
    } else {
        score -= 1
        updateLocalStorage()

    }
}

scoreElement.innerText = `score: ${score}`
scoreElement.innerText = `score: ${score}`


const formElement = document.getElementById('form');
formElement.addEventListener('submit', letScore) = letScore


function updateLocalStorage() {
    localStorage.setItem('score', String(score))
}