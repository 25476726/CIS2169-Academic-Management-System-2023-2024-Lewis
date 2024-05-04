function submitModule(event) {// all of these create, edit, and assign js files i used https://www.learnwithjason.dev/ tutorials for help in some areas.
    event.preventDefault();
  
    const moduledata = new FormData(event.target);

    const modulevalues = Object.fromEntries(moduledata.entries());
    
    modulevalues.topics = moduledata.getAll("moduleregtime");

    console.log({ modulevalues });//gets all inputted data and turns it into json.
}


const moduleform =  document.getElementById('createmoduleform');
moduleform.addEventListener('submit', submitModule);//function only called when submit button clicked.