function subscribe(plan) {
    alert('You have subscribed to the ' + plan + ' plan!');
}

function loginUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a simple login validation
    if (username === "user" && password === "password123") {
        alert("Login successful!");
        // Store the user's login status in localStorage (simulating session)
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", username);
        window.location.href = "subscriptions.html"; // Redirect to the subscription page
    } else {
        alert("Invalid username or password.");
    }
}
