$(document).ready(function() {
    //global variables
    let $textIn = $('#textInput');

    //initial state
    $('input#btnSubmit').prop('disabled', true);
    $('body').append("<div></div>");
    $('body').append("<ul></ul>");
    
    

    //submit button enable/disable:
    $textIn.change(function () {
        if ($textIn.val().length > 0) {
            $('input#btnSubmit').prop('disabled', false);
        } 
        else {
            $('input#btnSubmit').prop('disabled', true);
        }
    })

    //set submitted text to li:
    $('input#btnSubmit').click(function() {
        let $inputValue = $textIn.val();
        $('ul').append('<li>' + $inputValue + '</li>');
        return false;
    })

    //turn li random color when clicked:

    $('ul').on('click', 'li', function() {
        let colorArray = [];
        for (let i = 1; i < 4; i++) {
        let randomColor = Math.floor(Math.random() * 250);
        colorArray.push(randomColor);
        }
        
        let colorOne = colorArray[0];
        let colorTwo = colorArray[1];
        let colorThree = colorArray[2];

        $(this).css('color', 'rgb(' + colorOne + ', ' + colorTwo + ', ' + colorThree +')');
    });

    //remove li when double clicked:
    $('ul').on('dblclick', 'li', function() {
        $(this).remove();
    });


})