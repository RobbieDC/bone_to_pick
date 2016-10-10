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
  console.log( bones );
}

var app = function() {
  var url = "http://localhost:3000/api/bones";
  makeRequest( url, requestComplete );
}

window.onload = app;
