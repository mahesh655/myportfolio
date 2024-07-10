function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.innerHTML = '▼'; // Down arrow
    } else {
        toggleBtn.innerHTML = '▲'; // Up arrow
    }
}

function showContent(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.remove('show'));
    document.getElementById(section).classList.add('show');
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768 && !sidebar.classList.contains('collapsed')) {
        toggleSidebar();
    }
}

function loadContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
            showContent('dynamic-content');
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth <= 768 && !sidebar.classList.contains('collapsed')) {
                toggleSidebar();
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadProjectDetails(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
            showContent('dynamic-content');
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth <= 768 && !sidebar.classList.contains('collapsed')) {
                toggleSidebar();
            }
        })
        .catch(error => console.error('Error loading project details:', error));
}

function backToProjects() {
    loadContent('projects.html');
}
