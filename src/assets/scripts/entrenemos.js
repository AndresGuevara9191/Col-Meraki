const modal = document.querySelector(".training-modal");
const openBtn = document.querySelector(".training-btn");
const closeBtn = document.querySelector(".training-close");

// ==========================================
// ABRIR MODAL
// ==========================================

const buttons = document.querySelectorAll(".training-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        const modal = document.getElementById(modalId);

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// ==========================================
// CERRAR MODAL
// ==========================================

const modals = document.querySelectorAll(".training-modal");

modals.forEach(modal => {

    // Botón cerrar

    modal.querySelector(".training-close").addEventListener("click", () => {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });


    // Clic fuera del modal

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});


// ==========================================
// ESC
// ==========================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        document.querySelectorAll(".training-modal").forEach(modal => {

            modal.classList.remove("active");

        });

        document.body.style.overflow = "";

    }

});