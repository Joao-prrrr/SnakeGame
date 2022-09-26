

const btnDe = document.getElementById('btnDe')
const de = document.getElementById('de')


let pionRouge = new Pion({
    nomJoueur: listJoueur[0],
    id: document.getElementById('pionRouge'),
    enJeux: false,
    case: 0
})
let pionBleu = new Pion({
    nomJoueur: listJoueur[1],
    id: document.getElementById('pionBleu'),
    enJeux: false,
    case: 0
})

if(listJoueur.length >= 3){
    let pionVert = new Pion({
        nomJoueur: listJoueur[2],
        id: document.getElementById('pionVert'),
        enJeux: false,
        case: 0
    })
    if(listJoueur.length == 4){
        let pionOrange = new Pion({
            nomJoueur: listJoueur[3],
            id: document.getElementById('pionOrange'),
            enJeux: false,
            case: 0
        })
    }

}



btnDe.addEventListener('click', async function() {
    nbAleatoire = randomNB(1, 6)

    for(i = 1; i <= 6; i++){
        console.log(i)
        tourneDe(i);
        await sleep(200)
    }

    tourneDe(nbAleatoire)


})

function debuterPartie() {
    pionBleu.mettrePionEnPlace()
    pionBleu.data.id.style.top = "65%"
    pionBleu.data.id.style.left = "8%"

    pionBleu.mettrePionEnPlace()
    pionBleu.data.id.style.top = "65%"
    pionBleu.data.id.style.left = "8%"

}

function tourneDe(coteDe) {
    de.src = `./img/de/de_${coteDe}.png`
}

function randomNB(min, max) {
    return Math.floor(Math.random() * max) + min
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}