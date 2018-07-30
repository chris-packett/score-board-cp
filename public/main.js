//Updating team one's name based on user input
const updateTeamOneName = () => {
  updateTeamName('#team-1-name-input', '#team-1-name-output') //call updateTeamName function and pass through input and output variables
} 

//Updating team two's name based on user input
const updateTeamTwoName = () => {
  updateTeamName('#team-2-name-input','#team-2-name-output') //call updateTeamName function and pass through input and output variables
} 

//Getting the current team name value and changing it to what the user inputted
const updateTeamName = (inputSelector, outputSelector) => {
  const teamName = document.querySelector(inputSelector).value //assign user input to local variable, teamName
  document.querySelector(outputSelector).textContent = teamName //assign teamName to the output field
  document.querySelector(inputSelector).value = '' //clear the input field to be blank for the next input
}

const updateAddTeamOneScore = () => {
  updateAddTeamScore('#team-1-score-output', '#team-1-score-output')
}

const updateAddTeamTwoScore = () => {
  updateAddTeamScore('#team-2-score-output', '#team-2-score-output')
}

const updateSubtractTeamOneScore = () => {
  updateSubtractTeamScore('#team-1-score-output', '#team-1-score-output')
}

const updateSubtractTeamTwoScore = () => {
  updateSubtractTeamScore('#team-2-score-output', '#team-2-score-output')
}

const updateAddTeamScore = (inputSelector, outputSelector) => {
  const teamScore = parseInt(document.querySelector(inputSelector).textContent)
  newScore = teamScore + 1
  document.querySelector(outputSelector).textContent = newScore
}

const updateSubtractTeamScore = (inputSelector, outputSelector) => {
  const teamScore = parseInt(document.querySelector(inputSelector).textContent)
  newScore = teamScore - 1
  document.querySelector(outputSelector).textContent = newScore
}

document.querySelector('#team-1-name-button').addEventListener('click', updateTeamOneName)
document.querySelector('#team-2-name-button').addEventListener('click', updateTeamTwoName)
document.querySelector('#team-1-add-score-button').addEventListener('click', updateAddTeamOneScore)
document.querySelector('#team-2-add-score-button').addEventListener('click', updateAddTeamTwoScore)
document.querySelector('#team-1-sub-score-button').addEventListener('click', updateSubtractTeamOneScore)
document.querySelector('#team-2-sub-score-button').addEventListener('click', updateSubtractTeamTwoScore)

