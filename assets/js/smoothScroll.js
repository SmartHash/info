/**
 * Created by reimorooparg on 11/10/2017.
 */
function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            //$('html').addClass('overflowXVisible');
            //$('html').removeClass('overflowXHidden');
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);

        }
    });
}