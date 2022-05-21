let startTime = 10
let time = startTime * 60




 
 function updateTimeLeft() {
    let countdown = document.getElementById("countdown");
 
     let minute = Math.floor(time/60);

    let seconds = time % 60;
    if (seconds < 10) {
        seconds =  "0" + seconds
    } else {
        seconds = seconds
    }
    time--
    countdown.innerText = `${minute}:${seconds}`;
    
    if (seconds == 0 && minute === 0){
        clearInterval(myInterval);
    }
   

   
 

}
 
 const myInterval = setInterval(updateTimeLeft , 1000)
    
     
 

 