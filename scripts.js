function showContent(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.remove('show'));
    document.getElementById(section).classList.add('show');
}

function loadContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
            showContent('dynamic-content');
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadProjectDetails(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
            showContent('dynamic-content');
        })
        .catch(error => console.error('Error loading project details:', error));
}

function backToProjects() {
    loadContent('projects.html');
}
