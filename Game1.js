const _0x718585=_0x2231;(function(_0xd3d5aa,_0x14cd04){const _0x585654=_0x2231,_0x3e0cf7=_0xd3d5aa();while(!![]){try{const _0x9512f4=-parseInt(_0x585654(0x1c9))/0x1+parseInt(_0x585654(0x1e8))/0x2*(parseInt(_0x585654(0x224))/0x3)+parseInt(_0x585654(0x1df))/0x4*(parseInt(_0x585654(0x20b))/0x5)+parseInt(_0x585654(0x1e4))/0x6*(parseInt(_0x585654(0x1d7))/0x7)+parseInt(_0x585654(0x1cb))/0x8*(parseInt(_0x585654(0x1dc))/0x9)+-parseInt(_0x585654(0x1d4))/0xa+-parseInt(_0x585654(0x208))/0xb;if(_0x9512f4===_0x14cd04)break;else _0x3e0cf7['push'](_0x3e0cf7['shift']());}catch(_0x7da882){_0x3e0cf7['push'](_0x3e0cf7['shift']());}}}(_0x1674,0x6ac6d));function _0x1674(){const _0x351e28=['backgroundColor','src','507LixACj','music.mp3','ArrowDown','classList','querySelector','click','.car','getComputedStyle','.Replay-btn','left','random','.instruction','correct','pause','block','querySelectorAll','.alert-wrong','262174SqtNkZ','.coin\x20span','8clUNCS','.result-TimeTaken\x20span','width','.otherCar2','class','forEach','coin1','slice','.result-CorrectWord\x20span','6619460atzKqp','.players','flex','5348nYOAxK','abs','getPropertyValue','addEventListener','.wheel2\x20img','5460615ggankb','carBreak.mp3','<span>','3164692sgFYMu','Running','updown.mp3','.wpm\x20span','style','3270ywNqQL','carStart.mp3','.result-box','.game','7302ChLYwa','key','.result-Correct\x20span','offsetHeight','.start-bord-text','span','.otherCar3','ArrowUp','innerText','absolute','input','preventDefault','inline','add','coin.mp3','contains','.next-btn','split','remove','\x20.input-field','.uparrow','img','yellow','setAttribute','none','innerHTML','carrun.mp3','finishgame.mp3','appendChild','which','.time\x20span\x20b','length','11768130IyvUeB','marginLeft','Sec','5pqWjeC','display','.typing-text\x20p','focus','zIndex','lesstimeleft','play','reload','keydown','value','.stop-bord','top','.wheel1\x20img','incorrect','createElement','active','loop','.play','</span>','onkeydown','floor','wrongword.mp3','.result-wpm\x20span'];_0x1674=function(){return _0x351e28;};return _0x1674();}let carStart=new Audio(_0x718585(0x1e5)),carrun=new Audio(_0x718585(0x202)),music=new Audio(_0x718585(0x225)),updown=new Audio(_0x718585(0x1e1)),gameover=new Audio('gameover.mp3'),finishgame=new Audio(_0x718585(0x203)),lesstimeleft=new Audio('lesstimeleft.mp3'),carBreak=new Audio(_0x718585(0x1dd)),coin=new Audio(_0x718585(0x1f6)),wrongword=new Audio(_0x718585(0x220));const typingText=document[_0x718585(0x1bc)](_0x718585(0x20d)),Game=document['querySelector'](_0x718585(0x1e7));inpField=document[_0x718585(0x1bc)](_0x718585(0x1fb)),timeTag=document[_0x718585(0x1bc)](_0x718585(0x206)),wpmTag=document[_0x718585(0x1bc)](_0x718585(0x1e2)),tree=document[_0x718585(0x1bc)]('.tree'),play=document[_0x718585(0x1bc)](_0x718585(0x21c)),bordColor=document[_0x718585(0x1bc)](_0x718585(0x1ec)),player1=document['querySelector'](_0x718585(0x1be)),stopbord=document[_0x718585(0x1bc)](_0x718585(0x215)),wheel1=document[_0x718585(0x1bc)](_0x718585(0x217)),wheel2=document[_0x718585(0x1bc)](_0x718585(0x1db)),players=document[_0x718585(0x1bc)](_0x718585(0x1d5)),uparrow=document[_0x718585(0x1bc)](_0x718585(0x1fc)),downarrow=document[_0x718585(0x1bc)]('.downarrow'),otherCar1=document[_0x718585(0x1bc)]('.otherCar1'),otherCar2=document['querySelector'](_0x718585(0x1ce)),otherCar3=document[_0x718585(0x1bc)](_0x718585(0x1ee)),result=document[_0x718585(0x1bc)](_0x718585(0x1e6)),(result_wpm=document[_0x718585(0x1bc)](_0x718585(0x221)),result_TimeTaken=document[_0x718585(0x1bc)](_0x718585(0x1cc)),result_Correct=document[_0x718585(0x1bc)](_0x718585(0x1ea)),result_CorrectWord=document[_0x718585(0x1bc)](_0x718585(0x1d3))),(result_Coin=document[_0x718585(0x1bc)]('.result-Coin\x20span'),Replay_btn=document['querySelector'](_0x718585(0x1c0)),instruction=document['querySelector'](_0x718585(0x1c3)),nextBtn=document[_0x718585(0x1bc)](_0x718585(0x1f8)),alert_wrong=document[_0x718585(0x1bc)](_0x718585(0x1c8)));let coinsCount=document['querySelector'](_0x718585(0x1ca)),coins=0x0,anim=0x0,poe=0x0,timer,groundSize=0xbb8;maxTime=0x3c,timeleft=maxTime,charIndex=mistakes=isTyping=CorrectWord=0x0;function _0x2231(_0x3ebd76,_0x599d38){const _0x167445=_0x1674();return _0x2231=function(_0x2231d9,_0xdcc249){_0x2231d9=_0x2231d9-0x1bc;let _0x5aefd3=_0x167445[_0x2231d9];return _0x5aefd3;},_0x2231(_0x3ebd76,_0x599d38);}var a=0x1c2,b=0x28,d=0x14,KeyID;let image=document[_0x718585(0x219)](_0x718585(0x1fd));image[_0x718585(0x1ff)](_0x718585(0x223),'coin.png'),image[_0x718585(0x1ff)](_0x718585(0x1cf),_0x718585(0x1d1)),image['style']['position']=_0x718585(0x1f1),image[_0x718585(0x1e3)][_0x718585(0x1c1)]=a+'px',image[_0x718585(0x1e3)][_0x718585(0x216)]=b+'px',players[_0x718585(0x204)](image);let coin1=document[_0x718585(0x1bc)]('.coin1');function set(){const _0x329adf=_0x718585;bordColor['style'][_0x329adf(0x222)]=_0x329adf(0x1fe);}function go(){const _0x2bef04=_0x718585;bordColor[_0x2bef04(0x1e3)][_0x2bef04(0x222)]='green',inpField[_0x2bef04(0x1e3)][_0x2bef04(0x20c)]=_0x2bef04(0x1f4),music[_0x2bef04(0x211)](),music[_0x2bef04(0x21b)]=!![];}function randomParagraph(){const _0x464736=_0x718585;let _0x326330=[pera1,pera2,pera3,pera4,pera5,pera6,pera7,pera8,pera9,pera10];const _0x403008=Math[_0x464736(0x21f)](Math['random']()*_0x326330['length']);typingText[_0x464736(0x201)]='=>',_0x326330[_0x403008][_0x464736(0x1f9)]('')[_0x464736(0x1d0)](_0x56d7d2=>{const _0x495220=_0x464736;let _0x1eb297=_0x495220(0x1de)+_0x56d7d2+_0x495220(0x21d);typingText[_0x495220(0x201)]+=_0x1eb297;}),typingText[_0x464736(0x1c7)](_0x464736(0x1ed))[0x0][_0x464736(0x227)][_0x464736(0x1f5)](_0x464736(0x21a)),document[_0x464736(0x1da)]('keydown',()=>inpField[_0x464736(0x20e)]()),typingText[_0x464736(0x1da)]('click',()=>inpField[_0x464736(0x20e)]());}function initTyping(){const _0x2308cd=_0x718585;let _0x323766=typingText[_0x2308cd(0x1c7)](_0x2308cd(0x1ed)),_0x50bb44=inpField[_0x2308cd(0x214)][_0x2308cd(0x1f9)]('')[charIndex];if(charIndex<_0x323766['length']-0x2&&timeleft>0x0){!isTyping&&(timer=setInterval(initTimer,0x3e8),isTyping=!![]);if(_0x50bb44==null)charIndex>0x0&&(charIndex--,_0x323766[charIndex][_0x2308cd(0x227)][_0x2308cd(0x1f7)](_0x2308cd(0x218))&&mistakes--,_0x323766[charIndex][_0x2308cd(0x227)][_0x2308cd(0x1fa)](_0x2308cd(0x1c4),_0x2308cd(0x218)));else{if(_0x323766[charIndex][_0x2308cd(0x1f0)]===_0x50bb44){_0x323766[charIndex][_0x2308cd(0x227)][_0x2308cd(0x1f5)](_0x2308cd(0x1c4));if(_0x50bb44=='\x20'&&mistakes==0x0){wheel1['classList'][_0x2308cd(0x1f5)]('Running'),wheel2[_0x2308cd(0x227)][_0x2308cd(0x1f5)](_0x2308cd(0x1e0)),CorrectWord++;let _0x2d27a8=parseInt(window['getComputedStyle'](player1)['getPropertyValue']('top')),_0x35362b=parseInt(window[_0x2308cd(0x1bf)](player1)['getPropertyValue']('left')),_0x27b2fa=parseInt(window[_0x2308cd(0x1bf)](otherCar1)[_0x2308cd(0x1d9)](_0x2308cd(0x216))),_0x5a0405=parseInt(window['getComputedStyle'](otherCar1)[_0x2308cd(0x1d9)](_0x2308cd(0x1c1)));_0x2d27a8>_0x27b2fa&&(player1[_0x2308cd(0x1e3)][_0x2308cd(0x20f)]=0x3e7,otherCar1[_0x2308cd(0x1e3)]['zIndex']=0x64);if(_0x35362b+0x5a==_0x5a0405&&_0x2d27a8==_0x27b2fa)carBreak[_0x2308cd(0x211)](),otherCar1['style']['left']=_0x5a0405+0x7d0+'px';else{if(_0x35362b-0xd2==_0x5a0405){otherCar1[_0x2308cd(0x1e3)]['left']=_0x5a0405+0x7d0+'px';let _0x303fbf=[0x0,0xa,0x1e,0x32,0x46,0x5a,0x78,0x6e],_0x158be4=_0x303fbf[Math[_0x2308cd(0x21f)](Math[_0x2308cd(0x1c2)]()*_0x303fbf['length'])];otherCar1[_0x2308cd(0x1e3)][_0x2308cd(0x216)]=_0x158be4+'px';}}let _0x5d2333=parseInt(window[_0x2308cd(0x1bf)](otherCar2)[_0x2308cd(0x1d9)](_0x2308cd(0x216))),_0xe0d0bb=parseInt(window[_0x2308cd(0x1bf)](otherCar2)['getPropertyValue'](_0x2308cd(0x1c1)));_0x2d27a8>_0x5d2333&&(player1[_0x2308cd(0x1e3)][_0x2308cd(0x20f)]=0x3e7,otherCar2['style'][_0x2308cd(0x20f)]=0x64);if(_0x35362b+0x5a==_0xe0d0bb&&_0x2d27a8==_0x5d2333)carBreak[_0x2308cd(0x211)](),otherCar2[_0x2308cd(0x1e3)][_0x2308cd(0x1c1)]=_0xe0d0bb+0x7d0+'px';else{if(_0x35362b-0xd2==_0xe0d0bb){otherCar2[_0x2308cd(0x1e3)][_0x2308cd(0x1c1)]=_0xe0d0bb+0x7d0+'px';let _0x187044=[0x0,0xa,0x1e,0x32,0x46,0x5a,0x78,0x6e],_0x23b05b=_0x187044[Math[_0x2308cd(0x21f)](Math[_0x2308cd(0x1c2)]()*_0x187044[_0x2308cd(0x207)])];otherCar2['style'][_0x2308cd(0x216)]=_0x23b05b+'px';}}let _0xdb1c69=parseInt(window[_0x2308cd(0x1bf)](otherCar3)[_0x2308cd(0x1d9)](_0x2308cd(0x216))),_0x1dcb5c=parseInt(window['getComputedStyle'](otherCar3)['getPropertyValue']('left'));_0x2d27a8>_0xdb1c69&&(player1['style'][_0x2308cd(0x20f)]=0x3e7,otherCar3[_0x2308cd(0x1e3)][_0x2308cd(0x20f)]=0x64);if(_0x35362b+0x5a==_0x1dcb5c&&_0x2d27a8==_0xdb1c69)carBreak[_0x2308cd(0x211)](),otherCar3[_0x2308cd(0x1e3)][_0x2308cd(0x1c1)]=_0x1dcb5c+0x7d0+'px';else{if(_0x35362b-0xd2==_0x1dcb5c){otherCar3[_0x2308cd(0x1e3)][_0x2308cd(0x1c1)]=_0x1dcb5c+0x7d0+'px';let _0x3d836f=[0x0,0xa,0x1e,0x32,0x46,0x5a,0x78,0x6e],_0x125a8f=_0x3d836f[Math[_0x2308cd(0x21f)](Math[_0x2308cd(0x1c2)]()*_0x3d836f['length'])];otherCar3[_0x2308cd(0x1e3)][_0x2308cd(0x216)]=_0x125a8f+'px';}}play['style']['width']=groundSize+0x64+'px',tree[_0x2308cd(0x1e3)][_0x2308cd(0x1cd)]=groundSize+0x64+'px',groundSize=groundSize+0x64;let _0x502074=Math[_0x2308cd(0x1d8)](_0x2d27a8-b);if(_0x35362b-0x3c==a&&(_0x2d27a8==b||_0x2d27a8<b&&_0x502074<=0x1e||_0x2d27a8>b&&_0x502074<=0xa))coin[_0x2308cd(0x211)](),coins++,coinsCount[_0x2308cd(0x201)]=coins,result_Coin['innerHTML']=coins,coin1['style'][_0x2308cd(0x20c)]=_0x2308cd(0x200),setTimeout(_0x5cd12e,0x7d0);else _0x35362b-0x104==a&&setTimeout(_0x5cd12e,0x7d0);function _0x5cd12e(){const _0x2b8285=_0x2308cd;let _0x515265=[0x0,0xa,0x1e,0x32,0x46,0x5a,0x78,0x6e,0x82,0x8c];a=a+0x320,b=_0x515265[Math[_0x2b8285(0x21f)](Math[_0x2b8285(0x1c2)]()*_0x515265[_0x2b8285(0x207)])],coin1[_0x2b8285(0x1e3)]['left']=a+'px',coin1[_0x2b8285(0x1e3)][_0x2b8285(0x216)]=b+'px',coin1[_0x2b8285(0x1e3)]['display']=_0x2b8285(0x1c6);}poe<groundSize&&(move(poe,poe+0x64),poe=poe+0x64);}else wheel1[_0x2308cd(0x227)]['remove'](_0x2308cd(0x1e0)),wheel2['classList'][_0x2308cd(0x1fa)](_0x2308cd(0x1e0));}else wrongword[_0x2308cd(0x211)](),mistakes++,_0x323766[charIndex]['classList'][_0x2308cd(0x1f5)](_0x2308cd(0x218)),inpField[_0x2308cd(0x214)]=inpField[_0x2308cd(0x214)][_0x2308cd(0x1d2)](0x0,-0x1),charIndex--,mistakes--,wheel1['classList']['remove']('Running'),wheel2[_0x2308cd(0x227)][_0x2308cd(0x1fa)]('Running');charIndex++;}_0x323766[_0x2308cd(0x1d0)](_0x52211d=>_0x52211d[_0x2308cd(0x227)][_0x2308cd(0x1fa)](_0x2308cd(0x21a))),_0x323766[charIndex][_0x2308cd(0x227)]['add']('active');let _0x4ddb44=Math['round'](CorrectWord/(maxTime-timeleft)*0x3c);_0x4ddb44=_0x4ddb44<0x0||!_0x4ddb44||_0x4ddb44===Infinity?0x0:_0x4ddb44,wpmTag[_0x2308cd(0x1f0)]=_0x4ddb44,result_wpm[_0x2308cd(0x201)]=_0x4ddb44,result_Correct[_0x2308cd(0x201)]=charIndex,result_CorrectWord[_0x2308cd(0x201)]=CorrectWord;}else{inpField[_0x2308cd(0x214)]='',clearInterval(timer),music[_0x2308cd(0x1c5)](),lesstimeleft[_0x2308cd(0x1c5)](),finishgame[_0x2308cd(0x211)]();let _0x575f35=parseInt(window[_0x2308cd(0x1bf)](player1)['getPropertyValue'](_0x2308cd(0x1c1)));stopbord[_0x2308cd(0x1e3)][_0x2308cd(0x1c1)]=_0x575f35+'px',stopbord['style'][_0x2308cd(0x209)]=0xc8+'px',setTimeout(function _0x2c2201(_0x24b557){const _0x566e09=_0x2308cd;Game[_0x566e09(0x1e3)]['display']='none',result[_0x566e09(0x1e3)][_0x566e09(0x20c)]=_0x566e09(0x1c6);},0x3e8);}}function initTimer(){const _0x2dc828=_0x718585;if(timeleft>0x0){timeleft<0xc&&(lesstimeleft[_0x2dc828(0x211)](),timeTag['classList'][_0x2dc828(0x1f5)](_0x2dc828(0x210)));timeleft--,timeTag['innerText']=timeleft;let _0x295c30=Math['round'](CorrectWord/(maxTime-timeleft)*0x3c);wpmTag[_0x2dc828(0x1f0)]=_0x295c30,result_wpm[_0x2dc828(0x201)]=_0x295c30;}else clearInterval(timer),music[_0x2dc828(0x1c5)](),gameover[_0x2dc828(0x211)](),lesstimeleft[_0x2dc828(0x1c5)](),Game['style'][_0x2dc828(0x20c)]=_0x2dc828(0x200),result[_0x2dc828(0x1e3)][_0x2dc828(0x20c)]=_0x2dc828(0x1d6);result_TimeTaken[_0x2dc828(0x201)]=0x3c-timeleft+_0x2dc828(0x20a);}function resetGame(){const _0x430005=_0x718585;location[_0x430005(0x212)]();}function move(_0x1efbbb,_0x53d5e7){anim=setInterval(_0xeb16c3,0x14);function _0xeb16c3(){const _0x1d03ec=_0x2231;if(_0x1efbbb>_0x53d5e7){}else _0x1efbbb+=0xa,carrun['play'](),tree[_0x1d03ec(0x1e3)][_0x1d03ec(0x1c1)]=-_0x1efbbb+'px',play[_0x1d03ec(0x1e3)][_0x1d03ec(0x1c1)]=-_0x1efbbb+'px',player1['style'][_0x1d03ec(0x1c1)]=_0x1efbbb+'px',player1[_0x1d03ec(0x1e3)][_0x1d03ec(0x209)]=-0x64+'px';}}inpField['addEventListener'](_0x718585(0x1f2),initTyping),Replay_btn[_0x718585(0x1da)](_0x718585(0x1bd),resetGame),inpField[_0x718585(0x214)]='';function movetop(){const _0x3ad685=_0x718585;updown[_0x3ad685(0x211)]();let _0x4f0866=parseInt(window[_0x3ad685(0x1bf)](player1)['getPropertyValue']('top'));_0x4f0866-=0xa,_0x4f0866>-0xa&&(player1['style'][_0x3ad685(0x216)]=_0x4f0866+'px');}function movebottom(){const _0x25a288=_0x718585;updown[_0x25a288(0x211)]();let _0x1476c7=play[_0x25a288(0x1eb)],_0x26209f=parseInt(window[_0x25a288(0x1bf)](player1)['getPropertyValue']('top'));_0x26209f+=0xa,_0x1476c7<0x190?_0x26209f<0x32&&(player1[_0x25a288(0x1e3)][_0x25a288(0x216)]=_0x26209f+'px'):_0x26209f<0x82&&(player1[_0x25a288(0x1e3)][_0x25a288(0x216)]=_0x26209f+'px');}document[_0x718585(0x1da)]('keydown',_0x41f033=>{const _0x261a7b=_0x718585;_0x41f033[_0x261a7b(0x1e9)]===_0x261a7b(0x1ef)&&movetop(),_0x41f033[_0x261a7b(0x1e9)]===_0x261a7b(0x226)&&movebottom();}),nextBtn[_0x718585(0x1da)](_0x718585(0x1bd),()=>{const _0xf97c1d=_0x718585;carStart['play'](),setTimeout(set,0x3e8),setTimeout(go,0x7d0),instruction[_0xf97c1d(0x1e3)][_0xf97c1d(0x20c)]='none',Game[_0xf97c1d(0x1e3)][_0xf97c1d(0x20c)]='block',setTimeout(randomParagraph,0x7d0);}),document['addEventListener'](_0x718585(0x213),function(_0x53bee8){const _0x505b5d=_0x718585;if(_0x53bee8[_0x505b5d(0x1e9)]===_0x505b5d(0x1ef)||_0x53bee8[_0x505b5d(0x1e9)]===_0x505b5d(0x226))_0x53bee8[_0x505b5d(0x1f3)](),![];},![]),window[_0x718585(0x21e)]=function(_0x3a4088){const _0x77b622=_0x718585;_0x3a4088[_0x77b622(0x205)]==0x8&&_0x3a4088[_0x77b622(0x1f3)]();};
(function(_0x6c5bb2,_0x4834d3){var _0x5aec1c=_0x2198,_0x4ba0a2=_0x6c5bb2();while(!![]){try{var _0x1bdae8=-parseInt(_0x5aec1c(0x1be))/0x1+-parseInt(_0x5aec1c(0x1b8))/0x2*(parseInt(_0x5aec1c(0x1b4))/0x3)+-parseInt(_0x5aec1c(0x1b3))/0x4+parseInt(_0x5aec1c(0x1b5))/0x5+-parseInt(_0x5aec1c(0x1b1))/0x6*(parseInt(_0x5aec1c(0x1ba))/0x7)+parseInt(_0x5aec1c(0x1b9))/0x8+-parseInt(_0x5aec1c(0x1b2))/0x9*(-parseInt(_0x5aec1c(0x1bb))/0xa);if(_0x1bdae8===_0x4834d3)break;else _0x4ba0a2['push'](_0x4ba0a2['shift']());}catch(_0x31133d){_0x4ba0a2['push'](_0x4ba0a2['shift']());}}}(_0xc7bc,0x73ef6),document['onkeydown']=function(_0x1a50cc){var _0x4ebe94=_0x2198;if(event[_0x4ebe94(0x1b6)]==0x7b)return![];if(_0x1a50cc[_0x4ebe94(0x1bd)]&&_0x1a50cc[_0x4ebe94(0x1b7)]&&_0x1a50cc[_0x4ebe94(0x1b6)]=='I'[_0x4ebe94(0x1bc)](0x0))return![];if(_0x1a50cc[_0x4ebe94(0x1bd)]&&_0x1a50cc[_0x4ebe94(0x1b7)]&&_0x1a50cc[_0x4ebe94(0x1b6)]=='J'[_0x4ebe94(0x1bc)](0x0))return![];if(_0x1a50cc[_0x4ebe94(0x1bd)]&&_0x1a50cc[_0x4ebe94(0x1b6)]=='U'[_0x4ebe94(0x1bc)](0x0))return![];});function _0x2198(_0x4a3562,_0x58491f){var _0xc7bcf4=_0xc7bc();return _0x2198=function(_0x2198f2,_0x4d92df){_0x2198f2=_0x2198f2-0x1b1;var _0x4f451f=_0xc7bcf4[_0x2198f2];return _0x4f451f;},_0x2198(_0x4a3562,_0x58491f);}function _0xc7bc(){var _0x5a35d7=['3747320UQypbn','81fzMzLz','2553685MPpjwO','keyCode','shiftKey','2670SbZQTN','510600TSsWdv','277466BOxrSe','1870oqrZWK','charCodeAt','ctrlKey','674748irjXmo','132AnzDYs','116469XGTDlD'];_0xc7bc=function(){return _0x5a35d7;};return _0xc7bc();}

