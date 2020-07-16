//DOM
const container = $("data_container");
const mainButton = $(".all_btn");
const mealButton = $("#meal_btn");
const testingButton = $("#testing_btn");
const userInput = $("#user_input");
const form = $("form");

//Event Listener
form.on("submit", function (e) {
  e.preventDefault();
});

mainButton.on("click", function () {
  getTestingLocation();
  getFreeMeals();
});

testingButton.on("click", function () {
  getTestingLocation();
});

mealButton.on("click", function () {
  getFreeMeals();
});

//Function to get the nearest zip code

//Function to get and render testing location
function getTestingLocation(e) {
  // Get value of typed in zip, store in a variable.
  var enteredZip = parseInt($("#user_input").val());
  // console.log(enteredZip);
  // Empty the container of previously displayed cards
  container.empty();
  // This is the API link for testing locations.
  var queryURL =
    "https://covid-19-testing.github.io/locations/new-york/complete.json";
  // Create an AJAX call to retrieve data
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Run a loop that looks at every zip code in the API array.
    for (let i = 0; i < response.length; i++) {
      // Turn each of those API zip codes into integers.
      possibleMatch = parseInt(response[i].physical_address[0].postal_code);
      // Check to see the possibleMatch zipcodes from the API are within range of the user's enteredZip
      if (
        possibleMatch <= enteredZip + 10 &&
        possibleMatch >= enteredZip - 10
      ) {
        // console.log(response);
        // console.log(response[i].physical_address[0].postal_code);
        // Generate/Fill cards:
        $("<div>", {
          class: "cell",
        })
          .append(
            $("<div>", {
              class: "card",
            }).append(
              $("<div>", {
                class: "card-selection",
              }).append(
                $("<h2>", {
                  class: "#",
                  text: `Cite Name: ${response[i].alternate_name}`,
                }),
                $("<p>", {
                  text: `Cite Location: ${response[i].physical_address[0].address_1}`,
                }),
                $("<p>", {
                  class: "card-text",
                  html: `Hours: `,
                  // Need to address this, sometimes hours are not provided.
                  // html: `Hours: ${response[i].regular_schedule[0].opens_at} - ${response[i].regular_schedule[0].closes_at}`,
                }),
                $("<p>", {
                  class: "card-text",
                  html: `Phone Number: ${response[i].phones[0].number}`,
                })
              )
            )
          )
          .appendTo($("#data_container"));
      }
    }
  });
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
