"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5825],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"GitLab",description:"GitLab Plugin\n"},p=void 0,s={unversionedId:"Plugins/gitlab",id:"version-v0.11/Plugins/gitlab",title:"GitLab",description:"GitLab Plugin\n",source:"@site/versioned_docs/version-v0.11/Plugins/gitlab.md",sourceDirName:"Plugins",slug:"/Plugins/gitlab",permalink:"/docs/v0.11/Plugins/gitlab",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Plugins/gitlab.md",tags:[],version:"v0.11",frontMatter:{title:"GitLab",description:"GitLab Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/docs/v0.11/Plugins/github"},next:{title:"Jenkins",permalink:"/docs/v0.11/Plugins/jenkins"}},c={},u=[{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Provider (Datasource) Connection",id:"provider-datasource-connection",level:3},{value:"Provider (Datasource) Settings",id:"provider-datasource-settings",level:3},{value:"Gathering Data with GitLab",id:"gathering-data-with-gitlab",level:2},{value:"Finding Project Id",id:"finding-project-id",level:2},{value:'\u26a0\ufe0f (WIP) Create a GitLab API Token <a id="gitlab-api-token"></a>',id:"\ufe0f-wip-create-a-gitlab-api-token-",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Pull/Merge Requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Pass Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ratio of Pull/Merge Review requests to merged")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Reviewer Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Pull/Merge Reviewers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Review Time"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time from Pull/Merge created time until merged")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit Author Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Contributors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Commits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Added Lines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accumulated Number of New Lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Deleted Lines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accumulated Number of Removed Lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Review Rounds"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of cycles of commits followed by comments/final merge")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"provider-datasource-connection"},"Provider (Datasource) Connection"),(0,i.kt)("p",null,"The connection section of the configuration screen requires the following key fields to connect to the ",(0,i.kt)("strong",{parentName:"p"},"GitLab API"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connection-in-config-ui",src:n(3811).Z,width:"1722",height:"664"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Connection Name")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"READONLY"),"]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'\u26a0\ufe0f Defaults to "',(0,i.kt)("strong",{parentName:"li"},"GitLab"),'" and may not be changed. As GitLab is a ',(0,i.kt)("em",{parentName:"li"},"single-source data provider")," at the moment, the connection name is read-only as there is only one instance to manage. As we advance on our development roadmap we may enable ",(0,i.kt)("em",{parentName:"li"},"multi-source")," connections for GitLab in the future."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Endpoint URL")," (REST URL, starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"http://"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This should be a valid REST API Endpoint eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/api/v4/")),(0,i.kt)("li",{parentName:"ul"},"\u26a0\ufe0f URL should end with",(0,i.kt)("inlineCode",{parentName:"li"},"/")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Personal Access Token")," (HTTP Basic Auth)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login to your GitLab Account and create a ",(0,i.kt)("strong",{parentName:"p"},"Personal Access Token")," to authenticate with the API using HTTP Basic Authentication. The token must be 20 characters long. Save the personal access token somewhere safe. After you leave the page, you no longer have access to the token."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"In the top-right corner, select your ",(0,i.kt)("strong",{parentName:"li"},"avatar"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Edit profile"),"."),(0,i.kt)("li",{parentName:"ol"},"On the left sidebar, select ",(0,i.kt)("strong",{parentName:"li"},"Access Tokens"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"name")," and optional ",(0,i.kt)("strong",{parentName:"li"},"expiry date")," for the token."),(0,i.kt)("li",{parentName:"ol"},"Select the desired ",(0,i.kt)("strong",{parentName:"li"},"scopes"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Create personal access token"),".")),(0,i.kt)("p",{parentName:"li"},"For help on ",(0,i.kt)("strong",{parentName:"p"},"Creating a personal access token"),", please see official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"GitLab Docs on Personal Tokens"),".\nFor an overview of the ",(0,i.kt)("strong",{parentName:"p"},"GitLab REST API"),", please see official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/development/documentation/restful_api_styleguide.html#restful-api"},"GitLab Docs on REST")))))),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Save Connection")," to update connection settings."),(0,i.kt)("h3",{id:"provider-datasource-settings"},"Provider (Datasource) Settings"),(0,i.kt)("p",null,"There are no additional settings for the GitLab Datasource Provider at this time."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,i.kt)("inlineCode",{parentName:"p"},"GitLab Project ID")," Mappings feature has been deprecated.")),(0,i.kt)("h2",{id:"gathering-data-with-gitlab"},"Gathering Data with GitLab"),(0,i.kt)("p",null,"To collect data, you can make a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitlab 20211126",\n    "tasks": [[{\n        "plugin": "gitlab",\n        "options": {\n            "projectId": <Your gitlab project id>\n        }\n    }]]\n}\n\'\n')),(0,i.kt)("h2",{id:"finding-project-id"},"Finding Project Id"),(0,i.kt)("p",null,"To get the project id for a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"GitLab")," repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Visit the repository page on GitLab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Find the project id just below the title"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128568416-a47b2763-51d8-4a6a-8a8b-396512bffb03.png",alt:"Screen Shot 2021-08-06 at 4 32 53 PM"})))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Use this project id in your requests, to collect data from this project")),(0,i.kt)("h2",{id:"\ufe0f-wip-create-a-gitlab-api-token-"},"\u26a0\ufe0f (WIP) Create a GitLab API Token ",(0,i.kt)("a",{id:"gitlab-api-token"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When logged into ",(0,i.kt)("inlineCode",{parentName:"p"},"GitLab")," visit ",(0,i.kt)("inlineCode",{parentName:"p"},"https://gitlab.com/-/profile/personal_access_tokens"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give the token any name, no expiration date and all scopes (excluding write access)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128569148-96f50d4e-5b3b-4110-af69-a68f8d64350a.png",alt:"Screen Shot 2021-08-06 at 4 44 01 PM"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"Create Personal Access Token")," button")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the API token into ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file via ",(0,i.kt)("inlineCode",{parentName:"p"},"cofnig-ui")," or edit the file directly."))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))}d.isMDXComponent=!0},3811:function(e,t,n){t.Z=n.p+"assets/images/gitlab-connection-in-config-ui-859af3fd62d2ffc508af3b85cfd2aaea.png"}}]);