document.addEventListener('DOMContentLoaded', () => {
  // Typing Effect
  const typingText = document.getElementById('typing-text');
  const phrases = ['Developer', 'Designer', 'Innovator'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting && charIndex <= currentPhrase.length) {
      typingText.textContent = currentPhrase.substring(0, charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex >= 0) {
      typingText.textContent = currentPhrase.substring(0, charIndex);
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      setTimeout(type, isDeleting ? 1000 : 200);
    }
  }

  type();

  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const body = document.getElementById('theme-body');

  function toggleTheme() {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeToggle.innerHTML = `<i class="fas fa-${isLight ? 'sun' : 'moon'}"></i>`;
    themeToggleMobile.innerHTML = `<i class="fas fa-${isLight ? 'sun' : 'moon'}"></i>`;
  }

  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);

  // Hamburger Menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const mobileDropdown = document.getElementById('mobile-dropdown');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.innerHTML = `<i class="fas fa-${mobileMenu.classList.contains('active') ? 'times' : 'bars'}"></i>`;
  });

  dropdownToggle.addEventListener('click', () => {
    mobileDropdown.classList.toggle('active');
    const icon = dropdownToggle.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  });

  // Back-to-Top Button
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove('hidden');
    } else {
      backToTop.classList.add('hidden');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // GSAP Scroll Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.glowing-container', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: '.glowing-container',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  gsap.from('.animate-section', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.animate-section',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });
});
