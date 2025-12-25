// Social Media Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Socials script loaded');
  
  const socialsBtn = document.getElementById('socials-btn');
  const socialsModal = document.getElementById('socials-modal');
  
  console.log('Social button element:', socialsBtn);
  console.log('Social modal element:', socialsModal);
  
  if (socialsBtn && socialsModal) {
    const socialsCloseBtn = socialsModal.querySelector('.modal-close');
    
    // Open socials modal
    socialsBtn.addEventListener('click', function() {
      console.log('Social button clicked');
      socialsModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    
    // Close socials modal with the X button
    if (socialsCloseBtn) {
      socialsCloseBtn.addEventListener('click', function() {
        socialsModal.classList.remove('show');
        document.body.style.overflow = '';
      });
    }
    
    // Close socials modal when clicking outside the content
    socialsModal.addEventListener('click', function(e) {
      if (e.target === socialsModal) {
        socialsModal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
    
    // Close socials modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && socialsModal.classList.contains('show')) {
        socialsModal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
}); 