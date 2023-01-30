

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventlistener('click', () => {
    modal_container.classList.add('show');
});

close.addEventlistener('click', () => {
    modal_container.classList.remove('show');
});

