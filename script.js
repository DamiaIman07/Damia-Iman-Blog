// ==========================================================================
// KAWALAN UTAMA: SYNC DARK MODE & BUTTON READ MORE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // KAWALAN DARK MODE (SINKRONISASI SEMUA PAGE)
    // ----------------------------------------------------
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

    // ----------------------------------------------------
    // KAWALAN INTERAKSI BUTTON "READ MORE" (PAGE BLOG)
    // ----------------------------------------------------
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Cari kad blog terdekat bagi butang yang ditekan
            const card = this.closest('.blog-card');
            
            // Toggle kelas 'active-blog' pada kad tersebut
            card.classList.toggle('active-blog');
            
            // Tukar teks butang berdasarkan status buka/tutup
            if (card.classList.contains('active-blog')) {
                this.innerHTML = "Close Article <i class='bx bx-chevron-up'></i>";
            } else {
                this.innerHTML = "Read More <i class='bx bx-chevron-down'></i>";
            }
        });
    });

});