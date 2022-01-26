window.onload=()=>{
    let smile=document.getElementsByClassName("contain__map__Smile");
    let speech=document.getElementsByClassName("contain__map__speech");
    let iconX = document.getElementById('icon-x');
    let sub = document.getElementById('sub');
    let text2=document.getElementById('text2');
    let inspeech=document.getElementById('inspeech');
    let list = document.getElementsByClassName("list-js");
    let listIcon = document.getElementsByClassName("list-icon-js");

    let flag=0;
    // console.log(iconX);


    let mymap = L.map('map').setView([34.698699, 135.491591], 18);
 
        // タイルレイヤーを作成し、地図にセットする
        L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
        }).addTo(mymap);
        
        // 地図の中心座標とズームレベルを設定する
        mymap.setView([34.698699, 135.491591], 13);

       

        // タグクリックイベント（色の切り替え）
        for(let i=0;i<=list.length-1;i++){
            list[i].onclick=()=>{
                let listColor = window.getComputedStyle(list[i], null).getPropertyValue('color');
                if(listColor == "rgb(123, 121, 121)"){
                    list[i].style.color="rgb(251, 171, 126)";
                    listIcon[i].style.fill="rgb(251, 171, 126)"
                }else{
                    list[i].style.color="rgb(123, 121, 121)";
                    listIcon[i].style.fill="rgb(123, 121, 121)"
                }
            }
        }

    // 登録ウィンドウ表示
    smile[0].onclick=()=>{
        text2.style.visibility="hidden";
        inspeech.style.display="block";
        
        if(flag===0){
            console.log("aaa")
            ddd.style.visibility="visible";
            flag=1;
        }
        
        else{
            ddd.style.visibility="hidden";
            text2.style.visibility="hidden";
            flag=0;
        }
    }
    // 登録ウィンドウ閉じる
    iconX.onclick=()=>{
        console.log(iconX);
        ddd.style.visibility="hidden";
        text2.style.visibility="hidden";
    }
    sub.onclick=()=>{
        console.log("subbbb");
        // console.log(inspeech);
        text2.style.visibility="visible";
        inspeech.style.display="none";
        



    }

}
