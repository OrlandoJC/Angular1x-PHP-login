<?php include_once '../../DAOConecction/Conecction.php';

$objConnection = new Conecction();
$con = $objConnection->coneccion();


$json = file_get_contents("php://input");
$infoUsuarios = json_decode($json);

$sql ="SELECT * FROM login WHERE usuario = '$infoUsuarios->usuario' and pass='$infoUsuarios->pass'" ;
$datos = $con->query($sql);



if ($datos == true && $con->affected_rows){
    echo 'Success';
} else {
    echo 'mal';
}