var buttonSaveWord = document.querySelector('.save-word')
var buttonCancel = document.querySelector('.cancel')

buttonSaveWord.addEventListener('click', function(){
    window.location.replace('game.html')
})

buttonCancel.addEventListener('click', function(){
    window.location.replace('first-page.html')
})

