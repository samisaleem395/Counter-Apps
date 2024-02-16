const counterDisplay = document.getElementById("number");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset-btn");

let count = 0;

// Update the counter display
function updateCounter() {
  counterDisplay.textContent = count;
}

// Increment the counter
plusButton.addEventListener("click", function () {
  count++;
  updateCounter();
});

// Decrement the counter
minusButton.addEventListener("click", function () {
  count--;
  updateCounter();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateCounter();
});