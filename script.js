// ==========================================================================
// KAWALAN SYNC DARK MODE UNTUK SEMUA HALAMAN (LOCALSTORAGE)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Semak tema semasa yang tersimpan dalam memori browser
    const currentTheme = localStorage.getItem('theme');

    // Kemas kini status butang & tema masa load halaman
    if (document.body.classList.contains('dark-mode') || currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
    } else {
        if (themeToggle) themeToggle.textContent = '🌙 Dark Mode';
    }

    // Fungsi klik tukar tema serentak
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
            
            // Simpan pilihan ke memori pelayar
            localStorage.setItem('theme', theme);
        });
    }
});