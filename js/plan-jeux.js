

const btnDe = document.getElementById('btnDe')
const de = document.getElementById('de')


let pionBleu = new Pion({
    id: document.getElementById('pionBleu'),
    enJeux: false,
    case: 0,
    position: {top: '70%', left: '0%'}
})
let pionVert = new Pion({
    id: document.getElementById('pionVert'),
    enJeux: false,
    case: 0,
    position: {top: '70%', left: '0%'}
})
let pionOrange = new Pion({
    id: document.getElementById('pionOrange'),
    enJeux: false,
    case: 0,
    position: {top: '70%', left: '0%'}
})
let pionRouge = new Pion({
    id: document.getElementById('pionRouge'),
    enJeux: false,
    case: 0,
    position: {top: '70%', left: '0%'}
})



btnDe.addEventListener('click', async function() {
    nbAleatoire = randomNB(1, 6)

    for(i = 1; i <= 6; i++){
        console.log(i)
        tourneDe(i);
        await sleep(200)
    }

    tourneDe(nbAleatoire)
})

function avancePion(pion, nbAleatoire) {

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