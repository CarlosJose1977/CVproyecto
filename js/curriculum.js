
document.getElementById('open').addEventListener('click', function () {
    console.log("capturamos el evento click open");
    document.getElementById("modal_container").classList.add('show');
});

document.getElementById('close').addEventListener('click', function () {
    console.log("capturamos el evento click close");
    document.getElementById("modal_container").classList.remove('show');
});


//const modal_container = document.getElementById('modal_container');
//const close = document.getElementById('close');

//open.addEventlistener('click', () => {
//   modal_container.classList.add('show');
//});

//close.addEventlistener('click', () => {
//    modal_container.classList.remove('show');
//});

