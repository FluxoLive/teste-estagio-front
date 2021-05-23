(function() {
var exports = {};
exports.id = "pages/pokemon/[id]";
exports.ids = ["pages/pokemon/[id]"];
exports.modules = {

/***/ "./pages/pokemon/[id].jsx":
/*!********************************!*\
  !*** ./pages/pokemon/[id].jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pokemon; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _id_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id.module.scss */ "./pages/pokemon/id.module.scss");
/* harmony import */ var _id_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_id_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\joao1\\Desktop\\pokedex\\pages\\pokemon\\[id].jsx";


function Pokemon({
  pokemon,
  id
}) {
  console.log();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgrd),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardDex),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["N\xFAmero: ", id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), "Nome: ", pokemon.species.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Tipo: ", pokemon.types.map(elemento => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["espaço"]),
              children: elemento.type.name
            }, elemento.slot, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Habilidades: ", pokemon.abilities.map(elemento => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["espaço"]),
              children: elemento.ability.name
            }, elemento.slot, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), "Altura: ", pokemon.height, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Peso: ", pokemon.weight]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Stats:", pokemon.stats.map(elemento => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [elemento.stat.name, ":", elemento.base_stat]
            }, elemento.slot, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: pokemon.sprites.front_default,
          alt: "Imagem de um Pokemon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
async function getServerSideProps({
  params
}) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Deu ruim');
  }).then(respostaEmObjeto => respostaEmObjeto);
  return {
    props: {
      pokemon,
      id: params.id
    }
  };
}

/***/ }),

/***/ "./pages/pokemon/id.module.scss":
/*!**************************************!*\
  !*** ./pages/pokemon/id.module.scss ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"espaço": "id_espa_o__3vfyL",
	"cardDex": "id_cardDex__1hKQR",
	"bgrd": "id_bgrd__2P3Su"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[id].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0ZS8uL3BhZ2VzL3Bva2Vtb24vW2lkXS5qc3giLCJ3ZWJwYWNrOi8vdGVzdGUvLi9wYWdlcy9wb2tlbW9uL2lkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Rlc3RlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwic3BlY2llcyIsIm5hbWUiLCJ0eXBlcyIsIm1hcCIsImVsZW1lbnRvIiwidHlwZSIsInNsb3QiLCJhYmlsaXRpZXMiLCJhYmlsaXR5IiwiaGVpZ2h0Iiwid2VpZ2h0Iiwic3RhdHMiLCJzdGF0IiwiYmFzZV9zdGF0Iiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2VydmVyIiwib2siLCJqc29uIiwiRXJyb3IiLCJyZXNwb3N0YUVtT2JqZXRvIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBQ0MsU0FBRDtBQUFVQztBQUFWLENBQWpCLEVBQStCO0FBQzFDQyxTQUFPLENBQUNDLEdBQVI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFJQyw2REFBbEI7QUFBQSw2QkFFSTtBQUFLLGlCQUFTLEVBQUlBLGdFQUFsQjtBQUFBLGdDQUNJO0FBQUEsb0NBQ2FILEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLFlBSWVELE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsSUFKL0IsZUFLSTtBQUFBLCtCQUNXTixPQUFPLENBQUNPLEtBQVIsQ0FBY0MsR0FBZCxDQUFrQkMsUUFBUSxJQUFJO0FBQ2pDLGdDQUNBO0FBQU0sdUJBQVMsRUFBRUwsa0VBQWpCO0FBQUEsd0JBQ0tLLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSjtBQURuQixlQUFxQ0csUUFBUSxDQUFDRSxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBO0FBSUYsV0FMSyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQWFJO0FBQUEsc0NBQ2NYLE9BQU8sQ0FBQ1ksU0FBUixDQUFrQkosR0FBbEIsQ0FBc0JDLFFBQVEsSUFBSTtBQUN4QyxnQ0FDQTtBQUFNLHVCQUFTLEVBQUVMLGtFQUFqQjtBQUFBLHdCQUNLSyxRQUFRLENBQUNJLE9BQVQsQ0FBaUJQO0FBRHRCLGVBQXFDRyxRQUFRLENBQUNFLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREE7QUFJRixXQUxRLENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGNBc0JhWCxPQUFPLENBQUNjLE1BdEJyQixlQXdCSTtBQUFBLCtCQUNXZCxPQUFPLENBQUNlLE1BRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkosZUE0Qkk7QUFBQSwrQkFFS2YsT0FBTyxDQUFDZ0IsS0FBUixDQUFjUixHQUFkLENBQWtCQyxRQUFRLElBQUk7QUFDM0IsZ0NBQ0E7QUFBQSx5QkFDS0EsUUFBUSxDQUFDUSxJQUFULENBQWNYLElBRG5CLE9BRUtHLFFBQVEsQ0FBQ1MsU0FGZDtBQUFBLGVBQVNULFFBQVEsQ0FBQ0UsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQTtBQUtGLFdBTkQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJKLGVBdUNJO0FBQUssYUFBRyxFQUFFWCxPQUFPLENBQUNtQixPQUFSLENBQWdCQyxhQUExQjtBQUF5QyxhQUFHLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDtBQUVNLGVBQWVDLGtCQUFmLENBQWtDO0FBQUNDO0FBQUQsQ0FBbEMsRUFBMkM7QUFDOUMsUUFBTXRCLE9BQU8sR0FBRyxNQUFNdUIsS0FBSyxDQUFFLHFDQUFvQ0QsTUFBTSxDQUFDckIsRUFBRyxFQUFoRCxDQUFMLENBQ3JCdUIsSUFEcUIsQ0FDZkMsZ0JBQUQsSUFBb0I7QUFDdEIsUUFBR0EsZ0JBQWdCLENBQUNDLEVBQXBCLEVBQXVCO0FBQ3ZCLGFBQU9ELGdCQUFnQixDQUFDRSxJQUFqQixFQUFQO0FBQ0g7O0FBQ0QsVUFBTSxJQUFJQyxLQUFKLENBQVUsVUFBVixDQUFOO0FBQ0MsR0FOcUIsRUFPckJKLElBUHFCLENBT2ZLLGdCQUFELElBQW9CQSxnQkFQSixDQUF0QjtBQVNBLFNBQU07QUFDRkMsU0FBSyxFQUFDO0FBQ0Y5QixhQURFO0FBRUZDLFFBQUUsRUFBRXFCLE1BQU0sQ0FBQ3JCO0FBRlQ7QUFESixHQUFOO0FBTUgsQzs7Ozs7Ozs7OztBQzVFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Bva2Vtb24vW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pZC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHtwb2tlbW9uLCBpZH0pe1xyXG4gICAgY29uc29sZS5sb2coKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmJncmR9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5jYXJkRGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTsO6bWVybzoge2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9tZToge3Bva2Vtb24uc3BlY2llcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXBvOiB7cG9rZW1vbi50eXBlcy5tYXAoZWxlbWVudG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVzcGHDp299IGtleT17ZWxlbWVudG8uc2xvdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRvLnR5cGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBIYWJpbGlkYWRlczoge3Bva2Vtb24uYWJpbGl0aWVzLm1hcChlbGVtZW50byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXNwYcOnb30ga2V5PXtlbGVtZW50by5zbG90fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudG8uYWJpbGl0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEFsdHVyYToge3Bva2Vtb24uaGVpZ2h0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGVzbzoge3Bva2Vtb24ud2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5zdGF0cy5tYXAoZWxlbWVudG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICBrZXk9e2VsZW1lbnRvLnNsb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50by5zdGF0Lm5hbWV9OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50by5iYXNlX3N0YXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PVwiSW1hZ2VtIGRlIHVtIFBva2Vtb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KXtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cGFyYW1zLmlkfWApXHJcbiAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcik9PntcclxuICAgICAgICBpZihyZXNwb3N0YURvU2VydmVyLm9rKXtcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7ICAgXHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RldSBydWltJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pPT5yZXNwb3N0YUVtT2JqZXRvKTtcclxuICAgIFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgcG9rZW1vbixcclxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5pZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVzcGHDp29cIjogXCJpZF9lc3BhX29fXzN2ZnlMXCIsXG5cdFwiY2FyZERleFwiOiBcImlkX2NhcmREZXhfXzFoS1FSXCIsXG5cdFwiYmdyZFwiOiBcImlkX2JncmRfXzJQM1N1XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9