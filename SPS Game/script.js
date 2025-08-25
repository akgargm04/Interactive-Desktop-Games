let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice =()=>{
const options=["rock","paper","scissors"];
const randomIdx=Math.floor(Math.random()*3);
return options[randomIdx];
}
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#Computer-score");
const drawGame=(userChoice,compChoice)=>{
    msg.innerText=`Game Draw Your ${userChoice} is same as Compuetrs'${compChoice}`;
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You Lose Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame =(userChoice) =>{
console.log("user choice =",userChoice);
const compChoice= genCompChoice();
console.log("comp choice =",compChoice);
if(userChoice===compChoice){
    drawGame(userChoice,compChoice);
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice===paper?false:true;
    } else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});