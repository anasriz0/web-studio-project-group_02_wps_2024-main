const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(savedTheme);
    themeToggle.value = savedTheme === 'light-theme' ? 'light' : 'dark';
}

// Theme change logic
themeToggle.addEventListener('change', function () {
    if (this.value === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Save to local storage
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); // Save to local storage
    }
});

// Section switching logic
function showSection(sectionId) {
    const accountSection = document.getElementById('manage-account');
    const themeSection = document.getElementById('manage-themes');
    const accountLink = document.getElementById('manage-account-link');
    const themeLink = document.getElementById('manage-themes-link');

    if (sectionId === 'manage-account') {
        accountSection.style.display = 'flex';
        themeSection.style.display = 'none';
        accountLink.classList.add('active');
        themeLink.classList.remove('active');
    } else if (sectionId === 'manage-themes') {
        accountSection.style.display = 'none';
        themeSection.style.display = 'block';
        accountLink.classList.remove('active');
        themeLink.classList.add('active');
    }
}

// Default section
showSection('manage-account');