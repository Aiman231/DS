// Subscription button logic
function subscribe(plan) {
    alert('You have subscribed to the ' + plan + ' plan!');
}

// Check login status when the page loads
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});
