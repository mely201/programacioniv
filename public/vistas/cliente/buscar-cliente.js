var appBuscarCliente = new Vue({
    el:'#frm-buscar-cliente',
    data:{
        miscliente:[],
        valor:''
    },
    methods:{
        buscarCliente:function(){
            fetch(`private/Modulos/cliente/procesos.php?proceso=buscarCliente&cliente=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.miscliente = resp;
            });
        },
        modificarCliente:function(cliente){
            appcliente.cliente = cliente;
            appcliente.cliente.accion = 'modificar';
        },
        eliminarCliente:function(idCLiente){
            if(confirm("Estas seguro de eliminar este registro?")){
                fetch(`private/Modulos/cliente/procesos.php?proceso=eliminarCliente&cliente=${idCliente}`).then(resp=>resp.json()).then(resp=>{
                    this.buscarCliente();
                });
            }

        }
    },
    created:function(){
        this.buscarCliente();
    }
});