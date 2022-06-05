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

// edit and save input changes
$('#textarea-0').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput9AM = $('#textarea-0')
    .val(text);
    console.log(textInput9AM);

    $(this).replaceWith(textInput9AM);

    textInput9AM.trigger('focus');

    $(textInput9AM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn').on('click', function() {
        localStorage.setItem('9AM task', JSON.stringify(textInput9AM.val()))
    });
    
});

// load saved inputs from localstorage
var load9AMTasks = function() {
    let task9AM = localStorage.getItem('9AM task');

    if (!task9AM) {
        task9AM = '';
        return false;
    }
    
    $('#textarea-0').val(JSON.parse(task9AM)); 
};
load9AMTasks();

/* To-Do:
- refactor for jquery
- copy/paste then change all 'save input change' for each respective hour
- copy/paste then change all 'load saved inputs' for each respective hour
- write README file
*/