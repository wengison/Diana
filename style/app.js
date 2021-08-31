var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}




const sluzby = document.querySelector(".li-sluzby");
const kratce = document.querySelector(".li-kratce");
const ukazka = document.querySelector(".li-ukazka");
const kontakt = document.querySelector(".li-kontakt");
const objednat = document.querySelector(".li-objednat");





//---------------------------------------------------------------//

const chevronLeft = document.querySelector(".chevron-left");
const chevronRight = document.querySelector(".chevron-right");
const galerie = document.querySelector(".galerie");

const obrazek1 = document.querySelector(".obr-1");
const obrazek2 = document.querySelector(".obr-2");
const obrazek3 = document.querySelector(".obr-3");
const obrazek4 = document.querySelector(".obr-4");
const obrazek5 = document.querySelector(".obr-5");
const obrazek6 = document.querySelector(".obr-6");

chevronLeft.addEventListener('click', Goleft);
chevronRight.addEventListener('click', Goright);

var posun = document.querySelector('.obr').clientWidth +2;
console.log(posun);
var nasobek = 0;

function Goleft() {
    nasobek--;
    if (nasobek < 0) {
        nasobek = 3;
    }
    obrazek1.style = "transform: translateX(-"+ posun * nasobek +"px)";
    obrazek2.style = "transform: translateX(-"+ posun * nasobek +"px)";
    obrazek3.style = "transform: translateX(-"+ posun * nasobek +"px)";
    obrazek4.style = "transform: translateX(-"+ posun * nasobek +"px)";
    obrazek5.style = "transform: translateX(-"+ posun * nasobek +"px)";
    obrazek6.style = "transform: translateX(-"+ posun * nasobek +"px)";
}

function Goright() {
    nasobek++;
    if (nasobek >3) {
        nasobek = 0;
    }
    obrazek1.style = "transform: translateX(-" + posun * nasobek +"px)";
    obrazek2.style = "transform: translateX(-" + posun * nasobek +"px)";
    obrazek3.style = "transform: translateX(-" + posun * nasobek +"px)";
    obrazek4.style = "transform: translateX(-" + posun * nasobek +"px)";
    obrazek5.style = "transform: translateX(-" + posun * nasobek +"px)";
    obrazek6.style = "transform: translateX(-" + posun * nasobek +"px)";
}

// //---------------------------------------------------------------//

// function multiply(a, b) {
//     i = (a * b);
//     console.log(i);
//   }
//   multiply();

//-----------------------------------------------------------------------------------------------------------------------------------------------
let sirka = document.querySelector('body').clientWidth
console.log(sirka)

