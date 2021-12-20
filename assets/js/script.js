const ansOne = document.getElementById("ansOne");


function startTimer(length, display){
    setInterval(function (){
        display.textContent = "Timer: " + length;
    });

}



document.getElementById("btnSubmit").addEventListener("click", function(){
    var timerDefault = 75;
    display = document.getElementById("quizTimer");
    startTimer(timerDefault, display);
    
})