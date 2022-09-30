
var data = 0;

//initialise la valeur à 0
document.getElementById("counting").innerHTML = data;
  
//incrémente la valeur 
function increment() {
    if(data >=4){
        document.getElementById("message").innerHTML = "Bravo, bel échauffement !"
    }
    if(data >= 8){
        document.getElementById("message").innerHTML = " Vous êtes passé maître en l'art du clic ! "
    }
    document.getElementById("counting").innerHTML = ++data;
}
