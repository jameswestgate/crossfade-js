(function($) {

	$.fn.crossfade = function(options) {
	 
		var elements = this;
			settings = {},
			defaults = {
				from: '.fade-from',
				to: '.fade-to',
				transition: 'opacity 0.6s ease',
			};

		$.extend(settings, defaults, options);

		return this.each(function() {

			var self = $(this),
				from = self.find(settings.from),
				to = self.find(settings.to);

			//Change the css to relative / absolute positioning and hide the initial target
			self.css({position: 'relative'});
			from.css({position: 'absolute', left:0, top:0});
			to.css({opacity:0, position: 'absolute', left:0, top:0});	

			self.on('mouseenter', function() {
				from.css({
					opacity: 0,
					transition: settings.transition
				});

				to.css({
					opacity: 1,
					transition: settings.transition
				})
			});

			self.on('mouseleave', function() {
				from.css({
					opacity: 1
				});

				to.css({
					opacity: 0
				})
			});
		})
	};
})(jQuery);