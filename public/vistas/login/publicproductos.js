
var appProduct = new Vue({
    el:'#frm-productos',
    data:{
      
       
        producto:{
            idProducto 		 : 0,
            accion   		 : 'nuevo',
           fk_idusuario   	 : 'autoincremental',
      	    nombreprod       : '',
          	 precio 		: '',
			descprod 		: '',
			tipohortaliza	:'',
            msg      		 : ''
        }
    },
    methods:{
        guardarproducto:function( event){
          
            fetch(`private/Modulos/productos/proceso.php?proceso=recibirDatos&producto=${JSON.stringify(this.producto)}`).then( resp=>resp.json() ).then(resp=>{
                this.producto.msg = resp.msg;
                this.producto.idProducto = 0;
         		 this.producto.fk_idusuario  = '';
                this.producto.nombreprod = '';
                this.producto.precio = '';
				this.producto.descprod = '';
                this.producto.descprod='';
                this.producto.tipohortaliza='';
                this.producto.accion = 'nuevo';
              
            });
           
        }
        
    }
});