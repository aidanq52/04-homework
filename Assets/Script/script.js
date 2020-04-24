var questionDiv = $('#question-div');
var questionContent = $('#question');
var startButton= $('#start-button');
var questions=["What is the fear of not having a phone called?",
                "In 1982, the computer was named person of the year by Time magazine, which other Inaminate object has been named Time Person of the Year?",
                "the earth is a geoid, what is the furthest point from the center of the earth",
                "Philosopher John locke argued in 1989 that society exists for the sake of protecting Life, Liberty, and...",
                "Who is the best skiier on the mountain?"]


var responses= [question1= ["Agoraphobia",
                "Nomophobia",
                "Technophobia",
                "Cyberphobia"],
                question2 = ["The Endangered Earth",
                "The Human Genome Project",
                "The Fall of the Wall",
                "The Great Recession"],
                question3 = ["Mount Everest (8848m)",
                "Mount Kilimanjaro (5,895m)",
                "Mount Kosciuszko(2,228m)",
                "Chimborazo(6,263m)"],
                question4 = ["Estate",
                "Sanity",
                "the Pursuit of Happiness",
                "Order"],
                question5 = [
                    "ME!",
                    "I AM!",
                    "I'm so much better than you",
                    "...Aidan..."
                ]
            ]

var answers = [1,0,3,0,2]

//Just making sure my nested arrays function properly                
// console.log(questions)
// console.log(questions[1])
// console.log(responses)
// console.log(responses[1][2])

var option0 = $('#option0')
var option1 = $('#option1')
var option2 = $('#option2')
var option3 = $('#option3')

hideDiv= $('#hide')

timeRemaining=30;

function begin(){

    questionContent.text(questions[0])

    $('#start-div').html('')

    hideDiv.css("visibility", "visible")

    option0.text(responses[0][0])
    option1.text(responses[0][1])
    option2.text(responses[0][2])
    option3.text(responses[0][3])

    

    option1.on('click', secondquestion)



}

function secondquestion(){

    questionContent.text(questions[1]);

    option0.text(responses[1][0])
    option1.text(responses[1][1])
    option2.text(responses[1][2])
    option3.text(responses[1][3])

    option0.on('click', thirdquestion)

}

function thirdquestion(){

    questionContent.text(questions[2]);

    option0.text(responses[2][0])
    option1.text(responses[2][1])
    option2.text(responses[2][2])
    option3.text(responses[2][3])

    option3.on('click', fourthQuestion)

}

function fourthQuestion(){

    questionContent.text(questions[3]);

    option0.text(responses[3][0])
    option1.text(responses[3][1])
    option2.text(responses[3][2])
    option3.text(responses[3][3])

    option0.on('click', fifthQuestion)

}

function fifthQuestion(){

    questionContent.text(questions[4]);

    option0.text(responses[4][0])
    option1.text(responses[4][1])
    option2.text(responses[4][2])
    option3.text(responses[4][3])

    option2.on('click', endquiz)

}

function endquiz(){
    questionDiv.html('<h2>Phew its over, what a weird quiz')
}



$('#start-button').on('click', begin)