window.onload=()=>{
    const planBtn = document.getElementsByClassName("plan-btn-js");
    const clipBtn = document.getElementsByClassName("clip-btn-js");
    const planWarp = document.getElementsByClassName("plan-warp-js");
    const clipWarp = document.getElementsByClassName("clip-warp-js");
    const bLine = document.getElementsByClassName("bottom-line");
    const picture = document.getElementById("picture-js");
    const name = document.getElementById("name-js");
    const rural = document.getElementById("rural-js");
    const profile = document.getElementById("profile-js");
    

    // APIアクセス
    let request = new XMLHttpRequest();
    request.open('GET', "php/API.php", true)
    request.responseType = 'json';
    request.onload = function () {
        // レスポンスが返ってきた時の処理
        let data = this.response;
        console.log(data)
        name.innerHTML=data.name;
        rural.innerHTML=data.rural;
        profile.innerHTML=data.profile

        if(data.picture.length>0){
            imgURL ="url(icon/" + data.picture + ")"
            picture.style.backgroundImage=imgURL;
        }
      }
      request.send();

    // 投稿プランとクリップの切り替え
    planBtn[0].onclick=()=>{
        // console.log("aaa")
        planWarp[0].style.display="block"
        clipWarp[0].style.display="none"
        bLine[0].style.transform="translateX(0)";
    }
    clipBtn[0].onclick=()=>{
        // console.log("bbb")
        clipWarp[0].style.display="block"
        planWarp[0].style.display="none"
        bLine[0].style.transform="translateX(100%)";
    }

    
}