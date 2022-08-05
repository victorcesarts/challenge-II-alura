
var buttonSaveWord = document.querySelector('.save-word')
var buttonCancel = document.querySelector('.cancel')
var text = document.querySelector("textarea") 
var info = document.querySelector("#info-word")

text.addEventListener("change", function(){ 
    var newWord = text.value
    buttonSaveWord.addEventListener('click', function(){
        if(newWord.length <= 8){
            localStorage.setItem('newWord', newWord)
            window.location.replace('game.html')
        }else{
            info.removeAttribute('#info-word')
            info.setAttribute('id', 'attention')
        }
    })
})    

buttonCancel.addEventListener('click', function(){
    window.location.replace('first-page.html')
})

