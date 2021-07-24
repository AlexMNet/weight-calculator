const form = document.querySelector("form");
const results = document.querySelector(".results");
const resetBtn = document.querySelector(".reset");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
let inputWeight = document.getElementById("totalWeight");
let percentage = document.getElementById("percentage");
let barWeight = document.getElementById("barWeight");
let totalWeightSpan = document.getElementById("totalWeightSpan");
let fortyFive = document.getElementById("fortyFive");
let twentyFive = document.getElementById("twentyFive");
let ten = document.getElementById("ten");
let five = document.getElementById("five");
let twoPointFive = document.getElementById("twoPointFive");
const badges = document.querySelectorAll(".badge");
let calculatedWeightSpan = document.getElementById("calculatedWeight");
let overallWeight;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearBadges();

  overallWeight =
    Math.round((inputWeight.value * (percentage.value / 100)) / 5) * 5;

  calcWeights();

  results.classList.remove("hide");
});

incrementBtn.addEventListener("click", () => {
  overallWeight = overallWeight + 5;

  clearBadges();

  calcWeights();
});

decrementBtn.addEventListener("click", () => {
  overallWeight = overallWeight - 5;

  clearBadges();

  calcWeights();
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

const calcWeights = () => {
  totalWeightSpan.textContent = overallWeight;

  if (overallWeight < 45) {
    alert("Weight Must Be over 45lbs");
    window.location.reload();
  }

  let plateWeight = overallWeight - barWeight.value;

  //Calucate 45s
  let lb45 = Math.floor(plateWeight / 90);
  plateWeight = plateWeight - lb45 * 90;

  let lb25 = Math.floor(plateWeight / 50);
  plateWeight = plateWeight - lb25 * 50;

  let lb10 = Math.floor(plateWeight / 20);
  plateWeight = plateWeight - lb10 * 20;

  let lb5 = Math.floor(plateWeight / 10);
  plateWeight = plateWeight - lb5 * 10;

  let lb2andhalf = Math.floor(plateWeight / 5);
  plateWeight = plateWeight - lb2andhalf * 5;

  lb45 > 0 ? (fortyFive.innerText = lb45) : null;
  lb25 > 0 ? (twentyFive.innerText = lb25) : null;
  lb10 > 0 ? (ten.innerText = lb10) : null;
  lb5 > 0 ? (five.innerText = lb5) : null;
  lb2andhalf > 0 ? (twoPointFive.innerText = lb2andhalf) : null;
};

const clearBadges = () => {
  badges.forEach((badge) => {
    badge.innerText = "";
  });
};
