document.addEventListener("DOMContentLoaded",(event)=>
{
    const FormularioDdocente=document.querySelector("#FormularioDdocente");
    FormularioDdocente.addEventListener("submit",(e)=>{
        e.preventDefault();

        const $=document.querySelector;
        let codigo=$("#txtcodigodocente").Value,
            nombre=$("#txtcodigodocente").Value,
            direccion=$("#txtcodigodocente").Value,
            telefono=$("txttelefono").Value;
          
        if ('localStorage' in windows) {
            window.localStorage.setItem("codigo",codigo);
            window.localStorage.setItem("nombre",nombre);
            window.localStorage.setItem("codigo",direccion);
            window.localStorage.setItem("telefono",telefono)
        }else{
            alert("almacenamiento en local no soportado")
        }

    })
    document.querySelector("#btnrecuperar").addEventListener("click",(e)=>{
        if ('localStorafe' in window) {
            document.querySelector("#txtcodigodocente").Value=
            window.localStorage.getItem("codigo");
            document.querySelector("#txtnombredoc").Value=
            window.localStorage.getItem("nombre");
            document.querySelector("#txtdireccion").Value=
            window.localStorage.getItem("direccion");
            document.querySelector("#txttelefono").Value=
            window.localStorage.getItem("telefono");

        }else
    })
});
/*function init(event){
    alert("HOla");
}*/