import closeModal from "./functions/closeModal.js";
import validateForm from "./functions/validateForm.js";

export const form = document.getElementById("myForm");
export const inputs = document.querySelectorAll("input");

export const modal = document.getElementById("myModal");
export const closeModalBtn = document.getElementById("closeModalBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

closeModal();
