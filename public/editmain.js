function editModule(event) {// all of these create, edit, and assign js files i used https://www.learnwithjason.dev/ tutorials for help in some areas.
    event.preventDefault();
  
    const editedmoduledata = new FormData(event.target);

    const editedmodulevalues = Object.fromEntries(editedmoduledata.entries());
    
    editedmoduledata.topics = editedmoduledata.getAll("editedmoduleregtime");

    console.log({ editedmodulevalues });
}


const editedmoduleform =  document.getElementById('editmoduleform');
editedmoduleform.addEventListener('submit', editModule);