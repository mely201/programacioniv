var app =new vue({
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
		guardarusuario:function(){
		console.log("clicksubmit");
		
			fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
				this.usuario.msg = resp.msg;
				this.usuario.idusuario=0;
				this.usuario.nombre='';
				this.usuario.apellido='';
				this.usuario.correo='';
				this.usuario.password='';
				this.usuairo.direccion='';
            });
		}
	}


});