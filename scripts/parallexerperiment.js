var scroll = {
	scroller: function(){
		$(window).on("scroll",function(e){
			parallaxScroll();
		});
		
		function parallaxScroll(){
			var scrolled = $(window).scrollTop();
			$("#bg-1").css('top',(500-(scrolled*.25))+'px');
			$("#bg-2").css('top',(530-(scrolled*.35))+'px');
			
		}
	}
}

scroll.scroller();