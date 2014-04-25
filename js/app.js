$(document).ready(function(){

	// set up parallaxes
	$('.parallax').each(function () {
		var zIndex = $(this).css('z-index') !== 'auto' ? $(this).css('z-index') : 1;
		$(this).parallax({speed : (0.5 * (zIndex * zIndex))});
	});

	// set up .appears
	$('.appear').onScreen({
	  tolerance: 100,
	  toggleClass: 'onScreen'
	});

	// set up background videos
	setupVideos();

	// set up .backgrounded
	// $('.backgrounded > *').each(function () {
	// 	var innerStuff = $(this).html();
	// 	$(this).html($('<span class="backgrounded">'+innerStuff+'</span>'));
	// 	$(this).parent().removeClass('backgrounded');
	// })
});