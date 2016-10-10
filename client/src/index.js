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
  console.log(bones);

  var createInfoHeader = function( text ) {
    var infoHeader = document.createElement('h4');
    infoHeader.className = "info_header";
    infoHeader.innerText = text;
    return infoHeader;
  }

  var createInfoImg = function( imgSrc ) {
    var infoImg = document.createElement( "img" );
    infoImg.setAttribute( "src", imgSrc );
    infoImg.setAttribute( "width", 100 );
    return infoImg;
  }

  var createInfoParagraph = function( text ) {
    var infoParagraph = document.createElement('p');
    infoParagraph.className = "info_paragraph";
    infoParagraph.innerText = text;
    return infoParagraph;
  }

  var appendElements = function( div, header, paragraph, img ) {
    div.appendChild( header );
    div.appendChild( img );
    div.appendChild( paragraph );
  }

  var createInfoWindow = function( headerText, paragraphText, imgSrc ) {
    var infoHeader = createInfoHeader( headerText );
    var infoImg = createInfoImg( imgSrc )
    var infoParagraph = createInfoParagraph( paragraphText );
    var infoWindow = document.querySelector("#info_container");
    infoWindow.innerHTML = "";
    appendElements( infoWindow, infoHeader, infoImg, infoParagraph );
  }

  var handleButtonClick = function() {
    var boneIndex = parseInt(this.className);
    var bone = bones[boneIndex];
    console.log(bone);
    createInfoWindow( bone.name, bone.fact, bone.image );
  }

  var skullButton = document.getElementsByClassName('0')[0];
  skullButton.onclick = handleButtonClick;

  var clavicleButton = document.getElementsByClassName('1')[0];
  clavicleButton.onclick = handleButtonClick;

  var ribsButton = document.getElementsByClassName('2')[0];
  ribsButton.onclick = handleButtonClick;

  var humerusButton = document.getElementsByClassName('3')[0];
  humerusButton.onclick = handleButtonClick;

  var phalangesButton = document.getElementsByClassName('4')[0];
  phalangesButton.onclick = handleButtonClick;

  var ulnaButton = document.getElementsByClassName('5')[0];
  ulnaButton.onclick = handleButtonClick;

  var pelvisButton = document.getElementsByClassName('6')[0];
  pelvisButton.onclick = handleButtonClick;
  
  var femurButton = document.getElementsByClassName('7')[0];
  femurButton.onclick = handleButtonClick;

  var fibulaButton = document.getElementsByClassName('8')[0];
  fibulaButton.onclick = handleButtonClick;

  var talusButton = document.getElementsByClassName('9')[0];
  talusButton.onclick = handleButtonClick;

}

var app = function() {
  var url = "http://localhost:3000/api/bones";
  makeRequest( url, requestComplete );
}

window.onload = app;