const saveButtonEl = document.getElementById('saveBtn')
var inputBoxEl = document.getElementsByClassName('textarea')
var inputBoxHourEl = document.getElementById('hour')
var hourNumber = document.querySelectorAll('.timeblock')
var currentDate = document.getElementById('currentDay')
var todayDate = moment().format("dddd MMMM Do, YYYY")
var timeHour = parseInt(moment().hour())
var timeHourAndMinute = moment().format("h:mm")


// To-do:
// Grab the current date through the moment.js
var getDate = function() {
    currentDate.innerText = todayDate
};

getDate();

// grab the live time and color-code the timeblocks based on live time
var timeblockStatus = function() {
    for(var i=0; i < hourNumber.length; i++) {
        // var inputBoxEl = document.getElementsByClassName('textarea')
        // console.log('inputBoxEl', inputBoxEl)
        var blockHour = parseInt(hourNumber[i].children[0].getAttribute('id').split('-')[0]);
        console.log('blockHour', blockHour);
        console.log('numeric hour',timeHour)
        var timeBox = hourNumber[i].children[1];
        console.log('time box', timeBox)
        // console.log('input box', inputBoxEl[i])
        if(blockHour < timeHour) {
            timeBox.classList.add('past')
            timeBox.classList.remove('present')
            timeBox.classList.remove('future')
        } 
        else if (blockHour === timeHour) {
            timeBox.classList.remove('past')
            timeBox.classList.add('present')
            timeBox.classList.remove('future')
        } 
        else {
            timeBox.classList.remove('past')
            timeBox.classList.remove('present')
            timeBox.classList.add('future')
        }
    }
};

timeblockStatus();
// Make the save button functional to save entries to the localstorage
// ensure saved events persist after saving