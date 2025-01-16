//_________________________ CLASS_____________________//


//PERSO
class personnage {
    constructor(nom, maladi, argent, poche, étatDeSanté) {
        this.nom=nom
        this.maladi=maladi
        this.argent=argent
        this.poche=poche
        this.étatDeSanté=étatDeSanté
    }
    seDéplacer(x, y) {
        const index = x.stock.indexOf(this.nom);
        
        if (index !== -1) {
            x.stock.splice(index, 1);
            y.stock.push(this.nom);
            console.log(`${this.nom} s'est déplacé de ${x.nom} vers ${y.nom}. Respect man §`);
        } else {
            console.log(`${this.nom} n'est pas dans ${x.nom} pour se déplacer.`);
        }
    }

}

//lieu
class lieu {
    constructor(nom, stock) {
        this.nom=nom
        this.stock=stock
    }
}
//_______________création d'objet_______________//
// #personnage
const Marcus= new personnage ("Marcus", "mal indenté", 100, "vide", "malade" )
const Optimus= new personnage ("Optimus", "unsave", 200, "vide", "malade" )
const Sangoku= new personnage ("Sangoku", "404", 80, "vide", "malade" )
const DarthVader= new personnage ("DarthVader", "azmatique", 110, "vide", "malade" )
const Semicolon= new personnage ("Semicolon", "syntaxError", 60, "vide", "malade" )

//le docteur___________________________________________________________
const Docteur= new personnage ("docteur", "riche", 100, "vide", "sain")
//ajouter ici une aleur préscrition ou je peux stocker le nom des médicament
Docteur.prescription=["du réindentadam", "du céfoutumaisOngardeEspoire", "un F5","une cigarette","du résyntax"]
Docteur.prix=50
////////////////////
Docteur.faitEntré = function(y, x) {
    const index = salleDattente.stock.indexOf(y.nom);

    if (index !== -1) {
        salleDattente.stock.splice(index, 1); 
        x.stock.push(y.nom); 
        console.log(`${y.nom} entre dans ${x.nom}`);
        console.log(`Il reste ${salleDattente.stock.length} personne(s) dans la salle d'attente`);
    } else {
        console.log(`${y.nom} n'est pas dans la salle d'attente.`);
    }
};
///////////////////
Docteur.diagnostque=function(x){
    // je dois ajouter une facon de dire bonjour si salle d'attente contiens quelqu'un
   
    if (x.argent >= 50) {
        x.argent -= this.prix
        this.argent += this.prix
        console.log(`${x.nom} est pris charge par le docteur`)
        console.log(`${this.nom} diagnostque ${x.maladi} à ${x.nom} et lui fais payer 50 pesos`)
        console.log(`${x.nom} dit; "il ne me reste plus que ${x.argent} pesos`)
        switch (x.maladi) {
            case"mal indenté":
            console.log(`je vous prescrit, ${this.prescription[0]} `)
            x.étatDeSanté="en traitement"
            console.log(`${x.nom} est désormais ${x.étatDeSanté}`)
            
            break;
            
            case"unsave":
            console.log(`je vous prescrit, ${this.prescription[1]} `)
            x.étatDeSanté="en traitement"
            console.log(`${x.nom} est désormais ${x.étatDeSanté}`)
            
            break;
            
            case"404":
            console.log(`je vous prescrit, ${this.prescription[2]} `)
            x.étatDeSanté="en traitement"
            console.log(`${x.nom} est désormais ${x.étatDeSanté}`)
            
            break;
            
            case"azmatique":
            console.log(`je vous prescrit, ${this.prescription[3]}`)
            x.étatDeSanté="en traitement"
            console.log(`${x.nom} est désormais ${x.étatDeSanté}`)
            
            break;
            
            
            case"syntaxError":
            console.log(`je vous prescrit, ${this.prescription[4]} `)
            x.étatDeSanté="en traitement"
            console.log(`${x.nom} est désormais ${x.étatDeSanté}`)
            
            break;
            
            default:
                console.log("what bro c'ets une maladie inconnu ")
                console.log(`${x.nom} est toujours ${x.étatDeSanté}`)
                break;

            }
            console.log(`${this.nom} pense intérieuement "j'ai désormais ${this.argent} pesos`)
        /////////PAS OUBLIER JE FAIS LES CASE POUR LES DIFF2RENT MALADIT
        
    }else{ console.log (`on est au usa les soins c pa pour lè povr *${this.nom} injecte dose léthale de mor^phine a ${x.nam}`)}
}
// #lieu
//pharmacie___________________________________
const pharmacie = new lieu( "pharmacie", [""])
// pas oublier clefs valeurs ici 
const traitements = {"mal indenté": "du réindentadam","unsave": "du céfoutumaisOngardeEspoire","404": "un F5","azmatique": "une cigarette","syntaxError": "du résyntax"}


pharmacie.acheter = function(x) {
    console.log(`Bienvenue à la pharmacie, ${x.nom} !`)

    // Trouver le traitement correspondant à la maladie du x
    let traitement = traitements[x.maladi]
    let traitementPrix = 0
    if (traitement == "du réindentadam") { 
        traitementPrix = 60}
    else if (traitement == "du céfoutumaisOngardeEspoire") {
        traitementPrix = 100} 
    else if (traitement == "un F5") {
        traitementPrix = 35} 
    else if (traitement == "une cigarette") {
        traitementPrix = 40} 
    else if (traitement == "du résyntax"){
        traitementPrix = 20} 

    if (x.argent >= traitementPrix) {
        x.argent -= traitementPrix
        x.poche = traitement
        x.étatDeSanté = "sain"
        console.log(`${x.nom} a acheté ${x.poche} pour ${traitementPrix}€.`)
        console.log(`État actuel de ${x.nom}: ${x.étatDeSanté}, il lui reste ${x.argent}€.`)
    } else {
        console.log(`Triste nouvelle : ${x.nom} est mort car il n'avait pas assez d'argent pour se soigner.`)
        cimetière.stock.push(x.nom)
        console.log(`Annonce nécrologique : ${x.nom} souffrait de ${x.maladi}. Il nous a quittés.`)
    }
}


const cabinet = new lieu( "cabinet", [""])
const salleDattente = new lieu( "salleDattente", ["Marcus","Optimus","Sangoku","DarthVader","Semicolon"])
const cimetière = new lieu("cimetière", [])



// personnage.seDéplacer("dehore",salleDattente)

Docteur.faitEntré(Marcus, cabinet)
Docteur.diagnostque(Marcus)
DarthVader.seDéplacer(cabinet,pharmacie)
pharmacie.acheter(Marcus)

console.log(`   `)
console.log(`   `)
Docteur.faitEntré(Optimus, cabinet)
Docteur.diagnostque(Optimus)
DarthVader.seDéplacer(cabinet,pharmacie)
pharmacie.acheter(Optimus)

console.log(`   `)
console.log(`   `)
Docteur.faitEntré(Sangoku, cabinet)
Docteur.diagnostque(Sangoku)
DarthVader.seDéplacer(cabinet,pharmacie)
pharmacie.acheter(Sangoku)

console.log(`   `)
console.log(`   `)
Docteur.faitEntré(DarthVader, cabinet)
Docteur.diagnostque(DarthVader)
DarthVader.seDéplacer(cabinet,pharmacie)
pharmacie.acheter(DarthVader)

console.log(`   `)
console.log(`   `)
Docteur.faitEntré(Semicolon, cabinet)
Docteur.diagnostque(Semicolon)
DarthVader.seDéplacer(cabinet,pharmacie)
pharmacie.acheter(Semicolon)


// j'ai un soucis avec mes commit je n'ai que 33lignes su github