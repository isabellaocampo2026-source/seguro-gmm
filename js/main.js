/* main.js — minimal interactivity */
(function () {
    'use strict';

    // Navbar shadow on scroll
    var nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            nav.style.boxShadow = window.scrollY > 10
                ? '0 1px 6px rgba(0,0,0,0.05)'
                : 'none';
        }, { passive: true });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Basic form validation
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            var name = document.getElementById('name');
            var phone = document.getElementById('phone');
            if (!name.value.trim() || !phone.value.trim()) {
                e.preventDefault();
                if (!name.value.trim()) name.focus();
                else phone.focus();
            }
        });
    }
})();
