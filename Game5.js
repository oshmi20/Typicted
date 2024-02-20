let dinalaugh = new Audio('dinaanger.mp3');
let gunfire = new Audio('gunfire.mp3');
let attacksound = new Audio('fireball2.mp3');
let dinakill = new Audio('dinakill.wav');
let music = new Audio('music4.mp3');
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
  player1 = document.querySelector('.car'),
  players = document.querySelector('.players'),
  Enemy = document.querySelector('.stop-bord'),
  bullet = document.querySelector('.bullet img')
uparrow = document.querySelector('.uparrow'),
  downarrow = document.querySelector('.downarrow'),
  result = document.querySelector('.result-box')
result_wpm = document.querySelector('.result-wpm span'),
  progress_bar = document.querySelector('.progress-bar');
progress_container = document.querySelector('.progress-Container');
player_progress_container = document.querySelector('.player-progress-Container')
player_progress_bar = document.querySelector('.player-progress-bar')
result_TimeTaken = document.querySelector('.result-TimeTaken span'),
  result_Correct = document.querySelector('.result-Correct span'),
  result_CorrectWord = document.querySelector('.result-CorrectWord span')
result_Coin = document.querySelector('.result-Coin span'),
  Replay_btn = document.querySelector('.Replay-btn'),
  instruction = document.querySelector('.instruction'),
  nextBtn = document.querySelector('.next-btn'),
  alert_wrong = document.querySelector('.alert-wrong'),
  fireball = document.querySelector('.fireball img');
let coinsCount = document.querySelector('.coin span');
let coins = 0;
let anim = 0;
let timer,
  groundSize = 3000;
maxTime = 60,
  timeleft = maxTime,
  charIndex = mistakes = isTyping = CorrectWord = 0;
let cr = 0;
var speed = 0;

var poe = 40;

var poe2 = 20;

var d = 20;
let totalDinaKill = 0;
let attackCount = 0;

var KeyID
function set() {
}
function go() {
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

      let attack = setInterval(function name(params) {
        if (cr < 14) {
          if (attackCount < 15) {
            attackCount++;
            var Playerprogresscontainer = player_progress_container.offsetWidth
            var PlayerProgressWidth = player_progress_bar.offsetWidth
            var val2 = Playerprogresscontainer / 15;
            if ((PlayerProgressWidth + val2) < Playerprogresscontainer) {
              player_progress_bar.style.width = PlayerProgressWidth + val2 + 'px'
            }
            fireballMove(poe2);
          }
          else {
            gameover.play();
            player1.style.transform = "rotate(180deg)";
            clearInterval(attack);
            setTimeout(function name(params) {
              clearInterval(timer);
              music.pause();
              gameover.play();
              lesstimeleft.pause();
              Game.style.display = 'none';
              result.style.display = "flex";
            }, 1000)
          }
        }
      }, 2000)
      setTimeout(() => {

        Enemy.style.display = 'block'
      }, 1000);
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
         
          if (cr < 14) {
            cr++;
          }
         
          else {
            attackCount = 0;
              setTimeout(function name(params) {
                player_progress_bar.style.width = 0 + 'px'
              }, 1000)
            dinakill.play();
            Enemy.style.transform = "rotate(180deg)";
            totalDinaKill++;
            result_Coin.innerHTML = totalDinaKill;
            setTimeout(function name(params) {
              Enemy.style.display = 'none';
            }, 600)
            cr = 0;
            progress_bar.style.width = 0 + 'px'
            setTimeout(function name(params) {
              Enemy.style.transform = "rotate(360deg)";
              Enemy.style.display = 'block';
            }, 1000)
          }
          let totalWidth = Game.offsetWidth;
          if (totalWidth < 380) {
            speed = 20;
          }
          else if (totalWidth > 380) {
            speed = 50;
          }
          bullerfire(poe, speed)
          var progresscontainer = progress_container.offsetWidth
          var ProgressWidth = progress_bar.offsetWidth
          var val = progresscontainer / 14;
          if ((ProgressWidth + val) < progresscontainer) {
            progress_bar.style.width = ProgressWidth + val + 'px'
          }

          CorrectWord++;
          let top = parseInt(window.getComputedStyle(player1).getPropertyValue("top"))
          let left = parseInt(window.getComputedStyle(player1).getPropertyValue("left"))
        }

      }
      else {
        wrongword.play();
        mistakes++;
         characters[charIndex].classList.add("incorrect");
        inpField.value = inpField.value.slice(0, -1);
        charIndex--;
        mistakes--;

      }
        charIndex++;
    }

    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");
    let wpm = Math.round((CorrectWord / (maxTime - timeleft)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
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

function fireballMove(poe2, speed) {
  let left = parseInt(window.getComputedStyle(Enemy).getPropertyValue("left"))
  if (poe2 < left) {
    attacksound.play();
  }
  anim = setInterval(animate, speed);
  function animate() {
    if (poe2 < left + 100) {
      poe2 += 20;
      fireball.style.left = -poe2 + "px";
    }
  }
}
function bullerfire(poe, speed) {
  bullet.style.display = "block";
  let left = parseInt(window.getComputedStyle(Enemy).getPropertyValue("left"))
  if (poe < left) {
    gunfire.play();
  }
  anim = setInterval(animate, 10);
  function animate() {
    if (poe < (left + 250)) {
      poe += speed;
      bullet.style.left = poe + "px";
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
    text.style.top = top + "px"
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
      text.style.top = top + "px"
    }
  }
  else {
    if (top < 130) {
      player1.style.top = top + "px";
      text.style.top = top + "px"
    }
  }
}
document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") { movetop(); }
  if (event.key === "ArrowDown") { movebottom(); }
})

nextBtn.addEventListener('click', () => {
  dinalaugh.play();
dinalaugh.loop = true;
  music.play();
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
