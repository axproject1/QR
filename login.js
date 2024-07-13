document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Username and password are required.');
        return;
    }

    try {
        // Aquí deberías implementar la lógica para iniciar sesión mediante una API o servidor
        alert(`Logged in as: ${username}`);
        document.getElementById('loginForm').reset(); // Limpiar formulario después de éxito
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Error logging in. Please try again.');
    }
});
