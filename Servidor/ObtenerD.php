<?php
ini_set('display_errors', 'Off');
ini_set('display_startup_errors', 'Off');
error_reporting(0);
$sesion_login = true;

$q=$_GET["q"];
$password=1;
$password1=2;

$con = mysql_connect('localhost', 'root', '');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("tutor_bd", $con);

$sqlquery="SELECT * FROM usuarios WHERE USUARIOS = '".$q."'";
$q1 = mysql_query($sqlquery,$con);

try{
if(mysql_result($q1,0))
{$result = mysql_result($q1, 0);
    echo "Ya existe un nombre de usuario por favor elija otro";
}
else{

	
  if($password==$password1)
    {
    echo "Registro Exitoso";
   // $result = mysql_query($sql, $con);
    }

else
{
echo "Los campos de contraseña no coinciden";
}
    
}
}catch(Exception $error){}
mysql_close($con);
?>