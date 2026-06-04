const darkModeToggle = document.getElementById('dark-mode-toggle');

// Muat tetapan tema lama daripada simpanan browser
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = '☀️ Light Mode';
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeToggle.textContent = '🌙 Change Theme';
            localStorage.setItem('theme', 'light');
        }
    });
}