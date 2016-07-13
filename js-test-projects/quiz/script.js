

var checkAnswers = function () {

    var numberQuestions = 2;
    var totalCorrectAnswers = 0;

    //Get user answers
    var answers = [
        document.forms['formQuiz']['q1'].value,
        document.forms['formQuiz']['q2'].value

    ];
    //alert(a1);

    //Validation

    for(var i = 0; i < numberQuestions; i++){

        if(answers[i] == null || answers[i] == ''){
            alert('You missed question ' + i);
            return false;
        }
    }

    //Check answers
    var correctAnswers = ['a','b'];

    //Compare userAnswer with correctAnswer
    for(var i = 0; i < numberQuestions; i++){
        //console.log(answers[i]);
        //console.log(correctAnswers[i]);
        if(answers[i] == correctAnswers[i]){
            totalCorrectAnswers++;
        }
    }

    // Add the score to the page.

    var result = document.getElementById('result');
    result.innerHTML = '<h3>You scored ' + totalCorrectAnswers + ' out of ' + numberQuestions + '</h3>';

    alert('You scored ' + totalCorrectAnswers + ' out of ' + numberQuestions);


    return false;
};

