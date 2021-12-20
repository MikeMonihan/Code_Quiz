const ansOne = document.getElementById("ansOne");
const ansTwo = document.getElementById("ansTwo");
const ansThree = document.getElementById("ansThree");
const ansFour = document.getElementById("ansFour");
var timerDefault = 75;

function questionOne(){
    document.getElementById("quizText").innerHTML = "Inside which HTML element do we insert our Javascript?"
    ansOne.value ="<java>";
    ansTwo.value ="<scripter>";
    ansThree.value ="<script>";
    ansFour.value ="<javascript>";
    
    var answerOne = ansOne.addEventListener("click", function(){
        timerDefault = timerDefault - 10;    
        questionTwo();
        return;
        
    })
    
    var answerTwo = ansTwo.addEventListener("click", function(){
        timerDefault = timerDefault - 10;    
        questionTwo();
        return;
       
    })
    var answerThree = ansThree.addEventListener("click", function(){
        questionTwo();
        return;
    })
    var answerFour = ansFour.addEventListener("click", function(){
        timerDefault = timerDefault - 10;    
        questionTwo();
        return;
    })
    
}
function questionTwo(){
    document.getElementById("quizText").innerHTML = "How do you write \'Hello World\' in an alert box?"
    ansOne.value ="alert(\"Hello World\")";
    ansTwo.value ="alarm(\"Hello World\")";
    ansThree.value ="alarmBox(\"Hello World\")";
    ansFour.value ="showAlarm(\"Hello World\")";
    
    var answerOne = ansOne.addEventListener("click", function(){
        questionThree();
        return;
    })
    
    var answerTwo = ansTwo.addEventListener("click", function(){
        timerDefault = timerDefault - 10;    
        questionThree();
        return;
    })
    var answerThree = ansThree.addEventListener("click", function(){
        timerDefault = timerDefault - 10;   
        questionThree(); 
        return;
    })
    var answerFour = ansFour.addEventListener("click", function(){
        timerDefault = timerDefault - 10;  
        questionThree();  
        return;
    })
}
function questionThree(){
    document.getElementById("quizText").innerHTML = "How do you write a comment in Javascript?"
    ansOne.value ="<!---->";
    ansTwo.value ="\" \"";
    ansThree.value ="//";
    ansFour.value ="<>";
    
    var answerOne = ansOne.addEventListener("click", function(){
        timerDefault = timerDefault - 10;  
        questionFour();
        return;
    })
    
    var answerTwo = ansTwo.addEventListener("click", function(){
        timerDefault = timerDefault - 10;   
        questionFour(); 
        return;
    })
    var answerThree = ansThree.addEventListener("click", function(){
        questionFour();  
        return;
    })
    var answerFour = ansFour.addEventListener("click", function(){
        timerDefault = timerDefault - 10; 
        questionFour();   
        return;
    })
}
function questionFour(){
    document.getElementById("quizText").innerHTML = "How do you find the client's browser name?"
    ansOne.value ="browser.navigator";
    ansTwo.value ="userAgent.browser";
    ansThree.value ="browser.user";
    ansFour.value ="navigator.userAgent";
    
    var answerOne = ansOne.addEventListener("click", function(){
        timerDefault = timerDefault - 10; 
        questionFive();
        return;
    })
    
    var answerTwo = ansTwo.addEventListener("click", function(){
        timerDefault = timerDefault - 10;  
        questionFive();  
        return;
    })
    var answerThree = ansThree.addEventListener("click", function(){
        timerDefault = timerDefault - 10;  
        questionFive();  
        return;
    })
    var answerFour = ansFour.addEventListener("click", function(){  
        questionFive(); 
        return;
    })
}
function questionFive(){
    document.getElementById("quizText").innerHTML = "Which event occurs when a user clicks on an HTML element?"
    ansOne.value ="onMouseOver";
    ansTwo.value ="onMouseClick";
    ansThree.value ="onClick";
    ansFour.value ="onMouseHover";
    
    var answerOne = ansOne.addEventListener("click", function(){
        timerDefault = timerDefault - 10; 
        allDone();  
        return;
    })
    
    var answerTwo = ansTwo.addEventListener("click", function(){
        timerDefault = timerDefault - 10;   
        allDone();  
        return;
    })
    var answerThree = ansThree.addEventListener("click", function(){
        allDone();  
        return;
    })
    var answerFour = ansFour.addEventListener("click", function(){
        timerDefault = timerDefault - 10;  
        allDone();  
        return;
    })
}
function allDone(){
    
    ansOne.className ="hideMe";
    ansTwo.className ="hideMe";
    ansThree.className ="hideMe";
    ansFour.className ="hideMe";

    document.getElementById("flavText").className ="seeMe";

    document.getElementById("flavText").innerHTML = "Your final score is: " + timerDefault;

    document.getElementById("initialsText").className ="seeMe";

    document.getElementById("userName").className ="seeMe";

    document.getElementById("userSubBtn").className ="seeMe";

    document.getElementById("quizText").innerHTML = "All Done!";

}

document.getElementById("btnSubmit").addEventListener("click", function(){
    var countdownTimer = setInterval(function(){
        timerDefault--;
        if(timerDefault <= 0){
            clearInterval(countdownTimer);
            document.getElementById("quizTimer").innerHTML = "Timer: 0";
            allDone();
            
        } else{
            document.getElementById("quizTimer").innerHTML = "Timer: " + timerDefault;
        }
    },1000)
    document.getElementById("btnSubmit").className="hideMe";
    ansOne.className ="seeMe";
    ansTwo.className ="seeMe";
    ansThree.className ="seeMe";
    ansFour.className ="seeMe";
    document.getElementById("userSubBtn").className ="hideMe";
    document.getElementById("flavText").className ="hideMe";

    questionOne();

})