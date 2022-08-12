// work day scheduler project
// getting each variable

var timeblock = $(".time-block");
var today = moment();
console.log(today.format("dddd MMM Mo, YYYY"));
var currentTime = today.format("MMM, Do, YYYY");
var currentHour = today.format("H");


// still not displaying time in header
// $('#current-clock').innerHtml = currentTime;
$("#current-clock").text(today.format("dddd MMM Mo, YYYY h:mm:ss a"));

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
var tacos = document.querySelectorAll(".saveBtn")
// function to edit/save text
for (let i = 0; i < 9; i++) {
    console.log(tacos[i])
//   "save" + i
       tacos[i].addEventListener("click", function () {
        console.log("click");
        console.log($("textarea")[i].value)
        localStorage.setItem("save" + i, $("textarea")[i].value)
       // localStorage.getItem("save" + i, $("textarea")[i].value)
       })
}




function editBlock() {
    var textContent = document.getElementbyClass("timeblock").createElement("p");
    textContent.text("test");
    textContent.appendChild(p);
}

$(".container-fluid").on("click", "button", function (event) {
    event.preventDefault();
    console.log(event.target.dataset.hour)
})

// function for color changing background

var colorSwitch = function () {

    for (let i = 0; i < timeblock.length; i++) {
        console.log(timeblock[i].id)
        console.log(currentHour);

        if (timeblock[i].id == currentHour) {
            timeblock[i].setAttribute("class", "present");  //present
        }
        if (timeblock[i].id < currentHour) {
            timeblock[i].setAttribute("class", "past");   //past
        }
        if (timeblock[i].id > currentHour) {
            timeblock[i].setAttribute("class", "future");  //future
        };
    }
}

colorSwitch();

console.log(timeblock)


// on.click to let user edit an event


// Save changes of events to local storage
// Save button on.click
// once user makes edit, save button saves to local storage
    // On click, be able to edit and save changes
    // Save button
