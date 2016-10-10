//var infoWindow = require infoWindow.js

var makeRequest = function( url, callback ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var bones = JSON.parse(jsonString);
  createInfoWindow(bones);
  console.log(bones);
}

var createInfoWindow = function(data){
  var infoHeader = createInfoHeader();
  var infoParagraph = createInfoParagraph();
  var infoWindow = document.quereySelector("#info_container");
}

var createInfoHeader = function(){
  var infoHeader = document.createElement('h4');
  infoHeader.innerText = ;
  return infoHeader;
}

var createInfoParagraph = function(){
  var infoParagraph = document.createElement('p');
  infoParagraph.innerText = "";
  return infoParagraph;
}

var app = function() {
  var url = "http://localhost:3000/api/bones";
  makeRequest( url, requestComplete );
}

window.onload = app;