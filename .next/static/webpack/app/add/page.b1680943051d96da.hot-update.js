"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add/page",{

/***/ "(app-pages-browser)/./src/components/user-action.tsx":
/*!****************************************!*\
  !*** ./src/components/user-action.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAdd: () => (/* binding */ handleAdd)\n/* harmony export */ });\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/api */ \"(app-pages-browser)/./src/lib/api.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\n\nconst handleAdd = (prev, data)=>{\n    if (!data.get(\"name\") || !data.get(\"surname\") || !data.get(\"username\") || !data.get(\"salary\")) {\n        return {\n            message: \"please fill all the fields\"\n        };\n    }\n    const salary = data.get(\"salary\");\n    if (isNaN(+salary)) {\n        return {\n            message: \"please fill the number\"\n        };\n    }\n    const username = (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__.getUserByUsername)(user.username);\n    if (username) {\n        return {\n            message: \"this username is busy\"\n        };\n    }\n    const user = {\n        name: data.get(\"name\"),\n        surname: data.get(\"surname\"),\n        username: data.get(\"username\"),\n        salary: +data.get(\"salary\")\n    };\n    (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__.addUser)(user);\n    (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(\"/\");\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VzZXItYWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDc0Q7QUFFWjtBQUVuQyxNQUFNRyxZQUFZLENBQUNDLE1BQWVDO0lBQ3JDLElBQUksQ0FBQ0EsS0FBS0MsR0FBRyxDQUFDLFdBQVcsQ0FBQ0QsS0FBS0MsR0FBRyxDQUFDLGNBQWMsQ0FBQ0QsS0FBS0MsR0FBRyxDQUFDLGVBQWUsQ0FBQ0QsS0FBS0MsR0FBRyxDQUFDLFdBQVc7UUFDM0YsT0FBTztZQUNIQyxTQUFTO1FBQ2I7SUFFSjtJQUNBLE1BQU1DLFNBQVNILEtBQUtDLEdBQUcsQ0FBQztJQUN4QixJQUFJRyxNQUFNLENBQUNELFNBQVM7UUFDaEIsT0FBTztZQUNIRCxTQUFTO1FBQ2I7SUFDSjtJQUFDLE1BQU1HLFdBQVNULDJEQUFpQkEsQ0FBQ1UsS0FBS0QsUUFBUTtJQUMvQyxJQUFHQSxVQUFTO1FBQ1IsT0FBTTtZQUNGSCxTQUFRO1FBQ1o7SUFDSjtJQUVBLE1BQU1JLE9BQWtCO1FBQ3BCQyxNQUFNUCxLQUFLQyxHQUFHLENBQUM7UUFDZk8sU0FBU1IsS0FBS0MsR0FBRyxDQUFDO1FBQ2xCSSxVQUFVTCxLQUFLQyxHQUFHLENBQUM7UUFDbkJFLFFBQVEsQ0FBRUgsS0FBS0MsR0FBRyxDQUFDO0lBQ3ZCO0lBR0FOLGlEQUFPQSxDQUFDVztJQUNSVCx5REFBUUEsQ0FBQztBQUNiLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdXNlci1hY3Rpb24udHN4PzYyZWIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGFkZFVzZXIsIGdldFVzZXJCeVVzZXJuYW1lIH0gZnJvbSBcIkAvbGliL2FwaVwiXHJcbmltcG9ydCB7IElucHV0VXNlciB9IGZyb20gXCJAL2xpYi90eXBlc1wiXHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkID0gKHByZXY6IHVua25vd24sIGRhdGE6IEZvcm1EYXRhKSA9PiB7XHJcbiAgICBpZiAoIWRhdGEuZ2V0KFwibmFtZVwiKSB8fCAhZGF0YS5nZXQoXCJzdXJuYW1lXCIpIHx8ICFkYXRhLmdldChcInVzZXJuYW1lXCIpIHx8ICFkYXRhLmdldChcInNhbGFyeVwiKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwicGxlYXNlIGZpbGwgYWxsIHRoZSBmaWVsZHNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYWxhcnkgPSBkYXRhLmdldChcInNhbGFyeVwiKSBhcyBzdHJpbmdcclxuICAgIGlmIChpc05hTigrc2FsYXJ5KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwicGxlYXNlIGZpbGwgdGhlIG51bWJlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfWNvbnN0IHVzZXJuYW1lPWdldFVzZXJCeVVzZXJuYW1lKHVzZXIudXNlcm5hbWUpXHJcbiAgICBpZih1c2VybmFtZSl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBtZXNzYWdlOlwidGhpcyB1c2VybmFtZSBpcyBidXN5XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlcjogSW5wdXRVc2VyID0ge1xyXG4gICAgICAgIG5hbWU6IGRhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgc3VybmFtZTogZGF0YS5nZXQoXCJzdXJuYW1lXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB1c2VybmFtZTogZGF0YS5nZXQoXCJ1c2VybmFtZVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgc2FsYXJ5OiArKGRhdGEuZ2V0KFwic2FsYXJ5XCIpIGFzIHN0cmluZylcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGFkZFVzZXIodXNlcilcclxuICAgIHJlZGlyZWN0KFwiL1wiKVxyXG59Il0sIm5hbWVzIjpbImFkZFVzZXIiLCJnZXRVc2VyQnlVc2VybmFtZSIsInJlZGlyZWN0IiwiaGFuZGxlQWRkIiwicHJldiIsImRhdGEiLCJnZXQiLCJtZXNzYWdlIiwic2FsYXJ5IiwiaXNOYU4iLCJ1c2VybmFtZSIsInVzZXIiLCJuYW1lIiwic3VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/user-action.tsx\n"));

/***/ })

});