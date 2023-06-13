"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/preview-content/PreviewFullImage.tsx":
/*!*********************************************************!*\
  !*** ./components/preview-content/PreviewFullImage.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _PreviewContentImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewContentImage */ \"./components/preview-content/PreviewContentImage.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useImageLoaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useImageLoaded */ \"./hooks/useImageLoaded.ts\");\n/* harmony import */ var _styles_PreviewContentShared_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/PreviewContentShared.module.less */ \"./styles/PreviewContentShared.module.less\");\n/* harmony import */ var _styles_PreviewContentShared_module_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PreviewContentShared_module_less__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _PreviewContentDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewContentDate */ \"./components/preview-content/PreviewContentDate.tsx\");\n/* harmony import */ var _styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/PreviewFullImage.module.less */ \"./styles/PreviewFullImage.module.less\");\n/* harmony import */ var _styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PreviewFullImage = (param)=>{\n    let { subsectionContent , colourScheme  } = param;\n    _s();\n    const [ref, loaded, onLoad] = (0,_hooks_useImageLoaded__WEBPACK_IMPORTED_MODULE_3__.useImageLoaded)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (!subsectionContent) {\n        return null;\n    }\n    const { previewImage , url , title  } = subsectionContent;\n    const { tertiary  } = colourScheme;\n    const onNavigate = ()=>{\n        return router.push(\"/projects/\".concat(url === null || url === void 0 ? void 0 : url.id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        container: true,\n        className: (_styles_PreviewContentShared_module_less__WEBPACK_IMPORTED_MODULE_6___default().previewImageContent__container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewContentImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                loaded: loaded,\n                fadeLeft: true,\n                ref: ref,\n                onLoad: onLoad,\n                previewImageURL: (previewImage === null || previewImage === void 0 ? void 0 : previewImage.url) || \"\",\n                className: \"preview-fill-image__background\",\n                delay: 700,\n                duration: 800,\n                width: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/I518976/Desktop/shanegallagherphotography/components/preview-content/PreviewFullImage.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7___default().previewFullImage__textContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7___default().previewFullImageText__subTextContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewContentDate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7___default().previewFullImageText),\n                            date: \"With Lucy Guo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/I518976/Desktop/shanegallagherphotography/components/preview-content/PreviewFullImage.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/I518976/Desktop/shanegallagherphotography/components/preview-content/PreviewFullImage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewContentDate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        date: title,\n                        className: (_styles_PreviewFullImage_module_less__WEBPACK_IMPORTED_MODULE_7___default().previewFullImage__mainText)\n                    }, void 0, false, {\n                        fileName: \"/Users/I518976/Desktop/shanegallagherphotography/components/preview-content/PreviewFullImage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/I518976/Desktop/shanegallagherphotography/components/preview-content/PreviewFullImage.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/I518976/Desktop/shanegallagherphotography/components/preview-content/PreviewFullImage.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PreviewFullImage, \"ACocKTNj0hdwTRthiFaBSEBTOT4=\", false, function() {\n    return [\n        _hooks_useImageLoaded__WEBPACK_IMPORTED_MODULE_3__.useImageLoaded,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PreviewFullImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreviewFullImage);\nvar _c;\n$RefreshReg$(_c, \"PreviewFullImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ByZXZpZXctY29udGVudC9QcmV2aWV3RnVsbEltYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNvQztBQUNtQjtBQUNoQjtBQUNnQjtBQUdpQjtBQUNuQjtBQUNTO0FBTTlELE1BQU1PLG1CQUFvRDtRQUFDLEVBQ3ZEQyxrQkFBaUIsRUFDakJDLGFBQVksRUFDZjs7SUFDRyxNQUFNLENBQUNDLEtBQUtDLFFBQVFDLE9BQU8sR0FBR1QscUVBQWNBO0lBQzVDLE1BQU1VLFNBQVNYLHNEQUFTQTtJQUV4QixJQUFJLENBQUNNLG1CQUFtQjtRQUNwQixPQUFPO0lBQ1g7SUFDQSxNQUFNLEVBQUVNLGFBQVksRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUUsR0FBR1I7SUFDckMsTUFBTSxFQUFFUyxTQUFRLEVBQUUsR0FBR1I7SUFDckIsTUFBTVMsYUFBYTtRQUFNTCxPQUFBQSxPQUFPTSxLQUFLLGFBQXFCLE9BQVJKLGdCQUFBQSxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBS0s7O0lBRXZELHFCQUNJLDhEQUFDcEIscURBQUlBO1FBQUNxQixTQUFTO1FBQUNDLFdBQVdsQixnSEFBMkNtQjs7MEJBQ2xFLDhEQUFDdEIsNERBQW1CQTtnQkFDaEJVLFFBQVFBO2dCQUNSYSxRQUFRO2dCQUNSZCxLQUFLQTtnQkFDTEUsUUFBUUE7Z0JBQ1JhLGlCQUFpQlgsQ0FBQUEseUJBQUFBLDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFjQyxHQUFFLEtBQUs7Z0JBQ3RDTyxXQUFVO2dCQUNWSSxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWQyxPQUFNOzs7Ozs7MEJBRVYsOERBQUNDO2dCQUFJUCxXQUFXaEIsNkdBQXNDd0I7O2tDQUNsRCw4REFBQ0Q7d0JBQUlQLFdBQVdoQixvSEFBNkN5QjtrQ0FDekQsNEVBQUMxQiwyREFBa0JBOzRCQUNmaUIsV0FBV2hCLGtHQUEyQjBCOzRCQUN0Q0MsTUFBTTs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUM1QiwyREFBa0JBO3dCQUNmNEIsTUFBTWpCO3dCQUNOTSxXQUFXaEIsd0dBQWlDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRTtHQXpDTTNCOztRQUk0QkosaUVBQWNBO1FBQzdCRCxrREFBU0E7OztLQUx0Qks7QUEyQ04sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ByZXZpZXctY29udGVudC9QcmV2aWV3RnVsbEltYWdlLnRzeD80MzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1heWJlIH0gZnJvbSAnZ3JhcGhxbC9qc3V0aWxzL01heWJlJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgUHJldmlld0NvbnRlbnRJbWFnZSBmcm9tICcuL1ByZXZpZXdDb250ZW50SW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUltYWdlTG9hZGVkIH0gZnJvbSAnQC9ob29rcy91c2VJbWFnZUxvYWRlZCdcbmltcG9ydCB7IFN1YnNlY3Rpb25QcmV2aWV3LCBDb2xvdXIgfSBmcm9tICdAL3R5cGVzL2dyYXBocWwnXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnXG5pbXBvcnQgY29tbW9uU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9QcmV2aWV3Q29udGVudFNoYXJlZC5tb2R1bGUubGVzcydcbmltcG9ydCBQcmV2aWV3Q29udGVudERhdGUgZnJvbSAnLi9QcmV2aWV3Q29udGVudERhdGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9QcmV2aWV3RnVsbEltYWdlLm1vZHVsZS5sZXNzJ1xuXG5pbnRlcmZhY2UgUHJldmlld0Z1bGxJbWFnZVByb3BzIHtcbiAgICBzdWJzZWN0aW9uQ29udGVudDogTWF5YmU8U3Vic2VjdGlvblByZXZpZXc+IHwgdW5kZWZpbmVkXG4gICAgY29sb3VyU2NoZW1lOiBDb2xvdXJcbn1cbmNvbnN0IFByZXZpZXdGdWxsSW1hZ2U6IFJlYWN0LkZDPFByZXZpZXdGdWxsSW1hZ2VQcm9wcz4gPSAoe1xuICAgIHN1YnNlY3Rpb25Db250ZW50LFxuICAgIGNvbG91clNjaGVtZSxcbn0pID0+IHtcbiAgICBjb25zdCBbcmVmLCBsb2FkZWQsIG9uTG9hZF0gPSB1c2VJbWFnZUxvYWRlZCgpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGlmICghc3Vic2VjdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBwcmV2aWV3SW1hZ2UsIHVybCwgdGl0bGUgfSA9IHN1YnNlY3Rpb25Db250ZW50XG4gICAgY29uc3QgeyB0ZXJ0aWFyeSB9ID0gY29sb3VyU2NoZW1lXG4gICAgY29uc3Qgb25OYXZpZ2F0ZSA9ICgpID0+IHJvdXRlci5wdXNoKGAvcHJvamVjdHMvJHt1cmw/LmlkfWApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjb21tb25TdHlsZXMucHJldmlld0ltYWdlQ29udGVudF9fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGVudEltYWdlXG4gICAgICAgICAgICAgICAgbG9hZGVkPXtsb2FkZWR9XG4gICAgICAgICAgICAgICAgZmFkZUxlZnRcbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgICAgICAgICBwcmV2aWV3SW1hZ2VVUkw9e3ByZXZpZXdJbWFnZT8udXJsIHx8ICcnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctZmlsbC1pbWFnZV9fYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgZGVsYXk9ezcwMH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17ODAwfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3RnVsbEltYWdlX190ZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdGdWxsSW1hZ2VUZXh0X19zdWJUZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFByZXZpZXdDb250ZW50RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJldmlld0Z1bGxJbWFnZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXsnV2l0aCBMdWN5IEd1byd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdDb250ZW50RGF0ZVxuICAgICAgICAgICAgICAgICAgICBkYXRlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJldmlld0Z1bGxJbWFnZV9fbWFpblRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3RnVsbEltYWdlXG4iXSwibmFtZXMiOlsiR3JpZCIsIlByZXZpZXdDb250ZW50SW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VJbWFnZUxvYWRlZCIsImNvbW1vblN0eWxlcyIsIlByZXZpZXdDb250ZW50RGF0ZSIsInN0eWxlcyIsIlByZXZpZXdGdWxsSW1hZ2UiLCJzdWJzZWN0aW9uQ29udGVudCIsImNvbG91clNjaGVtZSIsInJlZiIsImxvYWRlZCIsIm9uTG9hZCIsInJvdXRlciIsInByZXZpZXdJbWFnZSIsInVybCIsInRpdGxlIiwidGVydGlhcnkiLCJvbk5hdmlnYXRlIiwicHVzaCIsImlkIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIiwicHJldmlld0ltYWdlQ29udGVudF9fY29udGFpbmVyIiwiZmFkZUxlZnQiLCJwcmV2aWV3SW1hZ2VVUkwiLCJkZWxheSIsImR1cmF0aW9uIiwid2lkdGgiLCJkaXYiLCJwcmV2aWV3RnVsbEltYWdlX190ZXh0Q29udGFpbmVyIiwicHJldmlld0Z1bGxJbWFnZVRleHRfX3N1YlRleHRDb250YWluZXIiLCJwcmV2aWV3RnVsbEltYWdlVGV4dCIsImRhdGUiLCJwcmV2aWV3RnVsbEltYWdlX19tYWluVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/preview-content/PreviewFullImage.tsx\n"));

/***/ })

});