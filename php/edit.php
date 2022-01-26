<?php
    session_start();
    try{
        //  $db = new PDO('mysql:dbname=botitabi;host=localhost;charset=utf8','root','root');
        $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');
    
        if(!empty($_POST)){
            // $email = $_POST['email'];
            // $password = sha1($_POST['password']);
             
        //    print ($_FILES['icon']['name']);
        //    print ($_POST['name']);
            $login = $db->query("SELECT * FROM botitabi_members WHERE address='{$_SESSION['address']}' AND password='{$_SESSION['password']}'");
            $login;
           $member = $login->fetch(PDO::FETCH_ASSOC);
        //    fetch_assoc():連想配列だけ返す
           
           if(!empty($member)){
            // print_r($member);
            $id = $member['id'];
            $icon = $member['picture'];
            $name = $_POST['name'];
            $rural = $_POST['rural'];
            $profile = $_POST['profile'];
            if(is_uploaded_file($_FILES['icon']['tmp_name'])){
                $icon = date('YmdHis').$_FILES['icon']['name'];
                move_uploaded_file($_FILES['icon']['tmp_name'],'../icon/'.$icon);
                // $icon = "icon/".$_FILES['icon']['name'];

                $_SESSION['icon']=$icon;
                $db->query("UPDATE botitabi_members SET name='{$name}',profile='{$profile}',rural='{$rural}' , picture='{$icon}' WHERE id={$id}");
                // $icon = "icon/".$_SESSION['icon'];
                // $icon = $_SESSION['icon'];
                // file_get_contents($icon);
            }else{
                $db->query("UPDATE botitabi_members SET name='{$name}',profile='{$profile}',rural='{$rural}' WHERE id={$id}");
            }

            
            header('Location: ../profile.html');
            exit();
           }else{
            // header('Location: ../edit.html');
           };
          
        }else{
            print "エラー１";
        };
    
    }catch(PDOException $e){
        print "エラー１";
        echo 'DB接続エラー：' .$e->getMessage;
    }
?>
