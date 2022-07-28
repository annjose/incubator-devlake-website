"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3206],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6628:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},s=void 0,l={unversionedId:"Overview/Introduction",id:"version-v0.11/Overview/Introduction",title:"Introduction",description:"General introduction of Apache DevLake",source:"@site/versioned_docs/version-v0.11/Overview/Introduction.md",sourceDirName:"Overview",slug:"/Overview/Introduction",permalink:"/zh/docs/v0.11/Overview/Introduction",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Overview/Introduction.md",tags:[],version:"v0.11",sidebarPosition:1,frontMatter:{title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},sidebar:"docsSidebar",next:{title:"Architecture",permalink:"/zh/docs/v0.11/Overview/Architecture"}},d={},u=[{value:"What is Apache DevLake?",id:"what-is-apache-devlake",level:2},{value:"What can be accomplished with DevLake?",id:"what-can-be-accomplished-with-devlake",level:2}],p={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-apache-devlake"},"What is Apache DevLake?"),(0,a.kt)("p",null,"Apache DevLake is an open-source dev data platform that ingests, analyzes, and visualizes the fragmented data from DevOps tools to distill insights for engineering productivity."),(0,a.kt)("p",null,"Apache DevLake is designed for developer teams looking to make better sense of their development process and to bring a more data-driven approach to their own practices. You can ask Apache DevLake many questions regarding your development process. Just connect and query."),(0,a.kt)("h2",{id:"what-can-be-accomplished-with-devlake"},"What can be accomplished with DevLake?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Collect DevOps data across the entire Software Development Life Cycle (SDLC) and connect the siloed data with a standard ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/DataModels/DevLakeDomainLayerSchema"},"data model"),"."),(0,a.kt)("li",{parentName:"ol"},"Visualize out-of-the-box engineering ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/EngineeringMetrics"},"metrics")," in a series of use-case driven dashboards"),(0,a.kt)("li",{parentName:"ol"},"Easily extend DevLake to support your data sources, metrics, and dashboards with a flexible ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/Overview/Architecture"},"framework")," for data collection and ETL.")))}v.isMDXComponent=!0}}]);