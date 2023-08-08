$(document).ready(function(){
	$('.header').height($(window).height());

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
		  $("#nav-menu").css("background" , "#001c82");
		}
  
		else{
			$("#nav-menu").css("background" , "transparent");  	
		}
	})
})





