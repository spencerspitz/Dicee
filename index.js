var randomNumber1=(Math.random()*6)+1;
randomNumber1=Math.floor(randomNumber1);
var randomDice="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDice);


var randomNumber2=(Math.random()*6)+1;
randomNumber2=Math.floor(randomNumber2);
var randomDice2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDice2);

var winnerText=document.querySelector(".container h1");
if(randomNumber2>randomNumber1)
{
  winnerText.innerHTML="Player 2 Wins!";
}
else if(randomNumber1>randomNumber2)
{
  winnerText.innerHTML="Player 1 Wins!";
}
else
{
  winnerText.innerHTML="Draw!";
}
