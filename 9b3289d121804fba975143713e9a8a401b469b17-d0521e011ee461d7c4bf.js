(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/EAt":function(e,t,a){"use strict";var n=a("Ff2n"),r=a("wx14"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("DbRV"),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,p=e.padding,u=void 0===p?"default":p,m=e.size,g=void 0===m?"medium":m,h=e.stickyHeader,f=void 0!==h&&h,b=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=i.useMemo((function(){return{padding:u,size:g,stickyHeader:f}}),[u,g,f]);return i.createElement(l.a.Provider,{value:v},i.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(o.a)(a.root,c,f&&a.stickyHeader)},b)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},"3PeG":function(e,t,a){"use strict";var n=a("Ff2n"),r=a("wx14"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("NqtD"),s=a("ye/S"),d=a("DbRV"),p=a("tgoA"),u=i.forwardRef((function(e,t){var a,c,s=e.align,u=void 0===s?"inherit":s,m=e.classes,g=e.className,h=e.component,f=e.padding,b=e.scope,v=e.size,x=e.sortDirection,y=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=i.useContext(d.a),E=i.useContext(p.a),w=E&&"head"===E.variant;h?(c=h,a=w?"columnheader":"cell"):c=w?"th":"td";var k=b;!k&&w&&(k="col");var C=f||(O&&O.padding?O.padding:"default"),N=v||(O&&O.size?O.size:"medium"),R=y||E&&E.variant,A=null;return x&&(A="asc"===x?"ascending":"descending"),i.createElement(c,Object(r.a)({ref:t,className:Object(o.a)(m.root,m[R],g,"inherit"!==u&&m["align".concat(Object(l.a)(u))],"default"!==C&&m["padding".concat(Object(l.a)(C))],"medium"!==N&&m["size".concat(Object(l.a)(N))],"head"===R&&O&&O.stickyHeader&&m.stickyHeader),"aria-sort":A,role:a,scope:k},j))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},DbRV:function(e,t,a){"use strict";var n=a("q1tI"),r=n.createContext();t.a=r},qmQJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return H}));var n=a("hlFM"),r=a("Ji2X"),i=a("kKAo"),o=a("7ljp"),c=a("q1tI"),l=a.n(c),s=a("zLVn"),d=(a("E9XD"),a("wx14")),p=a("KQm4"),u=a("Ff2n"),m=(a("TOwV"),a("iuhU")),g=a("H2TA"),h=a("ofer"),f=a("ye/S"),b=a("5AJ6"),v=Object(b.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=a("VD++");var y=Object(g.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(f.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(u.a)(e,["classes"]);return c.createElement(x.a,Object(d.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(v,{className:t.icon}))}));var j=c.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.component,o=void 0===i?"nav":i,l=e.expandText,s=void 0===l?"Show path":l,g=e.itemsAfterCollapse,f=void 0===g?1:g,b=e.itemsBeforeCollapse,v=void 0===b?1:b,x=e.maxItems,j=void 0===x?8:x,O=e.separator,E=void 0===O?"/":O,w=Object(u.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=c.useState(!1),C=k[0],N=k[1],R=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:n.li,key:"child-".concat(t)},e)}));return c.createElement(h.a,Object(d.a)({ref:t,component:o,color:"textSecondary",className:Object(m.a)(n.root,r)},w),c.createElement("ol",{className:n.ol},function(e,t,a){return e.reduce((function(n,r,i){return i<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},a)):n.push(r),n}),[])}(C||j&&R.length<=j?R:function(e){return v+f>=e.length?e:[].concat(Object(p.a)(e.slice(0,v)),[c.createElement(y,{"aria-label":s,key:"ellipsis",onClick:function(e){N(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(p.a)(e.slice(e.length-f,e.length)))}(R),n.separator,E)))})),O=Object(g.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(j),E=a("nQb1"),w=a("/TFN"),k=function(e){var t=e.location,a=e.pageContext,n=Object(s.a)(e,["location","pageContext"]),r=Object(w.a)().t;if(!t)return null;var i=t.pathname.split("/").filter((function(e){return e})),o={"/products/cloud":r("cloud.navTitle"),"/products/digitaltwin":r("digitaltwin.navTitle"),"/products/simulation":r("simulation.navTitle"),"/news":r("news.navTitle"),"/applications":r("applications.navTitle"),"/about":r("about.navTitle")};return l.a.createElement(O,Object.assign({"aria-label":"breadcrumb"},n),l.a.createElement(h.a,{variant:"overline",color:"textPrimary"},l.a.createElement(E.a,{color:"inherit",to:"/"},r("home.navTitle"))),i.map((function(e,t){var n,r=t===i.length-1,c="/"+i.slice(0,t+1).join("/"),s=o[c]||r&&(null==a||null===(n=a.frontmatter)||void 0===n?void 0:n.title)||c.split("/").pop();return r?l.a.createElement(h.a,{variant:"overline",color:"textSecondary",key:c},s):l.a.createElement(h.a,{variant:"overline",color:"textPrimary",key:c},l.a.createElement(E.a,{color:"inherit",to:c},s))})))},C=a("NqE+"),N=a("3PeG"),R=a("/EAt"),A=a("sRsu"),T=c.forwardRef((function(e,t){var a=e.absolute,n=void 0!==a&&a,r=e.classes,i=e.className,o=e.component,l=void 0===o?"hr":o,s=e.flexItem,p=void 0!==s&&s,g=e.light,h=void 0!==g&&g,f=e.orientation,b=void 0===f?"horizontal":f,v=e.role,x=void 0===v?"hr"!==l?"separator":void 0:v,y=e.variant,j=void 0===y?"fullWidth":y,O=Object(u.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(l,Object(d.a)({className:Object(m.a)(r.root,i,"fullWidth"!==j&&r[j],n&&r.absolute,p&&r.flexItem,h&&r.light,"vertical"===b&&r.vertical),role:x,ref:t},O))})),z=Object(g.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(f.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(T),S={h1:function(e){return l.a.createElement(h.a,Object.assign({},e,{variant:"h1"}))},h2:function(e){return l.a.createElement(h.a,Object.assign({},e,{variant:"h2"}))},h3:function(e){return l.a.createElement(h.a,Object.assign({},e,{variant:"h3"}))},h4:function(e){return l.a.createElement(h.a,Object.assign({},e,{variant:"h4"}))},h5:function(e){return l.a.createElement(h.a,Object.assign({},e,{variant:"h5"}))},h6:function(e){return l.a.createElement(h.a,Object.assign({},e,{variant:"h6"}))},p:h.a,table:R.a,tr:A.a,td:N.a,th:function(e){return l.a.createElement(N.a,Object.assign({},e,{component:"th",variant:"head"}))},hr:z,a:function(e){var t=e.to,a=e.href,n=void 0===a?"#":a,r=Object(s.a)(e,["to","href"]);return l.a.createElement(E.a,Object.assign({},r,{to:t||n}))}};function H(e){var t=e.children,a=e.location,c=e.pageContext;return l.a.createElement(o.a,{components:S},l.a.createElement(C.a,null,l.a.createElement(k,{location:a,pageContext:c}),l.a.createElement(r.a,{disableGutters:!0,maxWidth:"md"},l.a.createElement(i.a,{elevation:0},l.a.createElement(n.a,null,t)))))}},sRsu:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("tgoA"),s=a("ye/S"),d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,u=void 0!==p&&p,m=e.selected,g=void 0!==m&&m,h=Object(r.a)(e,["classes","className","component","hover","selected"]),f=i.useContext(l.a);return i.createElement(d,Object(n.a)({ref:t,className:Object(o.a)(a.root,c,f&&{head:a.head,footer:a.footer}[f.variant],u&&a.hover,g&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},tgoA:function(e,t,a){"use strict";var n=a("q1tI"),r=n.createContext();t.a=r}}]);
//# sourceMappingURL=9b3289d121804fba975143713e9a8a401b469b17-d0521e011ee461d7c4bf.js.map