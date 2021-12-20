const ansOne = document.getElementById("ansOne");

document.getElementById("btnSubmit").addEventListener("click", function(){
    var timerDefault = 75;
    var countdownTimer = setInterval(function(){
        timerDefault--;
        if(timerDefault <= 0){
            clearInterval(countdownTimer);
            document.getElementById("quizTimer").innerHTML = "Timer: 0";
            document.getElementById("ansOne").className ="hideMe";
            document.getElementById("ansTwo").className ="hideMe";
            document.getElementById("ansThree").className ="hideMe";
            document.getElementById("ansFour").className ="hideMe";

            document.getElementById("flavText").className ="seeMe";

            //Add in score
            document.getElementById("flavText").innerHTML = "Your final score is: ";

            document.getElementById("initialsText").className ="seeMe";

            document.getElementById("userName").className ="seeMe";

            document.getElementById("submitBtn").className ="seeMe";

            document.getElementById("quizText").innerHTML = "All Done!";

        } else{
            document.getElementById("quizTimer").innerHTML = "Timer: " + timerDefault;
        }
    },1000)
    document.getElementById("ansOne").className ="seeMe";
    document.getElementById("ansTwo").className ="seeMe";
    document.getElementById("ansThree").className ="seeMe";
    document.getElementById("ansFour").className ="seeMe";
    document.getElementById("btnSubmit").className ="hideMe";
    document.getElementById("flavText").className ="hideMe";


})