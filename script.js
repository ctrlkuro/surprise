const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let scale = 1;

// 1. Move the button when the mouse hovers OR when a finger touches it
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicking on mobile
    moveNoButton();
});

// 2. ONLY grow the Yes button if the No button is actually clicked/tapped
noBtn.addEventListener('click', () => {
    scale += 0.4;
    yesBtn.style.transform = `scale(${scale})`;
    moveNoButton();
});

function moveNoButton() {
    noBtn.style.position = 'fixed';
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Keep it within the visible screen area
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function celebrate() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
    startConfetti();
}

function startConfetti() {
    for(let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = '❤️';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-5vh';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.zIndex = '2000';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
