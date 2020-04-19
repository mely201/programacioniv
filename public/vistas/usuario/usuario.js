
var appusuario = new Vue({
    el:'#frm-usuarios',
    data:{
        usuario:{
            idUsuario 		 : 0,
            accion   		 : 'nuevo',
            nombreu   		 : '',
        nombrecooperativa   : '',
            direccion 		: '',
			correo  		: '',
			passwords		:'',
            msg      		 : ''
        }
    },
    methods:{
        guardarusuario:function(){
            fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
                this.usuairo.msg = resp.msg;
                this.usuairo.idUsuario = 0;
         		 this.usuairo.nombreu  = '';
                this.usuairo.nombrecooperativa = '';
                this.usuairo.direccion = '';
				this.usuairo.correo = '';
				this.usuairo.passwords='';
                this.alumno.accion = 'nuevo';
              
            });
        }
    }
});