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
/*!***********************!*\
  !*** ./js/control.js ***!
  \***********************/
/***/ function(module, exports) {

	/**
	 *  control heka animate css
	 */
	
	
	function $e(id){
	    return document.getElementById(id);
	}
	
	window.onload = function(){
	    var page1 = $e('page1');
	    var page2 = $e('page2');
	    var page3 = $e('page3');
	
	    var music = $e('music');
	    var audio = document.getElementsByTagName('audio')[0];
	
	
	    // 触发碟片播放
	    music.addEventListener('touchstart', function(){
	        if(audio.paused){
	            audio.play();
	            music.setAttribute('class', 'music_play');
	        }else{
	            audio.pause();
	            music.setAttribute('class', '');
	        }
	        // 暂停显示效果最好，但有兼容性问题
	        /*if (audio.paused) {
	            audio.play();
	            this.style.animationPlayState = "running";
	            this.style.webkitAnimationPlayState = "running";
	        } else {
	            audio.pause();
	            this.style.animationPlayState = "paused";
	            this.style.webkitAnimationPlayState = "paused";
	        };*/
	    }, false);
	
	    // 音乐停止时，碟片样式
	    audio.addEventListener('ended', function(){
	        music.setAttribute('class', '');
	    }, false);
	
	    page1.addEventListener('touchstart', function(){
	        page1.style.display = 'none';
	        page2.style.display = 'block';
	        page3.style.display = 'block';
	
	        setTimeout(function(){
	            page2.setAttribute('class', 'page fadeout');
	            page3.setAttribute('class', 'page fadein');
	        },6000);
	
	    }, false);
	
	
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map