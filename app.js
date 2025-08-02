// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 * Captura el valor del input, lo valida y lo añade al array
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Verificar si el nombre ya existe en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Añadir el nombre al array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
    
    // Limpiar resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
}

/**
 * Función para actualizar la visualización de la lista de amigos
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        // Agregar botón para eliminar amigo (funcionalidad extra)
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = ' ✕';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.style.background = 'transparent';
        botonEliminar.style.border = 'none';
        botonEliminar.style.color = '#ff4444';
        botonEliminar.style.cursor = 'pointer';
        botonEliminar.style.fontSize = '14px';
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para eliminar un amigo de la lista (funcionalidad extra)
 * @param {number} index - Índice del amigo a eliminar
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
    
    // Limpiar resultado si la lista queda vacía
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = '';
    }
}

/**
 * Función para sortear un amigo de manera aleatoria
 */
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear. Agregue al menos un nombre.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

/**
 * Función para manejar la tecla Enter en el campo de entrada
 * Permite agregar amigos presionando Enter
 */
function manejarEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Agregar event listener para la tecla Enter cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', manejarEnter);
    
    // Enfocar automáticamente el campo de entrada
    inputAmigo.focus();
});

/**
 * Función para limpiar toda la lista (funcionalidad extra)
 */
function limpiarLista() {
    if (amigos.length === 0) {
        alert('La lista ya está vacía.');
        return;
    }
    
    if (confirm('¿Está seguro de que desea limpiar toda la lista?')) {
        amigos = [];
        actualizarListaAmigos();
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('amigo').focus();
    }
}