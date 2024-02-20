const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".reload"),
timeTag = document.querySelector(".time span b"),
wpmTag = document.querySelector(".wpm span")
result = document.querySelector('.result-box')
result_wpm = document.querySelector('.result-wpm span'),
  result_TimeTaken = document.querySelector('.result-TimeTaken span'),
  result_Correct = document.querySelector('.result-Correct span'),
  result_CorrectWord = document.querySelector('.result-CorrectWord span'),
Replay_btn = document.querySelector('.Replay-btn'),
Game=document.querySelector('.game')


let correct = new Audio('correct.mp3');
let wrong = new Audio('wrongword.mp3');
let lesstimeleft = new Audio('lesstimeleft.mp3');
let gameover = new Audio('gameover.mp3');
let finishgame = new Audio('finishgame.mp3')

let timer,
maxTime = 60,
timeleft = maxTime,
charIndex = mistakes = isTyping =CorrectWord= 0;
function loadParagraph() {
  let paragraphs=[pera1,pera2,pera3,pera4,pera5,pera6,pera7,pera8,pera9,pera10]
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "=>";
    paragraphs[ranIndex].split("").forEach(char => {
    let span = `<span>${char}</span>`
    typingText.innerHTML += span;
  });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}
function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeleft > 0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        document.addEventListener("keydown", KeyCheck);
    function KeyCheck(event) {
      KeyID = event.keyCode;
      switch (KeyID) {
        case 8:
          inpField.disabled = false;
          if (mistakes > 0) {
            if (characters[charIndex].classList.contains("incorrect")) {
              mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
          }
          characters[charIndex].classList.remove("active");
          characters[charIndex + 1].style.color = "#868686";
          characters[charIndex + 1].style.fontSize = "2" + "rem";
          characters[charIndex + 1].style.fontWeight = 500;
          characters[charIndex + 1].style.borderBottom = "thick solid transparent";

          characters[charIndex].style.color = "#17a2b8";
          characters[charIndex].style.fontSize = "2" + "rem";
          characters[charIndex].style.fontWeight = 900;
          characters[charIndex].style.borderBottom = "thick solid #17a2b8";
        

          break;
        default:
          break;
      }
    }

        if(typedChar == null) {
            
        } else {
            if(characters[charIndex].innerText == typedChar) {
                correct.play();
                characters[charIndex].classList.add("correct");
                if (typedChar == " " && mistakes == 0) {
                    CorrectWord++;
                }
            } else {
                wrong.play();
                mistakes++;
                characters[charIndex].classList.add("incorrect");

                characters[charIndex].style.color = "red";
                characters[charIndex].style.fontSize = "1.5" + "rem";
                characters[charIndex].style.fontWeight = 0;
                characters[charIndex].style.borderBottom = "thick solid transparent";
        
        
        
                characters[charIndex + 1].style.color = "#17a2b8";
                characters[charIndex + 1].style.fontSize = "2" + "rem";
                characters[charIndex + 1].style.fontWeight = 900;
                characters[charIndex + 1].style.borderBottom = "thick solid #17a2b8";
                inpField.value = inpField.value.slice(0, -1);
                inpField.disabled = true;
            }
            if (mistakes == 0) {
                charIndex++;
              }
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        let wpm = Math.round((CorrectWord / (maxTime - timeleft)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;
        result_wpm.innerHTML = wpm;
        result_Correct.innerHTML = charIndex;
        result_CorrectWord.innerHTML = CorrectWord;
    } else {
        clearInterval(timer);
        inpField.value = "";
        finishgame.play();
        lesstimeleft.pause();
        Game.style.display = 'none';
        result.style.display = "flex";
    }   
}
function initTimer() {
    if (timeleft > 0) {
        if (timeleft < 12) {
          lesstimeleft.play();
          timeTag.style.color='red';
        }
        timeleft--;
        timeTag.innerText = timeleft;
        let wpm = Math.round((CorrectWord / (maxTime - timeleft)) * 60);
        wpmTag.innerText = wpm;
        result_wpm.innerHTML = wpm;
      }
      else {
        clearInterval(timer);
        gameover.play();
        lesstimeleft.pause();
        Game.style.display = 'none';
        result.style.display = "flex";
      }
    
      result_TimeTaken.innerHTML = 60 - timeleft + "Sec";
}
function resetGame() {
 location.reload();
}
loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
inpField.value="";

document.addEventListener("keydown", function (e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault(), false;
  }, false);
  
  window.onkeydown = function (event) {
    if (event.which == 8) {
      event.preventDefault();
    }
  };      
  

