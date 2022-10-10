// let this.data.id = "";
// let this.pionPosition = "";
const lstNbPremiers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
const sectionQ = document.getElementById("question");
const lignes = {
    0:"8px", 1:"16px", 2:"30px", 3:"40px", 4:"55px", 5:"65px", 6:"77px",
    14:"8px", 13:"16px", 12:"30px", 11:"40px", 10:"55px", 9:"65px", 8:"77px",
    16:"8px", 17:"16px", 18:"30px", 19:"40px", 20:"55px", 21:"65px", 22:"77px",
    30:"8px", 29:"16px", 28:"30px", 27:"40px", 26:"55px", 25:"65px", 24:"77px"}



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
    }
    if (this.case <= 6) {
        this.pionPosition.x = lignes[this.case]
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
    })}