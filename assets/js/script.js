var hourNumber = document.querySelectorAll('.timeblock')
var currentDate = document.getElementById('currentDay')
var todayDate = moment().format("dddd MMMM Do, YYYY")
var timeHour = parseInt(moment().hour())

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

    $('#saveBtn-0').on('click', function() {
        localStorage.setItem('9AM task', JSON.stringify(textInput9AM.val()))
    });
    
});

$('#textarea-1').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput10AM = $('#textarea-1')
    .val(text);
    console.log(textInput10AM);

    $(this).replaceWith(textInput10AM);

    textInput10AM.trigger('focus');

    $(textInput10AM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-1').on('click', function() {
        localStorage.setItem('10AM task', JSON.stringify(textInput10AM.val()))
    });
    
});

$('#textarea-2').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput11AM = $('#textarea-2')
    .val(text);
    console.log(textInput11AM);

    $(this).replaceWith(textInput11AM);

    textInput11AM.trigger('focus');

    $(textInput11AM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-2').on('click', function() {
        localStorage.setItem('11AM task', JSON.stringify(textInput11AM.val()))
    });
    
});

$('#textarea-3').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput12PM = $('#textarea-3')
    .val(text);
    console.log(textInput12PM);

    $(this).replaceWith(textInput12PM);

    textInput12PM.trigger('focus');

    $(textInput12PM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-3').on('click', function() {
        localStorage.setItem('12PM task', JSON.stringify(textInput12PM.val()))
    });
    
});

$('#textarea-4').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput1PM = $('#textarea-4')
    .val(text);
    console.log(textInput1PM);

    $(this).replaceWith(textInput1PM);

    textInput1PM.trigger('focus');

    $(textInput1PM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-4').on('click', function() {
        localStorage.setItem('1PM task', JSON.stringify(textInput1PM.val()))
    });
    
});

$('#textarea-5').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput2PM = $('#textarea-5')
    .val(text);
    console.log(textInput2PM);

    $(this).replaceWith(textInput2PM);

    textInput2PM.trigger('focus');

    $(textInput2PM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-5').on('click', function() {
        localStorage.setItem('2PM task', JSON.stringify(textInput2PM.val()))
    });
    
});

$('#textarea-6').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput3PM = $('#textarea-6')
    .val(text);
    console.log(textInput3PM);

    $(this).replaceWith(textInput3PM);

    textInput3PM.trigger('focus');

    $(textInput3PM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-6').on('click', function() {
        localStorage.setItem('3PM task', JSON.stringify(textInput3PM.val()))
    });
    
});

$('#textarea-7').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput4PM = $('#textarea-7')
    .val(text);
    console.log(textInput4PM);

    $(this).replaceWith(textInput4PM);

    textInput4PM.trigger('focus');

    $(textInput4PM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-7').on('click', function() {
        localStorage.setItem('4PM task', JSON.stringify(textInput4PM.val()))
    });
    
});

$('#textarea-8').on('click', function() {
    var text = $(this).val();
    console.log(text);
    
    var textInput5PM = $('#textarea-8')
    .val(text);
    console.log(textInput5PM);

    $(this).replaceWith(textInput5PM);

    textInput5PM.trigger('focus');

    $(textInput5PM).on('blur', function() {
        
        var newText = $(this)
            .val();
        console.log(newText);
    });

    $('#saveBtn-8').on('click', function() {
        localStorage.setItem('5PM task', JSON.stringify(textInput5PM.val()))
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