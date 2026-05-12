// --- Set Current Year in Footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.querySelector('i').classList.replace('ph-x', 'ph-list');
    });
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
        
        const card = document.createElement('a');
        card.href = link;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = 'portfolio-card glass-card fade-up stagger';
        
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
        
        let thumbHTML = '';
        if (thumbUrl) {
            thumbHTML = `<img src="${thumbUrl}" alt="${title.replace(/"/g, '&quot;')}" class="video-thumb">`;
        } else {
            thumbHTML = `<div class="video-thumb thumb-fallback"></div>`;
        }

        card.innerHTML = `
            ${thumbHTML}
            ${tag ? `<div class="card-tag">${tag}</div>` : ''}
            <div class="play-icon"><i class="ph-fill ph-play"></i></div>
            <div class="card-overlay">
                <h4>${title}</h4>
                <span class="watch-btn">Watch Full Video <i class="ph ph-arrow-up-right"></i></span>
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
