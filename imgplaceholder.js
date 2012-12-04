/**
 * imgPlaceholder
 * 
 * creates image placeholder, useful for mockups
 * 
 * @author Predrag Krstic
 * 
 * @param int width, width of image.
 * @param int height, height of image.
 * @param string color, css style for background, default is #ccc.
 * 
 * Top priority have regular maxlength, after that comes dataset attribute, 
 * and at the end value set trough plugin call
 * 
 * Usage:
 * 
 * JavaScript:
 * $('.imgPlaceholder').imgPlaceholder({width:150, height:150, color:'red'});
 * 
 * HTML:
 * <div class="imgPlaceholder"></div>
 * <div class="imgPlaceholder" data-width="200" data-height="200" data-color="green"></div>
 * 
 */
(function ($) {
	$.fn.imgPlaceholder = function (options) {
		
		var defaultOptions = $.extend({
			width: 150,
			height: 150,
			color: '#ccc'
		}, options);
		
		return this.each( function () {
			
			var o = $.extend({}, defaultOptions);
			var self = $(this);
			var img;

			o.width = parseInt($(self).attr('width') || $(self).data('width') || o.width);
			o.height = parseInt($(self).attr('height') || $(self).data('height') || o.height);
			o.color = $(self).data('color') || o.color;

			if (self.prop('tagName') == 'IMG') {
				img = self;
			}
			else {
				img = $('<img>').appendTo(self);
			}
			
			img.width(o.width);
			img.height(o.height);
			img.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
			img.css('background', o.color);
		});	
	}
})(jQuery);
