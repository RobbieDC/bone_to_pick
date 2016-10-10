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

  var skullButton = document.querySelector('#skull_button');
  skullButton.onclick = handleButtonClick;

  var clavicleButton = document.querySelector('#clavicle_button');
  clavicleButton.onclick = handleButtonClick;

  var ribsButton = document.querySelector('#ribs_button');
  ribsButton.onclick = handleButtonClick;

  var humerusButton = document.querySelector('#humerus_button');
  humerusButton.onclick = handleButtonClick;

  var pelvisButton = document.querySelector('#pelvis_button');
  pelvisButton.onclick = handleButtonClick;

  var ulnaButton = document.querySelector('#ulna_button');
  ulnaButton.onclick = handleButtonClick;

  var phalangesButton = document.querySelector('#phalanges_button');
  phalangesButton.onclick = handleButtonClick;

  var femurButton = document.querySelector('#femur_button');
  femurButton.onclick = handleButtonClick;

  var fibulaButton = document.querySelector('#fibula_button');
  fibulaButton.onclick = handleButtonClick;

  var talusButton = document.querySelector('#talus_button');
  talusButton.onclick = handleButtonClick;

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