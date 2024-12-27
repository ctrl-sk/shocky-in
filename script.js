function setBodyHeight() {
    const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
    document.body.style.height = `${viewportHeight}px`;
}

setBodyHeight();

window.addEventListener('resize', setBodyHeight);

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setBodyHeight);
}
