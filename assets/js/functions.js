/**
 * Created by reimorooparg on 11/10/2017.
 */
$('html,body').animate({scrollTop:0},100);
$(window).on("load", function() {
    $('html,body').animate({scrollTop: 0}, 100);
    sectionTopPadding = 60;
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
    $(".sub-text").fitText(1, { minFontSize: '16px', maxFontSize: '36px' });
    smoothScroll(300);
    removeLoader(2000);
    $(document).on("scroll", onScroll);
    svgMagic();
});

function removeLoader(pauseTime){

    setTimeout(function(){
        $( "body" ).removeClass( "loading" );
        $( "#loader" ).remove();
    }, pauseTime);

}

function svgMagic(){
    var duration = 0.2;
    var stagger = 0.2;
    var someClassName = '.element name';
    var animationClass = 'class name';
    var controller = new ScrollMagic.Controller({});

    new ScrollMagic.Scene(
        {   triggerElement: "#what-is-smarthash-section",
            triggerHook: 'onEnter',
            duration: 0.7*viewportHeight})
        .addTo(controller)
        //.addIndicators()
        .setTween(TweenMax.to(".header-container", 1, {y:'30%'}, stagger));

    someClassName = '.main-navbar';
    animationClass = 'main-navbar-scrolled';
    new ScrollMagic.Scene({triggerElement: "#what-is-smarthash-section", triggerHook: 'onLeave'})
        .setTween(TweenMax.staggerTo(someClassName, duration, {className: '+=' + animationClass, transformOrigin: 'top left', ease: Power4.easeOut}, stagger))
        //.addIndicators()
        .addTo(controller);

    someClassName = '.list-element';
    animationClass = 'list-element-visible';
    new ScrollMagic.Scene({triggerElement: "#what-is-smarthash-section", triggerHook: 'onCenter'})
        .setTween(TweenMax.staggerTo(someClassName, duration, {className: '+=' + animationClass, transformOrigin: 'top left', ease: Power4.easeOut}, stagger))
        //.addIndicators()
        .addTo(controller);

    someClassName = '.how-it-work-element';
    animationClass = 'how-it-work-element-visible';
    new ScrollMagic.Scene({triggerElement: "#how-it-works-container", triggerHook: 'onCenter'})
        .setTween(TweenMax.staggerTo(someClassName, duration, {className: '+=' + animationClass, transformOrigin: 'top left', ease: Power4.easeOut}, stagger))
        //.addIndicators()
        .addTo(controller);
}

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - sectionTopPadding <= scrollPos && refElement.position().top + refElement.height() + sectionTopPadding > scrollPos) {
            $('.navbar-nav ul li a').removeClass("main-navbar-selected");
            currLink.addClass("main-navbar-selected");
        }
        else{
            currLink.removeClass("main-navbar-selected");
        }
    });
}