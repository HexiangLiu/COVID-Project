//DOM
const container = $('#data_container');
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
  getNearestZips();
  // getTestingLocation();
});

mealButton.on('click', function () {
  getFreeMeals();
});

var possibleMatchArray = [];

//Function to get the nearest zip code
function getNearestZips() {
  // Get value of typed in zip, store in a variable.
  var enteredZip = parseInt($('#user_input').val());
  var queryURL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${enteredZip}&minimumradius=0&maximumradius=10&key=M93TF4UKEVM7RB79GPKJ`;
  // Create an AJAX call to retrieve data
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    // console.log(response);
    // console.log(response.DataList[1].Code);
    for (let i = 0; i < 50; i++) {
      possibleMatchArray.push(response.DataList[i].Code);
    }
    getTestingLocation();
  });
}

//Function to get and render testing location
function getTestingLocation() {
  // Empty the container of previously displayed cards
  container.empty();
  // This is the API link for testing locations.
  var queryURL =
    'https://covid-19-testing.github.io/locations/new-york/complete.json';
  // Create an AJAX call to retrieve data
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    // Run a loop that looks at every zip code in the API array.
    for (let i = 0; i < response.length; i++) {
      // console.log(response[i].physical_address[0].postal_code);
      // Check to see the possibleMatch zipcodes from the API are within range of the user's enteredZip
      if (
        possibleMatchArray.includes(response[i].physical_address[0].postal_code)
      ) {
        // console.log(response);
        // console.log(response[i].physical_address[0].postal_code);
        // Generate/Fill cards:
        $('<div>', {
          class: 'cell',
        })
          .append(
            $('<div>', {
              class: 'card',
            }).append(
              $('<div>', {
                class: 'card-selection',
              }).append(
                $('<h2>', {
                  class: '#',
                  text: `Cite Name: ${response[i].alternate_name}`,
                }),
                $('<p>', {
                  text: `Cite Location: ${response[i].physical_address[0].address_1}`,
                }),
                $('<p>', {
                  class: 'card-text',
                  html: `Hours: `,
                  // Need to address this, sometimes hours are not provided.
                  // html: `Hours: ${response[i].regular_schedule[0].opens_at} - ${response[i].regular_schedule[0].closes_at}`,
                }),
                $('<p>', {
                  class: 'card-text',
                  html: `Phone Number: ${response[i].phones[0].number}`,
                })
              )
            )
          )
          .appendTo($('#data_container'));
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
