const deuxJchck     = document.getElementById("deuxJ");
const troisJchck    = document.getElementById("troisJ");
const quatreJchck   = document.getElementById("quatreJ");
const troisJinput   = document.getElementById("j3");
const quatreJinput  = document.getElementById("j4");
const jUnName       = document.getElementById("joueurUn").value;
const jDeuxName     = document.getElementById("joueurDeux").Value;
const jTroisName    = document.getElementById("joueurTrois").value;
const jQuatreName   = document.getElementById("joueurQuatre").value;
const rougeSelect   = true;
const bleuSelect    = true;
let   vertSelect    = true;
let   orangeSelect  = true;

let listJoueur = [];



deuxJchck.addEventListener("click", function(){
    troisJinput.style.display = "none";
    vertSelect = false;
    quatreJinput.style.display = "none";
    orangeSelect = false;
});

troisJchck.addEventListener("click", function(){
    troisJinput.style.display = "flex";
    vertSelect = true;
    quatreJinput.style.display = "none";
    orangeSelect = false;
})

quatreJchck.addEventListener("click", function(){
    troisJinput.style.display = "flex";
    vertSelect = true;
    quatreJinput.style.display = "flex";
    vertSelect = true;
});

btnStart.addEventListener('click', function() {
    listJoueur.push(jUnName);
    listJoueur.push(jDeuxName);
    if(vertSelect === true)
    {
        listJoueur.push(jTroisName);
        if(orangeSelect === true){
            listJoueur.push(jQuatreName);
        }
    }
});