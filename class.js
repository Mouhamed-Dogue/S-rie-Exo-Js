//declaration de la classe
class television{
    constructor(ecran,couleur,taille){
        this.ecran=ecran
        this.couleur=couleur
        this.taille=taille
    }
    regarder(){
        console.log(this.ecran,this.couleur,this.taille)
    }
}
console.log("Voici les caracteristiques du samsung:")
//declaration d'instance d'une television
var samsung=new television("43 pouces","noir","50cmx70cm")
samsung.regarder()