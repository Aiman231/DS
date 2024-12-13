function subscribe(plan) {
    alert('You have subscribed to the ' + plan + ' plan!');
    // Store subscription plan in localStorage
    localStorage.setItem("subscriptionPlan", plan);
    window.location.href = "../Notes/LinearAlgebra/LinearAlgebra.pdf"; // Redirect to PDF
}
