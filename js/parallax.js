(function ($) {

	$.fn.parallax = function (options) {

		var windowHeight = $(window).height();

		// Establish default settings
		var settings = $.extend({
			speed: 0.15
		}, options);

		// Iterate over each object in collection
		return this.each(function () {

			// Save a reference to the element
			var $this = $(this);

			var parallaxize = function () {

				var scrollTop = $(window).scrollTop();
				var offset = $this.offset().top;
				var height = $this.outerHeight();

				// Check if above or below viewport
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}

				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

				// Apply the Y Background Position to Set the Parallax Effect
				var pos = $this.css('background-position').split(' ');
				$this.css('background-position', pos[0] + ' ' + yBgPosition + 'px');

			};

			// Set up Doc Ready && Scroll Handler
			$(document).ready(parallaxize).scroll(parallaxize);
		});
	}
}(jQuery));