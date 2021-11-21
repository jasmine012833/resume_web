function toPage(link){
    window.location=link;
   }

var project={
    "data":[
        {
            "p_name":"滑滑轉帳",
            "p_img":"p_image/p_01.png",
            "p_src":"https://heywm.csb.app/",
            "p_illustrate":"此系統主要分為四大功能：轉帳、更換群成員、新增/修改/刪除群組、新增/修改/刪除成員",
            "p_language":["HTML","CSS","React.js"]
        },{
            "p_name":"模擬股票走勢圖",
            "p_img":"p_image/p_02.png",
            "p_src":"https://7ksi3.csb.app/",
            "p_illustrate":"",
            "p_language":["HTML","CSS","React.js"]
        },{
            "p_name":"2048",
            "p_img":"p_image/p_03.png",
            "p_src":"https://pug84.csb.app/",
            "p_illustrate":"透過上下左右鍵來移動水果們，當水果沒有位置可以移動時，系統會自己判斷用戶所獲得的分數對應多少柴寶幣獎勵。",
            "p_language":["HTML","CSS","React.js"]
        },{
            "p_name":"圖形驗證碼",
            "p_img":"p_image/p_04.png",
            "p_src":"https://ez5xl.csb.app/",
            "p_illustrate":"在白框內輸入圖上的英文字+數字。系統也有設定無論英文輸入大小寫皆可以判斷。",
            "p_language":["HTML","CSS","React.js"]
        },{
            "p_name":"彰銀柴寶幣兌換",
            "p_img":"p_image/p_05.png",
            "p_src":"https://kfuvd.csb.app/",
            "p_illustrate":"點選想兌換的卡片，系統會自動判斷柴寶幣餘額是否足夠。",
            "p_language":["HTML","CSS","React.js"]
        },{
            "p_name":"拉霸機",
            "p_img":"p_image/p_06.png",
            "p_src":"https://thhy5.csb.app/",
            "p_illustrate":"將錢幣放入投幣處，按搖桿，觸發拉霸動畫，隨機產出一個獎項。獲得的獎項會被記錄下來。柴犬的對話會告知用戶現在遊玩次數還剩多少次。",
            "p_language":["HTML","CSS","React.js"]
        },{
            "p_name":"資料結構：二元搜索樹",
            "p_img":"p_image/p_07.png",
            "p_src":"cplus_project.html",
            "p_illustrate":"",
            "p_language":["C++"]
        },{
            "p_name":"資料庫：網路銀行",
            "p_img":"p_image/p_08.png",
            "p_src":"database_project.html",
            "p_illustrate":"",
            "p_language":["ASP.NET(C#)","SQL server"]
        }
    ]
}

for(let i=0;i<project.data.length;i++){
    var div = document.createElement("div")
    div.className="project-box"  
    div.onclick = function(){
        toPage(project.data[i].p_src)
      }    
    var p_box_L = document.createElement("div") 
    p_box_L.className="project-box-L"
    var p_box_M = document.createElement("div") 
    p_box_M.className="project-box-M"
    var p_box_R = document.createElement("div") 
    p_box_R.className="project-box-R"

    
    var pName=document.createElement("div")
    pName.className="project-name"
    pName.innerHTML=project.data[i].p_name
    p_box_M.appendChild(pName)
    var img=document.createElement("img")    
    img.src=project.data[i].p_img
    img.className="project-img"
    p_box_R.appendChild(img)
    
    var pIll=document.createElement("div")
    pIll.className="project-illustrate"
    pIll.innerHTML=project.data[i].p_illustrate
    p_box_M.appendChild(pIll)

    var pL_Box=document.createElement("div")
    pL_Box.className="project-language-box"
    
    for(let j=0;j<project.data[i].p_language.length;j++){
        var pL=document.createElement("div")
        pL.className="project-language"
        pL.innerHTML=project.data[i].p_language[j]        
        pL_Box.appendChild(pL)
    }
    p_box_M.appendChild(pL_Box)
   
    var pLine=document.createElement("div")
    pLine.className="project-line"
    p_box_L.appendChild(pLine)
    
    div.appendChild(p_box_L)
    div.appendChild(p_box_M)
    div.appendChild(p_box_R)
    document.getElementById("projects-back").appendChild(div)
}
