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
const btnValider13 = document.getElementById("valider13");
const btnValider14 = document.getElementById("valider14");
const btnValider15 = document.getElementById("valider15");
const btnValider16 = document.getElementById("valider16");
const btnValider17 = document.getElementById("valider17");
const btnValider18 = document.getElementById("valider18");
const btnValider19 = document.getElementById("valider19");
const btnValider20 = document.getElementById("valider20");
const btnValider21 = document.getElementById("valider21");
const btnValider22 = document.getElementById("valider22");
const btnValider23 = document.getElementById("valider23");
const btnValider24 = document.getElementById("valider24");
const btnValider25 = document.getElementById("valider25");
const btnValider26 = document.getElementById("valider26");
const btnValider27 = document.getElementById("valider27");
const btnValider28 = document.getElementById("valider28");
const btnValider29 = document.getElementById("valider29");
const btnValider30 = document.getElementById("valider30");
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
const reponse13 = document.getElementById("correct13");
const reponse14 = document.getElementById("correct14");
const reponse15 = document.getElementById("correct15");
const reponse16 = document.getElementById("correct16");
const reponse17 = document.getElementById("correct17");
const reponse18 = document.getElementById("correct18");
const reponse19 = document.getElementById("correct19");
const reponse20 = document.getElementById("correct20");
const reponse21 = document.getElementById("correct21");
const reponse22 = document.getElementById("correct22");
const reponse23 = document.getElementById("correct23");
const reponse24 = document.getElementById("correct24");
const reponse25 = document.getElementById("correct25");
const reponse26 = document.getElementById("correct26");
const reponse27 = document.getElementById("correct27");
const reponse28 = document.getElementById("correct28");
const reponse29 = document.getElementById("correct29");
const reponse30 = document.getElementById("correct30");

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");
const question10 = document.getElementById("question10");
const question11 = document.getElementById("question11");
const question12 = document.getElementById("question12");
const question13 = document.getElementById("question13");
const question14 = document.getElementById("question14");
const question15 = document.getElementById("question15");
const question16 = document.getElementById("question16");
const question17 = document.getElementById("question17");
const question18 = document.getElementById("question18");
const question19 = document.getElementById("question19");
const question20 = document.getElementById("question20");
const question21 = document.getElementById("question21");
const question22 = document.getElementById("question22");
const question23 = document.getElementById("question23");
const question24 = document.getElementById("question24");
const question25 = document.getElementById("question25");
const question26 = document.getElementById("question26");
const question27 = document.getElementById("question27");
const question28 = document.getElementById("question28");
const question29 = document.getElementById("question29");
const question30 = document.getElementById("question30");

const listRep = [
    reponse1, reponse2, reponse3, reponse4, reponse5, reponse6, reponse7, reponse8, reponse9, reponse10,
    reponse11, reponse12, reponse13, reponse14, reponse15, reponse16, reponse17, reponse18, reponse19, reponse20,
    reponse21, reponse22, reponse23, reponse24, reponse25, reponse26, reponse27, reponse28, reponse29, reponse30,
]

const listQuestions = [
    question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,
    question11, question12, question13, question14, question15, question16, question17, question18, question19, question20,
    question21, question22, question23, question24, question25, question26, question27, question28, question29, question30,
]

const joueur = document.getElementById("joueur");

// let nomPion = "";
// listPions.forEach(pion => {
//     if (pion.data.enJeu) {
//         nomPion = pion.data.joueur
//     }
// });

// joueur.textContent = nomPion + ", vous devez répondre";

btnValider1.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider2.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider3.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider4.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider5.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider6.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider7.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider8.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider9.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider10.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider11.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider12.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider13.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider14.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider15.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider16.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider17.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider18.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider19.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider20.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider21.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider22.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider23.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider24.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider25.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider26.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider27.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider28.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider29.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";
});

btnValider30.addEventListener("click", function() {
    let questionNb = "";
    listQuestions.forEach(question => {
        if(question.style.display == "flex") {
            questionNb = question;
        }
    });
    verifReponse()
    questionNb.style.display = "none"
    question.style.display = "none";
    plan.style.display = "flex";

});



function verifReponse() {
    let pionEnJeu = ""

    listPions.forEach(pion => {
        if(pion.data.enJeu) {
            if( (listPions.indexOf(pion) -1) < 0){
                pionEnJeu = listPions[listPions.indexOf(pion)]
            } else {
                pionEnJeu = listPions[listPions.indexOf(pion) -1]
            }
        }
    })

    listRep.forEach(rep => {
        if(rep.checked) {
            pionEnJeu.avancer(3)
        }
    })
}

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse2.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse3.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse4.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse5.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse6.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse7.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse8.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse9.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse10.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse11.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse12.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse13.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse14.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse15.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse16.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse17.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse18.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse19.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse20.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse21.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse22.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse23.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse24.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse25.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse26.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse27.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse28.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse29.checked) {
//         joueur.avance(3)
//     } else {

//     }
// }

// function verifReponse() {
//     let pionEnJeu = ""
//     listJoueur.forEach(joueur => {
//         pionEnJeu = joueur
//     });
//     if (reponse30.checked) {
//         pionEnJeu.avance(3)
//     } else {

//     }
// }