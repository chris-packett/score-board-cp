const addOne = (score) => modify(score, 1) //function that adds 1 to the score using the modify function above
const subOne = (score) => modify(score, -1) //function that subtracts 1 to the score using the modify function above

const modify = (score, modifier) => {
  if (modifier === -1 && score === 0) {
    return score //to block score from being a negative number
  }
  else {
    return score + modifier //function that adds a score and a modifier
  }
}

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

//Add event listeners for button clicks
document.querySelector('#team-1-add-score-button').addEventListener('click', updateAddTeamOneScore)
document.querySelector('#team-2-add-score-button').addEventListener('click', updateAddTeamTwoScore)
document.querySelector('#team-1-sub-score-button').addEventListener('click', updateSubtractTeamOneScore)
document.querySelector('#team-2-sub-score-button').addEventListener('click', updateSubtractTeamTwoScore)

