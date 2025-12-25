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
})
