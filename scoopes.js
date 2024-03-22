// declaration de la variable externe 
var age=22
// declaration de la fonction (Scoopes)
function verification() {
    // utilisation de la variable externe avec des conditions
    if(age<18){
        console.log("Il est mineur !!!")
    }
    else{
        console.log("Il est majeur !!!")
    }
    return verification
}
// on declare une variable pour qu'elle puisse lire la fonction
let affichage=verification()
console.log(affichage) //celle-ci affichera est majeur car age=22 et que 22>18