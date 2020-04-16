var appregistro=new vue({
	el:'#frm-registrar',
	data:{
		usuario:{
		idusuario:0,
		accion    : 'nuuevo',
		Nombre    : 'Nombre',
		Apellido  : 'Apellido',
		Correo    : 'Correo',
		password  : 'password',
		Direccion : 'Direccion',
		msg       : ''
		}
	},
	methods:{
		guardarregistro(){
			fetch(`Private/Modulos/usuarios/procesos.php=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then(resp=>resp.json()).then(resp=>{this.usuario.msg=resp.msg});
		}
	}

}) 
	
	


