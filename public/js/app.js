/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".add_form");
  var token = form.dataset.token;
  var err_block = document.querySelector(".error_container");
  var url_block = document.querySelector(".info_block__url");
  var result_block = document.querySelector(".result_block");
  var old_block = document.querySelectorAll(".old");
  old_block.forEach(function (item) {
    console.log(item);
    var button = item.querySelector(".copy_block");
    var success = item.querySelector(".success_copy");
    button.addEventListener('click', function () {
      var url = button.dataset.url;
      navigator.clipboard.writeText(url).then(function () {
        document.querySelectorAll(".success_copy").forEach(function (item) {
          return item.style.display = 'none';
        });
        success.style.display = "block";
      });
    });
  });
  form.addEventListener("submit", function (e) {
    err_block.style.display = "none";
    e.preventDefault();
    var form_data = new FormData(form);
    var data = {
      url: form_data.get('url')
    };
    fetch("/api/add_url", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-CSRF-Token': token
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      err_block.inneeText = '';

      if (result.status !== 'success') {
        err_block.style.display = "block";
        err_block.insertAdjacentHTML('afterbegin', "<div class=\"error_container__mess\">\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(result.url[0], "</div>"));
      } else {
        var _short = result.data.short_url;
        var original = result.data.original_url;
        var host = result.data.host;
        url_block.innerText = '';
        url_block.insertAdjacentHTML('afterbegin', "\n                    <div class=\"info_block__url-block\">\n                        <label for=\"#info_value\">\u041A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430</label>\n                        <a class=\"info_block__url-block_value\" href=\"".concat(host, "/u/").concat(_short, "\"  target=\"_blank\" id=\"info_value\">").concat(host, "/u/").concat(_short, "</a>\n                    </div>\n                    <div class=\"info_block__url-block\">\n                        <label for=\"#original_value\">\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430</label>\n                        <a class=\"info_block__url-block_value\" href=\"").concat(original, "\"  target=\"_blank\" >").concat(original, "</a>\n                    </div>\n                    <div class=\"info_block__url-block\">\n                        <div class=\"success_copy\">\n                            \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E\n                        </div>\n                        <button id=\"short_copy\" data-url=\"").concat(host, "/u/").concat(_short, "\">\n                            \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C\n                        </button>\n                    </div>\n                "));
        result_block.style.display = "block";
        var copy = document.querySelector("#short_copy");
        var success = url_block.querySelector('.success_copy');
        copy.addEventListener("click", function () {
          navigator.clipboard.writeText("".concat(host, "/u/").concat(_short)).then(function () {
            document.querySelectorAll(".success_copy").forEach(function (item) {
              return item.style.display = 'none';
            });
            success.style.display = "block";
          });
        });
      }
    });

    function copy_url($url) {
      console.log('copy');
    }
  });
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;