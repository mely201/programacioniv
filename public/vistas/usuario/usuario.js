
var appusuario = new Vue({
    el:'#frm-usuarios',
    data:{
      
       
        usuario:{
            idUsuario 		 : 0,
            accion   		 : 'nuevo',
            nombreu   		 : '',
            selected         :'',
        nombrecooperativa    : '',
            telefono         :'',
            direccion 		 : '',
			correo  		 : '',
			pass		     :'',
            msg      		 : ''
        }
    },
    methods:{
        guardarusuario:function( event){
          
            fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirRegistro&login=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
                this.usuario.msg = resp.msg;
                this.usuario.idUsuario = 0;
                  this.usuario.nombreu  = '';
                  this.usuario.selected='';
                this.usuario.nombrecooperativa = '';
                this.usuario.telefono='';
                this.usuario.direccion = '';
				this.usuario.correo = '';
				this.usuario.pass='';
                this.usuario.accion = 'nuevo';
              
            });
         
           
        },
        IniciarSesion:function(){
            location.href="login.html";
        }
       
        
    }
});
// $('#cooperativa').hide();

// $(document).ready(function () {
    


// $( '#inlineCheckbox1' ).on( 'click', function() {
//     if( $(this).is(':checked') ){
//         // Hacer algo si el checkbox ha sido seleccionado
//         $('#cooperativa').show();
//     } else {
//         // Hacer algo si el checkbox ha sido deseleccionado
//         $('#cooperativa').hide();
//     }
// });
// });
   
     
