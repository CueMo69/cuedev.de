// Particle animation code
const particlesContainer = document.getElementById('particles');
const particleCount = 35;

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.position = 'absolute';
    particle.style.backgroundColor = 'lime';
    particle.style.borderRadius = '50%';
    particle.style.width = Math.random() * 5 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.animation = `moveParticle ${Math.random() * 10 + 5}s infinite`;

    particlesContainer.appendChild(particle);
}

for (let i = 0; i < particleCount; i++) {
    createParticle();
}
