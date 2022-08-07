// work day scheduler project
// getting each time block
var timeblock = $("#row");
var today = moment();
console.log(today.format("MMM, Do, YYYY"));
var currentTime = today.format("MMM, Do, YYYY, H, S, M");
var currentHour = today.format("H");


// still not displaying time in header
$('#current-clock').innerHtml = currentTime;

// Moment.js for calendar clock


// Color differences for recent, current, and future events
// function for color class changes

// function not yet working
var colorSwitch = function() {
    for (let i = 9; i < timeblock.length; i++) {
        // if i = the same hour of the day, red
        if (i = currentHour) {
            function changeRed(event) {
                event.timeblock.setAttribute("style", "background-color: #ff0000")
            }
        } else {
            timeblock.setAttribute("style", "background-color: #90ee90")
        }
        // else, than green
        // if past hour, color grey
    }
}

// Save changes of events to local storage
// Save button on.click
// once user makes edit, save button saves to local storage
    // On click, be able to edit and save changes
    // Save button




// style changing function
    // function changePurple(event) {
    //     // event.stopPropagation();
    //     event.currentTarget.setAttribute(
    //       "style",
    //       "background-color: #601A4A"
    //     );
    //   }