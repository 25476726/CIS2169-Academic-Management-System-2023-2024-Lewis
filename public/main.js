var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");//finds button in module info seciton

btn.addEventListener("click", function(){//when button is clicked, all modules are displayed
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 1){
//btn.classList.add("hide-me");
  btn.disabled = true;
}//disables button after it is pressed
});

function renderHTML(data){
  var htmlString = "";
  htmlString += "<h1>Module Information:</h1>";//displayes module data in a formatted html string.
  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Course + " is an " + data[i].Name + " Module. It has assements "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += '. This Degree Programme covers Learning Outcome ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += '. The Assessments within this Module have Volume of ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }

    htmlString += '. These assessments weigh ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += ' of your overall grades for the Module. The Module leader of the ' + data[i].Course + ' module is '+ data[i].Module.Module_leader +' </p>';
  }
  htmlString += "<button><a href=''>Hide all current Modules</a></button>"; //reloads the page so modules are not showing
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
