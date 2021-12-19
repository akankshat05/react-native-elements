"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>C});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),u=p(n),C=o,y=u["".concat(i,".").concat(C)]||u[C]||l[C]||r;return n?a.createElement(y,c(c({ref:t},s),{},{components:n})):a.createElement(y,c({ref:t},s))}));function C(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var A={};for(var i in t)hasOwnProperty.call(t,i)&&(A[i]=t[i]);A.originalType=e,A.mdxType="string"==typeof e?e:o,c[1]=A;for(var p=2;p<r;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5577:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>A,contentTitle:()=>i,metadata:()=>p,toc:()=>s,default:()=>u});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),c=["components"],A={},i=void 0,p={unversionedId:"main/usage/SocialIcon/snack/index",id:"version-4.0.0-beta.0/main/usage/SocialIcon/snack/index",isDocsHomePage:!1,title:"index",description:"`SnackPlayer name=RNE Social Icon",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/SocialIcon/snack/index.md",sourceDirName:"main/usage/SocialIcon/snack",slug:"/main/usage/SocialIcon/snack/index",permalink:"/docs/main/usage/SocialIcon/snack/index",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/SocialIcon/snack/index.md",version:"4.0.0-beta.0",frontMatter:{}},s=[],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20IconData%20%3D%20%7B%0A%20%20type%3A%20SocialMediaType%3B%0A%20%20iconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20type%3A%20'facebook'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'twitter'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'google-plus-official'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'google'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'pinterest'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'linkedin'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'youtube'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'vimeo'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'tumblr'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'instagram'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'quora'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'flickr'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'foursquare'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'wordpress'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'stumbleupon'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'github'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'github-alt'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'twitch'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'medium'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'soundcloud'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'stack-overflow'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'gitlab'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'angellist'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'codepen'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'weibo'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'vk'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'facebook-messenger'%2C%0A%20%20%20%20iconType%3A%20'material-community'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'whatsapp'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20socialProps%20%3D%20%7B%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);