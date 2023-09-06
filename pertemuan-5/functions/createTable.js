export default function createTableHTML(inputData) {
  // buat komponen tabel
  const tableHTML = `
    <table cellpadding="10" cellspacing="10">
        ${Object.entries(inputData)
          .map(
            ([field, value]) => `
            <tr>
                <th align="left">${String(field)
                  .split("_")
                  .join(" ")
                  .toUpperCase()}</th>
                <td>:</td>
                <td>${value}</td>
            </tr>
        `
          )
          .join("")}
    </table>
`;

  return tableHTML;
}
