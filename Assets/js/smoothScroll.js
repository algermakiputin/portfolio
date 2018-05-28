/**
 * Jquery Smooth Effect
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017 MAAB
 * https://github.com/maab16/smoothScroll
 */
 
;(function($,window,document,undefined){
	'use strict';

	var deafults = {

					animationType 		: 'ease',
					speed 				: 600,
					stepAmount 			: 300,
					type 				: 'wheel'

				}

	function smoothScroll(element,options){

		this.settings = $.extend({},deafults,options);
		this.element  = $(element);
		this.init();

		};

	smoothScroll.prototype = {

		init : function(){
			if ('wheel' == this.settings.type) {
				this.wheel();
			}	
		},
		wheel : function(){
			var self = this;
			//Credits http://stackoverflow.com/questions/26700853/smooth-scrolling-on-mouse-wheel
			$(window).on('wheel DOMMouseScroll', function(e) {
				self.direction;
				self.stepAmount = self.settings.stepAmount;

				  	e.preventDefault();
				  	if(e.type === 'wheel') {
				    	self.direction = e.originalEvent.deltaY < 0 ? '-=' : '+=';
				  	}else {
				    	self.direction = e.originalEvent.detail < 0 ? '-=' : '+=';
				  	}      

				  self.element.stop().animate({
				    scrollTop: self.direction + self.stepAmount
				  },self.settings.speed);
			});
		}
		
	};

	$.fn.smoothScroll = function(options){

		return this.each(function(){

			if (!$.data(this,'smoothScroll')) {

				$.data(this,'smoothScroll',new smoothScroll(this,options));
			}
		});
	};


})(jQuery,window,document);