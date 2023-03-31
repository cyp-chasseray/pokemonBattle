export class Pokemon {
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

export class Attaque {
    constructor(titre, degats) {
        this.titre = titre;
        this.degats = degats;
    }
}






