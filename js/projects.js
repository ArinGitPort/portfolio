document.addEventListener("DOMContentLoaded", () => {
  // Default projects
  const defaultProjects = [
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
  ];

  // Load projects from localStorage or use defaults
  let projects = [];
  const storedProjects = localStorage.getItem("portfolio_projects");
  
  if (storedProjects) {
    projects = JSON.parse(storedProjects);
  } else {
    projects = defaultProjects;
    localStorage.setItem("portfolio_projects", JSON.stringify(projects));
  }

  const projectsGrid = document.querySelector(".projects-grid");
  
  // Function to render projects
  function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = "";
    
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

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
      `;

      projectsGrid.appendChild(projectCard);
    });
  }

  // Initial render
  renderProjects();

  // Add Project Functionality
  const addProjectBtn = document.getElementById("add-project-btn");
  const addProjectModal = document.getElementById("add-project-modal");
  const fetchProjectBtn = document.getElementById("fetch-project-btn");
  const githubUrlInput = document.getElementById("github-url");
  const projectAlert = document.getElementById("project-form-alert");
  
  if (addProjectBtn && addProjectModal) {
    // Open Modal
    addProjectBtn.addEventListener("click", () => {
      addProjectModal.classList.add("show");
      document.body.style.overflow = "hidden";
      githubUrlInput.value = "";
      projectAlert.innerHTML = "";
      githubUrlInput.focus();
    });

    // Handle Fetch
    fetchProjectBtn.addEventListener("click", async () => {
      const url = githubUrlInput.value.trim();
      
      if (!url) {
        showError("Please enter a URL");
        return;
      }
      
      // Simple validation
      if (!url.includes("github.com/")) {
        showError("Please enter a valid GitHub URL");
        return;
      }

      // Show loading
      const originalText = fetchProjectBtn.innerHTML;
      fetchProjectBtn.innerHTML = `<span class="button_top">Fetching...</span>`;
      fetchProjectBtn.disabled = true;
      projectAlert.innerHTML = "";

      try {
        const urlParts = new URL(url).pathname.split("/").filter(Boolean);
        if (urlParts.length < 2) throw new Error("Invalid repo URL");
        
        const owner = urlParts[urlParts.length - 2];
        const repo = urlParts[urlParts.length - 1];
        
        // Fetch repo data
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        if (!response.ok) {
          throw new Error("Repository not found (check URL or rate limit)");
        }
        
        const data = await response.json();
        
        const newProject = {
          title: data.name,
          description: data.description || "No description provided",
          year: new Date(data.updated_at).getFullYear().toString(),
          technologies: data.language ? [data.language] : ["GitHub"],
          image: `https://opengraph.githubassets.com/1/${owner}/${repo}`,
          fallbackImage: `https://placehold.co/300x200/1e293b/ffffff?text=${data.name}`,
          link: data.html_url
        };
        
        // Add to projects list
        projects.unshift(newProject);
        localStorage.setItem("portfolio_projects", JSON.stringify(projects));
        
        // Re-render
        renderProjects();
        
        // Close modal
        addProjectModal.classList.remove("show");
        document.body.style.overflow = "";
        
      } catch (error) {
        console.error(error);
        showError(error.message);
      } finally {
        // Reset button
        fetchProjectBtn.innerHTML = originalText;
        fetchProjectBtn.disabled = false;
      }
    });

    function showError(msg) {
      projectAlert.innerHTML = `
        <div class="alert alert-danger" role="alert" style="color: #ff6b6b; margin-bottom: 1rem; font-size: 0.875rem;">
          ${msg}
        </div>
      `;
    }
  }

  // Filter projects with the search input
  const filterInput = document.querySelector(".filter-input");
  if (filterInput) {
    filterInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const projectCards = document.querySelectorAll(".project-card");

      projectCards.forEach((card) => {
        const title = card.querySelector(".project-title").textContent.toLowerCase();
        const description = card.querySelector(".project-description").textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
