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

document.querySelector('#team-1-name-button').addEventListener('click', updateTeamOneName)
document.querySelector('#team-2-name-button').addEventListener('click', updateTeamTwoName)