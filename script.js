function checkCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // This is just an example. In a real application, you would send a request to the server to check credentials.
    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
        return false; // Prevent form submission
    } else {
        document.getElementById("error-message").style.display = "block";
        return false; // Prevent form submission
    }
    
}
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

