const saveButtonEl = document.getElementById('saveBtn')
var inputBoxEl = document.getElementsByClassName('textarea')
var inputBoxHourEl = document.getElementById('hour')
var hourNumber = document.querySelectorAll('.timeblock')
var currentDate = document.getElementById('currentDay')
var todayDate = moment().format("dddd MMMM Do, YYYY")
var timeHour = parseInt(moment().hour())
var timeHourAndMinute = moment().format("h:mm")

// Grab the current date through the moment.js
var getDate = function() {
    currentDate.innerText = todayDate
};
getDate();

// grab the live time and color-code the timeblocks based on live time
var timeblockStatus = function() {
    for(var i=0; i < hourNumber.length; i++) {
        
        var blockHour = parseInt(hourNumber[i].children[0].getAttribute('id').split('-')[0]);
        var timeBox = hourNumber[i].children[1];
        
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

var nineAMInput = document.getElementById('textarea-0').value = "My To-do"
var currentNineAMInput = nineAMInput.nodeValue;
$('#textarea-0').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput9AM = $('#textarea-0')
    .val(text);
    console.log(textInput9AM);

    $(this).replaceWith(textInput9AM);

    textInput9AM.trigger('focus');

    $(textInput9AM).on('blur', function() {
        console.log('new text has stayed');
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn').on('click', function() {
        localStorage.setItem('9AM task', JSON.stringify(textInput9AM.val()))
    });
    
});

// Make the save button functional to save entries to the localstorage









// ensure saved events persist after saving