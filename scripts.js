function showContent(sectionId) {
    hideAllSections();
    document.getElementById(sectionId).classList.add('show');
}

function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('show')) {
        section.classList.remove('show');
        document.getElementById('about').classList.add('show');
    } else {
        hideAllSections();
        section.classList.add('show');
    }
}

function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('show');
    });
}

// Initially show the About Me section
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about').classList.add('show');
});
