"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7409,2509,9514],{7522:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,c(c({ref:t},s),{},{components:n})):a.createElement(f,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4712:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(9901),r=n(7522),o=n(9895),c=n(8772),l=n(5789),i=n(3637),u=n(393),s=n(9748),d=n(3920),m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(6511),f=n(264),b=n(1908),v=n(9746),h=n(3066),E="menuLinkText_3ggb",g=["items"],y=["item"],k=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],_=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,d.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,f.Z)(e,y);return"category"===t.type?0===t.items.length?null:a.createElement(O,(0,d.Z)({item:t},n)):a.createElement(T,(0,d.Z)({item:t},n))}function O(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,c=e.level,u=(0,f.Z)(e,k),s=n.items,m=n.label,p=n.collapsible,b=n.className,v=_(n,o),h=(0,i.uR)({initialState:function(){return!!p&&(!v&&n.collapsed)}}),g=h.collapsed,y=h.setCollapsed,C=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:v,collapsed:g,setCollapsed:y}),a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":g},b)},a.createElement("a",(0,d.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&v},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),C()}:void 0,href:p?"#":void 0},u),m),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(N,{items:s,tabIndex:g?-1:0,onItemClick:r,activePath:o,level:c+1})))}function T(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,c=(0,f.Z)(e,C),u=t.href,s=t.label,m=t.className,p=_(t,r);return a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:s},a.createElement(b.default,(0,d.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:u},(0,v.Z)(u)&&{onClick:n},c),(0,v.Z)(u)?s:a.createElement("span",null,s,a.createElement(h.Z,null))))}var Z="sidebar_1L4M",w="sidebarWithHideableNavbar_3wtb",I="sidebarHidden_2JBz",P="sidebarLogo_2nZm",M="menu_3Wdd",x="menuWithAnnouncementBar_qdU6",j="collapseSidebarButton_CBN2",A="collapseSidebarButtonIcon_3LWp";function L(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",j),onClick:t},a.createElement(m,{className:A}))}function B(e){var t,n,r=e.path,o=e.sidebar,c=e.onCollapse,u=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return a.createElement("div",{className:(0,l.Z)(Z,(t={},t[w]=p,t[I]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:P}),a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",M,(n={},n[x]=d,n))},a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:o,activePath:r,level:1}))),f&&a.createElement(L,{onClick:c}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function F(e){return a.createElement(i.Cv,{component:D,props:e})}var R=a.memo(B),H=a.memo(F);function W(e){var t=(0,u.default)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(R,e),r&&a.createElement(H,e))}var z=n(5578),U=n(5073),Y="backToTopButton_3C2v",q="backToTopButtonShow_3eNy";function X(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var J=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),c=X(),u=c.smoothScrollTop,s=c.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var c=n<a;if(c||s(),n<300)r(!1);else if(c){var l=document.documentElement.scrollHeight;n+window.innerHeight<l&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",i.kM.common.backToTopButton,Y,(e={},e[q]=n,e)),type:"button",onClick:function(){return u()}})},K=n(8273),G={docPage:"docPage_298p",docMainContainer:"docMainContainer_1yf_",docSidebarContainer:"docSidebarContainer_3w39",docMainContainerEnhanced:"docMainContainerEnhanced_1DEL",docSidebarContainerHidden:"docSidebarContainerHidden_3Mjp",collapsedDocSidebar:"collapsedDocSidebar_3Lwt",expandSidebarButtonIcon:"expandSidebarButtonIcon_1oek",docItemWrapperEnhanced:"docItemWrapperEnhanced_27kN"},Q=n(3753);function V(e){var t,n,o,u=e.currentDocRoute,s=e.versionMetadata,d=e.children,f=s.pluginId,b=s.version,v=u.sidebar,h=v?s.docsSidebars[v]:void 0,E=(0,a.useState)(!1),g=E[0],y=E[1],k=(0,a.useState)(!1),C=k[0],_=k[1],N=(0,a.useCallback)((function(){C&&_(!1),y(!g)}),[C]);return a.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,i.os)(f,b)}},a.createElement("div",{className:G.docPage},a.createElement(J,null),h&&a.createElement("aside",{className:(0,l.Z)(G.docSidebarContainer,(t={},t[G.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G.docSidebarContainer)&&g&&_(!0)}},a.createElement(W,{key:v,sidebar:h,path:u.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:G.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:G.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,l.Z)(G.docMainContainer,(n={},n[G.docMainContainerEnhanced]=g||!h,n))},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",G.docItemWrapper,(o={},o[G.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:z.default},d)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,c=t.find((function(e){return(0,K.LX)(r.pathname,e)}));return c?a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(V,{currentDocRoute:c,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(U.default,e)}},5073:function(e,t,n){n.r(t);var a=n(9901),r=n(8772),o=n(6511);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2663:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(9901).createContext({options:{minimal:!1,pluginId:"default"},reflections:{}});t.ApiDataContext=a},1635:function(e,t,n){var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(7346),n(9915);var o=n(9901),c=n(4712),l=n(2663),i=function(e){return e&&e.__esModule?e:{default:e}},u=i(o),s=i(c);function d(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],o=a[1];if("id"===r){var c="type"in e;(!c||c&&"reference"!==e.type)&&(t[Number(o)]=e,n&&(e.parentId=n.id))}else Array.isArray(o)?o.forEach((function(n){d(n)&&m(n,t,e)})):d(o)&&m(o,t,e)})),t}function p(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,c=r(e,a),i=o.useMemo((function(){return{options:t,reflections:p(n)}}),[t,n]);return u.default.createElement(l.ApiDataContext.Provider,{value:i},u.default.createElement(s.default,c))}},7346:function(e,t,n){n.r(t)},9915:function(e,t,n){n.r(t)}}]);