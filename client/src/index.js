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
  // createInfoWindow();
  console.log(bones);

  var createInfoHeader = function( text ) {
    var infoHeader = document.createElement('h4');
    infoHeader.className = "info_header";
    infoHeader.innerText = text;
    return infoHeader;
  }

  var createInfoParagraph = function( text ) {
    var infoParagraph = document.createElement('p');
    infoParagraph.className = "info_paragraph";
    infoParagraph.innerText = text;
    return infoParagraph;
  }

  var appendElements = function( div, header, paragraph ) {
    div.appendChild( header );
    div.appendChild( paragraph );
  }

  var createInfoWindow = function( headerText, paragraphText ) {
    var infoHeader = createInfoHeader( headerText );
    var infoParagraph = createInfoParagraph( paragraphText );
    var infoWindow = document.querySelector("#info_container");
    appendElements( infoWindow, infoHeader, infoParagraph );
  }

  var handleButtonClick = function(){
    var boneIndex = parseInt(this.className);
    var bone = bones[boneIndex];
    console.log(bone);
    createInfoWindow( bone.name, bone.fact );
  }

  var skullButton = document.getElementsByClassName('0')[0];
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

var app = function() {
  var url = "http://localhost:3000/api/bones";
  makeRequest( url, requestComplete );
}

window.onload = app;