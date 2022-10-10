// let this.data.id = "";
// let this.pionPosition = "";
const lstNbPremiers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
const sectionQ = document.getElementById("question");




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
    this.data.id.style.display = "block"
    this.data.case = 0

}

Pion.prototype.avancer = function(nbAleatoire) {
    
    if(this.case <= 6) {
        this.pionPosition.y = "65px"
    } else if(this.case > 7 && this.case <= 14) {
        this.pionPosition.y = "50px"
        
    }else if(this.case > 7 && this.case <= 14) {
        this.pionPosition.y = "18px"
        
    }else if(this.case > 7 && this.case <= 14) {
        this.pionPosition.y = "2px"

    if (this.case <= 6) {
        this.pionPosition
    }





    // partie Louis
    showQuestion();

}

function showQuestion() {
    lstNbPremiers.forEach(nbQ => {
        if (this.case === nbQ) {
            sectionQ.style.display = "flex";
            document.getElementById("question" + nbQ).style.display = "flex";
        }
    })}}