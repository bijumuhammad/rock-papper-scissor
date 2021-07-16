console.log("hello");
let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("pResults");
const computerScore_span= document.getElementById("cResults");
const scoreBoard= document.querySelector(".box");
const rock_div=document.getElementById("rg");
const papper_div=document.getElementById("pg");
const scissor_div=document.getElementById("sg");
const msg=document.querySelector(".footer");

function win(user,comp)
{userScore++;
    console.log(userScore);
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
msg.innerHTML=user + " beats " + comp + " you win";
}

function lose(user,comp)
{computerScore++;
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
msg.innerHTML=comp + " beats " + user + " you lose";
}
function draw(user,comp){
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
msg.innerHTML=comp + " equals " + user + " DRAW";

}



function game(uChoice)
{   let a;

    let cChoice=computerPlay();
    console.log(uChoice)
    console.log(cChoice)
    if (uChoice==="rock")
    {
        if (cChoice==="scissor")
         a= 1;
         //console.log("win")
         else if (cChoice==="papper")
         a=0;
         //console.log("loss") 
         else
         //console.log("draw")
         a= 2;
    } 
    else if (uChoice==="papper")
    {
        if (cChoice==="scissor")
         a= 0;
         //console.log("loss")
         else if (cChoice==="papper")
         //console.log("draw")
         a=2;
         else
         //console.log("win")
         a=1;
    }
    else if (uChoice==="scissor")
    {
        if (cChoice==="scissor")
        //console.log("draw")
         a=2;
         else if (cChoice==="papper")
         //console.log("win")
         a=1;
         else
         //console.log("loss")
         a= 0;
   
    }
         if(a===2)
         draw(uChoice,cChoice);
       else if(a===0)
       lose(uChoice,cChoice);
       else if(a===1)
       win(uChoice,cChoice);
}


function main()
{ 
    rock_div.addEventListener('click' ,function(){
        game("rock")
//        console.log("rock");
    })
    papper_div.addEventListener('click' ,function(){
        game("papper")
  //      console.log("papper");
    })
    scissor_div.addEventListener('click' ,function(){
        game("scissor")
    //    console.log("scissor");
    })

    

}

function computerPlay()                                        //Computer selection generator
{
 const choice = ["rock" ,"papper","scissor"]
 let randomNumber=Math.floor(Math.random() * 3);;
let a= randomNumber
 return (choice[a]);
}


main();

/*const btn = document.querySelector('.first-button');
btn.onclick 


function playerPlay()                                          //player selection prompt
{ 
  let res = window.prompt("enter Rock,Papper or Scissor","Rock");
   res=res.toUpperCase();
   return(res)      
}
function Game(playerPlay,computerPlay)                       //Game played 1 time
{
     if (playerPlay==="ROCK")
     {
         if (computerPlay==="scissor")
          return 1;
          else if (computerPlay==="papper")
          return 0;
          else
          return 2;
     } 
     else if (playerPlay==="PAPPER")
     {
         if (computerPlay==="scissor")
          return 0;
          else if (computerPlay==="papper")
          return 2;
          else
          return 1;
     }
     else if (playerPlay==="SCISSOR")
     {
         if (computerPlay==="scissor")
          return 2;
          else if (computerPlay==="papper")
          return 1;
          else
          return 0;
     }
     else{
         return 3;
     }
}
function Fivegames()                                         //Five time iteration
{
 let c1=0;                                                  //Count variables
let p1=0;
while((c1!==5)  (p1!== 5))
{
let a= computerPlay();                                      //Calling compter generation function
let c= playerPlay();                                           //calling player prompt function

let b= Game(c,a);                                             //Playing the game 1 time
console.log("computer selected "+a)
console.log("player selected "+c)

if (b===1){
    console.log("WIN!! "+ c +" Beats " + a)
    p1++;
     }
else if (b===0){
 console.log("LOSS.. "+a +" Beats " + c)
 c1++;
}
else if(b===2)
console.log("DRAW");  
else{
alert("enter a valid choice")
console.log("enter a valid choice")
}
}

return[c1,p1];
}

/* let[z,v]=Fivegames();                         // First line Read
console.log(z)
console.log(v)

if (v>z)
console.log("player wins "+ v +" times out of 5")
else if(z>v)
console.log("computer wins "+ z + " times out of 5")
else
console.log("Game ended in draw out of 5 times")        
*/
