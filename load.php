
<!DOCTYPE html>
<html>

<?php
echo "Access OK";
echo "<br>"; //newline

if (isset($_GET['jarak'])){
	$data = $_GET['jarak'];
	echo "Jarak :  ";
	echo $data;
	echo "<br>";
}
if (isset($_GET['temperature'])){
	$data = $_GET['temperature'];
	echo "Temperature :  ";
	echo "<br>";
	echo $data;
}
if (isset($_GET['kelembapan'])){
	$data = $_GET['kelembapan'];
	echo "Kelembapan :  ";
	echo "<br>";
	echo $data;
}
else{
	echo "Data not received";
}


//Connect ke database
include ("koneksi.php");
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO sensor (jarak,temperature,kelembapan,tanggal)
VALUES ('".$_GET["jarak"]."','".$_GET["temperature"]."','".$_GET["kelembapan"]."',now())";

if ($conn->query($sql) === TRUE) {
echo "<script type= 'text/javascript'>alert('New record created successfully');</script>";
} else {
echo "<script type= 'text/javascript'>alert('Error: " . $sql . "<br>" . $conn->error."');</script>";
}

$conn->close();

?>

?>

</html>
