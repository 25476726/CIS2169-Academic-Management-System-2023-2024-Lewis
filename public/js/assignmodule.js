function assignModule(event) {
    event.preventDefault();
  
    const moduletimedata = new FormData(event.target);

    const moduletimevalues = Object.fromEntries(moduletimedata.entries());
    
    value.topics = moduletimedata.getAll("moduleregtimeassign");

    console.log({ moduletimevalues });
}


const moduletimeform =  document.getElementById('assignmoduletimeform');
moduletimeform.addEventListener('submit', assignModuleModule);