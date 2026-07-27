/* =========================================================
   PrinceVicky Portfolio — Script
   Sections: Content data, Theme toggle, Mobile menu,
   Scroll effects, Project filter, Testimonial carousel,
   Blog cards + modal, Contact form validation
   ========================================================= */

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- Content Data ---------------- */
const projects = [
  {
    title: "TACN Church Revival Flyer Series",
    category: "Graphic Design",
    tags: ["Flyer Design", "Church Branding"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    description: "A cohesive flyer and program design series for a church revival event, combining bold typography with warm, celebratory colors."
  },
  {
    title: "University Website Redesign",
    category: "Web Development",
    tags: ["HTML/CSS", "Responsive"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    description: "A modern, responsive university website built to showcase academic programs, admissions info and campus life."
  },
  {
    title: "Luxury Birthday Poster",
    category: "Graphic Design",
    tags: ["Poster Design", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    description: "A full luxury-themed birthday celebration poster, designed and coded from scratch with elegant gold accents."
  },
  {
    title: "Traditional Attire Portrait Series",
    category: "Portrait Design",
    tags: ["AI Image Generation", "Retouching"],
    image: "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=800&auto=format&fit=crop",
    description: "A series of culturally rich portraits celebrating traditional Nigerian attire, enhanced with AI-assisted design tools."
  },
  {
    title: "PrinceVicky Tech Brand Identity",
    category: "Brand Design",
    tags: ["Logo", "Brand Guidelines"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    description: "The complete visual identity for PrinceVicky Tech — logo, color system, typography and social templates."
  },
  {
    title: "Grammar School Event Program",
    category: "Graphic Design",
    tags: ["Program Design", "Print"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    description: "An event program booklet designed for a school inauguration ceremony, balancing formality with visual warmth."
  }
];

const testimonials = [
  { name: "Pastor Emmanuel Adebayo", role: "TACN Idi Ayin Area", quote: "PrinceVicky designed our revival flyers and program booklet with such care and creativity. The whole congregation loved the final result.", avatar: "EA" },
  { name: "Mrs. Folake Ogundele", role: "School Administrator", quote: "Professional, prompt, and detail-oriented. Our event program looked more polished than anything we'd used before.", avatar: "FO" },
  { name: "Tunde Bakare", role: "Small Business Owner", quote: "The brand identity PrinceVicky created gave my business an entirely new level of credibility. Clients notice the difference immediately.", avatar: "TB" },
  { name: "Grace Olawale", role: "Client, Portrait Series", quote: "My traditional attire portraits came out stunning. PrinceVicky has a real eye for color, culture and detail.", avatar: "GO" }
];

const posts = [
  {
    title: "Designing Flyers That Honor the Occasion",
    excerpt: "How I approach color, typography and cultural symbolism when designing flyers and programs for church revivals.",
    body: "This is placeholder body content for this article. Replace this text with your full write-up directly in script.js — look for the `posts` array near the top of the file, find this post's `body` field, and swap in your real content. You can use plain text or simple HTML tags like <strong> and <br><br> for paragraph breaks.",
    date: "2026-06-14",
    readTime: "5 min read",
    category: "Design Process",
    image: "https://images.unsplash.com/photo-1519683384663-c9b34271669c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Tools for Nigerian Designers",
    excerpt: "A practical look at using Midjourney, DALL·E and Ideogram to speed up client work while keeping designs culturally authentic.",
    body: "This is placeholder body content for this article. Replace this text with your full write-up directly in script.js — look for the `posts` array near the top of the file, find this post's `body` field, and swap in your real content.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "AI & Design",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "From Flyers to Full-Stack",
    excerpt: "Why I started learning web development as a graphic designer, and how it changed the kind of projects I can take on.",
    body: "This is placeholder body content for this article. Replace this text with your full write-up directly in script.js — look for the `posts` array near the top of the file, find this post's `body` field, and swap in your real content.",
    date: "2026-04-30",
    readTime: "4 min read",
    category: "Career",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
  }
];

/* ---------------- Theme Toggle (Dark Mode) ---------------- */
const html = document.documentElement;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

/* ---------------- Mobile Menu ---------------- */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

/* ---------------- Sticky Header + Active Nav Link ---------------- */
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* ---------------- Scroll Reveal Animations ---------------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* Skill bar fill animation, triggered when About section is visible */
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillFills.forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
const skillsWrap = document.querySelector('.skills');
if (skillsWrap) skillObserver.observe(skillsWrap);

/* ---------------- Project Gallery + Filter ---------------- */
const projectGrid = document.getElementById('projectGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter) {
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  projectGrid.innerHTML = filtered.map(p => `
    <article class="project-card">
      <div class="project-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-overlay">View Project</div>
      </div>
      <div class="project-body">
        <span class="project-cat">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </article>
  `).join('');
}
renderProjects('All');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

/* ---------------- Testimonial Carousel ---------------- */
const track = document.getElementById('testimonialTrack');
const dotsWrap = document.getElementById('testimonialDots');
let tIndex = 0;
let tTimer;

track.innerHTML = testimonials.map((t, i) => `
  <div class="testimonial-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
    <p class="quote">"${t.quote}"</p>
    <div class="testimonial-author">
      <div class="avatar">${t.avatar}</div>
      <div class="author-info">
        <p class="name">${t.name}</p>
        <p class="role">${t.role}</p>
      </div>
    </div>
  </div>
`).join('');

dotsWrap.innerHTML = testimonials.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>`).join('');

const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function goToTestimonial(index) {
  tIndex = (index + testimonials.length) % testimonials.length;
  slides.forEach((s, i) => s.classList.toggle('active', i === tIndex));
  dots.forEach((d, i) => d.classList.toggle('active', i === tIndex));
}

document.getElementById('prevTestimonial').addEventListener('click', () => { goToTestimonial(tIndex - 1); resetAutoplay(); });
document.getElementById('nextTestimonial').addEventListener('click', () => { goToTestimonial(tIndex + 1); resetAutoplay(); });
dots.forEach(dot => dot.addEventListener('click', () => { goToTestimonial(Number(dot.dataset.index)); resetAutoplay(); }));

function resetAutoplay() {
  clearInterval(tTimer);
  tTimer = setInterval(() => goToTestimonial(tIndex + 1), 6000);
}
resetAutoplay();

/* ---------------- Blog Cards + Modal ---------------- */
const blogGrid = document.getElementById('blogGrid');
const blogModal = document.getElementById('blogModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

blogGrid.innerHTML = posts.map((p, i) => `
  <article class="blog-card" data-index="${i}">
    <div class="blog-img-wrap"><img src="${p.image}" alt="${p.title}" loading="lazy" /></div>
    <div class="blog-body">
      <span class="blog-cat">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
      <div class="blog-meta">
        <span>${formatDate(p.date)}</span>
        <span>${p.readTime}</span>
      </div>
    </div>
  </article>
`).join('');

document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('click', () => {
    const post = posts[Number(card.dataset.index)];
    modalContent.innerHTML = `
      <span class="blog-cat">${post.category}</span>
      <h2>${post.title}</h2>
      <div class="blog-meta">
        <span>${formatDate(post.date)}</span>
        <span>${post.readTime}</span>
      </div>
      <img src="${post.image}" alt="${post.title}" />
      <div class="modal-body">${post.body}</div>
    `;
    blogModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  blogModal.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
blogModal.addEventListener('click', (e) => { if (e.target === blogModal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* ---------------- Contact Form Validation ---------------- */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (!name.value.trim()) { nameError.textContent = 'Please enter your name.'; valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { emailError.textContent = 'Enter a valid email.'; valid = false; }
  if (!message.value.trim()) { messageError.textContent = 'Please write a short message.'; valid = false; }

  if (!valid) return;

  // NOTE: This simulates sending. To actually deliver messages, connect this
  // form to a service like Formspree, EmailJS, or your own backend endpoint.
  submitBtn.disabled = true;
  submitText.textContent = 'Sending...';

  setTimeout(() => {
    submitText.textContent = 'Message Sent ✓';
    form.reset();
    setTimeout(() => {
      submitText.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 3000);
  }, 1200);
});