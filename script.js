document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    status.textContent = '';
    status.className = '';

    if (!name || !email || !message) {
      status.textContent = "All fields are required.";
      status.className = "error";
      return;
    }

    if (!emailPattern.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.className = "error";
      return;
    }

    // Show success message
    status.textContent = "Form submitted successfully!";
    status.className = "success";

    // Reset the form
    form.reset();
  });
});
