document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const bookCards = document.querySelectorAll('.book-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        bookCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const author = card.getAttribute('data-author').toLowerCase();
            if (title.includes(query) || author.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("obraForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        setTimeout(function() {
            window.location.href = "confirmacao.html";
        }, 1000); 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        setTimeout(function() {
            window.location.href = "confirmarcontat.html"; 
        }, 500); 
    });
});

