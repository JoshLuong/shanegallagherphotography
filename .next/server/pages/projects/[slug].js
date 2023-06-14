(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 1387:
/***/ ((module) => {

// Exports
module.exports = {
	"resizableImage": "ResizableImage_resizableImage__oEKh_"
};


/***/ }),

/***/ 6270:
/***/ ((module) => {

// Exports
module.exports = {
	"projectPage__container": "project_projectPage__container___Tw6G",
	"projectPage__quilted": "project_projectPage__quilted__YzQUE",
	"projectPage__title": "project_projectPage__title__VB3ZB"
};


/***/ }),

/***/ 9184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fprojects_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fprojects_2F_5Bslug_5D_tsx_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fprojects_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fprojects_2F_5Bslug_5D_tsx_preferredRegion_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fprojects_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fprojects_2F_5Bslug_5D_tsx_preferredRegion_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/projects/[slug].tsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (Project),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "@contentful/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@contentful/rich-text-react-renderer");
// EXTERNAL MODULE: ./gql/apollo-client.ts
var apollo_client = __webpack_require__(115);
// EXTERNAL MODULE: ./styles/project.module.less
var project_module = __webpack_require__(6270);
var project_module_default = /*#__PURE__*/__webpack_require__.n(project_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./gql/project-page-query.ts

const projectContentFragment = client_.gql`
    fragment ProjectContent on Projects {
        title
        galleryCollection {
            items {
                url
                width
                height
            }
        }
        description {
            json
        }
    }
`;
const projectPageQuery = client_.gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                ...ProjectContent
            }
        }
    }
    ${projectContentFragment}
`;
const projectPageImageBehaviourQuery = client_.gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                behaviourCollection {
      items {
        index
        behaviour
      }
    }
            }
        }
    }
`;

;// CONCATENATED MODULE: ./gql/slug-urls-query.ts

const slugUrlsQuery = client_.gql`
    query GetSlugUrls {
        slugUrlCollection {
            items {
                id
            }
        }
    }
`;

// EXTERNAL MODULE: ./utils/loader-prop.ts
var loader_prop = __webpack_require__(2866);
;// CONCATENATED MODULE: ./utils/getBehaviourStyles.ts
const getBehaviourStyles = (behaviour)=>{
    switch(behaviour){
        case "50-to-100-right":
            return {
                startWidth: "50%",
                endWidth: "100%",
                startHeight: "50%",
                endHeight: "100%"
            };
        case "100-to-50-right":
            return {
                startWidth: "100%",
                endWidth: "50%",
                startHeight: "100%",
                endHeight: "50%"
            };
        case "0-to-100-right":
            return {
                startWidth: "0%",
                endWidth: "100%",
                startHeight: "0%",
                endHeight: "100%"
            };
        case "100-to-0-right":
            return {
                startWidth: "100%",
                endWidth: "0%",
                startHeight: "100%",
                endHeight: "0%"
            };
        case "0-to-100-left":
            return {
                startWidth: "0%",
                endWidth: "100%",
                startHeight: "0%",
                endHeight: "100%",
                marginLeft: "auto"
            };
        case "100-to-0-left":
            return {
                startWidth: "100%",
                endWidth: "0%",
                startHeight: "100%",
                endHeight: "0%",
                marginLeft: "auto"
            };
        case "50-to-100-left":
            return {
                startWidth: "50%",
                endWidth: "100%",
                startHeight: "50%",
                endHeight: "100%",
                marginLeft: "auto"
            };
        case "100-to-50-left":
            return {
                startWidth: "100%",
                endWidth: "50%",
                startHeight: "100%",
                endHeight: "50%",
                marginLeft: "auto"
            };
    }
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/ResizableImage.module.less
var ResizableImage_module = __webpack_require__(1387);
var ResizableImage_module_default = /*#__PURE__*/__webpack_require__.n(ResizableImage_module);
;// CONCATENATED MODULE: ./components/ResizableImage.tsx






const ResizableImage = ({ src , behaviour  })=>{
    const ref = (0,external_react_.useRef)(null);
    const [isIntersecting, setIntersecting] = (0,external_react_.useState)(false);
    const [isSeen, setIsSeen] = (0,external_react_.useState)(false);
    const scrollHandler = ()=>{
        const offset = ref?.current?.getBoundingClientRect().top || 0;
        if (offset <= 250) {
            setIntersecting(true);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", scrollHandler, true);
        return ()=>{
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (isIntersecting) {
            setIsSeen(true);
        }
    }, [
        isIntersecting
    ]);
    const style = getBehaviourStyles(behaviour);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        ref: ref,
        style: {
            width: "100%",
            height: "100%"
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            alt: "TODO",
            src: src,
            width: "0",
            height: "0",
            style: {
                width: isIntersecting || isSeen ? style?.endWidth : style?.startWidth,
                height: isIntersecting || isSeen ? style?.endHeight : style?.startHeight,
                marginLeft: style?.marginLeft ?? "0"
            },
            loader: loader_prop/* loaderProp */.d,
            loading: "lazy",
            className: (ResizableImage_module_default()).resizableImage
        })
    });
};
/* harmony default export */ const components_ResizableImage = (ResizableImage);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./pages/projects/[slug].tsx










function Project({ items , imageBehaviours  }) {
    const project = items[0];
    const gallery = [];
    project.galleryCollection?.items.forEach((item)=>{
        if (item?.url) {
            gallery.push(item);
        }
    });
    const imageBehaviourMap = imageBehaviours.reduce(function(map, obj) {
        if (!obj || !obj.index || !obj?.behaviour) return map;
        map[obj.index] = obj?.behaviour;
        return map;
    }, {}) || {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (project_module_default()).projectPage__container,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: (project_module_default()).projectPage__title,
                children: project.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: (0,rich_text_react_renderer_namespaceObject.documentToReactComponents)(project.description?.json)
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.ImageList, {
                variant: "quilted",
                cols: 2,
                gap: 40,
                className: (project_module_default()).projectPage__quilted,
                children: gallery.map((item, index)=>{
                    const behaviour = imageBehaviourMap[index + 1];
                    return /*#__PURE__*/ jsx_runtime.jsx(material_.ImageListItem, {
                        cols: (item?.width || 0) > (item?.height || 0) ? 2 : 1,
                        rows: 1,
                        children: !behaviour ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: item.description || "No description",
                            src: item.url || "",
                            width: "0",
                            height: "0",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            },
                            loader: loader_prop/* loaderProp */.d,
                            loading: "lazy"
                        }, index) : /*#__PURE__*/ jsx_runtime.jsx(components_ResizableImage, {
                            src: item.url || "",
                            behaviour: behaviour
                        })
                    }, index);
                })
            })
        ]
    });
}
async function getStaticProps(context) {
    const slug = context.params.slug;
    const { data  } = await apollo_client/* default */.Z.query({
        query: projectPageQuery,
        variables: {
            slug
        }
    });
    const { data: behaviourData  } = await apollo_client/* default */.Z.query({
        query: projectPageImageBehaviourQuery,
        variables: {
            slug
        }
    });
    return {
        props: {
            items: data.projectsCollection.items,
            imageBehaviours: behaviourData.projectsCollection.items.length >= 1 ? behaviourData.projectsCollection.items[0].behaviourCollection?.items : []
        }
    };
}
const getStaticPaths = async ()=>{
    const { data  } = await apollo_client/* default */.Z.query({
        query: slugUrlsQuery
    });
    const slugs = data.slugUrlCollection.items.map((url)=>({
            params: {
                slug: url.id || ""
            }
        }));
    return {
        paths: [
            ...slugs
        ],
        fallback: true
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fprojects%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Fprojects%2F%5Bslug%5D.tsx&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fprojects_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fprojects_2F_5Bslug_5D_tsx_preferredRegion_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fprojects_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fprojects_2F_5Bslug_5D_tsx_preferredRegion_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fprojects_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fprojects_2F_5Bslug_5D_tsx_preferredRegion_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/projects/[slug]","pathname":"/projects/[slug]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _slug_namespaceObject })
        
        
    

/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 7812:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

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

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,44,675,954], () => (__webpack_exec__(9184)));
module.exports = __webpack_exports__;

})();