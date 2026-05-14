// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const messageDiv = document.getElementById('form-message');
    
    // Basic validation
    if (!name || !email || !message) {
        messageDiv.textContent = 'Please fill in all required fields.';
        messageDiv.className = 'form-message error';
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.className = 'form-message error';
        return;
    }
    
    // Simulate form submission (in production, you'd send this to a server)
    console.log('Form submitted:', { name, email, phone, message });
    
    messageDiv.textContent = 'Thank you! We\'ll get back to you soon.';
    messageDiv.className = 'form-message success';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.className = 'form-message';
    }, 5000);
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});