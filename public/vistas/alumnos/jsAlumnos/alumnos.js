export function modulo(){

var $ = el => document.querySelector(el),
    frmAlumnos = $("#frmAlumnos");
    frmAlumnos.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    
    let alumno = {
        accion    : frmAlumnos.dataset.accion,
        idalumno  : frmAlumnos.dataset.idalumno,
        codigo    : $("#txtCodigoAlumno").value,
        nombre    : $("#txtNombreAlumno").value,
        direccion : $("#txtDireccionAlumno").value,
        telefono  : $("#txtTelefonoAlumno").value
    };
    
    fetch(`/private/Modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.parse(alumno)}`).then( resp=>resp.json()).then(resp=>{
        console.log(alumno);
      $("#respuestaAlumno").innerHTML = `<div class="alert alert-success" role="alert">${resp.msg}</div> `;
    });

    
});
frmAlumnos.addEventListener("reset",e=>{
    $("#frm-alumnos").dataset.accion='nuevo';
    $("#frm-alumnos").dataset.idalumno='nuevo';


});
}