function init(){
var $ = el =>{
    return el.match(/^#/)? document.querySelector(el): document.querySelectorAll(el);
}



document.addEventListener("DOMContentLoaded",event=>{
    let mostrarVista = $("[class*='mostrar']");
    mostrarVista.array.forEach(element => {
        element.addEventListener('click',e=>{

            let modulo=e.srcElement.dataset.modulo;
            form=e.srcElement.dataset.form

            fetch('../../public/vistas/alumnos/alumnos.html').then( resp=>resp.json() ).then(resp=>{
                $(`#vista-${modulo}`).innerHTML = resp;
             
              
                
                let btnCerrar = $(".close");
                btnCerrar.addEventListener("click",event=>{
                    $(`#vista-${form}`).innerHTML = resp;
                });
                //modularizacion de codigo
                import(`../vistas/${modulo}/${form}.js`).then(module=>{
                    module.modulo
                })
            });

        })
      
        
    });
      
       
});
    
}
init();