(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\joao1\\Desktop\\pokedex\\pages\\index.jsx";



async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2').then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Deu ruim');
  }).then(respostaEmObjeto => respostaEmObjeto.pokemon_entries);
  return {
    props: {
      pokemons
    }
  };
}
function Home(props) {
  const {
    pokemons
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: "Pok\xE9dex do Estagi\xE1rio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),
      children: pokemons.map(pokemon => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/pokemon/${pokemon.entry_number}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [pokemon.entry_number, "- ", pokemon.pokemon_species.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 20
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`,
                alt: "sprite"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 20
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 20
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, this)
      }, pokemon.entry_number, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "index_card__1nD_T",
	"title": "index_title__3W9b9"
};


/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0ZS8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly90ZXN0ZS8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Rlc3RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3Rlc3RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3Rlc3RlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0ZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vdGVzdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90ZXN0ZS9pZ25vcmVkfEM6XFxVc2Vyc1xcam9hbzFcXERlc2t0b3BcXHBva2VkZXhcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInBva2Vtb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsIm9rIiwianNvbiIsIkVycm9yIiwicmVzcG9zdGFFbU9iamV0byIsInBva2Vtb25fZW50cmllcyIsInByb3BzIiwiSG9tZSIsIlN0eWxlcyIsIm1hcCIsInBva2Vtb24iLCJlbnRyeV9udW1iZXIiLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sZUFBZUEsY0FBZixHQUFnQztBQUNuQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHFDQUFELENBQUwsQ0FDcEJDLElBRG9CLENBQ2RDLGdCQUFELElBQXNCO0FBQzFCLFFBQUlBLGdCQUFnQixDQUFDQyxFQUFyQixFQUF5QjtBQUN2QixhQUFPRCxnQkFBZ0IsQ0FBQ0UsSUFBakIsRUFBUDtBQUNEOztBQUNELFVBQU0sSUFBSUMsS0FBSixDQUFVLFVBQVYsQ0FBTjtBQUNELEdBTm9CLEVBT3BCSixJQVBvQixDQU9kSyxnQkFBRCxJQUFzQkEsZ0JBQWdCLENBQUNDLGVBUHhCLENBQXZCO0FBU0UsU0FBTTtBQUNKQyxTQUFLLEVBQUU7QUFDTFQ7QUFESztBQURILEdBQU47QUFNSDtBQUljLFNBQVNVLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUNsQyxRQUFNO0FBQUVUO0FBQUYsTUFBZVMsS0FBckI7QUFFQSxzQkFDRTtBQUFBLDRCQUVFO0FBQUssZUFBUyxFQUFFRSxpRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQU1FO0FBQUksZUFBUyxFQUFFQSxnRUFBZjtBQUFBLGdCQUNHWCxRQUFRLENBQUNZLEdBQVQsQ0FBY0MsT0FBRCxpQkFDWjtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdBLE9BQU8sQ0FBQ0MsWUFBYSxFQUE3QztBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBQSx5QkFDQ0QsT0FBTyxDQUFDQyxZQURULFFBRUdELE9BQU8sQ0FBQ0UsZUFBUixDQUF3QkMsSUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBS0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSCxlQU1HO0FBQUEscUNBQ0E7QUFBSyxtQkFBRyxFQUFLLDRFQUEyRUgsT0FBTyxDQUFDQyxZQUFhLE1BQTdHO0FBQW9ILG1CQUFHLEVBQUc7QUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVELE9BQU8sQ0FBQ0MsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJELEM7Ozs7Ozs7Ozs7QUN2REg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yJylcclxuICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RldSBydWltJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb3N0YUVtT2JqZXRvKSA9PiByZXNwb3N0YUVtT2JqZXRvLnBva2Vtb25fZW50cmllcyk7XHJcbiAgICBcclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBwb2tlbW9uc1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgUG9rw6lkZXggZG8gRXN0YWdpw6FyaW9cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtTdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICB7cG9rZW1vbnMubWFwKChwb2tlbW9uICkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgIGtleT17cG9rZW1vbi5lbnRyeV9udW1iZXJ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9rZW1vbi8ke3Bva2Vtb24uZW50cnlfbnVtYmVyfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLmVudHJ5X251bWJlcn0gIFxyXG4gICAgICAgICAgICAgICAgICAtIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgPHA+IFxyXG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmMgPSB7YGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8ke3Bva2Vtb24uZW50cnlfbnVtYmVyfS5wbmdgfSBhbHQgPSBcInNwcml0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJpbmRleF9jYXJkX18xbkRfVFwiLFxuXHRcInRpdGxlXCI6IFwiaW5kZXhfdGl0bGVfXzNXOWI5XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==