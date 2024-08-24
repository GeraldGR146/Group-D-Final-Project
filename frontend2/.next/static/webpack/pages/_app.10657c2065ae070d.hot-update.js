"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.jsx":
/*!*******************************!*\
  !*** ./components/header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar/SearchBar */ \"./components/SearchBar/SearchBar.jsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Header = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), menuOpen = _useState[0], setMenuOpen = _useState[1];\n    var toggleMenu = function() {\n        setMenuOpen(!menuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto h-[60px] flex items-center justify-between px-4 lg:px-8 border-b border-gray-200 bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-4 lg:space-x-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assets/logo.png\",\n                                alt: \"Logo\",\n                                className: \"w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-lg lg:text-2xl font-bold text-gray-800\",\n                                children: \"Localnect\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                className: \"hidden lg:flex space-x-4 lg:space-x-6 text-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"hover:text-gray-800\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/products\",\n                                            className: \"hover:text-gray-800 flex items-center\",\n                                            children: [\n                                                \"Product \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-chevron-down ml-1 text-xs\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                                    lineNumber: 24,\n                                                    columnNumber: 41\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/shopping_cart\",\n                                        className: \"hover:text-gray-800\",\n                                        children: \"Shopping Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/me\",\n                                        className: \"hover:text-gray-800\",\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#\",\n                                        className: \"hover:text-gray-800\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-4 lg:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleMenu,\n                            className: \"text-gray-800 focus:outline-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas fa-bars text-2xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:flex items-center space-x-4 text-blue-600\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                className: \"hover:underline\",\n                                children: \"Login / Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#\",\n                                className: \"text-gray-500 hover:text-blue-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fas fa-search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#\",\n                                className: \"text-gray-500 hover:text-blue-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fas fa-shopping-cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#\",\n                                className: \"text-gray-500 hover:text-blue-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fas fa-heart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block lg:hidden px-4 py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this),\n            menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"lg:hidden bg-white border-t border-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-2 space-y-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"block text-gray-800 hover:bg-gray-100 rounded py-2\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/products\",\n                            className: \"block text-gray-800 hover:bg-gray-100 rounded py-2\",\n                            children: \"Product\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/shopping_cart\",\n                            className: \"block text-gray-800 hover:bg-gray-100 rounded py-2\",\n                            children: \"Shopping Cart\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/me\",\n                            className: \"block text-gray-800 hover:bg-gray-100 rounded py-2\",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\",\n                            className: \"block text-gray-800 hover:bg-gray-100 rounded py-2\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/register\",\n                            className: \"block text-gray-800 hover:bg-gray-100 rounded py-2\",\n                            children: \"Login / Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n                lineNumber: 65,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jon\\\\Documents\\\\RevoU\\\\Group-D-Final-Project-Presentasi\\\\frontend2\\\\components\\\\header.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanN4Pzk0NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyL1NlYXJjaEJhcic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIGgtWzYwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IGxnOnB4LTggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBsZzpzcGFjZS14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwidy04IGgtOCBsZzp3LTEwIGxnOmgtMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgbGc6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5Mb2NhbG5lY3Q8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggc3BhY2UteC00IGxnOnNwYWNlLXgtNiB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktODAwIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duIG1sLTEgdGV4dC14c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcHBpbmdfY2FydFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3BwaW5nIENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21lXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBsZzpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzIHRleHQtMnhsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgdGV4dC1ibHVlLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gLyBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ibHVlLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ibHVlLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bWVudU9wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gYmctd2hpdGUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BwaW5nX2NhcnRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcHBpbmcgQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIC8gUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiU2VhcmNoQmFyIiwiSGVhZGVyIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsIm5hdiIsImhyZWYiLCJpIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.jsx\n"));

/***/ })

});