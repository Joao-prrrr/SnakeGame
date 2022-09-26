const deuxJchck = document.getElementById("deuxJ");
const troisJchck = document.getElementById("troisJ");
const quatreJchck = document.getElementById("quatreJ");
const troisJinput = document.getElementById("j3");
const quatreJinput = document.getElementById("j4");

let listJoueur = [pionRouge, pionBleu]

function nbJoueur(){
    if(deuxJchck.checked){
        troisJinput.style.display = "none";
        quatreJinput.style.display = "none";
    } else if(troisJchck.checked){
        troisJinput.style.display = "flex";
        quatreJinput.style.display = "none";
    } else if(quatreJchck.checked){
        troisJinput.style.display = "flex";
        quatreJinput.style.display = "flex";
    } else {
        troisJinput.style.display = "flex";
        quatreJinput.style.display = "flex";
    }
}

nbJoueur();