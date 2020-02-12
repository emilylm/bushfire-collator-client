(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{135:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(18),o=a.n(i),s=(a(87),a(88),a(89),a(90),a(91),a(7)),c=a(8),l=a(9),p=a(10),d=a(11),u=a(6),g=a(39),h=a(35),m=a(80),b=a(26),f=a.n(b),v=a(2),y=(a(16),a(147)),E=a(140),O=a(141),S=a(142),x=a(143),w=a(148);a(114);function C(t){return Math.sqrt(1e4*t/Math.PI)}var j=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).onFeatureGroupAdd=function(){var t=a.refs.circle.leafletElement.getBounds(),e=a.refs.circle2.leafletElement.getBounds();if(t.getSouthWest().wrap(),t.getNorthEast().wrap(),e.getSouthWest().wrap(),e.getNorthEast().wrap(),a.setState({rectangleBounds:e}),a.refs.rec.leafletElement.setBounds(e),void 0==a.props.maxPoly)a.refs.map.leafletElement.fitBounds(t);else{var n=a.refs.poly.leafletElement.getBounds();n.getSouthWest().wrap(),n.getNorthEast().wrap(),a.refs.map.leafletElement.fitBounds(n)}},a.state={lat:a.props.lat,lng:a.props.lng,poly:a.props.poly,zoom:1,size:a.props.size,maxSize:a.props.maxSize,maxRadius:C(a.props.maxSize),polygon:(a.props.lat,a.props.lng,void a.props.size),radius:C(a.props.size),rectangleBounds:[[a.props.lat,a.props.lng],[a.props.lat,a.props.lng]]},a.onFeatureGroupAdd=a.onFeatureGroupAdd.bind(Object(v.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){console.log(JSON.stringify(this.props.poly))}},{key:"componentDidUpdate",value:function(t){var e=this;this.props.size!==t.size&&this.setState({size:this.props.size,radius:C(this.props.size)},(function(){return e.onFeatureGroupAdd()})),this.props.poly!==t.poly&&this.setState({poly:this.props.poly},(function(){return e.onFeatureGroupAdd()}))}},{key:"render",value:function(){var t=[this.state.lat,this.state.lng],e="PAR"==this.props.city||"LCY"==this.props.city||"NYC"==this.props.city?"red":"transparent";return r.a.createElement(y.a,{ref:"map",zoomSnap:.1,center:t,zoom:this.state.zoom},r.a.createElement(E.a,{ref:"features",onAdd:this.onFeatureGroupAdd},r.a.createElement(O.a,{ref:"circle",key:this.props.maxSize,center:[this.state.lat,this.state.lng],fillColor:"transparent",color:"transparent",radius:this.state.maxRadius}),r.a.createElement(O.a,{ref:"circle2",key:this.props.size,center:[this.state.lat,this.state.lng],fillColor:"transparent",color:"transparent",radius:this.state.radius}),r.a.createElement(S.a,{ref:"poly",data:this.props.maxPoly,fillColor:"transparent",color:"transparent"}),r.a.createElement(x.a,{ref:"rec",bounds:this.state.rectangleBounds,fillColor:"".concat(e),color:"".concat(e)}),r.a.createElement(S.a,{key:this.state.size,data:this.state.poly,fillColor:"red",color:"red",weight:"1"})),r.a.createElement(w.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"}))}}]),e}(n.Component),D=a(60),N=a(144),A=a(145),k=a(146),z={NSW:{abr:"NSW",label:"nsw",description:"NSW"},VIC:{abr:"VIC",label:"vic",description:"VIC"},AGG:{abr:"AGG",label:"aggregate",description:"both NSW & VIC"}},R={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},B={MEL:{name:"Melbourne",abr:"MEL",lat:-37.813629,lng:144.963058},SYD:{name:"Sydney",abr:"SYD",lat:-33.86882,lng:151.20929},BNE:{name:"Brisbane",abr:"BNE",lat:-27.46977,lng:153.025131},PER:{name:"Perth",abr:"PER",lat:-31.950527,lng:115.860458},ADL:{name:"Adelaide",abr:"ADL",lat:-34.928497,lng:138.600739},DRW:{name:"Darwin",abr:"DRW",lat:-12.46344,lng:130.845642},HBA:{name:"Hobart",abr:"HBA",lat:-42.882137,lng:147.128553},PAR:{name:"Paris",abr:"PAR",lat:48.856613,lng:2.352222},LCY:{name:"London",abr:"LCY",lat:51.507351,lng:-.127758},NYC:{name:"New York City",abr:"NYC",lat:40.712776,lng:-74.005974}},P=a(12),H={container:function(t){return Object(P.a)({},t,{width:"150px",maxHeight:"31px",height:"31px"})},control:function(t,e){e.isFocused;var a=e.isDisabled;return Object(P.a)({},t,{width:"99%",height:"31px",minHeight:"31px",maxHeight:"31px",backgroundColor:"white",borderRadius:"0px",boxShadow:"0px",borderWidth:a?"0px":"1px",borderStyle:"solid",borderColor:"#ced4da",paddingLeft:"8px",paddingRight:"1px"})},option:function(t,e){e.isSelected,e.isFocused;return Object(P.a)({},t,{height:"31px",maxHeight:"31px",fontSize:".875rem",paddingTop:"5px",paddingBottom:"5px"})},input:function(t){return Object(P.a)({},t,{fontSize:".875rem"})},singleValue:function(t){return Object(P.a)({},t,{fontSize:"1rem",color:"#495057"})},valueContainer:function(t){return Object(P.a)({},t,{position:"none",padding:"0px"})},indicatorsContainer:function(t,e){var a=e.isDisabled;return Object(P.a)({},t,{height:"31px",maxHeight:"31px",padding:"0px",color:a?"transparent":"#ced4da"})},indicatorSeparator:function(t,e){e.isDisabled;return Object(P.a)({},t,{backgroundColor:"transparent"})},dropdownIndicator:function(t,e){var a=e.isDisabled;return Object(P.a)({},t,{paddingTop:"4px",paddingRight:"4px",paddingBottom:"4px",paddingLeft:"4px",color:a?"transparent":"hsl(0,0%,60%)"})},placeholder:function(t,e){var a=e.isDisabled;return Object(P.a)({},t,{height:"21px",maxHeight:"21px",fontSize:"1rem",color:a?"transparent":"#ced4da"})},menu:function(t){return Object(P.a)({},t,{zIndex:9999})}},J={container:function(t){return Object(P.a)({},t,{width:"200px",maxHeight:"31px",height:"31px"})},control:function(t,e){e.isFocused;var a=e.isDisabled;return Object(P.a)({},t,{width:"99%",height:"31px",minHeight:"31px",maxHeight:"31px",backgroundColor:"white",borderRadius:"0px",boxShadow:"0px",borderWidth:a?"0px":"1px",borderStyle:"solid",borderColor:"#ced4da",paddingLeft:"8px",paddingRight:"0px"})},option:function(t,e){e.isSelected,e.isFocused;return Object(P.a)({},t,{height:"31px",maxHeight:"31px",fontSize:".875rem",paddingTop:"5px",paddingBottom:"5px"})},input:function(t){return Object(P.a)({},t,{fontSize:".875rem"})},singleValue:function(t){return Object(P.a)({},t,{fontSize:"1rem",color:"#495057"})},valueContainer:function(t){return Object(P.a)({},t,{position:"none",padding:"0px"})},indicatorsContainer:function(t,e){var a=e.isDisabled;return Object(P.a)({},t,{height:"31px",maxHeight:"31px",padding:"0px",color:a?"transparent":"#ced4da"})},indicatorSeparator:function(t,e){e.isDisabled;return Object(P.a)({},t,{backgroundColor:"transparent"})},dropdownIndicator:function(t,e){var a=e.isDisabled;return Object(P.a)({},t,{paddingTop:"4px",paddingRight:"4px",paddingBottom:"4px",paddingLeft:"4px",color:a?"transparent":"hsl(0,0%,60%)"})},placeholder:function(t,e){var a=e.isDisabled;return Object(P.a)({},t,{height:"21px",maxHeight:"21px",fontSize:".875rem",color:a?"transparent":"#ced4da"})},menu:function(t){return Object(P.a)({},t,{zIndex:9999})}},M=function(){var t=[];return Object.keys(B).map((function(e){return t.push({value:e,label:B[e].name})})),console.log(JSON.stringify(t)),t},T=function(){var t=[];return Object.keys(z).map((function(e){return t.push({value:e,label:z[e].description})})),console.log(JSON.stringify(t)),t},L=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).updateCityOption=function(t){a.setState({currentCityOption:t}),a.props.updateCitySelection(t.value)},a.updateStateOption=function(t){a.setState({currentStateOption:t}),a.props.updateStateSelection(t.value)},a.state={currentStateOption:{value:a.props.options.target.abr,label:a.props.options.target.description},stateOptions:T(),currentCityOption:{value:a.props.options.city.abr,label:a.props.options.city.name},cityOptions:M()},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(N.a,{inline:!0},r.a.createElement(A.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(k.a,{className:"mr-sm-2"},"Showing the ",r.a.createElement("b",null,"\xa0total area of fires currently burning\xa0")," in "),r.a.createElement(D.a,{id:"stateSelect",options:this.state.stateOptions,onChange:this.updateStateOption.bind(this),value:this.state.currentStateOption||"",styles:J})),r.a.createElement(A.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(k.a,{className:"mr-sm-2"},"over the city of:"),r.a.createElement(D.a,{id:"citySelect",options:this.state.cityOptions,onChange:this.updateCityOption.bind(this),value:this.state.currentCityOption||"",styles:H})))}}]),e}(r.a.Component),F=function(t){var e=Date.parse(t),a=new Date(e);console.log("DDDDD",a);var n=a.getMonth()+1,r=""+a.getDate(),i=a.getFullYear().toString().substring(2);console.log("MONTH",n);var o=R[n]+" "+r+", "+i,s=a.getHours(),c=a.getMinutes();return[o,(s%12||12)+":"+(c<10?"0"+c:c)+(s<12?"am":"pm")].join(" at ")},W=function(t){function e(t){var a,n;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={target:a.props.target,data:a.props.data,size:(n=a.props.data.currentFires.area.total,n/1e6>1?(n/1e6).toFixed(2).toString()+"m":n.toLocaleString(void 0,{maximumFractionDigits:2})),date:F(a.props.data.currentFires.dateGenerated),isOpen:a.props.isOpen},a.toggleCard=a.toggleCard.bind(Object(v.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this;this.props.first!==t.first&&setTimeout((function(){e.setState({isOpen:e.props.isOpen})}),0)}},{key:"toggleCard",value:function(){var t=!this.state.isOpen;this.setState({isOpen:t})}},{key:"render",value:function(){var t=this.state.target;return r.a.createElement(u.d,{id:"statsCard"},r.a.createElement(u.f,null,r.a.createElement("span",null,"aggregate"==t?"Both VIC & NSW":this.state.target.toUpperCase()),r.a.createElement("button",{type:"button",className:"btn btn-circle btn-circle-sm m-1",id:"collapseBtn",onClick:this.toggleCard.bind(this)},this.state.isOpen?r.a.createElement("i",{class:"fa fa-chevron-up fa-sm",id:"upIcon"}):r.a.createElement("i",{class:"fa fa-chevron-down fa-sm",id:"downIcon"}))),this.state.isOpen?r.a.createElement(u.e,null,r.a.createElement(u.u,{small:!0,borderless:!0,id:"statsTable"},r.a.createElement(u.v,null,r.a.createElement("tr",null,r.a.createElement("td",{id:"tableCol1"},r.a.createElement("b",null,this.state.size," ha")),r.a.createElement("td",{id:"tableCol2"},"currently burning")),r.a.createElement("tr",null,r.a.createElement("td",{id:"tableCol1"},r.a.createElement("b",null,this.state.data.currentFires.count.wildfire)),r.a.createElement("td",{id:"tableCol2"},"current wildfire incidences")))),r.a.createElement("div",{id:"statsTimestamp"},r.a.createElement("span",{id:"statsTimestamp"},"LAST UPDATED: "+this.state.date.toUpperCase()))):null)}}]),e}(r.a.Component),I=a(79),G="https://firedatacollator.emilylm.me",Y={aggregate:1,nsw:2,vic:3},V=function(t,e){return e.unshift(e.splice(e.findIndex((function(e){return e==t})),1)[0]),e},U=function(t){var e=t.order,a=t.repos;return r.a.createElement(I.a,{staggerDurationBy:"30",duration:500,enterAnimation:"fade",leaveAnimation:"fade"},e.map((function(t){return r.a.createElement(W,{key:Y[t],target:t,data:a[t],isOpen:t===e[0],first:e[0]})})))},q=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={data:void 0,repos:{aggregate:void 0,nsw:void 0,vic:void 0},MEL:{aggregate:void 0,nsw:void 0,vic:void 0},SYD:{aggregate:void 0,nsw:void 0,vic:void 0},BNE:{aggregate:void 0,nsw:void 0,vic:void 0},DRW:{aggregate:void 0,nsw:void 0,vic:void 0},HBA:{aggregate:void 0,nsw:void 0,vic:void 0},CAN:{aggregate:void 0,nsw:void 0,vic:void 0},PER:{aggregate:void 0,nsw:void 0,vic:void 0},ADL:{aggregate:void 0,nsw:void 0,vic:void 0},options:{target:z.AGG,city:B.MEL},order:["aggregate","vic","nsw"]},a.getDataAll=a.getDataAll.bind(Object(v.a)(a)),a.getData=a.getData.bind(Object(v.a)(a)),a.getPolys=a.getPolys.bind(Object(v.a)(a)),a.getPolyMel=a.getPolyMel.bind(Object(v.a)(a)),a.fetchJson=a.fetchJson.bind(Object(v.a)(a)),a.updateCitySelection=a.updateCitySelection.bind(Object(v.a)(a)),a.updateStateSelection=a.updateStateSelection.bind(Object(v.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.getDataAll()}},{key:"updateCitySelection",value:function(t){var e=this.state.options;e.city=B[t],console.log("CITY",JSON.stringify(e.city)),this.setState({options:e})}},{key:"updateStateSelection",value:function(t){var e=this.state.options,a=this.state.order;e.target=z[t],console.log("STATE",JSON.stringify(e.target));var n=z[t].label;switch(console.log("STATE OPTION",n),n){case"vic":a=V("vic",a),console.log("ORDER",JSON.stringify(a)),this.setState({data:this.state.repos.vic,options:e,order:a});break;case"nsw":a=V("nsw",a),console.log("ORDER",JSON.stringify(a)),this.setState({data:this.state.repos.nsw,options:e,order:a});break;case"aggregate":a=V("aggregate",a),console.log("ORDER",JSON.stringify(a)),this.setState({data:this.state.repos.aggregate,options:e,order:a})}}},{key:"getPolyMel",value:function(){var t,e;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t="".concat(G,"/polys/mel"),a.prev=1,a.next=4,f.a.awrap(this.fetchJson(t));case 4:return e=a.sent,a.abrupt("return",e);case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}}),null,this,[[1,8]])}},{key:"getPolys",value:function(){var t,e;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t="".concat(G,"/polys"),a.prev=1,a.next=4,f.a.awrap(this.fetchJson(t));case 4:return e=a.sent,a.abrupt("return",e);case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}}),null,this,[[1,8]])}},{key:"getDataAll",value:function(){var t,e,a,n,r,i,o,s,c,l,p,d,u,g,h,b;return f.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:return t={},console.log("REPOS1",JSON.stringify(t)),v.prev=2,e={},v.next=6,f.a.awrap(this.getPolyMel());case 6:return a=v.sent,e.vic=a.vic,e.nsw=a.nsw,e.aggregate=a.aggregate,this.setState({MEL:e}),v.next=13,f.a.awrap(Promise.all([this.getData("aggregate"),this.getData("vic"),this.getData("nsw")]));case 13:return n=v.sent,r=Object(m.a)(n,3),i=r[0],o=r[1],s=r[2],v.next=20,f.a.awrap(this.getPolys());case 20:c=v.sent,l=c.SYD,p=c.BNE,d=c.ADL,u=c.PER,g=c.HBA,h=c.CAN,b=c.DRW,this.setState({SYD:l,BNE:p,ADL:d,PER:u,HBA:g,CAN:h,DRW:b}),t.aggregate=i,t.vic=o,t.nsw=s,console.log("REPOS2",JSON.stringify(t.aggregate)),this.setState({repos:t}),v.next=33;break;case 30:v.prev=30,v.t0=v.catch(2),console.log(v.t0);case 33:case"end":return v.stop()}}),null,this,[[2,30]])}},{key:"fetchJson",value:function(t){var e;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(fetch(t));case 2:if(!(e=a.sent).ok){a.next=7;break}return a.abrupt("return",e.json());case 7:throw new Error("Data fetch failed");case 9:case"end":return a.stop()}}))}},{key:"getData",value:function(t){var e,a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(G,"/").concat(t),n.prev=1,n.next=4,f.a.awrap(this.fetchJson(e));case 4:return a=n.sent,t==this.state.options.target.label&&(this.setState({data:a}),console.log("TARGET",JSON.stringify(a))),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),null,this,[[1,9]])}},{key:"render",value:function(){var t=[];return void 0!=this.state.data&&(t=[this.state.options.city.lat,this.state.options.city.lng]),r.a.createElement(u.i,{fluid:!0,id:"homepageContainer"},r.a.createElement(u.t,null,r.a.createElement(u.g,{id:"col1"},r.a.createElement(u.d,{className:"rounded-0",id:"sidebarHead"},r.a.createElement(u.e,null,r.a.createElement("span",{id:"shContent"},"STATS"))),r.a.createElement(u.d,{className:"rounded-0",id:"sidebarCard"},r.a.createElement(u.e,null,void 0!=this.state.repos.nsw&&void 0!=this.state.repos.nsw&&void 0!=this.state.repos.nsw?r.a.createElement(U,{order:this.state.order,repos:this.state.repos}):null))),r.a.createElement(u.g,null,r.a.createElement(u.t,{id:"row2"},r.a.createElement(u.g,null,r.a.createElement(u.d,{className:"rounded-0",id:"mapHeaderCard"},r.a.createElement(u.e,null,r.a.createElement(L,{options:this.state.options,updateStateSelection:this.updateStateSelection,updateCitySelection:this.updateCitySelection}))))),r.a.createElement(u.t,null,r.a.createElement(u.g,null,r.a.createElement(u.d,{className:"rounded-0",id:"mapCard"},r.a.createElement(u.e,null,void 0!=this.state.data&&void 0!=this.state.repos.aggregate&&void 0!=this.state.MEL.aggregate?r.a.createElement(j,{key:t,size:this.state.data.currentFires.area.total,lat:this.state.options.city.lat,lng:this.state.options.city.lng,maxSize:this.state.repos.aggregate.currentFires.area.total,poly:"".concat(this.state.options.city.abr)in this.state&&"".concat(this.state.options.target.label)in this.state["".concat(this.state.options.city.abr)]?this.state["".concat(this.state.options.city.abr)]["".concat(this.state.options.target.label)]:void 0,maxPoly:"".concat(this.state.options.city.abr)in this.state&&"aggregate"in this.state["".concat(this.state.options.city.abr)]?this.state["".concat(this.state.options.city.abr)].aggregate:void 0,city:this.state.options.city.abr}):null)))))))}}]),e}(r.a.Component),$=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(u.n,{color:"mdb-color darken-3",dark:!0,expand:"md"},r.a.createElement(u.o,null,r.a.createElement(u.m,{to:"/bushfire-collator-client/"}," ",r.a.createElement("strong",{className:"white-text"},"Bushfire Area Map"))),r.a.createElement(u.q,{onClick:this.toggleCollapse}),r.a.createElement(u.h,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(u.p,{right:!0},r.a.createElement(u.l,null,r.a.createElement(u.m,{className:"waves-effect waves-light",to:"#!"},r.a.createElement(u.j,{icon:"info-circle"}))),r.a.createElement(u.l,null,r.a.createElement(u.m,{className:"waves-effect waves-light",to:"#!"},r.a.createElement(u.j,{fab:!0,icon:"github"})))))),r.a.createElement("div",{id:"page-content"},r.a.createElement(h.a,{exact:!0,path:"/bushfire-collator-client/"},r.a.createElement(q,null))))}}]),e}(n.Component);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},82:function(t,e,a){t.exports=a(135)},90:function(t,e,a){},91:function(t,e,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.21b890cf.chunk.js.map