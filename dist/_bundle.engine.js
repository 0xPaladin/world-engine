var an=Object.create,Wt=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,xr=Object.getOwnPropertyNames,sn=Object.getPrototypeOf,un=Object.prototype.hasOwnProperty,wr=(e,t)=>function(){try{return t||(0,e[xr(e)[0]])((t={exports:{}}).exports,t),t.exports}catch(o){throw t=0,o}},cn=(e,t)=>{for(var r in t)Wt(e,r,{get:t[r],enumerable:!0})},fn=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of xr(t))!un.call(e,n)&&n!==r&&Wt(e,n,{get:()=>t[n],enumerable:!(o=ln(t,n))||o.enumerable});return e},Mr=(e,t,r)=>(r=e!=null?an(sn(e)):{},fn(t||!e||!e.__esModule?Wt(r,"default",{value:e,enumerable:!0}):r,e)),vn=wr({"node_modules/simplex-noise/simplex-noise.js"(e,t){(function(){"use strict";var r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6,n=1/3,a=1/6,l=(Math.sqrt(5)-1)/4,i=(5-Math.sqrt(5))/20;function s(v){var c;typeof v=="function"?c=v:v?c=f(v):c=Math.random,this.p=u(c),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var p=0;p<512;p++)this.perm[p]=this.p[p&255],this.permMod12[p]=this.perm[p]%12}s.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(v,c){var p=this.permMod12,m=this.perm,d=this.grad3,y=0,w=0,x=0,R=(v+c)*r,g=Math.floor(v+R),b=Math.floor(c+R),M=(g+b)*o,T=g-M,D=b-M,z=v-T,H=c-D,N,$;z>H?(N=1,$=0):(N=0,$=1);var L=z-N+o,S=H-$+o,O=z-1+2*o,W=H-1+2*o,I=g&255,V=b&255,q=.5-z*z-H*H;if(q>=0){var G=p[I+m[V]]*3;q*=q,y=q*q*(d[G]*z+d[G+1]*H)}var C=.5-L*L-S*S;if(C>=0){var j=p[I+N+m[V+$]]*3;C*=C,w=C*C*(d[j]*L+d[j+1]*S)}var k=.5-O*O-W*W;if(k>=0){var U=p[I+1+m[V+1]]*3;k*=k,x=k*k*(d[U]*O+d[U+1]*W)}return 70*(y+w+x)},noise3D:function(v,c,p){var m=this.permMod12,d=this.perm,y=this.grad3,w,x,R,g,b=(v+c+p)*n,M=Math.floor(v+b),T=Math.floor(c+b),D=Math.floor(p+b),z=(M+T+D)*a,H=M-z,N=T-z,$=D-z,L=v-H,S=c-N,O=p-$,W,I,V,q,G,C;L>=S?S>=O?(W=1,I=0,V=0,q=1,G=1,C=0):L>=O?(W=1,I=0,V=0,q=1,G=0,C=1):(W=0,I=0,V=1,q=1,G=0,C=1):S<O?(W=0,I=0,V=1,q=0,G=1,C=1):L<O?(W=0,I=1,V=0,q=0,G=1,C=1):(W=0,I=1,V=0,q=1,G=1,C=0);var j=L-W+a,k=S-I+a,U=O-V+a,ie=L-q+2*a,pe=S-G+2*a,Me=O-C+2*a,be=L-1+3*a,Ee=S-1+3*a,Re=O-1+3*a,_e=M&255,ye=T&255,xe=D&255,he=.6-L*L-S*S-O*O;if(he<0)w=0;else{var Se=m[_e+d[ye+d[xe]]]*3;he*=he,w=he*he*(y[Se]*L+y[Se+1]*S+y[Se+2]*O)}var me=.6-j*j-k*k-U*U;if(me<0)x=0;else{var Te=m[_e+W+d[ye+I+d[xe+V]]]*3;me*=me,x=me*me*(y[Te]*j+y[Te+1]*k+y[Te+2]*U)}var de=.6-ie*ie-pe*pe-Me*Me;if(de<0)R=0;else{var Pe=m[_e+q+d[ye+G+d[xe+C]]]*3;de*=de,R=de*de*(y[Pe]*ie+y[Pe+1]*pe+y[Pe+2]*Me)}var ge=.6-be*be-Ee*Ee-Re*Re;if(ge<0)g=0;else{var Ae=m[_e+1+d[ye+1+d[xe+1]]]*3;ge*=ge,g=ge*ge*(y[Ae]*be+y[Ae+1]*Ee+y[Ae+2]*Re)}return 32*(w+x+R+g)},noise4D:function(v,c,p,m){var d=this.perm,y=this.grad4,w,x,R,g,b,M=(v+c+p+m)*l,T=Math.floor(v+M),D=Math.floor(c+M),z=Math.floor(p+M),H=Math.floor(m+M),N=(T+D+z+H)*i,$=T-N,L=D-N,S=z-N,O=H-N,W=v-$,I=c-L,V=p-S,q=m-O,G=0,C=0,j=0,k=0;W>I?G++:C++,W>V?G++:j++,W>q?G++:k++,I>V?C++:j++,I>q?C++:k++,V>q?j++:k++;var U,ie,pe,Me,be,Ee,Re,_e,ye,xe,he,Se;U=G>=3?1:0,ie=C>=3?1:0,pe=j>=3?1:0,Me=k>=3?1:0,be=G>=2?1:0,Ee=C>=2?1:0,Re=j>=2?1:0,_e=k>=2?1:0,ye=G>=1?1:0,xe=C>=1?1:0,he=j>=1?1:0,Se=k>=1?1:0;var me=W-U+i,Te=I-ie+i,de=V-pe+i,Pe=q-Me+i,ge=W-be+2*i,Ae=I-Ee+2*i,Rt=V-Re+2*i,St=q-_e+2*i,Tt=W-ye+3*i,Pt=I-xe+3*i,At=V-he+3*i,Ct=q-Se+3*i,zt=W-1+4*i,Ht=I-1+4*i,Ft=V-1+4*i,Bt=q-1+4*i,Le=T&255,ke=D&255,Ue=z&255,Ye=H&255,Xe=.6-W*W-I*I-V*V-q*q;if(Xe<0)w=0;else{var lt=d[Le+d[ke+d[Ue+d[Ye]]]]%32*4;Xe*=Xe,w=Xe*Xe*(y[lt]*W+y[lt+1]*I+y[lt+2]*V+y[lt+3]*q)}var Ze=.6-me*me-Te*Te-de*de-Pe*Pe;if(Ze<0)x=0;else{var st=d[Le+U+d[ke+ie+d[Ue+pe+d[Ye+Me]]]]%32*4;Ze*=Ze,x=Ze*Ze*(y[st]*me+y[st+1]*Te+y[st+2]*de+y[st+3]*Pe)}var $e=.6-ge*ge-Ae*Ae-Rt*Rt-St*St;if($e<0)R=0;else{var ut=d[Le+be+d[ke+Ee+d[Ue+Re+d[Ye+_e]]]]%32*4;$e*=$e,R=$e*$e*(y[ut]*ge+y[ut+1]*Ae+y[ut+2]*Rt+y[ut+3]*St)}var Je=.6-Tt*Tt-Pt*Pt-At*At-Ct*Ct;if(Je<0)g=0;else{var ct=d[Le+ye+d[ke+xe+d[Ue+he+d[Ye+Se]]]]%32*4;Je*=Je,g=Je*Je*(y[ct]*Tt+y[ct+1]*Pt+y[ct+2]*At+y[ct+3]*Ct)}var Ke=.6-zt*zt-Ht*Ht-Ft*Ft-Bt*Bt;if(Ke<0)b=0;else{var ft=d[Le+1+d[ke+1+d[Ue+1+d[Ye+1]]]]%32*4;Ke*=Ke,b=Ke*Ke*(y[ft]*zt+y[ft+1]*Ht+y[ft+2]*Ft+y[ft+3]*Bt)}return 27*(w+x+R+g+b)}};function u(v){var c,p=new Uint8Array(256);for(c=0;c<256;c++)p[c]=c;for(c=0;c<255;c++){var m=c+~~(v()*(256-c)),d=p[c];p[c]=p[m],p[m]=d}return p}s._buildPermutationTable=u;function f(){var v=0,c=0,p=0,m=1,d=h();v=d(" "),c=d(" "),p=d(" ");for(var y=0;y<arguments.length;y++)v-=d(arguments[y]),v<0&&(v+=1),c-=d(arguments[y]),c<0&&(c+=1),p-=d(arguments[y]),p<0&&(p+=1);return d=null,function(){var w=2091639*v+m*23283064365386963e-26;return v=c,c=p,p=w-(m=w|0)}}function h(){var v=4022871197;return function(c){c=c.toString();for(var p=0;p<c.length;p++){v+=c.charCodeAt(p);var m=.02519603282416938*v;v=m>>>0,m-=v,m*=v,v=m>>>0,m-=v,v+=m*4294967296}return(v>>>0)*23283064365386963e-26}}typeof define<"u"&&define.amd&&define(function(){return s}),typeof e<"u"?e.SimplexNoise=s:typeof window<"u"&&(window.SimplexNoise=s),typeof t<"u"&&(t.exports=s)})()}}),pn=wr({"node_modules/@redblobgames/dual-mesh/index.js"(e,t){"use strict";var r=class ne{static s_to_t(n){return n/3|0}static s_prev_s(n){return n%3===0?n+2:n-1}static s_next_s(n){return n%3===2?n-2:n+1}constructor({numBoundaryRegions:n,numSolidSides:a,_r_vertex:l,_triangles:i,_halfedges:s}){Object.assign(this,{numBoundaryRegions:n,numSolidSides:a,_r_vertex:l,_triangles:i,_halfedges:s}),this._t_vertex=[],this._update()}update(n,a){this._r_vertex=n,this._triangles=a.triangles,this._halfedges=a.halfedges,this._update()}_update(){let{_triangles:n,_halfedges:a,_r_vertex:l,_t_vertex:i}=this;if(this.numSides=n.length,this.numRegions=l.length,this.numSolidRegions=this.numRegions-1,this.numTriangles=this.numSides/3,this.numSolidTriangles=this.numSolidSides/3,this._t_vertex.length<this.numTriangles){let s=i.length,u=this.numTriangles-s;i=i.concat(new Array(u));for(let f=s;f<this.numTriangles;f++)i[f]=[0,0];this._t_vertex=i}this._r_in_s=new Int32Array(this.numRegions);for(let s=0;s<n.length;s++){let u=n[ne.s_next_s(s)];(this._r_in_s[u]===0||a[s]===-1)&&(this._r_in_s[u]=s)}for(let s=0;s<n.length;s+=3){let u=s/3,f=l[n[s]],h=l[n[s+1]],v=l[n[s+2]];if(this.s_ghost(s)){let c=h[0]-f[0],p=h[1]-f[1],m=10/Math.sqrt(c*c+p*p);i[u][0]=.5*(f[0]+h[0])+p*m,i[u][1]=.5*(f[1]+h[1])-c*m}else i[u][0]=(f[0]+h[0]+v[0])/3,i[u][1]=(f[1]+h[1]+v[1])/3}}static fromDelaunator(n,a){return new ne({numBoundaryRegions:0,numSolidSides:a.triangles.length,_r_vertex:n,_triangles:a.triangles,_halfedges:a.halfedges})}r_x(n){return this._r_vertex[n][0]}r_y(n){return this._r_vertex[n][1]}t_x(n){return this._t_vertex[n][0]}t_y(n){return this._t_vertex[n][1]}r_pos(n,a){return n.length=2,n[0]=this.r_x(a),n[1]=this.r_y(a),n}t_pos(n,a){return n.length=2,n[0]=this.t_x(a),n[1]=this.t_y(a),n}s_begin_r(n){return this._triangles[n]}s_end_r(n){return this._triangles[ne.s_next_s(n)]}s_inner_t(n){return ne.s_to_t(n)}s_outer_t(n){return ne.s_to_t(this._halfedges[n])}s_next_s(n){return ne.s_next_s(n)}s_prev_s(n){return ne.s_prev_s(n)}s_opposite_s(n){return this._halfedges[n]}t_circulate_s(n,a){n.length=3;for(let l=0;l<3;l++)n[l]=3*a+l;return n}t_circulate_r(n,a){n.length=3;for(let l=0;l<3;l++)n[l]=this._triangles[3*a+l];return n}t_circulate_t(n,a){n.length=3;for(let l=0;l<3;l++)n[l]=this.s_outer_t(3*a+l);return n}r_circulate_s(n,a){let l=this._r_in_s[a],i=l;n.length=0;do{n.push(this._halfedges[i]);let s=ne.s_next_s(i);i=this._halfedges[s]}while(i!==-1&&i!==l);return n}r_circulate_r(n,a){let l=this._r_in_s[a],i=l;n.length=0;do{n.push(this.s_begin_r(i));let s=ne.s_next_s(i);i=this._halfedges[s]}while(i!==-1&&i!==l);return n}r_circulate_t(n,a){let l=this._r_in_s[a],i=l;n.length=0;do{n.push(ne.s_to_t(i));let s=ne.s_next_s(i);i=this._halfedges[s]}while(i!==-1&&i!==l);return n}ghost_r(){return this.numRegions-1}s_ghost(n){return n>=this.numSolidSides}r_ghost(n){return n===this.numRegions-1}t_ghost(n){return this.s_ghost(3*n)}s_boundary(n){return this.s_ghost(n)&&n%3===0}r_boundary(n){return n<this.numBoundaryRegions}};t.exports=r}}),hn=Mr(vn()),Fe=class{constructor(e=1/0,t=Float64Array,r=Uint32Array){let o=e!==1/0;this.ids=o?new r(e):[],this.values=o?new t(e):[],this.capacity=e,this.length=0}clear(){this.length=0}push(e,t){if(this.length===this.capacity)throw new RangeError("Queue is at capacity.");let r=this.length++;for(;r>0;){let o=r-1>>1,n=this.values[o];if(t>=n)break;this.ids[r]=this.ids[o],this.values[r]=n,r=o}this.ids[r]=e,this.values[r]=t}pop(){if(this.length===0)return;let e=this.ids,t=this.values,r=e[0],o=--this.length;if(o>0){let n=e[o],a=t[o],l=0,i=o>>1;for(;l<i;){let s=(l<<1)+1,u=s+1,f=s+(+(u<o)&+(t[u]<t[s]));if(t[f]>=a)break;e[l]=e[f],t[l]=t[f],l=f}e[l]=n,t[l]=a}return r}peek(){return this.length>0?this.ids[0]:void 0}peekValue(){return this.length>0?this.values[0]:void 0}shrink(){Array.isArray(this.ids)&&(this.ids.length=this.length),Array.isArray(this.values)&&(this.values.length=this.length)}},Ot=1e-6,pt=typeof Float32Array<"u"?Float32Array:Array,_r=Math.random;function It(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}var wi=Math.PI/180,Mi=180/Math.PI,Q={};cn(Q,{add:()=>yn,angle:()=>Gn,bezier:()=>Bn,ceil:()=>xn,clone:()=>mn,copy:()=>gn,create:()=>br,cross:()=>Cn,dist:()=>$n,distance:()=>Pr,div:()=>Zn,divide:()=>Tr,dot:()=>qt,equals:()=>Un,exactEquals:()=>kn,floor:()=>wn,forEach:()=>eo,fromValues:()=>dn,hermite:()=>Fn,inverse:()=>Pn,len:()=>Kn,length:()=>Er,lerp:()=>zn,max:()=>bn,min:()=>Mn,mul:()=>Xn,multiply:()=>Sr,negate:()=>Tn,normalize:()=>An,random:()=>On,rotateX:()=>qn,rotateY:()=>Vn,rotateZ:()=>jn,round:()=>En,scale:()=>Rn,scaleAndAdd:()=>Sn,set:()=>_n,slerp:()=>Hn,sqrDist:()=>Jn,sqrLen:()=>Qn,squaredDistance:()=>Ar,squaredLength:()=>Cr,str:()=>Ln,sub:()=>Yn,subtract:()=>Rr,transformMat3:()=>Dn,transformMat4:()=>In,transformQuat:()=>Wn,zero:()=>Nn});function br(){var e=new pt(3);return pt!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function mn(e){var t=new pt(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Er(e){var t=e[0],r=e[1],o=e[2];return Math.sqrt(t*t+r*r+o*o)}function dn(e,t,r){var o=new pt(3);return o[0]=e,o[1]=t,o[2]=r,o}function gn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function _n(e,t,r,o){return e[0]=t,e[1]=r,e[2]=o,e}function yn(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function Rr(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function Sr(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function Tr(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function xn(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function wn(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function Mn(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function bn(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function En(e,t){return e[0]=It(t[0]),e[1]=It(t[1]),e[2]=It(t[2]),e}function Rn(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function Sn(e,t,r,o){return e[0]=t[0]+r[0]*o,e[1]=t[1]+r[1]*o,e[2]=t[2]+r[2]*o,e}function Pr(e,t){var r=t[0]-e[0],o=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+o*o+n*n)}function Ar(e,t){var r=t[0]-e[0],o=t[1]-e[1],n=t[2]-e[2];return r*r+o*o+n*n}function Cr(e){var t=e[0],r=e[1],o=e[2];return t*t+r*r+o*o}function Tn(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function Pn(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function An(e,t){var r=t[0],o=t[1],n=t[2],a=r*r+o*o+n*n;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function qt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Cn(e,t,r){var o=t[0],n=t[1],a=t[2],l=r[0],i=r[1],s=r[2];return e[0]=n*s-a*i,e[1]=a*l-o*s,e[2]=o*i-n*l,e}function zn(e,t,r,o){var n=t[0],a=t[1],l=t[2];return e[0]=n+o*(r[0]-n),e[1]=a+o*(r[1]-a),e[2]=l+o*(r[2]-l),e}function Hn(e,t,r,o){var n=Math.acos(Math.min(Math.max(qt(t,r),-1),1)),a=Math.sin(n),l=Math.sin((1-o)*n)/a,i=Math.sin(o*n)/a;return e[0]=l*t[0]+i*r[0],e[1]=l*t[1]+i*r[1],e[2]=l*t[2]+i*r[2],e}function Fn(e,t,r,o,n,a){var l=a*a,i=l*(2*a-3)+1,s=l*(a-2)+a,u=l*(a-1),f=l*(3-2*a);return e[0]=t[0]*i+r[0]*s+o[0]*u+n[0]*f,e[1]=t[1]*i+r[1]*s+o[1]*u+n[1]*f,e[2]=t[2]*i+r[2]*s+o[2]*u+n[2]*f,e}function Bn(e,t,r,o,n,a){var l=1-a,i=l*l,s=a*a,u=i*l,f=3*a*i,h=3*s*l,v=s*a;return e[0]=t[0]*u+r[0]*f+o[0]*h+n[0]*v,e[1]=t[1]*u+r[1]*f+o[1]*h+n[1]*v,e[2]=t[2]*u+r[2]*f+o[2]*h+n[2]*v,e}function On(e,t){t=t===void 0?1:t;var r=_r()*2*Math.PI,o=_r()*2-1,n=Math.sqrt(1-o*o)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=o*t,e}function In(e,t,r){var o=t[0],n=t[1],a=t[2],l=r[3]*o+r[7]*n+r[11]*a+r[15];return l=l||1,e[0]=(r[0]*o+r[4]*n+r[8]*a+r[12])/l,e[1]=(r[1]*o+r[5]*n+r[9]*a+r[13])/l,e[2]=(r[2]*o+r[6]*n+r[10]*a+r[14])/l,e}function Dn(e,t,r){var o=t[0],n=t[1],a=t[2];return e[0]=o*r[0]+n*r[3]+a*r[6],e[1]=o*r[1]+n*r[4]+a*r[7],e[2]=o*r[2]+n*r[5]+a*r[8],e}function Wn(e,t,r){var o=r[0],n=r[1],a=r[2],l=r[3],i=t[0],s=t[1],u=t[2],f=n*u-a*s,h=a*i-o*u,v=o*s-n*i;return f=f+f,h=h+h,v=v+v,e[0]=i+l*f+n*v-a*h,e[1]=s+l*h+a*f-o*v,e[2]=u+l*v+o*h-n*f,e}function qn(e,t,r,o){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(o)-n[2]*Math.sin(o),a[2]=n[1]*Math.sin(o)+n[2]*Math.cos(o),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e}function Vn(e,t,r,o){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(o)+n[0]*Math.cos(o),a[1]=n[1],a[2]=n[2]*Math.cos(o)-n[0]*Math.sin(o),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e}function jn(e,t,r,o){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(o)-n[1]*Math.sin(o),a[1]=n[0]*Math.sin(o)+n[1]*Math.cos(o),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e}function Gn(e,t){var r=e[0],o=e[1],n=e[2],a=t[0],l=t[1],i=t[2],s=Math.sqrt((r*r+o*o+n*n)*(a*a+l*l+i*i)),u=s&&qt(e,t)/s;return Math.acos(Math.min(Math.max(u,-1),1))}function Nn(e){return e[0]=0,e[1]=0,e[2]=0,e}function Ln(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function kn(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Un(e,t){var r=e[0],o=e[1],n=e[2],a=t[0],l=t[1],i=t[2];return Math.abs(r-a)<=Ot*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(o-l)<=Ot*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(n-i)<=Ot*Math.max(1,Math.abs(n),Math.abs(i))}var Yn=Rr,Xn=Sr,Zn=Tr,$n=Pr,Jn=Ar,Kn=Er,Qn=Cr,eo=(function(){var e=br();return function(t,r,o,n,a,l){var i,s;for(r||(r=3),o||(o=0),n?s=Math.min(n*r+o,t.length):s=t.length,i=o;i<s;i+=r)e[0]=t[i],e[1]=t[i+1],e[2]=t[i+2],a(e,e,l),t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2];return t}})(),yr=Math.pow(2,-52),zr=class Hr{static from(t,r=ao,o=io){let n=t.length,a=new Float64Array(n*2);for(let l=0;l<n;l++){let i=t[l];a[2*l]=r(i),a[2*l+1]=o(i)}return new Hr(a)}constructor(t){let r=t.length>>1;if(r>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;let o=2*r-5,n=this.triangles=new Uint32Array(o*3),a=this.halfedges=new Int32Array(o*3);this._hashSize=Math.ceil(Math.sqrt(r));let l=this.hullPrev=new Uint32Array(r),i=this.hullNext=new Uint32Array(r),s=this.hullTri=new Uint32Array(r),u=new Int32Array(this._hashSize).fill(-1),f=new Uint32Array(r),h=1/0,v=1/0,c=-1/0,p=-1/0;for(let S=0;S<r;S++){let O=t[2*S],W=t[2*S+1];O<h&&(h=O),W<v&&(v=W),O>c&&(c=O),W>p&&(p=W),f[S]=S}let m=(h+c)/2,d=(v+p)/2,y=1/0,w,x,R;for(let S=0;S<r;S++){let O=Dt(m,d,t[2*S],t[2*S+1]);O<y&&(w=S,y=O)}let g=t[2*w],b=t[2*w+1];y=1/0;for(let S=0;S<r;S++){if(S===w)continue;let O=Dt(g,b,t[2*S],t[2*S+1]);O<y&&O>0&&(x=S,y=O)}let M=t[2*x],T=t[2*x+1],D=1/0;for(let S=0;S<r;S++){if(S===w||S===x)continue;let O=no(g,b,M,T,t[2*S],t[2*S+1]);O<D&&(R=S,D=O)}let z=t[2*R],H=t[2*R+1];if(D===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(vt(g,b,M,T,z,H)){let S=x,O=M,W=T;x=R,M=z,T=H,R=S,z=O,H=W}let N=oo(g,b,M,T,z,H);this._cx=N.x,this._cy=N.y;let $=new Float64Array(r);for(let S=0;S<r;S++)$[S]=Dt(t[2*S],t[2*S+1],N.x,N.y);et(f,$,0,r-1),this.hullStart=w;let L=3;i[w]=l[R]=x,i[x]=l[w]=R,i[R]=l[x]=w,s[w]=0,s[x]=1,s[R]=2,u[this._hashKey(g,b)]=w,u[this._hashKey(M,T)]=x,u[this._hashKey(z,H)]=R,this.trianglesLen=0,this._addTriangle(w,x,R,-1,-1,-1);for(let S=0,O,W;S<f.length;S++){let I=f[S],V=t[2*I],q=t[2*I+1];if(S>0&&Math.abs(V-O)<=yr&&Math.abs(q-W)<=yr||(O=V,W=q,I===w||I===x||I===R))continue;let G=0;for(let ie=0,pe=this._hashKey(V,q);ie<this._hashSize&&(G=u[(pe+ie)%this._hashSize],!(G!==-1&&G!==i[G]));ie++);G=l[G];let C=G,j;for(;j=i[C],!vt(V,q,t[2*C],t[2*C+1],t[2*j],t[2*j+1]);)if(C=j,C===G){C=-1;break}if(C===-1)continue;let k=this._addTriangle(C,I,i[C],-1,-1,s[C]);s[I]=this._legalize(k+2),s[C]=k,L++;let U=i[C];for(;j=i[U],vt(V,q,t[2*U],t[2*U+1],t[2*j],t[2*j+1]);)k=this._addTriangle(U,I,j,s[I],-1,s[U]),s[I]=this._legalize(k+2),i[U]=U,L--,U=j;if(C===G)for(;j=l[C],vt(V,q,t[2*j],t[2*j+1],t[2*C],t[2*C+1]);)k=this._addTriangle(j,I,C,-1,s[C],s[j]),this._legalize(k+2),s[j]=k,i[C]=C,L--,C=j;this.hullStart=l[I]=C,i[C]=l[U]=I,i[I]=U,u[this._hashKey(V,q)]=I,u[this._hashKey(t[2*C],t[2*C+1])]=C}this.hull=new Uint32Array(L);for(let S=0,O=this.hullStart;S<L;S++)this.hull[S]=O,O=i[O];this.hullPrev=this.hullNext=this.hullTri=null,this.triangles=n.subarray(0,this.trianglesLen),this.halfedges=a.subarray(0,this.trianglesLen)}_hashKey(t,r){return Math.floor(to(t-this._cx,r-this._cy)*this._hashSize)%this._hashSize}_legalize(t){let{triangles:r,coords:o,halfedges:n}=this,a=n[t],l=t-t%3,i=a-a%3,s=l+(t+1)%3,u=l+(t+2)%3,f=i+(a+2)%3;if(a===-1)return u;let h=r[u],v=r[t],c=r[s],p=r[f];if(ro(o[2*h],o[2*h+1],o[2*v],o[2*v+1],o[2*c],o[2*c+1],o[2*p],o[2*p+1])){r[t]=p,r[a]=h;let d=n[f];if(d===-1){let w=this.hullStart;do{if(this.hullTri[w]===f){this.hullTri[w]=t;break}w=this.hullNext[w]}while(w!==this.hullStart)}this._link(t,d),this._link(a,n[u]),this._link(u,f);let y=i+(a+1)%3;return this._legalize(t),this._legalize(y)}return u}_link(t,r){this.halfedges[t]=r,r!==-1&&(this.halfedges[r]=t)}_addTriangle(t,r,o,n,a,l){let i=this.trianglesLen;return this.triangles[i]=t,this.triangles[i+1]=r,this.triangles[i+2]=o,this._link(i,n),this._link(i+1,a),this._link(i+2,l),this.trianglesLen+=3,i}};function to(e,t){let r=e/(Math.abs(e)+Math.abs(t));return(t>0?3-r:1+r)/4}function Dt(e,t,r,o){let n=e-r,a=t-o;return n*n+a*a}function vt(e,t,r,o,n,a){return(o-t)*(n-r)-(r-e)*(a-o)<0}function ro(e,t,r,o,n,a,l,i){let s=e-l,u=t-i,f=r-l,h=o-i,v=n-l,c=a-i,p=s*s+u*u,m=f*f+h*h,d=v*v+c*c;return s*(h*d-m*c)-u*(f*d-m*v)+p*(f*c-h*v)<0}function no(e,t,r,o,n,a){let l=r-e,i=o-t,s=n-e,u=a-t,f=l*l+i*i,h=s*s+u*u,v=.5/(l*u-i*s),c=(u*f-i*h)*v,p=(l*h-s*f)*v;return c*c+p*p}function oo(e,t,r,o,n,a){let l=r-e,i=o-t,s=n-e,u=a-t,f=l*l+i*i,h=s*s+u*u,v=.5/(l*u-i*s),c=e+(u*f-i*h)*v,p=t+(l*h-s*f)*v;return{x:c,y:p}}function et(e,t,r,o){if(o-r<=20)for(let n=r+1;n<=o;n++){let a=e[n],l=t[a],i=n-1;for(;i>=r&&t[e[i]]>l;)e[i+1]=e[i--];e[i+1]=a}else{let n=r+o>>1,a=r+1,l=o;Qe(e,n,a),t[e[r]]>t[e[o]]&&Qe(e,r,o),t[e[a]]>t[e[o]]&&Qe(e,a,o),t[e[r]]>t[e[a]]&&Qe(e,r,a);let i=e[a],s=t[i];for(;;){do a++;while(t[e[a]]<s);do l--;while(t[e[l]]>s);if(l<a)break;Qe(e,a,l)}e[r+1]=e[l],e[l]=i,o-a+1>=l-r?(et(e,t,a,o),et(e,t,r,l-1)):(et(e,t,r,l-1),et(e,t,a,o))}}function Qe(e,t,r){let o=e[t];e[t]=e[r],e[r]=o}function ao(e){return e[0]}function io(e){return e[1]}var lo=Mr(pn()),tt=hn.default,Fr=lo.default;function so(){return(function(e){"use strict";let t="aleaPRNG 1.1.0";var r,o,n,a,l=new Uint32Array(3),i,s="";function u(c){var p=f();r=p(" "),o=p(" "),n=p(" "),a=1;for(var m=0;m<c.length;m++)r-=p(c[m]),r<0&&(r+=1),o-=p(c[m]),o<0&&(o+=1),n-=p(c[m]),n<0&&(n+=1);s=p.version,p=null}function f(){var c=4022871197,p=function(m){m=m.toString();for(var d=0,y=m.length;d<y;d++){c+=m.charCodeAt(d);var w=.02519603282416938*c;c=w>>>0,w-=c,w*=c,c=w>>>0,w-=c,c+=w*4294967296}return(c>>>0)*23283064365386963e-26};return p.version="Mash 0.9",p}function h(c){return parseInt(c,10)===c}var v=function(){var c=2091639*r+a*23283064365386963e-26;return r=o,o=n,n=c-(a=c|0)};return v.fract53=function(){return v()+(v()*2097152|0)*11102230246251565e-32},v.int32=function(){return v()*4294967296},v.cycle=function(c){c=typeof c>"u"?1:+c,c<1&&(c=1);for(var p=0;p<c;p++)v()},v.range=function(){var c,p;return arguments.length===1?(c=0,p=arguments[0]):(c=arguments[0],p=arguments[1]),arguments[0]>arguments[1]&&(c=arguments[1],p=arguments[0]),h(c)&&h(p)?Math.floor(v()*(p-c+1))+c:v()*(p-c)+c},v.restart=function(){u(i)},v.seed=function(){u(Array.prototype.slice.call(arguments))},v.version=function(){return t},v.versions=function(){return t+", "+s},e.length===0&&(window.crypto.getRandomValues(l),e=[l[0],l[1],l[2]]),i=e,u(e),v})(Array.prototype.slice.call(arguments))}var Y=so;var ht=[],mt=[];function uo(e,t,r){let o=[],n=3.6/Math.sqrt(e),a=Math.PI*(3-Math.sqrt(5)),l=2/e;for(let i=0,s=0,u=1-l/2;i!==e;i++,u-=l){let f=Math.sqrt(1-u*u),h=Math.asin(u)*180/Math.PI,v=s*180/Math.PI;ht[i]===void 0&&(ht[i]=r()-r()),mt[i]===void 0&&(mt[i]=r()-r()),h+=t*ht[i]*(h-Math.asin(Math.max(-1,u-l*2*Math.PI*f/n))*180/Math.PI),v+=t*mt[i]*(n/f*180/Math.PI),o.push(h,v%360),s+=a}return o}function co(e,t,r){let o=t/180*Math.PI,n=r/180*Math.PI;return e.push(Math.cos(o)*Math.cos(n),Math.cos(o)*Math.sin(n),Math.sin(o)),e}function fo(e,{triangles:t,halfedges:r}){let o=t.length;function n(f){return f%3==2?f-2:f+1}let a=0,l=-1,i=[];for(let f=0;f<o;f++)r[f]===-1&&(a++,i[t[f]]=f,l=f);let s=new Int32Array(o+3*a),u=new Int32Array(o+3*a);s.set(t),u.set(r);for(let f=0,h=l;f<a;f++,h=i[s[n(h)]]){let v=o+3*f;u[h]=v,u[v]=h,s[v]=s[n(h)],s[v+1]=s[h],s[v+2]=e;let c=o+(3*f+4)%(3*a);u[v+2]=c,u[c]=v+2}return{triangles:s,halfedges:u}}function vo(e){let t=Math.PI/180,r=e.length/3,o=[];for(let n=0;n<r;n++){let a=e[3*n],l=e[3*n+1],i=e[3*n+2],s=a/(1-i),u=l/(1-i);o.push(s,u)}return o}function Vt(e,t,r){ht=[],mt=[];let o=uo(e,t,r),n=[];for(let s=0;s<o.length/2;s++)co(n,o[2*s],o[2*s+1]);let a=new zr(vo(n));n.push(0,0,1),a=fo(n.length/3-1,a);let l=[[0,0]];for(let s=1;s<e+1;s++)l[s]=l[0];return{mesh:new Fr({numBoundaryRegions:0,numSolidSides:a.triangles.length,_r_vertex:l,_triangles:a.triangles,_halfedges:a.halfedges}),r_xyz:n}}var oe=123,dt=25e3,Ce=20,kt=.75,Br=-1,Or="quads",Ir=!1,Dr=!1,Wr=0,qr=0,Vr=0,Ut="earthlike",Yt="barren",jr=new tt(Y(oe)),po=2/3,jt=Array.from({length:5},(e,t)=>Math.pow(po,t));function rt(e,t,r){let o=0,n=0;for(let a=0;a<jt.length;a++){let l=1<<a;o+=jt[a]*jr.noise3D(e*l,t*l,r*l),n+=jt[a]}return o/n}function Gr(e,{r_xyz:t}){let{numTriangles:r}=e,o=new Float32Array(3*r);for(let n=0;n<r;n++){let a=e.s_begin_r(3*n),l=e.s_begin_r(3*n+1),i=e.s_begin_r(3*n+2),s=t[3*a],u=t[3*a+1],f=t[3*a+2],h=t[3*l],v=t[3*l+1],c=t[3*l+2],p=t[3*i],m=t[3*i+1],d=t[3*i+2];o[3*n]=(s+h+p)/3,o[3*n+1]=(u+v+m)/3,o[3*n+2]=(f+c+d)/3}return o}function Xt(e,{r_xyz:t,t_xyz:r},o){let{numSides:n}=e,a=new Float32Array(9*n),l=new Float32Array(6*n);for(let i=0;i<n;i++){let s=e.s_inner_t(i),u=e.s_outer_t(i),f=e.s_begin_r(i),h=o(f);for(let v=0;v<3;v++)a[9*i+0+v]=r[3*s+v];for(let v=0;v<3;v++)a[9*i+3+v]=t[3*f+v];for(let v=0;v<3;v++)a[9*i+6+v]=r[3*u+v];for(let v=0;v<3;v++)for(let c=0;c<2;c++)l[6*i+2*v+c]=h[c]}return{xyz:a,tm:l}}var Lt=class{constructor(){}applyClimate(t,r,o,n,a,l,i,s,u){let{tm:f}=this,h=0,v=i>0?1/(1+i*3):1+Math.abs(i)*2;for(let c=0;c<t;c++){let p=o[c]-u;f[h++]=p>0?p*v:p,f[h++]=Math.min(1,Math.max(0,n[c]+s))}for(let c=0;c<r;c++){let p=a[c]-u;f[h++]=p>0?p*v:p,f[h++]=Math.min(1,Math.max(0,l[c]+s))}}setMesh({numSides:t,numRegions:r,numTriangles:o}){this.I=new Int32Array(3*t),this.xyz=new Float32Array(3*(r+o)),this.tm=new Float32Array(2*(r+o))}setMap(t,{r_xyz:r,t_xyz:o,r_color_fn:n,s_flow:a,r_elevation:l,t_elevation:i,r_moisture:s,t_moisture:u}){let{numSides:h,numRegions:v,numTriangles:c}=t,{xyz:p,tm:m,I:d}=this;p.set(r),p.set(o,r.length);let y=0;for(let M=0;M<v;M++)m[y++]=l[M],m[y++]=s[M];for(let M=0;M<c;M++)m[y++]=i[M],m[y++]=u[M];let w=0,x=0,R=0,{_halfedges:g,_triangles:b}=t;for(let M=0;M<h;M++){let T=t.s_opposite_s(M),D=t.s_begin_r(M),z=t.s_begin_r(T),H=t.s_inner_t(M),N=t.s_inner_t(T);l[D]<0||l[z]<0||a[M]>0||a[T]>0?(d[w++]=D,d[w++]=v+N,d[w++]=v+H,x++):(d[w++]=D,d[w++]=z,d[w++]=v+H,R++)}}};function ho(e,t,r){let{numRegions:o}=e,n=new Set;for(;n.size<t&&n.size<o;)n.add(r(o));return n}function gt(e,t){let r=new Int32Array(e.numRegions);r.fill(-1);let o=Y(oe),n=f=>Math.floor(o()*f),a=ho(e,Math.min(Ce,dt),n),l=Array.from(a);for(let f of l)r[f]=f;let i=[],s=f=>Math.floor(Y(oe)()*f);for(let f=0;f<l.length;f++){let h=f+s(l.length-f),v=l[h];l[h]=l[f],e.r_circulate_r(i,v);for(let c of i)r[c]===-1&&(r[c]=r[v],l.push(c))}let u=[];for(let f of a){let h=e.r_circulate_r([],f)[0],v=t.slice(3*f,3*f+3),c=t.slice(3*h,3*h+3);u[f]=Q.normalize([],Q.subtract([],c,v))}return{plate_r:a,r_plate:r,plate_vec:u}}function Gt(e,t,r){let{numRegions:o}=e,n=new Float32Array(o);n.fill(1/0);let a=Y(oe),l=u=>Math.floor(a()*u),i=[];for(let u of t)i.push(u),n[u]=0;let s=[];for(let u=0;u<i.length;u++){let f=u+l(i.length-u),h=i[f];i[f]=i[u],e.r_circulate_r(s,h);for(let v of s)n[v]===1/0&&!r.has(v)&&(n[v]=n[h]+1,i.push(v))}return n}var mo=.75;function go(e,t,r,o,n){let{numRegions:l}=e,i=new Set,s=new Set,u=new Set,f=[];for(let h=0;h<l;h++){let v=1/0,c=-1;e.r_circulate_r(f,h);for(let p of f)if(o[h]!==o[p]){let m=t.slice(3*h,3*h+3),d=t.slice(3*p,3*p+3),y=Q.distance(m,d),w=Q.distance(Q.add([],m,Q.scale([],n[o[h]],.01)),Q.add([],d,Q.scale([],n[o[p]],.01))),x=y-w;x<v&&(c=p,v=x)}if(c!==-1){let p=v>mo*.01,m=o[h],d=o[c];r.has(m)&&r.has(d)?(p?s:u).add(h):!r.has(m)&&!r.has(d)?p&&i.add(m):(p?i:s).add(h)}}return{mountain_r:i,coastline_r:s,ocean_r:u}}function _t(e,{r_xyz:t,plate_is_ocean:r,r_plate:o,plate_vec:n,r_elevation:a}){let{numRegions:i}=e,{mountain_r:s,coastline_r:u,ocean_r:f}=go(e,t,r,o,n);for(let m=0;m<i;m++)o[m]===m&&(r.has(m)?f:u).add(m);let h=new Set;for(let m of s)h.add(m);for(let m of u)h.add(m);for(let m of f)h.add(m);let v=Gt(e,s,f),c=Gt(e,f,u),p=Gt(e,u,h);for(let m=0;m<i;m++){let d=v[m]+.001,y=c[m]+.001,w=p[m]+.001;d===1/0&&y===1/0?a[m]=.1:a[m]=(1/d-1/y)/(1/d+1/y+1/w),a[m]+=.1*rt(t[3*m],t[3*m+1],t[3*m+2])}}function Nr(e,{r_elevation:t,r_moisture:r,t_elevation:o,t_moisture:n}){let{numTriangles:a}=e;for(let l=0;l<a;l++){let i=3*l,s=e.s_begin_r(i),u=e.s_begin_r(i+1),f=e.s_begin_r(i+2);o[l]=1/3*(t[s]+t[u]+t[f]),n[l]=1/3*(r[s]+r[u]+r[f])}}var Nt=new Fe;function Lr(e,{t_elevation:t,t_downflow_s:r,order_t:o}){let{numTriangles:n}=e,a=0;r.fill(-999);for(let l=0;l<n;l++)if(t[l]<0){let i=-1,s=t[l];for(let u=0;u<3;u++){let f=3*l+u,h=t[e.s_outer_t(f)];h<s&&(s=h,i=f)}o[a++]=l,r[l]=i,Nt.push(l,t[l])}for(let l=0;l<n;l++){let i=Nt.pop();for(let s=0;s<3;s++){let u=3*i+s,f=e.s_outer_t(u);r[f]===-999&&t[f]>=0&&(r[f]=e.s_opposite_s(u),o[a++]=f,Nt.push(f,t[f]))}}}function kr(e,{order_t:t,t_elevation:r,t_moisture:o,t_downflow_s:n,t_flow:a,s_flow:l}){let{numTriangles:i,_halfedges:s}=e;l.fill(0);for(let u=0;u<i;u++)r[u]>=0?a[u]=.5*o[u]*o[u]:a[u]=0;for(let u=t.length-1;u>=0;u--){let f=t[u],h=n[f],v=s[h]/3|0;h>=0&&(a[v]+=a[f],l[h]+=a[f],r[v]>r[f]&&(r[v]=r[f]))}}var A,_={},we=new Lt;function _o(){let e=performance.now();jr=new tt(Y(oe));let t=Vt(dt,kt,Y(oe));A=t.mesh,we.setMesh(A),_.r_elevation=new Float32Array(A.numRegions),_.t_elevation=new Float32Array(A.numTriangles),_.r_moisture=new Float32Array(A.numRegions),_.t_moisture=new Float32Array(A.numTriangles),_.t_downflow_s=new Int32Array(A.numTriangles),_.order_t=new Int32Array(A.numTriangles),_.t_flow=new Float32Array(A.numTriangles),_.s_flow=new Float32Array(A.numSides),_.r_xyz=t.r_xyz,_.t_xyz=Gr(A,_),Ur()}function Ur(){switch(Ut){case"airless":return wo();case"barren":return Yt==="hostile"?bo():Mo();case"gasgiant":return Eo();case"sun":return Ro();default:return yo()}}function yo(){let e=gt(A,_.r_xyz);_.plate_r=e.plate_r,_.r_plate=e.r_plate,_.plate_vec=e.plate_vec,_.plate_is_ocean=new Set;for(let t of _.plate_r)Math.floor(Y(t)()*10)<5&&_.plate_is_ocean.add(t);_t(A,_);for(let t=0;t<A.numRegions;t++){let r=.5+.5*rt(_.r_xyz[3*t],_.r_xyz[3*t+1],_.r_xyz[3*t+2]);_.r_moisture[t]=Math.max(.15,Math.min(1,r))}Nr(A,_),Lr(A,_),kr(A,_),we.setMap(A,_)}function xo(e,t){let r=e.numRegions,o=new Float32Array(r),n=Y(oe+9999);for(let u=0;u<r;u++)o[u]=.15*rt(t[3*u],t[3*u+1],t[3*u+2]);let a=30+Math.floor(n()*40);for(let u=0;u<a;u++){let f=2*Math.PI*n(),h=Math.acos(2*n()-1),v=Math.cos(f)*Math.sin(h),c=Math.sin(f)*Math.sin(h),p=Math.cos(h),m=.05+n()*.2,d=.1+n()*.35,y=d*(.08+n()*.12),w=Math.cos(m*.6),x=Math.cos(m),R=Math.cos(m*1.4);for(let g=0;g<r;g++){let b=v*t[3*g]+c*t[3*g+1]+p*t[3*g+2];if(!(b<R))if(b<x){let M=(b-R)/(x-R);o[g]+=y*M}else if(b<w){let M=(b-x)/(w-x);o[g]+=y*(1-M)}else{let M=1-b,T=1-w,D=M/T;o[g]-=d*(1-D*D)}}}let l=1/0,i=-1/0;for(let u=0;u<r;u++)o[u]<l&&(l=o[u]),o[u]>i&&(i=o[u]);let s=i-l;for(let u=0;u<r;u++)o[u]=-.8+1.6*(o[u]-l)/s;return o}function wo(){_.plate_r=[0],_.r_plate=new Int32Array(A.numRegions),_.r_plate.fill(0),_.plate_vec=[Q.fromValues(0,0,0)],_.plate_is_ocean=new Set,_.r_elevation=xo(A,_.r_xyz),_.r_moisture.fill(0);for(let e=0;e<A.numTriangles;e++){let t=3*e,r=A.s_begin_r(t),o=A.s_begin_r(t+1),n=A.s_begin_r(t+2);_.t_elevation[e]=(_.r_elevation[r]+_.r_elevation[o]+_.r_elevation[n])/3,_.t_moisture[e]=0}_.t_downflow_s.fill(-999),_.order_t.fill(0),_.t_flow.fill(0),_.s_flow.fill(0),we.setMap(A,_)}function Mo(){let e=gt(A,_.r_xyz);_.plate_r=e.plate_r,_.r_plate=e.r_plate,_.plate_vec=e.plate_vec,_.plate_is_ocean=new Set,_t(A,_);let t=Y(oe+7777);for(let r of _.plate_r){if(t()>.4)continue;let o=1.5+t()*1.5;_.r_elevation[r]*=o;let n=[];A.r_circulate_r(n,r);for(let a of n)_.r_elevation[a]*=1+(o-1)*.5}for(let r=0;r<A.numRegions;r++){let o=Math.asin(_.r_xyz[3*r+1]),n=Math.max(0,1-Math.abs(o)/(Math.PI/6)),a=.5+.5*rt(_.r_xyz[3*r],_.r_xyz[3*r+1],_.r_xyz[3*r+2]);_.r_moisture[r]=Math.min(.15,a*n)}for(let r=0;r<A.numTriangles;r++){let o=3*r,n=A.s_begin_r(o),a=A.s_begin_r(o+1),l=A.s_begin_r(o+2);_.t_elevation[r]=(_.r_elevation[n]+_.r_elevation[a]+_.r_elevation[l])/3,_.t_moisture[r]=(_.r_moisture[n]+_.r_moisture[a]+_.r_moisture[l])/3}_.t_downflow_s.fill(-999),_.order_t.fill(0),_.t_flow.fill(0),_.s_flow.fill(0),we.setMap(A,_)}function bo(){let e=Ce;Ce=Math.round(Ce*1.5);let t=gt(A,_.r_xyz);Ce=e,_.plate_r=t.plate_r,_.r_plate=t.r_plate,_.plate_vec=t.plate_vec,_.plate_is_ocean=new Set,_t(A,_);let r=Y(oe+8888),o=[];for(let n of _.plate_r){if(r()>.3)continue;let a=.3+r()*.5,l=2+Math.floor(r()*4),i=[n],s=new Set;s.add(n);for(let u=0;u<i.length&&u<l*10;u++){let f=i[u];_.r_elevation[f]+=a*(1-u/(l*10)),A.r_circulate_r(o,f);for(let h of o)!s.has(h)&&i.length<l*10&&(s.add(h),i.push(h))}}_.r_moisture.fill(0);for(let n=0;n<A.numTriangles;n++){let a=3*n,l=A.s_begin_r(a),i=A.s_begin_r(a+1),s=A.s_begin_r(a+2);_.t_elevation[n]=(_.r_elevation[l]+_.r_elevation[i]+_.r_elevation[s])/3,_.t_moisture[n]=0}_.t_downflow_s.fill(-999),_.order_t.fill(0),_.t_flow.fill(0),_.s_flow.fill(0),we.setMap(A,_)}function Eo(){_.plate_r=[0],_.r_plate=new Int32Array(A.numRegions),_.r_plate.fill(0),_.plate_vec=[Q.fromValues(0,0,0)],_.plate_is_ocean=new Set,_.r_elevation.fill(0),_.r_moisture.fill(0);for(let e=0;e<A.numTriangles;e++)_.t_elevation[e]=0,_.t_moisture[e]=0;_.t_downflow_s.fill(-999),_.order_t.fill(0),_.t_flow.fill(0),_.s_flow.fill(0),we.setMap(A,_)}function Ro(){_._sunSeed=oe,_.plate_r=[0],_.r_plate=new Int32Array(A.numRegions),_.r_plate.fill(0),_.plate_vec=[Q.fromValues(0,0,0)],_.plate_is_ocean=new Set,_.r_elevation.fill(.5),_.r_moisture.fill(0);for(let e=0;e<A.numTriangles;e++)_.t_elevation[e]=.5,_.t_moisture[e]=0;_.t_downflow_s.fill(-999),_.order_t.fill(0),_.t_flow.fill(0),_.s_flow.fill(0),we.setMap(A,_)}var Yr=!1,Xr=!1,Zr=!1,$r=!1,Jr=!1,Kr=!1;function So(){return oe}function To(e){oe=e}function Po(){return dt}function Ao(e){dt=e}function Co(){return Ce}function zo(e){Ce=e}function Ho(){return kt}function Fo(e){kt=e}function Bo(){return Br}function Oo(e){Br=e}function Io(){return Or}function Do(e){Or=e}function Wo(){return Ir}function qo(e){Ir=e}function Vo(){return Dr}function jo(e){Dr=e}function Go(){return Wr}function No(e){Wr=e}function Lo(){return qr}function ko(e){qr=e}function Uo(){return Vr}function Yo(e){Vr=e}function Xo(){return Yr}function Zo(e){Yr=e}function $o(){return Xr}function Jo(e){Xr=e}function Ko(){return Zr}function Qo(e){Zr=e}function ea(){return $r}function ta(e){$r=e}function ra(){return Jr}function na(e){Jr=e}function oa(){return Kr}function aa(e){Kr=e}function ia(){return Ut}function la(e){Ut=e}function sa(){return Yt}function ua(e){Yt=e}var yt="bcdfghjklmnpqrstvwxz",Qr="aeiouy";function xt(e){let t=2+(e()*2|0),r="";for(let o=0;o<t;o++)o>0&&e()>.6&&(r+=yt[e()*yt.length|0]),r+=yt[e()*yt.length|0],r+=Qr[e()*Qr.length|0];return r.charAt(0).toUpperCase()+r.slice(1)}function Zt(e,t,r){let o=e[3*t]*e[3*r]+e[3*t+1]*e[3*r+1]+e[3*t+2]*e[3*r+2];return Math.acos(Math.max(-1,Math.min(1,o)))}function ca(e,t){let r=new Float32Array(e.numRegions),o=[];for(let n=0;n<e.numRegions;n++){let a=t.r_elevation[n],l=t.r_moisture[n];if(a<0){r[n]=0;continue}let i=.3+.7*l;a>.6&&(i*=Math.max(0,1-(a-.6)*2)),e.r_circulate_r(o,n);for(let s of o)if(t.r_elevation[s]<0){i*=1.3;break}r[n]=Math.min(1,i)}return r}function fa(e,t){let r=[];for(let o=0;o<e.numRegions;o++)t.r_elevation[o]>=0&&r.push(o);return r}function va(e,t,r,o,n){let a=fa(e,t);a.length<o*5&&(o=Math.max(1,a.length/5|0));let l=[],i=new Int32Array(e.numRegions);i.fill(-1);let s=[],u=a.slice().sort(()=>n()-.5),f=Math.PI/Math.sqrt(o);for(;s.length<o&&f>.001;){for(let p of u){if(s.length>=o)break;let m=!1;for(let d of s)if(Zt(t.r_xyz,p,d)<f){m=!0;break}m||s.push(p)}s.length<o&&(f*=.85)}for(let p=0;p<s.length;p++){let m="Generic",d=t.r_elevation[s[p]],y=t.r_moisture[s[p]];if(d>.5)m="Highland";else if(y>.7)m="Forest";else{let x=[];e.r_circulate_r(x,s[p]);for(let R of x)if(t.r_elevation[R]<0){m="Naval";break}}let w=m==="Naval"?1.5:m==="Highland"?.7:1+n()*.5;l.push({i:p,name:xt(n),center:s[p],type:m,expansionism:w,cells:0})}if(l.length===0)return{cultures:l,cellCulture:i};let h=new Float32Array(e.numRegions);h.fill(1/0);let v=new Fe,c=[];for(let p of l)h[p.center]=0,i[p.center]=p.i,v.push(p.center,0);for(;v.length>0;){let p=v.pop(),m=h[p],d=i[p];if(d<0)continue;let y=l[d];e.r_circulate_r(c,p);for(let w of c){if(i[w]>=0)continue;let x=t.r_elevation[w];if(x<0)continue;let R=10;y.type==="Highland"&&x<.3?R+=30:x>.5&&(R+=20),Math.abs(t.r_moisture[w]-t.r_moisture[y.center])>.3&&(R+=15);let b=m+R/y.expansionism;b<h[w]&&(h[w]=b,i[w]=d,v.push(w,b))}}for(let p of l)p.cells=0;for(let p=0;p<e.numRegions;p++){let m=i[p];m>=0&&m<l.length&&l[m].cells++}return console.log(`[Pop] Culture cells: ${l.map(p=>`${p.name}:${p.cells}`).join(", ")}`),{cultures:l,cellCulture:i}}function pa(e,t,r,o,n,a,l,i){l==null&&(l=1e4),i==null&&(i=o.length);let s=[],u=new Int32Array(e.numRegions);u.fill(-1);let f=[];for(let g=0;g<e.numRegions;g++)t.r_elevation[g]>=0&&n[g]>=0&&f.push(g);if(f.length<10)return{burgs:s,cellBurg:u};let h=f.map(g=>({r:g,s:r[g]*(.5+a()*.5)}));h.sort((g,b)=>b.s-g.s);let v=Math.min(50,Math.max(3,i)),c=Math.max(0,Math.min(f.length,l)),p=300/6371,m=[];for(let g of h){if(m.length>=v)break;if(n[g.r]<0)continue;let b=!1;for(let M of m)if(Zt(t.r_xyz,g.r,M)<p){b=!0;break}b||(m.push(g.r),u[g.r]=s.length,s.push({i:s.length,cell:g.r,name:xt(a),capital:1,population:0,culture:n[g.r],state:-1}))}let d=50/6371,y=Math.max(1,Math.ceil(Math.PI/d)),w=y*2;function x(g){let b=t.r_xyz[3*g],M=t.r_xyz[3*g+1],T=t.r_xyz[3*g+2],D=Math.asin(Math.max(-1,Math.min(1,T))),z=Math.atan2(M,b),H=Math.floor((D+Math.PI/2)/Math.PI*y),N=Math.floor((z+Math.PI)/(2*Math.PI)*w);return H*w+N}let R=new Map;for(let g=0;g<s.length;g++){let b=x(s[g].cell);R.has(b)||R.set(b,[]),R.get(b).push(g)}for(let g of h){if(s.length>=v+c)break;if(u[g.r]>=0||n[g.r]<0)continue;let b=!1,M=x(g.r),T=M%w,D=(M-T)/w;e:for(let z=-1;z<=1;z++){let H=D+z;if(!(H<0||H>=y))for(let N=-1;N<=1;N++){let $=((T+N)%w+w)%w,L=R.get(H*w+$);if(L){for(let S of L)if(Zt(t.r_xyz,g.r,s[S].cell)<d*(1+a())){b=!0;break e}}}}b||(R.has(M)||R.set(M,[]),R.get(M).push(s.length),u[g.r]=s.length,s.push({i:s.length,cell:g.r,name:xt(a),capital:0,population:0,culture:n[g.r],state:-1}))}return{burgs:s,cellBurg:u}}function ha(e,t,r,o,n,a,l,i){let s=[],u=new Int32Array(e.numRegions);u.fill(-1);let f=o.filter(x=>x.capital);if(f=f.slice(0,i),f.length===0)return{states:[],cellState:u};for(let x of f){let R=r[x.culture],g=.8+l()*.8;s.push({i:s.length,name:x.name,capital:x.i,culture:x.culture,center:x.cell,expansionism:g*(R?R.expansionism:1),cells:0,burgs:[],color:""}),x.state=s.length-1}let h=[],v=s.map(x=>{e.r_circulate_r(h,x.center);let R=h.filter(g=>t.r_elevation[g]>=0).length;return`${x.name}(exp=${x.expansionism.toFixed(2)},cult=${r[x.culture]?.name},landNbrs=${R})`});console.log(`[Pop] State details: ${v.join(", ")}`);let c=new Float32Array(e.numRegions);c.fill(1/0);let p=new Fe,m=[];for(let x of s)c[x.center]=0,u[x.center]=x.i,p.push(x.center,0);for(;p.length>0;){let x=p.pop(),R=c[x],g=u[x];if(g<0)continue;let b=s[g];e.r_circulate_r(m,x);for(let M of m){if(t.r_elevation[M]<0||u[M]>=0)continue;let T=10;a[M]!==b.culture&&(T+=100),n[M]>=0&&(T-=20),t.r_elevation[M]>.5&&(T+=30),T<1&&(T=1);let z=R+T/b.expansionism;z<2e4&&z<c[M]&&(c[M]=z,u[M]=g,p.push(M,z))}}for(let x of o)x.state<0?(x.state=u[x.cell],s[x.state]&&s[x.state].burgs.push(x.i)):s[x.state].burgs.push(x.i);for(let x of s)x.cells=0;for(let x=0;x<e.numRegions;x++){let R=u[x];R>=0&&R<s.length&&s[R].cells++}let d=s.map(x=>r[x.culture]?.name??"?");console.log(`[Pop] State cells: ${s.map(x=>`${x.name}:${x.cells}`).join(", ")}`),console.log(`[Pop] Capital cultures: ${d.join(", ")}`);let y=["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#a9a9a9","#e6beff","#ff46b8"];function w(x){let R=new Set;for(let g=0;g<e.numRegions;g++)if(u[g]===x){e.r_circulate_r(m,g);for(let b of m){let M=u[b];M>=0&&M!==x&&R.add(M)}}return[...R]}for(let x of s){let R=w(x.i).map(b=>s[b]).filter(b=>b&&b.color),g=new Set(R.map(b=>b.color));x.color=y.find(b=>!g.has(b))||"#"+(l()*16777215<<0).toString(16).padStart(6,"0")}return{states:s,cellState:u}}function ma(e,t,r,o,n,a,l){let i=[],s=new Int32Array(e.numRegions);s.fill(-1);let u={};for(let c of r){let p=o.filter(y=>y.state===c.i);if(p.length<2){u[c.i]=[];continue}p.sort((y,w)=>(w.capital?1:0)-(y.capital?1:0));let m=Math.min(p.length,Math.max(2,p.length*.15|0)),d=p.slice(0,m);for(let y of d){let w={i:i.length,name:xt(l)+" Province",state:c.i,burg:y.i,center:y.cell,cells:0};i.push(w),s[y.cell]=w.i}u[c.i]=d.map(y=>s[y.cell])}let f=new Float32Array(e.numRegions);f.fill(1/0);let h=new Fe,v=[];for(let c of i)f[c.center]=0,h.push(c.center,0);for(;h.length>0;){let c=h.pop(),p=f[c],m=s[c];if(!(m<0)){e.r_circulate_r(v,c);for(let d of v){if(t.r_elevation[d]<0||n[d]!==n[c]||s[d]>=0)continue;let y=t.r_elevation[d]>.5?100:10,w=p+y;w<f[d]&&(f[d]=w,s[d]=m,h.push(d,w))}}}for(let c of i)c.cells=0;for(let c=0;c<e.numRegions;c++){let p=s[c];p>=0&&p<i.length&&i[p].cells++}return{provinces:i,cellProvince:s}}function da(e,t,r,o,n,a){let l=performance.now(),i=Y(o),s=ca(e,t),u=performance.now(),{cultures:f,cellCulture:h}=va(e,t,s,r,i),v=performance.now(),{burgs:c,cellBurg:p}=pa(e,t,s,f,h,i,a,n),m=performance.now(),{states:d,cellState:y}=ha(e,t,f,c,p,h,i,n),w=performance.now(),{provinces:x,cellProvince:R}=ma(e,t,d,c,y,p,i),g=performance.now();return{cultures:f,cellCulture:h,burgs:c,cellBurg:p,states:d,cellState:y,provinces:x,cellProvince:R,suitability:s}}var Qt=64,er=64;function Be(e){let t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return[t,r,o]}function wt(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function tr(e,t,r){let o=new Uint8Array(e*t*4);for(var n=0,a=0;n<t;n++)for(let l=0;l<e;l++){let i=2*l/e-1,[s,u,f]=r(i);o[a++]=Math.min(255,Math.max(0,Math.round(s))),o[a++]=Math.min(255,Math.max(0,Math.round(u))),o[a++]=Math.min(255,Math.max(0,Math.round(f))),o[a++]=255}return o}function Kt(){return tr(64,64,e=>{let t=.5,r,o,n;return e<-.135?(r=41.5,o=55.3,n=139):e<0?(r=48+48*e,o=64+64*e,n=127-12*e):(t=t*(1-e),r=210-100*t,o=185-45*t,n=139-45*t,r=255*e+r*(1-e),o=255*e+o*(1-e),n=255*e+n*(1-e)),[r,o,n]})}function ga(e,t,r){let o=Be(e),n=Be(t),a=Be(r);return tr(64,64,l=>{let i=(l+1)/2;return i<.5?wt(o,n,i*2):wt(n,a,(i-.5)*2)})}function _a(e,t,r){let o=Be(e),n=Be(t),a=Be(r);return tr(64,64,l=>{let i=(l+1)/2;return i<.5?wt(o,n,i*2):wt(n,a,(i-.5)*2)})}var $t={colorA:"#321408",colorB:"#aa5523",colorC:"#fae6e6"},Jt={colorA:"#555555",colorB:"#aaaaaa",colorC:"#eeeeee"};function rr(e,t,r,o){switch(e){case"airless":return ga(t||Jt.colorA,r||Jt.colorB,o||Jt.colorC);case"barren":return _a(t||$t.colorA,r||$t.colorB,o||$t.colorC);case"gasgiant":return Kt();default:return Kt()}}var nr=Kt();import*as E from"three";import{OrbitControls as Wa}from"three/addons/controls/OrbitControls.js";import*as F from"three";import*as fe from"three";function en(e){let t=new fe.DataTexture(e,64,64,fe.RGBAFormat);return t.wrapS=fe.ClampToEdgeWrapping,t.wrapT=fe.ClampToEdgeWrapping,t.magFilter=fe.NearestFilter,t.minFilter=fe.NearestFilter,t.needsUpdate=!0,t}function Mt(e,t,r,o){return en(rr(e,t,r,o))}var ya=en(nr),tn=ya;var xa=`
varying vec2 v_tm;
void main() {
    v_tm = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,wa=`
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
`;function or(){return new F.ShaderMaterial({uniforms:{u_colormap:{value:tn},u_light_angle:{value:new F.Vector2(Math.cos(Math.PI/3),Math.sin(Math.PI/3))},u_inverse_texture_size:{value:1/2048},u_d:{value:60},u_c:{value:.15},u_slope:{value:6},u_flat:{value:2.5},u_outline_strength:{value:5}},vertexShader:xa,fragmentShader:wa,side:F.FrontSide,depthWrite:!0,depthTest:!0})}var Ma=`
attribute vec4 a_rgba;
varying vec4 v_rgba;
void main() {
    v_rgba = a_rgba;
    vec3 outward = normalize(position) * 1.002;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(outward, 1.0);
}
`,ba=`
precision highp float;
uniform vec4 u_multiply_rgba;
uniform vec4 u_add_rgba;
varying vec4 v_rgba;
void main() {
    gl_FragColor = v_rgba * u_multiply_rgba + u_add_rgba;
}
`;function ar(){return new F.ShaderMaterial({uniforms:{u_multiply_rgba:{value:new F.Vector4(1,1,1,1)},u_add_rgba:{value:new F.Vector4(0,0,0,0)}},vertexShader:Ma,fragmentShader:ba,transparent:!0,depthTest:!0,depthWrite:!1,blending:F.CustomBlending,blendSrc:F.OneFactor,blendDst:F.OneMinusSrcAlphaFactor,blendEquation:F.AddEquation})}function ir(){return new F.MeshBasicMaterial({vertexColors:!0,transparent:!0,opacity:.5,depthTest:!0,depthWrite:!1,depthFunc:F.LessEqualDepth})}var Ea=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ra=`
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
`,Sa=`
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
`,Ta=`
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
`;function lr(e){return new F.ShaderMaterial({uniforms:{u_scale:{value:e.scale},u_turbulence:{value:e.turbulence},u_blur:{value:e.blur},u_colorA:{value:e.colorA.clone?e.colorA:new F.Color(e.colorA)},u_colorB:{value:e.colorB.clone?e.colorB:new F.Color(e.colorB)},u_colorC:{value:e.colorC.clone?e.colorC:new F.Color(e.colorC)},u_seed:{value:e.seed}},vertexShader:Sa,fragmentShader:Ta,side:F.FrontSide,depthWrite:!0,depthTest:!0})}function sr(e){let o=new Uint8Array(524288),n=new tt(Y(e+12345));for(let l=0;l<256;l++)for(let i=0;i<512;i++){let s=(l*512+i)*4,u=i/512*4,f=l/256*2,h=0;h+=n.noise3D(u,f,0)*.5,h+=n.noise3D(u*2,f*2,1)*.25,h+=n.noise3D(u*4,f*4,2)*.125,h+=n.noise3D(u*8,f*8,3)*.0625,h=h*.5+.5;let v=Math.floor(h*255);o[s]=v,o[s+1]=v,o[s+2]=v,o[s+3]=255}let a=new F.DataTexture(o,512,256,F.RGBAFormat);return a.wrapS=F.RepeatWrapping,a.wrapT=F.ClampToEdgeWrapping,a.magFilter=F.LinearFilter,a.minFilter=F.LinearMipmapLinearFilter,a.needsUpdate=!0,new F.ShaderMaterial({uniforms:{u_cloud_texture:{value:a},u_time:{value:0}},vertexShader:Ea,fragmentShader:Ra,transparent:!0,depthTest:!0,depthWrite:!1,side:F.DoubleSide,blending:F.NormalBlending})}import*as B from"three";var Pa=`
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
`,Aa=`
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
`,Ca=`
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
`,za=`
precision highp float;
${Pa}
${Aa}

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
`;function ur(e){return new B.ShaderMaterial({uniforms:{uTime:{value:0},uFresnelPower:{value:1.5},uFresnelInfluence:{value:.4},uTint:{value:1.8},uBase:{value:.05},uBrightnessOffset:{value:0},uBrightness:{value:3},uSpectralColor:{value:e||new B.Color(1,1,1)},uScale:{value:2},uContrast:{value:.15}},vertexShader:Ca,fragmentShader:za,side:B.FrontSide,depthWrite:!0,depthTest:!0})}var rn=`
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
`,Ha=`
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

${rn}

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
`,Fa=`
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
`,Ba=`
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

${rn}

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
`,Ia=`
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
`,Da=`
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
`;function cr(e,t){let r=Y(t+5e3),o=16,n=o*2,a=e*n,l=new Float32Array(a*3),i=new Float32Array(a*3),s=new Float32Array(a*4),u=0;for(let h=0;h<e;h++){let v=2*Math.PI*r(),c=Math.acos(2*r()-1),p=new B.Vector3(Math.cos(v)*Math.sin(c),Math.sin(v)*Math.sin(c),Math.cos(c)),m=r(),d=r(),y=r(),w=r();for(let x=0;x<o;x++){let R=x/o;for(let g=-1;g<=1;g+=2){let b=u*3;l[b]=R,l[b+1]=h/e,l[b+2]=g,i[b]=p.x,i[b+1]=p.y,i[b+2]=p.z,s[u*4]=m,s[u*4+1]=d,s[u*4+2]=y,s[u*4+3]=w,u++}}}let f=new B.BufferGeometry;return f.setAttribute("aPos",new B.BufferAttribute(l,3)),f.setAttribute("aPos0",new B.BufferAttribute(i,3)),f.setAttribute("aWireRandom",new B.BufferAttribute(s,4)),f}function fr(e,t){let r=Y(t+6e3),o=8,n=o*2,a=e*n,l=new Float32Array(a*3),i=new Float32Array(a*3),s=new Float32Array(a*3),u=new Float32Array(a*4),f=0;for(let v=0;v<e;v++){let c=2*Math.PI*r(),p=Math.acos(2*r()-1),m=new B.Vector3(Math.cos(c)*Math.sin(p),Math.sin(c)*Math.sin(p),Math.cos(p)),d=.9+r()*.1,y=1.2+r()*1,w=m.clone().multiplyScalar(d),x=m.clone().multiplyScalar(y),R=r(),g=r(),b=.3+r()*.7,M=r();for(let T=0;T<o;T++){let D=T/o;for(let z=-1;z<=1;z+=2){let H=f*3;l[H]=D,l[H+1]=v/e,l[H+2]=z,i[H]=w.x,i[H+1]=w.y,i[H+2]=w.z,s[H]=x.x,s[H+1]=x.y,s[H+2]=x.z,u[f*4]=R,u[f*4+1]=g,u[f*4+2]=b,u[f*4+3]=M,f++}}}let h=new B.BufferGeometry;return h.setAttribute("aPos",new B.BufferAttribute(l,3)),h.setAttribute("aPos0",new B.BufferAttribute(i,3)),h.setAttribute("aPos1",new B.BufferAttribute(s,3)),h.setAttribute("aWireRandom",new B.BufferAttribute(u,4)),h}function vr(){let e=[],t=[];for(let a=0;a<=32;a++){let i=a/32*2*Math.PI,s=Math.cos(i),u=Math.sin(i),f=.1,h=1;for(let v=0;v<2;v++){let c=v===0?f:h;t.push(s*c,u*c,v),e.push(a*2+v)}}let o=[];for(let a=0;a<32;a++){let l=a*2,i=a*2+1,s=(a+1)*2,u=(a+1)*2+1;o.push(l,s,i),o.push(i,s,u)}let n=new B.BufferGeometry;return n.setAttribute("aPos",new B.BufferAttribute(new Float32Array(t),3)),n.setIndex(new B.BufferAttribute(new Uint16Array(o),1)),n}function pr(e){return new B.ShaderMaterial({uniforms:{uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uLength:{value:e.length},uWidth:{value:e.width},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new B.Vector3(0,0,2.5)},uViewProjection:{value:new B.Matrix4},uOpacity:{value:e.opacity},uAlphaBlended:{value:1},uSpectralColor:{value:e.spectralColor||new B.Color(1,1,1)}},vertexShader:Ha,fragmentShader:Fa,transparent:!0,depthWrite:!1,blending:B.AdditiveBlending})}function hr(e){return new B.ShaderMaterial({uniforms:{uWidth:{value:e.width},uAmp:{value:e.amp},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new B.Vector3(0,0,2.5)},uViewProjection:{value:new B.Matrix4},uOpacity:{value:e.opacity},uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uAlphaBlended:{value:.75},uSpectralColor:{value:e.spectralColor||new B.Color(1,1,1)}},vertexShader:Ba,fragmentShader:Oa,transparent:!0,depthWrite:!1,blending:B.AdditiveBlending})}function mr(e){return new B.ShaderMaterial({uniforms:{uTint:{value:e.tint},uBrightness:{value:e.brightness},uFalloffColor:{value:e.falloffColor},uSpectralColor:{value:e.spectralColor||new B.Color(1,1,1)},uViewProjection:{value:new B.Matrix4},uRadius:{value:e.radius},uCamUp:{value:new B.Vector3(0,1,0)},uCamPos:{value:new B.Vector3(0,0,2.5)}},vertexShader:Ia,fragmentShader:Da,transparent:!0,depthWrite:!1,blending:B.AdditiveBlending,side:B.DoubleSide})}var Ge,X,ee,ae,ce,Ne,Et,ue=null,ve=null,ze=null,le=null,bt=null,Oe=null,Ie=null,De=null,We=null,qe=null,Ve=null,je=null,ot=null,nt=null,at=null,se=null,Z=null,te=null,re=null,J=null,nn="quads",gr=!1;function qa(){return ee}function Va(){return Ge}function ja(){return ae}function Ga(e){ae.azimuthAngle=-e,ae.update()}function Na(e){Ge=new E.WebGLRenderer({canvas:e,antialias:!0}),Ge.setSize(e.width,e.height),Ge.setPixelRatio(Math.min(window.devicePixelRatio,2)),X=new E.Scene,X.background=new E.Color(329740),ee=new E.PerspectiveCamera(45,e.width/e.height,.1,50),ee.position.set(0,0,2.5),ae=new Wa(ee,e),ae.enableDamping=!0,ae.dampingFactor=.1,ae.rotateSpeed=.5,ae.minDistance=.8,ae.maxDistance=8,ae.target.set(0,0,0),ae.update(),ce=or(),Ne=ar(),Et=ir(),gr=!0}var dr={scale:1,turbulence:2,blur:.5,colorA:new E.Color(16775408),colorB:new E.Color(15788208),colorC:new E.Color(11509968),seed:0};function La(e){if(Object.assign(dr,e),le){let t=dr;le.uniforms.u_scale.value=t.scale,le.uniforms.u_turbulence.value=t.turbulence,le.uniforms.u_blur.value=t.blur,le.uniforms.u_colorA.value.copy(t.colorA),le.uniforms.u_colorB.value.copy(t.colorB),le.uniforms.u_colorC.value.copy(t.colorC),le.uniforms.u_seed.value=t.seed}}var He={};function ka(e,t){He=t||{};let r=Mt(e,He.colorA,He.colorB,He.colorC);ce&&(ce.uniforms.u_colormap.value&&ce.uniforms.u_colormap.value.dispose(),ce.uniforms.u_colormap.value=r)}var Ua=new E.Clock;function Ya(){if(!gr)return;ae.update();let e=Ua.getElapsedTime();at&&(at.uniforms.u_time.value=e),Z&&(Z.uniforms.uTime.value=e);let t=new E.Matrix4().multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse);te&&te.material&&(te.material.uniforms.uTime.value=e,te.material.uniforms.uCamPos.value.copy(ee.position),te.material.uniforms.uViewProjection.value.copy(t)),re&&re.material&&(re.material.uniforms.uTime.value=e,re.material.uniforms.uCamPos.value.copy(ee.position),re.material.uniforms.uViewProjection.value.copy(t)),J&&J.material&&(J.material.uniforms.uCamPos.value.copy(ee.position),J.material.uniforms.uCamUp.value.copy(ee.up),J.material.uniforms.uViewProjection.value.copy(t)),Ge.render(X,ee)}function K(e){e&&(X.remove(e),e.geometry&&e.geometry.dispose())}function Xa(e,t,r,o,n,a,l,i){let s=e,u=t;if(K(ue),K(ve),K(ze),K(se),ue=null,ve=null,ze=null,le=null,se=null,Z=null,i==="sun"){Qa(e,t,r,o);return}if(i==="gasgiant"){let f=dr,h=new E.BufferGeometry;h.setAttribute("position",new E.BufferAttribute(new Float32Array(r.xyz),3)),h.setIndex(new E.BufferAttribute(new Uint32Array(r.I),1)),le=lr(f),ze=new E.Mesh(h,le),X.add(ze);return}if(o==="quads"){let f=new E.BufferGeometry;f.setAttribute("position",new E.BufferAttribute(new Float32Array(r.xyz),3)),f.setAttribute("uv",new E.BufferAttribute(new Float32Array(r.tm),2)),f.setIndex(new E.BufferAttribute(new Uint32Array(r.I),1)),ue=new E.Mesh(f,ce),ue.visible=!0,X.add(ue)}else if(o==="centroid"){let f=p=>{let m=Math.min(1,Math.max(0,u.r_moisture[p]+(a||0))),d=u.r_elevation[p]-(l||0);return d>0&&(d=(n||0)>0?d/(1+(n||0)*3):d*(1+Math.abs(n||0)*2)),[d,m]},{xyz:h,tm:v}=Xt(s,u,f),c=new E.BufferGeometry;c.setAttribute("position",new E.BufferAttribute(h,3)),c.setAttribute("uv",new E.BufferAttribute(v,2)),ve=new E.Mesh(c,ce),ve.visible=!0,X.add(ve)}nn=o}function Za(e){if(!(ze||se)){if(ue&&ue.geometry){let t=ue.geometry.attributes.uv;t.array.set(e.tm),t.needsUpdate=!0}ve&&ve.geometry}}function $a(e){return e==="quads"?!!ue:!!ve}var P={numRays:80,numFlares:40,hueSpread:.25,hue:.05,rayLength:1.5,rayWidth:.02,raysOpacity:.5,flareWidth:.03,flareAmp:.3,flaresOpacity:.4,noiseFreq:1.5,noiseAmp:1,glowTint:1.2,glowBrightness:1.5,glowFalloff:2,glowRadius:.5,sphereFresnelPower:1.5,sphereFresnelInfluence:.4,sphereTint:1.8,sphereBase:.05,sphereBrightnessOffset:0,sphereBrightness:3,sphereScale:2,sphereContrast:.15,spectralColor:new E.Color(1,1,1)};function Ja(){return P}function Ka(e){Object.assign(P,e),P.spectralColor&&!P.spectralColor.isColor&&(P.spectralColor=new E.Color(P.spectralColor)),Z&&(Z.uniforms.uFresnelPower.value=P.sphereFresnelPower,Z.uniforms.uFresnelInfluence.value=P.sphereFresnelInfluence,Z.uniforms.uTint.value=P.sphereTint,Z.uniforms.uBase.value=P.sphereBase,Z.uniforms.uBrightnessOffset.value=P.sphereBrightnessOffset,Z.uniforms.uBrightness.value=P.sphereBrightness,Z.uniforms.uScale.value=P.sphereScale,Z.uniforms.uContrast.value=P.sphereContrast,Z.uniforms.uSpectralColor.value.copy(P.spectralColor)),J&&J.material&&(J.material.uniforms.uTint.value=P.glowTint,J.material.uniforms.uBrightness.value=P.glowBrightness,J.material.uniforms.uFalloffColor.value=P.glowFalloff,J.material.uniforms.uRadius.value=P.glowRadius,J.material.uniforms.uSpectralColor.value.copy(P.spectralColor)),te&&te.material&&(te.material.uniforms.uWidth.value=P.rayWidth,te.material.uniforms.uLength.value=P.rayLength,te.material.uniforms.uOpacity.value=P.raysOpacity,te.material.uniforms.uSpectralColor.value.copy(P.spectralColor)),re&&re.material&&(re.material.uniforms.uWidth.value=P.flareWidth,re.material.uniforms.uAmp.value=P.flareAmp,re.material.uniforms.uOpacity.value=P.flaresOpacity,re.material.uniforms.uSpectralColor.value.copy(P.spectralColor))}function Qa(e,t,r,o){let n=new E.BufferGeometry;n.setAttribute("position",new E.BufferAttribute(new Float32Array(r.xyz),3)),n.setIndex(new E.BufferAttribute(new Uint32Array(r.I),1)),n.computeVertexNormals();let a=t._sunSeed||123;Z=ur(P.spectralColor);let l=new E.Mesh(n,Z),i=cr(P.numRays,a),s=pr({hueSpread:P.hueSpread,hue:P.hue,length:P.rayLength,width:P.rayWidth,noiseFreq:P.noiseFreq,noiseAmp:P.noiseAmp,opacity:P.raysOpacity,spectralColor:P.spectralColor});te=new E.LineSegments(i,s);let u=fr(P.numFlares,123),f=hr({hueSpread:P.hueSpread,hue:P.hue,width:P.flareWidth,amp:P.flareAmp,noiseFreq:P.noiseFreq,noiseAmp:P.noiseAmp,opacity:P.flaresOpacity,spectralColor:P.spectralColor});re=new E.LineSegments(u,f);let h=vr(),v=mr({tint:P.glowTint,brightness:P.glowBrightness,falloffColor:P.glowFalloff,radius:P.glowRadius,spectralColor:P.spectralColor});J=new E.Mesh(h,v),se=new E.Group,se.add(l),se.add(te),se.add(re),se.add(J),X.add(se)}function ei(e){nn=e,ue&&(ue.visible=e==="quads"),ve&&(ve.visible=e==="centroid"),ze&&(ze.visible=!0),se&&(se.visible=!0)}function it(e,t){let r=e.length;if(r===0)return null;let o=new Float32Array(r*3),n=new Float32Array(r*4);for(let l=0;l<r;l++)o[3*l]=e[l][0],o[3*l+1]=e[l][1],o[3*l+2]=e[l][2],n[4*l]=t[l][0],n[4*l+1]=t[l][1],n[4*l+2]=t[l][2],n[4*l+3]=t[l][3];let a=new E.BufferGeometry;return a.setAttribute("position",new E.BufferAttribute(o,3)),a.setAttribute("a_rgba",new E.BufferAttribute(n,4)),a}function ti(e,t,r,o){if(K(bt),bt=null,o&&o!=="earthlike")return;let n=[],a=[],l=e,{t_xyz:i,s_flow:s,r_elevation:u}=t;for(let h=0;h<l.numSides;h++)if(s[h]>2){let v=l.s_begin_r(h),c=l.s_end_r(h);if(u[v]-r<0&&u[c]-r<0)continue;let p=.3*Math.sqrt(s[h]),m=l.s_inner_t(h),d=l.s_outer_t(h);n.push(i.slice(3*m,3*m+3),i.slice(3*d,3*d+3)),p>1&&(p=1);let y=[.2*p,.6*p,.9*p,p];a.push(y,y)}if(n.length===0)return;let f=it(n,a);bt=new E.LineSegments(f,Ne),X.add(bt)}function ri(e,t,r){if(K(nt),nt=null,at=null,e==="sun"||!(e==="hostile"||e==="barren"&&r==="hostile"))return;at=sr(t);let n=new E.SphereGeometry(1.008,48,24);nt=new E.Mesh(n,at),nt.renderOrder=1,X.add(nt)}function ni(e){if(e==="gasgiant"||e==="sun")return;let t=Mt(e,He.colorA,He.colorB,He.colorC);ce&&(ce.uniforms.u_colormap.value&&ce.uniforms.u_colormap.value.dispose(),ce.uniforms.u_colormap.value=t)}function oi(e,t){K(Oe),Oe=null;let r=[],o=[],{r_xyz:n,r_plate:a,plate_vec:l}=t;for(let s=0;s<e.numRegions;s++){r.push(n.slice(3*s,3*s+3)),o.push([1,1,1,1]);let u=new Float32Array(3),f=n.slice(3*s,3*s+3),h=l[a[s]];u[0]=f[0]+h[0]*(2/Math.sqrt(e.numRegions)),u[1]=f[1]+h[1]*(2/Math.sqrt(e.numRegions)),u[2]=f[2]+h[2]*(2/Math.sqrt(e.numRegions)),r.push([u[0],u[1],u[2]]),o.push([1,0,0,0])}let i=it(r,o);Oe=new E.LineSegments(i,Ne),X.add(Oe)}function ai(e,t){K(Ie),Ie=null;let r=[],o=[],{t_xyz:n,r_plate:a}=t;for(let i=0;i<e.numSides;i++){let s=e.s_begin_r(i),u=e.s_end_r(i);if(a[s]!==a[u]){let f=e.s_inner_t(i),h=e.s_outer_t(i);r.push(n.slice(3*f,3*f+3),n.slice(3*h,3*h+3)),o.push([1,1,1,1],[1,1,1,1])}}if(r.length===0)return;let l=it(r,o);Ie=new E.LineSegments(l,Ne),X.add(Ie)}function ii(e,t,r){if(K(De),K(We),De=null,We=null,!t)return;let o=t.cultures.map(c=>{let p=c.i*.618033988749895%1,m=p+1/3,d=p,y=p-1/3,w=.7,x=.55;function R(g){g=(g%1+1)%1;let b=(1-Math.abs(2*x-1))*w,M=b*(1-Math.abs(g*6%2-1)),T=x-b/2,D,z,H;return g<1/6?[D,z,H]=[b,M,0]:g<2/6?[D,z,H]=[M,b,0]:g<3/6?[D,z,H]=[0,b,M]:g<4/6?[D,z,H]=[0,M,b]:g<5/6?[D,z,H]=[M,0,b]:[D,z,H]=[b,0,M],[D+T,z+T,H+T]}return R(p)}),n=e,{t_xyz:a,r_xyz:l}=r,{numSides:i}=n,s=new Float32Array(9*i),u=new Float32Array(9*i);for(let c=0;c<i;c++){let p=n.s_inner_t(c),m=n.s_outer_t(c),d=n.s_begin_r(c),y=o[t.cellCulture[d]]||[.2,.2,.2],w=9*c,x=9*c+3,R=9*c+6,g=0,b=0;for(let M=0;M<3;M++){let T=a[3*p+M];s[w+M]=T,g+=T*T}for(let M=0;M<3;M++)s[x+M]=l[3*d+M];for(let M=0;M<3;M++){let T=a[3*m+M];s[R+M]=T,b+=T*T}g=Math.sqrt(g),b=Math.sqrt(b);for(let M=0;M<3;M++)s[w+M]/=g,s[R+M]/=b;for(let M=0;M<3;M++)for(let T=0;T<3;T++)u[9*c+3*M+T]=y[T]}let f=new E.BufferGeometry;f.setAttribute("position",new E.BufferAttribute(s,3)),f.setAttribute("color",new E.BufferAttribute(u,3)),De=new E.Mesh(f,Et),X.add(De);let h=[],v=[];for(let c=0;c<i;c++){let p=n.s_begin_r(c),m=n.s_end_r(c);if(t.cellState[p]!==t.cellState[m]&&t.cellState[p]>=0&&t.cellState[m]>=0){let d=n.s_inner_t(c),y=n.s_outer_t(c),w=[1,1,1,.8];h.push(a.slice(3*d,3*d+3),a.slice(3*y,3*y+3)),v.push(w,w)}}if(h.length>0){let c=it(h,v);We=new E.LineSegments(c,Ne),X.add(We)}}function li(e){let t=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,o=parseInt(e.slice(5,7),16)/255;return[t,r,o]}function on(e,t,r,o){let n=e,{t_xyz:a,r_xyz:l}=t,{numSides:i}=n,s=new Float32Array(9*i),u=new Float32Array(9*i);for(let h=0;h<i;h++){let v=n.s_inner_t(h),c=n.s_outer_t(h),p=n.s_begin_r(h),m=o(r[p]),d=9*h,y=9*h+3,w=9*h+6,x=0,R=0;for(let g=0;g<3;g++){let b=a[3*v+g];s[d+g]=b,x+=b*b}for(let g=0;g<3;g++)s[y+g]=l[3*p+g];for(let g=0;g<3;g++){let b=a[3*c+g];s[w+g]=b,R+=b*b}x=Math.sqrt(x),R=Math.sqrt(R);for(let g=0;g<3;g++)s[d+g]/=x,s[w+g]/=R;for(let g=0;g<3;g++)for(let b=0;b<3;b++)u[9*h+3*g+b]=m[b]}let f=new E.BufferGeometry;return f.setAttribute("position",new E.BufferAttribute(s,3)),f.setAttribute("color",new E.BufferAttribute(u,3)),f}function si(e,t,r){if(K(qe),qe=null,!t)return;let o=t.states.map(l=>li(l.color)),n=l=>l>=0&&l<o.length?o[l]:[.2,.2,.2],a=on(e,r,t.cellState,n);qe=new E.Mesh(a,Et),X.add(qe)}function ui(e,t,r){if(K(Ve),Ve=null,!t)return;let o=t.provinces.map((l,i)=>{let s=i*.618033988749895%1,u=.7,f=.55;function h(v){v=(v%1+1)%1;let c=(1-Math.abs(2*f-1))*u,p=c*(1-Math.abs(v*6%2-1)),m=f-c/2,d,y,w;return v<1/6?[d,y,w]=[c,p,0]:v<2/6?[d,y,w]=[p,c,0]:v<3/6?[d,y,w]=[0,c,p]:v<4/6?[d,y,w]=[0,p,c]:v<5/6?[d,y,w]=[p,0,c]:[d,y,w]=[c,0,p],[d+m,y+m,w+m]}return h(s)}),n=l=>l>=0&&l<o.length?o[l]:[.2,.2,.2],a=on(e,r,t.cellProvince,n);Ve=new E.Mesh(a,Et),X.add(Ve)}function ci(e,t,r){if(K(je),je=null,!t)return;let o=e,{t_xyz:n}=r,a=[],l=[];for(let i=0;i<o.numSides;i++){let s=o.s_begin_r(i),u=o.s_end_r(i);if(t.cellProvince[s]!==t.cellProvince[u]&&t.cellProvince[s]>=0&&t.cellProvince[u]>=0){let f=o.s_inner_t(i),h=o.s_outer_t(i),v=[1,1,1,.8];a.push(n.slice(3*f,3*f+3),n.slice(3*h,3*h+3)),l.push(v,v)}}if(a.length>0){let i=it(a,l);je=new E.LineSegments(i,Ne),X.add(je)}}function fi(e){Oe&&(Oe.visible=e)}function vi(e){Ie&&(Ie.visible=e)}function pi(e){De&&(De.visible=e)}function hi(e){We&&(We.visible=e)}function mi(e){qe&&(qe.visible=e)}function di(e){Ve&&(Ve.visible=e)}function gi(e){je&&(je.visible=e)}function _i(e,t,r){if(K(ot),ot=null,!t||!t.burgs)return;let{r_xyz:o}=r,n=new E.Group;n.name="burgOverlay";let a=1.003,l=new Set(t.provinces.map(v=>v.burg)),i=[],s=[];for(let v of t.burgs){let c=v.cell,p=o[3*c]*a,m=o[3*c+1]*a,d=o[3*c+2]*a;v.capital||l.has(v.i)?s.push(p,m,d):i.push(p,m,d)}let u=document.createElement("canvas");u.width=64,u.height=64;let f=u.getContext("2d");f.beginPath(),f.arc(32,32,30,0,Math.PI*2),f.fillStyle="#fff",f.fill();let h=new E.CanvasTexture(u);if(i.length>0){let v=new E.BufferGeometry;v.setAttribute("position",new E.Float32BufferAttribute(i,3));let c=new E.PointsMaterial({map:h,color:13421772,size:.015,sizeAttenuation:!0,transparent:!0,opacity:.8,depthWrite:!1});n.add(new E.Points(v,c))}if(s.length>0){let v=new E.BufferGeometry;v.setAttribute("position",new E.Float32BufferAttribute(s,3));let c=new E.PointsMaterial({map:h,color:16766720,size:.04,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1});n.add(new E.Points(v,c))}ot=n,X.add(n)}function yi(e){ot&&(ot.visible=e)}function xi(e,t){gr&&(Ge.setSize(e,t),ee.aspect=e/t,ee.updateProjectionMatrix())}export{Y as aleaPRNG,Lr as assignDownflow,kr as assignFlow,_t as assignRegionElevation,Nr as assignTriangleValues,nr as colormapData,er as colormapHeight,Qt as colormapWidth,sr as createCloudMaterial,lr as createGasGiantMaterial,ar as createLineMaterial,ir as createOverlayMaterial,or as createPlanetSurfaceMaterial,hr as createSunFlaresMaterial,mr as createSunGlowMaterial,pr as createSunRaysMaterial,rt as fbm_noise,Ur as generateMap,_o as generateMesh,gt as generatePlates,da as generatePopulation,fr as generateSunFlaresGeometry,vr as generateSunGlowGeometry,cr as generateSunRaysGeometry,ur as generateSunSphereMaterial,Gr as generateTriangleCenters,Xt as generateVoronoiGeometry,sa as getBarrenSubtype,qa as getCamera,rr as getColormapData,ja as getControls,oa as getDrawBurgOverlay,Xo as getDrawCultureOverlay,Io as getDrawMode,Vo as getDrawPlateBoundaries,Wo as getDrawPlateVectors,ra as getDrawProvinceBorders,ea as getDrawProvinceOverlay,$o as getDrawStateBorders,Ko as getDrawStateOverlay,Ho as getJitter,Po as getN,Co as getP,ia as getPlanetType,Lo as getRainOffset,Va as getRenderer,Bo as getRotation,So as getSeed,Ja as getSunParams,Go as getTempOffset,Uo as getWaterLevel,$a as hasMesh,Na as initRenderer,Vt as makeSphere,_ as map,A as mesh,we as quadGeometry,_i as rebuildBurgOverlay,ri as rebuildCloudSphere,Mt as rebuildColormapTexture,ii as rebuildOverlay,Xa as rebuildPlanet,ai as rebuildPlateBoundaries,oi as rebuildPlateVectors,ci as rebuildProvinceBorders,ui as rebuildProvinceOverlay,ti as rebuildRivers,si as rebuildStateOverlay,Ya as render,xi as resize,ua as setBarrenSubtype,Ga as setCameraRotation,aa as setDrawBurgOverlay,Zo as setDrawCultureOverlay,Do as setDrawMode,jo as setDrawPlateBoundaries,qo as setDrawPlateVectors,na as setDrawProvinceBorders,ta as setDrawProvinceOverlay,Jo as setDrawStateBorders,Qo as setDrawStateOverlay,Fo as setJitter,Ao as setN,zo as setP,la as setPlanetType,ko as setRainOffset,ei as setRenderDrawMode,Oo as setRotation,To as setSeed,No as setTempOffset,Yo as setWaterLevel,yi as toggleBurgOverlay,pi as toggleOverlay,vi as togglePlateBoundaries,fi as togglePlateVectors,gi as toggleProvinceBorders,di as toggleProvinceOverlay,hi as toggleStateBorders,mi as toggleStateOverlay,Za as updateClimate,ka as updateColormapColors,ni as updateColormapTexture,La as updateGasGiantParams,Ka as updateSunParams};
//# sourceMappingURL=_bundle.engine.js.map
