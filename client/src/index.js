var makeRequest = function( url, callback ) {
  var request1 = new XMLHttpRequest();
  var request2 = new XMLHttpRequest();
  var request3 = new XMLHttpRequest();

  var url1 = url + "bones";
  var url2 = url + "muscles";
  var url3 = url + "digestives";

  request1.open( "GET", url );
  request2.open( "GET", url );
  request3.open( "GET", url );

  if (request1.onload && request2.onload && request3.onload) {
    callback;
  }

  request1.send();
  request2.send();
  request3.send();

  // var apiNames = [ "bones", "muscles", "digestives" ];
  // for ( var i = 0; i < apiNames.length; i++ ) {

  // }

  // request1.onload = callback;

}


var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var bones = JSON.parse(jsonString);

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

  var handleSkeletonButtonClick = function() {
    var boneIndex = parseInt(this.className);
    var bone = bones[boneIndex];
    createInfoWindow( bone.name, bone.fact, bone.image );
    overlay();
  }

  var addEventListenersToButtons = function() {
    var skeletonButtons = document.querySelectorAll( ".skeleton_button" );
    for ( var i = 0; i < skeletonButtons.length; i++ ) {
      skeletonButtons[i].addEventListener( "click", handleSkeletonButtonClick );
    }
  }

  var handleNavButtonClick = function() {
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

  addEventListenersToButtons();
  addEventListenersToNavButtons();

}


var app = function() {
  var url = "http://localhost:3000/api/";
  makeRequest( url, requestComplete );
}

window.onload = app;