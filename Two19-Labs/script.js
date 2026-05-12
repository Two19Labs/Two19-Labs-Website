document.addEventListener('DOMContentLoaded', () => {
    // Scroll to section based on URL path (e.g. /services → #services)
    const pathSection = window.location.pathname.replace(/^\//, '');
    if (pathSection) {
      const target = document.getElementById(pathSection);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 50);
    }

    // Intercept internal section links to use pushState instead of hash
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      const href = link.getAttribute('href');
      link.addEventListener('click', (e) => {
        const sectionId = href === '/' ? 'home' : href.replace(/^\//, '');
        const target = document.getElementById(sectionId);
        if (target) {
          e.preventDefault();
          history.pushState(null, '', href);
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: stop observing once it's visible
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        
        // If it's already active, we don't necessarily close it, or maybe we do
        // Let's toggle it
        const isActive = item.classList.contains('active');
        
        // Close all other accordions (optional, but typical for this kind of UI)
        document.querySelectorAll('.accordion-item').forEach(accItem => {
          accItem.classList.remove('active');
          // Hide details button on active, show on inactive
          const detailsBtn = accItem.querySelector('.btn-small');
          if (detailsBtn) detailsBtn.style.display = 'inline-flex';
        });
        
        if (!isActive) {
          item.classList.add('active');
          const detailsBtn = item.querySelector('.btn-small');
          if (detailsBtn) detailsBtn.style.display = 'none'; // Hide details button when active
        }
      });
    });

    // Tag toggle basic interaction
    const tags = document.querySelectorAll('.hero-tags .tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
        });
    });

    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
    const mobileClose = document.querySelector('.mobile-menu-close');

    function openMenu() {
        mobileMenu.classList.add('open');
        mobileBackdrop.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileBackdrop.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);
    mobileMenu && mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
  });

// ===================== ANIMATED TESTIMONIALS =====================
(function () {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Owner",
      company: "The Spice Kettle",
      content: "I never thought my small cafe needed a website until I met the team at Two19 Labs. They built a beautiful site for The Spice Kettle that has completely changed how we handle orders. It's simple for my customers to use and looks incredibly professional. Since the launch, our weekend takeaway orders have nearly doubled. Thank you, Two19 Labs!",
      rating: 5,
      avatar: "arjun.png"
    },
    {
      id: 2,
      name: "Priya Iyer",
      role: "Owner",
      company: "Malabar Junction",
      content: "The best part about working with Two19 Labs was how they understood the vibe of Malabar Junction. They didn't just give me a template; they created a digital home for my restaurant that feels authentic. They were very patient with my technical questions and finished everything right on time. If you are a local business owner, these are the people to trust.",
      rating: 5,
      avatar: "priya.png"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Owner",
      company: "Royal Tandoor Express",
      content: "Reliability is hard to find, but Two19 Labs delivered exactly what they promised for Royal Tandoor Express. The website is lightning-fast on mobile phones, which is where most of my customers order from. Their support after the site went live has been excellent—they are always just a message away. Truly a 5-star experience for any small business!",
      rating: 5,
      avatar: "vikram.png"
    },
  ];

  const dotsEl = document.getElementById('testDots');
  const cardsEl = document.getElementById('testCards');
  if (!dotsEl || !cardsEl) return;

  let activeIndex = 0;
  let autoTimer = null;

  // Build cards
  testimonials.forEach((t, i) => {
    const stars = Array(t.rating).fill(
      `<svg class="test-star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`
    ).join('');

    const card = document.createElement('div');
    card.className = 'test-card' + (i === 0 ? ' active' : '');
    card.innerHTML = `
      <div class="test-stars">${stars}</div>
      <div class="test-quote-body">
        <svg class="test-quote-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <p class="test-quote-text">"${t.content}"</p>
      </div>
      <hr class="test-hr" />
      <div class="test-author">
        <img src="${t.avatar}" alt="${t.name}" class="test-avatar" loading="lazy" />
        <div>
          <p class="test-author-name">${t.name}</p>
          <p class="test-author-role">${t.role}, ${t.company}</p>
        </div>
      </div>
    `;
    cardsEl.appendChild(card);
  });

  // Build dots
  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'test-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `View testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(index) {
    const cards = cardsEl.querySelectorAll('.test-card');
    const dots = dotsEl.querySelectorAll('.test-dot');
    cards[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');
    activeIndex = index;
    cards[activeIndex].classList.add('active');
    dots[activeIndex].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goTo((activeIndex + 1) % testimonials.length);
    }, 6000);
  }

  // Scroll-in animation via IntersectionObserver
  const section = document.getElementById('testimonials');
  if (section) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          section.querySelector('.test-left').classList.add('visible');
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(section);
  }

  resetTimer();
})();
