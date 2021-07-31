const inputWeight = document.getElementById("inputWeight");
const inputReps = document.getElementById("inputReps");
const form = document.querySelector("form");
const resultText = document.querySelector(".resultText");
const results = document.querySelector(".results");
const resetBtn = document.querySelector(".reset");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputWeight.value <= 0) {
    return alert("Weight Must be greater than zero");
  }

  let kg = inputWeight.value / 2.2046;

  let max = kg / (1.0278 - 0.0278 * inputReps.value);

  let result = max * 2.2046;

  resultText.textContent = result.toFixed(1);

  results.classList.remove("hide");

  console.log(result.toFixed(1));
});

resetBtn.addEventListener("click", (e) => {
  results.classList.add("hide");

  kg = max = result = 0;
});
