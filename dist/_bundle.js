import*as ue from"three";import Jl from"lil-gui";var ka=Object.create,Lr=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,An=Object.getOwnPropertyNames,Ya=Object.getPrototypeOf,Xa=Object.prototype.hasOwnProperty,On=(e,t)=>function(){try{return t||(0,e[An(e)[0]])((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Ja=(e,t)=>{for(var r in t)Lr(e,r,{get:t[r],enumerable:!0})},Za=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of An(t))!Xa.call(e,n)&&n!==r&&Lr(e,n,{get:()=>t[n],enumerable:!(a=Ua(t,n))||a.enumerable});return e},Fn=(e,t,r)=>(r=e!=null?ka(Ya(e)):{},Za(t||!e||!e.__esModule?Lr(r,"default",{value:e,enumerable:!0}):r,e)),$a=On({"node_modules/simplex-noise/simplex-noise.js"(e,t){(function(){"use strict";var r=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6,n=1/3,o=1/6,i=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;function s(d){var c;typeof d=="function"?c=d:d?c=p(d):c=Math.random,this.p=u(c),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var h=0;h<512;h++)this.perm[h]=this.p[h&255],this.permMod12[h]=this.perm[h]%12}s.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(d,c){var h=this.permMod12,g=this.perm,m=this.grad3,w=0,x=0,C=0,S=(d+c)*r,_=Math.floor(d+S),b=Math.floor(c+S),M=(_+b)*a,R=_-M,D=b-M,A=d-R,O=c-D,j,K;A>O?(j=1,K=0):(j=0,K=1);var U=A-j+a,E=O-K+a,W=A-1+2*a,L=O-1+2*a,I=_&255,G=b&255,q=.5-A*A-O*O;if(q>=0){var V=h[I+g[G]]*3;q*=q,w=q*q*(m[V]*A+m[V+1]*O)}var F=.5-U*U-E*E;if(F>=0){var N=h[I+j+g[G+K]]*3;F*=F,x=F*F*(m[N]*U+m[N+1]*E)}var Y=.5-W*W-L*L;if(Y>=0){var X=h[I+1+g[G+1]]*3;Y*=Y,C=Y*Y*(m[X]*W+m[X+1]*L)}return 70*(w+x+C)},noise3D:function(d,c,h){var g=this.permMod12,m=this.perm,w=this.grad3,x,C,S,_,b=(d+c+h)*n,M=Math.floor(d+b),R=Math.floor(c+b),D=Math.floor(h+b),A=(M+R+D)*o,O=M-A,j=R-A,K=D-A,U=d-O,E=c-j,W=h-K,L,I,G,q,V,F;U>=E?E>=W?(L=1,I=0,G=0,q=1,V=1,F=0):U>=W?(L=1,I=0,G=0,q=1,V=0,F=1):(L=0,I=0,G=1,q=1,V=0,F=1):E<W?(L=0,I=0,G=1,q=0,V=1,F=1):U<W?(L=0,I=1,G=0,q=0,V=1,F=1):(L=0,I=1,G=0,q=1,V=1,F=0);var N=U-L+o,Y=E-I+o,X=W-G+o,ge=U-q+2*o,Te=E-V+2*o,He=W-F+2*o,De=U-1+3*o,We=E-1+3*o,Ie=W-1+3*o,Oe=M&255,Fe=R&255,ze=D&255,Pe=.6-U*U-E*E-W*W;if(Pe<0)x=0;else{var Le=g[Oe+m[Fe+m[ze]]]*3;Pe*=Pe,x=Pe*Pe*(w[Le]*U+w[Le+1]*E+w[Le+2]*W)}var Ee=.6-N*N-Y*Y-X*X;if(Ee<0)C=0;else{var qe=g[Oe+L+m[Fe+I+m[ze+G]]]*3;Ee*=Ee,C=Ee*Ee*(w[qe]*N+w[qe+1]*Y+w[qe+2]*X)}var Re=.6-ge*ge-Te*Te-He*He;if(Re<0)S=0;else{var Ge=g[Oe+q+m[Fe+V+m[ze+F]]]*3;Re*=Re,S=Re*Re*(w[Ge]*ge+w[Ge+1]*Te+w[Ge+2]*He)}var Be=.6-De*De-We*We-Ie*Ie;if(Be<0)_=0;else{var Ne=g[Oe+1+m[Fe+1+m[ze+1]]]*3;Be*=Be,_=Be*Be*(w[Ne]*De+w[Ne+1]*We+w[Ne+2]*Ie)}return 32*(x+C+S+_)},noise4D:function(d,c,h,g){var m=this.perm,w=this.grad4,x,C,S,_,b,M=(d+c+h+g)*i,R=Math.floor(d+M),D=Math.floor(c+M),A=Math.floor(h+M),O=Math.floor(g+M),j=(R+D+A+O)*l,K=R-j,U=D-j,E=A-j,W=O-j,L=d-K,I=c-U,G=h-E,q=g-W,V=0,F=0,N=0,Y=0;L>I?V++:F++,L>G?V++:N++,L>q?V++:Y++,I>G?F++:N++,I>q?F++:Y++,G>q?N++:Y++;var X,ge,Te,He,De,We,Ie,Oe,Fe,ze,Pe,Le;X=V>=3?1:0,ge=F>=3?1:0,Te=N>=3?1:0,He=Y>=3?1:0,De=V>=2?1:0,We=F>=2?1:0,Ie=N>=2?1:0,Oe=Y>=2?1:0,Fe=V>=1?1:0,ze=F>=1?1:0,Pe=N>=1?1:0,Le=Y>=1?1:0;var Ee=L-X+l,qe=I-ge+l,Re=G-Te+l,Ge=q-He+l,Be=L-De+2*l,Ne=I-We+2*l,Tr=G-Ie+2*l,Pr=q-Oe+2*l,Er=L-Fe+3*l,Rr=I-ze+3*l,Br=G-Pe+3*l,Ar=q-Le+3*l,Or=L-1+4*l,Fr=I-1+4*l,zr=G-1+4*l,Hr=q-1+4*l,ct=R&255,ft=D&255,pt=A&255,dt=O&255,ht=.6-L*L-I*I-G*G-q*q;if(ht<0)x=0;else{var Ot=m[ct+m[ft+m[pt+m[dt]]]]%32*4;ht*=ht,x=ht*ht*(w[Ot]*L+w[Ot+1]*I+w[Ot+2]*G+w[Ot+3]*q)}var vt=.6-Ee*Ee-qe*qe-Re*Re-Ge*Ge;if(vt<0)C=0;else{var Ft=m[ct+X+m[ft+ge+m[pt+Te+m[dt+He]]]]%32*4;vt*=vt,C=vt*vt*(w[Ft]*Ee+w[Ft+1]*qe+w[Ft+2]*Re+w[Ft+3]*Ge)}var mt=.6-Be*Be-Ne*Ne-Tr*Tr-Pr*Pr;if(mt<0)S=0;else{var zt=m[ct+De+m[ft+We+m[pt+Ie+m[dt+Oe]]]]%32*4;mt*=mt,S=mt*mt*(w[zt]*Be+w[zt+1]*Ne+w[zt+2]*Tr+w[zt+3]*Pr)}var gt=.6-Er*Er-Rr*Rr-Br*Br-Ar*Ar;if(gt<0)_=0;else{var Ht=m[ct+Fe+m[ft+ze+m[pt+Pe+m[dt+Le]]]]%32*4;gt*=gt,_=gt*gt*(w[Ht]*Er+w[Ht+1]*Rr+w[Ht+2]*Br+w[Ht+3]*Ar)}var yt=.6-Or*Or-Fr*Fr-zr*zr-Hr*Hr;if(yt<0)b=0;else{var Dt=m[ct+1+m[ft+1+m[pt+1+m[dt+1]]]]%32*4;yt*=yt,b=yt*yt*(w[Dt]*Or+w[Dt+1]*Fr+w[Dt+2]*zr+w[Dt+3]*Hr)}return 27*(x+C+S+_+b)}};function u(d){var c,h=new Uint8Array(256);for(c=0;c<256;c++)h[c]=c;for(c=0;c<255;c++){var g=c+~~(d()*(256-c)),m=h[c];h[c]=h[g],h[g]=m}return h}s._buildPermutationTable=u;function p(){var d=0,c=0,h=0,g=1,m=v();d=m(" "),c=m(" "),h=m(" ");for(var w=0;w<arguments.length;w++)d-=m(arguments[w]),d<0&&(d+=1),c-=m(arguments[w]),c<0&&(c+=1),h-=m(arguments[w]),h<0&&(h+=1);return m=null,function(){var x=2091639*d+g*23283064365386963e-26;return d=c,c=h,h=x-(g=x|0)}}function v(){var d=4022871197;return function(c){c=c.toString();for(var h=0;h<c.length;h++){d+=c.charCodeAt(h);var g=.02519603282416938*d;d=g>>>0,g-=d,g*=d,d=g>>>0,g-=d,d+=g*4294967296}return(d>>>0)*23283064365386963e-26}}typeof define<"u"&&define.amd&&define(function(){return s}),typeof e<"u"?e.SimplexNoise=s:typeof window<"u"&&(window.SimplexNoise=s),typeof t<"u"&&(t.exports=s)})()}}),Ka=On({"node_modules/@redblobgames/dual-mesh/index.js"(e,t){"use strict";var r=class pe{static s_to_t(n){return n/3|0}static s_prev_s(n){return n%3===0?n+2:n-1}static s_next_s(n){return n%3===2?n-2:n+1}constructor({numBoundaryRegions:n,numSolidSides:o,_r_vertex:i,_triangles:l,_halfedges:s}){Object.assign(this,{numBoundaryRegions:n,numSolidSides:o,_r_vertex:i,_triangles:l,_halfedges:s}),this._t_vertex=[],this._update()}update(n,o){this._r_vertex=n,this._triangles=o.triangles,this._halfedges=o.halfedges,this._update()}_update(){let{_triangles:n,_halfedges:o,_r_vertex:i,_t_vertex:l}=this;if(this.numSides=n.length,this.numRegions=i.length,this.numSolidRegions=this.numRegions-1,this.numTriangles=this.numSides/3,this.numSolidTriangles=this.numSolidSides/3,this._t_vertex.length<this.numTriangles){let s=l.length,u=this.numTriangles-s;l=l.concat(new Array(u));for(let p=s;p<this.numTriangles;p++)l[p]=[0,0];this._t_vertex=l}this._r_in_s=new Int32Array(this.numRegions);for(let s=0;s<n.length;s++){let u=n[pe.s_next_s(s)];(this._r_in_s[u]===0||o[s]===-1)&&(this._r_in_s[u]=s)}for(let s=0;s<n.length;s+=3){let u=s/3,p=i[n[s]],v=i[n[s+1]],d=i[n[s+2]];if(this.s_ghost(s)){let c=v[0]-p[0],h=v[1]-p[1],g=10/Math.sqrt(c*c+h*h);l[u][0]=.5*(p[0]+v[0])+h*g,l[u][1]=.5*(p[1]+v[1])-c*g}else l[u][0]=(p[0]+v[0]+d[0])/3,l[u][1]=(p[1]+v[1]+d[1])/3}}static fromDelaunator(n,o){return new pe({numBoundaryRegions:0,numSolidSides:o.triangles.length,_r_vertex:n,_triangles:o.triangles,_halfedges:o.halfedges})}r_x(n){return this._r_vertex[n][0]}r_y(n){return this._r_vertex[n][1]}t_x(n){return this._t_vertex[n][0]}t_y(n){return this._t_vertex[n][1]}r_pos(n,o){return n.length=2,n[0]=this.r_x(o),n[1]=this.r_y(o),n}t_pos(n,o){return n.length=2,n[0]=this.t_x(o),n[1]=this.t_y(o),n}s_begin_r(n){return this._triangles[n]}s_end_r(n){return this._triangles[pe.s_next_s(n)]}s_inner_t(n){return pe.s_to_t(n)}s_outer_t(n){return pe.s_to_t(this._halfedges[n])}s_next_s(n){return pe.s_next_s(n)}s_prev_s(n){return pe.s_prev_s(n)}s_opposite_s(n){return this._halfedges[n]}t_circulate_s(n,o){n.length=3;for(let i=0;i<3;i++)n[i]=3*o+i;return n}t_circulate_r(n,o){n.length=3;for(let i=0;i<3;i++)n[i]=this._triangles[3*o+i];return n}t_circulate_t(n,o){n.length=3;for(let i=0;i<3;i++)n[i]=this.s_outer_t(3*o+i);return n}r_circulate_s(n,o){let i=this._r_in_s[o],l=i;n.length=0;do{n.push(this._halfedges[l]);let s=pe.s_next_s(l);l=this._halfedges[s]}while(l!==-1&&l!==i);return n}r_circulate_r(n,o){let i=this._r_in_s[o],l=i;n.length=0;do{n.push(this.s_begin_r(l));let s=pe.s_next_s(l);l=this._halfedges[s]}while(l!==-1&&l!==i);return n}r_circulate_t(n,o){let i=this._r_in_s[o],l=i;n.length=0;do{n.push(pe.s_to_t(l));let s=pe.s_next_s(l);l=this._halfedges[s]}while(l!==-1&&l!==i);return n}ghost_r(){return this.numRegions-1}s_ghost(n){return n>=this.numSolidSides}r_ghost(n){return n===this.numRegions-1}t_ghost(n){return this.s_ghost(3*n)}s_boundary(n){return this.s_ghost(n)&&n%3===0}r_boundary(n){return n<this.numBoundaryRegions}};t.exports=r}}),Qa=Fn($a()),$e=class{constructor(e=1/0,t=Float64Array,r=Uint32Array){let a=e!==1/0;this.ids=a?new r(e):[],this.values=a?new t(e):[],this.capacity=e,this.length=0}clear(){this.length=0}push(e,t){if(this.length===this.capacity)throw new RangeError("Queue is at capacity.");let r=this.length++;for(;r>0;){let a=r-1>>1,n=this.values[a];if(t>=n)break;this.ids[r]=this.ids[a],this.values[r]=n,r=a}this.ids[r]=e,this.values[r]=t}pop(){if(this.length===0)return;let e=this.ids,t=this.values,r=e[0],a=--this.length;if(a>0){let n=e[a],o=t[a],i=0,l=a>>1;for(;i<l;){let s=(i<<1)+1,u=s+1,p=s+(+(u<a)&+(t[u]<t[s]));if(t[p]>=o)break;e[i]=e[p],t[i]=t[p],i=p}e[i]=n,t[i]=o}return r}peek(){return this.length>0?this.ids[0]:void 0}peekValue(){return this.length>0?this.values[0]:void 0}shrink(){Array.isArray(this.ids)&&(this.ids.length=this.length),Array.isArray(this.values)&&(this.values.length=this.length)}},Dr=1e-6,It=typeof Float32Array<"u"?Float32Array:Array,Rn=Math.random;function Wr(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}var ei=Math.PI/180,ti=180/Math.PI,ne={};Ja(ne,{add:()=>ao,angle:()=>Eo,bezier:()=>_o,ceil:()=>oo,clone:()=>eo,copy:()=>ro,create:()=>zn,cross:()=>mo,dist:()=>Do,distance:()=>Ln,div:()=>Ho,divide:()=>In,dot:()=>qr,equals:()=>Oo,exactEquals:()=>Ao,floor:()=>lo,forEach:()=>qo,fromValues:()=>to,hermite:()=>wo,inverse:()=>ho,len:()=>Io,length:()=>Hn,lerp:()=>go,max:()=>so,min:()=>io,mul:()=>zo,multiply:()=>Wn,negate:()=>po,normalize:()=>vo,random:()=>xo,rotateX:()=>So,rotateY:()=>To,rotateZ:()=>Po,round:()=>uo,scale:()=>co,scaleAndAdd:()=>fo,set:()=>no,slerp:()=>yo,sqrDist:()=>Wo,sqrLen:()=>Lo,squaredDistance:()=>qn,squaredLength:()=>Gn,str:()=>Bo,sub:()=>Fo,subtract:()=>Dn,transformMat3:()=>Co,transformMat4:()=>bo,transformQuat:()=>Mo,zero:()=>Ro});function zn(){var e=new It(3);return It!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function eo(e){var t=new It(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Hn(e){var t=e[0],r=e[1],a=e[2];return Math.sqrt(t*t+r*r+a*a)}function to(e,t,r){var a=new It(3);return a[0]=e,a[1]=t,a[2]=r,a}function ro(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function no(e,t,r,a){return e[0]=t,e[1]=r,e[2]=a,e}function ao(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function Dn(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function Wn(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function In(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function oo(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function lo(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function io(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function so(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function uo(e,t){return e[0]=Wr(t[0]),e[1]=Wr(t[1]),e[2]=Wr(t[2]),e}function co(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function fo(e,t,r,a){return e[0]=t[0]+r[0]*a,e[1]=t[1]+r[1]*a,e[2]=t[2]+r[2]*a,e}function Ln(e,t){var r=t[0]-e[0],a=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+a*a+n*n)}function qn(e,t){var r=t[0]-e[0],a=t[1]-e[1],n=t[2]-e[2];return r*r+a*a+n*n}function Gn(e){var t=e[0],r=e[1],a=e[2];return t*t+r*r+a*a}function po(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function ho(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function vo(e,t){var r=t[0],a=t[1],n=t[2],o=r*r+a*a+n*n;return o>0&&(o=1/Math.sqrt(o)),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}function qr(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function mo(e,t,r){var a=t[0],n=t[1],o=t[2],i=r[0],l=r[1],s=r[2];return e[0]=n*s-o*l,e[1]=o*i-a*s,e[2]=a*l-n*i,e}function go(e,t,r,a){var n=t[0],o=t[1],i=t[2];return e[0]=n+a*(r[0]-n),e[1]=o+a*(r[1]-o),e[2]=i+a*(r[2]-i),e}function yo(e,t,r,a){var n=Math.acos(Math.min(Math.max(qr(t,r),-1),1)),o=Math.sin(n),i=Math.sin((1-a)*n)/o,l=Math.sin(a*n)/o;return e[0]=i*t[0]+l*r[0],e[1]=i*t[1]+l*r[1],e[2]=i*t[2]+l*r[2],e}function wo(e,t,r,a,n,o){var i=o*o,l=i*(2*o-3)+1,s=i*(o-2)+o,u=i*(o-1),p=i*(3-2*o);return e[0]=t[0]*l+r[0]*s+a[0]*u+n[0]*p,e[1]=t[1]*l+r[1]*s+a[1]*u+n[1]*p,e[2]=t[2]*l+r[2]*s+a[2]*u+n[2]*p,e}function _o(e,t,r,a,n,o){var i=1-o,l=i*i,s=o*o,u=l*i,p=3*o*l,v=3*s*i,d=s*o;return e[0]=t[0]*u+r[0]*p+a[0]*v+n[0]*d,e[1]=t[1]*u+r[1]*p+a[1]*v+n[1]*d,e[2]=t[2]*u+r[2]*p+a[2]*v+n[2]*d,e}function xo(e,t){t=t===void 0?1:t;var r=Rn()*2*Math.PI,a=Rn()*2-1,n=Math.sqrt(1-a*a)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=a*t,e}function bo(e,t,r){var a=t[0],n=t[1],o=t[2],i=r[3]*a+r[7]*n+r[11]*o+r[15];return i=i||1,e[0]=(r[0]*a+r[4]*n+r[8]*o+r[12])/i,e[1]=(r[1]*a+r[5]*n+r[9]*o+r[13])/i,e[2]=(r[2]*a+r[6]*n+r[10]*o+r[14])/i,e}function Co(e,t,r){var a=t[0],n=t[1],o=t[2];return e[0]=a*r[0]+n*r[3]+o*r[6],e[1]=a*r[1]+n*r[4]+o*r[7],e[2]=a*r[2]+n*r[5]+o*r[8],e}function Mo(e,t,r){var a=r[0],n=r[1],o=r[2],i=r[3],l=t[0],s=t[1],u=t[2],p=n*u-o*s,v=o*l-a*u,d=a*s-n*l;return p=p+p,v=v+v,d=d+d,e[0]=l+i*p+n*d-o*v,e[1]=s+i*v+o*p-a*d,e[2]=u+i*d+a*v-n*p,e}function So(e,t,r,a){var n=[],o=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],o[0]=n[0],o[1]=n[1]*Math.cos(a)-n[2]*Math.sin(a),o[2]=n[1]*Math.sin(a)+n[2]*Math.cos(a),e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function To(e,t,r,a){var n=[],o=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],o[0]=n[2]*Math.sin(a)+n[0]*Math.cos(a),o[1]=n[1],o[2]=n[2]*Math.cos(a)-n[0]*Math.sin(a),e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function Po(e,t,r,a){var n=[],o=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],o[0]=n[0]*Math.cos(a)-n[1]*Math.sin(a),o[1]=n[0]*Math.sin(a)+n[1]*Math.cos(a),o[2]=n[2],e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function Eo(e,t){var r=e[0],a=e[1],n=e[2],o=t[0],i=t[1],l=t[2],s=Math.sqrt((r*r+a*a+n*n)*(o*o+i*i+l*l)),u=s&&qr(e,t)/s;return Math.acos(Math.min(Math.max(u,-1),1))}function Ro(e){return e[0]=0,e[1]=0,e[2]=0,e}function Bo(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function Ao(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Oo(e,t){var r=e[0],a=e[1],n=e[2],o=t[0],i=t[1],l=t[2];return Math.abs(r-o)<=Dr*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-i)<=Dr*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(n-l)<=Dr*Math.max(1,Math.abs(n),Math.abs(l))}var Fo=Dn,zo=Wn,Ho=In,Do=Ln,Wo=qn,Io=Hn,Lo=Gn,qo=(function(){var e=zn();return function(t,r,a,n,o,i){var l,s;for(r||(r=3),a||(a=0),n?s=Math.min(n*r+a,t.length):s=t.length,l=a;l<s;l+=r)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],o(e,e,i),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2];return t}})(),Bn=Math.pow(2,-52),Nn=class Vn{static from(t,r=ko,a=Uo){let n=t.length,o=new Float64Array(n*2);for(let i=0;i<n;i++){let l=t[i];o[2*i]=r(l),o[2*i+1]=a(l)}return new Vn(o)}constructor(t){let r=t.length>>1;if(r>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;let a=2*r-5,n=this.triangles=new Uint32Array(a*3),o=this.halfedges=new Int32Array(a*3);this._hashSize=Math.ceil(Math.sqrt(r));let i=this.hullPrev=new Uint32Array(r),l=this.hullNext=new Uint32Array(r),s=this.hullTri=new Uint32Array(r),u=new Int32Array(this._hashSize).fill(-1),p=new Uint32Array(r),v=1/0,d=1/0,c=-1/0,h=-1/0;for(let E=0;E<r;E++){let W=t[2*E],L=t[2*E+1];W<v&&(v=W),L<d&&(d=L),W>c&&(c=W),L>h&&(h=L),p[E]=E}let g=(v+c)/2,m=(d+h)/2,w=1/0,x,C,S;for(let E=0;E<r;E++){let W=Ir(g,m,t[2*E],t[2*E+1]);W<w&&(x=E,w=W)}let _=t[2*x],b=t[2*x+1];w=1/0;for(let E=0;E<r;E++){if(E===x)continue;let W=Ir(_,b,t[2*E],t[2*E+1]);W<w&&W>0&&(C=E,w=W)}let M=t[2*C],R=t[2*C+1],D=1/0;for(let E=0;E<r;E++){if(E===x||E===C)continue;let W=Vo(_,b,M,R,t[2*E],t[2*E+1]);W<D&&(S=E,D=W)}let A=t[2*S],O=t[2*S+1];if(D===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(Wt(_,b,M,R,A,O)){let E=C,W=M,L=R;C=S,M=A,R=O,S=E,A=W,O=L}let j=jo(_,b,M,R,A,O);this._cx=j.x,this._cy=j.y;let K=new Float64Array(r);for(let E=0;E<r;E++)K[E]=Ir(t[2*E],t[2*E+1],j.x,j.y);_t(p,K,0,r-1),this.hullStart=x;let U=3;l[x]=i[S]=C,l[C]=i[x]=S,l[S]=i[C]=x,s[x]=0,s[C]=1,s[S]=2,u[this._hashKey(_,b)]=x,u[this._hashKey(M,R)]=C,u[this._hashKey(A,O)]=S,this.trianglesLen=0,this._addTriangle(x,C,S,-1,-1,-1);for(let E=0,W,L;E<p.length;E++){let I=p[E],G=t[2*I],q=t[2*I+1];if(E>0&&Math.abs(G-W)<=Bn&&Math.abs(q-L)<=Bn||(W=G,L=q,I===x||I===C||I===S))continue;let V=0;for(let ge=0,Te=this._hashKey(G,q);ge<this._hashSize&&(V=u[(Te+ge)%this._hashSize],!(V!==-1&&V!==l[V]));ge++);V=i[V];let F=V,N;for(;N=l[F],!Wt(G,q,t[2*F],t[2*F+1],t[2*N],t[2*N+1]);)if(F=N,F===V){F=-1;break}if(F===-1)continue;let Y=this._addTriangle(F,I,l[F],-1,-1,s[F]);s[I]=this._legalize(Y+2),s[F]=Y,U++;let X=l[F];for(;N=l[X],Wt(G,q,t[2*X],t[2*X+1],t[2*N],t[2*N+1]);)Y=this._addTriangle(X,I,N,s[I],-1,s[X]),s[I]=this._legalize(Y+2),l[X]=X,U--,X=N;if(F===V)for(;N=i[F],Wt(G,q,t[2*N],t[2*N+1],t[2*F],t[2*F+1]);)Y=this._addTriangle(N,I,F,-1,s[F],s[N]),this._legalize(Y+2),s[N]=Y,l[F]=F,U--,F=N;this.hullStart=i[I]=F,l[F]=i[X]=I,l[I]=X,u[this._hashKey(G,q)]=I,u[this._hashKey(t[2*F],t[2*F+1])]=F}this.hull=new Uint32Array(U);for(let E=0,W=this.hullStart;E<U;E++)this.hull[E]=W,W=l[W];this.hullPrev=this.hullNext=this.hullTri=null,this.triangles=n.subarray(0,this.trianglesLen),this.halfedges=o.subarray(0,this.trianglesLen)}_hashKey(t,r){return Math.floor(Go(t-this._cx,r-this._cy)*this._hashSize)%this._hashSize}_legalize(t){let{triangles:r,coords:a,halfedges:n}=this,o=n[t],i=t-t%3,l=o-o%3,s=i+(t+1)%3,u=i+(t+2)%3,p=l+(o+2)%3;if(o===-1)return u;let v=r[u],d=r[t],c=r[s],h=r[p];if(No(a[2*v],a[2*v+1],a[2*d],a[2*d+1],a[2*c],a[2*c+1],a[2*h],a[2*h+1])){r[t]=h,r[o]=v;let m=n[p];if(m===-1){let x=this.hullStart;do{if(this.hullTri[x]===p){this.hullTri[x]=t;break}x=this.hullNext[x]}while(x!==this.hullStart)}this._link(t,m),this._link(o,n[u]),this._link(u,p);let w=l+(o+1)%3;return this._legalize(t),this._legalize(w)}return u}_link(t,r){this.halfedges[t]=r,r!==-1&&(this.halfedges[r]=t)}_addTriangle(t,r,a,n,o,i){let l=this.trianglesLen;return this.triangles[l]=t,this.triangles[l+1]=r,this.triangles[l+2]=a,this._link(l,n),this._link(l+1,o),this._link(l+2,i),this.trianglesLen+=3,l}};function Go(e,t){let r=e/(Math.abs(e)+Math.abs(t));return(t>0?3-r:1+r)/4}function Ir(e,t,r,a){let n=e-r,o=t-a;return n*n+o*o}function Wt(e,t,r,a,n,o){return(a-t)*(n-r)-(r-e)*(o-a)<0}function No(e,t,r,a,n,o,i,l){let s=e-i,u=t-l,p=r-i,v=a-l,d=n-i,c=o-l,h=s*s+u*u,g=p*p+v*v,m=d*d+c*c;return s*(v*m-g*c)-u*(p*m-g*d)+h*(p*c-v*d)<0}function Vo(e,t,r,a,n,o){let i=r-e,l=a-t,s=n-e,u=o-t,p=i*i+l*l,v=s*s+u*u,d=.5/(i*u-l*s),c=(u*p-l*v)*d,h=(i*v-s*p)*d;return c*c+h*h}function jo(e,t,r,a,n,o){let i=r-e,l=a-t,s=n-e,u=o-t,p=i*i+l*l,v=s*s+u*u,d=.5/(i*u-l*s),c=e+(u*p-l*v)*d,h=t+(i*v-s*p)*d;return{x:c,y:h}}function _t(e,t,r,a){if(a-r<=20)for(let n=r+1;n<=a;n++){let o=e[n],i=t[o],l=n-1;for(;l>=r&&t[e[l]]>i;)e[l+1]=e[l--];e[l+1]=o}else{let n=r+a>>1,o=r+1,i=a;wt(e,n,o),t[e[r]]>t[e[a]]&&wt(e,r,a),t[e[o]]>t[e[a]]&&wt(e,o,a),t[e[r]]>t[e[o]]&&wt(e,r,o);let l=e[o],s=t[l];for(;;){do o++;while(t[e[o]]<s);do i--;while(t[e[i]]>s);if(i<o)break;wt(e,o,i)}e[r+1]=e[i],e[i]=l,a-o+1>=i-r?(_t(e,t,o,a),_t(e,t,r,i-1)):(_t(e,t,r,i-1),_t(e,t,o,a))}}function wt(e,t,r){let a=e[t];e[t]=e[r],e[r]=a}function ko(e){return e[0]}function Uo(e){return e[1]}var Yo=Fn(Ka()),xt=Qa.default,jn=Yo.default;function Xo(){return(function(e){"use strict";let t="aleaPRNG 1.1.0";var r,a,n,o,i=new Uint32Array(3),l,s="";function u(c){var h=p();r=h(" "),a=h(" "),n=h(" "),o=1;for(var g=0;g<c.length;g++)r-=h(c[g]),r<0&&(r+=1),a-=h(c[g]),a<0&&(a+=1),n-=h(c[g]),n<0&&(n+=1);s=h.version,h=null}function p(){var c=4022871197,h=function(g){g=g.toString();for(var m=0,w=g.length;m<w;m++){c+=g.charCodeAt(m);var x=.02519603282416938*c;c=x>>>0,x-=c,x*=c,c=x>>>0,x-=c,c+=x*4294967296}return(c>>>0)*23283064365386963e-26};return h.version="Mash 0.9",h}function v(c){return parseInt(c,10)===c}var d=function(){var c=2091639*r+o*23283064365386963e-26;return r=a,a=n,n=c-(o=c|0)};return d.fract53=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.int32=function(){return d()*4294967296},d.cycle=function(c){c=typeof c>"u"?1:+c,c<1&&(c=1);for(var h=0;h<c;h++)d()},d.range=function(){var c,h;return arguments.length===1?(c=0,h=arguments[0]):(c=arguments[0],h=arguments[1]),arguments[0]>arguments[1]&&(c=arguments[1],h=arguments[0]),v(c)&&v(h)?Math.floor(d()*(h-c+1))+c:d()*(h-c)+c},d.restart=function(){u(l)},d.seed=function(){u(Array.prototype.slice.call(arguments))},d.version=function(){return t},d.versions=function(){return t+", "+s},e.length===0&&(window.crypto.getRandomValues(i),e=[i[0],i[1],i[2]]),l=e,u(e),d})(Array.prototype.slice.call(arguments))}var $=Xo;var Lt=[],qt=[];function Jo(e,t,r){let a=[],n=3.6/Math.sqrt(e),o=Math.PI*(3-Math.sqrt(5)),i=2/e;for(let l=0,s=0,u=1-i/2;l!==e;l++,u-=i){let p=Math.sqrt(1-u*u),v=Math.asin(u)*180/Math.PI,d=s*180/Math.PI;Lt[l]===void 0&&(Lt[l]=r()-r()),qt[l]===void 0&&(qt[l]=r()-r()),v+=t*Lt[l]*(v-Math.asin(Math.max(-1,u-i*2*Math.PI*p/n))*180/Math.PI),d+=t*qt[l]*(n/p*180/Math.PI),a.push(v,d%360),s+=o}return a}function Zo(e,t,r){let a=t/180*Math.PI,n=r/180*Math.PI;return e.push(Math.cos(a)*Math.cos(n),Math.cos(a)*Math.sin(n),Math.sin(a)),e}function $o(e,{triangles:t,halfedges:r}){let a=t.length;function n(p){return p%3==2?p-2:p+1}let o=0,i=-1,l=[];for(let p=0;p<a;p++)r[p]===-1&&(o++,l[t[p]]=p,i=p);let s=new Int32Array(a+3*o),u=new Int32Array(a+3*o);s.set(t),u.set(r);for(let p=0,v=i;p<o;p++,v=l[s[n(v)]]){let d=a+3*p;u[v]=d,u[d]=v,s[d]=s[n(v)],s[d+1]=s[v],s[d+2]=e;let c=a+(3*p+4)%(3*o);u[d+2]=c,u[c]=d+2}return{triangles:s,halfedges:u}}function Ko(e){let t=Math.PI/180,r=e.length/3,a=[];for(let n=0;n<r;n++){let o=e[3*n],i=e[3*n+1],l=e[3*n+2],s=o/(1-l),u=i/(1-l);a.push(s,u)}return a}function kn(e,t,r){Lt=[],qt=[];let a=Jo(e,t,r),n=[];for(let s=0;s<a.length/2;s++)Zo(n,a[2*s],a[2*s+1]);let o=new Nn(Ko(n));n.push(0,0,1),o=$o(n.length/3-1,o);let i=[[0,0]];for(let s=1;s<e+1;s++)i[s]=i[0];return{mesh:new jn({numBoundaryRegions:0,numSolidSides:o.triangles.length,_r_vertex:i,_triangles:o.triangles,_halfedges:o.halfedges}),r_xyz:n}}var de=123,Gt=25e3,Ve=20,kr=.75,Un=-1,Yn="quads",Xn=!1,Jn=!1,Zn=0,$n=0,Kn=0,Ur="earthlike",Yr="barren",Qn=new xt($(de)),Qo=2/3,Gr=Array.from({length:5},(e,t)=>Math.pow(Qo,t));function Nt(e,t,r){let a=0,n=0;for(let o=0;o<Gr.length;o++){let i=1<<o;a+=Gr[o]*Qn.noise3D(e*i,t*i,r*i),n+=Gr[o]}return a/n}function el(e,{r_xyz:t}){let{numTriangles:r}=e,a=new Float32Array(3*r);for(let n=0;n<r;n++){let o=e.s_begin_r(3*n),i=e.s_begin_r(3*n+1),l=e.s_begin_r(3*n+2),s=t[3*o],u=t[3*o+1],p=t[3*o+2],v=t[3*i],d=t[3*i+1],c=t[3*i+2],h=t[3*l],g=t[3*l+1],m=t[3*l+2];a[3*n]=(s+v+h)/3,a[3*n+1]=(u+d+g)/3,a[3*n+2]=(p+c+m)/3}return a}function ea(e,{r_xyz:t,t_xyz:r},a){let{numSides:n}=e,o=new Float32Array(9*n),i=new Float32Array(6*n);for(let l=0;l<n;l++){let s=e.s_inner_t(l),u=e.s_outer_t(l),p=e.s_begin_r(l),v=a(p);for(let d=0;d<3;d++)o[9*l+0+d]=r[3*s+d];for(let d=0;d<3;d++)o[9*l+3+d]=t[3*p+d];for(let d=0;d<3;d++)o[9*l+6+d]=r[3*u+d];for(let d=0;d<3;d++)for(let c=0;c<2;c++)i[6*l+2*d+c]=v[c]}return{xyz:o,tm:i}}var jr=class{constructor(){}applyClimate(t,r,a,n,o,i,l,s,u){let{tm:p}=this,v=0,d=l>0?1/(1+l*3):1+Math.abs(l)*2;for(let c=0;c<t;c++){let h=a[c]-u;p[v++]=h>0?h*d:h,p[v++]=Math.min(1,Math.max(0,n[c]+s))}for(let c=0;c<r;c++){let h=o[c]-u;p[v++]=h>0?h*d:h,p[v++]=Math.min(1,Math.max(0,i[c]+s))}}setMesh({numSides:t,numRegions:r,numTriangles:a}){this.I=new Int32Array(3*t),this.xyz=new Float32Array(3*(r+a)),this.tm=new Float32Array(2*(r+a))}setMap(t,{r_xyz:r,t_xyz:a,r_color_fn:n,s_flow:o,r_elevation:i,t_elevation:l,r_moisture:s,t_moisture:u}){let{numSides:v,numRegions:d,numTriangles:c}=t,{xyz:h,tm:g,I:m}=this;h.set(r),h.set(a,r.length);let w=0;for(let M=0;M<d;M++)g[w++]=i[M],g[w++]=s[M];for(let M=0;M<c;M++)g[w++]=l[M],g[w++]=u[M];let x=0,C=0,S=0,{_halfedges:_,_triangles:b}=t;for(let M=0;M<v;M++){let R=t.s_opposite_s(M),D=t.s_begin_r(M),A=t.s_begin_r(R),O=t.s_inner_t(M),j=t.s_inner_t(R);i[D]<0||i[A]<0||o[M]>0||o[R]>0?(m[x++]=D,m[x++]=d+j,m[x++]=d+O,C++):(m[x++]=D,m[x++]=A,m[x++]=d+O,S++)}}};function tl(e,t,r){let{numRegions:a}=e,n=new Set;for(;n.size<t&&n.size<a;)n.add(r(a));return n}function Xr(e,t){let r=new Int32Array(e.numRegions);r.fill(-1);let a=$(de),n=p=>Math.floor(a()*p),o=tl(e,Math.min(Ve,Gt),n),i=Array.from(o);for(let p of i)r[p]=p;let l=[],s=p=>Math.floor($(de)()*p);for(let p=0;p<i.length;p++){let v=p+s(i.length-p),d=i[v];i[v]=i[p],e.r_circulate_r(l,d);for(let c of l)r[c]===-1&&(r[c]=r[d],i.push(c))}let u=[];for(let p of o){let v=e.r_circulate_r([],p)[0],d=t.slice(3*p,3*p+3),c=t.slice(3*v,3*v+3);u[p]=ne.normalize([],ne.subtract([],c,d))}return{plate_r:o,r_plate:r,plate_vec:u}}function Nr(e,t,r){let{numRegions:a}=e,n=new Float32Array(a);n.fill(1/0);let o=$(de),i=u=>Math.floor(o()*u),l=[];for(let u of t)l.push(u),n[u]=0;let s=[];for(let u=0;u<l.length;u++){let p=u+i(l.length-u),v=l[p];l[p]=l[u],e.r_circulate_r(s,v);for(let d of s)n[d]===1/0&&!r.has(d)&&(n[d]=n[v]+1,l.push(d))}return n}var rl=.75;function nl(e,t,r,a,n){let{numRegions:i}=e,l=new Set,s=new Set,u=new Set,p=[];for(let v=0;v<i;v++){let d=1/0,c=-1;e.r_circulate_r(p,v);for(let h of p)if(a[v]!==a[h]){let g=t.slice(3*v,3*v+3),m=t.slice(3*h,3*h+3),w=ne.distance(g,m),x=ne.distance(ne.add([],g,ne.scale([],n[a[v]],.01)),ne.add([],m,ne.scale([],n[a[h]],.01))),C=w-x;C<d&&(c=h,d=C)}if(c!==-1){let h=d>rl*.01,g=a[v],m=a[c];r.has(g)&&r.has(m)?(h?s:u).add(v):!r.has(g)&&!r.has(m)?h&&l.add(g):(h?l:s).add(v)}}return{mountain_r:l,coastline_r:s,ocean_r:u}}function Jr(e,{r_xyz:t,plate_is_ocean:r,r_plate:a,plate_vec:n,r_elevation:o}){let{numRegions:l}=e,{mountain_r:s,coastline_r:u,ocean_r:p}=nl(e,t,r,a,n);for(let g=0;g<l;g++)a[g]===g&&(r.has(g)?p:u).add(g);let v=new Set;for(let g of s)v.add(g);for(let g of u)v.add(g);for(let g of p)v.add(g);let d=Nr(e,s,p),c=Nr(e,p,u),h=Nr(e,u,v);for(let g=0;g<l;g++){let m=d[g]+.001,w=c[g]+.001,x=h[g]+.001;m===1/0&&w===1/0?o[g]=.1:o[g]=(1/m-1/w)/(1/m+1/w+1/x),o[g]+=.1*Nt(t[3*g],t[3*g+1],t[3*g+2])}}function al(e,{r_elevation:t,r_moisture:r,t_elevation:a,t_moisture:n}){let{numTriangles:o}=e;for(let i=0;i<o;i++){let l=3*i,s=e.s_begin_r(l),u=e.s_begin_r(l+1),p=e.s_begin_r(l+2);a[i]=1/3*(t[s]+t[u]+t[p]),n[i]=1/3*(r[s]+r[u]+r[p])}}var Vr=new $e;function ol(e,{t_elevation:t,t_downflow_s:r,order_t:a}){let{numTriangles:n}=e,o=0;r.fill(-999);for(let i=0;i<n;i++)if(t[i]<0){let l=-1,s=t[i];for(let u=0;u<3;u++){let p=3*i+u,v=t[e.s_outer_t(p)];v<s&&(s=v,l=p)}a[o++]=i,r[i]=l,Vr.push(i,t[i])}for(let i=0;i<n;i++){let l=Vr.pop();for(let s=0;s<3;s++){let u=3*l+s,p=e.s_outer_t(u);r[p]===-999&&t[p]>=0&&(r[p]=e.s_opposite_s(u),a[o++]=p,Vr.push(p,t[p]))}}}function ll(e,{order_t:t,t_elevation:r,t_moisture:a,t_downflow_s:n,t_flow:o,s_flow:i}){let{numTriangles:l,_halfedges:s}=e;i.fill(0);for(let u=0;u<l;u++)r[u]>=0?o[u]=.5*a[u]*a[u]:o[u]=0;for(let u=t.length-1;u>=0;u--){let p=t[u],v=n[p],d=s[v]/3|0;v>=0&&(o[d]+=o[p],i[v]+=o[p],r[d]>r[p]&&(r[d]=r[p]))}}var P,y={},ae=new jr;function he(){let e=performance.now();Qn=new xt($(de));let t=kn(Gt,kr,$(de));P=t.mesh,ae.setMesh(P),y.r_elevation=new Float32Array(P.numRegions),y.t_elevation=new Float32Array(P.numTriangles),y.r_moisture=new Float32Array(P.numRegions),y.t_moisture=new Float32Array(P.numTriangles),y.t_downflow_s=new Int32Array(P.numTriangles),y.order_t=new Int32Array(P.numTriangles),y.t_flow=new Float32Array(P.numTriangles),y.s_flow=new Float32Array(P.numSides),y.r_xyz=t.r_xyz,y.t_xyz=el(P,y),Vt()}function Vt(){switch(Ur){case"airless":return ul();case"barren":return Yr==="hostile"?fl():cl();case"gasgiant":return pl();case"sun":return dl();default:return il()}}function il(){let e=Xr(P,y.r_xyz);y.plate_r=e.plate_r,y.r_plate=e.r_plate,y.plate_vec=e.plate_vec,y.plate_is_ocean=new Set;for(let t of y.plate_r)Math.floor($(t)()*10)<5&&y.plate_is_ocean.add(t);Jr(P,y);for(let t=0;t<P.numRegions;t++){let r=.5+.5*Nt(y.r_xyz[3*t],y.r_xyz[3*t+1],y.r_xyz[3*t+2]);y.r_moisture[t]=Math.max(.15,Math.min(1,r))}al(P,y),ol(P,y),ll(P,y),ae.setMap(P,y)}function sl(e,t){let r=e.numRegions,a=new Float32Array(r),n=$(de+9999);for(let u=0;u<r;u++)a[u]=.15*Nt(t[3*u],t[3*u+1],t[3*u+2]);let o=30+Math.floor(n()*40);for(let u=0;u<o;u++){let p=2*Math.PI*n(),v=Math.acos(2*n()-1),d=Math.cos(p)*Math.sin(v),c=Math.sin(p)*Math.sin(v),h=Math.cos(v),g=.05+n()*.2,m=.1+n()*.35,w=m*(.08+n()*.12),x=Math.cos(g*.6),C=Math.cos(g),S=Math.cos(g*1.4);for(let _=0;_<r;_++){let b=d*t[3*_]+c*t[3*_+1]+h*t[3*_+2];if(!(b<S))if(b<C){let M=(b-S)/(C-S);a[_]+=w*M}else if(b<x){let M=(b-C)/(x-C);a[_]+=w*(1-M)}else{let M=1-b,R=1-x,D=M/R;a[_]-=m*(1-D*D)}}}let i=1/0,l=-1/0;for(let u=0;u<r;u++)a[u]<i&&(i=a[u]),a[u]>l&&(l=a[u]);let s=l-i;for(let u=0;u<r;u++)a[u]=-.8+1.6*(a[u]-i)/s;return a}function ul(){y.plate_r=[0],y.r_plate=new Int32Array(P.numRegions),y.r_plate.fill(0),y.plate_vec=[ne.fromValues(0,0,0)],y.plate_is_ocean=new Set,y.r_elevation=sl(P,y.r_xyz),y.r_moisture.fill(0);for(let e=0;e<P.numTriangles;e++){let t=3*e,r=P.s_begin_r(t),a=P.s_begin_r(t+1),n=P.s_begin_r(t+2);y.t_elevation[e]=(y.r_elevation[r]+y.r_elevation[a]+y.r_elevation[n])/3,y.t_moisture[e]=0}y.t_downflow_s.fill(-999),y.order_t.fill(0),y.t_flow.fill(0),y.s_flow.fill(0),ae.setMap(P,y)}function cl(){let e=Xr(P,y.r_xyz);y.plate_r=e.plate_r,y.r_plate=e.r_plate,y.plate_vec=e.plate_vec,y.plate_is_ocean=new Set,Jr(P,y);let t=$(de+7777);for(let r of y.plate_r){if(t()>.4)continue;let a=1.5+t()*1.5;y.r_elevation[r]*=a;let n=[];P.r_circulate_r(n,r);for(let o of n)y.r_elevation[o]*=1+(a-1)*.5}for(let r=0;r<P.numRegions;r++){let a=Math.asin(y.r_xyz[3*r+1]),n=Math.max(0,1-Math.abs(a)/(Math.PI/6)),o=.5+.5*Nt(y.r_xyz[3*r],y.r_xyz[3*r+1],y.r_xyz[3*r+2]);y.r_moisture[r]=Math.min(.15,o*n)}for(let r=0;r<P.numTriangles;r++){let a=3*r,n=P.s_begin_r(a),o=P.s_begin_r(a+1),i=P.s_begin_r(a+2);y.t_elevation[r]=(y.r_elevation[n]+y.r_elevation[o]+y.r_elevation[i])/3,y.t_moisture[r]=(y.r_moisture[n]+y.r_moisture[o]+y.r_moisture[i])/3}y.t_downflow_s.fill(-999),y.order_t.fill(0),y.t_flow.fill(0),y.s_flow.fill(0),ae.setMap(P,y)}function fl(){let e=Ve;Ve=Math.round(Ve*1.5);let t=Xr(P,y.r_xyz);Ve=e,y.plate_r=t.plate_r,y.r_plate=t.r_plate,y.plate_vec=t.plate_vec,y.plate_is_ocean=new Set,Jr(P,y);let r=$(de+8888),a=[];for(let n of y.plate_r){if(r()>.3)continue;let o=.3+r()*.5,i=2+Math.floor(r()*4),l=[n],s=new Set;s.add(n);for(let u=0;u<l.length&&u<i*10;u++){let p=l[u];y.r_elevation[p]+=o*(1-u/(i*10)),P.r_circulate_r(a,p);for(let v of a)!s.has(v)&&l.length<i*10&&(s.add(v),l.push(v))}}y.r_moisture.fill(0);for(let n=0;n<P.numTriangles;n++){let o=3*n,i=P.s_begin_r(o),l=P.s_begin_r(o+1),s=P.s_begin_r(o+2);y.t_elevation[n]=(y.r_elevation[i]+y.r_elevation[l]+y.r_elevation[s])/3,y.t_moisture[n]=0}y.t_downflow_s.fill(-999),y.order_t.fill(0),y.t_flow.fill(0),y.s_flow.fill(0),ae.setMap(P,y)}function pl(){y.plate_r=[0],y.r_plate=new Int32Array(P.numRegions),y.r_plate.fill(0),y.plate_vec=[ne.fromValues(0,0,0)],y.plate_is_ocean=new Set,y.r_elevation.fill(0),y.r_moisture.fill(0);for(let e=0;e<P.numTriangles;e++)y.t_elevation[e]=0,y.t_moisture[e]=0;y.t_downflow_s.fill(-999),y.order_t.fill(0),y.t_flow.fill(0),y.s_flow.fill(0),ae.setMap(P,y)}function dl(){y._sunSeed=de,y.plate_r=[0],y.r_plate=new Int32Array(P.numRegions),y.r_plate.fill(0),y.plate_vec=[ne.fromValues(0,0,0)],y.plate_is_ocean=new Set,y.r_elevation.fill(.5),y.r_moisture.fill(0);for(let e=0;e<P.numTriangles;e++)y.t_elevation[e]=.5,y.t_moisture[e]=0;y.t_downflow_s.fill(-999),y.order_t.fill(0),y.t_flow.fill(0),y.s_flow.fill(0),ae.setMap(P,y)}var ta=!1,ra=!1,na=!1,aa=!1,oa=!1,la=!1;function je(){return de}function bt(e){de=e}function Zr(){return Gt}function jt(e){Gt=e}function $r(){return Ve}function kt(e){Ve=e}function Kr(){return kr}function Ut(e){kr=e}function ia(){return Un}function sa(e){Un=e}function Ct(){return Yn}function Yt(e){Yn=e}function Qr(){return Xn}function en(e){Xn=e}function tn(){return Jn}function rn(e){Jn=e}function ye(){return Zn}function Xt(e){Zn=e}function Ae(){return $n}function Jt(e){$n=e}function oe(){return Kn}function Zt(e){Kn=e}function $t(){return ta}function Kt(e){ta=e}function Qt(){return ra}function er(e){ra=e}function tr(){return na}function rr(e){na=e}function nr(){return aa}function ar(e){aa=e}function or(){return oa}function lr(e){oa=e}function ir(){return la}function sr(e){la=e}function J(){return Ur}function ur(e){Ur=e}function cr(){return Yr}function nn(e){Yr=e}import*as T from"three";import{OrbitControls as Il}from"three/addons/controls/OrbitControls.js";import*as z from"three";import*as Me from"three";function Ke(e){let t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return[t,r,a]}function fr(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function sn(e,t,r){let a=new Uint8Array(e*t*4);for(var n=0,o=0;n<t;n++)for(let i=0;i<e;i++){let l=2*i/e-1,[s,u,p]=r(l);a[o++]=Math.min(255,Math.max(0,Math.round(s))),a[o++]=Math.min(255,Math.max(0,Math.round(u))),a[o++]=Math.min(255,Math.max(0,Math.round(p))),a[o++]=255}return a}function ln(){return sn(64,64,e=>{let t=.5,r,a,n;return e<-.135?(r=41.5,a=55.3,n=139):e<0?(r=48+48*e,a=64+64*e,n=127-12*e):(t=t*(1-e),r=210-100*t,a=185-45*t,n=139-45*t,r=255*e+r*(1-e),a=255*e+a*(1-e),n=255*e+n*(1-e)),[r,a,n]})}function vl(e,t,r){let a=Ke(e),n=Ke(t),o=Ke(r);return sn(64,64,i=>{let l=(i+1)/2;return l<.5?fr(a,n,l*2):fr(n,o,(l-.5)*2)})}function ml(e,t,r){let a=Ke(e),n=Ke(t),o=Ke(r);return sn(64,64,i=>{let l=(i+1)/2;return l<.5?fr(a,n,l*2):fr(n,o,(l-.5)*2)})}var an={colorA:"#321408",colorB:"#aa5523",colorC:"#fae6e6"},on={colorA:"#555555",colorB:"#aaaaaa",colorC:"#eeeeee"};function ua(e,t,r,a){switch(e){case"airless":return vl(t||on.colorA,r||on.colorB,a||on.colorC);case"barren":return ml(t||an.colorA,r||an.colorB,a||an.colorC);case"gasgiant":return ln();default:return ln()}}var ca=ln();function fa(e){let t=new Me.DataTexture(e,64,64,Me.RGBAFormat);return t.wrapS=Me.ClampToEdgeWrapping,t.wrapT=Me.ClampToEdgeWrapping,t.magFilter=Me.NearestFilter,t.minFilter=Me.NearestFilter,t.needsUpdate=!0,t}function un(e,t,r,a){return fa(ua(e,t,r,a))}var wl=fa(ca),pa=wl;var _l=`
varying vec2 v_tm;
void main() {
    v_tm = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,xl=`
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
`;function da(){return new z.ShaderMaterial({uniforms:{u_colormap:{value:pa},u_light_angle:{value:new z.Vector2(Math.cos(Math.PI/3),Math.sin(Math.PI/3))},u_inverse_texture_size:{value:1/2048},u_d:{value:60},u_c:{value:.15},u_slope:{value:6},u_flat:{value:2.5},u_outline_strength:{value:5}},vertexShader:_l,fragmentShader:xl,side:z.FrontSide,depthWrite:!0,depthTest:!0})}var bl=`
attribute vec4 a_rgba;
varying vec4 v_rgba;
void main() {
    v_rgba = a_rgba;
    vec3 outward = normalize(position) * 1.002;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(outward, 1.0);
}
`,Cl=`
precision highp float;
uniform vec4 u_multiply_rgba;
uniform vec4 u_add_rgba;
varying vec4 v_rgba;
void main() {
    gl_FragColor = v_rgba * u_multiply_rgba + u_add_rgba;
}
`;function ha(){return new z.ShaderMaterial({uniforms:{u_multiply_rgba:{value:new z.Vector4(1,1,1,1)},u_add_rgba:{value:new z.Vector4(0,0,0,0)}},vertexShader:bl,fragmentShader:Cl,transparent:!0,depthTest:!0,depthWrite:!1,blending:z.CustomBlending,blendSrc:z.OneFactor,blendDst:z.OneMinusSrcAlphaFactor,blendEquation:z.AddEquation})}function va(){return new z.MeshBasicMaterial({vertexColors:!0,transparent:!0,opacity:.5,depthTest:!0,depthWrite:!1,depthFunc:z.LessEqualDepth})}var Ml=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Sl=`
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
`,Tl=`
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
`,Pl=`
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
`;function ma(e){return new z.ShaderMaterial({uniforms:{u_scale:{value:e.scale},u_turbulence:{value:e.turbulence},u_blur:{value:e.blur},u_colorA:{value:e.colorA.clone?e.colorA:new z.Color(e.colorA)},u_colorB:{value:e.colorB.clone?e.colorB:new z.Color(e.colorB)},u_colorC:{value:e.colorC.clone?e.colorC:new z.Color(e.colorC)},u_seed:{value:e.seed}},vertexShader:Tl,fragmentShader:Pl,side:z.FrontSide,depthWrite:!0,depthTest:!0})}function ga(e){let a=new Uint8Array(524288),n=new xt($(e+12345));for(let i=0;i<256;i++)for(let l=0;l<512;l++){let s=(i*512+l)*4,u=l/512*4,p=i/256*2,v=0;v+=n.noise3D(u,p,0)*.5,v+=n.noise3D(u*2,p*2,1)*.25,v+=n.noise3D(u*4,p*4,2)*.125,v+=n.noise3D(u*8,p*8,3)*.0625,v=v*.5+.5;let d=Math.floor(v*255);a[s]=d,a[s+1]=d,a[s+2]=d,a[s+3]=255}let o=new z.DataTexture(a,512,256,z.RGBAFormat);return o.wrapS=z.RepeatWrapping,o.wrapT=z.ClampToEdgeWrapping,o.magFilter=z.LinearFilter,o.minFilter=z.LinearMipmapLinearFilter,o.needsUpdate=!0,new z.ShaderMaterial({uniforms:{u_cloud_texture:{value:o},u_time:{value:0}},vertexShader:Ml,fragmentShader:Sl,transparent:!0,depthTest:!0,depthWrite:!1,side:z.DoubleSide,blending:z.NormalBlending})}import*as H from"three";var El=`
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
`,Rl=`
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
`,Bl=`
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
`,Al=`
precision highp float;
${El}
${Rl}

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
`;function ya(e){return new H.ShaderMaterial({uniforms:{uTime:{value:0},uFresnelPower:{value:1.5},uFresnelInfluence:{value:.4},uTint:{value:1.8},uBase:{value:.05},uBrightnessOffset:{value:0},uBrightness:{value:3},uSpectralColor:{value:e||new H.Color(1,1,1)},uScale:{value:2},uContrast:{value:.15}},vertexShader:Bl,fragmentShader:Al,side:H.FrontSide,depthWrite:!0,depthTest:!0})}var wa=`
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
`,Ol=`
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

${wa}

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
`,Fl=`
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
`,zl=`
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

${wa}

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
`,Hl=`
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
`,Dl=`
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
`,Wl=`
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
`;function _a(e,t){let r=$(t+5e3),a=16,n=a*2,o=e*n,i=new Float32Array(o*3),l=new Float32Array(o*3),s=new Float32Array(o*4),u=0;for(let v=0;v<e;v++){let d=2*Math.PI*r(),c=Math.acos(2*r()-1),h=new H.Vector3(Math.cos(d)*Math.sin(c),Math.sin(d)*Math.sin(c),Math.cos(c)),g=r(),m=r(),w=r(),x=r();for(let C=0;C<a;C++){let S=C/a;for(let _=-1;_<=1;_+=2){let b=u*3;i[b]=S,i[b+1]=v/e,i[b+2]=_,l[b]=h.x,l[b+1]=h.y,l[b+2]=h.z,s[u*4]=g,s[u*4+1]=m,s[u*4+2]=w,s[u*4+3]=x,u++}}}let p=new H.BufferGeometry;return p.setAttribute("aPos",new H.BufferAttribute(i,3)),p.setAttribute("aPos0",new H.BufferAttribute(l,3)),p.setAttribute("aWireRandom",new H.BufferAttribute(s,4)),p}function xa(e,t){let r=$(t+6e3),a=8,n=a*2,o=e*n,i=new Float32Array(o*3),l=new Float32Array(o*3),s=new Float32Array(o*3),u=new Float32Array(o*4),p=0;for(let d=0;d<e;d++){let c=2*Math.PI*r(),h=Math.acos(2*r()-1),g=new H.Vector3(Math.cos(c)*Math.sin(h),Math.sin(c)*Math.sin(h),Math.cos(h)),m=.9+r()*.1,w=1.2+r()*1,x=g.clone().multiplyScalar(m),C=g.clone().multiplyScalar(w),S=r(),_=r(),b=.3+r()*.7,M=r();for(let R=0;R<a;R++){let D=R/a;for(let A=-1;A<=1;A+=2){let O=p*3;i[O]=D,i[O+1]=d/e,i[O+2]=A,l[O]=x.x,l[O+1]=x.y,l[O+2]=x.z,s[O]=C.x,s[O+1]=C.y,s[O+2]=C.z,u[p*4]=S,u[p*4+1]=_,u[p*4+2]=b,u[p*4+3]=M,p++}}}let v=new H.BufferGeometry;return v.setAttribute("aPos",new H.BufferAttribute(i,3)),v.setAttribute("aPos0",new H.BufferAttribute(l,3)),v.setAttribute("aPos1",new H.BufferAttribute(s,3)),v.setAttribute("aWireRandom",new H.BufferAttribute(u,4)),v}function ba(){let e=[],t=[];for(let o=0;o<=32;o++){let l=o/32*2*Math.PI,s=Math.cos(l),u=Math.sin(l),p=.1,v=1;for(let d=0;d<2;d++){let c=d===0?p:v;t.push(s*c,u*c,d),e.push(o*2+d)}}let a=[];for(let o=0;o<32;o++){let i=o*2,l=o*2+1,s=(o+1)*2,u=(o+1)*2+1;a.push(i,s,l),a.push(l,s,u)}let n=new H.BufferGeometry;return n.setAttribute("aPos",new H.BufferAttribute(new Float32Array(t),3)),n.setIndex(new H.BufferAttribute(new Uint16Array(a),1)),n}function Ca(e){return new H.ShaderMaterial({uniforms:{uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uLength:{value:e.length},uWidth:{value:e.width},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new H.Vector3(0,0,2.5)},uViewProjection:{value:new H.Matrix4},uOpacity:{value:e.opacity},uAlphaBlended:{value:1},uSpectralColor:{value:e.spectralColor||new H.Color(1,1,1)}},vertexShader:Ol,fragmentShader:Fl,transparent:!0,depthWrite:!1,blending:H.AdditiveBlending})}function Ma(e){return new H.ShaderMaterial({uniforms:{uWidth:{value:e.width},uAmp:{value:e.amp},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new H.Vector3(0,0,2.5)},uViewProjection:{value:new H.Matrix4},uOpacity:{value:e.opacity},uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uAlphaBlended:{value:.75},uSpectralColor:{value:e.spectralColor||new H.Color(1,1,1)}},vertexShader:zl,fragmentShader:Hl,transparent:!0,depthWrite:!1,blending:H.AdditiveBlending})}function Sa(e){return new H.ShaderMaterial({uniforms:{uTint:{value:e.tint},uBrightness:{value:e.brightness},uFalloffColor:{value:e.falloffColor},uSpectralColor:{value:e.spectralColor||new H.Color(1,1,1)},uViewProjection:{value:new H.Matrix4},uRadius:{value:e.radius},uCamUp:{value:new H.Vector3(0,1,0)},uCamPos:{value:new H.Vector3(0,0,2.5)}},vertexShader:Dl,fragmentShader:Wl,transparent:!0,depthWrite:!1,blending:H.AdditiveBlending,side:H.DoubleSide})}var St,Q,le,we,Ce,dr,hr,be=null,Se=null,ke=null,_e=null,pr=null,Ta=null,Pa=null,Qe=null,et=null,tt=null,rt=null,nt=null,Tt=null,Mt=null,Pt=null,xe=null,ee=null,ie=null,se=null,te=null,Ea="quads",fn=!1;function Ra(){return le}function pn(e){we.azimuthAngle=-e,we.update()}function Ba(e){St=new T.WebGLRenderer({canvas:e,antialias:!0}),St.setSize(e.width,e.height),St.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q=new T.Scene,Q.background=new T.Color(329740),le=new T.PerspectiveCamera(45,e.width/e.height,.1,50),le.position.set(0,0,2.5),we=new Il(le,e),we.enableDamping=!0,we.dampingFactor=.1,we.rotateSpeed=.5,we.minDistance=.8,we.maxDistance=8,we.target.set(0,0,0),we.update(),Ce=da(),dr=ha(),hr=va(),fn=!0}var cn={scale:1,turbulence:2,blur:.5,colorA:new T.Color(16775408),colorB:new T.Color(15788208),colorC:new T.Color(11509968),seed:0};function at(e){if(Object.assign(cn,e),_e){let t=cn;_e.uniforms.u_scale.value=t.scale,_e.uniforms.u_turbulence.value=t.turbulence,_e.uniforms.u_blur.value=t.blur,_e.uniforms.u_colorA.value.copy(t.colorA),_e.uniforms.u_colorB.value.copy(t.colorB),_e.uniforms.u_colorC.value.copy(t.colorC),_e.uniforms.u_seed.value=t.seed}}var Ue={};function Ye(e,t){Ue=t||{};let r=un(e,Ue.colorA,Ue.colorB,Ue.colorC);Ce&&(Ce.uniforms.u_colormap.value&&Ce.uniforms.u_colormap.value.dispose(),Ce.uniforms.u_colormap.value=r)}var Ll=new T.Clock;function dn(){if(!fn)return;we.update();let e=Ll.getElapsedTime();Pt&&(Pt.uniforms.u_time.value=e),ee&&(ee.uniforms.uTime.value=e);let t=new T.Matrix4().multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse);ie&&ie.material&&(ie.material.uniforms.uTime.value=e,ie.material.uniforms.uCamPos.value.copy(le.position),ie.material.uniforms.uViewProjection.value.copy(t)),se&&se.material&&(se.material.uniforms.uTime.value=e,se.material.uniforms.uCamPos.value.copy(le.position),se.material.uniforms.uViewProjection.value.copy(t)),te&&te.material&&(te.material.uniforms.uCamPos.value.copy(le.position),te.material.uniforms.uCamUp.value.copy(le.up),te.material.uniforms.uViewProjection.value.copy(t)),St.render(Q,le)}function ve(e){e&&(Q.remove(e),e.geometry&&e.geometry.dispose())}function Et(e,t,r,a,n,o,i,l){let s=e,u=t;if(ve(be),ve(Se),ve(ke),ve(xe),be=null,Se=null,ke=null,_e=null,xe=null,ee=null,l==="sun"){ql(e,t,r,a);return}if(l==="gasgiant"){let p=cn,v=new T.BufferGeometry;v.setAttribute("position",new T.BufferAttribute(new Float32Array(r.xyz),3)),v.setIndex(new T.BufferAttribute(new Uint32Array(r.I),1)),_e=ma(p),ke=new T.Mesh(v,_e),Q.add(ke);return}if(a==="quads"){let p=new T.BufferGeometry;p.setAttribute("position",new T.BufferAttribute(new Float32Array(r.xyz),3)),p.setAttribute("uv",new T.BufferAttribute(new Float32Array(r.tm),2)),p.setIndex(new T.BufferAttribute(new Uint32Array(r.I),1)),be=new T.Mesh(p,Ce),be.visible=!0,Q.add(be)}else if(a==="centroid"){let p=h=>{let g=Math.min(1,Math.max(0,u.r_moisture[h]+(o||0))),m=u.r_elevation[h]-(i||0);return m>0&&(m=(n||0)>0?m/(1+(n||0)*3):m*(1+Math.abs(n||0)*2)),[m,g]},{xyz:v,tm:d}=ea(s,u,p),c=new T.BufferGeometry;c.setAttribute("position",new T.BufferAttribute(v,3)),c.setAttribute("uv",new T.BufferAttribute(d,2)),Se=new T.Mesh(c,Ce),Se.visible=!0,Q.add(Se)}Ea=a}function Aa(e){if(!(ke||xe)){if(be&&be.geometry){let t=be.geometry.attributes.uv;t.array.set(e.tm),t.needsUpdate=!0}Se&&Se.geometry}}function hn(e){return e==="quads"?!!be:!!Se}var B={numRays:80,numFlares:40,hueSpread:.25,hue:.05,rayLength:1.5,rayWidth:.02,raysOpacity:.5,flareWidth:.03,flareAmp:.3,flaresOpacity:.4,noiseFreq:1.5,noiseAmp:1,glowTint:1.2,glowBrightness:1.5,glowFalloff:2,glowRadius:.5,sphereFresnelPower:1.5,sphereFresnelInfluence:.4,sphereTint:1.8,sphereBase:.05,sphereBrightnessOffset:0,sphereBrightness:3,sphereScale:2,sphereContrast:.15,spectralColor:new T.Color(1,1,1)};function Xe(e){Object.assign(B,e),B.spectralColor&&!B.spectralColor.isColor&&(B.spectralColor=new T.Color(B.spectralColor)),ee&&(ee.uniforms.uFresnelPower.value=B.sphereFresnelPower,ee.uniforms.uFresnelInfluence.value=B.sphereFresnelInfluence,ee.uniforms.uTint.value=B.sphereTint,ee.uniforms.uBase.value=B.sphereBase,ee.uniforms.uBrightnessOffset.value=B.sphereBrightnessOffset,ee.uniforms.uBrightness.value=B.sphereBrightness,ee.uniforms.uScale.value=B.sphereScale,ee.uniforms.uContrast.value=B.sphereContrast,ee.uniforms.uSpectralColor.value.copy(B.spectralColor)),te&&te.material&&(te.material.uniforms.uTint.value=B.glowTint,te.material.uniforms.uBrightness.value=B.glowBrightness,te.material.uniforms.uFalloffColor.value=B.glowFalloff,te.material.uniforms.uRadius.value=B.glowRadius,te.material.uniforms.uSpectralColor.value.copy(B.spectralColor)),ie&&ie.material&&(ie.material.uniforms.uWidth.value=B.rayWidth,ie.material.uniforms.uLength.value=B.rayLength,ie.material.uniforms.uOpacity.value=B.raysOpacity,ie.material.uniforms.uSpectralColor.value.copy(B.spectralColor)),se&&se.material&&(se.material.uniforms.uWidth.value=B.flareWidth,se.material.uniforms.uAmp.value=B.flareAmp,se.material.uniforms.uOpacity.value=B.flaresOpacity,se.material.uniforms.uSpectralColor.value.copy(B.spectralColor))}function ql(e,t,r,a){let n=new T.BufferGeometry;n.setAttribute("position",new T.BufferAttribute(new Float32Array(r.xyz),3)),n.setIndex(new T.BufferAttribute(new Uint32Array(r.I),1)),n.computeVertexNormals();let o=t._sunSeed||123;ee=ya(B.spectralColor);let i=new T.Mesh(n,ee),l=_a(B.numRays,o),s=Ca({hueSpread:B.hueSpread,hue:B.hue,length:B.rayLength,width:B.rayWidth,noiseFreq:B.noiseFreq,noiseAmp:B.noiseAmp,opacity:B.raysOpacity,spectralColor:B.spectralColor});ie=new T.LineSegments(l,s);let u=xa(B.numFlares,123),p=Ma({hueSpread:B.hueSpread,hue:B.hue,width:B.flareWidth,amp:B.flareAmp,noiseFreq:B.noiseFreq,noiseAmp:B.noiseAmp,opacity:B.flaresOpacity,spectralColor:B.spectralColor});se=new T.LineSegments(u,p);let v=ba(),d=Sa({tint:B.glowTint,brightness:B.glowBrightness,falloffColor:B.glowFalloff,radius:B.glowRadius,spectralColor:B.spectralColor});te=new T.Mesh(v,d),xe=new T.Group,xe.add(i),xe.add(ie),xe.add(se),xe.add(te),Q.add(xe)}function vn(e){Ea=e,be&&(be.visible=e==="quads"),Se&&(Se.visible=e==="centroid"),ke&&(ke.visible=!0),xe&&(xe.visible=!0)}function mn(e,t){let r=e.length;if(r===0)return null;let a=new Float32Array(r*3),n=new Float32Array(r*4);for(let i=0;i<r;i++)a[3*i]=e[i][0],a[3*i+1]=e[i][1],a[3*i+2]=e[i][2],n[4*i]=t[i][0],n[4*i+1]=t[i][1],n[4*i+2]=t[i][2],n[4*i+3]=t[i][3];let o=new T.BufferGeometry;return o.setAttribute("position",new T.BufferAttribute(a,3)),o.setAttribute("a_rgba",new T.BufferAttribute(n,4)),o}function ot(e,t,r,a){if(ve(pr),pr=null,a&&a!=="earthlike")return;let n=[],o=[],i=e,{t_xyz:l,s_flow:s,r_elevation:u}=t;for(let v=0;v<i.numSides;v++)if(s[v]>2){let d=i.s_begin_r(v),c=i.s_end_r(v);if(u[d]-r<0&&u[c]-r<0)continue;let h=.3*Math.sqrt(s[v]),g=i.s_inner_t(v),m=i.s_outer_t(v);n.push(l.slice(3*g,3*g+3),l.slice(3*m,3*m+3)),h>1&&(h=1);let w=[.2*h,.6*h,.9*h,h];o.push(w,w)}if(n.length===0)return;let p=mn(n,o);pr=new T.LineSegments(p,dr),Q.add(pr)}function Oa(e,t,r){if(ve(Mt),Mt=null,Pt=null,e==="sun"||!(e==="hostile"||e==="barren"&&r==="hostile"))return;Pt=ga(t);let n=new T.SphereGeometry(1.008,48,24);Mt=new T.Mesh(n,Pt),Mt.renderOrder=1,Q.add(Mt)}function Fa(e){if(e==="gasgiant"||e==="sun")return;let t=un(e,Ue.colorA,Ue.colorB,Ue.colorC);Ce&&(Ce.uniforms.u_colormap.value&&Ce.uniforms.u_colormap.value.dispose(),Ce.uniforms.u_colormap.value=t)}function gn(e,t,r){if(ve(Qe),ve(et),Qe=null,et=null,!t)return;let a=t.cultures.map(c=>{let h=c.i*.618033988749895%1,g=h+1/3,m=h,w=h-1/3,x=.7,C=.55;function S(_){_=(_%1+1)%1;let b=(1-Math.abs(2*C-1))*x,M=b*(1-Math.abs(_*6%2-1)),R=C-b/2,D,A,O;return _<1/6?[D,A,O]=[b,M,0]:_<2/6?[D,A,O]=[M,b,0]:_<3/6?[D,A,O]=[0,b,M]:_<4/6?[D,A,O]=[0,M,b]:_<5/6?[D,A,O]=[M,0,b]:[D,A,O]=[b,0,M],[D+R,A+R,O+R]}return S(h)}),n=e,{t_xyz:o,r_xyz:i}=r,{numSides:l}=n,s=new Float32Array(9*l),u=new Float32Array(9*l);for(let c=0;c<l;c++){let h=n.s_inner_t(c),g=n.s_outer_t(c),m=n.s_begin_r(c),w=a[t.cellCulture[m]]||[.2,.2,.2],x=9*c,C=9*c+3,S=9*c+6,_=0,b=0;for(let M=0;M<3;M++){let R=o[3*h+M];s[x+M]=R,_+=R*R}for(let M=0;M<3;M++)s[C+M]=i[3*m+M];for(let M=0;M<3;M++){let R=o[3*g+M];s[S+M]=R,b+=R*R}_=Math.sqrt(_),b=Math.sqrt(b);for(let M=0;M<3;M++)s[x+M]/=_,s[S+M]/=b;for(let M=0;M<3;M++)for(let R=0;R<3;R++)u[9*c+3*M+R]=w[R]}let p=new T.BufferGeometry;p.setAttribute("position",new T.BufferAttribute(s,3)),p.setAttribute("color",new T.BufferAttribute(u,3)),Qe=new T.Mesh(p,hr),Q.add(Qe);let v=[],d=[];for(let c=0;c<l;c++){let h=n.s_begin_r(c),g=n.s_end_r(c);if(t.cellState[h]!==t.cellState[g]&&t.cellState[h]>=0&&t.cellState[g]>=0){let m=n.s_inner_t(c),w=n.s_outer_t(c),x=[1,1,1,.8];v.push(o.slice(3*m,3*m+3),o.slice(3*w,3*w+3)),d.push(x,x)}}if(v.length>0){let c=mn(v,d);et=new T.LineSegments(c,dr),Q.add(et)}}function Gl(e){let t=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,a=parseInt(e.slice(5,7),16)/255;return[t,r,a]}function za(e,t,r,a){let n=e,{t_xyz:o,r_xyz:i}=t,{numSides:l}=n,s=new Float32Array(9*l),u=new Float32Array(9*l);for(let v=0;v<l;v++){let d=n.s_inner_t(v),c=n.s_outer_t(v),h=n.s_begin_r(v),g=a(r[h]),m=9*v,w=9*v+3,x=9*v+6,C=0,S=0;for(let _=0;_<3;_++){let b=o[3*d+_];s[m+_]=b,C+=b*b}for(let _=0;_<3;_++)s[w+_]=i[3*h+_];for(let _=0;_<3;_++){let b=o[3*c+_];s[x+_]=b,S+=b*b}C=Math.sqrt(C),S=Math.sqrt(S);for(let _=0;_<3;_++)s[m+_]/=C,s[x+_]/=S;for(let _=0;_<3;_++)for(let b=0;b<3;b++)u[9*v+3*_+b]=g[b]}let p=new T.BufferGeometry;return p.setAttribute("position",new T.BufferAttribute(s,3)),p.setAttribute("color",new T.BufferAttribute(u,3)),p}function yn(e,t,r){if(ve(tt),tt=null,!t)return;let a=t.states.map(i=>Gl(i.color)),n=i=>i>=0&&i<a.length?a[i]:[.2,.2,.2],o=za(e,r,t.cellState,n);tt=new T.Mesh(o,hr),Q.add(tt)}function wn(e,t,r){if(ve(rt),rt=null,!t)return;let a=t.provinces.map((i,l)=>{let s=l*.618033988749895%1,u=.7,p=.55;function v(d){d=(d%1+1)%1;let c=(1-Math.abs(2*p-1))*u,h=c*(1-Math.abs(d*6%2-1)),g=p-c/2,m,w,x;return d<1/6?[m,w,x]=[c,h,0]:d<2/6?[m,w,x]=[h,c,0]:d<3/6?[m,w,x]=[0,c,h]:d<4/6?[m,w,x]=[0,h,c]:d<5/6?[m,w,x]=[h,0,c]:[m,w,x]=[c,0,h],[m+g,w+g,x+g]}return v(s)}),n=i=>i>=0&&i<a.length?a[i]:[.2,.2,.2],o=za(e,r,t.cellProvince,n);rt=new T.Mesh(o,hr),Q.add(rt)}function _n(e,t,r){if(ve(nt),nt=null,!t)return;let a=e,{t_xyz:n}=r,o=[],i=[];for(let l=0;l<a.numSides;l++){let s=a.s_begin_r(l),u=a.s_end_r(l);if(t.cellProvince[s]!==t.cellProvince[u]&&t.cellProvince[s]>=0&&t.cellProvince[u]>=0){let p=a.s_inner_t(l),v=a.s_outer_t(l),d=[1,1,1,.8];o.push(n.slice(3*p,3*p+3),n.slice(3*v,3*v+3)),i.push(d,d)}}if(o.length>0){let l=mn(o,i);nt=new T.LineSegments(l,dr),Q.add(nt)}}function Ha(e){Ta&&(Ta.visible=e)}function Da(e){Pa&&(Pa.visible=e)}function vr(e){Qe&&(Qe.visible=e)}function mr(e){et&&(et.visible=e)}function gr(e){tt&&(tt.visible=e)}function yr(e){rt&&(rt.visible=e)}function wr(e){nt&&(nt.visible=e)}function xn(e,t,r){if(ve(Tt),Tt=null,!t||!t.burgs)return;let{r_xyz:a}=r,n=new T.Group;n.name="burgOverlay";let o=1.003,i=new Set(t.provinces.map(d=>d.burg)),l=[],s=[];for(let d of t.burgs){let c=d.cell,h=a[3*c]*o,g=a[3*c+1]*o,m=a[3*c+2]*o;d.capital||i.has(d.i)?s.push(h,g,m):l.push(h,g,m)}let u=document.createElement("canvas");u.width=64,u.height=64;let p=u.getContext("2d");p.beginPath(),p.arc(32,32,30,0,Math.PI*2),p.fillStyle="#fff",p.fill();let v=new T.CanvasTexture(u);if(l.length>0){let d=new T.BufferGeometry;d.setAttribute("position",new T.Float32BufferAttribute(l,3));let c=new T.PointsMaterial({map:v,color:13421772,size:.015,sizeAttenuation:!0,transparent:!0,opacity:.8,depthWrite:!1});n.add(new T.Points(d,c))}if(s.length>0){let d=new T.BufferGeometry;d.setAttribute("position",new T.Float32BufferAttribute(s,3));let c=new T.PointsMaterial({map:v,color:16766720,size:.04,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1});n.add(new T.Points(d,c))}Tt=n,Q.add(n)}function _r(e){Tt&&(Tt.visible=e)}function Wa(e,t){fn&&(St.setSize(e,t),le.aspect=e/t,le.updateProjectionMatrix())}var xr="bcdfghjklmnpqrstvwxz",Ia="aeiouy";function br(e){let t=2+(e()*2|0),r="";for(let a=0;a<t;a++)a>0&&e()>.6&&(r+=xr[e()*xr.length|0]),r+=xr[e()*xr.length|0],r+=Ia[e()*Ia.length|0];return r.charAt(0).toUpperCase()+r.slice(1)}function bn(e,t,r){let a=e[3*t]*e[3*r]+e[3*t+1]*e[3*r+1]+e[3*t+2]*e[3*r+2];return Math.acos(Math.max(-1,Math.min(1,a)))}function Vl(e,t){let r=new Float32Array(e.numRegions),a=[];for(let n=0;n<e.numRegions;n++){let o=t.r_elevation[n],i=t.r_moisture[n];if(o<0){r[n]=0;continue}let l=.3+.7*i;o>.6&&(l*=Math.max(0,1-(o-.6)*2)),e.r_circulate_r(a,n);for(let s of a)if(t.r_elevation[s]<0){l*=1.3;break}r[n]=Math.min(1,l)}return r}function jl(e,t){let r=[];for(let a=0;a<e.numRegions;a++)t.r_elevation[a]>=0&&r.push(a);return r}function kl(e,t,r,a,n){let o=jl(e,t);o.length<a*5&&(a=Math.max(1,o.length/5|0));let i=[],l=new Int32Array(e.numRegions);l.fill(-1);let s=[],u=o.slice().sort(()=>n()-.5),p=Math.PI/Math.sqrt(a);for(;s.length<a&&p>.001;){for(let h of u){if(s.length>=a)break;let g=!1;for(let m of s)if(bn(t.r_xyz,h,m)<p){g=!0;break}g||s.push(h)}s.length<a&&(p*=.85)}for(let h=0;h<s.length;h++){let g="Generic",m=t.r_elevation[s[h]],w=t.r_moisture[s[h]];if(m>.5)g="Highland";else if(w>.7)g="Forest";else{let C=[];e.r_circulate_r(C,s[h]);for(let S of C)if(t.r_elevation[S]<0){g="Naval";break}}let x=g==="Naval"?1.5:g==="Highland"?.7:1+n()*.5;i.push({i:h,name:br(n),center:s[h],type:g,expansionism:x,cells:0})}if(i.length===0)return{cultures:i,cellCulture:l};let v=new Float32Array(e.numRegions);v.fill(1/0);let d=new $e,c=[];for(let h of i)v[h.center]=0,l[h.center]=h.i,d.push(h.center,0);for(;d.length>0;){let h=d.pop(),g=v[h],m=l[h];if(m<0)continue;let w=i[m];e.r_circulate_r(c,h);for(let x of c){if(l[x]>=0)continue;let C=t.r_elevation[x];if(C<0)continue;let S=10;w.type==="Highland"&&C<.3?S+=30:C>.5&&(S+=20),Math.abs(t.r_moisture[x]-t.r_moisture[w.center])>.3&&(S+=15);let b=g+S/w.expansionism;b<v[x]&&(v[x]=b,l[x]=m,d.push(x,b))}}for(let h of i)h.cells=0;for(let h=0;h<e.numRegions;h++){let g=l[h];g>=0&&g<i.length&&i[g].cells++}return console.log(`[Pop] Culture cells: ${i.map(h=>`${h.name}:${h.cells}`).join(", ")}`),{cultures:i,cellCulture:l}}function Ul(e,t,r,a,n,o,i,l){i==null&&(i=1e4),l==null&&(l=a.length);let s=[],u=new Int32Array(e.numRegions);u.fill(-1);let p=[];for(let _=0;_<e.numRegions;_++)t.r_elevation[_]>=0&&n[_]>=0&&p.push(_);if(p.length<10)return{burgs:s,cellBurg:u};let v=p.map(_=>({r:_,s:r[_]*(.5+o()*.5)}));v.sort((_,b)=>b.s-_.s);let d=Math.min(50,Math.max(3,l)),c=Math.max(0,Math.min(p.length,i)),h=300/6371,g=[];for(let _ of v){if(g.length>=d)break;if(n[_.r]<0)continue;let b=!1;for(let M of g)if(bn(t.r_xyz,_.r,M)<h){b=!0;break}b||(g.push(_.r),u[_.r]=s.length,s.push({i:s.length,cell:_.r,name:br(o),capital:1,population:0,culture:n[_.r],state:-1}))}let m=50/6371,w=Math.max(1,Math.ceil(Math.PI/m)),x=w*2;function C(_){let b=t.r_xyz[3*_],M=t.r_xyz[3*_+1],R=t.r_xyz[3*_+2],D=Math.asin(Math.max(-1,Math.min(1,R))),A=Math.atan2(M,b),O=Math.floor((D+Math.PI/2)/Math.PI*w),j=Math.floor((A+Math.PI)/(2*Math.PI)*x);return O*x+j}let S=new Map;for(let _=0;_<s.length;_++){let b=C(s[_].cell);S.has(b)||S.set(b,[]),S.get(b).push(_)}for(let _ of v){if(s.length>=d+c)break;if(u[_.r]>=0||n[_.r]<0)continue;let b=!1,M=C(_.r),R=M%x,D=(M-R)/x;e:for(let A=-1;A<=1;A++){let O=D+A;if(!(O<0||O>=w))for(let j=-1;j<=1;j++){let K=((R+j)%x+x)%x,U=S.get(O*x+K);if(U){for(let E of U)if(bn(t.r_xyz,_.r,s[E].cell)<m*(1+o())){b=!0;break e}}}}b||(S.has(M)||S.set(M,[]),S.get(M).push(s.length),u[_.r]=s.length,s.push({i:s.length,cell:_.r,name:br(o),capital:0,population:0,culture:n[_.r],state:-1}))}return{burgs:s,cellBurg:u}}function Yl(e,t,r,a,n,o,i,l){let s=[],u=new Int32Array(e.numRegions);u.fill(-1);let p=a.filter(C=>C.capital);if(p=p.slice(0,l),p.length===0)return{states:[],cellState:u};for(let C of p){let S=r[C.culture],_=.8+i()*.8;s.push({i:s.length,name:C.name,capital:C.i,culture:C.culture,center:C.cell,expansionism:_*(S?S.expansionism:1),cells:0,burgs:[],color:""}),C.state=s.length-1}let v=[],d=s.map(C=>{e.r_circulate_r(v,C.center);let S=v.filter(_=>t.r_elevation[_]>=0).length;return`${C.name}(exp=${C.expansionism.toFixed(2)},cult=${r[C.culture]?.name},landNbrs=${S})`});console.log(`[Pop] State details: ${d.join(", ")}`);let c=new Float32Array(e.numRegions);c.fill(1/0);let h=new $e,g=[];for(let C of s)c[C.center]=0,u[C.center]=C.i,h.push(C.center,0);for(;h.length>0;){let C=h.pop(),S=c[C],_=u[C];if(_<0)continue;let b=s[_];e.r_circulate_r(g,C);for(let M of g){if(t.r_elevation[M]<0||u[M]>=0)continue;let R=10;o[M]!==b.culture&&(R+=100),n[M]>=0&&(R-=20),t.r_elevation[M]>.5&&(R+=30),R<1&&(R=1);let A=S+R/b.expansionism;A<2e4&&A<c[M]&&(c[M]=A,u[M]=_,h.push(M,A))}}for(let C of a)C.state<0?(C.state=u[C.cell],s[C.state]&&s[C.state].burgs.push(C.i)):s[C.state].burgs.push(C.i);for(let C of s)C.cells=0;for(let C=0;C<e.numRegions;C++){let S=u[C];S>=0&&S<s.length&&s[S].cells++}let m=s.map(C=>r[C.culture]?.name??"?");console.log(`[Pop] State cells: ${s.map(C=>`${C.name}:${C.cells}`).join(", ")}`),console.log(`[Pop] Capital cultures: ${m.join(", ")}`);let w=["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#a9a9a9","#e6beff","#ff46b8"];function x(C){let S=new Set;for(let _=0;_<e.numRegions;_++)if(u[_]===C){e.r_circulate_r(g,_);for(let b of g){let M=u[b];M>=0&&M!==C&&S.add(M)}}return[...S]}for(let C of s){let S=x(C.i).map(b=>s[b]).filter(b=>b&&b.color),_=new Set(S.map(b=>b.color));C.color=w.find(b=>!_.has(b))||"#"+(i()*16777215<<0).toString(16).padStart(6,"0")}return{states:s,cellState:u}}function Xl(e,t,r,a,n,o,i){let l=[],s=new Int32Array(e.numRegions);s.fill(-1);let u={};for(let c of r){let h=a.filter(w=>w.state===c.i);if(h.length<2){u[c.i]=[];continue}h.sort((w,x)=>(x.capital?1:0)-(w.capital?1:0));let g=Math.min(h.length,Math.max(2,h.length*.15|0)),m=h.slice(0,g);for(let w of m){let x={i:l.length,name:br(i)+" Province",state:c.i,burg:w.i,center:w.cell,cells:0};l.push(x),s[w.cell]=x.i}u[c.i]=m.map(w=>s[w.cell])}let p=new Float32Array(e.numRegions);p.fill(1/0);let v=new $e,d=[];for(let c of l)p[c.center]=0,v.push(c.center,0);for(;v.length>0;){let c=v.pop(),h=p[c],g=s[c];if(!(g<0)){e.r_circulate_r(d,c);for(let m of d){if(t.r_elevation[m]<0||n[m]!==n[c]||s[m]>=0)continue;let w=t.r_elevation[m]>.5?100:10,x=h+w;x<p[m]&&(p[m]=x,s[m]=g,v.push(m,x))}}}for(let c of l)c.cells=0;for(let c=0;c<e.numRegions;c++){let h=s[c];h>=0&&h<l.length&&l[h].cells++}return{provinces:l,cellProvince:s}}function La(e,t,r,a,n,o){let i=performance.now(),l=$(a),s=Vl(e,t),u=performance.now(),{cultures:p,cellCulture:v}=kl(e,t,s,r,l),d=performance.now(),{burgs:c,cellBurg:h}=Ul(e,t,s,p,v,l,o,n),g=performance.now(),{states:m,cellState:w}=Yl(e,t,p,c,h,v,l,n),x=performance.now(),{provinces:C,cellProvince:S}=Xl(e,t,m,c,w,h,l),_=performance.now();return{cultures:p,cellCulture:v,burgs:c,cellBurg:h,states:m,cellState:w,provinces:C,cellProvince:S,suitability:s}}var Rt=document.getElementById("output");Ba(Rt);function ce(){let e=J();e==="gasgiant"&&at({seed:f.seed}),e==="sun"&&Xe({seed:f.seed,spectralColor:f.spectralColor}),Et(P,y,ae,Ct(),ye(),Ae(),oe(),e),ot(P,y,oe(),e),Oa(e,je(),cr()),Fa(e)}function Z(){let e=J();if(e==="gasgiant"||e==="sun")return;let t=P,r=y,a=ae,n=ye(),o=Ae(),i=oe();a.applyClimate(t.numRegions,t.numTriangles,r.r_elevation,r.r_moisture,r.t_elevation,r.t_moisture,n,o,i),Aa(a),!(e==="gasgiant"||e==="sun")&&Ct()==="centroid"&&Et(P,y,ae,"centroid",n,o,i,J())}var qa=null,Zl=null,Je=null;function Ga(e){e.controllers.forEach(t=>t.updateDisplay()),e.folders.forEach(t=>Ga(t))}async function Na(){let t=await(await fetch("/api/saves")).json();return Je&&(Je.options(t.length>0?t:[""]),f.selectedSave&&t.includes(f.selectedSave)?Je.setValue(f.selectedSave):Je.setValue(t.length>0?t[t.length-1]:"")),t}async function $l(){let e=f.worldName.trim();if(!e)return;let t={planetType:J(),seed:je(),regions:Zr(),plates:$r(),jitter:Kr(),drawMode:Ct(),temperature:ye(),rainfall:Ae(),waterLevel:oe(),plateVectors:Qr(),plateBoundaries:tn(),cultures:window._numCultures||16,numStates:window._numStates||16,maxBurgs:window._maxBurgs||1e4,cultureOverlay:$t(),stateBorders:Qt(),stateOverlay:tr(),provinceOverlay:nr(),provinceBorders:or(),burgOverlay:ir(),scale:f.scale,turbulence:f.turbulence,blur:f.blur,colorA:f.colorA,colorB:f.colorB,colorC:f.colorC,barrenColorA:f.barrenColorA,barrenColorB:f.barrenColorB,barrenColorC:f.barrenColorC,airlessColorA:f.airlessColorA,airlessColorB:f.airlessColorB,airlessColorC:f.airlessColorC,barrenSubtype:f.barrenSubtype,...k,hueSpread:f.hueSpread,hue:f.hue,rayLength:f.rayLength,rayWidth:f.rayWidth,raysOpacity:f.raysOpacity,flareWidth:f.flareWidth,flareAmp:f.flareAmp,flaresOpacity:f.flaresOpacity,noiseFreq:f.noiseFreq,noiseAmp:f.noiseAmp,glowTint:f.glowTint,glowBrightness:f.glowBrightness,glowFalloff:f.glowFalloff,glowRadius:f.glowRadius,sphereFresnelPower:f.sphereFresnelPower,sphereFresnelInfluence:f.sphereFresnelInfluence,sphereTint:f.sphereTint,sphereBase:f.sphereBase,sphereBrightnessOffset:f.sphereBrightnessOffset,sphereBrightness:f.sphereBrightness,sphereScale:f.sphereScale,sphereContrast:f.sphereContrast,spectralType:f.spectralType,spectralColor:f.spectralColor};await fetch("/api/saves/"+encodeURIComponent(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),f.selectedSave=e,await Na()}async function Kl(){let e=f.selectedSave;if(!e)return;let t=await fetch("/api/saves/"+encodeURIComponent(e));if(!t.ok)return;let r=await t.json();ur(r.planetType),nn(r.barrenSubtype||"barren"),bt(r.seed),jt(r.regions),kt(r.plates),Ut(r.jitter),Yt(r.drawMode),Xt(r.temperature),Jt(r.rainfall),Zt(r.waterLevel),en(r.plateVectors),rn(r.plateBoundaries),window._numCultures=r.cultures,window._numStates=r.numStates,window._maxBurgs=r.maxBurgs,Kt(r.cultureOverlay),er(r.stateBorders),rr(r.stateOverlay),ar(r.provinceOverlay),lr(r.provinceBorders),sr(r.burgOverlay),f.planetType=r.planetType,f.seed=r.seed,f.regions=r.regions,f.plates=r.plates,f.jitter=r.jitter,f.drawMode=r.drawMode,f.temperature=r.temperature,f.rainfall=r.rainfall,f.waterLevel=r.waterLevel,f.plateVectors=r.plateVectors,f.plateBoundaries=r.plateBoundaries,f.cultures=r.cultures,f.numStates=r.numStates,f.maxBurgs=r.maxBurgs,f.cultureOverlay=r.cultureOverlay,f.stateBorders=r.stateBorders,f.stateOverlay=r.stateOverlay,f.provinceOverlay=r.provinceOverlay,f.provinceBorders=r.provinceBorders,f.burgOverlay=r.burgOverlay,f.scale=r.scale,f.turbulence=r.turbulence,f.blur=r.blur,f.colorA=r.colorA,f.colorB=r.colorB,f.colorC=r.colorC,f.barrenColorA=r.barrenColorA||it.colorA,f.barrenColorB=r.barrenColorB||it.colorB,f.barrenColorC=r.barrenColorC||it.colorC,f.airlessColorA=r.airlessColorA||st.colorA,f.airlessColorB=r.airlessColorB||st.colorB,f.airlessColorC=r.airlessColorC||st.colorC,f.barrenSubtype=r.barrenSubtype||"barren",f.hueSpread=r.hueSpread||k.hueSpread,f.hue=r.hue||k.hue,f.rayLength=r.rayLength||k.rayLength,f.rayWidth=r.rayWidth||k.rayWidth,f.raysOpacity=r.raysOpacity||k.raysOpacity,f.flareWidth=r.flareWidth||k.flareWidth,f.flareAmp=r.flareAmp||k.flareAmp,f.flaresOpacity=r.flaresOpacity||k.flaresOpacity,f.noiseFreq=r.noiseFreq||k.noiseFreq,f.noiseAmp=r.noiseAmp||k.noiseAmp,f.glowTint=r.glowTint||k.glowTint,f.glowBrightness=r.glowBrightness||k.glowBrightness,f.glowFalloff=r.glowFalloff||k.glowFalloff,f.glowRadius=r.glowRadius||k.glowRadius,f.sphereFresnelPower=r.sphereFresnelPower||k.sphereFresnelPower,f.sphereFresnelInfluence=r.sphereFresnelInfluence||k.sphereFresnelInfluence,f.sphereTint=r.sphereTint||k.sphereTint,f.sphereBase=r.sphereBase||k.sphereBase,f.sphereBrightnessOffset=r.sphereBrightnessOffset||k.sphereBrightnessOffset,f.sphereBrightness=r.sphereBrightness||k.sphereBrightness,f.sphereScale=r.sphereScale||k.sphereScale,f.sphereContrast=r.sphereContrast||k.sphereContrast,f.spectralType=r.spectralType||k.spectralType,f.spectralColor=r.spectralColor||Cr[f.spectralType]||Cr.G,f.worldName=e,Xe({hueSpread:f.hueSpread,hue:f.hue,rayLength:f.rayLength,rayWidth:f.rayWidth,raysOpacity:f.raysOpacity,flareWidth:f.flareWidth,flareAmp:f.flareAmp,flaresOpacity:f.flaresOpacity,noiseFreq:f.noiseFreq,noiseAmp:f.noiseAmp,glowTint:f.glowTint,glowBrightness:f.glowBrightness,glowFalloff:f.glowFalloff,glowRadius:f.glowRadius,sphereFresnelPower:f.sphereFresnelPower,sphereFresnelInfluence:f.sphereFresnelInfluence,sphereTint:f.sphereTint,sphereBase:f.sphereBase,sphereBrightnessOffset:f.sphereBrightnessOffset,sphereBrightness:f.sphereBrightness,sphereScale:f.sphereScale,sphereContrast:f.sphereContrast,spectralColor:f.spectralColor}),at({scale:r.scale,turbulence:r.turbulence,blur:r.blur,colorA:new ue.Color(r.colorA),colorB:new ue.Color(r.colorB),colorC:new ue.Color(r.colorC),seed:r.seed}),Ye("barren",{colorA:f.barrenColorA,colorB:f.barrenColorB,colorC:f.barrenColorC}),Ye("airless",{colorA:f.airlessColorA,colorB:f.airlessColorB,colorC:f.airlessColorC}),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200),En(r.planetType),Ga(fe)}var lt={scale:1,turbulence:2,blur:.5,colorA:"#fff8f0",colorB:"#f0e8b0",colorC:"#afa0d0"},it={colorA:"#321408",colorB:"#aa5523",colorC:"#fae6e6"},st={colorA:"#555555",colorB:"#aaaaaa",colorC:"#eeeeee"},Cr={O:"#9bb0ff",B:"#aabfff",A:"#f8f7ff",F:"#fff4e8",G:"#fff4b5",K:"#ffc66a",M:"#ff8b5a",D:"#ffffff"},k={hueSpread:.25,hue:.05,rayLength:1.5,rayWidth:.02,raysOpacity:.5,flareWidth:.03,flareAmp:.3,flaresOpacity:.4,noiseFreq:1.5,noiseAmp:1,glowTint:1.2,glowBrightness:1.5,glowFalloff:2,glowRadius:.5,sphereFresnelPower:1.5,sphereFresnelInfluence:.4,sphereTint:1.8,sphereBase:.05,sphereBrightnessOffset:0,sphereBrightness:3,sphereScale:2,sphereContrast:.15,spectralType:"G"},f={worldName:"My World",selectedSave:"",saveWorld:$l,loadWorld:Kl,planetType:J(),seed:je(),regions:Zr(),plates:$r(),jitter:Kr(),temperature:ye(),rainfall:Ae(),waterLevel:oe(),drawMode:Ct(),plateVectors:Qr(),plateBoundaries:tn(),cultures:window._numCultures||16,numStates:window._numStates||16,maxBurgs:window._maxBurgs||1e4,cultureOverlay:$t(),stateBorders:Qt(),stateOverlay:tr(),provinceOverlay:nr(),provinceBorders:or(),burgOverlay:ir(),scale:lt.scale,turbulence:lt.turbulence,blur:lt.blur,colorA:lt.colorA,colorB:lt.colorB,colorC:lt.colorC,barrenColorA:it.colorA,barrenColorB:it.colorB,barrenColorC:it.colorC,airlessColorA:st.colorA,airlessColorB:st.colorB,airlessColorC:st.colorC,barrenSubtype:cr(),...k,spectralColor:Cr.G,newPlanet:()=>{let e=je()+1;f.seed=e,bt(e),at({seed:e}),Xe({seed:e}),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200),qa&&qa.updateDisplay()},applyPopulation:()=>{window.applyPopulation()}},fe=new Jl({title:"Planet Generator",width:300});Je=fe.add(f,"selectedSave",[""]).name("Saved Worlds");Je.domElement.classList.add("w-70");Je.append(f,"loadWorld").name("Load").domElement.classList.add("w-30");Zl=fe.add(f,"worldName").name("World Name").append(f,"saveWorld").name("Save").domElement.classList.add("w-30");fe.add(f,"planetType",["earthlike","airless","barren","gasgiant","sun"]).name("Planet Type").onChange(e=>{ur(e),f.barrenSubtype=cr(),e==="barren"?Ye("barren",{colorA:f.barrenColorA,colorB:f.barrenColorB,colorC:f.barrenColorC}):e==="airless"&&Ye("airless",{colorA:f.airlessColorA,colorB:f.airlessColorB,colorC:f.airlessColorC}),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200),En(e)}).append(f,"newPlanet").name("New Planet").domElement.classList.add("w-50");fe.add(f,"seed",0,999999,1).name("Seed").onChange(e=>{bt(e),at({seed:e}),Xe({seed:e}),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200)});var Mr=fe.addFolder("Geography");Mr.add(f,"regions",100,1e5,100).name("Regions").onChange(e=>{jt(e),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200)});Mr.add(f,"drawMode",["quads","centroid"]).name("Draw Mode").onChange(e=>{Yt(e),!hn(e)&&J()!=="gasgiant"&&J()!=="sun"&&(Et(P,y,ae,e,ye(),Ae(),oe(),J()),ot(P,y,oe(),J())),vn(e)}).append(f,"jitter",0,1,.001).name("Jitter").onChange(e=>{Ut(e),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200)});Mr.add(f,"plates",5,100,1).name("Plates").onChange(e=>{kt(e),Vt(),ce(),Z()}).append(f,"waterLevel",-.5,.5,.01).name("Water Level").onChange(e=>{Zt(e),Z(),ot(P,y,oe(),J())});var Cn=fe.addFolder("Earthlike Options");Cn.add(f,"temperature",-1,1,.01).name("Temperature").onChange(e=>{Xt(e),Z()}).append(f,"rainfall",-.5,.5,.01).name("Rainfall").onChange(e=>{Jt(e),Z()});var Mn=Cn.addFolder("Population");Mn.add(f,"cultures",2,40,1).name("Cultures").onChange(e=>{window._numCultures=e}).append(f,"numStates",1,50,1).name("States").onChange(e=>{window._numStates=e});Mn.add(f,"maxBurgs",100,5e4,100).name("Max Burgs").onChange(e=>{window._maxBurgs=e});Mn.add(f,"applyPopulation").name("Apply Changes");function ut(){at({scale:f.scale,turbulence:f.turbulence,blur:f.blur,colorA:new ue.Color(f.colorA),colorB:new ue.Color(f.colorB),colorC:new ue.Color(f.colorC),seed:f.seed})}var Ze=fe.addFolder("Gas Giant");Ze.add(f,"scale",0,4,.01).name("Scale").onChange(ut);Ze.add(f,"turbulence",0,4,.01).name("Turbulence").onChange(ut);Ze.add(f,"blur",0,1,.01).name("Blur").onChange(ut);Ze.addColor(f,"colorA").name("Color A").onChange(ut);Ze.addColor(f,"colorB").name("Color B").onChange(ut);Ze.addColor(f,"colorC").name("Color C").onChange(ut);var At=fe.addFolder("Barren Options");At.add(f,"barrenSubtype",["barren","hostile"]).name("Subtype").onChange(e=>{nn(e),he(),ce(),Z(),setTimeout(()=>window.applyPopulation(),200)});function Sn(){Ye("barren",{colorA:f.barrenColorA,colorB:f.barrenColorB,colorC:f.barrenColorC})}function Tn(){Ye("airless",{colorA:f.airlessColorA,colorB:f.airlessColorB,colorC:f.airlessColorC})}At.addColor(f,"barrenColorA").name("Color A").onChange(Sn);At.addColor(f,"barrenColorB").name("Color B").onChange(Sn);At.addColor(f,"barrenColorC").name("Color C").onChange(Sn);var Sr=fe.addFolder("Airless Colors");Sr.addColor(f,"airlessColorA").name("Color A").onChange(Tn);Sr.addColor(f,"airlessColorB").name("Color B").onChange(Tn);Sr.addColor(f,"airlessColorC").name("Color C").onChange(Tn);function me(){Xe({hueSpread:f.hueSpread,hue:f.hue,rayLength:f.rayLength,rayWidth:f.rayWidth,raysOpacity:f.raysOpacity,flareWidth:f.flareWidth,flareAmp:f.flareAmp,flaresOpacity:f.flaresOpacity,noiseFreq:f.noiseFreq,noiseAmp:f.noiseAmp,glowTint:f.glowTint,glowBrightness:f.glowBrightness,glowFalloff:f.glowFalloff,glowRadius:f.glowRadius,sphereFresnelPower:f.sphereFresnelPower,sphereFresnelInfluence:f.sphereFresnelInfluence,sphereTint:f.sphereTint,sphereBase:f.sphereBase,sphereBrightnessOffset:f.sphereBrightnessOffset,sphereBrightness:f.sphereBrightness,sphereScale:f.sphereScale,sphereContrast:f.sphereContrast,spectralColor:f.spectralColor})}var re=fe.addFolder("Sun");re.add(f,"sphereBrightness",0,6,.1).name("Brightness").onChange(me);re.add(f,"sphereScale",.5,4,.1).name("Noise Scale").onChange(me);re.add(f,"sphereContrast",.01,.5,.01).name("Noise Contrast").onChange(me);re.add(f,"sphereTint",.5,4,.1).name("Tint").onChange(me);re.add(f,"sphereFresnelInfluence",0,1,.05).name("Fresnel").onChange(me);re.add(f,"glowRadius",.1,2,.05).name("Glow Radius").onChange(me);re.add(f,"glowBrightness",0,4,.1).name("Glow Brightness").onChange(me);re.add(f,"rayLength",.5,4,.1).name("Ray Length").onChange(me);re.add(f,"rayWidth",.005,.1,.005).name("Ray Width").onChange(me);re.add(f,"raysOpacity",0,1,.05).name("Rays Opacity").onChange(me);re.add(f,"flareAmp",0,1,.05).name("Flare Amp").onChange(me);re.add(f,"flaresOpacity",0,1,.05).name("Flares Opacity").onChange(me);re.add(f,"spectralType",["O","B","A","F","G","K","M","D"]).name("Spectral Type").onChange(e=>{let t=Cr[e]||"#ffffff";f.spectralColor=t,Xe({spectralColor:t})});var Pn=fe.addFolder("Overlays");Pn.add(f,"cultureOverlay").name("Cultures").onChange(e=>{Kt(e),vr(e)}).append(f,"stateOverlay").name("States").onChange(e=>{rr(e),gr(e)}).append(f,"provinceOverlay").name("Provinces").onChange(e=>{ar(e),yr(e)}).append(f,"burgOverlay").name("Burgs").onChange(e=>{sr(e),_r(e)});var Ql=Pn.addFolder("Borders");Ql.add(f,"stateBorders").name("States").onChange(e=>{er(e),mr(e)}).append(f,"provinceBorders").name("Provinces").onChange(e=>{lr(e),wr(e)});var Bt=document.createElement("div");Bt.style.cssText="padding:6px 8px;font-size:11px;line-height:1.6;color:#aaa;min-height:40px;white-space:pre-wrap;overflow-wrap:break-word;";Bt.textContent="Click planet for region info";fe.domElement.appendChild(Bt);function En(e){let t=e==="gasgiant",r=e==="sun";Ze.domElement.style.display=t?"":"none",Cn.domElement.style.display=e==="earthlike"?"":"none",Mr.domElement.style.display=t||r?"none":"",Pn.domElement.style.display=t||r?"none":"",At.domElement.style.display=e==="barren"?"":"none",Sr.domElement.style.display=e==="airless"?"":"none",re.domElement.style.display=r?"":"none"}En(J());window.getPlanetType=()=>J();window.setPlanetType=e=>{ur(e)};window.generateMesh=function(){he(),ce(),Z()};window.setSeed=e=>{bt(e)};window.getSeed=()=>je();window.setN=e=>{jt(e),he(),ce(),Z()};window.setP=e=>{kt(e),Vt(),ce(),Z()};window.setJitter=e=>{Ut(e),he(),ce(),Z()};window.setRotation=e=>{sa(e),pn(e)};window.setDrawMode=e=>{Yt(e);let t=J();!hn(e)&&t!=="gasgiant"&&t!=="sun"&&(Et(P,y,ae,e,ye(),Ae(),oe(),J()),ot(P,y,oe(),J())),vn(e)};window.setDrawPlateVectors=e=>{en(e),Ha(e)};window.setDrawPlateBoundaries=e=>{rn(e),Da(e)};window.setTempOffset=e=>{Xt(e),Z()};window.setRainOffset=e=>{Jt(e),Z()};window.setWaterLevel=e=>{Zt(e),Z(),ot(P,y,oe(),J())};window.getTempOffset=()=>ye();window.getRainOffset=()=>Ae();window.setCultureOverlay=e=>{Kt(e),vr(e)};window.setStateBorders=e=>{er(e),mr(e)};window.setStateOverlay=e=>{rr(e),gr(e)};window.setProvinceOverlay=e=>{ar(e),yr(e)};window.setProvinceBorders=e=>{lr(e),wr(e)};window.setBurgOverlay=e=>{sr(e),_r(e)};window.applyPopulation=()=>{if(!P||!y.r_elevation)return;let e=J();if(e==="sun")return;if(e!=="earthlike"){window._population=null,gn(null,null,null),yn(null,null,null),wn(null,null,null),_n(null,null,null),xn(null,null,null);return}let t=La(P,y,window._numCultures||8,je(),window._numStates||16,window._maxBurgs||1e4);window._population=t,gn(P,t,y),yn(P,t,y),wn(P,t,y),_n(P,t,y),xn(P,t,y),vr($t()),mr(Qt()),gr(tr()),yr(nr()),wr(or()),_r(ir())};window.getNumCultures=()=>window._numCultures||16;window.setNumCultures=e=>{window._numCultures=e};window.pickRegion=function(e,t){if(!P||!y.r_xyz)return null;let r=Ra(),a=new ue.Raycaster,n=new ue.Vector2(e,t);a.setFromCamera(n,r);let o=a.ray.origin,i=a.ray.direction,l=i.dot(i),s=2*o.dot(i),u=o.dot(o)-1,p=s*s-4*l*u;if(p<0)return null;let v=(-s-Math.sqrt(p))/(2*l);if(v<0&&(v=(-s+Math.sqrt(p))/(2*l)),v<0)return null;let d=new ue.Vector3;d.copy(i).multiplyScalar(v).add(o);let c=-1,h=1/0,g=P.numRegions,m=y.r_xyz;for(let D=0;D<g;D++){let A=d.x-m[3*D],O=d.y-m[3*D+1],j=d.z-m[3*D+2],K=A*A+O*O+j*j;K<h&&(h=K,c=D)}if(c===-1)return null;let w=y.r_elevation[c]-oe();w>0&&(w=ye()>0?w/(1+ye()*3):w*(1+Math.abs(ye())*2));let x=Math.min(1,Math.max(0,y.r_moisture[c]+Ae())),C=y.r_plate[c],S=y.plate_is_ocean.has(C),_=J(),b;_==="sun"?b="Stellar Surface":_==="gasgiant"?b="Gas Giant":_==="airless"?w<-.3?b="Crater Floor":w<0?b="Lowland Basin":w<.2?b="Mare":w<.45?b="Highland Terrain":b="Peak / Ridge":_==="barren"?f.barrenSubtype==="hostile"?w<0?b="Rift Basin":w<.15?b="Sulfurous Plain":w<.35?b="Volcanic Dome":w<.55?b="Tessera Highland":b="Mountain / Ridge":w<0?b="Depression":w<.15?b="Lowland Plain":w<.35?b="Volcanic Rise":w<.55?b="Highland":b="Polar Cap / Summit":w<0?b="Ocean":w<.1?b=x>.5?"Swamp / Marsh":"Coast / Beach":w<.25?b=x>.6?"Jungle":x>.3?"Forest":"Savanna":w<.45?b=x>.5?"Temperate Forest":"Grassland":w<.65?b=x>.4?"Taiga":"Tundra":b=x>.3?"Alpine":"Mountain / Snow";let M=y.r_elevation[c],R=w<0?25:Math.max(-15,30-45*w);return{region:c,elevation:w,rawElevation:M,effectiveElevation:w,moisture:x,temperature:R,plate:C,plateType:S?"Oceanic":"Continental",biome:b,x:m[3*c],y:m[3*c+1],z:m[3*c+2]}};Rt.addEventListener("click",function(e){let t=Rt.getBoundingClientRect(),r=e.clientX-t.left,a=e.clientY-t.top,n=r/t.width*2-1,o=-(a/t.height*2-1),i=window.pickRegion(n,o);if(!i){Bt.textContent="No region found";return}let l=window._population,s="",u="",p="";if(l&&l.cellCulture[i.region]>=0){let v=l.cellCulture[i.region];l.cultures[v]&&(s=l.cultures[v].name)}if(l&&l.cellState[i.region]>0){let v=l.cellState[i.region];l.states[v]&&(u=l.states[v].name)}if(l&&l.cellBurg[i.region]>=0){let v=l.cellBurg[i.region];l.burgs[v]&&(p=l.burgs[v].name)}Bt.innerHTML="Region "+i.region+`
Biome `+i.biome+`
Temperature `+i.temperature.toFixed(1)+` \xB0C
Elevation `+i.rawElevation.toFixed(3)+`
Moisture `+i.moisture.toFixed(3)+`
Plate `+i.plate+" ("+i.plateType+")"+(s?`
Culture `+s:"")+(u?`
State `+u:"")+(p?`
Settlement `+p:"")});he();ce();Z();pn(ia());dn();Na();function Va(){dn(),requestAnimationFrame(Va)}requestAnimationFrame(Va);window._numCultures=16;window._numStates=16;window._maxBurgs=1e4;setTimeout(()=>{window.applyPopulation()},100);function ja(){let e=Rt.clientWidth,t=Rt.clientHeight;e>0&&t>0&&Wa(e,t)}window.addEventListener("resize",ja);ja();
//# sourceMappingURL=_bundle.js.map
