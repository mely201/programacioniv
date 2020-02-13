document.addEventListener("DOMContentLoaded", (event) =>{
    const formAlumnos = document.querySelector("#frmAlumno");
    formAlumnos.addEventListener("submit", (e)=>{
        e.preventDefault(); 
        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

            var keycodigo="codigo"+ ""+codigo;
            var keynombre="nombre"+""+nombre;
            var keydireccion="direccion"+""+direccion;
            var keytelefono="telefono"+""+telefono;
        if( 'localStorage' in window){
           var cod=localStorage.setItem(keycodigo,codigo);
           var nomb=localStorage.setItem(keynombre, nombre);
           var dire=localStorage.setItem(keydireccion, direccion);
           var tel=localStorage.setItem(keytelefono, telefono);
           

            
                    

         } else {
            alert("almacenamiento en local NO soportado!!! Actualizate!");
        }
        console.log(codigo,nombre,direccion,telefono)
    });
    document.querySelector("#btnRecuperarAlumnos").addEventListener("click",(e)=>{
        if( 'localStorage' in window ){
           document.querySelector("#txtCodigoAlumno").value= window.localStorage.getItem("codigo");
           document.querySelector("#txtNombreAlumno").value= window.localStorage.getItem("nombre");
           document.querySelector("#txtDireccionAlumno").value= window.localStorage.getItem("direccion");
           document.querySelector("#txtTelefonoAlumno").value= window.localStorage.getItem("telefono");

        }  else {
            alert("almacenamiento en local NO soportado!!! Actualizate!");
        }
    
    });
});

/*document.addEventListener("DOMContentLoaded",init);*/

/*document.addEventListener("DOMContentLoaded",function(event){
    alert("Pagina cargo forma 2");
});*/

/*function init(event){
    alert("Hola la pagina a cargado");
}*/