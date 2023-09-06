import { inputs } from "../main.js";

export default function setErrorMessage() {
  inputs.forEach((input) => {
    //   Hapus pesan error diinput
    const existingErrorMessage = input.nextElementSibling;
    if (
      existingErrorMessage &&
      existingErrorMessage.classList.contains("error-message")
    ) {
      existingErrorMessage.remove();
    }

    // Check if the input is empty
    if (input.value.trim() === "") {
      // Create a new error message element
      const errorMessage = document.createElement("div");
      errorMessage.style.color = "red";
      errorMessage.className = "error-message";
      errorMessage.textContent = "Field ini wajib diisi!";

      // Add the error message after the input field
      input.insertAdjacentElement("afterend", errorMessage);
    }
  });

  // Add event listeners to inputs to remove error messages on input change
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      const errorMessage = input.nextElementSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
      }
    });
  });
}
