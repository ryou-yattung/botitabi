window.onload=()=>{

    // <div class="inner-item">
    //     <label for="">行先</label>
    //     <p><input type="text"></p>
    //     <label>写真</label>
    //     <label for="file-input" class="file-label"><input type="file" class="file-input" id="file-input"></label>
    //     <label for="">ひとことメモ</label>
    //     <p><input type="text"></p>
    // </div>

    const planBtn = document.getElementById("plan-plas-js");
    // const itemWarp = document.getElementById("item-warp");
    let count = 0;
    planBtn.onclick=()=>{
        count++
        let Photofor ="file-input" + count;
        console.log(Photofor)


        // 大枠生成とclass付与
        const itemWarp = document.getElementById("item-warp");
        let element = document.createElement("div");
        element.className="inner-item";

        // 行先生成
        let labelName = document.createElement("label");
        labelName.innerHTML="行先"
        element.appendChild(labelName)
        // input
        let inputWarpName = document.createElement("p");
        let inputName = document.createElement("input");
        inputName.setAttribute("type","text");
        inputWarpName.appendChild(inputName)
        element.appendChild(inputWarpName)

        // 写真項目生成
        let labelPhoto = document.createElement("label");
        labelPhoto.innerHTML="写真"
        element.appendChild(labelPhoto)
        // input
        let labelWarpPhoto = document.createElement("label");
        labelWarpPhoto.setAttribute("for",Photofor)
        labelWarpPhoto.className="file-label";
        let inputPhoto = document.createElement("input");
        inputPhoto.id=Photofor
        inputPhoto.className="file-input";
        inputPhoto.setAttribute("type","file");
        labelWarpPhoto.appendChild(inputPhoto)
        element.appendChild(labelWarpPhoto)

        // ひとこと項目生成
        let labelNote = document.createElement("label");
        labelNote.innerHTML="ひとことメモ"
        element.appendChild(labelNote)
        // input
        let inputWarpNote = document.createElement("p");
        let inputNote = document.createElement("input");
        inputNote.setAttribute("type","text");
        inputWarpNote.appendChild(inputNote)
        element.appendChild(inputWarpNote)

        // 生成物をitemWarpの子供に追加
        itemWarp.appendChild(element)
    }
    

}