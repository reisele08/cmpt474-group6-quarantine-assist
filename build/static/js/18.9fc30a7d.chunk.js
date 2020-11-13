(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[18],{289:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_s3_image",(function(){return f}));var r=n(12),o=n(42),i=n(328),u=(n(324),n(9),n(329)),a=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}c((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=new o.a("S3Image"),f=function(){function t(t){Object(r.k)(this,t),this.contentType="binary/octet-stream",this.level=i.a.Public}return t.prototype.watchHandler=function(){return a(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillLoad=function(){return a(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.load=function(){return a(this,void 0,void 0,(function(){var t,e,n,r,o,i,a,f,l,d,h;return c(this,(function(c){switch(c.label){case 0:if(e=(t=this).imgKey,n=t.path,r=t.body,o=t.contentType,i=t.level,a=t.track,f=t.identityId,!e&&!n)return s.debug("empty imgKey and path"),[2];l=e||n,s.debug("loading "+l+"..."),c.label=1;case 1:return c.trys.push([1,5,,6]),r?[4,Object(u.e)(e,r,i,a,o,s)]:[3,3];case 2:c.sent(),c.label=3;case 3:return d=this,[4,Object(u.c)(l,i,a,f,s)];case 4:return d.src=c.sent(),[3,6];case 5:throw h=c.sent(),s.debug(h),new Error(h);case 6:return[2]}}))}))},t.prototype.render=function(){return Object(r.i)(r.b,null,this.src&&Object(r.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))},Object.defineProperty(t,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:!1,configurable:!0}),t}();f.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"},324:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return w})),n.d(e,"h",(function(){return E})),n.d(e,"i",(function(){return S})),n.d(e,"j",(function(){return j})),n.d(e,"k",(function(){return u})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return b})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return s})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return f})),n.d(e,"t",(function(){return i})),n.d(e,"u",(function(){return a})),n.d(e,"v",(function(){return r}));var r="username",o="email",i="code",u="phone",a="password",c="country-dial-code-select",s="+1",f="amplify-auth-source",l="amplify-redirected-from-hosted-ui",d="amplify-authenticator-authState",h="Phone number can not be empty",p="No Auth module found, please ensure @aws-amplify/auth is imported",y="No Storage module found, please ensure @aws-amplify/storage is imported",b="No Interactions module found, please ensure @aws-amplify/interactions is imported",w="SETUP_TOTP",v="User has not set up software token mfa",g="User has not verified software token mfa",m="SUCCESS",k="auth",S="UI Auth",E="ToastAuthError",j="AuthStateChange"},328:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.Public="public",t.Private="private",t.Protected="protected"}(r||(r={}))},329:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return l}));var r=n(324),o=n(9),i=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}c((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),c=function(t,e){var n=t.name,r=t.size,o=t.type,i=encodeURI(n);return e&&((i="string"===typeof e?e:"function"===typeof e?e({name:n,size:r,type:o}):encodeURI(JSON.stringify(e)))||(i="empty_key")),i.replace(/\s/g,"_")},s=function(t,e,n,a,c){return i(void 0,void 0,void 0,(function(){var i,s;return u(this,(function(u){switch(u.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);u.label=1;case 1:return u.trys.push([1,3,,4]),[4,o.a.get(t,{level:e,track:n,identityId:a})];case 2:return i=u.sent(),c.debug("Storage image get",i),[2,i];case 3:throw s=u.sent(),new Error(s);case 4:return[2]}}))}))},f=function(t,e,n,a,c){return i(void 0,void 0,void 0,(function(){var i,s;return u(this,(function(u){switch(u.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);u.label=1;case 1:return u.trys.push([1,4,,5]),[4,o.a.get(t,{download:!0,level:e,track:n,identityId:a})];case 2:return i=u.sent(),c.debug(i),[4,(f=i.Body,new Promise((function(t,e){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){e("Failed to read file!"),n.abort()},n.readAsText(f)})))];case 3:return[2,u.sent()];case 4:throw s=u.sent(),new Error(s);case 5:return[2]}var f}))}))},l=function(t,e,n,a,c,s){return i(void 0,void 0,void 0,(function(){var i,f;return u(this,(function(u){switch(u.label){case 0:if(!o.a||"function"!==typeof o.a.put)throw new Error(r.n);u.label=1;case 1:return u.trys.push([1,3,,4]),[4,o.a.put(t,e,{contentType:c,level:n,track:a})];case 2:return i=u.sent(),s.debug("Upload data",i),[3,4];case 3:throw f=u.sent(),new Error(f);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=18.9fc30a7d.chunk.js.map