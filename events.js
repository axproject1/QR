// Función para cargar la lista de eventos
async function loadEventsList() {
    try {
        // Aquí deberías implementar la lógica para obtener la lista de eventos desde una API o servidor
        const events = ['Event 1', 'Event 2', 'Event 3']; // Ejemplo estático

        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = ''; // Limpiar lista antes de agregar elementos

        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            eventsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading events list:', error);
        alert('Error loading events list. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadEventsList(); // Cargar lista de eventos al cargar la página
});
