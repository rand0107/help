// let link = btn.getElementByTagName

// use javascript to reach out for the data stored in data-storing format (JSON, HML or HTML partial)

/*
// syntax
let prms = fetch(url-of-the-data-location)
*/




// let prms = fetch(url);

// prms
//   .then(function (response) {
//     // make sure the data is a available:
//     if (response.statusText === "OK") {
//       return response.text();
//     }

//     // handle the error
//     throw new Error(response.statusText);
//   })
//   .then(function (data) {
//     // create your html here using the data
//     // console.log(data);
//     dc.innerHTML = data;
//   })
//   .catch(function (err) {
//     // console.log(err);
//     er.innerHTML = err;
//   });






// access all 3 buttons

// create event-handler that will run when a button is clicked

// use event object to get the reference to the current event-target-element 

// using the dataset property of event-trarget-object extract the current url

// Finally, reassign the variable url with the value extracted from dataset property

// close function





// document.addEventListener("DOMContentLoaded", function() {
//   let dc = document.getElementById("dynamic-content");
//   let er = document.getElementById("error");
//   let url = "/partials/partial-1.html";

//   let button = document.querySelectorAll('button');

//   function pageSelector(e) {
//     e.preventDefault();
//     url = e.target.dataset.id;
//     loadData(url);
//   }

//   function loadData(url) {
//     fetch(url)
//       .then(function(response) {
//         if (response.ok) {
//           return response.text();
//         console.log("Fetching URL:", url);

//         }
//         throw new Error(response.statusText);
//       })
//       .then(function(data) {
//         dc.innerHTML = data;
//       })
//       .catch(function(err) {
//         er.innerHTML = err;
//       });
//   };

//   loadData(url);

//   button[0].addEventListener('click', pageSelector);
//   button[1].addEventListener('click', pageSelector);
// });



document.addEventListener("DOMContentLoaded", function() {
  let dc = document.getElementById("dynamic-content"); // Element to display fetched content
  let er = document.getElementById("error"); // Element to display errors
  let url = "/partials/partial-1.html"; // Default URL to load initially

  let buttons = document.querySelectorAll('button'); // Select all buttons

  // Event handler to handle button clicks
  function pageSelector(e) {
    e.preventDefault();
    url = e.target.dataset.id; // Get the URL from the data-id attribute of the clicked button
    loadData(url); // Load the content from the new URL
  }

  // Function to load data from the given URL
  function loadData(url) {
    fetch(url)
      .then(function(response) {
        if (response.ok) {
          console.log("Fetching URL:", url);
          return response.text(); // Return the response as text
        }
        throw new Error(response.statusText); // Handle HTTP errors
      })
      .then(function(data) {
        dc.innerHTML = data; // Insert the fetched content into the page
      })
      .catch(function(err) {
        er.innerHTML = err.message; // Display the error message in the error element
      });
  }

  // Initial load
  loadData(url);

  // Attach event listeners to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', pageSelector);
  });
});
