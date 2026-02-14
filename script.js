// Smooth Scrolling Navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Event listener for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// CTA Button Functionality
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    alert('CTA button clicked!'); // Replace with desired functionality
});

// Form Submission Handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Implement AJAX request to submit the form data
    fetch('submit_form_url', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});