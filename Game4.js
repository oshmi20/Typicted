let carStart = new Audio('carStart.mp3');
let carrun = new Audio('correct.mp3');
let music = new Audio('music3.mp3');
let updown = new Audio('updown.mp3');
let gameover = new Audio('gameover.mp3');
let finishgame = new Audio('finishgame.mp3');
let lesstimeleft = new Audio('lesstimeleft.mp3');
let carBreak = new Audio('carBreak.mp3');
let coin = new Audio('coin.mp3');
let wrongword = new Audio('wrongword.mp3')
const typingText = document.querySelector(".typing-text p"),
  Game = document.querySelector(".game")
inpField = document.querySelector(" .input-field"),
  timeTag = document.querySelector(".time span b"),
  wpmTag = document.querySelector(".wpm span"),
  play = document.querySelector('.play'),
  bordColor = document.querySelector('.start-bord-text'),
  player1 = document.querySelector('.car'),
  stopbord = document.querySelector('.stop-bord'),
  players = document.querySelector('.players'),
  uparrow = document.querySelector('.uparrow'),
  downarrow = document.querySelector('.downarrow'),
  otherCar1 = document.querySelector('.otherCar1'),
  otherCar2 = document.querySelector('.otherCar2'),
  otherCar3 = document.querySelector('.otherCar3'),
  result = document.querySelector('.result-box')
result_wpm = document.querySelector('.result-wpm span'),
  result_TimeTaken = document.querySelector('.result-TimeTaken span'),
  result_Correct = document.querySelector('.result-Correct span'),
  result_CorrectWord = document.querySelector('.result-CorrectWord span')
  result_Coin = document.querySelector('.result-Coin span'),
  wheel1 = document.querySelector('.wheel1 img'),
  wheel2 = document.querySelector('.wheel2 img'),
Replay_btn = document.querySelector('.Replay-btn'),
  instruction = document.querySelector('.instruction'),
  nextBtn = document.querySelector('.next-btn'),
  alert_wrong = document.querySelector('.alert-wrong')
let coinsCount = document.querySelector('.coin span');
let coins = 0;
let anim = 0;
let poe = 0
let timer,
  groundSize = 3000;
maxTime = 60,
  timeleft = maxTime,
  charIndex = mistakes = isTyping = wpm = spaceCount = CorrectWord = 0;
var d = 20;
var KeyID
function set() {
  bordColor.style.backgroundColor = "yellow"
  music.play();
  music.loop = true;
}
function go() {
  bordColor.style.backgroundColor = "green"
  inpField.style.display = "inline"
}

function randomParagraph() {
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
  if (charIndex < characters.length - 2 && timeleft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
  
    if (typedChar == null) {
       if(charIndex > 0) {
      charIndex--;
      if(characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
      }
      characters[charIndex].classList.remove("correct", "incorrect");
  }
    }
    else {
      if (characters[charIndex].innerText === typedChar) {
        alert_wrong.style.display = 'none'
        characters[charIndex].classList.add("correct");
        carrun.play();
        if (typedChar == " " && mistakes == 0) {

          wheel1.classList.add("Running")
          wheel2.classList.add("Running")

          CorrectWord++;
          let top = parseInt(window.getComputedStyle(player1).getPropertyValue("top"))
          let left = parseInt(window.getComputedStyle(player1).getPropertyValue("left"))
          let car1A = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("top"))
          let car1B = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("left"))

          if (top > car1A) {
            player1.style.zIndex = 999;
            otherCar1.style.zIndex = 100;
          }

          if ((left - 110) == car1B) {
            otherCar1.style.left = car1B + 1200 + "px"
          }

          let car2A = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("top"))
          let car2B = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("left"))

          if (top > car2A) {
            player1.style.zIndex = 999;
            otherCar2.style.zIndex = 100;
          }

          if ((left - 210) == car2B) {
            otherCar2.style.left = car2B + 1200 + "px"
          }
          let car3A = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("top"))
          let car3B = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("left"))
          if (top > car3A) {
            player1.style.zIndex = 999;
            otherCar3.style.zIndex = 100;
          }

          if ((left - 210) == car3B) {
            otherCar3.style.left = car3B + 1200 + "px"
          }
          play.style.width = groundSize + 100 + "px";
          groundSize = groundSize + 100;
          wheel1.classList.add("Running")
          wheel2.classList.add("Running")

          if (poe < groundSize) {

            move(poe, poe + 100);
            poe = poe + 100;
          }

        }
        else {
          wheel1.classList.remove("Running")
          wheel2.classList.remove("Running")
        }
      }
      else {
        alert_wrong.style.display = 'inline'
        wrongword.play();
        mistakes++;
  characters[charIndex].classList.add("incorrect");
        inpField.value = inpField.value.slice(0, -1);
        charIndex--;
        mistakes--;
        wheel1.classList.remove("Running")
        wheel2.classList.remove("Running")
        

      }
        charIndex++;
    }

    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");
    let wpm = Math.round((CorrectWord / (maxTime - timeleft)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    wpmTag.innerText = wpm;
    result_wpm.innerHTML = wpm;
    result_Correct.innerHTML = charIndex;
    result_CorrectWord.innerHTML = CorrectWord;
  }

  else {
    inpField.value = "";
    clearInterval(timer);
    music.pause();
    lesstimeleft.pause();
    finishgame.play();
    let left = parseInt(window.getComputedStyle(player1).getPropertyValue("left"))
    setTimeout(function name(params) {
      Game.style.display = 'none';
      result.style.display = "block";
    }, 1000)
  }

}
function initTimer() {
  if (timeleft > 0) {
    if (timeleft < 12) {
      lesstimeleft.play();
      timeTag.classList.add("lesstimeleft");
    }
    timeleft--;
    timeTag.innerText = timeleft;
    let wpm = Math.round((CorrectWord / (maxTime - timeleft)) * 60);
    wpmTag.innerText = wpm;
    result_wpm.innerHTML = wpm;
  }
  else {
    clearInterval(timer);
    music.pause();
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
function move(poe, max) {
  anim = setInterval(animate, 20);
  function animate() {
    if (poe > max) {
    }
    else {
      poe += 10;
      play.style.left = -poe + "px"
      player1.style.left = poe + "px"
      player1.style.marginLeft = -0 + "px"
      player1.classList.add('walking');
    }
  }
  player1.classList.remove('walking');

}
inpField.addEventListener("input", initTyping)
Replay_btn.addEventListener("click", resetGame)
inpField.value = "";


nextBtn.addEventListener('click', () => {
  carStart.play();
  setTimeout(set, 1000);
  setTimeout(go, 2000);
  instruction.style.display = 'none';
  Game.style.display = 'block';
  setTimeout(randomParagraph, 2000);
})
document.addEventListener("keydown", function (e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault(), false;
}, false);

window.onkeydown = function (event) {
  if (event.which == 8) {
    event.preventDefault();
  }
};      
