$(document).ready(function(){


	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$(this).toggleClass("active");
		$('.nav').toggle();
	});

	$('.nav a').on('click', function(){
		$(".sandwich").revoveClass("active");
		$('.toggle_mnu').revoveClass("active");
		$('.nav').hide();
	})





	$('#carouselh').jsCarousel({ onthumbnailclick: function(src) { alert(src); }, autoscroll: false, circular: true, masked: false, itemstodisplay: 5, orientation: 'h' });
	
	
	
	$('.order_price').click(function() {
	   if($('#d_colorb').is(':checked')) { alert("it's checked"); }
	});

	$('input[type=radio][name=d_color]').change(function() {
	    if (this.value == 'Черный') {
	        $(this).closest('.reveal-modal').find('.storage').removeClass('available').removeClass('notavailable').addClass('available').html('в наличии на складе');
	    }
	    else if (this.value == 'Серый') {
	        $(this).closest('.reveal-modal').find('.storage').removeClass('available').removeClass('notavailable').addClass('available').html('в наличии на складе');
	    }
	});
	
	$('input[type=radio][name=d_pm]').change(function() {
	    if (this.value == 'PM3') {
	        $(this).closest('.reveal-modal').find('.price_value').html('89 000');
	    }
	    else if (this.value == 'PM4') {
	        $(this).closest('.reveal-modal').find('.price_value').html('89 000');
	    }
	    else if (this.value == 'PM5') {
	        $(this).closest('.reveal-modal').find('.price_value').html('89 000');
	    }
	});


});








$(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
        $('menu').fadeIn();
    }
    else {
        $('menu').fadeOut();
    }
});
