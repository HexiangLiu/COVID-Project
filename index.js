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
    // console.log(mealURL);

    // Make ajax request
    $.ajax({
      url: mealURL,
      type: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "GJvggkWxbnhHZBd5UOE1oofWH"
      }
  }).then(function(data) {
    // alert("Retrieved " + data.length + " records from the dataset!");
    // console.log(data);


    // get an array of the nearest location
    

    // Loop through the array


    // set variables, create elements, append elements

      // School District
      const district = data[0].district;
      console.log(district)
      // creating an element to display district
      // $("#currentTemp").append(`School District: #${district}`);

      // School Name
      const schoolName = data[0].schoolname;
      console.log(schoolName)
      // creating an element to display name
      // $("#currentTemp").append(`School Name: ${schoolName}`);

      // School Address
      const siteAddress = data[0].siteaddress;
      console.log(siteAddress)
      // creating an element to display address
      // $("#currentTemp").append(`School Address: ${siteAddress}`);  

      // Borough
      const boro = data[0].city;
      console.log(boro)
      // creating an element to display boro
      // $("#currentTemp").append(`Borough: ${boro}`);

      // Zip Code
      const zip = data[0].zip;
      console.log(zip)
      // creating an element to display zip
      // $("#currentTemp").append(`ZIP Code: ${zip}`);

      // Accessibility
      const access = data[0].accessibility;
      console.log(access)
      // creating an element to display accessibility
      // $("#currentTemp").append(`Site Accessibility: ${access}`);

      // Kosher Status
      const kosher = data[0].koshermealtype;
      console.log(kosher)
      // creating an element to display kosher status
      // $("#currentTemp").append(`Kosher Meal Type: ${kosher}`);

  }).catch(function(error){
    console.log(error, "Opps, there's an error on your page.");
  });

  
} 
getFreeMeals()
