// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button and the content div by their IDs
    const openButton = document.getElementById('openButton');
    const contentDiv = document.getElementById('contentDiv');
    const close_modals = document.querySelectorAll('.close-modal');
    const overlay = document.getElementById('overlay');


    // Add an event listener to the button for the 'click' event
    openButton.addEventListener('click', () => {
        // Toggle the 'visible' class on the content div
        // If the class is present, it removes it (hiding the div)
        // If the class is absent, it adds it (showing the div)
        contentDiv.classList.toggle('visible');
    });
});
