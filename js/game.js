var buttonNewGame = document.querySelector('.new-game')
var buttonQuit = document.querySelector('.quit')
var canvas = document.querySelector('canvas'); 
var pincel = canvas.getContext('2d');

var words = ['CACHORRO', 'PASSAROS', 'COZINHAR', 'CARTEIRA', 'LAMPADA', 'CARTAZ', 'MOTO', 'RATOEIRA', 'MATRIZ', 'PALPEBRA']

var newWord = localStorage.getItem('newWord')
if(newWord != null){
  words.push(newWord) //adding new word provided from add-word page to the vector
}

buttonNewGame.addEventListener('click', function(){
  window.location.replace('game.html')
})

buttonQuit.addEventListener('click', function(){
  removeStorage(newWord)
  window.location.replace('index.html')
})

var numberWords = words.length
var selectedWord = chooseWord(numberWords)
drawSizeWord(selectedWord)

function chooseWord(numberWords) {
  var index = Math.floor(Math.random() * numberWords);
  var word = words[index];
  return word
}

function drawSizeWord(word){
  var lengthWord = word.length
  var keyboard = document.querySelector(".keyboard")
  for(var i = 0; i < lengthWord; i++){
    var character = document.createElement('div')
    if(word[i] != " "){
      character.classList.add('line') 
    }
    keyboard.appendChild(character)
    character.textContent = word[i]  
    character.classList.add('startGame') 
  }
} 

window.addEventListener("keydown", verifyKey)

function verifyKey(e){
  if(e.code[0] == 'K'){ 
    var keyUpper = e.key.toUpperCase()
    gameEngine(keyUpper)
  } 
}

var drawNumber = 1
function gameEngine(key){
  var wordChars = document.querySelectorAll('.startGame')
  var foundChar = false

  for(var i = 0; i < wordChars.length; i++) {
    var chars = wordChars[i].textContent
    if(key == chars){
      wordChars[i].classList.remove('startGame')
      wordChars[i].classList.add('word') 
      foundChar = true
    }
  }
  
  wordChars = document.querySelectorAll('.startGame') //Updating what letters are available to be found 
  if(wordChars.length == 0){ //If equal zero, than all words have been shown up, therefore, you've won
    winning()
  }else{
    if(!foundChar && !verifyWrongChar(key)){ 
      if(!verifyrightChar(key)){
        printWrongChar(key)
      switch(drawNumber){
        case 1:
        draw1();
        break
        case 2: 
        draw2();
        break
        case 3: 
        draw3();
        break
        case 4: 
        draw4();
        break
        case 5: 
        draw5();
        break
        case 6: 
        draw6();
        break
        case 7: 
        draw7();
        break
        case 8: 
        draw8();
        break
        case 9: 
        draw9();
        break
        case 10: 
        draw10();
        losing()
        break
      }
      drawNumber += 1 
    }
      
    } 
  }
}

function verifyWrongChar(keyDown){
  var lettersInSpace = document.querySelectorAll(".wrong-letters")
  var thereIsWrongChar = false
  var screenWidth = screen.width;

  if(screenWidth > 700){ //If it's not a mobile
    if(lettersInSpace.length == 0){
      thereIsWrongChar = false
    }else{
      for (var i = 0; i < lettersInSpace.length; i++){
        if(lettersInSpace[i].textContent == keyDown){
          thereIsWrongChar = true
          break
        }
      }
    }
  }
  return thereIsWrongChar 
}

function verifyrightChar(keyDown){
  var rightWords = document.querySelectorAll('.word')
  var foundedChar = false

    if(rightWords.length == 0){
      foundedChar = false //Letter do not belongs to word trying to be solved
    }else{
      for (var i = 0; i < rightWords.length; i++) {
        if (rightWords[i].textContent == keyDown) {
          foundedChar = true
          break
        }
      } 
    }
  return foundedChar
}


function printWrongChar(letter){
  var wrongLetterSpace = document.querySelector('.wrong-letters-space')
  
  if(wrongLetterSpace != null){
    var wrongLetter = document.createElement('div')
    wrongLetter.textContent = letter
    wrongLetter.classList.add('wrong-letters')
    wrongLetterSpace.appendChild(wrongLetter)
  }  
}

function winning(){
  var content = document.querySelector(".content-game")
  var winner = document.createElement('div')
  winner.textContent = "VOCÊ VENCEU. PARABÉNS!"
  winner.classList.add("win-game")
  content.append(winner)
  window.removeEventListener("keydown", verifyKey)
  removeStorage(newWord)
}

function losing(){
  var content = document.querySelector(".content-game")
  var loser = document.createElement('div')
  loser.textContent = "FIM DE JOGO!"
  loser.classList.add("lost-game")
  content.append(loser) 
  window.removeEventListener("keydown", verifyKey)
  removeStorage(newWord)
}

function removeStorage(newWord){
  localStorage.removeItem('newWord')
  var index = words.indexOf(newWord)
  words.splice(index, 1)
}

var screenWidth =  screen.width;
if(screenWidth <= 700){
  window.removeEventListener("keydown", verifyKey)
  var lettersSpace = document.querySelector(".hide")
  lettersSpace.classList.remove("hide")
  lettersSpace.classList.add("alphabet")

  var wrongLetterSpace = document.querySelector('.wrong-letters-space')
  wrongLetterSpace.classList.remove("wrong-letters-space")
  wrongLetterSpace.classList.add("hide")

  var buttonsLetters = document.querySelectorAll('.letters-buttons')
  for (var i = 0; i < buttonsLetters.length; i++){
    buttonsLetters[i].addEventListener("click", printLetter)
  }
}

function printLetter(e){
  var letterPressedElement = e.target
  var letterPressed = letterPressedElement.innerText

  letterPressedElement.classList.remove("letters-buttons")
  letterPressedElement.classList.add("letters-buttons-pressed")
  letterPressedElement.removeEventListener("click", printLetter)
  gameEngine(letterPressed)
}

/* Drawing on screen */
pincel.fillStyle = '#0A3871';
function draw1(){
  pincel.fillRect(80,110, 140, 2);
}

function draw2(){
  pincel.fillRect(120,2,2,110);
}

function draw3(){
  pincel.fillRect(120,1,70,2);
}

function draw4(){
  pincel.fillRect(188,2,2,15);
}

function draw5(){
  pincel.beginPath();
  pincel.arc(189, 26, 10, 0, 2*3.14);
  pincel.stroke();
}

function draw6(){
  pincel.fillRect(188,35,2,50); 
}

function draw7(){
  pincel.beginPath();
  pincel.translate(27, -60) 
  pincel.rotate(30*3.14/180)
  pincel.fillRect(188,1,2,25);
}

function draw8(){
  pincel.beginPath();
  pincel.translate(93, 165) 
  pincel.rotate(-60*3.14/180)
  pincel.fillRect(188,1,2,25);
}

function draw9(){
  pincel.translate(-17, 107) 
  pincel.rotate(-30*3.14/180)
  pincel.fillRect(188,35,2,20); 
}

function draw10(){
  pincel.translate(48, 172) 
  pincel.rotate(-60*3.14/180)
  pincel.fillRect(188,35,2,20); 
}