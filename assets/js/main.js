// Main JavaScript for Pickens Troops website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for hero sections
    const heroSections = document.querySelectorAll('.hero-section');
    heroSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add hover effects for info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click feedback for hero sections
    heroSections.forEach(section => {
        section.addEventListener('click', function() {
            // Add a brief visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add intersection observer for info section animation
    const infoSection = document.querySelector('.info-section');
    if (infoSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Animate info cards when they come into view
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.transitionDelay = `${index * 0.1}s`;
            
            observer.observe(card);
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            // Navigate to Trail Life USA
            window.open('https://traillifesc2244.com', '_blank');
        } else if (e.key === 'ArrowRight') {
            // Navigate to American Heritage Girls
            window.open('https://ahg4224.com', '_blank');
        }
    });

    // Add touch gesture support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - Trail Life USA
                window.open('https://traillifesc2244.com', '_blank');
            } else {
                // Swipe right - American Heritage Girls
                window.open('https://ahg4224.com', '_blank');
            }
        }
    }

    // Add performance optimization
    // Preload critical resources
    const preloadLinks = [
        'https://traillifesc2244.com',
        'https://ahg4224.com'
    ];

    preloadLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        document.head.appendChild(link);
    });

    // Add error handling for external links
    heroSections.forEach(section => {
        section.addEventListener('click', function(e) {
            const url = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            
            // Try to open the link, fallback to current window if blocked
            try {
                const newWindow = window.open(url, '_blank');
                if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                    // Popup blocked, redirect in current window
                    // window.location.href = url;
                }
            } catch (error) {
                console.warn('Failed to open external link:', error);
                window.location.href = url;
            }
        });
    });

    // Add accessibility improvements
    heroSections.forEach(section => {
        section.setAttribute('role', 'button');
        section.setAttribute('tabindex', '0');
        section.setAttribute('aria-label', section.querySelector('h1').textContent + ' - Click to visit website');
    });

    // Add focus styles for keyboard navigation
    const focusableElements = document.querySelectorAll('[tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}); 