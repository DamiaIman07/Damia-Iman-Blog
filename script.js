const darkModeToggle = document.getElementById('dark-mode-toggle');

// Memeriksa tetapan memori pelayar browser sebelum ini
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = '☀️ Light Mode';
}

// Fungsi utama penukaran mod gelap secara menyeluruh dan kekal
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark'); 
        } else {
            darkModeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light'); 
        }
    });
}