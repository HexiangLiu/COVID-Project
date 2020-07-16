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
  // Get value of typed in zip, store in a variable.
  // var enteredZip = parseInt($("#user_input").val());
  // // console.log(enteredZip);
  // // Empty the container of previously displayed cards
  // container.empty();

  // API data
    // link: https://data.cityofnewyork.us/resource/sp4a-vevi.json
    var mealURL = "https://data.cityofnewyork.us/resource/sp4a-vevi.json";

    // see data
    console.log(mealURL);

    // Make ajax request
    $.ajax({
      url: mealURL,
      type: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "GJvggkWxbnhHZBd5UOE1oofWH"
      }
  }).then(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);


    // get an array of the nearest location
    

    // Loop through the array


    // set variables

    // School District
    const district = response.main.temp;
    // console.log(temp) // in Fahrenheit
    // creating an element to display temp
    // $("#currentTemp").append(temp + " " + "&#8457;");


  }).catch(function(error){
    console.log(error);
    console.log("Opps, there's an error on your page.")
  });

  
} 
getFreeMeals()
