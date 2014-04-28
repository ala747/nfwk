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

	// setup sliders
	$(".slider.image").AnySlider({
		animation: 'fade',
		interval: 5000,
		speed: 600,
	});
	$('.slider.text .container').AnySlider({
		interval: 0,
		speed: 300,
	});
	$('.as-next-arrow').html("<i class='fa fa-fw'></i>");
	$('.as-prev-arrow').html("<i class='fa fa-fw'></i>");

	// open external links in new window
	$('a[rel="external"]').on('click', function() {
		window.open($(this).attr('href'));
		return false;
	});

	// set up .backgrounded
	// $('.backgrounded > *').each(function () {
	// 	var innerStuff = $(this).html();
	// 	$(this).html($('<span class="backgrounded">'+innerStuff+'</span>'));
	// 	$(this).parent().removeClass('backgrounded');
	// })
});