var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let f;function d(t){f=t}const p=[],$=[],h=[],m=[],g=Promise.resolve();let b=!1;function y(t){h.push(t)}let _=!1;const x=new Set;function v(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];d(e),w(e.$$)}for(d(null),p.length=0;$.length;)$.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];x.has(e)||(x.add(e),e())}h.length=0}while(p.length);for(;m.length;)m.pop()();b=!1,_=!1,x.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const k=new Set;function E(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(c,u,a,i,l,p,$,h=[-1]){const m=f;d(c);const g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:u.context||[]),callbacks:n(),dirty:h,skip_bound:!1,root:u.target||m.$$.root};$&&$(g.root);let b=!1;if(g.ctx=a?a(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&E(c,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((_=c.$$.fragment)&&_.i&&(k.delete(_),_.i(x))),function(t,n,c,u){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(n,c),u||y((()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(y)}(c,u.target,u.anchor,u.customElement),v()}var _,x;d(m)}function N(e){let n,o,r,c,f,d,p;return{c(){n=a("main"),o=a("h1"),r=i("Nice to meet you. "),c=i(e[0]),f=i("!"),d=i(" "),p=a("p"),p.innerHTML='I build this website follow\n    <a href="https://svelte.dev/tutorial">Svelte tutorial </a>.',l(o,"class","svelte-1e9puaw"),l(n,"class","svelte-1e9puaw")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(o,r),u(o,c),u(o,f),u(n,d),u(n,p)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&s(n)}}}function j(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,j,N,c,{name:0})}}({target:document.body,props:{name:"svelte"}})}();
