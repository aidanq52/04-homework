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
                "Philosopher John locke argued in 1689 that society exists for the sake of protecting Life, Liberty, and...",
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

    if(parseInt(e.target.dataset.index) === answers[i]){

        i++;
        renderQuestion();
    }
    else{
        i++;
        subtractTime();
        renderQuestion();
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
    setTime()
    questionContent.html('<h2>Phew its over, what a weird quiz')
    console.log("index: " + i)
    console.log(timeRemaining)
    hideDiv.html('<p id= "score"> SCORE: ')
    score = timeRemaining - 2
    $('#score').append(score)
    $('.form-group').css('visibility', 'visible');
    $('.col-sm-2').css("visibility", "visible");

    hideDiv.on('click', )
    
}

//submitting scores to local storage
var initials = [];
var scores =[];



$('#leaderboard').on('click', function(event){
    event.preventDefault();

    // localStorage.removeItem("Initials");
    // localStorage.removeItem("Scores");

    var scoreText = timeRemaining;
    var initialText = $('#initials').val().trim();


    if (initialText === ""){
        return;
    }

    init();

        console.log(initials);
        console.log(scores);

    initials.push(initialText);
    scores.push(scoreText);


    console.log(initials);
    console.log(scores);


    storeInitials();
    storeScores();

    console.log(initials);
    console.log(scores);



    renderInitials();
    renderScores();


    console.log(initials);
    console.log(scores);

    $('#leaderboard').css('visibility', 'hidden');
})


function storeInitials(){
    localStorage.setItem("Initials", JSON.stringify(initials));
}


function storeScores(){
    localStorage.setItem("Scores", JSON.stringify(scores));
}

function init(){

    var InitialRaw = localStorage.getItem("Initials");
    var storedInitials = JSON.parse(localStorage.getItem("Initials"));
    if (storedInitials !== null){
        initials = storedInitials;
    }

        console.log(storedInitials);

    // renderInitials()

    var storedScores = JSON.parse(localStorage.getItem("Scores"));
    if (storedScores !== null){
        scores = storedScores;
    }
        console.log(storedScores);

    // renderScores()


}


function renderInitials(){
    $('#initialList').html('');
    for(var j = 0; j < initials.length; j++){
        var listInitial = initials[j];
        
        console.log(listInitial);

        var li = $('#initialsList').append('<li>' + listInitial)

    }

}

function renderScores(){
    $('#scoresList').html('');
    for(var k=0; k < scores.length; k++){
        var listScore = scores[k];

        console.log(listScore);

        var li=$('#scoresList').append('<li>' + listScore);

    }
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
        return;
    } else if (i===5){
        clearInterval(timerInterval);
        return;
    }
    }, 1000)
    return timeRemaining

}

function subtractTime(){
    timeRemaining = timeRemaining - 10;
    console.log("were subtracting time for that!")
    return timeRemaining
}