const btnDe = document.getElementById('btnDe')
const de = document.getElementById('de')
let partieEnJeu = false;
let nbAleatoire = 0;
const btnStart = document.getElementById('btnStart')
let listPion = []


<<<<<<< HEAD
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

if (listJoueur.length >= 2) {
    let pionVertObj = new Pion({
        nomJoueur: listJoueur[2],
        id: document.getElementById('pionVert'),
        enJeu: false,
        case: 0
    })
    if (listJoueur.length == 3) {
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
} catch { console.log('vert exite pas') }

try {
    listPions.push(pionOrangeObj)
} catch { console.log('Orange exite pas') }
=======
>>>>>>> 5783d43caae4eb2118687351dd1e51640783188c

btnDe.addEventListener('click', async function() {
    nbAleatoire = await lanceDe()
    jouerTour()
})

btnStart.addEventListener('click', () => {
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
    
    listPion = [pionRougeObj, pionBleuObj]
    
    if(listJoueur.length > 2){
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
    
    try {
        listPion.push(pionVertObj)
    } catch {console.log('vert exite pas')}
    
    try {
        listPion.push(pionOrangeObj)
    } catch {console.log('Orange exite pas')}
    debuterPartie()
})

function debuterPartie() {
    partieEnJeu = true;

<<<<<<< HEAD
    for (let i = 0; i < listPions.length; i++) {
        let pion = listPions[i];
=======
    for(let i = 0; i < listPion.length; i++) {
        let pion = listPion[i];
>>>>>>> 5783d43caae4eb2118687351dd1e51640783188c
        console.log(i)
        pion.mettrePionEnPlace()
        pion.data.id.style.top = "65%"
        pion.data.id.style.left = "8%"
    }

    // listJoueur.forEach(function(pion){
    //     pion.mettrePionEnPlace()
    //     pion.data.id.style.top = "65%"
    //     pion.data.id.style.left = "8%"
    // })

<<<<<<< HEAD
    while (partieEnJeu) {

        listPions.forEach(function(pion) {
            if (pion.data.enJeu) {
                pion.avancer(nbAleatoire)
                pion.data.enJeu = false
            }
        })

    }
=======
    // while(partieEnJeu) {

        
    
    // }
>>>>>>> 5783d43caae4eb2118687351dd1e51640783188c

}

function jouerTour() {
    let prochainJoueur = "";
    for(let i = 0; i < listPion.length; i++) {
        let joueur = listPion[i]
        if(joueur.data.enJeu) {
            joueur.avancer(nbAleatoire)
            joueur.data.enJeu = false
            if((listPion.findIndex(joueur => joueur) + 1) > listPion.length) {
                prochainJoueur = 0;
            } else {
                prochainJoueur = listPion[listPion.findIndex(joueur => joueur) + 1]
            }
        }
    }
    prochainJoueur.data.enJeu = true
}

// functions du dés ----------------------
async function lanceDe() {
    coteDe = randomNB(1, 6)

    for (let i = 1; i <= 6; i++) {
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
