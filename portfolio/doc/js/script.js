$(document).ready(function(){
            // Add smooth scrolling to all links
            $("a").on('click', function(event) {

              // Make sure this.hash has a value before overriding default behavior
              if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                  scrollTop: $(hash).offset().top -55
                }, 800, function(){
             
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              } // End if
            });
          });

//paralax

$(window).scroll(function(){
  var wScroll = $ (this).scrollTop();

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/+'%)'
  });
  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/+'%)'
  });

  //portfolio
  if ( wScroll > $('.portfolio').offset().top - 250 ) {
    $('.portfolio .card').each(function(i) {
      setTimeout(function() {
          $('.portfolio .card').eq(i).addClass('muncul');
      }, 300 * i);
    });

    
  }


});