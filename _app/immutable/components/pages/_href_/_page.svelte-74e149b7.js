import{S as p,i as v,s as M,k as d,a as g,I as E,l as _,h as c,c as T,m as j,n as m,G as y,b as u,B as h}from"../../../chunks/index-9115c5e3.js";function A(o){let n,t,i,l,s,r=o[0].html+"";return document.title=n=o[0].title,{c(){t=d("meta"),l=g(),s=d("main"),this.h()},l(e){const a=E("svelte-14o7prj",document.head);t=_(a,"META",{name:!0,content:!0}),a.forEach(c),l=T(e),s=_(e,"MAIN",{class:!0});var f=j(s);f.forEach(c),this.h()},h(){m(t,"name","description"),m(t,"content",i=o[0].description),m(s,"class","svelte-10il2gj")},m(e,a){y(document.head,t),u(e,l,a),u(e,s,a),s.innerHTML=r},p(e,[a]){a&1&&n!==(n=e[0].title)&&(document.title=n),a&1&&i!==(i=e[0].description)&&m(t,"content",i),a&1&&r!==(r=e[0].html+"")&&(s.innerHTML=r)},i:h,o:h,d(e){c(t),e&&c(l),e&&c(s)}}}function H(o,n,t){let{data:i}=n;return o.$$set=l=>{"data"in l&&t(0,i=l.data)},[i]}class L extends p{constructor(n){super(),v(this,n,H,A,M,{data:0})}}export{L as default};