    // 時間
    function showTime(){
        let nowTime = new Date()
        let hour = nowTime.getHours();
        let min = nowTime.getMinutes();
        let sec = nowTime.getSeconds();
    
    
        hour = checkTime(hour);
        min = checkTime(min);
        sec = checkTime(sec);
    
        return hour + " : " + min + " : " + sec;
    
    }
    
    
    function checkTime(num){
        if(num<10){
            num = "0" + num;
        }
        return num;
    }
    
    let divList = document.querySelectorAll("text");
    
    setInterval(()=>{
        let timeStr = showTime() 
        divList.forEach((item,i)=>{
        item.innerHTML =  timeStr ;
        })
    
    },1000)



    //變換顏色遮罩
    function changeColor(){
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        let bg = document.querySelector("#bgColorHandler");
        bg.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
        window.setTimeout("changeColor()",2000);

    }

    window.onload = changeColor();


