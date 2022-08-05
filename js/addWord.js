
var buttonSaveWord = document.querySelector('.save-word')
var buttonCancel = document.querySelector('.cancel')
var text = document.querySelector("textarea") 

text.addEventListener("change", function(){ 
    buttonSaveWord.addEventListener('click', function(){
    window.location.replace('game.html') 
    })
})    

buttonCancel.addEventListener('click', function(){
    window.location.replace('first-page.html')
})

