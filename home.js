// Countdown Timer Functionality
function updateCountdown() {
    const eventDate = new Date('2024-12-26T23:59:59');
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById('countdown-timer').textContent = "Event Started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

const icons = document.querySelectorAll('.timeline-icon');
icons.forEach((icon) => {
  setInterval(() => {
    icon.classList.toggle('glow');
  }, 1000);
});

// JavaScript for adding scroll-triggered animations to timeline
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        timelineItems.forEach(item => {
            if (scrollY + window.innerHeight > item.offsetTop + 100) {
                item.classList.add('show');
            }
        });
    });
});
