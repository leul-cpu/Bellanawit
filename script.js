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

// --- Sticky Navbar ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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
const tiktokLinks = [
    "https://www.tiktok.com/@bellanawit?_r=1&_t=ZS-95b3WJFwkbc", 
    "https://vt.tiktok.com/ZSH79tNoc/",
    "https://vt.tiktok.com/ZSH79TH7C/",
    "https://vt.tiktok.com/ZSH79TBLJ/",
    "https://vt.tiktok.com/ZSH799DXr/",
    "https://vt.tiktok.com/ZSH79Ktkj/",
    "https://vt.tiktok.com/ZSH7xjeqD/",
    "https://vt.tiktok.com/ZSH7xFmUk/",
    "https://vt.tiktok.com/ZSH7xUqgJ/",
    "https://vt.tiktok.com/ZSH7xj87T/",
    "https://vt.tiktok.com/ZSH7xSt37/",
    "https://vt.tiktok.com/ZSH7xFtYn/",
    "https://vt.tiktok.com/ZSH7x6KH3/",
    "https://vt.tiktok.com/ZSH7xSPEA/",
    "https://vt.tiktok.com/ZSH7xNDfS/",
    "https://vt.tiktok.com/ZSH7x1PBY/",
    "https://vt.tiktok.com/ZS9SssFwM/"
];

// Extract pure video links (filter out profile link)
const videoLinks = tiktokLinks.filter(link => link.includes('/video/') || link.includes('vt.tiktok.com'));

const portfolioGrid = document.getElementById('tiktok-grid');

// Fetch thumbnails and render
function renderPortfolio() {
    let thumbnails = typeof THUMBNAILS_DATA !== 'undefined' ? THUMBNAILS_DATA : {};

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
        
        card.innerHTML = `
            ${thumbUrl ? `<img src="${thumbUrl}" alt="${title.replace(/"/g, '&quot;')}" class="video-thumb" onerror="this.outerHTML='<div class=\\'video-thumb thumb-fallback\\'></div>'">` : `<div class="video-thumb thumb-fallback"></div>`}
            ${tag ? `<div class="card-tag">${tag}</div>` : ''}
            <div class="play-icon"><i class="ph-fill ph-play"></i></div>
            <div class="card-overlay">
                <h4>${title}</h4>
                <span class="watch-btn">Watch Full Video <i class="ph ph-arrow-up-right"></i></span>
            </div>
        `;
        
        portfolioGrid.appendChild(card);
    });

    // Observe new portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(el => {
        observer.observe(el);
    });
}

renderPortfolio();
