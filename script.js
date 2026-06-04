// --- Set Current Year in Footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

let focusableElements = [];

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const isActive = mobileMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isActive);
    document.body.classList.toggle('no-scroll', isActive);
    const icon = hamburger.querySelector('i');
    if (isActive) {
        icon.classList.replace('ph-list', 'ph-x');
        hamburger.setAttribute('aria-label', 'Close Menu');
        // Cache focusable elements for focus trapping
        focusableElements = [hamburger, ...mobileMenu.querySelectorAll('a, button')];
    } else {
        icon.classList.replace('ph-x', 'ph-list');
        hamburger.setAttribute('aria-label', 'Open Menu');
    }
});

document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open Menu');
        hamburger.querySelector('i').classList.replace('ph-x', 'ph-list');
    }
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open Menu');
        hamburger.querySelector('i').classList.replace('ph-x', 'ph-list');
    });
});

// Focus trapping and Escape key listener
document.addEventListener('keydown', (e) => {
    if (!mobileMenu.classList.contains('active')) return;

    if (e.key === 'Tab') {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }

    if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open Menu');
        hamburger.querySelector('i').classList.replace('ph-x', 'ph-list');
        hamburger.focus();
    }
});

// --- Sticky Navbar (Throttled) ---
const navbar = document.querySelector('.navbar');
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

// --- ScrollSpy (Active Nav Link) ---
const sections = document.querySelectorAll('section, header');
const navLinksArray = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let currentId = entry.target.id;
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { rootMargin: '-20% 0px -80% 0px' });

sections.forEach(section => {
    if (section.id) scrollSpyObserver.observe(section);
});


// --- Scroll Animations (Intersection Observer) ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    observer.observe(el);
});

// --- Portfolio Data & Rendering ---
const portfolioGrid = document.getElementById('tiktok-grid');

// Fetch thumbnails and render
function renderPortfolio() {
    let thumbnails = typeof THUMBNAILS_DATA !== 'undefined' ? THUMBNAILS_DATA : {};
    const videoLinks = Object.keys(thumbnails);

    videoLinks.forEach((link, index) => {
        let tag = "";
        if (index === 0) tag = "Featured";
        else if (index === 4) tag = "Most Viewed";
        else if (index === 8) tag = "Trending";
        
        let thumbUrl = '';
        let title = `Event Promo Vol. ${index + 1}`;
        
        if (thumbnails[link]) {
            if (typeof thumbnails[link] === 'object') {
                thumbUrl = thumbnails[link].thumb || '';
                title = thumbnails[link].title || title;
            } else {
                thumbUrl = thumbnails[link];
            }
        }
        
        // Truncate title if it's too long
        if (title.length > 50) {
            title = title.substring(0, 47) + '...';
        }

        const card = document.createElement('a');
        card.href = link;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = 'portfolio-card glass-card fade-up stagger';
        card.setAttribute('aria-label', `Watch video: ${title} (opens in a new tab)`);

        
        let thumbHTML = '';
        if (thumbUrl) {
            thumbHTML = `<img src="${thumbUrl}" alt="${title.replace(/"/g, '&quot;')}" class="video-thumb">`;
        } else {
            thumbHTML = `<div class="video-thumb thumb-fallback"></div>`;
        }
        card.innerHTML = `
            ${thumbHTML}
            <div class="play-icon"><i class="ph-fill ph-play" aria-hidden="true"></i></div>
            ${tag ? `<div class="card-tag">${tag}</div>` : ''}
            <div class="card-overlay">
                <h4>${title}</h4>
                <div class="watch-btn">Watch <i class="ph ph-arrow-right" aria-hidden="true"></i></div>
            </div>
        `;
        
        if (thumbUrl) {
            const img = card.querySelector('img');
            if (img) {
                img.addEventListener('error', function() {
                    const fallback = document.createElement('div');
                    fallback.className = 'video-thumb thumb-fallback';
                    this.parentNode.replaceChild(fallback, this);
                });
            }
        }
        
        portfolioGrid.appendChild(card);
    });

    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    // Observe new portfolio cards
    portfolioCards.forEach(el => {
        observer.observe(el);
    });

    // Initialize 3D Tilt effect (Desktop Only)
    if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768) {
        VanillaTilt.init(portfolioCards, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.15
        });
    }
}

renderPortfolio();

// --- Back to Top Button ---
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
}, { passive: true });

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
