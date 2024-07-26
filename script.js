// Add event listener for 'Enter' key press
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") search();
});

// Retrieve the selected search engine
function getSelectedSearchEngine() {
  var currentSE = document.getElementById("SE");
  return currentSE[currentSE.selectedIndex].value;
}

// Alert the selected search engine
function displaySearchEngine(box) {
  alert(`You are now searching on ${box[box.selectedIndex].id}`);
}

// Toggle display of a div
function toggleVisibility(div) {
  div.style.display = (div.style.display === "none") ? "block" : "none";
}

// Perform search
function search() {
  var searchbox = document.getElementById("input");
  var url = searchbox.value.trim();
  
  if (url.includes("://")) window.location = url;
  else if (url.includes(".")) window.location = "https://" + url;
  else window.location = getSelectedSearchEngine() + url;
  
  searchbox.value = "";
}

// Add a bookmark
function bookmark() {
  var myTextInput = document.getElementById("bookmarksite");
  var url = myTextInput.value.trim();
  var bmspos = document.getElementById("bmsdiv");
  var a = document.createElement("a");
  var br = document.createElement("br");
  var linkText;
  
  if (url.startsWith("https://")) {
    linkText = document.createTextNode(url);
    a.title = url;
    a.href = url;
  } else if (url.includes(".")) {
    linkText = document.createTextNode("https://" + url);
    a.title = "https://" + url;
    a.href = "https://" + url;
  } else {
    var engine = getSelectedSearchEngine();
    linkText = document.createTextNode(url);
    a.id = "nounderline";
    a.title = engine + url;
    a.href = engine + url;
  }
  
  a.appendChild(linkText);
  a.target = "blank_";
  bmspos.appendChild(a);
  bmspos.appendChild(br);
  
  myTextInput.value = "";
}
