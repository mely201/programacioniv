var applogin = new Vue({
	el:'#frm-login',
	data:{
		name:{
			correo  	: '',
			pass		:''
		},
		usuario:[]
	},
	methods:{
		 inicioSesion:function(event){
			fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirUsuario&login=${JSON.stringify(this.name)}`).then( resp=>resp.json() ).then(resp=>{
			  
              this.name.msg=resp.msg;
            });
		 }
	}


})