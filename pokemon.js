class Pokemon {
    constructor(name, pokedexNumber, taille, poids, type, maxhp, attaques) {
        this.name = name;
        this.pokedexNumber = pokedexNumber;
        this.taille = taille;
        this.poids = poids;
        this.type = type;
        this.maxhp = maxhp;
        this.currenthp = maxhp;
        this.attaques = attaques;
    }

    attaque(cible, criticalCoeff) {

        let degats1 = this.attaques[1].degats;
        let degats0 = this.attaques[0].degats;

        if ((this.currenthp < this.maxhp * 0.20) && (criticalCoeff > 0.1)) {
            cible.currenthp -= degats1;
            return degats1;

        } else if ((this.currenthp < this.maxhp * 0.20) && (criticalCoeff <= 0.1)) {
            cible.currenthp -= degats1 * 2;
            return (degats1 * 2);

        } else if ((this.currenthp > this.maxhp * 0.20) && (criticalCoeff > 0.1)) {
            cible.currenthp -= degats0;
            return degats0;

        } else if ((this.currenthp < this.maxhp * 0.20) && (criticalCoeff <= 0.1)) {
            cible.currenthp -= degats0 * 2;
            return (degats0 * 2);
        }
    }
}

class Attaque {
    constructor(titre, degats) {
        this.titre = titre;
        this.degats = degats;
    }
}

pikachu = new Pokemon("Pikachu", "025", 40, 6, "electrique", 82, [new Attaque("statik", 10), new Attaque("paratonerre", 25)])
evoli = new Pokemon("Evoli", "133", 30, 6.5, "normal", 70, [new Attaque("adaptabilite", 9), new Attaque("anticipation", 15)])

coinFlip = Math.round(Math.random())

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

    attaque1Degats = player1.attaque(player2, Math.random());
    console.log(`${player1.name} a attaqué. Il a fait ${attaque1Degats} degats.`);

    if (player2.currenthp <= 0) {
        console.log(`${player1.name} a gagné le combat. Il lui restait ${player1.currenthp} points de vie`)

    } else {
        attaque2Degats = player2.attaque(player1, Math.random());
        console.log(`${player2.name} a attaqué. Il a fait ${attaque2Degats} degats.`);
        if (player1.currenthp <= 0) {
            console.log(`${player2.name} a gagné le combat. Il lui restait ${player2.currenthp} points de vie`);
        }
    }
}







