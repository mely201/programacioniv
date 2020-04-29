$(document).ready(function () {
	toggle();

	$('#info').click(()=>{
		$("#contenedorP").load("public/vistasPerfil/infoperfil.html",function(data){
		  $(this).html(data);
	   });
	
	});

	$('#addProductos').click(()=>{
		
		
		$("#contenedorP").load("public/vistasPerfil/addproducto/addproducto.html",function(data){
		  $(this).html(data);
	   });
	
	});
	$('#listdeseos').click(()=>{
		console.log('sdf');
		
		$("#contenedorP").load("public/vistasPerfil/listadeseos/listadeseos.html",function(data){
		  $(this).html(data);
	   });
	
	});
	$('#POferta').click(()=>{
		console.log('sdf');
		
		$("#contenedorP").load("public/vistasPerfil/productosOferta/addoferta.html",function(data){
		  $(this).html(data);
	   });
	
	});
});




function toggle(){
	$("#togglesss").click(function(){
		console.log("click");
		
        $(".collapse").animate({
			height: 'toggle'
		  });
	  });
}