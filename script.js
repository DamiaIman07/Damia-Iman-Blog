// Mengambil elemen butang dari HTML
const themeToggle = document.getElementById('theme-toggle');

// Beri arahan jika butang diklik
themeToggle.addEventListener('click', () => {
    // Tukar class pada body (aktif/tutup dark-mode)
    document.body.classList.toggle('dark-mode');
    
    // Tukar teks ikon pada butang
    if(document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light';
    } else {
        themeToggle.textContent = '🌙 Dark';
    }
});