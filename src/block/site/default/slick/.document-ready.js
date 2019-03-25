'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');		
	var shopping = $('[data-slider-slick="slick-shopping"]');		
	var progress = $('[data-slider-slick="slick-progress"]');		
	var gallery = $('[data-slider-slick="slick-gallery"]');		
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/tpl';  
	var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';	
		
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		//autoplay: true,
  		//autoplaySpeed: 4000,
		//prevArrow: prevArrow,
		//nextArrow: nextArrow,
		fade: true
	});
	shopping.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		centerMode: true,
		variableWidth: true,
		centerPadding: false,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					variableWidth: false,
				}
		    },
		    {
				breakpoint: 564,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
		    }
		]
	});
	progress.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		centerMode: true,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
		    },
		    {
				breakpoint: 564,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	/*gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});*/
	$('.slick-cloned .content-block__preview').removeAttr('data-fancybox');
	$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
	$('.slick-cloned .card-item__fancy').removeAttr('data-fancybox');
}); 