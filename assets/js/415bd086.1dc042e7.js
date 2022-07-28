"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3723],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8912:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"DB Migration",description:"DB Migration\n",sidebar_position:3},s=void 0,c={unversionedId:"DeveloperManuals/DBMigration",id:"version-v0.11/DeveloperManuals/DBMigration",title:"DB Migration",description:"DB Migration\n",source:"@site/versioned_docs/version-v0.11/DeveloperManuals/DBMigration.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DBMigration",permalink:"/docs/v0.11/DeveloperManuals/DBMigration",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/DeveloperManuals/DBMigration.md",tags:[],version:"v0.11",sidebarPosition:3,frontMatter:{title:"DB Migration",description:"DB Migration\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/docs/v0.11/DeveloperManuals/PluginImplementation"},next:{title:"Notifications",permalink:"/docs/v0.11/DeveloperManuals/Notifications"}},p={},u=[{value:"Summary",id:"summary",level:2},{value:"Migration Script",id:"migration-script",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"How It Works",id:"how-it-works",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth framework itself and plugins define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,o.kt)("h2",{id:"migration-script"},"Migration Script"),(0,o.kt)("p",null,"Migration script describes how to do database migration.\nThey implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Script")," interface.\nWhen DevLake starts, scripts register themselves to the framework by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Register")," function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Script interface {\n    Up(ctx context.Context, db *gorm.DB) error\n    Version() uint64\n    Name() string\n}\n")),(0,o.kt)("h2",{id:"table-migration_history"},"Table ",(0,o.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,o.kt)("p",null,"The table tracks migration scripts execution and schemas changes.\nFrom which, DevLake could figure out the current state of database schemas."),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check ",(0,o.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,o.kt)("li",{parentName:"ol"},"Sort scripts by Version in ascending order."),(0,o.kt)("li",{parentName:"ol"},"Execute scripts."),(0,o.kt)("li",{parentName:"ol"},"Save results in the ",(0,o.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")))}d.isMDXComponent=!0}}]);