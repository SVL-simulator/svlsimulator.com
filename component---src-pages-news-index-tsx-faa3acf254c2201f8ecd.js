(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{N3r7:function(e,n,t){"use strict";var a=t("zLVn"),i=t("hlFM"),r=t("+zGO"),o=t("q1tI"),c=t.n(o),l=t("vOnD"),s=t("t3i7"),d=Object(r.a)(Object(l.c)((function(e){e.xs,e.sm,e.md,e.lg,e.xl,e.spacing,e.dense;var n=Object(a.a)(e,["xs","sm","md","lg","xl","spacing","dense"]);return c.a.createElement(i.a,n)})).withConfig({displayName:"LayoutGrid__StyledBox",componentId:"zyu7aj-0"})(["",""],(function(e){var n=e.theme,t=e.xs,a=e.sm,i=e.md,r=e.lg,o=e.xl,c=e.spacing,l=e.dense;return"\n  display: grid;\n  grid-gap: "+Object(s.a)(n.spacing(c))+";\n  "+(l?"grid-auto-flow: dense;":"")+"\n  // grid-template-columns: repeat(4, 1fr);\n\n  "+(t&&n.breakpoints.up("xs"))+" {\n    grid-template-columns: repeat("+t+", 1fr);\n  }\n  "+(a&&n.breakpoints.up("sm"))+" {\n    grid-template-columns: repeat("+a+", 1fr);\n  }\n  "+(i&&n.breakpoints.up("md"))+" {\n    grid-template-columns: repeat("+i+", 1fr);\n  }\n  "+(r&&n.breakpoints.up("lg"))+" {\n    grid-template-columns: repeat("+r+", 1fr);\n  }\n  "+(o&&n.breakpoints.up("xl"))+" {\n    grid-template-columns: repeat("+t+", 1fr);\n  }\n"})));n.a=function(e){return c.a.createElement(d,e)}},OGr7:function(e,n,t){"use strict";t.r(n),t.d(n,"queryNews",(function(){return E})),t.d(n,"default",(function(){return k}));var a=t("zLVn"),i=t("+zGO"),r=t("hlFM"),o=t("kKAo"),c=t("ofer"),l=t("q1tI"),s=t.n(l),d=t("AaJB"),u=t("N3r7"),p=t("NqE+"),m=t("j8uL"),b=t("/TFN"),g=t("t3i7"),f=t("vOnD"),v={news:"",event:"rgba(0, 0, 255, 0.05)",article:"rgba(255, 255, 0, 0.05)",announcement:"rgba(0, 255, 0, 0.05)"},h={normal:{colSpan:1,rowSpan:1},big:{colSpan:2,rowSpan:1},biggest:{colSpan:4,rowSpan:1}},w=Object(i.a)(Object(f.c)(o.a).withConfig({displayName:"news__StyledNewsBox",componentId:"sc-5f3s93-0"})(["",""],(function(e){var n=e.theme,t=(e.category,e.colSpan),a=e.rowSpan,i=e.src;return"\n  grid-column-end: "+(t?"span "+t:"auto")+";\n  grid-row-end: "+(a?"span "+a:"auto")+";\n  padding: "+Object(g.a)(n.spacing(2))+";\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  height: 360px;\n  position: relative;\n  overflow: hidden;\n\n  "+n.breakpoints.only("sm")+" {\n    grid-column-end: "+(t>2?"auto":"span "+t)+";\n  }\n  "+n.breakpoints.only("xs")+" {\n    grid-column-end: "+(t>1?"auto":"span "+t)+';\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: '+n.palette.background.paper+";\n    background-image: url("+i+");\n    background-position: center center;\n    background-size: cover;\n    opacity: 0.4;\n    filter: blur(1px);\n    will-change: opacity, filter;\n  }\n  &:hover::before {\n    filter: blur(0);\n    opacity: 0.6;\n  }\n  "}))),O=Object(i.a)(Object(f.c)(r.a).withConfig({displayName:"news__FadeBox",componentId:"sc-5f3s93-1"})(["overflow:hidden;height:100%;mask-box-image:linear-gradient(to bottom,black calc(100% - 5em),transparent);mask-box-image-width:0 0 1em 0;"])),y=function(e,n,t){return t instanceof Array||(t=Object.keys(t)),-1!==t.indexOf(n)||(console.error('Unknown news %s: "%s". Use one of the following: %s.',e,n,t.join(", ")),!1)},j=function(e){var n=e.children,t=e.category,i=void 0===t?"news":t,o=e.colSpan,l=void 0===o?1:o,u=e.link,p=e.rowSpan,m=void 0===p?1:p,g=e.title,f=Object(a.a)(e,["children","category","colSpan","link","rowSpan","title"]),h=Object(b.a)().t;y("category",i,v);var j=u&&u.match("://");return s.a.createElement(w,Object.assign({elevation:0},f,{category:i,colSpan:l,rowSpan:m}),s.a.createElement(r.a,{position:"relative"},s.a.createElement(c.a,{variant:"overline"},h("news.categories."+i))),s.a.createElement(O,null,g&&s.a.createElement(c.a,{variant:"h5"},g),n),u?s.a.createElement(r.a,{alignSelf:"start",mt:"auto"},s.a.createElement(d.a,{buttonVariant:"outlined",to:u,target:j?"_blank":void 0},h("main.buttons.readNews"))):null)},E="3998081994";function k(e){var n=e.data,t=Object(b.a)().t;return s.a.createElement(p.a,{title:t("news.title")},s.a.createElement(r.a,{mt:{xs:2,md:6},mb:4},s.a.createElement(c.a,{variant:"h3"},t("news.title"))),s.a.createElement(u.a,{sm:2,md:4,spacing:2,dense:!0},n.allMdx.edges.map((function(e){var n=function(e){var n,t,a,i=e.id,r=e.frontmatter,o=e.headings,c=e.excerpt,l=e.slug,s=(null==r?void 0:r.link)||(null==l?void 0:l.replace(/^pages/,""))||void 0,d="",u="",p=(null==r?void 0:r.category)||"news",m=(null==r?void 0:r.prominence)||"normal",b=(null==r||null===(n=r.featuredImage)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(a=t.fluid)||void 0===a?void 0:a.src)||void 0;return(null==r?void 0:r.title)?d=r.title:(null==o?void 0:o.length)&&o[0]&&o[0].value&&(d=o[0].value),(null==r?void 0:r.preview)?u=null==r?void 0:r.preview:c&&(u=c.slice(d.length)),{bodyPreview:u,category:p,date:void 0,featuredImageSrc:b,id:i,link:s,prominence:m,title:d}}(e.node),t=n.id,a=n.title,i=n.bodyPreview,r=n.category,o=n.link,l=n.featuredImageSrc,d=n.prominence;y("prominence",d,h);var u=h[d].colSpan,p=h[d].rowSpan;return s.a.createElement(j,{key:t,title:a,src:l,category:r,colSpan:u,rowSpan:p,link:o},s.a.createElement(c.a,null,i))}))),s.a.createElement(m.a,null))}},ifJJ:function(e,n,t){"use strict";var a=t("Ji2X"),i=t("+zGO"),r=t("q1tI"),o=t.n(r),c=t("t3i7"),l=t("vOnD"),s=Object(i.a)(Object(l.c)(a.a).withConfig({displayName:"FullWidthContainer__StyledContainer",componentId:"sc-1fredp3-0"})(["",""],(function(e){var n=e.theme;return"\n\n  "+n.breakpoints.up("xs")+" {\n    width: calc(100vw - "+Object(c.a)(15)+");\n    max-width: calc(100vw - "+Object(c.a)(15)+");\n    margin-left: "+Object(c.a)(-16)+";\n    margin-right: "+Object(c.a)(-16)+";\n  }\n  "+n.breakpoints.up("sm")+" {\n    width: calc(100vw - "+Object(c.a)(15)+");\n    max-width: calc(100vw - "+Object(c.a)(15)+");\n    margin-left: "+Object(c.a)(-24)+";\n    margin-right: "+Object(c.a)(-24)+";\n  }\n  "+n.breakpoints.up("md")+" {\n    width: calc(100vw - "+Object(c.a)(7)+");\n    max-width: calc(100vw - "+Object(c.a)(7)+");\n  }\n  "+n.breakpoints.up("lg")+" {\n    margin-left: calc(((100vw - "+Object(c.a)(1232)+") / -2));\n    margin-right: calc(((100vw - "+Object(c.a)(1232)+") / -2));\n  }\n"})));n.a=function(e){return o.a.createElement(s,Object.assign({disableGutters:!0},e))}},j8uL:function(e,n,t){"use strict";var a=t("hlFM"),i=t("tRbT"),r=t("PsDL"),o=t("wx14"),c=t("Ff2n"),l=t("q1tI"),s=t.n(l),d=t("iuhU"),u=t("ofer"),p=t("H2TA"),m=t("4hqb"),b=l.forwardRef((function(e,n){var t=e.children,a=e.classes,i=e.className,r=e.component,s=void 0===r?"div":r,p=e.disablePointerEvents,b=void 0!==p&&p,g=e.disableTypography,f=void 0!==g&&g,v=e.position,h=e.variant,w=Object(c.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(m.b)()||{},y=h;return h&&O.variant,O&&!y&&(y=O.variant),l.createElement(m.a.Provider,{value:null},l.createElement(s,Object(o.a)({className:Object(d.a)(a.root,i,b&&a.disablePointerEvents,O.hiddenLabel&&a.hiddenLabel,"filled"===y&&a.filled,{start:a.positionStart,end:a.positionEnd}[v],"dense"===O.margin&&a.marginDense),ref:n},w),"string"!=typeof t||f?t:l.createElement(u.a,{color:"textSecondary"},t)))})),g=Object(p.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(b),f=t("+zGO"),v=t("k8wm"),h=t("5oGM"),w=t("VfqG"),O=t("/TFN"),y=t("nOiD"),j=t.n(y),E=t("vOnD"),k=t("ifJJ"),x=Object(f.a)(Object(E.c)(i.a).withConfig({displayName:"SubscribeBox__FullHeightGrid",componentId:"sc-12cwqlr-0"})(["height:100%;"])),S=Object(f.a)(Object(E.c)(g).withConfig({displayName:"SubscribeBox__StyledInputAdornment",componentId:"sc-12cwqlr-1"})(["padding-right:4px;"])),I=Object(f.a)(Object(E.c)(r.a).withConfig({displayName:"SubscribeBox__TransitioningIconButton",componentId:"sc-12cwqlr-2"})(["",""],(function(e){var n=e.theme;return"\n  border-radius: 4px;\n\n  transition: "+n.transitions.create("opacity",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})+";\n"})));n.a=function(e){var n=Object.assign({},e),t=Object(O.a)().t,r=Object(l.useState)(!1),o=r[0],c=r[1],d=Object(l.useCallback)((function(e){c(Boolean(e.target.value.length))}),[c]);return s.a.createElement(k.a,null,s.a.createElement(a.a,Object.assign({mb:4,position:"relative"},n),s.a.createElement(v.a,{src:j.a,position:"absolute",fit:"cover",overlayOffset:[0,"-200%"]},s.a.createElement(u.a,null,"A really cool looking video of a Lidar point-cloud following a simulated autonomous vehicle that makes you really want to subscribe to our email list for more information.")),s.a.createElement(a.a,{p:2,height:{xs:600,sm:400,md:600}},s.a.createElement(x,{container:!0,alignItems:"center",justify:"center"},s.a.createElement(i.a,{item:!0,xs:12,sm:10,md:6},s.a.createElement(u.a,{variant:"h3",gutterBottom:!0},t("main.subscribe.title")),s.a.createElement(w.a,{id:"subscribeEmailAddress",label:t("main.subscribe.emailPlaceholder"),placeholder:t("main.subscribe.emailPlaceholder"),fullWidth:!0,variant:"outlined",onChange:d,InputProps:{endAdornment:s.a.createElement(S,{position:"end"},s.a.createElement(I,{style:o?void 0:{opacity:0,pointerEvents:"none"},"aria-label":"submit subscription",edge:"end",size:"medium"},s.a.createElement(h.c,null)))}}))))))}},k8wm:function(e,n,t){"use strict";var a=t("zLVn"),i=t("hlFM"),r=t("+zGO"),o=t("ye/S"),c=t("q1tI"),l=t.n(c),s=t("1j+C"),d=t("t3i7"),u=t("vOnD"),p=t("5oGM"),m=Object(r.a)(u.c.video.withConfig({displayName:"BackgroundVideo__StyledVideo",componentId:"xexv9l-0"})(["height:100%;width:100%;position:absolute;z-index:-1;",";"],"filter: saturate(0.7) contrast(1.01)")),b=Object(r.a)(Object(u.c)(i.a).withConfig({displayName:"BackgroundVideo__StyledBox",componentId:"xexv9l-1"})(["",";"],(function(e){var n=e.theme;return"\nopacity: 0;\ntransition: "+n.transitions.create("opacity",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})+";\n\n&:hover {\n  opacity: 1;\n}\n"}))),g=Object(r.a)(Object(u.c)((function(e){e.offset;var n=Object(a.a)(e,["offset"]);return l.a.createElement(i.a,n)})).withConfig({displayName:"BackgroundVideo__StyledIconButton",componentId:"xexv9l-2"})(["",""],(function(e){var n=e.offset,t=e.theme;return"\n      transform: translate("+(n instanceof Array?n[0]:n||0)+", "+(n instanceof Array?n[1]:0)+");\n      border-radius: 16px;\n      padding: "+Object(d.a)(t.spacing(2))+";\n      background-color: "+Object(o.c)(t.palette.background.paper,.6)+";\n\n      &:hover {\n        background-color: "+Object(o.c)(t.palette.background.paper,.8)+";\n      }\n    "})));n.a=function(e){var n=e.children,t=e.fit,r=void 0===t?"contain":t,o=e.overlayOffset,d=(e.title,e.src),u=e.poster,f=e.type,v=void 0===f?"video/mp4":f,h=Object(a.a)(e,["children","fit","overlayOffset","title","src","poster","type"]),w=Object(s.b)(),O=w.appState.videos.allPaused,y=w.setAppState,j=l.a.useRef();Object(c.useMemo)((function(){var e,n;O?null===(e=j.current)||void 0===e||e.pause():null===(n=j.current)||void 0===n||n.play()}),[O]);var E=l.a.useCallback((function(){y(!O,"videos.allPaused")}),[O,y]);return l.a.createElement(i.a,Object.assign({height:1,width:1,position:"relative",overflow:"hidden"},h,{onClick:E}),l.a.createElement(m,{controls:!1,loop:!0,autoPlay:!O,muted:!0,poster:u||"",ref:j,style:{objectFit:r}},l.a.createElement("source",{src:d,type:v}),n),l.a.createElement(b,{height:1,display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(g,{offset:o},O?l.a.createElement(p.l,null):l.a.createElement(p.k,null))))}},nOiD:function(e,n,t){e.exports=t.p+"static/Subscription-bb4f6d05c7ec85af87a1770feafad4c7.mp4"}}]);
//# sourceMappingURL=component---src-pages-news-index-tsx-faa3acf254c2201f8ecd.js.map