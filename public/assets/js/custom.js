
/*
$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});
*/

    //------- Header Scroll Class  js --------//  
     $('#scroll').hide();
     new WOW().init();
	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
			//debugger
            $('.main-header').addClass('fixed-header animated slideInDown shrink');
             // $('#to-the-top').show();
			  $('#scroll').show(); 
        } else {
        
            $('.main-header').removeClass('fixed-header animated slideInDown shrink');
          //    $('#to-the-top').hide();
			$('#scroll').hide(); 
        }
    });
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 