// let this.data.id = "";
// let this.pionPosition = "";
const lstNbPremiers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
const sectionQ = document.getElementById("question");
const lignes = {
    0: "8%",
    1: "16%",
    2: "30%",
    3: "40%",
    4: "55%",
    5: "65%",
    6: "77%",
    7: "77%",
    15: "8%",
    14: "8%",
    13: "16%",
    12: "30%",
    11: "40%",
    10: "55%",
    9: "65%",
    8: "77%",
    16: "8%",
    17: "16%",
    18: "30%",
    19: "40%",
    20: "55%",
    21: "65%",
    22: "77%",
    23: "77%",
    30: "8%",
    29: "16%",
    28: "30%",
    27: "40%",
    26: "55%",
    25: "65%",
    24: "77%",
    32: "8%",
    33: "16%",
    34: "30%",
    35: "40%",
    36: "55%",
    37: "65%",
    38: "77%"
}



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
    this.case += nbAleatoire
    if (this.case <= 6) {
        this.pionPosition.y = "50%"
    } else if (this.case > 7 && this.case <= 14) {
        this.pionPosition.y = "35%"

    } else if (this.case > 15 && this.case <= 22) {
        this.pionPosition.y = "18%"

    } else if (this.case > 23 && this.case <= 30) {
        this.pionPosition.y = "3%"
    } else if (this.case > 31 && this.case <= 38) {
        this.pionPosition.y = "3%"
    }

    if (this.case == 7) {
        this.pionPosition.y = "42%"
    } else if (this.case == 15) {
        this.pionPosition.y = "25%"
    } else if (this.case == 23) {
        this.pionPosition.y = "10%"
    } else if (this.case == 31) {
        this.pionPosition.y = "-6%"
    }

    this.pionPosition.x = lignes[this.case-1]


    mettreJourPosi(this.data.id, this.pionPosition.x, this.pionPosition.y)

    // partie Louis
    showQuestion();
}

function showQuestion() {
    lstNbPremiers.forEach(nbQ => {
        if (this.case === nbQ) {
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
    if (this.pionPosition.x === lignes[20] && this.pionPosition.y === "18%") {
        this.pionPosition.x = lignes[3];
        this.pionPosition.y = "50%";
    } else if (this.pionPosition.x === lignes[8] && this.pionPosition.y === "35%") {
        this.pionPosition.x = lignes[22];
        this.pionPosition.y = "18%";
    } else if (this.pionPosition.x === lignes[12] && this.pionPosition.y === "35%") {
        this.pionPosition.x = lignes[27];
        this.pionPosition.y = "3%";
    } else if (this.pionPosition.x === lignes[26] && this.pionPosition.y === "3%") {
        this.pionPosition.x = lignes[35];
        this.pionPosition.y = "-6%";
    } else if (this.pionPosition.x === lignes[34] && this.pionPosition.y === "-6%") {
        this.pionPosition.x = lignes[28];
        this.pionPosition.y = "3%";
    }
}