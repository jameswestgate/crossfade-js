(function($) {


	$.fn.crossfade = function(options) {
	 
		var elements = this;
			settings = {},
			defaults = {
				from: '.fade-from',
				to: '.fade-to',
				start: 'click', //click, mouseover
				end: 'click',
				startTime: null,
				endTime: null,
				property: 'opacity',
				transition: 'opacity 0.5s ease',
				propertyFrom: 1,
				propertyTo: 0
			};

		$.extend(settings, defaults, options);

		var css = {transition: settings.transition};
		setEvent();

		return this;

		//Bind a single event at a time
		//Change this to use an each
		
		function setEvent(target) {
			
			if (!target) target = elements;

			target.find(settings.from).one(start, function() {
				css[settings.property] = settings.propertyTo;
				$(this).css(css);

				$(this).one(end, function() {
					css[settings.property] = settings.propertyFrom;
					elements.find(settings.to).css(css);

					setEvent();
				})
			});
		}
	};
})