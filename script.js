// Redirect to homepage after login
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  window.location.href = "home.html"; // Redirect to homepage
});

// Redirect to homepage after signup
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  window.location.href = "home.html"; // Redirect to homepage
});
