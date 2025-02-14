document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const message = document.querySelector('.message p');
    const petals = document.querySelectorAll('.rose-petals > div');
    const sparkles = document.querySelectorAll('.sparkles > div');

    let isBloomed = false;

    container.addEventListener('click', () => {
        if (!isBloomed) {
            // Bloom the rose
            petals.forEach((petal, index) => {
                petal.style.animation = `openRose${index + 2} 2s ease-in-out forwards`;
            });

            // Activate sparkles
            sparkles.forEach(sparkle => {
                sparkle.style.animation = 'sparkle 2s ease-in-out infinite';
            });

            // Update message
            message.textContent = "I love you so much! ❤️";
            message.style.color = '#ff96c0';
            message.style.textShadow = '0 0 10px #ff4e85';

            isBloomed = true;
        } else {
            // Reset animation
            petals.forEach(petal => {
                petal.style.animation = '';
            });

            // Reset sparkles
            sparkles.forEach(sparkle => {
                sparkle.style.animation = '';
            });

            // Reset message
            message.textContent = "Click the rose ❤️";
            message.style.color = 'rgba(255, 255, 255, 0.8)';
            message.style.textShadow = 'none';

            isBloomed = false;
        }
    });
});
