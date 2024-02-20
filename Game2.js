let horrolaugh = new Audio('horrolaugh2.mp3');
let carrun = new Audio('correct.mp3');
let music = new Audio('music2.mp3');
let updown = new Audio('updown.mp3');
let gameover = new Audio('gameover.mp3');
let finishgame = new Audio('finishgame.mp3');
let lesstimeleft = new Audio('lesstimeleft.mp3');
let coin = new Audio('key.mp3');
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
  players = document.querySelector('.players'),
  uparrow = document.querySelector('.uparrow'),
  result = document.querySelector('.result-box')
result_wpm = document.querySelector('.result-wpm span'),
  result_TimeTaken = document.querySelector('.result-TimeTaken span'),
  result_Correct = document.querySelector('.result-Correct span'),
  result_CorrectWord = document.querySelector('.result-CorrectWord span'),
  result_Coin = document.querySelector('.result-Coin span'),
Replay_btn = document.querySelector('.Replay-btn'),
instruction = document.querySelector('.instruction'),
nextBtn = document.querySelector('.next-btn'),
  otherCar1 = document.querySelector('.otherCar1')
otherCar2 = document.querySelector('.otherCar2')
otherCar3 = document.querySelector('.otherCar3')
let coinsCount = document.querySelector('.coin span');
let coins = 0;
let anim = 0;
let poe = 0
let timer,
  groundSize = 3000;
maxTime = 60,
  timeleft = maxTime,
  charIndex = mistakes = isTyping = wpm = spaceCount =CorrectWord= 0;
var a = 450;
var b = 4;
var d = 20;
let image = document.createElement("img");
image.setAttribute("src", "key.png");
image.setAttribute("class", "coin1");
image.style.position = "absolute"
image.style.left = a + "px"
image.style.top = b + "px"
players.appendChild(image);
let coin1 = document.querySelector('.coin1')


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
  const characters = typingText.querySelectorAll("span")
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < characters.length - 2 && timeleft > 0) {
    var totoalword = characters[charIndex].innerText.length;
    if (!isTyping) {
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
    if (typedChar == null) {
    }
    else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
        carrun.play();
        if (typedChar == " " && mistakes == 0) {
          CorrectWord++;
        let top = parseInt(window.getComputedStyle(player1).getPropertyValue("top"))
        let left = parseInt(window.getComputedStyle(player1).getPropertyValue("left"))
        let car1B = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("left"))
        if ((left - 40) > car1B) {
          otherCar1.style.left = car1B + 2000 + "px";
          let arr = [0, 10, 30, 50, 70, 90, 120, 110, 130, 140];
          let t = arr[Math.floor(Math.random() * arr.length)]
          otherCar1.style.top = t + "px";
        }
        let car2B = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("left"))
        if ((left - 40) > car2B) {
          otherCar2.style.left = car2B + 2000 + "px";
          let arr = [0, 10, 30, 50, 70, 90, 120, 110, 130, 140];
          let t = arr[Math.floor(Math.random() * arr.length)]
          otherCar2.style.top = t + "px";
        }
        let car3B = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("left"))
        if ((left - 40) > car3B) {
          otherCar3.style.left = car3B + 2000 + "px";
          let arr = [0, 10, 30, 50, 70, 90, 120, 110, 130, 140];
          let t = arr[Math.floor(Math.random() * arr.length)]
          otherCar3.style.top = t + "px";
        }
        play.style.width = groundSize + 100 + "px";
        tree.style.width = groundSize + 100 + "px";
        groundSize = groundSize + 100;
        let val = Math.abs(top - (b - 40));
     
        if ((left + 40) == (a) && ((top == (b - 40)) || (val <= 30))) {
          coin.play();
          coins++;
          coinsCount.innerHTML = coins;
          result_Coin.innerHTML = coins;
          coin1.style.display = "none";
          setTimeout(regenerateCoinn, 2000)
        }

        else if (((left - 160) == a)) {
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
      }
      else {
        wrongword.play();
        mistakes++;
        characters[charIndex].classList.add("incorrect");
        characters[charIndex].style.color = "red";
        characters[charIndex].style.fontSize = "1.5" + "rem";
        characters[charIndex].style.fontWeight = 0;
        characters[charIndex].style.borderBottom = "thin solid transparent";
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
    characters[charIndex].classList.add("active")

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
    setTimeout(function name() {
      Game.style.display = 'none';
      result.style.display = "block";
    }, 2000)
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
    clearInterval(timer)
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

      tree.style.left = -poe + "px"
      play.style.left = -poe + "px"
      player1.style.left = poe + "px"
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
  if (top > -80) {
    player1.style.top = top + "px";
  }
}
function movebottom() {
  updown.play();
  let height = play.offsetHeight;
  let top = parseInt(window.getComputedStyle(player1).getPropertyValue("top"))
  top += 10;
  if(height<400){
    if (top < 50) {
      player1.style.top = top + "px";
    }
  }
 else{
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
    horrolaugh.play();
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




