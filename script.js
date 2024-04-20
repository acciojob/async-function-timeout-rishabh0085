//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", async () => {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;

    if (!textInput || !delayInput) {
      output.textContent = "Please fill in both text and delay fields.";
      return;
    }

    output.textContent = "Waiting...";

    await delay(parseInt(delayInput));

    output.textContent = textInput;
  });

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
});
