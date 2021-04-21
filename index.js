const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const six = document.getElementById('6');

const wide = document.getElementById('wide');
const noball = document.getElementById('noball');
const wicketbtn = document.getElementById('wicketbtn');

const score = document.getElementById('score')
const wicket = document.getElementById('wicket')

let totalScore = [];
let wicketarr = [];

const addToTotalScore = (number) => {
    var value = number.value
    totalScore.push(value)
        // Converting array of string into array of numbers
    var arr = totalScore.map(Number)
        // Adding all the elements of the array
    let total = arr.reduce((a, b) => a + b, 0)
    score.innerHTML = total
}

const addToWicket = () => {
    wicketarr.push(1)
    var arr = wicketarr.map(Number)
    let wicketScore = arr.reduce((a, b) => a + b, 0)
    wicket.innerHTML = wicketScore
}

zero.addEventListener('click', () => {
    addToTotalScore(zero)
})
one.addEventListener('click', () => {
    addToTotalScore(one)
})
two.addEventListener('click', (event) => {
    addToTotalScore(two)
})
three.addEventListener('click', () => {
    addToTotalScore(three)
})
four.addEventListener('click', () => {
    addToTotalScore(four)
})
six.addEventListener('click', () => {
    addToTotalScore(six)
})

noball.addEventListener('click', () => {
    addToTotalScore(noball)
})

wide.addEventListener('click', () => {
    addToTotalScore(wide)
})

wicketbtn.addEventListener('click', () => {
    addToWicket(wicketbtn)
})