// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active'); // For animated menu icon (optional CSS needed)
    });

    // Close menu when a link is clicked (for single page layout)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });
});

// Typing Effect for Hero Section
const typingTextElement = document.getElementById('typing-text');
const texts = [
    "शिक्षा, समर्पण और सफलता",
    "आपके भविष्य को आकार दे रहा है",
    "विषयों पर विशेषज्ञता प्राप्त करें",
    "Manik Sir के साथ सर्वोत्तम सीखें"
];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingTextElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed
    } else {
        setTimeout(erase, 1500); // Wait before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Erasing speed
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // Wait before typing next text
    }
}

// Start the typing effect
if (typingTextElement) {
    setTimeout(type, 1000);
}