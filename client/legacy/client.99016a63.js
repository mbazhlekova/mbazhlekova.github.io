function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return c(null==n&&e.path)}},e.exports),e.exports}function u(t){return t&&t.default||t}function c(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var s=i((function(n){var e=function(n){var e,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof y?n:y,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,n,e){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=L(i,e);if(u){if(u===m)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===p)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=v;var c=l(t,n,e);if("normal"===c.type){if(r=e.done?d:h,c.arg===m)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=d,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var w={};w[i]=function(){return this};var $=Object.getPrototypeOf,_=$&&$($(k([])));_&&_!==r&&o.call(_,i)&&(w=_);var x=b.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function S(n,e){var r;this._invoke=function(a,i){function u(){return new e((function(r,u){!function r(a,i,u,c){var s=l(n[a],n,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(p).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}(a,i,r,u)}))}return r=r?r.then(u,u):u()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function R(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=s(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},n.AsyncIterator=S,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new S(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),s(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},n}(n.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function f(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){f(a,r,o,i,u,"next",t)}function u(t){f(a,r,o,i,u,"throw",t)}i(void 0)}))}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,n){return(h=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function v(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&h(t,n)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?d(n):e}function y(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function b(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,n,e){return n&&b(t.prototype,n),e&&b(t,e),t}function $(){}var _=function(t){return t};function x(t,n){for(var e in n)t[e]=n[e];return t}function E(t){return t()}function S(){return Object.create(null)}function L(t){t.forEach(E)}function R(t){return"function"==typeof t}function P(n,e){return n!=n?e==e:n!==e||n&&"object"===t(n)||"function"==typeof n}function j(t,n,e,r){if(t){var o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?x(e.ctx.slice(),t[1](r(n))):e.ctx}function O(n,e,r,o,a,i,u){var c=function(n,e,r,o){if(n[2]&&o){var a=n[2](o(r));if(void 0===e.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(e.dirty.length,a.length),c=0;c<u;c+=1)i[c]=e.dirty[c]|a[c];return i}return e.dirty|a}return e.dirty}(e,o,a,i);if(c){var s=k(e,r,o,u);n.p(s,c)}}function A(t){return null==t?"":t}var C="undefined"!=typeof window,N=C?function(){return window.performance.now()}:function(){return Date.now()},D=C?function(t){return requestAnimationFrame(t)}:$,q=new Set;function I(t){q.forEach((function(n){n.c(t)||(q.delete(n),n.f())})),0!==q.size&&D(I)}function T(t){var n;return 0===q.size&&D(I),{promise:new Promise((function(e){q.add(n={c:t,f:e})})),abort:function(){q.delete(n)}}}function U(t,n){t.appendChild(n)}function G(t,n,e){t.insertBefore(n,e||null)}function F(t){t.parentNode.removeChild(t)}function H(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function J(){return B(" ")}function V(){return B("")}function Y(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function K(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function W(t){return Array.from(t.childNodes)}function X(t,n,e,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===n){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];e[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)a.removeAttribute(u[s]);return t.splice(o,1)[0]}}return r?z(n):M(n)}function Q(t,n){for(var e=0;e<t.length;e+=1){var r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return B(n)}function Z(t){return Q(t," ")}function tt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function nt(t,n){t.value=null==n?"":n}function et(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(n.querySelectorAll(t))}var rt,ot=new Set,at=0;function it(t){for(var n=5381,e=t.length;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function ut(t,n,e,r,o,a,i){for(var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c=16.666/r,s="{\n",f=0;f<=1;f+=c){var l=n+(e-n)*a(f);s+=100*f+"%{".concat(i(l,1-l),"}\n")}var p=s+"100% {".concat(i(e,1-e),"}\n}"),h="__svelte_".concat(it(p),"_").concat(u),v=t.ownerDocument;ot.add(v);var d=v.__svelte_stylesheet||(v.__svelte_stylesheet=v.head.appendChild(M("style")).sheet),m=v.__svelte_rules||(v.__svelte_rules={});m[h]||(m[h]=!0,d.insertRule("@keyframes ".concat(h," ").concat(p),d.cssRules.length));var y=t.style.animation||"";return t.style.animation="".concat(y?"".concat(y,", "):"").concat(h," ").concat(r,"ms linear ").concat(o,"ms 1 both"),at+=1,h}function ct(t,n){var e=(t.style.animation||"").split(", "),r=e.filter(n?function(t){return t.indexOf(n)<0}:function(t){return-1===t.indexOf("__svelte")}),o=e.length-r.length;o&&(t.style.animation=r.join(", "),(at-=o)||D((function(){at||(ot.forEach((function(t){for(var n=t.__svelte_stylesheet,e=n.cssRules.length;e--;)n.deleteRule(e);t.__svelte_rules={}})),ot.clear())})))}function st(t){rt=t}function ft(){if(!rt)throw new Error("Function called outside component initialization");return rt}function lt(t){ft().$$.on_mount.push(t)}function pt(t){ft().$$.on_destroy.push(t)}function ht(t,n){var e=t.$$.callbacks[n.type];e&&e.slice().forEach((function(t){return t(n)}))}var vt=[],dt=[],mt=[],yt=[],gt=Promise.resolve(),bt=!1;function wt(){bt||(bt=!0,gt.then(Lt))}function $t(){return wt(),gt}function _t(t){mt.push(t)}var xt,Et=!1,St=new Set;function Lt(){if(!Et){Et=!0;do{for(var t=0;t<vt.length;t+=1){var n=vt[t];st(n),Rt(n.$$)}for(vt.length=0;dt.length;)dt.pop()();for(var e=0;e<mt.length;e+=1){var r=mt[e];St.has(r)||(St.add(r),r())}mt.length=0}while(vt.length);for(;yt.length;)yt.pop()();bt=!1,Et=!1,St.clear()}}function Rt(t){if(null!==t.fragment){t.update(),L(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_t)}}function Pt(){return xt||(xt=Promise.resolve()).then((function(){xt=null})),xt}function jt(t,n,e){var r,o,a;t.dispatchEvent((r="".concat(n?"intro":"outro").concat(e),(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,o),a))}var kt,Ot=new Set;function At(){kt={r:0,c:[],p:kt}}function Ct(){kt.r||L(kt.c),kt=kt.p}function Nt(t,n){t&&t.i&&(Ot.delete(t),t.i(n))}function Dt(t,n,e,r){if(t&&t.o){if(Ot.has(t))return;Ot.add(t),kt.c.push((function(){Ot.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}var qt={duration:0};function It(t,n,e){var r,o,a=n(t,e),i=!1,u=0;function c(){r&&ct(t,r)}function s(){var n=a||qt,e=n.delay,s=void 0===e?0:e,f=n.duration,l=void 0===f?300:f,p=n.easing,h=void 0===p?_:p,v=n.tick,d=void 0===v?$:v,m=n.css;m&&(r=ut(t,0,1,l,s,h,m,u++)),d(0,1);var y=N()+s,g=y+l;o&&o.abort(),i=!0,_t((function(){return jt(t,!0,"start")})),o=T((function(n){if(i){if(n>=g)return d(1,0),jt(t,!0,"end"),c(),i=!1;if(n>=y){var e=h((n-y)/l);d(e,1-e)}}return i}))}var f=!1;return{start:function(){f||(ct(t),R(a)?(a=a(),Pt().then(s)):s())},invalidate:function(){f=!1},end:function(){i&&(c(),i=!1)}}}function Tt(t,n,e){var r,o=n(t,e),a=!0,i=kt;function u(){var n=o||qt,e=n.delay,u=void 0===e?0:e,c=n.duration,s=void 0===c?300:c,f=n.easing,l=void 0===f?_:f,p=n.tick,h=void 0===p?$:p,v=n.css;v&&(r=ut(t,1,0,s,u,l,v));var d=N()+u,m=d+s;_t((function(){return jt(t,!1,"start")})),T((function(n){if(a){if(n>=m)return h(0,1),jt(t,!1,"end"),--i.r||L(i.c),!1;if(n>=d){var e=l((n-d)/s);h(1-e,e)}}return a}))}return i.r+=1,R(o)?Pt().then((function(){o=o(),u()})):u(),{end:function(n){n&&o.tick&&o.tick(1,0),a&&(r&&ct(t,r),a=!1)}}}function Ut(t,n){for(var e={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=n[a];if(u){for(var c in i)c in u||(r[c]=1);for(var s in u)o[s]||(e[s]=u[s],o[s]=1);t[a]=u}else for(var f in i)o[f]=1}for(var l in r)l in e||(e[l]=void 0);return e}function Gt(n){return"object"===t(n)&&null!==n?n:{}}function Ft(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function Mt(t,n,e){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(n,e),_t((function(){var n=a.map(E).filter(R);i?i.push.apply(i,y(n)):L(n),t.$$.on_mount=[]})),u.forEach(_t)}function zt(t,n){var e=t.$$;null!==e.fragment&&(L(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Bt(t,n){-1===t.$$.dirty[0]&&(vt.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Jt(t,n,e,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=rt;st(t);var c=n.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:$,not_equal:o,bound:S(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:S(),dirty:i},f=!1;if(s.ctx=e?e(t,c,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return s.ctx&&o(s.ctx[n],s.ctx[n]=r)&&(s.bound[n]&&s.bound[n](r),f&&Bt(t,n)),e})):[],s.update(),f=!0,L(s.before_update),s.fragment=!!r&&r(s.ctx),n.target){if(n.hydrate){var l=W(n.target);s.fragment&&s.fragment.l(l),l.forEach(F)}else s.fragment&&s.fragment.c();n.intro&&Nt(t.$$.fragment),Mt(t,n.target,n.anchor),Lt()}st(u)}var Vt=function(){function t(){g(this,t)}return w(t,[{key:"$destroy",value:function(){zt(this,1),this.$destroy=$}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),Yt=[];function Kt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,r=[];function o(e){if(P(t,e)&&(t=e,n)){for(var o=!Yt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),Yt.push(i,t)}if(o){for(var u=0;u<Yt.length;u+=2)Yt[u][0](Yt[u+1]);Yt.length=0}}}function a(n){o(n(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,u=[a,i];return r.push(u),1===r.length&&(n=e(o)||$),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:a,subscribe:i}}var Wt={},Xt=function(){return{}};function Qt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return m(this,e)}}function Zt(t){var n,e,o,a,i,u,c,s,f,l,p,h,v,d,m,y;return{c:function(){n=M("nav"),e=M("ul"),o=M("li"),a=M("a"),i=B("home"),c=J(),s=M("li"),f=M("a"),l=B("about"),h=J(),v=M("li"),d=M("a"),m=B("blog"),this.h()},l:function(t){var r=W(n=X(t,"NAV",{class:!0})),u=W(e=X(r,"UL",{class:!0})),p=W(o=X(u,"LI",{class:!0})),y=W(a=X(p,"A",{"aria-current":!0,href:!0,class:!0}));i=Q(y,"home"),y.forEach(F),p.forEach(F),c=Z(u);var g=W(s=X(u,"LI",{class:!0})),b=W(f=X(g,"A",{"aria-current":!0,href:!0,class:!0}));l=Q(b,"about"),b.forEach(F),g.forEach(F),h=Z(u);var w=W(v=X(u,"LI",{class:!0})),$=W(d=X(w,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));m=Q($,"blog"),$.forEach(F),w.forEach(F),u.forEach(F),r.forEach(F),this.h()},h:function(){K(a,"aria-current",u=void 0===t[0]?"page":void 0),K(a,"href","."),K(a,"class","svelte-o7nrbl"),K(o,"class","svelte-o7nrbl"),K(f,"aria-current",p="about"===t[0]?"page":void 0),K(f,"href","about"),K(f,"class","svelte-o7nrbl"),K(s,"class","svelte-o7nrbl"),K(d,"rel","prefetch"),K(d,"aria-current",y="blog"===t[0]?"page":void 0),K(d,"href","blog"),K(d,"class","svelte-o7nrbl"),K(v,"class","svelte-o7nrbl"),K(e,"class","svelte-o7nrbl"),K(n,"class","svelte-o7nrbl")},m:function(t,r){G(t,n,r),U(n,e),U(e,o),U(o,a),U(a,i),U(e,c),U(e,s),U(s,f),U(f,l),U(e,h),U(e,v),U(v,d),U(d,m)},p:function(t,n){var e=r(n,1)[0];1&e&&u!==(u=void 0===t[0]?"page":void 0)&&K(a,"aria-current",u),1&e&&p!==(p="about"===t[0]?"page":void 0)&&K(f,"aria-current",p),1&e&&y!==(y="blog"===t[0]?"page":void 0)&&K(d,"aria-current",y)},i:$,o:$,d:function(t){t&&F(n)}}}function tn(t,n,e){var r=n.segment;return t.$set=function(t){"segment"in t&&e(0,r=t.segment)},[r]}var nn=function(t){v(e,Vt);var n=Qt(e);function e(t){var r;return g(this,e),Jt(d(r=n.call(this)),t,tn,Zt,P,{segment:0}),r}return e}();function en(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return m(this,e)}}function rn(t){var n,e,o,a;n=new nn({props:{segment:t[0]}});var i=t[2].default,u=j(i,t,t[1],null);return{c:function(){Ft(n.$$.fragment),e=J(),o=M("main"),u&&u.c(),this.h()},l:function(t){Ht(n.$$.fragment,t),e=Z(t);var r=W(o=X(t,"MAIN",{class:!0}));u&&u.l(r),r.forEach(F),this.h()},h:function(){K(o,"class","svelte-cuizgm")},m:function(t,r){Mt(n,t,r),G(t,e,r),G(t,o,r),u&&u.m(o,null),a=!0},p:function(t,e){var o=r(e,1)[0],a={};1&o&&(a.segment=t[0]),n.$set(a),u&&u.p&&2&o&&O(u,i,t,t[1],o,null,null)},i:function(t){a||(Nt(n.$$.fragment,t),Nt(u,t),a=!0)},o:function(t){Dt(n.$$.fragment,t),Dt(u,t),a=!1},d:function(t){zt(n,t),t&&F(e),t&&F(o),u&&u.d(t)}}}function on(t,n,e){var r=n.segment,o=n.$$slots,a=void 0===o?{}:o,i=n.$$scope;return t.$set=function(t){"segment"in t&&e(0,r=t.segment),"$$scope"in t&&e(1,i=t.$$scope)},[r,i,a]}var an=function(t){v(e,Vt);var n=en(e);function e(t){var r;return g(this,e),Jt(d(r=n.call(this)),t,on,rn,P,{segment:0}),r}return e}();function un(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return m(this,e)}}function cn(t){var n,e,r=t[1].stack+"";return{c:function(){n=M("pre"),e=B(r)},l:function(t){var o=W(n=X(t,"PRE",{}));e=Q(o,r),o.forEach(F)},m:function(t,r){G(t,n,r),U(n,e)},p:function(t,n){2&n&&r!==(r=t[1].stack+"")&&tt(e,r)},d:function(t){t&&F(n)}}}function sn(t){var n,e,o,a,i,u,c,s,f,l=t[1].message+"";document.title=n=t[0];var p=t[2]&&t[1].stack&&cn(t);return{c:function(){e=J(),o=M("h1"),a=B(t[0]),i=J(),u=M("p"),c=B(l),s=J(),p&&p.c(),f=V(),this.h()},l:function(n){et('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(F),e=Z(n);var r=W(o=X(n,"H1",{class:!0}));a=Q(r,t[0]),r.forEach(F),i=Z(n);var h=W(u=X(n,"P",{class:!0}));c=Q(h,l),h.forEach(F),s=Z(n),p&&p.l(n),f=V(),this.h()},h:function(){K(o,"class","svelte-8od9u6"),K(u,"class","svelte-8od9u6")},m:function(t,n){G(t,e,n),G(t,o,n),U(o,a),G(t,i,n),G(t,u,n),U(u,c),G(t,s,n),p&&p.m(t,n),G(t,f,n)},p:function(t,e){var o=r(e,1)[0];1&o&&n!==(n=t[0])&&(document.title=n),1&o&&tt(a,t[0]),2&o&&l!==(l=t[1].message+"")&&tt(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=cn(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:$,o:$,d:function(t){t&&F(e),t&&F(o),t&&F(i),t&&F(u),t&&F(s),p&&p.d(t),t&&F(f)}}}function fn(t,n,e){var r=n.status,o=n.error;return t.$set=function(t){"status"in t&&e(0,r=t.status),"error"in t&&e(1,o=t.error)},[r,o,false]}var ln=function(t){v(e,Vt);var n=un(e);function e(t){var r;return g(this,e),Jt(d(r=n.call(this)),t,fn,sn,P,{status:0,error:1}),r}return e}();function pn(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return m(this,e)}}function hn(t){var n,e,r,o=[t[4].props],a=t[4].component;function i(t){for(var n={},e=0;e<o.length;e+=1)n=x(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c:function(){n&&Ft(n.$$.fragment),e=V()},l:function(t){n&&Ht(n.$$.fragment,t),e=V()},m:function(t,o){n&&Mt(n,t,o),G(t,e,o),r=!0},p:function(t,r){var u=16&r?Ut(o,[Gt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){At();var c=n;Dt(c.$$.fragment,1,0,(function(){zt(c,1)})),Ct()}a?(Ft((n=new a(i())).$$.fragment),Nt(n.$$.fragment,1),Mt(n,e.parentNode,e)):n=null}else a&&n.$set(u)},i:function(t){r||(n&&Nt(n.$$.fragment,t),r=!0)},o:function(t){n&&Dt(n.$$.fragment,t),r=!1},d:function(t){t&&F(e),n&&zt(n,t)}}}function vn(t){var n,e;return n=new ln({props:{error:t[0],status:t[1]}}),{c:function(){Ft(n.$$.fragment)},l:function(t){Ht(n.$$.fragment,t)},m:function(t,r){Mt(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(Nt(n.$$.fragment,t),e=!0)},o:function(t){Dt(n.$$.fragment,t),e=!1},d:function(t){zt(n,t)}}}function dn(t){var n,e,r,o,a=[vn,hn],i=[];function u(t,n){return t[0]?0:1}return n=u(t),e=i[n]=a[n](t),{c:function(){e.c(),r=V()},l:function(t){e.l(t),r=V()},m:function(t,e){i[n].m(t,e),G(t,r,e),o=!0},p:function(t,o){var c=n;(n=u(t))===c?i[n].p(t,o):(At(),Dt(i[c],1,1,(function(){i[c]=null})),Ct(),(e=i[n])||(e=i[n]=a[n](t)).c(),Nt(e,1),e.m(r.parentNode,r))},i:function(t){o||(Nt(e),o=!0)},o:function(t){Dt(e),o=!1},d:function(t){i[n].d(t),t&&F(r)}}}function mn(t){for(var n,e,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[dn]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=x(a,o[i]);return n=new an({props:a}),{c:function(){Ft(n.$$.fragment)},l:function(t){Ht(n.$$.fragment,t)},m:function(t,r){Mt(n,t,r),e=!0},p:function(t,e){var a=r(e,1)[0],i=12&a?Ut(o,[4&a&&{segment:t[2][0]},8&a&&Gt(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),n.$set(i)},i:function(t){e||(Nt(n.$$.fragment,t),e=!0)},o:function(t){Dt(n.$$.fragment,t),e=!1},d:function(t){zt(n,t)}}}function yn(t,n,e){var r,o,a,i=n.stores,u=n.error,c=n.status,s=n.segments,f=n.level0,l=n.level1,p=void 0===l?null:l,h=n.notify;return r=h,ft().$$.after_update.push(r),o=Wt,a=i,ft().$$.context.set(o,a),t.$set=function(t){"stores"in t&&e(5,i=t.stores),"error"in t&&e(0,u=t.error),"status"in t&&e(1,c=t.status),"segments"in t&&e(2,s=t.segments),"level0"in t&&e(3,f=t.level0),"level1"in t&&e(4,p=t.level1),"notify"in t&&e(6,h=t.notify)},[u,c,s,f,p,i,h]}var gn,bn=function(t){v(e,Vt);var n=pn(e);function e(t){var r;return g(this,e),Jt(d(r=n.call(this)),t,yn,mn,P,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return e}(),wn=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],$n=[{js:function(){return import("./index.bcc2eb85.js")},css:[]},{js:function(){return import("./resume.a34cd8fc.js")},css:[]},{js:function(){return import("./about.5c60b5cc.js")},css:[]},{js:function(){return import("./index.e1e78e3e.js")},css:[]},{js:function(){return import("./[slug].669a2506.js")},css:[]}],_n=(gn=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resume\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:function(t){return{slug:gn(t[1])}}}]}]);function xn(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},e=Mn(new URL(t,document.baseURI));return e?(Gn[n.replaceState?"replaceState":"pushState"]({id:qn},"",t),Bn(e,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var En,Sn,Ln,Rn,Pn,jn="undefined"!=typeof __SAPPER__&&__SAPPER__,kn=!1,On=[],An="{}",Cn={page:function(t){var n=Kt(t),e=!0;return{notify:function(){e=!0,n.update((function(t){return t}))},set:function(t){e=!1,n.set(t)},subscribe:function(t){var r;return n.subscribe((function(n){(void 0===r||e&&n!==r)&&t(r=n)}))}}}({}),preloading:Kt(null),session:Kt(jn&&jn.session)};Cn.session.subscribe(function(){var t=l(s.mark((function t(n){var e,r,o,a,i,u;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Rn=n,kn){t.next=3;break}return t.abrupt("return");case 3:return Pn=!0,e=Mn(new URL(location.href)),r=Sn={},t.next=8,Wn(e);case 8:if(o=t.sent,a=o.redirect,i=o.props,u=o.branch,r===Sn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Vn(a,u,i,e.page);case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());var Nn,Dn=null;var qn,In=1;var Tn,Un,Gn="undefined"!=typeof history?history:{pushState:function(t,n,e){},replaceState:function(t,n,e){},scrollRestoration:""},Fn={};function Hn(n){var e=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach((function(n){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===t(e[a])?e[a].push(u):e[a]=u})),e}function Mn(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jn.baseUrl))return null;var n=t.pathname.slice(jn.baseUrl.length);if(""===n&&(n="/"),!wn.some((function(t){return t.test(n)})))for(var e=0;e<_n.length;e+=1){var r=_n[e],o=r.pattern.exec(n);if(o){var a=Hn(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:n,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function zn(){return{x:pageXOffset,y:pageYOffset}}function Bn(t,n,e,r){return Jn.apply(this,arguments)}function Jn(){return(Jn=l(s.mark((function t(n,e,r,o){var a,i,u,c,f,l,p,h,v;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e?qn=e:(a=zn(),Fn[qn]=a,e=qn=++In,Fn[qn]=r?a:{x:0,y:0}),qn=e,En&&Cn.preloading.set(!0),i=Dn&&Dn.href===n.href?Dn.promise:Wn(n),Dn=null,u=Sn={},t.next=8,i;case 8:if(c=t.sent,f=c.redirect,l=c.props,p=c.branch,u===Sn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Vn(f,p,l,n.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=Fn[e],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),Fn[qn]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Vn(t,n,e,r){return Yn.apply(this,arguments)}function Yn(){return(Yn=l(s.mark((function t(n,e,r,o){var a,i;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",xn(n.location,{replaceState:!0}));case 2:if(Cn.page.set(o),Cn.preloading.set(!1),!En){t.next=8;break}En.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:Cn.page.subscribe},preloading:{subscribe:Cn.preloading.subscribe},session:Cn.session},t.next=11,Ln;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=Cn.page.notify,a=document.querySelector("#sapper-head-start"),i=document.querySelector("#sapper-head-end"),a&&i){for(;a.nextSibling!==i;)te(a.nextSibling);te(a),te(i)}En=new bn({target:Nn,props:r,hydrate:!0});case 18:On=e,An=JSON.stringify(o.query),kn=!0,Pn=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Kn(t,n,e,r){if(r!==An)return!0;var o=On[t];return!!o&&(n!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(e.slice(1,t+2)))||void 0))}function Wn(t){return Xn.apply(this,arguments)}function Xn(){return(Xn=l(s.mark((function t(n){var e,r,o,a,i,u,c,f,p,h,v;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.route,r=n.page,o=r.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){return fetch(t,n)})),redirect:function(t,n){if(a&&(a.statusCode!==t||a.location!==n))throw new Error("Conflicting redirects");a={statusCode:t,location:n}},error:function(t,n){i.error="string"==typeof n?new Error(n):n,i.status=t}},Ln||(Ln=jn.preloaded[0]||Xt.call(u,{host:r.host,path:r.path,query:r.query,params:{}},Rn)),f=1,t.prev=7,p=JSON.stringify(r.query),h=e.pattern.exec(r.path),v=!1,t.next=13,Promise.all(e.parts.map(function(){var t=l(s.mark((function t(e,a){var c,l,d,m,y,g;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[a],Kn(a,c,h,p)&&(v=!0),i.segments[f]=o[a+1],e){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(l=f++,Pn||v||!On[a]||On[a].part!==e.i){t.next=8;break}return t.abrupt("return",On[a]);case 8:return v=!1,t.next=11,Zn($n[e.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!kn&&jn.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(n.match):{}},Rn);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=jn.preloaded[a+1];case 26:return t.abrupt("return",i["level".concat(l)]={component:m,props:g,segment:c,match:h,part:e.i});case 27:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()));case 13:c=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),i.error=t.t0,i.status=500,c=[];case 21:return t.abrupt("return",{redirect:a,props:i,branch:c});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function Qn(t){var n="client/".concat(t);if(!document.querySelector('link[href="'.concat(n,'"]')))return new Promise((function(t,e){var r=document.createElement("link");r.rel="stylesheet",r.href=n,r.onload=function(){return t()},r.onerror=e,document.head.appendChild(r)}))}function Zn(t){var n="string"==typeof t.css?[]:t.css.map(Qn);return n.unshift(t.js()),Promise.all(n).then((function(t){return t[0]}))}function te(t){t.parentNode.removeChild(t)}function ne(t){var n=Mn(new URL(t,document.baseURI));if(n)return Dn&&t===Dn.href||function(t,n){Dn={href:t,promise:n}}(t,Wn(n)),Dn.promise}function ee(t){clearTimeout(Tn),Tn=setTimeout((function(){re(t)}),20)}function re(t){var n=ae(t.target);n&&"prefetch"===n.rel&&ne(n.href)}function oe(n){if(1===function(t){return null===t.which?t.button:t.which}(n)&&!(n.metaKey||n.ctrlKey||n.shiftKey||n.defaultPrevented)){var e=ae(n.target);if(e&&e.href){var r="object"===t(e.href)&&"SVGAnimatedString"===e.href.constructor.name,o=String(r?e.href.baseVal:e.href);if(o!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&!(r?e.target.baseVal:e.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Mn(a);if(i)Bn(i,null,e.hasAttribute("sapper-noscroll"),a.hash),n.preventDefault(),Gn.pushState({id:qn},"",a.href)}}}else location.hash||n.preventDefault()}}}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ie(t){if(Fn[qn]=zn(),t.state){var n=Mn(new URL(location.href));n?Bn(n,t.state.id):location.href=location.href}else(function(t){qn=t})(In=In+1),Gn.replaceState({id:qn},"",location.href)}Un={target:document.querySelector("#sapper")},"scrollRestoration"in Gn&&(Gn.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Gn.scrollRestoration="auto"})),addEventListener("load",(function(){Gn.scrollRestoration="manual"})),function(t){Nn=t}(Un.target),addEventListener("click",oe),addEventListener("popstate",ie),addEventListener("touchstart",re),addEventListener("mousemove",ee),Promise.resolve().then((function(){var t=location,n=t.hash,e=t.href;Gn.replaceState({id:In},"",e);var r,o,a,i,u,c,s,f,l=new URL(location.href);if(jn.error)return r=location,o=r.host,a=r.pathname,i=r.search,u=jn.session,c=jn.preloaded,s=jn.status,f=jn.error,Ln||(Ln=c&&c[0]),void Vn(null,[],{error:f,status:s,session:u,level0:{props:Ln},level1:{props:{status:s,error:f},component:ln},segments:c},{host:o,path:a,query:Hn(i),params:{}});var p=Mn(l);return p?Bn(p,In,!0,n):void 0}));export{ht as $,Nt as A,zt as B,lt as C,At as D,l as E,s as F,z as G,tt as H,H as I,u as J,i as K,o as L,a as M,t as N,w as O,c as P,y as Q,j as R,Vt as S,A as T,O as U,_t as V,It as W,Tt as X,Y,L as Z,v as _,p as a,pt as a0,dt as a1,nt as a2,$t as a3,m as b,g as c,d,J as e,M as f,F as g,Z as h,Jt as i,X as j,W as k,Q as l,K as m,G as n,U as o,$ as p,et as q,Ft as r,P as s,B as t,V as u,Ht as v,Mt as w,r as x,Dt as y,Ct as z};
