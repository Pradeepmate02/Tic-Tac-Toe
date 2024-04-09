let btn = document.querySelectorAll(".box");
let newbtn = document.querySelector("#newbtn");
let resetbtn = document.querySelector("#resetbtn");
let msg = document.querySelector(".afterwin");

let turn = 0;
const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
 ];

btn.forEach((box) =>{
    box.addEventListener("click", () =>{
        if (turn == 0){
            box.innerText = "O";
            turn = 1;
        }
        else{
            box.innerText = "X";
            turn = 0;
        }
        box.disabled = true;

        checkWinner()
    })
}
)
const rstbtn = () =>{
    turn = 0;
    enablebtn();
    msg.classList.add("hide");
}
const btnDisabled = () => {
    for(let box of btn){
        box.disabled = true;
    }
}

const enablebtn = () => {
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `CONGRATULATIONS! Winner is ${winner}`;
    msg.classList.remove("hide");
    btnDisabled();
}
const checkWinner = ()  =>{
    for(let pattern of winPatterns){
       let pat1 = btn[pattern[0]].innerText;
       let pat2 = btn[pattern[1]].innerText; 
        let pat3 =btn[pattern[2]].innerText;

        if(pat1 != "" && pat2 != "" && pat3 != ""){
            if (pat1 === pat2 && pat2 === pat3){
                console.log("winner", pat1);
                showWinner(pat1);
            }
        }
    }
}
newbtn.addEventListener("click", rstbtn);
resetbtn.addEventListener("click", rstbtn);