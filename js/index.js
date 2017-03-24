$(document).ready(function(){
    $(this).scrollTop(0);
    
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
         // Prevent default anchor click behavior
            event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }  // End if
    });
    
});

$(window).scroll(function(event) {
    if ($(window).scrollTop()>=150) {
        event.preventDefault();
        $('body').addClass('flowers-leaves');
        $('nav').fadeIn(2000);
        //$('nav').show();
        
    } 
    else if ($(window).scrollTop()== 0) {
        $('body').removeClass('flowers-leaves');
        //$('nav').fadeOut(2000);
        $('nav').hide();
        //$('nav').css('display':'none');
       
    } 
});

/*
$(window).load(function() {
    $("body").removeClass("preload");
});
*/

paceOptions = {
    startOnPageLoad : false,
// Disable the 'elements' source
    elements: false,

 // Only show the progress on regular and ajax-y page navigation,
 // not every request
    restartOnRequestAfter: false
}

/*
if ($(window).width() < 480) {
    $(window).resize(function() {
        $('header').css('height',$(window).height());
    });
    $('header').css('height',$(window).height());
}
*/



