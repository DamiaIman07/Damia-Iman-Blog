// Mengambil elemen butang dari HTML
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Fungsi untuk menukar mod apabila butang diklik
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Menukar teks ikon butang mengikut mod aktif
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});