
function init(){
    $("[class*='mostrar']").click(function(e){
        let modulo = $(this).data("modulo"),
            form   = $(this).data("form");
            console.log(modulo, form);
            
        
        $(`#vista-${form}`).load(`public/vistas/${modulo}/${form}.html`, function(){
           
            init();
        })
    });
}
init();

