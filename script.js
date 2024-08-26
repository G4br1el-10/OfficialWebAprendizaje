document.addEventListener('DOMContentLoaded', function() {
    // Crear letras flotantes en el fondo
    const body = document.querySelector('.floating-letters-background');

    for (let i = 0; i < 20; i++) {
        let letter = document.createElement('div');
        letter.className = 'floating-letter';
        letter.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        letter.style.left = `${Math.random() * 100}vw`;
        letter.style.top = `${Math.random() * 100}vh`;
        letter.style.animationDuration = `${Math.random() * 10 + 5}s`;
        body.appendChild(letter);
    }
});
