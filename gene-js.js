var STRONG = 0;
let LMAJ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let LMIN = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let NOMBRE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let SYMBOLE = ['&', '*', '$', '(', ')', '!', '?'];
var MDP = '';
let CHOIXLISTE = [];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function NEWMDP() {
    CHOIXLISTE = []

    STRONG = document.getElementById("STRONG").value;

    if (document.getElementById("LMAJ").checked === true) {
        for(let i = 0; i <= LMAJ.length; i++){
            CHOIXLISTE.push(LMAJ[i]);
        }
    }

    if (document.getElementById("LMIN").checked === true) {
        for(let i = 0; i <= LMIN.length; i++){
            CHOIXLISTE.push(LMIN[i]);
        }
    }

    if (document.getElementById("NOMBRE").checked === true) {
        for(let i = 0; i <= NOMBRE.length; i++){
            CHOIXLISTE.push(NOMBRE[i]);
        }
    }

    if (document.getElementById("SYMBOLE").checked === true) {
        for(let i = 0; i <= SYMBOLE.length; i++){
            CHOIXLISTE.push(SYMBOLE[i]);
        }
    }



    for(let i = 0; i <= STRONG; i++){
        MDP = MDP + CHOIXLISTE[getRandomInt(CHOIXLISTE.length)];
    }

    document.getElementById("EP-MDP").innerText = MPD;
}