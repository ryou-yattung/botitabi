<?php

session_start();
try{
  // $db = new PDO('mysql:dbname=botitabi;host=localhost;charset=utf8','root','root');
  $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');

  if(!empty($_POST)){
      $name = $_POST['name'];
      $sex = $_POST['sex'];
      $_SESSION['name'] = $name;
      $_SESSION['sex'] =  $sex;
     
      $db->query( "INSERT INTO botitabi_members SET name='{$_SESSION['name']}', sex='{$_SESSION['sex']}', address='{$_SESSION['address']}', password='{$_SESSION['password']}',picture='',rural='{$_SESSION['rural']}',area='{$_SESSION['area']}',profile='null'");
  
         header('Location: ../explanation1.html');
  };    

}catch(PDOException $e){
   
  echo 'DB接続エラー：' .$e->getMessage;
}
?> 
