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
	  createInfoWindow();
	  console.log(bones);
	
	  var handleButtonClick = function(boneObject){
	    // var pTag = document.querySelector(.info_header)
	    console.log("button clicked");
	  }
	
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
	
	var createInfoHeader = function() {
	  var infoHeader = document.createElement('h4');
	  infoHeader.className = "info_header";
	  return infoHeader;
	}
	
	var createInfoParagraph = function( text ) {
	  var infoParagraph = document.createElement('p');
	  infoParagraph.className = "info_paragraph";
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map