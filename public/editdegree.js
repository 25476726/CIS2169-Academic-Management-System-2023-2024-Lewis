function editDegree(event) {// all of these create, edit, and assign js files i used https://www.learnwithjason.dev/ tutorials for help in some areas.
    event.preventDefault();
  
    const editeddegreedata = new FormData(event.target);

    const editeddegreevalues = Object.fromEntries(editeddegreedata.entries());
    
    console.log({ editeddegreevalues });
}


const editdegreeform =  document.getElementById('editdegreeform');
editdegreeform.addEventListener('submit', editDegree);