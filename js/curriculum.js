
document.getElementById('open').addEventListener('click', function () {
    console.log("capturamos el evento click open");
    document.getElementById("modal_container").classList.add('show');
});

document.getElementById('close').addEventListener('click', function () {
    console.log("capturamos el evento click close");
    document.getElementById("modal_container").classList.remove('show');
});

document.getElementById('open_b').addEventListener('click', function () {
    console.log("capturamos el evento click open");
    document.getElementById("modal_container_b").classList.add('show');
});

document.getElementById('close_b').addEventListener('click', function () {
    console.log("capturamos el evento click close");
    document.getElementById("modal_container_b").classList.remove('show');
});

document.getElementById('open_c').addEventListener('click', function () {
    console.log("capturamos el evento click open");
    document.getElementById("modal_container_c").classList.add('show');
});

document.getElementById('close_c').addEventListener('click', function () {
    console.log("capturamos el evento click close");
    document.getElementById("modal_container_c").classList.remove('show');
});