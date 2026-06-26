// --- Set Current Year in Footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
const logo = document.querySelector('.logo');

let focusableElements = [];

function toggleMenu(isOpen) {
    mobileMenu.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
    const icon = hamburger.querySelector('i');
    if (isOpen) {
        icon.classList.replace('ph-list', 'ph-x');
        hamburger.setAttribute('aria-label', 'Close Menu');
        hamburger.setAttribute('title', 'Close Menu');
        // Cache focusable elements for focus trapping
        focusableElements = [hamburger, ...mobileMenu.querySelectorAll('a, button')];
        // Move focus to the first mobile link for better UX
        setTimeout(() => {
            const firstLink = mobileMenu.querySelector('.mobile-link');
            if (firstLink) firstLink.focus();
        }, 100);
    } else {
        icon.classList.replace('ph-x', 'ph-list');
        hamburger.setAttribute('aria-label', 'Open Menu');
        hamburger.setAttribute('title', 'Open Menu');
    }
}

hamburger.addEventListener('click', () => {
    const isActive = mobileMenu.classList.contains('active');
    toggleMenu(!isActive);
});

document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        toggleMenu(false);
        hamburger.focus();
    }
});
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
        toggleMenu(false);
        hamburger.focus();
    }
});

// --- Scroll Events Handling (Optimized) ---
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.getElementById('back-to-top');
const progressCircle = document.querySelector('.progress-ring__circle');

let isScrolling = false;

const handleScroll = () => {
    const scrollY = window.scrollY;

    // Navbar state
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to Top visibility
    if (scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }

    // Scroll Progress Ring
    if (progressCircle) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressCircle.style.strokeDashoffset = 100 - scrollPercent;
    }

    isScrolling = false;
};

// Initialize scroll position on load
handleScroll();

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(handleScroll);
        isScrolling = true;
    }
}, { passive: true });

// --- ScrollSpy (Active Nav Link) ---
const sections = document.querySelectorAll('section, header');
const navLinksArray = document.querySelectorAll('.nav-links a, .mobile-nav-links a, .logo');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let currentId = entry.target.id;
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
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
        else if (index === 1) tag = "Trending";
        else if (index === 2) tag = "Most Viewed";

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

        const fullTitle = thumbnails[link] && typeof thumbnails[link] === 'object' ? thumbnails[link].title : title;
        const ariaTitle = tag ? `${tag}: ${fullTitle}` : fullTitle;
        card.setAttribute('aria-label', `Watch ${ariaTitle} (opens in a new tab)`);
        card.setAttribute('title', fullTitle);


        let thumbHTML = '';
        if (thumbUrl) {
            thumbHTML = `<img src="${thumbUrl}" alt="${fullTitle.replace(/"/g, '&quot;')}" class="video-thumb" loading="lazy" decoding="async">`;
        } else {
            thumbHTML = `<div class="video-thumb thumb-fallback"></div>`;
        }
        card.innerHTML = `
            ${thumbHTML}
            ${tag ? `<div class="card-tag">${tag}</div>` : ''}
            <div class="card-overlay">
                <h4>${title}</h4>
                <span class="card-desc">Watch on TikTok</span>
            </div>
            <div class="play-icon"><i class="ph-fill ph-play" aria-hidden="true"></i></div>
        `;

        if (thumbUrl) {
            const img = card.querySelector('img');
            if (img) {
                img.addEventListener('error', function () {
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

    // Initialize 3D Tilt effect (Desktop Only & Non-touch)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768 && !isTouchDevice) {
        VanillaTilt.init(portfolioCards, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.15
        });
    }
}

renderPortfolio();


backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
});

// --- Copy to Clipboard ---
const copyBtns = document.querySelectorAll('.copy-btn');
const copyAnnouncement = document.getElementById('copy-announcement');

copyBtns.forEach(btn => {
    const originalLabel = btn.getAttribute('aria-label');
    btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                const icon = btn.querySelector('i');
                const wrapper = btn.closest('.contact-item-wrapper');
                if (icon) {
                    icon.classList.replace('ph-copy', 'ph-check');
                    btn.classList.add('copied');

                    if (wrapper) wrapper.classList.add('copy-success');

                    const itemType = originalLabel.replace('Copy ', '');
                    const announcementText = `${itemType} copied to clipboard`;
                    btn.setAttribute('aria-label', announcementText);
                    btn.setAttribute('title', announcementText);
                    if (copyAnnouncement) {
                        copyAnnouncement.textContent = announcementText;
                    }

                    setTimeout(() => {
                        icon.classList.replace('ph-check', 'ph-copy');
                        btn.classList.remove('copied');
                        if (wrapper) wrapper.classList.remove('copy-success');
                        btn.setAttribute('aria-label', originalLabel);
                        btn.setAttribute('title', originalLabel);
                        if (copyAnnouncement) copyAnnouncement.textContent = '';
                    }, 2000);
                }
            }).catch(err => console.error('Failed to copy: ', err));
        }
    });
});
