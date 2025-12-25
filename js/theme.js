document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;
  
  if (darkModeToggle) {
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
  }
})
