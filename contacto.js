document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !email) {
            alert('Por favor completa tu nombre y correo.');
            return;
        }

        alert(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
        form.reset();
        console.log({ nombre, email, mensaje });
    });
});