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
 */

const gridElement = document.getElementById('grid');

const select = document.getElementById('levels');

console.log(select.value);

console.log(select.value);

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
        return cicleLvl(101); // row formato da 10
    } 
    if (lvl == "medium") {
        // livello medium
        return cicleLvl(82); // row formato da 9
    }
    // livello hard
    return cicleLvl(50); // row formato da 7
}


function cicleLvl(nBoxes) {
    for (let i = 1; i < nBoxes; i++) {

         // ! aggiunto elementi al DOM in modo dinamico
        const boxElement = document.createElement('div');
        boxElement.classList.add('box');

        if (nBoxes == 101) {
            boxElement.classList.add('n100');
        }
        if (nBoxes == 82) {
            boxElement.classList.add('n81');
        }
        if (nBoxes == 50) {
            boxElement.classList.add('n49');
        }

        gridElement.appendChild(boxElement);
        boxElement.innerHTML = i;

        boxElement.addEventListener('click', function() {
            this.classList.add('bg-aquamarine');
        });

    }
}

