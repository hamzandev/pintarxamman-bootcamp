import { inputs } from "../main.js";
import setErrorMessage from "./setErrorMessage.js";
import showModal from "./showModal.js";

export default function validateForm() {
  let isFilled = true;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isFilled = false;
    }
  });

  if (isFilled) {
    showModal();
  } else {
    setErrorMessage();
  }
}
