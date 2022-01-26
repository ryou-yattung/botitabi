<?php
    session_start();

    try{
        //  $db = new PDO('mysql:dbname=botitabi;host=localhost;charset=utf8','root','root');
        $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');
    
        // if(empty($_SESSION['password']) && empty($_SESSION['address'])){
        
            // $login = $db->query("SELECT * FROM botitabi_members WHERE address='{_SESSION['address']}' AND password='{$_SESSION['password']}'");
            $email = $_SESSION['address'];
            $pass = $_SESSION['password'];
            $login = $db->query("SELECT id,name,sex,picture,profile,rural FROM botitabi_members WHERE address='{$email}' AND password='{$pass}'");
            // SELECT * FROM botitabi_members WHERE address='kida.takuya.1234@gmail.com' AND password='sssss'
            $login;
            $member = $login->fetch();
           
           if(!empty($member)){
               
            // headerでAPIようのJsonデータのタイプ設定（マイムタイプ）
                // 設定しないとjsonとわからない
                header("Content-Type:application/json");
                // APIはJsonデータ変換してprintするだけ
                print json_encode($member);
                // print_r($member);
               
            // exec();
           }else{
               print $_SESSION['address'];
            //    print "エラー";
            
           };
          
        // }else{
        //     // print "エラー１";
        // };
    
    }catch(PDOException $e){
        print "エラー１";
        echo 'DB接続エラー：' .$e->getMessage;
    }

?>