$(document).ready(function () {
    //function init runs when the page is loaded
    function init() {
        //check data to the relevant form element and put in the local storage under same title
        if (localStorage['name']) {
            $('#name').val(localStorage['name']);
        }
        if (localStorage['email']) {
            $('#email').val(localStorage['email']);
        }
        if (localStorage['message']) {
            $('#message').val(localStorage['message']);
        }
    }
    init();

});
//check if any chages happened and pops the change into local storage
$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();

});
