(function(e){function t(t){for(var o,s,i=t[0],c=t[1],d=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tmp123/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"1c0c":function(e,t,n){"use strict";var o=n("4888"),a=n.n(o);a.a},"41af":function(e,t,n){"use strict";var o=n("ba85"),a=n.n(o);a.a},"458c":function(e,t,n){},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="4678"},4888:function(e,t,n){},"53c3":function(e,t,n){"use strict";var o=n("458c"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5f5b"),r=n("b1e0"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout")},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"border p-0",attrs:{fluid:"",id:"container"}},[n("b-row",{attrs:{"no-gutters":"",id:"header"}},[n("b-col",[n("LayoutHeader")],1)],1),n("vue-splitter",{attrs:{margin:20,defaultPercent:70}},[n("div",{attrs:{slot:"left-pane"},slot:"left-pane"},[n("LayoutContent")],1),n("div",{attrs:{slot:"right-pane"},slot:"right-pane"},[n("LayoutSidebar")],1)])],1)},d=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MenuBar")],1)},u=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"border-bottom",attrs:{toggleable:"sm",id:"nav"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item-dropdown",{attrs:{text:"File"}},[n("b-dropdown-item-button",{on:{click:e.clearAll}},[n("b-icon-file-earmark-plus",{staticClass:"mr-2"}),n("span",[e._v("New")])],1),n("b-dropdown-item-button",{on:{click:e.openFileDialog}},[n("b-icon-upload",{staticClass:"mr-2"}),n("span",[e._v("Open...")]),n("b-form-file",{staticStyle:{display:"none"},attrs:{plain:"",id:"fileOpen",accept:".json"},on:{input:e.fileLoad}})],1),n("b-dropdown-item-button",{on:{click:e.fileSave}},[n("b-icon-download",{staticClass:"mr-2"}),n("span",[e._v("Save...")])],1),n("b-dropdown-divider"),n("b-dropdown-item-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalFileImport",modifiers:{modalFileImport:!0}}]},[n("b-icon-box-arrow-in-left",{staticClass:"mr-2"}),n("span",[e._v("Import context stratigraphy (CSV)...")]),n("ModalFileImport")],1),n("b-dropdown-item-button",{attrs:{disabled:""}},[n("b-icon-box-arrow-right",{staticClass:"mr-2"}),n("span",[e._v("Export context stratigraphy (CSV)...")])],1),n("b-dropdown-divider"),n("b-dropdown-item-button",{attrs:{disabled:""}},[n("b-icon-box-arrow-right",{staticClass:"mr-2"}),n("span",[e._v("Export diagram (PNG)...")])],1)],1),n("b-nav-item-dropdown",{attrs:{text:"View"}},[n("b-dropdown-item-button",{attrs:{disabled:""},on:{click:e.zoomIn}},[n("b-icon-zoom-in",{staticClass:"mr-2"}),n("span",[e._v("Zoom in")])],1),n("b-dropdown-item-button",{attrs:{disabled:""},on:{click:e.zoomOut}},[n("b-icon-zoom-out",{staticClass:"mr-2"}),n("span",[e._v("Zoom out")])],1),n("b-dropdown-item-button",{on:{click:e.zoomToFit}},[n("b-icon-arrows-fullscreen",{staticClass:"mr-2"}),n("span",[e._v("Zoom to fit")])],1),n("b-dropdown-divider"),n("b-dropdown-item-button",{on:{click:e.redoLayout}},[n("b-icon-diagram-3",{staticClass:"mr-2"}),n("span",[e._v("Redo Layout")])],1)],1),n("b-nav-item-dropdown",{attrs:{text:"Help"}},[n("b-dropdown-item-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalAbout",modifiers:{modalAbout:!0}}]},[n("b-icon-question-circle",{staticClass:"mr-2"}),n("span",[e._v("About...")]),n("ModalAbout")],1)],1)],1)],1),n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{attrs:{src:"phaser-spacedout-logo.png",height:"30",alt:"PHASER"}})])],1)},b=[],p=(n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{centered:"",id:"modalFileImport",title:"Import delimited file"},on:{ok:e.handleOK,cancel:e.handleClose,close:e.handleClose}},[n("b-form",{staticClass:"border p-1",attrs:{inline:""}},[n("b-form-file",{attrs:{plain:"",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",accept:"text/csv, .csv, .tab, .txt, .tsv",state:Boolean(e.selectedFile)},on:{input:function(t){return e.loadFile(e.selectedFile)}},model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}}),n("b-input-group",{staticClass:"py-2",attrs:{prepend:"Delimiter"}},[n("b-form-radio-group",{staticClass:"p-2 border",attrs:{options:e.delimiterOptions,name:"delimiter"},model:{value:e.delimiter,callback:function(t){e.delimiter=t},expression:"delimiter"}})],1),n("b-form-checkbox",{staticClass:"mx-2",attrs:{inline:"",id:"checkbox-header",name:"checkbox-header",value:!0,"unchecked-value":!1},model:{value:e.hasHeader,callback:function(t){e.hasHeader=t},expression:"hasHeader"}},[n("span",[e._v("Has header row?")])])],1),n("div",{staticClass:"m-2"},[e._v("Preview:")]),n("div",{staticClass:"overflow-auto",staticStyle:{height:"200px"}},[n("b-table",{attrs:{small:"",striped:"",stacked:"",items:e.parserPreview}})],1)],1)}),m=[],h=(n("99af"),n("4ec9"),n("25f0"),n("498a"),n("2909")),g=n("b85c"),v={name:"ModalFileImport",components:{},mixins:[],props:{defaultDelimiter:{type:String,required:!1,default:","}},data:function(){return{delimiter:this.defaultDelimiter,delimiterOptions:[{value:"\\t",text:"Tab"},{value:",",text:"Comma"},{value:";",text:"Semicolon"},{value:"|",text:"Pipe"},{value:" ",text:"Space"}],hasHeader:!0,previewRows:5,selectedFile:null,fileContents:""}},computed:{parserPreview:function(){var e=this,t={delimiter:e.delimiter,encoding:"UTF-8",header:e.hasHeader,preview:e.previewRows,skipEmptyLines:"greedy"},n=e.$papa.parse(e.fileContents,t);return n.data}},methods:{loadFile:function(e){if(e){var t=this,n=new FileReader;n.onload=function(e){t.fileContents=e.target.result},n.readAsText(e)}},handleOK:function(){var e=this,t={delimiter:e.delimiter,encoding:"UTF-8",header:e.hasHeader,skipEmptyLines:"greedy"},n=e.$papa.parse(e.fileContents,t),o=e.contextDataToGraph(n.data);this.$store.dispatch("clearAll"),this.$store.dispatch("loadPhaserData",o),this.selectedFile=null,this.fileContents=""},handleClose:function(){this.selectedFile=null,this.fileContents=""},contextDataToGraph:function(e){var t,n=function(e){return(e||"").toString().trim()},o=new Map,a=new Map,r=Object(g["a"])(e);try{for(r.s();!(t=r.n()).done;){var s=t.value,i=n(s.siteCode),c=n(s.contextNo).toLowerCase(),d=n(s.contextType).toLowerCase(),l=n(s.stratRelationship).toLowerCase(),u=n(s.relatedContextNo).toLowerCase();if(""!==c){var f={id:"context-".concat(c),class:"context",type:d,identifier:c,siteCode:i};if(o.has(f.id)){var b=o.get(f.id);f=Object.assign({},b,f)}o.set(f.id,f)}if(""!==u){var p={id:"context-".concat(u),class:"context",type:"",identifier:u,siteCode:i};if(o.has(p.id)){var m=o.get(p.id);p=Object.assign({},m,p)}o.set(p.id,p)}if(""!==c&&""!==u){var v={id:"context-".concat(c,"-").concat(u),source:"context-".concat(c),target:"context-".concat(u),type:l};if(a.has(v.id)){var y=a.get(v.id);v=Object.assign({},y,v)}a.set(v.id,v)}}}catch(j){r.e(j)}finally{r.f()}return{nodes:Object(h["a"])(o.values()),edges:Object(h["a"])(a.values())}}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},y=v,j=n("2877"),x=Object(j["a"])(y,p,m,!1,null,"c05ea562",null),k=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{centered:"",id:"modalAbout",title:"About"},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div")]},proxy:!0}])},[n("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light","img-src":"phaser-spacedout-logo.png","img-alt":"PHASER","img-top":""}},[n("b-card-body",[n("b-card-text",{staticClass:"border"},[n("p",[e._v("Stratigraphic matrix editing tool")]),n("p",[e._v("Created as part of the MATRIX project")]),n("p",[e._v("https://stratigraphic.github.io/matrix/")])])],1)],1)],1)},_=[],w=(n("b0c0"),{name:"ModalAbout",components:{},mixins:[],props:{name:{type:String,required:!1,default:"Fred"}},data:function(){return{hello:"Hello"}},computed:{fullMessage:function(){return"".concat(this.hello,", ").concat(this.name)}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),E=w,O=(n("b4c8"),Object(j["a"])(E,C,_,!1,null,"65d4c800",null)),D=O.exports,$=n("c1df"),S=n.n($),T={name:"MenuBar",components:{ModalFileImport:k,ModalAbout:D},props:{},data:function(){return{}},computed:{},methods:{openFileDialog:function(){document.getElementById("fileOpen").click()},clearAll:function(){var e=this;e.$bvModal.msgBoxConfirm("Clear all current data, are you sure?").then((function(t){t&&e.$store.dispatch("clearAll")}))},fileLoad:function(e){var t=this;if(e){var n=new FileReader;n.onload=function(e){var n=JSON.parse(e.target.result);t.$store.dispatch("loadPhaserData",n)},n.readAsText(e)}},fileSave:function(){var e={nodes:this.$store.getters.cyNodes.map((function(e){return e.data})),edges:this.$store.getters.cyEdges.map((function(e){return e.data}))},t="phaser-".concat(S()().format("YYYYMMDDHHmmss"),".json");this.saveToFile(JSON.stringify(e),t)},saveToFile:function(e,t){var n=new Blob([e],{type:"text/plain;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(n,t);else{var o=document.createElement("a");if(void 0!==o.download){var a=URL.createObjectURL(n);o.setAttribute("href",a),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}},zoomIn:function(){this.$root.$emit("zoomIn")},zoomOut:function(){this.$root.$emit("zoomOut")},zoomToFit:function(){this.$root.$emit("zoomToFit")},redoLayout:function(){this.$root.$emit("redoLayout")}}},z=T,I=(n("53c3"),Object(j["a"])(z,f,b,!1,null,"493da643",null)),M=I.exports,F={name:"LayoutHeader",components:{MenuBar:M}},L=F,P=Object(j["a"])(L,l,u,!1,null,"d3113ef2",null),A=P.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PhaserDiagramCytoscape")},G=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"holder"}},[n("cytoscape",{ref:"cy",staticClass:"bg-white p-3",attrs:{id:"diagram",config:e.config,preConfig:e.preConfig}},e._l(e.elements,(function(e){return n("cy-element",{key:""+e.data.id,attrs:{definition:e}})})),1)],1)},H=[],B=n("b17d"),U=n.n(B),V={name:"PhaserDiagramCytoscape",components:{},mixins:[],props:{},data:function(){return{selectedElementID:"",config:{layout:{name:"dagre",nodeSep:20,rankSep:50,marginx:20,marginy:20,rankDir:"TB",ranker:void 0,fit:!0,padding:50,spacingFactor:void 0,nodeDimensionsIncludeLabels:!1,animate:!1,boundingBox:void 0,transform:function(e,t){return t},ready:function(){},stop:function(){}},style:[{selector:'node[class="context"]',style:{"font-family":"sans-serif","font-size":"1em",shape:"rectangle",width:"200",height:"50",label:function(e){return"".concat(e.data("identifier"),": ").concat(e.data("type"))},padding:0,color:"black","text-opacity":1,"text-valign":"center","text-halign":"center","background-color":"white","background-opacity":1,"border-color":"black","border-opacity":1,"border-width":"1px","border-style":"solid"}},{selector:'node[class="phase"]',style:{color:"black",shape:"rectangle",label:function(e){return"Phase ".concat(e.data("identifier"))},"text-opacity":.5,"text-valign":"bottom","text-halign":"center","background-color":"ivory","border-width":"1px"}},{selector:'node[class="group"]',style:{color:"green",shape:"round-rectangle",label:function(e){return"Group ".concat(e.data("identifier"))},"text-opacity":.5,"text-valign":"bottom","text-halign":"center","background-color":"honeydew","border-color":"green","border-width":"1px"}},{selector:'node[class="subgroup"]',style:{color:"blue",shape:"round-rectangle",label:function(e){return"Sub-group ".concat(e.data("identifier"))},"text-opacity":.5,"text-valign":"bottom","text-halign":"center","background-color":"aliceblue","border-color":"blue","border-width":"1px"}},{selector:"edge",style:{"curve-style":"taxi","taxi-direction":"downward","taxi-turn":50,"edge-distances":"node-position","taxi-turn-min-distance":40,"source-endpoint":"outside-to-node","target-endpoint":"outside-to-node",width:2,"target-arrow-shape":"none","line-color":"gray","line-style":"solid","target-arrow-color":"#9dbaea"}}]}}},computed:{elements:function(){return this.$store.getters.cyElements}},methods:{preConfig:function(e){e.use(U.a)},runLayout:function(){var e=this.$refs.cy.instance;e.layout(this.config.layout).run()},zoomToFit:function(){var e=this.$refs.cy.instance;e.fit()},zoomIn:function(){var e=this.$refs.cy.instance;e.zoom(1)},zoomOut:function(){var e=this.$refs.cy.instance;e.zoom(1)}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){var e=this,t=e.$refs.cy.instance;t.on("click tap","node",(function(t){e.selectedElementID=t.target.id()})),document.getElementById("cytoscape-div").style.minHeight="900px",e.$root.$on("redoLayout",(function(){return e.runLayout()})),e.$root.$on("zoomToFit",(function(){return e.zoomToFit()})),e.$root.$on("zoomIn",(function(){return e.zoomIn()})),e.$root.$on("zoomOut",(function(){return e.zoomOut()}))},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},q=V,J=Object(j["a"])(q,R,H,!1,null,"3550b64d",null),Y=J.exports,Z={name:"LayoutContent",components:{PhaserDiagramCytoscape:Y}},K=Z,X=Object(j["a"])(K,N,G,!1,null,"3c0b9e88",null),W=X.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-tabs",{staticClass:"my-2",staticStyle:{"min-height":"400px"}},[n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-border-width"),n("span",{staticClass:"mx-2"},[e._v("Phases")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalPhases))])]},proxy:!0}])},[n("PhaseTable")],1),n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-columns"),n("span",{staticClass:"mx-2"},[e._v("Groups")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalGroups))])]},proxy:!0}])},[n("GroupTable")],1),n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-columns"),n("span",{staticClass:"mx-2"},[e._v("Sub-Groups")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalSubGroups))])]},proxy:!0}])},[n("SubGroupTable")],1),n("b-tab",{staticClass:"my-2",scopedSlots:e._u([{key:"title",fn:function(){return[n("b-icon-bounding-box",{staticClass:"mr-2"}),n("span",{staticClass:"mx-2"},[e._v("Contexts")]),n("b-badge",{attrs:{variant:"secondary"}},[e._v(e._s(e.totalContexts))])]},proxy:!0}])},[n("ContextTable")],1)],1),e._m(0)],1)},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100 text-center p-3",attrs:{id:"selectedItemDetails"}},[n("div",[e._v("(selected item - details/edit)")])])}],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields}})},ne=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col"),n("b-col",[n("b-form-group",{staticClass:"mb-2",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-form-input",{attrs:{size:"sm",id:"filter-input",type:"search",placeholder:"filter text"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)],1)],1),n("b-table",{staticClass:"overflow-auto",attrs:{"show-empty":"",id:"datatable","sort-icon-left":"",striped:"",small:"",hover:"",outlined:"","sticky-header":"300px","primary-key":"id",items:e.items,fields:e.fields,filter:e.filter},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("div",{staticClass:"text-right"},[n("b-icon-x-circle",{staticClass:"action mr-2",attrs:{title:"delete item",alt:"delete item"},on:{click:function(n){return n.stopPropagation(),e.deleteItem(t.item)}}})],1)]}}])}),n("div",{staticClass:"text-right"},[n("b-icon-plus-circle",{staticClass:"action mr-2",attrs:{title:"add item",alt:"add item"},on:{click:function(t){return t.stopPropagation(),e.insertItem()}}})],1)],1)},ae=[],re={name:"ItemTable",components:{},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0}},data:function(){return{filter:""}},computed:{totalRows:function(){return this.items.length}},mounted:function(){},methods:{insertItem:function(){},updateItem:function(){},deleteItem:function(e){var t=this;t.$bvModal.msgBoxConfirm("Delete item ".concat(e.identifier," - sure?")).then((function(n){n&&t.$store.dispatch("removeNode",e)}))},editID:function(e,t){var n=e.target.innerText;t.id!==n&&(t.id=n,this.edit(t))},editType:function(e,t){var n=e.target.innerText;t.type!==n&&(t.type=n,this.edit(t))}}},se=re,ie=(n("1c0c"),Object(j["a"])(se,oe,ae,!1,null,"b622221c",null)),ce=ie.exports,de={name:"PhaseTable",components:{ItemTable:ce},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"label",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.phases}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},le=de,ue=Object(j["a"])(le,te,ne,!1,null,"c0b122c4",null),fe=ue.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields}})},pe=[],me={name:"GroupTable",components:{ItemTable:ce},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"parent",sortable:!0},{key:"type",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.groups}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},he=me,ge=Object(j["a"])(he,be,pe,!1,null,"5cb161a2",null),ve=ge.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields}})},je=[],xe={name:"SubGroupTable",components:{ItemTable:ce},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"parent",sortable:!0},{key:"type",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.subgroups}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},ke=xe,Ce=Object(j["a"])(ke,ye,je,!1,null,"76154f4e",null),_e=Ce.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ItemTable",{attrs:{items:e.items,fields:e.fields}})},Ee=[],Oe={name:"ContextTable",components:{ItemTable:ce},mixins:[],props:{},data:function(){return{fields:[{key:"identifier",sortable:!0},{key:"parent",sortable:!0},{key:"type",sortable:!0},{key:"actions",label:""}]}},computed:{items:function(){return this.$store.getters.contexts}},methods:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},De=Oe,$e=Object(j["a"])(De,we,Ee,!1,null,"89cf2882",null),Se=$e.exports,Te={name:"LayoutSidebar",components:{PhaseTable:fe,GroupTable:ve,SubGroupTable:_e,ContextTable:Se},computed:{totalPhases:function(){return this.$store.getters.phases.length},totalGroups:function(){return this.$store.getters.groups.length},totalSubGroups:function(){return this.$store.getters.subgroups.length},totalContexts:function(){return this.$store.getters.contexts.length}}},ze=Te,Ie=(n("41af"),Object(j["a"])(ze,Q,ee,!1,null,"697d7a73",null)),Me=Ie.exports,Fe=n("9a78"),Le=n.n(Fe),Pe={name:"Layout",components:{LayoutHeader:A,LayoutContent:W,LayoutSidebar:Me,VueSplitter:Le.a},data:function(){return{item:null}}},Ae=Pe,Ne=Object(j["a"])(Ae,c,d,!1,null,"db9c62e4",null),Ge=Ne.exports,Re={name:"App",components:{Layout:Ge},data:function(){return{}}},He=Re,Be=(n("034f"),Object(j["a"])(He,s,i,!1,null,null,null)),Ue=Be.exports,Ve=(n("cd8a"),n("2dd8"),n("4de4"),n("7db0"),n("c740"),n("4160"),n("a434"),n("159b"),n("96cf"),n("1da1")),qe=n("e7af");o["default"].use(qe["a"]);var Je=new qe["a"].Store({Strict:!0,state:{metas:{project:"My example project",descrip:"Example data for testing VUEX. Using Cytoscape graph elements structure",creator:"Ceri Binding, University of South Wales",contact:"ceri.binding@southwales.ac.uk",created:"2021-01-07",updated:"2021-01-07",version:"1.0"},graph:{nodes:[],edges:[]}},getters:{nodeById:function(e){return function(t){return e.graph.nodes.find((function(e){return e.id===t}))}},edgeById:function(e){return function(t){return e.graph.edges.find((function(e){return e.id===t}))}},phases:function(e){return e.graph.nodes.filter((function(e){return"phase"===e.class}))},groups:function(e){return e.graph.nodes.filter((function(e){return"group"===e.class}))},subgroups:function(e){return e.graph.nodes.filter((function(e){return"subgroup"===e.class}))},contexts:function(e){return e.graph.nodes.filter((function(e){return"context"===e.class}))},cyNodes:function(e){return e.graph.nodes.map((function(e){return{data:e}}))},cyEdges:function(e){return e.graph.edges.map((function(e){return{data:e}}))},cyElements:function(e,t){return[].concat(t.cyNodes).concat(t.cyEdges)}},mutations:{ADD_NODE:function(e,t){var n=e.graph.nodes,o=n.findIndex((function(e){return e.id===t.id}));-1===o?n.push(t):n.splice(o,1,t)},EDIT_NODE:function(e,t){var n=e.graph.nodes,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1,t)},REMOVE_NODE:function(e,t){var n=e.graph.nodes,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1)},REMOVE_NODES:function(e){e.graph.nodes=[]},ADD_EDGE:function(e,t){var n=e.graph.edges;t.id||(t.id="".concat(t.class||"node","-").concat(t.source||"source","-").concat(t.target||"target"));var o=n.findIndex((function(e){return e.id===t.id}));-1===o?n.push(t):n.splice(o,1,t)},EDIT_EDGE:function(e,t){var n=e.graph.edges,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1,t)},REMOVE_EDGE:function(e,t){var n=e.graph.edges,o=n.findIndex((function(e){return e.id===t.id}));-1!==o&&n.splice(o,1)},REMOVE_EDGES:function(e){e.graph.edges=[]}},actions:{loadPhaserData:function(e,t){return Object(Ve["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,a=e.dispatch,n.next=3,a("clearAll",o);case 3:return n.next=5,a("addNodes",t.nodes||[],o);case 5:return n.next=7,a("addEdges",t.edges||[],o);case 7:case"end":return n.stop()}}),n)})))()},saveMatrixData:function(){},clearAll:function(e){var t=e.commit;t("REMOVE_NODES"),t("REMOVE_EDGES")},addNode:function(e,t){var n=e.commit;n("ADD_NODE",t)},addNodes:function(e,t){var n=e.commit,o=e.dispatch;t.forEach((function(e){return o("addNode",e,n)}))},editNode:function(e,t){var n=e.commit;n("EDIT_NODE",t)},removeNode:function(e,t){var n=e.commit;n("REMOVE_NODE",t)},addEdge:function(e,t){var n=e.commit;n("ADD_EDGE",t)},addEdges:function(e,t){var n=e.commit,o=e.dispatch;t.forEach((function(e){return o("addEdge",e,n)}))},editEdge:function(e,t){var n=e.commit;n("EDIT_EDGE",t)},removeEdge:function(e,t){var n=e.commit;n("REMOVE_EDGE",t)}}}),Ye=n("3a6f"),Ze=n.n(Ye),Ke=n("f751");o["default"].use(a["a"]),o["default"].use(r["a"]),o["default"].use(Ke["a"]),o["default"].use(Ze.a),o["default"].config.productionTip=!1,new o["default"]({store:Je,render:function(e){return e(Ue)}}).$mount("#app")},"85ec":function(e,t,n){},b4c8:function(e,t,n){"use strict";var o=n("d8ea"),a=n.n(o);a.a},ba85:function(e,t,n){},d8ea:function(e,t,n){}});
//# sourceMappingURL=app.7d174930.js.map