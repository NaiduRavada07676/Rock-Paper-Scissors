let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame =()=>{
    //console.log("game was draw");
    msg.innerText =  "game was draw,play again!"
    msg.style.backgroundColor = "black";

};

const showWinner = (userwin ,userchoice,comchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
       // console.log("you win");
        msg.innerText =  `you win! your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        //console.log("you lose");
        msg.innerText =  `you lose!   ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playgame = (userchoice) =>{
   // console.log("user choice =",userchoice);
    const comchoice = gencompchoice();
  //  console.log("comp choice =" ,comchoice);
   
    if(userchoice === comchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
            userwin = comchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock,scissor
            userwin = comchoice === "scissor" ? false : true;
        }else{
            //rock,paper
            userwin = comchoice ==="rock" ? false : true;
        }
        showWinner(userwin ,userchoice, comchoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
       // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});
