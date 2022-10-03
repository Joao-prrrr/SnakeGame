const btnDe = document.getElementById('btnDe')
const de = document.getElementById('de')
let listPions;
let partieEnJeu = false;
let nbAleatoire;


let pionRougeObj = new Pion({
    nomJoueur: listJoueur[0],
    id: document.getElementById('pionRouge'),
    enJeu: true,
    case: 0
})
let pionBleuObj = new Pion({
    nomJoueur: listJoueur[1],
    id: document.getElementById('pionBleu'),
    enJeu: false,
    case: 0
})

if(listJoueur.length >= 2){
    let pionVertObj = new Pion({
        nomJoueur: listJoueur[2],
        id: document.getElementById('pionVert'),
        enJeu: false,
        case: 0
    })
    if(listJoueur.length == 3){
        let pionOrangeObj = new Pion({
            nomJoueur: listJoueur[3],
            id: document.getElementById('pionOrange'),
            enJeu: false,
            case: 0
        })
    }

}

listPions = [pionRougeObj, pionBleuObj]

try {
    listPions.push(pionVertObj)
} catch {console.log('vert exite pas')}

try {
    listPions.push(pionOrangeObj)
} catch {console.log('Orange exite pas')}

btnDe.addEventListener('click', async function() {
    nbAleatoire = await lanceDe()
    debuterPartie()
})


function debuterPartie() {
    partieEnJeu = true;

    for(let i = 0; i < listPions.length; i++) {
        let pion = listPions[i];
        console.log(i)
        pion.mettrePionEnPlace()
        pion.data.id.style.top = "65%"
        pion.data.id.style.left = "8%"
    }

    // listPions.forEach(function(pion){
    //     pion.mettrePionEnPlace()
    //     pion.data.id.style.top = "65%"
    //     pion.data.id.style.left = "8%"
    // })

    while(partieEnJeu) {

        listPions.forEach(function(pion) {
            if(pion.data.enJeu) {
                pion.avancer(nbAleatoire)
                pion.data.enJeu = false
            }
        })
    
    }

}


// functions du dés ----------------------
async function lanceDe() {
    coteDe = randomNB(1, 6)

    for(let i = 1; i <= 6; i++){
        console.log(i)
        tourneDe(i)
        await sleep(200)
    }
    tourneDe(coteDe)
    return coteDe;

}
function tourneDe(cote) {
    de.src = `./img/de/de_${cote}.png`
}

function randomNB(min, max) {
    return Math.floor(Math.random() * max) + min
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}