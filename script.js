// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 2000);
});

// Particle System
function createParticle() {
    const particlesContainer = document.getElementById('particlesContainer');
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create particles periodically
setInterval(createParticle, 500);

// Create initial particles
for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 100);
}

// Enhanced Floating Hearts
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.className = 'heart';
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
setInterval(createHeart, 800);

// Testing Mode - Bypass countdown (HAPUS atau comment ini di production)
const TESTING_MODE = false; // Set true untuk testing, false untuk production

// Enhanced Countdown Timer dengan Lock System
function updateCountdown() {
    // Testing mode - langsung tampilkan semua konten
    if (TESTING_MODE) {
        // Ubah judul countdown dan nav logo menjadi nama Sonya
        const navLogo = document.getElementById('navLogo');
        const countdownTitle = document.getElementById('countdownTitle');
        const countdownSubtitle = document.getElementById('countdownSubtitle');
        
        if (navLogo) navLogo.textContent = "Sonya Febria Hidayati 💕";
        if (countdownTitle) countdownTitle.textContent = "Sonya Febria Hidayati 💕";
        if (countdownSubtitle) countdownSubtitle.textContent = "Happy Birthday 🎂";
        
        document.getElementById('countdown').innerHTML = `
            <div style="text-align: center; grid-column: 1/-1;">
                <h1 class="dancing-script" style="color: white; font-size: clamp(3rem, 8vw, 7rem); margin-bottom: 20px;">Happy Birthday <span class="emoji-fix">🎂</span></h1>
                <h2 style="color: white; font-size: clamp(2rem, 5vw, 4rem); margin-bottom: 20px; font-weight: bold;">Sonya Febria Hidayati <span class="emoji-fix">💕</span></h2>
                <p style="color: white; font-size: clamp(1.2rem, 3vw, 2rem); margin-bottom: 20px; font-weight: 600;">2 Februari 2026</p>
                <p style="color: white; font-size: clamp(1rem, 2.5vw, 1.5rem); margin-bottom: 15px; font-weight: 600;">Selamat Ulang Tahun Sayangku! <span class="emoji-fix">🌹</span></p>
                <p style="color: white; font-size: clamp(1rem, 2.5vw, 1.5rem); margin-bottom: 30px; font-weight: 600;">Selamat Ulang Tahun Ke-24 Sayangku! <span class="emoji-fix">🎉</span></p>
                <p style="color: #FFE66D; font-size: clamp(0.9rem, 2vw, 1.2rem); margin-top: 20px; opacity: 0.7; font-weight: normal;">🧪 TESTING MODE - Ini adalah preview tampilan saat countdown habis</p>
            </div>
        `;
        
        // Tampilkan semua konten yang disembunyikan
        showAllContent();
        
        // Play birthday music otomatis
        setTimeout(() => {
            playBirthdayMusic();
        }, 1000);
        
        // Trigger celebration
        celebrateBirthday();
        return;
    }
    
    const birthday = new Date('Januari 2, 2026 18:02:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;
    
    if (distance < 0) {
        // Countdown habis - ubah judul menjadi nama Sonya
        const navLogo = document.getElementById('navLogo');
        const countdownTitle = document.getElementById('countdownTitle');
        const countdownSubtitle = document.getElementById('countdownSubtitle');
        
        if (navLogo) navLogo.textContent = "Sonya Febria Hidayati 💕";
        if (countdownTitle) countdownTitle.textContent = "";
        if (countdownSubtitle) countdownSubtitle.textContent = "";
        
        document.getElementById('countdown').innerHTML = `
            <div style="text-align: center; grid-column: 1/-1;">
                <h1 class="dancing-script" style="color: white; font-size: clamp(3rem, 8vw, 7rem); margin-bottom: 20px;">Happy Birthday <span class="emoji-fix">🎂</span></h1>
                <h2 style="color: white; font-size: clamp(2rem, 5vw, 4rem); margin-bottom: 20px; font-weight: bold;">Sonya Febria Hidayati <span class="emoji-fix">💕</span></h2>
                <p style="color: white; font-size: clamp(1.2rem, 3vw, 2rem); margin-bottom: 20px; font-weight: 600;">2 Februari 2026</p>
                <p style="color: white; font-size: clamp(1rem, 2.5vw, 1.5rem); margin-bottom: 15px; font-weight: 600;">Selamat Ulang Tahun Sayangku! <span class="emoji-fix">🌹</span></p>
                <p style="color: white; font-size: clamp(1rem, 2.5vw, 1.5rem); margin-bottom: 30px; font-weight: 600;">Selamat Ulang Tahun Ke-24 Sayangku! <span class="emoji-fix">🎉</span></p>
            </div>
        `;
        
        // Tampilkan semua konten yang disembunyikan
        showAllContent();
        
        // Play birthday music otomatis
        setTimeout(() => {
            playBirthdayMusic();
        }, 1000);
        
        // Trigger celebration
        celebrateBirthday();
        return;
    }
    
    // Countdown masih berjalan - pastikan judul tetap "Special Countdown"
    const navLogo = document.getElementById('navLogo');
    const countdownTitle = document.getElementById('countdownTitle');
    const countdownSubtitle = document.getElementById('countdownSubtitle');
    
    if (navLogo) navLogo.textContent = "⏰ Special Countdown";
    if (countdownTitle) countdownTitle.textContent = "⏰ Special Countdown";
    if (countdownSubtitle) countdownSubtitle.textContent = "Countdown to Your Special Day";
    
    // Sembunyikan konten lain
    hideContentUntilBirthday();
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Fungsi untuk menyembunyikan konten sebelum hari H
function hideContentUntilBirthday() {
    const sectionsToHide = [
        'loveMessage',
        'timeline', 
        'wishes',
        'gallery' // Gallery juga disembunyikan saat countdown belum habis
    ];
    
    sectionsToHide.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Sembunyikan tombol navigasi ke section yang terkunci
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && sectionsToHide.includes(href.substring(1))) {
            link.style.display = 'none';
        }
    });
    
    // Sembunyikan tombol di hero section
    const hiddenButtons = document.querySelectorAll('.countdown-hidden');
    hiddenButtons.forEach(button => {
        button.style.display = 'none';
    });
}

// Fungsi untuk menampilkan semua konten setelah countdown habis
function showAllContent() {
    const sectionsToShow = [
        'loveMessage',
        'timeline',
        'wishes', 
        'gallery'
    ];
    
    sectionsToShow.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'flex';
        }
    });
    
    // Tampilkan semua navigasi
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.style.display = 'block';
    });
    
    // Tampilkan tombol di hero section
    const hiddenButtons = document.querySelectorAll('.countdown-hidden');
    hiddenButtons.forEach(button => {
        button.style.display = 'inline-block';
    });
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simple Background Music
let musicPlayed = false; // Music hanya dimainkan sekali saat countdown habis

function playBirthdayMusic() {
    if (!musicPlayed) {
        const audio = document.getElementById('birthdayMusic');
        if (audio) {
            audio.play().then(() => {
                musicPlayed = true;
                console.log('Birthday music started playing!');
            }).catch(error => {
                console.log('Auto-play prevented:', error);
                // Tidak ada tombol fallback - music hanya akan play jika browser mengizinkan
            });
        }
    }
}

// Enhanced Click Effects
function createFirework(event) {
    const colors = ['#FF6B6B', '#FFE66D', '#23d5ab', '#e73c7e', '#23a6d5'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-explosion';
        particle.style.left = event.clientX + 'px';
        particle.style.top = event.clientY + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 100 + Math.random() * 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.transform = `translate(${vx}px, ${vy}px)`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 500);
    }
}

// Birthday Celebration
function celebrateBirthday() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFirework({
                clientX: Math.random() * window.innerWidth,
                clientY: Math.random() * window.innerHeight
            });
        }, i * 100);
    }
}

// Enhanced Click Effects
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
    
    // Create sparkle
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '25px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'float 1s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
    
    // Create heart burst
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some initial hearts
for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 300);
}

// Gallery Slideshow functionality
const galleryData = [
    { image: 'photos/1.jpeg', title: 'Kenangan Indah 1', description: 'Momen spesial bersama sayangku' },
    { image: 'photos/2.jpeg', title: 'Kenangan Indah 2', description: 'Waktu-waktu berharga kita' },
    { image: 'photos/3.jpeg', title: 'Kenangan Indah 3', description: 'Perjalanan cinta kita' },
    { image: 'photos/4.jpeg', title: 'Kenangan Indah 4', description: 'Momen romantis bersama' },
    { image: 'photos/5.jpeg', title: 'Kenangan Indah 5', description: 'Kebahagiaan dalam setiap detik' },
    { image: 'photos/6.jpeg', title: 'Kenangan Indah 6', description: 'Hadiah terindah untuk kita' }
];

let currentSlide = 0;
let slideshowInterval = null;
let isSlideshowRunning = false;

function updateGalleryDisplay() {
    const display = document.getElementById('galleryDisplay');
    const title = document.getElementById('galleryTitle');
    const description = document.getElementById('galleryDescription');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main display
    if (galleryData[currentSlide].image) {
        display.innerHTML = `<img src="${galleryData[currentSlide].image}" alt="${galleryData[currentSlide].title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
    } else {
        display.innerHTML = `<div class="gallery-placeholder">${galleryData[currentSlide].emoji}</div>`;
    }
    title.textContent = galleryData[currentSlide].title;
    description.textContent = galleryData[currentSlide].description;
    
    // Update thumbnail active state
    thumbnails.forEach((thumb, index) => {
        if (index === currentSlide) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
    
    // Add transition effect
    display.style.opacity = '0';
    setTimeout(() => {
        display.style.opacity = '1';
    }, 100);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryData.length;
    updateGalleryDisplay();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + galleryData.length) % galleryData.length;
    updateGalleryDisplay();
}

function goToSlide(index) {
    currentSlide = index;
    updateGalleryDisplay();
}

function toggleSlideshow() {
    const btn = document.getElementById('slideshowBtn');
    const icon = document.getElementById('slideshowIcon');
    
    if (isSlideshowRunning) {
        // Stop slideshow
        clearInterval(slideshowInterval);
        isSlideshowRunning = false;
        icon.textContent = '▶️';
        btn.innerHTML = '<span id="slideshowIcon">▶️</span> Slideshow Otomatis';
    } else {
        // Start slideshow
        isSlideshowRunning = true;
        icon.textContent = '⏸️';
        btn.innerHTML = '<span id="slideshowIcon">⏸️</span> Hentikan Slideshow';
        
        slideshowInterval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
    }
}

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', function() {
    updateGalleryDisplay();
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Hapus keyboard shortcuts untuk music
    // Bisa tambahkan shortcuts lain jika needed
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});
