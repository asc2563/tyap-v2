addEventListener("keydown", function (event) {
  if (event.key === "Enter") search();
});

function displaySE() {
  var currentSE = document.getElementById("SE");
  var se = currentSE[currentSE.selectedIndex].id;
  alert("You are now searching on " + se);
  var SE = currentSE[currentSE.selectedIndex].value;
  return SE;
}

function fakeset(box, boxid) {
  boxid = box[box.selectedIndex].id;
  alert("you are now searching on " + boxid);
}

function settings(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else if (div.style.display === "block") {
    div.style.display = "none";
  }
}

function search() {
  var searchbox = document.getElementById("input");
  var url = searchbox.value;
  if (url.includes("://")) {
    window.location = url;
    searchbox.value = "";
  } else if (url.includes(".")) {
    window.location = "https://" + url;
    searchbox.value = "";
  } else {
    var engineval = document.getElementById("SE");
    var engine = engineval[engineval.selectedIndex].value;
    window.location = engine + url;
    searchbox.value = "";
  }
}

function bookmark(event) {
  var myTextInput = document.getElementById("bookmarksite");
  var url = myTextInput.value;
  if (url.includes("https://")) {
    var a = document.createElement("a");
    var br = document.createElement("br");
    var linkText = document.createTextNode(url);
    var bmspos = document.getElementById("bmsdiv");
    a.appendChild(linkText);
    a.title = url;
    a.href = url;
    a.target = "blank_";
    myTextInput.value = "";
    bmspos.appendChild(a);
    bmspos.appendChild(br);
  } else if (url.includes(".")) {
    var a = document.createElement("a");
    var br = document.createElement("br");
    var linkText = document.createTextNode("https://" + url);
    var bmspos = document.getElementById("bmsdiv");
    a.appendChild(linkText);
    a.title = "https://" + url;
    a.href = "https://" + url;
    a.target = "blank_";
    bmspos.appendChild(a);
    bmspos.appendChild(br);
    myTextInput.value = "";
  } else {
    var engineval = document.getElementById("SE");
    var engine = engineval[engineval.selectedIndex].value;
    var a = document.createElement("a");
    var br = document.createElement("br");
    var linkText = document.createTextNode(url);
    var bmspos = document.getElementById("bmsdiv");
    a.appendChild(linkText);
    a.id = "nounderline";
    a.title = engine + url;
    a.href = engine + url;
    a.target = "blank_";
    bmspos.appendChild(a);
    bmspos.appendChild(br);

    myTextInput.value = "";
  }
}
