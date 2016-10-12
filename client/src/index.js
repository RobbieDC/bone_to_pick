var makeRequest = function( url, callback ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = callback;
  request.send();
}


var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var bodyData = JSON.parse(jsonString);
  console.log(bodyData);

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

  var overlay = function() {
    overlayDiv = document.getElementById("overlay");
    overlayDiv.style.visibility = (overlayDiv.style.visibility == "visible") ? "hidden" : "visible";
  }

  var handleBonesButtonClick = function(event) {
    var boneIndex = parseInt(this.className);
    var bone = bodyData.bones[boneIndex];
    createInfoWindow( bone.name, bone.fact, bone.image );
    overlay();
    console.log(event);
  }

  var handleMuscleButtonClick = function(event) {
    var muscleIndex = parseInt(this.className);
    var muscle = bodyData.muscles[muscleIndex];
    createInfoWindow( muscle.name, muscle.fact, muscle.image );
    overlay();
    console.log(event);
  }

  var handleDigestiveButtonClick = function(event) {
    var digestiveIndex = parseInt(this.className);
    var digestive = bodyData.digestives[digestiveIndex];
    createInfoWindow( digestive.name, digestive.fact, digestive.image );
    overlay();
    console.log(event);
  }

  var addEventListenersToBonesButtons = function() {
    var bonesButtons = document.querySelectorAll( ".bones_button" );
    for ( var i = 0; i < bonesButtons.length; i++ ) {
      bonesButtons[i].addEventListener( "click", handleBonesButtonClick );
    }
  }

  var addEventListenersToMuscleButtons = function() {
    var muscleButtons = document.querySelectorAll( ".muscle_button" );
    for ( var i = 0; i < muscleButtons.length; i++ ) {
      muscleButtons[i].addEventListener( "click", handleMuscleButtonClick );
    }
  }

  var addEventListenersToDigestiveButtons = function() {
    var digestiveButtons = document.querySelectorAll( ".digestive_button" );
    for ( var i = 0; i < digestiveButtons.length; i++ ) {
      digestiveButtons[i].addEventListener( "click", handleDigestiveButtonClick );
    }
  }

  var clearButtons = function(){
    var bonesButtons = document.getElementById( "bones_button_div" );
    bonesButtons.style.visibility = 'hidden';
  }

  var handleNavButtonClick = function() {
    clearButtons();
    var imageContainer = document.querySelector("#image_container");
    var imageName = this.id;
    imageContainer.style.backgroundImage = 'url("./public/images/' + imageName + '.png")';
  }

  var addEventListenersToNavButtons = function() {
    var navButtons = document.querySelectorAll(".nav_button");
    for (var i = 0; i < navButtons.length; i++ ) {
      navButtons[i].addEventListener("click", handleNavButtonClick);
    }
  }

  addEventListenersToBonesButtons();
  addEventListenersToMuscleButtons();
  addEventListenersToDigestiveButtons();
  addEventListenersToNavButtons();

}


var app = function() {
  var url = "http://localhost:3000/api/body";
  makeRequest( url, requestComplete );
}

window.onload = app;