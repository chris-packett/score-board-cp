const compareTeamScores = () => {
    const team1score = parseInt(document.querySelector('#team-1-score-output').textContent)
    const team2score = parseInt(document.querySelector('#team-2-score-output').textContent)

    if (team1score > team2score) {
        document.querySelector('#leader-rank-output').textContent = 'Team 1 is in the lead'
    }
    else if (team1score < team2score) {
        document.querySelector('#leader-rank-output').textContent = 'Team 2 is in the lead'
    }
    else {
        document.querySelector('#leader-rank-output').textContent = 'Both teams are tied'
    }
}

document.querySelector('#team-1-add-score-button').addEventListener('click', compareTeamScores)
document.querySelector('#team-2-add-score-button').addEventListener('click', compareTeamScores)
document.querySelector('#team-1-sub-score-button').addEventListener('click', compareTeamScores)
document.querySelector('#team-2-sub-score-button').addEventListener('click', compareTeamScores)