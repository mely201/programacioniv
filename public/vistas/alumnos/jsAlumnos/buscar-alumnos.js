export function modulo(){
    var $=el => document.querySelector(el),
    frmBuscarAlumnos=$("#txtBuscarAlumno");
    frmBuscarAlumnos.addEventListener('keyup',e=>{
        traerdatos(frmBuscarAlumnos.value);

    });

    let eliminarAlumno =(idAlumno)=>{
        fetch(`/Private/Modulos/Alumnos/procesos.php?proceso=eliminarAlumno&alumno=${valor}`).then(resp=>resp.json()).then(resp=>{
            traerdatos('');


    }

    let modificarAlumno=(alumno)=>{
        $("#frm-alumnos").dataset.accion='modificar';
        $("#frm-alumnos").dataset.idAlumno=idAlumno;
        $("#frm-alumno").value=alumno.codigo;
        $("#frm-alumno").value=alumno.nombre;
        $("#frm-alumno").value=alumno.direccion;
        $("#frm-alumno").value=alumno.telefono;
    }
    

     traerdatos=(alumno)=>{
        fetch(`/Private/Modulos/Alumnos/procesos.php?proceso=buscarAlumno&alumno=${valor}`).then(resp=>resp.json()).then(resp=>{
            let fila='';
            resp.forEach(alumno => {
                filas+=`
                <tr data-idalumno='${alumno.idAlumno}'data-alumno='${JSON.stringify(alumno)}'>
                <td>${alumno-codigo}</td>
                <td>${alumno-nombre}</td>
                <td>${alumno-direccion}</td>
                <td>${alumno-telefono}</td>
                <td>
                <input type="button" class="btn btn-outlune-danger text-while" value="del">
                </td>
                </tr?`;
                
            });
            $("#tbl-buscar-alumnos> tbody").innerHTML=filas;
            $("#tbl-buscar-alumnos> tbody").addEventListener('click',e=>{
                if(e.srcElement.parentNode.dataset.alumno==null){
                    eliminarAlumno(e.srcElement.parentNode.parentNode.parentNode.dataset.alumno);
                    
                }else{
                    modificarAlumno();

                }

            });

        });
    };
    traerdatos('');

}