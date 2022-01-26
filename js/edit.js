window.onload=()=>{
  const name = document.getElementById("name-js");
  const profile = document.getElementById("profile-js");
  const rural = document.getElementById("rural-js");
  const editForm = document.getElementById("edit-form-js");
  const save = document.getElementById("save-js");
  const icon = document.getElementById("icon");
  const iconback = document.getElementById("icon-back-js")


    // API接続
    let request = new XMLHttpRequest();
    request.open('GET', "php/API.php", true)
    request.responseType = 'json';
    request.onload = function () {
        // レスポンスが返ってきた時の処理
        let data = this.response;
        console.log(data)
        name.value=data.name;
        rural.value=data.rural;
        profile.value=data.profile
        if(data.picture.length > 4){
            let imgURL ="url(icon/" + data.picture + ")"
            console.log(imgURL)
            iconback.style.backgroundImage=imgURL;
            iconback.style.backgroundSize="cover";
            iconback.style.backgroundPosition="center";
        }
      }
      request.send();

      // 画像選択時の選択画像表示
      icon.addEventListener("change", function(evt) {
        var file = evt.target.files;
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function() {
            dataUrl = reader.result;
            console.log(dataUrl)
          iconback.style.backgroundImage="url(" + dataUrl + ")";
          iconback.style.backgroundColor = "none"
          iconback.style.backgroundSize = "cover"
        };
    }, false);
  
}

