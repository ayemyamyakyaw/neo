function toggleDarkMode() {
    var container = document.getElementById("container");
    var darkModeToggle = document.querySelector(".dark-mode-toggle");
    container.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark-mode");
    darkModeToggle.innerText = container.classList.contains("dark-mode") ? "White Mode" : "Dark Mode";
}