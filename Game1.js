let carStart = new Audio('carStart.mp3');
let carrun = new Audio('carrun.mp3');
let music = new Audio('music.mp3');
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
  tree = document.querySelector('.tree'),
  play = document.querySelector('.play'),
  bordColor = document.querySelector('.start-bord-text'),
  player1 = document.querySelector('.car'),
  stopbord = document.querySelector('.stop-bord'),
  wheel1 = document.querySelector('.wheel1 img'),
  wheel2 = document.querySelector('.wheel2 img'),
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
  charIndex = mistakes = isTyping = CorrectWord = 0;
var a = 450;
var b = 40;
var d = 20;
var KeyID
let image = document.createElement("img");
image.setAttribute("src", "coin.png");
image.setAttribute("class", "coin1");
image.style.position = "absolute"
image.style.left = a + "px"
image.style.top = b + "px"
players.appendChild(image);
let coin1 = document.querySelector('.coin1')
function set() {
  bordColor.style.backgroundColor = "yellow"
}
function go() {
  bordColor.style.backgroundColor = "green"
  inpField.style.display = "inline"
  music.play();
  music.loop = true;
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
        characters[charIndex].classList.add("correct");
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

          if (((left + 90) == car1B) && ((top == car1A))) {
            carBreak.play();
            otherCar1.style.left = car1B + 2000 + "px"
          }
          else if ((left - 210) == car1B) {
            otherCar1.style.left = car1B + 2000 + "px"
            let arr = [0, 10, 30, 50, 70, 90, 120, 110];
            let t = arr[Math.floor(Math.random() * arr.length)]
            otherCar1.style.top = t + "px";
          }
          let car2A = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("top"))
          let car2B = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("left"))
          if (top > car2A) {
            player1.style.zIndex = 999;
            otherCar2.style.zIndex = 100;
          }

          if (((left + 90) == car2B) && ((top == car2A))) {
            carBreak.play();
            otherCar2.style.left = car2B + 2000 + "px"
          }
          else if ((left - 210) == car2B) {
            otherCar2.style.left = car2B + 2000 + "px"
            let arr = [0, 10, 30, 50, 70, 90, 120, 110];
            let t = arr[Math.floor(Math.random() * arr.length)]
            otherCar2.style.top = t + "px";
          }
          let car3A = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("top"))
          let car3B = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("left"))

          if (top > car3A) {
            player1.style.zIndex = 999;
            otherCar3.style.zIndex = 100;
          }
          if (((left + 90) == car3B) && ((top == car3A))) {
            carBreak.play();
            otherCar3.style.left = car3B + 2000 + "px"
          }
          else if ((left - 210) == car3B) {
            otherCar3.style.left = car3B + 2000 + "px"
            let arr = [0, 10, 30, 50, 70, 90, 120, 110];
            let t = arr[Math.floor(Math.random() * arr.length)]
            otherCar3.style.top = t + "px";
          }
          play.style.width = groundSize + 100 + "px";
          tree.style.width = groundSize + 100 + "px";
          groundSize = groundSize + 100;

          let val = Math.abs(top - b);
          if ((left - 60) == a && (top == b || ((top < b) && (val <= 30)) || ((top > b) && (val <= 10)))) {
            coin.play();
            coins++;
            coinsCount.innerHTML = coins;
            result_Coin.innerHTML = coins;
            coin1.style.display = "none";
            setTimeout(regenerateCoinn, 2000)
          }
          else if (((left - 260) == a)) {
            setTimeout(regenerateCoinn, 2000)
          }

          function regenerateCoinn() {
            let arr = [0, 10, 30, 50, 70, 90, 120, 110, 130, 140];
            a = a + 800;
            b = arr[Math.floor(Math.random() * arr.length)]
            coin1.style.left = a + "px";
            coin1.style.top = b + "px";
            coin1.style.display = "block";
          }

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
    stopbord.style.left = left + "px"
    stopbord.style.marginLeft = 200 + "px"
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
      carrun.play();
      tree.style.left = -poe + "px"
      play.style.left = -poe + "px"
      player1.style.left = poe + "px"
      player1.style.marginLeft = -100 + "px"
    }
  }
}
inpField.addEventListener("input", initTyping)
Replay_btn.addEventListener("click", resetGame)
inpField.value = "";

function movetop() {
  updown.play();
  let top = parseInt(window.getComputedStyle(player1).getPropertyValue("top"))
  top -= 10;
  if (top > -10) {
    player1.style.top = top + "px";
  }
}
function movebottom() {
  updown.play();
  let height = play.offsetHeight;
  let top = parseInt(window.getComputedStyle(player1).getPropertyValue("top"))
  top += 10;
  if (height < 400) {
    if (top < 50) {
      player1.style.top = top + "px";
    }
  }
  else {
    if (top < 130) {
      player1.style.top = top + "px";
    }
  }
}
document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") { movetop(); }
  if (event.key === "ArrowDown") { movebottom(); }
})

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
