const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let scale = 1;

function growYes() {
    scale += 0.5;
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.style.zIndex = "1000";
}

function moveNo() {
    noBtn.style.position = 'fixed';
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', () => {
    moveNo();
});

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    growYes();
    moveNo();
});

noBtn.addEventListener('click', (e) => {
    growYes();
    moveNo();
});

function celebrate() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
    startConfetti();
}

function startConfetti() {
    for(let i = 0; i < 100; i++) {
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