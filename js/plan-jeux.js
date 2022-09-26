const btnDe = document.getElementById('btnDe')
const de = document.getElementById('de')


btnDe.addEventListener('click', async function() {
    nbAleatoire = randomNB(1, 6)

    for(i = 1; i <= 6; i++){
        console.log(i)
        tourneDe(i);
        await sleep(200)
    }

    tourneDe(nbAleatoire)
})

function randomNB(min, max) {
    return Math.floor(Math.random() * max) + min
}

function tourneDe(coteDe) {
    de.src = `./img/de/de_${coteDe}.png`
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}