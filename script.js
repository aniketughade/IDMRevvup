// Example JavaScript to Handle Login and Profile Update
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "user@example.com" && password === "1234") {
    alert("Welcome to IDMRevvup!");
    window.location.href = "profile.html";
  } else {
    alert("Invalid email or password.");
  }
});