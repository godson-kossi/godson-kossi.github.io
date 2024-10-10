const sidebar_button = document.getElementById('sidebar-button-input');
const sidebar = document.getElementById('sidebar');

// Run the corresponding animation
function toggleAnimation(checked) {

    // Remove both animations
    sidebar.classList.remove('animated', 'reversed');

    // This force reset its animations property
    void sidebar.offsetWidth;

    // Add animation & show icon
    if (checked) {sidebar.classList.add('reversed')}
    else {sidebar.classList.add('animated')}
}

// Set listener
sidebar_button.addEventListener('change',()=> {toggleAnimation(sidebar_button.checked)});


// Responsiveness
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Hide sidebar when screen is small
function handleSmallScreen(e) {
    if (e.matches) {sidebar_button.checked = false; toggleAnimation(false)}
}
// Event listener
mediaQuery.addEventListener('change', handleSmallScreen);

// Init at page loading
handleSmallScreen(mediaQuery);