
<!DOCTYPE html>
<html>

<?php
echo "Access OK";
echo "<br>"; //newline

if (isset($_GET['jarak'])){
	$data = $_GET['jarak'];
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

$sql = "INSERT INTO sensor (jarak, tanggal)
VALUES ('".$_GET["jarak"]."',now())";

if ($conn->query($sql) === TRUE) {
echo "<script type= 'text/javascript'>alert('New record created successfully');</script>";
} else {
echo "<script type= 'text/javascript'>alert('Error: " . $sql . "<br>" . $conn->error."');</script>";
}

$conn->close();

?>

?>

</html>
