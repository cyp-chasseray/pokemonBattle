import {Pokemon, Attaque} from "./modules/pokemon.mjs";


let pikachu = new Pokemon("Pikachu", "025", 40, 6, "electrique", 82, [new Attaque("statik", 10), new Attaque("paratonerre", 25)])
let evoli = new Pokemon("Evoli", "133", 30, 6.5, "normal", 70, [new Attaque("adaptabilite", 9), new Attaque("anticipation", 15)])

let coinFlip = Math.round(Math.random())

let player1, player2;

if (coinFlip === 0) {
    player1 = pikachu;
    player2 = evoli;
} else {
    player1 = evoli;
    player2 = pikachu;
}

while (player1.currenthp > 0 && player2.currenthp > 0) {

    console.log(`${player1.name} a ${player1.currenthp} points de vie.`);
    console.log(`${player2.name} a ${player2.currenthp} points de vie.`);

    let attaque1Degats = player1.attaque(player2, Math.random());
    console.log(`${player1.name} a attaqué. Il a fait ${attaque1Degats} degats.`);

    if (player2.currenthp <= 0) {
        console.log(`${player1.name} a gagné le combat. Il lui restait ${player1.currenthp} points de vie`)

    } else {
        let attaque2Degats = player2.attaque(player1, Math.random());
        console.log(`${player2.name} a attaqué. Il a fait ${attaque2Degats} degats.`);
        if (player1.currenthp <= 0) {
            console.log(`${player2.name} a gagné le combat. Il lui restait ${player2.currenthp} points de vie`);
        }
    }
}