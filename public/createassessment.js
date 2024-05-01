function submitAssessment(event) {
    event.preventDefault();
  
    const assessmentdata = new FormData(event.target);

    const assessmentvalues = Object.fromEntries(assessmentdata.entries());
    
    console.log({ assessmentvalues });
}


const assessmentform =  document.getElementById('createassessmentform');
assessmentform.addEventListener('submit', submitAssessment);