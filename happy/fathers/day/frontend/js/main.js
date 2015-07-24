// Vendor files
var $ = window.jQuery = window.$ = require('./vendor/jquery-1.11.1.min');

map_range = function(value, low1, high1, low2, high2) {
    return (low2 + (high2 - low2) * (value - low1) / (high1 - low1)).toFixed(2);
}

var IScroll = require('./vendor/iscroll-probe'); 

var mxm = {},
	blur,
	wHeight;

$(function($){

	$('body').addClass('loaded')

	var myScroll = new IScroll('#text', { 
		probeType: 3, 
		mouseWheel: true
	});

	$blur = $('#blur')
	wHeight = $(window).height()

	myScroll.on('scroll', opacity);
	myScroll.on('scrollEnd', opacity);

});

var opacity = function(e){
	$blur.css( 'opacity', map_range(-this.y, 0, wHeight / 2, 0, 1) )
}

