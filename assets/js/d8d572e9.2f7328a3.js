"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39],{7522:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(3920),a=n(264),o=(n(9901),n(7522)),i=["components"],l={sidebar_position:5},c="Setting up WalletConnect",p={unversionedId:"getting-started/wallet-connect",id:"getting-started/wallet-connect",isDocsHomePage:!1,title:"Setting up WalletConnect",description:"WalletConnect is a protocol that allows for dapps to easily connect to mobile wallets. Adding support for it is incredibly simple thanks to Web3Modal, and helps increase the user reach of your application.",source:"@site/docs/getting-started/wallet-connect.mdx",sourceDirName:"getting-started",slug:"/getting-started/wallet-connect",permalink:"/ethereal-react/getting-started/wallet-connect",editUrl:"https://github.com/kesne/ethereal-react/edit/main/packages/website/docs/getting-started/wallet-connect.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Loading and Error States",permalink:"/ethereal-react/getting-started/loading-and-error-states"},next:{title:"TypeChain Support",permalink:"/ethereal-react/advanced/typechain"}},s=[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Configuring the provider",id:"configuring-the-provider",children:[]}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},u=d("Tabs"),m=d("TabItem"),g={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-walletconnect"},"Setting up WalletConnect"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.org/"},"WalletConnect")," is a protocol that allows for dapps to easily connect to mobile wallets. Adding support for it is incredibly simple thanks to Web3Modal, and helps increase the user reach of your application."),(0,o.kt)("p",null,"For more details, you can read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/"},"WalletConnect documentation"),"."),(0,o.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This package requires that your application bundler provides certail globals that are common in Node.js environments.\nModern tooling like Vite do not provide these by default, and you will need to ensure that your environment is setup to provide the required globals."))),(0,o.kt)("p",null,"First, you need to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@walletconnect/web3-provider")," package with your preferred package manager."),(0,o.kt)(u,{groupId:"package-manager",defaultValue:"pnpm",values:[{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,o.kt)(m,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @walletconnect/web3-provider\n"))),(0,o.kt)(m,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @walletconnect/web3-provider\n"))),(0,o.kt)(m,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @walletconnect/web3-provider\n")))),(0,o.kt)("h2",{id:"configuring-the-provider"},"Configuring the provider"),(0,o.kt)("p",null,"The WalletConnect provider requires an Infrua Project ID. Getting one is simple and free, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://blog.infura.io/getting-started-with-infura-28e41844cc89/"},"following this guide")," to get your ID.\nThis ID is generally stored in an ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to be made available as an enviroment variable."),(0,o.kt)("p",null,"Once you have an ID, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"providerOptions")," to configure the WalletConnect provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { WalletProvider } from "ethereal-react";\nimport WalletConnectProvider from "@walletconnect/web3-provider";\n\nfunction App() {\n  return (\n    <WalletProvider\n      cacheProvider\n      providerOptions={{\n        walletconnect: {\n          package: WalletConnectProvider,\n          options: {\n            infuraId: process.env.NEXT_PUBLIC_INFURA_ID,\n          },\n        },\n      }}\n      fallback={<ConnectButton />}\n    >\n      <ConnectedApp />\n    </WalletProvider>\n  );\n}\n')),(0,o.kt)("p",null,"For more details and documentation of the WalletConnect provider options, read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/quick-start/dapps/web3-provider#setup"},"WalletConnect docs for dapps"),"."))}f.isMDXComponent=!0}}]);