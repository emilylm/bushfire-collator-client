(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(23),o=a.n(i),s=(a(86),a(87),a(88),a(89),a(90),a(7)),l=a(8),c=a(9),p=a(10),u=a(11),d=a(6),h=a(39),g=a(33),m=a(36),b=a.n(m),f=a(79),v=a(2),O=(a(16),a(145)),x=a(139),E=a(140),S=a(141),y=a(146);a(113);function j(t){return Math.sqrt(1e4*t/Math.PI)}var w=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).onFeatureGroupAdd=function(){var t=a.refs.circle.leafletElement.getBounds(),e=a.refs.circle2.leafletElement.getBounds();t.getSouthWest().wrap(),t.getNorthEast().wrap(),e.getSouthWest().wrap(),e.getNorthEast().wrap(),a.setState({rectangleBounds:e}),a.refs.map.leafletElement.fitBounds(t),a.refs.rec.leafletElement.setBounds(e)},a.state={lat:a.props.lat,lng:a.props.lng,zoom:1,size:a.props.size,maxSize:a.props.maxSize,maxRadius:j(a.props.maxSize),polygon:(a.props.lat,a.props.lng,void a.props.size),radius:j(a.props.size),rectangleBounds:[[a.props.lat,a.props.lng],[a.props.lat,a.props.lng]]},a.onFeatureGroupAdd=a.onFeatureGroupAdd.bind(Object(v.a)(a)),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this;this.props.size!==t.size&&this.setState({size:this.props.size,radius:j(this.props.size)},(function(){return e.onFeatureGroupAdd()}))}},{key:"render",value:function(){var t=[this.state.lat,this.state.lng];return r.a.createElement(O.a,{ref:"map",zoomSnap:.1,center:t,zoom:this.state.zoom},r.a.createElement(x.a,{ref:"features",onAdd:this.onFeatureGroupAdd},r.a.createElement(E.a,{ref:"circle",key:this.props.maxSize,center:[this.state.lat,this.state.lng],fillColor:"transparent",color:"transparent",radius:this.state.maxRadius}),r.a.createElement(E.a,{ref:"circle2",key:this.props.size,center:[this.state.lat,this.state.lng],fillColor:"transparent",color:"transparent",radius:this.state.radius}),r.a.createElement(S.a,{ref:"rec",bounds:this.state.rectangleBounds,fillColor:"red",color:"red"})),r.a.createElement(y.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"}))}}]),e}(n.Component),C=a(60),k=a(142),z=a(143),D=a(144),N={NSW:{abr:"NSW",label:"nsw",description:"NSW"},VIC:{abr:"VIC",label:"vic",description:"VIC"},AGG:{abr:"AGG",label:"aggregate",description:"both NSW & VIC"}},A={MEL:{name:"Melbourne",abr:"MEL",lat:-37.813629,lng:144.963058},SYD:{name:"Sydney",abr:"SYD",lat:-33.86882,lng:151.20929},BNE:{name:"Brisbane",abr:"BNE",lat:-27.46977,lng:153.025131},PER:{name:"Perth",abr:"PER",lat:-31.950527,lng:115.860458},ADL:{name:"Adelaide",abr:"ADL",lat:-34.928497,lng:138.600739},DRW:{name:"Darwin",abr:"DRW",lat:-12.46344,lng:130.845642},HBA:{name:"Hobart",abr:"HBA",lat:-42.882137,lng:147.128553},PAR:{name:"Paris",abr:"PAR",lat:48.856613,lng:2.352222},LCY:{name:"London",abr:"LCY",lat:51.507351,lng:-.127758},NYC:{name:"New York City",abr:"NYC",lat:40.712776,lng:-74.005974}},B=a(12),R={container:function(t){return Object(B.a)({},t,{width:"150px",maxHeight:"31px",height:"31px"})},control:function(t,e){e.isFocused;var a=e.isDisabled;return Object(B.a)({},t,{width:"99%",height:"31px",minHeight:"31px",maxHeight:"31px",backgroundColor:"white",borderRadius:"0px",boxShadow:"0px",borderWidth:a?"0px":"1px",borderStyle:"solid",borderColor:"#ced4da",paddingLeft:"8px",paddingRight:"1px"})},option:function(t,e){e.isSelected,e.isFocused;return Object(B.a)({},t,{height:"31px",maxHeight:"31px",fontSize:".875rem",paddingTop:"5px",paddingBottom:"5px"})},input:function(t){return Object(B.a)({},t,{fontSize:".875rem"})},singleValue:function(t){return Object(B.a)({},t,{fontSize:"1rem",color:"#495057"})},valueContainer:function(t){return Object(B.a)({},t,{position:"none",padding:"0px"})},indicatorsContainer:function(t,e){var a=e.isDisabled;return Object(B.a)({},t,{height:"31px",maxHeight:"31px",padding:"0px",color:a?"transparent":"#ced4da"})},indicatorSeparator:function(t,e){e.isDisabled;return Object(B.a)({},t,{backgroundColor:"transparent"})},dropdownIndicator:function(t,e){var a=e.isDisabled;return Object(B.a)({},t,{paddingTop:"4px",paddingRight:"4px",paddingBottom:"4px",paddingLeft:"4px",color:a?"transparent":"hsl(0,0%,60%)"})},placeholder:function(t,e){var a=e.isDisabled;return Object(B.a)({},t,{height:"21px",maxHeight:"21px",fontSize:"1rem",color:a?"transparent":"#ced4da"})},menu:function(t){return Object(B.a)({},t,{zIndex:9999})}},H={container:function(t){return Object(B.a)({},t,{width:"200px",maxHeight:"31px",height:"31px"})},control:function(t,e){e.isFocused;var a=e.isDisabled;return Object(B.a)({},t,{width:"99%",height:"31px",minHeight:"31px",maxHeight:"31px",backgroundColor:"white",borderRadius:"0px",boxShadow:"0px",borderWidth:a?"0px":"1px",borderStyle:"solid",borderColor:"#ced4da",paddingLeft:"8px",paddingRight:"0px"})},option:function(t,e){e.isSelected,e.isFocused;return Object(B.a)({},t,{height:"31px",maxHeight:"31px",fontSize:".875rem",paddingTop:"5px",paddingBottom:"5px"})},input:function(t){return Object(B.a)({},t,{fontSize:".875rem"})},singleValue:function(t){return Object(B.a)({},t,{fontSize:"1rem",color:"#495057"})},valueContainer:function(t){return Object(B.a)({},t,{position:"none",padding:"0px"})},indicatorsContainer:function(t,e){var a=e.isDisabled;return Object(B.a)({},t,{height:"31px",maxHeight:"31px",padding:"0px",color:a?"transparent":"#ced4da"})},indicatorSeparator:function(t,e){e.isDisabled;return Object(B.a)({},t,{backgroundColor:"transparent"})},dropdownIndicator:function(t,e){var a=e.isDisabled;return Object(B.a)({},t,{paddingTop:"4px",paddingRight:"4px",paddingBottom:"4px",paddingLeft:"4px",color:a?"transparent":"hsl(0,0%,60%)"})},placeholder:function(t,e){var a=e.isDisabled;return Object(B.a)({},t,{height:"21px",maxHeight:"21px",fontSize:".875rem",color:a?"transparent":"#ced4da"})},menu:function(t){return Object(B.a)({},t,{zIndex:9999})}},F=function(){var t=[];return Object.keys(A).map((function(e){return t.push({value:e,label:A[e].name})})),console.log(JSON.stringify(t)),t},T=function(){var t=[];return Object.keys(N).map((function(e){return t.push({value:e,label:N[e].description})})),console.log(JSON.stringify(t)),t},J=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).updateCityOption=function(t){a.setState({currentCityOption:t}),a.props.updateCitySelection(t.value)},a.updateStateOption=function(t){a.setState({currentStateOption:t}),a.props.updateStateSelection(t.value)},a.state={currentStateOption:{value:a.props.options.target.abr,label:a.props.options.target.description},stateOptions:T(),currentCityOption:{value:a.props.options.city.abr,label:a.props.options.city.name},cityOptions:F()},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(k.a,{inline:!0},r.a.createElement(z.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(D.a,{className:"mr-sm-2"},"Showing the ",r.a.createElement("b",null,"\xa0total area of fires currently burning\xa0")," in "),r.a.createElement(C.a,{id:"stateSelect",options:this.state.stateOptions,onChange:this.updateStateOption.bind(this),value:this.state.currentStateOption||"",styles:H})),r.a.createElement(z.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(D.a,{className:"mr-sm-2"},"over the city of:"),r.a.createElement(C.a,{id:"citySelect",options:this.state.cityOptions,onChange:this.updateCityOption.bind(this),value:this.state.currentCityOption||"",styles:R})))}}]),e}(r.a.Component),G=function(t){function e(t){var a,n;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).state={target:a.props.target,data:a.props.data,size:(n=a.props.data.currentFires.area.total,n/1e6>1?(n/1e6).toFixed(2).toString()+"m":n.toLocaleString(void 0,{maximumFractionDigits:2}))},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(d.d,{id:"statsCard"},r.a.createElement(d.f,null,this.state.target.toUpperCase()),r.a.createElement(d.e,null,r.a.createElement(d.u,{small:!0,borderless:!0,id:"statsTable"},r.a.createElement(d.v,null,r.a.createElement("tr",null,r.a.createElement("td",{id:"tableCol1"},r.a.createElement("b",null,this.state.size," ha")),r.a.createElement("td",{id:"tableCol2"},"currently burning")),r.a.createElement("tr",null,r.a.createElement("td",{id:"tableCol1"},r.a.createElement("b",null,this.state.data.currentFires.count.wildfire)),r.a.createElement("td",{id:"tableCol2"},"current wildfire incidences"))))))}}]),e}(r.a.Component),I=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).state={data:void 0,repos:{aggregate:void 0,nsw:void 0,vic:void 0},options:{target:N.AGG,city:A.PAR}},a.getDataAll=a.getDataAll.bind(Object(v.a)(a)),a.getData=a.getData.bind(Object(v.a)(a)),a.fetchJson=a.fetchJson.bind(Object(v.a)(a)),a.updateCitySelection=a.updateCitySelection.bind(Object(v.a)(a)),a.updateStateSelection=a.updateStateSelection.bind(Object(v.a)(a)),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.getDataAll()}},{key:"updateCitySelection",value:function(t){var e=this.state.options;e.city=A[t],console.log("CITY",JSON.stringify(e.city)),this.setState({options:e})}},{key:"updateStateSelection",value:function(t){var e=this.state.options;e.target=N[t],console.log("STATE",JSON.stringify(e.target));var a=N[t].label;switch(console.log("STATE OPTION",a),a){case"vic":this.setState({data:this.state.repos.vic,options:e});break;case"nsw":this.setState({data:this.state.repos.nsw,options:e});break;case"aggregate":this.setState({data:this.state.repos.aggregate,options:e})}}},{key:"getDataAll",value:function(){var t,e,a,n,r,i;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t={},console.log("REPOS1",JSON.stringify(t)),o.next=4,b.a.awrap(Promise.all([this.getData("aggregate"),this.getData("vic"),this.getData("nsw")]));case 4:e=o.sent,a=Object(f.a)(e,3),n=a[0],r=a[1],i=a[2],t.aggregate=n,t.vic=r,t.nsw=i,console.log("REPOS2",JSON.stringify(t.aggregate)),this.setState({repos:t});case 14:case"end":return o.stop()}}),null,this)}},{key:"fetchJson",value:function(t){var e;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch(t));case 2:if(!(e=a.sent).ok){a.next=7;break}return a.abrupt("return",e.json());case 7:throw new Error("Data fetch failed");case 9:case"end":return a.stop()}}))}},{key:"getData",value:function(t){var e,a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat("http://localhost:3000","/").concat(t),n.prev=1,n.next=4,b.a.awrap(this.fetchJson(e));case 4:return a=n.sent,t==this.state.options.target.label&&(this.setState({data:a}),console.log("TARGET",JSON.stringify(a))),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),null,this,[[1,9]])}},{key:"render",value:function(){var t=[];return void 0!=this.state.data&&(t=[this.state.options.city.lat,this.state.options.city.lng]),r.a.createElement(d.i,{fluid:!0,id:"homepageContainer"},r.a.createElement(d.t,null,r.a.createElement(d.g,{id:"col1"},r.a.createElement(d.d,{className:"rounded-0",id:"sidebarCard"},r.a.createElement(d.e,null,void 0!=this.state.repos.nsw?r.a.createElement(G,{target:"vic & nsw",data:this.state.repos.aggregate}):null,void 0!=this.state.repos.nsw?r.a.createElement(G,{target:"nsw",data:this.state.repos.nsw}):null,void 0!=this.state.repos.nsw?r.a.createElement(G,{target:"vic",data:this.state.repos.vic}):null))),r.a.createElement(d.g,null,r.a.createElement(d.t,{id:"row2"},r.a.createElement(d.g,null,r.a.createElement(d.d,{className:"rounded-0",id:"mapHeaderCard"},r.a.createElement(d.e,null,r.a.createElement(J,{options:this.state.options,updateStateSelection:this.updateStateSelection,updateCitySelection:this.updateCitySelection}))))),r.a.createElement(d.t,null,r.a.createElement(d.g,null,r.a.createElement(d.d,{className:"rounded-0",id:"mapCard"},r.a.createElement(d.e,null,void 0!=this.state.data&&void 0!=this.state.repos.aggregate?r.a.createElement(w,{key:t,size:this.state.data.currentFires.area.total,lat:this.state.options.city.lat,lng:this.state.options.city.lng,maxSize:this.state.repos.aggregate.currentFires.area.total}):null)))))))}}]),e}(r.a.Component),L=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d.n,{color:"mdb-color darken-3",dark:!0,expand:"md"},r.a.createElement(d.o,null,r.a.createElement(d.m,{to:"/"}," ",r.a.createElement("strong",{className:"white-text"},"Bushfire Area Map"))),r.a.createElement(d.q,{onClick:this.toggleCollapse}),r.a.createElement(d.h,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(d.p,{right:!0},r.a.createElement(d.l,null,r.a.createElement(d.m,{className:"waves-effect waves-light",to:"#!"},r.a.createElement(d.j,{icon:"info-circle"}))),r.a.createElement(d.l,null,r.a.createElement(d.m,{className:"waves-effect waves-light",to:"#!"},r.a.createElement(d.j,{fab:!0,icon:"github"})))))),r.a.createElement("div",{id:"page-content"},r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(I,null))))}}]),e}(n.Component);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},81:function(t,e,a){t.exports=a(134)},89:function(t,e,a){},90:function(t,e,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.755e4f3f.chunk.js.map