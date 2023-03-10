
setInterval(showTime, 1000)

function showTime() {
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()


    if (second < 10) {
        second = "0" + second
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour < 10) {
        hour = "0" + hour
    }



    let actualTime = hour + ":"+ minute + ":" + second

    document.getElementById("clock").innerHTML = actualTime

    
}

//RGB Colorswap Font
setInterval(colorSwap,1000)
setInterval(colorSwapBorder,1000)

function colorSwap (){
  const randomColor =
    Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("clock").style.color = "#" + randomColor;
  
}

//Colorswap Border
function colorSwapBorder (){
  const randomColor =
    Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("clock").style.webkitTextStroke = "5px #" + randomColor;

}





showTime()