let Pion = function(data) {
    this.data = data;
    // id: document.getElementById('pionBleu'),
    // enJeux: false,
    // case: 0
}

Pion.prototype.mettrePionEnPlace = function() {
    pionId = this.data.id
    pionId.style.display = "block"
    
    this.data.case = 0;
    
}

Pion.prototype.avancer = function(nbAleatoire) {
    this.data.case += nbAleatoire
}

