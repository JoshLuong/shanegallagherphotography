(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4305)}])},4305:function(e,t,n){"use strict";n.r(t),n.d(t,{NO_SECTION_OPEN:function(){return $},__N_SSG:function(){return J},default:function(){return ee}});var i=n(5893),o=n(7935),r=n.n(o),a=n(7294),s=n(9332),_=n(8271),c=n(5190),l=n(8999),u=n(7005),d=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))},[]),[e]},g=()=>{let[e,t]=(0,a.useState)(0),[n,i]=(0,a.useState)(0),[o,r]=(0,a.useState)(!1),s=()=>{t(window.innerWidth),i(window.innerHeight),r(window.innerWidth<=800)};return(0,a.useEffect)(()=>(s(),window.addEventListener("resize",s),r(window.innerWidth<=800),()=>window.removeEventListener("resize",s)),[]),{width:e,height:n,isMobile:o}},v=n(5436),m=n.n(v);let p=(0,_.ZP)(e=>{let{className:t,...n}=e;return(0,i.jsx)(c.Z,{...n,arrow:!0,classes:{popper:t}})})(e=>{let{theme:t}=e;return{["& .".concat(l.Z.arrow)]:{color:t.palette.common.black},["& .".concat(l.Z.tooltip)]:{backgroundColor:t.palette.common.black}}});var w=e=>{let{title:t,backgroundColor:n,titleColor:o,onClick:r,onMobileClick:s,openSection:_,containerWidth:c,fastAnimation:l,index:v}=e,[w]=d(),C=(0,a.useRef)(null),{width:h,isMobile:f}=g(),x=(0,a.useMemo)(()=>h<=800?1:20,[h]),b=t.length*x*.75,S=(0,a.useMemo)(()=>v===_,[_,v]),[j,P]=(0,a.useState)(!0),[I,L]=(0,a.useState)(!1),[N,T]=(0,a.useState)(""),R=()=>{var e,t;if(f){let e=null===(t=C.current)||void 0===t?void 0:t.clientHeight;T("".concat(e,"px"))}else{let t=null===(e=C.current)||void 0===e?void 0:e.clientWidth;T("".concat(t,"px"))}};(0,a.useEffect)(()=>{R();let e=setTimeout(()=>{P(!1)},450+75*v);return()=>{clearTimeout(e)}},[v,R,_]),(0,a.useEffect)(()=>{w||setTimeout(()=>{R()},380)},[h,S,_]);let k=(0,a.useMemo)(()=>{let e=w||f?{}:{fontSize:N},t=c&&!S?"".concat(c,"px"):"100%",i={width:t,...e};return I||S||j?(j&&(i={pointerEvents:"none",...i}),{...i,backgroundColor:n,color:o}):i},[n,c,N,I,f,S,j,o]);return(0,a.useEffect)(()=>{let e=document.getElementById("title");if(e){var t=window.getComputedStyle(e,null).getPropertyValue("z-index");e.style["-webkit-animation-delay"]=-t/36+"s !important"}},[l]),(0,i.jsx)(p,{title:t,followCursor:!0,children:(0,i.jsx)("section",{className:m().landingPageSection__container,style:{...k},onClick:()=>{f?s():r&&r()},onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),"aria-label":t,"aria-controls":"subsection__"+t,"aria-expanded":S,children:(0,i.jsx)("div",{ref:C,className:m().landingPageSection__title,children:f?(0,i.jsx)(u.Z,{speed:100,children:(0,i.jsxs)("div",{children:[t,"\xa0"]})}):(0,i.jsx)("p",{id:"title",style:{transition:"animation 180s",animation:"running ".concat(m().bookTicker," linear infinite"),animationDuration:l||j?"".concat(b/30,"s"):"".concat(b,"s")},children:Array(x).fill(0).map((e,n)=>(0,i.jsxs)("span",{"aria-hidden":!0,style:n%2&&t.length<1?{margin:"-1em",opacity:"10%",fontSize:"180%"}:{},children:[t,"\xa0"]},n))})})})})},C=n(5676),h=n.n(C),f=n(3946),x=n(594),b=n(42),S=n.n(b),j=n(5675),P=n.n(j),I=n(826),L=n(496),N=n.n(L),T=e=>{let{previewImageURL:t,ref:n,onLoad:o,loaded:r,className:a,width:s,fadeLeft:_,delay:c,duration:l}=e;return(0,i.jsx)(I.pT,{delay:null!=c?c:500,duration:null!=l?l:1200,className:N().previewContent__imageContainer,children:(0,i.jsx)(P(),{ref:n,className:"".concat(N().previewContent__image,' " ').concat(a),onLoad:o,src:t,alt:"",loading:"lazy",width:"0",height:"0",style:{width:s||"50%",height:"100%"},loader:e=>{let{src:t}=e;return t}})})};let R=()=>{let[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(),i=()=>{t(!0)};return(0,a.useEffect)(()=>{n.current&&n.current.complete&&i()}),[n,e,i]};var k=n(7436),y=n.n(k),E=e=>{let{subsectionContent:t,colourScheme:n}=e,[o,r,a]=R();console.log("left");let _=(0,s.useRouter)();if(!t)return null;let{previewImage:c,previewDescription:l,title:u,url:d}=t,{tertiary:g}=n,v=()=>_.push("/projects/".concat(null==d?void 0:d.id));return console.log("LEFT"),(0,i.jsxs)("div",{className:y().previewLeftImageContent__container,children:[(0,i.jsx)("div",{className:y().previewLeftImageContent__text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,i.jsx)("div",{className:y().previewLeftImageContent__imagesContainer,onClick:()=>v(),children:[1,2,3].map((e,t)=>(0,i.jsx)("div",{className:y().previewLeftImageContent__image,children:(0,i.jsx)(T,{loaded:r,width:"100%",ref:o,onLoad:a,previewImageURL:(null==c?void 0:c.url)||""})},t))})]})},D=n(9975),M=n.n(D),z=e=>{let{date:t,className:n}=e;return(0,i.jsx)("div",{className:"".concat(M().previewContent__subsectionDate," ").concat(n),children:(0,i.jsx)("span",{className:M().previewContent__rotate,children:t})})},F=n(1163),Z=n(9099),U=n.n(Z),W=n(1664),A=n.n(W),B=e=>{let{subsectionContent:t,colourScheme:n}=e,[o,r,a]=R();if((0,F.useRouter)(),!t)return null;let{previewImage:s,previewDescription:_,title:c,url:l}=t,{tertiary:u}=n;return t.titleFontSize&&t.titleFontSize,(0,i.jsx)(I.pT,{delay:300,duration:1800,children:(0,i.jsxs)("div",{className:U().previewRightImageContent__container,children:[(0,i.jsx)(z,{date:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",className:U().previewContent__subsectionDateRight}),(0,i.jsx)("div",{className:U().previewRightImageContent__imagesContainer,children:(0,i.jsx)(A(),{href:"/projects/".concat(null==l?void 0:l.id),children:[1,2,3].map((e,t)=>(0,i.jsx)("div",{className:U().previewRightImageContent__image,children:(0,i.jsx)(T,{loaded:r,width:"100%",ref:o,onLoad:a,previewImageURL:(null==s?void 0:s.url)||""})},t))})})]})})},G=n(6886),H=n(5623),O=n.n(H),V=n(9287),Y=n.n(V),q=e=>{let{subsectionContent:t,colourScheme:n}=e,[o,r,a]=R();if((0,F.useRouter)(),!t)return null;let{previewImage:s,url:_,title:c}=t,{tertiary:l}=n;return(0,i.jsxs)(G.ZP,{container:!0,className:O().previewImageContent__container,children:[(0,i.jsx)(T,{loaded:r,fadeLeft:!0,ref:o,onLoad:a,previewImageURL:(null==s?void 0:s.url)||"",className:"preview-fill-image__background",delay:700,duration:800,width:"100%"}),(0,i.jsx)(z,{date:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",className:Y().previewFullImageText})]})},K=e=>{let{show:t,onClick:n,subsectionContent:o,colourScheme:r,theme:s}=e,{isMobile:_}=g();if((0,a.useEffect)(()=>{_&&n()},[_,n]),!r)return null;let{primary:c,secondary:l}=r;return(0,i.jsx)("div",{className:"".concat(S().subsection__container," ").concat(h().className),style:{backgroundColor:"black",color:"".concat(l)},role:"region",id:"subsection__"+(null==o?void 0:o.title),tabIndex:t?0:-1,children:(0,i.jsx)("div",{className:S().subsection__innerContainer,style:{...t?{width:"50vw"}:{width:"0"}},children:t&&(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:S().subsection__closeButton,children:(0,i.jsx)(f.Z,{onClick:n,"aria-label":"close button",style:{color:"white"},children:(0,i.jsx)(x.Z,{})})}),(()=>{switch(s){case"align-left":return(0,i.jsx)(E,{colourScheme:r,subsectionContent:o});case"align-right":return(0,i.jsx)(B,{colourScheme:r,subsectionContent:o});case"full-image-background":return(0,i.jsx)(q,{colourScheme:r,subsectionContent:o});default:return null}})()]})})})},Q=n(9008),X=n.n(Q),J=!0;let $=-1;function ee(e){let{items:t}=e,[n,o]=(0,a.useState)($),[_,c]=(0,a.useState)(!1),l=(0,s.useRouter)();return t?(0,i.jsxs)("main",{children:[(0,i.jsx)(X(),{children:(0,i.jsx)("title",{children:"Home"})}),(0,i.jsx)("div",{className:"".concat(r().landingPage__container," "),children:(0,i.jsx)("div",{className:r().landingPage__containerSections,children:t.map((e,t)=>{var r;if(!e)return null;let{title:a,previewContent:s,width:u,colourScheme:d}=e,g=n===t,v=()=>{o($)},m={backgroundColor:(null==d?void 0:d.primary)||"",titleColor:(null==d?void 0:d.secondary)||"",title:a||""};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{openSection:n,onClick:()=>{if(g){v();return}o(t),setTimeout(()=>{c(!0)},150),setTimeout(()=>{c(!1)},800)},onMobileClick:()=>{var e;return l.push("/projects/".concat(null==s?void 0:null===(e=s.url)||void 0===e?void 0:e.id))},fastAnimation:_,containerWidth:u||void 0,...m,index:t}),(0,i.jsx)(K,{onClick:v,show:g,subsectionContent:s,colourScheme:d,theme:null==s?void 0:null===(r=s.contentType)||void 0===r?void 0:r.type})]})})})})]}):null}},5436:function(e){e.exports={landingPageSection__container:"LandingPageSection_landingPageSection__container__bBpj_",landingPageSection__title:"LandingPageSection_landingPageSection__title__eGYq7","landing-page__container-sections":"LandingPageSection_landing-page__container-sections__z_8qd",bookTicker:"LandingPageSection_bookTicker__FsV9S"}},9975:function(e){e.exports={previewContent__subsectionDate:"PreviewContentDate_previewContent__subsectionDate__DAj2M",previewContent__rotate:"PreviewContentDate_previewContent__rotate__R1g6K"}},496:function(e){e.exports={previewContent__image:"PreviewContentImage_previewContent__image__zCQ3t","previewContent__subsectionTitle-right":"PreviewContentImage_previewContent__subsectionTitle-right__MWaYD",previewContent__imageContainer:"PreviewContentImage_previewContent__imageContainer__RaSxT"}},5623:function(e){e.exports={previewImageContent__container:"PreviewContentShared_previewImageContent__container__Czzj6",previewImageContent__text:"PreviewContentShared_previewImageContent__text__1B99V",previewContentGrid:"PreviewContentShared_previewContentGrid__bXzU2",previewContent__subsectionTextContainer:"PreviewContentShared_previewContent__subsectionTextContainer__p_p06",previewContent__subsectionTitle:"PreviewContentShared_previewContent__subsectionTitle__YaiH7",previewContent__subsectionDesc:"PreviewContentShared_previewContent__subsectionDesc__2aSh_",previewContent__hover:"PreviewContentShared_previewContent__hover__Np70M",hover:"PreviewContentShared_hover__Qchgm",previewContent__subsectionDateLeft:"PreviewContentShared_previewContent__subsectionDateLeft__8rFPj",previewContent__subsectionTitleRight:"PreviewContentShared_previewContent__subsectionTitleRight__LEQq6"}},9287:function(e){e.exports={previewFullImageText:"PreviewFullImage_previewFullImageText__VmA4M"}},7436:function(e){e.exports={previewLeftImageContent__container:"PreviewLeftImageContent_previewLeftImageContent__container__cfnoi",previewLeftImageContent__imagesContainer:"PreviewLeftImageContent_previewLeftImageContent__imagesContainer__v5THF",previewLeftImageContent__image:"PreviewLeftImageContent_previewLeftImageContent__image__C3RWo",previewLeftImageContent__text:"PreviewLeftImageContent_previewLeftImageContent__text__cNKKU"}},9099:function(e){e.exports={previewRightImageContent__container:"PreviewRightImageContent_previewRightImageContent__container__Ftjmf",previewRightImageContent__imagesContainer:"PreviewRightImageContent_previewRightImageContent__imagesContainer__MC3e8",previewRightImageContent__image:"PreviewRightImageContent_previewRightImageContent__image__JgCnE"}},42:function(e){e.exports={subsection__container:"SubSection_subsection__container__Ch160",subsection__title:"SubSection_subsection__title__UPeq0",subsection__innerContainer:"SubSection_subsection__innerContainer__UgVxA",subsection__closeButton:"SubSection_subsection__closeButton__c0klu"}},7935:function(e){e.exports={landingPage__container:"index_landingPage__container__YKwLl",landingPage__containerSections:"index_landingPage__containerSections__SMYGc","landing-page__container":"index_landing-page__container__x3bM6"}}},function(e){e.O(0,[675,858,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);