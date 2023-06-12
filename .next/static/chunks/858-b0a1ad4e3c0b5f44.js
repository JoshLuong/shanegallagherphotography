(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{594:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(4938)),a=r(5893),i=(0,o.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},6886:function(e,t,r){"use strict";r.d(t,{ZP:function(){return Z}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),s=r(5408),l=r(9707),c=r(4780),u=r(8271),f=r(7623),p=r(2734);let d=a.createContext();var m=r(1588),h=r(4867);function y(e){return(0,h.Z)("MuiGrid",e)}let g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=(0,m.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]);var b=r(5893);let x=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function w(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function O({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(e=>{""===r&&0!==t[e]&&(r=e)});let n=Object.keys(e).sort((t,r)=>e[t]-e[r]);return n.slice(0,n.indexOf(r))}let E=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{container:n,direction:o,item:a,spacing:i,wrap:s,zeroMinWidth:l,breakpoints:c}=r,u=[];n&&(u=function(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];let n=[];return t.forEach(t=>{let o=e[t];Number(o)>0&&n.push(r[`spacing-${t}-${String(o)}`])}),n}(i,c,t));let f=[];return c.forEach(e=>{let n=r[e];n&&f.push(t[`grid-${e}-${String(n)}`])}),[t.root,n&&t.container,a&&t.item,l&&t.zeroMinWidth,...u,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...f]}})(({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let r=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:r,rowSpacing:n}=t,o={};if(r&&0!==n){let t;let r=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=O({breakpoints:e.breakpoints.values,values:r})),o=(0,s.k9)({theme:e},r,(r,n)=>{var o;let a=e.spacing(r);return"0px"!==a?{marginTop:`-${w(a)}`,[`& > .${v.item}`]:{paddingTop:w(a)}}:null!=(o=t)&&o.includes(n)?{}:{marginTop:0,[`& > .${v.item}`]:{paddingTop:0}}})}return o},function({theme:e,ownerState:t}){let{container:r,columnSpacing:n}=t,o={};if(r&&0!==n){let t;let r=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=O({breakpoints:e.breakpoints.values,values:r})),o=(0,s.k9)({theme:e},r,(r,n)=>{var o;let a=e.spacing(r);return"0px"!==a?{width:`calc(100% + ${w(a)})`,marginLeft:`-${w(a)}`,[`& > .${v.item}`]:{paddingLeft:w(a)}}:null!=(o=t)&&o.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${v.item}`]:{paddingLeft:0}}})}return o},function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((n,a)=>{let i={};if(t[a]&&(r=t[a]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let l=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),c="object"==typeof l?l[a]:l;if(null==c)return n;let u=`${Math.round(r/c*1e8)/1e6}%`,f={};if(t.container&&t.item&&0!==t.columnSpacing){let r=e.spacing(t.columnSpacing);if("0px"!==r){let e=`calc(${u} + ${w(r)})`;f={flexBasis:e,maxWidth:e}}}i=(0,o.Z)({flexBasis:u,flexGrow:0,maxWidth:u},f)}return 0===e.breakpoints.values[a]?Object.assign(n,i):n[e.breakpoints.up(a)]=i,n},{})}),S=e=>{let{classes:t,container:r,direction:n,item:o,spacing:a,wrap:i,zeroMinWidth:s,breakpoints:l}=e,u=[];r&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let r=[];return t.forEach(t=>{let n=e[t];if(Number(n)>0){let e=`spacing-${t}-${String(n)}`;r.push(e)}}),r}(a,l));let f=[];l.forEach(t=>{let r=e[t];r&&f.push(`grid-${t}-${String(r)}`)});let p={root:["root",r&&"container",o&&"item",s&&"zeroMinWidth",...u,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==i&&`wrap-xs-${String(i)}`,...f]};return(0,c.Z)(p,y,t)},j=a.forwardRef(function(e,t){let r=(0,f.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,p.Z)(),c=(0,l.Z)(r),{className:u,columns:m,columnSpacing:h,component:y="div",container:g=!1,direction:v="row",item:w=!1,rowSpacing:O,spacing:j=0,wrap:Z="wrap",zeroMinWidth:k=!1}=c,P=(0,n.Z)(c,x),R=O||j,M=h||j,F=a.useContext(d),T=g?m||12:F,_={},C=(0,o.Z)({},P);s.keys.forEach(e=>{null!=P[e]&&(_[e]=P[e],delete C[e])});let A=(0,o.Z)({},c,{columns:T,container:g,direction:v,item:w,rowSpacing:R,columnSpacing:M,wrap:Z,zeroMinWidth:k,spacing:j},_,{breakpoints:s.keys}),N=S(A);return(0,b.jsx)(d.Provider,{value:T,children:(0,b.jsx)(E,(0,o.Z)({ownerState:A,className:(0,i.Z)(N.root,u),as:y,ref:t},C))})});var Z=j},3946:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),s=r(4780),l=r(1796),c=r(8271),u=r(7623),f=r(7739),p=r(8216),d=r(1588),m=r(4867);function h(e){return(0,m.Z)("MuiIconButton",e)}let y=(0,d.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=r(5893);let v=["edge","children","className","color","disabled","disableFocusRipple","size"],b=e=>{let{classes:t,disabled:r,color:n,edge:o,size:a}=e,i={root:["root",r&&"disabled","default"!==n&&`color${(0,p.Z)(n)}`,o&&`edge${(0,p.Z)(o)}`,`size${(0,p.Z)(a)}`]};return(0,s.Z)(i,h,t)},x=(0,c.ZP)(f.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,p.Z)(r.color)}`],r.edge&&t[`edge${(0,p.Z)(r.edge)}`],t[`size${(0,p.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>{var r;let n=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:null==n?void 0:n.main},!t.disableRipple&&{"&:hover":(0,o.Z)({},n&&{backgroundColor:e.vars?`rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(n.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${y.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),w=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:s,className:l,color:c="default",disabled:f=!1,disableFocusRipple:p=!1,size:d="medium"}=r,m=(0,n.Z)(r,v),h=(0,o.Z)({},r,{edge:a,color:c,disabled:f,disableFocusRipple:p,size:d}),y=b(h);return(0,g.jsx)(x,(0,o.Z)({className:(0,i.Z)(y.root,l),centerRipple:!0,focusRipple:!p,disabled:f,ref:t,ownerState:h},m,{children:s}))});var O=w},5190:function(e,t,r){"use strict";r.d(t,{Z:function(){return tn}});var n,o,a,i,s,l=r(3366),c=r(7462),u=r(7294),f=r(6010),p=r(4780);function d(e,t,r){return void 0===e||"string"==typeof e?t:(0,c.Z)({},t,{ownerState:(0,c.Z)({},t.ownerState,r)})}var m=r(1796),h=r(8271),y=r(2734),g=r(7623),v=r(8216),b=r(8662),x=r(577),w=r(1705),O=r(5893);let E=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function S(e){return`scale(${e}, ${e**2})`}let j={entering:{opacity:1,transform:S(1)},entered:{opacity:1,transform:"none"}},Z="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),k=u.forwardRef(function(e,t){let{addEndListener:r,appear:n=!0,children:o,easing:a,in:i,onEnter:s,onEntered:f,onEntering:p,onExit:d,onExited:m,onExiting:h,style:g,timeout:v="auto",TransitionComponent:k=b.ZP}=e,P=(0,l.Z)(e,E),R=u.useRef(),M=u.useRef(),F=(0,y.Z)(),T=u.useRef(null),_=(0,w.Z)(T,o.ref,t),C=e=>t=>{if(e){let r=T.current;void 0===t?e(r):e(r,t)}},A=C(p),N=C((e,t)=>{let r;(0,x.n)(e);let{duration:n,delay:o,easing:i}=(0,x.C)({style:g,timeout:v,easing:a},{mode:"enter"});"auto"===v?(r=F.transitions.getAutoHeightDuration(e.clientHeight),M.current=r):r=n,e.style.transition=[F.transitions.create("opacity",{duration:r,delay:o}),F.transitions.create("transform",{duration:Z?r:.666*r,delay:o,easing:i})].join(","),s&&s(e,t)}),$=C(f),L=C(h),I=C(e=>{let t;let{duration:r,delay:n,easing:o}=(0,x.C)({style:g,timeout:v,easing:a},{mode:"exit"});"auto"===v?(t=F.transitions.getAutoHeightDuration(e.clientHeight),M.current=t):t=r,e.style.transition=[F.transitions.create("opacity",{duration:t,delay:n}),F.transitions.create("transform",{duration:Z?t:.666*t,delay:Z?n:n||.333*t,easing:o})].join(","),e.style.opacity=0,e.style.transform=S(.75),d&&d(e)}),z=C(m);return u.useEffect(()=>()=>{clearTimeout(R.current)},[]),(0,O.jsx)(k,(0,c.Z)({appear:n,in:i,nodeRef:T,onEnter:N,onEntered:$,onEntering:A,onExit:I,onExited:z,onExiting:L,addEndListener:e=>{"auto"===v&&(R.current=setTimeout(e,M.current||0)),r&&r(T.current,e)},timeout:"auto"===v?null:v},P,{children:(e,t)=>u.cloneElement(o,(0,c.Z)({style:(0,c.Z)({opacity:0,transform:S(.75),visibility:"exited"!==e||i?void 0:"hidden"},j[e],g,o.props.style),ref:_},t))}))});k.muiSupportAuto=!0;var P=r(67),R=r(6600),M=r(7094);function F(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function T(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function _(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function C(e){if("undefined"==typeof ShadowRoot)return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var A=Math.max,N=Math.min,$=Math.round;function L(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function I(){return!/^((?!chrome|android).)*safari/i.test(L())}function z(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&_(e)&&(o=e.offsetWidth>0&&$(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&$(n.height)/e.offsetHeight||1);var i=(T(e)?F(e):window).visualViewport,s=!I()&&r,l=(n.left+(s&&i?i.offsetLeft:0))/o,c=(n.top+(s&&i?i.offsetTop:0))/a,u=n.width/o,f=n.height/a;return{width:u,height:f,top:c,right:l+u,bottom:c+f,left:l,x:l,y:c}}function W(e){var t=F(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){return((T(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return z(H(e)).left+W(e).scrollLeft}function V(e){return F(e).getComputedStyle(e)}function Y(e){var t=V(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function X(e){var t=z(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function U(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(C(e)?e.host:null)||H(e)}function q(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:_(t)&&Y(t)?t:e(U(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),a=F(n),i=o?[a].concat(a.visualViewport||[],Y(n)?n:[]):n,s=t.concat(i);return o?s:s.concat(q(U(i)))}function G(e){return _(e)&&"fixed"!==V(e).position?e.offsetParent:null}function K(e){for(var t=F(e),r=G(e);r&&["table","td","th"].indexOf(D(r))>=0&&"static"===V(r).position;)r=G(r);return r&&("html"===D(r)||"body"===D(r)&&"static"===V(r).position)?t:r||function(e){var t=/firefox/i.test(L());if(/Trident/i.test(L())&&_(e)&&"fixed"===V(e).position)return null;var r=U(e);for(C(r)&&(r=r.host);_(r)&&0>["html","body"].indexOf(D(r));){var n=V(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var Q="bottom",J="right",ee="left",et="auto",er=["top",Q,J,ee],en="start",eo="viewport",ea="popper",ei=er.reduce(function(e,t){return e.concat([t+"-"+en,t+"-end"])},[]),es=[].concat(er,[et]).reduce(function(e,t){return e.concat([t,t+"-"+en,t+"-end"])},[]),el=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],ec={placement:"bottom",modifiers:[],strategy:"absolute"};function eu(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ef={passive:!0};function ep(e){return e.split("-")[0]}function ed(e){return e.split("-")[1]}function em(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function eh(e){var t,r=e.reference,n=e.element,o=e.placement,a=o?ep(o):null,i=o?ed(o):null,s=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2;switch(a){case"top":t={x:s,y:r.y-n.height};break;case Q:t={x:s,y:r.y+r.height};break;case J:t={x:r.x+r.width,y:l};break;case ee:t={x:r.x-n.width,y:l};break;default:t={x:r.x,y:r.y}}var c=a?em(a):null;if(null!=c){var u="y"===c?"height":"width";switch(i){case en:t[c]=t[c]-(r[u]/2-n[u]/2);break;case"end":t[c]=t[c]+(r[u]/2-n[u]/2)}}return t}var ey={top:"auto",right:"auto",bottom:"auto",left:"auto"};function eg(e){var t,r,n,o,a,i,s,l=e.popper,c=e.popperRect,u=e.placement,f=e.variation,p=e.offsets,d=e.position,m=e.gpuAcceleration,h=e.adaptive,y=e.roundOffsets,g=e.isFixed,v=p.x,b=void 0===v?0:v,x=p.y,w=void 0===x?0:x,O="function"==typeof y?y({x:b,y:w}):{x:b,y:w};b=O.x,w=O.y;var E=p.hasOwnProperty("x"),S=p.hasOwnProperty("y"),j=ee,Z="top",k=window;if(h){var P=K(l),R="clientHeight",M="clientWidth";P===F(l)&&"static"!==V(P=H(l)).position&&"absolute"===d&&(R="scrollHeight",M="scrollWidth"),("top"===u||(u===ee||u===J)&&"end"===f)&&(Z=Q,w-=(g&&P===k&&k.visualViewport?k.visualViewport.height:P[R])-c.height,w*=m?1:-1),(u===ee||("top"===u||u===Q)&&"end"===f)&&(j=J,b-=(g&&P===k&&k.visualViewport?k.visualViewport.width:P[M])-c.width,b*=m?1:-1)}var T=Object.assign({position:d},h&&ey),_=!0===y?(t={x:b,y:w},r=F(l),n=t.x,o=t.y,{x:$(n*(a=r.devicePixelRatio||1))/a||0,y:$(o*a)/a||0}):{x:b,y:w};return(b=_.x,w=_.y,m)?Object.assign({},T,((s={})[Z]=S?"0":"",s[j]=E?"0":"",s.transform=1>=(k.devicePixelRatio||1)?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",s)):Object.assign({},T,((i={})[Z]=S?w+"px":"",i[j]=E?b+"px":"",i.transform="",i))}var ev={left:"right",right:"left",bottom:"top",top:"bottom"};function eb(e){return e.replace(/left|right|bottom|top/g,function(e){return ev[e]})}var ex={start:"end",end:"start"};function ew(e){return e.replace(/start|end/g,function(e){return ex[e]})}function eO(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&C(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function eE(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function eS(e,t,r){var n,o,a,i,s,l,c,u,f,p;return t===eo?eE(function(e,t){var r=F(e),n=H(e),o=r.visualViewport,a=n.clientWidth,i=n.clientHeight,s=0,l=0;if(o){a=o.width,i=o.height;var c=I();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:a,height:i,x:s+B(e),y:l}}(e,r)):T(t)?((n=z(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):eE((o=H(e),i=H(o),s=W(o),l=null==(a=o.ownerDocument)?void 0:a.body,c=A(i.scrollWidth,i.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=A(i.scrollHeight,i.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),f=-s.scrollLeft+B(o),p=-s.scrollTop,"rtl"===V(l||i).direction&&(f+=A(i.clientWidth,l?l.clientWidth:0)-c),{width:c,height:u,x:f,y:p}))}function ej(){return{top:0,right:0,bottom:0,left:0}}function eZ(e){return Object.assign({},ej(),e)}function ek(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function eP(e,t){void 0===t&&(t={});var r,n,o,a,i,s,l,c=t,u=c.placement,f=void 0===u?e.placement:u,p=c.strategy,d=void 0===p?e.strategy:p,m=c.boundary,h=c.rootBoundary,y=c.elementContext,g=void 0===y?ea:y,v=c.altBoundary,b=c.padding,x=void 0===b?0:b,w=eZ("number"!=typeof x?x:ek(x,er)),O=e.rects.popper,E=e.elements[void 0!==v&&v?g===ea?"reference":ea:g],S=(r=T(E)?E:E.contextElement||H(e.elements.popper),s=(i=[].concat("clippingParents"===(n=void 0===m?"clippingParents":m)?(o=q(U(r)),T(a=["absolute","fixed"].indexOf(V(r).position)>=0&&_(r)?K(r):r)?o.filter(function(e){return T(e)&&eO(e,a)&&"body"!==D(e)}):[]):[].concat(n),[void 0===h?eo:h]))[0],(l=i.reduce(function(e,t){var n=eS(r,t,d);return e.top=A(n.top,e.top),e.right=N(n.right,e.right),e.bottom=N(n.bottom,e.bottom),e.left=A(n.left,e.left),e},eS(r,s,d))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),j=z(e.elements.reference),Z=eh({reference:j,element:O,strategy:"absolute",placement:f}),k=eE(Object.assign({},O,Z)),P=g===ea?k:j,R={top:S.top-P.top+w.top,bottom:P.bottom-S.bottom+w.bottom,left:S.left-P.left+w.left,right:P.right-S.right+w.right},M=e.modifiersData.offset;if(g===ea&&M){var F=M[f];Object.keys(R).forEach(function(e){var t=[J,Q].indexOf(e)>=0?1:-1,r=["top",Q].indexOf(e)>=0?"y":"x";R[e]+=F[r]*t})}return R}function eR(e,t,r){return A(e,N(t,r))}function eM(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function eF(e){return["top",J,Q,ee].some(function(t){return e[t]>=0})}var eT=(a=void 0===(o=(n={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=void 0===o||o,i=n.resize,s=void 0===i||i,l=F(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(e){e.addEventListener("scroll",r.update,ef)}),s&&l.addEventListener("resize",r.update,ef),function(){a&&c.forEach(function(e){e.removeEventListener("scroll",r.update,ef)}),s&&l.removeEventListener("resize",r.update,ef)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=eh({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=r.adaptive,a=r.roundOffsets,i=void 0===a||a,s={placement:ep(t.placement),variation:ed(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,eg(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:i})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,eg(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];_(o)&&D(o)&&(Object.assign(o.style,r),Object.keys(n).forEach(function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});_(n)&&D(n)&&(Object.assign(n.style,a),Object.keys(o).forEach(function(e){n.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=void 0===o?[0,0]:o,i=es.reduce(function(e,r){var n,o,i,s,l,c;return e[r]=(n=t.rects,i=[ee,"top"].indexOf(o=ep(r))>=0?-1:1,l=(s="function"==typeof a?a(Object.assign({},n,{placement:r})):a)[0],c=s[1],l=l||0,c=(c||0)*i,[ee,J].indexOf(o)>=0?{x:c,y:l}:{x:l,y:c}),e},{}),s=i[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=void 0===o||o,i=r.altAxis,s=void 0===i||i,l=r.fallbackPlacements,c=r.padding,u=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,y=t.options.placement,g=ep(y)===y,v=l||(g||!m?[eb(y)]:function(e){if(ep(e)===et)return[];var t=eb(e);return[ew(e),t,ew(t)]}(y)),b=[y].concat(v).reduce(function(e,r){var n,o,a,i,s,l,p,d,y,g,v,b;return e.concat(ep(r)===et?(o=(n={placement:r,boundary:u,rootBoundary:f,padding:c,flipVariations:m,allowedAutoPlacements:h}).placement,a=n.boundary,i=n.rootBoundary,s=n.padding,l=n.flipVariations,d=void 0===(p=n.allowedAutoPlacements)?es:p,0===(v=(g=(y=ed(o))?l?ei:ei.filter(function(e){return ed(e)===y}):er).filter(function(e){return d.indexOf(e)>=0})).length&&(v=g),Object.keys(b=v.reduce(function(e,r){return e[r]=eP(t,{placement:r,boundary:a,rootBoundary:i,padding:s})[ep(r)],e},{})).sort(function(e,t){return b[e]-b[t]})):r)},[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,S=b[0],j=0;j<b.length;j++){var Z=b[j],k=ep(Z),P=ed(Z)===en,R=["top",Q].indexOf(k)>=0,M=R?"width":"height",F=eP(t,{placement:Z,boundary:u,rootBoundary:f,altBoundary:p,padding:c}),T=R?P?J:ee:P?Q:"top";x[M]>w[M]&&(T=eb(T));var _=eb(T),C=[];if(a&&C.push(F[k]<=0),s&&C.push(F[T]<=0,F[_]<=0),C.every(function(e){return e})){S=Z,E=!1;break}O.set(Z,C)}if(E)for(var A=m?3:1,N=function(e){var t=b.find(function(t){var r=O.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return S=t,"break"},$=A;$>0&&"break"!==N($);$--);t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=r.altAxis,i=r.boundary,s=r.rootBoundary,l=r.altBoundary,c=r.padding,u=r.tether,f=void 0===u||u,p=r.tetherOffset,d=void 0===p?0:p,m=eP(t,{boundary:i,rootBoundary:s,padding:c,altBoundary:l}),h=ep(t.placement),y=ed(t.placement),g=!y,v=em(h),b="x"===v?"y":"x",x=t.modifiersData.popperOffsets,w=t.rects.reference,O=t.rects.popper,E="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,S="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Z={x:0,y:0};if(x){if(void 0===o||o){var k,P="y"===v?"top":ee,R="y"===v?Q:J,M="y"===v?"height":"width",F=x[v],T=F+m[P],_=F-m[R],C=f?-O[M]/2:0,$=y===en?w[M]:O[M],L=y===en?-O[M]:-w[M],I=t.elements.arrow,z=f&&I?X(I):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ej(),D=W[P],H=W[R],B=eR(0,w[M],z[M]),V=g?w[M]/2-C-B-D-S.mainAxis:$-B-D-S.mainAxis,Y=g?-w[M]/2+C+B+H+S.mainAxis:L+B+H+S.mainAxis,U=t.elements.arrow&&K(t.elements.arrow),q=U?"y"===v?U.clientTop||0:U.clientLeft||0:0,G=null!=(k=null==j?void 0:j[v])?k:0,et=F+V-G-q,er=F+Y-G,eo=eR(f?N(T,et):T,F,f?A(_,er):_);x[v]=eo,Z[v]=eo-F}if(void 0!==a&&a){var ea,ei,es="x"===v?"top":ee,el="x"===v?Q:J,ec=x[b],eu="y"===b?"height":"width",ef=ec+m[es],eh=ec-m[el],ey=-1!==["top",ee].indexOf(h),eg=null!=(ei=null==j?void 0:j[b])?ei:0,ev=ey?ef:ec-w[eu]-O[eu]-eg+S.altAxis,eb=ey?ec+w[eu]+O[eu]-eg-S.altAxis:eh,ex=f&&ey?(ea=eR(ev,ec,eb))>eb?eb:ea:eR(f?ev:ef,ec,f?eb:eh);x[b]=ex,Z[b]=ex-ec}t.modifiersData[n]=Z}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,o=e.name,a=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,l=ep(n.placement),c=em(l),u=[ee,J].indexOf(l)>=0?"height":"width";if(i&&s){var f=eZ("number"!=typeof(t="function"==typeof(t=a.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:ek(t,er)),p=X(i),d="y"===c?"top":ee,m="y"===c?Q:J,h=n.rects.reference[u]+n.rects.reference[c]-s[c]-n.rects.popper[u],y=s[c]-n.rects.reference[c],g=K(i),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,b=f[d],x=v-p[u]-f[m],w=v/2-p[u]/2+(h/2-y/2),O=eR(b,w,x);n.modifiersData[o]=((r={})[c]=O,r.centerOffset=O-w,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&eO(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=eP(t,{elementContext:"reference"}),s=eP(t,{altBoundary:!0}),l=eM(i,n),c=eM(s,o,a),u=eF(l),f=eF(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]}).defaultModifiers)?[]:o,s=void 0===(i=n.defaultOptions)?ec:i,function(e,t,r){void 0===r&&(r=s);var n,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ec,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],l=!1,c={state:o,setOptions:function(r){var n,l,f,p,d,m="function"==typeof r?r(o.options):r;u(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:T(e)?q(e):e.contextElement?q(e.contextElement):[],popper:q(t)};var h=(l=Object.keys(n=[].concat(a,o.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),f=new Map,p=new Set,d=[],l.forEach(function(e){f.set(e.name,e)}),l.forEach(function(e){p.has(e.name)||function e(t){p.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!p.has(t)){var r=f.get(t);r&&e(r)}}),d.push(t)}(e)}),el.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=h.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var a=n({state:o,name:t,instance:c,options:void 0===r?{}:r});i.push(a||function(){})}}),c.update()},forceUpdate:function(){if(!l){var e,t,r,n,a,i,s,u,f,p,d,m,h=o.elements,y=h.reference,g=h.popper;if(eu(y,g)){o.rects={reference:(t=K(g),r="fixed"===o.options.strategy,n=_(t),u=_(t)&&(i=$((a=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=$(a.height)/t.offsetHeight||1,1!==i||1!==s),f=H(t),p=z(y,u,r),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(n||!n&&!r)&&(("body"!==D(t)||Y(f))&&(d=(e=t)!==F(e)&&_(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:W(e)),_(t)?(m=z(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):f&&(m.x=B(f))),{x:p.left+d.scrollLeft-m.x,y:p.top+d.scrollTop-m.y,width:p.width,height:p.height}),popper:X(g)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var v=0;v<o.orderedModifiers.length;v++){if(!0===o.reset){o.reset=!1,v=-1;continue}var b=o.orderedModifiers[v],x=b.fn,w=b.options,O=void 0===w?{}:w,E=b.name;"function"==typeof x&&(o=x({state:o,options:O,name:E,instance:c})||o)}}}},update:function(){return n||(n=new Promise(function(e){Promise.resolve().then(function(){n=void 0,e(new Promise(function(e){c.forceUpdate(),e(o)}))})})),n},destroy:function(){u(),l=!0}};if(!eu(e,t))return c;function u(){i.forEach(function(e){return e()}),i=[]}return c.setOptions(r).then(function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)}),c}),e_=r(3935),eC=r(7960);let eA=u.forwardRef(function(e,t){let{children:r,container:n,disablePortal:o=!1}=e,[a,i]=u.useState(null),s=(0,P.Z)(u.isValidElement(r)?r.ref:null,t);return((0,R.Z)(()=>{!o&&i(("function"==typeof n?n():n)||document.body)},[n,o]),(0,R.Z)(()=>{if(a&&!o)return(0,eC.Z)(t,a),()=>{(0,eC.Z)(t,null)}},[t,a,o]),o)?u.isValidElement(r)?u.cloneElement(r,{ref:s}):(0,O.jsx)(u.Fragment,{children:r}):(0,O.jsx)(u.Fragment,{children:a?e_.createPortal(r,a):a})});var eN=r(4867);function e$(e){return(0,eN.Z)("MuiPopper",e)}function eL(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(r=>{t[r]=e[r]}),t}(0,r(1588).Z)("MuiPopper",["root"]);let eI=["elementType","externalSlotProps","ownerState"],ez=u.createContext({disableDefaultClasses:!1}),eW=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],eD=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function eH(e){return"function"==typeof e?e():e}let eB=()=>(0,p.Z)({root:["root"]},function(e){let{disableDefaultClasses:t}=u.useContext(ez);return r=>t?"":e(r)}(e$)),eV={},eY=u.forwardRef(function(e,t){var r;let{anchorEl:n,children:o,direction:a,disablePortal:i,modifiers:s,open:p,placement:m,popperOptions:h,popperRef:y,slotProps:g={},slots:v={},TransitionProps:b}=e,x=(0,l.Z)(e,eW),w=u.useRef(null),E=(0,P.Z)(w,t),S=u.useRef(null),j=(0,P.Z)(S,y),Z=u.useRef(j);(0,R.Z)(()=>{Z.current=j},[j]),u.useImperativeHandle(y,()=>S.current,[]);let k=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,a),[M,F]=u.useState(k),[T,_]=u.useState(eH(n));u.useEffect(()=>{S.current&&S.current.forceUpdate()}),u.useEffect(()=>{n&&_(eH(n))},[n]),(0,R.Z)(()=>{if(!T||!p)return;let e=e=>{F(e.placement)},t=[{name:"preventOverflow",options:{altBoundary:i}},{name:"flip",options:{altBoundary:i}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:t})=>{e(t)}}];null!=s&&(t=t.concat(s)),h&&null!=h.modifiers&&(t=t.concat(h.modifiers));let r=eT(T,w.current,(0,c.Z)({placement:k},h,{modifiers:t}));return Z.current(r),()=>{r.destroy(),Z.current(null)}},[T,i,s,p,h,k]);let C={placement:M};null!==b&&(C.TransitionProps=b);let A=eB(),N=null!=(r=v.root)?r:"div",$=function(e){var t;let{elementType:r,externalSlotProps:n,ownerState:o}=e,a=(0,l.Z)(e,eI),i="function"==typeof n?n(o):n,{props:s,internalRef:u}=function(e){let{getSlotProps:t,additionalProps:r,externalSlotProps:n,externalForwardedProps:o,className:a}=e;if(!t){let e=(0,f.Z)(null==o?void 0:o.className,null==n?void 0:n.className,a,null==r?void 0:r.className),t=(0,c.Z)({},null==r?void 0:r.style,null==o?void 0:o.style,null==n?void 0:n.style),i=(0,c.Z)({},r,o,n);return e.length>0&&(i.className=e),Object.keys(t).length>0&&(i.style=t),{props:i,internalRef:void 0}}let i=function(e,t=[]){if(void 0===e)return{};let r={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&"function"==typeof e[r]&&!t.includes(r)).forEach(t=>{r[t]=e[t]}),r}((0,c.Z)({},o,n)),s=eL(n),l=eL(o),u=t(i),p=(0,f.Z)(null==u?void 0:u.className,null==r?void 0:r.className,a,null==o?void 0:o.className,null==n?void 0:n.className),d=(0,c.Z)({},null==u?void 0:u.style,null==r?void 0:r.style,null==o?void 0:o.style,null==n?void 0:n.style),m=(0,c.Z)({},u,r,l,s);return p.length>0&&(m.className=p),Object.keys(d).length>0&&(m.style=d),{props:m,internalRef:u.ref}}((0,c.Z)({},a,{externalSlotProps:i})),p=(0,P.Z)(u,null==i?void 0:i.ref,null==(t=e.additionalProps)?void 0:t.ref),m=d(r,(0,c.Z)({},s,{ref:p}),o);return m}({elementType:N,externalSlotProps:g.root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:E},ownerState:e,className:A.root});return(0,O.jsx)(N,(0,c.Z)({},$,{children:"function"==typeof o?o(C):o}))}),eX=u.forwardRef(function(e,t){let r;let{anchorEl:n,children:o,container:a,direction:i="ltr",disablePortal:s=!1,keepMounted:f=!1,modifiers:p,open:d,placement:m="bottom",popperOptions:h=eV,popperRef:y,style:g,transition:v=!1,slotProps:b={},slots:x={}}=e,w=(0,l.Z)(e,eD),[E,S]=u.useState(!0);if(!f&&!d&&(!v||E))return null;if(a)r=a;else if(n){let e=eH(n);r=e&&void 0!==e.nodeType?(0,M.Z)(e).body:(0,M.Z)(null).body}let j=!d&&f&&(!v||E)?"none":void 0;return(0,O.jsx)(eA,{disablePortal:s,container:r,children:(0,O.jsx)(eY,(0,c.Z)({anchorEl:n,direction:i,disablePortal:s,modifiers:p,ref:t,open:v?!E:d,placement:m,popperOptions:h,popperRef:y,slotProps:b,slots:x},w,{style:(0,c.Z)({position:"fixed",top:0,left:0,display:j},g),TransitionProps:v?{in:d,onEnter:()=>{S(!1)},onExited:()=>{S(!0)}}:void 0,children:o}))})});var eU=r(4168);let eq=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],eG=(0,h.ZP)(eX,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),eK=u.forwardRef(function(e,t){var r;let n=(0,eU.Z)(),o=(0,g.Z)({props:e,name:"MuiPopper"}),{anchorEl:a,component:i,components:s,componentsProps:u,container:f,disablePortal:p,keepMounted:d,modifiers:m,open:h,placement:y,popperOptions:v,popperRef:b,transition:x,slots:w,slotProps:E}=o,S=(0,l.Z)(o,eq),j=null!=(r=null==w?void 0:w.root)?r:null==s?void 0:s.Root,Z=(0,c.Z)({anchorEl:a,container:f,disablePortal:p,keepMounted:d,modifiers:m,open:h,placement:y,popperOptions:v,popperRef:b,transition:x},S);return(0,O.jsx)(eG,(0,c.Z)({as:i,direction:null==n?void 0:n.direction,slots:{root:j},slotProps:null!=E?E:u},Z,{ref:t}))});var eQ=r(9327),eJ=r(8785),e0=r(8791),e1=r(2627),e3=r(8999);let e5=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],e4=e=>{let{classes:t,disableInteractive:r,arrow:n,touch:o,placement:a}=e,i={popper:["popper",!r&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",o&&"touch",`tooltipPlacement${(0,v.Z)(a.split("-")[0])}`],arrow:["arrow"]};return(0,p.Z)(i,e3.Q,t)},e2=(0,h.ZP)(eK,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>(0,c.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${e3.Z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${e3.Z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${e3.Z.arrow}`]:(0,c.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${e3.Z.arrow}`]:(0,c.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),e7=(0,h.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,v.Z)(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>(0,c.Z)({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:(0,m.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Math.round(1e5*(16/14))/1e5}em`,fontWeight:e.typography.fontWeightRegular},{[`.${e3.Z.popper}[data-popper-placement*="left"] &`]:(0,c.Z)({transformOrigin:"right center"},t.isRtl?(0,c.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,c.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${e3.Z.popper}[data-popper-placement*="right"] &`]:(0,c.Z)({transformOrigin:"left center"},t.isRtl?(0,c.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,c.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${e3.Z.popper}[data-popper-placement*="top"] &`]:(0,c.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${e3.Z.popper}[data-popper-placement*="bottom"] &`]:(0,c.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),e9=(0,h.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:(0,m.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})),e6=!1,e8=null,te={x:0,y:0};function tt(e,t){return r=>{t&&t(r),e(r)}}let tr=u.forwardRef(function(e,t){var r,n,o,a,i,s,p,m,h,v,b,x,E,S,j,Z,P,R,M;let F=(0,g.Z)({props:e,name:"MuiTooltip"}),{arrow:T=!1,children:_,components:C={},componentsProps:A={},describeChild:N=!1,disableFocusListener:$=!1,disableHoverListener:L=!1,disableInteractive:I=!1,disableTouchListener:z=!1,enterDelay:W=100,enterNextDelay:D=0,enterTouchDelay:H=700,followCursor:B=!1,id:V,leaveDelay:Y=0,leaveTouchDelay:X=1500,onClose:U,onOpen:q,open:G,placement:K="bottom",PopperComponent:Q,PopperProps:J={},slotProps:ee={},slots:et={},title:er,TransitionComponent:en=k,TransitionProps:eo}=F,ea=(0,l.Z)(F,e5),ei=(0,y.Z)(),es="rtl"===ei.direction,[el,ec]=u.useState(),[eu,ef]=u.useState(null),ep=u.useRef(!1),ed=I||B,em=u.useRef(),eh=u.useRef(),ey=u.useRef(),eg=u.useRef(),[ev,eb]=(0,e1.Z)({controlled:G,default:!1,name:"Tooltip",state:"open"}),ex=ev,ew=(0,eJ.Z)(V),eO=u.useRef(),eE=u.useCallback(()=>{void 0!==eO.current&&(document.body.style.WebkitUserSelect=eO.current,eO.current=void 0),clearTimeout(eg.current)},[]);u.useEffect(()=>()=>{clearTimeout(em.current),clearTimeout(eh.current),clearTimeout(ey.current),eE()},[eE]);let eS=e=>{clearTimeout(e8),e6=!0,eb(!0),q&&!ex&&q(e)},ej=(0,eQ.Z)(e=>{clearTimeout(e8),e8=setTimeout(()=>{e6=!1},800+Y),eb(!1),U&&ex&&U(e),clearTimeout(em.current),em.current=setTimeout(()=>{ep.current=!1},ei.transitions.duration.shortest)}),eZ=e=>{ep.current&&"touchstart"!==e.type||(el&&el.removeAttribute("title"),clearTimeout(eh.current),clearTimeout(ey.current),W||e6&&D?eh.current=setTimeout(()=>{eS(e)},e6?D:W):eS(e))},ek=e=>{clearTimeout(eh.current),clearTimeout(ey.current),ey.current=setTimeout(()=>{ej(e)},Y)},{isFocusVisibleRef:eP,onBlur:eR,onFocus:eM,ref:eF}=(0,e0.Z)(),[,eT]=u.useState(!1),e_=e=>{eR(e),!1===eP.current&&(eT(!1),ek(e))},eC=e=>{el||ec(e.currentTarget),eM(e),!0===eP.current&&(eT(!0),eZ(e))},eA=e=>{ep.current=!0;let t=_.props;t.onTouchStart&&t.onTouchStart(e)};u.useEffect(()=>{if(ex)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&ej(e)}},[ej,ex]);let eN=(0,w.Z)(_.ref,eF,ec,t);er||0===er||(ex=!1);let e$=u.useRef(),eL={},eI="string"==typeof er;N?(eL.title=ex||!eI||L?null:er,eL["aria-describedby"]=ex?ew:null):(eL["aria-label"]=eI?er:null,eL["aria-labelledby"]=ex&&!eI?ew:null);let ez=(0,c.Z)({},eL,ea,_.props,{className:(0,f.Z)(ea.className,_.props.className),onTouchStart:eA,ref:eN},B?{onMouseMove:e=>{let t=_.props;t.onMouseMove&&t.onMouseMove(e),te={x:e.clientX,y:e.clientY},e$.current&&e$.current.update()}}:{}),eW={};z||(ez.onTouchStart=e=>{eA(e),clearTimeout(ey.current),clearTimeout(em.current),eE(),eO.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eg.current=setTimeout(()=>{document.body.style.WebkitUserSelect=eO.current,eZ(e)},H)},ez.onTouchEnd=e=>{_.props.onTouchEnd&&_.props.onTouchEnd(e),eE(),clearTimeout(ey.current),ey.current=setTimeout(()=>{ej(e)},X)}),L||(ez.onMouseOver=tt(eZ,ez.onMouseOver),ez.onMouseLeave=tt(ek,ez.onMouseLeave),ed||(eW.onMouseOver=eZ,eW.onMouseLeave=ek)),$||(ez.onFocus=tt(eC,ez.onFocus),ez.onBlur=tt(e_,ez.onBlur),ed||(eW.onFocus=eC,eW.onBlur=e_));let eD=u.useMemo(()=>{var e;let t=[{name:"arrow",enabled:!!eu,options:{element:eu,padding:4}}];return null!=(e=J.popperOptions)&&e.modifiers&&(t=t.concat(J.popperOptions.modifiers)),(0,c.Z)({},J.popperOptions,{modifiers:t})},[eu,J]),eH=(0,c.Z)({},F,{isRtl:es,arrow:T,disableInteractive:ed,placement:K,PopperComponentProp:Q,touch:ep.current}),eB=e4(eH),eV=null!=(r=null!=(n=et.popper)?n:C.Popper)?r:e2,eY=null!=(o=null!=(a=null!=(i=et.transition)?i:C.Transition)?a:en)?o:k,eX=null!=(s=null!=(p=et.tooltip)?p:C.Tooltip)?s:e7,eU=null!=(m=null!=(h=et.arrow)?h:C.Arrow)?m:e9,eq=d(eV,(0,c.Z)({},J,null!=(v=ee.popper)?v:A.popper,{className:(0,f.Z)(eB.popper,null==J?void 0:J.className,null==(b=null!=(x=ee.popper)?x:A.popper)?void 0:b.className)}),eH),eG=d(eY,(0,c.Z)({},eo,null!=(E=ee.transition)?E:A.transition),eH),e3=d(eX,(0,c.Z)({},null!=(S=ee.tooltip)?S:A.tooltip,{className:(0,f.Z)(eB.tooltip,null==(j=null!=(Z=ee.tooltip)?Z:A.tooltip)?void 0:j.className)}),eH),tr=d(eU,(0,c.Z)({},null!=(P=ee.arrow)?P:A.arrow,{className:(0,f.Z)(eB.arrow,null==(R=null!=(M=ee.arrow)?M:A.arrow)?void 0:R.className)}),eH);return(0,O.jsxs)(u.Fragment,{children:[u.cloneElement(_,ez),(0,O.jsx)(eV,(0,c.Z)({as:null!=Q?Q:eK,placement:K,anchorEl:B?{getBoundingClientRect:()=>({top:te.y,left:te.x,right:te.x,bottom:te.y,width:0,height:0})}:el,popperRef:e$,open:!!el&&ex,id:ew,transition:!0},eW,eq,{popperOptions:eD,children:({TransitionProps:e})=>(0,O.jsx)(eY,(0,c.Z)({timeout:ei.transitions.duration.shorter},e,eG,{children:(0,O.jsxs)(eX,(0,c.Z)({},e3,{children:[er,T?(0,O.jsx)(eU,(0,c.Z)({},tr,{ref:ef})):null]}))}))}))]})});var tn=tr},8999:function(e,t,r){"use strict";r.d(t,{Q:function(){return a}});var n=r(1588),o=r(4867);function a(e){return(0,o.Z)("MuiTooltip",e)}let i=(0,n.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);t.Z=i},9788:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return n}});class r{disable(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}function n(){return globalThis.AsyncLocalStorage?new globalThis.AsyncLocalStorage:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3123:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(8754),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return d},useSearchParams:function(){return m},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return y},useParams:function(){return g},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return b},redirect:function(){return c.redirect},notFound:function(){return u.notFound}});let n=r(7294),o=r(2429),a=r(9731),i=r(3123),s=r(6940),l=r(9642),c=r(991),u=r(9480),f=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class d{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function m(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(a.SearchParamsContext),t=(0,n.useMemo)(()=>e?new d(e):null,[e]);return t}function h(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(a.PathnameContext)}function y(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,r){void 0===r&&(r={});let n=t[1];for(let t of Object.values(n)){let n=t[0],o=Array.isArray(n),a=o?n[1]:n;!a||a.startsWith("__PAGE__")||(o&&(r[n[0]]=n[1]),r=e(t,r))}return r}(e.tree):null}function v(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let a;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)a=t[1][r];else{var i;let e=t[1];a=null!=(i=e.children)?i:Object.values(e)[0]}if(!a)return o;let l=a[0],c=(0,s.getSegmentValue)(l);return!c||c.startsWith("__PAGE__")?o:(o.push(c),e(a,r,!1,o))}(t,e)}function b(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9480:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},991:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return s},redirect:function(){return l},isRedirectError:function(){return c},getURLFromRedirectError:function(){return u},getRedirectTypeFromError:function(){return f}});let a=r(1465),i="NEXT_REDIRECT";function s(e,t){let r=Error(i);r.digest=i+";"+t+";"+e;let n=a.requestAsyncStorage.getStore();return n&&(r.mutableCookies=n.mutableCookies),r}function l(e,t){throw void 0===t&&(t="replace"),s(e,t)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n]=e.digest.split(";",3);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n}function u(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1465:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(9788),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6940:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},833:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",a="navigate",i="restore",s="server-patch",l="prefetch",c="fast-refresh",u="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2817:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1152:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8754),o=n._(r(7294)),a=r(8769),i=r(2009),s=r(3507),l=r(6139),c=r(328),u=r(5330),f=r(2429),p=r(1300),d=r(2817),m=r(7800),h=r(833),y=new Set;function g(e,t,r,n,o,a){if(!a&&!(0,i.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+o;if(y.has(a))return;y.add(a)}let s=a?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(s).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:y,children:b,prefetch:x=null,passHref:w,replace:O,shallow:E,scroll:S,locale:j,onClick:Z,onMouseEnter:k,onTouchStart:P,legacyBehavior:R=!1,...M}=e;r=b,R&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let F=!1!==x,T=null===x?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,_=o.default.useContext(u.RouterContext),C=o.default.useContext(f.AppRouterContext),A=null!=_?_:C,N=!_,{href:$,as:L}=o.default.useMemo(()=>{if(!_){let e=v(s);return{href:e,as:y?v(y):e}}let[e,t]=(0,a.resolveHref)(_,s,!0);return{href:e,as:y?(0,a.resolveHref)(_,y):t||e}},[_,s,y]),I=o.default.useRef($),z=o.default.useRef(L);R&&(n=o.default.Children.only(r));let W=R?n&&"object"==typeof n&&n.ref:t,[D,H,B]=(0,p.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(z.current!==L||I.current!==$)&&(B(),z.current=L,I.current=$),D(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[L,W,$,B,D]);o.default.useEffect(()=>{A&&H&&F&&g(A,$,L,{locale:j},{kind:T},N)},[L,$,H,j,F,null==_?void 0:_.locale,A,N,T]);let Y={ref:V,onClick(e){R||"function"!=typeof Z||Z(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,a,s,l,c,u,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:s,locale:c,scroll:l}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?o.default.startTransition(m):m()}(e,A,$,L,O,E,S,j,N,F)},onMouseEnter(e){R||"function"!=typeof k||k(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(F||!N)&&g(A,$,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:T},N)},onTouchStart(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(F||!N)&&g(A,$,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:T},N)}};if((0,l.isAbsoluteUrl)(L))Y.href=L;else if(!R||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==_?void 0:_.locale,t=(null==_?void 0:_.isLocaleDomain)&&(0,d.getDomainLocale)(L,e,null==_?void 0:_.locales,null==_?void 0:_.domainLocales);Y.href=t||(0,m.addBasePath)((0,c.addLocale)(L,e,null==_?void 0:_.defaultLocale))}return R?o.default.cloneElement(n,Y):o.default.createElement("a",{...M,...Y},r)}),x=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1300:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(7294),o=r(9616),a="function"==typeof IntersectionObserver,i=new Map,s=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!a,[u,f]=(0,n.useState)(!1),p=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{p.current=e},[]);(0,n.useEffect)(()=>{if(a){if(c||u)return;let e=p.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},s.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,u,p.current]);let m=(0,n.useCallback)(()=>{f(!1)},[]);return[d,u,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return a},useServerInsertedHTML:function(){return i}});let n=r(1757),o=n._(r(7294)),a=o.default.createContext(null);function i(e){let t=(0,o.useContext)(a);t&&t(e)}},5676:function(e){e.exports={style:{fontFamily:"'__Bebas_Neue_6a3ae9', '__Bebas_Neue_Fallback_6a3ae9'",fontWeight:400,fontStyle:"normal"},className:"__className_6a3ae9"}},9008:function(e,t,r){e.exports=r(429)},1664:function(e,t,r){e.exports=r(1152)},9332:function(e,t,r){e.exports=r(8371)},1163:function(e,t,r){e.exports=r(9843)},4415:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case a:case f:case p:return e;default:switch(e=e&&e.$$typeof){case c:case l:case u:case m:case d:case s:return e;default:return t}}case n:return t}}}(e)===o}},4954:function(e,t,r){"use strict";e.exports=r(4415)},7005:function(e,t,r){var n=r(7294),o=n&&"object"==typeof n&&"default"in n?n:{default:n};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n}\n\n.child {\n  transform: var(--transform);\n}');let a=n.forwardRef(function({style:e={},className:t="",autoFill:r=!1,play:a=!0,pauseOnHover:i=!1,pauseOnClick:s=!1,direction:l="left",speed:c=50,delay:u=0,loop:f=0,gradient:p=!1,gradientColor:d=[255,255,255],gradientWidth:m=200,onFinish:h,onCycleComplete:y,onMount:g,children:v},b){let[x,w]=n.useState(0),[O,E]=n.useState(0),[S,j]=n.useState(1),[Z,k]=n.useState(!1),P=n.useRef(null),R=b||P,M=n.useRef(null),F=n.useCallback(()=>{if(M.current&&R.current){let e=R.current.getBoundingClientRect(),t=M.current.getBoundingClientRect(),n=e.width,o=t.width;("up"===l||"down"===l)&&(n=e.height,o=t.height),r&&n&&o?j(o<n?Math.ceil(n/o):1):j(1),w(n),E(o)}},[r,R,l]);n.useEffect(()=>{if(Z&&(F(),M.current&&R.current)){let e=new ResizeObserver(()=>F());return e.observe(R.current),e.observe(M.current),()=>{e&&e.disconnect()}}},[F,R,Z]),n.useEffect(()=>{F()},[F,v]),n.useEffect(()=>{k(!0)},[]),n.useEffect(()=>{"function"==typeof g&&g()},[]);let T=n.useMemo(()=>r?O*S/c:O<x?x/c:O/c,[r,x,O,S,c]),_=`rgba(${d[0]}, ${d[1]}, ${d[2]}`,C=n.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||i?"paused":"running","--pause-on-click":!a||i&&!s||s?"paused":"running","--width":"up"===l||"down"===l?"100vh":"100%","--transform":"up"===l?"rotate(-90deg)":"down"===l?"rotate(90deg)":"none"}),[e,a,i,s,l]),A=n.useMemo(()=>({"--gradient-color":`${_}, 1), ${_}, 0)`,"--gradient-width":"number"==typeof m?`${m}px`:m}),[_,m]),N=n.useMemo(()=>({"--play":a?"running":"paused","--direction":"left"===l?"normal":"reverse","--duration":`${T}s`,"--delay":`${u}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":r?"auto":"100%"}),[a,l,T,u,f,r]),$=n.useMemo(()=>({"--transform":"up"===l?"rotate(90deg)":"down"===l?"rotate(-90deg)":"none"}),[l]),L=n.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>o.default.createElement(n.Fragment,{key:t},n.Children.map(v,e=>o.default.createElement("div",{style:$,className:"child"},e)))),[$,v]);return Z?o.default.createElement("div",{ref:R,style:C,className:"marquee-container "+t},p&&o.default.createElement("div",{style:A,className:"overlay"}),o.default.createElement("div",{className:"marquee",style:N,onAnimationIteration:y,onAnimationEnd:h},o.default.createElement("div",{className:"initial-child-container",ref:M},n.Children.map(v,e=>o.default.createElement("div",{style:$,className:"child"},e))),L(S-1)),o.default.createElement("div",{className:"marquee",style:N},L(S))):null});t.Z=a},826:function(e,t,r){"use strict";let n;r.d(t,{pT:function(){return K}});var o=r(7294),a=r(917);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let s=new Map,l=new WeakMap,c=0;function u(e,t,r={},o=n){if(void 0===window.IntersectionObserver&&void 0!==o){let n=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:a,observer:i,elements:u}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(l.has(r)||(c+=1,l.set(r,c.toString())),l.get(r)):"0":e[t]}`}).toString(),r=s.get(t);if(!r){let n;let o=new Map,a=new IntersectionObserver(t=>{t.forEach(t=>{var r;let a=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(r=o.get(t.target))||r.forEach(e=>{e(a,t)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:o},s.set(t,r)}return r}(r),f=u.get(e)||[];return u.has(e)||u.set(e,f),f.push(t),i.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(u.delete(e),i.unobserve(e)),0===u.size&&(i.disconnect(),s.delete(a))}}let f=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!=typeof e.children}class d extends o.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),p(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:o,fallbackInView:a}=this.props;this._unobserveCb=u(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:o},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!p(this.props)){let{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}let e=this.props,{children:t,as:r}=e,n=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,f);return o.createElement(r||"div",i({ref:this.handleNode},n),t)}}function m({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:i,skip:s,initialInView:l,fallbackInView:c,onChange:f}={}){var p;let[d,m]=o.useState(null),h=o.useRef(),[y,g]=o.useState({inView:!!l,entry:void 0});h.current=f,o.useEffect(()=>{let o;if(!s&&d)return o=u(d,(e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&i&&o&&(o(),o=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},c),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,d,a,n,i,s,r,c,t]);let v=null==(p=y.entry)?void 0:p.target,b=o.useRef();d||!v||i||s||b.current===v||(b.current=v,g({inView:!!l,entry:void 0}));let x=[m,y.inView,y.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var h=r(4954),y=r(5893),g=r(5260);r(8417),r(8679),r(8137),r(7278);var v=y.Fragment;function b(e,t,r){return g.h.call(t,"css")?y.jsx(g.E,(0,g.c)(e,t),r):y.jsx(e,t,r)}a.F4`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,a.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,a.F4`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,a.F4`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,a.F4`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,a.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,a.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,a.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,a.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,a.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,a.F4`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,a.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,a.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var x=a.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,w=a.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O=a.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E=a.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S=a.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j=a.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z=a.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k=a.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P=a.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R=a.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M=a.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F=a.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T=a.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function _(e){var t;return t=()=>null,r=>r?e():t()}var C=e=>{let{cascade:t=!1,damping:r=.5,delay:n=0,duration:i=1e3,fraction:s=0,keyframes:l=j,triggerOnce:c=!1,className:u,style:f,childClassName:p,childStyle:m,children:y,onVisibilityChange:g}=e,x=(0,o.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:n=j,iterationCount:o=1}){return a.iv`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:l,duration:i}),[i,l]);return void 0==y?null:"string"==typeof y||"number"==typeof y||"boolean"==typeof y?b(N,{...e,animationStyles:x,children:String(y)}):(0,h.isFragment)(y)?b($,{...e,animationStyles:x}):b(v,{children:o.Children.map(y,(l,h)=>{if(!(0,o.isValidElement)(l))return null;let y=n+(t?h*i*r:0);switch(l.type){case"ol":case"ul":return b(a.ms,{children:({cx:t})=>b(l.type,{...l.props,className:t(u,l.props.className),style:Object.assign({},f,l.props.style),children:b(C,{...e,children:l.props.children})})});case"li":return b(d,{threshold:s,triggerOnce:c,onChange:g,children:({inView:e,ref:t})=>b(a.ms,{children:({cx:r})=>b(l.type,{...l.props,ref:t,className:r(p,l.props.className),css:_(()=>x)(e),style:Object.assign({},m,l.props.style,{animationDelay:y+"ms"})})})});default:return b(d,{threshold:s,triggerOnce:c,onChange:g,children:({inView:e,ref:t})=>b("div",{ref:t,className:u,css:_(()=>x)(e),style:Object.assign({},f,{animationDelay:y+"ms"}),children:b(a.ms,{children:({cx:e})=>b(l.type,{...l.props,className:e(p,l.props.className),style:Object.assign({},m,l.props.style)})})})})}})})},A={display:"inline-block",whiteSpace:"pre"},N=e=>{var t,r;let{animationStyles:n,cascade:o=!1,damping:a=.5,delay:i=0,duration:s=1e3,fraction:l=0,triggerOnce:c=!1,className:u,style:f,children:p,onVisibilityChange:d}=e,{ref:h,inView:y}=m({triggerOnce:c,threshold:l,onChange:d});return(t=()=>b("div",{ref:h,className:u,style:Object.assign({},f,A),children:p.split("").map((e,t)=>b("span",{css:_(()=>n)(y),style:{animationDelay:i+t*s*a+"ms"},children:e},t))}),r=()=>b($,{...e,children:p}),r=>r?t():r())(o)},$=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:n=!1,className:o,style:a,children:i,onVisibilityChange:s}=e,{ref:l,inView:c}=m({triggerOnce:n,threshold:r,onChange:s});return b("div",{ref:l,className:o,css:_(()=>t)(c),style:a,children:i})};a.F4`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,a.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,a.F4`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,a.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,a.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,a.F4`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var L=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,I=a.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,z=a.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,W=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,D=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,H=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,B=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,V=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Y=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,X=a.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,U=a.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,q=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,G=a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,K=e=>{let{big:t=!1,direction:r,reverse:n=!1,...a}=e,i=(0,o.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?I:w;case"bottom-right":return t?z:O;case"down":return e?t?D:S:t?W:E;case"left":return e?t?B:Z:t?H:j;case"right":return e?t?Y:P:t?V:k;case"top-left":return t?X:R;case"top-right":return t?U:M;case"up":return e?t?G:T:t?q:F;default:return t?L:x}})(t,n,r),[t,r,n]);return b(C,{keyframes:i,...a})};a.F4`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,a.F4`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,a.F4`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,a.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,a.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,a.F4`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,a.F4`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,a.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,a.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,a.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,a.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,a.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,a.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,a.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,a.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,a.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,a.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,a.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,a.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,a.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,a.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,a.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,a.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,a.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,a.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,a.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,a.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,a.F4`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,a.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,a.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,a.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,a.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);