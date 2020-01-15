(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(23),o=a.n(i),s=(a(86),a(87),a(88),a(89),a(90),a(7)),l=a(8),c=a(9),p=a(10),u=a(11),d=a(6),m=a(39),g=a(33),h=a(36),b=a.n(h),f=a(79),v=a(2),E=(a(16),a(145)),O=a(139),x=a(140),S=a(141),y=a(146);a(113);function j(e){return Math.sqrt(1e4*e/Math.PI)}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).onFeatureGroupAdd=function(){var e=a.refs.circle.leafletElement.getBounds(),t=a.refs.circle2.leafletElement.getBounds();e.getSouthWest().wrap(),e.getNorthEast().wrap(),t.getSouthWest().wrap(),t.getNorthEast().wrap(),a.setState({rectangleBounds:t}),a.refs.map.leafletElement.fitBounds(e),a.refs.rec.leafletElement.setBounds(t)},a.state={lat:a.props.lat,lng:a.props.lng,zoom:1,size:a.props.size,maxSize:a.props.maxSize,maxRadius:j(a.props.maxSize),polygon:(a.props.lat,a.props.lng,void a.props.size),radius:j(a.props.size),rectangleBounds:[[a.props.lat,a.props.lng],[a.props.lat,a.props.lng]]},a.onFeatureGroupAdd=a.onFeatureGroupAdd.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.size!==e.size&&this.setState({size:this.props.size,radius:j(this.props.size)},(function(){return t.onFeatureGroupAdd()}))}},{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return r.a.createElement(E.a,{ref:"map",zoomSnap:.1,center:e,zoom:this.state.zoom},r.a.createElement(O.a,{ref:"features",onAdd:this.onFeatureGroupAdd},r.a.createElement(x.a,{ref:"circle",key:this.props.maxSize,center:[this.state.lat,this.state.lng],fillColor:"transparent",color:"transparent",radius:this.state.maxRadius}),r.a.createElement(x.a,{ref:"circle2",key:this.props.size,center:[this.state.lat,this.state.lng],fillColor:"transparent",color:"transparent",radius:this.state.radius}),r.a.createElement(S.a,{ref:"rec",bounds:this.state.rectangleBounds,fillColor:"red",color:"red"})),r.a.createElement(y.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"}))}}]),t}(n.Component),C=a(60),D=a(142),k=a(143),z=a(144),A={NSW:{abr:"NSW",label:"nsw",description:"NSW"},VIC:{abr:"VIC",label:"vic",description:"VIC"},AGG:{abr:"AGG",label:"aggregate",description:"both NSW & VIC"}},N={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},T={MEL:{name:"Melbourne",abr:"MEL",lat:-37.813629,lng:144.963058},SYD:{name:"Sydney",abr:"SYD",lat:-33.86882,lng:151.20929},BNE:{name:"Brisbane",abr:"BNE",lat:-27.46977,lng:153.025131},PER:{name:"Perth",abr:"PER",lat:-31.950527,lng:115.860458},ADL:{name:"Adelaide",abr:"ADL",lat:-34.928497,lng:138.600739},DRW:{name:"Darwin",abr:"DRW",lat:-12.46344,lng:130.845642},HBA:{name:"Hobart",abr:"HBA",lat:-42.882137,lng:147.128553},PAR:{name:"Paris",abr:"PAR",lat:48.856613,lng:2.352222},LCY:{name:"London",abr:"LCY",lat:51.507351,lng:-.127758},NYC:{name:"New York City",abr:"NYC",lat:40.712776,lng:-74.005974}},B=a(12),H={container:function(e){return Object(B.a)({},e,{width:"150px",maxHeight:"31px",height:"31px"})},control:function(e,t){t.isFocused;var a=t.isDisabled;return Object(B.a)({},e,{width:"99%",height:"31px",minHeight:"31px",maxHeight:"31px",backgroundColor:"white",borderRadius:"0px",boxShadow:"0px",borderWidth:a?"0px":"1px",borderStyle:"solid",borderColor:"#ced4da",paddingLeft:"8px",paddingRight:"1px"})},option:function(e,t){t.isSelected,t.isFocused;return Object(B.a)({},e,{height:"31px",maxHeight:"31px",fontSize:".875rem",paddingTop:"5px",paddingBottom:"5px"})},input:function(e){return Object(B.a)({},e,{fontSize:".875rem"})},singleValue:function(e){return Object(B.a)({},e,{fontSize:"1rem",color:"#495057"})},valueContainer:function(e){return Object(B.a)({},e,{position:"none",padding:"0px"})},indicatorsContainer:function(e,t){var a=t.isDisabled;return Object(B.a)({},e,{height:"31px",maxHeight:"31px",padding:"0px",color:a?"transparent":"#ced4da"})},indicatorSeparator:function(e,t){t.isDisabled;return Object(B.a)({},e,{backgroundColor:"transparent"})},dropdownIndicator:function(e,t){var a=t.isDisabled;return Object(B.a)({},e,{paddingTop:"4px",paddingRight:"4px",paddingBottom:"4px",paddingLeft:"4px",color:a?"transparent":"hsl(0,0%,60%)"})},placeholder:function(e,t){var a=t.isDisabled;return Object(B.a)({},e,{height:"21px",maxHeight:"21px",fontSize:"1rem",color:a?"transparent":"#ced4da"})},menu:function(e){return Object(B.a)({},e,{zIndex:9999})}},R={container:function(e){return Object(B.a)({},e,{width:"200px",maxHeight:"31px",height:"31px"})},control:function(e,t){t.isFocused;var a=t.isDisabled;return Object(B.a)({},e,{width:"99%",height:"31px",minHeight:"31px",maxHeight:"31px",backgroundColor:"white",borderRadius:"0px",boxShadow:"0px",borderWidth:a?"0px":"1px",borderStyle:"solid",borderColor:"#ced4da",paddingLeft:"8px",paddingRight:"0px"})},option:function(e,t){t.isSelected,t.isFocused;return Object(B.a)({},e,{height:"31px",maxHeight:"31px",fontSize:".875rem",paddingTop:"5px",paddingBottom:"5px"})},input:function(e){return Object(B.a)({},e,{fontSize:".875rem"})},singleValue:function(e){return Object(B.a)({},e,{fontSize:"1rem",color:"#495057"})},valueContainer:function(e){return Object(B.a)({},e,{position:"none",padding:"0px"})},indicatorsContainer:function(e,t){var a=t.isDisabled;return Object(B.a)({},e,{height:"31px",maxHeight:"31px",padding:"0px",color:a?"transparent":"#ced4da"})},indicatorSeparator:function(e,t){t.isDisabled;return Object(B.a)({},e,{backgroundColor:"transparent"})},dropdownIndicator:function(e,t){var a=t.isDisabled;return Object(B.a)({},e,{paddingTop:"4px",paddingRight:"4px",paddingBottom:"4px",paddingLeft:"4px",color:a?"transparent":"hsl(0,0%,60%)"})},placeholder:function(e,t){var a=t.isDisabled;return Object(B.a)({},e,{height:"21px",maxHeight:"21px",fontSize:".875rem",color:a?"transparent":"#ced4da"})},menu:function(e){return Object(B.a)({},e,{zIndex:9999})}},F=function(){var e=[];return Object.keys(T).map((function(t){return e.push({value:t,label:T[t].name})})),console.log(JSON.stringify(e)),e},J=function(){var e=[];return Object.keys(A).map((function(t){return e.push({value:t,label:A[t].description})})),console.log(JSON.stringify(e)),e},G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).updateCityOption=function(e){a.setState({currentCityOption:e}),a.props.updateCitySelection(e.value)},a.updateStateOption=function(e){a.setState({currentStateOption:e}),a.props.updateStateSelection(e.value)},a.state={currentStateOption:{value:a.props.options.target.abr,label:a.props.options.target.description},stateOptions:J(),currentCityOption:{value:a.props.options.city.abr,label:a.props.options.city.name},cityOptions:F()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{inline:!0},r.a.createElement(k.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(z.a,{className:"mr-sm-2"},"Showing the ",r.a.createElement("b",null,"\xa0total area of fires currently burning\xa0")," in "),r.a.createElement(C.a,{id:"stateSelect",options:this.state.stateOptions,onChange:this.updateStateOption.bind(this),value:this.state.currentStateOption||"",styles:R})),r.a.createElement(k.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(z.a,{className:"mr-sm-2"},"over the city of:"),r.a.createElement(C.a,{id:"citySelect",options:this.state.cityOptions,onChange:this.updateCityOption.bind(this),value:this.state.currentCityOption||"",styles:H})))}}]),t}(r.a.Component),L=function(e){var t=Date.parse(e),a=new Date(t);console.log("DDDDD",a);var n=a.getMonth()+1,r=""+a.getDate(),i=a.getFullYear().toString().substring(2);console.log("MONTH",n);var o=N[n]+" "+r+", "+i,s=a.getHours(),l=a.getMinutes();return[o,(s%12||12)+":"+(l<10?"0"+l:l)+(s<12?"am":"pm")].join(" at ")},M=function(e){function t(e){var a,n;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={target:a.props.target,data:a.props.data,size:(n=a.props.data.currentFires.area.total,n/1e6>1?(n/1e6).toFixed(2).toString()+"m":n.toLocaleString(void 0,{maximumFractionDigits:2})),date:L(a.props.data.currentFires.dateGenerated)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.target;return r.a.createElement(d.d,{id:"statsCard"},r.a.createElement(d.f,null,"vic & nsw"==e?"Both "+this.state.target.toUpperCase():this.state.target.toUpperCase()),r.a.createElement(d.e,null,r.a.createElement(d.u,{small:!0,borderless:!0,id:"statsTable"},r.a.createElement(d.v,null,r.a.createElement("tr",null,r.a.createElement("td",{id:"tableCol1"},r.a.createElement("b",null,this.state.size," ha")),r.a.createElement("td",{id:"tableCol2"},"currently burning")),r.a.createElement("tr",null,r.a.createElement("td",{id:"tableCol1"},r.a.createElement("b",null,this.state.data.currentFires.count.wildfire)),r.a.createElement("td",{id:"tableCol2"},"current wildfire incidences")))),r.a.createElement("div",{id:"statsTimestamp"},r.a.createElement("span",{id:"statsTimestamp"},"LAST UPDATED: "+this.state.date.toUpperCase()))))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={data:void 0,repos:{aggregate:void 0,nsw:void 0,vic:void 0},options:{target:A.AGG,city:T.PAR}},a.getDataAll=a.getDataAll.bind(Object(v.a)(a)),a.getData=a.getData.bind(Object(v.a)(a)),a.fetchJson=a.fetchJson.bind(Object(v.a)(a)),a.updateCitySelection=a.updateCitySelection.bind(Object(v.a)(a)),a.updateStateSelection=a.updateStateSelection.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDataAll()}},{key:"updateCitySelection",value:function(e){var t=this.state.options;t.city=T[e],console.log("CITY",JSON.stringify(t.city)),this.setState({options:t})}},{key:"updateStateSelection",value:function(e){var t=this.state.options;t.target=A[e],console.log("STATE",JSON.stringify(t.target));var a=A[e].label;switch(console.log("STATE OPTION",a),a){case"vic":this.setState({data:this.state.repos.vic,options:t});break;case"nsw":this.setState({data:this.state.repos.nsw,options:t});break;case"aggregate":this.setState({data:this.state.repos.aggregate,options:t})}}},{key:"getDataAll",value:function(){var e,t,a,n,r,i;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e={},console.log("REPOS1",JSON.stringify(e)),o.next=4,b.a.awrap(Promise.all([this.getData("aggregate"),this.getData("vic"),this.getData("nsw")]));case 4:t=o.sent,a=Object(f.a)(t,3),n=a[0],r=a[1],i=a[2],e.aggregate=n,e.vic=r,e.nsw=i,console.log("REPOS2",JSON.stringify(e.aggregate)),this.setState({repos:e});case 14:case"end":return o.stop()}}),null,this)}},{key:"fetchJson",value:function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch(e));case 2:if(!(t=a.sent).ok){a.next=7;break}return a.abrupt("return",t.json());case 7:throw new Error("Data fetch failed");case 9:case"end":return a.stop()}}))}},{key:"getData",value:function(e){var t,a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat("https://firedatacollator.emilylm.me","/").concat(e),n.prev=1,n.next=4,b.a.awrap(this.fetchJson(t));case 4:return a=n.sent,e==this.state.options.target.label&&(this.setState({data:a}),console.log("TARGET",JSON.stringify(a))),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),null,this,[[1,9]])}},{key:"render",value:function(){var e=[];return void 0!=this.state.data&&(e=[this.state.options.city.lat,this.state.options.city.lng]),r.a.createElement(d.i,{fluid:!0,id:"homepageContainer"},r.a.createElement(d.t,null,r.a.createElement(d.g,{id:"col1"},r.a.createElement(d.d,{className:"rounded-0",id:"sidebarHead"},r.a.createElement(d.e,null,r.a.createElement("span",{id:"shContent"},"STATS"))),r.a.createElement(d.d,{className:"rounded-0",id:"sidebarCard"},r.a.createElement(d.e,null,void 0!=this.state.repos.nsw?r.a.createElement(M,{target:"vic & nsw",data:this.state.repos.aggregate}):null,void 0!=this.state.repos.nsw?r.a.createElement(M,{target:"nsw",data:this.state.repos.nsw}):null,void 0!=this.state.repos.nsw?r.a.createElement(M,{target:"vic",data:this.state.repos.vic}):null))),r.a.createElement(d.g,null,r.a.createElement(d.t,{id:"row2"},r.a.createElement(d.g,null,r.a.createElement(d.d,{className:"rounded-0",id:"mapHeaderCard"},r.a.createElement(d.e,null,r.a.createElement(G,{options:this.state.options,updateStateSelection:this.updateStateSelection,updateCitySelection:this.updateCitySelection}))))),r.a.createElement(d.t,null,r.a.createElement(d.g,null,r.a.createElement(d.d,{className:"rounded-0",id:"mapCard"},r.a.createElement(d.e,null,void 0!=this.state.data&&void 0!=this.state.repos.aggregate?r.a.createElement(w,{key:e,size:this.state.data.currentFires.area.total,lat:this.state.options.city.lat,lng:this.state.options.city.lng,maxSize:this.state.repos.aggregate.currentFires.area.total}):null)))))))}}]),t}(r.a.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.n,{color:"mdb-color darken-3",dark:!0,expand:"md"},r.a.createElement(d.o,null,r.a.createElement(d.m,{to:"/bushfire-collator-client/"}," ",r.a.createElement("strong",{className:"white-text"},"Bushfire Area Map"))),r.a.createElement(d.q,{onClick:this.toggleCollapse}),r.a.createElement(d.h,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(d.p,{right:!0},r.a.createElement(d.l,null,r.a.createElement(d.m,{className:"waves-effect waves-light",to:"#!"},r.a.createElement(d.j,{icon:"info-circle"}))),r.a.createElement(d.l,null,r.a.createElement(d.m,{className:"waves-effect waves-light",to:"#!"},r.a.createElement(d.j,{fab:!0,icon:"github"})))))),r.a.createElement("div",{id:"page-content"},r.a.createElement(g.a,{exact:!0,path:"/bushfire-collator-client/"},r.a.createElement(P,null))))}}]),t}(n.Component);var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,a){e.exports=a(134)},89:function(e,t,a){},90:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.4f53e31d.chunk.js.map