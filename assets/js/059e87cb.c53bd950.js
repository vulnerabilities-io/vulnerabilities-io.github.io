"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),a=r(6010),i=r(2802),c=r(9960),o=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},5071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const c={},o="Create an Account",s={unversionedId:"getting-started/quick-start/create-an-account/index",id:"getting-started/quick-start/create-an-account/index",title:"Create an Account",description:"Create an account to access vulnerabilities.io and its features.",source:"@site/docs/getting-started/quick-start/create-an-account/index.mdx",sourceDirName:"getting-started/quick-start/create-an-account",slug:"/getting-started/quick-start/create-an-account/",permalink:"/docs/getting-started/quick-start/create-an-account/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/category/quickstart"},next:{title:"Login to An Account",permalink:"/docs/getting-started/quick-start/create-an-account/login-to-an-account"}},l={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...c}=e;return(0,a.kt)(d,(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-account"},"Create an Account"),(0,a.kt)("p",null,"Create an account to access vulnerabilities.io and its features."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://app.vulnerabilities.io"},"https://app.vulnerabilities.io")," and click ",(0,a.kt)("strong",{parentName:"li"},"Sign Up"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of login page - highlighted signup",src:r(7988).Z,width:"2876",height:"1746"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Type in your email address and desired password, then click ",(0,a.kt)("strong",{parentName:"li"},"Register"),". Note: We recommend enabling 2FA after you\u2019re signed in (see how to do this ",(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start/create-an-account/setup-2fa"},"here"),").")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of reistration page",src:r(6655).Z,width:"2870",height:"1748"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Enter your organisation name and accept our Terms and Conditions, then click ",(0,a.kt)("strong",{parentName:"li"},"Finish registration"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of reistration page",src:r(7690).Z,width:"2874",height:"1746"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"You\u2019ll then have full access to the plaftorm for ",(0,a.kt)("strong",{parentName:"li"},"free")," for 5 days. After which you'll need to set up a subscription. See more information on plans ",(0,a.kt)("a",{parentName:"li",href:"https://vulnerabilities.io/pricing"},"here"),".")),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},7988:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login_signup-68fdfb4ec0b6f1e81e203052b84a673b.png"},7690:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/org_with_tsandcs-b75963e8a25e53d52140e21f5f484523.png"},6655:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/signup_populated-52012f9560d2e19b8f5260ee56698de2.png"}}]);