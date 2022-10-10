let pionId = "";
let pionPosition = "";

let Pion = function(data) {
    this.data = data;
    // id: document.getElementById('pionBleu'),
    // enJeux: false,
    // case: 0
    pionId = this.data.id
    pionPosition = { x: pionId.style.left.slice(-1), y: pionId.style.top.slice(-1) }

}

Pion.prototype.mettrePionEnPlace = function() {
    pionId.style.display = "block"
    this.data.case = 0

}

Pion.prototype.avancer = function(nbAleatoire) {

    for (let i = 1; i <= nbAleatoire; i++) {

        if (this.data.case >= 6 && this.data.case < 8 || this.data.case >= 14 && this.data.case < 16 || this.data.case >= 22 && this.data.case < 24 || this.data.case >= 30 && this.data.case < 32) {
            pionId.style.top = `${pionPosition.y + 5}%`

        } else if (this.data.case >= 8 && this.data.case <= 13 || this.data.case >= 24 && this.data.case <= 29) {
            pionId.style.left = `${pionPosition.x + 5*-1}%`
        } else {
            pionId.style.left = `${pionPosition.x + 5}%`
        }

        this.data.case += i
    }
}