(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(27),r=n.n(c),a=n(12),s=n(11),d=n(120),l=n(121),p=n(118),j=n(123),u=n(124),x=n(65),h=n.n(x),b=n(64),f=n.n(b),g=n(61),O=n.n(g),v=n(1),w={active:{color:"#027524",bg:"#c3f6c3",rename:"Active"},positive:{color:"#9370db",bg:"#e6e6fa",rename:"Total"},cured:{color:"#00008b",bg:"#c4d9ff",rename:"Discharged"},death:{color:"#ff4500",bg:"#ffd589",rename:"Deaths"}},m=function(e){return["active","positive","cured","death"].map((function(t){var n={};n.title=w[t].rename,n.count=parseInt(e["new_".concat(t)]).toLocaleString("en-IN");var i=e["new_".concat(t)]-e[t];return n.change=Math.abs(i),n.icon=i>0?Object(v.jsx)(O.a,{}):Object(v.jsx)(f.a,{}),n.changeColor=i>0?"cured"===t?"#006400":"#ff0000":i<0&&"cured"===t?"#ff0000":"#006400",n.textColor=w[t].color,n.bg=w[t].bg,n}))};function y(e){var t=e.stateData,n=Object(i.useState)(null),o=Object(s.a)(n,2),c=o[0],r=o[1],a=Object(i.useState)(!1),x=Object(s.a)(a,2),b=x[0],f=x[1];return Object(i.useEffect)((function(){return r(t?m(t):[])}),[t]),Object(v.jsxs)(p.a,{expanded:b,onChange:function(){return f(!b)},sx:{borderLeft:"2px solid #eee",backgroundColor:b?"#E5FFFA":"#fff",transition:"all 0.3s ease"},children:[Object(v.jsx)(j.a,{expandIcon:Object(v.jsx)(h.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",sx:{fontSize:"18px"},children:t.state_name}),Object(v.jsx)(u.a,{sx:{pt:0},children:Object(v.jsx)(d.a,{container:!0,spacing:1,children:null===c||void 0===c?void 0:c.map((function(e){return Object(v.jsx)(d.a,{item:!0,xs:6,md:6,children:Object(v.jsxs)(l.a,{variant:"outlined",sx:{px:1.5,py:1,backgroundColor:e.bg,borderRadius:"15px"},children:[Object(v.jsx)("div",{style:{color:e.textColor,fontWeight:"600"},children:e.title}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(v.jsx)("span",{style:{marginTop:"auto"},children:e.count}),e.change>0&&Object(v.jsxs)("div",{style:{marginLeft:"auto",color:e.changeColor,display:"flex",flexDirection:"row"},children:[e.icon,Object(v.jsx)("span",{style:{marginTop:"auto"},children:e.change.toLocaleString("en-IN")})]})]})]})},e.title)}))})})]})}var L=n(126),C=n(125),D=n(127),S=n(128),k=i.forwardRef((function(e,t){return Object(v.jsx)(C.a,{sx:{flexGrow:1},children:Object(v.jsx)(L.a,{position:"fixed",ref:t,children:Object(v.jsx)(D.a,{children:Object(v.jsx)(S.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Covid Data"})})})})})),I=n(5),R=n(8),E=n(111),T=n(116),W=Object(R.a)("div")({borderBottom:"2px solid #eee",borderTop:"2px solid #eee",borderLeft:"7px solid #1976d2",borderRight:"7px solid #1976d2",fontSize:"22px",padding:"5px 10px"}),V=(Object(R.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:Object(E.a)(n.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.a)(n.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(I.a)(t,n.breakpoints.up("xs"),{marginLeft:n.spacing(1),width:"auto"}),Object(I.a)(t,n.breakpoints.up("sm"),{marginLeft:n.spacing(1),width:"auto"}),t})),Object(R.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Object(R.a)(T.a)((function(e){var t,n=e.theme;return{color:"inherit","& .MuiInputBase-input":(t={padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},Object(I.a)(t,n.breakpoints.up("xs"),{width:"0ch","&:focus":{width:"15ch"}}),Object(I.a)(t,n.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),t)}})),n(122)),A=n(66),B=n.n(A);function M(){var e,t,n,o,c=Object(i.useState)(null),r=Object(s.a)(c,2),p=r[0],j=r[1],u=Object(i.useState)(null),x=Object(s.a)(u,2),h=x[0],b=x[1],f=Object(i.useState)(0),g=Object(s.a)(f,2),O=g[0],w=g[1],L=Object(i.useState)(0),C=Object(s.a)(L,2),D=C[0],S=C[1],I=Object(i.useRef)();return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(e){S(window.pageYOffset)})),function(){return window.removeEventListener("scroll",(function(){return console.log("Scroll listener removed")}))}}),[]),Object(i.useEffect)((function(){fetch("https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination").then((function(e){return e.json()})).then((function(e){return w(e.count)})).catch((function(e){return console.log(e)}));var e=setInterval((function(){fetch("https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination").then((function(e){return e.json()})).then((function(e){return w(e.count)})).catch((function(e){return console.log(e)}))}),1e4);return function(){return clearInterval(e)}}),[]),Object(i.useEffect)((function(){return!p&&fetch("https://www.mohfw.gov.in/data/datanew.json").then((function(e){return e.json()})).then((function(e){j(Object(a.a)(e.filter((function(e){return"11111"!==e.sno})))),b(m(e.find((function(e){return"11111"===e.sno}))))})).catch((function(e){return alert(e)}))}),[p]),Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{ref:I,data:p||[]}),Object(v.jsx)("div",{style:{height:(null===(e=I.current)||void 0===e||null===(t=e.getBoundingClientRect())||void 0===t?void 0:t.height)+5||0}}),p?Object(v.jsxs)(d.a,{container:!0,spacing:2,sx:{p:2,px:0},children:[Object(v.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(v.jsx)(W,{children:"National Data"}),Object(v.jsxs)(d.a,{container:!0,spacing:1,sx:{p:2,px:1},children:[Object(v.jsx)(d.a,{item:!0,xs:12,children:Object(v.jsx)(l.a,{elevation:2,sx:{px:1.5,py:1,backgroundColor:"#f7e98e",borderRadius:"15px"},children:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(v.jsx)("div",{style:{color:"#e96125",fontSize:"20px",fontWeight:"600"},children:"Live Vaccinations"}),Object(v.jsx)("span",{style:{margin:"auto 0px auto auto"},children:O.toLocaleString("en-IN")})]})})}),null===h||void 0===h?void 0:h.map((function(e){return Object(v.jsx)(d.a,{item:!0,xs:6,md:6,children:Object(v.jsxs)(l.a,{elevation:2,sx:{px:1.5,py:1,backgroundColor:e.bg,borderRadius:"15px"},children:[Object(v.jsx)("div",{style:{color:e.textColor,fontWeight:"600"},children:e.title}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(v.jsx)("span",{style:{marginTop:"auto"},children:e.count}),e.change>0&&Object(v.jsxs)("div",{style:{marginLeft:"auto",color:e.changeColor,display:"flex",flexDirection:"row"},children:[e.icon,Object(v.jsx)("span",{style:{marginTop:"auto"},children:e.change.toLocaleString("en-IN")})]})]})]})},e.title)}))]}),window.innerWidth>900&&Object(v.jsxs)("div",{style:{marginTop:"10px"},children:[Object(v.jsx)(W,{children:"APIs used & official links"}),Object(v.jsxs)("div",{style:{fontSize:"18px",padding:"0px 10px 10px 10px"},children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",margin:"10px auto",border:"2px solid #eee",padding:"20px",borderRadius:"20px"},children:[Object(v.jsx)("span",{children:"Ministry of Health and Family Welfare: "}),Object(v.jsx)("a",{href:"https://www.mohfw.gov.in/",style:{marginLeft:"auto"},children:"https://www.mohfw.gov.in/"})]}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",margin:"10px auto",border:"2px solid #eee",padding:"20px",borderRadius:"20px"},children:[Object(v.jsx)("span",{children:"My Gov: "}),Object(v.jsx)("a",{href:"https://www.mygov.in/covid-19",style:{marginLeft:"auto"},children:"https://www.mygov.in/covid-19"})]}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",margin:"10px auto",border:"2px solid #eee",padding:"20px",borderRadius:"20px"},children:[Object(v.jsx)("span",{children:"Covid Data API: "}),Object(v.jsx)("a",{href:"https://www.mohfw.gov.in/data/datanew.json",style:{marginLeft:"auto"},children:"https://www.mohfw.gov.in/data/datanew.json"})]}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",margin:"10px auto",border:"2px solid #eee",padding:"20px",borderRadius:"20px"},children:[Object(v.jsx)("span",{children:"Live Vaccination API: "}),Object(v.jsx)("a",{href:"https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination",style:{marginLeft:"auto"},children:"https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination"})]})]})]})]}),Object(v.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(v.jsx)(W,{children:"Statewise Data"}),Object(v.jsx)("div",{style:{height:window.innerWidth>899?window.innerHeight-(null===(n=I.current)||void 0===n||null===(o=n.getBoundingClientRect())||void 0===o?void 0:o.height)-75:"auto",overflowY:"scroll"},children:p.map((function(e){return Object(v.jsx)(y,{stateData:e},e.sno)}))})]})]}):"Loading...",D>250&&Object(v.jsx)(V.a,{color:"primary",sx:{position:"fixed",bottom:"16px",right:"16px",animation:"animate-in 0.3s ease"},onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(v.jsx)(B.a,{})})]})}n(86);r.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.2419b1d4.chunk.js.map