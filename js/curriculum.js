

const abrir = document.getElementById('abrir');
const modal_a = document.getElementById('modal_a');
const cerrar = document.getElementById('cerrrar');

open.addEventlistener('click', () => {
    modal_a.classList.add('show');
});

close.addEventlistener('click', () => {
    modal_a.classList.remove('show');
});

