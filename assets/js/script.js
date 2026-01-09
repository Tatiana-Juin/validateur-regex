// Seclectionner les element du dom
let toggleBiblio = document.querySelector(".toggle-bibliotheque");

let hidenBiblio = document.querySelector(".hiden-bibliotheque");
let btnTelBiblio = document.querySelector(".btn-tel-bibliotheque");
let btnEmailBiblio = document.querySelector(".btn-email-bibliotheque");

let btnLancer = document.querySelector("#btn-lancer");
let toggleScore = document.querySelector(".toggle-score");
let pourcentage = document.querySelector(".div-pourcentage");
let paraPourcentage = document.querySelector(".pourcentage");

let inputRegex = document.querySelector(".input-regex");
let btnTelTest = document.querySelector(".btn-tel-test");
let btnEmailTest = document.querySelector(".btn-email-test")
let textareaTest = document.querySelector(".test")
let btnEffacer = document.querySelector(".btn-effacer");
let btnCopier = document.querySelector(".btn-copier");

// Pour faire le toggle 
toggleBiblio.addEventListener("click",() =>{
    // on declare une variable et on ajoute une class qui est hiden 
    
    const isHiden = hidenBiblio.classList.toggle("hiden");
    console.log(isHiden)
//  si hiden est true donc il a disparu on change l'icon du bas 
    toggleBiblio.classList.toggle("bi-arrow-down-short",isHiden)
    // si false en haut
    toggleBiblio.classList.toggle("bi-arrow-up-short",!isHiden)
})