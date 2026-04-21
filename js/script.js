// Smooth scrolling for navigation links (only same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Returns true if a card uses a GIF thumbnail
function projectCardHasGifThumb(card) {
    if (card.querySelector('.project-image-gif')) return true;
    const img = card.querySelector('.project-image img');
    if (!img) return false;
    return /\.gif(\?|#|$)/i.test(img.getAttribute('src') || '');
}

document.addEventListener('DOMContentLoaded', () => {

    // ── Fade-in animation for non-GIF project cards ──────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.project-card').forEach(card => {
        if (projectCardHasGifThumb(card)) return;
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ── 5-second auto-dismiss overlay ────────────────────────────────────────
    document.querySelectorAll('.project-card').forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        if (!overlay) return;

        let dismissTimer = null;

        function startDismissTimer() {
            clearTimeout(dismissTimer);
            dismissTimer = setTimeout(() => {
                overlay.classList.add('overlay-hiding');
                overlay.addEventListener('transitionend', () => {
                    overlay.classList.remove('overlay-hiding');
                }, { once: true });
            }, 5000);
        }

        function cancelDismiss() {
            clearTimeout(dismissTimer);
            overlay.classList.remove('overlay-hiding');
        }

        card.addEventListener('mouseenter', () => {
            cancelDismiss();
            startDismissTimer();
        });

        card.addEventListener('mouseleave', cancelDismiss);

        // Reset timer if mouse moves (user is still engaging)
        card.addEventListener('mousemove', () => {
            cancelDismiss();
            startDismissTimer();
        });
    });

    // ── Active nav link on scroll ─────────────────────────────────────────────
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 220) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    console.log('Portfolio initialised ✓');
});
