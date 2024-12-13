window.onload = function() {
    const loggedIn = localStorage.getItem("loggedIn");
    const subscriptionPlan = localStorage.getItem("subscriptionPlan");

    if (loggedIn && subscriptionPlan) {
        // Display message if the user is subscribed
        document.getElementById("access-message").innerHTML = "You are subscribed to the " + subscriptionPlan + " plan. You can access the notes below.";
        document.getElementById("pdf-viewer").src = "Notes/LinearAlgebra/LinearAlgebra.pdf"; // Load the PDF
    } else {
        // If not logged in or subscribed, show a message
        document.getElementById("access-message").innerHTML = "You need to subscribe to access the notes.";
        // Redirect to the subscription page after a few seconds
        setTimeout(function() {
            window.location.href = "../subscription/subscription.html"; // Adjust path accordingly
        }, 3000); // Redirect after 3 seconds
    }
}
