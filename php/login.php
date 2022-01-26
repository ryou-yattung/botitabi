<?php
    session_start();
    try{
        //  $db = new PDO('mysql:dbname=botitabi;host=localhost;charset=utf8','root','root');
        $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');
    
        if(!empty($_POST)){
           
            $email = $_POST['email'];
            $password = sha1($_POST['password']);
            // $password = $_POST['password'];
            // print($name);
            // $login = $db->prepare("SELECT * FROM members WHERE name=? AND address=? AND password=?");
            $login = $db->query("SELECT * FROM botitabi_members WHERE address='{$email}' AND password='{$password}'");
            $login;
        //    $login->sxcuet(array(
        //     $_POST['name'],
        //     $_POST['address'],
        //     sha1($_POST['password']),
        //    ));
           $member = $login->fetch();
           
           if(!empty($member)){
               $_SESSION['address'] = $member['address'];
               $_SESSION['password'] = $member['password'];

               
            header('Location: ../home.html');
            exit();
           }else{
            header('Location: ../index.html');
            exit();
           };
          
        }else{
            print "エラー１";
        };
    
    }catch(PDOException $e){
        print "エラー１";
        echo 'DB接続エラー：' .$e->getMessage;
    }
    ?>
?>