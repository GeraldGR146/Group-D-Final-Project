"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/me",{

/***/ "./components/Services/UserService.jsx":
/*!*********************************************!*\
  !*** ./components/Services/UserService.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProduct: function() { return /* binding */ createProduct; },\n/* harmony export */   deleteProduct: function() { return /* binding */ deleteProduct; },\n/* harmony export */   fetchProductsByStore: function() { return /* binding */ fetchProductsByStore; },\n/* harmony export */   fetchStores: function() { return /* binding */ fetchStores; },\n/* harmony export */   fetchUserProfile: function() { return /* binding */ fetchUserProfile; },\n/* harmony export */   handleSaveProduct: function() { return /* binding */ handleSaveProduct; },\n/* harmony export */   updateProduct: function() { return /* binding */ updateProduct; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar fetchUserProfile = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var access_token, data, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    access_token = sessionStorage.getItem(\"access_token\");\n                    if (!access_token) {\n                        throw new Error(\"Access token is missing\");\n                    }\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:5000/me\", {\n                            headers: {\n                                Authorization: \"Bearer \".concat(access_token)\n                            }\n                        })\n                    ];\n                case 1:\n                    data = _state.sent().data;\n                    return [\n                        2,\n                        data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching user profile:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchUserProfile() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchStores = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var access_token, storesResponse, stores, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    access_token = sessionStorage.getItem(\"access_token\");\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:5000/stores\", {\n                            headers: {\n                                Authorization: \"Bearer \".concat(access_token)\n                            }\n                        })\n                    ];\n                case 1:\n                    storesResponse = _state.sent();\n                    stores = storesResponse.data;\n                    stores.forEach(function(store) {\n                        if (store.store_id) {\n                            sessionStorage.setItem(\"store_id\", store.store_id);\n                        } else {\n                            console.error(\"Store ID is undefined for the following store:\", store);\n                        }\n                    });\n                    return [\n                        2,\n                        stores\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching stores:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchStores() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchProductsByStore = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var store_id, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    store_id = sessionStorage.getItem(\"store_id\");\n                    if (!store_id) {\n                        throw new Error(\"Store ID not found in sessionStorage\");\n                    }\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:5000/stores/\".concat(store_id, \"/products\"))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Failed to fetch products for store:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchProductsByStore() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar handleSaveProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(product_id, updatedData) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://127.0.0.1:5000/products/\".concat(product_id), updatedData, {\n                            headers: {\n                                Authorization: \"Bearer \".concat(localStorage.getItem(\"access_token\"))\n                            }\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    console.log(\"Product updated successfully:\", response.data);\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error updating product:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function handleSaveProduct(product_id, updatedData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar deleteProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(productData) {\n        var storedProductId, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    storedProductId = sessionStorage.getItem(\"product_id\");\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        4,\n                        ,\n                        5\n                    ]);\n                    // Introduce a delay before the Axios request\n                    return [\n                        4,\n                        new Promise(function(resolve) {\n                            return setTimeout(resolve, 1000);\n                        })\n                    ];\n                case 2:\n                    _state.sent(); // 2000ms = 2 seconds\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://127.0.0.1:5000/products/\".concat(storedProductId), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(localStorage.getItem(\"access_token\"))\n                            }\n                        })\n                    ];\n                case 3:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 4:\n                    error = _state.sent();\n                    console.error(\"Error deleting product:\", error);\n                    throw error;\n                case 5:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function deleteProduct(productData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar createProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(productData) {\n        var accessToken, store_id, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    accessToken = sessionStorage.getItem(\"access_token\");\n                    store_id = sessionStorage.getItem(\"store_id\");\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:5000/stores/\".concat(store_id, \"/products\"), productData, {\n                            headers: {\n                                Authorization: \"Bearer \".concat(accessToken),\n                                \"Content-Type\": \"application/json\"\n                            }\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 3:\n                    error = _state.sent();\n                    if (error.response && error.response.data) {\n                        throw new Error(error.response.data.errors || \"Failed to create product.\");\n                    } else {\n                        throw new Error(\"Failed to create product.\");\n                    }\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function createProduct(productData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar updateProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(payload) {\n        var token, productId, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    token = sessionStorage.getItem(\"access_token\");\n                    productId = sessionStorage.getItem(\"product_id\");\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://127.0.0.1:5000/products/\".concat(productId), payload, {\n                            headers: {\n                                Authorization: \"Bearer \".concat(token),\n                                \"Content-Type\": \"multipart/form-data\"\n                            }\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 3:\n                    error = _state.sent();\n                    throw error;\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function updateProduct(payload) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBVWpCOzt3QkFBT0EsU0FBU2pCLElBQUk7OztvQkFDWEM7b0JBQ1QsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFuQlNrQyxjQUF1QkM7OztJQW1COUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJ2aWNlcy9Vc2VyU2VydmljZS5qc3g/YTY3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclByb2ZpbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG5cclxuICAgICAgICBpZiAoIWFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvbWUnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIHByb2ZpbGU6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN0b3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVzUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zdG9yZXMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcmVzID0gc3RvcmVzUmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgc3RvcmVzLmZvckVhY2goc3RvcmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RvcmUuc3RvcmVfaWQpIHsgIFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVfaWQnLCBzdG9yZS5zdG9yZV9pZCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlN0b3JlIElEIGlzIHVuZGVmaW5lZCBmb3IgdGhlIGZvbGxvd2luZyBzdG9yZTpcIiwgc3RvcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yZXM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzdG9yZXM6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzQnlTdG9yZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RvcmVfaWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzdG9yZV9pZCcpO1xyXG5cclxuICAgICAgICBpZiAoIXN0b3JlX2lkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0b3JlIElEIG5vdCBmb3VuZCBpbiBzZXNzaW9uU3RvcmFnZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvc3RvcmVzLyR7c3RvcmVfaWR9L3Byb2R1Y3RzYCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHMgZm9yIHN0b3JlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlU2F2ZVByb2R1Y3QgPSBhc3luYyAocHJvZHVjdF9pZCwgdXBkYXRlZERhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm9kdWN0cy8ke3Byb2R1Y3RfaWR9YCwgdXBkYXRlZERhdGEsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5OicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0RGF0YSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUHJvZHVjdElkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdF9pZCcpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gSW50cm9kdWNlIGEgZGVsYXkgYmVmb3JlIHRoZSBBeGlvcyByZXF1ZXN0XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpOyAvLyAyMDAwbXMgPSAyIHNlY29uZHNcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm9kdWN0cy8ke3N0b3JlZFByb2R1Y3RJZH1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBhc3luYyAocHJvZHVjdERhdGEpID0+IHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICBjb25zdCBzdG9yZV9pZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3N0b3JlX2lkJyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zdG9yZXMvJHtzdG9yZV9pZH0vcHJvZHVjdHNgLCBwcm9kdWN0RGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyB8fCAnRmFpbGVkIHRvIGNyZWF0ZSBwcm9kdWN0LicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBwcm9kdWN0LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9kdWN0ID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpOyBcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0X2lkJyk7IFxyXG4gICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChcclxuICAgICAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9OyJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoVXNlclByb2ZpbGUiLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJFcnJvciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImZldGNoU3RvcmVzIiwic3RvcmVzUmVzcG9uc2UiLCJzdG9yZXMiLCJmb3JFYWNoIiwic3RvcmUiLCJzdG9yZV9pZCIsInNldEl0ZW0iLCJmZXRjaFByb2R1Y3RzQnlTdG9yZSIsInJlc3BvbnNlIiwiaGFuZGxlU2F2ZVByb2R1Y3QiLCJwcm9kdWN0X2lkIiwidXBkYXRlZERhdGEiLCJwdXQiLCJsb2NhbFN0b3JhZ2UiLCJsb2ciLCJkZWxldGVQcm9kdWN0IiwicHJvZHVjdERhdGEiLCJzdG9yZWRQcm9kdWN0SWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxldGUiLCJjcmVhdGVQcm9kdWN0IiwiYWNjZXNzVG9rZW4iLCJwb3N0IiwiZXJyb3JzIiwidXBkYXRlUHJvZHVjdCIsInBheWxvYWQiLCJ0b2tlbiIsInByb2R1Y3RJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Services/UserService.jsx\n"));

/***/ })

});