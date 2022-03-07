/**
 *  a) costruire lato front html e css
 *      - grid
 *      - box
 * 
 *  b) gli elementi del DOM verranno aggiunti tramite javascript in modo dinamico
 * 
 *  c) in base alla difficoltà i numeri dei box cambiano
 *      - easy contiene da 1 a 100 blocchi
 *      - medium contiene da 1 a 81 blocchi
 *      - hard contiene da 1 a 49 blocchi
 * 
 *  d) dobbiamo creare dei bottone per far scegliere al giocatore il livello che vuole fare
 * 
 *  e) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
 * 
 * 
 */

const gridElement = document.getElementById('grid');

const select = document.getElementById('levels');

const btnPlay = document.getElementById('generate-box');
btnPlay.addEventListener('click', function() {
    // reset
    // gridElement.innerHTML = "";
    return lvlBlock(select.value);
});

/**
 *  funzione per sapere in base livello scelto dal giocatore quanti box
 *  verranno generati
 * 
 * @param {*} lvl 
 * @returns 
 */
function lvlBlock(lvl) {

    if (lvl == "easy") {
        // livello easy
        return cicleLvl(100); // row formato da 10
    } 
    if (lvl == "medium") {
        // livello medium
        return cicleLvl(81); // row formato da 9
    }
    // livello hard
    return cicleLvl(49); // row formato da 7
}


function cicleLvl(nBoxes) {
    for (let i = 1; i < nBoxes + 1; i++) {

         // ! aggiunto elementi al DOM in modo dinamico
        const boxElement = document.createElement('div');
        boxElement.classList.add('box');

        if (nBoxes == 100) {
            boxElement.classList.add('n100');
        }
        if (nBoxes == 81) {
            boxElement.classList.add('n81');
        }
        if (nBoxes == 49) {
            boxElement.classList.add('n49');
        }

        gridElement.appendChild(boxElement);
        boxElement.innerHTML = i;

        boxElement.addEventListener('click', function() {
            this.classList.add('bg-aquamarine');

            if (blackList.includes(i)) {
                boxElement.classList.add('bomb');
            }

        });

    }

    const blackList = [];

        for (let i = 0; i < 16; i++) {

            blackList.push(checkUniqueNumber(blackList, 1, nBoxes));
    
    }

    console.log(blackList);
}

/**
 * funzioine per effettuare una random number tra min e max
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
    
}

function checkUniqueNumber(blacklist, min, max) {

    let check = false;
    let randomInt;

    while (!check) {

        randomInt = randomNumber(min, max)

        if (!blacklist.includes(randomInt)) {
            check = true;
        }
    }

    return randomInt;

}


