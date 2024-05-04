function submitAssessment(event) {// all of these create, edit, and assign js files i used https://www.learnwithjason.dev/ tutorials for help in some areas.
    event.preventDefault();
  
    const assessmentdata = new FormData(event.target);

    const assessmentvalues = Object.fromEntries(assessmentdata.entries());
    
    console.log({ assessmentvalues });//gets all of the data from the form and turns it into json and prints it to the console
}


const assessmentform =  document.getElementById('createassessmentform');
assessmentform.addEventListener('submit', submitAssessment);//when submit button is clicked, all of the inputted data is turned into json and displays in the console.