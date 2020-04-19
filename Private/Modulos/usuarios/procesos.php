<?php 
include('../../Config/Config.php');
$usuario = new usuario($Conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$usuario->$proceso( $_GET['usuario'] );
print_r(json_encode($usuario->respuesta));

class usuario{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($usuario){
        $this->datos = json_decode($usuario, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['nombreu']) ){
            $this->respuesta['msg'] = 'por favor ingrese su Nombre de usuairo';
        }
        if( empty($this->datos['nombrecooperativa']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombre de la cooperativa';
        }
        if( empty($this->datos['passwords'])){
            $this->respuesta['msg'] = 'por favor ingrese una password ';
        }
       
        $this->almacenar_usuario();
    }
    private function almacenar_usuario(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO usuario (nombreu,nombrecooperativa,direccion,correo,passwords) VALUES(
                        "'. $this->datos['nombreu'] .'",
                        "'. $this->datos['nombrecooperativa'] .'",
                        "'. $this->datos['direccion'] .'",
                        "'. $this->datos['correo'] .'",
                        "'. $this->datos['passwords'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                        UPDATE usuario SET
                        nombreu  = "'. $this->datos['nombreu'] .'",
                        nombrecooperativa  = "'. $this->datos['nombrecooperativa'] .'",
                        direccion  = "'. $this->datos['direccion'] .'",
                        correo  = "'. $this->datos['correo'] .'",
                        passwords  = "'. $this->datos['passwords'] .'"
                    WHERE idusuario = "'. $this->datos['idusuario'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }

    // public function eliminarDocente($idDoncente=''){
    
    //         $this->db->consultas( '
    //             delete docentes
    //             from docentes
    //             where docentes.idDocente = "'.$idDoncente.'"
    //         ');
           
    //             $this->respuesta['msg'] = 'Registro eliminado correctamente';
      
    // }
 
    
}
?>