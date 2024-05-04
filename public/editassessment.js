function editAssessment(event) {// all of these create, edit, and assign js files i used https://www.learnwithjason.dev/ tutorials for help in some areas.
    event.preventDefault();
  
    const editedassessmentdata = new FormData(event.target);

    const editedassessmentvalues = Object.fromEntries(editedassessmentdata.entries());
    //gets all data inputted to form and outputs it to the console as json.
    console.log({ editedassessmentvalues });
}


const editedassessmentform =  document.getElementById('editassessmentform');
editedassessmentform.addEventListener('submit', editAssessment);//only called once submit button in edit assessment form div clicked.