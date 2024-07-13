const apiUrl = 'http://localhost:5000/api';

// Validar Entrada
function validateInput(input) {
    if (!input || input.trim() === '') {
        return false;
    }
    return true;
}

// Mostrar/Ocultar Contenedores
function showContainer(containerId) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        if (container.id === containerId) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });
}

// Cargar eventos en la lista
async function loadEvents() {
    try {
        const response = await fetch(`${apiUrl}/events`);
        const events = await response.json();
        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = ''; // Limpiar la lista

        events.forEach(event => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${event.name} - ${event.date}`;
            eventsList.appendChild(li);
        });
    } catch (err) {
        console.error('Error fetching events:', err);
    }
}

// Crear Evento
document.getElementById('eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;

    if (!validateInput(name) || !validateInput(date) || !validateInput(location)) {
        alert('All fields are required.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/events/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, date, location })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        alert('Event Created');
        console.log('Generated QR Code:', data.qrCode); // Mostrar QR Code generado
        loadEvents();
    } catch (err) {
        console.error('Error creating event:', err);
        alert('Error creating event. Please try again.');
    }
});

// Abrir cámara para escanear QR
document.getElementById('openCameraBtn').addEventListener('click', () => {
    document.getElementById('qrScannerInput').click();
});

// Registrar Participante
document.getElementById('participantForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('participantName').value;
    const email = document.getElementById('participantEmail').value;
    const eventId = document.getElementById('eventSelect').value;

    if (!validateInput(name) || !validateInput(email) || !validateInput(eventId)) {
        alert('All fields are required.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/participants/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, eventId })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        alert('Participant Registered');
        loadEvents();
    } catch (err) {
        console.error('Error registering participant:', err);
        alert('Error registering participant. Please try again.');
    }
});

// Registrar Asistencia
document.getElementById('attendanceForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const qrCode = document.getElementById('qrCode').value;

    if (!validateInput(qrCode)) {
        alert('QR Code is required.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/participants/attendance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ qrCode })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        alert(result.message);
    } catch (err) {
        console.error('Error recording attendance:', err);
        alert('Error recording attendance. Please try again.');
    }
});

// Exportar Reporte de Asistencia
document.getElementById('exportReportBtn').addEventListener('click', async () => {
    try {
        const eventId = document.getElementById('eventSelect').value;
        const token = localStorage.getItem('token');

        if (!eventId) {
            alert('Please select an event.');
            return;
        }

        const response = await fetch(`${apiUrl}/reports/attendance/${eventId}`, {
            headers: {
                'x-auth-token': token
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `attendance_report_${eventId}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    } catch (err) {
        console.error('Error exporting attendance report:', err);
        alert('Error exporting attendance report. Please try again.');
    }
});

// Cargar eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showContainer('menu');
    loadEvents();
});

// Mostrar/Ocultar formularios según el menú
document.getElementById('createEventBtn').addEventListener('click', () => {
    showContainer('eventFormContainer');
});

document.getElementById('loginBtn').addEventListener('click', () => {
    showContainer('loginFormContainer');
});

document.getElementById('registerParticipantBtn').addEventListener('click', () => {
    showContainer('registerParticipantFormContainer');
});

document.getElementById('recordAttendanceBtn').addEventListener('click', () => {
    showContainer('recordAttendanceFormContainer');
});

document.getElementById('eventsBtn').addEventListener('click', () => {
    showContainer('eventsContainer');
});
document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');

    eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;

        if (!eventName || !eventDate || !eventLocation) {
            alert('Please fill in all fields.');
            return;
        }

        const eventData = {
            eventName,
            eventDate,
            eventLocation
        };

        try {
            // Simulación de envío de datos a través de una API o servidor
            console.log('Sending event data:', eventData);
            alert('Event created successfully!'); // Aquí deberías manejar la respuesta real del servidor
            eventForm.reset(); // Limpiar formulario después de éxito
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event. Please try again.');
        }
    });
});
