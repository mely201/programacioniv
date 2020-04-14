$(document).ready(function () {
    $(".navbar-toggler").click(function(){
		console.log("click");
		
        $(".collapse").animate({
			height: 'toggle'
		  });
      });
});