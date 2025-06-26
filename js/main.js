$(document).ready(function(){
	// OK alert('a1');
	$(".menu_toggle").click(function(){
		alert('a2');
		$("#menu").slideToggle("slow");
	});

	$(window).resize(function(){
		//OK alert('a3');
		($("#menuToggle").css("display") == "none" ? $("#menu").show() : $("#menu").hide());
	});

	$("#textToggle").text("\u25bc");
	$("#textToggle").click(function(){
		$(".text").slideToggle("fast");
		($("#textToggle").text() == "\u25bc" ? $("#textToggle").text("\u25ba") : $("#textToggle").text("\u25bc"));
	});

	//var simpleLightbox = new SimpleLightbox('.lightbox a', {captionPosition:'bottom', captionDelay:1000});

	
	$('.lightbox').justifiedGallery({
		captionSettings	: { animationDuration: 500, visibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.6 : 0.0), nonVisibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.0 : 0.6) },
		rowHeight       : (isNaN(window.globals.justifiedGalleryRowHeight) ? 200 : window.globals.justifiedGalleryRowHeight),
		lastRow         : 'nojustify',
		margins	        : 3,
		rel             : 'gallery1',
		refreshSensitivity	:	5,
		refreshTime     : 600
	})/*.on('jg.complete', function() {
		$(this).find('a').simpleLightbox({
			captionPosition:'outside'
		});
	})*/;


/*
	$('.lightbox').justifiedGallery({
		captionSettings	: { animationDuration: 500, visibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.6 : 0.0), nonVisibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.0 : 0.6) },
		rowHeight       : (isNaN(window.globals.justifiedGalleryRowHeight) ? 200 : window.globals.justifiedGalleryRowHeight),
		lastRow         : 'nojustify',
		margins	        : 3,
		rel             : 'gallery1',
		refreshSensitivity	:	5,
		refreshTime     : 600 //!!!!!!!!!!!!,
		//!!!!!!!!!!!! fixedheight		: true
	}).on('jg.complete', function() {
		$(this).find('a').simpleLightbox({
			captionPosition:'outside'
		});
	});
*/
	$(".lightbox > a > img").mouseenter(function() {
		$(this).animate({
			height: '+=3px',
			width: '+=3px'
		}, 200).animate({
			height: '-=3px',
			width: '-=3px'
		},100);
	});
});
