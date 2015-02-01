
$(function(){
    $('.show-experiment').on('click', function(evt) {
        evt.preventDefault();
        $('.fallback').fadeOut('slow', function() {
            $('.test').fadeIn('slow');
        });
    });
});
