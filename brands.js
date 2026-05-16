/* =========================
FILE : brands.js
========================= */


console.log("Brands Page Loaded Successfully");


/* HOVER EFFECT */

const cards =
document.querySelectorAll(".brand-card");


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.03)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});