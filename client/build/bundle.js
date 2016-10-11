/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	
	  var addEventListenersToButtons = function() {
	    var buttons = document.querySelectorAll( "button" );
	    for ( var i = 0; i < buttons.length; i++ ) {
	      buttons[i].addEventListener( "click", handleButtonClick );
	    }
	  }
	
	  addEventListenersToButtons();
	
	}
	
	var app = function() {
	  var url = "http://localhost:3000/api/bones";
	  makeRequest( url, requestComplete );
	}
	
	window.onload = app;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map