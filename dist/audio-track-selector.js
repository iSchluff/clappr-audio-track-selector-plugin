(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["AudioTrackSelector"] = factory(require("clappr"));
	else
		root["AudioTrackSelector"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_clappr__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/ // css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports=function(useSourceMap){var list=[];// return the list of modules as css string\nlist.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return\"@media \".concat(item[2],\" {\").concat(content,\"}\");}return content;}).join('');};// import a list of modules into the list\n// eslint-disable-next-line func-names\nlist.i=function(modules,mediaQuery,dedupe){if(typeof modules==='string'){// eslint-disable-next-line no-param-reassign\nmodules=[[null,modules,'']];}var alreadyImportedModules={};if(dedupe){for(var i=0;i<this.length;i++){// eslint-disable-next-line prefer-destructuring\nvar id=this[i][0];if(id!=null){alreadyImportedModules[id]=true;}}}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);if(dedupe&&alreadyImportedModules[item[0]]){// eslint-disable-next-line no-continue\ncontinue;}if(mediaQuery){if(!item[2]){item[2]=mediaQuery;}else{item[2]=\"\".concat(mediaQuery,\" and \").concat(item[2]);}}list.push(item);}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';// eslint-disable-next-line prefer-destructuring\nvar cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return\"/*# sourceURL=\".concat(cssMapping.sourceRoot||'').concat(source,\" */\");});return[content].concat(sourceURLs).concat([sourceMapping]).join('\\n');}return[content].join('\\n');}// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap){// eslint-disable-next-line no-undef\nvar base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data=\"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);return\"/*# \".concat(data,\" */\");}\n\n//# sourceURL=webpack://AudioTrackSelector/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AudioTrackSelector; });\n/* harmony import */ var clappr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clappr */ \"clappr\");\n/* harmony import */ var clappr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clappr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_audio_track_selector_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/audio-track-selector.html */ \"./src/public/audio-track-selector.html\");\n/* harmony import */ var _public_audio_track_selector_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_audio_track_selector_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/style.scss */ \"./src/public/style.scss\");\n/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_style_scss__WEBPACK_IMPORTED_MODULE_2__);\nclass AudioTrackSelector extends clappr__WEBPACK_IMPORTED_MODULE_0__[\"UICorePlugin\"]{static get version(){return VERSION;}get name(){return'audio_track_selector';}get template(){return Object(clappr__WEBPACK_IMPORTED_MODULE_0__[\"template\"])(_public_audio_track_selector_html__WEBPACK_IMPORTED_MODULE_1___default.a);}get attributes(){return{'class':this.name,'data-audio-track-selector':''};}get events(){return{'click [data-audio-track-selector-lang]':'handleLanguageSelect','click [data-audio-track-selector-button]':'handleAudioTrackSelectorClick'};}get container(){return this.core.activeContainer?this.core.activeContainer:this.core.mediaControl.container;}get playback(){return this.core.activePlayback?this.core.activePlayback:this.core.getCurrentPlayback();}bindEvents(){if(clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].CORE_ACTIVE_CONTAINER_CHANGED)this.listenTo(this.core,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].CORE_ACTIVE_CONTAINER_CHANGED,this.reload);else this.listenTo(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_CONTAINERCHANGED,this.reload);this.listenTo(this.core,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].CORE_READY,this.bindPlaybackEvents);this.listenTo(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_RENDERED,this.render);this.listenTo(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_HIDE,this._hideContextMenu);}bindPlaybackEvents(){this.listenTo(this.playback,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_LEVELS_AVAILABLE,this._handleLevels);this.listenTo(this.playback,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_BITRATE,this._handleAdaptation);this.listenTo(this.playback,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_PLAY,this._handlePlay);}reload(){this.stopListening();this.bindEvents();this.bindPlaybackEvents();}shouldRender(){if(!this.container)return false;if(!this.playback)return false;// Only care if we have at least 2 languages to choose from\nvar hasChoice=!!(this.languages&&this.languages.size>1);return hasChoice;}render(){if(this.shouldRender()){var style=clappr__WEBPACK_IMPORTED_MODULE_0__[\"Styler\"].getStyleFor(_public_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a,{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({'title':this._getTitle(),'languages':this.languages}));this.$el.append(style);this.core.mediaControl.$('.media-control-right-panel').append(this.el);this._highlightCurrentElement();}return this;}_setLanguage(language){console.log(\"setLanguage\",language);// custom voc dash-shaka-playback\nif(this.playback.selectAudioLanguage){this.nextLanguage=language;this._startTrackSwitch();this.playback.selectAudioLanguage(language);// hlsjs playback\n}else if(this.playback._hls){// hlsjs may have multiple audiotracks with the same language\n// this will just switch to the first one\nconst track=this.playback._hls.audioTracks.find(track=>track.lang==language);if(!track)return;this.playback._hls.audioTrack=track.id;this.activeLanguage=language;this._highlightCurrentElement();}}_fillLanguages(){// custom voc dash-shaka-playback\nif(this.playback.audioLanguages){this.languages=new Set(this.playback.audioLanguages);// hlsjs playback\n}else if(this.playback._hls){const audioTracks=this.playback._hls.audioTracks;const trackId=this.playback._hls.audioTrack;const current=audioTracks.find(track=>track.id==trackId);this.languages=new Set(audioTracks.map(track=>track.lang));if(current){this.activeLanguage=current.lang;}}this.render();}handleLanguageSelect(event){event.preventDefault();event.stopPropagation();const selected=event.target.dataset.audioTrackSelectorLang;if(this.activeLanguage==selected)return false;this._setLanguage(selected);this._toggleContextMenu();return false;}// Handles adaptation event, currently only from shaka-playback\n_handleAdaptation(variant){if(variant.language){this.activeLanguage=variant.language;this._highlightCurrentElement();if(variant.language==this.nextLanguage){this._stopTrackSwitch();}}}// shaka-playback knows languages on level event\n_handleLevels(){this._fillLanguages();}// hlsjs-playback only knows languages on play\n_handlePlay(){if(this.playback._hls){this._fillLanguages();}}handleAudioTrackSelectorClick(event){this._toggleContextMenu();}_toggleContextMenu(){this.$('.audio_track_selector ul').toggle();}_hideContextMenu(){this.$('.audio_track_selector ul').hide();}_getLanguageElement(language=null){if(language)return this.$('.audio_track_selector a[data-audio-track-selector-lang=\"'+language+'\"]');else return this.$('.audio_track_selector a');}_getButtonElement(){return this.$('.audio_track_selector button');}_getTitle(){return(this.core.options.levelSelectorConfig||{}).title;}_startTrackSwitch(){this._getButtonElement().addClass('changing');}_stopTrackSwitch(){this._getButtonElement().removeClass('changing');}_highlightCurrentElement(){if(!this.activeLanguage)return;this._getLanguageElement().removeClass('current');this._getLanguageElement(this.activeLanguage).addClass('current');this._getButtonElement().text(this.activeLanguage);}}\n\n//# sourceURL=webpack://AudioTrackSelector/./src/main.js?");

/***/ }),

/***/ "./src/public/audio-track-selector.html":
/*!**********************************************!*\
  !*** ./src/public/audio-track-selector.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<button data-audio-track-selector-button>\\n  Language\\n</button>\\n<ul>\\n  <% if (title) { %>\\n  <li data-title><%= title %></li>\\n  <% }; %>\\n  <% languages.forEach((language) => { %>\\n    <li><a href=\\\"#\\\" data-audio-track-selector-lang=\\\"<%= language %>\\\"><%= language %></a></li>\\n  <% }); %>\\n</ul>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://AudioTrackSelector/./src/public/audio-track-selector.html?");

/***/ }),

/***/ "./src/public/style.scss":
/*!*******************************!*\
  !*** ./src/public/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".audio_track_selector[data-audio-track-selector] {\\n  float: right;\\n  margin-top: 7px;\\n  position: relative; }\\n  .audio_track_selector[data-audio-track-selector] button {\\n    background-color: transparent;\\n    color: #fff;\\n    font-family: Roboto,\\\"Open Sans\\\",Arial,sans-serif;\\n    -webkit-font-smoothing: antialiased;\\n    border: none;\\n    font-size: 12px; }\\n    .audio_track_selector[data-audio-track-selector] button:hover {\\n      color: #c9c9c9; }\\n    .audio_track_selector[data-audio-track-selector] button.changing {\\n      -webkit-animation: pulse 0.5s infinite alternate; }\\n  .audio_track_selector[data-audio-track-selector] > ul {\\n    list-style-type: none;\\n    position: absolute;\\n    bottom: 25px;\\n    border: 1px solid black;\\n    display: none;\\n    background-color: #e6e6e6; }\\n  .audio_track_selector[data-audio-track-selector] li {\\n    font-size: 12px; }\\n    .audio_track_selector[data-audio-track-selector] li[data-title] {\\n      background-color: #c3c2c2;\\n      padding: 5px; }\\n    .audio_track_selector[data-audio-track-selector] li a {\\n      color: #444;\\n      padding: 2px 12px;\\n      display: block;\\n      text-decoration: none; }\\n      .audio_track_selector[data-audio-track-selector] li a:hover {\\n        background-color: #555;\\n        color: white; }\\n        .audio_track_selector[data-audio-track-selector] li a:hover a {\\n          color: white;\\n          text-decoration: none; }\\n    .audio_track_selector[data-audio-track-selector] li.current a {\\n      color: #f00; }\\n\\n@-webkit-keyframes pulse {\\n  0% {\\n    color: #fff; }\\n  50% {\\n    color: #ff0101; }\\n  100% {\\n    color: #B80000; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://AudioTrackSelector/./src/public/style.scss?");

/***/ }),

/***/ "clappr":
/*!******************************************************************************************!*\
  !*** external {"amd":"clappr","commonjs":"clappr","commonjs2":"clappr","root":"Clappr"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;\n\n//# sourceURL=webpack://AudioTrackSelector/external_%7B%22amd%22:%22clappr%22,%22commonjs%22:%22clappr%22,%22commonjs2%22:%22clappr%22,%22root%22:%22Clappr%22%7D?");

/***/ })

/******/ })["default"];
});