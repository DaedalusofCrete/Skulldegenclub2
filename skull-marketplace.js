var randomNumber1=Math.floor(Math.random()*6)+1;
var skullPic1="skull-dice/dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src",skullPic1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var skullPic2="skull-dice/dice"+randomNumber2+".png";
document.querySelectorAll("img")[2].setAttribute("src",skullPic2);

if(randomNumber1>randomNumber2){
  document.querySelector("h2").innerHTML="You Win 💀 Refresh Page to Roll Again";
}else if (randomNumber2>randomNumber1){
  document.querySelector("h2").innerHTML="Skull King Wins 💀💀 Refresh Page to Roll Again";
}else {
  document.querySelector("h2").innerHTML="💀 DRAW 💀 Refresh Page to Roll Again";
}
