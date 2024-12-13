// Function to handle subscription button click
function subscribe(plan) {
    alert('You have subscribed to the ' + plan + ' plan!');
    // Store subscription plan in localStorage
    localStorage.setItem("subscriptionPlan", plan);
    // Redirect to Linear Algebra notes page (can be a page with a PDF viewer or direct PDF download)
    window.location.href = "../Notes/LinearAlgebra/LinearAlgebra.pdf"; // Adjust path as needed
}
