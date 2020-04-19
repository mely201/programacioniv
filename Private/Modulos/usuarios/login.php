<?php
		session_start(); // Starting Session
		$error = ''; // Variable To Store Error Message
		if (isset($_POST['submit'])) {
			if (empty($_POST['correouser']) || empty($_POST['passwordlogin'])) {
				$error = "Username or Password is invalid";
			}else{
					$username = $_POST['correouser'];
					$password = $_POST['passwordlogin'];

					$conn = mysqli_connect("localhost", "root", "", "comercializacion");

					$query = "SELECT correo, passwords from usuario where correo=? AND passwords=? LIMIT 1";

					$stmt = $conn->prepare($query);
					$stmt->bind_param("ss", $username, $password);
					$stmt->execute();
					$stmt->bind_result($username, $password);
					$stmt->store_result();
					if($stmt->fetch()){ 
						$_SESSION['login_user'] = $username;
						header("location: ../../../../../index.php"); 
					}
					mysqli_close($conn); 
				}
		}
?>