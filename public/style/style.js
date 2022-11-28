const header = document.getElementById("index");
const logo = document.getElementById("Logo");


/* -------------- Sticky Nav ----------------*/

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
    if (window.pageYOffset > 0) {
        logo.style.width = "100px";
    } else {
        logo.style.width = "110px";
    }
}

window.addEventListener('scroll', stickyNavbar);

/* -------------- Reavel Animation INDEX ----------------*/

let sr = ScrollReveal({
    duration: 3000,
    distance: "150px",

});

sr.reveal(".txt-accueil", { origin: "left", delay: 100 });
sr.reveal(".gsb-titre", { origin: "right", delay: 100 });
sr.reveal(".txt-accueil2", { origin: "bottom", delay: 100 });



/* -------------- Reavel Animation CONNEC ----------------*/



let src = ScrollReveal({
    duration: 1250,
    distance: "150px",

});

src.reveal(".title-connec", { origin: "top", delay: 100 });


/* -------------- SCROLL IN VIEW ----------------*/

const element = document.getElementById("comptable-table-forfait");
element.scrollIntoView();
