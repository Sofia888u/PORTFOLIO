
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-darkbg', 'shadow-lg', 'border-b', 'border-highlight/20', 'py-3');
        nav.classList.remove('bg-transparent', 'py-4');
    } else {
        nav.classList.remove('bg-darkbg', 'shadow-lg', 'border-b', 'border-highlight/20', 'py-3');
        nav.classList.add('bg-transparent', 'py-4');
    }
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-up').forEach(elem => {
    observer.observe(elem);
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

function openModal(imageSrc) {
    modalImg.src = imageSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        modalImg.src = ''; 
    }, 300);
}
