// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject')?.value || document.getElementById('message').value;
    const message = document.getElementById('message').value;
    const messageDiv = document.getElementById('form-message');
    
    // Basic validation
    if (!name || !email || !message) {
        messageDiv.textContent = '❌ Please fill in all required fields.';
        messageDiv.className = 'form-message error';
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageDiv.textContent = '❌ Please enter a valid email address.';
        messageDiv.className = 'form-message error';
        return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, phone, subject, message });
    
    // Show success message
    messageDiv.textContent = '✅ Thank you! We\'ll get back to you within 24 hours.';
    messageDiv.className = 'form-message success';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.className = 'form-message';
    }, 5000);
}
