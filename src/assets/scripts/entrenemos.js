const modal = document.querySelector(".training-modal");
const openBtn = document.querySelector(".training-btn");
const closeBtn = document.querySelector(".training-close");


//==============================
// ABRIR MODALES
//==============================

const buttons = document.querySelectorAll("[data-modal]");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = document.getElementById(button.dataset.modal);

        if(modal){

            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        }

    });

});


//==============================
// CERRAR MODALES
//==============================

document.querySelectorAll(".training-close").forEach(close => {

    close.addEventListener("click", () => {

        close.closest(".training-modal").classList.remove("active");

        document.body.style.overflow = "";

    });

});


//==============================
// CERRAR AL DAR CLICK AFUERA
//==============================

document.querySelectorAll(".training-modal").forEach(modal => {

    modal.addEventListener("click", e => {

        if(e.target === modal){

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});


//==============================
// CERRAR CON ESC
//==============================

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        document.querySelectorAll(".training-modal.active").forEach(modal => {

            modal.classList.remove("active");

        });

        document.body.style.overflow = "";

    }

});