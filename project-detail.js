/* =============================================
   PROJECT DETAIL JAVASCRIPT
   Handles dynamic rendering of project content.
============================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNavbar();
  initProjectDetails();
  initBackToTop();
  initReveal();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ─── LOADER ─── */
function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 1000);
  });
  // Fallback
  setTimeout(() => loader.classList.add("hidden"), 2000);
}

/* ─── NAVBAR ─── */
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  const allLinks  = document.querySelectorAll(".nav-link");

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

/* ─── DYNAMIC DATA POPULATION ─── */
function initProjectDetails() {
  // Parse project ID from URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get("id"), 10);

  // Validate project ID
  if (
    isNaN(projectId) ||
    projectId < 0 ||
    !portfolioData.projects ||
    projectId >= portfolioData.projects.length
  ) {
    // Redirect to home page if project index is invalid
    window.location.href = "index.html#projects";
    return;
  }

  const project = portfolioData.projects[projectId];

  // Title and Breadcrumbs
  document.title = `${project.title} - Keshav Kumar`;
  document.getElementById("breadcrumbTitle").textContent = project.title;
  document.getElementById("projectTitle").textContent = project.title;

  // Category & Tagline
  document.getElementById("projectCategory").textContent = project.category;
  document.getElementById("projectTagline").textContent = project.description;

  // Project Image Banner
  const imgEl = document.getElementById("projectImage");
  imgEl.src = project.image;
  imgEl.alt = project.title;

  // Overview
  document.getElementById("projectOverview").innerHTML = `<p>${project.longDescription || project.description}</p>`;

  // Features list
  const featuresSection = document.getElementById("featuresSection");
  const featuresList = document.getElementById("projectFeatures");
  if (project.features && project.features.length > 0) {
    featuresList.innerHTML = "";
    project.features.forEach(feature => {
      featuresList.innerHTML += `
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>${feature}</span>
        </li>`;
    });
  } else {
    // Hide Features section if not specified
    featuresSection.style.display = "none";
  }

  // Challenges and Solutions
  const challengesSection = document.getElementById("challengesSection");
  const challengesText = document.getElementById("projectChallenges");
  if (project.challenges) {
    challengesText.innerHTML = `<p>${project.challenges}</p>`;
  } else {
    // Hide Challenges section if not specified
    challengesSection.style.display = "none";
  }

  // Sidebar Metadata Info
  document.getElementById("projectClient").textContent = project.client || "Self-Initiated";
  document.getElementById("projectDate").textContent = project.date || "Completed";
  document.getElementById("projectRole").textContent = project.role || "Developer";

  // Tech tags rendering
  const techContainer = document.getElementById("projectTech");
  techContainer.innerHTML = "";
  if (project.technologies) {
    project.technologies.forEach(tech => {
      const span = document.createElement("span");
      span.className = "project-tag";
      span.textContent = tech;
      techContainer.appendChild(span);
    });
  }

  // External Action Links (Live Demo / GitHub)
  const liveLink = document.getElementById("liveLink");
  if (project.live && project.live !== "#") {
    liveLink.href = project.live;
  } else {
    liveLink.style.display = "none";
  }

  const githubLink = document.getElementById("githubLink");
  if (project.github && project.github !== "#") {
    githubLink.href = project.github;
  } else {
    githubLink.style.display = "none";
  }

  // Render Footer Socials
  renderSocials("footerSocials", portfolioData.socialLinks);
}

function renderSocials(targetId, links) {
  const el = document.getElementById(targetId);
  if (!el || !links) return;
  el.innerHTML = "";
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

/* ─── SCROLL REVEAL ─── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal, .reveal-right").forEach(el => observer.observe(el));
}
