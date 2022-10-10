// let this.data.id = "";
// let this.pionPosition = "";
const lstNbPremiers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
const sectionQ = document.getElementById("question");
const planJeu = document.getElementById('plan')
const posiXY = [

    {"50px": "650px"},
    {"160px": "650px"},
    {"286px": "650px"},
    {"403px": "650px"},
    {"530px": "650px"},
    {"650px": "650px"},
    {"770px": "650px"},
    {"770px": "572px"},
    {"770px": "496px"},
    {"650px": "496px"},
    {"530px": "496px"},
    {"403px": "496px"},
    {"286px": "496px"},
    {"160px": "496px"},
    {"50px": "496px"},
    {"50px": "415px"},
    {"50px": "336px"},
    {"160px": "336px"},
    {"286px": "336px"},
    {"403px": "336px"},
    {"530px": "336px"},
    {"650px": "336px"},
    {"770px": "336px"},
    {"770px": "262px"},
    {"770px": "180px"},
    {"650px": "180px"},
    {"530px": "180px"},
    {"403px": "180px"},
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

    points = posiXY[this.case]
    this.pionPosition.x = Object.keys(points)[0]
    this.pionPosition.y = points[0]


    mettreJourPosi(this.data.id, this.pionPosition.x, this.pionPosition.y)

    // partie Louis
    lstNbPremiers.forEach(nbQ => {
        if(this.case == nbQ){

            showQuestion();
        }
    });



}

function showQuestion() {
    lstNbPremiers.forEach(nbQ => {
        if (this.case === nbQ) {
            planJeu.style.display = "none";
            sectionQ.style.display = "flex";
            document.getElementById("question" + nbQ).style.display = "flex";
        }
    })
}

function mettreJourPosi(pionId, x, y) {
    pionId.style.top = y
    pionId.style.left = x
}

function echellesTuyeaux() {
    if (this.pionPosition.x === posiXY[20] && this.pionPosition.y === "18%") {
        this.pionPosition.x = posiXY[3];
        this.pionPosition.y = "50%";
    } else if (this.pionPosition.x === posiXY[8] && this.pionPosition.y === "35%") {
        this.pionPosition.x = posiXY[22];
        this.pionPosition.y = "18%";
    } else if (this.pionPosition.x === posiXY[12] && this.pionPosition.y === "35%") {
        this.pionPosition.x = posiXY[27];
        this.pionPosition.y = "3%";
    } else if (this.pionPosition.x === posiXY[26] && this.pionPosition.y === "3%") {
        this.pionPosition.x = posiXY[35];
        this.pionPosition.y = "-6%";
    } else if (this.pionPosition.x === posiXY[34] && this.pionPosition.y === "-6%") {
        this.pionPosition.x = posiXY[28];
        this.pionPosition.y = "3%";
    }
}