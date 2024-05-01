var pageCounter = 1;
var assessmentContainer = document.getElementById('assessment-info');
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'assessment-'+ pageCounter +'.json');
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
}
});
//  ##old url
function renderHTML(data){
  var htmlString = "";
  htmlString += "<h1>Assessment Information:</h1>";
  for(i = 0; i < data.length; i++){
    htmlString += "<p>The " + data[i].Assessmenttitle + " Assessment is Assessment number " + data[i].Assessmentnumber + 
    ". Its Learning Outcomes are to " + data[i].Loscovered + ". This Assessment has volume of "
     + data[i].Volume + ". The Weighting of this assessment to the overall module grade is " + data[i].Weighting + 
     ". This Assessment is due to be submitted on " + data[i].Deadline + ". This assessment is for the " + data[i].Modules + " module. </p>";
/*      htmlString += "<script src='degreemodules.js'></script>";
     htmlString += "<button id='modbtn'>Fetch information about this Degree's Modules</button>";
     htmlString += "<div id='degree-module-info'></div>"; */

/*      htmlString += "</div>"; */

  }
 assessmentContainer.insertAdjacentHTML('beforeend', htmlString);

}

