<!-- Script para manejar el escaneo de QR -->
<script src="https://rawgit.com/schmich/instascan-builds/master/instascan.min.js"></script>
<script>
    // Crear un nuevo lector de QR
    let scanner = new Instascan.Scanner({ video: document.getElementById('qr-scanner') });

    // Escuchar el evento de escaneo de QR
    scanner.addListener('scan', function (content) {
        alert('Scanned: ' + content);
        // Aquí puedes implementar la lógica para verificar la asistencia
        // Comparar el contenido del QR con los eventos registrados, etc.
    });

    // Iniciar el escáner al cargar la página
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (error) {
        console.error(error);
    });
</script>
