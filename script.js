// Select the theme toggle button.
const themeToggle = document.querySelector("#theme-toggle");

// Switch between dark mode and light mode when the button is clicked.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Update the button text and accessibility label.
    const isLightMode = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLightMode ? "Dark Mode" : "Light Mode";
    themeToggle.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark mode" : "Switch to light mode"
    );
    themeToggle.setAttribute("aria-pressed", String(isLightMode));
});



console.log("hello world")
