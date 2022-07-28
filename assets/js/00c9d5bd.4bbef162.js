"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6959],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"RefDiff",description:"RefDiff Plugin\n"},u=void 0,s={unversionedId:"Plugins/refdiff",id:"version-v0.11/Plugins/refdiff",title:"RefDiff",description:"RefDiff Plugin\n",source:"@site/versioned_docs/version-v0.11/Plugins/refdiff.md",sourceDirName:"Plugins",slug:"/Plugins/refdiff",permalink:"/docs/v0.11/Plugins/refdiff",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Plugins/refdiff.md",tags:[],version:"v0.11",frontMatter:{title:"RefDiff",description:"RefDiff Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jira",permalink:"/docs/v0.11/Plugins/jira"},next:{title:"TAPD",permalink:"/docs/v0.11/Plugins/tapd"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Important Note",id:"important-note",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Development",id:"development",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"MacOS",id:"macos",level:3},{value:"Troubleshooting (MacOS)",id:"troubleshooting-macos",level:4}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"For development workload analysis, we often need to know how many commits have been created between 2 releases. This plugin calculates which commits differ between 2 Ref (branch/tag), and the result will be stored back into database for further analysis."),(0,o.kt)("h2",{id:"important-note"},"Important Note"),(0,o.kt)("p",null,"You need to run gitextractor before the refdiff plugin. The gitextractor plugin should create records in the ",(0,o.kt)("inlineCode",{parentName:"p"},"refs")," table in your DB before this plugin can be run."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This is a enrichment plugin based on Domain Layer data, no configuration needed"),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"In order to trigger the enrichment, you need to insert a new task into your pipeline."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"commits")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"refs")," are collected into your database, ",(0,o.kt)("inlineCode",{parentName:"li"},"refs")," table should contain records like following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"id                                            ref_type\ngithub:GithubRepo:384111310:refs/tags/0.3.5   TAG\ngithub:GithubRepo:384111310:refs/tags/0.3.6   TAG\ngithub:GithubRepo:384111310:refs/tags/0.5.0   TAG\ngithub:GithubRepo:384111310:refs/tags/v0.0.1  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.2.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.3.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.4.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.6.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.6.1  TAG\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"If you want to run calculateIssuesDiff, please configure GITHUB_PR_BODY_CLOSE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,o.kt)("li",{parentName:"ol"},"If you want to run calculatePrCherryPick, please configure GITHUB_PR_TITLE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,o.kt)("li",{parentName:"ol"},"And then, trigger a pipeline like following, you can also define sub tasks, calculateRefDiff will calculate commits between two ref, and creatRefBugStats will create a table to show bug list between two ref:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v -XPOST http://localhost:8080/pipelines --data @- <<\'JSON\'\n{\n    "name": "test-refdiff",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "repoId": "github:GithubRepo:384111310",\n                    "pairs": [\n                       { "newRef": "refs/tags/v0.6.0", "oldRef": "refs/tags/0.5.0" },\n                       { "newRef": "refs/tags/0.5.0", "oldRef": "refs/tags/0.4.0" }\n                    ],\n                    "tasks": [\n                        "calculateCommitsDiff",\n                        "calculateIssuesDiff",\n                        "calculatePrCherryPick",\n                    ]\n                }\n            }\n        ]\n    ]\n}\nJSON\n')),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"This plugin depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 in order to run and debug this plugin on your local\nmachine."),(0,o.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://guide.macports.org/#introduction"},"MacPorts")," install")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"port install libgit2@1.3.0\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Source install")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,o.kt)("h4",{id:"troubleshooting-macos"},"Troubleshooting (MacOS)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: I got an error saying: ",(0,o.kt)("inlineCode",{parentName:"p"},'pkg-config: exec: "pkg-config": executable file not found in $PATH'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Make sure you have pkg-config installed:")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"brew install pkg-config")),(0,o.kt)("ol",{parentName:"blockquote",start:2},(0,o.kt)("li",{parentName:"ol"},"Make sure your pkg config path covers the installation:\n",(0,o.kt)("inlineCode",{parentName:"li"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);