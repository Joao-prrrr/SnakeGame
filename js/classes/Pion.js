// let this.data.id = "";
// let this.pionPosition = "";

let Pion = function(data) {
    this.data = data;
    // id: document.getElementById('pionRouge'),
    // enJeux: false,
    // case: 0
    // this.data.id = this.data.id
    this.pionPosition = {x: this.data.id.style.left.slice(-1), y: this.data.id.style.top.slice(-1)}

}

Pion.prototype.mettrePionEnPlace = function() {
    this.data.id.style.display = "block"
    this.data.case = 0
    
}

Pion.prototype.avancer = function(nbAleatoire) {
    
    for(let i = 1; i <= nbAleatoire; i++) {
        
        if(this.data.case >= 6 && this.data.case < 8 || this.data.case >= 14 && this.data.case < 16 || this.data.case >= 22 && this.data.case < 24 ||this.data.case >= 30 && this.data.case < 32){
            this.data.id.style.top = `${this.pionPosition.y + 5}%`
            
        } else if(this.data.case >= 8 && this.data.case <= 13 || this.data.case >= 24 && this.data.case <= 29){
            this.data.id.style.left = `${this.pionPosition.x + 5*-1}%`
        } else {
            this.data.id.style.left = `${this.pionPosition.x + 5}%`
        }
        
        this.data.case += i
    }
}

