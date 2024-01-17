(function($) {
    "use strict"

    //date picker classic default
    $('.datepicker-default').pickadate();

})(jQuery);

$('#datepicker').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    autoUpdateInput: false,
    locale: {
        format: 'YYYY-MM-DD', // Adjust the date format as needed
    }
});
