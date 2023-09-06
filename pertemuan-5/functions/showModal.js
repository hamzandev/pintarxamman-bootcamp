import { inputs, modal } from "../main.js";
import createTableHTML from "./createTable.js";

export default function showModal() {
  // kumpulkan data dari setiap input
  const inputData = {};
  inputs.forEach((input) => {
    inputData[input.id] = input.value;
  });
  const tableHTML = createTableHTML(inputData);
  // masukkan table kedalam modal
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = tableHTML;

  // tampilkan modal
  modal.style.display = "block";
}
