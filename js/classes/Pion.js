// let this.data.id = "";
// let this.pionPosition = "";




let Pion = function(data) {
    this.data = data;
    // id: document.getElementById('pionRouge'),
    // enJeux: false,
    // case: 0
    // this.data.id = this.data.id
    this.case = this.data.case
    this.pionPosition = {x: this.data.id.style.left, y: this.data.id.style.top}

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





// partie Louis


}

function question() {

}