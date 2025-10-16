const sections = [
    "about", "experience", "education", "skills", 
    "projects", "publications", "awards", "references"
];

const contentDiv = document.getElementById('content');

function loadSection(section) {
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
            window.scrollTo(0, 0); // Scroll to top
        });
}

// Load default section
const defaultSection = location.hash ? location.hash.substring(1) : "about";
loadSection(defaultSection);

// Handle nav clicks
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const section = link.getAttribute('href').substring(1);
        history.pushState(null, null, '#' + section);
        loadSection(section);

        // Highlight active link
        document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Handle back/forward browser buttons
window.addEventListener('popstate', () => {
    const section = location.hash ? location.hash.substring(1) : "about";
    loadSection(section);
});
