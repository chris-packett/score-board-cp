const changeColorGreen1 = () => {
    document.querySelector('#team-1-score-output').style.color = 'green'
}

const changeColorRed1 = () => {
    document.querySelector('#team-1-score-output').style.color = 'red'
}

const changeColorGreen2 = () => {
    document.querySelector('#team-2-score-output').style.color = 'green'
}

const changeColorRed2 = () => {
    document.querySelector('#team-2-score-output').style.color = 'red'
}

document.querySelector('#team-1-add-score-button').addEventListener('click', changeColorGreen1)
document.querySelector('#team-2-add-score-button').addEventListener('click', changeColorGreen2)
document.querySelector('#team-1-sub-score-button').addEventListener('click', changeColorRed1)
document.querySelector('#team-2-sub-score-button').addEventListener('click', changeColorRed2)