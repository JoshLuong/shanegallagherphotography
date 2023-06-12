(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3982:
/***/ ((module) => {

// Exports
module.exports = {
	"layoutContainer": "Layout_layoutContainer__CZpdZ",
	"childrenLayout": "Layout_childrenLayout__8KBDz"
};


/***/ }),

/***/ 5351:
/***/ ((module) => {

// Exports
module.exports = {
	"menuBar__menu": "MenuBar_menuBar__menu__DoLl2",
	"menuBar__link": "MenuBar_menuBar__link__6oq8l",
	"menuBar__container": "MenuBar_menuBar__container__B8zqF",
	"menuBar__menuContent": "MenuBar_menuBar__menuContent__sBg7k",
	"menuBar__hamburgerButton": "MenuBar_menuBar__hamburgerButton__8Xve4",
	"menuBar__hamburgerLines": "MenuBar_menuBar__hamburgerLines__TyKbw",
	"line2": "MenuBar_line2__aLggm",
	"line3": "MenuBar_line3__V_Cj9",
	"line": "MenuBar_line__fnfRd",
	"line1": "MenuBar_line1__Fe888",
	"menuBar__content": "MenuBar_menuBar__content__grdOa",
	"menuBar__contentContainer": "MenuBar_menuBar__contentContainer__EjN5F"
};


/***/ }),

/***/ 2976:
/***/ ((module) => {

// Exports
module.exports = {
	"menuBarContent__about": "MenuBarContent_menuBarContent__about__WMLiK",
	"menuBarContent__container": "MenuBarContent_menuBarContent__container___F83l",
	"menuBarContent__links": "MenuBarContent_menuBarContent__links__MRKBP",
	"menuBarContent__child-links": "MenuBarContent_menuBarContent__child-links__Qx1_B"
};


/***/ }),

/***/ 7384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/_app.tsx
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (App)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/MenuBar.module.less
var MenuBar_module = __webpack_require__(5351);
var MenuBar_module_default = /*#__PURE__*/__webpack_require__.n(MenuBar_module);
;// CONCATENATED MODULE: external "@mui/icons-material/Instagram"
const Instagram_namespaceObject = require("@mui/icons-material/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Email"
const Email_namespaceObject = require("@mui/icons-material/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
// EXTERNAL MODULE: ./styles/MenuBarContent.module.less
var MenuBarContent_module = __webpack_require__(2976);
var MenuBarContent_module_default = /*#__PURE__*/__webpack_require__.n(MenuBarContent_module);
;// CONCATENATED MODULE: external "@mui/material/Unstable_Grid2"
const Unstable_Grid2_namespaceObject = require("@mui/material/Unstable_Grid2");
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_namespaceObject);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(6762);
;// CONCATENATED MODULE: ./components/menu/MenuBarContent.tsx


 // Grid2 version 2

const MenuBarContent = ()=>{
    const getChildLinks = (subSectionContent)=>{
        return subSectionContent.map((child, index)=>{
            const comma = index < subSectionContent.length - 1 ? ", " : "";
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: (MenuBarContent_module_default()).menuBarContent__childLinks,
                children: [
                    child.title,
                    comma
                ]
            }, index);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Unstable_Grid2_default()), {
        xs: 12,
        container: true,
        height: "100%",
        className: (MenuBarContent_module_default()).menuBarContent__container,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Unstable_Grid2_default()), {
                xs: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_awesome_reveal_.Fade, {
                    duration: 900,
                    delay: 700
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Unstable_Grid2_default()), {
                xs: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                margin: "auto",
                className: (MenuBarContent_module_default()).menuBarContent__about,
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_awesome_reveal_.Fade, {
                    duration: 900,
                    delay: 700,
                    children: "About"
                })
            })
        ]
    });
};
/* harmony default export */ const menu_MenuBarContent = (MenuBarContent);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/menu/MenuBar.tsx







const MenuBar = ()=>{
    const [showMenu, setShowMenu] = (0,external_react_.useState)(false);
    const menuStyles = showMenu ? {
        width: "100%"
    } : {
        width: "0"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (MenuBar_module_default()).menuBar__menu,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (MenuBar_module_default()).menuBar__menuContent,
                style: {
                    ...menuStyles
                },
                children: showMenu && /*#__PURE__*/ jsx_runtime.jsx(menu_MenuBarContent, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (MenuBar_module_default()).menuBar__container,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (MenuBar_module_default()).menuBar__hamburgerLines,
                        onClick: ()=>setShowMenu(!showMenu),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Button, {
                            className: (MenuBar_module_default()).menuBar__hamburgerButton,
                            "aria-label": "Hamburger menu button",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: `${(MenuBar_module_default()).line} ${(MenuBar_module_default()).line1}`
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: `${(MenuBar_module_default()).line} ${(MenuBar_module_default()).line2}`
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: `${(MenuBar_module_default()).line} ${(MenuBar_module_default()).line3}`
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (MenuBar_module_default()).menuBar__contentContainer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (MenuBar_module_default()).menuBar__content,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Link, {
                                    "aria-label": "Open Instagram page",
                                    className: (MenuBar_module_default()).menuBar__link,
                                    href: "https://www.instagram.com/shanegallagher_/",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Instagram_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Link, {
                                    "aria-label": "Open E-mail",
                                    className: (MenuBar_module_default()).menuBar__link,
                                    href: "mailto:shanegallagherphotography@gmail.com",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Email_default()), {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const menu_MenuBar = (MenuBar);

// EXTERNAL MODULE: ./styles/Layout.module.less
var Layout_module = __webpack_require__(3982);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Loading.tsx

function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "LOADING!"
    });
}

;// CONCATENATED MODULE: ./components/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Layout_module_default()).layoutContainer,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Layout_module_default()).childrenLayout,
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_.Suspense, {
                    fallback: /*#__PURE__*/ jsx_runtime.jsx(Loading, {}),
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(menu_MenuBar, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./styles/global.less
var global = __webpack_require__(9243);
;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 9243:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6762:
/***/ ((module) => {

"use strict";
module.exports = require("react-awesome-reveal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(7384)));
module.exports = __webpack_exports__;

})();