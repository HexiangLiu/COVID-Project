//DOM
const container = $('data_container');
const mainButton = $('.all_btn');
const mealButton = $('#meal_btn');
const testingButton = $('#testing_btn');
const userInput = $('#user_input');
const form = $('form');

//Event Listener
form.on('submit', function (e) {
  e.preventDefault();
});

mainButton.on('click', function () {
  getTestingLocation();
  getFreeMeals();
});

testingButton.on('click', function () {
  getTestingLocation();
});

mealButton.on('click', function () {
  getFreeMeals();
});

//Function to get the nearest zip code
function getNearest(zip) {}

//Function to get and render testing location
function getTestingLocation() {
  container.empty();

  //Your code

  //Make ajax request

  //get an array of the nearest location

  //Loop through the array

  //create element

  //append to container
}

//Function to get and render free meals
function getFreeMeals() {
  container.empty();

  //Your code

  //Make ajax request

  //get an array of the nearest location

  //Loop through the array

  //create element

  //append to container
}
