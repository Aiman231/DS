// Handle the login process
function loginUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a simple login validation
    if (username === "user" && password === "password123") {
        alert("Login successful!");
        // Store login status in localStorage
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", username);
        window.location.href = "subscription/subscription.html"; // Redirect to the subscription page
    } else {
        alert("Invalid username or password.");
    }
}
