document.getElementById('eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;

    if (!name || !date || !location) {
        alert('All fields are required.');
        return;
    }

    try {
        // Aquí deberías implementar la lógica para crear un evento mediante una API o servidor
        alert(`Event Created: ${name} - ${date}`);
        document.getElementById('eventForm').reset(); // Limpiar formulario después de éxito
    } catch (error) {
        console.error('Error creating event:', error);
        alert('Error creating event. Please try again.');
    }
});
