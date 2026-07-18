// JavaScript
function cambiaClase() {
  this.classList.toggle("is-active");
  document.querySelector("body").classList.toggle("nav-activo");
}

function activaSubmenu(event) {
  const isMobile = window.matchMedia('(max-width: 700px)').matches;

  if (!isMobile) {
    return;
  }

  event.preventDefault();
  const parent = this.closest('.nav-item-dropdown');

  document.querySelectorAll('.nav-item-dropdown').forEach(function(item) {
    if (item !== parent) {
      item.classList.remove('activa');
    }
  });

  parent.classList.toggle('activa');
  this.setAttribute('aria-expanded', parent.classList.contains('activa'));
}

const botonMenu = document.querySelector('.header-nav-icon');

if (botonMenu) {
  botonMenu.addEventListener('click', cambiaClase);
}

document.querySelectorAll('.nav-item-dropdown > .nav-link').forEach(function(button) {
  button.addEventListener('click', activaSubmenu);
  //button.addEventListener('pointerdown', activaSubmenu);
});
