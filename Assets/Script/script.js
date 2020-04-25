// variables to control divs
var option0 = $('#option0')
var option1 = $('#option1')
var option2 = $('#option2')
var option3 = $('#option3')
var questionDiv = $('#question-div');
var questionContent = $('#question');
var startButton= $('#start-button');
var hideDiv= $('#hide')

//question content and amswers
var questions=["What is the fear of not having a phone called?",
                "In 1982, the computer was named person of the year by Time magazine, which other Inaminate object has been named Time Person of the Year?",
                "the earth is a geoid, what is the furthest point from the center of the earth",
                "Philosopher John locke argued in 1989 that society exists for the sake of protecting Life, Liberty, and...",
                "Who is the best skiier on the mountain?"]

var responses= [question1= ["Agoraphobia","Nomophobia","Technophobia","Cyberphobia"],
                question2= ["The Endangered Earth","The Human Genome Project","The Fall of the Wall","The Great Recession"],
                question3= ["Mount Everest (8848m)","Mount Kilimanjaro (5,895m)","Mount Kosciuszko(2,228m)","Chimborazo(6,263m)"],
                question4= ["Estate","Sanity","the Pursuit of Happiness","Order"],
                question5 = ["ME!","I AM!","I'm so much better than you","...Aidan..."]
                ]

var answers = [1,0,3,0,2]

var i = 0; 


//validate function
function validate(e){
    console.log("we gonna list this validate one too!")
    console.log(e.target.dataset.index);
    console.log(answers[i]);
    console.log(i);

    if(parseInt(e.target.dataset.index) === answers[i]){

        i++;
        renderQuestion();
        console.log("i is = " + i);
    }
    else{
        i++;
        subtractTime();
        renderQuestion();
        console.log("i is = " + i);
    }

}

function renderQuestion(){
    if(i===5){
        endquiz();
        return;
    }
    questionContent.text(questions[i]);
    option0.text(responses[i][0]);
    option1.text(responses[i][1]);
    option2.text(responses[i][2]);
    option3.text(responses[i][3]);

}

//function for starting
function begin(){

    timer.text("60")

    setTime()

    questionContent.text(questions[0])

    $('#start-div').html('')


    hideDiv.css("visibility", "visible")

    renderQuestion();

    hideDiv.on('click', validate)

}

//function to end quiz
function endquiz(){

    questionDiv.html('<h2>Phew its over, what a weird quiz')
    renderScores()
    
}

//linking the start button to the click event that starts this whole thing rolling
$('#start-button').on('click', begin)


//stuff about the timer
timer = $('#timer')
timeRemaining=60;

function setTime(){
    var timerInterval = setInterval(function(){
        timeRemaining--;
        timer.text(timeRemaining)
    if (timeRemaining <= 0){
        clearInterval(timerInterval)
        endquiz()
    }
    // console.log(timeRemaining)
    }, 1000)
    return timeRemaining
}

function subtractTime(){
    timeRemaining = timeRemaining - 10;
    console.log("were subtracting time for that!")
    return timeRemaining
}


// //local storage and displaying high scores

// localStorage.setItem("test", test)

// function renderScores(){
//     $('.row').append('<div class="col-sm-2" id="scores">')
//     $('#scores').text(localStorage.getItem("test"))

// }