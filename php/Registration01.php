<?php

session_start();
try{
  // $db = new PDO('mysql:dbname=botitabi;host=localhost;charset=utf8','root','root');
  $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');

  if(!empty($_POST)){
      // $name = $_POST['name'];
      // $sex = $_POST['sex'];
      $email = $_POST['email'];
      $password = sha1($_POST['password']);
      // $password = $_POST['password'];
      // , picture='{$file}'
      // $login = $db->query("SELECT * FROM botitabi_members WHERE name='{$name}' AND address='{$address}' AND password='{$password}'");
      $login = $db->query("SELECT * FROM botitabi_members WHERE address='{$email}' AND password='{$password}'");
      $login;
      $member = $login->fetch();
      if(!$member){
        
        $_SESSION['address'] = $email;
        $_SESSION['password'] = $password;
        
         header('Location: ../login03.html');
      }else{
        header('Location: ../login02.html');
      }
  };    

}catch(PDOException $e){
   
  echo 'DB接続エラー：' .$e->getMessage;
}
?> 
