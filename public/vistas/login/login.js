var registrarusuarios =new vue({
	el:'#signupbox',
	data:{
		usuario:{
			idusuario	:	0,
			accion		: 	'nuevo',
			nombre		:   'Nombre',
			apellido	:	'Apellido',
			correo		:	'Correo',
			password	:	'password',
			direccion	:	'Direccion',
			msg			:	''

		}
	},
	method:{
		registrarusuario(){
			fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
                this.usuario.msg = resp.msg;
            });
		}
	}


});