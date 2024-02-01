// Remove overlay filter on images when hovering with a mouse
// Add them again when no longer hovering

const overlaysArray = Array.from(document.getElementsByClassName("overlay"));

const removeOverlay = (event) => {
    const overlay = event.currentTarget;
    overlay.style.opacity = "0";
};

const addOverlay = (event) => {
    const overlay = event.currentTarget;
    overlay.style.opacity = "";
};

const handleOverlayEvents = (overlay) => {
    overlay.addEventListener("mouseenter",removeOverlay);
    overlay.addEventListener("mouseleave", addOverlay);
}

overlaysArray.forEach(overlay => handleOverlayEvents(overlay));