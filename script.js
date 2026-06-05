// ==========================================================================
// KAWALAN SYNC DARK MODE & TOGGLE BACA BLOG (LOCALSTORAGE)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- BAHAGIAN 1: KAWALAN DARK MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (document.body.classList.contains('dark-mode') || currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
    } else {
        if (themeToggle) themeToggle.textContent = '🌙 Dark Mode';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
                themeToggle.textContent = '☀️ Light Mode';
            } else {
                themeToggle.textContent = '🌙 Dark Mode';
            }
            
            localStorage.setItem('theme', theme);
        });
    }

    // --- BAHAGIAN 2: KAWALAN READ MORE ACCODRION (BLOG PAGE) ---
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        const button = card.querySelector('.read-more-btn');
        
        // Sediakan fungsi buka bila klik butang "Read More" ATAU klik tajuk blog
        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Elak konflik klik dua kali
                toggleBlogSection(card, button);
            });
        }
        
        // Pengguna juga boleh klik terus pada kad/tajuk untuk buka kandungan
        const heading = card.querySelector('h3');
        if (heading) {
            heading.style.cursor = 'pointer';
            heading.addEventListener('click', () => {
                toggleBlogSection(card, button);
            });
        }
    });

    // Fungsi pembantu untuk menguruskan kelas bukaan teks
    function toggleBlogSection(card, btn) {
        const isActive = card.classList.contains('active-blog');
        
        // Tutup mana-mana blog section lain yang sedang terbuka (pilihan estetik)
        blogCards.forEach(c => {
            c.classList.remove('active-blog');
            const b = c.querySelector('.read-more-btn');
            if (b) b.innerHTML = "Read More <i class='bx bx-chevron-down'></i>";
        });

        // Jika section yang di-klik tadi asalnya tertutup, jom buka dia!
        if (!isActive) {
            card.classList.add('active-blog');
            if (btn) btn.innerHTML = "Close Article <i class='bx bx-chevron-down'></i>";
        }
    }
});