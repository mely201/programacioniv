
$(document).ready(function () {
   toggle();
 

   $('#verduras').click(()=>{
      
	   $(".container").load("public/vistas/verduras/verduras.html");
   
   });
  
   $('#frutos').click(()=>{
     
	   $(".container").load("public/vistas/frutos/frutos.html");
   
   });
   $('#login').click(()=>{
     
	   $(".container").load("public/vistas/productos/productosuser.html");
   
   });
   $('#newusuario').click(()=>{
     
	   $(".container").load("public/vistas/usuario/nuevousurario.html");
   
   });
  
  
  

   $('ul li a:first').addClass('active');

   $('ul li a').click(function (e) { 
      $('ul li a').removeClass('active');
      $(this).addClass('active');
      
   });
	  

   


});
function toggle(){
	$("#toggles").click(function(){
		console.log("click");
		
        $(".collapse").animate({
			height: 'toggle'
		  });
	  });
}




