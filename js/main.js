$(document).ready(function(){
	$("#menu_toggle_large").click(function(){
		$("#content").slideToggle("slow");
	});
	$("#menu_toggle_small").click(function(){
		$("#content").slideToggle("slow");
		($("#header_title_small").css("display") == "none" ? $("#header_title_small").show() : $("#header_title_small").hide());
	});
/*
	$(window).resize(function(){
		($("#menu_toggle").css("display") == "none" ? $("#x").show() : $("#x").hide());
		($("#menu_toggle").css("display") == "none" ? $("#xx").show() : $("#xx").hide());
	});

	$("#textToggle").text("\u25bc");
	$("#textToggle").click(function(){
		$(".text").slideToggle("fast");
		($("#textToggle").text() == "\u25bc" ? $("#textToggle").text("\u25ba") : $("#textToggle").text("\u25bc"));
	});
*/
	function justifiedGallery() {
		$('.lightbox').justifiedGallery({
			captionSettings	: { animationDuration: 500, visibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.6 : 0.0), nonVisibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.0 : 0.6) },
			rowHeight       : (isNaN(window.globals.justifiedGalleryRowHeight) ? 200 : window.globals.justifiedGalleryRowHeight),
			lastRow         : (($(document).width() <= 800) ? 'justify' : 'nojustify'),
			margins	        : 3,
			rel             : 'gallery1',
			refreshSensitivity	:	7,
			refreshTime     : 800,
			fixedheight		: true
		}).on('jg.complete', function() {
			$(this).find('a').simpleLightbox({
				captionPosition:'outside'
			});
		});
	}

	justifiedGallery();
	
	$(window).resize(function(){
		justifiedGallery();
	});

	$(".lightbox > a > img").mouseenter(function() {
		$(this).animate({
			height: '-=3px',
			width: '-=3px'
		}, 200).animate({
			height: '+=3px',
			width: '+=3px'
		},100);
	});
});