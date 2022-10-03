const deuxJchck = document.getElementById("deuxJ");
const troisJchck = document.getElementById("troisJ");
const quatreJchck = document.getElementById("quatreJ");
const troisJinput = document.getElementById("j3");
const quatreJinput = document.getElementById("j4");
const jUn = document.getElementById("joueurUn");
const jDeux = document.getElementById("joueurDeux");
const jTrois = document.getElementById("joueurTrois");
const jQuatre = document.getElementById("joueurQuatre");
const sectionMenu = document.getElementById("menu-principal");
const sectionPlanJeux = document.getElementById("plan-jeux");
const sectionPlan = document.getElementById("plan");
const rougeSelect = true;
const bleuSelect = true;
let vertSelect = true;
let orangeSelect = true;

let listJoueur = [];



deuxJchck.addEventListener("click", function() {
    troisJinput.style.display = "none";
    vertSelect = false;
    quatreJinput.style.display = "none";
    orangeSelect = false;
});

troisJchck.addEventListener("click", function() {
    troisJinput.style.display = "flex";
    vertSelect = true;
    quatreJinput.style.display = "none";
    orangeSelect = false;
})

quatreJchck.addEventListener("click", function() {
    troisJinput.style.display = "flex";
    vertSelect = true;
    quatreJinput.style.display = "flex";
    vertSelect = true;
});

btnStart.addEventListener('click', function() {
    listJoueur = [];
    const jUnName = jUn.value;
    const jDeuxName = jDeux.value;
    const jTroisName = jTrois.value;
    const jQuatreName = jQuatre.value;
    if (jUnName.trim() === "" || jDeuxName.trim() === "") {
        alert("Veuillez rentrer le nom de tous les joueurs");
    } else if (vertSelect === true) {
        if (jTroisName.trim() === "") {
            alert("Veuillez rentrer le nom de tous les joueurs");
        } else if (orangeSelect === true) {
            if (jQuatreName.trim() === "" || jTroisName.trim() === "") {
                alert("Veuillez rentrer le nom de tous les joueurs");
            } else {
                listJoueur.push(jUnName);
                listJoueur.push(jDeuxName);
                console.log(listJoueur[0]);
                console.log(listJoueur[1]);
                if (vertSelect === true) {
                    listJoueur.push(jTroisName);
                    console.log(listJoueur[2]);
                    if (orangeSelect === true) {
                        listJoueur.push(jQuatreName);
                        console.log(listJoueur[3]);
                    }
                }
                jUn.value = "";
                jDeux.value = "";
                jTrois.value = "";
                jQuatre.value = "";
                sectionMenu.style.display = "none";
                sectionPlan.style.display = "flex";
                sectionPlanJeux.style.display = "flex";
            }
        }
    }
});