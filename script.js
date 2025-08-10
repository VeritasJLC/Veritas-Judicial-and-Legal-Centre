document.addEventListener('DOMContentLoaded', function() {
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const acceptButton = document.getElementById('accept-disclaimer');
    const mainContent = document.getElementById('main-content');

    // Show modal on page load
    disclaimerModal.classList.remove('hidden');

    // Hide modal and show main content when Accept is clicked
    acceptButton.addEventListener('click', function() {
        disclaimerModal.classList.add('hidden');
        mainContent.style.display = 'block';
    });
});