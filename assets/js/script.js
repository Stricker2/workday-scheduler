const saveButtonEl = document.getElementById('saveBtn')
var inputBoxEl = document.getElementById('textarea')
var inputBoxHourEl = document.getElementById('hour')
var currentDate = document.getElementById('currentDay')
var todayDate = moment().format("dddd MMMM Do, YYYY")
console.log(todayDate);
var timeHour = moment().format("h")
console.log(timeHour);
var timeHourAndMinute = moment().format("h:mm")
console.log(timeHourAndMinute);

// To-do:
// Grab the current date through the moment.js
var getDate = function() {
    currentDate.innerText = todayDate
};

getDate();

// grab the live time and color-code the timeblocks based on live time
// var timeblockStatus = function() {
//     if(inputBoxHourEl) {
//         JSON.parse(timeHour) < inputBoxHourEl
//     }
// };


// Make the HTML timeblocks 'inputs'
// Make the save button functional to save entries to the localstorage
// ensure saved events persist after saving