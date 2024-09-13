// Dummy user database
const users = [{ username: 'suhana', password: 'adventure123' }];

// Function for user login authentication
function login(event) {
    event.preventDefault(); // Prevent form from submitting
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find the user in the dummy database
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login Successful');
        // Redirect to the library page (or dashboard)
        showSection('library');
    } else {
        alert('Invalid credentials');
    }
}

// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to trigger bounce animation on button click
function triggerAnimation() {
    const button = document.querySelector('.cta-button');
    button.classList.add('bounce');

    // Remove the animation class after the animation completes
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 500);
}



// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to trigger bounce animation on button click
function triggerAnimation() {
    const button = document.querySelector('.cta-button');
    button.classList.add('bounce');

    // Remove the animation class after the animation completes
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 500);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to add floating effect on hover
function addFloatingEffect() {
    const elements = document.querySelectorAll('.course-card, section');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('floating');
        });
        element.addEventListener('mouseout', () => {
            element.classList.remove('floating');
        });
    });
}

// Initialize floating effect on page load
document.addEventListener('DOMContentLoaded', () => {
    addFloatingEffect();
});

// Function for smooth scrolling
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Update showSection function to include smooth scrolling
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    smoothScrollTo(sectionId); // Smooth scrolling to the section
}
