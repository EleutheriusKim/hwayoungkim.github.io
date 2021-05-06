(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(110)),i={sidebar_position:5},c={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",isDocsHomePage:!1,title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/docs/docs/tutorial-basics/deploy-your-site",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docs/docs/tutorial-basics/markdown-features"},next:{title:"Congratulations!",permalink:"/docs/docs/tutorial-basics/congratulations"}},s=[{value:"Build your site",id:"build-your-site",children:[]},{value:"Deploy your site",id:"deploy-your-site",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Docusaurus is a ",Object(a.b)("strong",{parentName:"p"},"static-site-generator")," (also called ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),Object(a.b)("p",null,"It builds your site as simple ",Object(a.b)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),Object(a.b)("h2",{id:"build-your-site"},"Build your site"),Object(a.b)("p",null,"Build your site ",Object(a.b)("strong",{parentName:"p"},"for production"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),Object(a.b)("p",null,"The static files are generated in the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," folder."),Object(a.b)("h2",{id:"deploy-your-site"},"Deploy your site"),Object(a.b)("p",null,"Test your production build locally:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"build")," folder is now served at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),Object(a.b)("p",null,"You can now deploy the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," folder ",Object(a.b)("strong",{parentName:"p"},"almost anywhere")," easily, ",Object(a.b)("strong",{parentName:"p"},"for free")," or very small cost (read the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}u.isMDXComponent=!0},110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,y=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(y,c(c({ref:t},l),{},{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);