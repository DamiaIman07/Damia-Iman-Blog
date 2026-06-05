// ==========================================================================
// KAWALAN UTAMA: SYNC DARK MODE & BUTTON READ MORE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. KAWALAN DARK MODE (SINKRONISASI SEMUA PAGE)
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

    // 2. KAWALAN INTERAKSI BUTTON "READ MORE" (PAGE BLOG)
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.blog-card');
            
            // Toggle kelas buka/tutup
            card.classList.toggle('active-blog');
            
            // Tukar teks berdasarkan status kad terbuka atau tertutup
            if (card.classList.contains('active-blog')) {
                this.childNodes[0].textContent = "Close Article ";
            } else {
                this.childNodes[0].textContent = "Read More ";
            }
        });
    });
});