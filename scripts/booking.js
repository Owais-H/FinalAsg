/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 0; // Default cost per day
// var numberOfDays = 0; // Default number of days
var dayCounter = 0; // Counter for clicked days

// Get elements
var clearButton = document.getElementById("clear-button");
var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");
var calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var dayButtons = document.querySelectorAll(".blue-hover");

dayButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      dayCounter++;
      // Update any other relevant variables
      // Recalculate total cost
      calculateTotalCost();
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
  dayButtons.forEach(function(button) {
    button.classList.remove("clicked");
  });
  dayCounter = 0;
  // Reset other relevant variables
  // Reset calculated cost
  calculatedCost.textContent = "Calculated Cost: $0";
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", function() {
  costPerDay = 20;
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  // Recalculate total cost
  calculateTotalCost();
});

fullButton.addEventListener("click", function() {
  costPerDay = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  // Recalculate total cost
  calculateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function calculateTotalCost() {
  var totalCost = costPerDay * dayCounter;
  calculatedCost.textContent = "Calculated Cost: $" + totalCost;
}

