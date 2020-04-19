<?php
include('../../../Private/Modulos/usuarios/login.php'); // Includes Login Script
if(isset($_SESSION['login_user'])){
header("location: ../../../../../index.php"); // Redirecting To Profile Page
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>LOGIN</title>

</head>
<body>
	<form action="" id="frm-login"  method="post">
		
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
				<link rel="stylesheet" href="public/vistas/login/login.css">
	
		<div class="card bg-dark" style="width: 30rem; height: 18rem;">
			<div class="card-header">
				<h4 class="text-white">LOGIN </h4>
			</div>
			<div class="card-body">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
					  <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope-square"></i></span>
					</div>
					<input type="email" class="form-control" id="correouser" placeholder="@ejemplo.com" aria-label="email" aria-describedby="basic-addon1">
				</div>
	
				<div class="input-group mb-3">
					<div class="input-group-prepend">
					  <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
					</div>
					<input type="password" class="form-control" id="passwordlogin" placeholder="*****" aria-label="password" aria-describedby="basic-addon1">
				</div>
						<div class=" footer">
					<button class="btn btn-outline-primary">Iniciar Sesion</button>
					<?php echo $error; ?>
					<a class="text-white flex pt-3" href="#">Ha olvidado su contraseña?</a>
					</div>
			</div>		
		  </div>
		 
			</form>
	
	
	
	
	
</body>
</html>

	