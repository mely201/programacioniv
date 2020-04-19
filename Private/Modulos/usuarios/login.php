<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
if (empty($_POST['correouser']) || empty($_POST['passwordlogin'])) {
$error = "Username or Password is invalid";
}
else{
// Define $username and $password
$username = $_POST['correouser'];
$password = $_POST['passwordlogin'];
// mysqli_connect() function opens a new connection to the MySQL server.
$conn = mysqli_connect("localhost", "root", "", "comercializacion");
// SQL query to fetch information of registerd users and finds user match.
$query = "SELECT correo, passwords from usuario where correo=? AND passwords=? LIMIT 1";
// To protect MySQL injection for Security purpose
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$stmt->bind_result($username, $password);
$stmt->store_result();
if($stmt->fetch()) //fetching the contents of the row {
$_SESSION['login_user'] = $username; // Initializing Session
header("location: ../../../../../index.php"); // Redirecting To Profile Page
}
mysqli_close($conn); // Closing Connection
}
?>