(()=>{var cn=Object.create;var Dt=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var pn=Object.getOwnPropertyNames;var vn=Object.getPrototypeOf,hn=Object.prototype.hasOwnProperty;var Je=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var br=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},mn=(e,t)=>{for(var r in t)Dt(e,r,{get:t[r],enumerable:!0})},dn=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of pn(t))!hn.call(e,o)&&o!==r&&Dt(e,o,{get:()=>t[o],enumerable:!(n=fn(t,o))||n.enumerable});return e};var Pe=(e,t,r)=>(r=e!=null?cn(vn(e)):{},dn(t||!e||!e.__esModule?Dt(r,"default",{value:e,enumerable:!0}):r,e));var qt=br((Ot,Wt)=>{(function(){"use strict";var e=.5*(Math.sqrt(3)-1),t=(3-Math.sqrt(3))/6,r=1/3,n=1/6,o=(Math.sqrt(5)-1)/4,a=(5-Math.sqrt(5))/20;function l(u){var c;typeof u=="function"?c=u:u?c=s(u):c=Math.random,this.p=i(c),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var p=0;p<512;p++)this.perm[p]=this.p[p&255],this.permMod12[p]=this.perm[p]%12}l.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(u,c){var p=this.permMod12,v=this.perm,h=this.grad3,m=0,x=0,b=0,y=(u+c)*e,_=Math.floor(u+y),E=Math.floor(c+y),d=(_+E)*t,M=_-d,w=E-d,T=u-M,O=c-w,H,I;T>O?(H=1,I=0):(H=0,I=1);var V=T-H+t,k=O-I+t,L=T-1+2*t,S=O-1+2*t,C=_&255,W=E&255,D=.5-T*T-O*O;if(D>=0){var G=p[C+v[W]]*3;D*=D,m=D*D*(h[G]*T+h[G+1]*O)}var q=.5-V*V-k*k;if(q>=0){var j=p[C+H+v[W+I]]*3;q*=q,x=q*q*(h[j]*V+h[j+1]*k)}var B=.5-L*L-S*S;if(B>=0){var N=p[C+1+v[W+1]]*3;B*=B,b=B*B*(h[N]*L+h[N+1]*S)}return 70*(m+x+b)},noise3D:function(u,c,p){var v=this.permMod12,h=this.perm,m=this.grad3,x,b,y,_,E=(u+c+p)*r,d=Math.floor(u+E),M=Math.floor(c+E),w=Math.floor(p+E),T=(d+M+w)*n,O=d-T,H=M-T,I=w-T,V=u-O,k=c-H,L=p-I,S,C,W,D,G,q;V>=k?k>=L?(S=1,C=0,W=0,D=1,G=1,q=0):V>=L?(S=1,C=0,W=0,D=1,G=0,q=1):(S=0,C=0,W=1,D=1,G=0,q=1):k<L?(S=0,C=0,W=1,D=0,G=1,q=1):V<L?(S=0,C=1,W=0,D=0,G=1,q=1):(S=0,C=1,W=0,D=1,G=1,q=0);var j=V-S+n,B=k-C+n,N=L-W+n,$=V-D+2*n,Y=k-G+2*n,ae=L-q+2*n,pe=V-1+3*n,Me=k-1+3*n,be=L-1+3*n,_e=d&255,xe=M&255,ye=w&255,ve=.6-V*V-k*k-L*L;if(ve<0)x=0;else{var Ee=v[_e+h[xe+h[ye]]]*3;ve*=ve,x=ve*ve*(m[Ee]*V+m[Ee+1]*k+m[Ee+2]*L)}var he=.6-j*j-B*B-N*N;if(he<0)b=0;else{var Re=v[_e+S+h[xe+C+h[ye+W]]]*3;he*=he,b=he*he*(m[Re]*j+m[Re+1]*B+m[Re+2]*N)}var me=.6-$*$-Y*Y-ae*ae;if(me<0)y=0;else{var Se=v[_e+D+h[xe+G+h[ye+q]]]*3;me*=me,y=me*me*(m[Se]*$+m[Se+1]*Y+m[Se+2]*ae)}var de=.6-pe*pe-Me*Me-be*be;if(de<0)_=0;else{var Te=v[_e+1+h[xe+1+h[ye+1]]]*3;de*=de,_=de*de*(m[Te]*pe+m[Te+1]*Me+m[Te+2]*be)}return 32*(x+b+y+_)},noise4D:function(u,c,p,v){var h=this.perm,m=this.grad4,x,b,y,_,E,d=(u+c+p+v)*o,M=Math.floor(u+d),w=Math.floor(c+d),T=Math.floor(p+d),O=Math.floor(v+d),H=(M+w+T+O)*a,I=M-H,V=w-H,k=T-H,L=O-H,S=u-I,C=c-V,W=p-k,D=v-L,G=0,q=0,j=0,B=0;S>C?G++:q++,S>W?G++:j++,S>D?G++:B++,C>W?q++:j++,C>D?q++:B++,W>D?j++:B++;var N,$,Y,ae,pe,Me,be,_e,xe,ye,ve,Ee;N=G>=3?1:0,$=q>=3?1:0,Y=j>=3?1:0,ae=B>=3?1:0,pe=G>=2?1:0,Me=q>=2?1:0,be=j>=2?1:0,_e=B>=2?1:0,xe=G>=1?1:0,ye=q>=1?1:0,ve=j>=1?1:0,Ee=B>=1?1:0;var he=S-N+a,Re=C-$+a,me=W-Y+a,Se=D-ae+a,de=S-pe+2*a,Te=C-Me+2*a,St=W-be+2*a,Tt=D-_e+2*a,Pt=S-xe+3*a,At=C-ye+3*a,Ct=W-ve+3*a,zt=D-Ee+3*a,Ht=S-1+4*a,Bt=C-1+4*a,Ft=W-1+4*a,It=D-1+4*a,Ge=M&255,Le=w&255,je=T&255,ke=O&255,Ue=.6-S*S-C*C-W*W-D*D;if(Ue<0)x=0;else{var lt=h[Ge+h[Le+h[je+h[ke]]]]%32*4;Ue*=Ue,x=Ue*Ue*(m[lt]*S+m[lt+1]*C+m[lt+2]*W+m[lt+3]*D)}var Ye=.6-he*he-Re*Re-me*me-Se*Se;if(Ye<0)b=0;else{var st=h[Ge+N+h[Le+$+h[je+Y+h[ke+ae]]]]%32*4;Ye*=Ye,b=Ye*Ye*(m[st]*he+m[st+1]*Re+m[st+2]*me+m[st+3]*Se)}var Xe=.6-de*de-Te*Te-St*St-Tt*Tt;if(Xe<0)y=0;else{var ut=h[Ge+pe+h[Le+Me+h[je+be+h[ke+_e]]]]%32*4;Xe*=Xe,y=Xe*Xe*(m[ut]*de+m[ut+1]*Te+m[ut+2]*St+m[ut+3]*Tt)}var $e=.6-Pt*Pt-At*At-Ct*Ct-zt*zt;if($e<0)_=0;else{var ct=h[Ge+xe+h[Le+ye+h[je+ve+h[ke+Ee]]]]%32*4;$e*=$e,_=$e*$e*(m[ct]*Pt+m[ct+1]*At+m[ct+2]*Ct+m[ct+3]*zt)}var Ze=.6-Ht*Ht-Bt*Bt-Ft*Ft-It*It;if(Ze<0)E=0;else{var ft=h[Ge+1+h[Le+1+h[je+1+h[ke+1]]]]%32*4;Ze*=Ze,E=Ze*Ze*(m[ft]*Ht+m[ft+1]*Bt+m[ft+2]*Ft+m[ft+3]*It)}return 27*(x+b+y+_+E)}};function i(u){var c,p=new Uint8Array(256);for(c=0;c<256;c++)p[c]=c;for(c=0;c<255;c++){var v=c+~~(u()*(256-c)),h=p[c];p[c]=p[v],p[v]=h}return p}l._buildPermutationTable=i;function s(){var u=0,c=0,p=0,v=1,h=f();u=h(" "),c=h(" "),p=h(" ");for(var m=0;m<arguments.length;m++)u-=h(arguments[m]),u<0&&(u+=1),c-=h(arguments[m]),c<0&&(c+=1),p-=h(arguments[m]),p<0&&(p+=1);return h=null,function(){var x=2091639*u+v*23283064365386963e-26;return u=c,c=p,p=x-(v=x|0)}}function f(){var u=4022871197;return function(c){c=c.toString();for(var p=0;p<c.length;p++){u+=c.charCodeAt(p);var v=.02519603282416938*u;u=v>>>0,v-=u,v*=u,u=v>>>0,v-=u,u+=v*4294967296}return(u>>>0)*23283064365386963e-26}}typeof define<"u"&&define.amd&&define(function(){return l}),typeof Ot<"u"?Ot.SimplexNoise=l:typeof window<"u"&&(window.SimplexNoise=l),typeof Wt<"u"&&(Wt.exports=l)})()});var Fr=br((Ai,Br)=>{"use strict";var Lt=class e{static s_to_t(t){return t/3|0}static s_prev_s(t){return t%3===0?t+2:t-1}static s_next_s(t){return t%3===2?t-2:t+1}constructor({numBoundaryRegions:t,numSolidSides:r,_r_vertex:n,_triangles:o,_halfedges:a}){Object.assign(this,{numBoundaryRegions:t,numSolidSides:r,_r_vertex:n,_triangles:o,_halfedges:a}),this._t_vertex=[],this._update()}update(t,r){this._r_vertex=t,this._triangles=r.triangles,this._halfedges=r.halfedges,this._update()}_update(){let{_triangles:t,_halfedges:r,_r_vertex:n,_t_vertex:o}=this;if(this.numSides=t.length,this.numRegions=n.length,this.numSolidRegions=this.numRegions-1,this.numTriangles=this.numSides/3,this.numSolidTriangles=this.numSolidSides/3,this._t_vertex.length<this.numTriangles){let a=o.length,l=this.numTriangles-a;o=o.concat(new Array(l));for(let i=a;i<this.numTriangles;i++)o[i]=[0,0];this._t_vertex=o}this._r_in_s=new Int32Array(this.numRegions);for(let a=0;a<t.length;a++){let l=t[e.s_next_s(a)];(this._r_in_s[l]===0||r[a]===-1)&&(this._r_in_s[l]=a)}for(let a=0;a<t.length;a+=3){let l=a/3,i=n[t[a]],s=n[t[a+1]],f=n[t[a+2]];if(this.s_ghost(a)){let u=s[0]-i[0],c=s[1]-i[1],p=10/Math.sqrt(u*u+c*c);o[l][0]=.5*(i[0]+s[0])+c*p,o[l][1]=.5*(i[1]+s[1])-u*p}else o[l][0]=(i[0]+s[0]+f[0])/3,o[l][1]=(i[1]+s[1]+f[1])/3}}static fromDelaunator(t,r){return new e({numBoundaryRegions:0,numSolidSides:r.triangles.length,_r_vertex:t,_triangles:r.triangles,_halfedges:r.halfedges})}r_x(t){return this._r_vertex[t][0]}r_y(t){return this._r_vertex[t][1]}t_x(t){return this._t_vertex[t][0]}t_y(t){return this._t_vertex[t][1]}r_pos(t,r){return t.length=2,t[0]=this.r_x(r),t[1]=this.r_y(r),t}t_pos(t,r){return t.length=2,t[0]=this.t_x(r),t[1]=this.t_y(r),t}s_begin_r(t){return this._triangles[t]}s_end_r(t){return this._triangles[e.s_next_s(t)]}s_inner_t(t){return e.s_to_t(t)}s_outer_t(t){return e.s_to_t(this._halfedges[t])}s_next_s(t){return e.s_next_s(t)}s_prev_s(t){return e.s_prev_s(t)}s_opposite_s(t){return this._halfedges[t]}t_circulate_s(t,r){t.length=3;for(let n=0;n<3;n++)t[n]=3*r+n;return t}t_circulate_r(t,r){t.length=3;for(let n=0;n<3;n++)t[n]=this._triangles[3*r+n];return t}t_circulate_t(t,r){t.length=3;for(let n=0;n<3;n++)t[n]=this.s_outer_t(3*r+n);return t}r_circulate_s(t,r){let n=this._r_in_s[r],o=n;t.length=0;do{t.push(this._halfedges[o]);let a=e.s_next_s(o);o=this._halfedges[a]}while(o!==-1&&o!==n);return t}r_circulate_r(t,r){let n=this._r_in_s[r],o=n;t.length=0;do{t.push(this.s_begin_r(o));let a=e.s_next_s(o);o=this._halfedges[a]}while(o!==-1&&o!==n);return t}r_circulate_t(t,r){let n=this._r_in_s[r],o=n;t.length=0;do{t.push(e.s_to_t(o));let a=e.s_next_s(o);o=this._halfedges[a]}while(o!==-1&&o!==n);return t}ghost_r(){return this.numRegions-1}s_ghost(t){return t>=this.numSolidSides}r_ghost(t){return t===this.numRegions-1}t_ghost(t){return this.s_ghost(3*t)}s_boundary(t){return this.s_ghost(t)&&t%3===0}r_boundary(t){return t<this.numBoundaryRegions}};Br.exports=Lt});var $t=Pe(qt());var ge=class{constructor(t=1/0,r=Float64Array,n=Uint32Array){let o=t!==1/0;this.ids=o?new n(t):[],this.values=o?new r(t):[],this.capacity=t,this.length=0}clear(){this.length=0}push(t,r){if(this.length===this.capacity)throw new RangeError("Queue is at capacity.");let n=this.length++;for(;n>0;){let o=n-1>>1,a=this.values[o];if(r>=a)break;this.ids[n]=this.ids[o],this.values[n]=a,n=o}this.ids[n]=t,this.values[n]=r}pop(){if(this.length===0)return;let t=this.ids,r=this.values,n=t[0],o=--this.length;if(o>0){let a=t[o],l=r[o],i=0,s=o>>1;for(;i<s;){let f=(i<<1)+1,u=f+1,c=f+(+(u<o)&+(r[u]<r[f]));if(r[c]>=l)break;t[i]=t[c],r[i]=r[c],i=c}t[i]=a,r[i]=l}return n}peek(){return this.length>0?this.ids[0]:void 0}peekValue(){return this.length>0?this.values[0]:void 0}shrink(){Array.isArray(this.ids)&&(this.ids.length=this.length),Array.isArray(this.values)&&(this.values.length=this.length)}};var pt=1e-6,Ke=typeof Float32Array<"u"?Float32Array:Array,Vt=Math.random;function vt(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}var Ei=Math.PI/180,Ri=180/Math.PI;var J={};mn(J,{add:()=>Mn,angle:()=>kn,bezier:()=>On,ceil:()=>bn,clone:()=>_n,copy:()=>yn,create:()=>Er,cross:()=>Bn,dist:()=>Qn,distance:()=>Ar,div:()=>Kn,divide:()=>Pr,dot:()=>Nt,equals:()=>$n,exactEquals:()=>Xn,floor:()=>En,forEach:()=>no,fromValues:()=>xn,hermite:()=>Dn,inverse:()=>zn,len:()=>to,length:()=>Rr,lerp:()=>Fn,max:()=>Sn,min:()=>Rn,mul:()=>Jn,multiply:()=>Tr,negate:()=>Cn,normalize:()=>Hn,random:()=>Wn,rotateX:()=>Gn,rotateY:()=>Ln,rotateZ:()=>jn,round:()=>Tn,scale:()=>Pn,scaleAndAdd:()=>An,set:()=>wn,slerp:()=>In,sqrDist:()=>eo,sqrLen:()=>ro,squaredDistance:()=>Cr,squaredLength:()=>zr,str:()=>Yn,sub:()=>Zn,subtract:()=>Sr,transformMat3:()=>Vn,transformMat4:()=>qn,transformQuat:()=>Nn,zero:()=>Un});function Er(){var e=new Ke(3);return Ke!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function _n(e){var t=new Ke(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Rr(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}function xn(e,t,r){var n=new Ke(3);return n[0]=e,n[1]=t,n[2]=r,n}function yn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function wn(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function Mn(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function Sr(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function Tr(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function Pr(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function bn(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function En(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function Rn(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function Sn(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function Tn(e,t){return e[0]=vt(t[0]),e[1]=vt(t[1]),e[2]=vt(t[2]),e}function Pn(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function An(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function Ar(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}function Cr(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}function zr(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}function Cn(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function zn(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function Hn(e,t){var r=t[0],n=t[1],o=t[2],a=r*r+n*n+o*o;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function Nt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Bn(e,t,r){var n=t[0],o=t[1],a=t[2],l=r[0],i=r[1],s=r[2];return e[0]=o*s-a*i,e[1]=a*l-n*s,e[2]=n*i-o*l,e}function Fn(e,t,r,n){var o=t[0],a=t[1],l=t[2];return e[0]=o+n*(r[0]-o),e[1]=a+n*(r[1]-a),e[2]=l+n*(r[2]-l),e}function In(e,t,r,n){var o=Math.acos(Math.min(Math.max(Nt(t,r),-1),1)),a=Math.sin(o),l=Math.sin((1-n)*o)/a,i=Math.sin(n*o)/a;return e[0]=l*t[0]+i*r[0],e[1]=l*t[1]+i*r[1],e[2]=l*t[2]+i*r[2],e}function Dn(e,t,r,n,o,a){var l=a*a,i=l*(2*a-3)+1,s=l*(a-2)+a,f=l*(a-1),u=l*(3-2*a);return e[0]=t[0]*i+r[0]*s+n[0]*f+o[0]*u,e[1]=t[1]*i+r[1]*s+n[1]*f+o[1]*u,e[2]=t[2]*i+r[2]*s+n[2]*f+o[2]*u,e}function On(e,t,r,n,o,a){var l=1-a,i=l*l,s=a*a,f=i*l,u=3*a*i,c=3*s*l,p=s*a;return e[0]=t[0]*f+r[0]*u+n[0]*c+o[0]*p,e[1]=t[1]*f+r[1]*u+n[1]*c+o[1]*p,e[2]=t[2]*f+r[2]*u+n[2]*c+o[2]*p,e}function Wn(e,t){t=t===void 0?1:t;var r=Vt()*2*Math.PI,n=Vt()*2-1,o=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=n*t,e}function qn(e,t,r){var n=t[0],o=t[1],a=t[2],l=r[3]*n+r[7]*o+r[11]*a+r[15];return l=l||1,e[0]=(r[0]*n+r[4]*o+r[8]*a+r[12])/l,e[1]=(r[1]*n+r[5]*o+r[9]*a+r[13])/l,e[2]=(r[2]*n+r[6]*o+r[10]*a+r[14])/l,e}function Vn(e,t,r){var n=t[0],o=t[1],a=t[2];return e[0]=n*r[0]+o*r[3]+a*r[6],e[1]=n*r[1]+o*r[4]+a*r[7],e[2]=n*r[2]+o*r[5]+a*r[8],e}function Nn(e,t,r){var n=r[0],o=r[1],a=r[2],l=r[3],i=t[0],s=t[1],f=t[2],u=o*f-a*s,c=a*i-n*f,p=n*s-o*i;return u=u+u,c=c+c,p=p+p,e[0]=i+l*u+o*p-a*c,e[1]=s+l*c+a*u-n*p,e[2]=f+l*p+n*c-o*u,e}function Gn(e,t,r,n){var o=[],a=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],a[0]=o[0],a[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),a[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e}function Ln(e,t,r,n){var o=[],a=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],a[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),a[1]=o[1],a[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e}function jn(e,t,r,n){var o=[],a=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],a[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),a[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),a[2]=o[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e}function kn(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],l=t[1],i=t[2],s=Math.sqrt((r*r+n*n+o*o)*(a*a+l*l+i*i)),f=s&&Nt(e,t)/s;return Math.acos(Math.min(Math.max(f,-1),1))}function Un(e){return e[0]=0,e[1]=0,e[2]=0,e}function Yn(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function Xn(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function $n(e,t){var r=e[0],n=e[1],o=e[2],a=t[0],l=t[1],i=t[2];return Math.abs(r-a)<=pt*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-l)<=pt*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(o-i)<=pt*Math.max(1,Math.abs(o),Math.abs(i))}var Zn=Sr,Jn=Tr,Kn=Pr,Qn=Ar,eo=Cr,to=Rr,ro=zr,no=(function(){var e=Er();return function(t,r,n,o,a,l){var i,s;for(r||(r=3),n||(n=0),o?s=Math.min(o*r+n,t.length):s=t.length,i=n;i<s;i+=r)e[0]=t[i],e[1]=t[i+1],e[2]=t[i+2],a(e,e,l),t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2];return t}})();function oo(){return(function(e){"use strict";let t="aleaPRNG 1.1.0";var r,n,o,a,l=new Uint32Array(3),i,s="";function f(v){var h=u();r=h(" "),n=h(" "),o=h(" "),a=1;for(var m=0;m<v.length;m++)r-=h(v[m]),r<0&&(r+=1),n-=h(v[m]),n<0&&(n+=1),o-=h(v[m]),o<0&&(o+=1);s=h.version,h=null}function u(){var v=4022871197,h=function(m){m=m.toString();for(var x=0,b=m.length;x<b;x++){v+=m.charCodeAt(x);var y=.02519603282416938*v;v=y>>>0,y-=v,y*=v,v=y>>>0,y-=v,v+=y*4294967296}return(v>>>0)*23283064365386963e-26};return h.version="Mash 0.9",h}function c(v){return parseInt(v,10)===v}var p=function(){var v=2091639*r+a*23283064365386963e-26;return r=n,n=o,o=v-(a=v|0)};return p.fract53=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.int32=function(){return p()*4294967296},p.cycle=function(v){v=typeof v>"u"?1:+v,v<1&&(v=1);for(var h=0;h<v;h++)p()},p.range=function(){var v,h;return arguments.length===1?(v=0,h=arguments[0]):(v=arguments[0],h=arguments[1]),arguments[0]>arguments[1]&&(v=arguments[1],h=arguments[0]),c(v)&&c(h)?Math.floor(p()*(h-v+1))+v:p()*(h-v)+v},p.restart=function(){f(i)},p.seed=function(){f(Array.prototype.slice.call(arguments))},p.version=function(){return t},p.versions=function(){return t+", "+s},e.length===0&&(window.crypto.getRandomValues(l),e=[l[0],l[1],l[2]]),i=e,f(e),p})(Array.prototype.slice.call(arguments))}var U=oo;var Hr=Math.pow(2,-52),tt=class e{static from(t,r=uo,n=co){let o=t.length,a=new Float64Array(o*2);for(let l=0;l<o;l++){let i=t[l];a[2*l]=r(i),a[2*l+1]=n(i)}return new e(a)}constructor(t){let r=t.length>>1;if(r>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;let n=2*r-5,o=this.triangles=new Uint32Array(n*3),a=this.halfedges=new Int32Array(n*3);this._hashSize=Math.ceil(Math.sqrt(r));let l=this.hullPrev=new Uint32Array(r),i=this.hullNext=new Uint32Array(r),s=this.hullTri=new Uint32Array(r),f=new Int32Array(this._hashSize).fill(-1),u=new Uint32Array(r),c=1/0,p=1/0,v=-1/0,h=-1/0;for(let S=0;S<r;S++){let C=t[2*S],W=t[2*S+1];C<c&&(c=C),W<p&&(p=W),C>v&&(v=C),W>h&&(h=W),u[S]=S}let m=(c+v)/2,x=(p+h)/2,b=1/0,y,_,E;for(let S=0;S<r;S++){let C=Gt(m,x,t[2*S],t[2*S+1]);C<b&&(y=S,b=C)}let d=t[2*y],M=t[2*y+1];b=1/0;for(let S=0;S<r;S++){if(S===y)continue;let C=Gt(d,M,t[2*S],t[2*S+1]);C<b&&C>0&&(_=S,b=C)}let w=t[2*_],T=t[2*_+1],O=1/0;for(let S=0;S<r;S++){if(S===y||S===_)continue;let C=lo(d,M,w,T,t[2*S],t[2*S+1]);C<O&&(E=S,O=C)}let H=t[2*E],I=t[2*E+1];if(O===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(ht(d,M,w,T,H,I)){let S=_,C=w,W=T;_=E,w=H,T=I,E=S,H=C,I=W}let V=so(d,M,w,T,H,I);this._cx=V.x,this._cy=V.y;let k=new Float64Array(r);for(let S=0;S<r;S++)k[S]=Gt(t[2*S],t[2*S+1],V.x,V.y);et(u,k,0,r-1),this.hullStart=y;let L=3;i[y]=l[E]=_,i[_]=l[y]=E,i[E]=l[_]=y,s[y]=0,s[_]=1,s[E]=2,f[this._hashKey(d,M)]=y,f[this._hashKey(w,T)]=_,f[this._hashKey(H,I)]=E,this.trianglesLen=0,this._addTriangle(y,_,E,-1,-1,-1);for(let S=0,C,W;S<u.length;S++){let D=u[S],G=t[2*D],q=t[2*D+1];if(S>0&&Math.abs(G-C)<=Hr&&Math.abs(q-W)<=Hr||(C=G,W=q,D===y||D===_||D===E))continue;let j=0;for(let ae=0,pe=this._hashKey(G,q);ae<this._hashSize&&(j=f[(pe+ae)%this._hashSize],!(j!==-1&&j!==i[j]));ae++);j=l[j];let B=j,N;for(;N=i[B],!ht(G,q,t[2*B],t[2*B+1],t[2*N],t[2*N+1]);)if(B=N,B===j){B=-1;break}if(B===-1)continue;let $=this._addTriangle(B,D,i[B],-1,-1,s[B]);s[D]=this._legalize($+2),s[B]=$,L++;let Y=i[B];for(;N=i[Y],ht(G,q,t[2*Y],t[2*Y+1],t[2*N],t[2*N+1]);)$=this._addTriangle(Y,D,N,s[D],-1,s[Y]),s[D]=this._legalize($+2),i[Y]=Y,L--,Y=N;if(B===j)for(;N=l[B],ht(G,q,t[2*N],t[2*N+1],t[2*B],t[2*B+1]);)$=this._addTriangle(N,D,B,-1,s[B],s[N]),this._legalize($+2),s[N]=$,i[B]=B,L--,B=N;this.hullStart=l[D]=B,i[B]=l[Y]=D,i[D]=Y,f[this._hashKey(G,q)]=D,f[this._hashKey(t[2*B],t[2*B+1])]=B}this.hull=new Uint32Array(L);for(let S=0,C=this.hullStart;S<L;S++)this.hull[S]=C,C=i[C];this.hullPrev=this.hullNext=this.hullTri=null,this.triangles=o.subarray(0,this.trianglesLen),this.halfedges=a.subarray(0,this.trianglesLen)}_hashKey(t,r){return Math.floor(ao(t-this._cx,r-this._cy)*this._hashSize)%this._hashSize}_legalize(t){let{triangles:r,coords:n,halfedges:o}=this,a=o[t],l=t-t%3,i=a-a%3,s=l+(t+1)%3,f=l+(t+2)%3,u=i+(a+2)%3;if(a===-1)return f;let c=r[f],p=r[t],v=r[s],h=r[u];if(io(n[2*c],n[2*c+1],n[2*p],n[2*p+1],n[2*v],n[2*v+1],n[2*h],n[2*h+1])){r[t]=h,r[a]=c;let x=o[u];if(x===-1){let y=this.hullStart;do{if(this.hullTri[y]===u){this.hullTri[y]=t;break}y=this.hullNext[y]}while(y!==this.hullStart)}this._link(t,x),this._link(a,o[f]),this._link(f,u);let b=i+(a+1)%3;return this._legalize(t),this._legalize(b)}return f}_link(t,r){this.halfedges[t]=r,r!==-1&&(this.halfedges[r]=t)}_addTriangle(t,r,n,o,a,l){let i=this.trianglesLen;return this.triangles[i]=t,this.triangles[i+1]=r,this.triangles[i+2]=n,this._link(i,o),this._link(i+1,a),this._link(i+2,l),this.trianglesLen+=3,i}};function ao(e,t){let r=e/(Math.abs(e)+Math.abs(t));return(t>0?3-r:1+r)/4}function Gt(e,t,r,n){let o=e-r,a=t-n;return o*o+a*a}function ht(e,t,r,n,o,a){return(n-t)*(o-r)-(r-e)*(a-n)<0}function io(e,t,r,n,o,a,l,i){let s=e-l,f=t-i,u=r-l,c=n-i,p=o-l,v=a-i,h=s*s+f*f,m=u*u+c*c,x=p*p+v*v;return s*(c*x-m*v)-f*(u*x-m*p)+h*(u*v-c*p)<0}function lo(e,t,r,n,o,a){let l=r-e,i=n-t,s=o-e,f=a-t,u=l*l+i*i,c=s*s+f*f,p=.5/(l*f-i*s),v=(f*u-i*c)*p,h=(l*c-s*u)*p;return v*v+h*h}function so(e,t,r,n,o,a){let l=r-e,i=n-t,s=o-e,f=a-t,u=l*l+i*i,c=s*s+f*f,p=.5/(l*f-i*s),v=e+(f*u-i*c)*p,h=t+(l*c-s*u)*p;return{x:v,y:h}}function et(e,t,r,n){if(n-r<=20)for(let o=r+1;o<=n;o++){let a=e[o],l=t[a],i=o-1;for(;i>=r&&t[e[i]]>l;)e[i+1]=e[i--];e[i+1]=a}else{let o=r+n>>1,a=r+1,l=n;Qe(e,o,a),t[e[r]]>t[e[n]]&&Qe(e,r,n),t[e[a]]>t[e[n]]&&Qe(e,a,n),t[e[r]]>t[e[a]]&&Qe(e,r,a);let i=e[a],s=t[i];for(;;){do a++;while(t[e[a]]<s);do l--;while(t[e[l]]>s);if(l<a)break;Qe(e,a,l)}e[r+1]=e[l],e[l]=i,n-a+1>=l-r?(et(e,t,a,n),et(e,t,r,l-1)):(et(e,t,r,l-1),et(e,t,a,n))}}function Qe(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function uo(e){return e[0]}function co(e){return e[1]}var Ir=Pe(Fr()),mt=[],dt=[];function fo(e,t,r){let n=[],o=3.6/Math.sqrt(e),a=Math.PI*(3-Math.sqrt(5)),l=2/e;for(let i=0,s=0,f=1-l/2;i!==e;i++,f-=l){let u=Math.sqrt(1-f*f),c=Math.asin(f)*180/Math.PI,p=s*180/Math.PI;mt[i]===void 0&&(mt[i]=r()-r()),dt[i]===void 0&&(dt[i]=r()-r()),c+=t*mt[i]*(c-Math.asin(Math.max(-1,f-l*2*Math.PI*u/o))*180/Math.PI),p+=t*dt[i]*(o/u*180/Math.PI),n.push(c,p%360),s+=a}return n}function po(e,t,r){let n=t/180*Math.PI,o=r/180*Math.PI;return e.push(Math.cos(n)*Math.cos(o),Math.cos(n)*Math.sin(o),Math.sin(n)),e}function vo(e,{triangles:t,halfedges:r}){let n=t.length;function o(u){return u%3==2?u-2:u+1}let a=0,l=-1,i=[];for(let u=0;u<n;u++)r[u]===-1&&(a++,i[t[u]]=u,l=u);let s=new Int32Array(n+3*a),f=new Int32Array(n+3*a);s.set(t),f.set(r);for(let u=0,c=l;u<a;u++,c=i[s[o(c)]]){let p=n+3*u;f[c]=p,f[p]=c,s[p]=s[o(c)],s[p+1]=s[c],s[p+2]=e;let v=n+(3*u+4)%(3*a);f[p+2]=v,f[v]=p+2}return{triangles:s,halfedges:f}}function ho(e){let t=Math.PI/180,r=e.length/3,n=[];for(let o=0;o<r;o++){let a=e[3*o],l=e[3*o+1],i=e[3*o+2],s=a/(1-i),f=l/(1-i);n.push(s,f)}return n}function jt(e,t,r){mt=[],dt=[];let n=fo(e,t,r),o=[];for(let s=0;s<n.length/2;s++)po(o,n[2*s],n[2*s+1]);let a=new tt(ho(o));o.push(0,0,1),a=vo(o.length/3-1,a);let l=[[0,0]];for(let s=1;s<e+1;s++)l[s]=l[0];return{mesh:new Ir.default({numBoundaryRegions:0,numSolidSides:a.triangles.length,_r_vertex:l,_triangles:a.triangles,_halfedges:a.halfedges}),r_xyz:o}}var ne=123,gt=25e3,Ae=20,Zt=.75,Dr=-1,Or="quads",Wr=!1,qr=!1,Vr=0,Nr=0,Gr=0,Jt="earthlike",Kt="barren",Lr=new $t.default(U(ne)),mo=2/3,kt=Array.from({length:5},(e,t)=>Math.pow(mo,t));function rt(e,t,r){let n=0,o=0;for(let a=0;a<kt.length;a++){let l=1<<a;n+=kt[a]*Lr.noise3D(e*l,t*l,r*l),o+=kt[a]}return n/o}function jr(e,{r_xyz:t}){let{numTriangles:r}=e,n=new Float32Array(3*r);for(let o=0;o<r;o++){let a=e.s_begin_r(3*o),l=e.s_begin_r(3*o+1),i=e.s_begin_r(3*o+2),s=t[3*a],f=t[3*a+1],u=t[3*a+2],c=t[3*l],p=t[3*l+1],v=t[3*l+2],h=t[3*i],m=t[3*i+1],x=t[3*i+2];n[3*o]=(s+c+h)/3,n[3*o+1]=(f+p+m)/3,n[3*o+2]=(u+v+x)/3}return n}function Qt(e,{r_xyz:t,t_xyz:r},n){let{numSides:o}=e,a=new Float32Array(9*o),l=new Float32Array(6*o);for(let i=0;i<o;i++){let s=e.s_inner_t(i),f=e.s_outer_t(i),u=e.s_begin_r(i),c=n(u);for(let p=0;p<3;p++)a[9*i+0+p]=r[3*s+p];for(let p=0;p<3;p++)a[9*i+3+p]=t[3*u+p];for(let p=0;p<3;p++)a[9*i+6+p]=r[3*f+p];for(let p=0;p<3;p++)for(let v=0;v<2;v++)l[6*i+2*p+v]=c[v]}return{xyz:a,tm:l}}var Xt=class{constructor(){}applyClimate(t,r,n,o,a,l,i,s,f){let{tm:u}=this,c=0,p=i>0?1/(1+i*3):1+Math.abs(i)*2;for(let v=0;v<t;v++){let h=n[v]-f;u[c++]=h>0?h*p:h,u[c++]=Math.min(1,Math.max(0,o[v]+s))}for(let v=0;v<r;v++){let h=a[v]-f;u[c++]=h>0?h*p:h,u[c++]=Math.min(1,Math.max(0,l[v]+s))}}setMesh({numSides:t,numRegions:r,numTriangles:n}){this.I=new Int32Array(3*t),this.xyz=new Float32Array(3*(r+n)),this.tm=new Float32Array(2*(r+n))}setMap(t,{r_xyz:r,t_xyz:n,r_color_fn:o,s_flow:a,r_elevation:l,t_elevation:i,r_moisture:s,t_moisture:f}){let{numSides:c,numRegions:p,numTriangles:v}=t,{xyz:h,tm:m,I:x}=this;h.set(r),h.set(n,r.length);let b=0;for(let w=0;w<p;w++)m[b++]=l[w],m[b++]=s[w];for(let w=0;w<v;w++)m[b++]=i[w],m[b++]=f[w];let y=0,_=0,E=0,{_halfedges:d,_triangles:M}=t;for(let w=0;w<c;w++){let T=t.s_opposite_s(w),O=t.s_begin_r(w),H=t.s_begin_r(T),I=t.s_inner_t(w),V=t.s_inner_t(T);l[O]<0||l[H]<0||a[w]>0||a[T]>0?(x[y++]=O,x[y++]=p+V,x[y++]=p+I,_++):(x[y++]=O,x[y++]=H,x[y++]=p+I,E++)}}};function go(e,t,r){let{numRegions:n}=e,o=new Set;for(;o.size<t&&o.size<n;)o.add(r(n));return o}function _t(e,t){let r=new Int32Array(e.numRegions);r.fill(-1);let n=U(ne),o=u=>Math.floor(n()*u),a=go(e,Math.min(Ae,gt),o),l=Array.from(a);for(let u of l)r[u]=u;let i=[],s=u=>Math.floor(U(ne)()*u);for(let u=0;u<l.length;u++){let c=u+s(l.length-u),p=l[c];l[c]=l[u],e.r_circulate_r(i,p);for(let v of i)r[v]===-1&&(r[v]=r[p],l.push(v))}let f=[];for(let u of a){let c=e.r_circulate_r([],u)[0],p=t.slice(3*u,3*u+3),v=t.slice(3*c,3*c+3);f[u]=J.normalize([],J.subtract([],v,p))}return{plate_r:a,r_plate:r,plate_vec:f}}function Ut(e,t,r){let{numRegions:n}=e,o=new Float32Array(n);o.fill(1/0);let a=U(ne),l=f=>Math.floor(a()*f),i=[];for(let f of t)i.push(f),o[f]=0;let s=[];for(let f=0;f<i.length;f++){let u=f+l(i.length-f),c=i[u];i[u]=i[f],e.r_circulate_r(s,c);for(let p of s)o[p]===1/0&&!r.has(p)&&(o[p]=o[c]+1,i.push(p))}return o}var _o=.75;function xo(e,t,r,n,o){let{numRegions:l}=e,i=new Set,s=new Set,f=new Set,u=[];for(let c=0;c<l;c++){let p=1/0,v=-1;e.r_circulate_r(u,c);for(let h of u)if(n[c]!==n[h]){let m=t.slice(3*c,3*c+3),x=t.slice(3*h,3*h+3),b=J.distance(m,x),y=J.distance(J.add([],m,J.scale([],o[n[c]],.01)),J.add([],x,J.scale([],o[n[h]],.01))),_=b-y;_<p&&(v=h,p=_)}if(v!==-1){let h=p>_o*.01,m=n[c],x=n[v];r.has(m)&&r.has(x)?(h?s:f).add(c):!r.has(m)&&!r.has(x)?h&&i.add(m):(h?i:s).add(c)}}return{mountain_r:i,coastline_r:s,ocean_r:f}}function xt(e,{r_xyz:t,plate_is_ocean:r,r_plate:n,plate_vec:o,r_elevation:a}){let{numRegions:i}=e,{mountain_r:s,coastline_r:f,ocean_r:u}=xo(e,t,r,n,o);for(let m=0;m<i;m++)n[m]===m&&(r.has(m)?u:f).add(m);let c=new Set;for(let m of s)c.add(m);for(let m of f)c.add(m);for(let m of u)c.add(m);let p=Ut(e,s,u),v=Ut(e,u,f),h=Ut(e,f,c);for(let m=0;m<i;m++){let x=p[m]+.001,b=v[m]+.001,y=h[m]+.001;x===1/0&&b===1/0?a[m]=.1:a[m]=(1/x-1/b)/(1/x+1/b+1/y),a[m]+=.1*rt(t[3*m],t[3*m+1],t[3*m+2])}}function kr(e,{r_elevation:t,r_moisture:r,t_elevation:n,t_moisture:o}){let{numTriangles:a}=e;for(let l=0;l<a;l++){let i=3*l,s=e.s_begin_r(i),f=e.s_begin_r(i+1),u=e.s_begin_r(i+2);n[l]=1/3*(t[s]+t[f]+t[u]),o[l]=1/3*(r[s]+r[f]+r[u])}}var Yt=new ge;function Ur(e,{t_elevation:t,t_downflow_s:r,order_t:n}){let{numTriangles:o}=e,a=0;r.fill(-999);for(let l=0;l<o;l++)if(t[l]<0){let i=-1,s=t[l];for(let f=0;f<3;f++){let u=3*l+f,c=t[e.s_outer_t(u)];c<s&&(s=c,i=u)}n[a++]=l,r[l]=i,Yt.push(l,t[l])}for(let l=0;l<o;l++){let i=Yt.pop();for(let s=0;s<3;s++){let f=3*i+s,u=e.s_outer_t(f);r[u]===-999&&t[u]>=0&&(r[u]=e.s_opposite_s(f),n[a++]=u,Yt.push(u,t[u]))}}}function Yr(e,{order_t:t,t_elevation:r,t_moisture:n,t_downflow_s:o,t_flow:a,s_flow:l}){let{numTriangles:i,_halfedges:s}=e;l.fill(0);for(let f=0;f<i;f++)r[f]>=0?a[f]=.5*n[f]*n[f]:a[f]=0;for(let f=t.length-1;f>=0;f--){let u=t[f],c=o[u],p=s[c]/3|0;c>=0&&(a[p]+=a[u],l[c]+=a[u],r[p]>r[u]&&(r[p]=r[u]))}}var A,g={},we=new Xt;function yo(){let e=performance.now();Lr=new $t.default(U(ne));let t=jt(gt,Zt,U(ne));A=t.mesh,we.setMesh(A),g.r_elevation=new Float32Array(A.numRegions),g.t_elevation=new Float32Array(A.numTriangles),g.r_moisture=new Float32Array(A.numRegions),g.t_moisture=new Float32Array(A.numTriangles),g.t_downflow_s=new Int32Array(A.numTriangles),g.order_t=new Int32Array(A.numTriangles),g.t_flow=new Float32Array(A.numTriangles),g.s_flow=new Float32Array(A.numSides),g.r_xyz=t.r_xyz,g.t_xyz=jr(A,g),Xr()}function Xr(){switch(Jt){case"airless":return bo();case"barren":return Kt==="hostile"?Ro():Eo();case"gasgiant":return So();case"sun":return To();default:return wo()}}function wo(){let e=_t(A,g.r_xyz);g.plate_r=e.plate_r,g.r_plate=e.r_plate,g.plate_vec=e.plate_vec,g.plate_is_ocean=new Set;for(let t of g.plate_r)Math.floor(U(t)()*10)<5&&g.plate_is_ocean.add(t);xt(A,g);for(let t=0;t<A.numRegions;t++){let r=.5+.5*rt(g.r_xyz[3*t],g.r_xyz[3*t+1],g.r_xyz[3*t+2]);g.r_moisture[t]=Math.max(.15,Math.min(1,r))}kr(A,g),Ur(A,g),Yr(A,g),we.setMap(A,g)}function Mo(e,t){let r=e.numRegions,n=new Float32Array(r),o=U(ne+9999);for(let f=0;f<r;f++)n[f]=.15*rt(t[3*f],t[3*f+1],t[3*f+2]);let a=30+Math.floor(o()*40);for(let f=0;f<a;f++){let u=2*Math.PI*o(),c=Math.acos(2*o()-1),p=Math.cos(u)*Math.sin(c),v=Math.sin(u)*Math.sin(c),h=Math.cos(c),m=.05+o()*.2,x=.1+o()*.35,b=x*(.08+o()*.12),y=Math.cos(m*.6),_=Math.cos(m),E=Math.cos(m*1.4);for(let d=0;d<r;d++){let M=p*t[3*d]+v*t[3*d+1]+h*t[3*d+2];if(!(M<E))if(M<_){let w=(M-E)/(_-E);n[d]+=b*w}else if(M<y){let w=(M-_)/(y-_);n[d]+=b*(1-w)}else{let w=1-M,T=1-y,O=w/T;n[d]-=x*(1-O*O)}}}let l=1/0,i=-1/0;for(let f=0;f<r;f++)n[f]<l&&(l=n[f]),n[f]>i&&(i=n[f]);let s=i-l;for(let f=0;f<r;f++)n[f]=-.8+1.6*(n[f]-l)/s;return n}function bo(){g.plate_r=[0],g.r_plate=new Int32Array(A.numRegions),g.r_plate.fill(0),g.plate_vec=[J.fromValues(0,0,0)],g.plate_is_ocean=new Set,g.r_elevation=Mo(A,g.r_xyz),g.r_moisture.fill(0);for(let e=0;e<A.numTriangles;e++){let t=3*e,r=A.s_begin_r(t),n=A.s_begin_r(t+1),o=A.s_begin_r(t+2);g.t_elevation[e]=(g.r_elevation[r]+g.r_elevation[n]+g.r_elevation[o])/3,g.t_moisture[e]=0}g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),we.setMap(A,g)}function Eo(){let e=_t(A,g.r_xyz);g.plate_r=e.plate_r,g.r_plate=e.r_plate,g.plate_vec=e.plate_vec,g.plate_is_ocean=new Set,xt(A,g);let t=U(ne+7777);for(let r of g.plate_r){if(t()>.4)continue;let n=1.5+t()*1.5;g.r_elevation[r]*=n;let o=[];A.r_circulate_r(o,r);for(let a of o)g.r_elevation[a]*=1+(n-1)*.5}for(let r=0;r<A.numRegions;r++){let n=Math.asin(g.r_xyz[3*r+1]),o=Math.max(0,1-Math.abs(n)/(Math.PI/6)),a=.5+.5*rt(g.r_xyz[3*r],g.r_xyz[3*r+1],g.r_xyz[3*r+2]);g.r_moisture[r]=Math.min(.15,a*o)}for(let r=0;r<A.numTriangles;r++){let n=3*r,o=A.s_begin_r(n),a=A.s_begin_r(n+1),l=A.s_begin_r(n+2);g.t_elevation[r]=(g.r_elevation[o]+g.r_elevation[a]+g.r_elevation[l])/3,g.t_moisture[r]=(g.r_moisture[o]+g.r_moisture[a]+g.r_moisture[l])/3}g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),we.setMap(A,g)}function Ro(){let e=Ae;Ae=Math.round(Ae*1.5);let t=_t(A,g.r_xyz);Ae=e,g.plate_r=t.plate_r,g.r_plate=t.r_plate,g.plate_vec=t.plate_vec,g.plate_is_ocean=new Set,xt(A,g);let r=U(ne+8888),n=[];for(let o of g.plate_r){if(r()>.3)continue;let a=.3+r()*.5,l=2+Math.floor(r()*4),i=[o],s=new Set;s.add(o);for(let f=0;f<i.length&&f<l*10;f++){let u=i[f];g.r_elevation[u]+=a*(1-f/(l*10)),A.r_circulate_r(n,u);for(let c of n)!s.has(c)&&i.length<l*10&&(s.add(c),i.push(c))}}g.r_moisture.fill(0);for(let o=0;o<A.numTriangles;o++){let a=3*o,l=A.s_begin_r(a),i=A.s_begin_r(a+1),s=A.s_begin_r(a+2);g.t_elevation[o]=(g.r_elevation[l]+g.r_elevation[i]+g.r_elevation[s])/3,g.t_moisture[o]=0}g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),we.setMap(A,g)}function So(){g.plate_r=[0],g.r_plate=new Int32Array(A.numRegions),g.r_plate.fill(0),g.plate_vec=[J.fromValues(0,0,0)],g.plate_is_ocean=new Set,g.r_elevation.fill(0),g.r_moisture.fill(0);for(let e=0;e<A.numTriangles;e++)g.t_elevation[e]=0,g.t_moisture[e]=0;g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),we.setMap(A,g)}function To(){g._sunSeed=ne,g.plate_r=[0],g.r_plate=new Int32Array(A.numRegions),g.r_plate.fill(0),g.plate_vec=[J.fromValues(0,0,0)],g.plate_is_ocean=new Set,g.r_elevation.fill(.5),g.r_moisture.fill(0);for(let e=0;e<A.numTriangles;e++)g.t_elevation[e]=.5,g.t_moisture[e]=0;g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),we.setMap(A,g)}var $r=!1,Zr=!1,Jr=!1,Kr=!1,Qr=!1,en=!1;function Po(){return ne}function Ao(e){ne=e}function Co(){return gt}function zo(e){gt=e}function Ho(){return Ae}function Bo(e){Ae=e}function Fo(){return Zt}function Io(e){Zt=e}function Do(){return Dr}function Oo(e){Dr=e}function Wo(){return Or}function qo(e){Or=e}function Vo(){return Wr}function No(e){Wr=e}function Go(){return qr}function Lo(e){qr=e}function jo(){return Vr}function ko(e){Vr=e}function Uo(){return Nr}function Yo(e){Nr=e}function Xo(){return Gr}function $o(e){Gr=e}function Zo(){return $r}function Jo(e){$r=e}function Ko(){return Zr}function Qo(e){Zr=e}function ea(){return Jr}function ta(e){Jr=e}function ra(){return Kr}function na(e){Kr=e}function oa(){return Qr}function aa(e){Qr=e}function ia(){return en}function la(e){en=e}function sa(){return Jt}function ua(e){Jt=e}function ca(){return Kt}function fa(e){Kt=e}var yt="bcdfghjklmnpqrstvwxz",tn="aeiouy";function wt(e){let t=2+(e()*2|0),r="";for(let n=0;n<t;n++)n>0&&e()>.6&&(r+=yt[e()*yt.length|0]),r+=yt[e()*yt.length|0],r+=tn[e()*tn.length|0];return r.charAt(0).toUpperCase()+r.slice(1)}function er(e,t,r){let n=e[3*t]*e[3*r]+e[3*t+1]*e[3*r+1]+e[3*t+2]*e[3*r+2];return Math.acos(Math.max(-1,Math.min(1,n)))}function pa(e,t){let r=new Float32Array(e.numRegions),n=[];for(let o=0;o<e.numRegions;o++){let a=t.r_elevation[o],l=t.r_moisture[o];if(a<0){r[o]=0;continue}let i=.3+.7*l;a>.6&&(i*=Math.max(0,1-(a-.6)*2)),e.r_circulate_r(n,o);for(let s of n)if(t.r_elevation[s]<0){i*=1.3;break}r[o]=Math.min(1,i)}return r}function va(e,t){let r=[];for(let n=0;n<e.numRegions;n++)t.r_elevation[n]>=0&&r.push(n);return r}function ha(e,t,r,n,o){let a=va(e,t);a.length<n*5&&(n=Math.max(1,a.length/5|0));let l=[],i=new Int32Array(e.numRegions);i.fill(-1);let s=[],f=a.slice().sort(()=>o()-.5),u=Math.PI/Math.sqrt(n);for(;s.length<n&&u>.001;){for(let h of f){if(s.length>=n)break;let m=!1;for(let x of s)if(er(t.r_xyz,h,x)<u){m=!0;break}m||s.push(h)}s.length<n&&(u*=.85)}for(let h=0;h<s.length;h++){let m="Generic",x=t.r_elevation[s[h]],b=t.r_moisture[s[h]];if(x>.5)m="Highland";else if(b>.7)m="Forest";else{let _=[];e.r_circulate_r(_,s[h]);for(let E of _)if(t.r_elevation[E]<0){m="Naval";break}}let y=m==="Naval"?1.5:m==="Highland"?.7:1+o()*.5;l.push({i:h,name:wt(o),center:s[h],type:m,expansionism:y,cells:0})}if(l.length===0)return{cultures:l,cellCulture:i};let c=new Float32Array(e.numRegions);c.fill(1/0);let p=new ge,v=[];for(let h of l)c[h.center]=0,i[h.center]=h.i,p.push(h.center,0);for(;p.length>0;){let h=p.pop(),m=c[h],x=i[h];if(x<0)continue;let b=l[x];e.r_circulate_r(v,h);for(let y of v){if(i[y]>=0)continue;let _=t.r_elevation[y];if(_<0)continue;let E=10;b.type==="Highland"&&_<.3?E+=30:_>.5&&(E+=20),Math.abs(t.r_moisture[y]-t.r_moisture[b.center])>.3&&(E+=15);let M=m+E/b.expansionism;M<c[y]&&(c[y]=M,i[y]=x,p.push(y,M))}}for(let h of l)h.cells=0;for(let h=0;h<e.numRegions;h++){let m=i[h];m>=0&&m<l.length&&l[m].cells++}return console.log(`[Pop] Culture cells: ${l.map(h=>`${h.name}:${h.cells}`).join(", ")}`),{cultures:l,cellCulture:i}}function ma(e,t,r,n,o,a,l,i){l==null&&(l=1e4),i==null&&(i=n.length);let s=[],f=new Int32Array(e.numRegions);f.fill(-1);let u=[];for(let d=0;d<e.numRegions;d++)t.r_elevation[d]>=0&&o[d]>=0&&u.push(d);if(u.length<10)return{burgs:s,cellBurg:f};let c=u.map(d=>({r:d,s:r[d]*(.5+a()*.5)}));c.sort((d,M)=>M.s-d.s);let p=Math.min(50,Math.max(3,i)),v=Math.max(0,Math.min(u.length,l)),h=300/6371,m=[];for(let d of c){if(m.length>=p)break;if(o[d.r]<0)continue;let M=!1;for(let w of m)if(er(t.r_xyz,d.r,w)<h){M=!0;break}M||(m.push(d.r),f[d.r]=s.length,s.push({i:s.length,cell:d.r,name:wt(a),capital:1,population:0,culture:o[d.r],state:-1}))}let x=50/6371,b=Math.max(1,Math.ceil(Math.PI/x)),y=b*2;function _(d){let M=t.r_xyz[3*d],w=t.r_xyz[3*d+1],T=t.r_xyz[3*d+2],O=Math.asin(Math.max(-1,Math.min(1,T))),H=Math.atan2(w,M),I=Math.floor((O+Math.PI/2)/Math.PI*b),V=Math.floor((H+Math.PI)/(2*Math.PI)*y);return I*y+V}let E=new Map;for(let d=0;d<s.length;d++){let M=_(s[d].cell);E.has(M)||E.set(M,[]),E.get(M).push(d)}for(let d of c){if(s.length>=p+v)break;if(f[d.r]>=0||o[d.r]<0)continue;let M=!1,w=_(d.r),T=w%y,O=(w-T)/y;e:for(let H=-1;H<=1;H++){let I=O+H;if(!(I<0||I>=b))for(let V=-1;V<=1;V++){let k=((T+V)%y+y)%y,L=E.get(I*y+k);if(L){for(let S of L)if(er(t.r_xyz,d.r,s[S].cell)<x*(1+a())){M=!0;break e}}}}M||(E.has(w)||E.set(w,[]),E.get(w).push(s.length),f[d.r]=s.length,s.push({i:s.length,cell:d.r,name:wt(a),capital:0,population:0,culture:o[d.r],state:-1}))}return{burgs:s,cellBurg:f}}function da(e,t,r,n,o,a,l,i){let s=[],f=new Int32Array(e.numRegions);f.fill(-1);let u=n.filter(_=>_.capital);if(u=u.slice(0,i),u.length===0)return{states:[],cellState:f};for(let _ of u){let E=r[_.culture],d=.8+l()*.8;s.push({i:s.length,name:_.name,capital:_.i,culture:_.culture,center:_.cell,expansionism:d*(E?E.expansionism:1),cells:0,burgs:[],color:""}),_.state=s.length-1}let c=[],p=s.map(_=>{e.r_circulate_r(c,_.center);let E=c.filter(d=>t.r_elevation[d]>=0).length;return`${_.name}(exp=${_.expansionism.toFixed(2)},cult=${r[_.culture]?.name},landNbrs=${E})`});console.log(`[Pop] State details: ${p.join(", ")}`);let v=new Float32Array(e.numRegions);v.fill(1/0);let h=new ge,m=[];for(let _ of s)v[_.center]=0,f[_.center]=_.i,h.push(_.center,0);for(;h.length>0;){let _=h.pop(),E=v[_],d=f[_];if(d<0)continue;let M=s[d];e.r_circulate_r(m,_);for(let w of m){if(t.r_elevation[w]<0||f[w]>=0)continue;let T=10;a[w]!==M.culture&&(T+=100),o[w]>=0&&(T-=20),t.r_elevation[w]>.5&&(T+=30),T<1&&(T=1);let H=E+T/M.expansionism;H<2e4&&H<v[w]&&(v[w]=H,f[w]=d,h.push(w,H))}}for(let _ of n)_.state<0?(_.state=f[_.cell],s[_.state]&&s[_.state].burgs.push(_.i)):s[_.state].burgs.push(_.i);for(let _ of s)_.cells=0;for(let _=0;_<e.numRegions;_++){let E=f[_];E>=0&&E<s.length&&s[E].cells++}let x=s.map(_=>r[_.culture]?.name??"?");console.log(`[Pop] State cells: ${s.map(_=>`${_.name}:${_.cells}`).join(", ")}`),console.log(`[Pop] Capital cultures: ${x.join(", ")}`);let b=["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#a9a9a9","#e6beff","#ff46b8"];function y(_){let E=new Set;for(let d=0;d<e.numRegions;d++)if(f[d]===_){e.r_circulate_r(m,d);for(let M of m){let w=f[M];w>=0&&w!==_&&E.add(w)}}return[...E]}for(let _ of s){let E=y(_.i).map(M=>s[M]).filter(M=>M&&M.color),d=new Set(E.map(M=>M.color));_.color=b.find(M=>!d.has(M))||"#"+(l()*16777215<<0).toString(16).padStart(6,"0")}return{states:s,cellState:f}}function ga(e,t,r,n,o,a,l){let i=[],s=new Int32Array(e.numRegions);s.fill(-1);let f={};for(let v of r){let h=n.filter(b=>b.state===v.i);if(h.length<2){f[v.i]=[];continue}h.sort((b,y)=>(y.capital?1:0)-(b.capital?1:0));let m=Math.min(h.length,Math.max(2,h.length*.15|0)),x=h.slice(0,m);for(let b of x){let y={i:i.length,name:wt(l)+" Province",state:v.i,burg:b.i,center:b.cell,cells:0};i.push(y),s[b.cell]=y.i}f[v.i]=x.map(b=>s[b.cell])}let u=new Float32Array(e.numRegions);u.fill(1/0);let c=new ge,p=[];for(let v of i)u[v.center]=0,c.push(v.center,0);for(;c.length>0;){let v=c.pop(),h=u[v],m=s[v];if(!(m<0)){e.r_circulate_r(p,v);for(let x of p){if(t.r_elevation[x]<0||o[x]!==o[v]||s[x]>=0)continue;let b=t.r_elevation[x]>.5?100:10,y=h+b;y<u[x]&&(u[x]=y,s[x]=m,c.push(x,y))}}}for(let v of i)v.cells=0;for(let v=0;v<e.numRegions;v++){let h=s[v];h>=0&&h<i.length&&i[h].cells++}return{provinces:i,cellProvince:s}}function _a(e,t,r,n,o,a){let l=performance.now(),i=U(n),s=pa(e,t),f=performance.now(),{cultures:u,cellCulture:c}=ha(e,t,s,r,i),p=performance.now(),{burgs:v,cellBurg:h}=ma(e,t,s,u,c,i,a,o),m=performance.now(),{states:x,cellState:b}=da(e,t,u,v,h,c,i,o),y=performance.now(),{provinces:_,cellProvince:E}=ga(e,t,x,v,b,h,i),d=performance.now();return{cultures:u,cellCulture:c,burgs:v,cellBurg:h,states:x,cellState:b,provinces:_,cellProvince:E,suitability:s}}var or=64,ar=64;function He(e){let t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return[t,r,n]}function Mt(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function ir(e,t,r){let n=new Uint8Array(e*t*4);for(var o=0,a=0;o<t;o++)for(let l=0;l<e;l++){let i=2*l/e-1,[s,f,u]=r(i);n[a++]=Math.min(255,Math.max(0,Math.round(s))),n[a++]=Math.min(255,Math.max(0,Math.round(f))),n[a++]=Math.min(255,Math.max(0,Math.round(u))),n[a++]=255}return n}function nr(){return ir(64,64,e=>{let t=.5,r,n,o;return e<-.135?(r=41.5,n=55.3,o=139):e<0?(r=48+48*e,n=64+64*e,o=127-12*e):(t=t*(1-e),r=210-100*t,n=185-45*t,o=139-45*t,r=255*e+r*(1-e),n=255*e+n*(1-e),o=255*e+o*(1-e)),[r,n,o]})}function xa(e,t,r){let n=He(e),o=He(t),a=He(r);return ir(64,64,l=>{let i=(l+1)/2;return i<.5?Mt(n,o,i*2):Mt(o,a,(i-.5)*2)})}function ya(e,t,r){let n=He(e),o=He(t),a=He(r);return ir(64,64,l=>{let i=(l+1)/2;return i<.5?Mt(n,o,i*2):Mt(o,a,(i-.5)*2)})}var tr={colorA:"#321408",colorB:"#aa5523",colorC:"#fae6e6"},rr={colorA:"#555555",colorB:"#aaaaaa",colorC:"#eeeeee"};function lr(e,t,r,n){switch(e){case"airless":return xa(t||rr.colorA,r||rr.colorB,n||rr.colorC);case"barren":return ya(t||tr.colorA,r||tr.colorB,n||tr.colorC);case"gasgiant":return nr();default:return nr()}}var sr=nr();var R=Pe(Je("three")),ln=Je("three/addons/controls/OrbitControls.js");var z=Pe(Je("three"));var ce=Pe(Je("three"));function rn(e){let t=new ce.DataTexture(e,64,64,ce.RGBAFormat);return t.wrapS=ce.ClampToEdgeWrapping,t.wrapT=ce.ClampToEdgeWrapping,t.magFilter=ce.NearestFilter,t.minFilter=ce.NearestFilter,t.needsUpdate=!0,t}function bt(e,t,r,n){return rn(lr(e,t,r,n))}var wa=rn(sr),nn=wa;var on=Pe(qt()),Ma=`
varying vec2 v_tm;
void main() {
    v_tm = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ba=`
precision highp float;

uniform sampler2D u_colormap;
uniform vec2 u_light_angle;
uniform float u_inverse_texture_size;
uniform float u_slope;
uniform float u_flat;
uniform float u_c;
uniform float u_d;
uniform float u_outline_strength;

varying vec2 v_tm;

void main() {
    float e = v_tm.x > 0.0 ? 0.5 * (v_tm.x * v_tm.x + 1.0) : 0.5 * (v_tm.x + 1.0);
    float dedx = dFdx(v_tm.x);
    float dedy = dFdy(v_tm.x);
    vec3 slope_vector = normalize(vec3(dedy, dedx, u_d * 2.0 * u_inverse_texture_size));
    vec3 light_vector = normalize(vec3(u_light_angle, mix(u_slope, u_flat, slope_vector.z)));
    float light = u_c + max(0.0, dot(light_vector, slope_vector));
    float outline = 1.0 + u_outline_strength * max(dedx, dedy);
    gl_FragColor = vec4(texture2D(u_colormap, vec2(e, v_tm.y)).rgb * light / outline, 1);
}
`;function ur(){return new z.ShaderMaterial({uniforms:{u_colormap:{value:nn},u_light_angle:{value:new z.Vector2(Math.cos(Math.PI/3),Math.sin(Math.PI/3))},u_inverse_texture_size:{value:1/2048},u_d:{value:60},u_c:{value:.15},u_slope:{value:6},u_flat:{value:2.5},u_outline_strength:{value:5}},vertexShader:Ma,fragmentShader:ba,side:z.FrontSide,depthWrite:!0,depthTest:!0})}var Ea=`
attribute vec4 a_rgba;
varying vec4 v_rgba;
void main() {
    v_rgba = a_rgba;
    vec3 outward = normalize(position) * 1.002;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(outward, 1.0);
}
`,Ra=`
precision highp float;
uniform vec4 u_multiply_rgba;
uniform vec4 u_add_rgba;
varying vec4 v_rgba;
void main() {
    gl_FragColor = v_rgba * u_multiply_rgba + u_add_rgba;
}
`;function cr(){return new z.ShaderMaterial({uniforms:{u_multiply_rgba:{value:new z.Vector4(1,1,1,1)},u_add_rgba:{value:new z.Vector4(0,0,0,0)}},vertexShader:Ea,fragmentShader:Ra,transparent:!0,depthTest:!0,depthWrite:!1,blending:z.CustomBlending,blendSrc:z.OneFactor,blendDst:z.OneMinusSrcAlphaFactor,blendEquation:z.AddEquation})}function fr(){return new z.MeshBasicMaterial({vertexColors:!0,transparent:!0,opacity:.5,depthTest:!0,depthWrite:!1,depthFunc:z.LessEqualDepth})}var Sa=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ta=`
precision highp float;

uniform sampler2D u_cloud_texture;
uniform float u_time;

varying vec2 vUv;

void main() {
    vec2 scrolledUv = vec2(vUv.x + u_time * 0.015, vUv.y);
    float alpha = texture2D(u_cloud_texture, scrolledUv).r;
    alpha = clamp(alpha * 0.7, 0.0, 0.55);
    gl_FragColor = vec4(1.0, 0.95, 0.85, alpha);
}
`,Pa=`
varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec3 vUnitSamplePoint;

void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vPositionW = worldPos.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vUnitSamplePoint = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Aa=`
precision highp float;

uniform float u_scale;
uniform float u_turbulence;
uniform float u_blur;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_colorC;
uniform float u_seed;

varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec3 vUnitSamplePoint;

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+10.0)*x);
}

float permute(float x) {
    return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;
    p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
    return p;
}

#define F4 0.309016994374947451

float snoise(vec4 v) {
    const vec4 C = vec4(0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);
    vec4 i = floor(v + dot(v, vec4(F4)));
    vec4 x0 = v - i + dot(i, C.xxxx);
    vec4 i0;
    vec3 isX = step(x0.yzw, x0.xxx);
    vec3 isYZ = step(x0.zww, x0.yyz);
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;
    vec4 i3 = clamp(i0, 0.0, 1.0);
    vec4 i2 = clamp(i0-1.0, 0.0, 1.0);
    vec4 i1 = clamp(i0-2.0, 0.0, 1.0);
    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;
    i = mod289(i);
    float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute(permute(permute(permute(
        i.w + vec4(i1.w, i2.w, i3.w, 1.0))
        + i.z + vec4(i1.z, i2.z, i3.z, 1.0))
        + i.y + vec4(i1.y, i2.y, i3.y, 1.0))
        + i.x + vec4(i1.x, i2.x, i3.x, 1.0));
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0);
    vec4 p0 = grad4(j0, ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * (dot(m0*m0, vec3(dot(p0,x0), dot(p1,x1), dot(p2,x2)))
        + dot(m1*m1, vec2(dot(p3,x3), dot(p4,x4))));
}

float simplex401(vec4 p) {
    return (snoise(p) + 1.0) / 2.0;
}

float fractalSimplex4(vec4 p, int nbOctaves, float decay, float lacunarity) {
    float totalAmplitude = 0.0;
    float value = 0.0;
    for(int i = 0; i < nbOctaves; ++i) {
        totalAmplitude += 1.0 / pow(decay, float(i));
        vec4 samplePoint = p * pow(lacunarity, float(i));
        value += simplex401(samplePoint) / pow(decay, float(i));
    }
    return value / totalAmplitude;
}

vec3 lerp(vec3 v1, vec3 v2, float s) {
    return s * v1 + (1.0 - s) * v2;
}

void main() {
    float seedImpact = mod(u_seed, 1e3);
    vec4 seededSamplePoint = vec4(vUnitSamplePoint * u_scale, seedImpact);
    seededSamplePoint.y *= 2.5;

    float latitude = seededSamplePoint.y;

    float warping = fractalSimplex4(seededSamplePoint, 5, 2.0, 2.0) * u_turbulence;

    float colorDecision1 = fractalSimplex4(
        vec4(latitude + warping, seedImpact, -seedImpact, seedImpact), 3, 2.0, 2.0);
    float colorDecision2 = fractalSimplex4(
        vec4(latitude - warping, seedImpact, -seedImpact, seedImpact), 3, 2.0, 2.0);

    float blurRange = 0.1 + u_blur * 0.3;

    vec3 color = lerp(u_colorA, u_colorC, smoothstep(0.5 - blurRange, 0.5 + blurRange, colorDecision1));
    color = lerp(color, u_colorB, smoothstep(0.2, 0.8, colorDecision2));

    vec3 lightDirection = normalize(vec3(0.5, 0.8, 0.3));
    vec3 normal = normalize(vNormalW);
    float ndl = max(0.0, dot(normal, lightDirection));

    vec3 viewDir = normalize(cameraPosition - vPositionW);
    vec3 halfDir = normalize(lightDirection + viewDir);
    float spec = pow(max(0.0, dot(normal, halfDir)), 16.0) * 0.3;

    color *= (ndl * 0.35 + 0.85);
    color += spec * ndl * 0.3;

    float rim = 1.0 - max(0.0, dot(viewDir, normal));
    rim = pow(rim, 3.0) * 0.2;
    color += rim * mix(u_colorB, u_colorA, 0.5);

    float pole = 1.0 - pow(abs(vUnitSamplePoint.y), 2.0) * 0.15;
    color *= pole;

    gl_FragColor = vec4(color, 1.0);
}
`;function pr(e){return new z.ShaderMaterial({uniforms:{u_scale:{value:e.scale},u_turbulence:{value:e.turbulence},u_blur:{value:e.blur},u_colorA:{value:e.colorA.clone?e.colorA:new z.Color(e.colorA)},u_colorB:{value:e.colorB.clone?e.colorB:new z.Color(e.colorB)},u_colorC:{value:e.colorC.clone?e.colorC:new z.Color(e.colorC)},u_seed:{value:e.seed}},vertexShader:Pa,fragmentShader:Aa,side:z.FrontSide,depthWrite:!0,depthTest:!0})}function vr(e){let n=new Uint8Array(524288),o=new on.default(U(e+12345));for(let l=0;l<256;l++)for(let i=0;i<512;i++){let s=(l*512+i)*4,f=i/512*4,u=l/256*2,c=0;c+=o.noise3D(f,u,0)*.5,c+=o.noise3D(f*2,u*2,1)*.25,c+=o.noise3D(f*4,u*4,2)*.125,c+=o.noise3D(f*8,u*8,3)*.0625,c=c*.5+.5;let p=Math.floor(c*255);n[s]=p,n[s+1]=p,n[s+2]=p,n[s+3]=255}let a=new z.DataTexture(n,512,256,z.RGBAFormat);return a.wrapS=z.RepeatWrapping,a.wrapT=z.ClampToEdgeWrapping,a.magFilter=z.LinearFilter,a.minFilter=z.LinearMipmapLinearFilter,a.needsUpdate=!0,new z.ShaderMaterial({uniforms:{u_cloud_texture:{value:a},u_time:{value:0}},vertexShader:Sa,fragmentShader:Ta,transparent:!0,depthTest:!0,depthWrite:!1,side:z.DoubleSide,blending:z.NormalBlending})}var F=Pe(Je("three"));var Ca=`
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
float mod289(float x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x * 34.0) + 1.0) * x); }
float permute(float x){ return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float taylorInvSqrt(float r){ return 1.79284291400159 - 0.85373472095314 * r; }

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  return p;
}

#define F4 0.309016994374947451

float snoise4D(vec4 v) {
  const vec4 C = vec4(0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);
  vec4 i = floor(v + dot(v, vec4(F4)));
  vec4 x0 = v - i + dot(i, C.xxxx);
  vec4 i0;
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;
  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0-1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0-2.0, 0.0, 1.0);
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;
  i = mod289(i);
  float j0 = permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);
  vec4 j1 = permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0);
  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));
  vec3 m0 = max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);
  vec2 m1 = max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);
  m0 = m0*m0;
  m1 = m1*m1;
  return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));
}
`,za=`
float fbm4(vec4 p) {
  float a = 1.0, f = 1.0;
  float sum = 0.0, sumAmp = 0.0;
  for (int i = 0; i < 5; i++) {
    sum += snoise4D(p * f) * a;
    sumAmp += a;
    a *= 0.66;
    f *= 2.0;
  }
  return sum / sumAmp;
}
`,Ha=`
varying vec3 vWorld;
varying vec3 vNormalView;
varying vec3 vNormalWorld;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

uniform float uTime;

mat2 rot(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }

void setLayers(vec3 p){
    float t = uTime;
    vec3 p1 = p;
    p1.yz = rot(t) * p1.yz;
    vLayer0 = p1;
    p1 = p;
    p1.zx = rot(t + 2.094) * p1.zx;
    vLayer1 = p1;
    p1 = p;
    p1.xy = rot(t - 4.188) * p1.xy;
    vLayer2 = p1;
}

void main(){
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalView = normalize(normalMatrix * normal);
    vNormalWorld = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    setLayers(normalize(normal));
    gl_Position = projectionMatrix * viewMatrix * world;
}
`,Ba=`
precision highp float;
${Ca}
${za}

varying vec3 vWorld;
varying vec3 vNormalView;
varying vec3 vNormalWorld;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

uniform float uFresnelPower;
uniform float uFresnelInfluence;
uniform float uTint;
uniform float uBase;
uniform float uBrightnessOffset;
uniform float uBrightness;
uniform float uTime;
uniform float uScale;
uniform float uContrast;
uniform vec3 uSpectralColor;

vec3 brightnessToColor(float b){
  b *= uTint;
  return (vec3(b, b*b, b*b*b*b) / uTint) * uBrightness * uSpectralColor;
}

float ocean(){
    vec4 p0 = vec4(vLayer0 * uScale, uTime * 0.3);
    vec4 p1 = vec4(vLayer1 * uScale, uTime * 0.3 + 100.0);
    vec4 p2 = vec4(vLayer2 * uScale, uTime * 0.3 + 200.0);
    float s = fbm4(p0) * uContrast + 0.5;
    s += fbm4(p1) * uContrast + 0.5;
    s += fbm4(p2) * uContrast + 0.5;
    return s * 0.3333333;
}

void main(){
    vec3 Vview = normalize((viewMatrix * vec4(vWorld - cameraPosition, 0.0)).xyz);
    float nDotV = dot(vNormalView, -Vview);
    float fresnel = pow(1.0 - nDotV, uFresnelPower) * uFresnelInfluence;

    float brightness = ocean() * uBase + uBrightnessOffset + fresnel;
    vec3 col = clamp(brightnessToColor(brightness), 0.0, 1.0);

    gl_FragColor = vec4(col, 1.0);
}
`;function hr(e){return new F.ShaderMaterial({uniforms:{uTime:{value:0},uFresnelPower:{value:1.5},uFresnelInfluence:{value:.4},uTint:{value:1.8},uBase:{value:.05},uBrightnessOffset:{value:0},uBrightness:{value:3},uSpectralColor:{value:e||new F.Color(1,1,1)},uScale:{value:2},uContrast:{value:.15}},vertexShader:Ha,fragmentShader:Ba,side:F.FrontSide,depthWrite:!0,depthTest:!0})}var an=`
#define m4 mat4(0.00, 0.80, 0.60, -0.4, -0.80, 0.36, -0.48, -0.5, -0.60, -0.48, 0.64, 0.2, 0.40, 0.30, 0.20, 0.4)

vec4 twistedSineNoise(vec4 q, float falloff) {
  float a = 1.0;
  float f = 1.0;
  vec4 sum = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    q = m4 * q;
    vec4 s = sin(q.ywxz * f) * a;
    q += s;
    sum += s;
    a *= falloff;
    f /= falloff;
  }
  return sum;
}
`,Fa=`
attribute vec3 aPos;
attribute vec3 aPos0;
attribute vec4 aWireRandom;

varying float vUVY;
varying float vOpacity;
varying vec3 vColor;
varying vec3 vNormal;

uniform float uHueSpread;
uniform float uHue;
uniform float uLength;
uniform float uWidth;
uniform float uTime;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform vec3  uCamPos;
uniform mat4  uViewProjection;
uniform float uOpacity;

${an}

vec3 getPos(float phase, float animPhase) {
  float size = aWireRandom.z + 0.2;
  float d = phase * uLength * size;
  vec3 p = aPos0 + aPos0 * d;
  p += twistedSineNoise(vec4(p * uNoiseFrequency, uTime), 0.707).xyz * (d * uNoiseAmplitude);
  return p;
}

vec3 spectrum(float d) {
  return smoothstep(0.25, 0.0, abs(d + vec3(-0.375, -0.5, -0.625)));
}

void main() {
  vUVY = aPos.z;
  float animPhase = fract(uTime * 0.3 * (aWireRandom.y * 0.5) + aWireRandom.x);
  vec3 p  = getPos(aPos.x, animPhase);
  vec3 p1 = getPos(aPos.x + 0.01, animPhase);
  vec3 p0w = (modelMatrix * vec4(p, 1.0)).xyz;
  vec3 p1w = (modelMatrix * vec4(p1, 1.0)).xyz;
  vec3 dirW  = normalize(p1w - p0w);
  vec3 vW    = normalize(p0w - uCamPos);
  vec3 sideW = normalize(cross(vW, dirW));
  if (length(sideW) < 1e-6) {
    vec3 up = (abs(dirW.y) < 0.99) ? vec3(0.0,1.0,0.0) : vec3(1.0,0.0,0.0);
    sideW = normalize(cross(up, dirW));
  }
  float width = uWidth * aPos.z * (1.0 - aPos.x);
  vec3 pWorld = p0w + sideW * width;
  vNormal  = normalize(pWorld);
  vOpacity = uOpacity * (0.5 + aWireRandom.w);
  vColor   = spectrum(aWireRandom.w * uHueSpread + uHue);
  gl_Position = uViewProjection * vec4(pWorld, 1.0);
}
`,Ia=`
precision highp float;

varying float vUVY;
varying float vOpacity;
varying vec3  vColor;
varying vec3  vNormal;

uniform float uAlphaBlended;
uniform vec3  uSpectralColor;

void main() {
  float alpha = 1.0 - smoothstep(0.0, 1.0, abs(vUVY));
  alpha *= alpha;
  alpha *= vOpacity;
  gl_FragColor = vec4(vColor * uSpectralColor * alpha, alpha);
}
`,Da=`
attribute vec3 aPos;
attribute vec3 aPos0;
attribute vec3 aPos1;
attribute vec4 aWireRandom;

varying float vUVY;
varying float vOpacity;
varying vec3  vColor;
varying vec3  vNormal;

uniform float uWidth;
uniform float uAmp;
uniform float uTime;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform vec3  uCamPos;
uniform mat4  uViewProjection;
uniform float uOpacity;
uniform float uHueSpread;
uniform float uHue;

${an}

vec3 getPosOBJ(float phase, float animPhase) {
  float size = distance(aPos0, aPos1);
  vec3  n    = normalize((aPos0 + aPos1) * 0.5);
  vec3 p = mix(aPos0, aPos1, phase);
  float amp = sin(phase * 3.14159265) * size * uAmp;
  amp *= animPhase;
  p += n * amp;
  p += twistedSineNoise(vec4(p * uNoiseFrequency, uTime), 0.707).xyz * (amp * uNoiseAmplitude);
  return p;
}

#define hue(v) ( 0.6 + 0.6 * cos( 6.3*(v) + vec3(0.0,23.0,21.0) ) )

void main() {
  vUVY = aPos.z;
  float animPhase = fract(uTime * 0.3 * (aWireRandom.y * 0.5) + aWireRandom.x);
  vec3 pOBJ  = getPosOBJ(aPos.x, animPhase);
  vec3 p1OBJ = getPosOBJ(aPos.x + 0.01, animPhase);
  vec3 pW  = (modelMatrix * vec4(pOBJ, 1.0)).xyz;
  vec3 p1W = (modelMatrix * vec4(p1OBJ, 1.0)).xyz;
  vec3 dirW  = normalize(p1W - pW);
  vec3 vW    = normalize(pW - uCamPos);
  vec3 sideW = normalize(cross(vW, dirW));
  float R = length(aPos0);
  float width = uWidth * aPos.z * (1.0 + animPhase) * R;
  pW += sideW * width;
  vNormal  = normalize(pW);
  float lenW = length(pW);
  vOpacity  = smoothstep(R, R * 1.03, lenW);
  vOpacity *= (1.0 - animPhase);
  vOpacity *= uOpacity;
  vColor = hue(aWireRandom.w * uHueSpread + uHue);
  gl_Position = uViewProjection * vec4(pW, 1.0);
}
`,Oa=`
precision highp float;

varying float vUVY;
varying float vOpacity;
varying vec3  vColor;
varying vec3  vNormal;

uniform float uAlphaBlended;
uniform vec3  uSpectralColor;

void main() {
  float alpha = smoothstep(1.0, 0.0, abs(vUVY));
  alpha *= alpha;
  alpha *= vOpacity;
  gl_FragColor = vec4(vColor * uSpectralColor * alpha, alpha * uAlphaBlended);
}
`,Wa=`
attribute vec3 aPos;

varying float vRadial;
varying vec3 vWorld;

uniform mat4 uViewProjection;
uniform float uRadius;
uniform vec3 uCamUp;
uniform vec3 uCamPos;

void main() {
  vRadial = aPos.z;
  vec3 side = normalize(cross(normalize(-uCamPos), uCamUp));
  vec3 p = aPos.x * side + aPos.y * uCamUp;
  p *= 1.0 + aPos.z * uRadius;
  vec4 world = vec4(p, 1.0);
  vWorld = world.xyz;
  gl_Position = uViewProjection * world;
}
`,qa=`
precision highp float;

varying float vRadial;
varying vec3 vWorld;

uniform float uTint;
uniform float uBrightness;
uniform float uFalloffColor;
uniform vec3  uSpectralColor;

vec3 brightnessToColor(float b) {
  b *= uTint;
  return (vec3(b, b*b, b*b*b*b) / uTint) * uBrightness * uSpectralColor;
}

void main() {
  float alpha = (1.0 - vRadial);
  alpha *= alpha;
  float brightness = 1.0 + alpha * uFalloffColor;
  gl_FragColor.xyz = brightnessToColor(brightness) * alpha;
  gl_FragColor.w = alpha;
}
`;function mr(e,t){let r=U(t+5e3),n=16,o=n*2,a=e*o,l=new Float32Array(a*3),i=new Float32Array(a*3),s=new Float32Array(a*4),f=0;for(let c=0;c<e;c++){let p=2*Math.PI*r(),v=Math.acos(2*r()-1),h=new F.Vector3(Math.cos(p)*Math.sin(v),Math.sin(p)*Math.sin(v),Math.cos(v)),m=r(),x=r(),b=r(),y=r();for(let _=0;_<n;_++){let E=_/n;for(let d=-1;d<=1;d+=2){let M=f*3;l[M]=E,l[M+1]=c/e,l[M+2]=d,i[M]=h.x,i[M+1]=h.y,i[M+2]=h.z,s[f*4]=m,s[f*4+1]=x,s[f*4+2]=b,s[f*4+3]=y,f++}}}let u=new F.BufferGeometry;return u.setAttribute("aPos",new F.BufferAttribute(l,3)),u.setAttribute("aPos0",new F.BufferAttribute(i,3)),u.setAttribute("aWireRandom",new F.BufferAttribute(s,4)),u}function dr(e,t){let r=U(t+6e3),n=8,o=n*2,a=e*o,l=new Float32Array(a*3),i=new Float32Array(a*3),s=new Float32Array(a*3),f=new Float32Array(a*4),u=0;for(let p=0;p<e;p++){let v=2*Math.PI*r(),h=Math.acos(2*r()-1),m=new F.Vector3(Math.cos(v)*Math.sin(h),Math.sin(v)*Math.sin(h),Math.cos(h)),x=.9+r()*.1,b=1.2+r()*1,y=m.clone().multiplyScalar(x),_=m.clone().multiplyScalar(b),E=r(),d=r(),M=.3+r()*.7,w=r();for(let T=0;T<n;T++){let O=T/n;for(let H=-1;H<=1;H+=2){let I=u*3;l[I]=O,l[I+1]=p/e,l[I+2]=H,i[I]=y.x,i[I+1]=y.y,i[I+2]=y.z,s[I]=_.x,s[I+1]=_.y,s[I+2]=_.z,f[u*4]=E,f[u*4+1]=d,f[u*4+2]=M,f[u*4+3]=w,u++}}}let c=new F.BufferGeometry;return c.setAttribute("aPos",new F.BufferAttribute(l,3)),c.setAttribute("aPos0",new F.BufferAttribute(i,3)),c.setAttribute("aPos1",new F.BufferAttribute(s,3)),c.setAttribute("aWireRandom",new F.BufferAttribute(f,4)),c}function gr(){let e=[],t=[];for(let a=0;a<=32;a++){let i=a/32*2*Math.PI,s=Math.cos(i),f=Math.sin(i),u=.1,c=1;for(let p=0;p<2;p++){let v=p===0?u:c;t.push(s*v,f*v,p),e.push(a*2+p)}}let n=[];for(let a=0;a<32;a++){let l=a*2,i=a*2+1,s=(a+1)*2,f=(a+1)*2+1;n.push(l,s,i),n.push(i,s,f)}let o=new F.BufferGeometry;return o.setAttribute("aPos",new F.BufferAttribute(new Float32Array(t),3)),o.setIndex(new F.BufferAttribute(new Uint16Array(n),1)),o}function _r(e){return new F.ShaderMaterial({uniforms:{uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uLength:{value:e.length},uWidth:{value:e.width},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new F.Vector3(0,0,2.5)},uViewProjection:{value:new F.Matrix4},uOpacity:{value:e.opacity},uAlphaBlended:{value:1},uSpectralColor:{value:e.spectralColor||new F.Color(1,1,1)}},vertexShader:Fa,fragmentShader:Ia,transparent:!0,depthWrite:!1,blending:F.AdditiveBlending})}function xr(e){return new F.ShaderMaterial({uniforms:{uWidth:{value:e.width},uAmp:{value:e.amp},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new F.Vector3(0,0,2.5)},uViewProjection:{value:new F.Matrix4},uOpacity:{value:e.opacity},uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uAlphaBlended:{value:.75},uSpectralColor:{value:e.spectralColor||new F.Color(1,1,1)}},vertexShader:Da,fragmentShader:Oa,transparent:!0,depthWrite:!1,blending:F.AdditiveBlending})}function yr(e){return new F.ShaderMaterial({uniforms:{uTint:{value:e.tint},uBrightness:{value:e.brightness},uFalloffColor:{value:e.falloffColor},uSpectralColor:{value:e.spectralColor||new F.Color(1,1,1)},uViewProjection:{value:new F.Matrix4},uRadius:{value:e.radius},uCamUp:{value:new F.Vector3(0,1,0)},uCamPos:{value:new F.Vector3(0,0,2.5)}},vertexShader:Wa,fragmentShader:qa,transparent:!0,depthWrite:!1,blending:F.AdditiveBlending,side:F.DoubleSide})}var Ve,X,ee,oe,ue,Ne,Rt,se=null,fe=null,Ce=null,ie=null,Et=null,Be=null,Fe=null,Ie=null,De=null,Oe=null,We=null,qe=null,ot=null,nt=null,at=null,le=null,Z=null,te=null,re=null,K=null,sn="quads",Mr=!1;function Va(){return ee}function Na(){return Ve}function Ga(){return oe}function La(e){oe.azimuthAngle=-e,oe.update()}function ja(e){Ve=new R.WebGLRenderer({canvas:e,antialias:!0}),Ve.setSize(e.width,e.height),Ve.setPixelRatio(Math.min(window.devicePixelRatio,2)),X=new R.Scene,X.background=new R.Color(329740),ee=new R.PerspectiveCamera(45,e.width/e.height,.1,50),ee.position.set(0,0,2.5),oe=new ln.OrbitControls(ee,e),oe.enableDamping=!0,oe.dampingFactor=.1,oe.rotateSpeed=.5,oe.minDistance=.8,oe.maxDistance=8,oe.target.set(0,0,0),oe.update(),ue=ur(),Ne=cr(),Rt=fr(),Mr=!0}var wr={scale:1,turbulence:2,blur:.5,colorA:new R.Color(16775408),colorB:new R.Color(15788208),colorC:new R.Color(11509968),seed:0};function ka(e){if(Object.assign(wr,e),ie){let t=wr;ie.uniforms.u_scale.value=t.scale,ie.uniforms.u_turbulence.value=t.turbulence,ie.uniforms.u_blur.value=t.blur,ie.uniforms.u_colorA.value.copy(t.colorA),ie.uniforms.u_colorB.value.copy(t.colorB),ie.uniforms.u_colorC.value.copy(t.colorC),ie.uniforms.u_seed.value=t.seed}}var ze={};function Ua(e,t){ze=t||{};let r=bt(e,ze.colorA,ze.colorB,ze.colorC);ue&&(ue.uniforms.u_colormap.value&&ue.uniforms.u_colormap.value.dispose(),ue.uniforms.u_colormap.value=r)}var Ya=new R.Clock;function Xa(){if(!Mr)return;oe.update();let e=Ya.getElapsedTime();at&&(at.uniforms.u_time.value=e),Z&&(Z.uniforms.uTime.value=e);let t=new R.Matrix4().multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse);te&&te.material&&(te.material.uniforms.uTime.value=e,te.material.uniforms.uCamPos.value.copy(ee.position),te.material.uniforms.uViewProjection.value.copy(t)),re&&re.material&&(re.material.uniforms.uTime.value=e,re.material.uniforms.uCamPos.value.copy(ee.position),re.material.uniforms.uViewProjection.value.copy(t)),K&&K.material&&(K.material.uniforms.uCamPos.value.copy(ee.position),K.material.uniforms.uCamUp.value.copy(ee.up),K.material.uniforms.uViewProjection.value.copy(t)),Ve.render(X,ee)}function Q(e){e&&(X.remove(e),e.geometry&&e.geometry.dispose())}function $a(e,t,r,n,o,a,l,i){let s=e,f=t;if(Q(se),Q(fe),Q(Ce),Q(le),se=null,fe=null,Ce=null,ie=null,le=null,Z=null,i==="sun"){ei(e,t,r,n);return}if(i==="gasgiant"){let u=wr,c=new R.BufferGeometry;c.setAttribute("position",new R.BufferAttribute(new Float32Array(r.xyz),3)),c.setIndex(new R.BufferAttribute(new Uint32Array(r.I),1)),ie=pr(u),Ce=new R.Mesh(c,ie),X.add(Ce);return}if(n==="quads"){let u=new R.BufferGeometry;u.setAttribute("position",new R.BufferAttribute(new Float32Array(r.xyz),3)),u.setAttribute("uv",new R.BufferAttribute(new Float32Array(r.tm),2)),u.setIndex(new R.BufferAttribute(new Uint32Array(r.I),1)),se=new R.Mesh(u,ue),se.visible=!0,X.add(se)}else if(n==="centroid"){let u=h=>{let m=Math.min(1,Math.max(0,f.r_moisture[h]+(a||0))),x=f.r_elevation[h]-(l||0);return x>0&&(x=(o||0)>0?x/(1+(o||0)*3):x*(1+Math.abs(o||0)*2)),[x,m]},{xyz:c,tm:p}=Qt(s,f,u),v=new R.BufferGeometry;v.setAttribute("position",new R.BufferAttribute(c,3)),v.setAttribute("uv",new R.BufferAttribute(p,2)),fe=new R.Mesh(v,ue),fe.visible=!0,X.add(fe)}sn=n}function Za(e){if(!(Ce||le)){if(se&&se.geometry){let t=se.geometry.attributes.uv;t.array.set(e.tm),t.needsUpdate=!0}fe&&fe.geometry}}function Ja(e){return e==="quads"?!!se:!!fe}var P={numRays:80,numFlares:40,hueSpread:.25,hue:.05,rayLength:1.5,rayWidth:.02,raysOpacity:.5,flareWidth:.03,flareAmp:.3,flaresOpacity:.4,noiseFreq:1.5,noiseAmp:1,glowTint:1.2,glowBrightness:1.5,glowFalloff:2,glowRadius:.5,sphereFresnelPower:1.5,sphereFresnelInfluence:.4,sphereTint:1.8,sphereBase:.05,sphereBrightnessOffset:0,sphereBrightness:3,sphereScale:2,sphereContrast:.15,spectralColor:new R.Color(1,1,1)};function Ka(){return P}function Qa(e){Object.assign(P,e),P.spectralColor&&!P.spectralColor.isColor&&(P.spectralColor=new R.Color(P.spectralColor)),Z&&(Z.uniforms.uFresnelPower.value=P.sphereFresnelPower,Z.uniforms.uFresnelInfluence.value=P.sphereFresnelInfluence,Z.uniforms.uTint.value=P.sphereTint,Z.uniforms.uBase.value=P.sphereBase,Z.uniforms.uBrightnessOffset.value=P.sphereBrightnessOffset,Z.uniforms.uBrightness.value=P.sphereBrightness,Z.uniforms.uScale.value=P.sphereScale,Z.uniforms.uContrast.value=P.sphereContrast,Z.uniforms.uSpectralColor.value.copy(P.spectralColor)),K&&K.material&&(K.material.uniforms.uTint.value=P.glowTint,K.material.uniforms.uBrightness.value=P.glowBrightness,K.material.uniforms.uFalloffColor.value=P.glowFalloff,K.material.uniforms.uRadius.value=P.glowRadius,K.material.uniforms.uSpectralColor.value.copy(P.spectralColor)),te&&te.material&&(te.material.uniforms.uWidth.value=P.rayWidth,te.material.uniforms.uLength.value=P.rayLength,te.material.uniforms.uOpacity.value=P.raysOpacity,te.material.uniforms.uSpectralColor.value.copy(P.spectralColor)),re&&re.material&&(re.material.uniforms.uWidth.value=P.flareWidth,re.material.uniforms.uAmp.value=P.flareAmp,re.material.uniforms.uOpacity.value=P.flaresOpacity,re.material.uniforms.uSpectralColor.value.copy(P.spectralColor))}function ei(e,t,r,n){let o=new R.BufferGeometry;o.setAttribute("position",new R.BufferAttribute(new Float32Array(r.xyz),3)),o.setIndex(new R.BufferAttribute(new Uint32Array(r.I),1)),o.computeVertexNormals();let a=t._sunSeed||123;Z=hr(P.spectralColor);let l=new R.Mesh(o,Z),i=mr(P.numRays,a),s=_r({hueSpread:P.hueSpread,hue:P.hue,length:P.rayLength,width:P.rayWidth,noiseFreq:P.noiseFreq,noiseAmp:P.noiseAmp,opacity:P.raysOpacity,spectralColor:P.spectralColor});te=new R.LineSegments(i,s);let f=dr(P.numFlares,123),u=xr({hueSpread:P.hueSpread,hue:P.hue,width:P.flareWidth,amp:P.flareAmp,noiseFreq:P.noiseFreq,noiseAmp:P.noiseAmp,opacity:P.flaresOpacity,spectralColor:P.spectralColor});re=new R.LineSegments(f,u);let c=gr(),p=yr({tint:P.glowTint,brightness:P.glowBrightness,falloffColor:P.glowFalloff,radius:P.glowRadius,spectralColor:P.spectralColor});K=new R.Mesh(c,p),le=new R.Group,le.add(l),le.add(te),le.add(re),le.add(K),X.add(le)}function ti(e){sn=e,se&&(se.visible=e==="quads"),fe&&(fe.visible=e==="centroid"),Ce&&(Ce.visible=!0),le&&(le.visible=!0)}function it(e,t){let r=e.length;if(r===0)return null;let n=new Float32Array(r*3),o=new Float32Array(r*4);for(let l=0;l<r;l++)n[3*l]=e[l][0],n[3*l+1]=e[l][1],n[3*l+2]=e[l][2],o[4*l]=t[l][0],o[4*l+1]=t[l][1],o[4*l+2]=t[l][2],o[4*l+3]=t[l][3];let a=new R.BufferGeometry;return a.setAttribute("position",new R.BufferAttribute(n,3)),a.setAttribute("a_rgba",new R.BufferAttribute(o,4)),a}function ri(e,t,r,n){if(Q(Et),Et=null,n&&n!=="earthlike")return;let o=[],a=[],l=e,{t_xyz:i,s_flow:s,r_elevation:f}=t;for(let c=0;c<l.numSides;c++)if(s[c]>2){let p=l.s_begin_r(c),v=l.s_end_r(c);if(f[p]-r<0&&f[v]-r<0)continue;let h=.3*Math.sqrt(s[c]),m=l.s_inner_t(c),x=l.s_outer_t(c);o.push(i.slice(3*m,3*m+3),i.slice(3*x,3*x+3)),h>1&&(h=1);let b=[.2*h,.6*h,.9*h,h];a.push(b,b)}if(o.length===0)return;let u=it(o,a);Et=new R.LineSegments(u,Ne),X.add(Et)}function ni(e,t,r){if(Q(nt),nt=null,at=null,e==="sun"||!(e==="hostile"||e==="barren"&&r==="hostile"))return;at=vr(t);let o=new R.SphereGeometry(1.008,48,24);nt=new R.Mesh(o,at),nt.renderOrder=1,X.add(nt)}function oi(e){if(e==="gasgiant"||e==="sun")return;let t=bt(e,ze.colorA,ze.colorB,ze.colorC);ue&&(ue.uniforms.u_colormap.value&&ue.uniforms.u_colormap.value.dispose(),ue.uniforms.u_colormap.value=t)}function ai(e,t){Q(Be),Be=null;let r=[],n=[],{r_xyz:o,r_plate:a,plate_vec:l}=t;for(let s=0;s<e.numRegions;s++){r.push(o.slice(3*s,3*s+3)),n.push([1,1,1,1]);let f=new Float32Array(3),u=o.slice(3*s,3*s+3),c=l[a[s]];f[0]=u[0]+c[0]*(2/Math.sqrt(e.numRegions)),f[1]=u[1]+c[1]*(2/Math.sqrt(e.numRegions)),f[2]=u[2]+c[2]*(2/Math.sqrt(e.numRegions)),r.push([f[0],f[1],f[2]]),n.push([1,0,0,0])}let i=it(r,n);Be=new R.LineSegments(i,Ne),X.add(Be)}function ii(e,t){Q(Fe),Fe=null;let r=[],n=[],{t_xyz:o,r_plate:a}=t;for(let i=0;i<e.numSides;i++){let s=e.s_begin_r(i),f=e.s_end_r(i);if(a[s]!==a[f]){let u=e.s_inner_t(i),c=e.s_outer_t(i);r.push(o.slice(3*u,3*u+3),o.slice(3*c,3*c+3)),n.push([1,1,1,1],[1,1,1,1])}}if(r.length===0)return;let l=it(r,n);Fe=new R.LineSegments(l,Ne),X.add(Fe)}function li(e,t,r){if(Q(Ie),Q(De),Ie=null,De=null,!t)return;let n=t.cultures.map(v=>{let h=v.i*.618033988749895%1,m=h+1/3,x=h,b=h-1/3,y=.7,_=.55;function E(d){d=(d%1+1)%1;let M=(1-Math.abs(2*_-1))*y,w=M*(1-Math.abs(d*6%2-1)),T=_-M/2,O,H,I;return d<1/6?[O,H,I]=[M,w,0]:d<2/6?[O,H,I]=[w,M,0]:d<3/6?[O,H,I]=[0,M,w]:d<4/6?[O,H,I]=[0,w,M]:d<5/6?[O,H,I]=[w,0,M]:[O,H,I]=[M,0,w],[O+T,H+T,I+T]}return E(h)}),o=e,{t_xyz:a,r_xyz:l}=r,{numSides:i}=o,s=new Float32Array(9*i),f=new Float32Array(9*i);for(let v=0;v<i;v++){let h=o.s_inner_t(v),m=o.s_outer_t(v),x=o.s_begin_r(v),b=n[t.cellCulture[x]]||[.2,.2,.2],y=9*v,_=9*v+3,E=9*v+6,d=0,M=0;for(let w=0;w<3;w++){let T=a[3*h+w];s[y+w]=T,d+=T*T}for(let w=0;w<3;w++)s[_+w]=l[3*x+w];for(let w=0;w<3;w++){let T=a[3*m+w];s[E+w]=T,M+=T*T}d=Math.sqrt(d),M=Math.sqrt(M);for(let w=0;w<3;w++)s[y+w]/=d,s[E+w]/=M;for(let w=0;w<3;w++)for(let T=0;T<3;T++)f[9*v+3*w+T]=b[T]}let u=new R.BufferGeometry;u.setAttribute("position",new R.BufferAttribute(s,3)),u.setAttribute("color",new R.BufferAttribute(f,3)),Ie=new R.Mesh(u,Rt),X.add(Ie);let c=[],p=[];for(let v=0;v<i;v++){let h=o.s_begin_r(v),m=o.s_end_r(v);if(t.cellState[h]!==t.cellState[m]&&t.cellState[h]>=0&&t.cellState[m]>=0){let x=o.s_inner_t(v),b=o.s_outer_t(v),y=[1,1,1,.8];c.push(a.slice(3*x,3*x+3),a.slice(3*b,3*b+3)),p.push(y,y)}}if(c.length>0){let v=it(c,p);De=new R.LineSegments(v,Ne),X.add(De)}}function si(e){let t=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,n=parseInt(e.slice(5,7),16)/255;return[t,r,n]}function un(e,t,r,n){let o=e,{t_xyz:a,r_xyz:l}=t,{numSides:i}=o,s=new Float32Array(9*i),f=new Float32Array(9*i);for(let c=0;c<i;c++){let p=o.s_inner_t(c),v=o.s_outer_t(c),h=o.s_begin_r(c),m=n(r[h]),x=9*c,b=9*c+3,y=9*c+6,_=0,E=0;for(let d=0;d<3;d++){let M=a[3*p+d];s[x+d]=M,_+=M*M}for(let d=0;d<3;d++)s[b+d]=l[3*h+d];for(let d=0;d<3;d++){let M=a[3*v+d];s[y+d]=M,E+=M*M}_=Math.sqrt(_),E=Math.sqrt(E);for(let d=0;d<3;d++)s[x+d]/=_,s[y+d]/=E;for(let d=0;d<3;d++)for(let M=0;M<3;M++)f[9*c+3*d+M]=m[M]}let u=new R.BufferGeometry;return u.setAttribute("position",new R.BufferAttribute(s,3)),u.setAttribute("color",new R.BufferAttribute(f,3)),u}function ui(e,t,r){if(Q(Oe),Oe=null,!t)return;let n=t.states.map(l=>si(l.color)),o=l=>l>=0&&l<n.length?n[l]:[.2,.2,.2],a=un(e,r,t.cellState,o);Oe=new R.Mesh(a,Rt),X.add(Oe)}function ci(e,t,r){if(Q(We),We=null,!t)return;let n=t.provinces.map((l,i)=>{let s=i*.618033988749895%1,f=.7,u=.55;function c(p){p=(p%1+1)%1;let v=(1-Math.abs(2*u-1))*f,h=v*(1-Math.abs(p*6%2-1)),m=u-v/2,x,b,y;return p<1/6?[x,b,y]=[v,h,0]:p<2/6?[x,b,y]=[h,v,0]:p<3/6?[x,b,y]=[0,v,h]:p<4/6?[x,b,y]=[0,h,v]:p<5/6?[x,b,y]=[h,0,v]:[x,b,y]=[v,0,h],[x+m,b+m,y+m]}return c(s)}),o=l=>l>=0&&l<n.length?n[l]:[.2,.2,.2],a=un(e,r,t.cellProvince,o);We=new R.Mesh(a,Rt),X.add(We)}function fi(e,t,r){if(Q(qe),qe=null,!t)return;let n=e,{t_xyz:o}=r,a=[],l=[];for(let i=0;i<n.numSides;i++){let s=n.s_begin_r(i),f=n.s_end_r(i);if(t.cellProvince[s]!==t.cellProvince[f]&&t.cellProvince[s]>=0&&t.cellProvince[f]>=0){let u=n.s_inner_t(i),c=n.s_outer_t(i),p=[1,1,1,.8];a.push(o.slice(3*u,3*u+3),o.slice(3*c,3*c+3)),l.push(p,p)}}if(a.length>0){let i=it(a,l);qe=new R.LineSegments(i,Ne),X.add(qe)}}function pi(e){Be&&(Be.visible=e)}function vi(e){Fe&&(Fe.visible=e)}function hi(e){Ie&&(Ie.visible=e)}function mi(e){De&&(De.visible=e)}function di(e){Oe&&(Oe.visible=e)}function gi(e){We&&(We.visible=e)}function _i(e){qe&&(qe.visible=e)}function xi(e,t,r){if(Q(ot),ot=null,!t||!t.burgs)return;let{r_xyz:n}=r,o=new R.Group;o.name="burgOverlay";let a=1.003,l=new Set(t.provinces.map(p=>p.burg)),i=[],s=[];for(let p of t.burgs){let v=p.cell,h=n[3*v]*a,m=n[3*v+1]*a,x=n[3*v+2]*a;p.capital||l.has(p.i)?s.push(h,m,x):i.push(h,m,x)}let f=document.createElement("canvas");f.width=64,f.height=64;let u=f.getContext("2d");u.beginPath(),u.arc(32,32,30,0,Math.PI*2),u.fillStyle="#fff",u.fill();let c=new R.CanvasTexture(f);if(i.length>0){let p=new R.BufferGeometry;p.setAttribute("position",new R.Float32BufferAttribute(i,3));let v=new R.PointsMaterial({map:c,color:13421772,size:.015,sizeAttenuation:!0,transparent:!0,opacity:.8,depthWrite:!1});o.add(new R.Points(p,v))}if(s.length>0){let p=new R.BufferGeometry;p.setAttribute("position",new R.Float32BufferAttribute(s,3));let v=new R.PointsMaterial({map:c,color:16766720,size:.04,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1});o.add(new R.Points(p,v))}ot=o,X.add(o)}function yi(e){ot&&(ot.visible=e)}function wi(e,t){Mr&&(Ve.setSize(e,t),ee.aspect=e/t,ee.updateProjectionMatrix())}})();
//# sourceMappingURL=_bundle.engine.js.map
