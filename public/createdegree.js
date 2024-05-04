function submitDegree(event) {// all of these create, edit, and assign js files i used https://www.learnwithjason.dev/ tutorials for help in some areas.
    event.preventDefault();
  
    const degreedata = new FormData(event.target);

    const degreevalues = Object.fromEntries(degreedata.entries());
    
    console.log({ degreevalues });//gets all data inputted to form and turns it into json
}


const degreeform =  document.getElementById('createdegreeform');//finds the form
degreeform.addEventListener('submit', submitDegree);//only triggers function when submit button is clicked.