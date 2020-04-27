var appalquiler = new Vue({
    el:'#frm-alquiler',
    data:{
        alquiler:{
            idalquiler  : 0,
            accion      : 'nuevo',
           fechaP       : '',
           fechaD       :'',
            msg         : ''
        }
    },
    methods:{
        guardaralquiler:function(){
            fetch(`Private/Modulos/alquiler/procesos.php?proceso=recibirDatos&alquiler=${JSON.stringify(this.alquiler)}`).then( resp=>resp.json() ).then(resp=>{
                this.alquiler.msg = resp.msg;
                this.alquiler.idalquiler = 0;
                this.alquiler.fechaP = '';
                this.alquiler.fechaD = '';
               
                this.alquiler.accion = 'nuevo';
                
            });
        }
    }
});