function ytAutoParams () {
	$('.bg iframe').each(function () {
		if($(this).attr('src').indexOf('youtube') > -1){
			var src = $(this).attr('src'),
				qs = '',
				vId;
			vId = src.indexOf('embed/') > -1 ? src.split('embed/') : src.split('v/');
			qs = src.indexOf('autoplay') === -1 ? qs +'autoplay=1&' : qs +'';
			qs = src.indexOf('loop') === -1 ? qs +'loop=1&' : qs +'';
			qs = src.indexOf('playlist') === -1 ? qs +'playlist='+ vId[1] +'&' : qs +'';
			qs = src.indexOf('controls') === -1 ? qs +'controls=0&' : qs +'';
			qs = src.indexOf('autohide') === -1 ? qs +'autohide=1&' : qs +'';
			qs = src.indexOf('wmode') === -1 ? qs +'wmode=opaque&' : qs +'';
			qs = src.indexOf('?') === -1 ? '?'+ qs : '&'+ qs;
			$(this).attr('src', src + qs);
		}
	});
	$(window).resize(bgVideoResize);
}
function bgVideoResize () {
	var oWidth = $('.bg iframe').attr('width') || 16,
		oHeight = $('.bg iframe').attr('height') || 9,
		pWidth = $('.bg iframe').parent().width(),
		pHeight = $('.bg iframe').parent().height();

	if ( $('.bg iframe').parent().width() / $('.bg iframe').parent().height() >= oWidth / oHeight ){
		$('.bg iframe').css('height', oHeight * $('.bg iframe').width() / oWidth).css('height', pWidth);
	} else {
		$('.bg iframe').css('width', oWidth * $('.bg iframe').height() / oHeight).css('height', pHeight);
	}
}
function setupVideos () {
	ytAutoParams();
	bgVideoResize();
}