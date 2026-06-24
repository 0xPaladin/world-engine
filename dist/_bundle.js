(()=>{var Ja=Object.create;var Wr=Object.defineProperty;var $a=Object.getOwnPropertyDescriptor;var Za=Object.getOwnPropertyNames;var Ka=Object.getPrototypeOf,Qa=Object.prototype.hasOwnProperty;var $e=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var zn=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},eo=(e,t)=>{for(var r in t)Wr(e,r,{get:t[r],enumerable:!0})},to=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Za(t))!Qa.call(e,a)&&a!==r&&Wr(e,a,{get:()=>t[a],enumerable:!(n=$a(t,a))||n.enumerable});return e};var He=(e,t,r)=>(r=e!=null?Ja(Ka(e)):{},to(t||!e||!e.__esModule?Wr(r,"default",{value:e,enumerable:!0}):r,e));var Gr=zn((Ir,Lr)=>{(function(){"use strict";var e=.5*(Math.sqrt(3)-1),t=(3-Math.sqrt(3))/6,r=1/3,n=1/6,a=(Math.sqrt(5)-1)/4,o=(5-Math.sqrt(5))/20;function l(u){var c;typeof u=="function"?c=u:u?c=s(u):c=Math.random,this.p=i(c),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var d=0;d<512;d++)this.perm[d]=this.p[d&255],this.permMod12[d]=this.perm[d]%12}l.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(u,c){var d=this.permMod12,h=this.perm,m=this.grad3,v=0,_=0,b=0,x=(u+c)*e,w=Math.floor(u+x),S=Math.floor(c+x),y=(w+S)*t,C=w-y,M=S-y,R=u-C,F=c-M,O,H;R>F?(O=1,H=0):(O=0,H=1);var G=R-O+t,U=F-H+t,k=R-1+2*t,E=F-1+2*t,A=w&255,L=S&255,I=.5-R*R-F*F;if(I>=0){var V=d[A+h[L]]*3;I*=I,v=I*I*(m[V]*R+m[V+1]*F)}var N=.5-G*G-U*U;if(N>=0){var Y=d[A+O+h[L+H]]*3;N*=N,_=N*N*(m[Y]*G+m[Y+1]*U)}var D=.5-k*k-E*E;if(D>=0){var q=d[A+1+h[L+1]]*3;D*=D,b=D*D*(m[q]*k+m[q+1]*E)}return 70*(v+_+b)},noise3D:function(u,c,d){var h=this.permMod12,m=this.perm,v=this.grad3,_,b,x,w,S=(u+c+d)*r,y=Math.floor(u+S),C=Math.floor(c+S),M=Math.floor(d+S),R=(y+C+M)*n,F=y-R,O=C-R,H=M-R,G=u-F,U=c-O,k=d-H,E,A,L,I,V,N;G>=U?U>=k?(E=1,A=0,L=0,I=1,V=1,N=0):G>=k?(E=1,A=0,L=0,I=1,V=0,N=1):(E=0,A=0,L=1,I=1,V=0,N=1):U<k?(E=0,A=0,L=1,I=0,V=1,N=1):G<k?(E=0,A=1,L=0,I=0,V=1,N=1):(E=0,A=1,L=0,I=1,V=1,N=0);var Y=G-E+n,D=U-A+n,q=k-L+n,Q=G-I+2*n,$=U-V+2*n,ve=k-N+2*n,Se=G-1+3*n,De=U-1+3*n,We=k-1+3*n,Oe=y&255,Fe=C&255,ze=M&255,Te=.6-G*G-U*U-k*k;if(Te<0)_=0;else{var Ie=h[Oe+m[Fe+m[ze]]]*3;Te*=Te,_=Te*Te*(v[Ie]*G+v[Ie+1]*U+v[Ie+2]*k)}var Ee=.6-Y*Y-D*D-q*q;if(Ee<0)b=0;else{var Le=h[Oe+E+m[Fe+A+m[ze+L]]]*3;Ee*=Ee,b=Ee*Ee*(v[Le]*Y+v[Le+1]*D+v[Le+2]*q)}var Pe=.6-Q*Q-$*$-ve*ve;if(Pe<0)x=0;else{var Ge=h[Oe+I+m[Fe+V+m[ze+N]]]*3;Pe*=Pe,x=Pe*Pe*(v[Ge]*Q+v[Ge+1]*$+v[Ge+2]*ve)}var Re=.6-Se*Se-De*De-We*We;if(Re<0)w=0;else{var Ne=h[Oe+1+m[Fe+1+m[ze+1]]]*3;Re*=Re,w=Re*Re*(v[Ne]*Se+v[Ne+1]*De+v[Ne+2]*We)}return 32*(_+b+x+w)},noise4D:function(u,c,d,h){var m=this.perm,v=this.grad4,_,b,x,w,S,y=(u+c+d+h)*a,C=Math.floor(u+y),M=Math.floor(c+y),R=Math.floor(d+y),F=Math.floor(h+y),O=(C+M+R+F)*o,H=C-O,G=M-O,U=R-O,k=F-O,E=u-H,A=c-G,L=d-U,I=h-k,V=0,N=0,Y=0,D=0;E>A?V++:N++,E>L?V++:Y++,E>I?V++:D++,A>L?N++:Y++,A>I?N++:D++,L>I?Y++:D++;var q,Q,$,ve,Se,De,We,Oe,Fe,ze,Te,Ie;q=V>=3?1:0,Q=N>=3?1:0,$=Y>=3?1:0,ve=D>=3?1:0,Se=V>=2?1:0,De=N>=2?1:0,We=Y>=2?1:0,Oe=D>=2?1:0,Fe=V>=1?1:0,ze=N>=1?1:0,Te=Y>=1?1:0,Ie=D>=1?1:0;var Ee=E-q+o,Le=A-Q+o,Pe=L-$+o,Ge=I-ve+o,Re=E-Se+2*o,Ne=A-De+2*o,Er=L-We+2*o,Pr=I-Oe+2*o,Rr=E-Fe+3*o,Br=A-ze+3*o,Ar=L-Te+3*o,Or=I-Ie+3*o,Fr=E-1+4*o,zr=A-1+4*o,Hr=L-1+4*o,Dr=I-1+4*o,ut=C&255,ct=M&255,pt=R&255,ft=F&255,dt=.6-E*E-A*A-L*L-I*I;if(dt<0)_=0;else{var Ot=m[ut+m[ct+m[pt+m[ft]]]]%32*4;dt*=dt,_=dt*dt*(v[Ot]*E+v[Ot+1]*A+v[Ot+2]*L+v[Ot+3]*I)}var ht=.6-Ee*Ee-Le*Le-Pe*Pe-Ge*Ge;if(ht<0)b=0;else{var Ft=m[ut+q+m[ct+Q+m[pt+$+m[ft+ve]]]]%32*4;ht*=ht,b=ht*ht*(v[Ft]*Ee+v[Ft+1]*Le+v[Ft+2]*Pe+v[Ft+3]*Ge)}var mt=.6-Re*Re-Ne*Ne-Er*Er-Pr*Pr;if(mt<0)x=0;else{var zt=m[ut+Se+m[ct+De+m[pt+We+m[ft+Oe]]]]%32*4;mt*=mt,x=mt*mt*(v[zt]*Re+v[zt+1]*Ne+v[zt+2]*Er+v[zt+3]*Pr)}var vt=.6-Rr*Rr-Br*Br-Ar*Ar-Or*Or;if(vt<0)w=0;else{var Ht=m[ut+Fe+m[ct+ze+m[pt+Te+m[ft+Ie]]]]%32*4;vt*=vt,w=vt*vt*(v[Ht]*Rr+v[Ht+1]*Br+v[Ht+2]*Ar+v[Ht+3]*Or)}var gt=.6-Fr*Fr-zr*zr-Hr*Hr-Dr*Dr;if(gt<0)S=0;else{var Dt=m[ut+1+m[ct+1+m[pt+1+m[ft+1]]]]%32*4;gt*=gt,S=gt*gt*(v[Dt]*Fr+v[Dt+1]*zr+v[Dt+2]*Hr+v[Dt+3]*Dr)}return 27*(_+b+x+w+S)}};function i(u){var c,d=new Uint8Array(256);for(c=0;c<256;c++)d[c]=c;for(c=0;c<255;c++){var h=c+~~(u()*(256-c)),m=d[c];d[c]=d[h],d[h]=m}return d}l._buildPermutationTable=i;function s(){var u=0,c=0,d=0,h=1,m=f();u=m(" "),c=m(" "),d=m(" ");for(var v=0;v<arguments.length;v++)u-=m(arguments[v]),u<0&&(u+=1),c-=m(arguments[v]),c<0&&(c+=1),d-=m(arguments[v]),d<0&&(d+=1);return m=null,function(){var _=2091639*u+h*23283064365386963e-26;return u=c,c=d,d=_-(h=_|0)}}function f(){var u=4022871197;return function(c){c=c.toString();for(var d=0;d<c.length;d++){u+=c.charCodeAt(d);var h=.02519603282416938*u;u=h>>>0,h-=u,h*=u,u=h>>>0,h-=u,u+=h*4294967296}return(u>>>0)*23283064365386963e-26}}typeof define<"u"&&define.amd&&define(function(){return l}),typeof Ir<"u"?Ir.SimplexNoise=l:typeof window<"u"&&(window.SimplexNoise=l),typeof Lr<"u"&&(Lr.exports=l)})()});var jn=zn((ii,kn)=>{"use strict";var kr=class e{static s_to_t(t){return t/3|0}static s_prev_s(t){return t%3===0?t+2:t-1}static s_next_s(t){return t%3===2?t-2:t+1}constructor({numBoundaryRegions:t,numSolidSides:r,_r_vertex:n,_triangles:a,_halfedges:o}){Object.assign(this,{numBoundaryRegions:t,numSolidSides:r,_r_vertex:n,_triangles:a,_halfedges:o}),this._t_vertex=[],this._update()}update(t,r){this._r_vertex=t,this._triangles=r.triangles,this._halfedges=r.halfedges,this._update()}_update(){let{_triangles:t,_halfedges:r,_r_vertex:n,_t_vertex:a}=this;if(this.numSides=t.length,this.numRegions=n.length,this.numSolidRegions=this.numRegions-1,this.numTriangles=this.numSides/3,this.numSolidTriangles=this.numSolidSides/3,this._t_vertex.length<this.numTriangles){let o=a.length,l=this.numTriangles-o;a=a.concat(new Array(l));for(let i=o;i<this.numTriangles;i++)a[i]=[0,0];this._t_vertex=a}this._r_in_s=new Int32Array(this.numRegions);for(let o=0;o<t.length;o++){let l=t[e.s_next_s(o)];(this._r_in_s[l]===0||r[o]===-1)&&(this._r_in_s[l]=o)}for(let o=0;o<t.length;o+=3){let l=o/3,i=n[t[o]],s=n[t[o+1]],f=n[t[o+2]];if(this.s_ghost(o)){let u=s[0]-i[0],c=s[1]-i[1],d=10/Math.sqrt(u*u+c*c);a[l][0]=.5*(i[0]+s[0])+c*d,a[l][1]=.5*(i[1]+s[1])-u*d}else a[l][0]=(i[0]+s[0]+f[0])/3,a[l][1]=(i[1]+s[1]+f[1])/3}}static fromDelaunator(t,r){return new e({numBoundaryRegions:0,numSolidSides:r.triangles.length,_r_vertex:t,_triangles:r.triangles,_halfedges:r.halfedges})}r_x(t){return this._r_vertex[t][0]}r_y(t){return this._r_vertex[t][1]}t_x(t){return this._t_vertex[t][0]}t_y(t){return this._t_vertex[t][1]}r_pos(t,r){return t.length=2,t[0]=this.r_x(r),t[1]=this.r_y(r),t}t_pos(t,r){return t.length=2,t[0]=this.t_x(r),t[1]=this.t_y(r),t}s_begin_r(t){return this._triangles[t]}s_end_r(t){return this._triangles[e.s_next_s(t)]}s_inner_t(t){return e.s_to_t(t)}s_outer_t(t){return e.s_to_t(this._halfedges[t])}s_next_s(t){return e.s_next_s(t)}s_prev_s(t){return e.s_prev_s(t)}s_opposite_s(t){return this._halfedges[t]}t_circulate_s(t,r){t.length=3;for(let n=0;n<3;n++)t[n]=3*r+n;return t}t_circulate_r(t,r){t.length=3;for(let n=0;n<3;n++)t[n]=this._triangles[3*r+n];return t}t_circulate_t(t,r){t.length=3;for(let n=0;n<3;n++)t[n]=this.s_outer_t(3*r+n);return t}r_circulate_s(t,r){let n=this._r_in_s[r],a=n;t.length=0;do{t.push(this._halfedges[a]);let o=e.s_next_s(a);a=this._halfedges[o]}while(a!==-1&&a!==n);return t}r_circulate_r(t,r){let n=this._r_in_s[r],a=n;t.length=0;do{t.push(this.s_begin_r(a));let o=e.s_next_s(a);a=this._halfedges[o]}while(a!==-1&&a!==n);return t}r_circulate_t(t,r){let n=this._r_in_s[r],a=n;t.length=0;do{t.push(e.s_to_t(a));let o=e.s_next_s(a);a=this._halfedges[o]}while(a!==-1&&a!==n);return t}ghost_r(){return this.numRegions-1}s_ghost(t){return t>=this.numSolidSides}r_ghost(t){return t===this.numRegions-1}t_ghost(t){return this.s_ghost(3*t)}s_boundary(t){return this.s_ghost(t)&&t%3===0}r_boundary(t){return t<this.numBoundaryRegions}};kn.exports=kr});var ue=He($e("three"));var Jr=He(Gr());var Be=class{constructor(t=1/0,r=Float64Array,n=Uint32Array){let a=t!==1/0;this.ids=a?new n(t):[],this.values=a?new r(t):[],this.capacity=t,this.length=0}clear(){this.length=0}push(t,r){if(this.length===this.capacity)throw new RangeError("Queue is at capacity.");let n=this.length++;for(;n>0;){let a=n-1>>1,o=this.values[a];if(r>=o)break;this.ids[n]=this.ids[a],this.values[n]=o,n=a}this.ids[n]=t,this.values[n]=r}pop(){if(this.length===0)return;let t=this.ids,r=this.values,n=t[0],a=--this.length;if(a>0){let o=t[a],l=r[a],i=0,s=a>>1;for(;i<s;){let f=(i<<1)+1,u=f+1,c=f+(+(u<a)&+(r[u]<r[f]));if(r[c]>=l)break;t[i]=t[c],r[i]=r[c],i=c}t[i]=o,r[i]=l}return n}peek(){return this.length>0?this.ids[0]:void 0}peekValue(){return this.length>0?this.values[0]:void 0}shrink(){Array.isArray(this.ids)&&(this.ids.length=this.length),Array.isArray(this.values)&&(this.values.length=this.length)}};var Wt=1e-6,yt=typeof Float32Array<"u"?Float32Array:Array,Nr=Math.random;function It(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}var ri=Math.PI/180,ni=180/Math.PI;var te={};eo(te,{add:()=>io,angle:()=>Ao,bezier:()=>bo,ceil:()=>so,clone:()=>no,copy:()=>oo,create:()=>Hn,cross:()=>wo,dist:()=>Lo,distance:()=>Gn,div:()=>Io,divide:()=>Ln,dot:()=>qr,equals:()=>Ho,exactEquals:()=>zo,floor:()=>uo,forEach:()=>Vo,fromValues:()=>ao,hermite:()=>Co,inverse:()=>go,len:()=>No,length:()=>Dn,lerp:()=>_o,max:()=>po,min:()=>co,mul:()=>Wo,multiply:()=>In,negate:()=>vo,normalize:()=>yo,random:()=>Mo,rotateX:()=>Po,rotateY:()=>Ro,rotateZ:()=>Bo,round:()=>fo,scale:()=>ho,scaleAndAdd:()=>mo,set:()=>lo,slerp:()=>xo,sqrDist:()=>Go,sqrLen:()=>qo,squaredDistance:()=>Nn,squaredLength:()=>qn,str:()=>Fo,sub:()=>Do,subtract:()=>Wn,transformMat3:()=>To,transformMat4:()=>So,transformQuat:()=>Eo,zero:()=>Oo});function Hn(){var e=new yt(3);return yt!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function no(e){var t=new yt(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Dn(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}function ao(e,t,r){var n=new yt(3);return n[0]=e,n[1]=t,n[2]=r,n}function oo(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function lo(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function io(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function Wn(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function In(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function Ln(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function so(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function uo(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function co(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function po(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function fo(e,t){return e[0]=It(t[0]),e[1]=It(t[1]),e[2]=It(t[2]),e}function ho(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function mo(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function Gn(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return Math.sqrt(r*r+n*n+a*a)}function Nn(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return r*r+n*n+a*a}function qn(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}function vo(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function go(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function yo(e,t){var r=t[0],n=t[1],a=t[2],o=r*r+n*n+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}function qr(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wo(e,t,r){var n=t[0],a=t[1],o=t[2],l=r[0],i=r[1],s=r[2];return e[0]=a*s-o*i,e[1]=o*l-n*s,e[2]=n*i-a*l,e}function _o(e,t,r,n){var a=t[0],o=t[1],l=t[2];return e[0]=a+n*(r[0]-a),e[1]=o+n*(r[1]-o),e[2]=l+n*(r[2]-l),e}function xo(e,t,r,n){var a=Math.acos(Math.min(Math.max(qr(t,r),-1),1)),o=Math.sin(a),l=Math.sin((1-n)*a)/o,i=Math.sin(n*a)/o;return e[0]=l*t[0]+i*r[0],e[1]=l*t[1]+i*r[1],e[2]=l*t[2]+i*r[2],e}function Co(e,t,r,n,a,o){var l=o*o,i=l*(2*o-3)+1,s=l*(o-2)+o,f=l*(o-1),u=l*(3-2*o);return e[0]=t[0]*i+r[0]*s+n[0]*f+a[0]*u,e[1]=t[1]*i+r[1]*s+n[1]*f+a[1]*u,e[2]=t[2]*i+r[2]*s+n[2]*f+a[2]*u,e}function bo(e,t,r,n,a,o){var l=1-o,i=l*l,s=o*o,f=i*l,u=3*o*i,c=3*s*l,d=s*o;return e[0]=t[0]*f+r[0]*u+n[0]*c+a[0]*d,e[1]=t[1]*f+r[1]*u+n[1]*c+a[1]*d,e[2]=t[2]*f+r[2]*u+n[2]*c+a[2]*d,e}function Mo(e,t){t=t===void 0?1:t;var r=Nr()*2*Math.PI,n=Nr()*2-1,a=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*a,e[1]=Math.sin(r)*a,e[2]=n*t,e}function So(e,t,r){var n=t[0],a=t[1],o=t[2],l=r[3]*n+r[7]*a+r[11]*o+r[15];return l=l||1,e[0]=(r[0]*n+r[4]*a+r[8]*o+r[12])/l,e[1]=(r[1]*n+r[5]*a+r[9]*o+r[13])/l,e[2]=(r[2]*n+r[6]*a+r[10]*o+r[14])/l,e}function To(e,t,r){var n=t[0],a=t[1],o=t[2];return e[0]=n*r[0]+a*r[3]+o*r[6],e[1]=n*r[1]+a*r[4]+o*r[7],e[2]=n*r[2]+a*r[5]+o*r[8],e}function Eo(e,t,r){var n=r[0],a=r[1],o=r[2],l=r[3],i=t[0],s=t[1],f=t[2],u=a*f-o*s,c=o*i-n*f,d=n*s-a*i;return u=u+u,c=c+c,d=d+d,e[0]=i+l*u+a*d-o*c,e[1]=s+l*c+o*u-n*d,e[2]=f+l*d+n*c-a*u,e}function Po(e,t,r,n){var a=[],o=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],o[0]=a[0],o[1]=a[1]*Math.cos(n)-a[2]*Math.sin(n),o[2]=a[1]*Math.sin(n)+a[2]*Math.cos(n),e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function Ro(e,t,r,n){var a=[],o=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],o[0]=a[2]*Math.sin(n)+a[0]*Math.cos(n),o[1]=a[1],o[2]=a[2]*Math.cos(n)-a[0]*Math.sin(n),e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function Bo(e,t,r,n){var a=[],o=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],o[0]=a[0]*Math.cos(n)-a[1]*Math.sin(n),o[1]=a[0]*Math.sin(n)+a[1]*Math.cos(n),o[2]=a[2],e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function Ao(e,t){var r=e[0],n=e[1],a=e[2],o=t[0],l=t[1],i=t[2],s=Math.sqrt((r*r+n*n+a*a)*(o*o+l*l+i*i)),f=s&&qr(e,t)/s;return Math.acos(Math.min(Math.max(f,-1),1))}function Oo(e){return e[0]=0,e[1]=0,e[2]=0,e}function Fo(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function zo(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Ho(e,t){var r=e[0],n=e[1],a=e[2],o=t[0],l=t[1],i=t[2];return Math.abs(r-o)<=Wt*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(n-l)<=Wt*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(a-i)<=Wt*Math.max(1,Math.abs(a),Math.abs(i))}var Do=Wn,Wo=In,Io=Ln,Lo=Gn,Go=Nn,No=Dn,qo=qn,Vo=(function(){var e=Hn();return function(t,r,n,a,o,l){var i,s;for(r||(r=3),n||(n=0),a?s=Math.min(a*r+n,t.length):s=t.length,i=n;i<s;i+=r)e[0]=t[i],e[1]=t[i+1],e[2]=t[i+2],o(e,e,l),t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2];return t}})();function ko(){return(function(e){"use strict";let t="aleaPRNG 1.1.0";var r,n,a,o,l=new Uint32Array(3),i,s="";function f(h){var m=u();r=m(" "),n=m(" "),a=m(" "),o=1;for(var v=0;v<h.length;v++)r-=m(h[v]),r<0&&(r+=1),n-=m(h[v]),n<0&&(n+=1),a-=m(h[v]),a<0&&(a+=1);s=m.version,m=null}function u(){var h=4022871197,m=function(v){v=v.toString();for(var _=0,b=v.length;_<b;_++){h+=v.charCodeAt(_);var x=.02519603282416938*h;h=x>>>0,x-=h,x*=h,h=x>>>0,x-=h,h+=x*4294967296}return(h>>>0)*23283064365386963e-26};return m.version="Mash 0.9",m}function c(h){return parseInt(h,10)===h}var d=function(){var h=2091639*r+o*23283064365386963e-26;return r=n,n=a,a=h-(o=h|0)};return d.fract53=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.int32=function(){return d()*4294967296},d.cycle=function(h){h=typeof h>"u"?1:+h,h<1&&(h=1);for(var m=0;m<h;m++)d()},d.range=function(){var h,m;return arguments.length===1?(h=0,m=arguments[0]):(h=arguments[0],m=arguments[1]),arguments[0]>arguments[1]&&(h=arguments[1],m=arguments[0]),c(h)&&c(m)?Math.floor(d()*(m-h+1))+h:d()*(m-h)+h},d.restart=function(){f(i)},d.seed=function(){f(Array.prototype.slice.call(arguments))},d.version=function(){return t},d.versions=function(){return t+", "+s},e.length===0&&(window.crypto.getRandomValues(l),e=[l[0],l[1],l[2]]),i=e,f(e),d})(Array.prototype.slice.call(arguments))}var Z=ko;var Vn=Math.pow(2,-52),xt=class e{static from(t,r=Jo,n=$o){let a=t.length,o=new Float64Array(a*2);for(let l=0;l<a;l++){let i=t[l];o[2*l]=r(i),o[2*l+1]=n(i)}return new e(o)}constructor(t){let r=t.length>>1;if(r>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;let n=2*r-5,a=this.triangles=new Uint32Array(n*3),o=this.halfedges=new Int32Array(n*3);this._hashSize=Math.ceil(Math.sqrt(r));let l=this.hullPrev=new Uint32Array(r),i=this.hullNext=new Uint32Array(r),s=this.hullTri=new Uint32Array(r),f=new Int32Array(this._hashSize).fill(-1),u=new Uint32Array(r),c=1/0,d=1/0,h=-1/0,m=-1/0;for(let E=0;E<r;E++){let A=t[2*E],L=t[2*E+1];A<c&&(c=A),L<d&&(d=L),A>h&&(h=A),L>m&&(m=L),u[E]=E}let v=(c+h)/2,_=(d+m)/2,b=1/0,x,w,S;for(let E=0;E<r;E++){let A=Vr(v,_,t[2*E],t[2*E+1]);A<b&&(x=E,b=A)}let y=t[2*x],C=t[2*x+1];b=1/0;for(let E=0;E<r;E++){if(E===x)continue;let A=Vr(y,C,t[2*E],t[2*E+1]);A<b&&A>0&&(w=E,b=A)}let M=t[2*w],R=t[2*w+1],F=1/0;for(let E=0;E<r;E++){if(E===x||E===w)continue;let A=Yo(y,C,M,R,t[2*E],t[2*E+1]);A<F&&(S=E,F=A)}let O=t[2*S],H=t[2*S+1];if(F===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(Lt(y,C,M,R,O,H)){let E=w,A=M,L=R;w=S,M=O,R=H,S=E,O=A,H=L}let G=Xo(y,C,M,R,O,H);this._cx=G.x,this._cy=G.y;let U=new Float64Array(r);for(let E=0;E<r;E++)U[E]=Vr(t[2*E],t[2*E+1],G.x,G.y);_t(u,U,0,r-1),this.hullStart=x;let k=3;i[x]=l[S]=w,i[w]=l[x]=S,i[S]=l[w]=x,s[x]=0,s[w]=1,s[S]=2,f[this._hashKey(y,C)]=x,f[this._hashKey(M,R)]=w,f[this._hashKey(O,H)]=S,this.trianglesLen=0,this._addTriangle(x,w,S,-1,-1,-1);for(let E=0,A,L;E<u.length;E++){let I=u[E],V=t[2*I],N=t[2*I+1];if(E>0&&Math.abs(V-A)<=Vn&&Math.abs(N-L)<=Vn||(A=V,L=N,I===x||I===w||I===S))continue;let Y=0;for(let ve=0,Se=this._hashKey(V,N);ve<this._hashSize&&(Y=f[(Se+ve)%this._hashSize],!(Y!==-1&&Y!==i[Y]));ve++);Y=l[Y];let D=Y,q;for(;q=i[D],!Lt(V,N,t[2*D],t[2*D+1],t[2*q],t[2*q+1]);)if(D=q,D===Y){D=-1;break}if(D===-1)continue;let Q=this._addTriangle(D,I,i[D],-1,-1,s[D]);s[I]=this._legalize(Q+2),s[D]=Q,k++;let $=i[D];for(;q=i[$],Lt(V,N,t[2*$],t[2*$+1],t[2*q],t[2*q+1]);)Q=this._addTriangle($,I,q,s[I],-1,s[$]),s[I]=this._legalize(Q+2),i[$]=$,k--,$=q;if(D===Y)for(;q=l[D],Lt(V,N,t[2*q],t[2*q+1],t[2*D],t[2*D+1]);)Q=this._addTriangle(q,I,D,-1,s[D],s[q]),this._legalize(Q+2),s[q]=Q,i[D]=D,k--,D=q;this.hullStart=l[I]=D,i[D]=l[$]=I,i[I]=$,f[this._hashKey(V,N)]=I,f[this._hashKey(t[2*D],t[2*D+1])]=D}this.hull=new Uint32Array(k);for(let E=0,A=this.hullStart;E<k;E++)this.hull[E]=A,A=i[A];this.hullPrev=this.hullNext=this.hullTri=null,this.triangles=a.subarray(0,this.trianglesLen),this.halfedges=o.subarray(0,this.trianglesLen)}_hashKey(t,r){return Math.floor(jo(t-this._cx,r-this._cy)*this._hashSize)%this._hashSize}_legalize(t){let{triangles:r,coords:n,halfedges:a}=this,o=a[t],l=t-t%3,i=o-o%3,s=l+(t+1)%3,f=l+(t+2)%3,u=i+(o+2)%3;if(o===-1)return f;let c=r[f],d=r[t],h=r[s],m=r[u];if(Uo(n[2*c],n[2*c+1],n[2*d],n[2*d+1],n[2*h],n[2*h+1],n[2*m],n[2*m+1])){r[t]=m,r[o]=c;let _=a[u];if(_===-1){let x=this.hullStart;do{if(this.hullTri[x]===u){this.hullTri[x]=t;break}x=this.hullNext[x]}while(x!==this.hullStart)}this._link(t,_),this._link(o,a[f]),this._link(f,u);let b=i+(o+1)%3;return this._legalize(t),this._legalize(b)}return f}_link(t,r){this.halfedges[t]=r,r!==-1&&(this.halfedges[r]=t)}_addTriangle(t,r,n,a,o,l){let i=this.trianglesLen;return this.triangles[i]=t,this.triangles[i+1]=r,this.triangles[i+2]=n,this._link(i,a),this._link(i+1,o),this._link(i+2,l),this.trianglesLen+=3,i}};function jo(e,t){let r=e/(Math.abs(e)+Math.abs(t));return(t>0?3-r:1+r)/4}function Vr(e,t,r,n){let a=e-r,o=t-n;return a*a+o*o}function Lt(e,t,r,n,a,o){return(n-t)*(a-r)-(r-e)*(o-n)<0}function Uo(e,t,r,n,a,o,l,i){let s=e-l,f=t-i,u=r-l,c=n-i,d=a-l,h=o-i,m=s*s+f*f,v=u*u+c*c,_=d*d+h*h;return s*(c*_-v*h)-f*(u*_-v*d)+m*(u*h-c*d)<0}function Yo(e,t,r,n,a,o){let l=r-e,i=n-t,s=a-e,f=o-t,u=l*l+i*i,c=s*s+f*f,d=.5/(l*f-i*s),h=(f*u-i*c)*d,m=(l*c-s*u)*d;return h*h+m*m}function Xo(e,t,r,n,a,o){let l=r-e,i=n-t,s=a-e,f=o-t,u=l*l+i*i,c=s*s+f*f,d=.5/(l*f-i*s),h=e+(f*u-i*c)*d,m=t+(l*c-s*u)*d;return{x:h,y:m}}function _t(e,t,r,n){if(n-r<=20)for(let a=r+1;a<=n;a++){let o=e[a],l=t[o],i=a-1;for(;i>=r&&t[e[i]]>l;)e[i+1]=e[i--];e[i+1]=o}else{let a=r+n>>1,o=r+1,l=n;wt(e,a,o),t[e[r]]>t[e[n]]&&wt(e,r,n),t[e[o]]>t[e[n]]&&wt(e,o,n),t[e[r]]>t[e[o]]&&wt(e,r,o);let i=e[o],s=t[i];for(;;){do o++;while(t[e[o]]<s);do l--;while(t[e[l]]>s);if(l<o)break;wt(e,o,l)}e[r+1]=e[l],e[l]=i,n-o+1>=l-r?(_t(e,t,o,n),_t(e,t,r,l-1)):(_t(e,t,r,l-1),_t(e,t,o,n))}}function wt(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function Jo(e){return e[0]}function $o(e){return e[1]}var Un=He(jn()),Gt=[],Nt=[];function Zo(e,t,r){let n=[],a=3.6/Math.sqrt(e),o=Math.PI*(3-Math.sqrt(5)),l=2/e;for(let i=0,s=0,f=1-l/2;i!==e;i++,f-=l){let u=Math.sqrt(1-f*f),c=Math.asin(f)*180/Math.PI,d=s*180/Math.PI;Gt[i]===void 0&&(Gt[i]=r()-r()),Nt[i]===void 0&&(Nt[i]=r()-r()),c+=t*Gt[i]*(c-Math.asin(Math.max(-1,f-l*2*Math.PI*u/a))*180/Math.PI),d+=t*Nt[i]*(a/u*180/Math.PI),n.push(c,d%360),s+=o}return n}function Ko(e,t,r){let n=t/180*Math.PI,a=r/180*Math.PI;return e.push(Math.cos(n)*Math.cos(a),Math.cos(n)*Math.sin(a),Math.sin(n)),e}function Qo(e,{triangles:t,halfedges:r}){let n=t.length;function a(u){return u%3==2?u-2:u+1}let o=0,l=-1,i=[];for(let u=0;u<n;u++)r[u]===-1&&(o++,i[t[u]]=u,l=u);let s=new Int32Array(n+3*o),f=new Int32Array(n+3*o);s.set(t),f.set(r);for(let u=0,c=l;u<o;u++,c=i[s[a(c)]]){let d=n+3*u;f[c]=d,f[d]=c,s[d]=s[a(c)],s[d+1]=s[c],s[d+2]=e;let h=n+(3*u+4)%(3*o);f[d+2]=h,f[h]=d+2}return{triangles:s,halfedges:f}}function el(e){let t=Math.PI/180,r=e.length/3,n=[];for(let a=0;a<r;a++){let o=e[3*a],l=e[3*a+1],i=e[3*a+2],s=o/(1-i),f=l/(1-i);n.push(s,f)}return n}function Yn(e,t,r){Gt=[],Nt=[];let n=Zo(e,t,r),a=[];for(let s=0;s<n.length/2;s++)Ko(a,n[2*s],n[2*s+1]);let o=new xt(el(a));a.push(0,0,1),o=Qo(a.length/3-1,o);let l=[[0,0]];for(let s=1;s<e+1;s++)l[s]=l[0];return{mesh:new Un.default({numBoundaryRegions:0,numSolidSides:o.triangles.length,_r_vertex:l,_triangles:o.triangles,_halfedges:o.halfedges}),r_xyz:a}}var fe=123,qt=25e3,qe=20,$r=.75,Xn=-1,Jn="quads",$n=!1,Zn=!1,Kn=0,Qn=0,ea=0,Zr="earthlike",Kr="barren",ta=new Jr.default(Z(fe)),tl=2/3,jr=Array.from({length:5},(e,t)=>Math.pow(tl,t));function Vt(e,t,r){let n=0,a=0;for(let o=0;o<jr.length;o++){let l=1<<o;n+=jr[o]*ta.noise3D(e*l,t*l,r*l),a+=jr[o]}return n/a}function rl(e,{r_xyz:t}){let{numTriangles:r}=e,n=new Float32Array(3*r);for(let a=0;a<r;a++){let o=e.s_begin_r(3*a),l=e.s_begin_r(3*a+1),i=e.s_begin_r(3*a+2),s=t[3*o],f=t[3*o+1],u=t[3*o+2],c=t[3*l],d=t[3*l+1],h=t[3*l+2],m=t[3*i],v=t[3*i+1],_=t[3*i+2];n[3*a]=(s+c+m)/3,n[3*a+1]=(f+d+v)/3,n[3*a+2]=(u+h+_)/3}return n}function ra(e,{r_xyz:t,t_xyz:r},n){let{numSides:a}=e,o=new Float32Array(9*a),l=new Float32Array(6*a);for(let i=0;i<a;i++){let s=e.s_inner_t(i),f=e.s_outer_t(i),u=e.s_begin_r(i),c=n(u);for(let d=0;d<3;d++)o[9*i+0+d]=r[3*s+d];for(let d=0;d<3;d++)o[9*i+3+d]=t[3*u+d];for(let d=0;d<3;d++)o[9*i+6+d]=r[3*f+d];for(let d=0;d<3;d++)for(let h=0;h<2;h++)l[6*i+2*d+h]=c[h]}return{xyz:o,tm:l}}var Xr=class{constructor(){}applyClimate(t,r,n,a,o,l,i,s,f){let{tm:u}=this,c=0,d=i>0?1/(1+i*3):1+Math.abs(i)*2;for(let h=0;h<t;h++){let m=n[h]-f;u[c++]=m>0?m*d:m,u[c++]=Math.min(1,Math.max(0,a[h]+s))}for(let h=0;h<r;h++){let m=o[h]-f;u[c++]=m>0?m*d:m,u[c++]=Math.min(1,Math.max(0,l[h]+s))}}setMesh({numSides:t,numRegions:r,numTriangles:n}){this.I=new Int32Array(3*t),this.xyz=new Float32Array(3*(r+n)),this.tm=new Float32Array(2*(r+n))}setMap(t,{r_xyz:r,t_xyz:n,r_color_fn:a,s_flow:o,r_elevation:l,t_elevation:i,r_moisture:s,t_moisture:f}){let{numSides:c,numRegions:d,numTriangles:h}=t,{xyz:m,tm:v,I:_}=this;m.set(r),m.set(n,r.length);let b=0;for(let M=0;M<d;M++)v[b++]=l[M],v[b++]=s[M];for(let M=0;M<h;M++)v[b++]=i[M],v[b++]=f[M];let x=0,w=0,S=0,{_halfedges:y,_triangles:C}=t;for(let M=0;M<c;M++){let R=t.s_opposite_s(M),F=t.s_begin_r(M),O=t.s_begin_r(R),H=t.s_inner_t(M),G=t.s_inner_t(R);l[F]<0||l[O]<0||o[M]>0||o[R]>0?(_[x++]=F,_[x++]=d+G,_[x++]=d+H,w++):(_[x++]=F,_[x++]=O,_[x++]=d+H,S++)}}};function nl(e,t,r){let{numRegions:n}=e,a=new Set;for(;a.size<t&&a.size<n;)a.add(r(n));return a}function Qr(e,t){let r=new Int32Array(e.numRegions);r.fill(-1);let n=Z(fe),a=u=>Math.floor(n()*u),o=nl(e,Math.min(qe,qt),a),l=Array.from(o);for(let u of l)r[u]=u;let i=[],s=u=>Math.floor(Z(fe)()*u);for(let u=0;u<l.length;u++){let c=u+s(l.length-u),d=l[c];l[c]=l[u],e.r_circulate_r(i,d);for(let h of i)r[h]===-1&&(r[h]=r[d],l.push(h))}let f=[];for(let u of o){let c=e.r_circulate_r([],u)[0],d=t.slice(3*u,3*u+3),h=t.slice(3*c,3*c+3);f[u]=te.normalize([],te.subtract([],h,d))}return{plate_r:o,r_plate:r,plate_vec:f}}function Ur(e,t,r){let{numRegions:n}=e,a=new Float32Array(n);a.fill(1/0);let o=Z(fe),l=f=>Math.floor(o()*f),i=[];for(let f of t)i.push(f),a[f]=0;let s=[];for(let f=0;f<i.length;f++){let u=f+l(i.length-f),c=i[u];i[u]=i[f],e.r_circulate_r(s,c);for(let d of s)a[d]===1/0&&!r.has(d)&&(a[d]=a[c]+1,i.push(d))}return a}var al=.75;function ol(e,t,r,n,a){let{numRegions:l}=e,i=new Set,s=new Set,f=new Set,u=[];for(let c=0;c<l;c++){let d=1/0,h=-1;e.r_circulate_r(u,c);for(let m of u)if(n[c]!==n[m]){let v=t.slice(3*c,3*c+3),_=t.slice(3*m,3*m+3),b=te.distance(v,_),x=te.distance(te.add([],v,te.scale([],a[n[c]],.01)),te.add([],_,te.scale([],a[n[m]],.01))),w=b-x;w<d&&(h=m,d=w)}if(h!==-1){let m=d>al*.01,v=n[c],_=n[h];r.has(v)&&r.has(_)?(m?s:f).add(c):!r.has(v)&&!r.has(_)?m&&i.add(v):(m?i:s).add(c)}}return{mountain_r:i,coastline_r:s,ocean_r:f}}function en(e,{r_xyz:t,plate_is_ocean:r,r_plate:n,plate_vec:a,r_elevation:o}){let{numRegions:i}=e,{mountain_r:s,coastline_r:f,ocean_r:u}=ol(e,t,r,n,a);for(let v=0;v<i;v++)n[v]===v&&(r.has(v)?u:f).add(v);let c=new Set;for(let v of s)c.add(v);for(let v of f)c.add(v);for(let v of u)c.add(v);let d=Ur(e,s,u),h=Ur(e,u,f),m=Ur(e,f,c);for(let v=0;v<i;v++){let _=d[v]+.001,b=h[v]+.001,x=m[v]+.001;_===1/0&&b===1/0?o[v]=.1:o[v]=(1/_-1/b)/(1/_+1/b+1/x),o[v]+=.1*Vt(t[3*v],t[3*v+1],t[3*v+2])}}function ll(e,{r_elevation:t,r_moisture:r,t_elevation:n,t_moisture:a}){let{numTriangles:o}=e;for(let l=0;l<o;l++){let i=3*l,s=e.s_begin_r(i),f=e.s_begin_r(i+1),u=e.s_begin_r(i+2);n[l]=1/3*(t[s]+t[f]+t[u]),a[l]=1/3*(r[s]+r[f]+r[u])}}var Yr=new Be;function il(e,{t_elevation:t,t_downflow_s:r,order_t:n}){let{numTriangles:a}=e,o=0;r.fill(-999);for(let l=0;l<a;l++)if(t[l]<0){let i=-1,s=t[l];for(let f=0;f<3;f++){let u=3*l+f,c=t[e.s_outer_t(u)];c<s&&(s=c,i=u)}n[o++]=l,r[l]=i,Yr.push(l,t[l])}for(let l=0;l<a;l++){let i=Yr.pop();for(let s=0;s<3;s++){let f=3*i+s,u=e.s_outer_t(f);r[u]===-999&&t[u]>=0&&(r[u]=e.s_opposite_s(f),n[o++]=u,Yr.push(u,t[u]))}}}function sl(e,{order_t:t,t_elevation:r,t_moisture:n,t_downflow_s:a,t_flow:o,s_flow:l}){let{numTriangles:i,_halfedges:s}=e;l.fill(0);for(let f=0;f<i;f++)r[f]>=0?o[f]=.5*n[f]*n[f]:o[f]=0;for(let f=t.length-1;f>=0;f--){let u=t[f],c=a[u],d=s[c]/3|0;c>=0&&(o[d]+=o[u],l[c]+=o[u],r[d]>r[u]&&(r[d]=r[u]))}}var P,g={},ae=new Xr;function de(){let e=performance.now();ta=new Jr.default(Z(fe));let t=Yn(qt,$r,Z(fe));P=t.mesh,ae.setMesh(P),g.r_elevation=new Float32Array(P.numRegions),g.t_elevation=new Float32Array(P.numTriangles),g.r_moisture=new Float32Array(P.numRegions),g.t_moisture=new Float32Array(P.numTriangles),g.t_downflow_s=new Int32Array(P.numTriangles),g.order_t=new Int32Array(P.numTriangles),g.t_flow=new Float32Array(P.numTriangles),g.s_flow=new Float32Array(P.numSides),g.r_xyz=t.r_xyz,g.t_xyz=rl(P,g),kt()}function kt(){switch(Zr){case"airless":return pl();case"barren":return Kr==="hostile"?dl():fl();case"gasgiant":return hl();case"sun":return ml();default:return ul()}}function ul(){let e=Qr(P,g.r_xyz);g.plate_r=e.plate_r,g.r_plate=e.r_plate,g.plate_vec=e.plate_vec,g.plate_is_ocean=new Set;for(let t of g.plate_r)Math.floor(Z(t)()*10)<5&&g.plate_is_ocean.add(t);en(P,g);for(let t=0;t<P.numRegions;t++){let r=.5+.5*Vt(g.r_xyz[3*t],g.r_xyz[3*t+1],g.r_xyz[3*t+2]);g.r_moisture[t]=Math.max(.15,Math.min(1,r))}ll(P,g),il(P,g),sl(P,g),ae.setMap(P,g)}function cl(e,t){let r=e.numRegions,n=new Float32Array(r),a=Z(fe+9999);for(let f=0;f<r;f++)n[f]=.15*Vt(t[3*f],t[3*f+1],t[3*f+2]);let o=30+Math.floor(a()*40);for(let f=0;f<o;f++){let u=2*Math.PI*a(),c=Math.acos(2*a()-1),d=Math.cos(u)*Math.sin(c),h=Math.sin(u)*Math.sin(c),m=Math.cos(c),v=.05+a()*.2,_=.1+a()*.35,b=_*(.08+a()*.12),x=Math.cos(v*.6),w=Math.cos(v),S=Math.cos(v*1.4);for(let y=0;y<r;y++){let C=d*t[3*y]+h*t[3*y+1]+m*t[3*y+2];if(!(C<S))if(C<w){let M=(C-S)/(w-S);n[y]+=b*M}else if(C<x){let M=(C-w)/(x-w);n[y]+=b*(1-M)}else{let M=1-C,R=1-x,F=M/R;n[y]-=_*(1-F*F)}}}let l=1/0,i=-1/0;for(let f=0;f<r;f++)n[f]<l&&(l=n[f]),n[f]>i&&(i=n[f]);let s=i-l;for(let f=0;f<r;f++)n[f]=-.8+1.6*(n[f]-l)/s;return n}function pl(){g.plate_r=[0],g.r_plate=new Int32Array(P.numRegions),g.r_plate.fill(0),g.plate_vec=[te.fromValues(0,0,0)],g.plate_is_ocean=new Set,g.r_elevation=cl(P,g.r_xyz),g.r_moisture.fill(0);for(let e=0;e<P.numTriangles;e++){let t=3*e,r=P.s_begin_r(t),n=P.s_begin_r(t+1),a=P.s_begin_r(t+2);g.t_elevation[e]=(g.r_elevation[r]+g.r_elevation[n]+g.r_elevation[a])/3,g.t_moisture[e]=0}g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),ae.setMap(P,g)}function fl(){let e=Qr(P,g.r_xyz);g.plate_r=e.plate_r,g.r_plate=e.r_plate,g.plate_vec=e.plate_vec,g.plate_is_ocean=new Set,en(P,g);let t=Z(fe+7777);for(let r of g.plate_r){if(t()>.4)continue;let n=1.5+t()*1.5;g.r_elevation[r]*=n;let a=[];P.r_circulate_r(a,r);for(let o of a)g.r_elevation[o]*=1+(n-1)*.5}for(let r=0;r<P.numRegions;r++){let n=Math.asin(g.r_xyz[3*r+1]),a=Math.max(0,1-Math.abs(n)/(Math.PI/6)),o=.5+.5*Vt(g.r_xyz[3*r],g.r_xyz[3*r+1],g.r_xyz[3*r+2]);g.r_moisture[r]=Math.min(.15,o*a)}for(let r=0;r<P.numTriangles;r++){let n=3*r,a=P.s_begin_r(n),o=P.s_begin_r(n+1),l=P.s_begin_r(n+2);g.t_elevation[r]=(g.r_elevation[a]+g.r_elevation[o]+g.r_elevation[l])/3,g.t_moisture[r]=(g.r_moisture[a]+g.r_moisture[o]+g.r_moisture[l])/3}g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),ae.setMap(P,g)}function dl(){let e=qe;qe=Math.round(qe*1.5);let t=Qr(P,g.r_xyz);qe=e,g.plate_r=t.plate_r,g.r_plate=t.r_plate,g.plate_vec=t.plate_vec,g.plate_is_ocean=new Set,en(P,g);let r=Z(fe+8888),n=[];for(let a of g.plate_r){if(r()>.3)continue;let o=.3+r()*.5,l=2+Math.floor(r()*4),i=[a],s=new Set;s.add(a);for(let f=0;f<i.length&&f<l*10;f++){let u=i[f];g.r_elevation[u]+=o*(1-f/(l*10)),P.r_circulate_r(n,u);for(let c of n)!s.has(c)&&i.length<l*10&&(s.add(c),i.push(c))}}g.r_moisture.fill(0);for(let a=0;a<P.numTriangles;a++){let o=3*a,l=P.s_begin_r(o),i=P.s_begin_r(o+1),s=P.s_begin_r(o+2);g.t_elevation[a]=(g.r_elevation[l]+g.r_elevation[i]+g.r_elevation[s])/3,g.t_moisture[a]=0}g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),ae.setMap(P,g)}function hl(){g.plate_r=[0],g.r_plate=new Int32Array(P.numRegions),g.r_plate.fill(0),g.plate_vec=[te.fromValues(0,0,0)],g.plate_is_ocean=new Set,g.r_elevation.fill(0),g.r_moisture.fill(0);for(let e=0;e<P.numTriangles;e++)g.t_elevation[e]=0,g.t_moisture[e]=0;g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),ae.setMap(P,g)}function ml(){g._sunSeed=fe,g.plate_r=[0],g.r_plate=new Int32Array(P.numRegions),g.r_plate.fill(0),g.plate_vec=[te.fromValues(0,0,0)],g.plate_is_ocean=new Set,g.r_elevation.fill(.5),g.r_moisture.fill(0);for(let e=0;e<P.numTriangles;e++)g.t_elevation[e]=.5,g.t_moisture[e]=0;g.t_downflow_s.fill(-999),g.order_t.fill(0),g.t_flow.fill(0),g.s_flow.fill(0),ae.setMap(P,g)}var na=!1,aa=!1,oa=!1,la=!1,ia=!1,sa=!1;function Ve(){return fe}function Ct(e){fe=e}function tn(){return qt}function jt(e){qt=e}function rn(){return qe}function Ut(e){qe=e}function nn(){return $r}function Yt(e){$r=e}function ua(){return Xn}function ca(e){Xn=e}function bt(){return Jn}function Xt(e){Jn=e}function an(){return $n}function on(e){$n=e}function ln(){return Zn}function sn(e){Zn=e}function ge(){return Kn}function Jt(e){Kn=e}function Ae(){return Qn}function $t(e){Qn=e}function oe(){return ea}function Zt(e){ea=e}function Kt(){return na}function Qt(e){na=e}function er(){return aa}function tr(e){aa=e}function rr(){return oa}function nr(e){oa=e}function ar(){return la}function or(e){la=e}function lr(){return ia}function ir(e){ia=e}function sr(){return sa}function ur(e){sa=e}function X(){return Zr}function cr(e){Zr=e}function pr(){return Kr}function un(e){Kr=e}var T=He($e("three")),Aa=$e("three/addons/controls/OrbitControls.js");var z=He($e("three"));var be=He($e("three"));function Ze(e){let t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return[t,r,n]}function fr(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function dn(e,t,r){let n=new Uint8Array(e*t*4);for(var a=0,o=0;a<t;a++)for(let l=0;l<e;l++){let i=2*l/e-1,[s,f,u]=r(i);n[o++]=Math.min(255,Math.max(0,Math.round(s))),n[o++]=Math.min(255,Math.max(0,Math.round(f))),n[o++]=Math.min(255,Math.max(0,Math.round(u))),n[o++]=255}return n}function fn(){return dn(64,64,e=>{let t=.5,r,n,a;return e<-.135?(r=41.5,n=55.3,a=139):e<0?(r=48+48*e,n=64+64*e,a=127-12*e):(t=t*(1-e),r=210-100*t,n=185-45*t,a=139-45*t,r=255*e+r*(1-e),n=255*e+n*(1-e),a=255*e+a*(1-e)),[r,n,a]})}function gl(e,t,r){let n=Ze(e),a=Ze(t),o=Ze(r);return dn(64,64,l=>{let i=(l+1)/2;return i<.5?fr(n,a,i*2):fr(a,o,(i-.5)*2)})}function yl(e,t,r){let n=Ze(e),a=Ze(t),o=Ze(r);return dn(64,64,l=>{let i=(l+1)/2;return i<.5?fr(n,a,i*2):fr(a,o,(i-.5)*2)})}var cn={colorA:"#321408",colorB:"#aa5523",colorC:"#fae6e6"},pn={colorA:"#555555",colorB:"#aaaaaa",colorC:"#eeeeee"};function pa(e,t,r,n){switch(e){case"airless":return gl(t||pn.colorA,r||pn.colorB,n||pn.colorC);case"barren":return yl(t||cn.colorA,r||cn.colorB,n||cn.colorC);case"gasgiant":return fn();default:return fn()}}var fa=fn();function da(e){let t=new be.DataTexture(e,64,64,be.RGBAFormat);return t.wrapS=be.ClampToEdgeWrapping,t.wrapT=be.ClampToEdgeWrapping,t.magFilter=be.NearestFilter,t.minFilter=be.NearestFilter,t.needsUpdate=!0,t}function hn(e,t,r,n){return da(pa(e,t,r,n))}var xl=da(fa),ha=xl;var ma=He(Gr()),Cl=`
varying vec2 v_tm;
void main() {
    v_tm = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,bl=`
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
`;function va(){return new z.ShaderMaterial({uniforms:{u_colormap:{value:ha},u_light_angle:{value:new z.Vector2(Math.cos(Math.PI/3),Math.sin(Math.PI/3))},u_inverse_texture_size:{value:1/2048},u_d:{value:60},u_c:{value:.15},u_slope:{value:6},u_flat:{value:2.5},u_outline_strength:{value:5}},vertexShader:Cl,fragmentShader:bl,side:z.FrontSide,depthWrite:!0,depthTest:!0})}var Ml=`
attribute vec4 a_rgba;
varying vec4 v_rgba;
void main() {
    v_rgba = a_rgba;
    vec3 outward = normalize(position) * 1.002;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(outward, 1.0);
}
`,Sl=`
precision highp float;
uniform vec4 u_multiply_rgba;
uniform vec4 u_add_rgba;
varying vec4 v_rgba;
void main() {
    gl_FragColor = v_rgba * u_multiply_rgba + u_add_rgba;
}
`;function ga(){return new z.ShaderMaterial({uniforms:{u_multiply_rgba:{value:new z.Vector4(1,1,1,1)},u_add_rgba:{value:new z.Vector4(0,0,0,0)}},vertexShader:Ml,fragmentShader:Sl,transparent:!0,depthTest:!0,depthWrite:!1,blending:z.CustomBlending,blendSrc:z.OneFactor,blendDst:z.OneMinusSrcAlphaFactor,blendEquation:z.AddEquation})}function ya(){return new z.MeshBasicMaterial({vertexColors:!0,transparent:!0,opacity:.5,depthTest:!0,depthWrite:!1,depthFunc:z.LessEqualDepth})}var Tl=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,El=`
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
`,Pl=`
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
`,Rl=`
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
`;function wa(e){return new z.ShaderMaterial({uniforms:{u_scale:{value:e.scale},u_turbulence:{value:e.turbulence},u_blur:{value:e.blur},u_colorA:{value:e.colorA.clone?e.colorA:new z.Color(e.colorA)},u_colorB:{value:e.colorB.clone?e.colorB:new z.Color(e.colorB)},u_colorC:{value:e.colorC.clone?e.colorC:new z.Color(e.colorC)},u_seed:{value:e.seed}},vertexShader:Pl,fragmentShader:Rl,side:z.FrontSide,depthWrite:!0,depthTest:!0})}function _a(e){let n=new Uint8Array(524288),a=new ma.default(Z(e+12345));for(let l=0;l<256;l++)for(let i=0;i<512;i++){let s=(l*512+i)*4,f=i/512*4,u=l/256*2,c=0;c+=a.noise3D(f,u,0)*.5,c+=a.noise3D(f*2,u*2,1)*.25,c+=a.noise3D(f*4,u*4,2)*.125,c+=a.noise3D(f*8,u*8,3)*.0625,c=c*.5+.5;let d=Math.floor(c*255);n[s]=d,n[s+1]=d,n[s+2]=d,n[s+3]=255}let o=new z.DataTexture(n,512,256,z.RGBAFormat);return o.wrapS=z.RepeatWrapping,o.wrapT=z.ClampToEdgeWrapping,o.magFilter=z.LinearFilter,o.minFilter=z.LinearMipmapLinearFilter,o.needsUpdate=!0,new z.ShaderMaterial({uniforms:{u_cloud_texture:{value:o},u_time:{value:0}},vertexShader:Tl,fragmentShader:El,transparent:!0,depthTest:!0,depthWrite:!1,side:z.DoubleSide,blending:z.NormalBlending})}var W=He($e("three"));var Bl=`
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
`,Al=`
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
`,Ol=`
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
`,Fl=`
precision highp float;
${Bl}
${Al}

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
`;function xa(e){return new W.ShaderMaterial({uniforms:{uTime:{value:0},uFresnelPower:{value:1.5},uFresnelInfluence:{value:.4},uTint:{value:1.8},uBase:{value:.05},uBrightnessOffset:{value:0},uBrightness:{value:3},uSpectralColor:{value:e||new W.Color(1,1,1)},uScale:{value:2},uContrast:{value:.15}},vertexShader:Ol,fragmentShader:Fl,side:W.FrontSide,depthWrite:!0,depthTest:!0})}var Ca=`
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
`,zl=`
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

${Ca}

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
`,Hl=`
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
`,Dl=`
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

${Ca}

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
`,Wl=`
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
`,Il=`
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
`,Ll=`
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
`;function ba(e,t){let r=Z(t+5e3),n=16,a=n*2,o=e*a,l=new Float32Array(o*3),i=new Float32Array(o*3),s=new Float32Array(o*4),f=0;for(let c=0;c<e;c++){let d=2*Math.PI*r(),h=Math.acos(2*r()-1),m=new W.Vector3(Math.cos(d)*Math.sin(h),Math.sin(d)*Math.sin(h),Math.cos(h)),v=r(),_=r(),b=r(),x=r();for(let w=0;w<n;w++){let S=w/n;for(let y=-1;y<=1;y+=2){let C=f*3;l[C]=S,l[C+1]=c/e,l[C+2]=y,i[C]=m.x,i[C+1]=m.y,i[C+2]=m.z,s[f*4]=v,s[f*4+1]=_,s[f*4+2]=b,s[f*4+3]=x,f++}}}let u=new W.BufferGeometry;return u.setAttribute("aPos",new W.BufferAttribute(l,3)),u.setAttribute("aPos0",new W.BufferAttribute(i,3)),u.setAttribute("aWireRandom",new W.BufferAttribute(s,4)),u}function Ma(e,t){let r=Z(t+6e3),n=8,a=n*2,o=e*a,l=new Float32Array(o*3),i=new Float32Array(o*3),s=new Float32Array(o*3),f=new Float32Array(o*4),u=0;for(let d=0;d<e;d++){let h=2*Math.PI*r(),m=Math.acos(2*r()-1),v=new W.Vector3(Math.cos(h)*Math.sin(m),Math.sin(h)*Math.sin(m),Math.cos(m)),_=.9+r()*.1,b=1.2+r()*1,x=v.clone().multiplyScalar(_),w=v.clone().multiplyScalar(b),S=r(),y=r(),C=.3+r()*.7,M=r();for(let R=0;R<n;R++){let F=R/n;for(let O=-1;O<=1;O+=2){let H=u*3;l[H]=F,l[H+1]=d/e,l[H+2]=O,i[H]=x.x,i[H+1]=x.y,i[H+2]=x.z,s[H]=w.x,s[H+1]=w.y,s[H+2]=w.z,f[u*4]=S,f[u*4+1]=y,f[u*4+2]=C,f[u*4+3]=M,u++}}}let c=new W.BufferGeometry;return c.setAttribute("aPos",new W.BufferAttribute(l,3)),c.setAttribute("aPos0",new W.BufferAttribute(i,3)),c.setAttribute("aPos1",new W.BufferAttribute(s,3)),c.setAttribute("aWireRandom",new W.BufferAttribute(f,4)),c}function Sa(){let e=[],t=[];for(let o=0;o<=32;o++){let i=o/32*2*Math.PI,s=Math.cos(i),f=Math.sin(i),u=.1,c=1;for(let d=0;d<2;d++){let h=d===0?u:c;t.push(s*h,f*h,d),e.push(o*2+d)}}let n=[];for(let o=0;o<32;o++){let l=o*2,i=o*2+1,s=(o+1)*2,f=(o+1)*2+1;n.push(l,s,i),n.push(i,s,f)}let a=new W.BufferGeometry;return a.setAttribute("aPos",new W.BufferAttribute(new Float32Array(t),3)),a.setIndex(new W.BufferAttribute(new Uint16Array(n),1)),a}function Ta(e){return new W.ShaderMaterial({uniforms:{uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uLength:{value:e.length},uWidth:{value:e.width},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new W.Vector3(0,0,2.5)},uViewProjection:{value:new W.Matrix4},uOpacity:{value:e.opacity},uAlphaBlended:{value:1},uSpectralColor:{value:e.spectralColor||new W.Color(1,1,1)}},vertexShader:zl,fragmentShader:Hl,transparent:!0,depthWrite:!1,blending:W.AdditiveBlending})}function Ea(e){return new W.ShaderMaterial({uniforms:{uWidth:{value:e.width},uAmp:{value:e.amp},uTime:{value:0},uNoiseFrequency:{value:e.noiseFreq},uNoiseAmplitude:{value:e.noiseAmp},uCamPos:{value:new W.Vector3(0,0,2.5)},uViewProjection:{value:new W.Matrix4},uOpacity:{value:e.opacity},uHueSpread:{value:e.hueSpread},uHue:{value:e.hue},uAlphaBlended:{value:.75},uSpectralColor:{value:e.spectralColor||new W.Color(1,1,1)}},vertexShader:Dl,fragmentShader:Wl,transparent:!0,depthWrite:!1,blending:W.AdditiveBlending})}function Pa(e){return new W.ShaderMaterial({uniforms:{uTint:{value:e.tint},uBrightness:{value:e.brightness},uFalloffColor:{value:e.falloffColor},uSpectralColor:{value:e.spectralColor||new W.Color(1,1,1)},uViewProjection:{value:new W.Matrix4},uRadius:{value:e.radius},uCamUp:{value:new W.Vector3(0,1,0)},uCamPos:{value:new W.Vector3(0,0,2.5)}},vertexShader:Il,fragmentShader:Ll,transparent:!0,depthWrite:!1,blending:W.AdditiveBlending,side:W.DoubleSide})}var St,K,le,ye,Ce,hr,mr,xe=null,Me=null,ke=null,we=null,dr=null,Ra=null,Ba=null,Ke=null,Qe=null,et=null,tt=null,rt=null,Tt=null,Mt=null,Et=null,_e=null,ee=null,ie=null,se=null,re=null,Oa="quads",vn=!1;function Fa(){return le}function gn(e){ye.azimuthAngle=-e,ye.update()}function za(e){St=new T.WebGLRenderer({canvas:e,antialias:!0}),St.setSize(e.width,e.height),St.setPixelRatio(Math.min(window.devicePixelRatio,2)),K=new T.Scene,K.background=new T.Color(329740),le=new T.PerspectiveCamera(45,e.width/e.height,.1,50),le.position.set(0,0,2.5),ye=new Aa.OrbitControls(le,e),ye.enableDamping=!0,ye.dampingFactor=.1,ye.rotateSpeed=.5,ye.minDistance=.8,ye.maxDistance=8,ye.target.set(0,0,0),ye.update(),Ce=va(),hr=ga(),mr=ya(),vn=!0}var mn={scale:1,turbulence:2,blur:.5,colorA:new T.Color(16775408),colorB:new T.Color(15788208),colorC:new T.Color(11509968),seed:0};function nt(e){if(Object.assign(mn,e),we){let t=mn;we.uniforms.u_scale.value=t.scale,we.uniforms.u_turbulence.value=t.turbulence,we.uniforms.u_blur.value=t.blur,we.uniforms.u_colorA.value.copy(t.colorA),we.uniforms.u_colorB.value.copy(t.colorB),we.uniforms.u_colorC.value.copy(t.colorC),we.uniforms.u_seed.value=t.seed}}var je={};function Ue(e,t){je=t||{};let r=hn(e,je.colorA,je.colorB,je.colorC);Ce&&(Ce.uniforms.u_colormap.value&&Ce.uniforms.u_colormap.value.dispose(),Ce.uniforms.u_colormap.value=r)}var Gl=new T.Clock;function yn(){if(!vn)return;ye.update();let e=Gl.getElapsedTime();Et&&(Et.uniforms.u_time.value=e),ee&&(ee.uniforms.uTime.value=e);let t=new T.Matrix4().multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse);ie&&ie.material&&(ie.material.uniforms.uTime.value=e,ie.material.uniforms.uCamPos.value.copy(le.position),ie.material.uniforms.uViewProjection.value.copy(t)),se&&se.material&&(se.material.uniforms.uTime.value=e,se.material.uniforms.uCamPos.value.copy(le.position),se.material.uniforms.uViewProjection.value.copy(t)),re&&re.material&&(re.material.uniforms.uCamPos.value.copy(le.position),re.material.uniforms.uCamUp.value.copy(le.up),re.material.uniforms.uViewProjection.value.copy(t)),St.render(K,le)}function he(e){e&&(K.remove(e),e.geometry&&e.geometry.dispose())}function Pt(e,t,r,n,a,o,l,i){let s=e,f=t;if(he(xe),he(Me),he(ke),he(_e),xe=null,Me=null,ke=null,we=null,_e=null,ee=null,i==="sun"){Nl(e,t,r,n);return}if(i==="gasgiant"){let u=mn,c=new T.BufferGeometry;c.setAttribute("position",new T.BufferAttribute(new Float32Array(r.xyz),3)),c.setIndex(new T.BufferAttribute(new Uint32Array(r.I),1)),we=wa(u),ke=new T.Mesh(c,we),K.add(ke);return}if(n==="quads"){let u=new T.BufferGeometry;u.setAttribute("position",new T.BufferAttribute(new Float32Array(r.xyz),3)),u.setAttribute("uv",new T.BufferAttribute(new Float32Array(r.tm),2)),u.setIndex(new T.BufferAttribute(new Uint32Array(r.I),1)),xe=new T.Mesh(u,Ce),xe.visible=!0,K.add(xe)}else if(n==="centroid"){let u=m=>{let v=Math.min(1,Math.max(0,f.r_moisture[m]+(o||0))),_=f.r_elevation[m]-(l||0);return _>0&&(_=(a||0)>0?_/(1+(a||0)*3):_*(1+Math.abs(a||0)*2)),[_,v]},{xyz:c,tm:d}=ra(s,f,u),h=new T.BufferGeometry;h.setAttribute("position",new T.BufferAttribute(c,3)),h.setAttribute("uv",new T.BufferAttribute(d,2)),Me=new T.Mesh(h,Ce),Me.visible=!0,K.add(Me)}Oa=n}function Ha(e){if(!(ke||_e)){if(xe&&xe.geometry){let t=xe.geometry.attributes.uv;t.array.set(e.tm),t.needsUpdate=!0}Me&&Me.geometry}}function wn(e){return e==="quads"?!!xe:!!Me}var B={numRays:80,numFlares:40,hueSpread:.25,hue:.05,rayLength:1.5,rayWidth:.02,raysOpacity:.5,flareWidth:.03,flareAmp:.3,flaresOpacity:.4,noiseFreq:1.5,noiseAmp:1,glowTint:1.2,glowBrightness:1.5,glowFalloff:2,glowRadius:.5,sphereFresnelPower:1.5,sphereFresnelInfluence:.4,sphereTint:1.8,sphereBase:.05,sphereBrightnessOffset:0,sphereBrightness:3,sphereScale:2,sphereContrast:.15,spectralColor:new T.Color(1,1,1)};function Ye(e){Object.assign(B,e),B.spectralColor&&!B.spectralColor.isColor&&(B.spectralColor=new T.Color(B.spectralColor)),ee&&(ee.uniforms.uFresnelPower.value=B.sphereFresnelPower,ee.uniforms.uFresnelInfluence.value=B.sphereFresnelInfluence,ee.uniforms.uTint.value=B.sphereTint,ee.uniforms.uBase.value=B.sphereBase,ee.uniforms.uBrightnessOffset.value=B.sphereBrightnessOffset,ee.uniforms.uBrightness.value=B.sphereBrightness,ee.uniforms.uScale.value=B.sphereScale,ee.uniforms.uContrast.value=B.sphereContrast,ee.uniforms.uSpectralColor.value.copy(B.spectralColor)),re&&re.material&&(re.material.uniforms.uTint.value=B.glowTint,re.material.uniforms.uBrightness.value=B.glowBrightness,re.material.uniforms.uFalloffColor.value=B.glowFalloff,re.material.uniforms.uRadius.value=B.glowRadius,re.material.uniforms.uSpectralColor.value.copy(B.spectralColor)),ie&&ie.material&&(ie.material.uniforms.uWidth.value=B.rayWidth,ie.material.uniforms.uLength.value=B.rayLength,ie.material.uniforms.uOpacity.value=B.raysOpacity,ie.material.uniforms.uSpectralColor.value.copy(B.spectralColor)),se&&se.material&&(se.material.uniforms.uWidth.value=B.flareWidth,se.material.uniforms.uAmp.value=B.flareAmp,se.material.uniforms.uOpacity.value=B.flaresOpacity,se.material.uniforms.uSpectralColor.value.copy(B.spectralColor))}function Nl(e,t,r,n){let a=new T.BufferGeometry;a.setAttribute("position",new T.BufferAttribute(new Float32Array(r.xyz),3)),a.setIndex(new T.BufferAttribute(new Uint32Array(r.I),1)),a.computeVertexNormals();let o=t._sunSeed||123;ee=xa(B.spectralColor);let l=new T.Mesh(a,ee),i=ba(B.numRays,o),s=Ta({hueSpread:B.hueSpread,hue:B.hue,length:B.rayLength,width:B.rayWidth,noiseFreq:B.noiseFreq,noiseAmp:B.noiseAmp,opacity:B.raysOpacity,spectralColor:B.spectralColor});ie=new T.LineSegments(i,s);let f=Ma(B.numFlares,123),u=Ea({hueSpread:B.hueSpread,hue:B.hue,width:B.flareWidth,amp:B.flareAmp,noiseFreq:B.noiseFreq,noiseAmp:B.noiseAmp,opacity:B.flaresOpacity,spectralColor:B.spectralColor});se=new T.LineSegments(f,u);let c=Sa(),d=Pa({tint:B.glowTint,brightness:B.glowBrightness,falloffColor:B.glowFalloff,radius:B.glowRadius,spectralColor:B.spectralColor});re=new T.Mesh(c,d),_e=new T.Group,_e.add(l),_e.add(ie),_e.add(se),_e.add(re),K.add(_e)}function _n(e){Oa=e,xe&&(xe.visible=e==="quads"),Me&&(Me.visible=e==="centroid"),ke&&(ke.visible=!0),_e&&(_e.visible=!0)}function xn(e,t){let r=e.length;if(r===0)return null;let n=new Float32Array(r*3),a=new Float32Array(r*4);for(let l=0;l<r;l++)n[3*l]=e[l][0],n[3*l+1]=e[l][1],n[3*l+2]=e[l][2],a[4*l]=t[l][0],a[4*l+1]=t[l][1],a[4*l+2]=t[l][2],a[4*l+3]=t[l][3];let o=new T.BufferGeometry;return o.setAttribute("position",new T.BufferAttribute(n,3)),o.setAttribute("a_rgba",new T.BufferAttribute(a,4)),o}function at(e,t,r,n){if(he(dr),dr=null,n&&n!=="earthlike")return;let a=[],o=[],l=e,{t_xyz:i,s_flow:s,r_elevation:f}=t;for(let c=0;c<l.numSides;c++)if(s[c]>2){let d=l.s_begin_r(c),h=l.s_end_r(c);if(f[d]-r<0&&f[h]-r<0)continue;let m=.3*Math.sqrt(s[c]),v=l.s_inner_t(c),_=l.s_outer_t(c);a.push(i.slice(3*v,3*v+3),i.slice(3*_,3*_+3)),m>1&&(m=1);let b=[.2*m,.6*m,.9*m,m];o.push(b,b)}if(a.length===0)return;let u=xn(a,o);dr=new T.LineSegments(u,hr),K.add(dr)}function Da(e,t,r){if(he(Mt),Mt=null,Et=null,e==="sun"||!(e==="hostile"||e==="barren"&&r==="hostile"))return;Et=_a(t);let a=new T.SphereGeometry(1.008,48,24);Mt=new T.Mesh(a,Et),Mt.renderOrder=1,K.add(Mt)}function Wa(e){if(e==="gasgiant"||e==="sun")return;let t=hn(e,je.colorA,je.colorB,je.colorC);Ce&&(Ce.uniforms.u_colormap.value&&Ce.uniforms.u_colormap.value.dispose(),Ce.uniforms.u_colormap.value=t)}function Cn(e,t,r){if(he(Ke),he(Qe),Ke=null,Qe=null,!t)return;let n=t.cultures.map(h=>{let m=h.i*.618033988749895%1,v=m+1/3,_=m,b=m-1/3,x=.7,w=.55;function S(y){y=(y%1+1)%1;let C=(1-Math.abs(2*w-1))*x,M=C*(1-Math.abs(y*6%2-1)),R=w-C/2,F,O,H;return y<1/6?[F,O,H]=[C,M,0]:y<2/6?[F,O,H]=[M,C,0]:y<3/6?[F,O,H]=[0,C,M]:y<4/6?[F,O,H]=[0,M,C]:y<5/6?[F,O,H]=[M,0,C]:[F,O,H]=[C,0,M],[F+R,O+R,H+R]}return S(m)}),a=e,{t_xyz:o,r_xyz:l}=r,{numSides:i}=a,s=new Float32Array(9*i),f=new Float32Array(9*i);for(let h=0;h<i;h++){let m=a.s_inner_t(h),v=a.s_outer_t(h),_=a.s_begin_r(h),b=n[t.cellCulture[_]]||[.2,.2,.2],x=9*h,w=9*h+3,S=9*h+6,y=0,C=0;for(let M=0;M<3;M++){let R=o[3*m+M];s[x+M]=R,y+=R*R}for(let M=0;M<3;M++)s[w+M]=l[3*_+M];for(let M=0;M<3;M++){let R=o[3*v+M];s[S+M]=R,C+=R*R}y=Math.sqrt(y),C=Math.sqrt(C);for(let M=0;M<3;M++)s[x+M]/=y,s[S+M]/=C;for(let M=0;M<3;M++)for(let R=0;R<3;R++)f[9*h+3*M+R]=b[R]}let u=new T.BufferGeometry;u.setAttribute("position",new T.BufferAttribute(s,3)),u.setAttribute("color",new T.BufferAttribute(f,3)),Ke=new T.Mesh(u,mr),K.add(Ke);let c=[],d=[];for(let h=0;h<i;h++){let m=a.s_begin_r(h),v=a.s_end_r(h);if(t.cellState[m]!==t.cellState[v]&&t.cellState[m]>=0&&t.cellState[v]>=0){let _=a.s_inner_t(h),b=a.s_outer_t(h),x=[1,1,1,.8];c.push(o.slice(3*_,3*_+3),o.slice(3*b,3*b+3)),d.push(x,x)}}if(c.length>0){let h=xn(c,d);Qe=new T.LineSegments(h,hr),K.add(Qe)}}function ql(e){let t=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,n=parseInt(e.slice(5,7),16)/255;return[t,r,n]}function Ia(e,t,r,n){let a=e,{t_xyz:o,r_xyz:l}=t,{numSides:i}=a,s=new Float32Array(9*i),f=new Float32Array(9*i);for(let c=0;c<i;c++){let d=a.s_inner_t(c),h=a.s_outer_t(c),m=a.s_begin_r(c),v=n(r[m]),_=9*c,b=9*c+3,x=9*c+6,w=0,S=0;for(let y=0;y<3;y++){let C=o[3*d+y];s[_+y]=C,w+=C*C}for(let y=0;y<3;y++)s[b+y]=l[3*m+y];for(let y=0;y<3;y++){let C=o[3*h+y];s[x+y]=C,S+=C*C}w=Math.sqrt(w),S=Math.sqrt(S);for(let y=0;y<3;y++)s[_+y]/=w,s[x+y]/=S;for(let y=0;y<3;y++)for(let C=0;C<3;C++)f[9*c+3*y+C]=v[C]}let u=new T.BufferGeometry;return u.setAttribute("position",new T.BufferAttribute(s,3)),u.setAttribute("color",new T.BufferAttribute(f,3)),u}function bn(e,t,r){if(he(et),et=null,!t)return;let n=t.states.map(l=>ql(l.color)),a=l=>l>=0&&l<n.length?n[l]:[.2,.2,.2],o=Ia(e,r,t.cellState,a);et=new T.Mesh(o,mr),K.add(et)}function Mn(e,t,r){if(he(tt),tt=null,!t)return;let n=t.provinces.map((l,i)=>{let s=i*.618033988749895%1,f=.7,u=.55;function c(d){d=(d%1+1)%1;let h=(1-Math.abs(2*u-1))*f,m=h*(1-Math.abs(d*6%2-1)),v=u-h/2,_,b,x;return d<1/6?[_,b,x]=[h,m,0]:d<2/6?[_,b,x]=[m,h,0]:d<3/6?[_,b,x]=[0,h,m]:d<4/6?[_,b,x]=[0,m,h]:d<5/6?[_,b,x]=[m,0,h]:[_,b,x]=[h,0,m],[_+v,b+v,x+v]}return c(s)}),a=l=>l>=0&&l<n.length?n[l]:[.2,.2,.2],o=Ia(e,r,t.cellProvince,a);tt=new T.Mesh(o,mr),K.add(tt)}function Sn(e,t,r){if(he(rt),rt=null,!t)return;let n=e,{t_xyz:a}=r,o=[],l=[];for(let i=0;i<n.numSides;i++){let s=n.s_begin_r(i),f=n.s_end_r(i);if(t.cellProvince[s]!==t.cellProvince[f]&&t.cellProvince[s]>=0&&t.cellProvince[f]>=0){let u=n.s_inner_t(i),c=n.s_outer_t(i),d=[1,1,1,.8];o.push(a.slice(3*u,3*u+3),a.slice(3*c,3*c+3)),l.push(d,d)}}if(o.length>0){let i=xn(o,l);rt=new T.LineSegments(i,hr),K.add(rt)}}function La(e){Ra&&(Ra.visible=e)}function Ga(e){Ba&&(Ba.visible=e)}function vr(e){Ke&&(Ke.visible=e)}function gr(e){Qe&&(Qe.visible=e)}function yr(e){et&&(et.visible=e)}function wr(e){tt&&(tt.visible=e)}function _r(e){rt&&(rt.visible=e)}function Tn(e,t,r){if(he(Tt),Tt=null,!t||!t.burgs)return;let{r_xyz:n}=r,a=new T.Group;a.name="burgOverlay";let o=1.003,l=new Set(t.provinces.map(d=>d.burg)),i=[],s=[];for(let d of t.burgs){let h=d.cell,m=n[3*h]*o,v=n[3*h+1]*o,_=n[3*h+2]*o;d.capital||l.has(d.i)?s.push(m,v,_):i.push(m,v,_)}let f=document.createElement("canvas");f.width=64,f.height=64;let u=f.getContext("2d");u.beginPath(),u.arc(32,32,30,0,Math.PI*2),u.fillStyle="#fff",u.fill();let c=new T.CanvasTexture(f);if(i.length>0){let d=new T.BufferGeometry;d.setAttribute("position",new T.Float32BufferAttribute(i,3));let h=new T.PointsMaterial({map:c,color:13421772,size:.015,sizeAttenuation:!0,transparent:!0,opacity:.8,depthWrite:!1});a.add(new T.Points(d,h))}if(s.length>0){let d=new T.BufferGeometry;d.setAttribute("position",new T.Float32BufferAttribute(s,3));let h=new T.PointsMaterial({map:c,color:16766720,size:.04,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1});a.add(new T.Points(d,h))}Tt=a,K.add(a)}function xr(e){Tt&&(Tt.visible=e)}function Na(e,t){vn&&(St.setSize(e,t),le.aspect=e/t,le.updateProjectionMatrix())}var Cr="bcdfghjklmnpqrstvwxz",qa="aeiouy";function br(e){let t=2+(e()*2|0),r="";for(let n=0;n<t;n++)n>0&&e()>.6&&(r+=Cr[e()*Cr.length|0]),r+=Cr[e()*Cr.length|0],r+=qa[e()*qa.length|0];return r.charAt(0).toUpperCase()+r.slice(1)}function En(e,t,r){let n=e[3*t]*e[3*r]+e[3*t+1]*e[3*r+1]+e[3*t+2]*e[3*r+2];return Math.acos(Math.max(-1,Math.min(1,n)))}function kl(e,t){let r=new Float32Array(e.numRegions),n=[];for(let a=0;a<e.numRegions;a++){let o=t.r_elevation[a],l=t.r_moisture[a];if(o<0){r[a]=0;continue}let i=.3+.7*l;o>.6&&(i*=Math.max(0,1-(o-.6)*2)),e.r_circulate_r(n,a);for(let s of n)if(t.r_elevation[s]<0){i*=1.3;break}r[a]=Math.min(1,i)}return r}function jl(e,t){let r=[];for(let n=0;n<e.numRegions;n++)t.r_elevation[n]>=0&&r.push(n);return r}function Ul(e,t,r,n,a){let o=jl(e,t);o.length<n*5&&(n=Math.max(1,o.length/5|0));let l=[],i=new Int32Array(e.numRegions);i.fill(-1);let s=[],f=o.slice().sort(()=>a()-.5),u=Math.PI/Math.sqrt(n);for(;s.length<n&&u>.001;){for(let m of f){if(s.length>=n)break;let v=!1;for(let _ of s)if(En(t.r_xyz,m,_)<u){v=!0;break}v||s.push(m)}s.length<n&&(u*=.85)}for(let m=0;m<s.length;m++){let v="Generic",_=t.r_elevation[s[m]],b=t.r_moisture[s[m]];if(_>.5)v="Highland";else if(b>.7)v="Forest";else{let w=[];e.r_circulate_r(w,s[m]);for(let S of w)if(t.r_elevation[S]<0){v="Naval";break}}let x=v==="Naval"?1.5:v==="Highland"?.7:1+a()*.5;l.push({i:m,name:br(a),center:s[m],type:v,expansionism:x,cells:0})}if(l.length===0)return{cultures:l,cellCulture:i};let c=new Float32Array(e.numRegions);c.fill(1/0);let d=new Be,h=[];for(let m of l)c[m.center]=0,i[m.center]=m.i,d.push(m.center,0);for(;d.length>0;){let m=d.pop(),v=c[m],_=i[m];if(_<0)continue;let b=l[_];e.r_circulate_r(h,m);for(let x of h){if(i[x]>=0)continue;let w=t.r_elevation[x];if(w<0)continue;let S=10;b.type==="Highland"&&w<.3?S+=30:w>.5&&(S+=20),Math.abs(t.r_moisture[x]-t.r_moisture[b.center])>.3&&(S+=15);let C=v+S/b.expansionism;C<c[x]&&(c[x]=C,i[x]=_,d.push(x,C))}}for(let m of l)m.cells=0;for(let m=0;m<e.numRegions;m++){let v=i[m];v>=0&&v<l.length&&l[v].cells++}return console.log(`[Pop] Culture cells: ${l.map(m=>`${m.name}:${m.cells}`).join(", ")}`),{cultures:l,cellCulture:i}}function Yl(e,t,r,n,a,o,l,i){l==null&&(l=1e4),i==null&&(i=n.length);let s=[],f=new Int32Array(e.numRegions);f.fill(-1);let u=[];for(let y=0;y<e.numRegions;y++)t.r_elevation[y]>=0&&a[y]>=0&&u.push(y);if(u.length<10)return{burgs:s,cellBurg:f};let c=u.map(y=>({r:y,s:r[y]*(.5+o()*.5)}));c.sort((y,C)=>C.s-y.s);let d=Math.min(50,Math.max(3,i)),h=Math.max(0,Math.min(u.length,l)),m=300/6371,v=[];for(let y of c){if(v.length>=d)break;if(a[y.r]<0)continue;let C=!1;for(let M of v)if(En(t.r_xyz,y.r,M)<m){C=!0;break}C||(v.push(y.r),f[y.r]=s.length,s.push({i:s.length,cell:y.r,name:br(o),capital:1,population:0,culture:a[y.r],state:-1}))}let _=50/6371,b=Math.max(1,Math.ceil(Math.PI/_)),x=b*2;function w(y){let C=t.r_xyz[3*y],M=t.r_xyz[3*y+1],R=t.r_xyz[3*y+2],F=Math.asin(Math.max(-1,Math.min(1,R))),O=Math.atan2(M,C),H=Math.floor((F+Math.PI/2)/Math.PI*b),G=Math.floor((O+Math.PI)/(2*Math.PI)*x);return H*x+G}let S=new Map;for(let y=0;y<s.length;y++){let C=w(s[y].cell);S.has(C)||S.set(C,[]),S.get(C).push(y)}for(let y of c){if(s.length>=d+h)break;if(f[y.r]>=0||a[y.r]<0)continue;let C=!1,M=w(y.r),R=M%x,F=(M-R)/x;e:for(let O=-1;O<=1;O++){let H=F+O;if(!(H<0||H>=b))for(let G=-1;G<=1;G++){let U=((R+G)%x+x)%x,k=S.get(H*x+U);if(k){for(let E of k)if(En(t.r_xyz,y.r,s[E].cell)<_*(1+o())){C=!0;break e}}}}C||(S.has(M)||S.set(M,[]),S.get(M).push(s.length),f[y.r]=s.length,s.push({i:s.length,cell:y.r,name:br(o),capital:0,population:0,culture:a[y.r],state:-1}))}return{burgs:s,cellBurg:f}}function Xl(e,t,r,n,a,o,l,i){let s=[],f=new Int32Array(e.numRegions);f.fill(-1);let u=n.filter(w=>w.capital);if(u=u.slice(0,i),u.length===0)return{states:[],cellState:f};for(let w of u){let S=r[w.culture],y=.8+l()*.8;s.push({i:s.length,name:w.name,capital:w.i,culture:w.culture,center:w.cell,expansionism:y*(S?S.expansionism:1),cells:0,burgs:[],color:""}),w.state=s.length-1}let c=[],d=s.map(w=>{e.r_circulate_r(c,w.center);let S=c.filter(y=>t.r_elevation[y]>=0).length;return`${w.name}(exp=${w.expansionism.toFixed(2)},cult=${r[w.culture]?.name},landNbrs=${S})`});console.log(`[Pop] State details: ${d.join(", ")}`);let h=new Float32Array(e.numRegions);h.fill(1/0);let m=new Be,v=[];for(let w of s)h[w.center]=0,f[w.center]=w.i,m.push(w.center,0);for(;m.length>0;){let w=m.pop(),S=h[w],y=f[w];if(y<0)continue;let C=s[y];e.r_circulate_r(v,w);for(let M of v){if(t.r_elevation[M]<0||f[M]>=0)continue;let R=10;o[M]!==C.culture&&(R+=100),a[M]>=0&&(R-=20),t.r_elevation[M]>.5&&(R+=30),R<1&&(R=1);let O=S+R/C.expansionism;O<2e4&&O<h[M]&&(h[M]=O,f[M]=y,m.push(M,O))}}for(let w of n)w.state<0?(w.state=f[w.cell],s[w.state]&&s[w.state].burgs.push(w.i)):s[w.state].burgs.push(w.i);for(let w of s)w.cells=0;for(let w=0;w<e.numRegions;w++){let S=f[w];S>=0&&S<s.length&&s[S].cells++}let _=s.map(w=>r[w.culture]?.name??"?");console.log(`[Pop] State cells: ${s.map(w=>`${w.name}:${w.cells}`).join(", ")}`),console.log(`[Pop] Capital cultures: ${_.join(", ")}`);let b=["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#a9a9a9","#e6beff","#ff46b8"];function x(w){let S=new Set;for(let y=0;y<e.numRegions;y++)if(f[y]===w){e.r_circulate_r(v,y);for(let C of v){let M=f[C];M>=0&&M!==w&&S.add(M)}}return[...S]}for(let w of s){let S=x(w.i).map(C=>s[C]).filter(C=>C&&C.color),y=new Set(S.map(C=>C.color));w.color=b.find(C=>!y.has(C))||"#"+(l()*16777215<<0).toString(16).padStart(6,"0")}return{states:s,cellState:f}}function Jl(e,t,r,n,a,o,l){let i=[],s=new Int32Array(e.numRegions);s.fill(-1);let f={};for(let h of r){let m=n.filter(b=>b.state===h.i);if(m.length<2){f[h.i]=[];continue}m.sort((b,x)=>(x.capital?1:0)-(b.capital?1:0));let v=Math.min(m.length,Math.max(2,m.length*.15|0)),_=m.slice(0,v);for(let b of _){let x={i:i.length,name:br(l)+" Province",state:h.i,burg:b.i,center:b.cell,cells:0};i.push(x),s[b.cell]=x.i}f[h.i]=_.map(b=>s[b.cell])}let u=new Float32Array(e.numRegions);u.fill(1/0);let c=new Be,d=[];for(let h of i)u[h.center]=0,c.push(h.center,0);for(;c.length>0;){let h=c.pop(),m=u[h],v=s[h];if(!(v<0)){e.r_circulate_r(d,h);for(let _ of d){if(t.r_elevation[_]<0||a[_]!==a[h]||s[_]>=0)continue;let b=t.r_elevation[_]>.5?100:10,x=m+b;x<u[_]&&(u[_]=x,s[_]=v,c.push(_,x))}}}for(let h of i)h.cells=0;for(let h=0;h<e.numRegions;h++){let m=s[h];m>=0&&m<i.length&&i[m].cells++}return{provinces:i,cellProvince:s}}function Va(e,t,r,n,a,o){let l=performance.now(),i=Z(n),s=kl(e,t),f=performance.now(),{cultures:u,cellCulture:c}=Ul(e,t,s,r,i),d=performance.now(),{burgs:h,cellBurg:m}=Yl(e,t,s,u,c,i,o,a),v=performance.now(),{states:_,cellState:b}=Xl(e,t,u,h,m,c,i,a),x=performance.now(),{provinces:w,cellProvince:S}=Jl(e,t,_,h,b,m,i),y=performance.now();return{cultures:u,cellCulture:c,burgs:h,cellBurg:m,states:_,cellState:b,provinces:w,cellProvince:S,suitability:s}}var Rt=document.getElementById("output");za(Rt);function ce(){let e=X();e==="gasgiant"&&nt({seed:p.seed}),e==="sun"&&Ye({seed:p.seed,spectralColor:p.spectralColor}),Pt(P,g,ae,bt(),ge(),Ae(),oe(),e),at(P,g,oe(),e),Da(e,Ve(),pr()),Wa(e)}function J(){let e=X();if(e==="gasgiant"||e==="sun")return;let t=P,r=g,n=ae,a=ge(),o=Ae(),l=oe();n.applyClimate(t.numRegions,t.numTriangles,r.r_elevation,r.r_moisture,r.t_elevation,r.t_moisture,a,o,l),Ha(n),!(e==="gasgiant"||e==="sun")&&bt()==="centroid"&&Pt(P,g,ae,"centroid",a,o,l,X())}var ka=null,$l=null,Xe=null;function ja(e){e.controllers.forEach(t=>t.updateDisplay()),e.folders.forEach(t=>ja(t))}async function Ua(){let t=await(await fetch("/api/saves")).json();return Xe&&(Xe.options(t.length>0?t:[""]),p.selectedSave&&t.includes(p.selectedSave)?Xe.setValue(p.selectedSave):Xe.setValue(t.length>0?t[t.length-1]:"")),t}async function Zl(){let e=p.worldName.trim();if(!e)return;let t={planetType:X(),seed:Ve(),regions:tn(),plates:rn(),jitter:nn(),drawMode:bt(),temperature:ge(),rainfall:Ae(),waterLevel:oe(),plateVectors:an(),plateBoundaries:ln(),cultures:window._numCultures||16,numStates:window._numStates||16,maxBurgs:window._maxBurgs||1e4,cultureOverlay:Kt(),stateBorders:er(),stateOverlay:rr(),provinceOverlay:ar(),provinceBorders:lr(),burgOverlay:sr(),scale:p.scale,turbulence:p.turbulence,blur:p.blur,colorA:p.colorA,colorB:p.colorB,colorC:p.colorC,barrenColorA:p.barrenColorA,barrenColorB:p.barrenColorB,barrenColorC:p.barrenColorC,airlessColorA:p.airlessColorA,airlessColorB:p.airlessColorB,airlessColorC:p.airlessColorC,barrenSubtype:p.barrenSubtype,...j,hueSpread:p.hueSpread,hue:p.hue,rayLength:p.rayLength,rayWidth:p.rayWidth,raysOpacity:p.raysOpacity,flareWidth:p.flareWidth,flareAmp:p.flareAmp,flaresOpacity:p.flaresOpacity,noiseFreq:p.noiseFreq,noiseAmp:p.noiseAmp,glowTint:p.glowTint,glowBrightness:p.glowBrightness,glowFalloff:p.glowFalloff,glowRadius:p.glowRadius,sphereFresnelPower:p.sphereFresnelPower,sphereFresnelInfluence:p.sphereFresnelInfluence,sphereTint:p.sphereTint,sphereBase:p.sphereBase,sphereBrightnessOffset:p.sphereBrightnessOffset,sphereBrightness:p.sphereBrightness,sphereScale:p.sphereScale,sphereContrast:p.sphereContrast,spectralType:p.spectralType,spectralColor:p.spectralColor};await fetch("/api/saves/"+encodeURIComponent(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),p.selectedSave=e,await Ua()}async function Kl(){let e=p.selectedSave;if(!e)return;let t=await fetch("/api/saves/"+encodeURIComponent(e));if(!t.ok)return;let r=await t.json();cr(r.planetType),un(r.barrenSubtype||"barren"),Ct(r.seed),jt(r.regions),Ut(r.plates),Yt(r.jitter),Xt(r.drawMode),Jt(r.temperature),$t(r.rainfall),Zt(r.waterLevel),on(r.plateVectors),sn(r.plateBoundaries),window._numCultures=r.cultures,window._numStates=r.numStates,window._maxBurgs=r.maxBurgs,Qt(r.cultureOverlay),tr(r.stateBorders),nr(r.stateOverlay),or(r.provinceOverlay),ir(r.provinceBorders),ur(r.burgOverlay),p.planetType=r.planetType,p.seed=r.seed,p.regions=r.regions,p.plates=r.plates,p.jitter=r.jitter,p.drawMode=r.drawMode,p.temperature=r.temperature,p.rainfall=r.rainfall,p.waterLevel=r.waterLevel,p.plateVectors=r.plateVectors,p.plateBoundaries=r.plateBoundaries,p.cultures=r.cultures,p.numStates=r.numStates,p.maxBurgs=r.maxBurgs,p.cultureOverlay=r.cultureOverlay,p.stateBorders=r.stateBorders,p.stateOverlay=r.stateOverlay,p.provinceOverlay=r.provinceOverlay,p.provinceBorders=r.provinceBorders,p.burgOverlay=r.burgOverlay,p.scale=r.scale,p.turbulence=r.turbulence,p.blur=r.blur,p.colorA=r.colorA,p.colorB=r.colorB,p.colorC=r.colorC,p.barrenColorA=r.barrenColorA||lt.colorA,p.barrenColorB=r.barrenColorB||lt.colorB,p.barrenColorC=r.barrenColorC||lt.colorC,p.airlessColorA=r.airlessColorA||it.colorA,p.airlessColorB=r.airlessColorB||it.colorB,p.airlessColorC=r.airlessColorC||it.colorC,p.barrenSubtype=r.barrenSubtype||"barren",p.hueSpread=r.hueSpread||j.hueSpread,p.hue=r.hue||j.hue,p.rayLength=r.rayLength||j.rayLength,p.rayWidth=r.rayWidth||j.rayWidth,p.raysOpacity=r.raysOpacity||j.raysOpacity,p.flareWidth=r.flareWidth||j.flareWidth,p.flareAmp=r.flareAmp||j.flareAmp,p.flaresOpacity=r.flaresOpacity||j.flaresOpacity,p.noiseFreq=r.noiseFreq||j.noiseFreq,p.noiseAmp=r.noiseAmp||j.noiseAmp,p.glowTint=r.glowTint||j.glowTint,p.glowBrightness=r.glowBrightness||j.glowBrightness,p.glowFalloff=r.glowFalloff||j.glowFalloff,p.glowRadius=r.glowRadius||j.glowRadius,p.sphereFresnelPower=r.sphereFresnelPower||j.sphereFresnelPower,p.sphereFresnelInfluence=r.sphereFresnelInfluence||j.sphereFresnelInfluence,p.sphereTint=r.sphereTint||j.sphereTint,p.sphereBase=r.sphereBase||j.sphereBase,p.sphereBrightnessOffset=r.sphereBrightnessOffset||j.sphereBrightnessOffset,p.sphereBrightness=r.sphereBrightness||j.sphereBrightness,p.sphereScale=r.sphereScale||j.sphereScale,p.sphereContrast=r.sphereContrast||j.sphereContrast,p.spectralType=r.spectralType||j.spectralType,p.spectralColor=r.spectralColor||Mr[p.spectralType]||Mr.G,p.worldName=e,Ye({hueSpread:p.hueSpread,hue:p.hue,rayLength:p.rayLength,rayWidth:p.rayWidth,raysOpacity:p.raysOpacity,flareWidth:p.flareWidth,flareAmp:p.flareAmp,flaresOpacity:p.flaresOpacity,noiseFreq:p.noiseFreq,noiseAmp:p.noiseAmp,glowTint:p.glowTint,glowBrightness:p.glowBrightness,glowFalloff:p.glowFalloff,glowRadius:p.glowRadius,sphereFresnelPower:p.sphereFresnelPower,sphereFresnelInfluence:p.sphereFresnelInfluence,sphereTint:p.sphereTint,sphereBase:p.sphereBase,sphereBrightnessOffset:p.sphereBrightnessOffset,sphereBrightness:p.sphereBrightness,sphereScale:p.sphereScale,sphereContrast:p.sphereContrast,spectralColor:p.spectralColor}),nt({scale:r.scale,turbulence:r.turbulence,blur:r.blur,colorA:new ue.Color(r.colorA),colorB:new ue.Color(r.colorB),colorC:new ue.Color(r.colorC),seed:r.seed}),Ue("barren",{colorA:p.barrenColorA,colorB:p.barrenColorB,colorC:p.barrenColorC}),Ue("airless",{colorA:p.airlessColorA,colorB:p.airlessColorB,colorC:p.airlessColorC}),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200),Fn(r.planetType),ja(pe)}var ot={scale:1,turbulence:2,blur:.5,colorA:"#fff8f0",colorB:"#f0e8b0",colorC:"#afa0d0"},lt={colorA:"#321408",colorB:"#aa5523",colorC:"#fae6e6"},it={colorA:"#555555",colorB:"#aaaaaa",colorC:"#eeeeee"},Mr={O:"#9bb0ff",B:"#aabfff",A:"#f8f7ff",F:"#fff4e8",G:"#fff4b5",K:"#ffc66a",M:"#ff8b5a",D:"#ffffff"},j={hueSpread:.25,hue:.05,rayLength:1.5,rayWidth:.02,raysOpacity:.5,flareWidth:.03,flareAmp:.3,flaresOpacity:.4,noiseFreq:1.5,noiseAmp:1,glowTint:1.2,glowBrightness:1.5,glowFalloff:2,glowRadius:.5,sphereFresnelPower:1.5,sphereFresnelInfluence:.4,sphereTint:1.8,sphereBase:.05,sphereBrightnessOffset:0,sphereBrightness:3,sphereScale:2,sphereContrast:.15,spectralType:"G"},p={worldName:"My World",selectedSave:"",saveWorld:Zl,loadWorld:Kl,planetType:X(),seed:Ve(),regions:tn(),plates:rn(),jitter:nn(),temperature:ge(),rainfall:Ae(),waterLevel:oe(),drawMode:bt(),plateVectors:an(),plateBoundaries:ln(),cultures:window._numCultures||16,numStates:window._numStates||16,maxBurgs:window._maxBurgs||1e4,cultureOverlay:Kt(),stateBorders:er(),stateOverlay:rr(),provinceOverlay:ar(),provinceBorders:lr(),burgOverlay:sr(),scale:ot.scale,turbulence:ot.turbulence,blur:ot.blur,colorA:ot.colorA,colorB:ot.colorB,colorC:ot.colorC,barrenColorA:lt.colorA,barrenColorB:lt.colorB,barrenColorC:lt.colorC,airlessColorA:it.colorA,airlessColorB:it.colorB,airlessColorC:it.colorC,barrenSubtype:pr(),...j,spectralColor:Mr.G,newPlanet:()=>{let e=Ve()+1;p.seed=e,Ct(e),nt({seed:e}),Ye({seed:e}),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200),ka&&ka.updateDisplay()},applyPopulation:()=>{window.applyPopulation()}},pe=new XGUI({title:"Planet Generator",width:300});Xe=pe.add(p,"selectedSave",[""]).name("Saved Worlds");Xe.domElement.classList.add("w-70");Xe.append(p,"loadWorld").name("Load").domElement.classList.add("w-30");$l=pe.add(p,"worldName").name("World Name").append(p,"saveWorld").name("Save").domElement.classList.add("w-30");pe.add(p,"planetType",["earthlike","airless","barren","gasgiant","sun"]).name("Planet Type").onChange(e=>{cr(e),p.barrenSubtype=pr(),e==="barren"?Ue("barren",{colorA:p.barrenColorA,colorB:p.barrenColorB,colorC:p.barrenColorC}):e==="airless"&&Ue("airless",{colorA:p.airlessColorA,colorB:p.airlessColorB,colorC:p.airlessColorC}),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200),Fn(e)}).append(p,"newPlanet").name("New Planet").domElement.classList.add("w-50");pe.add(p,"seed",0,999999,1).name("Seed").onChange(e=>{Ct(e),nt({seed:e}),Ye({seed:e}),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200)});var Sr=pe.addFolder("Geography");Sr.add(p,"regions",100,1e5,100).name("Regions").onChange(e=>{jt(e),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200)});Sr.add(p,"drawMode",["quads","centroid"]).name("Draw Mode").onChange(e=>{Xt(e),!wn(e)&&X()!=="gasgiant"&&X()!=="sun"&&(Pt(P,g,ae,e,ge(),Ae(),oe(),X()),at(P,g,oe(),X())),_n(e)}).append(p,"jitter",0,1,.001).name("Jitter").onChange(e=>{Yt(e),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200)});Sr.add(p,"plates",5,100,1).name("Plates").onChange(e=>{Ut(e),kt(),ce(),J()}).append(p,"waterLevel",-.5,.5,.01).name("Water Level").onChange(e=>{Zt(e),J(),at(P,g,oe(),X())});var Pn=pe.addFolder("Earthlike Options");Pn.add(p,"temperature",-1,1,.01).name("Temperature").onChange(e=>{Jt(e),J()}).append(p,"rainfall",-.5,.5,.01).name("Rainfall").onChange(e=>{$t(e),J()});var Rn=Pn.addFolder("Population");Rn.add(p,"cultures",2,40,1).name("Cultures").onChange(e=>{window._numCultures=e}).append(p,"numStates",1,50,1).name("States").onChange(e=>{window._numStates=e});Rn.add(p,"maxBurgs",100,5e4,100).name("Max Burgs").onChange(e=>{window._maxBurgs=e});Rn.add(p,"applyPopulation").name("Apply Changes");function st(){nt({scale:p.scale,turbulence:p.turbulence,blur:p.blur,colorA:new ue.Color(p.colorA),colorB:new ue.Color(p.colorB),colorC:new ue.Color(p.colorC),seed:p.seed})}var Je=pe.addFolder("Gas Giant");Je.add(p,"scale",0,4,.01).name("Scale").onChange(st);Je.add(p,"turbulence",0,4,.01).name("Turbulence").onChange(st);Je.add(p,"blur",0,1,.01).name("Blur").onChange(st);Je.addColor(p,"colorA").name("Color A").onChange(st);Je.addColor(p,"colorB").name("Color B").onChange(st);Je.addColor(p,"colorC").name("Color C").onChange(st);var At=pe.addFolder("Barren Options");At.add(p,"barrenSubtype",["barren","hostile"]).name("Subtype").onChange(e=>{un(e),de(),ce(),J(),setTimeout(()=>window.applyPopulation(),200)});function Bn(){Ue("barren",{colorA:p.barrenColorA,colorB:p.barrenColorB,colorC:p.barrenColorC})}function An(){Ue("airless",{colorA:p.airlessColorA,colorB:p.airlessColorB,colorC:p.airlessColorC})}At.addColor(p,"barrenColorA").name("Color A").onChange(Bn);At.addColor(p,"barrenColorB").name("Color B").onChange(Bn);At.addColor(p,"barrenColorC").name("Color C").onChange(Bn);var Tr=pe.addFolder("Airless Colors");Tr.addColor(p,"airlessColorA").name("Color A").onChange(An);Tr.addColor(p,"airlessColorB").name("Color B").onChange(An);Tr.addColor(p,"airlessColorC").name("Color C").onChange(An);function me(){Ye({hueSpread:p.hueSpread,hue:p.hue,rayLength:p.rayLength,rayWidth:p.rayWidth,raysOpacity:p.raysOpacity,flareWidth:p.flareWidth,flareAmp:p.flareAmp,flaresOpacity:p.flaresOpacity,noiseFreq:p.noiseFreq,noiseAmp:p.noiseAmp,glowTint:p.glowTint,glowBrightness:p.glowBrightness,glowFalloff:p.glowFalloff,glowRadius:p.glowRadius,sphereFresnelPower:p.sphereFresnelPower,sphereFresnelInfluence:p.sphereFresnelInfluence,sphereTint:p.sphereTint,sphereBase:p.sphereBase,sphereBrightnessOffset:p.sphereBrightnessOffset,sphereBrightness:p.sphereBrightness,sphereScale:p.sphereScale,sphereContrast:p.sphereContrast,spectralColor:p.spectralColor})}var ne=pe.addFolder("Sun");ne.add(p,"sphereBrightness",0,6,.1).name("Brightness").onChange(me);ne.add(p,"sphereScale",.5,4,.1).name("Noise Scale").onChange(me);ne.add(p,"sphereContrast",.01,.5,.01).name("Noise Contrast").onChange(me);ne.add(p,"sphereTint",.5,4,.1).name("Tint").onChange(me);ne.add(p,"sphereFresnelInfluence",0,1,.05).name("Fresnel").onChange(me);ne.add(p,"glowRadius",.1,2,.05).name("Glow Radius").onChange(me);ne.add(p,"glowBrightness",0,4,.1).name("Glow Brightness").onChange(me);ne.add(p,"rayLength",.5,4,.1).name("Ray Length").onChange(me);ne.add(p,"rayWidth",.005,.1,.005).name("Ray Width").onChange(me);ne.add(p,"raysOpacity",0,1,.05).name("Rays Opacity").onChange(me);ne.add(p,"flareAmp",0,1,.05).name("Flare Amp").onChange(me);ne.add(p,"flaresOpacity",0,1,.05).name("Flares Opacity").onChange(me);ne.add(p,"spectralType",["O","B","A","F","G","K","M","D"]).name("Spectral Type").onChange(e=>{let t=Mr[e]||"#ffffff";p.spectralColor=t,Ye({spectralColor:t})});var On=pe.addFolder("Overlays");On.add(p,"cultureOverlay").name("Cultures").onChange(e=>{Qt(e),vr(e)}).append(p,"stateOverlay").name("States").onChange(e=>{nr(e),yr(e)}).append(p,"provinceOverlay").name("Provinces").onChange(e=>{or(e),wr(e)}).append(p,"burgOverlay").name("Burgs").onChange(e=>{ur(e),xr(e)});var Ql=On.addFolder("Borders");Ql.add(p,"stateBorders").name("States").onChange(e=>{tr(e),gr(e)}).append(p,"provinceBorders").name("Provinces").onChange(e=>{ir(e),_r(e)});var Bt=document.createElement("div");Bt.style.cssText="padding:6px 8px;font-size:11px;line-height:1.6;color:#aaa;min-height:40px;white-space:pre-wrap;overflow-wrap:break-word;";Bt.textContent="Click planet for region info";pe.domElement.appendChild(Bt);function Fn(e){let t=e==="gasgiant",r=e==="sun";Je.domElement.style.display=t?"":"none",Pn.domElement.style.display=e==="earthlike"?"":"none",Sr.domElement.style.display=t||r?"none":"",On.domElement.style.display=t||r?"none":"",At.domElement.style.display=e==="barren"?"":"none",Tr.domElement.style.display=e==="airless"?"":"none",ne.domElement.style.display=r?"":"none"}Fn(X());window.getPlanetType=()=>X();window.setPlanetType=e=>{cr(e)};window.generateMesh=function(){de(),ce(),J()};window.setSeed=e=>{Ct(e)};window.getSeed=()=>Ve();window.setN=e=>{jt(e),de(),ce(),J()};window.setP=e=>{Ut(e),kt(),ce(),J()};window.setJitter=e=>{Yt(e),de(),ce(),J()};window.setRotation=e=>{ca(e),gn(e)};window.setDrawMode=e=>{Xt(e);let t=X();!wn(e)&&t!=="gasgiant"&&t!=="sun"&&(Pt(P,g,ae,e,ge(),Ae(),oe(),X()),at(P,g,oe(),X())),_n(e)};window.setDrawPlateVectors=e=>{on(e),La(e)};window.setDrawPlateBoundaries=e=>{sn(e),Ga(e)};window.setTempOffset=e=>{Jt(e),J()};window.setRainOffset=e=>{$t(e),J()};window.setWaterLevel=e=>{Zt(e),J(),at(P,g,oe(),X())};window.getTempOffset=()=>ge();window.getRainOffset=()=>Ae();window.setCultureOverlay=e=>{Qt(e),vr(e)};window.setStateBorders=e=>{tr(e),gr(e)};window.setStateOverlay=e=>{nr(e),yr(e)};window.setProvinceOverlay=e=>{or(e),wr(e)};window.setProvinceBorders=e=>{ir(e),_r(e)};window.setBurgOverlay=e=>{ur(e),xr(e)};window.applyPopulation=()=>{if(!P||!g.r_elevation)return;let e=X();if(e==="sun")return;if(e!=="earthlike"){window._population=null,Cn(null,null,null),bn(null,null,null),Mn(null,null,null),Sn(null,null,null),Tn(null,null,null);return}let t=Va(P,g,window._numCultures||8,Ve(),window._numStates||16,window._maxBurgs||1e4);window._population=t,Cn(P,t,g),bn(P,t,g),Mn(P,t,g),Sn(P,t,g),Tn(P,t,g),vr(Kt()),gr(er()),yr(rr()),wr(ar()),_r(lr()),xr(sr())};window.getNumCultures=()=>window._numCultures||16;window.setNumCultures=e=>{window._numCultures=e};window.pickRegion=function(e,t){if(!P||!g.r_xyz)return null;let r=Fa(),n=new ue.Raycaster,a=new ue.Vector2(e,t);n.setFromCamera(a,r);let o=n.ray.origin,l=n.ray.direction,i=l.dot(l),s=2*o.dot(l),f=o.dot(o)-1,u=s*s-4*i*f;if(u<0)return null;let c=(-s-Math.sqrt(u))/(2*i);if(c<0&&(c=(-s+Math.sqrt(u))/(2*i)),c<0)return null;let d=new ue.Vector3;d.copy(l).multiplyScalar(c).add(o);let h=-1,m=1/0,v=P.numRegions,_=g.r_xyz;for(let F=0;F<v;F++){let O=d.x-_[3*F],H=d.y-_[3*F+1],G=d.z-_[3*F+2],U=O*O+H*H+G*G;U<m&&(m=U,h=F)}if(h===-1)return null;let b=g.r_elevation[h]-oe();b>0&&(b=ge()>0?b/(1+ge()*3):b*(1+Math.abs(ge())*2));let x=Math.min(1,Math.max(0,g.r_moisture[h]+Ae())),w=g.r_plate[h],S=g.plate_is_ocean.has(w),y=X(),C;y==="sun"?C="Stellar Surface":y==="gasgiant"?C="Gas Giant":y==="airless"?b<-.3?C="Crater Floor":b<0?C="Lowland Basin":b<.2?C="Mare":b<.45?C="Highland Terrain":C="Peak / Ridge":y==="barren"?p.barrenSubtype==="hostile"?b<0?C="Rift Basin":b<.15?C="Sulfurous Plain":b<.35?C="Volcanic Dome":b<.55?C="Tessera Highland":C="Mountain / Ridge":b<0?C="Depression":b<.15?C="Lowland Plain":b<.35?C="Volcanic Rise":b<.55?C="Highland":C="Polar Cap / Summit":b<0?C="Ocean":b<.1?C=x>.5?"Swamp / Marsh":"Coast / Beach":b<.25?C=x>.6?"Jungle":x>.3?"Forest":"Savanna":b<.45?C=x>.5?"Temperate Forest":"Grassland":b<.65?C=x>.4?"Taiga":"Tundra":C=x>.3?"Alpine":"Mountain / Snow";let M=g.r_elevation[h],R=b<0?25:Math.max(-15,30-45*b);return{region:h,elevation:b,rawElevation:M,effectiveElevation:b,moisture:x,temperature:R,plate:w,plateType:S?"Oceanic":"Continental",biome:C,x:_[3*h],y:_[3*h+1],z:_[3*h+2]}};Rt.addEventListener("click",function(e){let t=Rt.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top,a=r/t.width*2-1,o=-(n/t.height*2-1),l=window.pickRegion(a,o);if(!l){Bt.textContent="No region found";return}let i=window._population,s="",f="",u="";if(i&&i.cellCulture[l.region]>=0){let c=i.cellCulture[l.region];i.cultures[c]&&(s=i.cultures[c].name)}if(i&&i.cellState[l.region]>0){let c=i.cellState[l.region];i.states[c]&&(f=i.states[c].name)}if(i&&i.cellBurg[l.region]>=0){let c=i.cellBurg[l.region];i.burgs[c]&&(u=i.burgs[c].name)}Bt.innerHTML="Region "+l.region+`
Biome `+l.biome+`
Temperature `+l.temperature.toFixed(1)+` \xB0C
Elevation `+l.rawElevation.toFixed(3)+`
Moisture `+l.moisture.toFixed(3)+`
Plate `+l.plate+" ("+l.plateType+")"+(s?`
Culture `+s:"")+(f?`
State `+f:"")+(u?`
Settlement `+u:"")});de();ce();J();gn(ua());yn();Ua();function Ya(){yn(),requestAnimationFrame(Ya)}requestAnimationFrame(Ya);window._numCultures=16;window._numStates=16;window._maxBurgs=1e4;setTimeout(()=>{window.applyPopulation()},100);function Xa(){let e=Rt.clientWidth,t=Rt.clientHeight;e>0&&t>0&&Na(e,t)}window.addEventListener("resize",Xa);Xa();})();
//# sourceMappingURL=_bundle.js.map
