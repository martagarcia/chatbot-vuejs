(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],f=0,p=[];f<o.length;f++)s=o[f],a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00b7":function(e,t,n){},3791:function(e,t,n){},"5c48":function(e,t,n){},"659a":function(e,t,n){"use strict";var r=n("00b7"),a=n.n(r);a.a},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},8979:function(e,t,n){"use strict";var r=n("3791"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],s=n("d225"),o=n("308d"),u=n("6bb5"),c=n("4e2b"),l=n("9ab4"),f=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-info"},[n("h3",[e._v(e._s(e.title))]),n("p",[e._v("\n    Here, you can talk to YodaBot, an intelligent Bot who has learned to talk like Yoda.\n  ")])])},h=[],v=function(e){function t(){return Object(s["a"])(this,t),Object(o["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(f["c"]);l["a"]([Object(f["b"])()],v.prototype,"title",void 0),v=l["a"]([f["a"]],v);var d=v,g=d,b=(n("659a"),n("2877")),m=Object(b["a"])(g,p,h,!1,null,"7f5ee025",null),y=m.exports,w=function(e){function t(){return Object(s["a"])(this,t),Object(o["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(f["c"]);w=l["a"]([Object(f["a"])({components:{TitleInfo:y}})],w);var j=w,_=j,k=(n("7c55"),Object(b["a"])(_,a,i,!1,null,null,null)),O=k.exports,x=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TitleInfo",{attrs:{title:"YodaBot"}}),n("div",{staticClass:"conversation-container"},[n("div",{attrs:{id:"conversation"}},[e.messages.length>0?n("ul",e._l(e.messages,function(t){return n("li",["answer"==t.type?n("span",[n("label",{staticClass:"bold yoda"},[e._v("YodaBot: ")]),e._v(e._s(t.message)+" \n          ")]):n("span",[n("label",{staticClass:"bold"},[e._v("Me: ")]),e._v(e._s(t.message)+" ")])])}),0):e._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isWriting,expression:"isWriting"}],staticClass:"writing-msg",attrs:{id:"is-writing-msg"}},[e._v(" YodaBot is writing... ")]),n("form",{attrs:{id:"form-line"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question"}],staticClass:"input text-form",attrs:{placeholder:"type something, young padawan...",disabled:e.isWriting},domProps:{value:e.question},on:{input:function(t){t.target.composing||(e.question=t.target.value)}}}),n("input",{staticClass:"input btn-form",attrs:{type:"submit",value:"Send!",disabled:e.isWriting||""==e.question}})])])],1)},R=[],A=(n("3846"),n("7f7f"),n("5d73")),I=n.n(A),S=(n("6762"),n("2fdb"),n("96cf"),n("3b8d")),C=n("b0b4"),P=n("cebc"),q=n("bc3a"),W=n.n(q),Y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(s["a"])(this,e),this.accessToken=t,this.expiration=n,this.accessUrl=r},E={API_AUTH:"https://api.inbenta.io/v1/auth",API_URL:"https://api.inbenta.io/v1/apis",API_KEY:"nyUl7wzXoKtgoHnd2fB0uRrAv0dDyLC+b4Y6xngpJDY=",SECRET:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0IjoieW9kYV9jaGF0Ym90X2VuIn0.anf_eerFhoNq6J8b36_qbD4VqngX79-yyBKWih_eA1-HyaMe2skiJXkRNpyWxpjmpySYWzPGncwvlwz5ZRE7eg"},U=E,B="data",M="chatbot",J=function(){function e(){Object(s["a"])(this,e)}return Object(C["a"])(e,[{key:"getAccessToken",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={"x-inbenta-key":U.API_KEY,"Content-Type":"application/json"},n={secret:U.SECRET},e.next=4,W.a.post(U.API_AUTH,n,{headers:t});case 4:return r=e.sent,a=new Y,a.accessToken=String(r[B].accessToken),a.expiration=String(r[B].expiration),e.next=10,this.getApiUrl(a.accessToken);case 10:return a.accessUrl=e.sent,e.abrupt("return",a);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getApiUrl",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={"x-inbenta-key":U.API_KEY,Authorization:"Bearer "+String(t)},e.next=3,W.a.get(U.API_URL,{headers:n});case 3:return r=e.sent,a=String(r[B].apis[M])+"/v1/conversation",e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSessionToken",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={"x-inbenta-key":U.API_KEY,Authorization:"Bearer "+String(n)},e.next=3,W.a.post(t,"",{headers:r});case 3:return a=e.sent,i=String(a[B].sessionToken),e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),N=new J,z=function(){function e(){var t=this;Object(s["a"])(this,e),this.conversation={get:function(){var e="conversation";return t._get(e)},sendMessage:function(e){var n="/message";return t._post(n,{message:e})}},this._setDefaultsHeaders()}return Object(C["a"])(e,[{key:"_setDefaultsHeaders",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.getAccessToken();case 2:return t=e.sent,e.next=5,N.getSessionToken(t.accessUrl,t.accessToken);case 5:n=e.sent,r={"x-inbenta-key":U.API_KEY,Authorization:"Bearer "+t.accessToken,"x-inbenta-session":"Bearer "+n,"Content-Type":"application/json"},this.options={headers:r},W.a.defaults.baseURL=t.accessUrl;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"_get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(P["a"])({},this.options),r="params";return n[r]=t,W.a.get(e,n).then(function(e){return e.data})}},{key:"_post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W.a.post(e,t,this.options).then(function(e){return e.data})}},{key:"_put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W.a.put(e,t,this.options).then(function(e){return e.data})}},{key:"_delete",value:function(e){return W.a.delete(e,this.options).then(function(e){return e.data})}}]),e}(),H=new z,K="https://swapi.co/api/",D=function(){function e(){var t=this;Object(s["a"])(this,e),this.films={get:function(){var e="films/";return t._get(e)}},this.people={get:function(){var e="people/";return t._get(e)}}}return Object(C["a"])(e,[{key:"_get",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return W.a.get(K+e).then(function(e){return e.data})}}]),e}(),F=new D,X=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(s["a"])(this,e),this.message=t,this.flags=n,this.type=r},L="answers",V=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(o["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isWriting=!1,e.question="",e.messages=[],e}return Object(c["a"])(t,e),Object(C["a"])(t,[{key:"submit",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isWriting=!0,this.messages.push(new X(this.question,"-","question")),this.question.includes("force")?this.getMovies():this.sendMessage(this.question),this.question="";case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getMovies",value:function(){var e=this;F.films.get().then(function(t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=I()(t["results"]);!(r=(s=o.next()).done);r=!0){var u=s.value;n.push(u.title)}}catch(l){a=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}var c="The force is in this movies: "+n.join(", ");e.messages.push(new X(c,"-","answer")),e.isWriting=!1}).catch(function(e){console.log(e)})}},{key:"getRandomCharacters",value:function(){var e=this;F.people.get().then(function(t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=I()(t["results"]);!(r=(s=o.next()).done);r=!0){var u=s.value;n.push(u.name)}}catch(l){a=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}var c="I have not found any results. But here there is a list of some Star Wars characters: "+n.join(", ");e.messages.push(new X(c,"-","answer")),e.isWriting=!1}).catch(function(e){console.log(e)})}},{key:"sendMessage",value:function(e){var t=this;H.conversation.sendMessage(e).then(function(e){var n=e[L][0],r=n;t.validateConsecutives(r)?t.getRandomCharacters():(t.messages.push(r),t.isWriting=!1)}).catch(function(e){console.log(e)})}},{key:"validateConsecutives",value:function(e){if(this.messages.length>=2){var t=this.messages[this.messages.length-2];if("no-results"==e.flags[0]&&"no-results"==t.flags[0])return!0}return!1}}]),t}(f["c"]);V=l["a"]([Object(f["a"])({components:{TitleInfo:y}})],V);var $=V,G=$,Z=(n("8979"),Object(b["a"])(G,T,R,!1,null,"3308c62e",null)),Q=Z.exports;r["default"].use(x["a"]);var ee=new x["a"]({routes:[{path:"/",name:"home",component:Q}]}),te=n("2f62");r["default"].use(te["a"]);var ne=new te["a"].Store({state:{numNotFound:0},mutations:{increment:function(e){e.numNotFound++},reset:function(e){e.numNotFound=0}},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:ee,store:ne,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.ad7406fb.js.map