(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

//jquery v1.8.0 is included in this mess. Copyright 2012 jQuery Foundation and other contributors.
//like something you see, but can't read this unholy mess? drop me a line at (mike)[at](mfischerdesign)[dot](com)


var $windowPane = $(window)

var paneHeight, paneWidth;

var $master = $('#master')

$(document).ready(function(){
	$master.removeClass('wait')
})

$('#switch').on('click', function(){
	$master.toggleClass('view')
})