document.addEventListener('DOMContentLoaded', () => {
    const qrScannerInput = document.getElementById('qrScannerInput');
    const openCameraBtn = document.getElementById('openCameraBtn');

    openCameraBtn.addEventListener('click', () => {
        qrScannerInput.click();
    });

    document.getElementById('attendanceForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const qrCode = document.getElementById('qrCode').value;

        if (!qrCode) {
            alert('QR Code is required.');
            return;
        }

        try {
            // Aquí deberías implementar la lógica para registrar la asistencia mediante una API o servidor
            alert(`Attendance Recorded for QR Code: ${qrCode}`);
            document.getElementById('attendanceForm').reset(); // Limpiar formulario después de éxito
        } catch (error) {
            console.error('Error recording attendance:', error);
            alert('Error recording attendance. Please try again.');
        }
    });
});
