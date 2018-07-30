const updateTeamOneName = () => {
  updateTeamName('#team-1-name-input', '#team-1-name-output')
}


const updateTeamTwoName = () => {
  updateTeamName('#team-2-name-input', '#team-2-name-output')
}


const updateTeamName = (inputSelector, outputSelector) => {
  const teamName = document.querySelector(inputSelector).value //assign user input to local variable, teamName
  document.querySelector(outputSelector).textContent = teamName //assign teamName to the output field
  document.querySelector(inputSelector).value = '' //clear the input field to be blank for the next input
}

const modify = (score, modifier) => score + modifier //function that takes in a score and a modifier
const addOne = (score) => modify(score, 1) //function that adds 1 to the score using the modify function above
const subOne = (score) => modify(score, -1) //function that subtracts 1 to the score using the modify function above

const updateAddTeamOneScore = () => {
  updateTeamScore('#team-1-score-output', addOne)
}

const updateAddTeamTwoScore = () => {
  updateTeamScore('#team-2-score-output', addOne)
}

const updateSubtractTeamOneScore = () => {
  updateTeamScore('#team-1-score-output', subOne)
}

const updateSubtractTeamTwoScore = () => {
  updateTeamScore('#team-2-score-output', subOne)
}

const updateTeamScore = (score, modifier) => {
  const teamScore = parseInt(document.querySelector(score).textContent)
  newScore = modifier(teamScore)
  document.querySelector(score).textContent = newScore
}

document.querySelector('#team-1-name-button').addEventListener('click', updateTeamOneName)
document.querySelector('#team-2-name-button').addEventListener('click', updateTeamTwoName)
document.querySelector('#team-1-add-score-button').addEventListener('click', updateAddTeamOneScore)
document.querySelector('#team-2-add-score-button').addEventListener('click', updateAddTeamTwoScore)
document.querySelector('#team-1-sub-score-button').addEventListener('click', updateSubtractTeamOneScore)
document.querySelector('#team-2-sub-score-button').addEventListener('click', updateSubtractTeamTwoScore)

