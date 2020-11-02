var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
// alert(randomNumber1);
var image="images/dice"+randomNumber1+".png";

var tochange=document.querySelectorAll("img")[0]
tochange.setAttribute("src",image);

var image2="images/dice"+randomNumber2+".png";

var tochange2=document.querySelectorAll("img")[1]
tochange2.setAttribute("src",image2);

if(randomNumber1>randomNumber2)
{
  var result=document.querySelector("h1");
  result.innerHTML="🚩1 WINS";
  // 1 wins
}
else if(randomNumber1<randomNumber2)
{
  // 2 wins
  var result=document.querySelector("h1");
  result.innerHTML="2 WINS🚩";
}
else
{
  // Draw
  var result=document.querySelector("h1");
  result.innerHTML="Draw";
}
