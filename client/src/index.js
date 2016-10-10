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
  createInfoWindow();
  console.log(bones);
}

var createInfoHeader = function( text ){
  var infoHeader = document.createElement('h4');
  infoHeader.innerText = text;
  return infoHeader;
}

var createInfoParagraph = function( text ) {
  var infoParagraph = document.createElement('p');
  infoParagraph.innerText = text;
  return infoParagraph;
}

var appendElements = function( div, header, paragraph ) {
  div.appendChild( header );
  div.appendChild( paragraph );
}

var createInfoWindow = function() {
  var infoHeader = createInfoHeader("Test Header");
  var infoParagraph = createInfoParagraph("test paragraph");
  var infoWindow = document.querySelector("#info_container");
  appendElements( infoWindow, infoHeader, infoParagraph );
}

var app = function() {
  var url = "http://localhost:3000/api/bones";
  makeRequest( url, requestComplete );
}

window.onload = app;