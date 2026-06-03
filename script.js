const darkModeToggle = document.getElementById('dark-mode-toggle');

// Semak memori pelayar web untuk status mod sebelum ini
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = '☀️ Light Mode';
}

// Fungsi menukar mod secara kekal merentasi semua halaman
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