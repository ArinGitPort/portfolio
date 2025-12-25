document.addEventListener("DOMContentLoaded", () => {
  // Modal functionality for previous roles
  const modal = document.getElementById('roles-modal');
  const modalOpenBtn = document.querySelector('.previous-roles-btn');
  
  if (modal && modalOpenBtn) {
    const modalCloseBtn = modal.querySelector('.modal-close');
    
    // Open modal
    modalOpenBtn.addEventListener('click', () => {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    });
    
    // Close modal with the X button
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      });
    }
    
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
  }
})
