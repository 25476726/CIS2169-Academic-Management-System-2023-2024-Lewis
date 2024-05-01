function submitDegree(event) {
    event.preventDefault();
  
    const degreedata = new FormData(event.target);

    const degreevalues = Object.fromEntries(degreedata.entries());
    
    console.log({ degreevalues });
}


const degreeform =  document.getElementById('createdegreeform');
degreeform.addEventListener('submit', submitDegree);