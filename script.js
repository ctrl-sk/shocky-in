function setBodyHeight() {
    const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
    const vh = viewportHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setBodyHeight();

window.addEventListener('resize', setBodyHeight);

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setBodyHeight);
}
