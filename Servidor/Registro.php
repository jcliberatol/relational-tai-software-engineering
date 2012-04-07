<?php
ini_set('display_errors', 'Off');
ini_set('display_startup_errors', 'Off');
error_reporting(0);

$username = $_GET['usernameRegistro'];
$password = $_GET['passwordRegistro'];
$password1 = $_GET['passwordRegistro2'];
$sesion_login = true;

function Conectarse()
{
   if (!($link=mysql_connect("localhost", "root", "")))
   {
      echo "ERROR NO EXISTE USUARIO DE BD.";
      exit();
   }
   if (!mysql_select_db("tutor_bd",$link))
   {
      echo "ERROR NO EXISTE BASE DE DATOS.";
      exit();
   }
   return $link;
}

$con = Conectarse();
$sql = "INSERT INTO usuarios (usuarios, pasword, rol) VALUES ('".$username."','".$password."','Estudiante')";
$sqlquery = "SELECT * FROM usuarios WHERE usuarios = '".$username."'";
$q = mysql_query($sqlquery,$con);

try{
if(mysql_result($q,0))
{$result = mysql_result($q, 0);
    echo "Ya existe un nombre de usuario por favor elija otro";
}
else{

  if($password==$password1)
    {
    echo "Registro Exitoso";
    $result = mysql_query($sql, $con);
    }

else
{
echo "Los campos de contraseña no coinciden";
}
    
}
}catch(Exception $error){}
mysql_close($con);

?>