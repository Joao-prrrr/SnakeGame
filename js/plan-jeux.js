const btnDe = document.getElementById('btnDe')
const de = document.getElementById('de')
let partieEnJeu = false;
let nbAleatoire = 0;
const btnStart = document.getElementById('btnStart')
let listPions = []

let pionVertObj = ""
let pionOrangeObj = ""

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

    listPions = [pionRougeObj, pionBleuObj]

    if (listJoueur.length > 2) {
        pionVertObj = new Pion({
            nomJoueur: listJoueur[2],
            id: document.getElementById('pionVert'),
            enJeu: false,
            case: 0
        })
        if (listJoueur.length == 4) {
            pionOrangeObj = new Pion({
                nomJoueur: listJoueur[3],
                id: document.getElementById('pionOrange'),
                enJeu: false,
                case: 0
            })
        }

    }

    try {
        if(pionVertObj !== ""){
            listPions.push(pionVertObj)
        }
    } catch { console.log('vert exite pas') }

    try {
        if(pionOrangeObj !== ""){
            listPions.push(pionOrangeObj)
        }
    } catch { console.log('Orange exite pas') }
    debuterPartie()
})

function debuterPartie() {
    partieEnJeu = true;

    for (let i = 0; i < listPions.length; i++) {
        let pion = listPions[i];
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

    // while(partieEnJeu) {



    // }

}

function jouerTour() {
    let prochainJoueur = "";
    for (let i = 0; i < listPions.length; i++) {
        let joueur = listPions[i]
        if (joueur.data.enJeu) {
            joueur.avancer(nbAleatoire)
            joueur.data.enJeu = false
            if ((listPions.findIndex(joueur => joueur) + 1) > listPions.length) {
                prochainJoueur = 0;
            } else {
                prochainJoueur = listPions[listPions.findIndex(joueur => joueur) + 1]
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