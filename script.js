const Fakemail = "zinab@khadija.com";
const FakePassword = "12345678";

const form = document.querySelector("#form");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const errorMessage = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");
const successMessage = document.querySelector("#success");

function clearForm() {
  emailInput.value = "";
  passwordInput.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorMessage.textContent = "";
  errorPassword.textContent = "";
  successMessage.textContent = "";

  emailValue = emailInput.value;
  passwordValue = passwordInput.value;

  let isValid = true;

  if (emailValue !== Fakemail) {
    errorMessage.textContent = "Email is incorrect";
    isValid = false;
  }

  if (passwordValue !== FakePassword) {
    errorPassword.textContent = "Password is incorrect";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Login successful!";

    clearForm();
  }
});