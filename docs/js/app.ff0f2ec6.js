(function(e){function t(t){for(var s,i,a=t[0],l=t[1],c=t[2],d=0,A=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&A.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(A.length)A.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/puissance4/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11e9":function(e,t,n){"use strict";var s=n("7b2b"),r=n.n(s);r.a},"15a8":function(e,t,n){"use strict";var s=n("25bc"),r=n.n(s);r.a},"21f9":function(e,t,n){e.exports=n.p+"media/new_game.1f382ed3.mp3"},"25bc":function(e,t,n){},"2c9c":function(e,t,n){e.exports=n.p+"media/guest_arrived.4fded66f.mp3"},3992:function(e,t,n){"use strict";var s=n("62ad"),r=n.n(s);r.a},"4e18":function(e,t,n){"use strict";var s=n("79bb"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.peering.guestOrMaster?e._e():s("guest-or-master-select",{on:{"master-selected":e.onMasterSelected,"guest-selected":e.onGuestSelected}}),e.peering.id?s("table-information",{attrs:{peeringId:e.peering.id,guestOrMaster:e.peering.guestOrMaster,guestConnected:e.peering.guestConnected},on:{"exit-table":e.exitTable,"close-table":e.closeTable}}):e._e(),"master"!==e.peering.guestOrMaster||e.peering.id?e._e():s("master-table-creation"),"master"===e.peering.guestOrMaster&&e.peering.id?s("master-guest-information",{attrs:{connected:e.peering.guestConnected}}):e._e(),"guest"!==e.peering.guestOrMaster||e.peering.guestConnected?e._e():s("guest-table-connection",{attrs:{peeringId:e.peering.id,errorConnection:e.peering.guestErrorConnection},on:{"id-submitted":e.setMasterPeerId,"cancel-guest":e.cancelGuestSelection}}),s("div",{attrs:{id:"gridAndControls"}},[e.peering.guestConnected?s("game-controls",{attrs:{guestOrMaster:e.peering.guestOrMaster,started:e.game.started,colorWinner:e.game.colorWinner,counterRedDisks:e.game.counterRedDisks,counterYellowDisks:e.game.counterYellowDisks,playingColor:e.game.playingColor},on:{"new-game":e.launchNewGame}}):e._e(),e.game.started?s("grid-connect4",{attrs:{guestOrMaster:e.peering.guestOrMaster,colorWinner:e.game.colorWinner,playingColor:e.game.playingColor,grid:e.game.grid,disksWinner:e.game.disksWinner},on:{"new-disc":e.putNewDisc}}):e._e()],1),s("audio",{ref:"soundCreationConnection",staticStyle:{display:"none"},attrs:{src:n("7f95"),preload:"auto",controls:"none"}}),s("audio",{ref:"soundExit",staticStyle:{display:"none"},attrs:{src:n("8216"),preload:"auto",controls:"none"}}),s("audio",{ref:"soundGuestArrived",staticStyle:{display:"none"},attrs:{src:n("2c9c"),preload:"auto",controls:"none"}}),s("audio",{ref:"soundNewGame",staticStyle:{display:"none"},attrs:{src:n("21f9"),preload:"auto",controls:"none"}}),s("audio",{ref:"soundSuccess",staticStyle:{display:"none"},attrs:{src:n("e493"),preload:"auto",controls:"none"}}),s("audio",{ref:"soundFailure",staticStyle:{display:"none"},attrs:{src:n("fdcc"),preload:"auto",controls:"none"}}),s("audio",{ref:"soundNewDisk",staticStyle:{display:"none"},attrs:{src:n("e2d5"),preload:"auto",controls:"none"}})],1)},o=[],i=(n("99af"),n("fb6a"),n("2909")),a=n("a0bc"),l=n.n(a),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"guestOrMasterSelect"}},[n("q-btn",{staticClass:"q-mb-md",attrs:{color:"orange-8",rounded:"","no-caps":""},on:{click:function(t){return e.$emit("master-selected")}}},[n("div",[n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Organiser")]),n("br"),n("span",{staticClass:"text-body-2"},[e._v("une table privée")])])]),n("q-btn",{staticClass:"q-mt-md",attrs:{color:"orange-8",rounded:"","no-caps":""},on:{click:function(t){return e.$emit("guest-selected")}}},[n("div",[n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Rejoindre un ami")]),n("br"),n("span",{staticClass:"text-body-2"},[e._v("à l'aide de son identifiant")])])])],1)},u=[],d={name:"GameOrMasterSelect",data:function(){return{}}},A=d,p=(n("15a8"),n("2877")),g=Object(p["a"])(A,c,u,!1,null,"04bbe2e0",null),V=g.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"masterTableCreation"}},[n("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px"}},[n("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Création de la table en cours")])],1)])},f=[],h={name:"MasterTableCreation",data:function(){return{}}},b=h,C=(n("11e9"),Object(p["a"])(b,m,f,!1,null,"8ac16194",null)),v=C.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"master"===e.guestOrMaster||"guest"===e.guestOrMaster&&e.guestConnected?n("div",{staticClass:"bg-orange-8 q-pa-xs shadow-4 relative-position"},[n("div",{attrs:{id:"tableInformation"}},[n("div",[n("q-icon",{staticClass:"text-positive q-ml-xs q-mr-xs",attrs:{name:"mdi-check-bold",size:"sm"}}),n("span",{staticClass:"q-ml-xs text-caption text-white text-bold"},[e._v("Table opérationnelle")]),n("span",{staticClass:"q-ml-xs text-italic text-white",staticStyle:{"font-size":"0.8em"}},[e._v("("+e._s(e.labelGuestOrMaster)+")")])],1),n("div",[n("div",[n("span",{staticClass:"text-caption text-bold text-white"},[e._v("Id :")]),n("q-btn",{staticClass:"q-ml-xs q-mr-xs",attrs:{id:"idTable",push:"",glossy:"",rounded:"","no-caps":"",color:"white","text-color":"black",size:"sm",title:"Cliquez pour copier l'identifiant"},on:{click:e.copyIdInClipboard}},[e._v(e._s(e.peeringId))]),"master"===e.guestOrMaster?n("span",{staticClass:"text-italic text-white",staticStyle:{"font-size":"0.7em"}},[e._v("à partager avec un ami")]):e._e()],1)]),n("div",["master"===e.guestOrMaster?n("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"mdi-exit-run",push:"",glossy:"",color:"black",size:"sm",title:"Cliquez pour fermer la table"},on:{click:function(t){return e.$emit("close-table")}}}):e._e(),"guest"===e.guestOrMaster?n("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"mdi-exit-run",push:"",glossy:"",color:"black",size:"sm",title:"Cliquez pour quitter la table"},on:{click:function(t){return e.$emit("exit-table")}}}):e._e()],1)]),"master"===e.guestOrMaster&&e.guestConnected?n("div",{staticClass:"q-mt-sm",attrs:{id:"connexionInformation"}},[n("q-icon",{staticClass:"text-positive q-ml-xs q-mr-xs",attrs:{name:"mdi-check-bold",size:"sm"}}),n("span",{staticClass:"q-ml-xs text-caption text-white text-bold"},[e._v("Votre invité est connecté !!!")])],1):e._e(),"guest"===e.guestOrMaster&&e.guestConnected?n("div",{staticClass:"q-mt-sm",attrs:{id:"connexionInformation"}},[n("q-icon",{staticClass:"text-positive q-ml-xs q-mr-xs",attrs:{name:"mdi-check-bold",size:"sm"}}),n("span",{staticClass:"q-ml-xs text-caption text-white text-bold"},[e._v("Vous êtes connecté avec l'organisateur !!!")])],1):e._e()]):e._e()},x=[],w={name:"TableInformation",props:["peeringId","guestOrMaster","guestConnected"],data:function(){return{}},computed:{labelGuestOrMaster:function(){return"master"===this.guestOrMaster?"Vous êtes l'organisateur":"Vous êtes invité"}},methods:{copyIdInClipboard:function(){var e=document.createElement("textarea");e.value=this.peeringId,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$q.notify({type:"positive",message:"identifiant copié dans le presse-papier",timeout:2e3,progress:!0,position:"top"})}}},k=w,q=(n("e4dd"),Object(p["a"])(k,y,x,!1,null,"65a2f559",null)),O=q.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"masterGuestInformation"}},[e.connected?e._e():n("div",{attrs:{id:"masterWaitingGuest"}},[n("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px"}},[n("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("En attente d'un invité...")])],1)])])},_=[],D={name:"MasterGuestInformation",props:["connected"],data:function(){return{}}},I=D,S=(n("d42b"),Object(p["a"])(I,M,_,!1,null,"55fe9818",null)),E=S.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"guestTableConnection"}},[e.peeringId?e._e():n("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px",width:"100%"}},[n("q-input",{staticClass:"q-mb-md",attrs:{color:"teal","bg-color":"white",outlined:"",label:"Identifiant de l'organisateur"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"mdi-identifier"}})]},proxy:!0}],null,!1,2578258804),model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),n("q-btn",{staticClass:"q-mt-md",attrs:{rounded:"","no-caps":"",color:"white"},on:{click:e.submitId}},[n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Valider")])]),n("q-btn",{staticClass:"q-ml-xl q-mt-md",attrs:{rounded:"","no-caps":"",color:"white"},on:{click:function(t){return e.$emit("cancel-guest")}}},[n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("Annuler")])])],1),e.peeringId?n("div",{staticClass:"bg-orange-8 q-pa-md",staticStyle:{"border-radius":"28px"}},[n("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),n("span",{staticClass:"text-h5 text-grey-9 text-bold"},[e._v("En attente de connexion")])],1):e._e()])},G=[],Q={name:"GuestTableConnection",props:["peeringId","errorConnection"],data:function(){return{id:null}},watch:{errorConnection:function(){this.errorConnection&&(this.id=null,this.$q.notify({type:"negative",message:this.errorConnection,timeout:5e3,progress:!0,position:"top"}))}},methods:{submitId:function(){this.id&&this.$emit("id-submitted",this.id)}}},T=Q,W=(n("aab1"),Object(p["a"])(T,R,G,!1,null,"549bf69c",null)),z=W.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-white q-ma-md rounded-borders q-pa-sm shadow-4",attrs:{id:"gameControls"}},["master"!==e.guestOrMaster||e.started?e._e():n("div",[n("span",{staticClass:"text-bold"},[e._v("Aucune partie en cours !!!")]),n("q-btn",{staticClass:"q-ml-md",attrs:{rounded:"","no-caps":"",size:"sm",color:"primary"},on:{click:function(t){return e.$emit("new-game")}}},[n("span",{staticClass:"text-bold"},[e._v("Lancer une partie")])])],1),"guest"!==e.guestOrMaster||e.started?e._e():n("div",[n("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"sm",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent"}}),n("span",[e._v("En attente du lancement d'une partie par l'organisateur")])],1),e.started?n("div",{staticClass:"q-pa-sm",attrs:{id:"gamePanel"}},[n("div",{staticClass:"bg-blue-1 q-mb-xs q-pa-sm rounded-borders",attrs:{id:"disksCounter"}},[n("div",{class:"disksInfo "+e.myColor},[n("div",{staticClass:"diskIcon"}),n("div",{staticClass:"q-ml-md q-mr-xl text-bold diskLabel"},[e._v("Vous")]),n("div",{staticClass:"diskCounter text-bold text-h6"},[e._v(e._s(e.myDisks))])]),n("div",{class:"q-mt-sm disksInfo "+e.versusColor},[n("div",{staticClass:"diskIcon"}),n("div",{staticClass:"q-ml-md q-mr-xl text-bold diskLabel"},[e._v("Adversaire")]),n("div",{staticClass:"diskCounter text-bold text-h6"},[e._v(e._s(e.versusDisks))])])]),n("div",{staticClass:"q-mt-xs text-white text-bold",attrs:{id:"gameState"}},[e.ended?e._e():n("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" Partie en cours.... ")]),!e.ended&&e.shouldPlay?n("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" C'est-à-vous de jouer ")]):e._e(),e.ended||e.shouldPlay?e._e():n("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" C'est-à-votre adversaire de jouer ")]),e.ended?n("div",{staticClass:"bg-primary q-mb-xs q-pa-sm rounded-borders"},[e._v(" La partie est terminée !!! ")]):e._e(),e.colorWinner===e.myColor?n("div",{staticClass:"bg-positive q-mt-xs q-pa-sm rounded-borders"},[e._v(" Vous avez gagné. ")]):e._e(),e.ended&&!e.colorWinner?n("div",{staticClass:"bg-info q-mt-xs q-pa-sm rounded-borders"},[e._v(" Partie nulle. ")]):e._e(),e.colorWinner===e.versusColor?n("div",{staticClass:"bg-negative q-mt-xs q-pa-sm rounded-borders"},[e._v(" Vous avez perdu ")]):e._e(),e.ended&&"master"===e.guestOrMaster?n("div",{staticClass:"text-center q-mt-md"},[n("q-btn",{attrs:{rounded:"","no-caps":"",size:"sm",color:"primary"},on:{click:function(t){return e.$emit("new-game")}}},[n("span",{staticClass:"text-bold"},[e._v("Lancer une nouvelle partie")])])],1):e._e()])]):e._e()])},P=[],J={name:"GameControls",props:["guestOrMaster","started","colorWinner","counterRedDisks","counterYellowDisks","playingColor"],data:function(){return{}},computed:{myColor:function(){return"master"===this.guestOrMaster?"yellow":"guest"===this.guestOrMaster?"red":null},versusColor:function(){return"guest"===this.guestOrMaster?"yellow":"master"===this.guestOrMaster?"red":null},shouldPlay:function(){return this.myColor===this.playingColor},myDisks:function(){return"yellow"===this.myColor?this.counterYellowDisks:"red"===this.myColor?this.counterRedDisks:null},versusDisks:function(){return"guest"===this.guestOrMaster?this.counterYellowDisks:"master"===this.guestOrMaster?this.counterRedDisks:null},ended:function(){return!!this.colorWinner||0===this.counterRedDisks&&0===this.counterYellowDisks}}},N=J,B=(n("4e18"),Object(p["a"])(N,j,P,!1,null,"b51bacea",null)),L=B.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"gridConnect4"}},[e.shouldPlay?n("div",{attrs:{id:"playRow"}},e._l(e.grid,(function(t,s){return n("div",{key:"playRow"+s,class:"cellPlayRow "+e.playingColor,attrs:{id:"playRow"+s},on:{click:function(t){return e.$emit("new-disc",s)}}})})),0):n("div",{attrs:{id:"playRow"}}),n("div",{attrs:{id:"grid"}},e._l(e.grid,(function(t,s){return n("div",{key:s,staticClass:"col",attrs:{id:s}},e._l(t,(function(t,r){return n("div",{key:r,class:e.cellClasses(s,r,t),attrs:{id:r}})})),0)})),0)])},U=[],F=(n("7db0"),{name:"GridConnect4",props:["guestOrMaster","colorWinner","playingColor","grid","disksWinner"],data:function(){return{}},computed:{myColor:function(){return"master"===this.guestOrMaster?"yellow":"guest"===this.guestOrMaster?"red":null},shouldPlay:function(){return!this.colorWinner&&this.myColor===this.playingColor}},methods:{cellClasses:function(e,t,n){var s=this.disksWinner.find((function(n){return n.col===e&&n.row===t}));return"cell ".concat(n).concat(s?" winner":"")}}}),$=F,K=(n("3992"),Object(p["a"])($,Y,U,!1,null,"2a31e983",null)),H=K.exports,Z={name:"App",components:{GuestOrMasterSelect:V,MasterTableCreation:v,TableInformation:O,MasterGuestInformation:E,GuestTableConnection:z,GameControls:L,GridConnect4:H},data:function(){return{peering:{guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},game:{started:!1,colorWinner:null,disksWinner:[],counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}}},methods:{onGuestSelected:function(){this.peering.guestOrMaster="guest"},cancelGuestSelection:function(){this.peering.guestOrMaster=null},onMasterSelected:function(){this.peering.guestOrMaster="master",this.initializePeerMaster()},initializePeerMaster:function(){var e=this;this.peering.peer=new l.a({host:'peerjs.charloup.fr',port:443,path:'/',secure:true},{debug:2}),this.peering.peer.on("open",(function(){null===e.peering.peer.id?(console.log("Received null id from peer open"),e.peering.peer.id=e.peering.id):e.peering.id=e.peering.peer.id,e.$refs.soundCreationConnection.play(),console.log("Connection Open. Awaiting",e.peering.peer.id)})),this.peering.peer.on("connection",(function(t){e.peering.connection?t.on("open",(function(){t.send("Already connected to another client"),setTimeout((function(){return e.peering.connection.close()}),500)})):(e.peering.connection=t,console.log("Connected to",t.peer),e.peering.connection.on("data",(function(t){console.log("Data Received",t),e.analyseDataReceived(t)})),e.peering.connection.on("close",(function(){console.log("Connection reset. Awaiting connection..."),e.peering.connection=null})))})),this.peering.peer.on("disconnected",(function(){console.log("Connection lost. Please Reconnect"),e.peering.peer.id=e.peering.id,e.peering.peer.reconnect()})),this.peering.peer.on("close",(function(){e.peering.connection=null,console.log("Connection destroyed. Please refresh")})),this.peering.peer.on("error",(function(e){console.error("Error",e)}))},closeTable:function(){this.peering.guestConnected&&this.peering.connection.send({code:"masterCloseTable"}),this.$refs.soundExit.play(),this.peering={guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}},exitTable:function(){var e=this;this.peering.connection.send({code:"guestExitTable"}),this.peering.guestOrMaster=null,setTimeout((function(){e.$refs.soundExit.play(),e.peering.connection.close(),e.peering={guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},e.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}}),1e3)},setMasterPeerId:function(e){this.peering.id=e,this.initializePeerGuest()},initializePeerGuest:function(){var e=this;this.peering.peer=new l.a(null,{debug:2}),this.peering.peer.on("open",(function(){null===e.peering.peer.id&&(console.log("Received null id from peer open"),e.peering.peer.id=e.peering.id),console.log("Connection Open. Awaiting",e.peering.peer.id),e.connectGuestToMaster()})),this.peering.peer.on("disconnected",(function(){console.log("Connection lost. Please Reconnect"),e.peering.peer.id=e.peering.id,e.peering.peer.reconnect()})),this.peering.peer.on("close",(function(){e.peering.connection=null,console.log("Connection destroyed. Please refresh")})),this.peering.peer.on("error",(function(t){e.peering.guestErrorConnection="Impossible de se connecter à la table avec l'id ".concat(e.peering.id),setTimeout((function(){e.peering.guestErrorConnection=null}),3e3),e.peering.id=null,e.peering.peer=null,e.peering.connection=null,console.error("Error",t)}))},connectGuestToMaster:function(){var e=this;this.peering.connection&&this.peering.close(),this.peering.connection=this.peering.peer.connect(this.peering.id,{reliable:!0}),this.peering.connection.on("open",(function(){console.log("Connected to",e.peering.connection.peer),e.$refs.soundCreationConnection.play(),e.peering.connection.send({code:"guestConnected"}),e.peering.guestConnected=!0})),this.peering.connection.on("data",(function(t){console.log("Data Received",t),e.analyseDataReceived(t)})),this.peering.connection.on("error",(function(t){e.peering.guestErrorConnection="Impossible de se connecter à la table avec l'id ".concat(e.peering.id),setTimeout((function(){e.peering.guestErrorConnection=null}),3e3),e.peering.id=null,e.peering.peer=null,e.peering.connection=null,console.error("Error",t)}))},analyseDataReceived:function(e){"guestConnected"===e.code&&"master"===this.peering.guestOrMaster&&(this.$refs.soundGuestArrived.play(),this.peering.guestConnected=!0),"newGame"===e.code&&"guest"===this.peering.guestOrMaster&&(this.game=e.game,this.$refs.soundNewGame.play()),"newDisc"===e.code&&this.putNewDisc(e.col,!0),"masterCloseTable"===e.code&&(this.$q.notify({type:"info",message:"L'organisateur vient de fermer sa table...",timeout:5e3,progress:!0,position:"top"}),this.$refs.soundExit.play(),this.peering={guestOrMaster:null,id:null,peer:null,connection:null,guestConnected:!1,guestErrorConnection:!1},this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null}),"guestExitTable"===e.code&&(this.$q.notify({type:"info",message:"Votre invité vient de quitter la table...",timeout:5e3,progress:!0,position:"top"}),this.$refs.soundExit.play(),this.peering.guestConnected=!1,this.game={started:!1,colorWinner:null,counterRedDisks:null,counterYellowDisks:null,playingColor:null,grid:null})},launchNewGame:function(){this.game.grid={};for(var e=1;e<8;e+=1){this.game.grid["col".concat(e)]={};for(var t=6;t>0;t-=1)this.game.grid["col".concat(e)]["row".concat(t)]="empty"}this.game.started=!0,this.game.colorWinner=null,this.game.disksWinner=[],this.game.counterRedDisks=21,this.game.counterYellowDisks=21,this.game.playingColor=Math.random()<.5?"yellow":"red",this.$refs.soundNewGame.play(),this.peering.connection.send({code:"newGame",game:this.game})},putNewDisc:function(e,t){for(var n=!1,s=1;s<7;s+=1)if("empty"===this.game.grid[e]["row".concat(s)]){this.game.grid[e]["row".concat(s)]=this.game.playingColor,n={col:e,row:"row".concat(s),color:this.game.playingColor};break}if(n){if(n){var r=this.checkGrid(n);if(r.status&&(this.game.colorWinner=this.game.playingColor,this.game.disksWinner=r.disks),this.game.counterRedDisks-="red"===this.game.playingColor?1:0,this.game.counterYellowDisks-="yellow"===this.game.playingColor?1:0,this.game.playingColor="yellow"===this.game.playingColor?"red":"yellow","yellow"===this.game.colorWinner&&("master"===this.peering.guestOrMaster&&this.$refs.soundSuccess.play(),"guest"===this.peering.guestOrMaster&&this.$refs.soundFailure.play()),"red"===this.game.colorWinner&&("guest"===this.peering.guestOrMaster&&this.$refs.soundSuccess.play(),"master"===this.peering.guestOrMaster&&this.$refs.soundFailure.play()),this.$refs.soundNewDisk.play(),t)return;this.peering.connection.send({code:"newDisc",col:e})}}else this.$q.notify({type:"info",message:"La colonne est déjà pleine...",timeout:3e3,progress:!0,position:"top"})},checkGrid:function(e){var t=this,n=function(e,n,s,r){var o=function(e,t){return"top"===t?e+1:"bottom"===t?e-1:e},a=function(e,t){return"left"===t?e-1:"right"===t?e+1:e},l=function(e,t,n,s){return"top"!==s||n?"bottom"!==s||n?"right"!==n||s?"left"!==n||s?"top"===s&&"right"===n?t<7&&e<8:"top"===s&&"left"===n?t<7&&e>0:"bottom"===s&&"right"===n?t>0&&e<8:"bottom"===s&&"left"===n?t>0&&e>0:null:e>0:e<8:t>0:t<7},c=0,u=[],d=a(n,e.horizontal),A=o(s,e.vertical);while(l(d,A,e.horizontal,e.vertical)){if(t.game.grid["col".concat(d)]["row".concat(A)]!==r)break;c+=1,u=[].concat(Object(i["a"])(u),[{col:"col".concat(d),row:"row".concat(A)}]),d=a(d,e.horizontal),A=o(A,e.vertical)}return{count:c,disks:u}},s=parseInt(e.col.slice(-1),10),r=parseInt(e.row.slice(-1),10),o=e.color,a=n({vertical:null,horizontal:"right"},s,r,o),l=n({vertical:null,horizontal:"left"},s,r,o),c=n({vertical:"top",horizontal:null},s,r,o),u=n({vertical:"bottom",horizontal:null},s,r,o),d=n({vertical:"top",horizontal:"right"},s,r,o),A=n({vertical:"bottom",horizontal:"left"},s,r,o),p=n({vertical:"top",horizontal:"left"},s,r,o),g=n({vertical:"bottom",horizontal:"right"},s,r,o),V={status:!1,disks:[]};return 1+c.count+u.count>3&&(V.status=!0,V.disks=[].concat(Object(i["a"])(V.disks),Object(i["a"])(c.disks),[{col:"col".concat(s),row:"row".concat(r)}],Object(i["a"])(u.disks))),1+l.count+a.count>3&&(V.status=!0,V.disks=[].concat(Object(i["a"])(V.disks),Object(i["a"])(l.disks),[{col:"col".concat(s),row:"row".concat(r)}],Object(i["a"])(a.disks))),1+d.count+A.count>3&&(V.status=!0,V.disks=[].concat(Object(i["a"])(V.disks),Object(i["a"])(d.disks),[{col:"col".concat(s),row:"row".concat(r)}],Object(i["a"])(A.disks))),1+p.count+g.count>3&&(V.status=!0,V.disks=[].concat(Object(i["a"])(V.disks),Object(i["a"])(p.disks),[{col:"col".concat(s),row:"row".concat(r)}],Object(i["a"])(g.disks))),V}}},X=Z,ee=(n("7faf"),Object(p["a"])(X,r,o,!1,null,null,null)),te=ee.exports,ne=(n("a4ac"),n("5c7d"),n("5c6e")),se=n("34fe"),re=(n("7d6e"),n("1194"),n("b05d")),oe=n("9c40"),ie=n("54e1"),ae=n("58ea"),le=n("0016"),ce=n("27f9"),ue=n("2a19");s["a"].use(re["a"],{config:{},components:{QBtn:oe["a"],QBanner:ie["a"],QCircularProgress:ae["a"],QIcon:le["a"],QInput:ce["a"]},directives:{},plugins:{Notify:ue["a"]},lang:se["a"],iconSet:ne["a"]}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(te)}}).$mount("#app")},"5e11":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="5e11"},"62ad":function(e,t,n){},"6dab":function(e,t,n){},"728d":function(e,t,n){},"79bb":function(e,t,n){},"7b2b":function(e,t,n){},"7f95":function(e,t,n){e.exports=n.p+"media/creation_connection_table.5dc38114.mp3"},"7faf":function(e,t,n){"use strict";var s=n("b8ff"),r=n.n(s);r.a},8216:function(e,t,n){e.exports=n.p+"media/exit.3b4ea243.mp3"},a4ac:function(e,t,n){},aab1:function(e,t,n){"use strict";var s=n("e12a"),r=n.n(s);r.a},b8ff:function(e,t,n){},d42b:function(e,t,n){"use strict";var s=n("728d"),r=n.n(s);r.a},e12a:function(e,t,n){},e2d5:function(e,t){e.exports="data:audio/mpeg;base64,SUQzAwAAAAAAOFRJVDIAAAAQAAAAQm91bmNpbmcgb2JqZWN0VFlFUgAAAAUAAAAyMDE1VERSQwAAAAUAAAAyMDE1//uQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAIKABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP////////////////////////////////8AAAA5TEFNRTMuOTlyAaoAAAAAAAAAABSAJASVRgAAgAAACChAyhs5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQBAAAAlIbyc0NgABGY4k2obAADLCRW5mHgAGWEitzMPAAkAAAAAPLr8ROIiUOBiwhLJ5/Y4EAGhYK4EAodOz+AkExDBoIjjb9mHNMDxyZmnawCHy4fEZ+JxwPvky5/h/l3/yjv5R3P////4fQAAAH/X4icREocDFhCWTz+xwIANCwVwIBQ6dn8BIJiGDQRHG37LHNMDxyZmnaxQ58HxwP1h8Rh+uD/Lv4f/wx/hj////8v0CAAAAAAAAKCAJQ3RiiixA8KOI3W12I/wzWlKwjBFdMNpHaAxiHmAcfsWMkinLrgv2K2Qsfjp+tuJ1K7Gc1UE14nhtz62ceTX38Uj4knmrBrdBMgUMNe2vDCFZ4t+c+/T/o/BUO9AgAAAAAAACggCUN0YoosQNCjiN1tdiP8M1pSsIwRXTDaR2gMYh5gHH7FjJIpy64L9itkLH46frbidSuxnNVBNeJ4bc+tnHk19/FI+JJ5qwa3QTIFDDXtrwwhWeLfnPv0/6PwVDqAKlaAAAKtu6lZtZRlwyfSmTEnPqui7TjxypVcuDYInxW//uSBBCAAxsc0e9owABlJVpN7JgAC+CzP6ywY4F5lif1lgyoVbqg4iClJWpOatrKPYzXObdLzcYkmimQEgPHHnDQGKPoFQJCZkywzUJDTxLuYpnkVt+afe4zofq07onWUByLNY+lQCdsQIACeu/WmdfhohLWS+XU1Oq0lynfmKlVncGxyfFZVuqDiJrU6k5q2covma5zbpebnJJok2y4uobfHvNrxv/+M+mFwXMmWGXqEhp5XcxRHyK29s0+8NmXSo/VpZdrQHos1l6QBV0SAQDLZaVezuLWonUN0oJGYqLg/FQ2ClMfnSQygRvlBTC2lBB6M5sFIGqUGJbNbRKwQwMSCHyLM9Di31IiX2kqkKJ5GbCjSSyRpSD3S8pfMaLUJM6XLbJq+yr3/pANXRIBAMslpY7O4taidTV46CRmKi4PxUNgpTH50kMoEb5QUwtpQQejOcCkDVKDEtmtolYIYGJBD5Fmejxb6lkvtJSIUZU9IGWtzXOYW83OJ3blrcHH5qL1vZ6tnTtVAAUIAAYGDV44FoMsQT6hlNipE3ucK6BlAP/7kgQMgALPJstbaRrwWmTJrGnmDAzUhymMvSGBkBDlsZYYoFQVQpKH0jWNwLCZ8JKHCX0Somt8ZP1nZpN9JtENA2T4AcPgmMSMhN49SbebKvwNe1yEs1q3C3e+1dHRF/Ler9vQCRM0iRL+sGW03RFTQJMwlpRToIv0p0vE6iXshgcodlwcFbFGFI9kaS3zW7Ptt7bRw/L5DW3si1ZFRlfpNNpSaM6TyRdFw59x05QtmlNds73Lb57RZ0OW2tSKgUJCQAhAAHoSEziklygEwIS1HYQtD0Ec71AHOzIxlUh0qJjDzpsgsppvsGulWwZdT/nS+bpZku116qqIfioFOiUTnA+J4Y0KMhgABgLGRVJ5rg08s1A5WT5nob6Xr1soQqd2KbX3Ugw2JECXUlAYoeG013qiyACoQoAOZmwhrRgIZ8PiJoLpY5DSx5BxFj+gO5TbCKmX85X9aKRPS5bduC3hoFOkiYQD4LwQ0TIYAAYeZWnnXgZpoKBKWJoSMBPob6a9bJJCp3YrXxoBSACEMNh6YGCsVUrinpJEVdslUDqxsSX/+5IEDA/yoRZHwwwxQEkCCRlhhhoAAAGkAAAAIAAANIAAAARJxKq0FVUlqo4kv1U5/6okDJUJB0NB0NAqCoLX1g1BrOg0DQNZJQcFTsS1grO/LRFTLHv5L/lss//8SgqBTigSIqCVEQ0HWugRJp6SRFXbJVA6sbMXTiVVoKqpfKok8OkpYGgZWMPBoOgqCoKgtPYdh3aDQNA1klBydlc7//U/+S/4ipV2VUxBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"},e493:function(e,t,n){e.exports=n.p+"media/success.efcd74d2.mp3"},e4dd:function(e,t,n){"use strict";var s=n("6dab"),r=n.n(s);r.a},fdcc:function(e,t,n){e.exports=n.p+"media/failure.94fac8c5.mp3"}});
//# sourceMappingURL=app.ff0f2ec6.js.map
