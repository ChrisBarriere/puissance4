(function(e){function t(t){for(var l,n,c=t[0],s=t[1],a=t[2],d=0,m=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);g&&g(t);while(m.length)m.shift()();return o.push.apply(o,a||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],l=!0,c=1;c<i.length;c++){var s=i[c];0!==r[s]&&(l=!1)}l&&(o.splice(t--,1),e=n(n.s=i[0]))}return e}var l={},r={app:0},o=[];function n(t){if(l[t])return l[t].exports;var i=l[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=l,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/puissance4/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var g=s;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"11e9":function(e,t,i){"use strict";var l=i("7b2b"),r=i.n(l);r.a},"15a8":function(e,t,i){"use strict";var l=i("25bc"),r=i.n(l);r.a},"25bc":function(e,t,i){},"2d9c":function(e,t,i){"use strict";var l=i("af1d"),r=i.n(l);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var l=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e.peering.guestOrMaster?e._e():i("guest-or-master-select",{on:{"master-selected":e.onMasterSelected,"guest-selected":e.onGuestSelected}}),"master"!==e.peering.guestOrMaster||e.peering.id?e._e():i("master-table-creation"),"master"===e.peering.guestOrMaster&&e.peering.id?i("table-information",{attrs:{peeringId:e.peering.id,guestOrMaster:e.peering.guestOrMaster},on:{"close-table":e.closeTable}}):e._e(),"master"===e.peering.guestOrMaster&&e.peering.id?i("master-guest-information",{attrs:{connected:e.peering.guestConnected}}):e._e(),"guest"!==e.peering.guestOrMaster||e.peering.guestConnected?e._e():i("guest-table-connection",{attrs:{peeringId:e.peering.id,errorConnection:e.peering.guestErrorConnection},on:{"id-submitted":e.setMasterPeerId,"cancel-guest":e.cancelGuestSelection}}),"guest"===e.peering.guestOrMaster&&e.peering.id&&e.peering.guestConnected?i("table-information",{attrs:{peeringId:e.peering.id,guestOrMaster:e.peering.guestOrMaster},on:{"exit-table":e.exitTable}}):e._e(),i("div",{attrs:{id:"gridAndControls"}},[e.peering.guestConnected?i("game-controls",{attrs:{guestOrMaster:e.peering.guestOrMaster,started:e.game.started,colorWinner:e.game.colorWinner,counterRedDisks:e.game.counterRedDisks,counterYellowDisks:e.game.counterYellowDisks,playingColor:e.game.playingColor},on:{"new-game":e.launchNewGame}}):e._e(),e.game.started?i("grid-connect4",{attrs:{guestOrMaster:e.peering.guestOrMaster,colorWinner:e.game.colorWinner,playingColor:e.game.playingColor,grid:e.game.grid,disksWinner:e.game.disksWinner},on:{"new-disc":e.putNewDisc}}):e._e()],1)],1)},o=[],n=(i("99af"),i("fb6a"),i("2909")),c=i("a0bc"),s=i.n(c),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"guestOrMasterSelect"}},[i("q-btn",{staticClass:"q-mb-md",attrs:{color:"orange-8",rounded:"","no-caps":""},on:{click:function(t){return e.$emit("master-selected")}}},[i("div",[i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Organiser")]),i("br"),i("span",{staticClass:"text-body-2"},[e._v("une table privée")])])]),i("q-btn",{staticClass:"q-mt-md",attrs:{color:"orange-8",rounded:"","no-caps":""},on:{click:function(t){return e.$emit("guest-selected")}}},[i("div",[i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Rejoindre un ami")]),i("br"),i("span",{staticClass:"text-body-2"},[e._v("à l'aide de son identifiant")])])])],1)},g=[],d={name:"GameOrMasterSelect",data:function(){return{}}},m=d,u=(i("15a8"),i("2877")),h=Object(u["a"])(m,a,g,!1,null,"04bbe2e0",null),p=h.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"masterTableCreation"}},[i("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px"}},[i("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Création de la table en cours")])],1)])},b=[],v={name:"MasterTableCreation",data:function(){return{}}},C=v,y=(i("11e9"),Object(u["a"])(C,f,b,!1,null,"8ac16194",null)),x=y.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-orange-8 q-pa-xs shadow-4",attrs:{id:"tableInformation"}},[i("div",[i("q-icon",{staticClass:"text-green q-ml-xs q-mr-xs",attrs:{name:"mdi-check-bold",size:"sm"}}),i("span",{staticClass:"q-ml-xs text-caption text-white text-bold"},[e._v("Table opérationnelle")]),i("span",{staticClass:"q-ml-xs text-italic text-white",staticStyle:{"font-size":"0.8em"}},[e._v("("+e._s(e.labelGuestOrMaster)+")")])],1),i("div",[i("div",[i("span",{staticClass:"text-caption text-bold text-white"},[e._v("Id :")]),i("q-btn",{staticClass:"q-ml-xs q-mr-xs",attrs:{id:"idTable",push:"",glossy:"",rounded:"","no-caps":"",color:"white","text-color":"black",size:"sm",title:"Cliquez pour copier l'identifiant"},on:{click:e.copyIdInClipboard}},[e._v(e._s(e.peeringId))]),"master"===e.guestOrMaster?i("span",{staticClass:"text-italic text-white",staticStyle:{"font-size":"0.7em"}},[e._v("à partager avec un ami")]):e._e()],1)]),i("div",["master"===e.guestOrMaster?i("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"mdi-exit-run",push:"",glossy:"",color:"black",size:"sm",title:"Cliquez pour fermer la table"},on:{click:function(t){return e.$emit("close-table")}}}):e._e(),"guest"===e.guestOrMaster?i("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"mdi-exit-run",push:"",glossy:"",color:"black",size:"sm",title:"Cliquez pour quitter la table"},on:{click:function(t){return e.$emit("exit-table")}}}):e._e()],1)])},W=[],_={name:"TableInformation",props:["peeringId","guestOrMaster"],data:function(){return{}},computed:{labelGuestOrMaster:function(){return"master"===this.guestOrMaster?"Vous êtes l'organisateur":"Vous êtes invité"}},methods:{copyIdInClipboard:function(){var e=document.createElement("textarea");e.value=this.peeringId,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$q.notify({type:"positive",message:"identifiant copié dans le presse-papier",timeout:2e3,progress:!0,position:"top"})}}},O=_,q=(i("d4a2"),Object(u["a"])(O,k,W,!1,null,"a59e2d78",null)),w=q.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"masterGuestInformation"}},[e.connected?e._e():i("div",{attrs:{id:"masterWaitingGuest"}},[i("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px"}},[i("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("En attente d'un invité...")])],1)]),e.connected?i("div",{staticClass:"q-ma-md"},[i("q-icon",{staticClass:"text-orange q-ml-xs q-mr-xs",attrs:{name:"mdi-emoticon-cool-outline",size:"sm"}}),i("span",{staticClass:"text-caption text-black text-bold"},[e._v("Votre invité est connecté !!!")])],1):e._e()])},D=[],I={name:"MasterGuestInformation",props:["connected"],data:function(){return{}}},j=I,z=(i("8d9a"),Object(u["a"])(j,M,D,!1,null,"223c898c",null)),G=z.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"guestTableConnection"}},[e.peeringId?e._e():i("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px",width:"100%"}},[i("q-input",{staticClass:"q-mb-md",attrs:{color:"teal","bg-color":"white",outlined:"",label:"Identifiant de l'organisateur"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"mdi-identifier"}})]},proxy:!0}],null,!1,2578258804),model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),i("q-btn",{staticClass:"q-mt-md",attrs:{rounded:"","no-caps":"",color:"white"},on:{click:e.submitId}},[i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Valider")])]),i("q-btn",{staticClass:"q-ml-xl q-mt-md",attrs:{rounded:"","no-caps":"",color:"white"},on:{click:function(t){return e.$emit("cancel-guest")}}},[i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Annuler")])])],1),e.peeringId?i("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px"}},[i("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),i("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("En attente de connexion")])],1):e._e()])},R=[],P={name:"GuestTableConnection",props:["peeringId","errorConnection"],data:function(){return{id:null}},watch:{errorConnection:function(){this.errorConnection&&(this.id=null,this.$q.notify({type:"negative",message:this.errorConnection,timeout:5e3,progress:!0,position:"top"}))}},methods:{submitId:function(){this.id&&this.$emit("id-submitted",this.id)}}},T=P,S=(i("aab1"),Object(u["a"])(T,E,R,!1,null,"549bf69c",null)),$=S.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-white q-ma-md rounded-borders q-pa-sm shadow-4",attrs:{id:"gameControls"}},["master"!==e.guestOrMaster||e.started?e._e():i("div",[i("span",{staticClass:"text-bold"},[e._v("Aucune partie en cours !!!")]),i("q-btn",{staticClass:"q-ml-md",attrs:{rounded:"","no-caps":"",size:"sm",color:"primary"},on:{click:function(t){return e.$emit("new-game")}}},[i("span",{staticClass:"text-bold"},[e._v("Lancer une partie")])])],1),"guest"!==e.guestOrMaster||e.started?e._e():i("div",[i("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"sm",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),i("span",[e._v("En attente du lancement d'une partie par l'organisateur")])],1),e.started?i("div",{staticClass:"q-pa-sm",attrs:{id:"gamePanel"}},[i("div",{staticClass:"bg-blue-1 q-mb-xs q-pa-sm rounded-borders",attrs:{id:"disksCounter"}},[i("div",{class:"disksInfo "+e.myColor},[i("div",{staticClass:"diskIcon"}),i("div",{staticClass:"q-ml-md q-mr-xl text-bold diskLabel"},[e._v("Vous")]),i("div",{staticClass:"diskCounter text-bold text-h6"},[e._v(e._s(e.myDisks))])]),i("div",{class:"q-mt-sm disksInfo "+e.versusColor},[i("div",{staticClass:"diskIcon"}),i("div",{staticClass:"q-ml-md q-mr-xl text-bold diskLabel"},[e._v("Adversaire")]),i("div",{staticClass:"diskCounter text-bold text-h6"},[e._v(e._s(e.versusDisks))])])]),i("div",{staticClass:"q-mt-xs text-white text-bold",attrs:{id:"gameState"}},[e.ended?e._e():i("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" Partie en cours.... ")]),!e.ended&&e.shouldPlay?i("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" C'est-à-vous de jouer ")]):e._e(),e.ended||e.shouldPlay?e._e():i("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" C'est-à-votre adversaire de jouer ")]),e.ended?i("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" La partie est terminée !!! ")]):e._e(),e.colorWinner===e.myColor?i("div",{staticClass:"bg-positive q-mt-xs q-pa-sm rounded-borders"},[e._v(" Vous avez gagné. ")]):e._e(),e.ended&&!e.colorWinner?i("div",{staticClass:"bg-info q-mt-xs q-pa-sm rounded-borders"},[e._v(" Partie nulle. ")]):e._e(),e.colorWinner===e.versusColor?i("div",{staticClass:"bg-negative q-mt-xs q-pa-sm rounded-borders"},[e._v(" Vous avez perdu ")]):e._e(),e.ended&&"master"===e.guestOrMaster?i("div",{staticClass:"text-center q-mt-md"},[i("q-btn",{attrs:{rounded:"","no-caps":"",size:"sm",color:"primary"},on:{click:function(t){return e.$emit("new-game")}}},[i("span",{staticClass:"text-bold"},[e._v("Lancer une nouvelle partie")])])],1):e._e()])]):e._e()])},A=[],L={name:"GameControls",props:["guestOrMaster","started","colorWinner","counterRedDisks","counterYellowDisks","playingColor"],data:function(){return{}},computed:{myColor:function(){return"master"===this.guestOrMaster?"yellow":"guest"===this.guestOrMaster?"red":null},versusColor:function(){return"guest"===this.guestOrMaster?"yellow":"master"===this.guestOrMaster?"red":null},shouldPlay:function(){return this.myColor===this.playingColor},myDisks:function(){return"yellow"===this.myColor?this.counterYellowDisks:"red"===this.myColor?this.counterRedDisks:null},versusDisks:function(){return"guest"===this.guestOrMaster?this.counterYellowDisks:"master"===this.guestOrMaster?this.counterRedDisks:null},ended:function(){return!!this.colorWinner||0===this.counterRedDisks&&0===this.counterYellowDisks}}},N=L,V=(i("2d9c"),Object(u["a"])(N,Y,A,!1,null,"c7f37f86",null)),Q=V.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"gridConnect4"}},[e.shouldPlay?i("div",{attrs:{id:"playRow"}},e._l(e.grid,(function(t,l){return i("div",{key:"playRow"+l,class:"cellPlayRow "+e.playingColor,attrs:{id:"playRow"+l},on:{click:function(t){return e.$emit("new-disc",l)}}})})),0):i("div",{attrs:{id:"playRow"}}),i("div",{attrs:{id:"grid"}},e._l(e.grid,(function(t,l){return i("div",{key:l,staticClass:"col",attrs:{id:l}},e._l(t,(function(t,r){return i("div",{key:r,class:e.cellClasses(l,r,t),attrs:{id:r}})})),0)})),0)])},J=[],U=(i("7db0"),{name:"GridConnect4",props:["guestOrMaster","colorWinner","playingColor","grid","disksWinner"],data:function(){return{}},computed:{myColor:function(){return"master"===this.guestOrMaster?"yellow":"guest"===this.guestOrMaster?"red":null},shouldPlay:function(){return!this.colorWinner&&this.myColor===this.playingColor}},methods:{cellClasses:function(e,t,i){var l=this.disksWinner.find((function(i){return i.col===e&&i.cell===t}));return"cell ".concat(i).concat(l?" winner":"")}}}),F=U,H=(i("5b86"),Object(u["a"])(F,B,J,!1,null,"574e1ccf",null)),K=H.exports,X={name:"App",components:{GuestOrMasterSelect:p,MasterTableCreation:x,TableInformation:w,MasterGuestInformation:G,GuestTableConnection:$,GameControls:Q,GridConnect4:K},data:function(){return{peering:{guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},game:{started:!1,colorWinner:null,disksWinner:[],counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}}},methods:{onGuestSelected:function(){this.peering.guestOrMaster="guest"},cancelGuestSelection:function(){this.peering.guestOrMaster=null},onMasterSelected:function(){this.peering.guestOrMaster="master",this.initializePeerMaster()},initializePeerMaster:function(){var e=this;this.peering.peer=new s.a(null,{debug:2}),this.peering.peer.on("open",(function(){null===e.peering.peer.id?(console.log("Received null id from peer open"),e.peering.peer.id=e.peering.id):e.peering.id=e.peering.peer.id,console.log("Connection Open. Awaiting",e.peering.peer.id)})),this.peering.peer.on("connection",(function(t){e.peering.connection?t.on("open",(function(){t.send("Already connected to another client"),setTimeout((function(){return e.peering.connection.close()}),500)})):(e.peering.connection=t,console.log("Connected to",t.peer),e.peering.connection.on("data",(function(t){console.log("Data Received",t),e.analyseDataReceived(t)})),e.peering.connection.on("close",(function(){console.log("Connection reset. Awaiting connection..."),e.peering.connection=null})))})),this.peering.peer.on("disconnected",(function(){console.log("Connection lost. Please Reconnect"),e.peering.peer.id=e.peering.id,e.peering.peer.reconnect()})),this.peering.peer.on("close",(function(){e.peering.connection=null,console.log("Connection destroyed. Please refresh")})),this.peering.peer.on("error",(function(e){console.error("Error",e)}))},closeTable:function(){this.peering.guestConnected&&this.peering.connection.send({code:"masterCloseTable"}),this.peering={guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}},exitTable:function(){this.peering.connection.send({code:"guestExitTable"}),this.peering={guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}},setMasterPeerId:function(e){this.peering.id=e,this.initializePeerGuest()},initializePeerGuest:function(){var e=this;this.peering.peer=new s.a(null,{debug:2}),this.peering.peer.on("open",(function(){null===e.peering.peer.id&&(console.log("Received null id from peer open"),e.peering.peer.id=e.peering.id),console.log("Connection Open. Awaiting",e.peering.peer.id),e.connectGuestToMaster()})),this.peering.peer.on("disconnected",(function(){console.log("Connection lost. Please Reconnect"),e.peering.peer.id=e.peering.id,e.peering.peer.reconnect()})),this.peering.peer.on("close",(function(){e.peering.connection=null,console.log("Connection destroyed. Please refresh")})),this.peering.peer.on("error",(function(t){e.peering.guestErrorConnection="Impossible de se connecter à la table avec l'id ".concat(e.peering.id),setTimeout((function(){e.peering.guestErrorConnection=null}),3e3),e.peering.id=null,e.peering.peer=null,e.peering.connection=null,console.error("Error",t)}))},connectGuestToMaster:function(){var e=this;this.peering.connection&&this.peering.close(),this.peering.connection=this.peering.peer.connect(this.peering.id,{reliable:!0}),this.peering.connection.on("open",(function(){console.log("Connected to",e.peering.connection.peer),e.peering.connection.send({code:"guestConnected"}),e.peering.guestConnected=!0})),this.peering.connection.on("data",(function(t){console.log("Data Received",t),e.analyseDataReceived(t)})),this.peering.connection.on("error",(function(t){e.peering.guestErrorConnection="Impossible de se connecter à la table avec l'id ".concat(e.peering.id),setTimeout((function(){e.peering.guestErrorConnection=null}),3e3),e.peering.id=null,e.peering.peer=null,e.peering.connection=null,console.error("Error",t)}))},analyseDataReceived:function(e){"guestConnected"===e.code&&"master"===this.peering.guestOrMaster&&(this.peering.guestConnected=!0),"newGame"===e.code&&"guest"===this.peering.guestOrMaster&&(this.game=e.game),"newDisc"===e.code&&this.putNewDisc(e.col,!0),"masterCloseTable"===e.code&&(this.$q.notify({type:"info",message:"L'organisateur vient de fermer sa table...",timeout:5e3,progress:!0,position:"top"}),this.peering={guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}),"guestExitTable"===e.code&&(this.$q.notify({type:"info",message:"Votre invité vient de quitter la table...",timeout:5e3,progress:!0,position:"top"}),this.peering.guestConnected=!1,this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null})},launchNewGame:function(){this.game.grid={};for(var e=1;e<8;e+=1){this.game.grid["col".concat(e)]={};for(var t=6;t>0;t-=1)this.game.grid["col".concat(e)]["cell".concat(t)]="empty"}this.game.started=!0,this.game.colorWinner=null,this.game.disksWinner=[],this.game.counterRedDisks=21,this.game.counterYellowDisks=21,this.game.playingColor=Math.random()<.5?"yellow":"red",this.peering.connection.send({code:"newGame",game:this.game})},putNewDisc:function(e,t){for(var i=!1,l=1;l<7;l+=1)if("empty"===this.game.grid[e]["cell".concat(l)]){this.game.grid[e]["cell".concat(l)]=this.game.playingColor,i={col:e,row:"row".concat(l),color:this.game.playingColor};break}if(i){if(i){var r=this.checkGrid2(i);if(r.status&&(this.game.colorWinner=this.game.playingColor,this.game.disksWinner=r.disks),this.game.counterRedDisks-="red"===this.game.playingColor?1:0,this.game.counterYellowDisks-="yellow"===this.game.playingColor?1:0,this.game.playingColor="yellow"===this.game.playingColor?"red":"yellow",t)return;this.peering.connection.send({code:"newDisc",col:e})}}else this.$q.notify({type:"info",message:"La colonne est déjà pleine...",timeout:3e3,progress:!0,position:"top"})},checkGrid2:function(e){var t=this,i=function(e,i,l,r){var o=function(e,t){return"top"===t?e+1:"bottom"===t?e-1:e},c=function(e,t){return"left"===t?e-1:"right"===t?e+1:e},s=function(e,t,i,l){return"top"!==l||i?"bottom"!==l||i?"right"!==i||l?"left"!==i||l?"top"===l&&"right"===i?t<7&&e<8:"top"===l&&"left"===i?t<7&&e>0:"bottom"===l&&"right"===i?t>0&&e<8:"bottom"===l&&"left"===i?t>0&&e>0:null:e>0:e<8:t>0:t<7},a=0,g=[],d=c(i,e.horizontal),m=o(l,e.vertical);while(s(d,m,e.horizontal,e.vertical)){if(t.game.grid["col".concat(d)]["cell".concat(m)]!==r)break;a+=1,g=[].concat(Object(n["a"])(g),[{col:"col".concat(d),cell:"cell".concat(m)}]),d=c(d,e.horizontal),m=o(m,e.vertical)}return{count:a,disks:g}},l=parseInt(e.col.slice(-1),10),r=parseInt(e.row.slice(-1),10),o=e.color,c=i({vertical:null,horizontal:"right"},l,r,o),s=i({vertical:null,horizontal:"left"},l,r,o),a=i({vertical:"top",horizontal:null},l,r,o),g=i({vertical:"bottom",horizontal:null},l,r,o),d=i({vertical:"top",horizontal:"right"},l,r,o),m=i({vertical:"bottom",horizontal:"left"},l,r,o),u=i({vertical:"top",horizontal:"left"},l,r,o),h=i({vertical:"bottom",horizontal:"right"},l,r,o),p={status:!1,disks:[]};return 1+a.count+g.count>3&&(p.status=!0,p.disks=[].concat(Object(n["a"])(p.disks),Object(n["a"])(a.disks),[{col:"col".concat(l),cell:"cell".concat(r)}],Object(n["a"])(g.disks))),1+s.count+c.count>3&&(p.status=!0,p.disks=[].concat(Object(n["a"])(p.disks),Object(n["a"])(s.disks),[{col:"col".concat(l),cell:"cell".concat(r)}],Object(n["a"])(c.disks))),1+d.count+m.count>3&&(p.status=!0,p.disks=[].concat(Object(n["a"])(p.disks),Object(n["a"])(d.disks),[{col:"col".concat(l),cell:"cell".concat(r)}],Object(n["a"])(m.disks))),1+u.count+h.count>3&&(p.status=!0,p.disks=[].concat(Object(n["a"])(p.disks),Object(n["a"])(u.disks),[{col:"col".concat(l),cell:"cell".concat(r)}],Object(n["a"])(h.disks))),p},checkGrid:function(e){this.game.grid.col1.cell1===e&&this.game.grid.col2.cell1===e&&this.game.grid.col3.cell1===e&&this.game.grid.col4.cell1===e&&(this.game.colorWinner=e),this.game.grid.col2.cell1===e&&this.game.grid.col3.cell1===e&&this.game.grid.col4.cell1===e&&this.game.grid.col5.cell1===e&&(this.game.colorWinner=e),this.game.grid.col3.cell1===e&&this.game.grid.col4.cell1===e&&this.game.grid.col5.cell1===e&&this.game.grid.col6.cell1===e&&(this.game.colorWinner=e),this.game.grid.col4.cell1===e&&this.game.grid.col5.cell1===e&&this.game.grid.col6.cell1===e&&this.game.grid.col7.cell1===e&&(this.game.colorWinner=e),this.game.grid.col1.cell2===e&&this.game.grid.col2.cell2===e&&this.game.grid.col3.cell2===e&&this.game.grid.col4.cell2===e&&(this.game.colorWinner=e),this.game.grid.col2.cell2===e&&this.game.grid.col3.cell2===e&&this.game.grid.col4.cell2===e&&this.game.grid.col5.cell2===e&&(this.game.colorWinner=e),this.game.grid.col3.cell2===e&&this.game.grid.col4.cell2===e&&this.game.grid.col5.cell2===e&&this.game.grid.col6.cell2===e&&(this.game.colorWinner=e),this.game.grid.col4.cell2===e&&this.game.grid.col5.cell2===e&&this.game.grid.col6.cell2===e&&this.game.grid.col7.cell2===e&&(this.game.colorWinner=e),this.game.grid.col1.cell3===e&&this.game.grid.col2.cell3===e&&this.game.grid.col3.cell3===e&&this.game.grid.col4.cell3===e&&(this.game.colorWinner=e),this.game.grid.col2.cell3===e&&this.game.grid.col3.cell3===e&&this.game.grid.col4.cell3===e&&this.game.grid.col5.cell3===e&&(this.game.colorWinner=e),this.game.grid.col3.cell3===e&&this.game.grid.col4.cell3===e&&this.game.grid.col5.cell3===e&&this.game.grid.col6.cell3===e&&(this.game.colorWinner=e),this.game.grid.col4.cell3===e&&this.game.grid.col5.cell3===e&&this.game.grid.col6.cell3===e&&this.game.grid.col7.cell3===e&&(this.game.colorWinner=e),this.game.grid.col1.cell4===e&&this.game.grid.col2.cell4===e&&this.game.grid.col3.cell4===e&&this.game.grid.col4.cell4===e&&(this.game.colorWinner=e),this.game.grid.col2.cell4===e&&this.game.grid.col3.cell4===e&&this.game.grid.col4.cell4===e&&this.game.grid.col5.cell4===e&&(this.game.colorWinner=e),this.game.grid.col3.cell4===e&&this.game.grid.col4.cell4===e&&this.game.grid.col5.cell4===e&&this.game.grid.col6.cell4===e&&(this.game.colorWinner=e),this.game.grid.col4.cell4===e&&this.game.grid.col5.cell4===e&&this.game.grid.col6.cell4===e&&this.game.grid.col7.cell4===e&&(this.game.colorWinner=e),this.game.grid.col1.cell5===e&&this.game.grid.col2.cell5===e&&this.game.grid.col3.cell5===e&&this.game.grid.col4.cell5===e&&(this.game.colorWinner=e),this.game.grid.col2.cell5===e&&this.game.grid.col3.cell5===e&&this.game.grid.col4.cell5===e&&this.game.grid.col5.cell5===e&&(this.game.colorWinner=e),this.game.grid.col3.cell5===e&&this.game.grid.col4.cell5===e&&this.game.grid.col5.cell5===e&&this.game.grid.col6.cell5===e&&(this.game.colorWinner=e),this.game.grid.col4.cell5===e&&this.game.grid.col5.cell5===e&&this.game.grid.col6.cell5===e&&this.game.grid.col7.cell5===e&&(this.game.colorWinner=e),this.game.grid.col1.cell6===e&&this.game.grid.col2.cell6===e&&this.game.grid.col3.cell6===e&&this.game.grid.col4.cell6===e&&(this.game.colorWinner=e),this.game.grid.col2.cell6===e&&this.game.grid.col3.cell6===e&&this.game.grid.col4.cell6===e&&this.game.grid.col5.cell6===e&&(this.game.colorWinner=e),this.game.grid.col3.cell6===e&&this.game.grid.col4.cell6===e&&this.game.grid.col5.cell6===e&&this.game.grid.col6.cell6===e&&(this.game.colorWinner=e),this.game.grid.col4.cell6===e&&this.game.grid.col5.cell6===e&&this.game.grid.col6.cell6===e&&this.game.grid.col7.cell6===e&&(this.game.colorWinner=e),this.game.grid.col1.cell1===e&&this.game.grid.col1.cell2===e&&this.game.grid.col1.cell3===e&&this.game.grid.col1.cell4===e&&(this.game.colorWinner=e),this.game.grid.col1.cell2===e&&this.game.grid.col1.cell3===e&&this.game.grid.col1.cell4===e&&this.game.grid.col1.cell5===e&&(this.game.colorWinner=e),this.game.grid.col1.cell3===e&&this.game.grid.col1.cell4===e&&this.game.grid.col1.cell5===e&&this.game.grid.col1.cell6===e&&(this.game.colorWinner=e),this.game.grid.col2.cell1===e&&this.game.grid.col2.cell2===e&&this.game.grid.col2.cell3===e&&this.game.grid.col2.cell4===e&&(this.game.colorWinner=e),this.game.grid.col2.cell2===e&&this.game.grid.col2.cell3===e&&this.game.grid.col2.cell4===e&&this.game.grid.col2.cell5===e&&(this.game.colorWinner=e),this.game.grid.col2.cell3===e&&this.game.grid.col2.cell4===e&&this.game.grid.col2.cell5===e&&this.game.grid.col2.cell6===e&&(this.game.colorWinner=e),this.game.grid.col3.cell1===e&&this.game.grid.col3.cell2===e&&this.game.grid.col3.cell3===e&&this.game.grid.col3.cell4===e&&(this.game.colorWinner=e),this.game.grid.col3.cell2===e&&this.game.grid.col3.cell3===e&&this.game.grid.col3.cell4===e&&this.game.grid.col3.cell5===e&&(this.game.colorWinner=e),this.game.grid.col3.cell3===e&&this.game.grid.col3.cell4===e&&this.game.grid.col3.cell5===e&&this.game.grid.col3.cell6===e&&(this.game.colorWinner=e),this.game.grid.col4.cell1===e&&this.game.grid.col4.cell2===e&&this.game.grid.col4.cell3===e&&this.game.grid.col4.cell4===e&&(this.game.colorWinner=e),this.game.grid.col4.cell2===e&&this.game.grid.col4.cell3===e&&this.game.grid.col4.cell4===e&&this.game.grid.col4.cell5===e&&(this.game.colorWinner=e),this.game.grid.col4.cell3===e&&this.game.grid.col4.cell4===e&&this.game.grid.col4.cell5===e&&this.game.grid.col4.cell6===e&&(this.game.colorWinner=e),this.game.grid.col5.cell1===e&&this.game.grid.col5.cell2===e&&this.game.grid.col5.cell3===e&&this.game.grid.col5.cell4===e&&(this.game.colorWinner=e),this.game.grid.col5.cell2===e&&this.game.grid.col5.cell3===e&&this.game.grid.col5.cell4===e&&this.game.grid.col5.cell5===e&&(this.game.colorWinner=e),this.game.grid.col5.cell3===e&&this.game.grid.col5.cell4===e&&this.game.grid.col5.cell5===e&&this.game.grid.col5.cell6===e&&(this.game.colorWinner=e),this.game.grid.col6.cell1===e&&this.game.grid.col6.cell2===e&&this.game.grid.col6.cell3===e&&this.game.grid.col6.cell4===e&&(this.game.colorWinner=e),this.game.grid.col6.cell2===e&&this.game.grid.col6.cell3===e&&this.game.grid.col6.cell4===e&&this.game.grid.col6.cell5===e&&(this.game.colorWinner=e),this.game.grid.col6.cell3===e&&this.game.grid.col6.cell4===e&&this.game.grid.col6.cell5===e&&this.game.grid.col6.cell6===e&&(this.game.colorWinner=e),this.game.grid.col7.cell1===e&&this.game.grid.col7.cell2===e&&this.game.grid.col7.cell3===e&&this.game.grid.col7.cell4===e&&(this.game.colorWinner=e),this.game.grid.col7.cell2===e&&this.game.grid.col7.cell3===e&&this.game.grid.col7.cell4===e&&this.game.grid.col7.cell5===e&&(this.game.colorWinner=e),this.game.grid.col7.cell3===e&&this.game.grid.col7.cell4===e&&this.game.grid.col7.cell5===e&&this.game.grid.col7.cell6===e&&(this.game.colorWinner=e),this.game.grid.col1.cell4===e&&this.game.grid.col2.cell3===e&&this.game.grid.col3.cell2===e&&this.game.grid.col4.cell1===e&&(this.game.colorWinner=e),this.game.grid.col4.cell4===e&&this.game.grid.col3.cell3===e&&this.game.grid.col2.cell2===e&&this.game.grid.col1.cell1===e&&(this.game.colorWinner=e),this.game.grid.col1.cell5===e&&this.game.grid.col2.cell4===e&&this.game.grid.col3.cell3===e&&this.game.grid.col4.cell2===e&&(this.game.colorWinner=e),this.game.grid.col4.cell5===e&&this.game.grid.col3.cell4===e&&this.game.grid.col2.cell3===e&&this.game.grid.col1.cell2===e&&(this.game.colorWinner=e),this.game.grid.col1.cell6===e&&this.game.grid.col2.cell5===e&&this.game.grid.col3.cell4===e&&this.game.grid.col4.cell3===e&&(this.game.colorWinner=e),this.game.grid.col4.cell6===e&&this.game.grid.col3.cell5===e&&this.game.grid.col2.cell4===e&&this.game.grid.col1.cell3===e&&(this.game.colorWinner=e),this.game.grid.col2.cell4===e&&this.game.grid.col3.cell3===e&&this.game.grid.col4.cell2===e&&this.game.grid.col5.cell1===e&&(this.game.colorWinner=e),this.game.grid.col5.cell4===e&&this.game.grid.col4.cell3===e&&this.game.grid.col3.cell2===e&&this.game.grid.col2.cell1===e&&(this.game.colorWinner=e),this.game.grid.col2.cell5===e&&this.game.grid.col3.cell4===e&&this.game.grid.col4.cell3===e&&this.game.grid.col5.cell2===e&&(this.game.colorWinner=e),this.game.grid.col5.cell5===e&&this.game.grid.col4.cell4===e&&this.game.grid.col3.cell3===e&&this.game.grid.col2.cell2===e&&(this.game.colorWinner=e),this.game.grid.col2.cell6===e&&this.game.grid.col3.cell5===e&&this.game.grid.col4.cell4===e&&this.game.grid.col5.cell3===e&&(this.game.colorWinner=e),this.game.grid.col5.cell6===e&&this.game.grid.col4.cell5===e&&this.game.grid.col3.cell4===e&&this.game.grid.col2.cell3===e&&(this.game.colorWinner=e),this.game.grid.col3.cell4===e&&this.game.grid.col4.cell3===e&&this.game.grid.col5.cell2===e&&this.game.grid.col6.cell1===e&&(this.game.colorWinner=e),this.game.grid.col6.cell4===e&&this.game.grid.col5.cell3===e&&this.game.grid.col4.cell2===e&&this.game.grid.col3.cell1===e&&(this.game.colorWinner=e),this.game.grid.col3.cell5===e&&this.game.grid.col4.cell4===e&&this.game.grid.col5.cell3===e&&this.game.grid.col6.cell2===e&&(this.game.colorWinner=e),this.game.grid.col6.cell5===e&&this.game.grid.col5.cell4===e&&this.game.grid.col4.cell3===e&&this.game.grid.col3.cell2===e&&(this.game.colorWinner=e),this.game.grid.col3.cell6===e&&this.game.grid.col4.cell5===e&&this.game.grid.col5.cell4===e&&this.game.grid.col6.cell3===e&&(this.game.colorWinner=e),this.game.grid.col6.cell6===e&&this.game.grid.col5.cell5===e&&this.game.grid.col4.cell4===e&&this.game.grid.col3.cell3===e&&(this.game.colorWinner=e),this.game.grid.col4.cell4===e&&this.game.grid.col5.cell3===e&&this.game.grid.col6.cell2===e&&this.game.grid.col7.cell1===e&&(this.game.colorWinner=e),this.game.grid.col7.cell4===e&&this.game.grid.col6.cell3===e&&this.game.grid.col5.cell2===e&&this.game.grid.col4.cell1===e&&(this.game.colorWinner=e),this.game.grid.col4.cell5===e&&this.game.grid.col5.cell4===e&&this.game.grid.col6.cell3===e&&this.game.grid.col7.cell2===e&&(this.game.colorWinner=e),this.game.grid.col7.cell5===e&&this.game.grid.col6.cell4===e&&this.game.grid.col5.cell3===e&&this.game.grid.col4.cell2===e&&(this.game.colorWinner=e),this.game.grid.col4.cell6===e&&this.game.grid.col5.cell5===e&&this.game.grid.col6.cell4===e&&this.game.grid.col7.cell3===e&&(this.game.colorWinner=e),this.game.grid.col7.cell6===e&&this.game.grid.col6.cell5===e&&this.game.grid.col5.cell4===e&&this.game.grid.col4.cell3===e&&(this.game.colorWinner=e)}}},Z=X,ee=(i("7faf"),Object(u["a"])(Z,r,o,!1,null,null,null)),te=ee.exports,ie=(i("a4ac"),i("5c7d"),i("5c6e")),le=i("34fe"),re=(i("7d6e"),i("1194"),i("b05d")),oe=i("9c40"),ne=i("54e1"),ce=i("58ea"),se=i("0016"),ae=i("27f9"),ge=i("2a19");l["a"].use(re["a"],{config:{},components:{QBtn:oe["a"],QBanner:ne["a"],QCircularProgress:ce["a"],QIcon:se["a"],QInput:ae["a"]},directives:{},plugins:{Notify:ge["a"]},lang:le["a"],iconSet:ie["a"]}),l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(te)}}).$mount("#app")},"5b86":function(e,t,i){"use strict";var l=i("ef05"),r=i.n(l);r.a},"5e11":function(e,t){function i(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id="5e11"},"7b2b":function(e,t,i){},"7faf":function(e,t,i){"use strict";var l=i("b8ff"),r=i.n(l);r.a},"8d9a":function(e,t,i){"use strict";var l=i("96bc"),r=i.n(l);r.a},"96bc":function(e,t,i){},a4ac:function(e,t,i){},aab1:function(e,t,i){"use strict";var l=i("e12a"),r=i.n(l);r.a},af1d:function(e,t,i){},b8ff:function(e,t,i){},d4a2:function(e,t,i){"use strict";var l=i("ffec"),r=i.n(l);r.a},e12a:function(e,t,i){},ef05:function(e,t,i){},ffec:function(e,t,i){}});
//# sourceMappingURL=app.e7dc0a90.js.map