const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.target.value;
  if (event.target.value.length === 0) {
    outputRef.textContent = "Незнакомец";
  }
});
