let userscore=0;
let compscore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");

 const userscorepara=document.querySelector("#user-score");
 const compscorepara=document.querySelector("#comp-score");


 const gencompchoice=()=>{
    const options =["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
 };

const drawgame=() =>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
 }
 else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`you lost. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";

 }
};

 const playgame=(userchoice) =>{
   //generate computer choice
    const compchoice=gencompchoice();
  if(userchoice===compchoice){
    drawgame();
  }else{
    let userwin =true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
 }else if (userchoice==="paper"){
    userwin=compchoice==="scissors"?false:true;
 }else {
    userwin=compchoice==="rock"?false:true;
 }
 showwinner(userwin,userchoice,compchoice);
  }
 };


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
      playgame(userchoice);
    });
});