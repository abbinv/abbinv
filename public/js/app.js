// Modern Portfolio JavaScript - Abbin V

// Custom Cursor
class CustomCursor {
  constructor() {
    this.cursor = document.querySelector('.cursor');
    this.follower = document.querySelector('.cursor-follower');
    this.init();
  }

  init() {
    if (!this.cursor || !this.follower) return;
    
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = e.clientX + 'px';
      this.cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        this.follower.style.left = e.clientX - 20 + 'px';
        this.follower.style.top = e.clientY - 20 + 'px';
      }, 100);
    });

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.style.transform = 'scale(1.5)';
        this.follower.style.transform = 'scale(1.5)';
      });
      
      el.addEventListener('mouseleave', () => {
        this.cursor.style.transform = 'scale(1)';
        this.follower.style.transform = 'scale(1)';
      });
    });
  }
}

// Smooth Scrolling
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Skill Bar Animation
class SkillAnimation {
  constructor() {
    this.skillItems = document.querySelectorAll('.skill-item');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillItem = entry.target;
          const progress = skillItem.querySelector('.skill-progress');
          const level = skillItem.getAttribute('data-level');
          
          setTimeout(() => {
            progress.style.width = level + '%';
          }, 200);
        }
      });
    }, { threshold: 0.5 });

    this.skillItems.forEach(item => {
      observer.observe(item);
    });
  }
}

// Counter Animation
class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.stat-number');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          this.animateCounter(counter, target);
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 40);
  }
}

// Fade In Animation
class FadeInAnimation {
  constructor() {
    this.elements = document.querySelectorAll('section, .project-card, .skill-category');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    this.elements.forEach(element => {
      observer.observe(element);
    });
  }
}

// Mobile Navigation
class MobileNav {
  constructor() {
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.init();
  }

  init() {
    if (!this.navToggle || !this.navMenu) return;

    this.navToggle.addEventListener('click', () => {
      this.navMenu.classList.toggle('active');
      this.navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
      });
    });
  }
}

// Form Handler
class FormHandler {
  constructor() {
    this.form = document.querySelector('.form');
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const name = this.form.querySelector('input[type="text"]').value;
      const email = this.form.querySelector('input[type="email"]').value;
      const message = this.form.querySelector('textarea').value;
      
      // Simple validation
      if (!name || !email || !message) {
        this.showMessage('Please fill in all fields.', 'error');
        return;
      }
      
      // Simulate form submission
      this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
      this.form.reset();
    });
  }

  showMessage(text, type) {
    // Create message element
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    
    // Style the message
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 2rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    
    document.body.appendChild(message);
    
    // Animate in
    setTimeout(() => {
      message.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      message.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(message);
      }, 300);
    }, 3000);
  }
}

// Typing Animation for Terminal
class TypingAnimation {
  constructor() {
    this.init();
  }

  init() {
    const typingElements = document.querySelectorAll('.typing-animation');
    typingElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      // Start typing after a delay
      setTimeout(typeWriter, 1000);
    });
  }
}

// Parallax Effect
class ParallaxEffect {
  constructor() {
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-code');
      
      parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
  // Initialize components
  if (!isMobile) {
    new CustomCursor();
    new ParallaxEffect();
  }
  
  new SmoothScroll();
  new SkillAnimation();
  new CounterAnimation();
  new FadeInAnimation();
  new MobileNav();
  new FormHandler();
  new TypingAnimation();
  
  // Add loaded class for CSS animations
  document.body.classList.add('loaded');
});

// Handle window resize
window.addEventListener('resize', () => {
  // Reinitialize cursor on desktop
  if (window.innerWidth > 768 && !document.querySelector('.cursor').style.display) {
    new CustomCursor();
  }
});



// Theme Toggle
class ThemeToggle {
  constructor() {
    this.toggle = document.getElementById('theme-toggle');
    this.icon = document.querySelector('.theme-icon');
    this.init();
  }

  init() {
    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.setTheme(savedTheme);

    // Toggle theme on click
    this.toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.icon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}



// FAQ Toggle
class FAQToggle {
  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item');
    this.init();
  }

  init() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        // Close other items
        this.faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    });
  }
}

// Initialize theme toggle and FAQ
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
  new FAQToggle();
});