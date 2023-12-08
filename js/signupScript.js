document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data in local storage
    const userData = {
      username: username,
      email: email,
      // Note: Storing passwords in local storage is not secure
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup successful and user data saved!");
  });
});
