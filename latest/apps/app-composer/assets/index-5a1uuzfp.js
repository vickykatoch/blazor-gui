import{r as u,a as Ye,R as ue,j as f,S as An,u as st,b as it,c as Y,A as Fn,d as Pn,g as jn}from"./index-niWyLOE3.js";const lt=e=>(...t)=>[e,...t].join("-");function mt(e){return Ke(e)?(e.nodeName||"").toLowerCase():"#document"}function U(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ct(e){var t;return(t=(Ke(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ke(e){return e instanceof Node||e instanceof U(e).Node}function M(e){return e instanceof Element||e instanceof U(e).Element}function K(e){return e instanceof HTMLElement||e instanceof U(e).HTMLElement}function ae(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof U(e).ShadowRoot}function Lt(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function Ln(e){return["table","td","th"].includes(mt(e))}function de(e){const t=fe(),n=q(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function On(e){let t=wt(e);for(;K(t)&&!It(t);){if(de(t))return t;t=wt(t)}return null}function fe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function It(e){return["html","body","#document"].includes(mt(e))}function q(e){return U(e).getComputedStyle(e)}function Xt(e){return M(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function wt(e){if(mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ae(e)&&e.host||ct(e);return ae(t)?t.host:t}function qe(e){const t=wt(e);return It(t)?e.ownerDocument?e.ownerDocument.body:e.body:K(t)&&Lt(t)?t:qe(t)}function ht(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=qe(e),a=r===((o=e.ownerDocument)==null?void 0:o.body),s=U(r);return a?t.concat(s,s.visualViewport||[],Lt(r)?r:[],s.frameElement&&n?ht(s.frameElement):[]):t.concat(r,ht(r,[],n))}function se(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function rt(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&ae(n)){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}return!1}function Xe(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Ze(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:o}=t;return n+"/"+o}).join(" "):navigator.userAgent}function Nn(e){return Dn()?!1:!ye()&&e.width===0&&e.height===0||ye()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Ge(){return/apple/i.test(navigator.vendor)}function ye(){const e=/android/i;return e.test(Xe())||e.test(Ze())}function Bn(){return Xe().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Dn(){return Ze().includes("jsdom/")}function Qe(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Mn(e){return"nativeEvent"in e}function zn(e){return e.matches("html,body")}function ft(e){return(e==null?void 0:e.ownerDocument)||document}function Qt(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function xt(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Wn="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Hn(e){return K(e)&&e.matches(Wn)}const kt=Math.min,yt=Math.max,_t=Math.round,Dt=Math.floor,pt=e=>({x:e,y:e}),_n={left:"right",right:"left",bottom:"top",top:"bottom"},$n={start:"end",end:"start"};function ie(e,t,n){return yt(e,kt(t,n))}function Tt(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function Ot(e){return e.split("-")[1]}function he(e){return e==="x"?"y":"x"}function me(e){return e==="y"?"height":"width"}function Nt(e){return["top","bottom"].includes(gt(e))?"y":"x"}function pe(e){return he(Nt(e))}function Vn(e,t,n){n===void 0&&(n=!1);const o=Ot(e),r=pe(e),a=me(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=$t(s)),[s,$t(s)]}function Un(e){const t=$t(e);return[le(e),t,le(t)]}function le(e){return e.replace(/start|end/g,t=>$n[t])}function Yn(e,t,n){const o=["left","right"],r=["right","left"],a=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?a:s;default:return[]}}function Kn(e,t,n,o){const r=Ot(e);let a=Yn(gt(e),n==="start",o);return r&&(a=a.map(s=>s+"-"+r),t&&(a=a.concat(a.map(le)))),a}function $t(e){return e.replace(/left|right|bottom|top/g,t=>_n[t])}function qn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Je(e){return typeof e!="number"?qn(e):{top:e,right:e,bottom:e,left:e}}function Vt(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function we(e,t,n){let{reference:o,floating:r}=e;const a=Nt(t),s=pe(t),i=me(s),l=gt(t),c=a==="y",g=o.x+o.width/2-r.width/2,m=o.y+o.height/2-r.height/2,v=o[i]/2-r[i]/2;let d;switch(l){case"top":d={x:g,y:o.y-r.height};break;case"bottom":d={x:g,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:m};break;case"left":d={x:o.x-r.width,y:m};break;default:d={x:o.x,y:o.y}}switch(Ot(t)){case"start":d[s]-=v*(n&&c?-1:1);break;case"end":d[s]+=v*(n&&c?-1:1);break}return d}const Xn=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:s}=n,i=a.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:g,y:m}=we(c,o,l),v=o,d={},h=0;for(let p=0;p<i.length;p++){const{name:C,fn:y}=i[p],{x:E,y:k,data:T,reset:w}=await y({x:g,y:m,initialPlacement:o,placement:v,strategy:r,middlewareData:d,rects:c,platform:s,elements:{reference:e,floating:t}});if(g=E??g,m=k??m,d={...d,[C]:{...d[C],...T}},w&&h<=50){h++,typeof w=="object"&&(w.placement&&(v=w.placement),w.rects&&(c=w.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):w.rects),{x:g,y:m}=we(c,v,l)),p=-1;continue}}return{x:g,y:m,placement:v,strategy:r,middlewareData:d}};async function tn(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:a,rects:s,elements:i,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:g="viewport",elementContext:m="floating",altBoundary:v=!1,padding:d=0}=Tt(t,e),h=Je(d),C=i[v?m==="floating"?"reference":"floating":m],y=Vt(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(C)))==null||n?C:C.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(i.floating)),boundary:c,rootBoundary:g,strategy:l})),E=m==="floating"?{...s.floating,x:o,y:r}:s.reference,k=await(a.getOffsetParent==null?void 0:a.getOffsetParent(i.floating)),T=await(a.isElement==null?void 0:a.isElement(k))?await(a.getScale==null?void 0:a.getScale(k))||{x:1,y:1}:{x:1,y:1},w=Vt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:E,offsetParent:k,strategy:l}):E);return{top:(y.top-w.top+h.top)/T.y,bottom:(w.bottom-y.bottom+h.bottom)/T.y,left:(y.left-w.left+h.left)/T.x,right:(w.right-y.right+h.right)/T.x}}const Zn=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:a,platform:s,elements:i,middlewareData:l}=t,{element:c,padding:g=0}=Tt(e,t)||{};if(c==null)return{};const m=Je(g),v={x:n,y:o},d=pe(r),h=me(d),p=await s.getDimensions(c),C=d==="y",y=C?"top":"left",E=C?"bottom":"right",k=C?"clientHeight":"clientWidth",T=a.reference[h]+a.reference[d]-v[d]-a.floating[h],w=v[d]-a.reference[d],F=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let P=F?F[k]:0;(!P||!await(s.isElement==null?void 0:s.isElement(F)))&&(P=i.floating[k]||a.floating[h]);const B=T/2-w/2,D=P/2-p[h]/2-1,O=kt(m[y],D),N=kt(m[E],D),j=O,A=P-p[h]-N,b=P/2-p[h]/2+B,x=ie(j,b,A),I=!l.arrow&&Ot(r)!=null&&b!=x&&a.reference[h]/2-(b<j?O:N)-p[h]/2<0,S=I?b<j?b-j:b-A:0;return{[d]:v[d]+S,data:{[d]:x,centerOffset:b-x-S,...I&&{alignmentOffset:S}},reset:I}}}),Gn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:a,rects:s,initialPlacement:i,platform:l,elements:c}=t,{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:v,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...C}=Tt(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const y=gt(r),E=gt(i)===i,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=v||(E||!p?[$t(i)]:Un(i));!v&&h!=="none"&&T.push(...Kn(i,p,h,k));const w=[i,...T],F=await tn(t,C),P=[];let B=((o=a.flip)==null?void 0:o.overflows)||[];if(g&&P.push(F[y]),m){const j=Vn(r,s,k);P.push(F[j[0]],F[j[1]])}if(B=[...B,{placement:r,overflows:P}],!P.every(j=>j<=0)){var D,O;const j=(((D=a.flip)==null?void 0:D.index)||0)+1,A=w[j];if(A)return{data:{index:j,overflows:B},reset:{placement:A}};let b=(O=B.filter(x=>x.overflows[0]<=0).sort((x,I)=>x.overflows[1]-I.overflows[1])[0])==null?void 0:O.placement;if(!b)switch(d){case"bestFit":{var N;const x=(N=B.map(I=>[I.placement,I.overflows.filter(S=>S>0).reduce((S,R)=>S+R,0)]).sort((I,S)=>I[1]-S[1])[0])==null?void 0:N[0];x&&(b=x);break}case"initialPlacement":b=i;break}if(r!==b)return{reset:{placement:b}}}return{}}}};async function Qn(e,t){const{placement:n,platform:o,elements:r}=e,a=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=gt(n),i=Ot(n),l=Nt(n)==="y",c=["left","top"].includes(s)?-1:1,g=a&&l?-1:1,m=Tt(t,e);let{mainAxis:v,crossAxis:d,alignmentAxis:h}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return i&&typeof h=="number"&&(d=i==="end"?h*-1:h),l?{x:d*g,y:v*c}:{x:v*c,y:d*g}}const Jn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:a,placement:s,middlewareData:i}=t,l=await Qn(t,e);return s===((n=i.offset)==null?void 0:n.placement)&&(o=i.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:a+l.y,data:{...l,placement:s}}}}},to=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:y,y:E}=C;return{x:y,y:E}}},...l}=Tt(e,t),c={x:n,y:o},g=await tn(t,l),m=Nt(gt(r)),v=he(m);let d=c[v],h=c[m];if(a){const C=v==="y"?"top":"left",y=v==="y"?"bottom":"right",E=d+g[C],k=d-g[y];d=ie(E,d,k)}if(s){const C=m==="y"?"top":"left",y=m==="y"?"bottom":"right",E=h+g[C],k=h-g[y];h=ie(E,h,k)}const p=i.fn({...t,[v]:d,[m]:h});return{...p,data:{x:p.x-n,y:p.y-o}}}}},eo=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:a,middlewareData:s}=t,{offset:i=0,mainAxis:l=!0,crossAxis:c=!0}=Tt(e,t),g={x:n,y:o},m=Nt(r),v=he(m);let d=g[v],h=g[m];const p=Tt(i,t),C=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(l){const k=v==="y"?"height":"width",T=a.reference[v]-a.floating[k]+C.mainAxis,w=a.reference[v]+a.reference[k]-C.mainAxis;d<T?d=T:d>w&&(d=w)}if(c){var y,E;const k=v==="y"?"width":"height",T=["top","left"].includes(gt(r)),w=a.reference[m]-a.floating[k]+(T&&((y=s.offset)==null?void 0:y[m])||0)+(T?0:C.crossAxis),F=a.reference[m]+a.reference[k]+(T?0:((E=s.offset)==null?void 0:E[m])||0)-(T?C.crossAxis:0);h<w?h=w:h>F&&(h=F)}return{[v]:d,[m]:h}}}};function en(e){const t=q(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=K(e),a=r?e.offsetWidth:n,s=r?e.offsetHeight:o,i=_t(n)!==a||_t(o)!==s;return i&&(n=a,o=s),{width:n,height:o,$:i}}function ge(e){return M(e)?e:e.contextElement}function Et(e){const t=ge(e);if(!K(t))return pt(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:a}=en(t);let s=(a?_t(n.width):n.width)/o,i=(a?_t(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const no=pt(0);function nn(e){const t=U(e);return!fe()||!t.visualViewport?no:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function oo(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==U(e)?!1:t}function Ct(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),a=ge(e);let s=pt(1);t&&(o?M(o)&&(s=Et(o)):s=Et(e));const i=oo(a,n,o)?nn(a):pt(0);let l=(r.left+i.x)/s.x,c=(r.top+i.y)/s.y,g=r.width/s.x,m=r.height/s.y;if(a){const v=U(a),d=o&&M(o)?U(o):o;let h=v.frameElement;for(;h&&o&&d!==v;){const p=Et(h),C=h.getBoundingClientRect(),y=q(h),E=C.left+(h.clientLeft+parseFloat(y.paddingLeft))*p.x,k=C.top+(h.clientTop+parseFloat(y.paddingTop))*p.y;l*=p.x,c*=p.y,g*=p.x,m*=p.y,l+=E,c+=k,h=U(h).frameElement}}return Vt({width:g,height:m,x:l,y:c})}function ro(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=K(n),a=ct(n);if(n===a)return t;let s={scrollLeft:0,scrollTop:0},i=pt(1);const l=pt(0);if((r||!r&&o!=="fixed")&&((mt(n)!=="body"||Lt(a))&&(s=Xt(n)),K(n))){const c=Ct(n);i=Et(n),l.x=c.x+n.clientLeft,l.y=c.y+n.clientTop}return{width:t.width*i.x,height:t.height*i.y,x:t.x*i.x-s.scrollLeft*i.x+l.x,y:t.y*i.y-s.scrollTop*i.y+l.y}}function ao(e){return Array.from(e.getClientRects())}function on(e){return Ct(ct(e)).left+Xt(e).scrollLeft}function so(e){const t=ct(e),n=Xt(e),o=e.ownerDocument.body,r=yt(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=yt(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+on(e);const i=-n.scrollTop;return q(o).direction==="rtl"&&(s+=yt(t.clientWidth,o.clientWidth)-r),{width:r,height:a,x:s,y:i}}function io(e,t){const n=U(e),o=ct(e),r=n.visualViewport;let a=o.clientWidth,s=o.clientHeight,i=0,l=0;if(r){a=r.width,s=r.height;const c=fe();(!c||c&&t==="fixed")&&(i=r.offsetLeft,l=r.offsetTop)}return{width:a,height:s,x:i,y:l}}function lo(e,t){const n=Ct(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,a=K(e)?Et(e):pt(1),s=e.clientWidth*a.x,i=e.clientHeight*a.y,l=r*a.x,c=o*a.y;return{width:s,height:i,x:l,y:c}}function Te(e,t,n){let o;if(t==="viewport")o=io(e,n);else if(t==="document")o=so(ct(e));else if(M(t))o=lo(t,n);else{const r=nn(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return Vt(o)}function rn(e,t){const n=wt(e);return n===t||!M(n)||It(n)?!1:q(n).position==="fixed"||rn(n,t)}function co(e,t){const n=t.get(e);if(n)return n;let o=ht(e,[],!1).filter(i=>M(i)&&mt(i)!=="body"),r=null;const a=q(e).position==="fixed";let s=a?wt(e):e;for(;M(s)&&!It(s);){const i=q(s),l=de(s);!l&&i.position==="fixed"&&(r=null),(a?!l&&!r:!l&&i.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Lt(s)&&!l&&rn(e,s))?o=o.filter(g=>g!==s):r=i,s=wt(s)}return t.set(e,o),o}function uo(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?co(t,this._c):[].concat(n),o],i=s[0],l=s.reduce((c,g)=>{const m=Te(t,g,r);return c.top=yt(m.top,c.top),c.right=kt(m.right,c.right),c.bottom=kt(m.bottom,c.bottom),c.left=yt(m.left,c.left),c},Te(t,i,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function fo(e){const{width:t,height:n}=en(e);return{width:t,height:n}}function ho(e,t,n){const o=K(t),r=ct(t),a=n==="fixed",s=Ct(e,!0,a,t);let i={scrollLeft:0,scrollTop:0};const l=pt(0);if(o||!o&&!a)if((mt(t)!=="body"||Lt(r))&&(i=Xt(t)),o){const c=Ct(t,!0,a,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else r&&(l.x=on(r));return{x:s.left+i.scrollLeft-l.x,y:s.top+i.scrollTop-l.y,width:s.width,height:s.height}}function Ce(e,t){return!K(e)||q(e).position==="fixed"?null:t?t(e):e.offsetParent}function an(e,t){const n=U(e);if(!K(e))return n;let o=Ce(e,t);for(;o&&Ln(o)&&q(o).position==="static";)o=Ce(o,t);return o&&(mt(o)==="html"||mt(o)==="body"&&q(o).position==="static"&&!de(o))?n:o||On(e)||n}const mo=async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||an,a=this.getDimensions;return{reference:ho(t,await r(n),o),floating:{x:0,y:0,...await a(n)}}};function po(e){return q(e).direction==="rtl"}const ve={convertOffsetParentRelativeRectToViewportRelativeRect:ro,getDocumentElement:ct,getClippingRect:uo,getOffsetParent:an,getElementRects:mo,getClientRects:ao,getDimensions:fo,getScale:Et,isElement:M,isRTL:po};function go(e,t){let n=null,o;const r=ct(e);function a(){clearTimeout(o),n&&n.disconnect(),n=null}function s(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),a();const{left:c,top:g,width:m,height:v}=e.getBoundingClientRect();if(i||t(),!m||!v)return;const d=Dt(g),h=Dt(r.clientWidth-(c+m)),p=Dt(r.clientHeight-(g+v)),C=Dt(c),E={rootMargin:-d+"px "+-h+"px "+-p+"px "+-C+"px",threshold:yt(0,kt(1,l))||1};let k=!0;function T(w){const F=w[0].intersectionRatio;if(F!==l){if(!k)return s();F?s(!1,F):o=setTimeout(()=>{s(!1,1e-7)},100)}k=!1}try{n=new IntersectionObserver(T,{...E,root:r.ownerDocument})}catch{n=new IntersectionObserver(T,E)}n.observe(e)}return s(!0),a}function vo(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=ge(e),g=r||a?[...c?ht(c):[],...ht(t)]:[];g.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),a&&y.addEventListener("resize",n)});const m=c&&i?go(c,n):null;let v=-1,d=null;s&&(d=new ResizeObserver(y=>{let[E]=y;E&&E.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{d&&d.observe(t)})),n()}),c&&!l&&d.observe(c),d.observe(t));let h,p=l?Ct(e):null;l&&C();function C(){const y=Ct(e);p&&(y.x!==p.x||y.y!==p.y||y.width!==p.width||y.height!==p.height)&&n(),p=y,h=requestAnimationFrame(C)}return n(),()=>{g.forEach(y=>{r&&y.removeEventListener("scroll",n),a&&y.removeEventListener("resize",n)}),m&&m(),d&&d.disconnect(),d=null,l&&cancelAnimationFrame(h)}}const sn=to,ln=Gn,Se=Zn,cn=eo,bo=(e,t,n)=>{const o=new Map,r={platform:ve,...n},a={...r.platform,_c:o};return Xn(e,t,{...r,platform:a})},xo=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Se({element:o.current,padding:r}).fn(n):{}:o?Se({element:o,padding:r}).fn(n):{}}}};var Wt=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Ut(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!Ut(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const a=r[o];if(!(a==="_owner"&&e.$$typeof)&&!Ut(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function un(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Re(e,t){const n=un(e);return Math.round(t*n)/n}function Ee(e){const t=u.useRef(e);return Wt(()=>{t.current=e}),t}function yo(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:a,floating:s}={},transform:i=!0,whileElementsMounted:l,open:c}=e,[g,m]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[v,d]=u.useState(o);Ut(v,o)||d(o);const[h,p]=u.useState(null),[C,y]=u.useState(null),E=u.useCallback(S=>{S!==F.current&&(F.current=S,p(S))},[]),k=u.useCallback(S=>{S!==P.current&&(P.current=S,y(S))},[]),T=a||h,w=s||C,F=u.useRef(null),P=u.useRef(null),B=u.useRef(g),D=l!=null,O=Ee(l),N=Ee(r),j=u.useCallback(()=>{if(!F.current||!P.current)return;const S={placement:t,strategy:n,middleware:v};N.current&&(S.platform=N.current),bo(F.current,P.current,S).then(R=>{const L={...R,isPositioned:!0};A.current&&!Ut(B.current,L)&&(B.current=L,Ye.flushSync(()=>{m(L)}))})},[v,t,n,N]);Wt(()=>{c===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,m(S=>({...S,isPositioned:!1})))},[c]);const A=u.useRef(!1);Wt(()=>(A.current=!0,()=>{A.current=!1}),[]),Wt(()=>{if(T&&(F.current=T),w&&(P.current=w),T&&w){if(O.current)return O.current(T,w,j);j()}},[T,w,j,O,D]);const b=u.useMemo(()=>({reference:F,floating:P,setReference:E,setFloating:k}),[E,k]),x=u.useMemo(()=>({reference:T,floating:w}),[T,w]),I=u.useMemo(()=>{const S={position:n,left:0,top:0};if(!x.floating)return S;const R=Re(x.floating,g.x),L=Re(x.floating,g.y);return i?{...S,transform:"translate("+R+"px, "+L+"px)",...un(x.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:R,top:L}},[n,i,x.floating,g.x,g.y]);return u.useMemo(()=>({...g,update:j,refs:b,elements:x,floatingStyles:I}),[g,j,b,x,I])}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var wo=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],ce=wo.join(","),dn=typeof Element>"u",jt=dn?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yt=!dn&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Kt=function e(t,n){var o;n===void 0&&(n=!0);var r=t==null||(o=t.getAttribute)===null||o===void 0?void 0:o.call(t,"inert"),a=r===""||r==="true",s=a||n&&t&&e(t.parentNode);return s},To=function(t){var n,o=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return o===""||o==="true"},Co=function(t,n,o){if(Kt(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(ce));return n&&jt.call(t,ce)&&r.unshift(t),r=r.filter(o),r},So=function e(t,n,o){for(var r=[],a=Array.from(t);a.length;){var s=a.shift();if(!Kt(s,!1))if(s.tagName==="SLOT"){var i=s.assignedElements(),l=i.length?i:s.children,c=e(l,!0,o);o.flatten?r.push.apply(r,c):r.push({scopeParent:s,candidates:c})}else{var g=jt.call(s,ce);g&&o.filter(s)&&(n||!t.includes(s))&&r.push(s);var m=s.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(s),v=!Kt(m,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(s));if(m&&v){var d=e(m===!0?s.children:m.children,!0,o);o.flatten?r.push.apply(r,d):r.push({scopeParent:s,candidates:d})}else a.unshift.apply(a,s.children)}}return r},fn=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},hn=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||To(t))&&!fn(t)?0:t.tabIndex},Ro=function(t,n){var o=hn(t);return o<0&&n&&!fn(t)?0:o},Eo=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},mn=function(t){return t.tagName==="INPUT"},Io=function(t){return mn(t)&&t.type==="hidden"},ko=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"});return n},Ao=function(t,n){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===n)return t[o]},Fo=function(t){if(!t.name)return!0;var n=t.form||Yt(t),o=function(i){return n.querySelectorAll('input[type="radio"][name="'+i+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=o(window.CSS.escape(t.name));else try{r=o(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=Ao(r,t.form);return!a||a===t},Po=function(t){return mn(t)&&t.type==="radio"},jo=function(t){return Po(t)&&!Fo(t)},Lo=function(t){var n,o=t&&Yt(t),r=(n=o)===null||n===void 0?void 0:n.host,a=!1;if(o&&o!==t){var s,i,l;for(a=!!((s=r)!==null&&s!==void 0&&(i=s.ownerDocument)!==null&&i!==void 0&&i.contains(r)||t!=null&&(l=t.ownerDocument)!==null&&l!==void 0&&l.contains(t));!a&&r;){var c,g,m;o=Yt(r),r=(c=o)===null||c===void 0?void 0:c.host,a=!!((g=r)!==null&&g!==void 0&&(m=g.ownerDocument)!==null&&m!==void 0&&m.contains(r))}}return a},Ie=function(t){var n=t.getBoundingClientRect(),o=n.width,r=n.height;return o===0&&r===0},Oo=function(t,n){var o=n.displayCheck,r=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var a=jt.call(t,"details>summary:first-of-type"),s=a?t.parentElement:t;if(jt.call(s,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="legacy-full"){if(typeof r=="function"){for(var i=t;t;){var l=t.parentElement,c=Yt(t);if(l&&!l.shadowRoot&&r(l)===!0)return Ie(t);t.assignedSlot?t=t.assignedSlot:!l&&c!==t.ownerDocument?t=c.host:t=l}t=i}if(Lo(t))return!t.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return Ie(t);return!1},No=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var o=0;o<n.children.length;o++){var r=n.children.item(o);if(r.tagName==="LEGEND")return jt.call(n,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}n=n.parentElement}return!1},Bo=function(t,n){return!(n.disabled||Kt(n)||Io(n)||Oo(n,t)||ko(n)||No(n))},ke=function(t,n){return!(jo(n)||hn(n)<0||!Bo(t,n))},Do=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Mo=function e(t){var n=[],o=[];return t.forEach(function(r,a){var s=!!r.scopeParent,i=s?r.scopeParent:r,l=Ro(i,s),c=s?e(r.candidates):i;l===0?s?n.push.apply(n,c):n.push(i):o.push({documentOrder:a,tabIndex:l,item:r,isScope:s,content:c})}),o.sort(Eo).reduce(function(r,a){return a.isScope?r.push.apply(r,a.content):r.push(a.content),r},[]).concat(n)},pn=function(t,n){n=n||{};var o;return n.getShadowRoot?o=So([t],n.includeContainer,{filter:ke.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Do}):o=Co(t,n.includeContainer,ke.bind(null,n)),Mo(o)};const zo=ue.useInsertionEffect,Wo=zo||(e=>e());function Rt(e){const t=u.useRef(()=>{});return Wo(()=>{t.current=e}),u.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}var vt=typeof document<"u"?u.useLayoutEffect:u.useEffect;function qt(){return qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qt.apply(this,arguments)}let Jt=!1,Ho=0;const Ae=()=>"floating-ui-"+Ho++;function _o(){const[e,t]=u.useState(()=>Jt?Ae():void 0);return vt(()=>{e==null&&t(Ae())},[]),u.useEffect(()=>{Jt||(Jt=!0)},[]),e}const $o=ue.useId,Zt=$o||_o,Vo=u.forwardRef(function(t,n){let{context:{placement:o,elements:{floating:r},middlewareData:{arrow:a}},width:s=14,height:i=7,tipRadius:l=0,strokeWidth:c=0,staticOffset:g,stroke:m,d:v,style:{transform:d,...h}={},...p}=t;const C=Zt();if(!r)return null;c*=2;const y=c/2,E=s/2*(l/-8+1),k=i/2*l/4,[T,w]=o.split("-"),F=ve.isRTL(r),P=!!v,B=T==="top"||T==="bottom",D=g&&w==="end"?"bottom":"top";let O=g&&w==="end"?"right":"left";g&&F&&(O=w==="end"?"left":"right");const N=(a==null?void 0:a.x)!=null?g||a.x:"",j=(a==null?void 0:a.y)!=null?g||a.y:"",A=v||"M0,0"+(" H"+s)+(" L"+(s-E)+","+(i-k))+(" Q"+s/2+","+i+" "+E+","+(i-k))+" Z",b={top:P?"rotate(180deg)":"",left:P?"rotate(90deg)":"rotate(-90deg)",bottom:P?"":"rotate(180deg)",right:P?"rotate(-90deg)":"rotate(90deg)"}[T];return u.createElement("svg",qt({},p,{"aria-hidden":!0,ref:n,width:P?s:s+c,height:s,viewBox:"0 0 "+s+" "+(i>s?i:s),style:{position:"absolute",pointerEvents:"none",[O]:N,[D]:j,[T]:B||P?"100%":"calc(100% - "+c/2+"px)",transform:""+b+(d??""),...h}}),c>0&&u.createElement("path",{clipPath:"url(#"+C+")",fill:"none",stroke:m,strokeWidth:c+(v?0:1),d:A}),u.createElement("path",{stroke:c&&!v?p.fill:"none",d:A}),u.createElement("clipPath",{id:C},u.createElement("rect",{x:-y,y:y*(P?-1:1),width:s+c,height:s})))});function Uo(){const e=new Map;return{emit(t,n){var o;(o=e.get(t))==null||o.forEach(r=>r(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(r=>r!==n))||[])}}}const Yo=u.createContext(null),Ko=u.createContext(null),be=()=>{var e;return((e=u.useContext(Yo))==null?void 0:e.id)||null},xe=()=>u.useContext(Ko);function Bt(e){return"data-floating-ui-"+e}function Fe(e){const t=u.useRef(e);return vt(()=>{t.current=e}),t}const Pe=Bt("safe-polygon");function te(e,t,n){return n&&!Qe(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}function qo(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,dataRef:r,events:a,elements:{domReference:s,floating:i},refs:l}=e,{enabled:c=!0,delay:g=0,handleClose:m=null,mouseOnly:v=!1,restMs:d=0,move:h=!0}=t,p=xe(),C=be(),y=Fe(m),E=Fe(g),k=u.useRef(),T=u.useRef(),w=u.useRef(),F=u.useRef(),P=u.useRef(!0),B=u.useRef(!1),D=u.useRef(()=>{}),O=u.useCallback(()=>{var b;const x=(b=r.current.openEvent)==null?void 0:b.type;return(x==null?void 0:x.includes("mouse"))&&x!=="mousedown"},[r]);u.useEffect(()=>{if(!c)return;function b(x){let{open:I}=x;I||(clearTimeout(T.current),clearTimeout(F.current),P.current=!0)}return a.on("openchange",b),()=>{a.off("openchange",b)}},[c,a]),u.useEffect(()=>{if(!c||!y.current||!n)return;function b(I){O()&&o(!1,I,"hover")}const x=ft(i).documentElement;return x.addEventListener("mouseleave",b),()=>{x.removeEventListener("mouseleave",b)}},[i,n,o,c,y,O]);const N=u.useCallback(function(b,x,I){x===void 0&&(x=!0),I===void 0&&(I="hover");const S=te(E.current,"close",k.current);S&&!w.current?(clearTimeout(T.current),T.current=setTimeout(()=>o(!1,b,I),S)):x&&(clearTimeout(T.current),o(!1,b,I))},[E,o]),j=u.useCallback(()=>{D.current(),w.current=void 0},[]),A=u.useCallback(()=>{if(B.current){const b=ft(l.floating.current).body;b.style.pointerEvents="",b.removeAttribute(Pe),B.current=!1}},[l]);return u.useEffect(()=>{if(!c)return;function b(){return r.current.openEvent?["click","mousedown"].includes(r.current.openEvent.type):!1}function x(R){if(clearTimeout(T.current),P.current=!1,v&&!Qe(k.current)||d>0&&te(E.current,"open")===0)return;const L=te(E.current,"open",k.current);L?T.current=setTimeout(()=>{o(!0,R,"hover")},L):o(!0,R,"hover")}function I(R){if(b())return;D.current();const L=ft(i);if(clearTimeout(F.current),y.current){n||clearTimeout(T.current),w.current=y.current({...e,tree:p,x:R.clientX,y:R.clientY,onClose(){A(),j(),N(R,!0,"safe-polygon")}});const V=w.current;L.addEventListener("mousemove",V),D.current=()=>{L.removeEventListener("mousemove",V)};return}(k.current==="touch"?!rt(i,R.relatedTarget):!0)&&N(R)}function S(R){b()||y.current==null||y.current({...e,tree:p,x:R.clientX,y:R.clientY,onClose(){A(),j(),N(R)}})(R)}if(M(s)){const R=s;return n&&R.addEventListener("mouseleave",S),i==null||i.addEventListener("mouseleave",S),h&&R.addEventListener("mousemove",x,{once:!0}),R.addEventListener("mouseenter",x),R.addEventListener("mouseleave",I),()=>{n&&R.removeEventListener("mouseleave",S),i==null||i.removeEventListener("mouseleave",S),h&&R.removeEventListener("mousemove",x),R.removeEventListener("mouseenter",x),R.removeEventListener("mouseleave",I)}}},[s,i,c,e,v,d,h,N,j,A,o,n,p,E,y,r]),vt(()=>{var b;if(c&&n&&(b=y.current)!=null&&b.__options.blockPointerEvents&&O()){const I=ft(i).body;if(I.setAttribute(Pe,""),I.style.pointerEvents="none",B.current=!0,M(s)&&i){var x;const S=s,R=p==null||(x=p.nodesRef.current.find(L=>L.id===C))==null||(x=x.context)==null?void 0:x.elements.floating;return R&&(R.style.pointerEvents=""),S.style.pointerEvents="auto",i.style.pointerEvents="auto",()=>{S.style.pointerEvents="",i.style.pointerEvents=""}}}},[c,n,C,i,s,p,y,O]),vt(()=>{n||(k.current=void 0,j(),A())},[n,j,A]),u.useEffect(()=>()=>{j(),clearTimeout(T.current),clearTimeout(F.current),A()},[c,s,j,A]),u.useMemo(()=>{if(!c)return{};function b(x){k.current=x.pointerType}return{reference:{onPointerDown:b,onPointerEnter:b,onMouseMove(x){n||d===0||(clearTimeout(F.current),F.current=setTimeout(()=>{P.current||o(!0,x.nativeEvent,"hover")},d))}},floating:{onMouseEnter(){clearTimeout(T.current)},onMouseLeave(x){N(x.nativeEvent,!1)}}}},[c,d,n,o,N])}function Ht(e,t){let n=e.filter(r=>{var a;return r.parentId===t&&((a=r.context)==null?void 0:a.open)}),o=n;for(;o.length;)o=e.filter(r=>{var a;return(a=o)==null?void 0:a.some(s=>{var i;return r.parentId===s.id&&((i=r.context)==null?void 0:i.open)})}),n=n.concat(o);return n}const gn=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function vn(e,t){const n=pn(e,gn());t==="prev"&&n.reverse();const o=n.indexOf(se(ft(e)));return n.slice(o+1)[0]}function Xo(){return vn(document.body,"next")}function Zo(){return vn(document.body,"prev")}function ee(e,t){const n=t||e.currentTarget,o=e.relatedTarget;return!o||!rt(n,o)}function Go(e){pn(e,gn()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function Qo(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const o=n.dataset.tabindex;delete n.dataset.tabindex,o?n.setAttribute("tabindex",o):n.removeAttribute("tabindex")})}const bn={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Jo;function je(e){e.key==="Tab"&&(e.target,clearTimeout(Jo))}const Le=u.forwardRef(function(t,n){const[o,r]=u.useState();vt(()=>(Ge()&&r("button"),document.addEventListener("keydown",je),()=>{document.removeEventListener("keydown",je)}),[]);const a={ref:n,tabIndex:0,role:o,"aria-hidden":o?void 0:!0,[Bt("focus-guard")]:"",style:bn};return u.createElement("span",qt({},t,a))}),xn=u.createContext(null);function tr(e){let{id:t,root:n}=e===void 0?{}:e;const[o,r]=u.useState(null),a=Zt(),s=nr(),i=u.useMemo(()=>({id:t,root:n,portalContext:s,uniqueId:a}),[t,n,s,a]),l=u.useRef();return vt(()=>()=>{o==null||o.remove()},[o,i]),vt(()=>{if(l.current===i)return;l.current=i;const{id:c,root:g,portalContext:m,uniqueId:v}=i,d=c?document.getElementById(c):null,h=Bt("portal");if(d){const p=document.createElement("div");p.id=v,p.setAttribute(h,""),d.appendChild(p),r(p)}else{let p=g||(m==null?void 0:m.portalNode);p&&!M(p)&&(p=p.current),p=p||document.body;let C=null;c&&(C=document.createElement("div"),C.id=c,p.appendChild(C));const y=document.createElement("div");y.id=v,y.setAttribute(h,""),p=C||p,p.appendChild(y),r(y)}},[i]),o}function er(e){let{children:t,id:n,root:o=null,preserveTabOrder:r=!0}=e;const a=tr({id:n,root:o}),[s,i]=u.useState(null),l=u.useRef(null),c=u.useRef(null),g=u.useRef(null),m=u.useRef(null),v=!!s&&!s.modal&&s.open&&r&&!!(o||a);return u.useEffect(()=>{if(!a||!r||s!=null&&s.modal)return;function d(h){a&&ee(h)&&(h.type==="focusin"?Qo:Go)(a)}return a.addEventListener("focusin",d,!0),a.addEventListener("focusout",d,!0),()=>{a.removeEventListener("focusin",d,!0),a.removeEventListener("focusout",d,!0)}},[a,r,s==null?void 0:s.modal]),u.createElement(xn.Provider,{value:u.useMemo(()=>({preserveTabOrder:r,beforeOutsideRef:l,afterOutsideRef:c,beforeInsideRef:g,afterInsideRef:m,portalNode:a,setFocusManagerState:i}),[r,a])},v&&a&&u.createElement(Le,{"data-type":"outside",ref:l,onFocus:d=>{if(ee(d,a)){var h;(h=g.current)==null||h.focus()}else{const p=Zo()||(s==null?void 0:s.refs.domReference.current);p==null||p.focus()}}}),v&&a&&u.createElement("span",{"aria-owns":a.id,style:bn}),a&&Ye.createPortal(t,a),v&&a&&u.createElement(Le,{"data-type":"outside",ref:c,onFocus:d=>{if(ee(d,a)){var h;(h=m.current)==null||h.focus()}else{const p=Xo()||(s==null?void 0:s.refs.domReference.current);p==null||p.focus(),s!=null&&s.closeOnFocusOut&&(s==null||s.onOpenChange(!1,d.nativeEvent))}}}))}const nr=()=>u.useContext(xn),or={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},rr={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Oe=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function ar(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,nodeId:r,elements:{reference:a,domReference:s,floating:i},dataRef:l}=e,{enabled:c=!0,escapeKey:g=!0,outsidePress:m=!0,outsidePressEvent:v="pointerdown",referencePress:d=!1,referencePressEvent:h="pointerdown",ancestorScroll:p=!1,bubbles:C,capture:y}=t,E=xe(),k=Rt(typeof m=="function"?m:()=>!1),T=typeof m=="function"?k:m,w=u.useRef(!1),F=u.useRef(!1),{escapeKey:P,outsidePress:B}=Oe(C),{escapeKey:D,outsidePress:O}=Oe(y),N=Rt(x=>{if(!n||!c||!g||x.key!=="Escape")return;const I=E?Ht(E.nodesRef.current,r):[];if(!P&&(x.stopPropagation(),I.length>0)){let S=!0;if(I.forEach(R=>{var L;if((L=R.context)!=null&&L.open&&!R.context.dataRef.current.__escapeKeyBubbles){S=!1;return}}),!S)return}o(!1,Mn(x)?x.nativeEvent:x,"escape-key")}),j=Rt(x=>{var I;const S=()=>{var R;N(x),(R=xt(x))==null||R.removeEventListener("keydown",S)};(I=xt(x))==null||I.addEventListener("keydown",S)}),A=Rt(x=>{const I=w.current;w.current=!1;const S=F.current;if(F.current=!1,v==="click"&&S||I||typeof T=="function"&&!T(x))return;const R=xt(x),L="["+Bt("inert")+"]",$=ft(i).querySelectorAll(L);let V=M(R)?R:null;for(;V&&!It(V);){const W=wt(V);if(It(W)||!M(W))break;V=W}if($.length&&M(R)&&!zn(R)&&!rt(R,i)&&Array.from($).every(W=>!rt(V,W)))return;if(K(R)&&i){const W=R.clientWidth>0&&R.scrollWidth>R.clientWidth,_=R.clientHeight>0&&R.scrollHeight>R.clientHeight;let G=_&&x.offsetX>R.clientWidth;if(_&&q(R).direction==="rtl"&&(G=x.offsetX<=R.offsetWidth-R.clientWidth),G||W&&x.offsetY>R.clientHeight)return}const ut=E&&Ht(E.nodesRef.current,r).some(W=>{var _;return Qt(x,(_=W.context)==null?void 0:_.elements.floating)});if(Qt(x,i)||Qt(x,s)||ut)return;const tt=E?Ht(E.nodesRef.current,r):[];if(tt.length>0){let W=!0;if(tt.forEach(_=>{var G;if((G=_.context)!=null&&G.open&&!_.context.dataRef.current.__outsidePressBubbles){W=!1;return}}),!W)return}o(!1,x,"outside-press")}),b=Rt(x=>{var I;const S=()=>{var R;A(x),(R=xt(x))==null||R.removeEventListener(v,S)};(I=xt(x))==null||I.addEventListener(v,S)});return u.useEffect(()=>{if(!n||!c)return;l.current.__escapeKeyBubbles=P,l.current.__outsidePressBubbles=B;function x(R){o(!1,R,"ancestor-scroll")}const I=ft(i);g&&I.addEventListener("keydown",D?j:N,D),T&&I.addEventListener(v,O?b:A,O);let S=[];return p&&(M(s)&&(S=ht(s)),M(i)&&(S=S.concat(ht(i))),!M(a)&&a&&a.contextElement&&(S=S.concat(ht(a.contextElement)))),S=S.filter(R=>{var L;return R!==((L=I.defaultView)==null?void 0:L.visualViewport)}),S.forEach(R=>{R.addEventListener("scroll",x,{passive:!0})}),()=>{g&&I.removeEventListener("keydown",D?j:N,D),T&&I.removeEventListener(v,O?b:A,O),S.forEach(R=>{R.removeEventListener("scroll",x)})}},[l,i,s,a,g,T,v,n,o,p,c,P,B,N,D,j,A,O,b]),u.useEffect(()=>{w.current=!1},[T,v]),u.useMemo(()=>c?{reference:{onKeyDown:N,[or[h]]:x=>{d&&o(!1,x.nativeEvent,"reference-press")}},floating:{onKeyDown:N,onMouseDown(){F.current=!0},onMouseUp(){F.current=!0},[rr[v]]:()=>{w.current=!0}}}:{},[c,d,v,h,o,N])}function sr(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:o,nodeId:r}=e,[a,s]=u.useState(null),i=((t=e.elements)==null?void 0:t.reference)||a,l=yo(e),c=xe(),g=be()!=null,m=Rt((w,F,P)=>{w&&(d.current.openEvent=F),h.emit("openchange",{open:w,event:F,reason:P,nested:g}),o==null||o(w,F,P)}),v=u.useRef(null),d=u.useRef({}),h=u.useState(()=>Uo())[0],p=Zt(),C=u.useCallback(w=>{const F=M(w)?{getBoundingClientRect:()=>w.getBoundingClientRect(),contextElement:w}:w;l.refs.setReference(F)},[l.refs]),y=u.useCallback(w=>{(M(w)||w===null)&&(v.current=w,s(w)),(M(l.refs.reference.current)||l.refs.reference.current===null||w!==null&&!M(w))&&l.refs.setReference(w)},[l.refs]),E=u.useMemo(()=>({...l.refs,setReference:y,setPositionReference:C,domReference:v}),[l.refs,y,C]),k=u.useMemo(()=>({...l.elements,domReference:i}),[l.elements,i]),T=u.useMemo(()=>({...l,refs:E,elements:k,dataRef:d,nodeId:r,floatingId:p,events:h,open:n,onOpenChange:m}),[l,r,p,h,n,m,E,k]);return vt(()=>{const w=c==null?void 0:c.nodesRef.current.find(F=>F.id===r);w&&(w.context=T)}),u.useMemo(()=>({...l,context:T,refs:E,elements:k}),[l,E,k,T])}function ir(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,events:r,refs:a,elements:{floating:s,domReference:i}}=e,{enabled:l=!0,visibleOnly:c=!0}=t,g=u.useRef(!1),m=u.useRef(),v=u.useRef(!0);return u.useEffect(()=>{if(!l)return;const d=U(i);function h(){!n&&K(i)&&i===se(ft(i))&&(g.current=!0)}function p(){v.current=!0}return d.addEventListener("blur",h),d.addEventListener("keydown",p,!0),()=>{d.removeEventListener("blur",h),d.removeEventListener("keydown",p,!0)}},[i,n,l]),u.useEffect(()=>{if(!l)return;function d(h){let{reason:p}=h;(p==="reference-press"||p==="escape-key")&&(g.current=!0)}return r.on("openchange",d),()=>{r.off("openchange",d)}},[r,l]),u.useEffect(()=>()=>{clearTimeout(m.current)},[]),u.useMemo(()=>l?{reference:{onPointerDown(d){Nn(d.nativeEvent)||(v.current=!1)},onMouseLeave(){g.current=!1},onFocus(d){if(g.current)return;const h=xt(d.nativeEvent);if(c&&M(h))try{if(Ge()&&Bn())throw Error();if(!h.matches(":focus-visible"))return}catch{if(!v.current&&!Hn(h))return}o(!0,d.nativeEvent,"focus")},onBlur(d){g.current=!1;const h=d.relatedTarget,p=M(h)&&h.hasAttribute(Bt("focus-guard"))&&h.getAttribute("data-type")==="outside";m.current=window.setTimeout(()=>{const C=se(i?i.ownerDocument:document);!h&&C===i||rt(a.floating.current,h)||rt(i,h)||p||o(!1,d.nativeEvent,"focus")})}}}:{},[l,c,i,a,o])}const Ne="active",Be="selected";function ne(e,t,n){const o=new Map,r=n==="item";let a=e;if(r&&e){const{[Ne]:s,[Be]:i,...l}=e;a=l}return{...n==="floating"&&{tabIndex:-1},...a,...t.map(s=>{const i=s?s[n]:null;return typeof i=="function"?e?i(e):null:i}).concat(e).reduce((s,i)=>(i&&Object.entries(i).forEach(l=>{let[c,g]=l;if(!(r&&[Ne,Be].includes(c)))if(c.indexOf("on")===0){if(o.has(c)||o.set(c,[]),typeof g=="function"){var m;(m=o.get(c))==null||m.push(g),s[c]=function(){for(var v,d=arguments.length,h=new Array(d),p=0;p<d;p++)h[p]=arguments[p];return(v=o.get(c))==null?void 0:v.map(C=>C(...h)).find(C=>C!==void 0)}}}else s[c]=g}),s),{})}}function lr(e){e===void 0&&(e=[]);const t=e,n=u.useCallback(a=>ne(a,e,"reference"),t),o=u.useCallback(a=>ne(a,e,"floating"),t),r=u.useCallback(a=>ne(a,e,"item"),e.map(a=>a==null?void 0:a.item));return u.useMemo(()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:r}),[n,o,r])}const cr=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ur(e,t){var n;t===void 0&&(t={});const{open:o,floatingId:r}=e,{enabled:a=!0,role:s="dialog"}=t,i=(n=cr.get(s))!=null?n:s,l=Zt(),g=be()!=null;return u.useMemo(()=>{if(!a)return{};const m={id:r,...i&&{role:i}};return i==="tooltip"||s==="label"?{reference:{["aria-"+(s==="label"?"labelledby":"describedby")]:o?r:void 0},floating:m}:{reference:{"aria-expanded":o?"true":"false","aria-haspopup":i==="alertdialog"?"dialog":i,"aria-controls":o?r:void 0,...i==="listbox"&&{role:"combobox"},...i==="menu"&&{id:l},...i==="menu"&&g&&{role:"menuitem"},...s==="select"&&{"aria-autocomplete":"none"},...s==="combobox"&&{"aria-autocomplete":"list"}},floating:{...m,...i==="menu"&&{"aria-labelledby":l}},item(v){let{active:d,selected:h}=v;const p={role:"option",...d&&{id:r+"-option"}};switch(s){case"select":return{...p,"aria-selected":d&&h};case"combobox":return{...p,...d&&{"aria-selected":!0}}}return{}}}},[a,s,i,o,r,l,g])}function De(e,t){const[n,o]=e;let r=!1;const a=t.length;for(let s=0,i=a-1;s<a;i=s++){const[l,c]=t[s]||[0,0],[g,m]=t[i]||[0,0];c>=o!=m>=o&&n<=(g-l)*(o-c)/(m-c)+l&&(r=!r)}return r}function dr(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function fr(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:n=!1,requireIntent:o=!0}=e;let r,a=!1,s=null,i=null,l=performance.now();function c(m,v){const d=performance.now(),h=d-l;if(s===null||i===null||h===0)return s=m,i=v,l=d,null;const p=m-s,C=v-i,E=Math.sqrt(p*p+C*C)/h;return s=m,i=v,l=d,E}const g=m=>{let{x:v,y:d,placement:h,elements:p,onClose:C,nodeId:y,tree:E}=m;return function(T){function w(){clearTimeout(r),C()}if(clearTimeout(r),!p.domReference||!p.floating||h==null||v==null||d==null)return;const{clientX:F,clientY:P}=T,B=[F,P],D=xt(T),O=T.type==="mouseleave",N=rt(p.floating,D),j=rt(p.domReference,D),A=p.domReference.getBoundingClientRect(),b=p.floating.getBoundingClientRect(),x=h.split("-")[0],I=v>b.right-b.width/2,S=d>b.bottom-b.height/2,R=dr(B,A),L=b.width>A.width,$=b.height>A.height,V=(L?A:b).left,ut=(L?A:b).right,tt=($?A:b).top,W=($?A:b).bottom;if(N&&(a=!0,!O))return;if(j&&(a=!1),j&&!O){a=!0;return}if(O&&M(T.relatedTarget)&&rt(p.floating,T.relatedTarget)||E&&Ht(E.nodesRef.current,y).some(et=>{let{context:z}=et;return z==null?void 0:z.open}))return;if(x==="top"&&d>=A.bottom-1||x==="bottom"&&d<=A.top+1||x==="left"&&v>=A.right-1||x==="right"&&v<=A.left+1)return w();let _=[];switch(x){case"top":_=[[V,A.top+1],[V,b.bottom-1],[ut,b.bottom-1],[ut,A.top+1]];break;case"bottom":_=[[V,b.top+1],[V,A.bottom-1],[ut,A.bottom-1],[ut,b.top+1]];break;case"left":_=[[b.right-1,W],[b.right-1,tt],[A.left+1,tt],[A.left+1,W]];break;case"right":_=[[A.right-1,W],[A.right-1,tt],[b.left+1,tt],[b.left+1,W]];break}function G(et){let[z,H]=et;switch(x){case"top":{const nt=[L?z+t/2:I?z+t*4:z-t*4,H+t+1],ot=[L?z-t/2:I?z+t*4:z-t*4,H+t+1],dt=[[b.left,I||L?b.bottom-t:b.top],[b.right,I?L?b.bottom-t:b.top:b.bottom-t]];return[nt,ot,...dt]}case"bottom":{const nt=[L?z+t/2:I?z+t*4:z-t*4,H-t],ot=[L?z-t/2:I?z+t*4:z-t*4,H-t],dt=[[b.left,I||L?b.top+t:b.bottom],[b.right,I?L?b.top+t:b.bottom:b.top+t]];return[nt,ot,...dt]}case"left":{const nt=[z+t+1,$?H+t/2:S?H+t*4:H-t*4],ot=[z+t+1,$?H-t/2:S?H+t*4:H-t*4];return[...[[S||$?b.right-t:b.left,b.top],[S?$?b.right-t:b.left:b.right-t,b.bottom]],nt,ot]}case"right":{const nt=[z-t,$?H+t/2:S?H+t*4:H-t*4],ot=[z-t,$?H-t/2:S?H+t*4:H-t*4],dt=[[S||$?b.left+t:b.right,b.top],[S?$?b.left+t:b.right:b.left+t,b.bottom]];return[nt,ot,...dt]}}}if(!De([F,P],_)){if(a&&!R)return w();if(!O&&o){const et=c(T.clientX,T.clientY);if(et!==null&&et<.1)return w()}De([F,P],G([v,d]))?!a&&o&&(r=window.setTimeout(w,40)):w()}}};return g.__options={blockPointerEvents:n},g}const Me=ue.useId;let hr=BigInt(0);function mr(e){const[t,n]=u.useState(e),o=e||t;return u.useEffect(()=>{t==null&&n(`salt-${++hr}`)},[t]),o}function pr(e){if(Me!==void 0){const t=Me();return e??t}return mr(e)}const gr=u.forwardRef(function(t,n){const{open:o,top:r,left:a,position:s,width:i,height:l,...c}=t,g={top:r,left:a,position:s};return o?f.jsx(er,{children:f.jsx(An,{children:f.jsx("div",{style:g,...c,ref:n})})}):null}),vr=u.createContext({Component:gr});function br(){return u.useContext(vr)}const xr=e=>e,yr={platform:ve,middleware:xr,animationFrame:!1},wr=u.createContext(yr);function Tr(){return u.useContext(wr)}const Cr=[ln(),sn({limiter:cn()})];function Sr(e){const{placement:t,strategy:n,middleware:o=Cr,open:r=!1,onOpenChange:a}=e,s=d=>{m(),a==null||a(d)},{platform:i,middleware:l,animationFrame:c}=Tr(),{refs:g,update:m,...v}=sr({placement:t,strategy:n,middleware:l(o),open:r,onOpenChange:s,whileElementsMounted:(...d)=>vo(...d,{animationFrame:c}),platform:i});return{reference:g.setReference,floating:g.setFloating,refs:g,update:m,...v}}function Rr(e,t){return u.createContext(t)}function yn({controlled:e,default:t,name:n,state:o="value"}){const{current:r}=u.useRef(e!==void 0),[a,s]=u.useState(t),i=e!==void 0?e:a;u.useRef(t),u.useEffect(()=>{},[o,n,e]),u.useEffect(()=>{},[JSON.stringify(t,Er)]);const l=u.useCallback(c=>{r||s(c)},[r]);return[i,l,r]}function Er(e,t){return u.isValidElement(t)?null:t}var Ir=`/* Style applied to the root element */
.saltIcon {
  --icon-color: currentColor;
  --icon-size-multiplier: var(--saltIcon-size-multiplier, 1);
  --icon-base-size: var(--salt-size-icon, 12px);
  /**
   * Icon size will be the multiplier (an integer from the size prop) * the base size (set by the theme per density)
   * Icons should never be smaller than 12px for readability so we've added a max() to enforce this
   * Consumers can use --saltIcon-size variable to override this rule as an escape hatch
  */
  --icon-size: var(--saltIcon-size, max(calc(var(--icon-base-size) * var(--icon-size-multiplier)), 12px));
}

.saltIcon {
  fill: var(--saltIcon-color, var(--icon-color));
  display: inline-block;
  margin: var(--saltIcon-margin, 0);
  position: relative;
  width: var(--icon-size);
  height: var(--icon-size);
  min-width: var(--icon-size);
  min-height: var(--icon-size);
}

.saltIcon-primary {
  --icon-color: var(--salt-content-primary-foreground);
}

.saltIcon-secondary {
  --icon-color: var(--salt-content-secondary-foreground);
}
`;const kr=e=>(...t)=>[e,...t].join("-"),ze=kr("saltIcon"),wn=1,At=u.forwardRef(function({children:t,className:n,color:o="inherit",size:r=wn,style:a,...s},i){const l=st();it({testId:"salt-icon",css:Ir,window:l});const c={...a,"--saltIcon-size-multiplier":`${r}`};return f.jsx("svg",{className:Y(ze(),{[ze(o)]:o!=="inherit"},n),style:c,role:"img",...s,ref:i,children:f.jsx("g",{"aria-hidden":!0,children:t})})}),Ar=u.forwardRef(function(t,n){return f.jsx(At,{"data-testid":"AddIcon","aria-label":"add",viewBox:"0 0 12 12",ref:n,...t,children:f.jsx("path",{d:"M7 0H5v5H0v2h5v5h2V7h5V5H7V0z"})})}),Fr=u.forwardRef(function(t,n){return f.jsxs(At,{"data-testid":"DoubleChevronUpIcon","aria-label":"double chevron up",viewBox:"0 0 12 12",ref:n,...t,children:[f.jsx("path",{d:"M1.599 11.5 6 7.192l4.401 4.308 1.099-.992L6 5 .5 10.508l1.099.992Z"}),f.jsx("path",{d:"M1.599 7 6 2.692 10.401 7l1.099-.992L6 .5.5 6.008 1.599 7Z"})]})}),Pr=u.forwardRef(function(t,n){return f.jsx(At,{"data-testid":"ErrorSolidIcon","aria-label":"error solid",viewBox:"0 0 12 12",ref:n,...t,children:f.jsx("path",{fillRule:"evenodd",d:"M3 0h6l3 3v6l-3 3H3L0 9V3l3-3Zm2 2h2v5H5V2Zm2 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"})})}),jr=u.forwardRef(function(t,n){return f.jsx(At,{"data-testid":"InfoSolidIcon","aria-label":"info solid",viewBox:"0 0 12 12",ref:n,...t,children:f.jsx("path",{fillRule:"evenodd",d:"M12 0H0v12h12V0ZM5 2h2v2H5V2Zm0 3h2v5H5V5Z",clipRule:"evenodd"})})}),Lr=u.forwardRef(function(t,n){return f.jsx(At,{"data-testid":"SuccessTickIcon","aria-label":"success tick",viewBox:"0 0 12 12",ref:n,...t,children:f.jsx("path",{d:"m11.8 2.26-7.463 8.052-4.1-3.832 1.024-1.096L4.26 8.187l6.439-6.948 1.1 1.02z"})})}),Or=u.forwardRef(function(t,n){return f.jsx(At,{"data-testid":"WarningSolidIcon","aria-label":"warning solid",viewBox:"0 0 12 12",ref:n,...t,children:f.jsx("path",{fillRule:"evenodd",d:"m6 0 6 12H0L6 0ZM5 4.5h2V8H5V4.5Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"})})});var Nr=`.saltStatusIndicator {
  --statusIndicator-warning-color: var(--salt-status-warning-foreground);
  --statusIndicator-info-color: var(--salt-status-info-foreground);
  --statusIndicator-success-color: var(--salt-status-success-foreground);
  --statusIndicator-error-color: var(--salt-status-error-foreground);
  color: var(--saltStatusIndicator-color, var(--statusIndicator-Color));
}

.saltStatusIndicator-error {
  --statusIndicator-Color: var(--statusIndicator-error-color);
}

.saltStatusIndicator-warning {
  --statusIndicator-Color: var(--statusIndicator-warning-color);
}

.saltStatusIndicator-success {
  --statusIndicator-Color: var(--statusIndicator-success-color);
}

.saltStatusIndicator-info {
  --statusIndicator-Color: var(--statusIndicator-info-color);
}
`;const Br={error:Pr,success:Lr,warning:Or,info:jr},Dr={error:"error",success:"success",warning:"warning",info:"info"},We=lt("saltStatusIndicator"),Mr=u.forwardRef(function({className:t,status:n,size:o=wn,...r},a){const s=st();it({testId:"salt-status-indicator",css:Nr,window:s});const i=Br[n],l=Dr[n];return f.jsx(i,{className:Y(We(),We(n),t),size:o,"aria-label":l,...r,ref:a})});function zr(e,t=166,n=!1){let o;const r=function(...s){const i=()=>{e.apply(this,s)};clearTimeout(o),n&&i(),o=window.setTimeout(i,t)};return r.clear=()=>{clearTimeout(o)},r}const Wr=({debounce:e=0}={})=>{const t=u.useContext(Fn),n=u.useRef(!0),o=u.useCallback((s,i)=>{const l=t&&t.announce;function c(){n.current&&l&&t.announce(s)}i?setTimeout(c,i):c()},[t]),r=u.useMemo(()=>e>0?zr(o,e):o,[o,e]),a=u.useMemo(()=>({...t,announce:r}),[t,r]);return u.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a};var Hr=`/* Styles applied to the root element if variant="cta" */
.saltButton-cta {
  --button-background: var(--salt-actionable-cta-background);
  --button-background-active: var(--salt-actionable-cta-background-active);
  --button-background-disabled: var(--salt-actionable-cta-background-disabled);
  --button-background-hover: var(--salt-actionable-cta-background-hover);
  --button-text-color: var(--salt-actionable-cta-foreground);
  --button-text-color-active: var(--salt-actionable-cta-foreground-active);
  --button-text-color-disabled: var(--salt-actionable-cta-foreground-disabled);
  --button-text-color-hover: var(--salt-actionable-cta-foreground-hover);
}

/* Styles applied to the root element if variant="primary" (or no variant specified) */
.saltButton-primary {
  --button-background: var(--salt-actionable-primary-background);
  --button-background-active: var(--salt-actionable-primary-background-active);
  --button-background-disabled: var(--salt-actionable-primary-background-disabled);
  --button-background-hover: var(--salt-actionable-primary-background-hover);
  --button-text-color: var(--salt-actionable-primary-foreground);
  --button-text-color-active: var(--salt-actionable-primary-foreground-active);
  --button-text-color-disabled: var(--salt-actionable-primary-foreground-disabled);
  --button-text-color-hover: var(--salt-actionable-primary-foreground-hover);
}

/* Styles applied to the root element if variant="secondary" */
.saltButton-secondary {
  --button-background: var(--salt-actionable-secondary-background);
  --button-background-active: var(--salt-actionable-secondary-background-active);
  --button-background-disabled: var(--salt-actionable-secondary-background-disabled);
  --button-background-hover: var(--salt-actionable-secondary-background-hover);
  --button-text-color: var(--salt-actionable-secondary-foreground);
  --button-text-color-active: var(--salt-actionable-secondary-foreground-active);
  --button-text-color-disabled: var(--salt-actionable-secondary-foreground-disabled);
  --button-text-color-hover: var(--salt-actionable-secondary-foreground-hover);
}

.saltButton {
  align-items: var(--saltButton-alignItems, center);
  appearance: none;
  background: var(--saltButton-background, var(--button-background));
  border-color: var(--saltButton-borderColor, transparent);
  border-style: var(--saltButton-borderStyle, solid);
  border-width: var(--saltButton-borderWidth, 0);
  border-radius: var(--saltButton-borderRadius, 0);
  color: var(--saltButton-text-color, var(--button-text-color));
  cursor: var(--saltButton-cursor, pointer);
  display: inline-flex;
  gap: var(--salt-spacing-50);
  justify-content: var(--saltButton-justifyContent, center);
  font-size: var(--saltButton-fontSize, var(--salt-text-fontSize));
  font-family: var(--saltButton-fontFamily, var(--salt-text-fontFamily));
  line-height: var(--saltButton-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--saltButton-letterSpacing, var(--salt-text-action-letterSpacing));
  text-transform: var(--saltButton-textTransform, var(--salt-text-action-textTransform));
  padding: 0 var(--saltButton-padding, var(--salt-size-unit));
  margin: var(--saltButton-margin, 0);
  height: var(--saltButton-height, var(--salt-size-base));
  min-width: var(--saltButton-minWidth, unset);
  position: relative;
  text-align: var(--saltButton-textAlign, var(--salt-text-action-textAlign));
  text-decoration: none;
  transition: none;
  width: var(--saltButton-width, auto);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  /* Styles applied to align children*/
  font-weight: var(--saltButton-fontWeight, var(--salt-text-action-fontWeight));
}

/* Pseudo-class applied to the root element on focus */
.saltButton:focus-visible {
  outline-style: var(--salt-focused-outlineStyle);
  outline-width: var(--salt-focused-outlineWidth);
  outline-color: var(--salt-focused-outlineColor);
  outline-offset: var(--salt-focused-outlineOffset);
  background: var(--saltButton-background-hover, var(--button-background-hover));
  color: var(--saltButton-text-color-hover, var(--button-text-color-hover));
}

/* Pseudo-class applied to the root element on focus when Button is active */
.saltButton.saltButton-active:focus-visible,
.saltButton:focus-visible(:active) {
  background: var(--saltButton-background-active-hover, var(--button-background));
  color: var(--saltButton-text-color-active-hover, var(--button-text-color));
}

/* Pseudo-class applied to the root element on hover when Button is not active or disabled */
.saltButton:hover {
  background: var(--saltButton-background-hover, var(--button-background-hover));
  color: var(--saltButton-text-color-hover, var(--button-text-color-hover));
}

/* Pseudo-class applied to the root element when Button is active and not disabled */
.saltButton:active,
.saltButton.saltButton-active {
  background: var(--saltButton-background-active, var(--button-background-active));
  color: var(--saltButton-text-color-active, var(--button-text-color-active));
}

/* Pseudo-class applied to the root element if disabled={true} */
.saltButton:disabled,
.saltButton-disabled,
  /* Overrides to apply the disabled style when the button is focusable while also disabled */
.saltButton-disabled:active,
.saltButton-disabled:focus-visible,
.saltButton-disabled:hover {
  background: var(--saltButton-background-disabled, var(--button-background-disabled));
  color: var(--saltButton-text-color-disabled, var(--button-text-color-disabled));
  cursor: var(--saltButton-cursor-disabled, var(--salt-actionable-cursor-disabled));
}

.saltButton[href] {
  display: inline-flex;
}
`;const _r=({disabled:e,focusableWhenDisabled:t,onKeyUp:n,onKeyDown:o,onClick:r,onBlur:a})=>{const[s,i]=u.useState(""),[l,c]=u.useState(!1),g="Enter",m=" ";return u.useEffect(()=>{const y=setTimeout(()=>{s!==g&&s!==m&&c(!1)},0);return()=>{clearTimeout(y)}},[l,s]),{active:l,buttonProps:{"aria-disabled":e&&t?!0:void 0,disabled:e&&!t,tabIndex:e&&!t?-1:0,onBlur:y=>{c(!1),a==null||a(y)},onClick:e?void 0:y=>{c(!0),r==null||r(y)},onKeyDown:y=>{(y.key===g||y.key===m)&&(i(y.key),c(!0)),o==null||o(y)},onKeyUp:y=>{i(""),c(!1),n==null||n(y)}}}},Mt=lt("saltButton"),at=u.forwardRef(function({children:t,className:n,disabled:o,focusableWhenDisabled:r,onKeyUp:a,onKeyDown:s,onBlur:i,onClick:l,type:c="button",variant:g="primary",...m},v){const{active:d,buttonProps:h}=_r({disabled:o,focusableWhenDisabled:r,onKeyUp:a,onKeyDown:s,onBlur:i,onClick:l}),p=st();it({testId:"salt-button",css:Hr,window:p});const{tabIndex:C,...y}=h;return f.jsx("button",{...y,className:Y(Mt(),Mt(g),{[Mt("disabled")]:o,[Mt("active")]:d},n),...m,ref:v,type:c,children:t})});function Tn(e){return e.length>0?e[0].toUpperCase()+e.slice(1):e}const Cn=Rr("FormFieldContext",{});function Gt(){return u.useContext(Cn)||{}}var $r=`.saltFormField {
  display: inline-grid;
  position: relative;
  gap: var(--salt-spacing-100);
  text-align: left;
  width: var(--saltFormField-width, 100%);

  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
}

.saltFormField-labelTop {
  grid-template-areas:
    "label"
    "controls";
}

.saltFormField-labelTop .saltFormFieldHelperText {
  grid-area: 3 / 1;
}

.saltFormField-labelLeft {
  align-self: center;
  grid-template-columns: var(--formField-label-width, 40%) 1fr;
  grid-template-areas: "label controls";
}

.saltFormField-labelRight {
  align-self: center;
  grid-template-columns: var(--formField-label-width, 40%) 1fr;
  grid-template-areas: "label controls";
}

.saltFormField-labelLeft .saltFormFieldHelperText,
.saltFormField-labelRight .saltFormFieldHelperText {
  grid-area: 2 / 2;
}

.saltFormField-labelRight .saltFormFieldLabel,
.saltFormField-labelLeft .saltFormFieldLabel {
  padding-top: var(--salt-spacing-100);
}

.saltFormField-labelRight .saltFormFieldLabel {
  text-align: right;
}

.saltFormField-controls {
  align-items: center;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-column-gap: var(--salt-spacing-100);
}

.saltFormFieldLabel {
  grid-area: label;
}

.saltFormFieldHelperText {
  grid-area: helperText;
}

.saltFormField-disabled {
  --saltInput-outline: none;
  --saltCheckbox-outline: none;
  --saltRadioButton-outline: none;
}
`;const oe=lt("saltFormField"),X=u.forwardRef(({children:e,className:t,disabled:n=!1,id:o,labelPlacement:r="top",necessity:a,onBlur:s,onFocus:i,readOnly:l=!1,validationStatus:c,...g},m)=>{const v=st();it({testId:"salt-form-field",css:$r,window:v});const d=pr(o),h=d?`label-${d}`:void 0,p=d?`helperText-${d}`:void 0;return f.jsx("div",{ref:m,className:Y(oe(),{[oe("disabled")]:n,[oe(`label${Tn(r)}`)]:r},t),...g,children:f.jsx(Cn.Provider,{value:{a11yProps:{"aria-labelledby":h,"aria-describedby":p},disabled:n,necessity:a,readOnly:l,validationStatus:c},children:e})})});var Vr=`/* Main css class. Style for body text */
.saltText {
  color: var(--saltText-color, var(--text-color));
  font-family: var(--saltText-fontFamily, var(--salt-text-fontFamily));
  font-size: var(--saltText-fontSize, var(--salt-text-fontSize));
  line-height: var(--saltText-lineHeight, var(--salt-text-lineHeight));
  font-weight: var(--saltText-fontWeight, var(--salt-text-fontWeight));
}

.saltText::selection {
  background: var(--saltText-highlight, var(--salt-content-foreground-highlight));
}

/* Allows truncation */
.saltText-lineClamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--text-max-rows, 0);
  overflow: hidden;
  word-break: break-word;
}

/* Primary variant */
.saltText-primary {
  --text-color: var(--salt-content-primary-foreground);
}

/* Disabled primary variant */
.saltText-primary.saltText-disabled {
  --text-color: var(--salt-content-primary-foreground-disabled);
}

/* Secondary variant */
.saltText-secondary {
  --text-color: var(--salt-content-secondary-foreground);
}

/* Disabled secondary variant */
.saltText-secondary.saltText-disabled {
  --text-color: var(--salt-content-secondary-foreground-disabled);
}

/* Body emphasis strong */
.saltText strong {
  font-weight: var(--salt-text-fontWeight-strong);
}

/* Body emphasis small */
.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-fontWeight-small);
}

/* Notation */
.saltText-notation.saltText {
  font-family: var(--salt-text-notation-fontFamily);
  font-size: var(--salt-text-notation-fontSize);
  line-height: var(--salt-text-notation-lineHeight);
  font-weight: var(--salt-text-fontWeight);
}

/* Notation emphasis strong */
.saltText-notation.saltText strong {
  font-weight: var(--salt-text-notation-fontWeight-strong);
}

/* Notation emphasis small */
.saltText-notation.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-notation-fontWeight-small);
}

/* Action */
.saltText-action.saltText {
  letter-spacing: var(--salt-text-action-letterSpacing);
  text-transform: var(--salt-text-action-textTransform);
  text-align: var(--salt-text-action-textAlign);
  font-weight: var(--salt-text-action-fontWeight);
}

/* Display 1 */
.saltText-display1.saltText {
  font-family: var(--salt-text-display1-fontFamily);
  font-size: var(--salt-text-display1-fontSize);
  font-weight: var(--salt-text-display1-fontWeight);
  line-height: var(--salt-text-display1-lineHeight);
}

/* Display 2 */
.saltText-display2.saltText {
  font-family: var(--salt-text-display2-fontFamily);
  font-size: var(--salt-text-display2-fontSize);
  font-weight: var(--salt-text-display2-fontWeight);
  line-height: var(--salt-text-display2-lineHeight);
}

/* Display 3 */
.saltText-display3.saltText {
  font-family: var(--salt-text-display3-fontFamily);
  font-size: var(--salt-text-display3-fontSize);
  font-weight: var(--salt-text-display3-fontWeight);
  line-height: var(--salt-text-display3-lineHeight);
}

/* Heading 1 */
h1.saltText,
.saltText-h1.saltText {
  font-family: var(--salt-text-h1-fontFamily);
  font-size: var(--salt-text-h1-fontSize);
  font-weight: var(--salt-text-h1-fontWeight);
  line-height: var(--salt-text-h1-lineHeight);
}

/* H1 emphasis strong */
h1.saltText strong,
.saltText-h1.saltText strong {
  font-weight: var(--salt-text-h1-fontWeight-strong);
}

/* H1 emphasis small */
h1.saltText small,
.saltText-h1.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h1-fontWeight-small);
}

/* Heading 2 */
h2.saltText,
.saltText-h2.saltText {
  font-family: var(--salt-text-h2-fontFamily);
  font-size: var(--salt-text-h2-fontSize);
  font-weight: var(--salt-text-h2-fontWeight);
  line-height: var(--salt-text-h2-lineHeight);
}

/* H2 emphasis strong */
h2.saltText strong,
.saltText-h2.saltText strong {
  font-weight: var(--salt-text-h2-fontWeight-strong);
}

/* H2 emphasis small */
h2.saltText small,
.saltText-h2.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h2-fontWeight-small);
}

/* Heading 3 */
h3.saltText,
.saltText-h3.saltText {
  font-family: var(--salt-text-h3-fontFamily);
  font-size: var(--salt-text-h3-fontSize);
  font-weight: var(--salt-text-h3-fontWeight);
  line-height: var(--salt-text-h3-lineHeight);
}

/* H3 emphasis strong */
h3.saltText strong,
.saltText-h3.saltText strong {
  font-weight: var(--salt-text-h3-fontWeight-strong);
}

/* H3 emphasis small */
h3.saltText small,
.saltText-h3.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h3-fontWeight-small);
}

/* Heading 4 */
h4.saltText,
.saltText-h4.saltText {
  font-family: var(--salt-text-h4-fontFamily);
  font-size: var(--salt-text-h4-fontSize);
  font-weight: var(--salt-text-h4-fontWeight);
  line-height: var(--salt-text-h4-lineHeight);
}

/* H4 emphasis strong */
h4.saltText strong,
.saltText-h4.saltText strong {
  font-weight: var(--salt-text-h4-fontWeight-strong);
}

/* H4 emphasis small */
h4.saltText small,
.saltText-h4.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-h4-fontWeight-small);
}

/* Label */
label.saltText,
.saltText-label.saltText {
  font-family: var(--salt-text-label-fontFamily);
  font-size: var(--salt-text-label-fontSize);
  line-height: var(--salt-text-label-lineHeight);
  font-weight: var(--salt-text-fontWeight);
}

/* Label emphasis strong */
label.saltText strong,
.saltText-label.saltText strong {
  font-weight: var(--salt-text-label-fontWeight-strong);
}

/* Label emphasis small */
label.saltText small,
.saltText-label.saltText small {
  font-size: inherit;
  font-weight: var(--salt-text-fontWeight-small);
}
`;const Ft=lt("saltText"),Ur=u.forwardRef(({as:e,children:t,className:n,disabled:o=!1,maxRows:r,style:a,styleAs:s,variant:i="primary",...l},c)=>{const g=st();it({testId:"salt-text",css:Vr,window:g});const m=e||"div",v={"--text-max-rows":r,...a};return f.jsx(m,{className:Y(Ft(),{[Ft("disabled")]:o,[Ft("lineClamp")]:r,[Ft(s||"")]:s,[Ft(i)]:i},n),...l,ref:c,style:v,children:t})}),Yr=u.forwardRef(function({children:t,...n},o){return f.jsx(Ur,{as:"label",ref:o,...n,children:t})});var Kr=`.saltFormFieldLabel.saltText {
  font-weight: var(--saltFormField-label-fontWeight, var(--salt-text-fontWeight-strong));
  width: 100%;
}

.saltFormFieldLabel:hover + .saltFormField-controls * {
  --input-borderColor: var(--input-borderColor-hover);
}

.saltFormField-labelLeft .saltFormFieldLabel.saltText {
  align-self: baseline;
  padding-top: var(--salt-spacing-100);
}

.saltFormFieldLabel-necessityLabel {
  font-weight: var(--salt-text-fontWeight);
  font-style: var(--salt-editable-help-fontStyle);
}

.saltFormFieldLabel-sentence.saltText {
  color: var(--salt-content-primary-foreground);
  font-size: var(--salt-text-fontSize);
}
`;const re=lt("saltFormFieldLabel"),Z=({className:e,children:t,intent:n="label",...o})=>{const{a11yProps:r,disabled:a,necessity:s}=Gt(),i=st();it({testId:"salt-form-field-label",css:Kr,window:i});const l=s?s==="asterisk"?" *":` (${Tn(s)})`:void 0;return f.jsxs(Yr,{as:"label",className:Y(re(),re(n),e),id:r==null?void 0:r["aria-labelledby"],disabled:a,variant:"secondary",...o,children:[t,l&&f.jsx("span",{className:re("necessityLabel"),children:l})]})},qr=u.forwardRef(function({children:t,className:n,...o},r){return f.jsx("svg",{className:n,...o,role:"img",ref:r,viewBox:"0 0 8 8",children:f.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"})})}),Xr=u.forwardRef(function({children:t,className:n,...o},r){return f.jsx("svg",{className:n,...o,role:"img",viewBox:"0 0 10 8",ref:r,children:f.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.92089 5.95735L8.96399 0L10 1.02133L2.92088 8L0 5.1205L1.03602 4.09918L2.92089 5.95735Z"})})}),Zr=u.forwardRef(function({children:t,className:n,...o},r){return f.jsx("svg",{className:n,...o,role:"img",viewBox:"0 0 9 8",ref:r,children:f.jsx("path",{d:"M0 8L4.5 0L9 8H0Z"})})});var Gr=`.saltStatusAdornment {
  align-self: center;
  display: inline-block;
  fill: var(--saltStatusAdornment-color, var(--statusAdornment-color));
  height: var(--salt-size-adornment);
  min-height: var(--salt-size-adornment);
  padding-left: var(--salt-spacing-100);
  position: relative;
}

.saltStatusAdornment-error {
  --statusAdornment-color: var(--salt-status-error-foreground);
}

.saltStatusAdornment-warning {
  --statusAdornment-color: var(--salt-status-warning-foreground);
}

.saltStatusAdornment-success {
  --statusAdornment-color: var(--salt-status-success-foreground);
}
`;const Qr={error:qr,warning:Zr,success:Xr},Jr={error:"error",warning:"warning",success:"success"},He=lt("saltStatusAdornment"),ta=u.forwardRef(function({className:t,status:n,...o},r){const a=Qr[n],s=Jr[n],i=st();return it({testId:"salt-status-adornment",css:Gr,window:i}),f.jsx(a,{className:Y(He(),He(n),t),"aria-label":s,...o,ref:r})});var ea=`/* Style applied to the root element */
.saltInput {
  --input-borderColor: var(--salt-editable-borderColor);
  --input-borderStyle: var(--salt-editable-borderStyle);
  --input-outlineColor: var(--salt-focused-outlineColor);
  --input-borderWidth: var(--salt-size-border);

  align-items: center;
  background: var(--saltInput-background, var(--input-background));
  color: var(--saltInput-color, var(--salt-content-primary-foreground));
  display: inline-flex;
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltInput-fontSize, var(--salt-text-fontSize));
  height: var(--saltInput-height, var(--salt-size-base));
  line-height: var(--saltInput-lineHeight, var(--salt-text-lineHeight));
  min-height: var(--saltInput-minHeight, var(--salt-size-base));
  min-width: var(--saltInput-minWidth, 4em);
  padding-left: var(--saltInput-paddingLeft, var(--salt-spacing-100));
  padding-right: var(--saltInput-paddingRight, var(--salt-spacing-100));
  position: relative;
  width: 100%;
}

.saltInput:hover {
  --input-borderStyle: var(--salt-editable-borderStyle-hover);
  --input-borderColor: var(--salt-editable-borderColor-hover);

  background: var(--saltInput-background-hover, var(--input-background-hover));
  cursor: var(--salt-editable-cursor-hover);
}

.saltInput:active {
  --input-borderColor: var(--salt-editable-borderColor-active);
  --input-borderStyle: var(--salt-editable-borderStyle-active);
  --input-borderWidth: var(--salt-editable-borderWidth-active);

  background: var(--saltInput-background-active, var(--input-background-active));
  cursor: var(--salt-editable-cursor-active);
}

/* Class applied if \`variant="primary"\` */
.saltInput-primary {
  --input-background: var(--salt-editable-primary-background);
  --input-background-active: var(--salt-editable-primary-background-active);
  --input-background-hover: var(--salt-editable-primary-background-hover);
  --input-background-disabled: var(--salt-editable-primary-background-disabled);
  --input-background-readonly: var(--salt-editable-primary-background-readonly);
}

/* Class applied if \`variant="secondary"\` */
.saltInput-secondary {
  --input-background: var(--salt-editable-secondary-background);
  --input-background-active: var(--salt-editable-secondary-background-active);
  --input-background-hover: var(--salt-editable-secondary-background-active);
  --input-background-disabled: var(--salt-editable-secondary-background-disabled);
  --input-background-readonly: var(--salt-editable-secondary-background-readonly);
}

/* Style applied to input if \`validationState="error"\` */
.saltInput-error,
.saltInput-error:hover {
  --input-background: var(--salt-status-error-background);
  --input-background-active: var(--salt-status-error-background);
  --input-background-hover: var(--salt-status-error-background);
  --input-borderColor: var(--salt-status-error-borderColor);
  --input-outlineColor: var(--salt-status-error-borderColor);
}

/* Style applied to input if \`validationState="warning"\` */
.saltInput-warning,
.saltInput-warning:hover {
  --input-background: var(--salt-status-warning-background);
  --input-background-active: var(--salt-status-warning-background);
  --input-background-hover: var(--salt-status-warning-background);
  --input-borderColor: var(--salt-status-warning-borderColor);
  --input-outlineColor: var(--salt-status-warning-borderColor);
}

/* Style applied to input if \`validationState="success"\` */
.saltInput-success,
.saltInput-success:hover {
  --input-background: var(--salt-status-success-background);
  --input-background-active: var(--salt-status-success-background);
  --input-background-hover: var(--salt-status-success-background);
  --input-borderColor: var(--salt-status-success-borderColor);
  --input-outlineColor: var(--salt-status-success-borderColor);
}

/* Style applied to inner input component */
.saltInput-input {
  background: none;
  border: none;
  box-sizing: content-box;
  color: inherit;
  cursor: inherit;
  display: block;
  flex: 1;
  font: inherit;
  height: 100%;
  letter-spacing: var(--saltInput-letterSpacing, 0);
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-align: var(--input-textAlign);
  width: 100%;
}

/* Reset in the  class */
.saltInput-input:focus {
  outline: none;
}

/* Style applied to selected input */
.saltInput-input::selection {
  background: var(--salt-content-foreground-highlight);
}

/* Style applied to placeholder text */
.saltInput-input::placeholder {
  color: var(--salt-content-secondary-foreground);
  font-weight: var(--salt-text-fontWeight-small);
}

/* Styling when focused */
.saltInput-focused {
  --input-borderColor: var(--input-outlineColor);
  --input-borderWidth: var(--salt-editable-borderWidth-active);

  outline: var(--saltInput-outline, var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--input-outlineColor));
}

/* Style applied if \`readOnly={true}\` */
.saltInput.saltInput-readOnly {
  --input-borderColor: var(--salt-editable-borderColor-readonly);
  --input-borderStyle: var(--salt-editable-borderStyle-readonly);
  --input-borderWidth: var(--salt-size-border);

  background: var(--input-background-readonly);
  cursor: var(--salt-editable-cursor-readonly);
}

/* Styling when focused if \`disabled={true}\` */
.saltInput-focused.saltInput-disabled {
  --input-borderWidth: var(--salt-size-border);
  outline: none;
}

/* Styling when focused if \`readOnly={true}\` */
.saltInput-focused.saltInput-readOnly {
  --input-borderWidth: var(--salt-size-border);
}

/* Style applied to selected input if \`disabled={true}\` */
.saltInput-disabled .saltInput-input::selection {
  background: none;
}

/* Style applied to input if \`disabled={true}\` */
.saltInput.saltInput-disabled,
.saltInput.saltInput-disabled:hover,
.saltInput.saltInput-disabled:active {
  --input-borderColor: var(--salt-editable-borderColor-disabled);
  --input-borderStyle: var(--salt-editable-borderStyle-disabled);
  --input-borderWidth: var(--salt-size-border);

  background: var(--input-background-disabled);
  cursor: var(--salt-editable-cursor-disabled);
  color: var(--saltInput-color-disabled, var(--salt-content-primary-foreground-disabled));
}

.saltInput-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--input-borderWidth) var(--input-borderStyle) var(--input-borderColor);
}

/* Style applied to start adornments */
.saltInput-startAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-right: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

/* Style applied to end adornments */
.saltInput-endAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-left: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

.saltInput-readOnly .saltInput-startAdornmentContainer {
  margin-left: var(--salt-spacing-50);
}

.saltInput-startAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}
.saltInput-endAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}

.saltInput-startAdornmentContainer .saltButton:first-child {
  margin-left: calc(var(--salt-spacing-50) * -1);
}
.saltInput-endAdornmentContainer .saltButton:last-child {
  margin-right: calc(var(--salt-spacing-50) * -1);
}

.saltInput-startAdornmentContainer > .saltButton,
.saltInput-endAdornmentContainer > .saltButton {
  --saltButton-padding: var(--salt-spacing-50);
  --saltButton-height: calc(var(--salt-size-base) - var(--salt-spacing-100));
}
`;const Q=lt("saltInput"),J=u.forwardRef(function({"aria-activedescendant":t,"aria-expanded":n,"aria-owns":o,className:r,disabled:a,emptyReadOnlyMarker:s="—",endAdornment:i,id:l,inputProps:c={},inputRef:g,placeholder:m,readOnly:v,role:d,startAdornment:h,style:p,textAlign:C="left",value:y,defaultValue:E=y===void 0?"":void 0,validationStatus:k,variant:T="primary",...w},F){const P=st();it({testId:"salt-input",css:ea,window:P});const{a11yProps:{"aria-describedby":B,"aria-labelledby":D}={},disabled:O,readOnly:N,necessity:j,validationStatus:A}=Gt(),b={"aria-activedescendant":t,"aria-expanded":n,"aria-owns":o},x=a||O,I=v||N,S=A??k,[R,L]=u.useState(!1),V=I&&!E&&!y?s:E,{"aria-describedby":ut,"aria-labelledby":tt,onBlur:W,onChange:_,onFocus:G,required:et,...z}=c,H=j?["required","asterisk"].includes(j):et,[nt,ot]=yn({controlled:y,default:V,name:"Input",state:"value"}),dt=St=>{const kn=St.target.value;ot(kn),_==null||_(St)},Rn=St=>{W==null||W(St),L(!1)},En=St=>{G==null||G(St),L(!0)},In={"--input-textAlign":C,...p};return f.jsxs("div",{className:Y(Q(),Q(T),{[Q("focused")]:!x&&R,[Q("disabled")]:x,[Q("readOnly")]:I,[Q(S||"")]:S},r),ref:F,style:In,...w,children:[h&&f.jsx("div",{className:Q("startAdornmentContainer"),children:h}),f.jsx("input",{"aria-describedby":Y(B,ut),"aria-labelledby":Y(D,tt),className:Y(Q("input"),c==null?void 0:c.className),disabled:x,id:l,readOnly:I,ref:g,role:d,tabIndex:x?-1:0,onBlur:Rn,onChange:dt,onFocus:x?void 0:En,placeholder:m,value:nt,...b,...z,required:H}),!x&&!I&&S&&f.jsx(ta,{status:S}),i&&f.jsx("div",{className:Q("endAdornmentContainer"),children:i}),f.jsx("div",{className:Q("activationIndicator")})]})}),na=["error","warning","success","info"];function _e(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function $e(e,t){return u.useMemo(()=>e==null&&t==null?()=>null:n=>{_e(e,n),_e(t,n)},[e,t])}function oa(...e){return e.reduce((t,n)=>n==null?t:function(...r){t.apply(this,r),n.apply(this,r)},()=>{})}function ra(e,t){const n={...e};return Object.keys(t).forEach(o=>{const r=n[o],a=t[o];typeof r=="function"&&typeof a=="function"&&o.indexOf("on")===0?n[o]=oa(r,a):typeof r=="string"&&typeof a=="string"&&o==="className"?n[o]=Y(r,a):n[o]=a!==void 0?a:r}),n}function aa(e){var t;return(t=e==null?void 0:e.ownerDocument)!=null?t:document}function sa(e){var t;return(t=aa(e).defaultView)!=null?t:window}function ia(e){return e?e instanceof sa(e).Element:!1}function la(e,t,n){return n&&n!=="mouse"?0:typeof e=="number"?e:e==null?void 0:e[t]}const ca=(e,{delay:t=0})=>{const{open:n,dataRef:o,refs:r}=e,a=u.useRef(),s=u.useRef(),i=u.useRef(!0),{announce:l}=Wr();Pn(()=>{n||(a.current=void 0)}),u.useEffect(()=>{const g=r.reference.current;function m(){var d;const h=(d=r.floating.current)==null?void 0:d.innerText;h&&l(h)}function v(d){clearTimeout(s.current),!n&&(i.current=!1,o.current.openEvent=d,t?s.current=window.setTimeout(()=>{m()},la(t,"open",a.current)):m())}if(ia(g))return g.addEventListener("mouseenter",v),()=>{g.removeEventListener("mouseenter",v)}},[o,t,n,r.reference,r.floating,l]);function c(g){a.current=g.pointerType}return{reference:{onPointerDown:c,onPointerEnter:c},floating:{onMouseEnter(){clearTimeout(s.current)}}}};function ua(e){const{enterDelay:t,leaveDelay:n,open:o,onOpenChange:r,placement:a,disableHoverListener:s,disableFocusListener:i}=e||{},l=u.useRef(null),[c,g]=yn({controlled:o,default:!1,name:"Tooltip",state:"open"}),m=j=>{g(j),r==null||r(j)},{floating:v,reference:d,x:h,y:p,strategy:C,middlewareData:{arrow:{x:y,y:E}={}},placement:k,context:T,elements:w}=Sr({open:c,onOpenChange:m,placement:a,middleware:[Jn(8),ln(),sn({limiter:cn()}),xo({element:l})]}),{getReferenceProps:F,getFloatingProps:P}=lr([qo(T,{delay:{open:t,close:n},enabled:!s,handleClose:fr()}),ir(T,{enabled:!i}),ur(T,{role:"tooltip"}),ar(T),ca(T,{delay:{open:t,close:n}})]);return{arrowProps:{ref:l,context:T},open:c,floating:v,reference:d,getTooltipProps:()=>P({"data-placement":k,ref:v}),getTriggerProps:()=>F({ref:d}),getTooltipPosition:()=>{var j,A;return{top:p??0,left:h??0,position:C,width:(j=w.floating)==null?void 0:j.offsetWidth,height:(A=w.floating)==null?void 0:A.offsetHeight}}}}var da=`/* Styles applied to root component */
.saltTooltip {
  --tooltip-background: var(--saltTooltip-background, var(--salt-container-primary-background));
  --tooltip-zIndex: var(--saltTooltip-zIndex, var(--salt-zIndex-flyover));
  /* apply icon margin based on the text line height so it's aligned on all densities */
  --tooltip-icon-marginTop: calc((var(--salt-text-lineHeight) - max(var(--salt-icon-size-base), 12px)) / 2);
}

.saltTooltip {
  background: var(--tooltip-background);
  border-color: var(--saltTooltip-borderColor, var(--tooltip-status-borderColor));
  border-style: var(--saltTooltip-borderStyle, var(--salt-container-borderStyle));
  border-width: var(--saltTooltip-borderWidth, var(--salt-size-border));
  box-shadow: var(--saltTooltip-shadow, var(--salt-overlayable-shadow-popout));
  color: var(--saltTooltip-text-color, var(--salt-content-primary-foreground));
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltTooltip-fontSize, var(--salt-text-fontSize));
  font-weight: var(--saltTooltip-fontWeight, var(--salt-text-fontWeight));
  line-height: var(--saltTooltip-lineHeight, var(--salt-text-lineHeight));
  max-width: var(--saltTooltip-maxWidth, 230px);
  padding: var(--saltTooltip-padding, var(--salt-size-unit));
  position: relative;
  text-align: var(--saltTooltip-textAlign, left);
  z-index: var(--tooltip-zIndex);
}

/* Styles applied to container */
.saltTooltip-container {
  display: flex;
  align-items: baseline;
  position: relative;
}

/* Styles applied to content */
.saltTooltip-content {
  overflow: hidden;
}

/* Styles applied to status indicator */
.saltTooltip-icon {
  --saltIcon-margin: var(--tooltip-icon-marginTop) var(--saltTooltip-icon-marginRight, 6px) 0 0;
  vertical-align: top;
  align-self: flex-start;
}

/* Styles applied when status = "info" */
.saltTooltip-info {
  --tooltip-status-borderColor: var(--salt-status-info-borderColor);
}

/* Styles applied when status = "error" */
.saltTooltip-error {
  --tooltip-status-borderColor: var(--salt-status-error-borderColor);
}

/* Styles applied when status = "warning" */
.saltTooltip-warning {
  --tooltip-status-borderColor: var(--salt-status-warning-borderColor);
}

/* Styles applied when status = "success" */
.saltTooltip-success {
  --tooltip-status-borderColor: var(--salt-status-success-borderColor);
}
`;const zt=lt("saltTooltip"),fa=e=>{const t=st();it({testId:"salt-tooltip",css:da,window:t});const{a11yProps:n}=Gt(),{arrowProps:o,content:r,hideArrow:a,hideIcon:s,status:i}=e;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:zt("container"),children:[!s&&f.jsx(Mr,{status:i,size:1,className:zt("icon")}),f.jsx("span",{id:n==null?void 0:n["aria-describedby"],className:zt("content"),children:r})]}),!a&&f.jsx(Vo,{...o,className:zt("arrow"),strokeWidth:1,fill:"var(--salt-container-primary-background)",stroke:"var(--tooltip-status-borderColor)",height:5,width:10})]})},Ve=lt("saltTooltip"),ha=u.forwardRef(function(t,n){const{children:o,className:r,disabled:a=!1,hideArrow:s=!1,hideIcon:i=!1,open:l,content:c,status:g="info",placement:m="right",enterDelay:v=300,leaveDelay:d=0,...h}=t,{disabled:p,validationStatus:C}=Gt(),y=a||p,E=C!==void 0&&na.includes(C)?C:g,{Component:k}=br(),T={open:l,placement:m,enterDelay:v,leaveDelay:d,...h},{arrowProps:w,open:F,floating:P,reference:B,getTriggerProps:D,getTooltipProps:O,getTooltipPosition:N}=ua(T),j=$e(u.isValidElement(o)?o.ref:null,B),A=$e(P,n);return f.jsxs(f.Fragment,{children:[u.isValidElement(o)&&u.cloneElement(o,{...ra(D(),o.props),ref:j}),f.jsx(k,{className:Y(Ve(),Ve(E),r),open:F&&!y,...O(),ref:A,...N(),children:f.jsx(fa,{hideIcon:i,status:E,content:c,hideArrow:s,arrowProps:w})})]})});function ma(e,t){switch(t.type){case"update":default:return e}}const pa=()=>({busy:!0,ampsConfigs:[]}),ga=u.createContext({}),va=({children:e})=>{const[t,n]=u.useReducer(ma,pa());return f.jsx(ga.Provider,{value:{...t,dispatch:n},children:e})};function ba(e){return t=>f.jsx(va,{children:f.jsx(e,{...t})})}const xa=[{key:"sow",value:"Query"},{key:"subscribe",value:"Subscribe"},{key:"sow_and_subscribe",value:"Sow and Subscribe"},{key:"sow_and_delta_subscribe",value:"Sow and Delta Subscribe"}],ya=["json","nvfix","xml","fix","bson","msgpack"],wa="_layer_1oo1x_1",Ue={layer:wa,"dialog-host":"_dialog-host_1oo1x_14"};var Sn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var i=arguments[s];i&&(a=r(a,o(i)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var i in a)t.call(a,i)&&a[i]&&(s=r(s,i));return s}function r(a,s){return s?a?a+" "+s:a+s:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Sn);var Ta=Sn.exports;const Ca=jn(Ta),Sa=({children:e,...t})=>f.jsx("div",{className:Ue.layer,children:f.jsxs("div",{className:Ca("d-flex flex-column",Ue["dialog-host"]),style:{height:(t==null?void 0:t.height)||400,width:(t==null?void 0:t.width)||500},children:[f.jsxs("div",{className:"d-flex flex-shrink-0 panel align-items-center",children:[f.jsx("strong",{className:"flex-grow-1",children:t.title}),f.jsx("div",{className:"flex-shrink-0",children:f.jsx(at,{onClick:t.onCancel,children:"X"})})]}),f.jsx("div",{className:"flex-grow-1 d-flex p-1",children:e}),f.jsxs("div",{className:"d-flex flex-shrink-0 justify-content-end p-1 mt-1",children:[f.jsx(at,{onClick:t.onOk,className:"me-1",children:"Ok"}),f.jsx(at,{onClick:t.onCancel,children:"Cancel"})]})]})}),Ra=({servers:e})=>f.jsx("div",{className:"d-flex flex-column flex-grow-1",children:"Amps Server List"}),Pt=100,Ea=({connectionInfo:e})=>f.jsxs("div",{className:"d-flex flex-column flex-grow-1 panel-2",children:[f.jsxs(X,{children:[f.jsx(Z,{style:{width:Pt},className:"form-field-label-horiz",children:"Name"}),f.jsx(J,{})]}),f.jsxs(X,{children:[f.jsx(Z,{style:{width:Pt},className:"form-field-label-horiz",children:"Description"}),f.jsx("textarea",{rows:3,placeholder:"Enter description about the connection for easier search"})]}),f.jsxs(X,{children:[f.jsx(Z,{style:{width:Pt},className:"form-field-label-horiz",children:"Url(s)"}),f.jsx("textarea",{rows:3})]}),f.jsxs(X,{children:[f.jsx(Z,{style:{width:Pt},className:"form-field-label-horiz",children:"Retry delay"}),f.jsx(J,{})]}),f.jsxs(X,{children:[f.jsx(Z,{style:{width:Pt},className:"form-field-label-horiz",children:"Connection Timeout"}),f.jsx(ha,{content:"Validation Failure",status:"error",children:f.jsx(J,{validationStatus:"error",title:"Validate failure"})})]})]}),Ia=({onClose:e})=>{const[t,n]=u.useState(!1);return f.jsxs("div",{className:"d-flex flex-column flex-grow-1",children:[f.jsxs("div",{className:"d-flex flex-shrink-0 panel-2 align-items-center",children:[f.jsx("strong",{className:"flex-grow-1",children:t?"New server info":"Server List"}),f.jsx("div",{className:"justify-content-end",children:f.jsx(at,{onClick:()=>n(!0),children:f.jsx(Ar,{size:1})})})]}),t&&f.jsx(Ea,{}),!t&&f.jsx(Ra,{servers:[]}),e&&f.jsx("div",{className:"d-flex flex-shrink-0 justify-content-end p-1",children:f.jsx(at,{onClick:e,children:"Close"})})]})},ka=({connectionInfo:e})=>{const[t,n]=u.useState(!1);return f.jsxs(f.Fragment,{children:[f.jsx(J,{endAdornment:f.jsx(at,{onClick:()=>n(!0),children:"..."})}),t&&f.jsx(Sa,{title:"Amps Servers",onCancel:()=>n(!1),onOk:()=>n(!1),children:f.jsx(Ia,{})})]})},Aa=({labelWidth:e,topic:t})=>f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:e},children:"Topic"}),f.jsx("select",{style:{width:150},children:ya.map(n=>f.jsx("option",{value:n,selected:n===t.type,children:n},n))}),f.jsx(J,{value:t.name})]}),bt=60,Fa=({queryConfig:e,onExec:t,onReset:n})=>{const[o,r]=u.useState(e),a=u.useCallback(s=>{r(i=>({...i,...s}))},[r]);return f.jsxs("div",{className:"d-flex flex-column",children:[f.jsxs("div",{className:"d-flex flex-shrink-0 p-2 panel",children:[f.jsx("div",{className:"flex-grow-1",children:"Query Builder"}),f.jsx("div",{className:"flex-shrink-0",children:f.jsx(Fr,{})})]}),f.jsxs("div",{className:"d-flex flex-shrink-0 flex-column bdr panel-2",children:[f.jsxs("div",{className:"d-flex flex-shrink-0 mb-2",children:[f.jsx("div",{className:"d-flex flex-grow-1 align-items-center me-4",children:f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:bt},children:"Amps"}),f.jsx("select",{style:{width:200},children:xa.map(s=>f.jsx("option",{value:s.key,children:s.value},s.key))}),f.jsx(ka,{connectionInfo:o.connection})]})}),f.jsx("div",{className:"d-flex flex-shrink-0 align-items-center",children:f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:30},children:"Limit"}),f.jsx(J,{style:{width:bt},value:o.limit,onChange:({target:s})=>a({limit:s.value})})]})})]}),f.jsx("div",{className:"d-flex flex-shrink-0 mb-2",children:f.jsx(Aa,{labelWidth:bt,topic:o.topic})}),f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:bt},children:"Filter"}),f.jsx(J,{})]}),f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:bt},children:"Options"}),f.jsx(J,{})]}),f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:bt},children:"Order By"}),f.jsx(J,{value:o.sort,onChange:({target:s})=>a({sort:s.value})})]}),f.jsxs("div",{className:"flex-shrink-0 d-flex justify-content-end mt-3 bdr-t pt-2",children:[f.jsx("div",{className:"flex-grow-1",children:f.jsxs(X,{children:[f.jsx(Z,{className:"form-field-label-horiz",style:{width:bt},children:"Name"}),f.jsx(J,{style:{width:300},endAdornment:f.jsx(at,{children:"Save"}),value:o.name,onChange:({target:s})=>a({sort:s.value})})]})}),f.jsx(at,{onClick:t,className:"mx-2",children:"Execute"}),f.jsx(at,{onClick:n,children:"Reset"})]})]})]})},Pa={name:"test",connection:{name:"test",url:"ws://localhost:9007/amps/json"},method:"sow_and_subscribe",topic:{type:"json",name:"/test/unit-test"},limit:10},ja=e=>f.jsxs("div",{className:"d-flex flex-grow-1 flex-column",children:[f.jsx(Fa,{onExec:()=>{},onReset:()=>{},queryConfig:Pa}),f.jsx("div",{className:"d-flex flex-grow-1 flex-column"})]}),Oa=ba(ja);export{Oa as default};
