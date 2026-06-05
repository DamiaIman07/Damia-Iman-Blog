// 1. SISTEM DARK MODE (Diletakkan di luar supaya gerenti jalan dulu)
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

// 2. SISTEM LAIN-LAIN (Hanya jalan selepas HTML sedia)
document.addEventListener('DOMContentLoaded', () => {
    
    // SISTEM BUTANG READ MORE / CLOSE ARTICLE (Dah diperbaiki supaya tak crash)
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.blog-card');
            if (!card) return; // Mengelakkan error kalau kad tak dijumpai
            
            card.classList.toggle('active-blog');
            
            // Cara tukar tulisan yang lebih selamat tanpa guna childNodes
            if (card.classList.contains('active-blog')) {
                this.innerHTML = "Close Article";
            } else {
                this.innerHTML = "Read More";
            }
        });
    });

    // SISTEM KAWALAN BORANG CONTACT & POP-UP NOTIFIKASI
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Halang page daripada ter-refresh
            
            // Papar pop-up berjaya
            alert('Mesej berjaya dihantar! / Message has been sent successfully!');
            
            // Kosongkan form semula
            contactForm.reset();
        });
    }
});