// declaration de la fonction poo
function ordinateur(processeur,ram,disque,generation) {
    this.processeur=processeur
    this.ram=ram
    this.disque=disque
    this.generation=generation
}
// creation d'instance hp a partir de la fonction
var hp =new ordinateur("i7","16Go","1To",12);
//affichage de cette instance avec ses caracteristiques
console.log("Ordinateur HP:\n","Processeur:",hp.processeur ,"\nDisque:",hp.disque,"\nRAM:",hp.ram,"\nGeneration:",hp.generation,"th")
