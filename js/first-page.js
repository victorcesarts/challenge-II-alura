var buttonStartGame = document.querySelector('.start-game')
var buttonAddWord = document.querySelector('.add-word')

buttonStartGame.addEventListener('click', function(){
  window.location.replace('game.html')
})

buttonAddWord.addEventListener('click', function(){
  window.location.replace('add-word.html')
})