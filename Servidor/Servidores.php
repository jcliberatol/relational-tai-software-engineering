<?php

ini_set('display_errors', 'Off');
ini_set('display_startup_errors', 'Off');
error_reporting(0);

$username = $_POST['username'];
$password = $_POST['password'];
$sesion_login = true;

function Conectarse()
{
   if (!($link=mysql_connect("localhost", "root", "")))
   {
      echo "Error conectando a la base de datos.";
      exit();
   }
   if (!mysql_select_db("tutor_bd",$link))
   {
      echo "Error seleccionando la base de datos.";
      exit();
   }
   return $link;
}

$con = Conectarse();
$query = "SELECT * FROM usuarios WHERE USUARIOS ='".$username."' AND pasword = '".$password."'";
$q = mysql_query($query,$con);
try{

if(mysql_result($q,0))
{  $result = mysql_result($q, 0);
    

    json_encode($username);
    header ("Location: ../PrincipalInicio/html/PaginaPrincipal.html");

$variablephp = $username;

}else{
 echo "Usuario o Contraseña incorrectos.";
}
     
}catch(Exception $error){}
mysql_close($con);
?>