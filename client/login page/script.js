document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Simple validation (replace this with actual authentication logic)
  if (email === "test@example.com" && password === "password") {
    alert("Login successful!");
    // Redirect or perform any action upon successful login
  } else {
    errorMessage.textContent = "Invalid email or password.";
  }
});
