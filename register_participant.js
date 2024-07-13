// Función para cargar eventos disponibles en el formulario de registro de participantes
async function loadEvents() {
    try {
        // Aquí deberías implementar la lógica para obtener la lista de eventos desde una API o servidor
        const events = ['Event 1', 'Event 2', 'Event 3']; // Ejemplo estático

        const eventSelect = document.getElementById('eventSelect');
        events.forEach(event => {
            const option = document.createElement('option');
            option.text = event;
            eventSelect.add(option);
        });
    } catch (error) {
        console.error('Error loading events:', error);
        alert('Error loading events. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadEvents(); // Cargar eventos al cargar la página

    document.getElementById('participantForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('participantName').value;
        const email = document.getElementById('participantEmail').value;
        const selectedEvent = document.getElementById('eventSelect').value;

        if (!name || !email || !selectedEvent) {
            alert('All fields are required.');
            return;
        }

        try {
            // Aquí deberías implementar la lógica para registrar un participante mediante una API o servidor
            alert(`Participant Registered: ${name} - ${email} for ${selectedEvent}`);
            document.getElementById('participantForm').reset(); // Limpiar formulario después de éxito
        } catch (error) {
            console.error('Error registering participant:', error);
            alert('Error registering participant. Please try again.');
        }
    });
});
