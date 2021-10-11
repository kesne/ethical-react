"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[289,630,514],{7522:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5968:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(9901),r=n(7522),o=n(6309),i=n(9568),l=n(5789),c=n(1980),s=n(7149),u=n(4440),d=n(428),m=n(3920),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(9596),b=n(264),h=n(2831),v=n(155),E=n(4458),g="menuLinkText_34Ab",y=["items"],C=["item"],_=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],k=function e(t,n){return"link"===t.type?(0,c.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},S=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,y);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(O,(0,m.Z)({key:t,item:e},n))})))}));function O(e){var t=e.item,n=(0,b.Z)(e,C);return"category"===t.type?0===t.items.length?null:a.createElement(T,(0,m.Z)({item:t},n)):a.createElement(Z,(0,m.Z)({item:t},n))}function T(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,i=(0,b.Z)(e,_),s=n.items,u=n.label,d=n.collapsible,p=k(n,o),f=(0,c.useCollapsible)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),h=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.usePrevious)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:h,setCollapsed:v}),a.createElement("li",{className:(0,l.Z)(c.ThemeClassNames.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":h})},a.createElement("a",(0,m.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[g]=!d,t)),onClick:d?function(e){e.preventDefault(),E()}:void 0,href:d?"#":void 0},i),u),a.createElement(c.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},a.createElement(S,{items:s,tabIndex:h?-1:0,onItemClick:r,activePath:o})))}function Z(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,b.Z)(e,N),i=t.href,s=t.label,u=k(t,r);return a.createElement("li",{className:(0,l.Z)(c.ThemeClassNames.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(h.default,(0,m.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:i},(0,v.Z)(i)&&{onClick:n},o),(0,v.Z)(i)?s:a.createElement("span",null,s,a.createElement(E.Z,null))))}var P="sidebar_3Ife",w="sidebarWithHideableNavbar_2XzS",I="sidebarHidden_1VEy",x="sidebarLogo_WdSq",j="menu_1_Qa",M="menuWithAnnouncementBar_2Yst",A="collapseSidebarButton_2CJ2",B="collapseSidebarButtonIcon_3ebn";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(p,{className:B}))}function F(e){var t,n,r=e.path,o=e.sidebar,i=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.useAnnouncementBar)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,c.useThemeConfig)(),f=p.navbar.hideOnScroll,b=p.hideableSidebar,h=(0,c.useAnnouncementBar)().isClosed;return a.createElement("div",{className:(0,l.Z)(P,(t={},t[w]=f,t[I]=s,t))},f&&a.createElement(d.Z,{tabIndex:-1,className:x}),a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",j,(n={},n[M]=!h&&m,n))},a.createElement("ul",{className:(0,l.Z)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},a.createElement(S,{items:o,activePath:r}))),b&&a.createElement(D,{onClick:i}))}var L=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,l.Z)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},a.createElement(S,{items:n,activePath:r,onItemClick:function(){return t()}}))};function H(e){return a.createElement(c.MobileSecondaryMenuFiller,{component:L,props:e})}var W=a.memo(F),R=a.memo(H);function z(e){var t=(0,s.default)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(R,e))}var Y=n(4674),J=n(1630),X=n(8273),q="backToTopButton_xp5P",G="backToTopButtonShow_1iun";function V(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var K=function(){var e,t=(0,X.TH)(),n=V(),r=n.smoothScrollTop,o=n.cancelScrollToTop,i=(0,a.useState)(!1),c=i[0],s=i[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,l.Z)("clean-btn",q,(e={},e[G]=c,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Q={docPage:"docPage_3OaG",docMainContainer:"docMainContainer_2FWn",docSidebarContainer:"docSidebarContainer_1JYu",docMainContainerEnhanced:"docMainContainerEnhanced_1HJf",docSidebarContainerHidden:"docSidebarContainerHidden_1k4G",collapsedDocSidebar:"collapsedDocSidebar_2LOv",expandSidebarButtonIcon:"expandSidebarButtonIcon_3mpE",docItemWrapperEnhanced:"docItemWrapperEnhanced_10bN"},U=n(5030);function $(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,m=u.pluginId,b=u.version,h=s.sidebar,v=h?u.docsSidebars[h]:void 0,E=(0,a.useState)(!1),g=E[0],y=E[1],C=(0,a.useState)(!1),_=C[0],N=C[1],k=(0,a.useCallback)((function(){_&&N(!1),y(!g)}),[_]);return a.createElement(i.Z,{wrapperClassName:c.ThemeClassNames.wrapper.docsPages,pageClassName:c.ThemeClassNames.page.docsDocPage,searchMetadatas:{version:b,tag:(0,c.docVersionSearchTag)(m,b)}},a.createElement("div",{className:Q.docPage},a.createElement(K,null),v&&a.createElement("aside",{className:(0,l.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&N(!0)}},a.createElement(z,{key:h,sidebar:v,path:s.path,onCollapse:k,isHidden:_}),_&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:k,onClick:k},a.createElement(p,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,l.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:Y.default},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,X.LX)(r.pathname,e)}));return i?a.createElement(a.Fragment,null,a.createElement(U.Z,null,a.createElement("html",{className:n.className})),a.createElement($,{currentDocRoute:i,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(J.default,e)}},1630:function(e,t,n){n.r(t);var a=n(9901),r=n(9568),o=n(9596);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7740:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(9901).createContext({options:{minimal:!1,pluginId:"default"},reflections:{}});t.ApiDataContext=a},5807:function(e,t,n){var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(4512),n(7861);var o=n(9901),i=n(5968),l=n(7740);function c(e){return e&&e.__esModule?e:{default:e}}var s=c(o),u=c(i);function d(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],o=a[1];if("id"===r){var i="type"in e;(!i||i&&"reference"!==e.type)&&(t[Number(o)]=e,n&&(e.parentId=n.id))}else Array.isArray(o)?o.forEach((function(n){d(n)&&m(n,t,e)})):d(o)&&m(o,t,e)})),t}function p(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,i=r(e,a),c=o.useMemo((function(){return{options:t,reflections:p(n)}}),[t,n]);return s.default.createElement(l.ApiDataContext.Provider,{value:c},s.default.createElement(u.default,i))}},4512:function(e,t,n){n.r(t)},7861:function(e,t,n){n.r(t)}}]);