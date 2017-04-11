function scrollFooter(scrollY, heightFooter)
{
    //console.log(scrollY);
    //console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

   $(window).on('scroll', function() {

		var y = $(window).scrollTop(),
		    topBar = $('nav');
            myShoes = $(".shoes");
            myShoes2 = $(".shoes2")
     
	   if (y > 918) {
        $("nav").css( "display", "block" );
	      topBar.addClass('opacity');
          topBar.addClass("bounceInDown");
        myShoes.delay(800)
        .queue(function (next) { 
            $(this).css('display', 'block');
            $(this).addClass("bounceInDown"); 
            next(); 
        });

        myShoes2.delay(800)
        .queue(function (next) { 
            $(this).css('display', 'block');
            $(this).addClass("bounceInRight"); 
            next(); 
        });

	   }
      else {
         topBar.removeClass('opacity');
          topBar.removeClass("bounceInDown");
         $("nav").css("display", 'none');

         myShoes.removeClass('bounceInDown');
         myShoes.css("display", 'none');

         myShoes2.removeClass('bounceInRight');
         myShoes2.css("display", 'none');
      }
    
	});

$(window).load(function(){
    slide1 = $('#clickslide1');
    slide2 = $('#clickslide2');
    slide3 = $('#clickslide3');
    slide4 = $('#clickslide4');

        var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    slide1 = $('#clickslide1');
    slide2 = $('#clickslide2');
    slide3 = $('#clickslide3');
    slide4 = $('#clickslide4');

$("#goToSlideTwo").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide1").offset().top
    }, 500);
});

$("#clickslide1").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide1").offset().top
    }, 500);
});

$("#clickslide2").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide2").offset().top
    }, 500);
});

$("#clickslide3").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide3").offset().top
    }, 500);
});

$("#clickslide4").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide4").offset().top
    }, 500);
});

    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;


    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument +3000 + 'px' 
    });


    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);


    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }

	//var sections = $("section"),
	//navigation_links = $("ul li a");	

	/*sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('ul a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});*/
});