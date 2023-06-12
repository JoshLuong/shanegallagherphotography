"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export link */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7812);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__);


const link = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
    uri: "https://graphql.contentful.com/content/v1/spaces/7quy4nqi53yl"
});
const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__.setContext)((_, { headers  })=>{
    return {
        headers: {
            ...headers,
            authorization: `Bearer PfEBSBXzKgGX1sCdl8yJojYOPZGCYHaCdRiC-ouRE0w`
        }
    };
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: authLink.concat(link),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ })

};
;