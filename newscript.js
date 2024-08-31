// document.addEventListener("DOMContentLoaded", function() {
//     const joinUsButton = document.getElementById("join-us-btn");
//     const modalOverlay = document.getElementById("modalOverlay");
//     const registerTab = document.getElementById("registerTab");
//     const loginTab = document.getElementById("loginTab");
//     const registerForm = document.getElementById("registerForm");
//     const loginForm = document.getElementById("loginForm");

//     // Function to open the modal
//     function openRegisterModal() {
//         modalOverlay.style.display = "block";
//     }

//     // Function to switch to the register form
//     function showRegisterForm() {
//         registerForm.style.display = "block";
//         loginForm.style.display = "none";
//         registerTab.classList.add("active");
//         loginTab.classList.remove("active");
//     }

//     // Function to switch to the login form
//     function showLoginForm() {
//         registerForm.style.display = "none";
//         loginForm.style.display = "block";
//         loginTab.classList.add("active");
//         registerTab.classList.remove("active");
//     }

//     // Event Listeners
//     joinUsButton.addEventListener("click", openRegisterModal);
//     registerTab.addEventListener("click", showRegisterForm);
//     loginTab.addEventListener("click", showLoginForm);
// });

// // Function to show popup
// function showPopup() {
//     document.getElementById('popup').style.visibility = 'visible';
// }

// // Function to close popup
// function closePopup() {
//     document.getElementById('popup').style.visibility = 'hidden';
// }

// // Function to show specific tab
// function showTab(tabName) {
//     var tabs = document.getElementsByClassName('tab-content');
//     for (var i = 0; i < tabs.length; i++) {
//         tabs[i].classList.remove('active');
//     }
//     document.getElementById(tabName).classList.add('active');
// }

// // Automatically show login tab on load
// window.onload = function() {
//     showTab('login');
// };

// Function to show popup
function showPopup() {
    document.getElementById('popup').style.visibility = 'visible';
}

// Function to close popup
function closePopup() {
    document.getElementById('popup').style.visibility = 'hidden';
}

// Function to show specific tab
function showTab(tabName) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
}

// Automatically show login tab on load
window.onload = function() {
    showTab('register');
};

// Add event listener to "Join Us" button
document.getElementById('join-us-btn').addEventListener('click', function() {
    showPopup();
    showTab('register'); // This will open the login tab by default. Change to 'register' if you want to open the register tab.
});