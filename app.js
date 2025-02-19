let turn = "human"
let display = document.getElementById("Message")
display.innerHTML="Its Player 1 Turn"
let hide = [];
let winner ;
let detected = false;
let answer = false;
let buttonreset = document.getElementById("button")
buttonreset.style.display = 'none'
function getCase(i) {
    let Case = document.getElementById(i);
    if (Case.innerHTML !== "") return; // Prevent changing a filled box
    if (detected) return; //after getting A winner , you cant do anyClick untill you Click Reset
    if (turn === "human"){
        Case.innerHTML="X"
        display.innerHTML="Its Player 2 Turn"
        turn = "player2"
        hide[i] = "X";
    }else{
        Case.innerHTML="O"
        display.innerHTML="Its Player 1 Turn"
        turn = "human"
        hide[i] = "O";
    }
    checkwinner();
    buttonreset.style.display = "block"
    if (detected){
        determineWinner();
        display.innerHTML=`winner is : ${winner}`
    
        /* setTimeout(() => {
            if (confirm("No Winner! Do you want to restart the game?")) {
                detected = false;
                hide = []
                display.innerHTML="Its Player 1 Turn"
                let allCases = document.querySelectorAll(".case");
                allCases.forEach(case1=>{
                    case1.innerHTML='';
                    //for (let i = 0; i < allCases.length; i++) { allCases[i].innerHTML = ''; // Clear each cell}
                })
            }
        }, 500); */
    }
    
    
}

function checkwinner(){
    if(hide[1] && hide[1] === hide[2] && hide[1] === hide[3] && hide[2] === hide[3]){
        detected = true;
    }else if(hide[4] && hide[4] === hide[5] && hide[4] === hide[6] && hide[5] === hide[6]){
        detected = true;
    }else if (hide[7] && hide[7] === hide[8] && hide[7] === hide[9] && hide[9] === hide[9]){
        detected = true;
    }else if(hide[1] && hide[1] === hide[5] && hide[1] === hide[9] && hide[5] === hide[9]){
        detected = true;
    }else if(hide[3] && hide[3] === hide[5] && hide[3] === hide[7] && hide[7] === hide[5]){
        detected = true;
    }else if(hide[1] && hide[1] === hide[4] && hide[1] === hide[7] && hide[4] === hide[7]){
        detected = true;
    }else if(hide[2] && hide[2] === hide[5] && hide[2] === hide[8] && hide[5] === hide[8]){
        detected = true;
    }else if(hide[3] && hide[3] === hide[6] && hide[3] === hide[9] && hide[6] === hide[9]){
        detected = true;
    }else if ([1, 2, 3, 4, 5, 6, 7, 8, 9].every(i => hide[i] !== undefined)) {
        console.log("No Winner");
        display.innerHTML = "It's a Draw! 😮";
    }
}

function determineWinner () {
    if (turn === "player2"){
        winner = "player 1"
    }else if (turn === "human"){
        winner = "player 2"
    }
}


function resetGame(){
    detected = false;
    hide = []
    display.innerHTML="Its Player 1 Turn"
    let allCases = document.querySelectorAll(".case");
    allCases.forEach(case1=>{
        case1.innerHTML='';
        //for (let i = 0; i < allCases.length; i++) { allCases[i].innerHTML = ''; // Clear each cell}
    })
    buttonreset.style.display = "none"
}