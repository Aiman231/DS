// Common JavaScript for all pages

// This function is a placeholder for shared logic like authentication check or logging
function checkAuth() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html"; // Redirect if not logged in
    }
}
