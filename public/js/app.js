
$(document).ready(function () {
   toggle();
 
  $('#inicioSesion').click(function (e) { 
     e.preventDefault();
     $('.modal-body').load('public/vistas/login/registroOlogin.html')
     
  });
 
  $(".container").load("public/vistas/inicio/inicio.html");


   
   $('#home').click(()=>{
     
	   $(".container").load("public/vistas/inicio/inicio.html");
   
   });
   
   $('#verduras').click(()=>{
      
	   $(".container").load("public/vistas/verduras/verduras.html");
   
   });
  
   $('#frutos').click(()=>{
     
	   $(".container").load("public/vistas/frutos/frutos.html");
   
   });
   $('#login').click(()=>{
     
	   $(".container").load("public/vistas/login/login.html");
   
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




