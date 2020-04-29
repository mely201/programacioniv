
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
                if(resp.msg=='usuario registrado correctamente'){
                    location.href="cooperativa.html"
                }else{
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
            }
              
            });
         
           
        },
        IniciarSesion:function(){
            location.href="login.html";
        }
       
        
    }
});

   
     
