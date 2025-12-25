// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact JS loaded');
    
    // Get elements
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const contactForm = document.getElementById('contact-form');
    const closeBtn = contactModal.querySelector('.modal-close');
    const formAlertContainer = document.getElementById('form-alert-container');
    
    console.log('Contact button:', contactBtn);
    
    // Open contact modal when contact button is clicked
    contactBtn.addEventListener('click', function(e) {
        console.log('Contact button clicked');
        e.preventDefault();
        contactModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        // Clear any previous form data and validation
        resetForm();
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        contactModal.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        console.log('Form submitted');
        e.preventDefault();
        
        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;
        
        // Clear previous validation
        formAlertContainer.innerHTML = '';
        contactForm.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('is-invalid');
            input.classList.remove('is-valid');
        });
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('is-invalid');
            isValid = false;
        } else {
            nameInput.classList.add('is-valid');
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            messageInput.classList.add('is-invalid');
            isValid = false;
        } else {
            messageInput.classList.add('is-valid');
        }
        
        // If form is valid, simulate submission
        if (isValid) {
            // Show loading state on button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span class="button_top">Sending...</span>`;
            submitBtn.disabled = true;
            
            // Show success message after simulated sending
            setTimeout(() => {
                // Show success message
                formAlertContainer.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        Thank you for your message! I'll get back to you soon.
                    </div>
                `;
                
                // Collect form data (for demonstration)
                const formData = {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim()
                };
                
                // In a real application, you would send the form data to a server here
                console.log('Form submitted successfully with data:', formData);
                
                // Reset form
                contactForm.reset();
                
                // Remove validation classes after submission
                contactForm.querySelectorAll('.form-control').forEach(input => {
                    input.classList.remove('is-valid');
                });
                
                // Restore button state
                submitBtn.innerHTML = originalButtonText;
                submitBtn.disabled = false;
                
                // Optional: Close modal after successful submission (delayed for UX)
                setTimeout(() => {
                    contactModal.classList.remove('show');
                    document.body.style.overflow = '';
                    
                    // Clear success message after modal closes
                    setTimeout(() => {
                        formAlertContainer.innerHTML = '';
                    }, 500);
                }, 3000);
            }, 1500);
        } else {
            // Show error message
            formAlertContainer.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Please fill out all required fields correctly.
                </div>
            `;
            
            // Focus on first invalid input
            contactForm.querySelector('.is-invalid').focus();
        }
    });
    
    // Add input event listeners for real-time validation feedback
    contactForm.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            // Remove validation classes as user types
            this.classList.remove('is-invalid');
            
            // For email field, validate format as user types
            if (this.id === 'email' && this.value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value.trim())) {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.add('is-valid');
                }
            }
        });
    });
    
    // Function to reset the form
    function resetForm() {
        contactForm.reset();
        formAlertContainer.innerHTML = '';
        contactForm.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('is-invalid');
            input.classList.remove('is-valid');
        });
    }
    
    // Manual trigger for contact button if needed
    window.openContactModal = function() {
        contactModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        resetForm();
    };
});
