document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Плавний скрол для всіх якірних посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Логіка кошика (оновлення лічильника)
    const buyButtons = document.querySelectorAll('.buy-button, .btn-buy');
    const cartCountElement = document.querySelector('.cart-count');
    let count = 0;

    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCountElement.innerText = count;
            
            // Ефект натискання
            btn.innerText = 'У КОШИКУ';
            btn.style.background = '#1a1a1a';
            
            setTimeout(() => {
                btn.innerText = 'КУПИТИ';
                btn.style.background = '#E32619';
            }, 2000);
        });
    });

    // 3. Зміна стилю хедера при скролі
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 4. Проста анімація появи елементів (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-item, .collection-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});