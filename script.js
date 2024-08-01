const rock=document.querySelector("#img1");
const paper=document.querySelector("#img2");
const scissor=document.querySelector("#img3");
const show=document.querySelector("#decision");
let user=document.querySelector("#user");
let machine=document.querySelector("#comp");
let color=document.querySelector(".final-text");
const compchoice = () => {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
};
let yourchoice;
const userchoice = () => {
rock.addEventListener("click", () => {
yourchoice = "rock";
console.log(yourchoice);
compare(compchoice(),yourchoice);
    });
paper.addEventListener("click",()=> {
    yourchoice="paper";
    console.log(yourchoice);
    compare(compchoice(),yourchoice);
});
scissor.addEventListener("click",()=> {
    yourchoice="scissor";
    console.log(yourchoice);
    compare(compchoice(),yourchoice);
});
};
let win = 0;
let lose = 0;
const compare = (comp, your) => {
    if (comp === your) {
        show.innerText = "It's A Draw! Play Again";
    } else if ((comp === "rock" && your === "paper") ||
               (comp === "paper" && your === "scissor") ||
               (comp === "scissor" && your === "rock")) {
        show.innerText = "You Won! Play Again"; 
        win++;
        color.style.backgroundColor="green";
        user.innerText = win;  // Update win count in the HTML
    } else if ((comp === "paper" && your === "rock") ||
               (comp === "scissor" && your === "paper") ||
               (comp === "rock" && your === "scissor")) {
        show.innerText = "You lost! Play Again"; 
        lose++;
        color.style.backgroundColor="red";
        machine.innerText = lose;  // Update lose count in the HTML
    }
};


userchoice();