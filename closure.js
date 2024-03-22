function calcul() {
     //delcaration de la variable de la fonction mere (variable local de calcul)
     var quantite=12
     //declaration de la fonction fille (la fonction integree:closure)
     function total(prix){
          //utilisation de la variable de la fonction mere
          var prixtotal=quantite*prix
          return prixtotal
     }
    return total
}
//on declare une variable avec comme valeur(la fonction mere(Calcul))
let resultat=calcul()
console.log(resultat(6000))//celle-ci affichera 72000 car 6000x12=72000
console.log(resultat(1000))//celle-ci affichera 12000 car 1000x12=12000

