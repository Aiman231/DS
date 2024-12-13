function loginUser(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check hardcoded credentials
    if (username === "user" && password === "password123") {
        alert("Login successful!");
        // Save login status and username to localStorage
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", username);
        // Redirect to subscription page
        window.location.href = "subscription/subscription.html";
    } else {
        alert("Invalid username or password.");
    }
}
