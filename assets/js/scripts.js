document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});

// enviando msg do formulario para whatssap

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let mensagem = document.getElementById('mensagem').value;

    let whatsappMessage = `Nome: ${nome}\nMensagem: ${mensagem}`;
    let whatsappNumber = '5561984440287';
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
});

let sortButton = document.getElementById('btn-sort');
sortButton.addEventListener('click', function(e) {
    e.preventDefault();
    let whatsappNumber = '5561984440287';
    let sortUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Óla, gostaria de saber mais sobrea a Rifa.`;

    window.open(sortUrl, '_blank');
});
