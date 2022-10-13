// let this.data.id = "";
// let this.pionPosition = "";
const lstNbPremiers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
const sectionQ = document.getElementById("question");
const planJeu = document.getElementById('plan')
const sectionG = document.getElementById('gagnant')
const posiXY = [

    {"50px": "650px"}, {"160px": "650px"},    {"286px": "650px"},    {"403px": "650px"},    {"530px": "650px"},    {"650px": "650px"},    {"770px": "650px"},
    {"770px": "572px"},    {"770px": "496px"},    {"650px": "496px"},    {"530px": "496px"},    {"403px": "496px"},    {"286px": "496px"},    {"160px": "496px"},
    {"50px": "496px"},    {"50px": "415px"},    {"50px": "336px"},    {"160px": "336px"},    {"286px": "336px"},    {"403px": "336px"},    {"530px": "336px"},
    {"650px": "336px"},    {"770px": "336px"},    {"770px": "262px"},    {"770px": "180px"},    {"650px": "180px"},    {"530px": "180px"},    {"403px": "180px"},
    {"286px": "180px"},
    {"160px": "180px"},
    {"50px": "180px"},
    {"50px": "102px"},
    {"50px": "21px"},
    {"160px": "21px"},
    {"286px": "21px"},
    {"403px": "21px"},
    {"530px": "21px"},
    {"650px": "21px"},
    {"770px": "21px"}
]



let Pion = function(data) {
    this.data = data;
    // id: document.getElementById('pionRouge'),
    // enJeux: false,
    // case: 0
    // this.data.id = this.data.id
    this.case = this.data.case
    this.pionPosition = { x: this.data.id.style.left, y: this.data.id.style.top }

}

Pion.prototype.mettrePionEnPlace = function() {
    this.data.id.style.display = "inline"
    this.data.case = 0
    
}

Pion.prototype.avancer = function(nbAleatoire) {
    this.data.case += nbAleatoire
    this.case += nbAleatoire

    if(this.case >= 38) {
        this.case = 38
    }
    points = posiXY[this.case]
    this.pionPosition.x = Object.keys(points)[0]
    this.pionPosition.y = points[Object.keys(points)[0]]
    mettreJoueurPosi(this.data.id, this.pionPosition.x, this.pionPosition.y)
    
    setTimeout(() => {
        verifieGagnant(this.case)
        showQuestion(this.case, this.data.nomJoueur)
    }, 2000)

}

function showQuestion(jcase, nickname) {
    nbRand = Math.floor(Math.random() * 30) + 1
    lstNbPremiers.forEach(nbQ => {
        if (jcase === nbQ) {
            let phrase = document.getElementById('joueurNickname').innerHTML
            console.log(phrase)
            document.getElementById('joueurNickname').innerHTML = nickname + phrase
            planJeu.style.display = "none";
            sectionQ.style.display = "flex";
            document.getElementById("question" + nbRand).style.display = "flex";
        }
    })
}

function mettreJoueurPosi(pionId, x, y) {
    pionId.style.top = y
    pionId.style.left = x
}

function verifieGagnant(Jcase) {
    if(Jcase == 38) {
            plan.style.display = "none"
            sectionG.style.display = "flex"
        
    }
}

function echellesTuyeaux(pionPosition) {
    if (pionPosition.x === posiXY[20] && pionPosition.y === "18%") {
        pionPosition.x = posiXY[3];
        pionPosition.y = "50%";
    } else if (pionPosition.x === posiXY[8] && pionPosition.y === "35%") {
        pionPosition.x = posiXY[22];
        pionPosition.y = "18%";
    } else if (pionPosition.x === posiXY[12] && pionPosition.y === "35%") {
        pionPosition.x = posiXY[27];
        pionPosition.y = "3%";
    } else if (pionPosition.x === posiXY[26] && pionPosition.y === "3%") {
        pionPosition.x = posiXY[35];
        pionPosition.y = "-6%";
    } else if (pionPosition.x === posiXY[34] && pionPosition.y === "-6%") {
        pionPosition.x = posiXY[28];
        pionPosition.y = "3%";
    }
}