// Inicializar el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturar el campo de entrada
    const nombre = input.value.trim(); // Eliminar espacios innecesarios

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para sortear un solo amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo secreto seleccionado
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎁 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
