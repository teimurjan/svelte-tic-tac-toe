var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e){const r=n.subscribe(e);t.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}let c="undefined"!=typeof window?()=>window.performance.now():()=>Date.now();const s=new Set;let l,f=!1;function v(){s.forEach(t=>{t[0](c())||(s.delete(t),t[1]())}),(f=s.size>0)&&requestAnimationFrame(v)}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function $(){return y(" ")}function b(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}let _,w=0,j={};function x(t,n,e,r,o,a,u,i=0){const c=16.666/r;let s="{\n";for(let t=0;t<=1;t+=c){const r=n+(e-n)*a(t);s+=100*t+`%{${u(r,1-r)}}\n`}const f=s+`100% {${u(e,1-e)}}\n}`,v=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${i}`;if(!j[v]){if(!l){const t=g("style");document.head.appendChild(t),l=t.sheet}j[v]=!0,l.insertRule(`@keyframes ${v} ${f}`,l.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${v} ${r}ms linear ${o}ms 1 both`,w+=1,v}function O(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--w&&requestAnimationFrame(()=>{if(w)return;let t=l.cssRules.length;for(;t--;)l.deleteRule(t);j={}})}function C(t){_=t}const k=[],N=Promise.resolve();let A=!1;const E=[],z=[],P=[];function S(t){z.push(t)}function F(){const t=new Set;do{for(;k.length;){const t=k.shift();C(t),T(t.$$)}for(;E.length;)E.shift()();for(;z.length;){const n=z.pop();t.has(n)||(n(),t.add(n))}}while(k.length);for(;P.length;)P.pop()();A=!1}function T(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(S))}let D,M;function I(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}function R(e,r,a,u){let i=r(e,a),l=u?0:1,d=null,p=null,h=null;function m(){h&&O(e,h)}function g(t,n){const e=t.b-l;return n*=Math.abs(e),{a:l,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(r){const{delay:a=0,duration:u=300,easing:y=n,tick:$=t,css:b}=i,_={start:c()+a,b:r};r||(_.group=M,M.remaining+=1),d?p=_:(b&&(m(),h=x(e,l,r,u,a,y,b)),r&&$(0,1),d=g(_,u),S(()=>I(e,r,"start")),function(t){let n;f||(f=!0,requestAnimationFrame(v)),new Promise(e=>{s.add(n=[t,e])})}(t=>{if(p&&t>p.start&&(d=g(p,u),p=null,I(e,d.b,"start"),b&&(m(),h=x(e,l,d.b,d.duration,0,y,i.css))),d)if(t>=d.end)$(l=d.b,1-l),I(e,d.b,"end"),p||(d.b?m():--d.group.remaining||o(d.group.callbacks)),d=null;else if(t>=d.start){const n=t-d.start;l=d.a+d.d*y(n/d.duration),$(l,1-l)}return!(!d&&!p)}))}return{run(t){"function"==typeof i?(D||(D=Promise.resolve()).then(()=>{D=null}),D).then(()=>{i=i(),y(t)}):y(t)},end(){m(),d=p=null}}}function q(t,n,r){const{fragment:u,on_mount:i,on_destroy:c,after_render:s}=t.$$;u.m(n,r),S(()=>{const n=i.map(e).filter(a);c?c.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(S)}function L(t,n){t.$$.dirty||(k.push(t),A||(A=!0,N.then(F)),t.$$.dirty=r()),t.$$.dirty[n]=!0}function B(n,e,a,u,i,c){const s=_;C(n);const l=e.props||{},f=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(s?s.$$.context:[]),callbacks:r(),dirty:null};let v=!1;var d;f.ctx=a?a(n,l,(t,e)=>{f.ctx&&i(f.ctx[t],f.ctx[t]=e)&&(f.bound[t]&&f.bound[t](e),v&&L(n,t))}):l,f.update(),v=!0,o(f.before_render),f.fragment=u(f.ctx),e.target&&(e.hydrate?f.fragment.l((d=e.target,Array.from(d.childNodes))):f.fragment.c(),e.intro&&n.$$.fragment.i&&n.$$.fragment.i(),q(n,e.target,e.anchor),F()),C(s)}class G{$destroy(){var n,e;e=!0,(n=this).$$&&(o(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function U(t,{delay:n=0,duration:e=400}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:e,css:t=>`opacity: ${t*r}`}}var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var J,K=(function(t){!function(){var n={}.hasOwnProperty;function e(){for(var t=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var u=e.apply(null,o);u&&t.push(u)}else if("object"===a)for(var i in o)n.call(o,i)&&o[i]&&t.push(i)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}()}(J={exports:{}},J.exports),J.exports);function Q(){}function V(t){return t()}function W(t,n=Q){let e;const r=[];function o(n){if(a=n,(o=t)!=o?a==a:o!==a||o&&"object"==typeof o||"function"==typeof o){if(t=n,!e)return;r.forEach(t=>t[1]()),r.forEach(n=>n[0](t))}var o,a}return{set:o,update:function(n){o(n(t))},subscribe:function(a,u=Q){const i=[a,u];return r.push(i),1===r.length&&(e=n(o)||Q),a(t),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&e()}}}}function X(t,n,e){const r=!Array.isArray(t),o=r?[t]:t,a=n.length<2;return{subscribe:W(e,t=>{let e=!1;const u=[];let i=0,c=Q;const s=()=>{if(i)return;c();const e=n(r?u[0]:u,t);a?t(e):c=function(t){return"function"==typeof t}(e)?e:Q},l=o.map((t,n)=>t.subscribe(t=>{u[n]=t,i&=~(1<<n),e&&s()},()=>{i|=1<<n}));return e=!0,s(),function(){l.forEach(V),c()}}).subscribe}}var Y=Math.ceil,Z=Math.max;var tt=function(t,n,e,r){for(var o=-1,a=Z(Y((n-t)/(e||1)),0),u=Array(a);a--;)u[r?a:++o]=t,t+=e;return u};var nt=function(t,n){return t===n||t!=t&&n!=n},et="object"==typeof H&&H&&H.Object===Object&&H,rt="object"==typeof self&&self&&self.Object===Object&&self,ot=et||rt||Function("return this")(),at=ot.Symbol,ut=Object.prototype,it=ut.hasOwnProperty,ct=ut.toString,st=at?at.toStringTag:void 0;var lt=function(t){var n=it.call(t,st),e=t[st];try{t[st]=void 0;var r=!0}catch(t){}var o=ct.call(t);return r&&(n?t[st]=e:delete t[st]),o},ft=Object.prototype.toString;var vt=function(t){return ft.call(t)},dt="[object Null]",pt="[object Undefined]",ht=at?at.toStringTag:void 0;var mt=function(t){return null==t?void 0===t?pt:dt:ht&&ht in Object(t)?lt(t):vt(t)};var gt=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},yt="[object AsyncFunction]",$t="[object Function]",bt="[object GeneratorFunction]",_t="[object Proxy]";var wt=function(t){if(!gt(t))return!1;var n=mt(t);return n==$t||n==bt||n==yt||n==_t},jt=9007199254740991;var xt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=jt};var Ot=function(t){return null!=t&&xt(t.length)&&!wt(t)},Ct=9007199254740991,kt=/^(?:0|[1-9]\d*)$/;var Nt=function(t,n){var e=typeof t;return!!(n=null==n?Ct:n)&&("number"==e||"symbol"!=e&&kt.test(t))&&t>-1&&t%1==0&&t<n};var At=function(t,n,e){if(!gt(e))return!1;var r=typeof n;return!!("number"==r?Ot(e)&&Nt(n,e.length):"string"==r&&n in e)&&nt(e[n],t)};var Et=function(t){return null!=t&&"object"==typeof t},zt="[object Symbol]";var Pt=function(t){return"symbol"==typeof t||Et(t)&&mt(t)==zt},St=NaN,Ft=/^\s+|\s+$/g,Tt=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,It=parseInt;var Rt=function(t){if("number"==typeof t)return t;if(Pt(t))return St;if(gt(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=gt(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ft,"");var e=Dt.test(t);return e||Mt.test(t)?It(t.slice(2),e?2:8):Tt.test(t)?St:+t},qt=1/0,Lt=1.7976931348623157e308;var Bt=function(t){return t?(t=Rt(t))===qt||t===-qt?(t<0?-1:1)*Lt:t==t?t:0:0===t?t:0};var Gt,Ut=function(t){return function(n,e,r){return r&&"number"!=typeof r&&At(n,e,r)&&(e=r=void 0),n=Bt(n),void 0===e?(e=n,n=0):e=Bt(e),r=void 0===r?n<e?1:-1:Bt(r),tt(n,e,r,t)}}(),Ht=ot["__core-js_shared__"],Jt=(Gt=/[^.]+$/.exec(Ht&&Ht.keys&&Ht.keys.IE_PROTO||""))?"Symbol(src)_1."+Gt:"";var Kt=function(t){return!!Jt&&Jt in t},Qt=Function.prototype.toString;var Vt=function(t){if(null!=t){try{return Qt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Wt=/^\[object .+?Constructor\]$/,Xt=Function.prototype,Yt=Object.prototype,Zt=Xt.toString,tn=Yt.hasOwnProperty,nn=RegExp("^"+Zt.call(tn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var en=function(t){return!(!gt(t)||Kt(t))&&(wt(t)?nn:Wt).test(Vt(t))};var rn=function(t,n){return null==t?void 0:t[n]};var on=function(t,n){var e=rn(t,n);return en(e)?e:void 0},an=function(){try{var t=on(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var un=function(t,n,e){"__proto__"==n&&an?an(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e},cn=Object.prototype.hasOwnProperty;var sn=function(t,n,e){var r=t[n];cn.call(t,n)&&nt(r,e)&&(void 0!==e||n in t)||un(t,n,e)},ln=Array.isArray,fn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vn=/^\w*$/;var dn=function(t,n){if(ln(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Pt(t))||vn.test(t)||!fn.test(t)||null!=n&&t in Object(n)},pn=on(Object,"create");var hn=function(){this.__data__=pn?pn(null):{},this.size=0};var mn=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},gn="__lodash_hash_undefined__",yn=Object.prototype.hasOwnProperty;var $n=function(t){var n=this.__data__;if(pn){var e=n[t];return e===gn?void 0:e}return yn.call(n,t)?n[t]:void 0},bn=Object.prototype.hasOwnProperty;var _n=function(t){var n=this.__data__;return pn?void 0!==n[t]:bn.call(n,t)},wn="__lodash_hash_undefined__";var jn=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=pn&&void 0===n?wn:n,this};function xn(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}xn.prototype.clear=hn,xn.prototype.delete=mn,xn.prototype.get=$n,xn.prototype.has=_n,xn.prototype.set=jn;var On=xn;var Cn=function(){this.__data__=[],this.size=0};var kn=function(t,n){for(var e=t.length;e--;)if(nt(t[e][0],n))return e;return-1},Nn=Array.prototype.splice;var An=function(t){var n=this.__data__,e=kn(n,t);return!(e<0||(e==n.length-1?n.pop():Nn.call(n,e,1),--this.size,0))};var En=function(t){var n=this.__data__,e=kn(n,t);return e<0?void 0:n[e][1]};var zn=function(t){return kn(this.__data__,t)>-1};var Pn=function(t,n){var e=this.__data__,r=kn(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this};function Sn(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Sn.prototype.clear=Cn,Sn.prototype.delete=An,Sn.prototype.get=En,Sn.prototype.has=zn,Sn.prototype.set=Pn;var Fn=Sn,Tn=on(ot,"Map");var Dn=function(){this.size=0,this.__data__={hash:new On,map:new(Tn||Fn),string:new On}};var Mn=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var In=function(t,n){var e=t.__data__;return Mn(n)?e["string"==typeof n?"string":"hash"]:e.map};var Rn=function(t){var n=In(this,t).delete(t);return this.size-=n?1:0,n};var qn=function(t){return In(this,t).get(t)};var Ln=function(t){return In(this,t).has(t)};var Bn=function(t,n){var e=In(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this};function Gn(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Gn.prototype.clear=Dn,Gn.prototype.delete=Rn,Gn.prototype.get=qn,Gn.prototype.has=Ln,Gn.prototype.set=Bn;var Un=Gn,Hn="Expected a function";function Jn(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(Hn);var e=function(){var r=arguments,o=n?n.apply(this,r):r[0],a=e.cache;if(a.has(o))return a.get(o);var u=t.apply(this,r);return e.cache=a.set(o,u)||a,u};return e.cache=new(Jn.Cache||Un),e}Jn.Cache=Un;var Kn=Jn,Qn=500;var Vn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wn=/\\(\\)?/g,Xn=function(t){var n=Kn(t,function(t){return e.size===Qn&&e.clear(),t}),e=n.cache;return n}(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Vn,function(t,e,r,o){n.push(r?o.replace(Wn,"$1"):e||t)}),n});var Yn=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o},Zn=1/0,te=at?at.prototype:void 0,ne=te?te.toString:void 0;var ee=function t(n){if("string"==typeof n)return n;if(ln(n))return Yn(n,t)+"";if(Pt(n))return ne?ne.call(n):"";var e=n+"";return"0"==e&&1/n==-Zn?"-0":e};var re=function(t){return null==t?"":ee(t)};var oe=function(t,n){return ln(t)?t:dn(t,n)?[t]:Xn(re(t))},ae=1/0;var ue=function(t){if("string"==typeof t||Pt(t))return t;var n=t+"";return"0"==n&&1/t==-ae?"-0":n};var ie=function(t,n,e,r){if(!gt(t))return t;for(var o=-1,a=(n=oe(n,t)).length,u=a-1,i=t;null!=i&&++o<a;){var c=ue(n[o]),s=e;if(o!=u){var l=i[c];void 0===(s=r?r(l,c,i):void 0)&&(s=gt(l)?l:Nt(n[o+1])?[]:{})}sn(i,c,s),i=i[c]}return t};var ce=function(t,n,e){return null==t?t:ie(t,n,e)};const se="x",le="o";var fe=function(t){return t};var ve=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)},de=Math.max;var pe=function(t,n,e){return n=de(void 0===n?t.length-1:n,0),function(){for(var r=arguments,o=-1,a=de(r.length-n,0),u=Array(a);++o<a;)u[o]=r[n+o];o=-1;for(var i=Array(n+1);++o<n;)i[o]=r[o];return i[n]=e(u),ve(t,this,i)}};var he=function(t){return function(){return t}},me=an?function(t,n){return an(t,"toString",{configurable:!0,enumerable:!1,value:he(n),writable:!0})}:fe,ge=800,ye=16,$e=Date.now;var be=function(t){var n=0,e=0;return function(){var r=$e(),o=ye-(r-e);if(e=r,o>0){if(++n>=ge)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}(me);var _e=function(t,n){return be(pe(t,n,fe),t+"")};var we=function(t,n){for(var e=-1,r=null==t?0:t.length,o=0,a=[];++e<r;){var u=t[e];n(u,e,t)&&(a[o++]=u)}return a};var je=function(t){return function(n){return null==n?void 0:n[t]}};var xe=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r};var Oe=function(t){return Et(t)&&Ot(t)},Ce=Math.max;var ke=_e(function(t){if(!t||!t.length)return[];var n=0;return t=we(t,function(t){if(Oe(t))return n=Ce(t.length,n),!0}),xe(n,function(n){return Yn(t,je(n))})});const Ne=t=>{for(const n of t){const t=ze(n);if(t)return t}return null},Ae=t=>{const n=ke(...t);return Ne(n)},Ee=t=>{const n=t.map((t,n)=>t[n]),e=ze(n);if(e)return e;const r=t.map((t,n)=>t[t.length-1-n]),o=ze(r);return o||null},ze=t=>{return t.every(t=>t===se)?se:t.every(t=>t===le)?le:void 0},Pe=()=>Ut(3).map(()=>Se()),Se=()=>Ut(3).map(()=>null),Fe=()=>({deck:Pe(),moves:0,winner:null}),Te=W(Fe()),De=(t,n)=>{Te.update(e=>{const r=e.moves+1,o=ce(e.deck,[t,n],e.moves%2==0?se:le),a=r>3?(t=>{const n=Ne(t);if(n)return n;const e=Ae(t);if(e)return e;const r=Ee(t);return r||null})(o):e.winner;return{...e,deck:o,moves:r,winner:a}})},Me=()=>Te.update(()=>Fe()),Ie=X(Te,t=>9===t.moves),Re=X(Te,t=>t.moves%2==0);function qe(t,n,e){const r=Object.create(t);return r.cell=n[e],r.cellI=e,r}function Le(t,n,e){const r=Object.create(t);return r.row=n[e],r.rowI=e,r}function Be(t){var n,e,r;function o(){return t.click_handler(t)}return{c(){(n=g("div")).className=e=K("cell",t.getCellClassName(t.cell))+" svelte-gzojcf",r=b(n,"click",o)},m(t,e){p(t,n,e)},p(r,o){t=o,r.$game&&e!==(e=K("cell",t.getCellClassName(t.cell))+" svelte-gzojcf")&&(n.className=e)},d(t){t&&h(n),r()}}}function Ge(t){for(var n,e,r=t.row,o=[],a=0;a<r.length;a+=1)o[a]=Be(qe(t,r,a));return{c(){n=g("div");for(var t=0;t<o.length;t+=1)o[t].c();e=$(),n.className="row svelte-gzojcf"},m(t,r){p(t,n,r);for(var a=0;a<o.length;a+=1)o[a].m(n,null);d(n,e)},p(t,a){if(t.classNames||t.getCellClassName||t.$game){r=a.row;for(var u=0;u<r.length;u+=1){const i=qe(a,r,u);o[u]?o[u].p(t,i):(o[u]=Be(i),o[u].c(),o[u].m(n,e))}for(;u<o.length;u+=1)o[u].d(1);o.length=r.length}},d(t){t&&h(n),m(o,t)}}}function Ue(n){for(var e,r=n.$game.deck,o=[],a=0;a<r.length;a+=1)o[a]=Ge(Le(n,r,a));return{c(){e=g("div");for(var t=0;t<o.length;t+=1)o[t].c();e.className="deck svelte-gzojcf"},m(t,n){p(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null)},p(t,n){if(t.$game||t.classNames||t.getCellClassName){r=n.$game.deck;for(var a=0;a<r.length;a+=1){const u=Le(n,r,a);o[a]?o[a].p(t,u):(o[a]=Ge(u),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=r.length}},i:t,o:t,d(t){t&&h(e),m(o,t)}}}function He(t,n,e){let r;i(t,Te,t=>{e("$game",r=t)});const o=t=>!t;return{isCellFree:o,getCellClassName:t=>t===se?"cross":t===le?"nought":"",$game:r,click_handler:function({cell:t,rowI:n,cellI:e}){return!r.winner&&o(t)&&De(n,e)}}}class Je extends G{constructor(t){super(),B(this,t,He,Ue,u,[])}}function Ke(t){var n,e,r;function o(t){return t.$isCrossTurn?Xe:We}var a=o(t),u=a(t);return{c(){u.c(),n=$(),e=y(" "),r=y("turns")},m(t,o){u.m(t,o),p(t,n,o),p(t,e,o),p(t,r,o)},p(t,e){a!==(a=o(e))&&(u.d(1),(u=a(e))&&(u.c(),u.m(n.parentNode,n)))},d(t){u.d(t),t&&(h(n),h(e),h(r))}}}function Qe(n){var e;return{c(){e=y("it's draw")},m(t,n){p(t,e,n)},p:t,d(t){t&&h(e)}}}function Ve(t){var n,e,r;function o(t){return t.$game.winner===se?Ze:Ye}var a=o(t),u=a(t);return{c(){u.c(),n=$(),e=y(" "),r=y("wins")},m(t,o){u.m(t,o),p(t,n,o),p(t,e,o),p(t,r,o)},p(t,e){a!==(a=o(e))&&(u.d(1),(u=a(e))&&(u.c(),u.m(n.parentNode,n)))},d(t){u.d(t),t&&(h(n),h(e),h(r))}}}function We(t){var n;return{c(){n=y("nought")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function Xe(t){var n;return{c(){n=y("cross")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function Ye(t){var n;return{c(){n=y("nought")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function Ze(t){var n;return{c(){n=y("cross")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function tr(n){var e,r,o,a;return{c(){(e=g("button")).textContent="Play Again",e.className="game-play-again svelte-1edr4yc",a=b(e,"click",Me)},m(t,n){p(t,e,n),o=!0},p:t,i(t){o||(S(()=>{r||(r=R(e,U,{},!0)),r.run(1)}),o=!0)},o(t){r||(r=R(e,U,{},!1)),r.run(0),o=!1},d(t){t&&(h(e),r&&r.end()),a()}}}function nr(t){var n,e,r,a,u,i;function c(t){return t.$game.winner?Ve:t.$isDeckComplete?Qe:Ke}var s=c(t),l=s(t),f=new Je({}),v=(t.$game.winner||t.$isDeckComplete)&&tr();return{c(){n=g("div"),e=g("h1"),l.c(),r=$(),a=g("div"),f.$$.fragment.c(),u=$(),v&&v.c(),e.className="game-title svelte-1edr4yc",a.className="game-deck svelte-1edr4yc",n.className="game svelte-1edr4yc"},m(t,o){p(t,n,o),d(n,e),l.m(e,null),d(n,r),d(n,a),q(f,a,null),d(n,u),v&&v.m(n,null),i=!0},p(t,r){var a;s===(s=c(r))&&l?l.p(t,r):(l.d(1),(l=s(r))&&(l.c(),l.m(e,null))),r.$game.winner||r.$isDeckComplete?v?(v.p(t,r),v.i(1)):((v=tr()).c(),v.i(1),v.m(n,null)):v&&(a=(()=>{v.d(1),v=null}),(M={remaining:0,callbacks:[]}).callbacks.push(a),v.o(1),M.remaining||o(M.callbacks))},i(t){i||(f.$$.fragment.i(t),v&&v.i(),i=!0)},o(t){f.$$.fragment.o(t),v&&v.o(),i=!1},d(t){t&&h(n),l.d(),f.$destroy(),v&&v.d()}}}function er(t,n,e){let r,o,a;return i(t,Te,t=>{e("$game",r=t)}),i(t,Ie,t=>{e("$isDeckComplete",o=t)}),i(t,Re,t=>{e("$isCrossTurn",a=t)}),{$game:r,$isDeckComplete:o,$isCrossTurn:a}}class rr extends G{constructor(t){super(),B(this,t,er,nr,u,[])}}function or(n){var e,r,o,a=new rr({});return{c(){e=g("div"),r=g("div"),a.$$.fragment.c(),r.className="container svelte-jgswin",e.className="app svelte-jgswin"},m(t,n){p(t,e,n),d(e,r),q(a,r,null),o=!0},p:t,i(t){o||(a.$$.fragment.i(t),o=!0)},o(t){a.$$.fragment.o(t),o=!1},d(t){t&&h(e),a.$destroy()}}}return new class extends G{constructor(t){super(),B(this,t,null,or,u,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
