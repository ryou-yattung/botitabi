<?php

session_start();
// try{
  $db = new PDO('mysql:dbname=botitabi;host=localhost;charset=utf8','root','root');
  $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');
  if(!empty($_POST)){
     
      $area = $_POST['area'];
      $rural = $_POST['rural'];
     
      
        $_SESSION['area'] = $area;
        $_SESSION['rural'] =  $rural;

        header('Location: ../login04.html');
  };    

// }catch(PDOException $e){
   
//   echo 'DB接続エラー：' .$e->getMessage;
// }
?> 
