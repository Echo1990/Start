!function(e){function t(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=d.p+""+e+"."+y+".hot-update.js",t.appendChild(n)}function n(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,n=d.p+""+y+".hot-update.json";t.open("GET",n,!0),t.timeout=1e4,t.send(null)}catch(t){return e(t)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+n+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+n+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(t){return void e(t)}e(null,r)}}}function r(e){function t(e,t){"ready"===O&&s("prepare"),j++,d.e(e,function(){function n(){j--,"prepare"===O&&(R[e]||c(e),0===j&&0===x&&u())}try{t.call(null,r)}finally{n()}})}var n=M[e];if(!n)return d;var r=function(t){return n.hot.active?M[t]?(M[t].parents.indexOf(e)<0&&M[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):_=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),_=[]),d(t)};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&(h?Object.defineProperty(r,a,function(e){return{configurable:!0,enumerable:!0,get:function(){return d[e]},set:function(t){d[e]=t}}}(a)):r[a]=d[a]);return h?Object.defineProperty(r,"e",{enumerable:!0,value:t}):r.e=t,r}function a(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,n){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n;else t._acceptedDependencies[e]=n},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:l,apply:f,status:function(e){return e?void w.push(e):O},addStatusHandler:function(e){w.push(e)},removeStatusHandler:function(e){var t=w.indexOf(e);t>=0&&w.splice(t,1)},data:E[e]};return t}function s(e){O=e;for(var t=0;t<w.length;t++)w[t].call(null,e)}function i(e){var t=+e+""===e;return t?+e:e}function l(e,t){if("idle"!==O)throw new Error("check() is only allowed in idle status");"function"==typeof e?(g=!1,t=e):(g=e,t=t||function(e){if(e)throw e}),s("check"),n(function(e,n){if(e)return t(e);if(!n)return s("idle"),void t(null,null);P={},A={},R={};for(var r=0;r<n.c.length;r++)A[n.c[r]]=!0;b=n.h,s("prepare"),m=t,v={};var a=0;c(a),"prepare"===O&&0===j&&0===x&&u()})}function o(e,t){if(A[e]&&P[e]){P[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0===--x&&0===j&&u()}}function c(e){A[e]?(P[e]=!0,x++,t(e)):R[e]=!0}function u(){s("ready");var e=m;if(m=null,e)if(g)f(g,e);else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(i(n));e(null,t)}}function f(t,n){function r(e){for(var t=[e],n={},r=t.slice();r.length>0;){var s=r.pop(),e=M[s];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+s);if(0===s)return;for(var i=0;i<e.parents.length;i++){var l=e.parents[i],o=M[l];if(o.hot._declinedDependencies[s])return new Error("Aborted because of declined dependency: "+s+" in "+l);t.indexOf(l)>=0||(o.hot._acceptedDependencies[s]?(n[l]||(n[l]=[]),a(n[l],[s])):(delete n[l],t.push(l),r.push(l)))}}}return[t,n]}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==O)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(n=t,t={}):t&&"object"==typeof t?n=n||function(e){if(e)throw e}:(t={},n=n||function(e){if(e)throw e});var l={},o=[],c={};for(var u in v)if(Object.prototype.hasOwnProperty.call(v,u)){var f=i(u),p=r(f);if(!p){if(t.ignoreUnaccepted)continue;return s("abort"),n(new Error("Aborted because "+f+" is not accepted"))}if(p instanceof Error)return s("abort"),n(p);c[f]=v[f],a(o,p[0]);for(var f in p[1])Object.prototype.hasOwnProperty.call(p[1],f)&&(l[f]||(l[f]=[]),a(l[f],p[1][f]))}for(var h=[],m=0;m<o.length;m++){var f=o[m];M[f]&&M[f].hot._selfAccepted&&h.push({module:f,errorHandler:M[f].hot._selfAccepted})}s("dispose");for(var g=o.slice();g.length>0;){var f=g.pop(),w=M[f];if(w){for(var x={},j=w.hot._disposeHandlers,R=0;R<j.length;R++){var P=j[R];P(x)}E[f]=x,w.hot.active=!1,delete M[f];for(var R=0;R<w.children.length;R++){var A=M[w.children[R]];if(A){var k=A.parents.indexOf(f);k>=0&&A.parents.splice(k,1)}}}}for(var f in l)if(Object.prototype.hasOwnProperty.call(l,f))for(var w=M[f],N=l[f],R=0;R<N.length;R++){var S=N[R],k=w.children.indexOf(S);k>=0&&w.children.splice(k,1)}s("apply"),y=b;for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(e[f]=c[f]);var I=null;for(var f in l)if(Object.prototype.hasOwnProperty.call(l,f)){for(var w=M[f],N=l[f],D=[],m=0;m<N.length;m++){var S=N[m],P=w.hot._acceptedDependencies[S];D.indexOf(P)>=0||D.push(P)}for(var m=0;m<D.length;m++){var P=D[m];try{P(l)}catch(e){I||(I=e)}}}for(var m=0;m<h.length;m++){var H=h[m],f=H.module;_=[f];try{d(f)}catch(e){if("function"==typeof H.errorHandler)try{H.errorHandler(e)}catch(e){I||(I=e)}else I||(I=e)}}return I?(s("fail"),n(I)):(s("idle"),void n(null,o))}function d(t){if(M[t])return M[t].exports;var n=M[t]={exports:{},id:t,loaded:!1,hot:a(t),parents:_,children:[]};return e[t].call(n.exports,n,n.exports,r(t)),n.loaded=!0,n.exports}var p=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){o(e,t),p&&p(e,t)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(e){}var m,v,b,g=!0,y="5d5658c4db3b1bbf288e",E={},_=[],w=[],O="idle",x=0,j=0,R={},P={},A={},M={};return d.m=e,d.c=M,d.p="/dist/",d.h=function(){return y},r(0)(0)}([function(e,t,n){e.exports=n(10)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={fromElevenBeans:[{id:1e3,details:["Hello 老铁，很高兴你能来看看，随便聊会儿天呗！IPhoneX 你感觉如何？"],responses:[{content:"很好！买买买！",nextElevenbeans:[2e3]},{content:"还行吧，就是买不起 …",nextElevenbeans:[2001]},{content:"没感觉哎 ...",nextElevenbeans:[2002]}]},{id:2e3,details:["牛掰！真有财！！！","我也买了，哈哈哈哈哈 ～"],responses:[{content:"不会吧？！烦恼？什么？",nextElevenbeans:[3e3]},{content:"算了，要不说点别的 ？",nextElevenbeans:[2002]}],hasMore:2e4},{id:2e4,details:["你能猜猜，目前 IPhoneX 带给我最大的烦恼是什么不？"],responses:[{content:"不会吧？！烦恼？什么？",nextElevenbeans:[3e3]},{content:"算了，要不说点别的 ？",nextElevenbeans:[2002]}]},{id:2001,details:["可是我买了！哈哈哈哈哈！！！","不过，IponeX 带给我可多烦恼了 ..."],responses:[{content:"不会吧？！烦恼？什么？",nextElevenbeans:[3e3]},{content:"自食其果呵呵哒 …",nextElevenbeans:[3001]}]},{id:2002,details:["那好吧，你还有什么想问我的么亲 =,="]},{id:3e3,details:["前端适配啊！！！","哦，忘记说了, 我是个写网页的 ..."]},{id:3001,details:["聊不下去了。。。"]},{id:4e3,details:["这个是我负责的航班动态: ",'<a href="https://english.ctrip.com/flightsh5/status/" target="_blank">https://english.ctrip.com/flightsh5/status/</a>',"这个是我们团队的 Web APP: ",'<a href="https://english.ctrip.com/m/flights/" target="_blank">https://english.ctrip.com/m/flights/</a>',"<br />职业，显而易见了吧？"]},{id:4001,details:['<img src = "./src/img/luban.jpeg" />'],hasMore:40010},{id:40010,details:["切你们绕行，见识新发明的威力!"],hasMore:40011},{id:40011,details:["正在思考，如何攻克地心引力 ..."]},{id:4002,details:["这个是我的🐱：Jaber",'<img src = "./src/img/jaber0.jpeg" />'],hasMore:40020},{id:40020,details:['<img src = "./src/img/jaber1.jpeg" />'],hasMore:40021},{id:40021,details:["怎么样!!! 可爱吧！还有一只: Rocker !!!"],hasMore:40022},{id:40022,details:['<img src = "./src/img/rocker0.jpeg" />'],hasMore:40023},{id:40023,details:["图发多了哈。。不好意思，提起 TA 们我就忍不住哈哈 ～"]},{id:4003,details:["那好吧，谢谢跟我说这么多 ～"]}],fromUser:[{id:9e3,brief:"职业",content:"聊聊你工作吧",nextElevenbeans:4e3},{id:9001,brief:"爱好",content:"业余时间都做什么呀？",nextElevenbeans:4001},{id:9002,brief:"福利放送",content:"求高清无码大图！",nextElevenbeans:4002},{id:9003,brief:"Bye bye",content:"有事先走了～",nextElevenbeans:4003}]}},function(e,t){e.exports=window.React},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),s=r(a);n(3);var i=function(e){return React.createElement("div",{className:"app-lialog"},e.messageArr.map(function(e){return React.createElement("div",null,React.createElement("div",{className:e.isUser?"msg-in-right":"msg-in-left",style:{transform:e.text?"scale(1)":"scale(0.95)"}},React.createElement("div",{className:"item",dangerouslySetInnerHTML:{__html:e.text?e.text:s.default}}),React.createElement("div",{className:"pointer"})))}))};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return React.createElement("header",null,React.createElement("div",{className:"app-link"},React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{target:"_blank",href:"http://elevenbeans.github.io/"},"博客")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"https://github.com/elevenBeans/Grocery/raw/master/李斌简历_update.pdf"},"简历")))),React.createElement("div",{className:"app-social"},React.createElement("ul",null,React.createElement("li",{className:"gmail"},React.createElement("a",{target:"_blank",href:"mailto:elevenbeansf2e@gmail.com"})),React.createElement("li",{className:"github"},React.createElement("a",{target:"_blank",href:"https://github.com/elevenbeans"})),React.createElement("li",{className:"juejin"},React.createElement("a",{target:"_blank",href:"https://juejin.im/user/587fce9361ff4b006522519e"})),React.createElement("li",{className:"zhihu"},React.createElement("a",{target:"_blank",href:"https://www.zhihu.com/people/shi-yike-dou-zi/activities"})))))};t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),c=r(o),u=n(1),f=(r(u),function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.closeInputPannel=function(){n.props.closeInputPannel()},n.selectResponce=function(e,t){n.props.selectResponce(e,t)},n}return i(t,e),l(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"app-input-pannel",onClick:this.closeInputPannel},c.default.createElement("div",{className:"app-input-bar"},"请输入 ...",c.default.createElement("div",{className:"app-input-button"},c.default.createElement("div",{className:"input-arrow"}))),c.default.createElement("div",{className:"app-input-options"},c.default.createElement("ul",null,this.props.pannelArr.map(function(t,n){return c.default.createElement("li",{key:n,onClick:function(){return e.selectResponce(t.nextElevenbeans,n)},id:t.nextElevenbeans},t.content)}))))}}]),t}(o.Component));t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(5);var r='\n\t<div\n\t\tclass=\'uil-ellipsis-css\'\n\t\tstyle="transform:scale(0.1); margin:0 auto"\n\t>\n\t \t<div class="ib">\n\t \t\t<div class="circle">\n\t \t\t\t<div></div>\n\t \t\t</div>\n\t \t\t<div class="circle">\n\t \t\t\t<div>\n\t \t\t\t</div>\n\t \t\t</div>\n\t \t\t<div class="circle">\n\t \t\t\t<div></div>\n\t \t\t</div>\n\t \t\t<div class="circle">\n\t \t\t\t<div></div>\n\t \t\t</div>\n\t \t</div>\n\t</div>\n';t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),u=r(c),f=n(11),d=r(f),p=n(6),h=r(p),m=n(7),v=r(m),b=n(8),g=r(b),y=n(1),E=r(y);n(4);var _=function(e){function t(e){s(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.initMessage()},n.getRandomWaitingSec=function(){return 1e3*Math.floor(4*Math.random()+1)},n.initMessage=function(){n.setState({messageArr:[{isUser:!1,text:""}],pannelArr:E.default.fromUser},function(){setTimeout(function(){return n.getFirstMessage(1e3)},n.getRandomWaitingSec())})},n.getFirstMessage=function(e){n.setState({messageArr:[{isUser:!1,text:n.findSentence(e).details.join("")}],pannelArr:n.findSentence(e).responses||E.default.fromUser,status:"请输入 ...",inputDisabled:!1})},n.selectResponce=function(e,t,r){var s={isUser:!1,text:""},i={isUser:!1,text:n.findSentence(e).details.join("")},l={isUser:!0,text:[n.findSentence(n.state.preId).responses?n.findSentence(n.state.preId).responses[t].content:E.default.fromUser[t].content]},o=[];r?o=[].concat(a(n.state.messageArr),[s]):(o=[].concat(a(n.state.messageArr),[l,s]),n.setState({messageArr:[].concat(a(n.state.messageArr),[l])})),setTimeout(function(){n.setState({messageArr:o,preId:e,status:"对方正在输入 ...",inputDisabled:!0},function(){n.scrollBottom(),setTimeout(function(){return n.getRestMessage(e,t,i,l)},n.getRandomWaitingSec())})},1e3)},n.getRestMessage=function(e,t,r,s){n.state.messageArr.pop(),n.setState({messageArr:[].concat(a(n.state.messageArr),[r]),pannelArr:n.findSentence(e).responses||E.default.fromUser,preId:e,status:"请输入 ...",inputDisabled:!1},function(){n.scrollBottom(),n.findSentence(e).hasMore&&n.selectResponce(n.findSentence(e).hasMore,t,!0)})},n.findSentence=function(e){return E.default.fromElevenBeans.find(function(t){return t.id==e})},n.showInputPannel=function(){n.state.inputDisabled||n.setState({inputPannelOn:!0})},n.closeInputPannel=function(){n.setState({inputPannelOn:!1})},n.state={inputPannelOn:!1,messageArr:[],pannelArr:[],preId:1e3,status:"对方正在输入 ...",inputDisabled:!0},n}return l(t,e),o(t,[{key:"scrollBottom",value:function(){var e=document.getElementById("J_scroll");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){return u.default.createElement("div",{className:"app-wrapper"},u.default.createElement(v.default,null),u.default.createElement("div",{className:"app-phone"},u.default.createElement("div",{className:"phone-wrapper"},this.state.inputPannelOn&&u.default.createElement("div",null,u.default.createElement("div",{className:"app-mask"}),u.default.createElement(g.default,{closeInputPannel:this.closeInputPannel,selectResponce:this.selectResponce,pannelArr:this.state.pannelArr,preId:this.state.preId})),u.default.createElement("div",{className:"app-message"},u.default.createElement("div",{className:"message-padding"}),u.default.createElement("div",{className:"message-content",id:"J_scroll"},u.default.createElement(h.default,{messageArr:this.state.messageArr}))),!this.state.inputPannelOn&&u.default.createElement("div",{className:"app-input-bar",onClick:this.showInputPannel},this.state.status,u.default.createElement("div",{className:"app-input-button"},u.default.createElement("div",{className:"input-arrow"}))))),u.default.createElement("footer",null,"Elevenbeans' site. Inspired by ",u.default.createElement("a",{href:"https://github.com/Ovilia",target:"_blank"},"Ovilia")))}}]),t}(c.Component);d.default.render(u.default.createElement(_,null),document.getElementById("app"))},function(e,t){e.exports=window.ReactDOM}]);