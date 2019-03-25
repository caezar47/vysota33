$('#prev1').on('click', function() { switchRadio(-1, getCheckedRadio()) });
$('#next2').on('click', function() { switchRadio( 1, getCheckedRadio()) });

function switchRadio(direction, index) {
	var inputArr = $('.project-slider__input').toArray();
	var cardArr = $('.project-slider__card').toArray();
	console.log(inputArr);
	console.log(cardArr);
	inputArr[index].checked = false;
	var targetIndex = index + direction;
	if (targetIndex < 0) {
	  targetIndex = inputArr.length - 1;
	} else if (targetIndex > inputArr.length - 1) {
	  targetIndex = 0;
	};  
	inputArr[targetIndex].checked = true;
};

function getCheckedRadio() {
	var radioIndex;
	$('.project-slider__input').each(function( index ) {
	  	if (this.checked) {radioIndex = index};
	});
	return radioIndex;
}; 