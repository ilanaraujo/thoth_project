var turno = 0

hand = []

var deck = [
    "Mystical Elf",
    "Feral Imp",
    "Winged Dragon, Guardian of the Fortress #1",
    "Summoned Skull",
    "Beaver Warrior",
    "Dark Magician",
    "Gaia The Fierce Knight",
    "Curse of Dragon",
    "Celtic Guardian",
    "Mammoth Graveyard",
    "Great White",
    "Silver Fang",
    "Giant Soldier of Stone",
    "Dragon Zombie",
    "Doma The Angel of Silence",
    "Ansatsu",
    "Witty Phantom",
    "Claw Reacher",
    "Mystic Clown",
    "Sword of Dark Destruction",
    "Book of Secret Arts",
    "Dark Hole",
    "Dian Keto the Cure Master",
    "Ancient Elf",
    "Magical Ghost",
    "Fissure",
    "Trap Hole",
    "Two-Pronged Attack",
    "De-Spell",
    "Monster Reborn",
    "Reinforcements",
    "Change of Heart",
    "The Stern Mystic",
    "Wall of Illusion",
    "Neo the Magic Swordsman",
    "Baron of the Fiend Sword",
    "Man-Eating Treasure Chest",
    "Sorcerer of the Doomed",
    "Last Will",
    "Waboku",
    "Soul Exchange",
    "Card Destruction",
    "Trap Master",
    "Dragon Capture Jar",
    "Yami",
    "Man-Eater Bug",
    "Reverse Trap",
    "Remove Trap",
    "Castle Walls",
    "Ultimate Offering"
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function reloadHand() {
    var elemento = document.getElementById("hand");
    elemento.innerHTML = hand;
}

function initialDraw(deck) {
    shuffle(deck);
    for (i = 0; i < 5; i++) {
        hand[i] = deck[0]
        deck.shift()
    }
}

function draw(deck) {
    hand.push(deck[0])
    deck.shift()
    reloadHand()
    document.getElementById("draw").disabled = true;
}

function mainPhase1() {
    var valor = document.getElementById("input").value;
    if (valor != '') {
        abaixaCarta(valor)
        reloadHand()
        document.getElementById("field").innerHTML = valor
        document.getElementById("input").value = ''
    }
}

function mainPhase2() {
    var valor = document.getElementById("input").value;
    document.getElementById("battle").disabled = true;
    document.getElementById("battle").style.color = "gray"
    document.getElementById("main2").style.color = "blue"
    if (valor != '') {
        abaixaCarta(valor)
        reloadHand()
        document.getElementById("field").innerHTML = valor
        document.getElementById("input").value = ''
    }
}

function battlePhase() {
    document.getElementById("battle").style.color = "blue"
    document.getElementById("main1").style.color = "gray"
    document.getElementById("main1").disabled = true;
    //função de combate
}

function endPhase() {
    turn()
    document.getElementById("main1").style.color = "black"
    document.getElementById("main2").style.color = "black"
    document.getElementById("battle").style.color = "black"
    document.getElementById("main1").disabled = false;
    document.getElementById("battle").disabled = false;

}

function turn() {
    draw(deck)
    reloadHand()
    turno++
    document.getElementById("turno").innerHTML = 'Turno ' + turno.toString()
    document.getElementById("main1").style.color = "blue"
}

function initGame() {
    initialDraw(deck)
    reloadHand()
    turn()
}

function abaixaCarta(valor) {
    for (i = 0; i <= hand.length; i++) {
        if (hand[i] == valor) {
            var index = hand.indexOf(valor);
            hand.splice(index, 1);
            break
        }
    }
}
