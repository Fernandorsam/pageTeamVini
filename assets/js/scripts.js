 
 document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = mobileMenu.querySelectorAll('a');

            function closeMenu() {
                mobileMenu.classList.add('hidden');
                menuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            }

            function toggleMenu() {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    menuToggle.innerHTML = '<i class="fas fa-times text-2xl"></i>';
                } else {
                    closeMenu();
                }
            }
            
            menuToggle.addEventListener('click', function(event) {
                event.stopPropagation();
                toggleMenu();
            });

            navLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
            
            document.addEventListener('click', function(event) {
                const isClickInsideMenu = mobileMenu.contains(event.target);
                const isClickOnToggle = menuToggle.contains(event.target);
                
                if (!isClickInsideMenu && !isClickOnToggle && !mobileMenu.classList.contains('hidden')) {
                    closeMenu();
                }
            });

            document.getElementById('contact-form').addEventListener('submit', function (e) {
                e.preventDefault();
                let nome = document.getElementById('nome').value;
                let mensagem = document.getElementById('mensagem').value;
                let textoCompleto = `Nome: ${nome}\nMensagem: ${mensagem}`;
                let telefone = '5561984440287';
                let urlWhatsapp = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(textoCompleto)}`;
                window.open(urlWhatsapp, '_blank');
            });

            document.getElementById('btn-sort').addEventListener('click', function (e) {
                e.preventDefault();
                let telefone = '5561984440287';
                let textoRifa = `Olá, gostaria de mais informações sobre Academia!`;
                let urlWhatsapp = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(textoRifa)}`;
                window.open(urlWhatsapp, '_blank');
            });
            
            let lastScrollTop = 0;
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    header.style.top = '-100px';
                } else {
                    header.style.top = '0';
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }, false);
    });