// Generate stars for background
document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.querySelector(".stars-container")

  // Create 100 stars with random positions and sizes
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div")
    star.classList.add("star")

    // Random size between 1-2px
    const size = Math.random() * 1 + 1
    star.style.width = `${size}px`
    star.style.height = `${size}px`

    // Random position
    star.style.top = `${Math.random() * 100}%`
    star.style.left = `${Math.random() * 100}%`

    // Random opacity
    star.style.opacity = Math.random() * 0.7
    
    // Random animation duration between 20-60 seconds
    const animationDuration = Math.random() * 40 + 20
    star.style.animation = `twinkle ${animationDuration}s linear infinite`

    // Give each star a fixed direction to move in
    const angle = Math.random() * Math.PI * 2; // Random angle in radians
    const speed = 0.005 + Math.random() * 0.01; // Random speed (slow)
    
    // Store the direction and speed as data attributes
    star.dataset.directionX = Math.cos(angle) * speed;
    star.dataset.directionY = Math.sin(angle) * speed;
    
    // Store the current position for smooth movement
    star.dataset.x = parseFloat(star.style.left);
    star.dataset.y = parseFloat(star.style.top);

    starsContainer.appendChild(star)
  }

  // Animate stars smoothly
  function animateStars() {
    const stars = document.querySelectorAll('.star')
    stars.forEach(star => {
      // Get the current position from dataset (more precise than CSS values)
      let x = parseFloat(star.dataset.x);
      let y = parseFloat(star.dataset.y);
      
      // Get the movement direction
      const dx = parseFloat(star.dataset.directionX);
      const dy = parseFloat(star.dataset.directionY);
      
      // Update position
      x += dx;
      y += dy;
      
      // Wrap around edges
      if (x < 0) x = 100;
      if (x > 100) x = 0;
      if (y < 0) y = 100;
      if (y > 100) y = 0;
      
      // Store new position to dataset
      star.dataset.x = x;
      star.dataset.y = y;
      
      // Apply new position
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
    })
    
    requestAnimationFrame(animateStars);
  }
  
  // Start animation
  animateStars()

  // Generate project cards
  const projects = [
    {
      title: "E-commerceStore",
      description: "Bunniwinkle e-commerce store built with PHP, MySQL, HTML, CSS, and JavaScript",
      year: "2023",
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      image: "https://raw.githubusercontent.com/ArinGitPort/E-commerceStore/main/bunnscreenshot.png",
      fallbackImage: "https://placehold.co/300x200/1e293b/ffffff?text=E-commerceStore",
      link: "https://github.com/ArinGitPort/E-commerceStore"
    },
    {
      title: "MacroTracker",
      description: "App for tracking macros (protein, carbs, fats) and calorie intake, built with Kotlin and Firebase",
      year: "2024",
      technologies: ["Kotlin", "Firebase"],
      image: "assets/project_images/macrotracker.png",
      fallbackImage: "https://placehold.co/300x200/1e293b/ffffff?text=MacroTracker",
      link: "https://github.com/ArinGitPort/MacroTracker"
    },
    {
      title: "Startopology",
      description: "Network topology simulation and analysis project",
      year: "2023",
      technologies: ["Next.js", "TypeScript"],
      image: "assets/project_images/startopology.png",
      fallbackImage: "https://placehold.co/300x200/0f172a/ffffff?text=Startopology",
      link: "https://github.com/ArinGitPort/Startopology"
    },
  ]

  const projectsGrid = document.querySelector(".projects-grid")

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.classList.add("project-card")

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='${project.fallbackImage}';">
        <div class="project-overlay">
          <a href="${project.link}" target="_blank" class="btn btn-icon" style="background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-content">
        <div class="project-header">
          <h4 class="project-title">${project.title}</h4>
          <a href="${project.link}" target="_blank" class="btn btn-icon btn-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join("")}
          <span class="tag">${project.year}</span>
        </div>
      </div>
    `

    projectsGrid.appendChild(projectCard)
  })

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }
  
  // Update button icon based on current theme
  updateDarkModeIcon();
  
  // Toggle theme on button click
  darkModeToggle.addEventListener('click', () => {
    // Get the current theme
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Add transition effect
    const iconSvg = darkModeToggle.querySelector('svg');
    
    // Animate icon out
    iconSvg.classList.add('toggle-icon-transition-exit');
    
    setTimeout(() => {
      // Set the new theme
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update the icon
      updateDarkModeIcon();
      
      // Reset exit class and add enter class
      iconSvg.classList.remove('toggle-icon-transition-exit');
      iconSvg.classList.add('toggle-icon-transition-enter');
      
      // Remove enter class after animation completes
      setTimeout(() => {
        iconSvg.classList.remove('toggle-icon-transition-enter');
      }, 500);
    }, 250);
  });
  
  function updateDarkModeIcon() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const iconSvg = darkModeToggle.querySelector('svg');
    
    if (currentTheme === 'light') {
      // Moon icon for light mode (clicking will switch to dark)
      iconSvg.innerHTML = `
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      `;
      darkModeToggle.setAttribute('title', 'Switch to dark mode');
      darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      // Sun icon for dark mode (clicking will switch to light)
      iconSvg.innerHTML = `
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      `;
      darkModeToggle.setAttribute('title', 'Switch to light mode');
      darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
    }
  }
  
  // Modal functionality for previous roles
  const modal = document.getElementById('roles-modal');
  const modalOpenBtn = document.querySelector('.previous-roles-btn');
  const modalCloseBtn = modal.querySelector('.modal-close');
  
  // Open modal
  modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
  });
  
  // Close modal with the X button
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  });
  
  // Close modal when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  // Filter projects with the search input
  const filterInput = document.querySelector(".filter-input")
  filterInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const projectCards = document.querySelectorAll(".project-card")

    projectCards.forEach((card) => {
      const title = card.querySelector(".project-title").textContent.toLowerCase()
      const description = card.querySelector(".project-description").textContent.toLowerCase()

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })

  /* Social media modal functionality is now in socials.js */
})
