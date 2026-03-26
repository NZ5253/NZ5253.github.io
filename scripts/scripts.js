// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Typed.js animation for hero title
    new Typed('.hero-title', {
        strings: [
            'Automation & Robotics Engineer',
            'Reinforcement Learning Researcher',
            'Test Automation Developer',
            'Python / C++ / ROS 2'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Modal functionality
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Map explore buttons to modals
    const modalMap = {
        'exploreButtonThesis': 'myModalThesis',
        'exploreButtonChair': 'myModalChair',
        'exploreButtonTuv': 'myModalTuv',
        'exploreButtonKandou': 'myModalKandou',
        'exploreButtonAkber': 'myModalAkber',
        'exploreButtonMartin': 'myModalMartin',
        'exploreButtonMotor': 'myModalMotor'
    };

    Object.entries(modalMap).forEach(([buttonId, modalId]) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => openModal(modalId));
        }
    });

    // Close buttons
    const closeMap = {
        'closeThesis': 'myModalThesis',
        'closeChair': 'myModalChair',
        'closeTuv': 'myModalTuv',
        'closeKandou': 'myModalKandou',
        'closeAkber': 'myModalAkber',
        'closeMartin': 'myModalMartin',
        'closeMotor': 'myModalMotor'
    };

    Object.entries(closeMap).forEach(([closeId, modalId]) => {
        const closeBtn = document.getElementById(closeId);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modalId));
        }
    });

    // Close modal on outside click
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = '';
        }
    });

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 60;
                const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // EmailJS setup — replace these 3 values after signing up at emailjs.com
    emailjs.init('kmc4Cm-1KXzN_Dgwd');

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all fields.';
                formStatus.style.color = 'red';
                return;
            }

            formStatus.textContent = 'Sending...';
            formStatus.style.color = '#666';

            emailjs.send(
                'service_bk40mm4',
                'template_ew7a87w',
                {
                    from_name: name,
                    from_email: email,
                    message: message
                }
            ).then(
                function () {
                    formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                },
                function (error) {
                    formStatus.textContent = 'Failed to send. Please email me directly at naeemzainuddin5253@gmail.com';
                    formStatus.style.color = 'red';
                    console.error('EmailJS Error:', error);
                }
            );
        });
    }
});
