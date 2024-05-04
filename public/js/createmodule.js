function submitModule(event) {
    event.preventDefault();
  
    const moduledata = new FormData(event.target);

    const modulevalues = Object.fromEntries(moduledata.entries());
    
    value.topics = moduledata.getAll("moduleregtime");

    console.log({ modulevalues });
}


const moduleform =  document.getElementById('createmoduleform');
moduleform.addEventListener('submit', submitModule);