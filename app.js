let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara  = document.querySelector("#user-Score")
const compScorePara  = document.querySelector("#comp-Score")

const genpChoice =()=> {
        const options =["rock","paper","scissors"]
        const randIdx = Math.floor(Math.random() * 3)
        return options[randIdx]
}

const drawgame = () =>{
    msg.innerText= "The game has been Draw"
    msg.style.backgroundColor = "#233D4D"
}

const showwinner = (winchoice, userchoice, compchoice) =>{
    if (winchoice){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won ${userchoice} has beaten ${compchoice}`
        msg.style.backgroundColor = "Green"
    }
    else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You Lost ${compchoice} has beaten ${userchoice}`
        msg.style.backgroundColor = "#619B8A"
    }
}

const playgame =(userchoice)=>{
    const compchoice = genpChoice()
    // console.log("Ther computer choice", compchoice)

    if (userchoice === compchoice){
       drawgame()
    }
        else{
        let winchoice = true
             if(userchoice === "rock"){
                 // paper,scissor
                winchoice = compchoice === "paper" ? false : true
             }
             else if (userchoice === "paper"){
                // rock,scissor
                winchoice = compchoice === "scissors" ? false : true
             }
             else{
                // paper, rock
                winchoice = compchoice === "rock" ? false : true
             }
             showwinner(winchoice, userchoice, compchoice)
        }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})





