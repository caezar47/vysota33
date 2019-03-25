$(document.body).on('click.fecss.scrollto', '.scrollto', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.scrollto');
	
	var btn = $(this);
	
	var el = $(btn.attr('href')).eq(0);
	var diff = parseInt(btn.attr('data-scrollto-diff')) || 0;
	var speed = parseInt(btn.attr('data-scrollto-speed')) || 777;
	
	$('html, body').animate({
		scrollTop: (el.offset().top + diff)
	}, speed);
	$(".navbar__nav .navbar__nav-item").removeClass("is--active");
	btn.parent().addClass("is--active");
});	
$(document.body).on('click', '.navbar__block .scrollto', {}, function(event){	
	if(screenJS.isXS() || screenJS.isSM() || screenJS.isMD()) {
		event.preventDefault();		
		$('.navbar__hamburger-card').trigger('click');
	}	
});