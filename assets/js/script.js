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

var load10AMTasks = function() {
    let task10AM = localStorage.getItem('10AM task');

    if (!task10AM) {
        task10AM = '';
        return false;
    }
    
    $('#textarea-1').val(JSON.parse(task10AM)); 
};
load10AMTasks();

var load11AMTasks = function() {
    let task11AM = localStorage.getItem('11AM task');

    if (!task11AM) {
        task11AM = '';
        return false;
    }
    
    $('#textarea-2').val(JSON.parse(task11AM)); 
};
load11AMTasks();

var load12PMTasks = function() {
    let task12PM = localStorage.getItem('12PM task');

    if (!task12PM) {
        task12PM = '';
        return false;
    }
    
    $('#textarea-3').val(JSON.parse(task12PM)); 
};
load12PMTasks();

var load1PMTasks = function() {
    let task1PM = localStorage.getItem('1PM task');

    if (!task1PM) {
        task1PM = '';
        return false;
    }
    
    $('#textarea-4').val(JSON.parse(task1PM)); 
};
load1PMTasks();

var load2PMTasks = function() {
    let task2PM = localStorage.getItem('2PM task');

    if (!task2PM) {
        task2PM = '';
        return false;
    }
    
    $('#textarea-5').val(JSON.parse(task2PM)); 
};
load2PMTasks();

var load3PMTasks = function() {
    let task3PM = localStorage.getItem('3PM task');

    if (!task3PM) {
        task3PM = '';
        return false;
    }
    
    $('#textarea-6').val(JSON.parse(task3PM)); 
};
load3PMTasks();

var load4PMTasks = function() {
    let task4PM = localStorage.getItem('4PM task');

    if (!task4PM) {
        task4PM = '';
        return false;
    }
    
    $('#textarea-7').val(JSON.parse(task4PM)); 
};
load4PMTasks();

var load5PMTasks = function() {
    let task5PM = localStorage.getItem('5PM task');

    if (!task5PM) {
        task5PM = '';
        return false;
    }
    
    $('#textarea-8').val(JSON.parse(task5PM)); 
};
load5PMTasks();

/* To-Do:
- write README file
*/