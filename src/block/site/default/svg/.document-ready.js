$(document).ready(function(){
	$('.svg__floor').on("click", function(e){
		$('.active').removeClass('active');
		$(this).addClass('active');
		//alert('evento');
	});
});