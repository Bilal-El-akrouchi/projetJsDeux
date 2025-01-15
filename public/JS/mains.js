//_________________________ CLASS_____________________


//PERSO
class personnage {
    constructor(nom, maladi, argent, poche, étatDeSanté) {
        this.nom=nom
        this.maladi=maladi
        this.argent=argent
        this.poche=poche
        this.étatDeSanté=étatDeSanté
    }
    seDéplacer(x,y){
        console.log(`${this.nom} c'est déplacer de ${x} vers ${y}. respect man §`)
    }
}

//lieu
class lieu {
    constructor(nom, stock) {
        this.nom=nom
        this.stock=stock
    }
}
//_______________création d'objet_______________
// #personnage
const Marcus= new personnage ("Marcus", "mal indenté", 100, "vide", "malade" )
const Optimus= new personnage ("Optimus", "unsave", 200, "vide", "malade" )
const Sangoku= new personnage ("Sangoku", "404", 80, "vide", "malade" )
const DarthVader= new personnage ("DarthVader", "azmatique", 110, "vide", "malade" )
const Semicolon= new personnage ("Semicolon", "syntaxError", 60, "vide", "malade" )
// #lieu
const salleDattente = new lieu( "salle d'attente")