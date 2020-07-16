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

  // API data
  // link: https://data.cityofnewyork.us/resource/sp4a-vevi.json
  var mealURL = "https://data.cityofnewyork.us/resource/sp4a-vevi.json";

  // Make ajax request
  $.ajax({
    url: mealURL,
    type: "GET",
    data: {
      "$limit": 5000,
      "$$app_token": "GJvggkWxbnhHZBd5UOE1oofWH"
    }
  }).then(function (data) {
    // get an array of the nearest location

    // Loop through the array for ZIP code
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].zip)
      // if (possibleMatchArray.includes(data[i].zip)) {

      // creating card =============================
      // main card div
      var d1 = $("<div>");
      d1.attr("class", "cell")

      // card div with the data
      var d2 = $("<div>");
      d2.attr("class", "card-selection");

      // different types of data
      var h2 = $("<h2>");
      h2.attr("class", "#");

      var p1 = $("<p>");
      p1.attr("class", "card-text");

      var p2 = $("<p>");
      p2.attr("class", "card-text");

      var p3 = $("<p>");
      p3.attr("class", "card-text");

      var p4 = $("<p>");
      p4.attr("class", "card-text");

      var p5 = $("<p>");
      p5.attr("class", "card-text");

      var p6 = $("<p>");
      p6.attr("class", "card-text");

      d1.append(d2);
      d1.append(h2);
      d1.append(p1);
      d1.append(p2);
      d1.append(p3);
      d1.append(p4);
      d1.append(p5);
      d1.append(p6);

      // variables & append ================================

      // School Name
      const schoolName = data[i].schoolname;
      // creating an element to display name in h2 tag
      h2.text(schoolName);

      // School District
      const district = data[i].district;
      // creating an element to display district in p1 tag
      p1.text(`School District: #${district}`);

      // School Address
      const siteAddress = data[i].siteaddress;
      // creating an element to display address in p2 tag
      p2.text(`School Address: ${siteAddress}`);

      // Borough
      const boro = data[i].city;
      // creating an element to display boro in p3 tag
      p3.text(`Borough: ${boro}`);

      // Zip Code
      const zip = data[i].zip;
      // creating an element to display zip in p4 tag
      p4.text(`ZIP Code: ${zip}`);

      // Accessibility
      const access = data[i].accessibility;
      // creating an element to display accessibility in p5 tag
      p5.text(`Site Accessibility: ${access}`);

      // Kosher Status
      const kosher = data[i].koshermealtype;
      // creating an element to display kosher status in p6 tag
      p6.text(`Kosher Meal Type: ${kosher}`);

      $("#data_container").append(d1);
      // }
    }

  }).catch(function (error) {
    console.log(error, "Opps, there's an error on your page.");
  });
}
