function assignModule(event) {
    event.preventDefault();//gets all the data inputted to the form and returns it as json
  
    const moduletimedata = new FormData(event.target);

    const moduletimevalues = Object.fromEntries(moduletimedata.entries());
    
    moduletimevalues.topics = moduletimedata.getAll("moduleregtimeassign");

    console.log({ moduletimevalues });
}


const moduletimeform =  document.getElementById('assignmoduletimeform');//finds the form
moduletimeform.addEventListener('submit', assignModule);//pushes the json data to the console once the submit button is clicked