var pageCounter = 1;
var assessmentContainer = document.getElementById('assessment-info');
var btn = document.getElementById("btn");//gets the button element within the assessment-info div

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'assessment-'+ pageCounter +'.json');//pulls in the json assessment data
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
  btn.disabled = true;//disabkles the button once pressed
}
});

function renderHTML(data){
  var htmlString = ""; //renders the json data into html and makes it more descriptive
  htmlString += "<h1>Assessment Information:</h1>";
  for(i = 0; i < data.length; i++){
    htmlString += "<p>The " + data[i].Assessmenttitle + " Assessment is Assessment number " + data[i].Assessmentnumber + 
    ". Its Learning Outcomes are to " + data[i].Loscovered + ". This Assessment has volume of "
     + data[i].Volume + ". The Weighting of this assessment to the overall module grade is " + data[i].Weighting + 
     ". This Assessment is due to be submitted on " + data[i].Deadline + ". This assessment is for the " + data[i].Modules + " module. </p>";

  }
 htmlString += "<button><a href=''>Hide all current Assessments</a></button>"; //hide button reloads the page so assessments are not showing
 assessmentContainer.insertAdjacentHTML('beforeend', htmlString);

}

