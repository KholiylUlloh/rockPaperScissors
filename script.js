const choices = document.querySelectorAll('.choice'),
 score = document.querySelector('.score'),
 modal = document.querySelector('.modal'),
 result = document.querySelector('#result'),
 reset = document.querySelector('#restart'),
 scoreBoard = {
    player: 0,
    bot: 0
 };


 //Play
 const play = (e) => {
    reset.style.display = 'inline-block'
    const playerChoice = e.target.id
    const botsChoice = getBotsChoice()
    const winner = getWinner(playerChoice,botsChoice)
    showWinner(winner, botsChoice)
 };

 //GetBotsChoice
 const getBotsChoice = () => {
    const random = Math.random()
    if(random < 0.34){
        return 'rock'
    }else if(random <= 0.67) {
        return 'paper'
    }else {
        return 'scissors'
    }
 };

 //GetWinner 
 const getWinner = (p,b) => {
    if(p === b) {
        return 'draw'
    }else if(p === 'rock') {
        if(b === 'paper') {
            return 'bot'
    }else{
        return 'player'
    }
   }else if(p === 'paper'){
    if(b === 'scissors'){
        return 'bot'
    }else{
        return 'player'
    }
   }else if(p === 'scissors'){
    if(b === 'rock'){
        return 'bot'
    }else{
        return 'player'
    }
   }
 };

 //ShowWinner

 const showWinner = (winner, botsChoice) => {
    if(winner === 'player'){
        scoreBoard.player++
        result.innerHTML = `
         <h1 class='text-win'>You won</h1>
         <i class='fas fa-hand-${botsChoice} fa-10x'></i>
         <p> Bot Chose <strong>${botsChoice.charAt(0).toUpperCase()+botsChoice.slice(1)}</strong></p>
        `
    }else if(winner === 'bot'){
        scoreBoard.bot++
        result.innerHTML = `
            <h1 class='text-lose'> You Lose </h1>
            <i class='fas fa-hand-${botsChoice} fa-10x></i>
            <p> Bot Chose <strong>${botsChoice.charAt(0).toUpperCase()+botsChoice.slice(1)}</strong></p>
        `
    }else{
        result.innerHTML = `
            <h1>It's a Draw</h1>
            <i class='fas fa-hand-${botsChoice} fa-10x'></i>
            <p> Bot Chose <strong>${botsChoice.charAt(0).toUpperCase()+botsChoice.slice(1)}</strong></p>
        `
    }
    score.innerHTML = `
        <p> Player: ${scoreBoard.player}</p>
        <p> Bot: ${scoreBoard.bot}</p>
    `
    modal.style.display = 'block'
 };

 //ResetGame
 const resetGame = () => {
    scoreBoard.player = 0
    scoreBoard.bot = 0
    score.innerHTML = `
    <p> Player: ${scoreBoard.player}</p>
    <p> Bot: ${scoreBoard.bot}</p>
    `
 };

 //ClearModal 
 const clearModal = (e) => {
    if(e.target == modal){
        modal.style.display = 'none'
    }
 };

 //event listeners
 choices.forEach(choices => {
    return choices.addEventListener('click', play)
 })
 window.addEventListener('click', clearModal)
 reset.addEventListener('click', resetGame)