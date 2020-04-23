# Things in code
* Start Time / total seconds
* var totalTime = 75;

* Elapsed time
* var elapsedTime = 0;

* Current time left

* Current time-left html element

* Questions - List/Array

    * Question

    * List of possible answers

    * Correct answer

# Potential HTML elements
* Start Button
* var startButton = document.getElementId('start-button');

* Form / Input to allow us to add out initials

* Buttons for each answer

* current time html element


# What kind of actions does my code need to perform
* when the user clicks the start button we need to start the timer and prompt the first question

function startGame(){
    //code here
}
    * generate all the html 

* when the user clicks an answer button, we need

    function validateAnswer(){
        if( incorrect answer)
            removeTime()
    }

    * Validate if their answer is correct

        * If it is not correct, we need to remove additional time from the clock
        
        function removeTime(){

        }


    * Then we need to move to the next question

* We need to use an interval to create a countdown - setInterval( callback, 1000)

    * Increment elapsedTime

    * Calculate current time left by doing ( totalTime - elapsedTime)

    * Check if the timer has reached zero

        * End the game

    * Update the time left number in the html

* Game End functionality

    * Display score

    * Provide an input to enter our initial

* when the user submits their initials

    * add their high score to local storage

    * Display the list of highscores to the user

# How are the different actions going to run

* Click the start button to run

* Click the answer button to run validateAnswer()

