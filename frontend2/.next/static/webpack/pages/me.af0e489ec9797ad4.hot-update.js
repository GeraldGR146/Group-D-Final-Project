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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProduct: function() { return /* binding */ createProduct; },\n/* harmony export */   deleteProduct: function() { return /* binding */ deleteProduct; },\n/* harmony export */   fetchProductsByStore: function() { return /* binding */ fetchProductsByStore; },\n/* harmony export */   fetchStores: function() { return /* binding */ fetchStores; },\n/* harmony export */   fetchUserProfile: function() { return /* binding */ fetchUserProfile; },\n/* harmony export */   handleSaveProduct: function() { return /* binding */ handleSaveProduct; },\n/* harmony export */   updateProduct: function() { return /* binding */ updateProduct; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar fetchUserProfile = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var access_token, data, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    access_token = sessionStorage.getItem(\"access_token\");\n                    if (!access_token) {\n                        throw new Error(\"Access token is missing\");\n                    }\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:5000/me\", {\n                            headers: {\n                                Authorization: \"Bearer \".concat(access_token)\n                            }\n                        })\n                    ];\n                case 1:\n                    data = _state.sent().data;\n                    return [\n                        2,\n                        data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching user profile:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchUserProfile() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchStores = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var access_token, storesResponse, stores, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    access_token = sessionStorage.getItem(\"access_token\");\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:5000/stores\", {\n                            headers: {\n                                Authorization: \"Bearer \".concat(access_token)\n                            }\n                        })\n                    ];\n                case 1:\n                    storesResponse = _state.sent();\n                    stores = storesResponse.data;\n                    stores.forEach(function(store) {\n                        if (store.store_id) {\n                            sessionStorage.setItem(\"store_id\", store.store_id); // Directly store the store_id as a string\n                        } else {\n                            console.error(\"Store ID is undefined for the following store:\", store);\n                        }\n                    });\n                    return [\n                        2,\n                        stores\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching stores:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchStores() {\n        return _ref.apply(this, arguments);\n    };\n}();\n// Function to fetch products by store_id\nvar fetchProductsByStore = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var store_id, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    // Retrieve the store_id directly from sessionStorage\n                    store_id = sessionStorage.getItem(\"store_id\");\n                    // Check if store_id exists\n                    if (!store_id) {\n                        throw new Error(\"Store ID not found in sessionStorage\");\n                    }\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:5000/stores/\".concat(store_id, \"/products\"))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Failed to fetch products for store:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchProductsByStore() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar handleSaveProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(product_id, updatedData) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://127.0.0.1:5000/products/\".concat(product_id), updatedData, {\n                            headers: {\n                                Authorization: \"Bearer \".concat(localStorage.getItem(\"access_token\"))\n                            }\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    console.log(\"Product updated successfully:\", response.data);\n                    return [\n                        2,\n                        response.data\n                    ]; // Return the updated product data if needed\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error updating product:\", error);\n                    throw error; // Throw the error so it can be caught by the calling component\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function handleSaveProduct(product_id, updatedData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar deleteProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(product_id) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://127.0.0.1:5000/products/\".concat(product_id), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(localStorage.getItem(\"access_token\"))\n                            }\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error deleting product:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function deleteProduct(product_id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar createProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(productData) {\n        var accessToken, store_id, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    accessToken = sessionStorage.getItem(\"access_token\");\n                    store_id = sessionStorage.getItem(\"store_id\");\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:5000/stores/\".concat(store_id, \"/products\"), productData, {\n                            headers: {\n                                Authorization: \"Bearer \".concat(accessToken),\n                                \"Content-Type\": \"application/json\"\n                            }\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 3:\n                    error = _state.sent();\n                    if (error.response && error.response.data) {\n                        throw new Error(error.response.data.errors || \"Failed to create product.\");\n                    } else {\n                        throw new Error(\"Failed to create product.\");\n                    }\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function createProduct(productData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar updateProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(payload) {\n        var token, productId, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    token = sessionStorage.getItem(\"access_token\"); // Retrieve the JWT from sessionStorage\n                    productId = sessionStorage.getItem(\"product_id\"); // Retrieve product ID from sessionStorage\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://127.0.0.1:5000/products/\".concat(productId), payload, {\n                            headers: {\n                                Authorization: \"Bearer \".concat(token),\n                                \"Content-Type\": \"multipart/form-data\"\n                            }\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 3:\n                    error = _state.sent();\n                    throw error;\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function updateProduct(payload) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYQztvQkFDVCxNQUFNQTs7Ozs7OztJQUVWO29CQW5CUzhCLGNBQXVCQzs7O0lBbUI5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzL1VzZXJTZXJ2aWNlLmpzeD9hNjc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyUHJvZmlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcblxyXG4gICAgICAgIGlmICghYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyB0b2tlbiBpcyBtaXNzaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9tZScsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgcHJvZmlsZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcclxuICAgICAgICBjb25zdCBzdG9yZXNSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL3N0b3JlcycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdG9yZXMgPSBzdG9yZXNSZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChzdG9yZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZS5zdG9yZV9pZCkgeyAgXHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzdG9yZV9pZCcsIHN0b3JlLnN0b3JlX2lkKTsgLy8gRGlyZWN0bHkgc3RvcmUgdGhlIHN0b3JlX2lkIGFzIGEgc3RyaW5nXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU3RvcmUgSUQgaXMgdW5kZWZpbmVkIGZvciB0aGUgZm9sbG93aW5nIHN0b3JlOlwiLCBzdG9yZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0b3JlcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHN0b3JlczpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggcHJvZHVjdHMgYnkgc3RvcmVfaWRcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNCeVN0b3JlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgc3RvcmVfaWQgZGlyZWN0bHkgZnJvbSBzZXNzaW9uU3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHN0b3JlX2lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVfaWQnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgc3RvcmVfaWQgZXhpc3RzXHJcbiAgICAgICAgaWYgKCFzdG9yZV9pZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdG9yZSBJRCBub3QgZm91bmQgaW4gc2Vzc2lvblN0b3JhZ2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2UgdGhlIHN0b3JlX2lkIHRvIGZldGNoIHByb2R1Y3RzXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zdG9yZXMvJHtzdG9yZV9pZH0vcHJvZHVjdHNgKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBwcm9kdWN0cyBmb3Igc3RvcmU6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVTYXZlUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0X2lkLCB1cGRhdGVkRGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL3Byb2R1Y3RzLyR7cHJvZHVjdF9pZH1gLCB1cGRhdGVkRGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyl9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHk6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7IC8vIFJldHVybiB0aGUgdXBkYXRlZCBwcm9kdWN0IGRhdGEgaWYgbmVlZGVkXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yOyAvLyBUaHJvdyB0aGUgZXJyb3Igc28gaXQgY2FuIGJlIGNhdWdodCBieSB0aGUgY2FsbGluZyBjb21wb25lbnRcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3RfaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm9kdWN0cy8ke3Byb2R1Y3RfaWR9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyl9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBhc3luYyAocHJvZHVjdERhdGEpID0+IHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICBjb25zdCBzdG9yZV9pZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3N0b3JlX2lkJyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zdG9yZXMvJHtzdG9yZV9pZH0vcHJvZHVjdHNgLCBwcm9kdWN0RGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyB8fCAnRmFpbGVkIHRvIGNyZWF0ZSBwcm9kdWN0LicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBwcm9kdWN0LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9kdWN0ID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpOyAvLyBSZXRyaWV2ZSB0aGUgSldUIGZyb20gc2Vzc2lvblN0b3JhZ2VcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0X2lkJyk7IC8vIFJldHJpZXZlIHByb2R1Y3QgSUQgZnJvbSBzZXNzaW9uU3RvcmFnZVxyXG4gICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChcclxuICAgICAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9OyJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoVXNlclByb2ZpbGUiLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJFcnJvciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImZldGNoU3RvcmVzIiwic3RvcmVzUmVzcG9uc2UiLCJzdG9yZXMiLCJmb3JFYWNoIiwic3RvcmUiLCJzdG9yZV9pZCIsInNldEl0ZW0iLCJmZXRjaFByb2R1Y3RzQnlTdG9yZSIsInJlc3BvbnNlIiwiaGFuZGxlU2F2ZVByb2R1Y3QiLCJwcm9kdWN0X2lkIiwidXBkYXRlZERhdGEiLCJwdXQiLCJsb2NhbFN0b3JhZ2UiLCJsb2ciLCJkZWxldGVQcm9kdWN0IiwiZGVsZXRlIiwiY3JlYXRlUHJvZHVjdCIsInByb2R1Y3REYXRhIiwiYWNjZXNzVG9rZW4iLCJwb3N0IiwiZXJyb3JzIiwidXBkYXRlUHJvZHVjdCIsInBheWxvYWQiLCJ0b2tlbiIsInByb2R1Y3RJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Services/UserService.jsx\n"));

/***/ })

});