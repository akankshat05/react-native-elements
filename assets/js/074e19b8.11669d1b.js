"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4407,4539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(a),c=n,h=k["".concat(m,".").concat(c)]||k[c]||u[c]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},337:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>c});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=a(2306),o=["components"],m={id:"circularslider",title:"Circular Slider",slug:"/circularslider"},d=void 0,p={unversionedId:"universe/circularslider",id:"version-4.0.0-beta.0/universe/circularslider",isDocsHomePage:!1,title:"Circular Slider",description:"This is a react-native-elements-universe component",source:"@site/versioned_docs/version-4.0.0-beta.0/universe/circularSlider.md",sourceDirName:"universe",slug:"/circularslider",permalink:"/docs/circularslider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/universe/circularSlider.md",version:"4.0.0-beta.0",frontMatter:{id:"circularslider",title:"Circular Slider",slug:"/circularslider"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Tooltip",permalink:"/docs/tooltip"},next:{title:"Contributing",permalink:"/docs/repo/contributing"}},u=[{value:"Usage",id:"usage",children:[]}],k={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is a ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-elements-universe")," component")),(0,l.kt)("p",null,"Sliders allow users to make selections from a range of values."),(0,l.kt)("div",{className:"component-preview component-preview--grid component-preview--grid-10"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/circularSlider1.gif",alt:"Circular Slider"}),(0,l.kt)("figcaption",null,"With Thumb (as a slider)")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/circularSlider2.gif",alt:"Circular Slider"}),(0,l.kt)("figcaption",null,"Without Thumb (as a Progress Indicator)")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/arcSlider.png",alt:"Arc Slider"}))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { CircularSlider } from 'react-native-elements-universe';\n\n<CircularSlider value={value} onChange={setValue} />;\n\n<CircularSlider value={value} noThumb />;\n\n// 90 deg Arc\n<CircularSlider maxAngle={90} />;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Either use percentage (0 to 100) in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," or specify ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumValue")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"minimumValue"))),(0,l.kt)("hr",null),(0,l.kt)(i.default,{mdxType:"Props"}),(0,l.kt)("hr",null))}c.isMDXComponent=!0},2306:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>k});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=["components"],o={},m=void 0,d={unversionedId:"universe/props/circularslider",id:"version-4.0.0-beta.0/universe/props/circularslider",isDocsHomePage:!1,title:"circularslider",description:"Props",source:"@site/versioned_docs/version-4.0.0-beta.0/universe/props/circularslider.md",sourceDirName:"universe/props",slug:"/universe/props/circularslider",permalink:"/docs/universe/props/circularslider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/universe/props/circularslider.md",version:"4.0.0-beta.0",frontMatter:{}},p=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>value</code>",id:"value",children:[]},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[]},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[]},{value:"<code>minAngle</code>",id:"minangle",children:[]},{value:"<code>maxAngle</code>",id:"maxangle",children:[]},{value:"<code>trackRadius</code>",id:"trackradius",children:[]},{value:"<code>thumbRadius</code>",id:"thumbradius",children:[]},{value:"<code>trackWidth</code>",id:"trackwidth",children:[]},{value:"<code>trackColor</code>",id:"trackcolor",children:[]},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[]},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[]},{value:"<code>thumbTextColor</code>",id:"thumbtextcolor",children:[]},{value:"<code>thumbTextSize</code>",id:"thumbtextsize",children:[]},{value:"<code>noThumb</code>",id:"nothumb",children:[]},{value:"<code>showText</code>",id:"showtext",children:[]},{value:"<code>showThumbText</code>",id:"showthumbtext",children:[]},{value:"<code>textColor</code>",id:"textcolor",children:[]},{value:"<code>textSize</code>",id:"textsize",children:[]}]}],u={toc:p};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},(0,l.kt)("inlineCode",{parentName:"a"},"value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minimumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"maximumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maximumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"minimumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minangle"},(0,l.kt)("inlineCode",{parentName:"a"},"maxAngle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maxangle"},(0,l.kt)("inlineCode",{parentName:"a"},"minAngle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackadius"},(0,l.kt)("inlineCode",{parentName:"a"},"trackRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbradius"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackwidth"},(0,l.kt)("inlineCode",{parentName:"a"},"trackWidth"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"trackColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tracktintcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"trackTintColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbmarkercolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTextColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbtextsize"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTextSize"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nothumb"},(0,l.kt)("inlineCode",{parentName:"a"},"noThumb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showtext"},(0,l.kt)("inlineCode",{parentName:"a"},"showText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showthumbtext"},(0,l.kt)("inlineCode",{parentName:"a"},"showThumbText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"textColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textsize"},(0,l.kt)("inlineCode",{parentName:"a"},"textSize")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"Value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maximumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"maximumValue")),(0,l.kt)("p",null,"Maximum value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minimumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"minimumValue")),(0,l.kt)("p",null,"Minimum value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minangle"},(0,l.kt)("inlineCode",{parentName:"h3"},"minAngle")),(0,l.kt)("p",null,"Minimum angle of arc (in degrees)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxangle"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxAngle")),(0,l.kt)("p",null,"Maximum angle of arc (in degress)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"359.9")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackRadius")),(0,l.kt)("p",null,"Radius of Circular Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbRadius")),(0,l.kt)("p",null,"Radius of Circular Slider's thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"12")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackwidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackWidth")),(0,l.kt)("p",null,"Width of Circular Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackColor")),(0,l.kt)("p",null,"Color of track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"theme primary color")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,l.kt)("p",null,"color of thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"trackColor's value")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tracktintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackTintColor")),(0,l.kt)("p",null,"Tint Color of track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"theme.primary.gray5")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtextcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTextColor")),(0,l.kt)("p",null,"Marker Text of thumb color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtextsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTextSize")),(0,l.kt)("p",null,"Marker Text of thumb Size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nothumb"},(0,l.kt)("inlineCode",{parentName:"h3"},"noThumb")),(0,l.kt)("p",null,"Show no thumb (for progress)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"showText")),(0,l.kt)("p",null,"Show slider value at middle of slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showthumbtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"showThumbText")),(0,l.kt)("p",null,"Show value at thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"textColor")),(0,l.kt)("p",null,"Slider value at middle of slider color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"trackColor")," value")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"textSize")),(0,l.kt)("p",null,"Slider value at middle of slider font size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);