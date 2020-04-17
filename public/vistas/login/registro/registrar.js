var app = new Vue({
	el:'#frm-registrar',
	data:{
		usuario:{
		idusuario :  0,
		accion    : 'nuevo',
		nombre    : 'Nombre',
		apellido  : 'Apellido',
		correo    : 'Correo',
		password  : 'password',
		direccion : 'Direccion',
		msg       : ''
		}
	},
	methods:{
		guardarregistro(){
			fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
                this.usuario.msg = resp.msg;
            });
		}
	}
  })

