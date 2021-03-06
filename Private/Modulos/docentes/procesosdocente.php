<?php 
include('../../Config/Config.php');
$docente = new docente($Conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$docente->$proceso( $_GET['docente'] );
print_r(json_encode($docente->respuesta));

class docente{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($docente){
        $this->datos = json_decode($docente, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['codigo']) ){
            $this->respuesta['msg'] = 'por favor ingrese el codigo del  Docente';
        }
        if( empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombre del  Docente';
        }
        if( empty($this->datos['direccion']) ){
            $this->respuesta['msg'] = 'por favor ingrese la direccion del Docente';
        }
       
        $this->almacenar_docente();
    }
    private function almacenar_docente(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO docentes (codigo,nombre,direccion,telefono,nit) VALUES(
                        "'. $this->datos['codigo'] .'",
                        "'. $this->datos['nombre'] .'",
                        "'. $this->datos['direccion'] .'",
                        "'. $this->datos['telefono'] .'",
                        "'. $this->datos['nit'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                   UPDATE docentes SET
                        codigo     = "'. $this->datos['codigo'] .'",
                        nombre     = "'. $this->datos['nombre'] .'",
                        direccion  = "'. $this->datos['direccion'] .'",
                        telefono   = "'. $this->datos['telefono'] .'",
                         nit       = "'. $this->datos['nit'] .'"
                    WHERE idDocente = "'. $this->datos['idDocente'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }
    public function buscarDocente($valor=''){
        $this->db->consultas('
            select docentes.idDocente, docentes.codigo, docentes.nombre, docentes.direccion, docentes.telefono, docentes.nit
            from docentes
            where docentes.codigo like "%'.$valor.'%" or docentes.nombre like "%'.$valor.'%" or docentes.nit like "%'.$valor.'%"
        ');
        return $this->respuesta = $this->db->obtener_datos();
    }
    public function eliminarDocente($idDoncente=''){
    
            $this->db->consultas( '
                delete docentes
                from docentes
                where docentes.idDocente = "'.$idDoncente.'"
            ');
           
                $this->respuesta['msg'] = 'Registro eliminado correctamente';
      
    }
 
    
}
?>