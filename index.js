let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();

let span1 = document.createElement("span");
let result1 = document.createTextNode(": " + userChoice)
span1.appendChild(result1);
let place1 = document.getElementById("playerResult");
place1.appendChild(span1);


let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors"
}

let span2 = document.createElement("span");
let result2 = document.createTextNode(": " + computerChoice)
span2.appendChild(result2);
let place2 = document.getElementById("computerResult");
place2.appendChild(span2);


let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "Tie";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Player";
        } else {
            return "Computer";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Player";
        } else {
            return "Computer";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "Player";
        } else {
            return "Computer";
        }
    }
}

let result = compare(userChoice, computerChoice);

let span3 = document.createElement("span");
let result3 = document.createTextNode(result)
span3.appendChild(result3);
let place3 = document.getElementById("result");
place3.appendChild(span3);