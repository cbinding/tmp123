(function(e){function t(t){for(var o,i,s=t[0],c=t[1],d=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tmp123/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5f5b"),r=n("b1e0"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout")},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"border p-0 bg-light",attrs:{fluid:"",id:"container"}},[n("b-row",{attrs:{"no-gutters":"",id:"header"}},[n("b-col",[n("LayoutHeader")],1)],1),n("vue-splitter",{attrs:{margin:20,defaultPercent:70}},[n("div",{attrs:{slot:"left-pane"},slot:"left-pane"},[n("b-col",[n("LayoutContent")],1)],1),n("div",{attrs:{slot:"right-pane"},slot:"right-pane"},[n("LayoutSidebar")],1)])],1)},d=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MenuBar")],1)},u=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"border-bottom",attrs:{toggleable:"sm",id:"nav"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item-dropdown",{attrs:{text:"File"}},[n("b-dropdown-item-button",{on:{click:e.clearAll}},[n("b-icon-file-earmark-plus",{staticClass:"mr-2"}),n("span",[e._v("New")])],1),n("b-dropdown-item-button",{on:{click:e.openFileDialog}},[n("b-icon-upload",{staticClass:"mr-2"}),n("span",[e._v("Open...")]),n("b-form-file",{staticStyle:{display:"none"},attrs:{plain:"",id:"fileOpen",accept:".json"},on:{input:e.fileLoad}})],1),n("b-dropdown-item-button",{on:{click:e.fileSave}},[n("b-icon-download",{staticClass:"mr-2"}),n("span",[e._v("Save...")])],1),n("b-dropdown-divider"),n("b-dropdown-item-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalFileImport",modifiers:{modalFileImport:!0}}]},[n("b-icon-box-arrow-in-left",{staticClass:"mr-2"}),n("span",[e._v("Import context stratigraphy (CSV)...")]),n("FileImport")],1),n("b-dropdown-item-button",{attrs:{disabled:""}},[n("b-icon-box-arrow-right",{staticClass:"mr-2"}),n("span",[e._v("Export context stratigraphy (CSV)...")])],1),n("b-dropdown-divider"),n("b-dropdown-item-button",{on:{click:e.exportPartPNG}},[n("b-icon-box-arrow-right",{staticClass:"mr-2"}),n("span",[e._v("Export visible diagram (PNG)...")])],1),n("b-dropdown-item-button",{on:{click:e.exportFullPNG}},[n("b-icon-box-arrow-right",{staticClass:"mr-2"}),n("span",[e._v("Export full diagram (PNG)...")])],1)],1),n("b-nav-item-dropdown",{attrs:{text:"View"}},[n("b-dropdown-item-button",{on:{click:e.zoomIn}},[n("b-icon-zoom-in",{staticClass:"mr-2"}),n("span",[e._v("Zoom in")])],1),n("b-dropdown-item-button",{on:{click:e.zoomOut}},[n("b-icon-zoom-out",{staticClass:"mr-2"}),n("span",[e._v("Zoom out")])],1),n("b-dropdown-item-button",{on:{click:e.zoomToFit}},[n("b-icon-arrows-fullscreen",{staticClass:"mr-2"}),n("span",[e._v("Zoom to fit")])],1),n("b-dropdown-divider"),n("b-dropdown-item-button",{on:{click:e.redoLayout}},[n("b-icon-diagram-3",{staticClass:"mr-2"}),n("span",[e._v("Redo Layout")])],1)],1),n("b-nav-item-dropdown",{attrs:{text:"Help"}},[n("b-dropdown-item-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalAbout",modifiers:{modalAbout:!0}}]},[n("b-icon-question-circle",{staticClass:"mr-2"}),n("span",[e._v("About...")]),n("HelpAbout")],1)],1)],1)],1),n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{attrs:{src:"phaser-spacedout-logo.png",height:"30",alt:"PHASER"}})])],1)},p=[],m=(n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{centered:"",id:"modalFileImport",title:"Import delimited file"},on:{ok:e.handleOK,cancel:e.handleClose,close:e.handleClose}},[n("b-form",{staticClass:"border p-1",attrs:{inline:""}},[n("b-form-file",{attrs:{plain:"",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",accept:"text/csv, .csv, .tab, .txt, .tsv",state:Boolean(e.selectedFile)},on:{input:function(t){return e.loadFile(e.selectedFile)}},model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}}),n("b-input-group",{staticClass:"py-2",attrs:{prepend:"Delimiter"}},[n("b-form-radio-group",{staticClass:"p-2 border",attrs:{options:e.delimiterOptions,name:"delimiter"},model:{value:e.delimiter,callback:function(t){e.delimiter=t},expression:"delimiter"}})],1),n("b-form-checkbox",{staticClass:"mx-2",attrs:{inline:"",id:"checkbox-header",name:"checkbox-header",value:!0,"unchecked-value":!1},model:{value:e.hasHeader,callback:function(t){e.hasHeader=t},expression:"hasHeader"}},[n("span",[e._v("Has header row?")])])],1),n("div",{staticClass:"m-2"},[e._v("Preview:")]),n("div",{staticClass:"overflow-auto",staticStyle:{height:"200px"}},[n("b-table",{attrs:{small:"",striped:"",stacked:"",items:e.parserPreview}})],1)],1)}),b=[],h=(n("99af"),n("4ec9"),n("25f0"),n("498a"),n("2909")),g=n("b85c"),v={name:"FileImport",components:{},mixins:[],props:{defaultDelimiter:{type:String,required:!1,default:","}},data:function(){return{delimiter:this.defaultDelimiter,delimiterOptions:[{value:"\\t",text:"Tab"},{value:",",text:"Comma"},{value:";",text:"Semicolon"},{value:"|",text:"Pipe"},{value:" ",text:"Space"}],hasHeader:!0,previewRows:5,selectedFile:null,fileContents:""}},computed:{parserPreview:function(){var e=this,t={delimiter:e.delimiter,encoding:"UTF-8",header:e.hasHeader,preview:e.previewRows,skipEmptyLines:"greedy"},n=e.$papa.parse(e.fileContents,t);return n.data}},methods:{loadFile:function(e){if(e){var t=this,n=new FileReader;n.onload=function(e){t.fileContents=e.target.result},n.readAsText(e)}},handleOK:function(){var e=this,t={delimiter:e.delimiter,encoding:"UTF-8",header:e.hasHeader,skipEmptyLines:"greedy"},n=e.$papa.parse(e.fileContents,t),o=e.contextDataToGraph(n.data);this.$store.dispatch("clearAll"),this.$store.dispatch("loadPhaserData",o),this.selectedFile=null,this.fileContents=""},handleClose:function(){this.selectedFile=null,this.fileContents=""},contextDataToGraph:function(e){var t,n=function(e){return(e||"").toString().trim()},o=new Map,a=new Map,r=Object(g["a"])(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,s=n(i.siteCode),c=n(i.contextNo).toLowerCase(),d=n(i.contextType).toLowerCase(),l=n(i.stratRelationship).toLowerCase(),u=n(i.relatedContextNo).toLowerCase();if(""!==c){var f={id:"context-".concat(c),class:"context",type:d,identifier:c,siteCode:s};if(o.has(f.id)){var p=o.get(f.id);f=Object.assign({},p,f)}o.set(f.id,f)}if(""!==u){var m={id:"context-".concat(u),class:"context",type:"",identifier:u,siteCode:s};if(o.has(m.id)){var b=o.get(m.id);m=Object.assign({},b,m)}o.set(m.id,m)}if(""!==c&&""!==u){var v={id:"context-".concat(c,"-").concat(u),source:"context-".concat(c),target:"context-".concat(u),type:l};if(a.has(v.id)){var y=a.get(v.id);v=Object.assign({},y,v)}a.set(v.id,v)}}}catch(j){r.e(j)}finally{r.f()}return{nodes:Object(h["a"])(o.values()),edges:Object(h["a"])(a.values())}}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},y=v,j=n("2877"),x=Object(j["a"])(y,m,b,!1,null,"8df648fa",null),C=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{centered:"",id:"modalAbout",title:"About"},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div")]},proxy:!0}])},[n("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light","img-src":"phaser-spacedout-logo.png","img-alt":"PHASER","img-top":""}},[n("b-card-body",[n("b-card-text",{staticClass:"border"},[n("p",[e._v("Stratigraphic matrix editing tool")]),n("p",[e._v("Created as part of the MATRIX project")]),n("p",[e._v("https://stratigraphic.github.io/matrix/")])])],1)],1)],1)},E=[],w=(n("b0c0"),{name:"HelpAbout",components:{},mixins:[],props:{name:{type:String,required:!1,default:"Fred"}},data:function(){return{hello:"Hello"}},computed:{fullMessage:function(){return"".concat(this.hello,", ").concat(this.name)}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),_=w,O=(n("8d62"),Object(j["a"])(_,k,E,!1,null,"091f3f20",null)),D=O.exports,T=n("c1df"),$=n.n(T),S={name:"MenuBar",components:{FileImport:C,HelpAbout:D},props:{},data:function(){return{}},computed:{},methods:{openFileDialog:function(){document.getElementById("fileOpen").click()},clearAll:function(){var e=this,t=this;t.$bvModal.msgBoxConfirm("Clear all current data, are you sure?").then((function(n){n&&(t.$store.dispatch("clearAll"),e.$root.$emit("diagramClear"))}))},fileLoad:function(e){var t=this;if(e){var n=new FileReader;n.onload=function(e){var n=JSON.parse(e.target.result);t.$store.dispatch("loadPhaserData",n)},n.readAsText(e)}},fileSave:function(){var e={nodes:this.$store.getters.cyNodes.map((function(e){return e.data})),edges:this.$store.getters.cyEdges.map((function(e){return e.data}))},t="phaser-".concat($()().format("YYYYMMDDHHmmss"),".json");this.saveToFile(JSON.stringify(e),t)},saveToFile:function(e,t){var n=new Blob([e],{type:"text/plain;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(n,t);else{var o=document.createElement("a");if(void 0!==o.download){var a=URL.createObjectURL(n);o.setAttribute("href",a),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}},exportPartPNG:function(){this.$root.$emit("diagramExportPartPNG")},exportFullPNG:function(){this.$root.$emit("diagramExportFullPNG")},zoomIn:function(){this.$root.$emit("diagramZoomIn")},zoomOut:function(){this.$root.$emit("diagramZoomOut")},zoomToFit:function(){this.$root.$emit("diagramZoomToFit")},redoLayout:function(){this.$root.$emit("diagramRedoLayout")}}},P=S,G=(n("8fce"),Object(j["a"])(P,f,p,!1,null,"2fa84740",null)),z=G.exports,I={name:"LayoutHeader",components:{MenuBar:z}},N=I,M=Object(j["a"])(N,l,u,!1,null,"d3113ef2",null),F=M.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MatrixDiagramCY")},L=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overflow-auto",attrs:{id:"holder"}},[n("cytoscape",{ref:"cy",attrs:{id:"diagram",config:e.config,preConfig:e.preConfig,afterCreated:e.afterCreated}},e._l(e.elements,(function(e){return n("cy-element",{key:""+e.data.id,attrs:{definition:e}})})),1)],1)},H=[],U=n("b17d"),B=n.n(U),V=n("8d3a"),Y=n.n(V),Z=(n("dca8"),{data:function(){return{nodeType:Object.freeze({PHASE:"phase",GROUP:"group",SUBGROUP:"subgroup",CONTEXT:"context"})}},methods:{getJSON:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}};fetch(e,o).then((function(e){return e.json()})).then(t).catch(n)}}}),q=Z,J={name:"MatrixDiagramCY",components:{},mixins:[q],props:{},data:function(){return{container:"cy",selectedElementID:"",config:{layout:{name:"dagre",nodeSep:30,rankSep:30,marginx:30,marginy:30,rankDir:"TB",ranker:void 0,fit:!0,padding:10,spacingFactor:void 0,nodeDimensionsIncludeLabels:!1,animate:!1,boundingBox:void 0},minZoom:.1,maxZoom:2,style:[{selector:"node",style:{"font-family":"sans-serif","font-size":"1em",shape:"rectangle",width:"120",height:"30",padding:0,"text-opacity":1,"text-valign":"center","text-halign":"center",color:"black","background-color":"white","background-opacity":1,"border-color":"black","border-width":"3px","border-style":"solid","border-opacity":1}},{selector:'node[class="context"]',style:{width:"120",height:"30",label:function(e){return"".concat(e.data("identifier")?e.data("identifier"):e.data("id"))}}},{selector:'node[class="phase"]',style:{color:"gray",shape:"round-rectangle",label:function(e){return"Phase ".concat(e.data("identifier"))},"text-opacity":.75,"text-valign":"bottom",padding:15,"background-color":"ivory"}},{selector:'node[class="group"]',style:{color:"green",shape:"round-rectangle",padding:15,label:function(e){return"Group ".concat(e.data("identifier"))},"text-opacity":.75,"text-valign":"bottom","background-color":"honeydew","border-color":"green"}},{selector:'node[class="subgroup"]',style:{color:"blue",shape:"round-rectangle",padding:15,label:function(e){return"Sub-group ".concat(e.data("identifier"))},"text-opacity":.75,"text-valign":"bottom","background-color":"aliceblue","border-color":"blue"}},{selector:"edge",style:{"curve-style":"taxi","taxi-direction":"downward","taxi-turn":50,"edge-distances":"node-position","taxi-turn-min-distance":40,"source-endpoint":"outside-to-node","target-endpoint":"outside-to-node",width:3,"target-arrow-shape":"none","line-color":"gray","line-style":"solid","target-arrow-color":"#9dbaea"}}]}}},computed:{elements:function(){return this.$store.getters.cyElements}},methods:{preConfig:function(e){e.use(B.a),e.use(Y.a)},afterCreated:function(e){e.gridGuide({snapToGridOnRelease:!1,snapToGridDuringDrag:!0,snapToAlignmentLocationOnRelease:!1,snapToAlignmentLocationDuringDrag:!1,distributionGuidelines:!0,geometricGuideline:!0,initPosAlignment:!1,centerToEdgeAlignment:!0,resize:!1,parentPadding:!1,drawGrid:!0,gridSpacing:15,snapToGridCenter:!1,zoomDash:!0,panGrid:!0,gridStackOrder:0,gridColor:"#dedede",lineWidth:1,guidelinesStackOrder:4,guidelinesTolerance:2,guidelinesStyle:{strokeStyle:"#8b7d6b",geometricGuidelineRange:400,range:100,minDistRange:10,distGuidelineOffset:10,horizontalDistColor:"#ff0000",verticalDistColor:"#00ff00",initPosAlignmentColor:"#0000ff",lineDash:[0,0],horizontalDistLine:[0,0],verticalDistLine:[0,0],initPosAlignmentLine:[0,0]},parentSpacing:-1})},exportPartPNG:function(e){this.exportPNG(e,!1)},exportFullPNG:function(e){this.exportPNG(e,!0)},exportPNG:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){console.log(this.nodeType.CONTEXT);var n=e.png({full:t,output:"blob"}),o="phaser-".concat($()().format("YYYYMMDDHHmmss"),".png"),a=new Blob([n],{type:"image/png"});if(navigator.msSaveBlob)navigator.msSaveBlob(a,o);else{var r=document.createElement("a");if(void 0!==r.download){var i=URL.createObjectURL(a);r.setAttribute("href",i),r.setAttribute("download",o),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}}},clear:function(e){e.zoom(1),e.pan({x:0,y:0})},zoomIn:function(e){this.zoomMe(e,1.25)},zoomOut:function(e){this.zoomMe(e,.75)},zoomMe:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e&&e.zoom({level:e.zoom()*t,position:{x:Math.round((e.extent().x1+e.extent().x2)/2),y:Math.round((e.extent().y1+e.extent().y2)/2)}})},zoomFit:function(e){e&&e.fit()},redoLayout:function(e){e&&e.layout(this.config.layout).run()}},beforeCreate:function(){},created:function(){},afterCreated:function(){},beforeMount:function(){},mounted:function(){var e=this,t=(this.$refs.cy||{}).instance||null;t&&(t.on("click tap","node",(function(t){e.selectedElementID=t.target.id()})),document.getElementById("cytoscape-div").style.minHeight="900px",e.$root.$on("diagramClear",(function(){return e.clear(t)})),e.$root.$on("diagramZoomIn",(function(){return e.zoomIn(t)})),e.$root.$on("diagramZoomOut",(function(){return e.zoomOut(t)})),e.$root.$on("diagramZoomToFit",(function(){return e.zoomFit(t)})),e.$root.$on("diagramRedoLayout",(function(){return e.redoLayout(t)})),e.$root.$on("diagramExportPartPNG",(function(){return e.exportPartPNG(t)})),e.$root.$on("diagramExportFullPNG",(function(){return e.exportFullPNG(t)})))},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},X=J,K=(n("a60f"),Object(j["a"])(X,R,H,!1,null,"fcd82784",null)),W=K.exports,Q={name:"LayoutContent",components:{MatrixDiagramCY:W}},ee=Q,te=Object(j["a"])(ee,A,L,!1,null,"13111654",null),ne=te.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-tabs",{staticClass:"my-2",staticStyle:{"min-height":"400px"}},[n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-border-width"),n("span",{staticClass:"mx-2"},[e._v("Phases")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalPhases))])]},proxy:!0}])},[n("PhaseTable")],1),n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-columns"),n("span",{staticClass:"mx-2"},[e._v("Groups")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalGroups))])]},proxy:!0}])},[n("GroupTable")],1),n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-columns"),n("span",{staticClass:"mx-2"},[e._v("Sub-Groups")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalSubGroups))])]},proxy:!0}])},[n("SubGroupTable")],1),n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-bounding-box",{staticClass:"mr-2"}),n("span",{staticClass:"mx-2"},[e._v("Contexts")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalContexts))])]},proxy:!0}])},[n("ContextTable")],1)],1),e._m(0)],1)},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100 text-center p-3",attrs:{id:"selectedItemDetails"}},[n("div",[e._v("(selected item - details/edit)")])])}],re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields,itemsType:"phase"}})},ie=[],se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col"),n("b-col",[n("b-form-group",{staticClass:"mb-2",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-form-input",{attrs:{size:"sm",id:"filter-input",type:"search",placeholder:"filter "+e.itemsClass+"s"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)],1)],1),n("b-table",{staticClass:"overflow-auto",attrs:{"show-empty":"",id:"datatable","sort-icon-left":"",striped:"",small:"",hover:"",outlined:"","sticky-header":"300px","primary-key":"id",items:e.items,fields:e.fields,filter:e.filter},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("div",{staticClass:"text-right"},[n("b-icon-x-circle",{staticClass:"action mr-2",attrs:{title:"delete "+e.itemsClass,alt:"delete "+e.itemsClass},on:{click:function(n){return n.stopPropagation(),e.deleteItem(t.item)}}})],1)]}}])}),n("div",{staticClass:"text-right"},[n("b-icon-plus-circle",{staticClass:"action mr-2",attrs:{title:"add "+e.itemsClass,alt:"add "+e.itemsClass},on:{click:function(t){return t.stopPropagation(),e.insertItem()}}})],1)],1)},ce=[],de=(n("caad"),{name:"ItemTable",components:{},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},itemsType:{type:String,required:!1,default:"item",validator:function(e){return["item","phase","group","subgroup","context"].includes(e)}}},data:function(){return{filter:"",itemsClass:this.itemsType}},computed:{totalRows:function(){return this.items.length}},mounted:function(){},methods:{insertItem:function(){},updateItem:function(){},deleteItem:function(e){var t=this;t.$bvModal.msgBoxConfirm("Delete ".concat(this.itemsClass," ").concat(e.identifier," - are you sure?")).then((function(n){n&&t.$store.dispatch("removeNode",e)}))},editID:function(e,t){var n=e.target.innerText;t.id!==n&&(t.id=n,this.edit(t))},editType:function(e,t){var n=e.target.innerText;t.type!==n&&(t.type=n,this.edit(t))}}}),le=de,ue=(n("773a"),Object(j["a"])(le,se,ce,!1,null,"4ce79490",null)),fe=ue.exports,pe={name:"PhaseTable",components:{ItemTable:fe},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"label",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.phases}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},me=pe,be=Object(j["a"])(me,re,ie,!1,null,"2af56064",null),he=be.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields,itemsType:"group"}})},ve=[],ye={name:"GroupTable",components:{ItemTable:fe},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"parent",sortable:!0},{key:"type",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.groups}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},je=ye,xe=Object(j["a"])(je,ge,ve,!1,null,"1f9d4f71",null),Ce=xe.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields,itemsType:"subgroup"}})},Ee=[],we={name:"SubGroupTable",components:{ItemTable:fe},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"parent",sortable:!0},{key:"type",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.subgroups}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},_e=we,Oe=Object(j["a"])(_e,ke,Ee,!1,null,"28608865",null),De=Oe.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields,itemsType:"context"}})},$e=[],Se={name:"ContextTable",components:{ItemTable:fe},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"parent",sortable:!0},{key:"type",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.contexts}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},Pe=Se,Ge=Object(j["a"])(Pe,Te,$e,!1,null,"50d11511",null),ze=Ge.exports,Ie={name:"LayoutSidebar",components:{PhaseTable:he,GroupTable:Ce,SubGroupTable:De,ContextTable:ze},computed:{totalPhases:function(){return this.$store.getters.phases.length},totalGroups:function(){return this.$store.getters.groups.length},totalSubGroups:function(){return this.$store.getters.subgroups.length},totalContexts:function(){return this.$store.getters.contexts.length}}},Ne=Ie,Me=(n("e9f9"),Object(j["a"])(Ne,oe,ae,!1,null,"5a1e3094",null)),Fe=Me.exports,Ae=n("9a78"),Le=n.n(Ae),Re={name:"Layout",components:{LayoutHeader:F,LayoutContent:ne,LayoutSidebar:Fe,VueSplitter:Le.a},data:function(){return{item:null}}},He=Re,Ue=Object(j["a"])(He,c,d,!1,null,"0c826b6b",null),Be=Ue.exports,Ve={name:"App",components:{Layout:Be},data:function(){return{}}},Ye=Ve,Ze=(n("034f"),Object(j["a"])(Ye,i,s,!1,null,null,null)),qe=Ze.exports,Je=(n("cd8a"),n("2dd8"),n("4de4"),n("7db0"),n("c740"),n("4160"),n("a434"),n("159b"),n("96cf"),n("1da1")),Xe=n("e7af");o["default"].use(Xe["a"]);var Ke=new Xe["a"].Store({Strict:!0,state:{metas:{project:"My example project",descrip:"Example data for testing VUEX. Using Cytoscape graph elements structure",creator:"Ceri Binding, University of South Wales",contact:"ceri.binding@southwales.ac.uk",created:"2021-01-07",updated:"2021-01-07",version:"1.0"},graph:{nodes:[],edges:[]}},getters:{nodeById:function(e){return function(t){return e.graph.nodes.find((function(e){return e.id===t}))}},edgeById:function(e){return function(t){return e.graph.edges.find((function(e){return e.id===t}))}},phases:function(e){return e.graph.nodes.filter((function(e){return"phase"===e.class}))},groups:function(e){return e.graph.nodes.filter((function(e){return"group"===e.class}))},subgroups:function(e){return e.graph.nodes.filter((function(e){return"subgroup"===e.class}))},contexts:function(e){return e.graph.nodes.filter((function(e){return"context"===e.class}))},cyNodes:function(e){return e.graph.nodes.map((function(e){return{data:e}}))},cyEdges:function(e){return e.graph.edges.map((function(e){return{data:e}}))},cyElements:function(e,t){return[].concat(t.cyNodes).concat(t.cyEdges)}},mutations:{ADD_NODE:function(e,t){var n=e.graph.nodes,o=n.findIndex((function(e){return e.id===t.id}));-1===o?n.push(t):n.splice(o,1,t)},EDIT_NODE:function(e,t){var n=e.graph.nodes,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1,t)},REMOVE_NODE:function(e,t){var n=e.graph.nodes,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1)},REMOVE_NODES:function(e){e.graph.nodes=[]},ADD_EDGE:function(e,t){var n=e.graph.edges;t.id||(t.id="".concat(t.class||"node","-").concat(t.source||"source","-").concat(t.target||"target"));var o=n.findIndex((function(e){return e.id===t.id}));-1===o?n.push(t):n.splice(o,1,t)},EDIT_EDGE:function(e,t){var n=e.graph.edges,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1,t)},REMOVE_EDGE:function(e,t){var n=e.graph.edges,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1)},REMOVE_EDGES:function(e){e.graph.edges=[]}},actions:{loadPhaserData:function(e,t){return Object(Je["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,a=e.dispatch,n.next=3,a("clearAll",o);case 3:return n.next=5,a("addNodes",t.nodes||[],o);case 5:return n.next=7,a("addEdges",t.edges||[],o);case 7:case"end":return n.stop()}}),n)})))()},saveMatrixData:function(){},clearAll:function(e){var t=e.commit;t("REMOVE_NODES"),t("REMOVE_EDGES")},addNode:function(e,t){var n=e.commit;n("ADD_NODE",t)},addNodes:function(e,t){var n=e.commit,o=e.dispatch;t.forEach((function(e){return o("addNode",e,n)}))},editNode:function(e,t){var n=e.commit;n("EDIT_NODE",t)},removeNode:function(e,t){var n=e.commit;n("REMOVE_NODE",t)},addEdge:function(e,t){var n=e.commit;n("ADD_EDGE",t)},addEdges:function(e,t){var n=e.commit,o=e.dispatch;t.forEach((function(e){return o("addEdge",e,n)}))},editEdge:function(e,t){var n=e.commit;n("EDIT_EDGE",t)},removeEdge:function(e,t){var n=e.commit;n("REMOVE_EDGE",t)}}}),We=n("3a6f"),Qe=n.n(We),et=n("f751");o["default"].use(a["a"]),o["default"].use(r["a"]),o["default"].use(et["a"]),o["default"].use(Qe.a),o["default"].config.productionTip=!1,new o["default"]({store:Ke,render:function(e){return e(qe)}}).$mount("#app")},"6f02":function(e,t,n){},"72b1":function(e,t,n){},"773a":function(e,t,n){"use strict";var o=n("dd40"),a=n.n(o);a.a},"85ec":function(e,t,n){},"8d62":function(e,t,n){"use strict";var o=n("974c"),a=n.n(o);a.a},"8fce":function(e,t,n){"use strict";var o=n("be9f"),a=n.n(o);a.a},"974c":function(e,t,n){},a60f:function(e,t,n){"use strict";var o=n("6f02"),a=n.n(o);a.a},be9f:function(e,t,n){},dd40:function(e,t,n){},e9f9:function(e,t,n){"use strict";var o=n("72b1"),a=n.n(o);a.a}});
//# sourceMappingURL=app.2f6214e5.js.map