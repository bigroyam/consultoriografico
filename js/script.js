$(function(){
	$('#btnSig').on('click', avanzar);
	$('#btnAnt').on('click', retroceder);

	setInterval(avanzar,6000);

	function avanzar(){
		var size = $('#slider').find('.elementos').size();
		$('#slider').find('.elementos').each(function(index,value){
			if($(value).hasClass('visible')) {
				$(value).fadeOut();
				$(value).removeClass('visible');

				if(index+1<size) {
					$($('#slider').find('.elementos').get(index+1)).fadeIn()
					$($('#slider').find('.elementos').get(index+1)).addClass('visible');
					return false;
				}
				else {
					$($('#slider').find('.elementos').get(0)).fadeIn()
					$($('#slider').find('.elementos').get(0)).addClass('visible');
					return false;
				}
			}
		});
	};

	function retroceder(){
		var size = $('#slider').find('.elementos').size();
		$('#slider').find('.elementos').each(function(index,value){
			if($(value).hasClass('visible')) {
				$(value).fadeOut();
				$(value).removeClass('visible');

				if(index==0) {
					$($('#slider').find('.elementos').get(size-1)).fadeIn()
					$($('#slider').find('.elementos').get(size-1)).addClass('visible');
					return false;
				}
				else {
					$($('#slider').find('.elementos').get(index-1)).fadeIn()
					$($('#slider').find('.elementos').get(index-1)).addClass('visible');
					return false;
				}
			}
		});
	};


}); 