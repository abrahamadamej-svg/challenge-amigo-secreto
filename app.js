// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value.trim();
    if (nuevoAmigo == '') {
        alert("Por favor, inserte un nombre.");
        return;
    } 
    if (amigos.includes(nuevoAmigo)) {
        alert("Ese nombre ya está en la lista");
        limpiarCaja();
        return
    }  

    amigos.push(nuevoAmigo);
    console.log(amigos);
    mostrarAmigo();
    limpiarCaja();
}

function mostrarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let res = document.getElementById("res");

    if (amigos.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let inAl = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li> El amigo secreto es ${amigos[inAl]} </li>`;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

