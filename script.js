// work day scheduler project
// getting each variable

var timeblock = $("#timeblock");
var today = moment();
console.log(today.format("dddd MMM Mo, YYYY"));
var currentTime = today.format("MMM, Do, YYYY");
var currentHour = today.format("H");


// still not displaying time in header
// $('#current-clock').innerHtml = currentTime;
$("#current-clock").text(today.format("dddd MMM Mo, YYYY"));

// function not yet working
// var colorSwitch = function(event) {
//     for (let i = 0; i < timeblock.length; i++) {
//         // if i = the same hour of the day, red
//         if (i = currentHour) {
//             event.timeblock.addClass("present")
//             // }
//         } else if (i < currentHour){
//             event.timeblock.addClass("past")
//         } else {
//             event.timeblock.addClass("future")
//         }
//     }
// }

// function to edit/save text

function editBlock() {
    var textContent = document.getElementbyClass("timeblock").createElement("p");
    textContent.text("test");
    textContent.appendChild(p);
}

// function for color changing background

var colorSwitch = function (event){

    for (let i = 0; i < timeblock.length; i++) {
        if (timeblock == currentHour) {
        timeblock.setAttribute("class", "present");  //present
         }
        if (timeblock < currentHour) {
        timeblock.setAttribute("class", "past");   //past
       }
        if (timeblock > currentHour) {
        timeblock.setAttribute("class", "future");  //future
          };
      }
    }

// on.click to let user edit an event


// Save changes of events to local storage
// Save button on.click
// once user makes edit, save button saves to local storage
    // On click, be able to edit and save changes
    // Save button
