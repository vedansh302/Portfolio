document.addEventListener("DOMContentLoaded", () => {
    let toggleButton = document.getElementById("toggle");
    let logo = document.querySelector(".logo"); // Select the logo image
    const root = document.documentElement;

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            // Check the current background color and toggle between themes
            if (root.style.getPropertyValue('--bg-color') === '#000000') {
                // Light mode
                root.style.setProperty('--bg-color', '#f5f5f5');  // Light mode background
                root.style.setProperty('--font-color', '#333333'); // Light mode font color
                document.getElementById("header").style.backgroundImage = "url('Images/bg-white.jpg')"; // Light mode background image
                logo.src = "Images/Vedanshlogo7.png"; // Light mode logo
                toggleButton.innerHTML = '<i class="fa-solid fa-toggle-off fa-2xl"></i>'; // Change to toggle off icon
            } else {
                // Dark mode
                root.style.setProperty('--bg-color', '#000000');  // Dark mode background
                root.style.setProperty('--font-color', '#ffffff'); // Dark mode font color
                document.getElementById("header").style.backgroundImage = "url('Images/background.jpg')"; // Dark mode background image
                logo.src = "Images/logo6.png"; // Dark mode logo
                toggleButton.innerHTML = '<i class="fa-solid fa-toggle-on fa-2xl"></i>'; // Change to toggle on icon
            }
        });
    } else {
        console.error("Element with ID 'toggle' not found");
    }
});
