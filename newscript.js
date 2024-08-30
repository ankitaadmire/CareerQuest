document.addEventListener("DOMContentLoaded", function() {
    const joinUsButton = document.getElementById("join-us-btn");
    const modalOverlay = document.getElementById("modalOverlay");
    const registerTab = document.getElementById("registerTab");
    const loginTab = document.getElementById("loginTab");
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Function to open the modal
    function openRegisterModal() {
        modalOverlay.style.display = "block";
    }

    // Function to switch to the register form
    function showRegisterForm() {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
    }

    // Function to switch to the login form
    function showLoginForm() {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
    }

    // Event Listeners
    joinUsButton.addEventListener("click", openRegisterModal);
    registerTab.addEventListener("click", showRegisterForm);
    loginTab.addEventListener("click", showLoginForm);
});


