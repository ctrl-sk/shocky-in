function setLogoContainerHeight() {
    const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const vh = viewportHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial height on load
setLogoContainerHeight();

// Update on resize events
window.addEventListener('resize', setLogoContainerHeight);

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setLogoContainerHeight);
}
