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

//function for starting
function begin(){

    timer.text("60")

    setTime()

    questionContent.text(questions[0])

    $('#start-div').html('')

    hideDiv.css("visibility", "visible")

    option0.text(responses[0][0])
    option1.text(responses[0][1])
    option2.text(responses[0][2])
    option3.text(responses[0][3])

    //correct answer
    option1.on('click', secondquestion)
    
    //incorrect answers
    option0.on('click', subtractTime)
    option0.on('click', secondquestion)

    option2.on('click', subtractTime)
    option2.on('click', secondquestion)

    option3.on('click', subtractTime)
    option3.on('click', secondquestion)

}

//functions for clicking through the proceeding buttons
function secondquestion(){

    questionContent.text(questions[1]);

    option0.text(responses[1][0])
    option1.text(responses[1][1])
    option2.text(responses[1][2])
    option3.text(responses[1][3])

    //correct answers
    option0.on('click', thirdquestion)

    //incorrect answers
    option1.on('click', subtractTime)
    option1.on('click', thirdquestion)

    option2.on('click', subtractTime)
    option2.on('click', thirdquestion)

    option3.on('click', subtractTime)
    option3.on('click', thirdquestion)

}

function thirdquestion(){

    questionContent.text(questions[2]);

    option0.text(responses[2][0])
    option1.text(responses[2][1])
    option2.text(responses[2][2])
    option3.text(responses[2][3])

    //correct answer
    option3.on('click', fourthquestion)

    //incorrect answers
    option0.on('click', subtractTime)
    option0.on('click', fourthquestion)

    option1.on('click', subtractTime)
    option1.on('click', fourthquestion)

    option2.on('click', subtractTime)
    option2.on('click', fourthquestion)

}

function fourthquestion(){

    questionContent.text(questions[3]);

    option0.text(responses[3][0])
    option1.text(responses[3][1])
    option2.text(responses[3][2])
    option3.text(responses[3][3])

    //correct answer
    option0.on('click', fifthquestion)

    //incorrect answer
    option1.on('click', subtractTime)
    option1.on('click', fifthquestion)

    option2.on('click', subtractTime)
    option2.on('click', fifthquestion)

    option3.on('click', subtractTime)
    option3.on('click', fifthquestion)

}

function fifthquestion(){

    questionContent.text(questions[4]);

    option0.text(responses[4][0])
    option1.text(responses[4][1])
    option2.text(responses[4][2])
    option3.text(responses[4][3])

    //correct answer
    option2.on('click', endquiz)

    //incorrect answer
    option0.on('click', subtractTime)
    option0.on('click', endquiz)

    option1.on('click', subtractTime)
    option1.on('click', endquiz)

    option3.on('click', subtractTime)
    option3.on('click', endquiz)

    

}

//function to end quiz
function endquiz(){
    questionDiv.html('<h2>Phew its over, what a weird quiz')
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
    console.log(timeRemaining)
    }, 1000)
    return timeRemaining
}

function subtractTime(){
    timeRemaining = timeRemaining - 10;
    return timeRemaining
}