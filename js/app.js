let cardArray = [
    {
        name: "one",
        img: "assets/images/memory-legume/1.svg",
    },
    {
        name: "two",
        img: "assets/images/memory-legume/2.svg",
    },
    {
        name: "three",
        img: "assets/images/memory-legume/3.svg",
    },
    {
        name: "four",
        img: "assets/images/memory-legume/4.svg",
    },
    {
        name: "five",
        img: "assets/images/memory-legume/5.svg",
    },
    {
        name: "six",
        img: "assets/images/memory-legume/6.svg",
    },
    {
        name: "one",
        img: "assets/images/memory-legume/1.svg",
    },
    {
        name: "two",
        img: "assets/images/memory-legume/2.svg",
    },
    {
        name: "three",
        img: "assets/images/memory-legume/3.svg",
    },
    {
        name: "four",
        img: "assets/images/memory-legume/4.svg",
    },
    {
        name: "five",
        img: "assets/images/memory-legume/5.svg",
    },
    {
        name: "six",
        img: "assets/images/memory-legume/6.svg",
    },
];

// Random CardArray
cardArray.sort( () => .5 - Math.random());


// Cards Elements
const grid = document.querySelector("#grid");
let cardsChoice = [];
let cardsChoiceID = [];
const cardsWin = [];
let clickPossible = true;

// Score
let moves = 0;
const moveElement = document.querySelector(".moves");

let addmoves = function () {
moves += 1;
moveElement.innerHTML = moves;
};

// Reset
function reload(event) {
    if (event.code === "Space") {
        location.reload();
    }
};

// Board Game
function board() {
    for (let i=0; i < cardArray.length; i++) {
        const cards = document.createElement("img");
        cards.setAttribute("src", "/projet_memory/assets/images/question.svg");
        cards.setAttribute("class", "items");
        cards.setAttribute("data-id", i);
        cards.addEventListener("click", flipCards);
        cards.className += " clickOk";
        grid.appendChild(cards);
    }
};

// Retournement des cartes + One click cards condition
function flipCards() {

    if (this.className.includes("clickOk") && clickPossible){
        console.log(cardArray);
        // incrémentation nom et id des cartes dans tableaux "cardsChoice" et "cardsChoiceID"
        let cardId = this.getAttribute("data-id");
        cardsChoice.push(cardArray[cardId].name);
        cardsChoiceID.push(cardId);
        console.log("click", cardId);
        console.log(cardsChoice);
        this.setAttribute("src", cardArray[cardId].img);
        this.classList.remove("clickOk");
        console.log(this);
        // nombres de cartes clickables possible
        if (cardsChoice.length === 2) {
            clickPossible = false;
            setTimeout(checkMatch, 500);
        }
    }
};

// Correspondance des cartes
function checkMatch() {
    const cards = document.querySelectorAll("img");
    
    if (cardsChoice[0] == cardsChoice[1]) {
        cards[cardsChoiceID[0]];
        cards[cardsChoiceID[1]];
        cards[cardsChoiceID[0]].removeEventListener("click", flipCards);
        cards[cardsChoiceID[1]].removeEventListener("click", flipCards);
        cardsWin.push(cardsChoice);

    } else {
        cards[cardsChoiceID[0]].setAttribute("src", "/projet_memory/assets/images/question.svg");
        cards[cardsChoiceID[1]].setAttribute("src", "/projet_memory/assets/images/question.svg");
        cards[cardsChoiceID[0]].className += " clickOk";
        cards[cardsChoiceID[1]].className += " clickOk";
    }
    // comptabilisation des coups + vidages des tableaux "cardsChoice" et "cardsChoiceID"
    addmoves();
    cardsChoice = [];
    cardsChoiceID = [];
    
    if (cardsWin.length == cardArray.length/2) {
        document.getElementById("text_win").innerHTML = "Bravo ! Vous avez gagné en " + moves + " coups !"
    }

    clickPossible = true;
};

board()