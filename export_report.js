// Función para cargar eventos disponibles en el formulario de exportación de informe
async function loadEventsForReport() {
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
        console.error('Error loading events for report:', error);
        alert('Error loading events for report. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadEventsForReport(); // Cargar eventos al cargar la página

    document.getElementById('exportReportBtn').addEventListener('click', async () => {
        const selectedEvent = document.getElementById('eventSelect').value;

        if (!selectedEvent) {
            alert('Please select an event.');
            return;
        }

        try {
            // Aquí deberías implementar la lógica para exportar el informe mediante una API o servidor
            alert(`Export Report for Event: ${selectedEvent}`);
        } catch (error) {
            console.error('Error exporting report:', error);
            alert('Error exporting report. Please try again.');
        }
    });
});
