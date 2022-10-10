const btnValider1 = document.getElementById("valider1");
const btnValider2 = document.getElementById("valider2");
const btnValider3 = document.getElementById("valider3");
const btnValider4 = document.getElementById("valider4");
const btnValider5 = document.getElementById("valider5");
const btnValider6 = document.getElementById("valider6");
const btnValider7 = document.getElementById("valider7");
const btnValider8 = document.getElementById("valider8");
const btnValider9 = document.getElementById("valider9");
const btnValider10 = document.getElementById("valider10");
const btnValider11 = document.getElementById("valider11");
const btnValider12 = document.getElementById("valider12");
const question = document.getElementById("question");
const plan = document.getElementById("plan");
const reponse1 = document.getElementById("correct1");
const reponse2 = document.getElementById("correct2");
const reponse3 = document.getElementById("correct3");
const reponse4 = document.getElementById("correct4");
const reponse5 = document.getElementById("correct5");
const reponse6 = document.getElementById("correct6");
const reponse7 = document.getElementById("correct7");
const reponse8 = document.getElementById("correct8");
const reponse9 = document.getElementById("correct9");
const reponse10 = document.getElementById("correct10");
const reponse11 = document.getElementById("correct11");
const reponse12 = document.getElementById("correct12");

btnValider1.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider2.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider3.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider4.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider5.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider6.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider7.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider8.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider9.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider10.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider11.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider12.addEventListener("click", function() {
    question.style.display = "none";
    plan.style.display = "flex";
});

function randQuestion() {
    let i = Math.floor(Math.random(1, 13));
    document.getElementById("question" + i).style.display = "flex";
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse1.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse2.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse3.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse4.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse5.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse6.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse7.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse8.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse9.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse10.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse11.checked) {
        joueur.avance(3)
    } else {

    }
}

function verifReponse() {
    let pionEnJeu = ""
    listJoueur.forEach(joueur => {
        pionEnJeu = joueur
    });
    if (reponse12.checked) {
        joueur.avance(3)
    } else {

    }
}