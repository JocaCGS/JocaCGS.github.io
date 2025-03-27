function change(event) {
    const clickedImage = event.target;

    // Check the current opacity and toggle it
    if (clickedImage.style.opacity === "1") {
        clickedImage.style.opacity = "0"; // Make it visible
    } else {
        clickedImage.style.opacity = "1"; // Make it invisible
    }
}
