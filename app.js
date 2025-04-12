document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeSwitcher = document.querySelector('.theme-switcher');
    const savedTheme = localStorage.getItem('theme');

    // Initialize theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitcher.innerHTML = '<i class="bx bx-moon"></i>';
    }

    // Theme toggle
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeSwitcher.innerHTML = isDark 
            ? '<i class="bx bx-moon"></i>' 
            : '<i class="bx bx-sun"></i>';
    });

    // Typing Animation
    const typed = new Typed('.animated-text', {
        strings: ['Frontend Developer', 'Application Developer', 'UI/UX Designer', 'Web Developer'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: false,
    });

    // Scroll Reveal
    ScrollReveal().reveal('.skill-card, .project-card', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        interval: 150,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Animate Progress Bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level;
    });

    // Form Handling
    const form = document.querySelector('.elegant-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const button = form.querySelector('button');
        
        // Save original button state
        const originalWidth = button.offsetWidth;
        const originalHTML = button.innerHTML;
        
        // Show loading state
        button.style.width = `${originalWidth}px`;
        button.innerHTML = '<i class="bx bx-loader-alt animate-spin"></i>';
        button.disabled = true;
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success state
        button.innerHTML = '<i class="bx bx-check"></i> Message Sent!';
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.disabled = false;
            button.style.width = 'auto';
        }, 3000);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });

    // Additional Interactions
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});