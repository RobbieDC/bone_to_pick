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
window.onload = function(){

var createInfoWindow = function(data){
  var infoHeader = createInfoHeader();
  var infoParagraph = createInfoParagraph();
  var infoWindow = document.quereySelector("#info_container");
}

var createInfoHeader = function(header){
  var infoHeader = document.createElement('div');
  div.innerText = ;
  return div;
}

var createInfoParagraph = function(){
  var infoParagraph = document.createElement('p');
  p.innerText = text + "";
  return p;
}

var app = function() {
  var url = "http://localhost:3000/api/bones";
  makeRequest( url, requestComplete );
}


