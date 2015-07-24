(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

//jquery v1.8.0 is included in this mess. Copyright 2012 jQuery Foundation and other contributors.
//like something you see, but can't read this unholy mess? drop me a line at (mike)[at](mfischerdesign)[dot](com)


var $windowPane = $(window)

var paneHeight, paneWidth;

var $master = $('#master');
var $english = $('#english');
var $duutsch = $('#duutsch');
var $slider = $('#slider');

var $output = $('#output')
var $insides = $('.inside')

var e_txt, $d_txt;

$(document).ready(function(){
	paneHeight = $windowPane.height()
	paneWidth = $windowPane.width()

	$english.find('.inside').css('width', paneWidth)

	carouselSwipe(14);
})

function carouselSwipe(imageAmt) {
	function swipeStatus(event, phase, direction, distance) {
		if (phase === 'move' && (direction === 'up' || direction === 'down')) {
			var duration = 0;
			if (direction === 'up') { scrollPanels((paneHeight * currentImg) + distance, duration); }
			else if (direction === 'down') { scrollPanels((paneHeight * currentImg) - distance, duration); }
		}
		else if (phase === 'move' && (direction === 'left' || direction === 'right')) {
			if (direction === 'left') {
				var movement = slidebetween - distance

				$slider.css('left', movement)

				$english.css('width', movement)
				$duutsch.css('margin-left', -paneWidth-movement)
			}
			else if (direction === 'right') {

				var movement = slidebetween + distance

				$slider.css('left', slidebetween + distance)

				$english.css('width', movement)
				$duutsch.css('margin-left', -paneWidth-movement)
			}			
		}
		else if (phase === 'cancel') {
			scrollPanels(paneHeight * currentImg, speed);
		}

		else if (phase === 'end') {
			if (direction === 'down') { previousPanel(); }
			else if (direction === 'up') { nextPanel(); }

			else if (direction === 'left') { slidebetween -= distance; }
			else if (direction === 'right') { slidebetween += distance; }
		}
	}

	function previousPanel() {
		currentImg = Math.max(currentImg - 1, 0);
		scrollPanels(paneHeight * currentImg, speed);
	}

	function nextPanel() {
		currentImg = Math.min(currentImg + 1, imageAmt - 1);
		scrollPanels(paneHeight * currentImg, speed);
	}

	function scrollPanels(distance, duration) {
		$master.css('-webkit-transition-duration', (duration / 1000).toFixed(1) + 's');
		var value = (distance < 0 ? '' : '-') + Math.abs(distance).toString();
		$master.css('-webkit-transform', 'translate3d(0px,' + value + 'px,0px)');
	}

	var currentImg = 0;
	var speed = 500;
	var swipeOptions = {
		triggerOnTouchEnd: true,
		swipeStatus: swipeStatus,
		allowPageScroll: 'vertical',
		threshold: 75
	};
	var slidebetween = paneWidth
	$windowPane.swipe(swipeOptions);
}











