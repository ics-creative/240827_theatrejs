(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="167",bS=0,If=1,TS=2,Ud=1,ES=2,li=3,Ri=0,pn=1,ci=2,Pi=0,ns=1,Uf=2,Of=3,Nf=4,AS=5,dr=100,wS=101,PS=102,CS=103,RS=104,LS=200,DS=201,IS=202,US=203,Xc=204,jc=205,OS=206,NS=207,FS=208,BS=209,zS=210,VS=211,kS=212,HS=213,GS=214,WS=0,XS=1,jS=2,bo=3,qS=4,YS=5,KS=6,$S=7,Od=0,JS=1,ZS=2,Ci=0,QS=1,eM=2,tM=3,nM=4,iM=5,rM=6,sM=7,Nd=300,as=301,os=302,qc=303,Yc=304,Ro=306,Kc=1e3,mr=1001,$c=1002,Rn=1003,aM=1004,Ga=1005,zn=1006,pc=1007,gr=1008,pi=1009,Fd=1010,Bd=1011,qs=1012,Ru=1013,_r=1014,ui=1015,Js=1016,Lu=1017,Du=1018,ls=1020,zd=35902,Vd=1021,kd=1022,Vn=1023,Hd=1024,Gd=1025,is=1026,cs=1027,Wd=1028,Iu=1029,Xd=1030,Uu=1031,Ou=1033,go=33776,_o=33777,vo=33778,xo=33779,Jc=35840,Zc=35841,Qc=35842,eu=35843,tu=36196,nu=37492,iu=37496,ru=37808,su=37809,au=37810,ou=37811,lu=37812,cu=37813,uu=37814,hu=37815,fu=37816,du=37817,pu=37818,mu=37819,gu=37820,_u=37821,yo=36492,vu=36494,xu=36495,jd=36283,yu=36284,Su=36285,Mu=36286,oM=3200,lM=3201,qd=0,cM=1,wi="",Hn="srgb",Di="srgb-linear",Nu="display-p3",Lo="display-p3-linear",To="linear",Dt="srgb",Eo="rec709",Ao="p3",Fr=7680,Ff=519,uM=512,hM=513,fM=514,Yd=515,dM=516,pM=517,mM=518,gM=519,Bf=35044,zf="300 es",hi=2e3,wo=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,bu=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function _M(i,e){return(i%e+e)%e}function gc(i,e,t){return(1-t)*i+t*e}function Fs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,a,l,c,h,f){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,h,f)}set(e,t,n,s,a,l,c,h,f){const d=this.elements;return d[0]=e,d[1]=s,d[2]=c,d[3]=t,d[4]=a,d[5]=h,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],d=n[4],g=n[7],m=n[2],v=n[5],M=n[8],P=s[0],x=s[3],_=s[6],U=s[1],E=s[4],T=s[7],K=s[2],N=s[5],F=s[8];return a[0]=l*P+c*U+h*K,a[3]=l*x+c*E+h*N,a[6]=l*_+c*T+h*F,a[1]=f*P+d*U+g*K,a[4]=f*x+d*E+g*N,a[7]=f*_+d*T+g*F,a[2]=m*P+v*U+M*K,a[5]=m*x+v*E+M*N,a[8]=m*_+v*T+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8];return t*l*d-t*c*f-n*a*d+n*c*h+s*a*f-s*l*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8],g=d*l-c*f,m=c*h-d*a,v=f*a-l*h,M=t*g+n*m+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/M;return e[0]=g*P,e[1]=(s*f-d*n)*P,e[2]=(c*n-s*l)*P,e[3]=m*P,e[4]=(d*t-s*h)*P,e[5]=(s*a-c*t)*P,e[6]=v*P,e[7]=(n*h-f*t)*P,e[8]=(l*t-n*a)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*l+f*c)+l+e,-s*f,s*h,-s*(-f*l+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new lt;function Kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vM(){const i=Po("canvas");return i.style.display="block",i}const Vf={};function Ws(i){i in Vf||(Vf[i]=!0,console.warn(i))}function xM(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const kf=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hf=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bs={[Di]:{transfer:To,primaries:Eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Hn]:{transfer:Dt,primaries:Eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lo]:{transfer:To,primaries:Ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Hf),fromReference:i=>i.applyMatrix3(kf)},[Nu]:{transfer:Dt,primaries:Ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Hf),fromReference:i=>i.applyMatrix3(kf).convertLinearToSRGB()}},yM=new Set([Di,Lo]),yt={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Bs[e].toReference,s=Bs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Bs[i].primaries},getTransfer:function(i){return i===wi?To:Bs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Bs[e].luminanceCoefficients)}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Br;class SM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=Po("canvas")),Br.width=e.width,Br.height=e.height;const n=Br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=rs(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rs(t[n]/255)*255):t[n]=rs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(xc(s[l].image)):a.push(xc(s[l]))}else a=xc(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?SM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;class mn extends hs{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=mr,s=mr,a=zn,l=gr,c=Vn,h=pi,f=mn.DEFAULT_ANISOTROPY,d=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=fs(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kc:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kc:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Nd;mn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,s=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,f=h[0],d=h[4],g=h[8],m=h[1],v=h[5],M=h[9],P=h[2],x=h[6],_=h[10];if(Math.abs(d-m)<.01&&Math.abs(g-P)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(g+P)<.1&&Math.abs(M+x)<.1&&Math.abs(f+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,T=(v+1)/2,K=(_+1)/2,N=(d+m)/4,F=(g+P)/4,W=(M+x)/4;return E>T&&E>K?E<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(E),s=N/n,a=F/n):T>K?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=N/s,a=W/s):K<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(K),n=F/a,s=W/a),this.set(n,s,a,t),this}let U=Math.sqrt((x-M)*(x-M)+(g-P)*(g-P)+(m-d)*(m-d));return Math.abs(U)<.001&&(U=1),this.x=(x-M)/U,this.y=(g-P)/U,this.z=(m-d)/U,this.w=Math.acos((f+v+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends TM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jd extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,c){let h=n[s+0],f=n[s+1],d=n[s+2],g=n[s+3];const m=a[l+0],v=a[l+1],M=a[l+2],P=a[l+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=g;return}if(c===1){e[t+0]=m,e[t+1]=v,e[t+2]=M,e[t+3]=P;return}if(g!==P||h!==m||f!==v||d!==M){let x=1-c;const _=h*m+f*v+d*M+g*P,U=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const K=Math.sqrt(E),N=Math.atan2(K,_*U);x=Math.sin(x*N)/K,c=Math.sin(c*N)/K}const T=c*U;if(h=h*x+m*T,f=f*x+v*T,d=d*x+M*T,g=g*x+P*T,x===1-c){const K=1/Math.sqrt(h*h+f*f+d*d+g*g);h*=K,f*=K,d*=K,g*=K}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,a,l){const c=n[s],h=n[s+1],f=n[s+2],d=n[s+3],g=a[l],m=a[l+1],v=a[l+2],M=a[l+3];return e[t]=c*M+d*g+h*v-f*m,e[t+1]=h*M+d*m+f*g-c*v,e[t+2]=f*M+d*v+c*m-h*g,e[t+3]=d*M-c*g-h*m-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,c=Math.cos,h=Math.sin,f=c(n/2),d=c(s/2),g=c(a/2),m=h(n/2),v=h(s/2),M=h(a/2);switch(l){case"XYZ":this._x=m*d*g+f*v*M,this._y=f*v*g-m*d*M,this._z=f*d*M+m*v*g,this._w=f*d*g-m*v*M;break;case"YXZ":this._x=m*d*g+f*v*M,this._y=f*v*g-m*d*M,this._z=f*d*M-m*v*g,this._w=f*d*g+m*v*M;break;case"ZXY":this._x=m*d*g-f*v*M,this._y=f*v*g+m*d*M,this._z=f*d*M+m*v*g,this._w=f*d*g-m*v*M;break;case"ZYX":this._x=m*d*g-f*v*M,this._y=f*v*g+m*d*M,this._z=f*d*M-m*v*g,this._w=f*d*g+m*v*M;break;case"YZX":this._x=m*d*g+f*v*M,this._y=f*v*g+m*d*M,this._z=f*d*M-m*v*g,this._w=f*d*g-m*v*M;break;case"XZY":this._x=m*d*g-f*v*M,this._y=f*v*g-m*d*M,this._z=f*d*M+m*v*g,this._w=f*d*g+m*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],c=t[5],h=t[9],f=t[2],d=t[6],g=t[10],m=n+c+g;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(d-h)*v,this._y=(a-f)*v,this._z=(l-s)*v}else if(n>c&&n>g){const v=2*Math.sqrt(1+n-c-g);this._w=(d-h)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(a+f)/v}else if(c>g){const v=2*Math.sqrt(1+c-n-g);this._w=(a-f)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(h+d)/v}else{const v=2*Math.sqrt(1+g-n-c);this._w=(l-s)/v,this._x=(a+f)/v,this._y=(h+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,c=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+l*c+s*f-a*h,this._y=s*d+l*h+a*c-n*f,this._z=a*d+l*f+n*h-s*c,this._w=l*d-n*c-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*s+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),d=Math.atan2(f,c),g=Math.sin((1-t)*d)/f,m=Math.sin(t*d)/f;return this._w=l*g+this._w*m,this._x=n*g+this._x*m,this._y=s*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,c=e.z,h=e.w,f=2*(l*s-c*n),d=2*(c*t-a*s),g=2*(a*n-l*t);return this.x=t+h*f+l*g-c*d,this.y=n+h*d+c*f-a*g,this.z=s+h*g+a*d-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,c=t.y,h=t.z;return this.x=s*h-a*c,this.y=a*l-n*h,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new X,Gf=new Zs;class Qs{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,On):On.fromBufferAttribute(a,l),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Xa.subVectors(this.max,zs),zr.subVectors(e.a,zs),Vr.subVectors(e.b,zs),kr.subVectors(e.c,zs),Si.subVectors(Vr,zr),Mi.subVectors(kr,Vr),sr.subVectors(zr,kr);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-sr.z,sr.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,sr.z,0,-sr.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-sr.y,sr.x,0];return!Sc(t,zr,Vr,kr,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,zr,Vr,kr,Xa))?!1:(ja.crossVectors(Si,Mi),t=[ja.x,ja.y,ja.z],Sc(t,zr,Vr,kr,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new X,new X,new X,new X,new X,new X,new X,new X],On=new X,Wa=new Qs,zr=new X,Vr=new X,kr=new X,Si=new X,Mi=new X,sr=new X,zs=new X,Xa=new X,ja=new X,ar=new X;function Sc(i,e,t,n,s){for(let a=0,l=i.length-3;a<=l;a+=3){ar.fromArray(i,a);const c=s.x*Math.abs(ar.x)+s.y*Math.abs(ar.y)+s.z*Math.abs(ar.z),h=e.dot(ar),f=t.dot(ar),d=n.dot(ar);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>c)return!1}return!0}const AM=new Qs,Vs=new X,Mc=new X;class Fu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):AM.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Mc)),this.expandByPoint(Vs.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new X,bc=new X,qa=new X,bi=new X,Tc=new X,Ya=new X,Ec=new X;class wM{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(bc);const a=e.distanceTo(t)*.5,l=-this.direction.dot(qa),c=bi.dot(this.direction),h=-bi.dot(qa),f=bi.lengthSq(),d=Math.abs(1-l*l);let g,m,v,M;if(d>0)if(g=l*h-c,m=l*c-h,M=a*d,g>=0)if(m>=-M)if(m<=M){const P=1/d;g*=P,m*=P,v=g*(g+l*m+2*c)+m*(l*g+m+2*h)+f}else m=a,g=Math.max(0,-(l*m+c)),v=-g*g+m*(m+2*h)+f;else m=-a,g=Math.max(0,-(l*m+c)),v=-g*g+m*(m+2*h)+f;else m<=-M?(g=Math.max(0,-(-l*a+c)),m=g>0?-a:Math.min(Math.max(-a,-h),a),v=-g*g+m*(m+2*h)+f):m<=M?(g=0,m=Math.min(Math.max(-a,-h),a),v=m*(m+2*h)+f):(g=Math.max(0,-(l*a+c)),m=g>0?a:Math.min(Math.max(-a,-h),a),v=-g*g+m*(m+2*h)+f);else m=l>0?-a:a,g=Math.max(0,-(l*m+c)),v=-g*g+m*(m+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(bc).addScaledVector(qa,m),v}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,c,h;const f=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),d>=0?(a=(e.min.y-m.y)*d,l=(e.max.y-m.y)*d):(a=(e.max.y-m.y)*d,l=(e.min.y-m.y)*d),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),g>=0?(c=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(c=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,a){Tc.subVectors(t,e),Ya.subVectors(n,e),Ec.crossVectors(Tc,Ya);let l=this.direction.dot(Ec),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;bi.subVectors(this.origin,e);const h=c*this.direction.dot(Ya.crossVectors(bi,Ya));if(h<0)return null;const f=c*this.direction.dot(Tc.cross(bi));if(f<0||h+f>l)return null;const d=-c*bi.dot(Ec);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,n,s,a,l,c,h,f,d,g,m,v,M,P,x){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,h,f,d,g,m,v,M,P,x)}set(e,t,n,s,a,l,c,h,f,d,g,m,v,M,P,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=a,_[5]=l,_[9]=c,_[13]=h,_[2]=f,_[6]=d,_[10]=g,_[14]=m,_[3]=v,_[7]=M,_[11]=P,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),l=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=l*d,v=l*g,M=c*d,P=c*g;t[0]=h*d,t[4]=-h*g,t[8]=f,t[1]=v+M*f,t[5]=m-P*f,t[9]=-c*h,t[2]=P-m*f,t[6]=M+v*f,t[10]=l*h}else if(e.order==="YXZ"){const m=h*d,v=h*g,M=f*d,P=f*g;t[0]=m+P*c,t[4]=M*c-v,t[8]=l*f,t[1]=l*g,t[5]=l*d,t[9]=-c,t[2]=v*c-M,t[6]=P+m*c,t[10]=l*h}else if(e.order==="ZXY"){const m=h*d,v=h*g,M=f*d,P=f*g;t[0]=m-P*c,t[4]=-l*g,t[8]=M+v*c,t[1]=v+M*c,t[5]=l*d,t[9]=P-m*c,t[2]=-l*f,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const m=l*d,v=l*g,M=c*d,P=c*g;t[0]=h*d,t[4]=M*f-v,t[8]=m*f+P,t[1]=h*g,t[5]=P*f+m,t[9]=v*f-M,t[2]=-f,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const m=l*h,v=l*f,M=c*h,P=c*f;t[0]=h*d,t[4]=P-m*g,t[8]=M*g+v,t[1]=g,t[5]=l*d,t[9]=-c*d,t[2]=-f*d,t[6]=v*g+M,t[10]=m-P*g}else if(e.order==="XZY"){const m=l*h,v=l*f,M=c*h,P=c*f;t[0]=h*d,t[4]=-g,t[8]=f*d,t[1]=m*g+P,t[5]=l*d,t[9]=v*g-M,t[2]=M*g-v,t[6]=c*d,t[10]=P*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,CM)}lookAt(e,t,n){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ti.crossVectors(n,Tn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ti.crossVectors(n,Tn)),Ti.normalize(),Ka.crossVectors(Tn,Ti),s[0]=Ti.x,s[4]=Ka.x,s[8]=Tn.x,s[1]=Ti.y,s[5]=Ka.y,s[9]=Tn.y,s[2]=Ti.z,s[6]=Ka.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],d=n[1],g=n[5],m=n[9],v=n[13],M=n[2],P=n[6],x=n[10],_=n[14],U=n[3],E=n[7],T=n[11],K=n[15],N=s[0],F=s[4],W=s[8],D=s[12],A=s[1],z=s[5],se=s[9],Z=s[13],te=s[2],ce=s[6],q=s[10],fe=s[14],ne=s[3],Ae=s[7],Te=s[11],Ie=s[15];return a[0]=l*N+c*A+h*te+f*ne,a[4]=l*F+c*z+h*ce+f*Ae,a[8]=l*W+c*se+h*q+f*Te,a[12]=l*D+c*Z+h*fe+f*Ie,a[1]=d*N+g*A+m*te+v*ne,a[5]=d*F+g*z+m*ce+v*Ae,a[9]=d*W+g*se+m*q+v*Te,a[13]=d*D+g*Z+m*fe+v*Ie,a[2]=M*N+P*A+x*te+_*ne,a[6]=M*F+P*z+x*ce+_*Ae,a[10]=M*W+P*se+x*q+_*Te,a[14]=M*D+P*Z+x*fe+_*Ie,a[3]=U*N+E*A+T*te+K*ne,a[7]=U*F+E*z+T*ce+K*Ae,a[11]=U*W+E*se+T*q+K*Te,a[15]=U*D+E*Z+T*fe+K*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],c=e[5],h=e[9],f=e[13],d=e[2],g=e[6],m=e[10],v=e[14],M=e[3],P=e[7],x=e[11],_=e[15];return M*(+a*h*g-s*f*g-a*c*m+n*f*m+s*c*v-n*h*v)+P*(+t*h*v-t*f*m+a*l*m-s*l*v+s*f*d-a*h*d)+x*(+t*f*g-t*c*v-a*l*g+n*l*v+a*c*d-n*f*d)+_*(-s*c*d-t*h*g+t*c*m+s*l*g-n*l*m+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8],g=e[9],m=e[10],v=e[11],M=e[12],P=e[13],x=e[14],_=e[15],U=g*x*f-P*m*f+P*h*v-c*x*v-g*h*_+c*m*_,E=M*m*f-d*x*f-M*h*v+l*x*v+d*h*_-l*m*_,T=d*P*f-M*g*f+M*c*v-l*P*v-d*c*_+l*g*_,K=M*g*h-d*P*h-M*c*m+l*P*m+d*c*x-l*g*x,N=t*U+n*E+s*T+a*K;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=U*F,e[1]=(P*m*a-g*x*a-P*s*v+n*x*v+g*s*_-n*m*_)*F,e[2]=(c*x*a-P*h*a+P*s*f-n*x*f-c*s*_+n*h*_)*F,e[3]=(g*h*a-c*m*a-g*s*f+n*m*f+c*s*v-n*h*v)*F,e[4]=E*F,e[5]=(d*x*a-M*m*a+M*s*v-t*x*v-d*s*_+t*m*_)*F,e[6]=(M*h*a-l*x*a-M*s*f+t*x*f+l*s*_-t*h*_)*F,e[7]=(l*m*a-d*h*a+d*s*f-t*m*f-l*s*v+t*h*v)*F,e[8]=T*F,e[9]=(M*g*a-d*P*a-M*n*v+t*P*v+d*n*_-t*g*_)*F,e[10]=(l*P*a-M*c*a+M*n*f-t*P*f-l*n*_+t*c*_)*F,e[11]=(d*c*a-l*g*a-d*n*f+t*g*f+l*n*v-t*c*v)*F,e[12]=K*F,e[13]=(d*P*s-M*g*s+M*n*m-t*P*m-d*n*x+t*g*x)*F,e[14]=(M*c*s-l*P*s-M*n*h+t*P*h+l*n*x-t*c*x)*F,e[15]=(l*g*s-d*c*s+d*n*h-t*g*h-l*n*m+t*c*m)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,c=e.y,h=e.z,f=a*l,d=a*c;return this.set(f*l+n,f*c-s*h,f*h+s*c,0,f*c+s*h,d*c+n,d*h-s*l,0,f*h-s*c,d*h+s*l,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,c=t._z,h=t._w,f=a+a,d=l+l,g=c+c,m=a*f,v=a*d,M=a*g,P=l*d,x=l*g,_=c*g,U=h*f,E=h*d,T=h*g,K=n.x,N=n.y,F=n.z;return s[0]=(1-(P+_))*K,s[1]=(v+T)*K,s[2]=(M-E)*K,s[3]=0,s[4]=(v-T)*N,s[5]=(1-(m+_))*N,s[6]=(x+U)*N,s[7]=0,s[8]=(M+E)*F,s[9]=(x-U)*F,s[10]=(1-(m+P))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Hr.set(s[0],s[1],s[2]).length();const l=Hr.set(s[4],s[5],s[6]).length(),c=Hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);const f=1/a,d=1/l,g=1/c;return Nn.elements[0]*=f,Nn.elements[1]*=f,Nn.elements[2]*=f,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=g,Nn.elements[9]*=g,Nn.elements[10]*=g,t.setFromRotationMatrix(Nn),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,a,l,c=hi){const h=this.elements,f=2*a/(t-e),d=2*a/(n-s),g=(t+e)/(t-e),m=(n+s)/(n-s);let v,M;if(c===hi)v=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===wo)v=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=d,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,l,c=hi){const h=this.elements,f=1/(t-e),d=1/(n-s),g=1/(l-a),m=(t+e)*f,v=(n+s)*d;let M,P;if(c===hi)M=(l+a)*g,P=-2*g;else if(c===wo)M=a*g,P=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=P,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hr=new X,Nn=new Vt,PM=new X(0,0,0),CM=new X(1,1,1),Ti=new X,Ka=new X,Tn=new X,Wf=new Vt,Xf=new Zs;class qn{constructor(e=0,t=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],c=s[8],h=s[1],f=s[5],d=s[9],g=s[2],m=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(an(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-an(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const jf=new X,Gr=new Zs,ri=new Vt,$a=new X,ks=new X,LM=new X,DM=new Zs,qf=new X(1,0,0),Yf=new X(0,1,0),Kf=new X(0,0,1),$f={type:"added"},IM={type:"removed"},Wr={type:"childadded",child:null},Ac={type:"childremoved",child:null};class gn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new X,t=new qn,n=new Zs,s=new X(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new lt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(qf,e)}rotateY(e){return this.rotateOnAxis(Yf,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qf,e)}translateY(e){return this.translateOnAxis(Yf,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ks,$a,this.up):ri.lookAt($a,ks,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Gr.setFromRotationMatrix(ri),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IM),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const g=h[f];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),f=l(e.textures),d=l(e.images),g=l(e.shapes),m=l(e.skeletons),v=l(e.animations),M=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(c){const h=[];for(const f in c){const d=c[f];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gn.DEFAULT_UP=new X(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new X,si=new X,wc=new X,ai=new X,Xr=new X,jr=new X,Jf=new X,Pc=new X,Cc=new X,Rc=new X;class Xn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Fn.subVectors(s,t),si.subVectors(n,t),wc.subVectors(e,t);const l=Fn.dot(Fn),c=Fn.dot(si),h=Fn.dot(wc),f=si.dot(si),d=si.dot(wc),g=l*f-c*c;if(g===0)return a.set(0,0,0),null;const m=1/g,v=(f*h-c*d)*m,M=(l*d-c*h)*m;return a.set(1-v-M,M,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,s,a,l,c,h){return this.getBarycoord(e,t,n,s,ai)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,ai.x),h.addScaledVector(l,ai.y),h.addScaledVector(c,ai.z),h)}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),si.subVectors(e,t),Fn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,c;Xr.subVectors(s,n),jr.subVectors(a,n),Pc.subVectors(e,n);const h=Xr.dot(Pc),f=jr.dot(Pc);if(h<=0&&f<=0)return t.copy(n);Cc.subVectors(e,s);const d=Xr.dot(Cc),g=jr.dot(Cc);if(d>=0&&g<=d)return t.copy(s);const m=h*g-d*f;if(m<=0&&h>=0&&d<=0)return l=h/(h-d),t.copy(n).addScaledVector(Xr,l);Rc.subVectors(e,a);const v=Xr.dot(Rc),M=jr.dot(Rc);if(M>=0&&v<=M)return t.copy(a);const P=v*f-h*M;if(P<=0&&f>=0&&M<=0)return c=f/(f-M),t.copy(n).addScaledVector(jr,c);const x=d*M-v*g;if(x<=0&&g-d>=0&&v-M>=0)return Jf.subVectors(a,s),c=(g-d)/(g-d+(v-M)),t.copy(s).addScaledVector(Jf,c);const _=1/(x+P+m);return l=P*_,c=m*_,t.copy(n).addScaledVector(Xr,l).addScaledVector(jr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=_M(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Lc(l,a,e+1/3),this.g=Lc(l,a,e),this.b=Lc(l,a,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Hn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const n=Qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return yt.fromWorkingColorSpace(sn.copy(this),e),Math.round(an(sn.r*255,0,255))*65536+Math.round(an(sn.g*255,0,255))*256+Math.round(an(sn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,a=sn.b,l=Math.max(n,s,a),c=Math.min(n,s,a);let h,f;const d=(c+l)/2;if(c===l)h=0,f=0;else{const g=l-c;switch(f=d<=.5?g/(l+c):g/(2-l-c),l){case n:h=(s-a)/g+(s<a?6:0);break;case s:h=(a-n)/g+2;break;case a:h=(n-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Hn){yt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Ja);const n=gc(Ei.h,Ja.h,t),s=gc(Ei.s,Ja.s,t),a=gc(Ei.l,Ja.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new vt;vt.NAMES=Qd;let UM=0;class ea extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ns,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=jc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ep extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new X,Za=new De;class jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ws("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),a=dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}}class tp extends jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class np extends jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class di extends jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let OM=0;const Cn=new Vt,Dc=new gn,qr=new X,En=new Qs,Hs=new Qs,Kt=new X;class Ii extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?np:tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];En.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Hs.setFromBufferAttribute(c),this.morphTargetsRelative?(Kt.addVectors(En.min,Hs.min),En.expandByPoint(Kt),Kt.addVectors(En.max,Hs.max),En.expandByPoint(Kt)):(En.expandByPoint(Hs.min),En.expandByPoint(Hs.max))}En.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)Kt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)Kt.fromBufferAttribute(c,f),h&&(qr.fromBufferAttribute(e,f),Kt.add(qr)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let W=0;W<n.count;W++)c[W]=new X,h[W]=new X;const f=new X,d=new X,g=new X,m=new De,v=new De,M=new De,P=new X,x=new X;function _(W,D,A){f.fromBufferAttribute(n,W),d.fromBufferAttribute(n,D),g.fromBufferAttribute(n,A),m.fromBufferAttribute(a,W),v.fromBufferAttribute(a,D),M.fromBufferAttribute(a,A),d.sub(f),g.sub(f),v.sub(m),M.sub(m);const z=1/(v.x*M.y-M.x*v.y);isFinite(z)&&(P.copy(d).multiplyScalar(M.y).addScaledVector(g,-v.y).multiplyScalar(z),x.copy(g).multiplyScalar(v.x).addScaledVector(d,-M.x).multiplyScalar(z),c[W].add(P),c[D].add(P),c[A].add(P),h[W].add(x),h[D].add(x),h[A].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,D=U.length;W<D;++W){const A=U[W],z=A.start,se=A.count;for(let Z=z,te=z+se;Z<te;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const E=new X,T=new X,K=new X,N=new X;function F(W){K.fromBufferAttribute(s,W),N.copy(K);const D=c[W];E.copy(D),E.sub(K.multiplyScalar(K.dot(D))).normalize(),T.crossVectors(N,D);const z=T.dot(h[W])<0?-1:1;l.setXYZW(W,E.x,E.y,E.z,z)}for(let W=0,D=U.length;W<D;++W){const A=U[W],z=A.start,se=A.count;for(let Z=z,te=z+se;Z<te;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const s=new X,a=new X,l=new X,c=new X,h=new X,f=new X,d=new X,g=new X;if(e)for(let m=0,v=e.count;m<v;m+=3){const M=e.getX(m+0),P=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,P),l.fromBufferAttribute(t,x),d.subVectors(l,a),g.subVectors(s,a),d.cross(g),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,x),c.add(d),h.add(d),f.add(d),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,v=t.count;m<v;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),d.subVectors(l,a),g.subVectors(s,a),d.cross(g),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(c,h){const f=c.array,d=c.itemSize,g=c.normalized,m=new f.constructor(h.length*d);let v=0,M=0;for(let P=0,x=h.length;P<x;P++){c.isInterleavedBufferAttribute?v=h[P]*c.data.stride+c.offset:v=h[P]*d;for(let _=0;_<d;_++)m[M++]=f[v++]}return new jn(m,d,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ii,n=this.index.array,s=this.attributes;for(const c in s){const h=s[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let d=0,g=f.length;d<g;d++){const m=f[d],v=e(m,n);h.push(v)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let g=0,m=f.length;g<m;g++){const v=f[g];d.push(v.toJSON(e.data))}d.length>0&&(s[h]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],g=a[f];for(let m=0,v=g.length;m<v;m++)d.push(g[m].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zf=new Vt,or=new wM,Qa=new Fu,Qf=new X,Yr=new X,Kr=new X,$r=new X,Ic=new X,eo=new X,to=new De,no=new De,io=new De,ed=new X,td=new X,nd=new X,ro=new X,so=new X;class fi extends gn{constructor(e=new Ii,t=new ep){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){eo.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=c[h],g=a[h];d!==0&&(Ic.fromBufferAttribute(g,e),l?eo.addScaledVector(Ic,d):eo.addScaledVector(Ic.sub(t),d))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(Qa.containsPoint(or.origin)===!1&&(or.intersectSphere(Qa,Qf)===null||or.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&(Zf.copy(a).invert(),or.copy(e.ray).applyMatrix4(Zf),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,c=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,g=a.attributes.normal,m=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,P=m.length;M<P;M++){const x=m[M],_=l[x.materialIndex],U=Math.max(x.start,v.start),E=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let T=U,K=E;T<K;T+=3){const N=c.getX(T),F=c.getX(T+1),W=c.getX(T+2);s=ao(this,_,e,n,f,d,g,N,F,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,v.start),P=Math.min(c.count,v.start+v.count);for(let x=M,_=P;x<_;x+=3){const U=c.getX(x),E=c.getX(x+1),T=c.getX(x+2);s=ao(this,l,e,n,f,d,g,U,E,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let M=0,P=m.length;M<P;M++){const x=m[M],_=l[x.materialIndex],U=Math.max(x.start,v.start),E=Math.min(h.count,Math.min(x.start+x.count,v.start+v.count));for(let T=U,K=E;T<K;T+=3){const N=T,F=T+1,W=T+2;s=ao(this,_,e,n,f,d,g,N,F,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,v.start),P=Math.min(h.count,v.start+v.count);for(let x=M,_=P;x<_;x+=3){const U=x,E=x+1,T=x+2;s=ao(this,l,e,n,f,d,g,U,E,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function NM(i,e,t,n,s,a,l,c){let h;if(e.side===pn?h=n.intersectTriangle(l,a,s,!0,c):h=n.intersectTriangle(s,a,l,e.side===Ri,c),h===null)return null;so.copy(c),so.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(so);return f<t.near||f>t.far?null:{distance:f,point:so.clone(),object:i}}function ao(i,e,t,n,s,a,l,c,h,f){i.getVertexPosition(c,Yr),i.getVertexPosition(h,Kr),i.getVertexPosition(f,$r);const d=NM(i,e,t,n,Yr,Kr,$r,ro);if(d){s&&(to.fromBufferAttribute(s,c),no.fromBufferAttribute(s,h),io.fromBufferAttribute(s,f),d.uv=Xn.getInterpolation(ro,Yr,Kr,$r,to,no,io,new De)),a&&(to.fromBufferAttribute(a,c),no.fromBufferAttribute(a,h),io.fromBufferAttribute(a,f),d.uv1=Xn.getInterpolation(ro,Yr,Kr,$r,to,no,io,new De)),l&&(ed.fromBufferAttribute(l,c),td.fromBufferAttribute(l,h),nd.fromBufferAttribute(l,f),d.normal=Xn.getInterpolation(ro,Yr,Kr,$r,ed,td,nd,new X),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const g={a:c,b:h,c:f,normal:new X,materialIndex:0};Xn.getNormal(Yr,Kr,$r,g.normal),d.face=g}return d}class ta extends Ii{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const h=[],f=[],d=[],g=[];let m=0,v=0;M("z","y","x",-1,-1,n,t,e,l,a,0),M("z","y","x",1,-1,n,t,-e,l,a,1),M("x","z","y",1,1,e,n,t,s,l,2),M("x","z","y",1,-1,e,n,-t,s,l,3),M("x","y","z",1,-1,e,t,n,s,a,4),M("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new di(f,3)),this.setAttribute("normal",new di(d,3)),this.setAttribute("uv",new di(g,2));function M(P,x,_,U,E,T,K,N,F,W,D){const A=T/F,z=K/W,se=T/2,Z=K/2,te=N/2,ce=F+1,q=W+1;let fe=0,ne=0;const Ae=new X;for(let Te=0;Te<q;Te++){const Ie=Te*z-Z;for(let tt=0;tt<ce;tt++){const dt=tt*A-se;Ae[P]=dt*U,Ae[x]=Ie*E,Ae[_]=te,f.push(Ae.x,Ae.y,Ae.z),Ae[P]=0,Ae[x]=0,Ae[_]=N>0?1:-1,d.push(Ae.x,Ae.y,Ae.z),g.push(tt/F),g.push(1-Te/W),fe+=1}}for(let Te=0;Te<W;Te++)for(let Ie=0;Ie<F;Ie++){const tt=m+Ie+ce*Te,dt=m+Ie+ce*(Te+1),ie=m+(Ie+1)+ce*(Te+1),de=m+(Ie+1)+ce*Te;h.push(tt,dt,de),h.push(dt,ie,de),ne+=6}c.addGroup(v,ne,D),v+=ne,m+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function FM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ip(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const BM={clone:us,merge:cn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rp extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new X,id=new De,rd=new De;class Bn extends rp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bu*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,id,rd),t.subVectors(rd,id)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;a+=l.offsetX*s/h,t-=l.offsetY*n/f,s*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Zr=1;class kM extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn(Jr,Zr,e,t);s.layers=this.layers,this.add(s);const a=new Bn(Jr,Zr,e,t);a.layers=this.layers,this.add(a);const l=new Bn(Jr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new Bn(Jr,Zr,e,t);c.layers=this.layers,this.add(c);const h=new Bn(Jr,Zr,e,t);h.layers=this.layers,this.add(h);const f=new Bn(Jr,Zr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,c,h]=t;for(const f of t)this.remove(f);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,h,f,d]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(g,m,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class sp extends mn{constructor(e,t,n,s,a,l,c,h,f,d){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,n,s,a,l,c,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ta(5,5,5),a=new Li({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Pi});a.uniforms.tEquirect.value=t;const l=new fi(s,a),c=t.minFilter;return t.minFilter===gr&&(t.minFilter=zn),new kM(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}const Uc=new X,GM=new X,WM=new lt;class hr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uc.subVectors(n,t).cross(GM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||WM.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Fu,oo=new X;class ap{constructor(e=new hr,t=new hr,n=new hr,s=new hr,a=new hr,l=new hr){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){const n=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],h=s[3],f=s[4],d=s[5],g=s[6],m=s[7],v=s[8],M=s[9],P=s[10],x=s[11],_=s[12],U=s[13],E=s[14],T=s[15];if(n[0].setComponents(h-a,m-f,x-v,T-_).normalize(),n[1].setComponents(h+a,m+f,x+v,T+_).normalize(),n[2].setComponents(h+l,m+d,x+M,T+U).normalize(),n[3].setComponents(h-l,m-d,x-M,T-U).normalize(),n[4].setComponents(h-c,m-g,x-P,T-E).normalize(),t===hi)n[5].setComponents(h+c,m+g,x+P,T+E).normalize();else if(t===wo)n[5].setComponents(c,g,P,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let i=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function XM(i){const e=new WeakMap;function t(c,h){const f=c.array,d=c.usage,g=f.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const d=h.array,g=h._updateRange,m=h.updateRanges;if(i.bindBuffer(f,c),g.count===-1&&m.length===0&&i.bufferSubData(f,0,d),m.length!==0){for(let v=0,M=m.length;v<M;v++){const P=m[v];i.bufferSubData(f,P.start*d.BYTES_PER_ELEMENT,d,P.start,P.count)}h.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count),g.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:s,remove:a,update:l}}class Do extends Ii{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,c=Math.floor(n),h=Math.floor(s),f=c+1,d=h+1,g=e/c,m=t/h,v=[],M=[],P=[],x=[];for(let _=0;_<d;_++){const U=_*m-l;for(let E=0;E<f;E++){const T=E*g-a;M.push(T,-U,0),P.push(0,0,1),x.push(E/c),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<c;U++){const E=U+f*_,T=U+f*(_+1),K=U+1+f*(_+1),N=U+1+f*_;v.push(E,T,N),v.push(T,K,N)}this.setIndex(v),this.setAttribute("position",new di(M,3)),this.setAttribute("normal",new di(P,3)),this.setAttribute("uv",new di(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_b=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ET=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:jM,alphahash_pars_fragment:qM,alphamap_fragment:YM,alphamap_pars_fragment:KM,alphatest_fragment:$M,alphatest_pars_fragment:JM,aomap_fragment:ZM,aomap_pars_fragment:QM,batching_pars_vertex:eb,batching_vertex:tb,begin_vertex:nb,beginnormal_vertex:ib,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ab,clipping_planes_fragment:ob,clipping_planes_pars_fragment:lb,clipping_planes_pars_vertex:cb,clipping_planes_vertex:ub,color_fragment:hb,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:pb,common:mb,cube_uv_reflection_fragment:gb,defaultnormal_vertex:_b,displacementmap_pars_vertex:vb,displacementmap_vertex:xb,emissivemap_fragment:yb,emissivemap_pars_fragment:Sb,colorspace_fragment:Mb,colorspace_pars_fragment:bb,envmap_fragment:Tb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Ab,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Bb,envmap_vertex:Pb,fog_vertex:Cb,fog_pars_vertex:Rb,fog_fragment:Lb,fog_pars_fragment:Db,gradientmap_pars_fragment:Ib,lightmap_pars_fragment:Ub,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Nb,lights_pars_begin:Fb,lights_toon_fragment:zb,lights_toon_pars_fragment:Vb,lights_phong_fragment:kb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Wb,lights_fragment_begin:Xb,lights_fragment_maps:jb,lights_fragment_end:qb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:Jb,map_fragment:Zb,map_pars_fragment:Qb,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:aT,morphtarget_pars_vertex:oT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:hT,normal_pars_vertex:fT,normal_vertex:dT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:vT,opaque_fragment:xT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:bT,dithering_pars_fragment:TT,roughnessmap_fragment:ET,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:PT,shadowmap_vertex:CT,shadowmask_pars_fragment:RT,skinbase_vertex:LT,skinning_pars_vertex:DT,skinning_vertex:IT,skinnormal_vertex:UT,specularmap_fragment:OT,specularmap_pars_fragment:NT,tonemapping_fragment:FT,tonemapping_pars_fragment:BT,transmission_fragment:zT,transmission_pars_fragment:VT,uv_pars_fragment:kT,uv_pars_vertex:HT,uv_vertex:GT,worldpos_vertex:WT,background_vert:XT,background_frag:jT,backgroundCube_vert:qT,backgroundCube_frag:YT,cube_vert:KT,cube_frag:$T,depth_vert:JT,depth_frag:ZT,distanceRGBA_vert:QT,distanceRGBA_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:rE,meshbasic_vert:sE,meshbasic_frag:aE,meshlambert_vert:oE,meshlambert_frag:lE,meshmatcap_vert:cE,meshmatcap_frag:uE,meshnormal_vert:hE,meshnormal_frag:fE,meshphong_vert:dE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:_E,meshtoon_frag:vE,points_vert:xE,points_frag:yE,shadow_vert:SE,shadow_frag:ME,sprite_vert:bE,sprite_frag:TE},Ce={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Gn={basic:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:cn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:cn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:cn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:cn([Ce.lights,Ce.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Gn.physical={uniforms:cn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const lo={r:0,b:0,g:0},cr=new qn,EE=new Vt;function AE(i,e,t,n,s,a,l){const c=new vt(0);let h=a===!0?0:1,f,d,g=null,m=0,v=null;function M(U){let E=U.isScene===!0?U.background:null;return E&&E.isTexture&&(E=(U.backgroundBlurriness>0?t:e).get(E)),E}function P(U){let E=!1;const T=M(U);T===null?_(c,h):T&&T.isColor&&(_(T,1),E=!0);const K=i.xr.getEnvironmentBlendMode();K==="additive"?n.buffers.color.setClear(0,0,0,1,l):K==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(U,E){const T=M(E);T&&(T.isCubeTexture||T.mapping===Ro)?(d===void 0&&(d=new fi(new ta(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:us(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(K,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),cr.copy(E.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(cr)),d.material.toneMapped=yt.getTransfer(T.colorSpace)!==Dt,(g!==T||m!==T.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,g=T,m=T.version,v=i.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new fi(new Do(2,2),new Li({name:"BackgroundMaterial",uniforms:us(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.toneMapped=yt.getTransfer(T.colorSpace)!==Dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||m!==T.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,g=T,m=T.version,v=i.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function _(U,E){U.getRGB(lo,ip(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,E,l)}return{getClearColor:function(){return c},setClearColor:function(U,E=1){c.set(U),h=E,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,_(c,h)},render:P,addToRenderList:x}}function wE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let a=s,l=!1;function c(A,z,se,Z,te){let ce=!1;const q=g(Z,se,z);a!==q&&(a=q,f(a.object)),ce=v(A,Z,se,te),ce&&M(A,Z,se,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ce||l)&&(l=!1,T(A,z,se,Z),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return i.createVertexArray()}function f(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function g(A,z,se){const Z=se.wireframe===!0;let te=n[A.id];te===void 0&&(te={},n[A.id]=te);let ce=te[z.id];ce===void 0&&(ce={},te[z.id]=ce);let q=ce[Z];return q===void 0&&(q=m(h()),ce[Z]=q),q}function m(A){const z=[],se=[],Z=[];for(let te=0;te<t;te++)z[te]=0,se[te]=0,Z[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:se,attributeDivisors:Z,object:A,attributes:{},index:null}}function v(A,z,se,Z){const te=a.attributes,ce=z.attributes;let q=0;const fe=se.getAttributes();for(const ne in fe)if(fe[ne].location>=0){const Te=te[ne];let Ie=ce[ne];if(Ie===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(Ie=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(Ie=A.instanceColor)),Te===void 0||Te.attribute!==Ie||Ie&&Te.data!==Ie.data)return!0;q++}return a.attributesNum!==q||a.index!==Z}function M(A,z,se,Z){const te={},ce=z.attributes;let q=0;const fe=se.getAttributes();for(const ne in fe)if(fe[ne].location>=0){let Te=ce[ne];Te===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(Te=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(Te=A.instanceColor));const Ie={};Ie.attribute=Te,Te&&Te.data&&(Ie.data=Te.data),te[ne]=Ie,q++}a.attributes=te,a.attributesNum=q,a.index=Z}function P(){const A=a.newAttributes;for(let z=0,se=A.length;z<se;z++)A[z]=0}function x(A){_(A,0)}function _(A,z){const se=a.newAttributes,Z=a.enabledAttributes,te=a.attributeDivisors;se[A]=1,Z[A]===0&&(i.enableVertexAttribArray(A),Z[A]=1),te[A]!==z&&(i.vertexAttribDivisor(A,z),te[A]=z)}function U(){const A=a.newAttributes,z=a.enabledAttributes;for(let se=0,Z=z.length;se<Z;se++)z[se]!==A[se]&&(i.disableVertexAttribArray(se),z[se]=0)}function E(A,z,se,Z,te,ce,q){q===!0?i.vertexAttribIPointer(A,z,se,te,ce):i.vertexAttribPointer(A,z,se,Z,te,ce)}function T(A,z,se,Z){P();const te=Z.attributes,ce=se.getAttributes(),q=z.defaultAttributeValues;for(const fe in ce){const ne=ce[fe];if(ne.location>=0){let Ae=te[fe];if(Ae===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(Ae=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(Ae=A.instanceColor)),Ae!==void 0){const Te=Ae.normalized,Ie=Ae.itemSize,tt=e.get(Ae);if(tt===void 0)continue;const dt=tt.buffer,ie=tt.type,de=tt.bytesPerElement,Ne=ie===i.INT||ie===i.UNSIGNED_INT||Ae.gpuType===Ru;if(Ae.isInterleavedBufferAttribute){const ye=Ae.data,qe=ye.stride,nt=Ae.offset;if(ye.isInstancedInterleavedBuffer){for(let Ye=0;Ye<ne.locationSize;Ye++)_(ne.location+Ye,ye.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ye=0;Ye<ne.locationSize;Ye++)x(ne.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Ye=0;Ye<ne.locationSize;Ye++)E(ne.location+Ye,Ie/ne.locationSize,ie,Te,qe*de,(nt+Ie/ne.locationSize*Ye)*de,Ne)}else{if(Ae.isInstancedBufferAttribute){for(let ye=0;ye<ne.locationSize;ye++)_(ne.location+ye,Ae.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ye=0;ye<ne.locationSize;ye++)x(ne.location+ye);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ye=0;ye<ne.locationSize;ye++)E(ne.location+ye,Ie/ne.locationSize,ie,Te,Ie*de,Ie/ne.locationSize*ye*de,Ne)}}else if(q!==void 0){const Te=q[fe];if(Te!==void 0)switch(Te.length){case 2:i.vertexAttrib2fv(ne.location,Te);break;case 3:i.vertexAttrib3fv(ne.location,Te);break;case 4:i.vertexAttrib4fv(ne.location,Te);break;default:i.vertexAttrib1fv(ne.location,Te)}}}}U()}function K(){W();for(const A in n){const z=n[A];for(const se in z){const Z=z[se];for(const te in Z)d(Z[te].object),delete Z[te];delete z[se]}delete n[A]}}function N(A){if(n[A.id]===void 0)return;const z=n[A.id];for(const se in z){const Z=z[se];for(const te in Z)d(Z[te].object),delete Z[te];delete z[se]}delete n[A.id]}function F(A){for(const z in n){const se=n[z];if(se[A.id]===void 0)continue;const Z=se[A.id];for(const te in Z)d(Z[te].object),delete Z[te];delete se[A.id]}}function W(){D(),l=!0,a!==s&&(a=s,f(a.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:W,resetDefaultState:D,dispose:K,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:x,disableUnusedAttributes:U}}function PE(i,e,t){let n;function s(f){n=f}function a(f,d){i.drawArrays(n,f,d),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawArraysInstanced(n,f,d,g),t.update(d,n,g))}function c(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,g);let v=0;for(let M=0;M<g;M++)v+=d[M];t.update(v,n,1)}function h(f,d,g,m){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<f.length;M++)l(f[M],d[M],m[M]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,d,0,m,0,g);let M=0;for(let P=0;P<g;P++)M+=d[P];for(let P=0;P<m.length;P++)t.update(M,n,m[P])}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function CE(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==Vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const F=N===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==pi&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ui&&!F)}function h(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=h(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const g=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),P=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,K=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:P,maxAttributes:x,maxVertexUniforms:_,maxVaryings:U,maxFragmentUniforms:E,vertexTextures:T,maxSamples:K}}function RE(i){const e=this;let t=null,n=0,s=!1,a=!1;const l=new hr,c=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const v=g.length!==0||m||n!==0||s;return s=m,n=g.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=d(g,m,0)},this.setState=function(g,m,v){const M=g.clippingPlanes,P=g.clipIntersection,x=g.clipShadows,_=i.get(g);if(!s||M===null||M.length===0||a&&!x)a?d(null):f();else{const U=a?0:n,E=U*4;let T=_.clippingState||null;h.value=T,T=d(M,m,E,v);for(let K=0;K!==E;++K)T[K]=t[K];_.clippingState=T,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=U}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(g,m,v,M){const P=g!==null?g.length:0;let x=null;if(P!==0){if(x=h.value,M!==!0||x===null){const _=v+P*4,U=m.matrixWorldInverse;c.getNormalMatrix(U),(x===null||x.length<_)&&(x=new Float32Array(_));for(let E=0,T=v;E!==P;++E,T+=4)l.copy(g[E]).applyMatrix4(U,c),l.normal.toArray(x,T),x[T+3]=l.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,x}}function LE(i){let e=new WeakMap;function t(l,c){return c===qc?l.mapping=as:c===Yc&&(l.mapping=os),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===qc||c===Yc)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new HM(h.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",s),t(f.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class DE extends rp{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,c-=d*this.view.offsetY,h=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,sd=[.125,.215,.35,.446,.526,.582],pr=20,Oc=new DE,ad=new vt;let Nc=null,Fc=0,Bc=0,zc=!1;const fr=(1+Math.sqrt(5))/2,Qr=1/fr,od=[new X(-fr,Qr,0),new X(fr,Qr,0),new X(-Qr,0,fr),new X(Qr,0,fr),new X(0,fr,-Qr),new X(0,fr,Qr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Fc,Bc),this._renderer.xr.enabled=zc,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Js,format:Vn,colorSpace:Di,depthBuffer:!1},s=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IE(a)),this._blurMaterial=UE(a,e,t)}return s}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,s){const c=new Bn(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,g=d.autoClear,m=d.toneMapping;d.getClearColor(ad),d.toneMapping=Ci,d.autoClear=!1;const v=new ep({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),M=new fi(new ta,v);let P=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,P=!0):(v.color.copy(ad),P=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(c.up.set(0,h[_],0),c.lookAt(f[_],0,0)):U===1?(c.up.set(0,0,h[_]),c.lookAt(0,f[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,f[_]));const E=this._cubeSize;co(s,U*E,_>2?E:0,E,E),d.setRenderTarget(s),P&&d.render(M,c),d.render(e,c)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=m,d.autoClear=g,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===as||e.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new fi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;co(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,Oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=od[(s-a-1)%od.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,g=new fi(this._lodPlanes[s],f),m=f.uniforms,v=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*pr-1),P=a/M,x=isFinite(a)?1+Math.floor(d*P):pr;x>pr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pr}`);const _=[];let U=0;for(let F=0;F<pr;++F){const W=F/P,D=Math.exp(-W*W/2);_.push(D),F===0?U+=D:F<x&&(U+=2*D)}for(let F=0;F<_.length;F++)_[F]=_[F]/U;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:E}=this;m.dTheta.value=M,m.mipInt.value=E-n;const T=this._sizeLods[s],K=3*T*(s>E-es?s-E+es:0),N=4*(this._cubeSize-T);co(t,K,N,3*T,2*T),h.setRenderTarget(t),h.render(g,Oc)}}function IE(i){const e=[],t=[],n=[];let s=i;const a=i-es+1+sd.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);t.push(c);let h=1/c;l>i-es?h=sd[l-i+es-1]:l===0&&(h=0),n.push(h);const f=1/(c-2),d=-f,g=1+f,m=[d,d,g,d,g,g,d,d,g,g,d,g],v=6,M=6,P=3,x=2,_=1,U=new Float32Array(P*M*v),E=new Float32Array(x*M*v),T=new Float32Array(_*M*v);for(let N=0;N<v;N++){const F=N%3*2/3-1,W=N>2?0:-1,D=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];U.set(D,P*M*N),E.set(m,x*M*N);const A=[N,N,N,N,N,N];T.set(A,_*M*N)}const K=new Ii;K.setAttribute("position",new jn(U,P)),K.setAttribute("uv",new jn(E,x)),K.setAttribute("faceIndex",new jn(T,_)),e.push(K),s>es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cd(i,e,t){const n=new vr(i,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function UE(i,e,t){const n=new Float32Array(pr),s=new X(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ud(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function hd(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OE(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===qc||h===Yc,d=h===as||h===os;if(f||d){let g=e.get(c);const m=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new ld(i)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const v=c.image;return f&&v&&v.height>0||d&&v&&s(v)?(t===null&&(t=new ld(i)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function s(c){let h=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function NE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function FE(i,e,t,n){const s={},a=new WeakMap;function l(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);for(const M in m.morphAttributes){const P=m.morphAttributes[M];for(let x=0,_=P.length;x<_;x++)e.remove(P[x])}m.removeEventListener("dispose",l),delete s[m.id];const v=a.get(m);v&&(e.remove(v),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(g,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const M in m)e.update(m[M],i.ARRAY_BUFFER);const v=g.morphAttributes;for(const M in v){const P=v[M];for(let x=0,_=P.length;x<_;x++)e.update(P[x],i.ARRAY_BUFFER)}}function f(g){const m=[],v=g.index,M=g.attributes.position;let P=0;if(v!==null){const U=v.array;P=v.version;for(let E=0,T=U.length;E<T;E+=3){const K=U[E+0],N=U[E+1],F=U[E+2];m.push(K,N,N,F,F,K)}}else if(M!==void 0){const U=M.array;P=M.version;for(let E=0,T=U.length/3-1;E<T;E+=3){const K=E+0,N=E+1,F=E+2;m.push(K,N,N,F,F,K)}}else return;const x=new(Kd(m)?np:tp)(m,1);x.version=P;const _=a.get(g);_&&e.remove(_),a.set(g,x)}function d(g){const m=a.get(g);if(m){const v=g.index;v!==null&&m.version<v.version&&f(g)}else f(g);return a.get(g)}return{get:c,update:h,getWireframeAttribute:d}}function BE(i,e,t){let n;function s(m){n=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,v){i.drawElements(n,v,a,m*l),t.update(v,n,1)}function f(m,v,M){M!==0&&(i.drawElementsInstanced(n,v,a,m*l,M),t.update(v,n,M))}function d(m,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,m,0,M);let x=0;for(let _=0;_<M;_++)x+=v[_];t.update(x,n,1)}function g(m,v,M,P){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)f(m[_]/l,v[_],P[_]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,a,m,0,P,0,M);let _=0;for(let U=0;U<M;U++)_+=v[U];for(let U=0;U<P.length;U++)t.update(_,n,P[U])}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function zE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function VE(i,e,t){const n=new WeakMap,s=new $t;function a(l,c,h){const f=l.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=d!==void 0?d.length:0;let m=n.get(c);if(m===void 0||m.count!==g){let D=function(){F.dispose(),n.delete(c),c.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),P===!0&&(E=3);let T=c.attributes.position.count*E,K=1;T>e.maxTextureSize&&(K=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*K*4*g),F=new Jd(N,T,K,g);F.type=ui,F.needsUpdate=!0;const W=E*4;for(let A=0;A<g;A++){const z=x[A],se=_[A],Z=U[A],te=T*K*4*A;for(let ce=0;ce<z.count;ce++){const q=ce*W;v===!0&&(s.fromBufferAttribute(z,ce),N[te+q+0]=s.x,N[te+q+1]=s.y,N[te+q+2]=s.z,N[te+q+3]=0),M===!0&&(s.fromBufferAttribute(se,ce),N[te+q+4]=s.x,N[te+q+5]=s.y,N[te+q+6]=s.z,N[te+q+7]=0),P===!0&&(s.fromBufferAttribute(Z,ce),N[te+q+8]=s.x,N[te+q+9]=s.y,N[te+q+10]=s.z,N[te+q+11]=Z.itemSize===4?s.w:1)}}m={count:g,texture:F,size:new De(T,K)},n.set(c,m),c.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let P=0;P<f.length;P++)v+=f[P];const M=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:a}}function kE(i,e,t,n){let s=new WeakMap;function a(h){const f=n.render.frame,d=h.geometry,g=e.get(h,d);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return g}function l(){s=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}class lp extends mn{constructor(e,t,n,s,a,l,c,h,f,d=is){if(d!==is&&d!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===is&&(n=_r),n===void 0&&d===cs&&(n=ls),super(null,s,a,l,c,h,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Rn,this.minFilter=h!==void 0?h:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cp=new mn,fd=new lp(1,1),up=new Jd,hp=new EM,fp=new sp,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=dd[s];if(a===void 0&&(a=new Float32Array(s),dd[s]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function WE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function XE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function jE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),jt(t,n)}}function qE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),jt(t,n)}}function YE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),jt(t,n)}}function KE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $E(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function JE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function ZE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function QE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function tA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function iA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(fd.compareFunction=Yd,a=fd):a=cp,t.setTexture2D(e||a,s)}function rA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hp,s)}function sA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fp,s)}function aA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||up,s)}function oA(i){switch(i){case 5126:return HE;case 35664:return GE;case 35665:return WE;case 35666:return XE;case 35674:return jE;case 35675:return qE;case 35676:return YE;case 5124:case 35670:return KE;case 35667:case 35671:return $E;case 35668:case 35672:return JE;case 35669:case 35673:return ZE;case 5125:return QE;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return aA}}function lA(i,e){i.uniform1fv(this.addr,e)}function cA(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function uA(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function hA(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function fA(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dA(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pA(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mA(i,e){i.uniform1iv(this.addr,e)}function gA(i,e){i.uniform2iv(this.addr,e)}function _A(i,e){i.uniform3iv(this.addr,e)}function vA(i,e){i.uniform4iv(this.addr,e)}function xA(i,e){i.uniform1uiv(this.addr,e)}function yA(i,e){i.uniform2uiv(this.addr,e)}function SA(i,e){i.uniform3uiv(this.addr,e)}function MA(i,e){i.uniform4uiv(this.addr,e)}function bA(i,e,t){const n=this.cache,s=e.length,a=Io(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||cp,a[l])}function TA(i,e,t){const n=this.cache,s=e.length,a=Io(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||hp,a[l])}function EA(i,e,t){const n=this.cache,s=e.length,a=Io(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||fp,a[l])}function AA(i,e,t){const n=this.cache,s=e.length,a=Io(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||up,a[l])}function wA(i){switch(i){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return hA;case 35674:return fA;case 35675:return dA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return yA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return AA}}class PA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oA(t.type)}}class CA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wA(t.type)}}class RA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function vd(i,e){i.seq.push(e),i.map[e.id]=e}function LA(i,e,t){const n=i.name,s=n.length;for(Vc.lastIndex=0;;){const a=Vc.exec(n),l=Vc.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===s){vd(t,f===void 0?new PA(c,i,e):new CA(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new RA(c),vd(t,g)),t=g}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);LA(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function xd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const DA=37297;let IA=0;function UA(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function OA(i){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(i);let n;switch(e===t?n="":e===Ao&&t===Eo?n="LinearDisplayP3ToLinearSRGB":e===Eo&&t===Ao&&(n="LinearSRGBToLinearDisplayP3"),i){case Di:case Lo:return[n,"LinearTransferOETF"];case Hn:case Nu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+UA(i.getShaderSource(e),l)}else return s}function NA(i,e){const t=OA(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FA(i,e){let t;switch(e){case QS:t="Linear";break;case eM:t="Reinhard";break;case tM:t="OptimizedCineon";break;case nM:t="ACESFilmic";break;case rM:t="AgX";break;case sM:t="Neutral";break;case iM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new X;function BA(){yt.getLuminanceCoefficients(uo);const i=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function VA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function Gs(i){return i!==""}function Sd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(HA,WA)}const GA=new Map;function WA(i,e){let t=ot[e];if(t===void 0){const n=GA.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(i){return i.replace(XA,jA)}function jA(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Td(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function YA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function $A(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Od:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function JA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ZA(i,e,t,n){const s=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=qA(t),f=YA(t),d=KA(t),g=$A(t),m=JA(t),v=zA(t),M=VA(a),P=s.createProgram();let x,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Gs).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(x=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),_=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ci?FA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,NA("linearToOutputTexel",t.outputColorSpace),BA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),l=Tu(l),l=Sd(l,t),l=Md(l,t),c=Tu(c),c=Sd(c,t),c=Md(c,t),l=bd(l),c=bd(c),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=U+x+l,T=U+_+c,K=xd(s,s.VERTEX_SHADER,E),N=xd(s,s.FRAGMENT_SHADER,T);s.attachShader(P,K),s.attachShader(P,N),t.index0AttributeName!==void 0?s.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function F(z){if(i.debug.checkShaderErrors){const se=s.getProgramInfoLog(P).trim(),Z=s.getShaderInfoLog(K).trim(),te=s.getShaderInfoLog(N).trim();let ce=!0,q=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,K,N);else{const fe=yd(s,K,"vertex"),ne=yd(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+se+`
`+fe+`
`+ne)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Z===""||te==="")&&(q=!1);q&&(z.diagnostics={runnable:ce,programLog:se,vertexShader:{log:Z,prefix:x},fragmentShader:{log:te,prefix:_}})}s.deleteShader(K),s.deleteShader(N),W=new So(s,P),D=kA(s,P)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(P,DA)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=K,this.fragmentShader=N,this}let QA=0;class ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tw(e),t.set(e,n)),n}}class tw{constructor(e){this.id=QA++,this.code=e,this.usedTimes=0}}function nw(i,e,t,n,s,a,l){const c=new Zd,h=new ew,f=new Set,d=[],g=s.logarithmicDepthBuffer,m=s.vertexTextures;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(D){return f.add(D),D===0?"uv":`uv${D}`}function x(D,A,z,se,Z){const te=se.fog,ce=Z.geometry,q=D.isMeshStandardMaterial?se.environment:null,fe=(D.isMeshStandardMaterial?t:e).get(D.envMap||q),ne=fe&&fe.mapping===Ro?fe.image.height:null,Ae=M[D.type];D.precision!==null&&(v=s.getMaxPrecision(D.precision),v!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",v,"instead."));const Te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ie=Te!==void 0?Te.length:0;let tt=0;ce.morphAttributes.position!==void 0&&(tt=1),ce.morphAttributes.normal!==void 0&&(tt=2),ce.morphAttributes.color!==void 0&&(tt=3);let dt,ie,de,Ne;if(Ae){const pt=Gn[Ae];dt=pt.vertexShader,ie=pt.fragmentShader}else dt=D.vertexShader,ie=D.fragmentShader,h.update(D),de=h.getVertexShaderID(D),Ne=h.getFragmentShaderID(D);const ye=i.getRenderTarget(),qe=Z.isInstancedMesh===!0,nt=Z.isBatchedMesh===!0,Ye=!!D.map,at=!!D.matcap,L=!!fe,ve=!!D.aoMap,pe=!!D.lightMap,we=!!D.bumpMap,ae=!!D.normalMap,Xe=!!D.displacementMap,Ee=!!D.emissiveMap,Oe=!!D.metalnessMap,I=!!D.roughnessMap,b=D.anisotropy>0,Y=D.clearcoat>0,he=D.dispersion>0,oe=D.iridescence>0,ue=D.sheen>0,Ge=D.transmission>0,be=b&&!!D.anisotropyMap,Ue=Y&&!!D.clearcoatMap,et=Y&&!!D.clearcoatNormalMap,_e=Y&&!!D.clearcoatRoughnessMap,Re=oe&&!!D.iridescenceMap,ut=oe&&!!D.iridescenceThicknessMap,He=ue&&!!D.sheenColorMap,Fe=ue&&!!D.sheenRoughnessMap,Qe=!!D.specularMap,rt=!!D.specularColorMap,Mt=!!D.specularIntensityMap,V=Ge&&!!D.transmissionMap,xe=Ge&&!!D.thicknessMap,re=!!D.gradientMap,le=!!D.alphaMap,Me=D.alphaTest>0,Ke=!!D.alphaHash,ft=!!D.extensions;let It=Ci;D.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(It=i.toneMapping);const Nt={shaderID:Ae,shaderType:D.type,shaderName:D.name,vertexShader:dt,fragmentShader:ie,defines:D.defines,customVertexShaderID:de,customFragmentShaderID:Ne,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:v,batching:nt,batchingColor:nt&&Z._colorsTexture!==null,instancing:qe,instancingColor:qe&&Z.instanceColor!==null,instancingMorph:qe&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Di,alphaToCoverage:!!D.alphaToCoverage,map:Ye,matcap:at,envMap:L,envMapMode:L&&fe.mapping,envMapCubeUVHeight:ne,aoMap:ve,lightMap:pe,bumpMap:we,normalMap:ae,displacementMap:m&&Xe,emissiveMap:Ee,normalMapObjectSpace:ae&&D.normalMapType===cM,normalMapTangentSpace:ae&&D.normalMapType===qd,metalnessMap:Oe,roughnessMap:I,anisotropy:b,anisotropyMap:be,clearcoat:Y,clearcoatMap:Ue,clearcoatNormalMap:et,clearcoatRoughnessMap:_e,dispersion:he,iridescence:oe,iridescenceMap:Re,iridescenceThicknessMap:ut,sheen:ue,sheenColorMap:He,sheenRoughnessMap:Fe,specularMap:Qe,specularColorMap:rt,specularIntensityMap:Mt,transmission:Ge,transmissionMap:V,thicknessMap:xe,gradientMap:re,opaque:D.transparent===!1&&D.blending===ns&&D.alphaToCoverage===!1,alphaMap:le,alphaTest:Me,alphaHash:Ke,combine:D.combine,mapUv:Ye&&P(D.map.channel),aoMapUv:ve&&P(D.aoMap.channel),lightMapUv:pe&&P(D.lightMap.channel),bumpMapUv:we&&P(D.bumpMap.channel),normalMapUv:ae&&P(D.normalMap.channel),displacementMapUv:Xe&&P(D.displacementMap.channel),emissiveMapUv:Ee&&P(D.emissiveMap.channel),metalnessMapUv:Oe&&P(D.metalnessMap.channel),roughnessMapUv:I&&P(D.roughnessMap.channel),anisotropyMapUv:be&&P(D.anisotropyMap.channel),clearcoatMapUv:Ue&&P(D.clearcoatMap.channel),clearcoatNormalMapUv:et&&P(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&P(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&P(D.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&P(D.iridescenceThicknessMap.channel),sheenColorMapUv:He&&P(D.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&P(D.sheenRoughnessMap.channel),specularMapUv:Qe&&P(D.specularMap.channel),specularColorMapUv:rt&&P(D.specularColorMap.channel),specularIntensityMapUv:Mt&&P(D.specularIntensityMap.channel),transmissionMapUv:V&&P(D.transmissionMap.channel),thicknessMapUv:xe&&P(D.thicknessMap.channel),alphaMapUv:le&&P(D.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ae||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(Ye||le),fog:!!te,useFog:D.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Ye&&D.map.isVideoTexture===!0&&yt.getTransfer(D.map.colorSpace)===Dt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ci,flipSided:D.side===pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ft&&D.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&D.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Nt.vertexUv1s=f.has(1),Nt.vertexUv2s=f.has(2),Nt.vertexUv3s=f.has(3),f.clear(),Nt}function _(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const z in D.defines)A.push(z),A.push(D.defines[z]);return D.isRawShaderMaterial===!1&&(U(A,D),E(A,D),A.push(i.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function U(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function E(D,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),D.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.skinning&&c.enable(4),A.morphTargets&&c.enable(5),A.morphNormals&&c.enable(6),A.morphColors&&c.enable(7),A.premultipliedAlpha&&c.enable(8),A.shadowMapEnabled&&c.enable(9),A.doubleSided&&c.enable(10),A.flipSided&&c.enable(11),A.useDepthPacking&&c.enable(12),A.dithering&&c.enable(13),A.transmission&&c.enable(14),A.sheen&&c.enable(15),A.opaque&&c.enable(16),A.pointsUvs&&c.enable(17),A.decodeVideoTexture&&c.enable(18),A.alphaToCoverage&&c.enable(19),D.push(c.mask)}function T(D){const A=M[D.type];let z;if(A){const se=Gn[A];z=BM.clone(se.uniforms)}else z=D.uniforms;return z}function K(D,A){let z;for(let se=0,Z=d.length;se<Z;se++){const te=d[se];if(te.cacheKey===A){z=te,++z.usedTimes;break}}return z===void 0&&(z=new ZA(i,A,D,a),d.push(z)),z}function N(D){if(--D.usedTimes===0){const A=d.indexOf(D);d[A]=d[d.length-1],d.pop(),D.destroy()}}function F(D){h.remove(D)}function W(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:T,acquireProgram:K,releaseProgram:N,releaseShaderCache:F,programs:d,dispose:W}}function iw(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function rw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(g,m,v,M,P,x){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:m,material:v,groupOrder:M,renderOrder:g.renderOrder,z:P,group:x},i[e]=_):(_.id=g.id,_.object=g,_.geometry=m,_.material=v,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=P,_.group=x),e++,_}function c(g,m,v,M,P,x){const _=l(g,m,v,M,P,x);v.transmission>0?n.push(_):v.transparent===!0?s.push(_):t.push(_)}function h(g,m,v,M,P,x){const _=l(g,m,v,M,P,x);v.transmission>0?n.unshift(_):v.transparent===!0?s.unshift(_):t.unshift(_)}function f(g,m){t.length>1&&t.sort(g||rw),n.length>1&&n.sort(m||Ed),s.length>1&&s.sort(m||Ed)}function d(){for(let g=e,m=i.length;g<m;g++){const v=i[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:h,finish:d,sort:f}}function sw(){let i=new WeakMap;function e(n,s){const a=i.get(n);let l;return a===void 0?(l=new Ad,i.set(n,[l])):s>=a.length?(l=new Ad,a.push(l)):l=a[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function aw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new vt};break;case"SpotLight":t={position:new X,direction:new X,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function ow(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lw=0;function cw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uw(i){const e=new aw,t=ow(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new X);const s=new X,a=new Vt,l=new Vt;function c(f){let d=0,g=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let v=0,M=0,P=0,x=0,_=0,U=0,E=0,T=0,K=0,N=0,F=0;f.sort(cw);for(let D=0,A=f.length;D<A;D++){const z=f[D],se=z.color,Z=z.intensity,te=z.distance,ce=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=se.r*Z,g+=se.g*Z,m+=se.b*Z;else if(z.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(z.sh.coefficients[q],Z);F++}else if(z.isDirectionalLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const fe=z.shadow,ne=t.get(z);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize=fe.mapSize,n.directionalShadow[v]=ne,n.directionalShadowMap[v]=ce,n.directionalShadowMatrix[v]=z.shadow.matrix,U++}n.directional[v]=q,v++}else if(z.isSpotLight){const q=e.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(se).multiplyScalar(Z),q.distance=te,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,n.spot[P]=q;const fe=z.shadow;if(z.map&&(n.spotLightMap[K]=z.map,K++,fe.updateMatrices(z),z.castShadow&&N++),n.spotLightMatrix[P]=fe.matrix,z.castShadow){const ne=t.get(z);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize=fe.mapSize,n.spotShadow[P]=ne,n.spotShadowMap[P]=ce,T++}P++}else if(z.isRectAreaLight){const q=e.get(z);q.color.copy(se).multiplyScalar(Z),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),n.rectArea[x]=q,x++}else if(z.isPointLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),q.distance=z.distance,q.decay=z.decay,z.castShadow){const fe=z.shadow,ne=t.get(z);ne.shadowIntensity=fe.intensity,ne.shadowBias=fe.bias,ne.shadowNormalBias=fe.normalBias,ne.shadowRadius=fe.radius,ne.shadowMapSize=fe.mapSize,ne.shadowCameraNear=fe.camera.near,ne.shadowCameraFar=fe.camera.far,n.pointShadow[M]=ne,n.pointShadowMap[M]=ce,n.pointShadowMatrix[M]=z.shadow.matrix,E++}n.point[M]=q,M++}else if(z.isHemisphereLight){const q=e.get(z);q.skyColor.copy(z.color).multiplyScalar(Z),q.groundColor.copy(z.groundColor).multiplyScalar(Z),n.hemi[_]=q,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=g,n.ambient[2]=m;const W=n.hash;(W.directionalLength!==v||W.pointLength!==M||W.spotLength!==P||W.rectAreaLength!==x||W.hemiLength!==_||W.numDirectionalShadows!==U||W.numPointShadows!==E||W.numSpotShadows!==T||W.numSpotMaps!==K||W.numLightProbes!==F)&&(n.directional.length=v,n.spot.length=P,n.rectArea.length=x,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=T+K-N,n.spotLightMap.length=K,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=F,W.directionalLength=v,W.pointLength=M,W.spotLength=P,W.rectAreaLength=x,W.hemiLength=_,W.numDirectionalShadows=U,W.numPointShadows=E,W.numSpotShadows=T,W.numSpotMaps=K,W.numLightProbes=F,n.version=lw++)}function h(f,d){let g=0,m=0,v=0,M=0,P=0;const x=d.matrixWorldInverse;for(let _=0,U=f.length;_<U;_++){const E=f[_];if(E.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),g++}else if(E.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),v++}else if(E.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(x),l.identity(),a.copy(E.matrixWorld),a.premultiply(x),l.extractRotation(a),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),M++}else if(E.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(x),m++}else if(E.isHemisphereLight){const T=n.hemi[P];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(x),P++}}}return{setup:c,setupView:h,state:n}}function wd(i){const e=new uw(i),t=[],n=[];function s(d){f.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function l(d){n.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function hw(i){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let c;return l===void 0?(c=new wd(i),e.set(s,[c])):a>=l.length?(c=new wd(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class fw extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dw extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gw(i,e,t){let n=new ap;const s=new De,a=new De,l=new $t,c=new fw({depthPacking:lM}),h=new dw,f={},d=t.maxTextureSize,g={[Ri]:pn,[pn]:Ri,[ci]:ci},m=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const M=new Ii;M.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new fi(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let _=this.type;this.render=function(N,F,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const D=i.getRenderTarget(),A=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),se=i.state;se.setBlending(Pi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=_!==li&&this.type===li,te=_===li&&this.type!==li;for(let ce=0,q=N.length;ce<q;ce++){const fe=N[ce],ne=fe.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const Ae=ne.getFrameExtents();if(s.multiply(Ae),a.copy(ne.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Ae.x),s.x=a.x*Ae.x,ne.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Ae.y),s.y=a.y*Ae.y,ne.mapSize.y=a.y)),ne.map===null||Z===!0||te===!0){const Ie=this.type!==li?{minFilter:Rn,magFilter:Rn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new vr(s.x,s.y,Ie),ne.map.texture.name=fe.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const Te=ne.getViewportCount();for(let Ie=0;Ie<Te;Ie++){const tt=ne.getViewport(Ie);l.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),se.viewport(l),ne.updateMatrices(fe,Ie),n=ne.getFrustum(),T(F,W,ne.camera,fe,this.type)}ne.isPointLightShadow!==!0&&this.type===li&&U(ne,W),ne.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(D,A,z)};function U(N,F){const W=e.update(P);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new vr(s.x,s.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,W,m,P,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,W,v,P,null)}function E(N,F,W,D){let A=null;const z=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)A=z;else if(A=W.isPointLight===!0?h:c,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const se=A.uuid,Z=F.uuid;let te=f[se];te===void 0&&(te={},f[se]=te);let ce=te[Z];ce===void 0&&(ce=A.clone(),te[Z]=ce,F.addEventListener("dispose",K)),A=ce}if(A.visible=F.visible,A.wireframe=F.wireframe,D===li?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:g[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=i.properties.get(A);se.light=W}return A}function T(N,F,W,D,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===li)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),te=N.material;if(Array.isArray(te)){const ce=Z.groups;for(let q=0,fe=ce.length;q<fe;q++){const ne=ce[q],Ae=te[ne.materialIndex];if(Ae&&Ae.visible){const Te=E(N,Ae,D,A);N.onBeforeShadow(i,N,F,W,Z,Te,ne),i.renderBufferDirect(W,null,Z,Te,N,ne),N.onAfterShadow(i,N,F,W,Z,Te,ne)}}}else if(te.visible){const ce=E(N,te,D,A);N.onBeforeShadow(i,N,F,W,Z,ce,null),i.renderBufferDirect(W,null,Z,ce,N,null),N.onAfterShadow(i,N,F,W,Z,ce,null)}}const se=N.children;for(let Z=0,te=se.length;Z<te;Z++)T(se[Z],F,W,D,A)}function K(N){N.target.removeEventListener("dispose",K);for(const W in f){const D=f[W],A=N.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}function _w(i){function e(){let V=!1;const xe=new $t;let re=null;const le=new $t(0,0,0,0);return{setMask:function(Me){re!==Me&&!V&&(i.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){V=Me},setClear:function(Me,Ke,ft,It,Nt){Nt===!0&&(Me*=It,Ke*=It,ft*=It),xe.set(Me,Ke,ft,It),le.equals(xe)===!1&&(i.clearColor(Me,Ke,ft,It),le.copy(xe))},reset:function(){V=!1,re=null,le.set(-1,0,0,0)}}}function t(){let V=!1,xe=null,re=null,le=null;return{setTest:function(Me){Me?Ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Me){xe!==Me&&!V&&(i.depthMask(Me),xe=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case WS:i.depthFunc(i.NEVER);break;case XS:i.depthFunc(i.ALWAYS);break;case jS:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case qS:i.depthFunc(i.EQUAL);break;case YS:i.depthFunc(i.GEQUAL);break;case KS:i.depthFunc(i.GREATER);break;case $S:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Me}},setLocked:function(Me){V=Me},setClear:function(Me){le!==Me&&(i.clearDepth(Me),le=Me)},reset:function(){V=!1,xe=null,re=null,le=null}}}function n(){let V=!1,xe=null,re=null,le=null,Me=null,Ke=null,ft=null,It=null,Nt=null;return{setTest:function(pt){V||(pt?Ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(pt){xe!==pt&&!V&&(i.stencilMask(pt),xe=pt)},setFunc:function(pt,kt,un){(re!==pt||le!==kt||Me!==un)&&(i.stencilFunc(pt,kt,un),re=pt,le=kt,Me=un)},setOp:function(pt,kt,un){(Ke!==pt||ft!==kt||It!==un)&&(i.stencilOp(pt,kt,un),Ke=pt,ft=kt,It=un)},setLocked:function(pt){V=pt},setClear:function(pt){Nt!==pt&&(i.clearStencil(pt),Nt=pt)},reset:function(){V=!1,xe=null,re=null,le=null,Me=null,Ke=null,ft=null,It=null,Nt=null}}}const s=new e,a=new t,l=new n,c=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],v=null,M=!1,P=null,x=null,_=null,U=null,E=null,T=null,K=null,N=new vt(0,0,0),F=0,W=!1,D=null,A=null,z=null,se=null,Z=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,q=0;const fe=i.getParameter(i.VERSION);fe.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ce=q>=1):fe.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ce=q>=2);let ne=null,Ae={};const Te=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),tt=new $t().fromArray(Te),dt=new $t().fromArray(Ie);function ie(V,xe,re,le){const Me=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(V,Ke),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<re;ft++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(xe+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ke}const de={};de[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Ne(i.DEPTH_TEST),a.setFunc(bo),we(!1),ae(If),Ne(i.CULL_FACE),ve(Pi);function Ne(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function ye(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function qe(V,xe){return d[V]!==xe?(i.bindFramebuffer(V,xe),d[V]=xe,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function nt(V,xe){let re=m,le=!1;if(V){re=g.get(xe),re===void 0&&(re=[],g.set(xe,re));const Me=V.textures;if(re.length!==Me.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,ft=Me.length;Ke<ft;Ke++)re[Ke]=i.COLOR_ATTACHMENT0+Ke;re.length=Me.length,le=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,le=!0);le&&i.drawBuffers(re)}function Ye(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const at={[dr]:i.FUNC_ADD,[wS]:i.FUNC_SUBTRACT,[PS]:i.FUNC_REVERSE_SUBTRACT};at[CS]=i.MIN,at[RS]=i.MAX;const L={[LS]:i.ZERO,[DS]:i.ONE,[IS]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[zS]:i.SRC_ALPHA_SATURATE,[FS]:i.DST_COLOR,[OS]:i.DST_ALPHA,[US]:i.ONE_MINUS_SRC_COLOR,[jc]:i.ONE_MINUS_SRC_ALPHA,[BS]:i.ONE_MINUS_DST_COLOR,[NS]:i.ONE_MINUS_DST_ALPHA,[VS]:i.CONSTANT_COLOR,[kS]:i.ONE_MINUS_CONSTANT_COLOR,[HS]:i.CONSTANT_ALPHA,[GS]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(V,xe,re,le,Me,Ke,ft,It,Nt,pt){if(V===Pi){M===!0&&(ye(i.BLEND),M=!1);return}if(M===!1&&(Ne(i.BLEND),M=!0),V!==AS){if(V!==P||pt!==W){if((x!==dr||E!==dr)&&(i.blendEquation(i.FUNC_ADD),x=dr,E=dr),pt)switch(V){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uf:i.blendFunc(i.ONE,i.ONE);break;case Of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,U=null,T=null,K=null,N.set(0,0,0),F=0,P=V,W=pt}return}Me=Me||xe,Ke=Ke||re,ft=ft||le,(xe!==x||Me!==E)&&(i.blendEquationSeparate(at[xe],at[Me]),x=xe,E=Me),(re!==_||le!==U||Ke!==T||ft!==K)&&(i.blendFuncSeparate(L[re],L[le],L[Ke],L[ft]),_=re,U=le,T=Ke,K=ft),(It.equals(N)===!1||Nt!==F)&&(i.blendColor(It.r,It.g,It.b,Nt),N.copy(It),F=Nt),P=V,W=!1}function pe(V,xe){V.side===ci?ye(i.CULL_FACE):Ne(i.CULL_FACE);let re=V.side===pn;xe&&(re=!re),we(re),V.blending===ns&&V.transparent===!1?ve(Pi):ve(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const le=V.stencilWrite;l.setTest(le),le&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ee(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(V){D!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),D=V)}function ae(V){V!==bS?(Ne(i.CULL_FACE),V!==A&&(V===If?i.cullFace(i.BACK):V===TS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),A=V}function Xe(V){V!==z&&(ce&&i.lineWidth(V),z=V)}function Ee(V,xe,re){V?(Ne(i.POLYGON_OFFSET_FILL),(se!==xe||Z!==re)&&(i.polygonOffset(xe,re),se=xe,Z=re)):ye(i.POLYGON_OFFSET_FILL)}function Oe(V){V?Ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function I(V){V===void 0&&(V=i.TEXTURE0+te-1),ne!==V&&(i.activeTexture(V),ne=V)}function b(V,xe,re){re===void 0&&(ne===null?re=i.TEXTURE0+te-1:re=ne);let le=Ae[re];le===void 0&&(le={type:void 0,texture:void 0},Ae[re]=le),(le.type!==V||le.texture!==xe)&&(ne!==re&&(i.activeTexture(re),ne=re),i.bindTexture(V,xe||de[V]),le.type=V,le.texture=xe)}function Y(){const V=Ae[ne];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(V){tt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),tt.copy(V))}function Fe(V){dt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),dt.copy(V))}function Qe(V,xe){let re=h.get(xe);re===void 0&&(re=new WeakMap,h.set(xe,re));let le=re.get(V);le===void 0&&(le=i.getUniformBlockIndex(xe,V.name),re.set(V,le))}function rt(V,xe){const le=h.get(xe).get(V);c.get(xe)!==le&&(i.uniformBlockBinding(xe,le,V.__bindingPointIndex),c.set(xe,le))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,Ae={},d={},g=new WeakMap,m=[],v=null,M=!1,P=null,x=null,_=null,U=null,E=null,T=null,K=null,N=new vt(0,0,0),F=0,W=!1,D=null,A=null,z=null,se=null,Z=null,tt.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:Ne,disable:ye,bindFramebuffer:qe,drawBuffers:nt,useProgram:Ye,setBlending:ve,setMaterial:pe,setFlipSided:we,setCullFace:ae,setLineWidth:Xe,setPolygonOffset:Ee,setScissorTest:Oe,activeTexture:I,bindTexture:b,unbindTexture:Y,compressedTexImage2D:he,compressedTexImage3D:oe,texImage2D:Re,texImage3D:ut,updateUBOMapping:Qe,uniformBlockBinding:rt,texStorage2D:et,texStorage3D:_e,texSubImage2D:ue,texSubImage3D:Ge,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:He,viewport:Fe,reset:Mt}}function Pd(i,e,t,n){const s=vw(n);switch(t){case Vd:return i*e;case Hd:return i*e;case Gd:return i*e*2;case Wd:return i*e/s.components*s.byteLength;case Iu:return i*e/s.components*s.byteLength;case Xd:return i*e*2/s.components*s.byteLength;case Uu:return i*e*2/s.components*s.byteLength;case kd:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case Ou:return i*e*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:case eu:return Math.max(i,16)*Math.max(e,8)/4;case Jc:case Qc:return Math.max(i,8)*Math.max(e,8)/2;case tu:case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _u:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case vu:case xu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jd:case yu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Su:case Mu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vw(i){switch(i){case pi:case Fd:return{byteLength:1,components:1};case qs:case Bd:case Js:return{byteLength:2,components:1};case Lu:case Du:return{byteLength:2,components:4};case _r:case Ru:case ui:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xw(i,e,t,n,s,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new De,d=new WeakMap;let g;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,b){return v?new OffscreenCanvas(I,b):Po("canvas")}function P(I,b,Y){let he=1;const oe=Oe(I);if((oe.width>Y||oe.height>Y)&&(he=Y/Math.max(oe.width,oe.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(he*oe.width),Ge=Math.floor(he*oe.height);g===void 0&&(g=M(ue,Ge));const be=b?M(ue,Ge):g;return be.width=ue,be.height=Ge,be.getContext("2d").drawImage(I,0,0,ue,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ue+"x"+Ge+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function x(I){return I.generateMipmaps&&I.minFilter!==Rn&&I.minFilter!==zn}function _(I){i.generateMipmap(I)}function U(I,b,Y,he,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=b;if(b===i.RED&&(Y===i.FLOAT&&(ue=i.R32F),Y===i.HALF_FLOAT&&(ue=i.R16F),Y===i.UNSIGNED_BYTE&&(ue=i.R8)),b===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ue=i.R8UI),Y===i.UNSIGNED_SHORT&&(ue=i.R16UI),Y===i.UNSIGNED_INT&&(ue=i.R32UI),Y===i.BYTE&&(ue=i.R8I),Y===i.SHORT&&(ue=i.R16I),Y===i.INT&&(ue=i.R32I)),b===i.RG&&(Y===i.FLOAT&&(ue=i.RG32F),Y===i.HALF_FLOAT&&(ue=i.RG16F),Y===i.UNSIGNED_BYTE&&(ue=i.RG8)),b===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ue=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ue=i.RG16UI),Y===i.UNSIGNED_INT&&(ue=i.RG32UI),Y===i.BYTE&&(ue=i.RG8I),Y===i.SHORT&&(ue=i.RG16I),Y===i.INT&&(ue=i.RG32I)),b===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),b===i.RGBA){const Ge=oe?To:yt.getTransfer(he);Y===i.FLOAT&&(ue=i.RGBA32F),Y===i.HALF_FLOAT&&(ue=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ue=Ge===Dt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(I,b){let Y;return I?b===null||b===_r||b===ls?Y=i.DEPTH24_STENCIL8:b===ui?Y=i.DEPTH32F_STENCIL8:b===qs&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_r||b===ls?Y=i.DEPTH_COMPONENT24:b===ui?Y=i.DEPTH_COMPONENT32F:b===qs&&(Y=i.DEPTH_COMPONENT16),Y}function T(I,b){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rn&&I.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function K(I){const b=I.target;b.removeEventListener("dispose",K),F(b),b.isVideoTexture&&d.delete(b)}function N(I){const b=I.target;b.removeEventListener("dispose",N),D(b)}function F(I){const b=n.get(I);if(b.__webglInit===void 0)return;const Y=I.source,he=m.get(Y);if(he){const oe=he[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&W(I),Object.keys(he).length===0&&m.delete(Y)}n.remove(I)}function W(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const Y=I.source,he=m.get(Y);delete he[b.__cacheKey],l.memory.textures--}function D(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let oe=0;oe<b.__webglFramebuffer[he].length;oe++)i.deleteFramebuffer(b.__webglFramebuffer[he][oe]);else i.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)i.deleteFramebuffer(b.__webglFramebuffer[he]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=I.textures;for(let he=0,oe=Y.length;he<oe;he++){const ue=n.get(Y[he]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),l.memory.textures--),n.remove(Y[he])}n.remove(I)}let A=0;function z(){A=0}function se(){const I=A;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),A+=1,I}function Z(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function te(I,b){const Y=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const he=I.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(Y,I,b);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+b)}function ce(I,b){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){dt(Y,I,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+b)}function q(I,b){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){dt(Y,I,b);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+b)}function fe(I,b){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ie(Y,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+b)}const ne={[Kc]:i.REPEAT,[mr]:i.CLAMP_TO_EDGE,[$c]:i.MIRRORED_REPEAT},Ae={[Rn]:i.NEAREST,[aM]:i.NEAREST_MIPMAP_NEAREST,[Ga]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[pc]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},Te={[uM]:i.NEVER,[gM]:i.ALWAYS,[hM]:i.LESS,[Yd]:i.LEQUAL,[fM]:i.EQUAL,[mM]:i.GEQUAL,[dM]:i.GREATER,[pM]:i.NOTEQUAL};function Ie(I,b){if(b.type===ui&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===pc||b.magFilter===Ga||b.magFilter===gr||b.minFilter===zn||b.minFilter===pc||b.minFilter===Ga||b.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ne[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ne[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ne[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ae[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ae[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==Ga&&b.minFilter!==gr||b.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function tt(I,b){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",K));const he=b.source;let oe=m.get(he);oe===void 0&&(oe={},m.set(he,oe));const ue=Z(b);if(ue!==I.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Y=!0),oe[ue].usedTimes++;const Ge=oe[I.__cacheKey];Ge!==void 0&&(oe[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&W(b)),I.__cacheKey=ue,I.__webglTexture=oe[ue].texture}return Y}function dt(I,b,Y){let he=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=i.TEXTURE_3D);const oe=tt(I,b),ue=b.source;t.bindTexture(he,I.__webglTexture,i.TEXTURE0+Y);const Ge=n.get(ue);if(ue.version!==Ge.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);const be=yt.getPrimaries(yt.workingColorSpace),Ue=b.colorSpace===wi?null:yt.getPrimaries(b.colorSpace),et=b.colorSpace===wi||be===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let _e=P(b.image,!1,s.maxTextureSize);_e=Ee(b,_e);const Re=a.convert(b.format,b.colorSpace),ut=a.convert(b.type);let He=U(b.internalFormat,Re,ut,b.colorSpace,b.isVideoTexture);Ie(he,b);let Fe;const Qe=b.mipmaps,rt=b.isVideoTexture!==!0,Mt=Ge.__version===void 0||oe===!0,V=ue.dataReady,xe=T(b,_e);if(b.isDepthTexture)He=E(b.format===cs,b.type),Mt&&(rt?t.texStorage2D(i.TEXTURE_2D,1,He,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,He,_e.width,_e.height,0,Re,ut,null));else if(b.isDataTexture)if(Qe.length>0){rt&&Mt&&t.texStorage2D(i.TEXTURE_2D,xe,He,Qe[0].width,Qe[0].height);for(let re=0,le=Qe.length;re<le;re++)Fe=Qe[re],rt?V&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Re,ut,Fe.data):t.texImage2D(i.TEXTURE_2D,re,He,Fe.width,Fe.height,0,Re,ut,Fe.data);b.generateMipmaps=!1}else rt?(Mt&&t.texStorage2D(i.TEXTURE_2D,xe,He,_e.width,_e.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Re,ut,_e.data)):t.texImage2D(i.TEXTURE_2D,0,He,_e.width,_e.height,0,Re,ut,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,He,Qe[0].width,Qe[0].height,_e.depth);for(let re=0,le=Qe.length;re<le;re++)if(Fe=Qe[re],b.format!==Vn)if(Re!==null)if(rt){if(V)if(b.layerUpdates.size>0){const Me=Pd(Fe.width,Fe.height,b.format,b.type);for(const Ke of b.layerUpdates){const ft=Fe.data.subarray(Ke*Me/Fe.data.BYTES_PER_ELEMENT,(Ke+1)*Me/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ke,Fe.width,Fe.height,1,Re,ft,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,_e.depth,Re,Fe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,He,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,_e.depth,Re,ut,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,He,Fe.width,Fe.height,_e.depth,0,Re,ut,Fe.data)}else{rt&&Mt&&t.texStorage2D(i.TEXTURE_2D,xe,He,Qe[0].width,Qe[0].height);for(let re=0,le=Qe.length;re<le;re++)Fe=Qe[re],b.format!==Vn?Re!==null?rt?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Re,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,He,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Re,ut,Fe.data):t.texImage2D(i.TEXTURE_2D,re,He,Fe.width,Fe.height,0,Re,ut,Fe.data)}else if(b.isDataArrayTexture)if(rt){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,He,_e.width,_e.height,_e.depth),V)if(b.layerUpdates.size>0){const re=Pd(_e.width,_e.height,b.format,b.type);for(const le of b.layerUpdates){const Me=_e.data.subarray(le*re/_e.data.BYTES_PER_ELEMENT,(le+1)*re/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,_e.width,_e.height,1,Re,ut,Me)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,ut,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,_e.width,_e.height,_e.depth,0,Re,ut,_e.data);else if(b.isData3DTexture)rt?(Mt&&t.texStorage3D(i.TEXTURE_3D,xe,He,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,ut,_e.data)):t.texImage3D(i.TEXTURE_3D,0,He,_e.width,_e.height,_e.depth,0,Re,ut,_e.data);else if(b.isFramebufferTexture){if(Mt)if(rt)t.texStorage2D(i.TEXTURE_2D,xe,He,_e.width,_e.height);else{let re=_e.width,le=_e.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,He,re,le,0,Re,ut,null),re>>=1,le>>=1}}else if(Qe.length>0){if(rt&&Mt){const re=Oe(Qe[0]);t.texStorage2D(i.TEXTURE_2D,xe,He,re.width,re.height)}for(let re=0,le=Qe.length;re<le;re++)Fe=Qe[re],rt?V&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Re,ut,Fe):t.texImage2D(i.TEXTURE_2D,re,He,Re,ut,Fe);b.generateMipmaps=!1}else if(rt){if(Mt){const re=Oe(_e);t.texStorage2D(i.TEXTURE_2D,xe,He,re.width,re.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,ut,_e)}else t.texImage2D(i.TEXTURE_2D,0,He,Re,ut,_e);x(b)&&_(he),Ge.__version=ue.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ie(I,b,Y){if(b.image.length!==6)return;const he=tt(I,b),oe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ue=n.get(oe);if(oe.version!==ue.__version||he===!0){t.activeTexture(i.TEXTURE0+Y);const Ge=yt.getPrimaries(yt.workingColorSpace),be=b.colorSpace===wi?null:yt.getPrimaries(b.colorSpace),Ue=b.colorSpace===wi||Ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,_e=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!et&&!_e?Re[le]=P(b.image[le],!0,s.maxCubemapSize):Re[le]=_e?b.image[le].image:b.image[le],Re[le]=Ee(b,Re[le]);const ut=Re[0],He=a.convert(b.format,b.colorSpace),Fe=a.convert(b.type),Qe=U(b.internalFormat,He,Fe,b.colorSpace),rt=b.isVideoTexture!==!0,Mt=ue.__version===void 0||he===!0,V=oe.dataReady;let xe=T(b,ut);Ie(i.TEXTURE_CUBE_MAP,b);let re;if(et){rt&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Qe,ut.width,ut.height);for(let le=0;le<6;le++){re=Re[le].mipmaps;for(let Me=0;Me<re.length;Me++){const Ke=re[Me];b.format!==Vn?He!==null?rt?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,Ke.width,Ke.height,He,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,Qe,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,Ke.width,Ke.height,He,Fe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,Qe,Ke.width,Ke.height,0,He,Fe,Ke.data)}}}else{if(re=b.mipmaps,rt&&Mt){re.length>0&&xe++;const le=Oe(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Qe,le.width,le.height)}for(let le=0;le<6;le++)if(_e){rt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,He,Fe,Re[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,Re[le].width,Re[le].height,0,He,Fe,Re[le].data);for(let Me=0;Me<re.length;Me++){const ft=re[Me].image[le].image;rt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,ft.width,ft.height,He,Fe,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,Qe,ft.width,ft.height,0,He,Fe,ft.data)}}else{rt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,He,Fe,Re[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,He,Fe,Re[le]);for(let Me=0;Me<re.length;Me++){const Ke=re[Me];rt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,He,Fe,Ke.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,Qe,He,Fe,Ke.image[le])}}}x(b)&&_(i.TEXTURE_CUBE_MAP),ue.__version=oe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function de(I,b,Y,he,oe,ue){const Ge=a.convert(Y.format,Y.colorSpace),be=a.convert(Y.type),Ue=U(Y.internalFormat,Ge,be,Y.colorSpace);if(!n.get(b).__hasExternalTextures){const _e=Math.max(1,b.width>>ue),Re=Math.max(1,b.height>>ue);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ue,Ue,_e,Re,b.depth,0,Ge,be,null):t.texImage2D(oe,ue,Ue,_e,Re,0,Ge,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ae(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,oe,n.get(Y).__webglTexture,0,we(b)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,oe,n.get(Y).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(I,b,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const he=b.depthTexture,oe=he&&he.isDepthTexture?he.type:null,ue=E(b.stencilBuffer,oe),Ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=we(b);ae(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ue,b.width,b.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,I)}else{const he=b.textures;for(let oe=0;oe<he.length;oe++){const ue=he[oe],Ge=a.convert(ue.format,ue.colorSpace),be=a.convert(ue.type),Ue=U(ue.internalFormat,Ge,be,ue.colorSpace),et=we(b);Y&&ae(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ue,b.width,b.height):ae(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),te(b.depthTexture,0);const he=n.get(b.depthTexture).__webglTexture,oe=we(b);if(b.depthTexture.format===is)ae(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(b.depthTexture.format===cs)ae(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function qe(I){const b=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ye(b.__webglFramebuffer,I)}else if(Y){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]=i.createRenderbuffer(),Ne(b.__webglDepthbuffer[he],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Ne(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(I,b,Y){const he=n.get(I);b!==void 0&&de(he.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&qe(I)}function Ye(I){const b=I.texture,Y=n.get(I),he=n.get(b);I.addEventListener("dispose",N);const oe=I.textures,ue=I.isWebGLCubeRenderTarget===!0,Ge=oe.length>1;if(Ge||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=b.version,l.memory.textures++),ue){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)Y.__webglFramebuffer[be][Ue]=i.createFramebuffer()}else Y.__webglFramebuffer[be]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)Y.__webglFramebuffer[be]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let be=0,Ue=oe.length;be<Ue;be++){const et=n.get(oe[be]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),l.memory.textures++)}if(I.samples>0&&ae(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let be=0;be<oe.length;be++){const Ue=oe[be];Y.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[be]);const et=a.convert(Ue.format,Ue.colorSpace),_e=a.convert(Ue.type),Re=U(Ue.internalFormat,et,_e,Ue.colorSpace,I.isXRRenderTarget===!0),ut=we(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Re,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Y.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)de(Y.__webglFramebuffer[be][Ue],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue);else de(Y.__webglFramebuffer[be],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let be=0,Ue=oe.length;be<Ue;be++){const et=oe[be],_e=n.get(et);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Ie(i.TEXTURE_2D,et),de(Y.__webglFramebuffer,I,et,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),x(et)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),Ie(be,b),b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)de(Y.__webglFramebuffer[Ue],I,b,i.COLOR_ATTACHMENT0,be,Ue);else de(Y.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,be,0);x(b)&&_(be),t.unbindTexture()}I.depthBuffer&&qe(I)}function at(I){const b=I.textures;for(let Y=0,he=b.length;Y<he;Y++){const oe=b[Y];if(x(oe)){const ue=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ge=n.get(oe).__webglTexture;t.bindTexture(ue,Ge),_(ue),t.unbindTexture()}}}const L=[],ve=[];function pe(I){if(I.samples>0){if(ae(I)===!1){const b=I.textures,Y=I.width,he=I.height;let oe=i.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(I),be=b.length>1;if(be)for(let Ue=0;Ue<b.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const et=n.get(b[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,Y,he,0,0,Y,he,oe,i.NEAREST),h===!0&&(L.length=0,ve.length=0,L.push(i.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(L.push(ue),ve.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<b.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const et=n.get(b[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function we(I){return Math.min(s.maxSamples,I.samples)}function ae(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(I){const b=l.render.frame;d.get(I)!==b&&(d.set(I,b),I.update())}function Ee(I,b){const Y=I.colorSpace,he=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Di&&Y!==wi&&(yt.getTransfer(Y)===Dt?(he!==Vn||oe!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Oe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=se,this.resetTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=ce,this.setTexture3D=q,this.setTextureCube=fe,this.rebindTextures=nt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ae}function yw(i,e){function t(n,s=wi){let a;const l=yt.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===Lu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return i.BYTE;if(n===Bd)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Ru)return i.INT;if(n===_r)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===Js)return i.HALF_FLOAT;if(n===Vd)return i.ALPHA;if(n===kd)return i.RGB;if(n===Vn)return i.RGBA;if(n===Hd)return i.LUMINANCE;if(n===Gd)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Wd)return i.RED;if(n===Iu)return i.RED_INTEGER;if(n===Xd)return i.RG;if(n===Uu)return i.RG_INTEGER;if(n===Ou)return i.RGBA_INTEGER;if(n===go||n===_o||n===vo||n===xo)if(l===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Zc||n===Qc||n===eu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tu||n===nu||n===iu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===tu||n===nu)return l===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===iu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ru||n===su||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ru)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===su)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===au)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ou)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===du)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_u)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===vu||n===xu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===yo)return l===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===yu||n===Su||n===Mu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===yo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===yu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Sw extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ho extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mw={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const P of e.hand.values()){const x=t.getJointPose(P,n),_=this._getHandJoint(f,P);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const d=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=d.position.distanceTo(g.position),v=.02,M=.005;f.inputState.pinching&&m>v+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=v-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Mw)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ho;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new mn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Li({vertexShader:bw,fragmentShader:Tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new Do(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Aw extends hs{constructor(e,t){super();const n=this;let s=null,a=1,l=null,c="local-floor",h=1,f=null,d=null,g=null,m=null,v=null,M=null;const P=new Ew,x=t.getContextAttributes();let _=null,U=null;const E=[],T=[],K=new De;let N=null;const F=new Bn;F.layers.enable(1),F.viewport=new $t;const W=new Bn;W.layers.enable(2),W.viewport=new $t;const D=[F,W],A=new Sw;A.layers.enable(1),A.layers.enable(2);let z=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=E[ie];return de===void 0&&(de=new kc,E[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=E[ie];return de===void 0&&(de=new kc,E[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=E[ie];return de===void 0&&(de=new kc,E[ie]=de),de.getHandSpace()};function Z(ie){const de=T.indexOf(ie.inputSource);if(de===-1)return;const Ne=E[de];Ne!==void 0&&(Ne.update(ie.inputSource,ie.frame,f||l),Ne.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ce);for(let ie=0;ie<E.length;ie++){const de=T[ie];de!==null&&(T[ie]=null,E[ie].disconnect(de))}z=null,se=null,P.reset(),e.setRenderTarget(_),v=null,m=null,g=null,s=null,U=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(K.width,K.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){c=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(K),s.renderState.layers===void 0){const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new vr(v.framebufferWidth,v.framebufferHeight,{format:Vn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let de=null,Ne=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?cs:is,Ne=x.stencil?ls:_r);const qe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};g=new XRWebGLBinding(s,t),m=g.createProjectionLayer(qe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),U=new vr(m.textureWidth,m.textureHeight,{format:Vn,type:pi,depthTexture:new lp(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await s.requestReferenceSpace(c),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function ce(ie){for(let de=0;de<ie.removed.length;de++){const Ne=ie.removed[de],ye=T.indexOf(Ne);ye>=0&&(T[ye]=null,E[ye].disconnect(Ne))}for(let de=0;de<ie.added.length;de++){const Ne=ie.added[de];let ye=T.indexOf(Ne);if(ye===-1){for(let nt=0;nt<E.length;nt++)if(nt>=T.length){T.push(Ne),ye=nt;break}else if(T[nt]===null){T[nt]=Ne,ye=nt;break}if(ye===-1)break}const qe=E[ye];qe&&qe.connect(Ne)}}const q=new X,fe=new X;function ne(ie,de,Ne){q.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Ne.matrixWorld);const ye=q.distanceTo(fe),qe=de.projectionMatrix.elements,nt=Ne.projectionMatrix.elements,Ye=qe[14]/(qe[10]-1),at=qe[14]/(qe[10]+1),L=(qe[9]+1)/qe[5],ve=(qe[9]-1)/qe[5],pe=(qe[8]-1)/qe[0],we=(nt[8]+1)/nt[0],ae=Ye*pe,Xe=Ye*we,Ee=ye/(-pe+we),Oe=Ee*-pe;de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Oe),ie.translateZ(Ee),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const I=Ye+Ee,b=at+Ee,Y=ae-Oe,he=Xe+(ye-Oe),oe=L*at/b*I,ue=ve*at/b*I;ie.projectionMatrix.makePerspective(Y,he,oe,ue,I,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function Ae(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;P.texture!==null&&(ie.near=P.depthNear,ie.far=P.depthFar),A.near=W.near=F.near=ie.near,A.far=W.far=F.far=ie.far,(z!==A.near||se!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,se=A.far,F.near=z,F.far=se,W.near=z,W.far=se,F.updateProjectionMatrix(),W.updateProjectionMatrix(),ie.updateProjectionMatrix());const de=ie.parent,Ne=A.cameras;Ae(A,de);for(let ye=0;ye<Ne.length;ye++)Ae(Ne[ye],de);Ne.length===2?ne(A,F,W):A.projectionMatrix.copy(F.projectionMatrix),Te(ie,A,de)};function Te(ie,de,Ne){Ne===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(Ne.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=bu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&v===null))return h},this.setFoveation=function(ie){h=ie,m!==null&&(m.fixedFoveation=ie),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ie)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(A)};let Ie=null;function tt(ie,de){if(d=de.getViewerPose(f||l),M=de,d!==null){const Ne=d.views;v!==null&&(e.setRenderTargetFramebuffer(U,v.framebuffer),e.setRenderTarget(U));let ye=!1;Ne.length!==A.cameras.length&&(A.cameras.length=0,ye=!0);for(let nt=0;nt<Ne.length;nt++){const Ye=Ne[nt];let at=null;if(v!==null)at=v.getViewport(Ye);else{const ve=g.getViewSubImage(m,Ye);at=ve.viewport,nt===0&&(e.setRenderTargetTextures(U,ve.colorTexture,m.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(U))}let L=D[nt];L===void 0&&(L=new Bn,L.layers.enable(nt),L.viewport=new $t,D[nt]=L),L.matrix.fromArray(Ye.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ye.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(at.x,at.y,at.width,at.height),nt===0&&(A.matrix.copy(L.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ye===!0&&A.cameras.push(L)}const qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){const nt=g.getDepthInformation(Ne[0]);nt&&nt.isValid&&nt.texture&&P.init(e,nt,s.renderState)}}for(let Ne=0;Ne<E.length;Ne++){const ye=T[Ne],qe=E[Ne];ye!==null&&qe!==void 0&&qe.update(ye,de,f||l)}Ie&&Ie(ie,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),M=null}const dt=new op;dt.setAnimationLoop(tt),this.setAnimationLoop=function(ie){Ie=ie},this.dispose=function(){}}}const ur=new qn,ww=new Vt;function Pw(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,ip(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,U,E,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(x,_):_.isMeshToonMaterial?(a(x,_),g(x,_)):_.isMeshPhongMaterial?(a(x,_),d(x,_)):_.isMeshStandardMaterial?(a(x,_),m(x,_),_.isMeshPhysicalMaterial&&v(x,_,T)):_.isMeshMatcapMaterial?(a(x,_),M(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),P(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?h(x,_,U,E):_.isSpriteMaterial?f(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===pn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===pn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const U=e.get(_),E=U.envMap,T=U.envMapRotation;E&&(x.envMap.value=E,ur.copy(T),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.envMapRotation.value.setFromMatrix4(ww.makeRotationFromEuler(ur)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,U,E){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*U,x.scale.value=E*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function g(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,U){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===pn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function P(x,_){const U=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cw(i,e,t,n){let s={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,E){const T=E.program;n.uniformBlockBinding(U,T)}function f(U,E){let T=s[U.id];T===void 0&&(M(U),T=d(U),s[U.id]=T,U.addEventListener("dispose",x));const K=E.program;n.updateUBOMapping(U,K);const N=e.render.frame;a[U.id]!==N&&(m(U),a[U.id]=N)}function d(U){const E=g();U.__bindingPointIndex=E;const T=i.createBuffer(),K=U.__size,N=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,K,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function g(){for(let U=0;U<c;U++)if(l.indexOf(U)===-1)return l.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(U){const E=s[U.id],T=U.uniforms,K=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let N=0,F=T.length;N<F;N++){const W=Array.isArray(T[N])?T[N]:[T[N]];for(let D=0,A=W.length;D<A;D++){const z=W[D];if(v(z,N,D,K)===!0){const se=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let te=0;for(let ce=0;ce<Z.length;ce++){const q=Z[ce],fe=P(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,se+te,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,te),te+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,se,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(U,E,T,K){const N=U.value,F=E+"_"+T;if(K[F]===void 0)return typeof N=="number"||typeof N=="boolean"?K[F]=N:K[F]=N.clone(),!0;{const W=K[F];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return K[F]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function M(U){const E=U.uniforms;let T=0;const K=16;for(let F=0,W=E.length;F<W;F++){const D=Array.isArray(E[F])?E[F]:[E[F]];for(let A=0,z=D.length;A<z;A++){const se=D[A],Z=Array.isArray(se.value)?se.value:[se.value];for(let te=0,ce=Z.length;te<ce;te++){const q=Z[te],fe=P(q),ne=T%K,Ae=ne%fe.boundary,Te=ne+Ae;T+=Ae,Te!==0&&K-Te<fe.storage&&(T+=K-Te),se.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=T,T+=fe.storage}}}const N=T%K;return N>0&&(T+=K-N),U.__size=T,U.__cache={},this}function P(U){const E={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(E.boundary=4,E.storage=4):U.isVector2?(E.boundary=8,E.storage=8):U.isVector3||U.isColor?(E.boundary=16,E.storage=12):U.isVector4?(E.boundary=16,E.storage=16):U.isMatrix3?(E.boundary=48,E.storage=48):U.isMatrix4?(E.boundary=64,E.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),E}function x(U){const E=U.target;E.removeEventListener("dispose",x);const T=l.indexOf(E.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function _(){for(const U in s)i.deleteBuffer(s[U]);l=[],s={},a={}}return{bind:h,update:f,dispose:_}}class hP{constructor(e={}){const{canvas:t=vM(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=l;const v=new Uint32Array(4),M=new Int32Array(4);let P=null,x=null;const _=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Ci,this.toneMappingExposure=1;const E=this;let T=!1,K=0,N=0,F=null,W=-1,D=null;const A=new $t,z=new $t;let se=null;const Z=new vt(0);let te=0,ce=t.width,q=t.height,fe=1,ne=null,Ae=null;const Te=new $t(0,0,ce,q),Ie=new $t(0,0,ce,q);let tt=!1;const dt=new ap;let ie=!1,de=!1;const Ne=new Vt,ye=new X,qe=new $t,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function at(){return F===null?fe:1}let L=n;function ve(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cu}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Me,!1),L===null){const k="webgl2";if(L=ve(k,C),L===null)throw ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pe,we,ae,Xe,Ee,Oe,I,b,Y,he,oe,ue,Ge,be,Ue,et,_e,Re,ut,He,Fe,Qe,rt,Mt;function V(){pe=new NE(L),pe.init(),Qe=new yw(L,pe),we=new CE(L,pe,e,Qe),ae=new _w(L),Xe=new zE(L),Ee=new iw,Oe=new xw(L,pe,ae,Ee,we,Qe,Xe),I=new LE(E),b=new OE(E),Y=new XM(L),rt=new wE(L,Y),he=new FE(L,Y,Xe,rt),oe=new kE(L,he,Y,Xe),ut=new VE(L,we,Oe),et=new RE(Ee),ue=new nw(E,I,b,pe,we,rt,et),Ge=new Pw(E,Ee),be=new sw,Ue=new hw(pe),Re=new AE(E,I,b,ae,oe,m,h),_e=new gw(E,oe,we),Mt=new Cw(L,Xe,we,ae),He=new PE(L,pe,Xe),Fe=new BE(L,pe,Xe),Xe.programs=ue.programs,E.capabilities=we,E.extensions=pe,E.properties=Ee,E.renderLists=be,E.shadowMap=_e,E.state=ae,E.info=Xe}V();const xe=new Aw(E,L);this.xr=xe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ce,q,!1))},this.getSize=function(C){return C.set(ce,q)},this.setSize=function(C,k,$=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,q=k,t.width=Math.floor(C*fe),t.height=Math.floor(k*fe),$===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(ce*fe,q*fe).floor()},this.setDrawingBufferSize=function(C,k,$){ce=C,q=k,fe=$,t.width=Math.floor(C*$),t.height=Math.floor(k*$),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(Te)},this.setViewport=function(C,k,$,J){C.isVector4?Te.set(C.x,C.y,C.z,C.w):Te.set(C,k,$,J),ae.viewport(A.copy(Te).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(Ie)},this.setScissor=function(C,k,$,J){C.isVector4?Ie.set(C.x,C.y,C.z,C.w):Ie.set(C,k,$,J),ae.scissor(z.copy(Ie).multiplyScalar(fe).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){ae.setScissorTest(tt=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){Ae=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(C=!0,k=!0,$=!0){let J=0;if(C){let G=!1;if(F!==null){const Se=F.texture.format;G=Se===Ou||Se===Uu||Se===Iu}if(G){const Se=F.texture.type,Le=Se===pi||Se===_r||Se===qs||Se===ls||Se===Lu||Se===Du,Be=Re.getClearColor(),ze=Re.getClearAlpha(),$e=Be.r,Je=Be.g,je=Be.b;Le?(v[0]=$e,v[1]=Je,v[2]=je,v[3]=ze,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=$e,M[1]=Je,M[2]=je,M[3]=ze,L.clearBufferiv(L.COLOR,0,M))}else J|=L.COLOR_BUFFER_BIT}k&&(J|=L.DEPTH_BUFFER_BIT),$&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),be.dispose(),Ue.dispose(),Ee.dispose(),I.dispose(),b.dispose(),oe.dispose(),rt.dispose(),Mt.dispose(),ue.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",un),xe.removeEventListener("sessionend",yr),Ln.stop()};function re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Xe.autoReset,k=_e.enabled,$=_e.autoUpdate,J=_e.needsUpdate,G=_e.type;V(),Xe.autoReset=C,_e.enabled=k,_e.autoUpdate=$,_e.needsUpdate=J,_e.type=G}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ke(C){const k=C.target;k.removeEventListener("dispose",Ke),ft(k)}function ft(C){It(C),Ee.remove(C)}function It(C){const k=Ee.get(C).programs;k!==void 0&&(k.forEach(function($){ue.releaseProgram($)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,$,J,G,Se){k===null&&(k=nt);const Le=G.isMesh&&G.matrixWorld.determinant()<0,Be=ps(C,k,$,J,G);ae.setMaterial(J,Le);let ze=$.index,$e=1;if(J.wireframe===!0){if(ze=he.getWireframeAttribute($),ze===void 0)return;$e=2}const Je=$.drawRange,je=$.attributes.position;let ct=Je.start*$e,Et=(Je.start+Je.count)*$e;Se!==null&&(ct=Math.max(ct,Se.start*$e),Et=Math.min(Et,(Se.start+Se.count)*$e)),ze!==null?(ct=Math.max(ct,0),Et=Math.min(Et,ze.count)):je!=null&&(ct=Math.max(ct,0),Et=Math.min(Et,je.count));const At=Et-ct;if(At<0||At===1/0)return;rt.setup(G,J,Be,$,ze);let Jt,mt=He;if(ze!==null&&(Jt=Y.get(ze),mt=Fe,mt.setIndex(Jt)),G.isMesh)J.wireframe===!0?(ae.setLineWidth(J.wireframeLinewidth*at()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(G.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),ae.setLineWidth(Ve*at()),G.isLineSegments?mt.setMode(L.LINES):G.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else G.isPoints?mt.setMode(L.POINTS):G.isSprite&&mt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)mt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,Ot=G._multiDrawCounts,gt=G._multiDrawCount,on=ze?Y.get(ze).bytesPerElement:1,vn=Ee.get(J).currentProgram.getUniforms();for(let Ht=0;Ht<gt;Ht++)vn.setValue(L,"_gl_DrawID",Ht),mt.render(Ve[Ht]/on,Ot[Ht])}else if(G.isInstancedMesh)mt.renderInstances(ct,At,G.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ot=Math.min($.instanceCount,Ve);mt.renderInstances(ct,At,Ot)}else mt.render(ct,At)};function Nt(C,k,$){C.transparent===!0&&C.side===ci&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,_n(C,k,$),C.side=Ri,C.needsUpdate=!0,_n(C,k,$),C.side=ci):_n(C,k,$)}this.compile=function(C,k,$=null){$===null&&($=C),x=Ue.get($),x.init(k),U.push(x),$.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),C!==$&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const J=new Set;return C.traverse(function(G){const Se=G.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const Be=Se[Le];Nt(Be,$,G),J.add(Be)}else Nt(Se,$,G),J.add(Se)}),U.pop(),x=null,J},this.compileAsync=function(C,k,$=null){const J=this.compile(C,k,$);return new Promise(G=>{function Se(){if(J.forEach(function(Le){Ee.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){G(C);return}setTimeout(Se,10)}pe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let pt=null;function kt(C){pt&&pt(C)}function un(){Ln.stop()}function yr(){Ln.start()}const Ln=new op;Ln.setAnimationLoop(kt),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(C){pt=C,xe.setAnimationLoop(C),C===null?Ln.stop():Ln.start()},xe.addEventListener("sessionstart",un),xe.addEventListener("sessionend",yr),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(k),k=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,k,F),x=Ue.get(C,U.length),x.init(k),U.push(x),Ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),dt.setFromProjectionMatrix(Ne),de=this.localClippingEnabled,ie=et.init(this.clippingPlanes,de),P=be.get(C,_.length),P.init(),_.push(P),xe.enabled===!0&&xe.isPresenting===!0){const Se=E.xr.getDepthSensingMesh();Se!==null&&Ui(Se,k,-1/0,E.sortObjects)}Ui(C,k,0,E.sortObjects),P.finish(),E.sortObjects===!0&&P.sort(ne,Ae),Ye=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ye&&Re.addToRenderList(P,C),this.info.render.frame++,ie===!0&&et.beginShadows();const $=x.state.shadowsArray;_e.render($,C,k),ie===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=P.opaque,G=P.transmissive;if(x.setupLights(),k.isArrayCamera){const Se=k.cameras;if(G.length>0)for(let Le=0,Be=Se.length;Le<Be;Le++){const ze=Se[Le];Mr(J,G,C,ze)}Ye&&Re.render(C);for(let Le=0,Be=Se.length;Le<Be;Le++){const ze=Se[Le];Sr(P,C,ze,ze.viewport)}}else G.length>0&&Mr(J,G,C,k),Ye&&Re.render(C),Sr(P,C,k);F!==null&&(Oe.updateMultisampleRenderTarget(F),Oe.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(E,C,k),rt.resetDefaultState(),W=-1,D=null,U.pop(),U.length>0?(x=U[U.length-1],ie===!0&&et.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?P=_[_.length-1]:P=null};function Ui(C,k,$,J){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||dt.intersectsSprite(C)){J&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const Le=oe.update(C),Be=C.material;Be.visible&&P.push(C,Le,Be,$,qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||dt.intersectsObject(C))){const Le=oe.update(C),Be=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),qe.copy(Le.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(Be)){const ze=Le.groups;for(let $e=0,Je=ze.length;$e<Je;$e++){const je=ze[$e],ct=Be[je.materialIndex];ct&&ct.visible&&P.push(C,Le,ct,$,qe.z,je)}}else Be.visible&&P.push(C,Le,Be,$,qe.z,null)}}const Se=C.children;for(let Le=0,Be=Se.length;Le<Be;Le++)Ui(Se[Le],k,$,J)}function Sr(C,k,$,J){const G=C.opaque,Se=C.transmissive,Le=C.transparent;x.setupLightsView($),ie===!0&&et.setGlobalState(E.clippingPlanes,$),J&&ae.viewport(A.copy(J)),G.length>0&&mi(G,k,$),Se.length>0&&mi(Se,k,$),Le.length>0&&mi(Le,k,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Mr(C,k,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[J.id]===void 0&&(x.state.transmissionRenderTarget[J.id]=new vr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Js:pi,minFilter:gr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[J.id],Le=J.viewport||A;Se.setSize(Le.z,Le.w);const Be=E.getRenderTarget();E.setRenderTarget(Se),E.getClearColor(Z),te=E.getClearAlpha(),te<1&&E.setClearColor(16777215,.5),E.clear(),Ye&&Re.render($);const ze=E.toneMapping;E.toneMapping=Ci;const $e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),ie===!0&&et.setGlobalState(E.clippingPlanes,J),mi(C,$,J),Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let je=0,ct=k.length;je<ct;je++){const Et=k[je],At=Et.object,Jt=Et.geometry,mt=Et.material,Ve=Et.group;if(mt.side===ci&&At.layers.test(J.layers)){const Ot=mt.side;mt.side=pn,mt.needsUpdate=!0,br(At,$,J,Jt,mt,Ve),mt.side=Ot,mt.needsUpdate=!0,Je=!0}}Je===!0&&(Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se))}E.setRenderTarget(Be),E.setClearColor(Z,te),$e!==void 0&&(J.viewport=$e),E.toneMapping=ze}function mi(C,k,$){const J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,Se=C.length;G<Se;G++){const Le=C[G],Be=Le.object,ze=Le.geometry,$e=J===null?Le.material:J,Je=Le.group;Be.layers.test($.layers)&&br(Be,k,$,ze,$e,Je)}}function br(C,k,$,J,G,Se){C.onBeforeRender(E,k,$,J,G,Se),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,E.renderBufferDirect($,k,J,G,C,Se),G.side=Ri,G.needsUpdate=!0,E.renderBufferDirect($,k,J,G,C,Se),G.side=ci):E.renderBufferDirect($,k,J,G,C,Se),C.onAfterRender(E,k,$,J,G,Se)}function _n(C,k,$){k.isScene!==!0&&(k=nt);const J=Ee.get(C),G=x.state.lights,Se=x.state.shadowsArray,Le=G.state.version,Be=ue.getParameters(C,G.state,Se,k,$),ze=ue.getProgramCacheKey(Be);let $e=J.programs;J.environment=C.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(C.isMeshStandardMaterial?b:I).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Ke),$e=new Map,J.programs=$e);let Je=$e.get(ze);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===Le)return Tr(C,Be),Je}else Be.uniforms=ue.getUniforms(C),C.onBeforeCompile(Be,E),Je=ue.acquireProgram(Be,ze),$e.set(ze,Je),J.uniforms=Be.uniforms;const je=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=et.uniform),Tr(C,Be),J.needsLights=ms(C),J.lightsStateVersion=Le,J.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.directionalShadowMap.value=G.state.directionalShadowMap,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotShadowMap.value=G.state.spotShadowMap,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMap.value=G.state.pointShadowMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function Oi(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=So.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Tr(C,k){const $=Ee.get(C);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function ps(C,k,$,J,G){k.isScene!==!0&&(k=nt),Oe.resetTextureUnits();const Se=k.fog,Le=J.isMeshStandardMaterial?k.environment:null,Be=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Di,ze=(J.isMeshStandardMaterial?b:I).get(J.envMap||Le),$e=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color;let At=Ci;J.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(At=E.toneMapping);const Jt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=Jt!==void 0?Jt.length:0,Ve=Ee.get(J),Ot=x.state.lights;if(ie===!0&&(de===!0||C!==D)){const Qt=C===D&&J.id===W;et.setState(J,C,Qt)}let gt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ot.state.version||Ve.outputColorSpace!==Be||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==ze||J.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==et.numPlanes||Ve.numIntersection!==et.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==Je||Ve.morphTargets!==je||Ve.morphNormals!==ct||Ve.morphColors!==Et||Ve.toneMapping!==At||Ve.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Ve.__version=J.version);let on=Ve.currentProgram;gt===!0&&(on=_n(J,k,G));let vn=!1,Ht=!1,Ni=!1;const bt=on.getUniforms(),An=Ve.uniforms;if(ae.useProgram(on.program)&&(vn=!0,Ht=!0,Ni=!0),J.id!==W&&(W=J.id,Ht=!0),vn||D!==C){bt.setValue(L,"projectionMatrix",C.projectionMatrix),bt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Qt=bt.map.cameraPosition;Qt!==void 0&&Qt.setValue(L,ye.setFromMatrixPosition(C.matrixWorld)),we.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&bt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Ht=!0,Ni=!0)}if(G.isSkinnedMesh){bt.setOptional(L,G,"bindMatrix"),bt.setOptional(L,G,"bindMatrixInverse");const Qt=G.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),bt.setValue(L,"boneTexture",Qt.boneTexture,Oe))}G.isBatchedMesh&&(bt.setOptional(L,G,"batchingTexture"),bt.setValue(L,"batchingTexture",G._matricesTexture,Oe),bt.setOptional(L,G,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",G._indirectTexture,Oe),bt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",G._colorsTexture,Oe));const Fi=$.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&ut.update(G,$,on),(Ht||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,bt.setValue(L,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(An.envMap.value=ze,An.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(An.envMapIntensity.value=k.environmentIntensity),Ht&&(bt.setValue(L,"toneMappingExposure",E.toneMappingExposure),Ve.needsLights&&Dn(An,Ni),Se&&J.fog===!0&&Ge.refreshFogUniforms(An,Se),Ge.refreshMaterialUniforms(An,J,fe,q,x.state.transmissionRenderTarget[C.id]),So.upload(L,Oi(Ve),An,Oe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(So.upload(L,Oi(Ve),An,Oe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&bt.setValue(L,"center",G.center),bt.setValue(L,"modelViewMatrix",G.modelViewMatrix),bt.setValue(L,"normalMatrix",G.normalMatrix),bt.setValue(L,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Qt=J.uniformsGroups;for(let Bi=0,gs=Qt.length;Bi<gs;Bi++){const In=Qt[Bi];Mt.update(In,on),Mt.bind(In,on)}}return on}function Dn(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function ms(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,k,$){Ee.get(C.texture).__webglTexture=k,Ee.get(C.depthTexture).__webglTexture=$;const J=Ee.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const $=Ee.get(C);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,$=0){F=C,K=k,N=$;let J=!0,G=null,Se=!1,Le=!1;if(C){const ze=Ee.get(C);ze.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(L.FRAMEBUFFER,null),J=!1):ze.__webglFramebuffer===void 0?Oe.setupRenderTarget(C):ze.__hasExternalTextures&&Oe.rebindTextures(C,Ee.get(C.texture).__webglTexture,Ee.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const Je=Ee.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?G=Je[k][$]:G=Je[k],Se=!0):C.samples>0&&Oe.useMultisampledRTT(C)===!1?G=Ee.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?G=Je[$]:G=Je,A.copy(C.viewport),z.copy(C.scissor),se=C.scissorTest}else A.copy(Te).multiplyScalar(fe).floor(),z.copy(Ie).multiplyScalar(fe).floor(),se=tt;if(ae.bindFramebuffer(L.FRAMEBUFFER,G)&&J&&ae.drawBuffers(C,G),ae.viewport(A),ae.scissor(z),ae.setScissorTest(se),Se){const ze=Ee.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,ze.__webglTexture,$)}else if(Le){const ze=Ee.get(C.texture),$e=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,$||0,$e)}W=-1},this.readRenderTargetPixels=function(C,k,$,J,G,Se,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){ae.bindFramebuffer(L.FRAMEBUFFER,Be);try{const ze=C.texture,$e=ze.format,Je=ze.type;if(!we.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-J&&$>=0&&$<=C.height-G&&L.readPixels(k,$,J,G,Qe.convert($e),Qe.convert(Je),Se)}finally{const ze=F!==null?Ee.get(F).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,k,$,J,G,Se,Le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){ae.bindFramebuffer(L.FRAMEBUFFER,Be);try{const ze=C.texture,$e=ze.format,Je=ze.type;if(!we.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-J&&$>=0&&$<=C.height-G){const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(k,$,J,G,Qe.convert($e),Qe.convert(Je),0),L.flush();const ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await xM(L,ct,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se)}finally{L.deleteBuffer(je),L.deleteSync(ct)}return Se}}finally{const ze=F!==null?Ee.get(F).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,k=null,$=0){C.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-$),G=Math.floor(C.image.width*J),Se=Math.floor(C.image.height*J),Le=k!==null?k.x:0,Be=k!==null?k.y:0;Oe.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Le,Be,G,Se),ae.unbindTexture()},this.copyTextureToTexture=function(C,k,$=null,J=null,G=0){C.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],k=arguments[2],G=arguments[3]||0,$=null);let Se,Le,Be,ze,$e,Je;$!==null?(Se=$.max.x-$.min.x,Le=$.max.y-$.min.y,Be=$.min.x,ze=$.min.y):(Se=C.image.width,Le=C.image.height,Be=0,ze=0),J!==null?($e=J.x,Je=J.y):($e=0,Je=0);const je=Qe.convert(k.format),ct=Qe.convert(k.type);Oe.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Et=L.getParameter(L.UNPACK_ROW_LENGTH),At=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Jt=L.getParameter(L.UNPACK_SKIP_PIXELS),mt=L.getParameter(L.UNPACK_SKIP_ROWS),Ve=L.getParameter(L.UNPACK_SKIP_IMAGES),Ot=C.isCompressedTexture?C.mipmaps[G]:C.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,$e,Je,Se,Le,je,ct,Ot.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,$e,Je,Ot.width,Ot.height,je,Ot.data):L.texSubImage2D(L.TEXTURE_2D,G,$e,Je,Se,Le,je,ct,Ot),L.pixelStorei(L.UNPACK_ROW_LENGTH,Et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,mt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve),G===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(C,k,$=null,J=null,G=0){C.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,C=arguments[2],k=arguments[3],G=arguments[4]||0);let Se,Le,Be,ze,$e,Je,je,ct,Et;const At=C.isCompressedTexture?C.mipmaps[G]:C.image;$!==null?(Se=$.max.x-$.min.x,Le=$.max.y-$.min.y,Be=$.max.z-$.min.z,ze=$.min.x,$e=$.min.y,Je=$.min.z):(Se=At.width,Le=At.height,Be=At.depth,ze=0,$e=0,Je=0),J!==null?(je=J.x,ct=J.y,Et=J.z):(je=0,ct=0,Et=0);const Jt=Qe.convert(k.format),mt=Qe.convert(k.type);let Ve;if(k.isData3DTexture)Oe.setTexture3D(k,0),Ve=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Oe.setTexture2DArray(k,0),Ve=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Ot=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),vn=L.getParameter(L.UNPACK_SKIP_ROWS),Ht=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Je),C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ve,G,je,ct,Et,Se,Le,Be,Jt,mt,At.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ve,G,je,ct,Et,Se,Le,Be,Jt,At.data):L.texSubImage3D(Ve,G,je,ct,Et,Se,Le,Be,Jt,mt,At),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht),G===0&&k.generateMipmaps&&L.generateMipmap(Ve),ae.unbindTexture()},this.initRenderTarget=function(C){Ee.get(C).__webglFramebuffer===void 0&&Oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),ae.unbindTexture()},this.resetState=function(){K=0,N=0,F=null,ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nu?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Lo?"display-p3":"srgb"}}class fP extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let c=0,h=a-1,f;for(;c<=h;)if(s=Math.floor(c+(h-c)/2),f=n[s]-l,f<0)c=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===l)return s/(a-1);const d=n[s],m=n[s+1]-d,v=(l-d)/m;return(s+v)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const l=this.getPoint(s),c=this.getPoint(a),h=t||(l.isVector2?new De:new X);return h.copy(c).sub(l).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new X,s=[],a=[],l=[],c=new X,h=new Vt;for(let v=0;v<=e;v++){const M=v/e;s[v]=this.getTangentAt(M,new X)}a[0]=new X,l[0]=new X;let f=Number.MAX_VALUE;const d=Math.abs(s[0].x),g=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),m<=f&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],c),l[0].crossVectors(s[0],a[0]);for(let v=1;v<=e;v++){if(a[v]=a[v-1].clone(),l[v]=l[v-1].clone(),c.crossVectors(s[v-1],s[v]),c.length()>Number.EPSILON){c.normalize();const M=Math.acos(an(s[v-1].dot(s[v]),-1,1));a[v].applyMatrix4(h.makeRotationAxis(c,M))}l[v].crossVectors(s[v],a[v])}if(t===!0){let v=Math.acos(an(a[0].dot(a[e]),-1,1));v/=e,s[0].dot(c.crossVectors(a[0],a[e]))>0&&(v=-v);for(let M=1;M<=e;M++)a[M].applyMatrix4(h.makeRotationAxis(s[M],v*M)),l[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zu extends Yn{constructor(e=0,t=0,n=1,s=1,a=0,l=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=c,this.aRotation=h}getPoint(e,t=new De){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(l?a=0:a=s),this.aClockwise===!0&&!l&&(a===s?a=-s:a=a-s);const c=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=h-this.aX,v=f-this.aY;h=m*d-v*g+this.aX,f=m*g+v*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rw extends zu{constructor(e,t,n,s,a,l){super(e,t,n,n,s,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function Vu(){let i=0,e=0,t=0,n=0;function s(a,l,c,h){i=a,e=c,t=-3*a+3*l-2*c-h,n=2*a-2*l+c+h}return{initCatmullRom:function(a,l,c,h,f){s(l,c,f*(c-a),f*(h-l))},initNonuniformCatmullRom:function(a,l,c,h,f,d,g){let m=(l-a)/f-(c-a)/(f+d)+(c-l)/d,v=(c-l)/d-(h-l)/(d+g)+(h-c)/g;m*=d,v*=d,s(l,c,m,v)},calc:function(a){const l=a*a,c=l*a;return i+e*a+t*l+n*c}}}const fo=new X,Hc=new Vu,Gc=new Vu,Wc=new Vu;class Lw extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new X){const n=t,s=this.points,a=s.length,l=(a-(this.closed?0:1))*e;let c=Math.floor(l),h=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:h===0&&c===a-1&&(c=a-2,h=1);let f,d;this.closed||c>0?f=s[(c-1)%a]:(fo.subVectors(s[0],s[1]).add(s[0]),f=fo);const g=s[c%a],m=s[(c+1)%a];if(this.closed||c+2<a?d=s[(c+2)%a]:(fo.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let M=Math.pow(f.distanceToSquared(g),v),P=Math.pow(g.distanceToSquared(m),v),x=Math.pow(m.distanceToSquared(d),v);P<1e-4&&(P=1),M<1e-4&&(M=P),x<1e-4&&(x=P),Hc.initNonuniformCatmullRom(f.x,g.x,m.x,d.x,M,P,x),Gc.initNonuniformCatmullRom(f.y,g.y,m.y,d.y,M,P,x),Wc.initNonuniformCatmullRom(f.z,g.z,m.z,d.z,M,P,x)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(f.x,g.x,m.x,d.x,this.tension),Gc.initCatmullRom(f.y,g.y,m.y,d.y,this.tension),Wc.initCatmullRom(f.z,g.z,m.z,d.z,this.tension));return n.set(Hc.calc(h),Gc.calc(h),Wc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cd(i,e,t,n,s){const a=(n-e)*.5,l=(s-t)*.5,c=i*i,h=i*c;return(2*t-2*n+a+l)*h+(-3*t+3*n-2*a-l)*c+a*i+t}function Dw(i,e){const t=1-i;return t*t*e}function Iw(i,e){return 2*(1-i)*i*e}function Uw(i,e){return i*i*e}function Xs(i,e,t,n){return Dw(i,e)+Iw(i,t)+Uw(i,n)}function Ow(i,e){const t=1-i;return t*t*t*e}function Nw(i,e){const t=1-i;return 3*t*t*i*e}function Fw(i,e){return 3*(1-i)*i*i*e}function Bw(i,e){return i*i*i*e}function js(i,e,t,n,s){return Ow(i,e)+Nw(i,t)+Fw(i,n)+Bw(i,s)}class dp extends Yn{constructor(e=new De,t=new De,n=new De,s=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new De){const n=t,s=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(js(e,s.x,a.x,l.x,c.x),js(e,s.y,a.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zw extends Yn{constructor(e=new X,t=new X,n=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new X){const n=t,s=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(js(e,s.x,a.x,l.x,c.x),js(e,s.y,a.y,l.y,c.y),js(e,s.z,a.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pp extends Yn{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vw extends Yn{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Yn{constructor(e=new De,t=new De,n=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new De){const n=t,s=this.v0,a=this.v1,l=this.v2;return n.set(Xs(e,s.x,a.x,l.x),Xs(e,s.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kw extends Yn{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,s=this.v0,a=this.v1,l=this.v2;return n.set(Xs(e,s.x,a.x,l.x),Xs(e,s.y,a.y,l.y),Xs(e,s.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gp extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const n=t,s=this.points,a=(s.length-1)*e,l=Math.floor(a),c=a-l,h=s[l===0?l:l-1],f=s[l],d=s[l>s.length-2?s.length-1:l+1],g=s[l>s.length-3?s.length-1:l+2];return n.set(Cd(c,h.x,f.x,d.x,g.x),Cd(c,h.y,f.y,d.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new De().fromArray(s))}return this}}var Eu=Object.freeze({__proto__:null,ArcCurve:Rw,CatmullRomCurve3:Lw,CubicBezierCurve:dp,CubicBezierCurve3:zw,EllipseCurve:zu,LineCurve:pp,LineCurve3:Vw,QuadraticBezierCurve:mp,QuadraticBezierCurve3:kw,SplineCurve:gp});class Hw extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const l=s[a]-n,c=this.curves[a],h=c.getLength(),f=h===0?0:1-l/h;return c.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const l=a[s],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,h=l.getPoints(c);for(let f=0;f<h.length;f++){const d=h[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Eu[s.type]().fromJSON(s))}return this}}class Au extends Hw{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pp(this.currentPoint.clone(),new De(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new mp(this.currentPoint.clone(),new De(e,t),new De(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,l){const c=new dp(this.currentPoint.clone(),new De(e,t),new De(n,s),new De(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+c,t+h,n,s,a,l),this}absarc(e,t,n,s,a,l){return this.absellipse(e,t,n,n,s,a,l),this}ellipse(e,t,n,s,a,l,c,h){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,s,a,l,c,h),this}absellipse(e,t,n,s,a,l,c,h){const f=new zu(e,t,n,s,a,l,c,h);if(this.curves.length>0){const g=f.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mo extends Au{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Au().fromJSON(s))}return this}}const Gw={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=_p(i,0,s,t,!0);const l=[];if(!a||a.next===a.prev)return l;let c,h,f,d,g,m,v;if(n&&(a=Yw(i,e,a,t)),i.length>80*t){c=f=i[0],h=d=i[1];for(let M=t;M<s;M+=t)g=i[M],m=i[M+1],g<c&&(c=g),m<h&&(h=m),g>f&&(f=g),m>d&&(d=m);v=Math.max(f-c,d-h),v=v!==0?32767/v:0}return Ys(a,l,t,c,h,v,0),l}};function _p(i,e,t,n,s){let a,l;if(s===sP(i,e,t,n)>0)for(a=e;a<t;a+=n)l=Rd(a,i[a],i[a+1],l);else for(a=t-n;a>=e;a-=n)l=Rd(a,i[a],i[a+1],l);return l&&Uo(l,l.next)&&($s(l),l=l.next),l}function xr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Uo(t,t.next)||Ut(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ys(i,e,t,n,s,a,l){if(!i)return;!l&&a&&Qw(i,n,s,a);let c=i,h,f;for(;i.prev!==i.next;){if(h=i.prev,f=i.next,a?Xw(i,n,s,a):Ww(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(f.i/t|0),$s(i),i=f.next,c=f.next;continue}if(i=f,i===c){l?l===1?(i=jw(xr(i),e,t),Ys(i,e,t,n,s,a,2)):l===2&&qw(i,e,t,n,s,a):Ys(xr(i),e,t,n,s,a,1);break}}}function Ww(i){const e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;const s=e.x,a=t.x,l=n.x,c=e.y,h=t.y,f=n.y,d=s<a?s<l?s:l:a<l?a:l,g=c<h?c<f?c:f:h<f?h:f,m=s>a?s>l?s:l:a>l?a:l,v=c>h?c>f?c:f:h>f?h:f;let M=n.next;for(;M!==e;){if(M.x>=d&&M.x<=m&&M.y>=g&&M.y<=v&&ts(s,c,a,h,l,f,M.x,M.y)&&Ut(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Xw(i,e,t,n){const s=i.prev,a=i,l=i.next;if(Ut(s,a,l)>=0)return!1;const c=s.x,h=a.x,f=l.x,d=s.y,g=a.y,m=l.y,v=c<h?c<f?c:f:h<f?h:f,M=d<g?d<m?d:m:g<m?g:m,P=c>h?c>f?c:f:h>f?h:f,x=d>g?d>m?d:m:g>m?g:m,_=wu(v,M,e,t,n),U=wu(P,x,e,t,n);let E=i.prevZ,T=i.nextZ;for(;E&&E.z>=_&&T&&T.z<=U;){if(E.x>=v&&E.x<=P&&E.y>=M&&E.y<=x&&E!==s&&E!==l&&ts(c,d,h,g,f,m,E.x,E.y)&&Ut(E.prev,E,E.next)>=0||(E=E.prevZ,T.x>=v&&T.x<=P&&T.y>=M&&T.y<=x&&T!==s&&T!==l&&ts(c,d,h,g,f,m,T.x,T.y)&&Ut(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;E&&E.z>=_;){if(E.x>=v&&E.x<=P&&E.y>=M&&E.y<=x&&E!==s&&E!==l&&ts(c,d,h,g,f,m,E.x,E.y)&&Ut(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;T&&T.z<=U;){if(T.x>=v&&T.x<=P&&T.y>=M&&T.y<=x&&T!==s&&T!==l&&ts(c,d,h,g,f,m,T.x,T.y)&&Ut(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function jw(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!Uo(s,a)&&vp(s,n,n.next,a)&&Ks(s,a)&&Ks(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),$s(n),$s(n.next),n=i=a),n=n.next}while(n!==i);return xr(n)}function qw(i,e,t,n,s,a){let l=i;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&nP(l,c)){let h=xp(l,c);l=xr(l,l.next),h=xr(h,h.next),Ys(l,e,t,n,s,a,0),Ys(h,e,t,n,s,a,0);return}c=c.next}l=l.next}while(l!==i)}function Yw(i,e,t,n){const s=[];let a,l,c,h,f;for(a=0,l=e.length;a<l;a++)c=e[a]*n,h=a<l-1?e[a+1]*n:i.length,f=_p(i,c,h,n,!1),f===f.next&&(f.steiner=!0),s.push(tP(f));for(s.sort(Kw),a=0;a<s.length;a++)t=$w(s[a],t);return t}function Kw(i,e){return i.x-e.x}function $w(i,e){const t=Jw(i,e);if(!t)return e;const n=xp(t,i);return xr(n,n.next),xr(t,t.next)}function Jw(i,e){let t=e,n=-1/0,s;const a=i.x,l=i.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const m=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=a&&m>n&&(n=m,s=t.x<t.next.x?t:t.next,m===a))return s}t=t.next}while(t!==e);if(!s)return null;const c=s,h=s.x,f=s.y;let d=1/0,g;t=s;do a>=t.x&&t.x>=h&&a!==t.x&&ts(l<f?a:n,l,h,f,l<f?n:a,l,t.x,t.y)&&(g=Math.abs(l-t.y)/(a-t.x),Ks(t,i)&&(g<d||g===d&&(t.x>s.x||t.x===s.x&&Zw(s,t)))&&(s=t,d=g)),t=t.next;while(t!==c);return s}function Zw(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function Qw(i,e,t,n){let s=i;do s.z===0&&(s.z=wu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,eP(s)}function eP(i){let e,t,n,s,a,l,c,h,f=1;do{for(t=i,i=null,a=null,l=0;t;){for(l++,n=t,c=0,e=0;e<f&&(c++,n=n.nextZ,!!n);e++);for(h=f;c>0||h>0&&n;)c!==0&&(h===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,c--):(s=n,n=n.nextZ,h--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,f*=2}while(l>1);return i}function wu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tP(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ts(i,e,t,n,s,a,l,c){return(s-l)*(e-c)>=(i-l)*(a-c)&&(i-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(a-c)>=(s-l)*(n-c)}function nP(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!iP(i,e)&&(Ks(i,e)&&Ks(e,i)&&rP(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Uo(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Uo(i,e){return i.x===e.x&&i.y===e.y}function vp(i,e,t,n){const s=mo(Ut(i,e,t)),a=mo(Ut(i,e,n)),l=mo(Ut(t,n,i)),c=mo(Ut(t,n,e));return!!(s!==a&&l!==c||s===0&&po(i,t,e)||a===0&&po(i,n,e)||l===0&&po(t,i,n)||c===0&&po(t,e,n))}function po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mo(i){return i>0?1:i<0?-1:0}function iP(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function rP(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xp(i,e){const t=new Pu(i.i,i.x,i.y),n=new Pu(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Rd(i,e,t,n){const s=new Pu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sP(i,e,t,n){let s=0;for(let a=e,l=t-n;a<t;a+=n)s+=(i[l]-i[a])*(i[a+1]+i[l+1]),l=a;return s}class ss{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return ss.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];Ld(e),Dd(n,e);let l=e.length;t.forEach(Ld);for(let h=0;h<t.length;h++)s.push(l),l+=t[h].length,Dd(n,t[h]);const c=Gw.triangulate(n,s);for(let h=0;h<c.length;h+=3)a.push(c.slice(h,h+3));return a}}function Ld(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Dd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class yp extends Ii{constructor(e=new Mo([new De(.5,.5),new De(-.5,.5),new De(-.5,-.5),new De(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let c=0,h=e.length;c<h;c++){const f=e[c];l(f)}this.setAttribute("position",new di(s,3)),this.setAttribute("uv",new di(a,2)),this.computeVertexNormals();function l(c){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,v=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:v-.1,P=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,U=t.UVGenerator!==void 0?t.UVGenerator:aP;let E,T=!1,K,N,F,W;_&&(E=_.getSpacedPoints(d),T=!0,m=!1,K=_.computeFrenetFrames(d,!1),N=new X,F=new X,W=new X),m||(x=0,v=0,M=0,P=0);const D=c.extractPoints(f);let A=D.shape;const z=D.holes;if(!ss.isClockWise(A)){A=A.reverse();for(let L=0,ve=z.length;L<ve;L++){const pe=z[L];ss.isClockWise(pe)&&(z[L]=pe.reverse())}}const Z=ss.triangulateShape(A,z),te=A;for(let L=0,ve=z.length;L<ve;L++){const pe=z[L];A=A.concat(pe)}function ce(L,ve,pe){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ve,pe)}const q=A.length,fe=Z.length;function ne(L,ve,pe){let we,ae,Xe;const Ee=L.x-ve.x,Oe=L.y-ve.y,I=pe.x-L.x,b=pe.y-L.y,Y=Ee*Ee+Oe*Oe,he=Ee*b-Oe*I;if(Math.abs(he)>Number.EPSILON){const oe=Math.sqrt(Y),ue=Math.sqrt(I*I+b*b),Ge=ve.x-Oe/oe,be=ve.y+Ee/oe,Ue=pe.x-b/ue,et=pe.y+I/ue,_e=((Ue-Ge)*b-(et-be)*I)/(Ee*b-Oe*I);we=Ge+Ee*_e-L.x,ae=be+Oe*_e-L.y;const Re=we*we+ae*ae;if(Re<=2)return new De(we,ae);Xe=Math.sqrt(Re/2)}else{let oe=!1;Ee>Number.EPSILON?I>Number.EPSILON&&(oe=!0):Ee<-Number.EPSILON?I<-Number.EPSILON&&(oe=!0):Math.sign(Oe)===Math.sign(b)&&(oe=!0),oe?(we=-Oe,ae=Ee,Xe=Math.sqrt(Y)):(we=Ee,ae=Oe,Xe=Math.sqrt(Y/2))}return new De(we/Xe,ae/Xe)}const Ae=[];for(let L=0,ve=te.length,pe=ve-1,we=L+1;L<ve;L++,pe++,we++)pe===ve&&(pe=0),we===ve&&(we=0),Ae[L]=ne(te[L],te[pe],te[we]);const Te=[];let Ie,tt=Ae.concat();for(let L=0,ve=z.length;L<ve;L++){const pe=z[L];Ie=[];for(let we=0,ae=pe.length,Xe=ae-1,Ee=we+1;we<ae;we++,Xe++,Ee++)Xe===ae&&(Xe=0),Ee===ae&&(Ee=0),Ie[we]=ne(pe[we],pe[Xe],pe[Ee]);Te.push(Ie),tt=tt.concat(Ie)}for(let L=0;L<x;L++){const ve=L/x,pe=v*Math.cos(ve*Math.PI/2),we=M*Math.sin(ve*Math.PI/2)+P;for(let ae=0,Xe=te.length;ae<Xe;ae++){const Ee=ce(te[ae],Ae[ae],we);ye(Ee.x,Ee.y,-pe)}for(let ae=0,Xe=z.length;ae<Xe;ae++){const Ee=z[ae];Ie=Te[ae];for(let Oe=0,I=Ee.length;Oe<I;Oe++){const b=ce(Ee[Oe],Ie[Oe],we);ye(b.x,b.y,-pe)}}}const dt=M+P;for(let L=0;L<q;L++){const ve=m?ce(A[L],tt[L],dt):A[L];T?(F.copy(K.normals[0]).multiplyScalar(ve.x),N.copy(K.binormals[0]).multiplyScalar(ve.y),W.copy(E[0]).add(F).add(N),ye(W.x,W.y,W.z)):ye(ve.x,ve.y,0)}for(let L=1;L<=d;L++)for(let ve=0;ve<q;ve++){const pe=m?ce(A[ve],tt[ve],dt):A[ve];T?(F.copy(K.normals[L]).multiplyScalar(pe.x),N.copy(K.binormals[L]).multiplyScalar(pe.y),W.copy(E[L]).add(F).add(N),ye(W.x,W.y,W.z)):ye(pe.x,pe.y,g/d*L)}for(let L=x-1;L>=0;L--){const ve=L/x,pe=v*Math.cos(ve*Math.PI/2),we=M*Math.sin(ve*Math.PI/2)+P;for(let ae=0,Xe=te.length;ae<Xe;ae++){const Ee=ce(te[ae],Ae[ae],we);ye(Ee.x,Ee.y,g+pe)}for(let ae=0,Xe=z.length;ae<Xe;ae++){const Ee=z[ae];Ie=Te[ae];for(let Oe=0,I=Ee.length;Oe<I;Oe++){const b=ce(Ee[Oe],Ie[Oe],we);T?ye(b.x,b.y+E[d-1].y,E[d-1].x+pe):ye(b.x,b.y,g+pe)}}}ie(),de();function ie(){const L=s.length/3;if(m){let ve=0,pe=q*ve;for(let we=0;we<fe;we++){const ae=Z[we];qe(ae[2]+pe,ae[1]+pe,ae[0]+pe)}ve=d+x*2,pe=q*ve;for(let we=0;we<fe;we++){const ae=Z[we];qe(ae[0]+pe,ae[1]+pe,ae[2]+pe)}}else{for(let ve=0;ve<fe;ve++){const pe=Z[ve];qe(pe[2],pe[1],pe[0])}for(let ve=0;ve<fe;ve++){const pe=Z[ve];qe(pe[0]+q*d,pe[1]+q*d,pe[2]+q*d)}}n.addGroup(L,s.length/3-L,0)}function de(){const L=s.length/3;let ve=0;Ne(te,ve),ve+=te.length;for(let pe=0,we=z.length;pe<we;pe++){const ae=z[pe];Ne(ae,ve),ve+=ae.length}n.addGroup(L,s.length/3-L,1)}function Ne(L,ve){let pe=L.length;for(;--pe>=0;){const we=pe;let ae=pe-1;ae<0&&(ae=L.length-1);for(let Xe=0,Ee=d+x*2;Xe<Ee;Xe++){const Oe=q*Xe,I=q*(Xe+1),b=ve+we+Oe,Y=ve+ae+Oe,he=ve+ae+I,oe=ve+we+I;nt(b,Y,he,oe)}}}function ye(L,ve,pe){h.push(L),h.push(ve),h.push(pe)}function qe(L,ve,pe){Ye(L),Ye(ve),Ye(pe);const we=s.length/3,ae=U.generateTopUV(n,s,we-3,we-2,we-1);at(ae[0]),at(ae[1]),at(ae[2])}function nt(L,ve,pe,we){Ye(L),Ye(ve),Ye(we),Ye(ve),Ye(pe),Ye(we);const ae=s.length/3,Xe=U.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);at(Xe[0]),at(Xe[1]),at(Xe[3]),at(Xe[1]),at(Xe[2]),at(Xe[3])}function Ye(L){s.push(h[L*3+0]),s.push(h[L*3+1]),s.push(h[L*3+2])}function at(L){a.push(L.x),a.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return oP(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,l=e.shapes.length;a<l;a++){const c=t[e.shapes[a]];n.push(c)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Eu[s.type]().fromJSON(s)),new yp(n,e.options)}}const aP={generateTopUV:function(i,e,t,n,s){const a=e[t*3],l=e[t*3+1],c=e[n*3],h=e[n*3+1],f=e[s*3],d=e[s*3+1];return[new De(a,l),new De(c,h),new De(f,d)]},generateSideWallUV:function(i,e,t,n,s,a){const l=e[t*3],c=e[t*3+1],h=e[t*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],m=e[s*3],v=e[s*3+1],M=e[s*3+2],P=e[a*3],x=e[a*3+1],_=e[a*3+2];return Math.abs(c-d)<Math.abs(l-f)?[new De(l,1-h),new De(f,1-g),new De(m,1-M),new De(P,1-_)]:[new De(c,1-h),new De(d,1-g),new De(v,1-M),new De(x,1-_)]}};function oP(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dP extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Id={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lP{constructor(e,t,n){const s=this;let a=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,a===!1&&s.onStart!==void 0&&s.onStart(d,l,c),a=!0},this.itemEnd=function(d){l++,s.onProgress!==void 0&&s.onProgress(d,l,c),l===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,g){return f.push(d,g),this},this.removeHandler=function(d){const g=f.indexOf(d);return g!==-1&&f.splice(g,2),this},this.getHandler=function(d){for(let g=0,m=f.length;g<m;g+=2){const v=f[g],M=f[g+1];if(v.global&&(v.lastIndex=0),v.test(d))return M}return null}}}const cP=new lP;class Sp{constructor(e){this.manager=e!==void 0?e:cP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class uP extends Error{constructor(e,t){super(e),this.response=t}}class pP extends Sp{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Id.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=oi[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),v=m?parseInt(m):0,M=v!==0;let P=0;const x=new ReadableStream({start(_){U();function U(){g.read().then(({done:E,value:T})=>{if(E)_.close();else{P+=T.byteLength;const K=new ProgressEvent("progress",{lengthComputable:M,loaded:P,total:v});for(let N=0,F=d.length;N<F;N++){const W=d[N];W.onProgress&&W.onProgress(K)}_.enqueue(T),U()}},E=>{_.error(E)})}}});return new Response(x)}else throw new uP(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return f.json();default:if(c===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),m=g&&g[1]?g[1].toLowerCase():void 0,v=new TextDecoder(m);return f.arrayBuffer().then(M=>v.decode(M))}}}).then(f=>{Id.add(e,f);const d=oi[e];delete oi[e];for(let g=0,m=d.length;g<m;g++){const v=d[g];v.onLoad&&v.onLoad(f)}}).catch(f=>{const d=oi[e];if(d===void 0)throw this.manager.itemError(e),f;delete oi[e];for(let g=0,m=d.length;g<m;g++){const v=d[g];v.onError&&v.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mp extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mP extends Mp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gP extends Mp{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class _P{constructor(){this.type="ShapePath",this.color=new vt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Au,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,a,l){return this.currentPath.bezierCurveTo(e,t,n,s,a,l),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const U=[];for(let E=0,T=_.length;E<T;E++){const K=_[E],N=new Mo;N.curves=K.curves,U.push(N)}return U}function n(_,U){const E=U.length;let T=!1;for(let K=E-1,N=0;N<E;K=N++){let F=U[K],W=U[N],D=W.x-F.x,A=W.y-F.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(F=U[N],D=-D,W=U[K],A=-A),_.y<F.y||_.y>W.y)continue;if(_.y===F.y){if(_.x===F.x)return!0}else{const z=A*(_.x-F.x)-D*(_.y-F.y);if(z===0)return!0;if(z<0)continue;T=!T}}else{if(_.y!==F.y)continue;if(W.x<=_.x&&_.x<=F.x||F.x<=_.x&&_.x<=W.x)return!0}}return T}const s=ss.isClockWise,a=this.subPaths;if(a.length===0)return[];let l,c,h;const f=[];if(a.length===1)return c=a[0],h=new Mo,h.curves=c.curves,f.push(h),f;let d=!s(a[0].getPoints());d=e?!d:d;const g=[],m=[];let v=[],M=0,P;m[M]=void 0,v[M]=[];for(let _=0,U=a.length;_<U;_++)c=a[_],P=c.getPoints(),l=s(P),l=e?!l:l,l?(!d&&m[M]&&M++,m[M]={s:new Mo,p:P},m[M].s.curves=c.curves,d&&M++,v[M]=[]):v[M].push({h:c,p:P[0]});if(!m[0])return t(a);if(m.length>1){let _=!1,U=0;for(let E=0,T=m.length;E<T;E++)g[E]=[];for(let E=0,T=m.length;E<T;E++){const K=v[E];for(let N=0;N<K.length;N++){const F=K[N];let W=!0;for(let D=0;D<m.length;D++)n(F.p,m[D].p)&&(E!==D&&U++,W?(W=!1,g[D].push(F)):_=!0);W&&g[E].push(F)}}U>0&&_===!1&&(v=g)}let x;for(let _=0,U=m.length;_<U;_++){h=m[_].s,f.push(h),x=v[_];for(let E=0,T=x.length;E<T;E++)h.holes.push(x[E].h)}return f}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vP(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zt={};(function(i){var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(y,R,B)=>R in y?e(y,R,{enumerable:!0,configurable:!0,writable:!0,value:B}):y[R]=B,h=(y,R)=>{for(var B in R||(R={}))a.call(R,B)&&c(y,B,R[B]);if(s)for(var B of s(R))l.call(R,B)&&c(y,B,R[B]);return y},f=(y,R)=>t(y,n(R)),d=y=>e(y,"__esModule",{value:!0}),g=(y,R)=>{d(y);for(var B in R)e(y,B,{get:R[B],enumerable:!0})};g(i,{Atom:()=>Ma,PointerProxy:()=>bl,Ticker:()=>Ta,getPointerParts:()=>ki,isPointer:()=>Kn,isPrism:()=>Cr,iterateAndCountTicks:()=>yl,iterateOver:()=>Ml,pointer:()=>ys,pointerToPrism:()=>Lr,prism:()=>Xi,val:()=>As});var m=Array.isArray,v=m,M=typeof Wn=="object"&&Wn&&Wn.Object===Object&&Wn,P=M,x=typeof self=="object"&&self&&self.Object===Object&&self,_=P||x||Function("return this")(),U=_,E=U.Symbol,T=E,K=Object.prototype,N=K.hasOwnProperty,F=K.toString,W=T?T.toStringTag:void 0;function D(y){var R=N.call(y,W),B=y[W];try{y[W]=void 0;var Q=!0}catch{}var Ze=F.call(y);return Q&&(R?y[W]=B:delete y[W]),Ze}var A=D,z=Object.prototype,se=z.toString;function Z(y){return se.call(y)}var te=Z,ce="[object Null]",q="[object Undefined]",fe=T?T.toStringTag:void 0;function ne(y){return y==null?y===void 0?q:ce:fe&&fe in Object(y)?A(y):te(y)}var Ae=ne;function Te(y){return y!=null&&typeof y=="object"}var Ie=Te,tt="[object Symbol]";function dt(y){return typeof y=="symbol"||Ie(y)&&Ae(y)==tt}var ie=dt,de=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ne=/^\w*$/;function ye(y,R){if(v(y))return!1;var B=typeof y;return B=="number"||B=="symbol"||B=="boolean"||y==null||ie(y)?!0:Ne.test(y)||!de.test(y)||R!=null&&y in Object(R)}var qe=ye;function nt(y){var R=typeof y;return y!=null&&(R=="object"||R=="function")}var Ye=nt,at="[object AsyncFunction]",L="[object Function]",ve="[object GeneratorFunction]",pe="[object Proxy]";function we(y){if(!Ye(y))return!1;var R=Ae(y);return R==L||R==ve||R==at||R==pe}var ae=we,Xe=U["__core-js_shared__"],Ee=Xe,Oe=function(){var y=/[^.]+$/.exec(Ee&&Ee.keys&&Ee.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""}();function I(y){return!!Oe&&Oe in y}var b=I,Y=Function.prototype,he=Y.toString;function oe(y){if(y!=null){try{return he.call(y)}catch{}try{return y+""}catch{}}return""}var ue=oe,Ge=/[\\^$.*+?()[\]{}|]/g,be=/^\[object .+?Constructor\]$/,Ue=Function.prototype,et=Object.prototype,_e=Ue.toString,Re=et.hasOwnProperty,ut=RegExp("^"+_e.call(Re).replace(Ge,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function He(y){if(!Ye(y)||b(y))return!1;var R=ae(y)?ut:be;return R.test(ue(y))}var Fe=He;function Qe(y,R){return y==null?void 0:y[R]}var rt=Qe;function Mt(y,R){var B=rt(y,R);return Fe(B)?B:void 0}var V=Mt,xe=V(Object,"create"),re=xe;function le(){this.__data__=re?re(null):{},this.size=0}var Me=le;function Ke(y){var R=this.has(y)&&delete this.__data__[y];return this.size-=R?1:0,R}var ft=Ke,It="__lodash_hash_undefined__",Nt=Object.prototype,pt=Nt.hasOwnProperty;function kt(y){var R=this.__data__;if(re){var B=R[y];return B===It?void 0:B}return pt.call(R,y)?R[y]:void 0}var un=kt,yr=Object.prototype,Ln=yr.hasOwnProperty;function Ui(y){var R=this.__data__;return re?R[y]!==void 0:Ln.call(R,y)}var Sr=Ui,Mr="__lodash_hash_undefined__";function mi(y,R){var B=this.__data__;return this.size+=this.has(y)?0:1,B[y]=re&&R===void 0?Mr:R,this}var br=mi;function _n(y){var R=-1,B=y==null?0:y.length;for(this.clear();++R<B;){var Q=y[R];this.set(Q[0],Q[1])}}_n.prototype.clear=Me,_n.prototype.delete=ft,_n.prototype.get=un,_n.prototype.has=Sr,_n.prototype.set=br;var Oi=_n;function Tr(){this.__data__=[],this.size=0}var ps=Tr;function Dn(y,R){return y===R||y!==y&&R!==R}var ms=Dn;function C(y,R){for(var B=y.length;B--;)if(ms(y[B][0],R))return B;return-1}var k=C,$=Array.prototype,J=$.splice;function G(y){var R=this.__data__,B=k(R,y);if(B<0)return!1;var Q=R.length-1;return B==Q?R.pop():J.call(R,B,1),--this.size,!0}var Se=G;function Le(y){var R=this.__data__,B=k(R,y);return B<0?void 0:R[B][1]}var Be=Le;function ze(y){return k(this.__data__,y)>-1}var $e=ze;function Je(y,R){var B=this.__data__,Q=k(B,y);return Q<0?(++this.size,B.push([y,R])):B[Q][1]=R,this}var je=Je;function ct(y){var R=-1,B=y==null?0:y.length;for(this.clear();++R<B;){var Q=y[R];this.set(Q[0],Q[1])}}ct.prototype.clear=ps,ct.prototype.delete=Se,ct.prototype.get=Be,ct.prototype.has=$e,ct.prototype.set=je;var Et=ct,At=V(U,"Map"),Jt=At;function mt(){this.size=0,this.__data__={hash:new Oi,map:new(Jt||Et),string:new Oi}}var Ve=mt;function Ot(y){var R=typeof y;return R=="string"||R=="number"||R=="symbol"||R=="boolean"?y!=="__proto__":y===null}var gt=Ot;function on(y,R){var B=y.__data__;return gt(R)?B[typeof R=="string"?"string":"hash"]:B.map}var vn=on;function Ht(y){var R=vn(this,y).delete(y);return this.size-=R?1:0,R}var Ni=Ht;function bt(y){return vn(this,y).get(y)}var An=bt;function Fi(y){return vn(this,y).has(y)}var Qt=Fi;function Bi(y,R){var B=vn(this,y),Q=B.size;return B.set(y,R),this.size+=B.size==Q?0:1,this}var gs=Bi;function In(y){var R=-1,B=y==null?0:y.length;for(this.clear();++R<B;){var Q=y[R];this.set(Q[0],Q[1])}}In.prototype.clear=Ve,In.prototype.delete=Ni,In.prototype.get=An,In.prototype.has=Qt,In.prototype.set=gs;var na=In,Oo="Expected a function";function _s(y,R){if(typeof y!="function"||R!=null&&typeof R!="function")throw new TypeError(Oo);var B=function(){var Q=arguments,Ze=R?R.apply(this,Q):Q[0],_t=B.cache;if(_t.has(Ze))return _t.get(Ze);var Zt=y.apply(this,Q);return B.cache=_t.set(Ze,Zt)||_t,Zt};return B.cache=new(_s.Cache||na),B}_s.Cache=na;var No=_s,gi=500;function Er(y){var R=No(y,function(Q){return B.size===gi&&B.clear(),Q}),B=R.cache;return R}var Fo=Er,zi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bo=/\\(\\)?/g,zo=Fo(function(y){var R=[];return y.charCodeAt(0)===46&&R.push(""),y.replace(zi,function(B,Q,Ze,_t){R.push(Ze?_t.replace(Bo,"$1"):Q||B)}),R}),Vo=zo;function ko(y,R){for(var B=-1,Q=y==null?0:y.length,Ze=Array(Q);++B<Q;)Ze[B]=R(y[B],B,y);return Ze}var Ho=ko,Ar=1/0,ia=T?T.prototype:void 0,ra=ia?ia.toString:void 0;function sa(y){if(typeof y=="string")return y;if(v(y))return Ho(y,sa)+"";if(ie(y))return ra?ra.call(y):"";var R=y+"";return R=="0"&&1/y==-Ar?"-0":R}var Go=sa;function Wo(y){return y==null?"":Go(y)}var Xo=Wo;function jo(y,R){return v(y)?y:qe(y,R)?[y]:Vo(Xo(y))}var qo=jo,_i=1/0;function wr(y){if(typeof y=="string"||ie(y))return y;var R=y+"";return R=="0"&&1/y==-_i?"-0":R}var Yo=wr;function vs(y,R){R=qo(R,y);for(var B=0,Q=R.length;y!=null&&B<Q;)y=y[Yo(R[B++])];return B&&B==Q?y:void 0}var Ko=vs;function $o(y,R,B){var Q=y==null?void 0:Ko(y,R);return Q===void 0?B:Q}var Jo=$o;function Zo(y,R){return function(B){return y(R(B))}}var Qo=Zo,el=Qo(Object.getPrototypeOf,Object),tl=el,nl="[object Object]",il=Function.prototype,rl=Object.prototype,aa=il.toString,oa=rl.hasOwnProperty,la=aa.call(Object);function ca(y){if(!Ie(y)||Ae(y)!=nl)return!1;var R=tl(y);if(R===null)return!0;var B=oa.call(R,"constructor")&&R.constructor;return typeof B=="function"&&B instanceof B&&aa.call(B)==la}var ua=ca;function sl(y){var R=y==null?0:y.length;return R?y[R-1]:void 0}var ha=sl,xs=new WeakMap,Vi=new WeakMap,fa=Symbol("pointerMeta"),al={get(y,R){if(R===fa)return xs.get(y);let B=Vi.get(y);B||(B=new Map,Vi.set(y,B));const Q=B.get(R);if(Q!==void 0)return Q;const Ze=xs.get(y),_t=Pr({root:Ze.root,path:[...Ze.path,R]});return B.set(R,_t),_t}},Un=y=>y[fa],ki=y=>{const{root:R,path:B}=Un(y);return{root:R,path:B}};function Pr(y){var R;const B={root:y.root,path:(R=y.path)!=null?R:[]},Q={};return xs.set(Q,B),new Proxy(Q,al)}var ys=Pr,Kn=y=>y&&!!Un(y);function da(y,R,B){return R.length===0?B(y):vi(y,R,B)}var vi=(y,R,B)=>{if(R.length===0)return B(y);if(Array.isArray(y)){let[Q,...Ze]=R;Q=parseInt(String(Q),10),isNaN(Q)&&(Q=0);const _t=y[Q],Zt=vi(_t,Ze,B);if(_t===Zt)return y;const wn=[...y];return wn.splice(Q,1,Zt),wn}else if(typeof y=="object"&&y!==null){const[Q,...Ze]=R,_t=y[Q],Zt=vi(_t,Ze,B);return _t===Zt?y:f(h({},y),{[Q]:Zt})}else{const[Q,...Ze]=R;return{[Q]:vi(void 0,Ze,B)}}},Gt=class{constructor(){this._head=void 0}peek(){return this._head&&this._head.data}pop(){const y=this._head;if(y)return this._head=y.next,y.data}push(y){const R={next:this._head,data:y};this._head=R}};function Cr(y){return!!(y&&y.isPrism&&y.isPrism===!0)}function Ss(){const y=()=>{},R=new Gt,B=y;return{type:"Dataverse_discoveryMechanism",startIgnoringDependencies:()=>{R.push(B)},stopIgnoringDependencies:()=>{R.peek()!==B||R.pop()},reportResolutionStart:xi=>{const ji=R.peek();ji&&ji(xi),R.push(B)},reportResolutionEnd:xi=>{R.pop()},pushCollector:xi=>{R.push(xi)},popCollector:xi=>{if(R.peek()!==xi)throw new Error("Popped collector is not on top of the stack");R.pop()}}}function ol(){const y="__dataverse_discoveryMechanism_sharedStack",R=typeof window<"u"?window:typeof Wn<"u"?Wn:{};if(R){const B=R[y];if(B&&typeof B=="object"&&B.type==="Dataverse_discoveryMechanism")return B;{const Q=Ss();return R[y]=Q,Q}}else return Ss()}var{startIgnoringDependencies:$n,stopIgnoringDependencies:Hi,reportResolutionEnd:ll,reportResolutionStart:cl,pushCollector:Ms,popCollector:ul}=ol(),pa=()=>{},hl=class{constructor(y,R){this._fn=y,this._prismInstance=R,this._didMarkDependentsAsStale=!1,this._isFresh=!1,this._cacheOfDendencyValues=new Map,this._dependents=new Set,this._dependencies=new Set,this._possiblyStaleDeps=new Set,this._scope=new ma(this),this._lastValue=void 0,this._forciblySetToStale=!1,this._reactToDependencyGoingStale=B=>{this._possiblyStaleDeps.add(B),this._markAsStale()};for(const B of this._dependencies)B._addDependent(this._reactToDependencyGoingStale);$n(),this.getValue(),Hi()}get hasDependents(){return this._dependents.size>0}removeDependent(y){this._dependents.delete(y)}addDependent(y){this._dependents.add(y)}destroy(){for(const y of this._dependencies)y._removeDependent(this._reactToDependencyGoingStale);ga(this._scope)}getValue(){if(!this._isFresh){const y=this._recalculate();this._lastValue=y,this._isFresh=!0,this._didMarkDependentsAsStale=!1,this._forciblySetToStale=!1}return this._lastValue}_recalculate(){let y;if(!this._forciblySetToStale&&this._possiblyStaleDeps.size>0){let Q=!1;$n();for(const Ze of this._possiblyStaleDeps)if(this._cacheOfDendencyValues.get(Ze)!==Ze.getValue()){Q=!0;break}if(Hi(),this._possiblyStaleDeps.clear(),!Q)return this._lastValue}const R=new Set;this._cacheOfDendencyValues.clear();const B=Q=>{R.add(Q),this._addDependency(Q)};Ms(B),qt.push(this._scope);try{y=this._fn()}catch(Q){console.error(Q)}finally{qt.pop()!==this._scope&&console.warn("The Prism hook stack has slipped. This is a bug.")}ul(B);for(const Q of this._dependencies)R.has(Q)||this._removeDependency(Q);this._dependencies=R,$n();for(const Q of R)this._cacheOfDendencyValues.set(Q,Q.getValue());return Hi(),y}forceStale(){this._forciblySetToStale=!0,this._markAsStale()}_markAsStale(){if(!this._didMarkDependentsAsStale){this._didMarkDependentsAsStale=!0,this._isFresh=!1;for(const y of this._dependents)y(this._prismInstance)}}_addDependency(y){this._dependencies.has(y)||(this._dependencies.add(y),y._addDependent(this._reactToDependencyGoingStale))}_removeDependency(y){this._dependencies.has(y)&&(this._dependencies.delete(y),y._removeDependent(this._reactToDependencyGoingStale))}},bs={},fl=class{constructor(y){this._fn=y,this.isPrism=!0,this._state={hot:!1,handle:void 0}}get isHot(){return this._state.hot}onChange(y,R,B=!1){const Q=()=>{y.onThisOrNextTick(_t)};let Ze=bs;const _t=()=>{const wn=this.getValue();wn!==Ze&&(Ze=wn,R(wn))};return this._addDependent(Q),B&&(Ze=this.getValue(),R(Ze)),()=>{this._removeDependent(Q),y.offThisOrNextTick(_t),y.offNextTick(_t)}}onStale(y){const R=()=>{this._removeDependent(B)},B=()=>y();return this._addDependent(B),R}keepHot(){return this.onStale(()=>{})}_addDependent(y){this._state.hot||this._goHot(),this._state.handle.addDependent(y)}_goHot(){const y=new hl(this._fn,this);this._state={hot:!0,handle:y}}_removeDependent(y){const R=this._state;if(!R.hot)return;const B=R.handle;B.removeDependent(y),B.hasDependents||(this._state={hot:!1,handle:void 0},B.destroy())}getValue(){cl(this);const y=this._state;let R;return y.hot?R=y.handle.getValue():R=Wi(this._fn),ll(this),R}},ma=class{constructor(y){this._hotHandle=y,this._refs=new Map,this.isPrismScope=!0,this.subs={},this.effects=new Map,this.memos=new Map}ref(y,R){let B=this._refs.get(y);if(B!==void 0)return B;{const Q={current:R};return this._refs.set(y,Q),Q}}effect(y,R,B){let Q=this.effects.get(y);Q===void 0&&(Q={cleanup:pa,deps:void 0},this.effects.set(y,Q)),_a(Q.deps,B)&&(Q.cleanup(),$n(),Q.cleanup=Rr(R,pa).value,Hi(),Q.deps=B)}memo(y,R,B){let Q=this.memos.get(y);return Q===void 0&&(Q={cachedValue:null,deps:void 0},this.memos.set(y,Q)),_a(Q.deps,B)&&($n(),Q.cachedValue=Rr(R,void 0).value,Hi(),Q.deps=B),Q.cachedValue}state(y,R){const{value:B,setValue:Q}=this.memo("state/"+y,()=>{const Ze={current:R};return{value:Ze,setValue:Zt=>{Ze.current=Zt,this._hotHandle.forceStale()}}},[]);return[B.current,Q]}sub(y){return this.subs[y]||(this.subs[y]=new ma(this._hotHandle)),this.subs[y]}cleanupEffects(){for(const y of this.effects.values())Rr(y.cleanup,void 0);this.effects.clear()}source(y,R){return this.effect("$$source/blah",()=>y(()=>{this._hotHandle.forceStale()}),[y]),R()}};function ga(y){for(const R of Object.values(y.subs))ga(R);y.cleanupEffects()}function Rr(y,R){try{return{value:y(),ok:!0}}catch(B){return setTimeout(function(){throw B}),{value:R,ok:!1}}}var qt=new Gt;function dl(y,R){const B=qt.peek();if(!B)throw new Error("prism.ref() is called outside of a prism() call.");return B.ref(y,R)}function Ts(y,R,B){const Q=qt.peek();if(!Q)throw new Error("prism.effect() is called outside of a prism() call.");return Q.effect(y,R,B)}function _a(y,R){if(y===void 0||R===void 0)return!0;const B=y.length;if(B!==R.length)return!0;for(let Q=0;Q<B;Q++)if(y[Q]!==R[Q])return!0;return!1}function va(y,R,B){const Q=qt.peek();if(!Q)throw new Error("prism.memo() is called outside of a prism() call.");return Q.memo(y,R,B)}function ln(y,R){const B=qt.peek();if(!B)throw new Error("prism.state() is called outside of a prism() call.");return B.state(y,R)}function pl(){if(!qt.peek())throw new Error("The parent function is called outside of a prism() call.")}function ml(y,R){const B=qt.peek();if(!B)throw new Error("prism.scope() is called outside of a prism() call.");const Q=B.sub(y);qt.push(Q);const Ze=Rr(R,void 0).value;return qt.pop(),Ze}function gl(y,R,B){return va(y,()=>Wt(R),B).getValue()}function xa(){return!!qt.peek()}function _l(y,R){const B=qt.peek();if(!B)throw new Error("prism.source() is called outside of a prism() call.");return B.source(y,R)}var Wt=y=>new fl(y),Gi=class{effect(y,R,B){console.warn("prism.effect() does not run in cold prisms")}memo(y,R,B){return R()}state(y,R){return[R,()=>{}]}ref(y,R){return{current:R}}sub(y){return new Gi}source(y,R){return R()}};function Wi(y){const R=new Gi;qt.push(R);let B;try{B=y()}catch(Q){console.error(Q)}finally{qt.pop()!==R&&console.warn("The Prism hook stack has slipped. This is a bug.")}return B}Wt.ref=dl,Wt.effect=Ts,Wt.memo=va,Wt.ensurePrism=pl,Wt.state=ln,Wt.scope=ml,Wt.sub=gl,Wt.inPrism=xa,Wt.source=_l;var Xi=Wt,ya;(function(y){y[y.Dict=0]="Dict",y[y.Array=1]="Array",y[y.Other=2]="Other"})(ya||(ya={}));var St=y=>Array.isArray(y)?1:ua(y)?0:2,Es=(y,R,B=St(y))=>B===0&&typeof R=="string"||B===1&&vl(R)?y[R]:void 0,vl=y=>{const R=typeof y=="number"?y:parseInt(y,10);return!isNaN(R)&&R>=0&&R<1/0&&(R|0)===R},Sa=class{constructor(y,R){this._parent=y,this._path=R,this.children=new Map,this.identityChangeListeners=new Set}addIdentityChangeListener(y){this.identityChangeListeners.add(y)}removeIdentityChangeListener(y){this.identityChangeListeners.delete(y),this._checkForGC()}removeChild(y){this.children.delete(y),this._checkForGC()}getChild(y){return this.children.get(y)}getOrCreateChild(y){let R=this.children.get(y);return R||(R=R=new Sa(this,this._path.concat([y])),this.children.set(y,R)),R}_checkForGC(){this.identityChangeListeners.size>0||this.children.size>0||this._parent&&this._parent.removeChild(ha(this._path))}},Ma=class{constructor(y){this.$$isPointerToPrismProvider=!0,this.pointer=ys({root:this,path:[]}),this.prism=this.pointerToPrism(this.pointer),this._onPointerValueChange=(R,B)=>{const{path:Q}=ki(R),Ze=this._getOrCreateScopeForPath(Q);return Ze.identityChangeListeners.add(B),()=>{Ze.identityChangeListeners.delete(B)}},this._currentState=y,this._rootScope=new Sa(void 0,[])}set(y){const R=this._currentState;this._currentState=y,this._checkUpdates(this._rootScope,R,y)}get(){return this._currentState}getByPointer(y){const R=Kn(y)?y:y(this.pointer),B=ki(R).path;return this._getIn(B)}_getIn(y){return y.length===0?this.get():Jo(this.get(),y)}reduce(y){this.set(y(this.get()))}reduceByPointer(y,R){const B=Kn(y)?y:y(this.pointer),Q=ki(B).path,Ze=da(this.get(),Q,R);this.set(Ze)}setByPointer(y,R){this.reduceByPointer(y,()=>R)}_checkUpdates(y,R,B){if(R===B)return;for(const _t of y.identityChangeListeners)_t(B);if(y.children.size===0)return;const Q=St(R),Ze=St(B);if(!(Q===2&&Q===Ze))for(const[_t,Zt]of y.children){const wn=Es(R,_t,Q),Ea=Es(B,_t,Ze);this._checkUpdates(Zt,wn,Ea)}}_getOrCreateScopeForPath(y){let R=this._rootScope;for(const B of y)R=R.getOrCreateChild(B);return R}pointerToPrism(y){const{path:R}=ki(y),B=Ze=>this._onPointerValueChange(y,Ze),Q=()=>this._getIn(R);return Xi(()=>Xi.source(B,Q))}},ba=new WeakMap;function xl(y){return typeof y=="object"&&y!==null&&y.$$isPointerToPrismProvider===!0}var Lr=y=>{const R=Un(y);let B=ba.get(R);if(!B){const Q=R.root;if(!xl(Q))throw new Error("Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider");B=Q.pointerToPrism(y),ba.set(R,B)}return B},As=y=>Kn(y)?Lr(y).getValue():Cr(y)?y.getValue():y;function*yl(y){let R;if(Kn(y))R=Lr(y);else if(Cr(y))R=y;else throw new Error("Only pointers and prisms are supported");let B=0;const Q=R.onStale(()=>{B++});try{for(;;){const Ze=B;B=0,yield{value:R.getValue(),ticks:Ze}}}finally{Q()}}var Sl=60*3,Ta=class{constructor(y){this._conf=y,this._ticking=!1,this._dormant=!0,this._numberOfDormantTicks=0,this.__ticks=0,this._scheduledForThisOrNextTick=new Set,this._scheduledForNextTick=new Set,this._timeAtCurrentTick=0}get dormant(){return this._dormant}onThisOrNextTick(y){this._scheduledForThisOrNextTick.add(y),this._dormant&&this._goActive()}onNextTick(y){this._scheduledForNextTick.add(y),this._dormant&&this._goActive()}offThisOrNextTick(y){this._scheduledForThisOrNextTick.delete(y)}offNextTick(y){this._scheduledForNextTick.delete(y)}get time(){return this._ticking?this._timeAtCurrentTick:performance.now()}_goActive(){var y,R;this._dormant&&(this._dormant=!1,(R=(y=this._conf)==null?void 0:y.onActive)==null||R.call(y))}_goDormant(){var y,R;this._dormant||(this._dormant=!0,this._numberOfDormantTicks=0,(R=(y=this._conf)==null?void 0:y.onDormant)==null||R.call(y))}tick(y=performance.now()){if(this.__ticks++,!this._dormant&&this._scheduledForNextTick.size===0&&this._scheduledForThisOrNextTick.size===0&&(this._numberOfDormantTicks++,this._numberOfDormantTicks>=Sl)){this._goDormant();return}this._ticking=!0,this._timeAtCurrentTick=y;for(const R of this._scheduledForNextTick)this._scheduledForThisOrNextTick.add(R);this._scheduledForNextTick.clear(),this._tick(0),this._ticking=!1}_tick(y){const R=this.time;if(y>10&&console.warn("_tick() recursing for 10 times"),y>100)throw new Error("Maximum recursion limit for _tick()");const B=this._scheduledForThisOrNextTick;this._scheduledForThisOrNextTick=new Set;for(const Q of B)Q(R);if(this._scheduledForThisOrNextTick.size>0)return this._tick(y+1)}};function*Ml(y){let R;if(Kn(y))R=Lr(y);else if(Cr(y))R=y;else throw new Error("Only pointers and prisms are supported");const B=new Ta,Q=R.onChange(B,Ze=>{});try{for(;;)B.tick(),yield R.getValue()}finally{Q()}}var bl=class{constructor(y){this.$$isPointerToPrismProvider=!0,this._currentPointerBox=new Ma(y),this.pointer=ys({root:this,path:[]})}setPointer(y){this._currentPointerBox.set(y)}pointerToPrism(y){const{path:R}=Un(y);return Xi(()=>{const B=this._currentPointerBox.prism.getValue(),Q=R.reduce((Ze,_t)=>Ze[_t],B);return As(Q)})}}})(zt);var Co={exports:{}};Co.exports;(function(i,e){var t=Object.create,n=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,f=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(r,o,u)=>o in r?n(r,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[o]=u,v=(r,o)=>{for(var u in o||(o={}))d.call(o,u)&&m(r,u,o[u]);if(h)for(var u of h(o))g.call(o,u)&&m(r,u,o[u]);return r},M=(r,o)=>s(r,l(o)),P=(r,o)=>function(){return o||(0,r[c(r)[0]])((o={exports:{}}).exports,o),o.exports},x=(r,o)=>{for(var u in o)n(r,u,{get:o[u],enumerable:!0})},_=(r,o,u,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let S of c(o))!d.call(r,S)&&S!==u&&n(r,S,{get:()=>o[S],enumerable:!(p=a(o,S))||p.enumerable});return r},U=(r,o,u)=>(u=r!=null?t(f(r)):{},_(!r||!r.__esModule?n(u,"default",{value:r,enumerable:!0}):u,r)),E=r=>_(n({},"__esModule",{value:!0}),r),T=(r,o,u)=>(m(r,typeof o!="symbol"?o+"":o,u),u),K=P({"../node_modules/timing-function/lib/UnitBezier.js"(r,o){o.exports=function(){function u(p,S,w,O){this.set(p,S,w,O)}return u.prototype.set=function(p,S,w,O){this._cx=3*p,this._bx=3*(w-p)-this._cx,this._ax=1-this._cx-this._bx,this._cy=3*S,this._by=3*(O-S)-this._cy,this._ay=1-this._cy-this._by},u.epsilon=1e-6,u.prototype._sampleCurveX=function(p){return((this._ax*p+this._bx)*p+this._cx)*p},u.prototype._sampleCurveY=function(p){return((this._ay*p+this._by)*p+this._cy)*p},u.prototype._sampleCurveDerivativeX=function(p){return(3*this._ax*p+2*this._bx)*p+this._cx},u.prototype._solveCurveX=function(p,S){var w,O,H,j,ee,me;for(H=void 0,j=void 0,ee=void 0,me=void 0,w=void 0,O=void 0,ee=p,O=0;O<8;){if(me=this._sampleCurveX(ee)-p,Math.abs(me)<S)return ee;if(w=this._sampleCurveDerivativeX(ee),Math.abs(w)<S)break;ee=ee-me/w,O++}if(H=0,j=1,ee=p,ee<H)return H;if(ee>j)return j;for(;H<j;){if(me=this._sampleCurveX(ee),Math.abs(me-p)<S)return ee;p>me?H=ee:j=ee,ee=(j-H)*.5+H}return ee},u.prototype.solve=function(p,S){return this._sampleCurveY(this._solveCurveX(p,S))},u.prototype.solveSimple=function(p){return this._sampleCurveY(this._solveCurveX(p,1e-6))},u}()}}),N=P({"../node_modules/levenshtein-edit-distance/index.js"(r,o){var u,p;u=[],p=[];function S(w,O,H){var j,ee,me,ge,Pe,We,ke,st;if(w===O)return 0;if(j=w.length,ee=O.length,j===0)return ee;if(ee===0)return j;for(H&&(w=w.toLowerCase(),O=O.toLowerCase()),ke=0;ke<j;)p[ke]=w.charCodeAt(ke),u[ke]=++ke;for(st=0;st<ee;)for(me=O.charCodeAt(st),ge=Pe=st++,ke=-1;++ke<j;)We=me===p[ke]?Pe:Pe+1,Pe=u[ke],u[ke]=ge=Pe>ge?We>ge?ge+1:We:We>Pe?Pe+1:We;return ge}o.exports=S}}),F=P({"../node_modules/propose/propose.js"(r,o){var u=N();function p(){var S,w,O,H,j,ee=0,me=arguments[0],ge=arguments[1],Pe=ge.length,We=arguments[2];We&&(H=We.threshold,j=We.ignoreCase),H===void 0&&(H=0);for(var ke=0;ke<Pe;++ke)j?w=u(me,ge[ke],!0):w=u(me,ge[ke]),w>me.length?S=1-w/ge[ke].length:S=1-w/me.length,S>ee&&(ee=S,O=ge[ke]);return ee>=H?O:null}o.exports=p}}),W=P({"../node_modules/fast-deep-equal/index.js"(r,o){o.exports=function u(p,S){if(p===S)return!0;if(p&&S&&typeof p=="object"&&typeof S=="object"){if(p.constructor!==S.constructor)return!1;var w,O,H;if(Array.isArray(p)){if(w=p.length,w!=S.length)return!1;for(O=w;O--!==0;)if(!u(p[O],S[O]))return!1;return!0}if(p.constructor===RegExp)return p.source===S.source&&p.flags===S.flags;if(p.valueOf!==Object.prototype.valueOf)return p.valueOf()===S.valueOf();if(p.toString!==Object.prototype.toString)return p.toString()===S.toString();if(H=Object.keys(p),w=H.length,w!==Object.keys(S).length)return!1;for(O=w;O--!==0;)if(!Object.prototype.hasOwnProperty.call(S,H[O]))return!1;for(O=w;O--!==0;){var j=H[O];if(!u(p[j],S[j]))return!1}return!0}return p!==p&&S!==S}}}),D={};x(D,{createRafDriver:()=>Xl,getProject:()=>Lf,notify:()=>Ur,onChange:()=>dc,types:()=>jl,val:()=>Df}),i.exports=E(D);var A={};x(A,{createRafDriver:()=>Xl,getProject:()=>Lf,notify:()=>Ur,onChange:()=>dc,types:()=>jl,val:()=>Df});var z=zt,se=class{constructor(){T(this,"atom",new z.Atom({projects:{}}))}add(r,o){this.atom.setByPointer(u=>u.projects[r],o)}get(r){return this.atom.get().projects[r]}has(r){return!!this.get(r)}},Z=new se,te=Z,ce=new WeakMap;function q(r){return ce.get(r)}function fe(r,o){ce.set(r,o)}var ne=[],Ae=Array.isArray,Te=Ae,Ie=typeof Wn=="object"&&Wn&&Wn.Object===Object&&Wn,tt=Ie,dt=typeof self=="object"&&self&&self.Object===Object&&self,ie=tt||dt||Function("return this")(),de=ie,Ne=de.Symbol,ye=Ne,qe=Object.prototype,nt=qe.hasOwnProperty,Ye=qe.toString,at=ye?ye.toStringTag:void 0;function L(r){var o=nt.call(r,at),u=r[at];try{r[at]=void 0;var p=!0}catch{}var S=Ye.call(r);return p&&(o?r[at]=u:delete r[at]),S}var ve=L,pe=Object.prototype,we=pe.toString;function ae(r){return we.call(r)}var Xe=ae,Ee="[object Null]",Oe="[object Undefined]",I=ye?ye.toStringTag:void 0;function b(r){return r==null?r===void 0?Oe:Ee:I&&I in Object(r)?ve(r):Xe(r)}var Y=b;function he(r){return r!=null&&typeof r=="object"}var oe=he,ue="[object Symbol]";function Ge(r){return typeof r=="symbol"||oe(r)&&Y(r)==ue}var be=Ge,Ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,et=/^\w*$/;function _e(r,o){if(Te(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||be(r)?!0:et.test(r)||!Ue.test(r)||o!=null&&r in Object(o)}var Re=_e;function ut(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}var He=ut,Fe="[object AsyncFunction]",Qe="[object Function]",rt="[object GeneratorFunction]",Mt="[object Proxy]";function V(r){if(!He(r))return!1;var o=Y(r);return o==Qe||o==rt||o==Fe||o==Mt}var xe=V,re=de["__core-js_shared__"],le=re,Me=function(){var r=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function Ke(r){return!!Me&&Me in r}var ft=Ke,It=Function.prototype,Nt=It.toString;function pt(r){if(r!=null){try{return Nt.call(r)}catch{}try{return r+""}catch{}}return""}var kt=pt,un=/[\\^$.*+?()[\]{}|]/g,yr=/^\[object .+?Constructor\]$/,Ln=Function.prototype,Ui=Object.prototype,Sr=Ln.toString,Mr=Ui.hasOwnProperty,mi=RegExp("^"+Sr.call(Mr).replace(un,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function br(r){if(!He(r)||ft(r))return!1;var o=xe(r)?mi:yr;return o.test(kt(r))}var _n=br;function Oi(r,o){return r==null?void 0:r[o]}var Tr=Oi;function ps(r,o){var u=Tr(r,o);return _n(u)?u:void 0}var Dn=ps,ms=Dn(Object,"create"),C=ms;function k(){this.__data__=C?C(null):{},this.size=0}var $=k;function J(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}var G=J,Se="__lodash_hash_undefined__",Le=Object.prototype,Be=Le.hasOwnProperty;function ze(r){var o=this.__data__;if(C){var u=o[r];return u===Se?void 0:u}return Be.call(o,r)?o[r]:void 0}var $e=ze,Je=Object.prototype,je=Je.hasOwnProperty;function ct(r){var o=this.__data__;return C?o[r]!==void 0:je.call(o,r)}var Et=ct,At="__lodash_hash_undefined__";function Jt(r,o){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=C&&o===void 0?At:o,this}var mt=Jt;function Ve(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var p=r[o];this.set(p[0],p[1])}}Ve.prototype.clear=$,Ve.prototype.delete=G,Ve.prototype.get=$e,Ve.prototype.has=Et,Ve.prototype.set=mt;var Ot=Ve;function gt(){this.__data__=[],this.size=0}var on=gt;function vn(r,o){return r===o||r!==r&&o!==o}var Ht=vn;function Ni(r,o){for(var u=r.length;u--;)if(Ht(r[u][0],o))return u;return-1}var bt=Ni,An=Array.prototype,Fi=An.splice;function Qt(r){var o=this.__data__,u=bt(o,r);if(u<0)return!1;var p=o.length-1;return u==p?o.pop():Fi.call(o,u,1),--this.size,!0}var Bi=Qt;function gs(r){var o=this.__data__,u=bt(o,r);return u<0?void 0:o[u][1]}var In=gs;function na(r){return bt(this.__data__,r)>-1}var Oo=na;function _s(r,o){var u=this.__data__,p=bt(u,r);return p<0?(++this.size,u.push([r,o])):u[p][1]=o,this}var No=_s;function gi(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var p=r[o];this.set(p[0],p[1])}}gi.prototype.clear=on,gi.prototype.delete=Bi,gi.prototype.get=In,gi.prototype.has=Oo,gi.prototype.set=No;var Er=gi,Fo=Dn(de,"Map"),zi=Fo;function Bo(){this.size=0,this.__data__={hash:new Ot,map:new(zi||Er),string:new Ot}}var zo=Bo;function Vo(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}var ko=Vo;function Ho(r,o){var u=r.__data__;return ko(o)?u[typeof o=="string"?"string":"hash"]:u.map}var Ar=Ho;function ia(r){var o=Ar(this,r).delete(r);return this.size-=o?1:0,o}var ra=ia;function sa(r){return Ar(this,r).get(r)}var Go=sa;function Wo(r){return Ar(this,r).has(r)}var Xo=Wo;function jo(r,o){var u=Ar(this,r),p=u.size;return u.set(r,o),this.size+=u.size==p?0:1,this}var qo=jo;function _i(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var p=r[o];this.set(p[0],p[1])}}_i.prototype.clear=zo,_i.prototype.delete=ra,_i.prototype.get=Go,_i.prototype.has=Xo,_i.prototype.set=qo;var wr=_i,Yo="Expected a function";function vs(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new TypeError(Yo);var u=function(){var p=arguments,S=o?o.apply(this,p):p[0],w=u.cache;if(w.has(S))return w.get(S);var O=r.apply(this,p);return u.cache=w.set(S,O)||w,O};return u.cache=new(vs.Cache||wr),u}vs.Cache=wr;var Ko=vs,$o=500;function Jo(r){var o=Ko(r,function(p){return u.size===$o&&u.clear(),p}),u=o.cache;return o}var Zo=Jo,Qo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,el=/\\(\\)?/g,tl=Zo(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(Qo,function(u,p,S,w){o.push(S?w.replace(el,"$1"):p||u)}),o}),nl=tl;function il(r,o){for(var u=-1,p=r==null?0:r.length,S=Array(p);++u<p;)S[u]=o(r[u],u,r);return S}var rl=il,aa=1/0,oa=ye?ye.prototype:void 0,la=oa?oa.toString:void 0;function ca(r){if(typeof r=="string")return r;if(Te(r))return rl(r,ca)+"";if(be(r))return la?la.call(r):"";var o=r+"";return o=="0"&&1/r==-aa?"-0":o}var ua=ca;function sl(r){return r==null?"":ua(r)}var ha=sl;function xs(r,o){return Te(r)?r:Re(r,o)?[r]:nl(ha(r))}var Vi=xs,fa=1/0;function al(r){if(typeof r=="string"||be(r))return r;var o=r+"";return o=="0"&&1/r==-fa?"-0":o}var Un=al;function ki(r,o){o=Vi(o,r);for(var u=0,p=o.length;r!=null&&u<p;)r=r[Un(o[u++])];return u&&u==p?r:void 0}var Pr=ki;function ys(r,o,u){var p=r==null?void 0:Pr(r,o);return p===void 0?u:p}var Kn=ys;function da(r,o){return o.length===0?r:Kn(r,o)}var vi=class{constructor(){T(this,"_values",{})}get(r,o){if(this.has(r))return this._values[r];{const u=o();return this._values[r]=u,u}}has(r){return this._values.hasOwnProperty(r)}},Gt=zt,Cr=function(){try{var r=Dn(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Ss=Cr;function ol(r,o,u){o=="__proto__"&&Ss?Ss(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}var $n=ol,Hi=Object.prototype,ll=Hi.hasOwnProperty;function cl(r,o,u){var p=r[o];(!(ll.call(r,o)&&Ht(p,u))||u===void 0&&!(o in r))&&$n(r,o,u)}var Ms=cl,ul=9007199254740991,pa=/^(?:0|[1-9]\d*)$/;function hl(r,o){var u=typeof r;return o=o??ul,!!o&&(u=="number"||u!="symbol"&&pa.test(r))&&r>-1&&r%1==0&&r<o}var bs=hl;function fl(r,o,u,p){if(!He(r))return r;o=Vi(o,r);for(var S=-1,w=o.length,O=w-1,H=r;H!=null&&++S<w;){var j=Un(o[S]),ee=u;if(j==="__proto__"||j==="constructor"||j==="prototype")return r;if(S!=O){var me=H[j];ee=p?p(me,j,H):void 0,ee===void 0&&(ee=He(me)?me:bs(o[S+1])?[]:{})}Ms(H,j,ee),H=H[j]}return r}var ma=fl;function ga(r,o,u){return r==null?r:ma(r,o,u)}var Rr=ga,qt=new WeakMap;function dl(r){return Ts(r)}function Ts(r){if(qt.has(r))return qt.get(r);const o=r.type==="compound"?va(r):r.type==="enum"?_a(r):r.default;return qt.set(r,o),o}function _a(r){const o={$case:r.defaultCase};for(const[u,p]of Object.entries(r.cases))o[u]=Ts(p);return o}function va(r){const o={};for(const[u,p]of Object.entries(r.props))o[u]=Ts(p);return o}var ln=zt,pl=U(K());function ml(r,o,u){return(0,ln.prism)(()=>{const p=(0,ln.val)(o);return ln.prism.memo("driver",()=>p?p.type==="BasicKeyframedTrack"?gl(r,p,u):(r.logger.error("Track type not yet supported."),(0,ln.prism)(()=>{})):(0,ln.prism)(()=>{}),[p]).getValue()})}function gl(r,o,u){return(0,ln.prism)(()=>{let p=ln.prism.ref("state",{started:!1}),S=p.current;const w=u.getValue();return(!S.started||w<S.validFrom||S.validTo<=w)&&(p.current=S=_l(r,u,o)),S.der.getValue()})}var xa=(0,ln.prism)(()=>{});function _l(r,o,u){const p=o.getValue();if(u.keyframes.length===0)return{started:!0,validFrom:-1/0,validTo:1/0,der:xa};let S=0;for(;;){const w=u.keyframes[S];if(!w)return Wt.error;const O=S===u.keyframes.length-1;if(p<w.position)return S===0?Wt.beforeFirstKeyframe(w):Wt.error;if(w.position===p)return O?Wt.lastKeyframe(w):Wt.between(w,u.keyframes[S+1],o);if(S===u.keyframes.length-1)return Wt.lastKeyframe(w);{const H=S+1;if(u.keyframes[H].position<=p){S=H;continue}else return Wt.between(w,u.keyframes[S+1],o)}}}var Wt={beforeFirstKeyframe(r){return{started:!0,validFrom:-1/0,validTo:r.position,der:(0,ln.prism)(()=>({left:r.value,progression:0}))}},lastKeyframe(r){return{started:!0,validFrom:r.position,validTo:1/0,der:(0,ln.prism)(()=>({left:r.value,progression:0}))}},between(r,o,u){if(!r.connectedRight)return{started:!0,validFrom:r.position,validTo:o.position,der:(0,ln.prism)(()=>({left:r.value,progression:0}))};const p=w=>(w-r.position)/(o.position-r.position);if(!r.type||r.type==="bezier"){const w=new pl.default(r.handles[2],r.handles[3],o.handles[0],o.handles[1]),O=(0,ln.prism)(()=>{const H=p(u.getValue()),j=w.solveSimple(H);return{left:r.value,right:o.value,progression:j}});return{started:!0,validFrom:r.position,validTo:o.position,der:O}}const S=(0,ln.prism)(()=>{const w=p(u.getValue()),O=Math.floor(w);return{left:r.value,right:o.value,progression:O}});return{started:!0,validFrom:r.position,validTo:o.position,der:S}},error:{started:!0,validFrom:-1/0,validTo:1/0,der:xa}};function Gi(r,o,u){const S=u.get(r);if(S&&S.override===o)return S.merged;const w=v({},r);for(const O of Object.keys(o)){const H=o[O],j=r[O];w[O]=typeof H=="object"&&typeof j=="object"?Gi(j,H,u):H===void 0?j:H}return u.set(r,{override:o,merged:w}),w}function Wi(r,o){let u=r;for(const p of o)u=u[p];return u}var Xi=zt,ya=(r,o)=>{const u=Xi.prism.memo(r,()=>new Xi.Atom(o),[]);return u.set(o),u},St=zt,Es=zt,vl=/\s/;function Sa(r){for(var o=r.length;o--&&vl.test(r.charAt(o)););return o}var Ma=Sa,ba=/^\s+/;function xl(r){return r&&r.slice(0,Ma(r)+1).replace(ba,"")}var Lr=xl,As=NaN,yl=/^[-+]0x[0-9a-f]+$/i,Sl=/^0b[01]+$/i,Ta=/^0o[0-7]+$/i,Ml=parseInt;function bl(r){if(typeof r=="number")return r;if(be(r))return As;if(He(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=He(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=Lr(r);var u=Sl.test(r);return u||Ta.test(r)?Ml(r.slice(2),u?2:8):yl.test(r)?As:+r}var y=bl,R=1/0,B=17976931348623157e292;function Q(r){if(!r)return r===0?r:0;if(r=y(r),r===R||r===-R){var o=r<0?-1:1;return o*B}return r===r?r:0}var Ze=Q;function _t(r){var o=Ze(r),u=o%1;return o===o?u?o-u:o:0}var Zt=_t;function wn(r){return r}var Ea=wn,xi=Dn(de,"WeakMap"),ji=xi,ku=Object.create,bp=function(){function r(){}return function(o){if(!He(o))return{};if(ku)return ku(o);r.prototype=o;var u=new r;return r.prototype=void 0,u}}(),Tp=bp;function Ep(r,o){var u=-1,p=r.length;for(o||(o=Array(p));++u<p;)o[u]=r[u];return o}var Ap=Ep;function wp(r,o){for(var u=-1,p=r==null?0:r.length;++u<p&&o(r[u],u,r)!==!1;);return r}var Pp=wp;function Cp(r,o,u,p){var S=!u;u||(u={});for(var w=-1,O=o.length;++w<O;){var H=o[w],j=p?p(u[H],r[H],H,u,r):void 0;j===void 0&&(j=r[H]),S?$n(u,H,j):Ms(u,H,j)}return u}var Aa=Cp,Rp=9007199254740991;function Lp(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Rp}var Tl=Lp;function Dp(r){return r!=null&&Tl(r.length)&&!xe(r)}var Hu=Dp,Ip=Object.prototype;function Up(r){var o=r&&r.constructor,u=typeof o=="function"&&o.prototype||Ip;return r===u}var El=Up;function Op(r,o){for(var u=-1,p=Array(r);++u<r;)p[u]=o(u);return p}var Np=Op,Fp="[object Arguments]";function Bp(r){return oe(r)&&Y(r)==Fp}var Gu=Bp,Wu=Object.prototype,zp=Wu.hasOwnProperty,Vp=Wu.propertyIsEnumerable,kp=Gu(function(){return arguments}())?Gu:function(r){return oe(r)&&zp.call(r,"callee")&&!Vp.call(r,"callee")},Xu=kp;function Hp(){return!1}var Gp=Hp,ju=e&&!e.nodeType&&e,qu=ju&&!0&&i&&!i.nodeType&&i,Wp=qu&&qu.exports===ju,Yu=Wp?de.Buffer:void 0,Xp=Yu?Yu.isBuffer:void 0,jp=Xp||Gp,wa=jp,qp="[object Arguments]",Yp="[object Array]",Kp="[object Boolean]",$p="[object Date]",Jp="[object Error]",Zp="[object Function]",Qp="[object Map]",em="[object Number]",tm="[object Object]",nm="[object RegExp]",im="[object Set]",rm="[object String]",sm="[object WeakMap]",am="[object ArrayBuffer]",om="[object DataView]",lm="[object Float32Array]",cm="[object Float64Array]",um="[object Int8Array]",hm="[object Int16Array]",fm="[object Int32Array]",dm="[object Uint8Array]",pm="[object Uint8ClampedArray]",mm="[object Uint16Array]",gm="[object Uint32Array]",Lt={};Lt[lm]=Lt[cm]=Lt[um]=Lt[hm]=Lt[fm]=Lt[dm]=Lt[pm]=Lt[mm]=Lt[gm]=!0,Lt[qp]=Lt[Yp]=Lt[am]=Lt[Kp]=Lt[om]=Lt[$p]=Lt[Jp]=Lt[Zp]=Lt[Qp]=Lt[em]=Lt[tm]=Lt[nm]=Lt[im]=Lt[rm]=Lt[sm]=!1;function _m(r){return oe(r)&&Tl(r.length)&&!!Lt[Y(r)]}var vm=_m;function xm(r){return function(o){return r(o)}}var Al=xm,Ku=e&&!e.nodeType&&e,ws=Ku&&!0&&i&&!i.nodeType&&i,ym=ws&&ws.exports===Ku,wl=ym&&tt.process,Sm=function(){try{var r=ws&&ws.require&&ws.require("util").types;return r||wl&&wl.binding&&wl.binding("util")}catch{}}(),Dr=Sm,$u=Dr&&Dr.isTypedArray,Mm=$u?Al($u):vm,Ju=Mm,bm=Object.prototype,Tm=bm.hasOwnProperty;function Em(r,o){var u=Te(r),p=!u&&Xu(r),S=!u&&!p&&wa(r),w=!u&&!p&&!S&&Ju(r),O=u||p||S||w,H=O?Np(r.length,String):[],j=H.length;for(var ee in r)(o||Tm.call(r,ee))&&!(O&&(ee=="length"||S&&(ee=="offset"||ee=="parent")||w&&(ee=="buffer"||ee=="byteLength"||ee=="byteOffset")||bs(ee,j)))&&H.push(ee);return H}var Zu=Em;function Am(r,o){return function(u){return r(o(u))}}var Qu=Am,wm=Qu(Object.keys,Object),Pm=wm,Cm=Object.prototype,Rm=Cm.hasOwnProperty;function Lm(r){if(!El(r))return Pm(r);var o=[];for(var u in Object(r))Rm.call(r,u)&&u!="constructor"&&o.push(u);return o}var Dm=Lm;function Im(r){return Hu(r)?Zu(r):Dm(r)}var Ps=Im;function Um(r){var o=[];if(r!=null)for(var u in Object(r))o.push(u);return o}var Om=Um,Nm=Object.prototype,Fm=Nm.hasOwnProperty;function Bm(r){if(!He(r))return Om(r);var o=El(r),u=[];for(var p in r)p=="constructor"&&(o||!Fm.call(r,p))||u.push(p);return u}var zm=Bm;function Vm(r){return Hu(r)?Zu(r,!0):zm(r)}var Pl=Vm;function km(r,o){for(var u=-1,p=o.length,S=r.length;++u<p;)r[S+u]=o[u];return r}var eh=km,Hm=Qu(Object.getPrototypeOf,Object),Cl=Hm,Gm="[object Object]",Wm=Function.prototype,Xm=Object.prototype,th=Wm.toString,jm=Xm.hasOwnProperty,qm=th.call(Object);function Ym(r){if(!oe(r)||Y(r)!=Gm)return!1;var o=Cl(r);if(o===null)return!0;var u=jm.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&th.call(u)==qm}var Km=Ym;function $m(r,o,u){var p=-1,S=r.length;o<0&&(o=-o>S?0:S+o),u=u>S?S:u,u<0&&(u+=S),S=o>u?0:u-o>>>0,o>>>=0;for(var w=Array(S);++p<S;)w[p]=r[p+o];return w}var nh=$m;function Jm(r,o,u){var p=r.length;return u=u===void 0?p:u,!o&&u>=p?r:nh(r,o,u)}var Zm=Jm,Qm="\\ud800-\\udfff",eg="\\u0300-\\u036f",tg="\\ufe20-\\ufe2f",ng="\\u20d0-\\u20ff",ig=eg+tg+ng,rg="\\ufe0e\\ufe0f",sg="\\u200d",ag=RegExp("["+sg+Qm+ig+rg+"]");function og(r){return ag.test(r)}var Rl=og;function lg(r){return r.split("")}var cg=lg,ih="\\ud800-\\udfff",ug="\\u0300-\\u036f",hg="\\ufe20-\\ufe2f",fg="\\u20d0-\\u20ff",dg=ug+hg+fg,pg="\\ufe0e\\ufe0f",mg="["+ih+"]",Ll="["+dg+"]",Dl="\\ud83c[\\udffb-\\udfff]",gg="(?:"+Ll+"|"+Dl+")",rh="[^"+ih+"]",sh="(?:\\ud83c[\\udde6-\\uddff]){2}",ah="[\\ud800-\\udbff][\\udc00-\\udfff]",_g="\\u200d",oh=gg+"?",lh="["+pg+"]?",vg="(?:"+_g+"(?:"+[rh,sh,ah].join("|")+")"+lh+oh+")*",xg=lh+oh+vg,yg="(?:"+[rh+Ll+"?",Ll,sh,ah,mg].join("|")+")",Sg=RegExp(Dl+"(?="+Dl+")|"+yg+xg,"g");function Mg(r){return r.match(Sg)||[]}var bg=Mg;function Tg(r){return Rl(r)?bg(r):cg(r)}var Eg=Tg;function Ag(r,o,u){return r===r&&(u!==void 0&&(r=r<=u?r:u),o!==void 0&&(r=r>=o?r:o)),r}var wg=Ag;function Pg(r,o,u){return u===void 0&&(u=o,o=void 0),u!==void 0&&(u=y(u),u=u===u?u:0),o!==void 0&&(o=y(o),o=o===o?o:0),wg(y(r),o,u)}var ch=Pg;function Cg(){this.__data__=new Er,this.size=0}var Rg=Cg;function Lg(r){var o=this.__data__,u=o.delete(r);return this.size=o.size,u}var Dg=Lg;function Ig(r){return this.__data__.get(r)}var Ug=Ig;function Og(r){return this.__data__.has(r)}var Ng=Og,Fg=200;function Bg(r,o){var u=this.__data__;if(u instanceof Er){var p=u.__data__;if(!zi||p.length<Fg-1)return p.push([r,o]),this.size=++u.size,this;u=this.__data__=new wr(p)}return u.set(r,o),this.size=u.size,this}var zg=Bg;function Ir(r){var o=this.__data__=new Er(r);this.size=o.size}Ir.prototype.clear=Rg,Ir.prototype.delete=Dg,Ir.prototype.get=Ug,Ir.prototype.has=Ng,Ir.prototype.set=zg;var Cs=Ir;function Vg(r,o){return r&&Aa(o,Ps(o),r)}var kg=Vg;function Hg(r,o){return r&&Aa(o,Pl(o),r)}var Gg=Hg,uh=e&&!e.nodeType&&e,hh=uh&&!0&&i&&!i.nodeType&&i,Wg=hh&&hh.exports===uh,fh=Wg?de.Buffer:void 0,dh=fh?fh.allocUnsafe:void 0;function Xg(r,o){if(o)return r.slice();var u=r.length,p=dh?dh(u):new r.constructor(u);return r.copy(p),p}var jg=Xg;function qg(r,o){for(var u=-1,p=r==null?0:r.length,S=0,w=[];++u<p;){var O=r[u];o(O,u,r)&&(w[S++]=O)}return w}var Yg=qg;function Kg(){return[]}var ph=Kg,$g=Object.prototype,Jg=$g.propertyIsEnumerable,mh=Object.getOwnPropertySymbols,Zg=mh?function(r){return r==null?[]:(r=Object(r),Yg(mh(r),function(o){return Jg.call(r,o)}))}:ph,Il=Zg;function Qg(r,o){return Aa(r,Il(r),o)}var e_=Qg,t_=Object.getOwnPropertySymbols,n_=t_?function(r){for(var o=[];r;)eh(o,Il(r)),r=Cl(r);return o}:ph,gh=n_;function i_(r,o){return Aa(r,gh(r),o)}var r_=i_;function s_(r,o,u){var p=o(r);return Te(r)?p:eh(p,u(r))}var _h=s_;function a_(r){return _h(r,Ps,Il)}var Ul=a_;function o_(r){return _h(r,Pl,gh)}var l_=o_,c_=Dn(de,"DataView"),Ol=c_,u_=Dn(de,"Promise"),Nl=u_,h_=Dn(de,"Set"),Fl=h_,vh="[object Map]",f_="[object Object]",xh="[object Promise]",yh="[object Set]",Sh="[object WeakMap]",Mh="[object DataView]",d_=kt(Ol),p_=kt(zi),m_=kt(Nl),g_=kt(Fl),__=kt(ji),qi=Y;(Ol&&qi(new Ol(new ArrayBuffer(1)))!=Mh||zi&&qi(new zi)!=vh||Nl&&qi(Nl.resolve())!=xh||Fl&&qi(new Fl)!=yh||ji&&qi(new ji)!=Sh)&&(qi=function(r){var o=Y(r),u=o==f_?r.constructor:void 0,p=u?kt(u):"";if(p)switch(p){case d_:return Mh;case p_:return vh;case m_:return xh;case g_:return yh;case __:return Sh}return o});var Rs=qi,v_=Object.prototype,x_=v_.hasOwnProperty;function y_(r){var o=r.length,u=new r.constructor(o);return o&&typeof r[0]=="string"&&x_.call(r,"index")&&(u.index=r.index,u.input=r.input),u}var S_=y_,M_=de.Uint8Array,Pa=M_;function b_(r){var o=new r.constructor(r.byteLength);return new Pa(o).set(new Pa(r)),o}var Bl=b_;function T_(r,o){var u=o?Bl(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}var E_=T_,A_=/\w*$/;function w_(r){var o=new r.constructor(r.source,A_.exec(r));return o.lastIndex=r.lastIndex,o}var P_=w_,bh=ye?ye.prototype:void 0,Th=bh?bh.valueOf:void 0;function C_(r){return Th?Object(Th.call(r)):{}}var R_=C_;function L_(r,o){var u=o?Bl(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}var D_=L_,I_="[object Boolean]",U_="[object Date]",O_="[object Map]",N_="[object Number]",F_="[object RegExp]",B_="[object Set]",z_="[object String]",V_="[object Symbol]",k_="[object ArrayBuffer]",H_="[object DataView]",G_="[object Float32Array]",W_="[object Float64Array]",X_="[object Int8Array]",j_="[object Int16Array]",q_="[object Int32Array]",Y_="[object Uint8Array]",K_="[object Uint8ClampedArray]",$_="[object Uint16Array]",J_="[object Uint32Array]";function Z_(r,o,u){var p=r.constructor;switch(o){case k_:return Bl(r);case I_:case U_:return new p(+r);case H_:return E_(r,u);case G_:case W_:case X_:case j_:case q_:case Y_:case K_:case $_:case J_:return D_(r,u);case O_:return new p;case N_:case z_:return new p(r);case F_:return P_(r);case B_:return new p;case V_:return R_(r)}}var Q_=Z_;function ev(r){return typeof r.constructor=="function"&&!El(r)?Tp(Cl(r)):{}}var tv=ev,nv="[object Map]";function iv(r){return oe(r)&&Rs(r)==nv}var rv=iv,Eh=Dr&&Dr.isMap,sv=Eh?Al(Eh):rv,av=sv,ov="[object Set]";function lv(r){return oe(r)&&Rs(r)==ov}var cv=lv,Ah=Dr&&Dr.isSet,uv=Ah?Al(Ah):cv,hv=uv,fv=1,dv=2,pv=4,wh="[object Arguments]",mv="[object Array]",gv="[object Boolean]",_v="[object Date]",vv="[object Error]",Ph="[object Function]",xv="[object GeneratorFunction]",yv="[object Map]",Sv="[object Number]",Ch="[object Object]",Mv="[object RegExp]",bv="[object Set]",Tv="[object String]",Ev="[object Symbol]",Av="[object WeakMap]",wv="[object ArrayBuffer]",Pv="[object DataView]",Cv="[object Float32Array]",Rv="[object Float64Array]",Lv="[object Int8Array]",Dv="[object Int16Array]",Iv="[object Int32Array]",Uv="[object Uint8Array]",Ov="[object Uint8ClampedArray]",Nv="[object Uint16Array]",Fv="[object Uint32Array]",wt={};wt[wh]=wt[mv]=wt[wv]=wt[Pv]=wt[gv]=wt[_v]=wt[Cv]=wt[Rv]=wt[Lv]=wt[Dv]=wt[Iv]=wt[yv]=wt[Sv]=wt[Ch]=wt[Mv]=wt[bv]=wt[Tv]=wt[Ev]=wt[Uv]=wt[Ov]=wt[Nv]=wt[Fv]=!0,wt[vv]=wt[Ph]=wt[Av]=!1;function Ca(r,o,u,p,S,w){var O,H=o&fv,j=o&dv,ee=o&pv;if(u&&(O=S?u(r,p,S,w):u(r)),O!==void 0)return O;if(!He(r))return r;var me=Te(r);if(me){if(O=S_(r),!H)return Ap(r,O)}else{var ge=Rs(r),Pe=ge==Ph||ge==xv;if(wa(r))return jg(r,H);if(ge==Ch||ge==wh||Pe&&!S){if(O=j||Pe?{}:tv(r),!H)return j?r_(r,Gg(O,r)):e_(r,kg(O,r))}else{if(!wt[ge])return S?r:{};O=Q_(r,ge,H)}}w||(w=new Cs);var We=w.get(r);if(We)return We;w.set(r,O),hv(r)?r.forEach(function(ht){O.add(Ca(ht,o,u,ht,r,w))}):av(r)&&r.forEach(function(ht,it){O.set(it,Ca(ht,o,u,it,r,w))});var ke=ee?j?l_:Ul:j?Pl:Ps,st=me?void 0:ke(r);return Pp(st||r,function(ht,it){st&&(it=ht,ht=r[it]),Ms(O,it,Ca(ht,o,u,it,r,w))}),O}var Bv=Ca,zv=1,Vv=4;function kv(r){return Bv(r,zv|Vv)}var Hv=kv,Gv="__lodash_hash_undefined__";function Wv(r){return this.__data__.set(r,Gv),this}var Xv=Wv;function jv(r){return this.__data__.has(r)}var qv=jv;function Ra(r){var o=-1,u=r==null?0:r.length;for(this.__data__=new wr;++o<u;)this.add(r[o])}Ra.prototype.add=Ra.prototype.push=Xv,Ra.prototype.has=qv;var Yv=Ra;function Kv(r,o){for(var u=-1,p=r==null?0:r.length;++u<p;)if(o(r[u],u,r))return!0;return!1}var $v=Kv;function Jv(r,o){return r.has(o)}var Zv=Jv,Qv=1,e0=2;function t0(r,o,u,p,S,w){var O=u&Qv,H=r.length,j=o.length;if(H!=j&&!(O&&j>H))return!1;var ee=w.get(r),me=w.get(o);if(ee&&me)return ee==o&&me==r;var ge=-1,Pe=!0,We=u&e0?new Yv:void 0;for(w.set(r,o),w.set(o,r);++ge<H;){var ke=r[ge],st=o[ge];if(p)var ht=O?p(st,ke,ge,o,r,w):p(ke,st,ge,r,o,w);if(ht!==void 0){if(ht)continue;Pe=!1;break}if(We){if(!$v(o,function(it,xt){if(!Zv(We,xt)&&(ke===it||S(ke,it,u,p,w)))return We.push(xt)})){Pe=!1;break}}else if(!(ke===st||S(ke,st,u,p,w))){Pe=!1;break}}return w.delete(r),w.delete(o),Pe}var Rh=t0;function n0(r){var o=-1,u=Array(r.size);return r.forEach(function(p,S){u[++o]=[S,p]}),u}var i0=n0;function r0(r){var o=-1,u=Array(r.size);return r.forEach(function(p){u[++o]=p}),u}var s0=r0,a0=1,o0=2,l0="[object Boolean]",c0="[object Date]",u0="[object Error]",h0="[object Map]",f0="[object Number]",d0="[object RegExp]",p0="[object Set]",m0="[object String]",g0="[object Symbol]",_0="[object ArrayBuffer]",v0="[object DataView]",Lh=ye?ye.prototype:void 0,zl=Lh?Lh.valueOf:void 0;function x0(r,o,u,p,S,w,O){switch(u){case v0:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case _0:return!(r.byteLength!=o.byteLength||!w(new Pa(r),new Pa(o)));case l0:case c0:case f0:return Ht(+r,+o);case u0:return r.name==o.name&&r.message==o.message;case d0:case m0:return r==o+"";case h0:var H=i0;case p0:var j=p&a0;if(H||(H=s0),r.size!=o.size&&!j)return!1;var ee=O.get(r);if(ee)return ee==o;p|=o0,O.set(r,o);var me=Rh(H(r),H(o),p,S,w,O);return O.delete(r),me;case g0:if(zl)return zl.call(r)==zl.call(o)}return!1}var y0=x0,S0=1,M0=Object.prototype,b0=M0.hasOwnProperty;function T0(r,o,u,p,S,w){var O=u&S0,H=Ul(r),j=H.length,ee=Ul(o),me=ee.length;if(j!=me&&!O)return!1;for(var ge=j;ge--;){var Pe=H[ge];if(!(O?Pe in o:b0.call(o,Pe)))return!1}var We=w.get(r),ke=w.get(o);if(We&&ke)return We==o&&ke==r;var st=!0;w.set(r,o),w.set(o,r);for(var ht=O;++ge<j;){Pe=H[ge];var it=r[Pe],xt=o[Pe];if(p)var en=O?p(xt,it,Pe,o,r,w):p(it,xt,Pe,r,o,w);if(!(en===void 0?it===xt||S(it,xt,u,p,w):en)){st=!1;break}ht||(ht=Pe=="constructor")}if(st&&!ht){var fn=r.constructor,tn=o.constructor;fn!=tn&&"constructor"in r&&"constructor"in o&&!(typeof fn=="function"&&fn instanceof fn&&typeof tn=="function"&&tn instanceof tn)&&(st=!1)}return w.delete(r),w.delete(o),st}var E0=T0,A0=1,Dh="[object Arguments]",Ih="[object Array]",La="[object Object]",w0=Object.prototype,Uh=w0.hasOwnProperty;function P0(r,o,u,p,S,w){var O=Te(r),H=Te(o),j=O?Ih:Rs(r),ee=H?Ih:Rs(o);j=j==Dh?La:j,ee=ee==Dh?La:ee;var me=j==La,ge=ee==La,Pe=j==ee;if(Pe&&wa(r)){if(!wa(o))return!1;O=!0,me=!1}if(Pe&&!me)return w||(w=new Cs),O||Ju(r)?Rh(r,o,u,p,S,w):y0(r,o,j,u,p,S,w);if(!(u&A0)){var We=me&&Uh.call(r,"__wrapped__"),ke=ge&&Uh.call(o,"__wrapped__");if(We||ke){var st=We?r.value():r,ht=ke?o.value():o;return w||(w=new Cs),S(st,ht,u,p,w)}}return Pe?(w||(w=new Cs),E0(r,o,u,p,S,w)):!1}var C0=P0;function Oh(r,o,u,p,S){return r===o?!0:r==null||o==null||!oe(r)&&!oe(o)?r!==r&&o!==o:C0(r,o,u,p,Oh,S)}var Nh=Oh,R0=1,L0=2;function D0(r,o,u,p){var S=u.length,w=S,O=!p;if(r==null)return!w;for(r=Object(r);S--;){var H=u[S];if(O&&H[2]?H[1]!==r[H[0]]:!(H[0]in r))return!1}for(;++S<w;){H=u[S];var j=H[0],ee=r[j],me=H[1];if(O&&H[2]){if(ee===void 0&&!(j in r))return!1}else{var ge=new Cs;if(p)var Pe=p(ee,me,j,r,o,ge);if(!(Pe===void 0?Nh(me,ee,R0|L0,p,ge):Pe))return!1}}return!0}var I0=D0;function U0(r){return r===r&&!He(r)}var Fh=U0;function O0(r){for(var o=Ps(r),u=o.length;u--;){var p=o[u],S=r[p];o[u]=[p,S,Fh(S)]}return o}var N0=O0;function F0(r,o){return function(u){return u==null?!1:u[r]===o&&(o!==void 0||r in Object(u))}}var Bh=F0;function B0(r){var o=N0(r);return o.length==1&&o[0][2]?Bh(o[0][0],o[0][1]):function(u){return u===r||I0(u,r,o)}}var z0=B0;function V0(r,o){return r!=null&&o in Object(r)}var k0=V0;function H0(r,o,u){o=Vi(o,r);for(var p=-1,S=o.length,w=!1;++p<S;){var O=Un(o[p]);if(!(w=r!=null&&u(r,O)))break;r=r[O]}return w||++p!=S?w:(S=r==null?0:r.length,!!S&&Tl(S)&&bs(O,S)&&(Te(r)||Xu(r)))}var G0=H0;function W0(r,o){return r!=null&&G0(r,o,k0)}var X0=W0,j0=1,q0=2;function Y0(r,o){return Re(r)&&Fh(o)?Bh(Un(r),o):function(u){var p=Kn(u,r);return p===void 0&&p===o?X0(u,r):Nh(o,p,j0|q0)}}var K0=Y0;function $0(r){return function(o){return o==null?void 0:o[r]}}var zh=$0;function J0(r){return function(o){return Pr(o,r)}}var Z0=J0;function Q0(r){return Re(r)?zh(Un(r)):Z0(r)}var ex=Q0;function tx(r){return typeof r=="function"?r:r==null?Ea:typeof r=="object"?Te(r)?K0(r[0],r[1]):z0(r):ex(r)}var nx=tx;function ix(r){return function(o,u,p){for(var S=-1,w=Object(o),O=p(o),H=O.length;H--;){var j=O[r?H:++S];if(u(w[j],j,w)===!1)break}return o}}var rx=ix,sx=rx(),ax=sx;function ox(r,o){return r&&ax(r,o,Ps)}var lx=ox,cx=function(){return de.Date.now()},Vl=cx,ux="Expected a function",hx=Math.max,fx=Math.min;function dx(r,o,u){var p,S,w,O,H,j,ee=0,me=!1,ge=!1,Pe=!0;if(typeof r!="function")throw new TypeError(ux);o=y(o)||0,He(u)&&(me=!!u.leading,ge="maxWait"in u,w=ge?hx(y(u.maxWait)||0,o):w,Pe="trailing"in u?!!u.trailing:Pe);function We(Tt){var nn=p,Mn=S;return p=S=void 0,ee=Tt,O=r.apply(Mn,nn),O}function ke(Tt){return ee=Tt,H=setTimeout(it,o),me?We(Tt):O}function st(Tt){var nn=Tt-j,Mn=Tt-ee,kn=o-nn;return ge?fx(kn,w-Mn):kn}function ht(Tt){var nn=Tt-j,Mn=Tt-ee;return j===void 0||nn>=o||nn<0||ge&&Mn>=w}function it(){var Tt=Vl();if(ht(Tt))return xt(Tt);H=setTimeout(it,st(Tt))}function xt(Tt){return H=void 0,Pe&&p?We(Tt):(p=S=void 0,O)}function en(){H!==void 0&&clearTimeout(H),ee=0,p=j=S=H=void 0}function fn(){return H===void 0?O:xt(Vl())}function tn(){var Tt=Vl(),nn=ht(Tt);if(p=arguments,S=this,j=Tt,nn){if(H===void 0)return ke(j);if(ge)return clearTimeout(H),H=setTimeout(it,o),We(j)}return H===void 0&&(H=setTimeout(it,o)),O}return tn.cancel=en,tn.flush=fn,tn}var px=dx;function mx(r){var o=r==null?0:r.length;return o?r[o-1]:void 0}var gx=mx;function _x(r,o){return o.length<2?r:Pr(r,nh(o,0,-1))}var vx=_x;function xx(r){return typeof r=="number"&&r==Zt(r)}var yx=xx;function Sx(r,o){var u={};return o=nx(o),lx(r,function(p,S,w){$n(u,S,o(p,S,w))}),u}var Mx=Sx;function bx(r,o){return o=Vi(o,r),r=vx(r,o),r==null||delete r[Un(gx(o))]}var Tx=bx,Ex=9007199254740991,Ax=Math.floor;function wx(r,o){var u="";if(!r||o<1||o>Ex)return u;do o%2&&(u+=r),o=Ax(o/2),o&&(r+=r);while(o);return u}var Vh=wx,Px=zh("length"),Cx=Px,kh="\\ud800-\\udfff",Rx="\\u0300-\\u036f",Lx="\\ufe20-\\ufe2f",Dx="\\u20d0-\\u20ff",Ix=Rx+Lx+Dx,Ux="\\ufe0e\\ufe0f",Ox="["+kh+"]",kl="["+Ix+"]",Hl="\\ud83c[\\udffb-\\udfff]",Nx="(?:"+kl+"|"+Hl+")",Hh="[^"+kh+"]",Gh="(?:\\ud83c[\\udde6-\\uddff]){2}",Wh="[\\ud800-\\udbff][\\udc00-\\udfff]",Fx="\\u200d",Xh=Nx+"?",jh="["+Ux+"]?",Bx="(?:"+Fx+"(?:"+[Hh,Gh,Wh].join("|")+")"+jh+Xh+")*",zx=jh+Xh+Bx,Vx="(?:"+[Hh+kl+"?",kl,Gh,Wh,Ox].join("|")+")",qh=RegExp(Hl+"(?="+Hl+")|"+Vx+zx,"g");function kx(r){for(var o=qh.lastIndex=0;qh.test(r);)++o;return o}var Hx=kx;function Gx(r){return Rl(r)?Hx(r):Cx(r)}var Yh=Gx,Wx=Math.ceil;function Xx(r,o){o=o===void 0?" ":ua(o);var u=o.length;if(u<2)return u?Vh(o,r):o;var p=Vh(o,Wx(r/Yh(o)));return Rl(o)?Zm(Eg(p),0,r).join(""):p.slice(0,r)}var jx=Xx;function qx(r,o,u){r=ha(r),o=Zt(o);var p=o?Yh(r):0;return o&&p<o?jx(o-p,u)+r:r}var Ls=qx;function Yx(r,o){return r==null?!0:Tx(r,o)}var Kh=Yx,Kx=5*1e3,$x=class{constructor(r){T(this,"_cache",new vi),T(this,"_keepHotUntapDebounce"),fe(this,r)}get type(){return"Theatre_SheetObject_PublicAPI"}get props(){return q(this).propsP}get sheet(){return q(this).sheet.publicApi}get project(){return q(this).sheet.project.publicApi}get address(){return v({},q(this).address)}_valuesPrism(){return this._cache.get("_valuesPrism",()=>{const r=q(this);return(0,Es.prism)(()=>(0,Es.val)(r.getValues().getValue()))})}onValuesChange(r,o){return dc(this._valuesPrism(),r,o)}get value(){const r=this._valuesPrism();{if(!r.isHot){this._keepHotUntapDebounce!=null&&this._keepHotUntapDebounce.flush();const o=r.keepHot();this._keepHotUntapDebounce=px(()=>{o(),this._keepHotUntapDebounce=void 0},Kx)}this._keepHotUntapDebounce&&this._keepHotUntapDebounce()}return r.getValue()}set initialValue(r){q(this).setInitialValue(r)}};function Jx(r){const o=new WeakMap;return u=>(o.has(u)||o.set(u,r(u)),o.get(u))}function Da(r){return r.type==="compound"||r.type==="enum"}function Gl(r,o){if(!r)return;const[u,...p]=o;if(u===void 0)return r;if(!Da(r))return;const S=r.type==="enum"?r.cases[u]:r.props[u];return Gl(S,p)}function Zx(r){return!Da(r)}var Qx=class{constructor(r,o,u){this.sheet=r,this.template=o,this.nativeObject=u,T(this,"$$isPointerToPrismProvider",!0),T(this,"address"),T(this,"publicApi"),T(this,"_initialValue",new St.Atom({})),T(this,"_cache",new vi),T(this,"_logger"),T(this,"_internalUtilCtx"),this._logger=r._logger.named("SheetObject",o.address.objectKey),this._logger._trace("creating object"),this._internalUtilCtx={logger:this._logger.utilFor.internal()},this.address=M(v({},o.address),{sheetInstanceId:r.address.sheetInstanceId}),this.publicApi=new $x(this)}get type(){return"Theatre_SheetObject"}getValues(){return this._cache.get("getValues()",()=>(0,St.prism)(()=>{const r=(0,St.val)(this.template.getDefaultValues()),o=(0,St.val)(this._initialValue.pointer),u=St.prism.memo("withInitialCache",()=>new WeakMap,[]),p=Gi(r,o,u),S=(0,St.val)(this.template.getStaticValues()),w=St.prism.memo("withStatics",()=>new WeakMap,[]);let H=Gi(p,S,w),j;{const me=St.prism.memo("seq",()=>this.getSequencedValues(),[]),ge=St.prism.memo("withSeqsCache",()=>new WeakMap,[]);j=(0,St.val)((0,St.val)(me)),H=Gi(H,j,ge)}return ya("finalAtom",H).pointer}))}getValueByPointer(r){const o=(0,St.val)(this.getValues()),{path:u}=(0,St.getPointerParts)(r);return(0,St.val)(Wi(o,u))}pointerToPrism(r){const{path:o}=(0,St.getPointerParts)(r);return(0,St.prism)(()=>{const u=(0,St.val)(this.getValues());return(0,St.val)(Wi(u,o))})}getSequencedValues(){return(0,St.prism)(()=>{const r=St.prism.memo("tracksToProcess",()=>this.template.getArrayOfValidSequenceTracks(),[]),o=(0,St.val)(r),u=new St.Atom({}),p=(0,St.val)(this.template.configPointer);return St.prism.effect("processTracks",()=>{const S=[];for(const{trackId:w,pathToProp:O}of o){const H=this._trackIdToPrism(w),j=Gl(p,O),ee=j.deserializeAndSanitize,me=j.interpolate,ge=()=>{const We=H.getValue();if(!We)return u.setByPointer(xt=>Wi(xt,O),void 0);const ke=ee(We.left),st=ke===void 0?j.default:ke;if(We.right===void 0)return u.setByPointer(xt=>Wi(xt,O),st);const ht=ee(We.right),it=ht===void 0?j.default:ht;return u.setByPointer(xt=>Wi(xt,O),me(st,it,We.progression))},Pe=H.onStale(ge);ge(),S.push(Pe)}return()=>{for(const w of S)w()}},[p,...o]),u.pointer})}_trackIdToPrism(r){const o=this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[r],u=this.sheet.getSequence().positionPrism;return ml(this._internalUtilCtx,o,u)}get propsP(){return this._cache.get("propsP",()=>(0,St.pointer)({root:this,path:[]}))}validateValue(r,o){}setInitialValue(r){this.validateValue(this.propsP,r),this._initialValue.set(r)}};function Pt(r){return function(u,p){return r(u,p())}}var xn={_hmm:yn(524),_todo:yn(522),_error:yn(521),errorDev:yn(529),errorPublic:yn(545),_kapow:yn(268),_warn:yn(265),warnDev:yn(273),warnPublic:yn(289),_debug:yn(137),debugDev:yn(145),_trace:yn(73),traceDev:yn(81)};function yn(r){return Object.freeze({audience:Yi(r,8)?"internal":Yi(r,16)?"dev":"public",category:Yi(r,4)?"troubleshooting":Yi(r,2)?"todo":"general",level:Yi(r,512)?512:Yi(r,256)?256:Yi(r,128)?128:64})}function Yi(r,o){return(r&o)===o}function Ct(r,o){return((o&32)===32?!0:(o&16)===16?r.dev:(o&8)===8?r.internal:!1)&&r.min<=o}var Jn={loggingConsoleStyle:!0,loggerConsoleStyle:!0,includes:Object.freeze({internal:!1,dev:!1,min:256}),filtered:function(){},include:function(){return{}},create:null,creatExt:null,named(r,o,u){return this.create({names:[...r.names,{name:o,key:u}]})},style:{bold:void 0,italic:void 0,cssMemo:new Map([["",""]]),collapseOnRE:/[a-z- ]+/g,color:void 0,collapsed(r){if(r.length<5)return r;const o=r.replace(this.collapseOnRE,"");return this.cssMemo.has(o)||this.cssMemo.set(o,this.css(r)),o},css(r){var o,u,p,S;const w=this.cssMemo.get(r);if(w)return w;let O="color:".concat((u=(o=this.color)==null?void 0:o.call(this,r))!=null?u:"hsl(".concat((r.charCodeAt(0)+r.charCodeAt(r.length-1))%360,", 100%, 60%)"));return(p=this.bold)!=null&&p.test(r)&&(O+=";font-weight:600"),(S=this.italic)!=null&&S.test(r)&&(O+=";font-style:italic"),this.cssMemo.set(r,O),O}}};function $h(r=console,o={}){const u=M(v({},Jn),{includes:v({},Jn.includes)}),p={styled:ny.bind(u,r),noStyle:ry.bind(u,r)},S=ty.bind(u);function w(){return u.loggingConsoleStyle&&u.loggerConsoleStyle?p.styled:p.noStyle}return u.create=w(),{configureLogger(O){var H;O==="console"?(u.loggerConsoleStyle=Jn.loggerConsoleStyle,u.create=w()):O.type==="console"?(u.loggerConsoleStyle=(H=O.style)!=null?H:Jn.loggerConsoleStyle,u.create=w()):O.type==="keyed"?(u.creatExt=j=>O.keyed(j.names),u.create=S):O.type==="named"&&(u.creatExt=ey.bind(null,O.named),u.create=S)},configureLogging(O){var H,j,ee,me,ge;u.includes.dev=(H=O.dev)!=null?H:Jn.includes.dev,u.includes.internal=(j=O.internal)!=null?j:Jn.includes.internal,u.includes.min=(ee=O.min)!=null?ee:Jn.includes.min,u.include=(me=O.include)!=null?me:Jn.include,u.loggingConsoleStyle=(ge=O.consoleStyle)!=null?ge:Jn.loggingConsoleStyle,u.create=w()},getLogger(){return u.create({names:[]})}}}function ey(r,o){const u=[];for(let{name:p,key:S}of o.names)u.push(S==null?p:"".concat(p," (").concat(S,")"));return r(u)}function ty(r){const o=v(v({},this.includes),this.include(r)),u=this.filtered,p=this.named.bind(this,r),S=this.creatExt(r),w=Ct(o,524),O=Ct(o,522),H=Ct(o,521),j=Ct(o,529),ee=Ct(o,545),me=Ct(o,265),ge=Ct(o,268),Pe=Ct(o,273),We=Ct(o,289),ke=Ct(o,137),st=Ct(o,145),ht=Ct(o,73),it=Ct(o,81),xt=w?S.error.bind(S,xn._hmm):u.bind(r,524),en=O?S.error.bind(S,xn._todo):u.bind(r,522),fn=H?S.error.bind(S,xn._error):u.bind(r,521),tn=j?S.error.bind(S,xn.errorDev):u.bind(r,529),Tt=ee?S.error.bind(S,xn.errorPublic):u.bind(r,545),nn=ge?S.warn.bind(S,xn._kapow):u.bind(r,268),Mn=me?S.warn.bind(S,xn._warn):u.bind(r,265),kn=Pe?S.warn.bind(S,xn.warnDev):u.bind(r,273),er=We?S.warn.bind(S,xn.warnPublic):u.bind(r,273),tr=ke?S.debug.bind(S,xn._debug):u.bind(r,137),nr=st?S.debug.bind(S,xn.debugDev):u.bind(r,145),ir=ht?S.trace.bind(S,xn._trace):u.bind(r,73),rr=it?S.trace.bind(S,xn.traceDev):u.bind(r,81),Ft={_hmm:xt,_todo:en,_error:fn,errorDev:tn,errorPublic:Tt,_kapow:nn,_warn:Mn,warnDev:kn,warnPublic:er,_debug:tr,debugDev:nr,_trace:ir,traceDev:rr,lazy:{_hmm:w?Pt(xt):xt,_todo:O?Pt(en):en,_error:H?Pt(fn):fn,errorDev:j?Pt(tn):tn,errorPublic:ee?Pt(Tt):Tt,_kapow:ge?Pt(nn):nn,_warn:me?Pt(Mn):Mn,warnDev:Pe?Pt(kn):kn,warnPublic:We?Pt(er):er,_debug:ke?Pt(tr):tr,debugDev:st?Pt(nr):nr,_trace:ht?Pt(ir):ir,traceDev:it?Pt(rr):rr},named:p,utilFor:{internal(){return{debug:Ft._debug,error:Ft._error,warn:Ft._warn,trace:Ft._trace,named(bn,Rt){return Ft.named(bn,Rt).utilFor.internal()}}},dev(){return{debug:Ft.debugDev,error:Ft.errorDev,warn:Ft.warnDev,trace:Ft.traceDev,named(bn,Rt){return Ft.named(bn,Rt).utilFor.dev()}}},public(){return{error:Ft.errorPublic,warn:Ft.warnPublic,debug(bn,Rt){Ft._warn('(public "debug" filtered out) '.concat(bn),Rt)},trace(bn,Rt){Ft._warn('(public "trace" filtered out) '.concat(bn),Rt)},named(bn,Rt){return Ft.named(bn,Rt).utilFor.public()}}}}};return Ft}function ny(r,o){const u=v(v({},this.includes),this.include(o)),p=[];let S="";for(let j=0;j<o.names.length;j++){const{name:ee,key:me}=o.names[j];if(S+=" %c".concat(ee),p.push(this.style.css(ee)),me!=null){const ge="%c#".concat(me);S+=ge,p.push(this.style.css(ge))}}const w=this.filtered,O=this.named.bind(this,o),H=[S,...p];return Jh(w,o,u,r,H,iy(H),O)}function iy(r){const o=r.slice(0);for(let u=1;u<o.length;u++)o[u]+=";background-color:#e0005a;padding:2px;color:white";return o}function ry(r,o){const u=v(v({},this.includes),this.include(o));let p="";for(let H=0;H<o.names.length;H++){const{name:j,key:ee}=o.names[H];p+=" ".concat(j),ee!=null&&(p+="#".concat(ee))}const S=this.filtered,w=this.named.bind(this,o),O=[p];return Jh(S,o,u,r,O,O,w)}function Jh(r,o,u,p,S,w,O){const H=Ct(u,524),j=Ct(u,522),ee=Ct(u,521),me=Ct(u,529),ge=Ct(u,545),Pe=Ct(u,265),We=Ct(u,268),ke=Ct(u,273),st=Ct(u,289),ht=Ct(u,137),it=Ct(u,145),xt=Ct(u,73),en=Ct(u,81),fn=H?p.error.bind(p,...S):r.bind(o,524),tn=j?p.error.bind(p,...S):r.bind(o,522),Tt=ee?p.error.bind(p,...S):r.bind(o,521),nn=me?p.error.bind(p,...S):r.bind(o,529),Mn=ge?p.error.bind(p,...S):r.bind(o,545),kn=We?p.warn.bind(p,...w):r.bind(o,268),er=Pe?p.warn.bind(p,...S):r.bind(o,265),tr=ke?p.warn.bind(p,...S):r.bind(o,273),nr=st?p.warn.bind(p,...S):r.bind(o,273),ir=ht?p.info.bind(p,...S):r.bind(o,137),rr=it?p.info.bind(p,...S):r.bind(o,145),Ft=xt?p.debug.bind(p,...S):r.bind(o,73),bn=en?p.debug.bind(p,...S):r.bind(o,81),Rt={_hmm:fn,_todo:tn,_error:Tt,errorDev:nn,errorPublic:Mn,_kapow:kn,_warn:er,warnDev:tr,warnPublic:nr,_debug:ir,debugDev:rr,_trace:Ft,traceDev:bn,lazy:{_hmm:H?Pt(fn):fn,_todo:j?Pt(tn):tn,_error:ee?Pt(Tt):Tt,errorDev:me?Pt(nn):nn,errorPublic:ge?Pt(Mn):Mn,_kapow:We?Pt(kn):kn,_warn:Pe?Pt(er):er,warnDev:ke?Pt(tr):tr,warnPublic:st?Pt(nr):nr,_debug:ht?Pt(ir):ir,debugDev:it?Pt(rr):rr,_trace:xt?Pt(Ft):Ft,traceDev:en?Pt(bn):bn},named:O,utilFor:{internal(){return{debug:Rt._debug,error:Rt._error,warn:Rt._warn,trace:Rt._trace,named(ei,ti){return Rt.named(ei,ti).utilFor.internal()}}},dev(){return{debug:Rt.debugDev,error:Rt.errorDev,warn:Rt.warnDev,trace:Rt.traceDev,named(ei,ti){return Rt.named(ei,ti).utilFor.dev()}}},public(){return{error:Rt.errorPublic,warn:Rt.warnPublic,debug(ei,ti){Rt._warn('(public "debug" filtered out) '.concat(ei),ti)},trace(ei,ti){Rt._warn('(public "trace" filtered out) '.concat(ei),ti)},named(ei,ti){return Rt.named(ei,ti).utilFor.public()}}}}};return Rt}var Zh=$h(console,{_debug:function(){},_error:function(){}});Zh.configureLogging({dev:!0,min:64});var Ia=Zh.getLogger().named("Theatre.js (default logger)").utilFor.dev(),Qh=new WeakMap;function sy(r){const o=Qh.get(r);if(o)return o;const u=new Map;return Qh.set(r,u),ef([],r,u),u}function ef(r,o,u){for(const[p,S]of Object.entries(o.props))if(!Da(S)){const w=[...r,p];u.set(JSON.stringify(w),u.size),tf(w,S,u)}for(const[p,S]of Object.entries(o.props))if(Da(S)){const w=[...r,p];u.set(JSON.stringify(w),u.size),tf(w,S,u)}}function tf(r,o,u){if(o.type==="compound")ef(r,o,u);else{if(o.type==="enum")throw new Error("Enums aren't supported yet");u.set(JSON.stringify(r),u.size)}}function nf(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===0}var ay=class{constructor(r,o,u,p,S){this.sheetTemplate=r,T(this,"address"),T(this,"type","Theatre_SheetObjectTemplate"),T(this,"_config"),T(this,"_temp_actions_atom"),T(this,"_cache",new vi),T(this,"project"),T(this,"pointerToSheetState"),T(this,"pointerToStaticOverrides"),this.address=M(v({},r.address),{objectKey:o}),this._config=new Gt.Atom(p),this._temp_actions_atom=new Gt.Atom(S),this.project=r.project,this.pointerToSheetState=this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId],this.pointerToStaticOverrides=this.pointerToSheetState.staticOverrides.byObject[this.address.objectKey]}get staticConfig(){return this._config.get()}get configPointer(){return this._config.pointer}get _temp_actions(){return this._temp_actions_atom.get()}get _temp_actionsPointer(){return this._temp_actions_atom.pointer}createInstance(r,o,u){return this._config.set(u),new Qx(r,this,o)}reconfigure(r){this._config.set(r)}_temp_setActions(r){this._temp_actions_atom.set(r)}getDefaultValues(){return this._cache.get("getDefaultValues()",()=>(0,Gt.prism)(()=>{const r=(0,Gt.val)(this.configPointer);return dl(r)}))}getStaticValues(){return this._cache.get("getStaticValues",()=>(0,Gt.prism)(()=>{var r;const o=(r=(0,Gt.val)(this.pointerToStaticOverrides))!=null?r:{};return(0,Gt.val)(this.configPointer).deserializeAndSanitize(o)||{}}))}getArrayOfValidSequenceTracks(){return this._cache.get("getArrayOfValidSequenceTracks",()=>(0,Gt.prism)(()=>{const r=this.project.pointers.historic.sheetsById[this.address.sheetId],o=(0,Gt.val)(r.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);if(!o)return ne;const u=[];if(!o)return ne;const p=(0,Gt.val)(this.configPointer),S=Object.entries(o);for(const[O,H]of S){const j=oy(O);if(!j)continue;const ee=Gl(p,j);ee&&Zx(ee)&&u.push({pathToProp:j,trackId:H})}const w=sy(p);return u.sort((O,H)=>{const j=O.pathToProp,ee=H.pathToProp,me=w.get(JSON.stringify(j)),ge=w.get(JSON.stringify(ee));return me>ge?1:-1}),u.length===0?ne:u}))}getMapOfValidSequenceTracks_forStudio(){return this._cache.get("getMapOfValidSequenceTracks_forStudio",()=>(0,Gt.prism)(()=>{const r=(0,Gt.val)(this.getArrayOfValidSequenceTracks());let o={};for(const{pathToProp:u,trackId:p}of r)Rr(o,u,p);return o}))}getStaticButNotSequencedOverrides(){return this._cache.get("getStaticButNotSequencedOverrides",()=>(0,Gt.prism)(()=>{const r=(0,Gt.val)(this.getStaticValues()),o=(0,Gt.val)(this.getArrayOfValidSequenceTracks()),u=Hv(r);for(const{pathToProp:p}of o){Kh(u,p);let S=p.slice(0,-1);for(;S.length>0;){const w=da(u,S);if(!nf(w))break;Kh(u,S),S=S.slice(0,-1)}}if(!nf(u))return u}))}getDefaultsAtPointer(r){const{path:o}=(0,Gt.getPointerParts)(r),u=this.getDefaultValues().getValue();return da(u,o)}};function oy(r){try{return JSON.parse(r)}catch{Ia.warn("property ".concat(JSON.stringify(r)," cannot be parsed. Skipping."));return}}var rf=zt,ly=Jx(r=>JSON.stringify(r));U(F());var cy=class extends Error{},Ds=class extends cy{},sf=zt,uy=zt,hy=zt,Yt=zt;function yi(){let r,o;const u=new Promise((S,w)=>{r=O=>{S(O),p.status="resolved"},o=O=>{w(O),p.status="rejected"}}),p={resolve:r,reject:o,promise:u,status:"pending"};return p}var fy=()=>{},Ua=fy,dy=zt,py=class{constructor(){T(this,"_stopPlayCallback",Ua),T(this,"_state",new dy.Atom({position:0,playing:!1})),T(this,"statePointer"),this.statePointer=this._state.pointer}destroy(){}pause(){this._stopPlayCallback(),this.playing=!1,this._stopPlayCallback=Ua}gotoPosition(r){this._updatePositionInState(r)}_updatePositionInState(r){this._state.setByPointer(o=>o.position,r)}getCurrentPosition(){return this._state.get().position}get playing(){return this._state.get().playing}set playing(r){this._state.setByPointer(o=>o.playing,r)}play(r,o,u,p,S){this.playing&&this.pause(),this.playing=!0;const w=o[1]-o[0];{const Pe=this.getCurrentPosition();Pe<o[0]||Pe>o[1]?p==="normal"||p==="alternate"?this._updatePositionInState(o[0]):(p==="reverse"||p==="alternateReverse")&&this._updatePositionInState(o[1]):p==="normal"||p==="alternate"?Pe===o[1]&&this._updatePositionInState(o[0]):Pe===o[0]&&this._updatePositionInState(o[1])}const O=yi(),H=S.time,j=w*r;let ee=this.getCurrentPosition()-o[0];(p==="reverse"||p==="alternateReverse")&&(ee=o[1]-this.getCurrentPosition());const me=Pe=>{const ke=Math.max(Pe-H,0)/1e3,st=Math.min(ke*u+ee,j);if(st!==j){const ht=Math.floor(st/w);let it=st/w%1*w;if(p!=="normal")if(p==="reverse")it=w-it;else{const xt=ht%2===0;p==="alternate"?xt||(it=w-it):xt&&(it=w-it)}this._updatePositionInState(it+o[0]),ge()}else{if(p==="normal")this._updatePositionInState(o[1]);else if(p==="reverse")this._updatePositionInState(o[0]);else{const ht=(r-1)%2===0;p==="alternate"?ht?this._updatePositionInState(o[1]):this._updatePositionInState(o[0]):ht?this._updatePositionInState(o[0]):this._updatePositionInState(o[1])}this.playing=!1,O.resolve(!0)}};this._stopPlayCallback=()=>{S.offThisOrNextTick(me),S.offNextTick(me),this.playing&&O.resolve(!1)};const ge=()=>S.onNextTick(me);return S.onThisOrNextTick(me),O.promise}playDynamicRange(r,o){this.playing&&this.pause(),this.playing=!0;const u=yi(),p=r.keepHot();u.promise.then(p,p);let S=o.time;const w=H=>{const j=Math.max(H-S,0);S=H;const ee=j/1e3,me=this.getCurrentPosition(),ge=r.getValue();if(me<ge[0]||me>ge[1])this.gotoPosition(ge[0]);else{let Pe=me+ee;Pe>ge[1]&&(Pe=ge[0]+(Pe-ge[1])),this.gotoPosition(Pe)}O()};this._stopPlayCallback=()=>{o.offThisOrNextTick(w),o.offNextTick(w),u.resolve(!1)};const O=()=>o.onNextTick(w);return o.onThisOrNextTick(w),u.promise}},my=zt,gy="__TheatreJS_StudioBundle",Wl="__TheatreJS_CoreBundle",_y="__TheatreJS_Notifications",Oa=r=>(...o)=>{var u;switch(r){case"success":{Ia.debug(o.slice(0,2).join(`
`));break}case"info":{Ia.debug(o.slice(0,2).join(`
`));break}case"warning":{Ia.warn(o.slice(0,2).join(`
`));break}}return typeof window<"u"?(u=window[_y])==null?void 0:u.notify[r](...o):void 0},Ur={warning:Oa("warning"),success:Oa("success"),info:Oa("info"),error:Oa("error")};typeof window<"u"&&(window.addEventListener("error",r=>{Ur.error("An error occurred","<pre>".concat(r.message,`</pre>

See **console** for details.`))}),window.addEventListener("unhandledrejection",r=>{Ur.error("An error occurred","<pre>".concat(r.reason,`</pre>

See **console** for details.`))}));var vy=class{constructor(r,o,u){this._decodedBuffer=r,this._audioContext=o,this._nodeDestination=u,T(this,"_mainGain"),T(this,"_state",new my.Atom({position:0,playing:!1})),T(this,"statePointer"),T(this,"_stopPlayCallback",Ua),this.statePointer=this._state.pointer,this._mainGain=this._audioContext.createGain(),this._mainGain.connect(this._nodeDestination)}playDynamicRange(r,o){const u=yi();this._playing&&this.pause(),this._playing=!0;let p;const S=()=>{p==null||p(),p=this._loopInRange(r.getValue(),o).stop},w=r.onStale(S);return S(),this._stopPlayCallback=()=>{p==null||p(),w(),u.resolve(!1)},u.promise}_loopInRange(r,o){let p=this.getCurrentPosition();const S=r[1]-r[0];p<r[0]||p>r[1]?this._updatePositionInState(r[0]):p===r[1]&&this._updatePositionInState(r[0]),p=this.getCurrentPosition();const w=this._audioContext.createBufferSource();w.buffer=this._decodedBuffer,w.connect(this._mainGain),w.playbackRate.value=1,w.loop=!0,w.loopStart=r[0],w.loopEnd=r[1];const O=o.time;let H=p-r[0];w.start(0,p);const j=ge=>{let st=(Math.max(ge-O,0)/1e3*1+H)/S%1*S;this._updatePositionInState(st+r[0]),ee()},ee=()=>o.onNextTick(j);return o.onThisOrNextTick(j),{stop:()=>{w.stop(),w.disconnect(),o.offThisOrNextTick(j),o.offNextTick(j)}}}get _playing(){return this._state.get().playing}set _playing(r){this._state.setByPointer(o=>o.playing,r)}destroy(){}pause(){this._stopPlayCallback(),this._playing=!1,this._stopPlayCallback=Ua}gotoPosition(r){this._updatePositionInState(r)}_updatePositionInState(r){this._state.reduce(o=>M(v({},o),{position:r}))}getCurrentPosition(){return this._state.get().position}play(r,o,u,p,S){this._playing&&this.pause(),this._playing=!0;let w=this.getCurrentPosition();const O=o[1]-o[0];if(p!=="normal")throw new Ds('Audio-controlled sequences can only be played in the "normal" direction. '+"'".concat(p,"' given."));w<o[0]||w>o[1]?this._updatePositionInState(o[0]):w===o[1]&&this._updatePositionInState(o[0]),w=this.getCurrentPosition();const H=yi(),j=this._audioContext.createBufferSource();j.buffer=this._decodedBuffer,j.connect(this._mainGain),j.playbackRate.value=u,r>1e3&&(Ur.warning("Can't play sequences with audio more than 1000 times","The sequence will still play, but only 1000 times. The `iterationCount: ".concat(r,"` provided to `sequence.play()`\nis too high for a sequence with audio.\n\nTo fix this, either set `iterationCount` to a lower value, or remove the audio from the sequence."),[{url:"https://www.theatrejs.com/docs/latest/manual/audio",title:"Using Audio"},{url:"https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",title:"Audio API"}]),r=1e3),r>1&&(j.loop=!0,j.loopStart=o[0],j.loopEnd=o[1]);const ee=S.time;let me=w-o[0];const ge=O*r;j.start(0,w,ge-me);const Pe=st=>{const it=Math.max(st-ee,0)/1e3,xt=Math.min(it*u+me,ge);if(xt!==ge){let en=xt/O%1*O;this._updatePositionInState(en+o[0]),ke()}else this._updatePositionInState(o[1]),this._playing=!1,We(),H.resolve(!0)},We=()=>{j.stop(),j.disconnect()};this._stopPlayCallback=()=>{We(),S.offThisOrNextTick(Pe),S.offNextTick(Pe),this._playing&&H.resolve(!1)};const ke=()=>S.onNextTick(Pe);return S.onThisOrNextTick(Pe),H.promise}},xy=zt,af=0;function Xl(r){var o;const u=O=>{p.tick(O)},p=new xy.Ticker({onActive(){var O;(O=r==null?void 0:r.start)==null||O.call(r)},onDormant(){var O;(O=r==null?void 0:r.stop)==null||O.call(r)}}),S={tick:u,id:af++,name:(o=r==null?void 0:r.name)!=null?o:"CustomRafDriver-".concat(af),type:"Theatre_RafDriver_PublicAPI"},w={type:"Theatre_RafDriver_PrivateAPI",publicApi:S,ticker:p,start:r==null?void 0:r.start,stop:r==null?void 0:r.stop};return fe(S,w),S}function yy(){let r=null;const p=Xl({name:"DefaultCoreRafDriver",start:()=>{if(typeof window<"u"){const S=w=>{p.tick(w),r=window.requestAnimationFrame(S)};r=window.requestAnimationFrame(S)}else p.tick(0),setTimeout(()=>p.tick(1),0)},stop:()=>{typeof window<"u"&&r!==null&&window.cancelAnimationFrame(r)}});return p}var Na;function of(){return Na||Sy(yy()),Na}function lf(){return of().ticker}function Sy(r){if(Na)throw new Error("`setCoreRafDriver()` is already called.");Na=q(r)}var My=class{get type(){return"Theatre_Sequence_PublicAPI"}constructor(r){fe(this,r)}play(r){const o=q(this);if(o._project.isReady()){const u=r!=null&&r.rafDriver?q(r.rafDriver).ticker:lf();return o.play(r??{},u)}else{const u=yi();return u.resolve(!0),u.promise}}pause(){q(this).pause()}get position(){return q(this).position}set position(r){q(this).position=r}__experimental_getKeyframes(r){return q(this).getKeyframesOfSimpleProp(r)}async attachAudio(r){const{audioContext:o,destinationNode:u,decodedBuffer:p,gainNode:S}=await by(r),w=new vy(p,o,S);return q(this).replacePlaybackController(w),{audioContext:o,destinationNode:u,decodedBuffer:p,gainNode:S}}get pointer(){return q(this).pointer}};async function by(r){function o(){if(r.audioContext)return Promise.resolve(r.audioContext);const ee=new AudioContext;return ee.state==="running"||typeof window>"u"?Promise.resolve(ee):new Promise(me=>{const ge=()=>{ee.resume().catch(ke=>{console.error(ke)})},Pe=["mousedown","keydown","touchstart"],We={capture:!0,passive:!1};Pe.forEach(ke=>{window.addEventListener(ke,ge,We)}),ee.addEventListener("statechange",()=>{ee.state==="running"&&(Pe.forEach(ke=>{window.removeEventListener(ke,ge,We)}),me(ee))})})}async function u(){if(r.source instanceof AudioBuffer)return r.source;const ee=yi();if(typeof r.source!="string")throw new Error("Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.");let me;try{me=await fetch(r.source)}catch(ke){throw console.error(ke),new Error("Could not fetch '".concat(r.source,"'. Network error logged above."))}let ge;try{ge=await me.arrayBuffer()}catch(ke){throw console.error(ke),new Error("Could not read '".concat(r.source,"' as an arrayBuffer."))}(await p).decodeAudioData(ge,ee.resolve,ee.reject);let We;try{We=await ee.promise}catch(ke){throw console.error(ke),new Error("Could not decode ".concat(r.source," as an audio file."))}return We}const p=o(),S=u(),[w,O]=await Promise.all([p,S]),H=r.destinationNode||w.destination,j=w.createGain();return j.connect(H),{audioContext:w,decodedBuffer:O,gainNode:j,destinationNode:H}}var Ty=Ey("Theatre_SheetObject");function Ey(r){return o=>typeof o=="object"&&!!o&&o.type===r}var Ay=class{constructor(r,o,u,p,S){this._project=r,this._sheet=o,this._lengthD=u,this._subUnitsPerUnitD=p,T(this,"address"),T(this,"publicApi"),T(this,"_playbackControllerBox"),T(this,"_prismOfStatePointer"),T(this,"_positionD"),T(this,"_positionFormatterD"),T(this,"_playableRangeD"),T(this,"pointer",(0,hy.pointer)({root:this,path:[]})),T(this,"$$isPointerToPrismProvider",!0),T(this,"_logger"),T(this,"closestGridPosition",w=>{const H=1/this.subUnitsPerUnit;return parseFloat((Math.round(w/H)*H).toFixed(3))}),this._logger=r._logger.named("Sheet",o.address.sheetId).named("Instance",o.address.sheetInstanceId),this.address=M(v({},this._sheet.address),{sequenceName:"default"}),this.publicApi=new My(this),this._playbackControllerBox=new uy.Atom(S??new py),this._prismOfStatePointer=(0,Yt.prism)(()=>this._playbackControllerBox.prism.getValue().statePointer),this._positionD=(0,Yt.prism)(()=>{const w=this._prismOfStatePointer.getValue();return(0,Yt.val)(w.position)}),this._positionFormatterD=(0,Yt.prism)(()=>{const w=(0,Yt.val)(this._subUnitsPerUnitD);return new wy(w)})}get type(){return"Theatre_Sequence"}pointerToPrism(r){const{path:o}=(0,sf.getPointerParts)(r);if(o.length===0)return(0,Yt.prism)(()=>({length:(0,Yt.val)(this.pointer.length),playing:(0,Yt.val)(this.pointer.playing),position:(0,Yt.val)(this.pointer.position),subUnitsPerUnit:(0,Yt.val)(this.pointer.subUnitsPerUnit)}));if(o.length>1)return(0,Yt.prism)(()=>{});const[u]=o;return u==="length"?this._lengthD:u==="subUnitsPerUnit"?this._subUnitsPerUnitD:u==="position"?this._positionD:u==="playing"?(0,Yt.prism)(()=>(0,Yt.val)(this._prismOfStatePointer.getValue().playing)):(0,Yt.prism)(()=>{})}getKeyframesOfSimpleProp(r){const{path:o,root:u}=(0,sf.getPointerParts)(r);if(!Ty(u))throw new Ds("Argument prop must be a pointer to a SheetObject property");const p=(0,Yt.val)(this._project.pointers.historic.sheetsById[this._sheet.address.sheetId].sequence.tracksByObject[u.address.objectKey]);if(!p)return[];const{trackData:S,trackIdByPropPath:w}=p,O=ly(o),H=w[O];if(!H)return[];const j=S[H];return j?j.keyframes:[]}get positionFormatter(){return this._positionFormatterD.getValue()}get prismOfStatePointer(){return this._prismOfStatePointer}get length(){return this._lengthD.getValue()}get positionPrism(){return this._positionD}get position(){return this._playbackControllerBox.get().getCurrentPosition()}get subUnitsPerUnit(){return this._subUnitsPerUnitD.getValue()}get positionSnappedToGrid(){return this.closestGridPosition(this.position)}set position(r){let o=r;this.pause(),o>this.length&&(o=this.length);const u=this.length;this._playbackControllerBox.get().gotoPosition(o>u?u:o)}getDurationCold(){return this._lengthD.getValue()}get playing(){return(0,Yt.val)(this._playbackControllerBox.get().statePointer.playing)}_makeRangeFromSequenceTemplate(){return(0,Yt.prism)(()=>[0,(0,Yt.val)(this._lengthD)])}playDynamicRange(r,o){return this._playbackControllerBox.get().playDynamicRange(r,o)}async play(r,o){const u=this.length,p=r&&r.range?r.range:[0,u],S=r&&typeof r.iterationCount=="number"?r.iterationCount:1,w=r&&typeof r.rate<"u"?r.rate:1,O=r&&r.direction?r.direction:"normal";return await this._play(S,[p[0],p[1]],w,O,o)}_play(r,o,u,p,S){return this._playbackControllerBox.get().play(r,o,u,p,S)}pause(){this._playbackControllerBox.get().pause()}replacePlaybackController(r){this.pause();const o=this._playbackControllerBox.get();this._playbackControllerBox.set(r);const u=o.getCurrentPosition();o.destroy(),r.gotoPosition(u)}},wy=class{constructor(r){this._fps=r}formatSubUnitForGrid(r){const o=r%1,u=1/this._fps;return Math.round(o/u)+"f"}formatFullUnitForGrid(r){let o=r,u="";if(o>=Or){const S=Math.floor(o/Or);u+=S+"h",o=o%Or}if(o>=$i){const S=Math.floor(o/$i);u+=S+"m",o=o%$i}if(o>=Ki){const S=Math.floor(o/Ki);u+=S+"s",o=o%Ki}const p=1/this._fps;if(o>=p){const S=Math.floor(o/p);u+=S+"f",o=o%p}return u.length===0?"0s":u}formatForPlayhead(r){let o=r,u="";if(o>=Or){const S=Math.floor(o/Or);u+=Ls(S.toString(),2,"0")+"h",o=o%Or}if(o>=$i){const S=Math.floor(o/$i);u+=Ls(S.toString(),2,"0")+"m",o=o%$i}else u.length>0&&(u+="00m");if(o>=Ki){const S=Math.floor(o/Ki);u+=Ls(S.toString(),2,"0")+"s",o=o%Ki}else u+="00s";const p=1/this._fps;if(o>=p){const S=Math.round(o/p);u+=Ls(S.toString(),2,"0")+"f",o=o%p}else o/p>.98?(u+=Ls("1",2,"0")+"f",o=o%p):u+="00f";return u.length===0?"00s00f":u}formatBasic(r){return r.toFixed(2)+"s"}},Ki=1,$i=Ki*60,Or=$i*60,jl={};x(jl,{boolean:()=>mf,compound:()=>Yl,file:()=>Oy,image:()=>Fy,number:()=>pf,rgba:()=>Hy,string:()=>gf,stringLiteral:()=>qy});function cf(r,o){return r.length<=o?r:r.substr(0,o-3)+"..."}var Py=r=>typeof r=="string"?'string("'.concat(cf(r,10),'")'):typeof r=="number"?"number(".concat(cf(String(r),10),")"):r===null?"null":r===void 0?"undefined":typeof r=="boolean"?String(r):Array.isArray(r)?"array":typeof r=="object"?"object":"unknown",uf=Py;function Cy(r,{removeAlphaIfOpaque:o=!1}={}){const u=(r.a*255|256).toString(16).slice(1),p=(r.r*255|256).toString(16).slice(1)+(r.g*255|256).toString(16).slice(1)+(r.b*255|256).toString(16).slice(1)+(o&&u==="ff"?"":u);return"#".concat(p)}function ql(r){return M(v({},r),{toString(){return Cy(this,{removeAlphaIfOpaque:!0})}})}function Ry(r){return Object.fromEntries(Object.entries(r).map(([o,u])=>[o,ch(u,0,1)]))}function Ly(r){function o(u){return u>=.0031308?1.055*u**(1/2.4)-.055:12.92*u}return Ry({r:o(r.r),g:o(r.g),b:o(r.b),a:r.a})}function hf(r){function o(u){return u>=.04045?((u+.055)/(1+.055))**2.4:u/12.92}return{r:o(r.r),g:o(r.g),b:o(r.b),a:r.a}}function ff(r){let o=.4122214708*r.r+.5363325363*r.g+.0514459929*r.b,u=.2119034982*r.r+.6806995451*r.g+.1073969566*r.b,p=.0883024619*r.r+.2817188376*r.g+.6299787005*r.b,S=Math.cbrt(o),w=Math.cbrt(u),O=Math.cbrt(p);return{L:.2104542553*S+.793617785*w-.0040720468*O,a:1.9779984951*S-2.428592205*w+.4505937099*O,b:.0259040371*S+.7827717662*w-.808675766*O,alpha:r.a}}function Dy(r){let o=r.L+.3963377774*r.a+.2158037573*r.b,u=r.L-.1055613458*r.a-.0638541728*r.b,p=r.L-.0894841775*r.a-1.291485548*r.b,S=o*o*o,w=u*u*u,O=p*p*p;return{r:4.0767416621*S-3.3077115913*w+.2309699292*O,g:-1.2684380046*S+2.6097574011*w-.3413193965*O,b:-.0041960863*S-.7034186147*w+1.707614701*O,a:r.alpha}}var Zn=Symbol("TheatrePropType_Basic");function df(r){return typeof r=="object"&&!!r&&r[Zn]==="TheatrePropType"}function Iy(r){if(typeof r=="number")return pf(r);if(typeof r=="boolean")return mf(r);if(typeof r=="string")return gf(r);if(typeof r=="object"&&r){if(df(r))return r;if(Km(r))return Yl(r);throw new Ds("This value is not a valid prop type: ".concat(uf(r)))}else throw new Ds("This value is not a valid prop type: ".concat(uf(r)))}function Uy(r){const o={};for(const u of Object.keys(r)){const p=r[u];df(p)?o[u]=p:o[u]=Iy(p)}return o}var Yl=(r,o={})=>{const u=Uy(r),p=new WeakMap;return{type:"compound",props:u,valueType:null,[Zn]:"TheatrePropType",label:o.label,default:Mx(u,w=>w.default),deserializeAndSanitize:w=>{if(typeof w!="object"||!w)return;if(p.has(w))return p.get(w);const O={};let H=!1;for(const[j,ee]of Object.entries(u))if(Object.prototype.hasOwnProperty.call(w,j)){const me=ee.deserializeAndSanitize(w[j]);me!=null&&(H=!0,O[j]=me)}if(p.set(w,O),H)return O}}},Oy=(r,o={})=>{const u=(p,S,w)=>{var O;return{type:"file",id:((O=o.interpolate)!=null?O:Is)(p.id,S.id,w)}};return{type:"file",default:{type:"file",id:r},valueType:null,[Zn]:"TheatrePropType",label:o.label,interpolate:u,deserializeAndSanitize:Ny}},Ny=r=>{if(!r)return;let o=!0;if(typeof r.id!="string"&&![null,void 0].includes(r.id)&&(o=!1),r.type!=="file"&&(o=!1),!!o)return r},Fy=(r,o={})=>{const u=(p,S,w)=>{var O;return{type:"image",id:((O=o.interpolate)!=null?O:Is)(p.id,S.id,w)}};return{type:"image",default:{type:"image",id:r},valueType:null,[Zn]:"TheatrePropType",label:o.label,interpolate:u,deserializeAndSanitize:By}},By=r=>{if(!r)return;let o=!0;if(typeof r.id!="string"&&![null,void 0].includes(r.id)&&(o=!1),r.type!=="image"&&(o=!1),!!o)return r},pf=(r,o={})=>{var u;return M(v({type:"number",valueType:0,default:r,[Zn]:"TheatrePropType"},o||{}),{label:o.label,nudgeFn:(u=o.nudgeFn)!=null?u:Yy,nudgeMultiplier:typeof o.nudgeMultiplier=="number"?o.nudgeMultiplier:void 0,interpolate:ky,deserializeAndSanitize:zy(o.range)})},zy=r=>r?o=>{if(typeof o=="number"&&isFinite(o))return ch(o,r[0],r[1])}:Vy,Vy=r=>typeof r=="number"&&isFinite(r)?r:void 0,ky=(r,o,u)=>r+u*(o-r),Hy=(r={r:0,g:0,b:0,a:1},o={})=>{const u={};for(const p of["r","g","b","a"])u[p]=Math.min(Math.max(r[p],0),1);return{type:"rgba",valueType:null,default:ql(u),[Zn]:"TheatrePropType",label:o.label,interpolate:Wy,deserializeAndSanitize:Gy}},Gy=r=>{if(!r)return;let o=!0;for(const p of["r","g","b","a"])(!Object.prototype.hasOwnProperty.call(r,p)||typeof r[p]!="number")&&(o=!1);if(!o)return;const u={};for(const p of["r","g","b","a"])u[p]=Math.min(Math.max(r[p],0),1);return ql(u)},Wy=(r,o,u)=>{const p=ff(hf(r)),S=ff(hf(o)),w={L:(1-u)*p.L+u*S.L,a:(1-u)*p.a+u*S.a,b:(1-u)*p.b+u*S.b,alpha:(1-u)*p.alpha+u*S.alpha},O=Ly(Dy(w));return ql(O)},mf=(r,o={})=>{var u;return{type:"boolean",default:r,valueType:null,[Zn]:"TheatrePropType",label:o.label,interpolate:(u=o.interpolate)!=null?u:Is,deserializeAndSanitize:Xy}},Xy=r=>typeof r=="boolean"?r:void 0;function Is(r){return r}var gf=(r,o={})=>{var u;return{type:"string",default:r,valueType:null,[Zn]:"TheatrePropType",label:o.label,interpolate:(u=o.interpolate)!=null?u:Is,deserializeAndSanitize:jy}};function jy(r){return typeof r=="string"?r:void 0}function qy(r,o,u={}){var p,S;return{type:"stringLiteral",default:r,valuesAndLabels:v({},o),[Zn]:"TheatrePropType",valueType:null,as:(p=u.as)!=null?p:"menu",label:u.label,interpolate:(S=u.interpolate)!=null?S:Is,deserializeAndSanitize(w){if(typeof w=="string"&&Object.prototype.hasOwnProperty.call(o,w))return w}}}var Yy=({config:r,deltaX:o,deltaFraction:u,magnitude:p})=>{var S;const{range:w}=r;return!r.nudgeMultiplier&&w&&!w.includes(1/0)&&!w.includes(-1/0)?u*(w[1]-w[0])*p:o*p*((S=r.nudgeMultiplier)!=null?S:1)},Ky=r=>r.replace(/^[\s\/]*/,"").replace(/[\s\/]*$/,"").replace(/\s*\/\s*/g," / ");function Fa(r,o){return Ky(r)}U(W());var $y=class{get type(){return"Theatre_Sheet_PublicAPI"}constructor(r){fe(this,r)}object(r,o,u){const p=q(this),S=Fa(r),w=p.getObject(S),O=null,H=u==null?void 0:u.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;if(w)return H&&w.template._temp_setActions(H),w.publicApi;{const j=Yl(o);return p.createObject(S,O,j,H).publicApi}}__experimental_getExistingObject(r){const o=q(this),u=Fa(r),p=o.getObject(u);return p==null?void 0:p.publicApi}get sequence(){return q(this).getSequence().publicApi}get project(){return q(this).project.publicApi}get address(){return v({},q(this).address)}detachObject(r){const o=q(this),u=Fa(r);if(!o.getObject(u)){Ur.warning(`Couldn't delete object "`.concat(u,'"'),'There is no object with key "'.concat(u,`".

To fix this, make sure you are calling \`sheet.deleteObject("`).concat(u,'")` with the correct key.')),console.warn('Object key "'.concat(u,'" does not exist.'));return}o.deleteObject(u)}},Us=zt,Jy=class{constructor(r,o){this.template=r,this.instanceId=o,T(this,"_objects",new Us.Atom({})),T(this,"_sequence"),T(this,"address"),T(this,"publicApi"),T(this,"project"),T(this,"objectsP",this._objects.pointer),T(this,"type","Theatre_Sheet"),T(this,"_logger"),this._logger=r.project._logger.named("Sheet",o),this._logger._trace("creating sheet"),this.project=r.project,this.address=M(v({},r.address),{sheetInstanceId:this.instanceId}),this.publicApi=new $y(this)}createObject(r,o,u,p={}){const w=this.template.getObjectTemplate(r,o,u,p).createInstance(this,o,u);return this._objects.setByPointer(O=>O[r],w),w}getObject(r){return this._objects.get()[r]}deleteObject(r){this._objects.reduce(o=>{const u=v({},o);return delete u[r],u})}getSequence(){if(!this._sequence){const r=(0,Us.prism)(()=>{const u=(0,Us.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length);return Zy(u)}),o=(0,Us.prism)(()=>{const u=(0,Us.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit);return Qy(u)});this._sequence=new Ay(this.template.project,this,r,o)}return this._sequence}},Zy=r=>typeof r=="number"&&isFinite(r)&&r>0?r:10,Qy=r=>typeof r=="number"&&yx(r)&&r>=1&&r<=1e3?r:30,eS=class{constructor(r,o){this.project=r,T(this,"type","Theatre_SheetTemplate"),T(this,"address"),T(this,"_instances",new rf.Atom({})),T(this,"instancesP",this._instances.pointer),T(this,"_objectTemplates",new rf.Atom({})),T(this,"objectTemplatesP",this._objectTemplates.pointer),this.address=M(v({},r.address),{sheetId:o})}getInstance(r){let o=this._instances.get()[r];return o||(o=new Jy(this,r),this._instances.setByPointer(u=>u[r],o)),o}getObjectTemplate(r,o,u,p){let S=this._objectTemplates.get()[r];return S||(S=new ay(this,r,o,u,p),this._objectTemplates.setByPointer(w=>w[r],S)),S}},Kl=zt,_f=zt,tS=r=>new Promise(o=>setTimeout(o,r)),nS=tS;function Pn(r){for(var o=arguments.length,u=Array(o>1?o-1:0),p=1;p<o;p++)u[p-1]=arguments[p];throw Error("[Immer] minified error nr: "+r+(u.length?" "+u.map(function(S){return"'"+S+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ji(r){return!!r&&!!r[hn]}function Zi(r){return!!r&&(function(o){if(!o||typeof o!="object")return!1;var u=Object.getPrototypeOf(o);if(u===null)return!0;var p=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return p===Object||typeof p=="function"&&Function.toString.call(p)===hS}(r)||Array.isArray(r)||!!r[wf]||!!r.constructor[wf]||Jl(r)||Zl(r))}function iS(r){return Ji(r)||Pn(23,r),r[hn].t}function Os(r,o,u){u===void 0&&(u=!1),Nr(r)===0?(u?Object.keys:uc)(r).forEach(function(p){u&&typeof p=="symbol"||o(p,r[p],r)}):r.forEach(function(p,S){return o(S,p,r)})}function Nr(r){var o=r[hn];return o?o.i>3?o.i-4:o.i:Array.isArray(r)?1:Jl(r)?2:Zl(r)?3:0}function $l(r,o){return Nr(r)===2?r.has(o):Object.prototype.hasOwnProperty.call(r,o)}function rS(r,o){return Nr(r)===2?r.get(o):r[o]}function vf(r,o,u){var p=Nr(r);p===2?r.set(o,u):p===3?(r.delete(o),r.add(u)):r[o]=u}function sS(r,o){return r===o?r!==0||1/r==1/o:r!=r&&o!=o}function Jl(r){return cS&&r instanceof Map}function Zl(r){return uS&&r instanceof Set}function Qi(r){return r.o||r.t}function Ql(r){if(Array.isArray(r))return Array.prototype.slice.call(r);var o=fS(r);delete o[hn];for(var u=uc(o),p=0;p<u.length;p++){var S=u[p],w=o[S];w.writable===!1&&(w.writable=!0,w.configurable=!0),(w.get||w.set)&&(o[S]={configurable:!0,writable:!0,enumerable:w.enumerable,value:r[S]})}return Object.create(Object.getPrototypeOf(r),o)}function ec(r,o){return o===void 0&&(o=!1),tc(r)||Ji(r)||!Zi(r)||(Nr(r)>1&&(r.set=r.add=r.clear=r.delete=aS),Object.freeze(r),o&&Os(r,function(u,p){return ec(p,!0)},!0)),r}function aS(){Pn(2)}function tc(r){return r==null||typeof r!="object"||Object.isFrozen(r)}function Qn(r){var o=dS[r];return o||Pn(18,r),o}function xf(){return Ns}function nc(r,o){o&&(Qn("Patches"),r.u=[],r.s=[],r.v=o)}function Ba(r){ic(r),r.p.forEach(oS),r.p=null}function ic(r){r===Ns&&(Ns=r.l)}function yf(r){return Ns={p:[],l:Ns,h:r,m:!0,_:0}}function oS(r){var o=r[hn];o.i===0||o.i===1?o.j():o.O=!0}function rc(r,o){o._=o.p.length;var u=o.p[0],p=r!==void 0&&r!==u;return o.h.g||Qn("ES5").S(o,r,p),p?(u[hn].P&&(Ba(o),Pn(4)),Zi(r)&&(r=za(o,r),o.l||Va(o,r)),o.u&&Qn("Patches").M(u[hn],r,o.u,o.s)):r=za(o,u,[]),Ba(o),o.u&&o.v(o.u,o.s),r!==Af?r:void 0}function za(r,o,u){if(tc(o))return o;var p=o[hn];if(!p)return Os(o,function(w,O){return Sf(r,p,o,w,O,u)},!0),o;if(p.A!==r)return o;if(!p.P)return Va(r,p.t,!0),p.t;if(!p.I){p.I=!0,p.A._--;var S=p.i===4||p.i===5?p.o=Ql(p.k):p.o;Os(p.i===3?new Set(S):S,function(w,O){return Sf(r,p,S,w,O,u)}),Va(r,S,!1),u&&r.u&&Qn("Patches").R(p,u,r.u,r.s)}return p.o}function Sf(r,o,u,p,S,w){if(Ji(S)){var O=za(r,S,w&&o&&o.i!==3&&!$l(o.D,p)?w.concat(p):void 0);if(vf(u,p,O),!Ji(O))return;r.m=!1}if(Zi(S)&&!tc(S)){if(!r.h.F&&r._<1)return;za(r,S),o&&o.A.l||Va(r,S)}}function Va(r,o,u){u===void 0&&(u=!1),r.h.F&&r.m&&ec(o,u)}function sc(r,o){var u=r[hn];return(u?Qi(u):r)[o]}function Mf(r,o){if(o in r)for(var u=Object.getPrototypeOf(r);u;){var p=Object.getOwnPropertyDescriptor(u,o);if(p)return p;u=Object.getPrototypeOf(u)}}function ac(r){r.P||(r.P=!0,r.l&&ac(r.l))}function oc(r){r.o||(r.o=Ql(r.t))}function lc(r,o,u){var p=Jl(o)?Qn("MapSet").N(o,u):Zl(o)?Qn("MapSet").T(o,u):r.g?function(S,w){var O=Array.isArray(S),H={i:O?1:0,A:w?w.A:xf(),P:!1,I:!1,D:{},l:w,t:S,k:null,o:null,j:null,C:!1},j=H,ee=ka;O&&(j=[H],ee=Ha);var me=Proxy.revocable(j,ee),ge=me.revoke,Pe=me.proxy;return H.k=Pe,H.j=ge,Pe}(o,u):Qn("ES5").J(o,u);return(u?u.A:xf()).p.push(p),p}function lS(r){return Ji(r)||Pn(22,r),function o(u){if(!Zi(u))return u;var p,S=u[hn],w=Nr(u);if(S){if(!S.P&&(S.i<4||!Qn("ES5").K(S)))return S.t;S.I=!0,p=bf(u,w),S.I=!1}else p=bf(u,w);return Os(p,function(O,H){S&&rS(S.t,O)===H||vf(p,O,o(H))}),w===3?new Set(p):p}(r)}function bf(r,o){switch(o){case 2:return new Map(r);case 3:return Array.from(r)}return Ql(r)}var Tf,Ns,cc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",cS=typeof Map<"u",uS=typeof Set<"u",Ef=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Af=cc?Symbol.for("immer-nothing"):((Tf={})["immer-nothing"]=!0,Tf),wf=cc?Symbol.for("immer-draftable"):"__$immer_draftable",hn=cc?Symbol.for("immer-state"):"__$immer_state",hS=""+Object.prototype.constructor,uc=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:Object.getOwnPropertyNames,fS=Object.getOwnPropertyDescriptors||function(r){var o={};return uc(r).forEach(function(u){o[u]=Object.getOwnPropertyDescriptor(r,u)}),o},dS={},ka={get:function(r,o){if(o===hn)return r;var u=Qi(r);if(!$l(u,o))return function(S,w,O){var H,j=Mf(w,O);return j?"value"in j?j.value:(H=j.get)===null||H===void 0?void 0:H.call(S.k):void 0}(r,u,o);var p=u[o];return r.I||!Zi(p)?p:p===sc(r.t,o)?(oc(r),r.o[o]=lc(r.A.h,p,r)):p},has:function(r,o){return o in Qi(r)},ownKeys:function(r){return Reflect.ownKeys(Qi(r))},set:function(r,o,u){var p=Mf(Qi(r),o);if(p!=null&&p.set)return p.set.call(r.k,u),!0;if(!r.P){var S=sc(Qi(r),o),w=S==null?void 0:S[hn];if(w&&w.t===u)return r.o[o]=u,r.D[o]=!1,!0;if(sS(u,S)&&(u!==void 0||$l(r.t,o)))return!0;oc(r),ac(r)}return r.o[o]===u&&typeof u!="number"&&(u!==void 0||o in r.o)||(r.o[o]=u,r.D[o]=!0,!0)},deleteProperty:function(r,o){return sc(r.t,o)!==void 0||o in r.t?(r.D[o]=!1,oc(r),ac(r)):delete r.D[o],r.o&&delete r.o[o],!0},getOwnPropertyDescriptor:function(r,o){var u=Qi(r),p=Reflect.getOwnPropertyDescriptor(u,o);return p&&{writable:!0,configurable:r.i!==1||o!=="length",enumerable:p.enumerable,value:u[o]}},defineProperty:function(){Pn(11)},getPrototypeOf:function(r){return Object.getPrototypeOf(r.t)},setPrototypeOf:function(){Pn(12)}},Ha={};Os(ka,function(r,o){Ha[r]=function(){return arguments[0]=arguments[0][0],o.apply(this,arguments)}}),Ha.deleteProperty=function(r,o){return ka.deleteProperty.call(this,r[0],o)},Ha.set=function(r,o,u){return ka.set.call(this,r[0],o,u,r[0])};var pS=function(){function r(u){var p=this;this.g=Ef,this.F=!0,this.produce=function(S,w,O){if(typeof S=="function"&&typeof w!="function"){var H=w;w=S;var j=p;return function(We){var ke=this;We===void 0&&(We=H);for(var st=arguments.length,ht=Array(st>1?st-1:0),it=1;it<st;it++)ht[it-1]=arguments[it];return j.produce(We,function(xt){var en;return(en=w).call.apply(en,[ke,xt].concat(ht))})}}var ee;if(typeof w!="function"&&Pn(6),O!==void 0&&typeof O!="function"&&Pn(7),Zi(S)){var me=yf(p),ge=lc(p,S,void 0),Pe=!0;try{ee=w(ge),Pe=!1}finally{Pe?Ba(me):ic(me)}return typeof Promise<"u"&&ee instanceof Promise?ee.then(function(We){return nc(me,O),rc(We,me)},function(We){throw Ba(me),We}):(nc(me,O),rc(ee,me))}if(!S||typeof S!="object")return(ee=w(S))===Af?void 0:(ee===void 0&&(ee=S),p.F&&ec(ee,!0),ee);Pn(21,S)},this.produceWithPatches=function(S,w){return typeof S=="function"?function(j){for(var ee=arguments.length,me=Array(ee>1?ee-1:0),ge=1;ge<ee;ge++)me[ge-1]=arguments[ge];return p.produceWithPatches(j,function(Pe){return S.apply(void 0,[Pe].concat(me))})}:[p.produce(S,w,function(j,ee){O=j,H=ee}),O,H];var O,H},typeof(u==null?void 0:u.useProxies)=="boolean"&&this.setUseProxies(u.useProxies),typeof(u==null?void 0:u.autoFreeze)=="boolean"&&this.setAutoFreeze(u.autoFreeze)}var o=r.prototype;return o.createDraft=function(u){Zi(u)||Pn(8),Ji(u)&&(u=lS(u));var p=yf(this),S=lc(this,u,void 0);return S[hn].C=!0,ic(p),S},o.finishDraft=function(u,p){var S=u&&u[hn],w=S.A;return nc(w,p),rc(void 0,w)},o.setAutoFreeze=function(u){this.F=u},o.setUseProxies=function(u){u&&!Ef&&Pn(20),this.g=u},o.applyPatches=function(u,p){var S;for(S=p.length-1;S>=0;S--){var w=p[S];if(w.path.length===0&&w.op==="replace"){u=w.value;break}}var O=Qn("Patches").$;return Ji(u)?O(u,p):this.produce(u,function(H){return O(H,p.slice(S+1))})},r}(),Sn=new pS;Sn.produce,Sn.produceWithPatches.bind(Sn),Sn.setAutoFreeze.bind(Sn),Sn.setUseProxies.bind(Sn),Sn.applyPatches.bind(Sn),Sn.createDraft.bind(Sn),Sn.finishDraft.bind(Sn);var mS={currentProjectStateDefinitionVersion:"0.4.0"},hc=mS;async function gS(r,o,u){await nS(0),r.transaction(({drafts:p})=>{var S;const w=o.address.projectId;p.ephemeral.coreByProject[w]={lastExportedObject:null,loadingState:{type:"loading"}},p.ahistoric.coreByProject[w]={ahistoricStuff:""};function O(){p.ephemeral.coreByProject[w].loadingState={type:"loaded"},p.historic.coreByProject[w]={sheetsById:{},definitionVersion:hc.currentProjectStateDefinitionVersion,revisionHistory:[]}}function H(ge){p.ephemeral.coreByProject[w].loadingState={type:"loaded"},p.historic.coreByProject[w]=ge}function j(){p.ephemeral.coreByProject[w].loadingState={type:"loaded"}}function ee(ge){p.ephemeral.coreByProject[w].loadingState={type:"browserStateIsNotBasedOnDiskState",onDiskState:ge}}const me=(S=iS(p.historic))==null?void 0:S.coreByProject[o.address.projectId];me?u&&me.revisionHistory.indexOf(u.revisionHistory[0])==-1?ee(u):j():u?H(u):O()})}function Pf(){}function Cf(r){var o,u;const p=(o=r==null?void 0:r.logging)!=null&&o.internal?(u=r.logging.min)!=null?u:256:1/0,S=p<=128,w=p<=512,O=$h(void 0,{_debug:S?console.debug.bind(console,"_coreLogger(TheatreInternalLogger) debug"):Pf,_error:w?console.error.bind(console,"_coreLogger(TheatreInternalLogger) error"):Pf});if(r){const{logger:H,logging:j}=r;H&&O.configureLogger(H),j?O.configureLogging(j):O.configureLogging({dev:!1})}return O.getLogger().named("Theatre")}var _S=class{constructor(r,o={},u){this.config=o,this.publicApi=u,T(this,"pointers"),T(this,"_pointerProxies"),T(this,"address"),T(this,"_studioReadyDeferred"),T(this,"_assetStorageReadyDeferred"),T(this,"_readyPromise"),T(this,"_sheetTemplates",new _f.Atom({})),T(this,"sheetTemplatesP",this._sheetTemplates.pointer),T(this,"_studio"),T(this,"assetStorage"),T(this,"type","Theatre_Project"),T(this,"_logger");var p;this._logger=Cf({logging:{dev:!0}}).named("Project",r),this._logger.traceDev("creating project"),this.address={projectId:r};const S=new _f.Atom({ahistoric:{ahistoricStuff:""},historic:(p=o.state)!=null?p:{sheetsById:{},definitionVersion:hc.currentProjectStateDefinitionVersion,revisionHistory:[]},ephemeral:{loadingState:{type:"loaded"},lastExportedObject:null}});this._assetStorageReadyDeferred=yi(),this.assetStorage={getAssetUrl:w=>{var O;return"".concat((O=o.assets)==null?void 0:O.baseUrl,"/").concat(w)},createAsset:()=>{throw new Error("Please wait for Project.ready to use assets.")}},this._pointerProxies={historic:new Kl.PointerProxy(S.pointer.historic),ahistoric:new Kl.PointerProxy(S.pointer.ahistoric),ephemeral:new Kl.PointerProxy(S.pointer.ephemeral)},this.pointers={historic:this._pointerProxies.historic.pointer,ahistoric:this._pointerProxies.ahistoric.pointer,ephemeral:this._pointerProxies.ephemeral.pointer},te.add(r,this),this._studioReadyDeferred=yi(),this._readyPromise=Promise.all([this._studioReadyDeferred.promise,this._assetStorageReadyDeferred.promise]).then(()=>{}),o.state?setTimeout(()=>{this._studio||(this._studioReadyDeferred.resolve(void 0),this._assetStorageReadyDeferred.resolve(void 0),this._logger._trace("ready deferred resolved with no state"))},0):typeof window>"u"?console.error('Argument config.state in Theatre.getProject("'.concat(r,'", config) is empty. ')+"You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state"):setTimeout(()=>{if(!this._studio)throw new Error('Argument config.state in Theatre.getProject("'.concat(r,'", config) is empty. This is fine ')+"while you are using @theatre/core along with @theatre/studio. But since @theatre/studio "+'is not loaded, the state of project "'.concat(r,`" will be empty.

`)+`To fix this, you need to add @theatre/studio into the bundle and export the project's state. Learn how to do that at https://www.theatrejs.com/docs/latest/manual/projects#state
`)},1e3)}attachToStudio(r){if(this._studio){if(this._studio!==r)throw new Error("Project ".concat(this.address.projectId," is already attached to studio ").concat(this._studio.address.studioId));console.warn("Project ".concat(this.address.projectId," is already attached to studio ").concat(this._studio.address.studioId));return}this._studio=r,r.initialized.then(async()=>{var o;await gS(r,this,this.config.state),this._pointerProxies.historic.setPointer(r.atomP.historic.coreByProject[this.address.projectId]),this._pointerProxies.ahistoric.setPointer(r.atomP.ahistoric.coreByProject[this.address.projectId]),this._pointerProxies.ephemeral.setPointer(r.atomP.ephemeral.coreByProject[this.address.projectId]),await r.createAssetStorage(this,(o=this.config.assets)==null?void 0:o.baseUrl).then(u=>{this.assetStorage=u,this._assetStorageReadyDeferred.resolve(void 0)}),this._studioReadyDeferred.resolve(void 0)}).catch(o=>{throw console.error(o),o})}get isAttachedToStudio(){return!!this._studio}get ready(){return this._readyPromise}isReady(){return this._studioReadyDeferred.status==="resolved"&&this._assetStorageReadyDeferred.status==="resolved"}getOrCreateSheet(r,o="default"){let u=this._sheetTemplates.get()[r];return u||(u=new eS(this,r),this._sheetTemplates.reduce(p=>M(v({},p),{[r]:u}))),u.getInstance(o)}},vS=class{get type(){return"Theatre_Project_PublicAPI"}constructor(r,o={}){fe(this,new _S(r,o,this))}get ready(){return q(this).ready}get isReady(){return q(this).isReady()}get address(){return v({},q(this).address)}getAssetUrl(r){if(!this.isReady){console.error("Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`.");return}return r.id?q(this).assetStorage.getAssetUrl(r.id):void 0}sheet(r,o="default"){const u=Fa(r);return q(this).getOrCreateSheet(u,o).publicApi}};U(W());var Rf=zt,fc=zt;function Lf(r,o={}){const u=te.get(r);if(u)return u.publicApi;const S=Cf().named("Project",r);return o.state?(yS(r,o.state),S._debug("deep validated config.state on disk")):S._debug("no config.state"),new vS(r,o)}var xS=(r,o)=>{if(Array.isArray(o)||o==null||o.definitionVersion!==hc.currentProjectStateDefinitionVersion)throw new Ds("Error validating conf.state in Theatre.getProject(".concat(JSON.stringify(r),", conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state"))},yS=(r,o)=>{xS(r,o)};function dc(r,o,u){const p=u?q(u).ticker:lf();if((0,Rf.isPointer)(r))return(0,fc.pointerToPrism)(r).onChange(p,o,!0);if((0,fc.isPrism)(r))return r.onChange(p,o,!0);throw new Error("Called onChange(p) where p is neither a pointer nor a prism.")}function Df(r){if((0,Rf.isPointer)(r))return(0,fc.pointerToPrism)(r).getValue();throw new Error("Called val(p) where p is not a pointer.")}var SS=class{constructor(){T(this,"_studio")}get type(){return"Theatre_CoreBundle"}get version(){return"0.7.2"}getBitsForStudio(r,o){if(this._studio)throw new Error("@theatre/core is already attached to @theatre/studio");this._studio=r;const u={projectsP:te.atom.pointer.projects,privateAPI:q,coreExports:A,getCoreRafDriver:of};o(u)}};MS();function MS(){if(typeof window>"u")return;const r=window[Wl];if(typeof r<"u")throw typeof r=="object"&&r&&typeof r.version=="string"?new Error(`It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:
1. You might have two separate versions of Theatre.js in node_modules.
2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.

Note that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.`):new Error("The variable window.".concat(Wl," seems to be already set by a module other than @theatre/core."));const o=new SS;window[Wl]=o;const u=window[gy];u&&u!==null&&u.type==="Theatre_StudioBundle"&&u.registerCoreBundle(o)}/*! Bundled license information:

	lodash-es/lodash.js:
	  (**
	   * @license
	   * Lodash (Custom Build) <https://lodash.com/>
	   * Build: `lodash modularize exports="es" -o ./`
	   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	   * Released under MIT license <https://lodash.com/license>
	   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	   *)
	*/})(Co,Co.exports);var xP=Co.exports;export{mP as A,ta as B,vt as C,yp as E,pP as F,ho as G,Sp as L,dP as M,Bn as P,gP as R,fP as S,X as V,hP as W,xP as a,fi as b,Wn as c,zt as d,_P as e,vP as g};
