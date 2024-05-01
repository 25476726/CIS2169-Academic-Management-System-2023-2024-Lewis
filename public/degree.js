var pageCounter = 1;
var degreeContainer = document.getElementById('degree-info');
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'degree-'+ pageCounter +'.json');
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
  htmlString += "<h1>Degree Information:</h1>";
  for(i = 0; i < data.length; i++){
    htmlString += "<p>Degree number " + data[i].DegreeID + " is " + data[i].Name + 
    ". Its Learning Outcomes are to " + data[i].Los + ". This degree has awards: "
     + data[i].Awards + ". The Programme Leaders of this degree are " + data[i].Programme_leader + 
     ". This degree starts on " + data[i].Start_date + ". </p>";
/*      htmlString += "<script src='degreemodules.js'></script>";
     htmlString += "<button id='modbtn'>Fetch information about this Degree's Modules</button>";
     htmlString += "<div id='degree-module-info'></div>"; */

/*      htmlString += "</div>"; */

  }
  degreeContainer.insertAdjacentHTML('beforeend', htmlString);

}
