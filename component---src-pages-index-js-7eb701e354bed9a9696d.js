(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+eT+":function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r=i(a("j8BX")),n=i(a("uDP2")),s=i(a("q1tI")),o=function(e){var t=e.aspectRatio,a=e.children,i=e.className,o=e.style,d=(0,n.default)(e,["aspectRatio","children","className","style"]);return s.default.createElement("div",(0,r.default)({className:i,style:Object.assign({width:"100%"},o)},d),s.default.createElement("div",{style:{height:0,overflow:"hidden",paddingTop:100/t+"%",position:"relative"}},s.default.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},a)))};t.default=o},"7eCj":function(e,t,a){e.exports=a.p+"static/fab-c1a02f051a18717f6e4cc2ebf5e4abc3.gif"},"9eSz":function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r,n=i(a("v06X")),s=i(a("XEEL")),o=i(a("uDP2")),d=i(a("j8BX")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return f(t||a).src},f=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(L,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),L=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,p=e.draggable,m=e.ariaHidden,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:i,src:r},f,{onLoad:s,onError:c,ref:t,loading:u,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,p=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,A=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:z?1:0,transition:N?"opacity "+v+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,O={transitionDelay:v+"ms"},j=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},N&&O),o),p),V={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:w};if(g){var B=g,H=f(g);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&O)}),H.base64&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:B,generateSources:x}),H.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:B,generateSources:k}),this.state.isVisible&&l.default.createElement("picture",null,E(B),l.default.createElement(L,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:A})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)((0,d.default)({alt:a,title:t,loading:S},H),{},{imageVariants:B}))}}))}if(h){var P=h,M=f(h),W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},N&&O)}),M.base64&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:P,generateSources:x}),M.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:P,generateSources:k}),this.state.isVisible&&l.default.createElement("picture",null,E(P),l.default.createElement(L,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:A})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)((0,d.default)({alt:a,title:t,loading:S},M),{},{imageVariants:P}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});N.propTypes={resolutions:T,sizes:C,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var O=N;t.default=O},Bbsb:function(e,t,a){e.exports=a.p+"static/news-feed-template-239c55c055a701ea9c5f293408b7bf0b.png"},Cc2E:function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r=i(a("j8BX")),n=i(a("uDP2")),s=i(a("+eT+")),o=i(a("q1tI")),d=o.default.forwardRef((function(e,t){var a=e.poster,i=e.className,d=e.sources,l=(0,n.default)(e,["poster","className","sources"]),c=d[0].aspectRatio;return o.default.createElement(s.default,{aspectRatio:c},o.default.createElement("div",{style:Object.assign({width:"100%",height:"100%"},a?{background:"url("+a+") center / contain no-repeat"}:{})},o.default.createElement("video",(0,r.default)({className:i,preload:!0,style:{width:"100%",height:"100%"}},l,{poster:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ref:t}),d.map((function(e){return o.default.createElement("source",{key:e.src,src:e.src,type:"video/"+e.fileExtension})})))))}));t.default=d},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Bl7J"),s=a("vrFN"),o=a("Wbzz"),d=a("9eSz"),l=a.n(d),c=a("Rtvh"),u=function(e){var t=e.children,a=e.image,i=e.video,n=e.description,s=e.name,d=e.link,u=Object(o.useStaticQuery)("3589490160"),p=u.allVideoFfmpeg.nodes.find((function(e){return e.mp4.originalName===i})),m=u.placeholderImage.nodes.find((function(e){return e.relativePath===a}));return r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer"},s)),r.a.createElement("p",null,n),r.a.createElement("div",null,r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer"},m&&m.childImageSharp?r.a.createElement(l.a,{fluid:m.childImageSharp.fluid,style:{boxShadow:"0px 0px 6px 2px rgba(0,0,0,.2)"}}):p?r.a.createElement(c.Video,{autoPlay:!0,muted:!0,loop:!0,sources:[p.mp4]}):r.a.createElement("div",null,t))))},p=a("7eCj"),m=a.n(p),f=a("pq5b"),g=a.n(f),h=a("Bbsb"),b=a.n(h),v=function(){return r.a.createElement("div",{style:{display:"grid",gap:"2rem"}},r.a.createElement(u,{name:"VSCode Color Assist",description:"VSCode extension that allows you to highlight entire blocks of code.",link:"https://marketplace.visualstudio.com/items?itemName=axmz.color-assist",image:"color-assist-vscode.png"}),r.a.createElement(u,{name:"Minimal Site One",description:"Less is more",link:"https://axmz.github.io/react-minimal-site-one/",image:"minimal-site-one.png"}),r.a.createElement(u,{name:"Microservices app",description:"Ticketing app based on microservices architecture.                 NATS, Typescript, Google Kubernetes Engine, Stripe, Auth, MongoDB.",link:"http://34.107.111.208/",image:"microservices-gke.png"}),r.a.createElement(u,{name:"E-commerce site",description:"Frontend for e-commerce site, built with                 React.js, Redux Saga, GraphQL, Stripe and Firebase",link:"https://crwn-axmz.herokuapp.com/",image:"crwn-stripe.png"}),r.a.createElement(u,{name:"Searchbox Awesome",description:"Minimalistic google-like searchbox with keybindings support.",link:"https://github.com/axmz/react-searchbox-awesome",video:"searchbox.mp4"}),r.a.createElement(u,{name:"Drag Navigation",description:"Components to replicate iOS cards navigation in your web apps.                 Touch-based lazy-loading and routing.",link:"https://github.com/axmz/react-drag-navigation",video:"drag.mp4"}),r.a.createElement(u,{name:"Bottom Sheet Awesome",description:"iOS-like, touch-based, bottom sheet for web apps.",link:"https://github.com/axmz/react-bottom-sheet-awesome",video:"bottom-sheet.mp4"}),r.a.createElement(u,{name:"Floating Action Button Awesome",description:"Fab that makes sense. Thumb-only navigation.",link:"https://github.com/axmz/react-fab-awesome"},r.a.createElement("div",null,r.a.createElement("img",{src:m.a,width:"30%",alt:"fab gif"}),r.a.createElement("img",{src:g.a,width:"30%",alt:"fab doge gif"}))),r.a.createElement(u,{name:"Compose Windows",description:"Gmail-like compose windows.",link:"https://axmz.github.io/react-compose-windows",video:"windows.mp4"}),r.a.createElement(u,{name:"News Feed Web App Template",description:"News feed web app template with GraphQL in the front and backend.",link:"https://news-feed-template-client.herokuapp.com/"},r.a.createElement("div",null,r.a.createElement("img",{src:b.a,width:"30%",alt:"news feed template"}))),r.a.createElement(u,{name:"Layout Navigation Helper",description:"A set of components to simplify navigation and improve accessibility in web apps.                 Navigate anywhere on the page with only a few keys.",link:"https://axmz.github.io/react-layout-navigation-page/",image:"a11y.png"}),r.a.createElement(u,{name:"Typescript Design Patterns Site",description:"A Gatsby.js website with over 20 TypeScript design patterns examples.",link:"https://axmz.github.io/design-patterns-ts/",image:"tsdp.png"}),r.a.createElement(u,{name:"Golang app with authentication",description:"A server in Go that allows authentication. Deployed on AWS.",link:"http://ec2-18-184-228-48.eu-central-1.compute.amazonaws.com/",image:"goauth.png"}),r.a.createElement(u,{name:"CMS app",description:"A simple CMS app,                 with Nginx as entrypoint,                 frontend in React,                 backend in Express.js and MongoDB as database.                 Tested with Jest and Puppeteer and CI with Travis CI.                Orchestration with docker compose.",link:"https://github.com/axmz/node-ci"}),r.a.createElement(u,{name:"MVC framework",description:"Backbone.js-like framework written in Typescript. ",link:"https://github.com/axmz/mvc-framework-ts",image:"mvc-framework.png"}),r.a.createElement(u,{name:"Express.js decorators",description:"Use of Typescript decorators with Express.js library to build a server.",link:"https://github.com/axmz/express-ts",image:"decorators.png"}),r.a.createElement(u,{name:"Typescript Drag-n-drop",description:"Drag and drop functionality implemented in Typescript",link:"https://github.com/axmz/drag-n-drop-ts"}),r.a.createElement(u,{name:"Node advanced patterns",description:"Concurrency, streams, networking, child processes, event-driven architecture...",link:"https://github.com/axmz/node-advanced"}),r.a.createElement(u,{name:"Node.js Tasks",description:"An app for tasks management built with Express.js, MongoDB, JWT.",link:"https://github.com/axmz/node-mead/tree/master/node-tasks/src"}),r.a.createElement(u,{name:"Weather Web Server",description:"Simple weather web server in Express.js and Handlebar.js.",link:"https://github.com/axmz/node-mead/tree/master/node-web-server"}),r.a.createElement(u,{name:"Node.js Notes CLI",description:"A Node.js CLI for taking notes.",link:"https://github.com/axmz/node-mead/tree/master/node-notes"}),r.a.createElement(u,{name:"EasyHTTP",description:"Lightweight Http API.",link:"https://github.com/axmz/http-api"}),r.a.createElement(u,{name:"Golang Data structures and algorithms",description:"",link:"https://github.com/axmz/go-dsa"}))};t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement(v,null))}},Rtvh:function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.Video=t.AspectRatioBox=void 0;var r=i(a("+eT+"));t.AspectRatioBox=r.default;var n=i(a("Cc2E"));t.Video=n.default},pq5b:function(e,t,a){e.exports=a.p+"static/fab-doge-ba475eeb56649dcdaf95f8dab823a19a.gif"}}]);
//# sourceMappingURL=component---src-pages-index-js-7eb701e354bed9a9696d.js.map