var skillName=["HTML","CSS","React.js","C++","ASP.NET (C#)","SQL server"]    
    for(let i=0;i<3;i++){
        var div = document.createElement("div");
        div.className="skill-box"
        div.id="s-b"+i
        div.innerHTML =skillName[i];
        document.getElementById("skill-line-0").appendChild(div);        
    }    
    for(let i=3;i<6;i++){
        var div = document.createElement("div");
        div.className="skill-box"
        div.id="s-b"+i
        div.innerHTML =skillName[i];
        document.getElementById("skill-line-1").appendChild(div);   
    }     