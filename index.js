//DOM
const container = $('#data_container');
const mainButton = $('.all_btn');
const mealButton = $('#meal_btn');
const testingButton = $('#testing_btn');
const userInput = $('#user_input');
const form = $('form');

var enteredZip;

//Event Listener
form.on('submit', function (e) {
  e.preventDefault();
  getNearestZips(getTestingLocation);
  getNearestZips(getFreeMeals);
});

mainButton.on('click', function () {
  getNearestZips(getTestingLocation);
  getNearestZips(getFreeMeals);
});

testingButton.on('click', function () {
  getNearestZips(getTestingLocation);
});

mealButton.on('click', function () {
  getNearestZips(getFreeMeals);
});

//Function to get the nearest zip code
function getNearestZips(getWhat) {
  // Empty the container of previously displayed cards
  container.empty();

  //init the possible array
  const possibleMatchArray = [];

  // Get value of typed in zip, store in a variable.
  enteredZip = parseInt($('#user_input').val());

  var queryURL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${enteredZip}&minimumradius=0&maximumradius=10&key=BQQCGC5WO7EUS1H6J4K1`;

  // Create an AJAX call to retrieve the zip code near to user's location
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    for (let i = 0; i < 50; i++) {
      possibleMatchArray.push(response.DataList[i].Code);
    }

    //call the function according to user's searching, pass down the possibale match array
    getWhat(possibleMatchArray);
  });
}

//Function to get and render testing location
function getTestingLocation(possibleMatchArray) {
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
              class: 'card testing',
            }).append(
              $('<div>', {
                class: 'card-selection',
              })
                .append($('<i class="fas fa-user-md"></i>'))
                .append(
                  $('<h2>', {
                    class: '#',
                    text: `${response[i].alternate_name}`,
                  }),
                  $('<p>', {
                    text: `Address: ${response[i].physical_address[0].address_1}`,
                  }),
                  $('<p>', {
                    text: `Zip Code: ${response[i].physical_address[0].postal_code}`,
                  }),
                  $('<p>', {
                    class: 'card-text',
                    html: `Hours: `,
                    // Need to address this, sometimes hours are not provided.
                    html: `Hours: ${
                      response[i].regular_schedule[0]
                        ? response[i].regular_schedule[0].opens_at +
                          '-' +
                          response[i].regular_schedule[0].closes_at
                        : 'No hours avaliable'
                    }`,
                  }),
                  $('<a>', {
                    class: 'card-text',
                    href: `tel: ${
                      response[i].phones[0] && response[i].phones[0].number
                    }`,
                    html: `Phone Number: ${
                      response[i].phones[0]
                        ? response[i].phones[0].number
                        : 'No phone number found'
                    }`,
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
function getFreeMeals(possibleMatchArray) {
  // API data
  // link: https://data.cityofnewyork.us/resource/sp4a-vevi.json
  var mealURL = 'https://data.cityofnewyork.us/resource/sp4a-vevi.json';

  // Make ajax request
  $.ajax({
    url: mealURL,
    type: 'GET',
    data: {
      $limit: 5000,
      $$app_token: 'GJvggkWxbnhHZBd5UOE1oofWH',
    },
  }).then(function (data) {
    // get an array of the nearest location

    // Loop through the array for ZIP code
    for (let i = 0; i < data.length; i++) {
      if (possibleMatchArray.includes(data[i].zip)) {
        // creating card =============================
        // main card div
        var d1 = $('<div>');
        d1.attr('class', 'cell');

        var d1a = $('<div>').addClass('card meal');

        // card div with the data
        var d2 = $('<div>');
        d2.attr('class', 'card-selection').append(
          $('<i class="fas fa-utensils"></i>')
        );

        // different types of data
        var h2 = $('<h2>');
        h2.attr('class', '#');

        var p1 = $('<p>');
        p1.attr('class', 'card-text');

        var p2 = $('<p>');
        p2.attr('class', 'card-text');

        var p3 = $('<p>');
        p3.attr('class', 'card-text');

        var p4 = $('<p>');
        p4.attr('class', 'card-text');

        var p5 = $('<p>');
        p5.attr('class', 'card-text');

        var p6 = $('<p>');
        p6.attr('class', 'card-text');

        d1.append(d1a);
        d1a.append(d2);
        d1a.append(h2);
        d1a.append(p1);
        d1a.append(p2);
        d1a.append(p3);
        d1a.append(p4);
        d1a.append(p5);
        d1a.append(p6);

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

        $('#data_container').append(d1);
        // }
      }
      // }).catch(function (error) {
      //   console.log(error, "Opps, there's an error on your page.");
      // });
    }
  });
}
