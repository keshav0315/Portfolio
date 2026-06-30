/* =============================================
   PORTFOLIO JAVASCRIPT
   All editable content lives in portfolioData below.
   ✏️ = sections you should edit
============================================= */

/* ─────────────────────────────────────────
   ✏️  EDITABLE DATA — Edit this object only!
   You do NOT need to touch anything below it.
───────────────────────────────────────────── */
// portfolioData is loaded dynamically from data.js // ← End of portfolioData — STOP editing below unless you know JS


/* ─────────────────────────────────────────
   INITIALISATION
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  populateData();
  initNavbar();
  initTypingEffect();
  initReveal();
  initCounters();
  initSkillTabs();
  initProjects();
  initTestimonials();
  initContactForm();
  initBackToTop();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ─── LOADER ─── */
function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 1800);
  });
  // Fallback in case load fires before DOMContentLoaded
  setTimeout(() => loader.classList.add("hidden"), 2800);
}

/* ─── POPULATE DATA ─── */
function populateData() {
  const d = portfolioData;

  // Hero
  document.getElementById("heroName").textContent = d.name;
  document.getElementById("heroBio").textContent  = d.bio;
  document.getElementById("heroImg").src          = d.heroImage;
  document.getElementById("heroImg").alt          = d.name;
  document.getElementById("resumeBtn").href       = d.resumeLink;

  // About
  document.getElementById("aboutImg").src        = d.aboutImage;
  document.getElementById("aboutImg").alt        = "About " + d.name;
  document.getElementById("aboutPara1").textContent = d.aboutPara1;
  document.getElementById("aboutPara2").textContent = d.aboutPara2;

  // About details grid
  const detailsEl = document.getElementById("aboutDetails");
  d.details.forEach(item => {
    detailsEl.innerHTML += `
      <div class="detail-item">
        <span class="label">${item.label}</span>
        <span class="value">${item.value}</span>
      </div>`;
  });

  // Hero socials
  renderSocials("heroSocials", d.socialLinks);
  renderSocials("contactSocials", d.socialLinks);
  renderSocials("footerSocials", d.socialLinks);

  // Services
  const servicesGrid = document.getElementById("servicesGrid");
  d.services.forEach(s => {
    const card = document.createElement("div");
    card.className = "service-card reveal";
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>`;
    servicesGrid.appendChild(card);
  });

  // Experience & Education timelines
  renderTimeline("experienceTimeline", d.experience);
  renderTimeline("educationTimeline", d.education);

  // Certifications
  const certificationsGrid = document.getElementById("certificationsGrid");
  if (certificationsGrid && d.certifications) {
    d.certifications.forEach(c => {
      const card = document.createElement("div");
      card.className = "certification-card reveal";
      card.innerHTML = `
        <div class="certification-img-wrapper">
          <img src="${c.image}" alt="${c.title}" loading="lazy"/>
        </div>
        <div class="certification-body">
          <div class="certification-issuer-date">
            <span class="certification-issuer">${c.issuer}</span>
            <span class="certification-date">${c.date}</span>
          </div>
          <h3 class="certification-title">${c.title}</h3>
          <p class="certification-desc">${c.description}</p>
          ${c.link ? `
          <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="certification-link">
            Verify Credential
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>` : ""}
        </div>`;
      certificationsGrid.appendChild(card);
    });
  }

  // Contact cards
  const contactCards = document.getElementById("contactCards");
  const contactItems = [
    { icon: "📧", label: "Email",     value: d.contact.email },
    { icon: "📞", label: "Phone",     value: d.contact.phone },
    { icon: "📍", label: "Location",  value: d.contact.address },
    { icon: "🕐", label: "Available", value: d.contact.available },
  ];
  contactItems.forEach(item => {
    contactCards.innerHTML += `
      <div class="contact-card">
        <div class="contact-card-icon">${item.icon}</div>
        <div>
          <p class="contact-card-label">${item.label}</p>
          <p class="contact-card-value">${item.value}</p>
        </div>
      </div>`;
  });
}

function renderSocials(targetId, links) {
  const el = document.getElementById(targetId);
  if (!el) return;
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "social-icon-link";
    a.title = link.name;
    a.textContent = link.icon;
    el.appendChild(a);
  });
}

function renderTimeline(targetId, items) {
  const el = document.getElementById(targetId);
  items.forEach(item => {
    el.innerHTML += `
      <div class="timeline-item">
        <p class="timeline-period">${item.period}</p>
        <p class="timeline-role">${item.role}</p>
        <p class="timeline-org">${item.org}</p>
        <p class="timeline-desc">${item.desc}</p>
      </div>`;
  });
}

/* ─── NAVBAR ─── */
function initNavbar() {
  const navbar   = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  const allLinks  = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    updateActiveLink();
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const navH = 80;
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - navH - 10) {
      current = sec.id;
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
}

/* ─── TYPING EFFECT ─── */
function initTypingEffect() {
  const el     = document.getElementById("typingText");
  const words  = portfolioData.taglines;
  let wIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const word = words[wIdx];
    if (deleting) {
      el.textContent = word.slice(0, --cIdx);
    } else {
      el.textContent = word.slice(0, ++cIdx);
    }

    let delay = deleting ? 60 : 110;
    if (!deleting && cIdx === word.length) { delay = 1800; deleting = true; }
    if (deleting && cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; delay = 300; }

    setTimeout(type, delay);
  }
  type();
}

/* ─── SCROLL REVEAL ─── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Trigger skill bars inside this element
        entry.target.querySelectorAll(".skill-bar-fill").forEach(bar => {
          bar.style.width = bar.dataset.level + "%";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal, .reveal-right").forEach(el => observer.observe(el));
}

/* ─── ANIMATED COUNTERS ─── */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-num").forEach(numEl => {
          const target = +numEl.dataset.target;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            numEl.textContent = current + "+";
            if (current >= target) clearInterval(interval);
          }, 25);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector(".hero-stats");
  if (statsSection) observer.observe(statsSection);
}

/* ─── SKILL TABS ─── */
function initSkillTabs() {
  const panels = document.getElementById("skillsPanels");

  // Build all panels
  Object.keys(portfolioData.skills).forEach(cat => {
    const panel = document.createElement("div");
    panel.className = "skills-panel" + (cat === "frontend" ? " active" : "");
    panel.dataset.tab = cat;

    portfolioData.skills[cat].forEach(skill => {
      panel.innerHTML += `
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">${skill.icon}</div>
            <span class="skill-name">${skill.name}</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${skill.level}" style="width:0%"></div>
          </div>
          <span class="skill-pct">${skill.level}%</span>
        </div>`;
    });
    panels.appendChild(panel);
  });

  // Tab click
  document.querySelectorAll(".skill-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".skill-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const active = tab.dataset.tab;
      document.querySelectorAll(".skills-panel").forEach(p => {
        p.classList.toggle("active", p.dataset.tab === active);
      });
      // Animate bars in newly visible panel
      document.querySelector(`.skills-panel[data-tab="${active}"] .skill-bar-fill`)
        && document.querySelectorAll(`.skills-panel[data-tab="${active}"] .skill-bar-fill`)
            .forEach(bar => { bar.style.width = bar.dataset.level + "%"; });
    });
  });

  // Observer to trigger frontend bars on first reveal
  const skillsSection = document.getElementById("skills");
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skills-panel.active .skill-bar-fill").forEach(bar => {
          bar.style.width = bar.dataset.level + "%";
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  if (skillsSection) barObserver.observe(skillsSection);
}

/* ─── PROJECTS ─── */
function initProjects() {
  const categories    = ["All", ...new Set(portfolioData.projects.map(p => p.category))];
  const filterButtons = document.getElementById("filterButtons");
  const grid          = document.getElementById("projectsGrid");
  const searchInput   = document.getElementById("projectSearch");
  const countEl       = document.getElementById("projectCount");
  const noResults     = document.getElementById("noResults");

  let activeFilter = "All";

  // Build filter buttons
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.dataset.filter = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = cat;
      renderProjects();
    });
    filterButtons.appendChild(btn);
  });

  // Search input
  searchInput.addEventListener("input", renderProjects);

  function renderProjects() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = portfolioData.projects.filter(p => {
      const matchCat = activeFilter === "All" || p.category === activeFilter;
      const matchSearch = !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });

    grid.innerHTML = "";
    countEl.textContent = `Showing ${filtered.length} Project${filtered.length !== 1 ? "s" : ""}`;
    noResults.classList.toggle("hidden", filtered.length > 0);

    filtered.forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.animationDelay = `${i * 0.08}s`;
      card.innerHTML = `
        <div class="project-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy"/>
          <span class="project-badge">${p.category}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${p.technologies.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="project-detail.html?id=${portfolioData.projects.indexOf(p)}" class="btn btn-sm btn-primary">View Project</a>
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>` : ""}
          </div>
        </div>`;
      grid.appendChild(card);
    });
  }

  renderProjects();
}

/* ─── TESTIMONIALS SLIDER ─── */
function initTestimonials() {
  const slider  = document.getElementById("testimonialsSlider");
  const dotsEl  = document.getElementById("sliderDots");
  const data    = portfolioData.testimonials;
  let current   = 0;
  let timer;

  data.forEach((t, i) => {
    const stars = "★".repeat(t.stars || 5);
    const card  = document.createElement("div");
    card.className = "testimonial-card" + (i === 0 ? " active" : "");
    card.innerHTML = `
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-stars">${stars}</div>
      <div class="testimonial-author">
        <img src="${t.image}" alt="${t.name}" loading="lazy"/>
        <div>
          <p class="author-name">${t.name}</p>
          <p class="author-title">${t.title}</p>
        </div>
      </div>`;
    slider.appendChild(card);

    // Dot
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(idx) {
    const cards = slider.querySelectorAll(".testimonial-card");
    const dots  = dotsEl.querySelectorAll(".slider-dot");
    cards[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (idx + data.length) % data.length;
    cards[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function autoPlay() {
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", autoPlay);
  autoPlay();
}

/* ─── CONTACT FORM ─── */
function initContactForm() {
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sending…";
    btn.disabled = true;

    // Simulate sending (replace with real fetch/emailjs)
    setTimeout(() => {
      success.classList.remove("hidden");
      form.reset();
      btn.textContent = "Send Message ✓";
      setTimeout(() => {
        success.classList.add("hidden");
        btn.textContent = "Send Message";
        btn.disabled = false;
      }, 4000);
    }, 1400);
  });
}

/* ─── BACK TO TOP ─── */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
