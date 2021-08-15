
const email = document.getElementById("Email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please provide a valid email address");
  } else {
    email.setCustomValidity("");
  }
});
