<?php
require "Conexion.php";  
function obtener( $tabla, $iden, $id, $campo )  
{  
    global $config, $sql_link;  
    if( $id == "" || emptyempty($id) )  
        return "";  
          
    // obtener datos del usuario  
    $q = "SELECT * FROM `$tabla` WHERE `$iden` = '$id'";  
    $result = mysql_query($q, $sql_link) or oiError(mysql_error($sql_link));  
    $ret = mysql_fetch_array($result);  
    $segm = $ret[$campo];  
    mysql_free_result($result);  
    return $segm;  
}  
?>