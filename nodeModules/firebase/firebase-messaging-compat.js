!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function($t,Bt){"use strict";try{!function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e($t);function n(){return"object"==typeof indexedDB}class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,i.prototype.create)}}class i{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var i,n=t[0]||{},t=`${this.service}/${e}`,e=this.errors[e],e=e?(i=n,e.replace(a,(e,t)=>{var n=i[t];return null!=n?String(n):`<${t}?>`})):"Error",e=`${this.serviceName}: ${e} (${t}).`;return new o(t,e,n)}}const a=/\{\$([^}]+)}/g;function r(e){return e&&e._delegate?e._delegate:e}var s=(c.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},c.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},c.prototype.setServiceProps=function(e){return this.serviceProps=e,this},c.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},c);function c(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}function u(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function p(n,i,o){var a,e=new Promise(function(e,t){u(a=n[i].apply(n,o)).then(e,t)});return e.request=a,e}function d(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function l(t,n,i,e){e.forEach(function(e){e in i.prototype&&(t.prototype[e]=function(){return p(this[n],e,arguments)})})}function f(t,n,i,e){e.forEach(function(e){e in i.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function g(e,i,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return e=this[i],(t=p(e,n,arguments)).then(function(e){if(e)return new w(e,t.request)});var e,t})})}function h(e){this._index=e}function w(e,t){this._cursor=e,this._request=t}function m(e){this._store=e}function y(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function b(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new y(n)}function v(e){this._db=e}function k(e,t,n){var t=p(indexedDB,"open",[e,t]),i=t.request;return i&&(i.onupgradeneeded=function(e){n&&n(new b(i.result,e.oldVersion,i.transaction))}),t.then(function(e){return new v(e)})}function I(e){return p(indexedDB,"deleteDatabase",[e])}d(h,"_index",["name","keyPath","multiEntry","unique"]),l(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),g(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),d(w,"_cursor",["direction","key","primaryKey","value"]),l(w,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(w.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),u(t._request).then(function(e){if(e)return new w(e,t._request)})})})}),m.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},m.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},d(m,"_store",["name","keyPath","indexNames","autoIncrement"]),l(m,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),g(m,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),f(m,"_store",IDBObjectStore,["deleteIndex"]),y.prototype.objectStore=function(){return new m(this._tx.objectStore.apply(this._tx,arguments))},d(y,"_tx",["objectStoreNames","mode"]),f(y,"_tx",IDBTransaction,["abort"]),b.prototype.createObjectStore=function(){return new m(this._db.createObjectStore.apply(this._db,arguments))},d(b,"_db",["name","version","objectStoreNames"]),f(b,"_db",IDBDatabase,["deleteObjectStore","close"]),v.prototype.transaction=function(){return new y(this._db.transaction.apply(this._db,arguments))},d(v,"_db",["name","version","objectStoreNames"]),f(v,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[m,h].forEach(function(e){o in e.prototype&&(e.prototype[o.replace("open","iterate")]=function(){var e=(n=arguments,Array.prototype.slice.call(n)),t=e[e.length-1],n=this._store||this._index,i=n[o].apply(n,e.slice(0,-1));i.onsuccess=function(){t(i.result)}})})}),[h,m].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var i=this,o=[];return new Promise(function(t){i.iterateCursor(e,function(e){e?(o.push(e.value),void 0===n||o.length!=n?e.continue():t(o)):t(o)})})})});var S="0.5.1";const T=1e4,_=`w:${S}`,C="FIS_v2",j="https://firebaseinstallations.googleapis.com/v1",O=36e5;var D,P,A,E;const K=new i("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function M(e){return e instanceof o&&e.code.includes("request-failed")}function N({projectId:e}){return`${j}/projects/${e}/installations`}function x(e){return{token:e.token,requestStatus:2,expiresIn:(e=e.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}}async function $(e,t){t=(await t.json()).error;return K.create("request-failed",{requestName:e,serverCode:t.code,serverMessage:t.message,serverStatus:t.status})}function B({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function F(e,{refreshToken:t}){const n=B(e);return n.append("Authorization",(t=t,`${C} ${t}`)),n}async function q(e){var t=await e();return 500<=t.status&&t.status<600?e():t}function L(t){return new Promise(e=>{setTimeout(e,t)})}const R=/^[cdef][\w-]{21}$/,V="";function H(){try{const t=new Uint8Array(17),n=self.crypto||self.msCrypto;n.getRandomValues(t),t[0]=112+t[0]%16;var e=function(e){const t=function(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(t);return R.test(e)?e:V}catch(e){return V}}function W(e){return`${e.appName}!${e.appId}`}const U=new Map;function G(e,t){e=W(e);J(e,t),function(e,t){const n=function(){!z&&"BroadcastChannel"in self&&(z=new BroadcastChannel("[Firebase] FID Change"),z.onmessage=e=>{J(e.data.key,e.data.fid)});return z}();n&&n.postMessage({key:e,fid:t});0===U.size&&z&&(z.close(),z=null)}(e,t)}function J(e,t){e=U.get(e);if(e)for(const n of e)n(t)}let z=null;const Y="firebase-installations-store";let Q=null;function Z(){return Q=Q||k("firebase-installations-database",1,e=>{0===e.oldVersion&&e.createObjectStore(Y)}),Q}async function X(e,t){var n=W(e);const i=await Z(),o=i.transaction(Y,"readwrite"),a=o.objectStore(Y);var r=await a.get(n);return await a.put(t,n),await o.complete,r&&r.fid===t.fid||G(e,t.fid),t}async function ee(e){e=W(e);const t=await Z(),n=t.transaction(Y,"readwrite");await n.objectStore(Y).delete(e),await n.complete}async function te(e,t){var n=W(e);const i=await Z(),o=i.transaction(Y,"readwrite"),a=o.objectStore(Y);var r=await a.get(n),t=t(r);return void 0===t?await a.delete(n):await a.put(t,n),await o.complete,!t||r&&r.fid===t.fid||G(e,t.fid),t}async function ne(t){let n;var e=await te(t,e=>{e=function(e){e=e||{fid:H(),registrationStatus:0};return oe(e)}(e),e=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:async function(e){let t=await ie(e);for(;1===t.registrationStatus;)await L(100),t=await ie(e);if(0!==t.registrationStatus)return t;{var{installationEntry:n,registrationPromise:i}=await ne(e);return i||n}}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(K.create("app-offline"));return{installationEntry:t,registrationPromise:n}}t={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},e=async function(t,n){try{var e=await async function(e,{fid:t}){const n=N(e);var i=B(e),e={fid:t,authVersion:C,appId:e.appId,sdkVersion:_};const o={method:"POST",headers:i,body:JSON.stringify(e)},a=await q(()=>fetch(n,o));if(a.ok){e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:x(e.authToken)}}throw await $("Create Installation",a)}(t,n);return X(t,e)}catch(e){throw M(e)&&409===e.customData.serverCode?await ee(t):await X(t,{fid:n.fid,registrationStatus:0}),e}}(e,t);return{installationEntry:t,registrationPromise:e}}}(t,e);return n=e.registrationPromise,e.installationEntry});return e.fid===V?{installationEntry:await n}:{installationEntry:e,registrationPromise:n}}function ie(e){return te(e,e=>{if(!e)throw K.create("installation-not-found");return oe(e)})}function oe(e){return 1===(t=e).registrationStatus&&t.registrationTime+T<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function ae({appConfig:e,platformLoggerProvider:t},n){const i=([o,a]=[e,n["fid"]],`${N(o)}/${a}/authTokens:generate`);var o,a;const r=F(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());t={installation:{sdkVersion:_}};const c={method:"POST",headers:r,body:JSON.stringify(t)},u=await q(()=>fetch(i,c));if(u.ok)return x(await u.json());throw await $("Generate Auth Token",u)}async function re(i,o=!1){let a;var e=await te(i.appConfig,e=>{if(!ce(e))throw K.create("not-registered");var t,n=e.authToken;if(o||2!==(t=n).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+O}(t)){if(1===n.requestStatus)return a=async function(e,t){let n=await se(e.appConfig);for(;1===n.authToken.requestStatus;)await L(100),n=await se(e.appConfig);var i=n.authToken;return 0===i.requestStatus?re(e,t):i}(i,o),e;if(!navigator.onLine)throw K.create("app-offline");n=(t=e,n={requestStatus:1,requestTime:Date.now()},Object.assign(Object.assign({},t),{authToken:n}));return a=async function(t,n){try{var e=await ae(t,n),i=Object.assign(Object.assign({},n),{authToken:e});return await X(t.appConfig,i),e}catch(e){throw!M(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode?(n=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),await X(t.appConfig,n)):await ee(t.appConfig),e}}(i,n),n}return e});return a?await a:e.authToken}function se(e){return te(e,e=>{if(!ce(e))throw K.create("not-registered");var t=e.authToken;return 1===(t=t).requestStatus&&t.requestTime+T<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function ce(e){return void 0!==e&&2===e.registrationStatus}async function ue(e,t=!1){var n=e;return await((e=(await ne(e=n.appConfig)).registrationPromise)&&await e),(await re(n,t)).token}function pe(e){return K.create("missing-app-config-values",{valueName:e})}const de="installations",le=e=>{e=e.getProvider("app").getImmediate();return{app:e,appConfig:function(e){if(!e||!e.options)throw pe("App Configuration");if(!e.name)throw pe("App Name");for(const t of["projectId","apiKey","appId"])if(!e.options[t])throw pe(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(e),platformLoggerProvider:Bt._getProvider(e,"platform-logger"),_delete:()=>Promise.resolve()}},fe=e=>{e=e.getProvider("app").getImmediate();const t=Bt._getProvider(e,de).getImmediate();return{getId:()=>async function(e){const{installationEntry:t,registrationPromise:n}=await ne(e.appConfig);return(n||re(e)).catch(console.error),t.fid}(t),getToken:e=>ue(t,e)}};Bt._registerComponent(new s(de,le,"PUBLIC")),Bt._registerComponent(new s("installations-internal",fe,"PRIVATE")),Bt.registerVersion("@firebase/installations",S);const ge="/firebase-messaging-sw.js",he="/firebase-cloud-messaging-push-scope",we="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",me="https://fcmregistrations.googleapis.com/v1",ye="google.c.a.c_id",be="google.c.a.e";function ve(e){e=new Uint8Array(e);const t=btoa(String.fromCharCode(...e));return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(E=E=E||{})[E.DATA_MESSAGE=1]="DATA_MESSAGE",E[E.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(E=D=D||{}).PUSH_RECEIVED="push-received",E.NOTIFICATION_CLICKED="notification-clicked";const ke="fcm_token_details_db",Ie="fcm_token_object_Store";async function Se(a){if("databases"in indexedDB){const t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(ke))return null}let r=null;const e=await k(ke,5,async e=>{var t;if(!(e.oldVersion<2)&&e.objectStoreNames.contains(Ie)){const o=e.transaction.objectStore(Ie);var n,i=await o.index("fcmSenderId").get(a);await o.clear(),i&&(2===e.oldVersion?(n=i).auth&&n.p256dh&&n.endpoint&&(r={token:n.fcmToken,createTime:null!==(t=n.createTime)&&void 0!==t?t:Date.now(),subscriptionOptions:{auth:n.auth,p256dh:n.p256dh,endpoint:n.endpoint,swScope:n.swScope,vapidKey:"string"==typeof n.vapidKey?n.vapidKey:ve(n.vapidKey)}}):3===e.oldVersion?(n=i,r={token:n.fcmToken,createTime:n.createTime,subscriptionOptions:{auth:ve(n.auth),p256dh:ve(n.p256dh),endpoint:n.endpoint,swScope:n.swScope,vapidKey:ve(n.vapidKey)}}):4===e.oldVersion&&(i=i,r={token:i.fcmToken,createTime:i.createTime,subscriptionOptions:{auth:ve(i.auth),p256dh:ve(i.p256dh),endpoint:i.endpoint,swScope:i.swScope,vapidKey:ve(i.vapidKey)}}))}});return e.close(),await I(ke),await I("fcm_vapid_details_db"),await I("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;var t=e["subscriptionOptions"];return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(r)?r:null}const Te="firebase-messaging-database",_e=1,Ce="firebase-messaging-store";let je=null;function Oe(){return je=je||k(Te,_e,e=>{0===e.oldVersion&&e.createObjectStore(Ce)}),je}async function De(e){var t=Ae(e);const n=await Oe();t=await n.transaction(Ce).objectStore(Ce).get(t);if(t)return t;t=await Se(e.appConfig.senderId);return t?(await Pe(e,t),t):void 0}async function Pe(e,t){e=Ae(e);const n=await Oe(),i=n.transaction(Ce,"readwrite");return await i.objectStore(Ce).put(t,e),await i.complete,t}function Ae({appConfig:e}){return e.appId}const Ee=new i("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Ke(e,t){var n={method:"DELETE",headers:await Ne(e)};try{const a=await fetch(`${Me(e.appConfig)}/${t}`,n);var i=await a.json();if(i.error){var o=i.error.message;throw Ee.create("token-unsubscribe-failed",{errorInfo:o})}}catch(e){throw Ee.create("token-unsubscribe-failed",{errorInfo:e})}}function Me({projectId:e}){return`${me}/projects/${e}/registrations`}async function Ne({appConfig:e,installations:t}){t=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function xe({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==we&&(o.web.applicationPubKey=i),o}const $e=6048e5;async function Be(e){const t=await async function(e,t){var n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){e=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/");const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}(t)})}(e.swRegistration,e.vapidKey);var n,i,o,a,r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ve(t.getKey("auth")),p256dh:ve(t.getKey("p256dh"))},s=await De(e.firebaseDependencies);if(s){if(n=s.subscriptionOptions,i=r.vapidKey===n.vapidKey,o=r.endpoint===n.endpoint,a=r.auth===n.auth,n=r.p256dh===n.p256dh,i&&o&&a&&n)return Date.now()>=s.createTime+$e?async function(t,e){try{var n=await async function(e,t){var n=await Ne(e),i=xe(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(i)};let o;try{const a=await fetch(`${Me(e.appConfig)}/${t.token}`,i);o=await a.json()}catch(e){throw Ee.create("token-update-failed",{errorInfo:e})}if(o.error){i=o.error.message;throw Ee.create("token-update-failed",{errorInfo:i})}if(!o.token)throw Ee.create("token-update-no-token");return o.token}(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Pe(t.firebaseDependencies,i),n}catch(e){throw await Fe(t),e}}(e,{token:s.token,createTime:Date.now(),subscriptionOptions:r}):s.token;try{await Ke(e.firebaseDependencies,s.token)}catch(e){console.warn(e)}return qe(e.firebaseDependencies,r)}return qe(e.firebaseDependencies,r)}async function Fe(e){var t=await De(e.firebaseDependencies);t&&(await Ke(e.firebaseDependencies,t.token),await async function(e){e=Ae(e);const t=await Oe(),n=t.transaction(Ce,"readwrite");await n.objectStore(Ce).delete(e),await n.complete}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function qe(e,t){t={token:await async function(e,t){var n=await Ne(e),t=xe(t),t={method:"POST",headers:n,body:JSON.stringify(t)};let i;try{const o=await fetch(Me(e.appConfig),t);i=await o.json()}catch(e){throw Ee.create("token-subscribe-failed",{errorInfo:e})}if(i.error){t=i.error.message;throw Ee.create("token-subscribe-failed",{errorInfo:t})}if(!i.token)throw Ee.create("token-subscribe-no-token");return i.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await Pe(e,t),t.token}function Le(e){var t,n,i,o={from:e.from,collapseKey:e.collapse_key,messageId:e.fcm_message_id};return n=o,(i=e).notification&&(n.notification={},(t=i.notification.title)&&(n.notification.title=t),(t=i.notification.body)&&(n.notification.body=t),(i=i.notification.image)&&(n.notification.image=i)),n=o,(i=e).data&&(n.data=i.data),n=o,(i=e).fcmOptions&&(n.fcmOptions={},(e=i.fcmOptions.link)&&(n.fcmOptions.link=e),(i=i.fcmOptions.analytics_label)&&(n.fcmOptions.analyticsLabel=i)),o}function Re(t,n){const i=[];for(let e=0;e<t.length;e++)i.push(t.charAt(e)),e<n.length&&i.push(n.charAt(e));return i.join("")}function Ve(e){return Ee.create("missing-app-config-values",{valueName:e})}Re("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Re("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class He{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var i=function(e){if(!e||!e.options)throw Ve("App Configuration Object");if(!e.name)throw Ve("App Name");var t=e["options"];for(const n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw Ve(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function We(e){try{e.swRegistration=await navigator.serviceWorker.register(ge,{scope:he}),e.swRegistration.update().catch(()=>{})}catch(e){throw Ee.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}async function Ue(e,t){if(!navigator)throw Ee.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Ee.create("permission-blocked");var n,i;return n=e,await((i=null==t?void 0:t.vapidKey)?n.vapidKey=i:n.vapidKey||(n.vapidKey=we)),await async function(e,t){if(t||e.swRegistration||await We(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Ee.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),Be(e)}async function Ge(e,t,n){t=function(e){switch(e){case D.NOTIFICATION_CLICKED:return"notification_open";case D.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(t);const i=await e.firebaseDependencies.analyticsProvider.get();i.logEvent(t,{message_id:n[ye],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function Je(e,t){var n,i=t.data;i.isFirebaseMessaging&&(e.onMessageHandler&&i.messageType===D.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(Le(i)):e.onMessageHandler.next(Le(i))),n=i.data,"object"==typeof(t=n)&&t&&ye in t&&"1"===n[be]&&await Ge(e,i.messageType,n))}const ze=e=>{const t=new He(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>Je(t,e)),t},Ye=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>Ue(t,e)}};function Qe(e){return async function(e){if(!navigator)throw Ee.create("only-available-in-window");return e.swRegistration||await We(e),Fe(e)}(e=r(e))}function Ze(e,t){return function(e,t){if(!navigator)throw Ee.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=r(e),t)}Bt._registerComponent(new s("messaging",ze,"PUBLIC")),Bt._registerComponent(new s("messaging-internal",Ye,"PRIVATE"));const Xe="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",et="https://fcmregistrations.googleapis.com/v1",tt="FCM_MSG",nt="google.c.a.c_id",it=3,ot=1;function at(e){e=new Uint8Array(e);const t=btoa(String.fromCharCode(...e));return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(E=P=P||{})[E.DATA_MESSAGE=1]="DATA_MESSAGE",E[E.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(E=A=A||{}).PUSH_RECEIVED="push-received",E.NOTIFICATION_CLICKED="notification-clicked";const rt="fcm_token_details_db",st="fcm_token_object_Store";async function ct(a){if("databases"in indexedDB){const t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(rt))return null}let r=null;const e=await k(rt,5,async e=>{var t;if(!(e.oldVersion<2)&&e.objectStoreNames.contains(st)){const o=e.transaction.objectStore(st);var n,i=await o.index("fcmSenderId").get(a);await o.clear(),i&&(2===e.oldVersion?(n=i).auth&&n.p256dh&&n.endpoint&&(r={token:n.fcmToken,createTime:null!==(t=n.createTime)&&void 0!==t?t:Date.now(),subscriptionOptions:{auth:n.auth,p256dh:n.p256dh,endpoint:n.endpoint,swScope:n.swScope,vapidKey:"string"==typeof n.vapidKey?n.vapidKey:at(n.vapidKey)}}):3===e.oldVersion?(n=i,r={token:n.fcmToken,createTime:n.createTime,subscriptionOptions:{auth:at(n.auth),p256dh:at(n.p256dh),endpoint:n.endpoint,swScope:n.swScope,vapidKey:at(n.vapidKey)}}):4===e.oldVersion&&(i=i,r={token:i.fcmToken,createTime:i.createTime,subscriptionOptions:{auth:at(i.auth),p256dh:at(i.p256dh),endpoint:i.endpoint,swScope:i.swScope,vapidKey:at(i.vapidKey)}}))}});return e.close(),await I(rt),await I("fcm_vapid_details_db"),await I("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;var t=e["subscriptionOptions"];return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(r)?r:null}const ut="firebase-messaging-database",pt=1,dt="firebase-messaging-store";let lt=null;function ft(){return lt=lt||k(ut,pt,e=>{0===e.oldVersion&&e.createObjectStore(dt)}),lt}async function gt(e){var t=wt(e);const n=await ft();t=await n.transaction(dt).objectStore(dt).get(t);if(t)return t;t=await ct(e.appConfig.senderId);return t?(await ht(e,t),t):void 0}async function ht(e,t){e=wt(e);const n=await ft(),i=n.transaction(dt,"readwrite");return await i.objectStore(dt).put(t,e),await i.complete,t}function wt({appConfig:e}){return e.appId}const mt=new i("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function yt(e,t){var n={method:"DELETE",headers:await vt(e)};try{const a=await fetch(`${bt(e.appConfig)}/${t}`,n);var i=await a.json();if(i.error){var o=i.error.message;throw mt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(e){throw mt.create("token-unsubscribe-failed",{errorInfo:e})}}function bt({projectId:e}){return`${et}/projects/${e}/registrations`}async function vt({appConfig:e,installations:t}){t=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function kt({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Xe&&(o.web.applicationPubKey=i),o}async function It(e){const t=await async function(e,t){var n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){e=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/");const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}(t)})}(e.swRegistration,e.vapidKey);var n,i,o,a,r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:at(t.getKey("auth")),p256dh:at(t.getKey("p256dh"))},s=await gt(e.firebaseDependencies);if(s){if(n=s.subscriptionOptions,i=r.vapidKey===n.vapidKey,o=r.endpoint===n.endpoint,a=r.auth===n.auth,n=r.p256dh===n.p256dh,i&&o&&a&&n)return Date.now()>=s.createTime+6048e5?async function(t,e){try{var n=await async function(e,t){var n=await vt(e),i=kt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(i)};let o;try{const a=await fetch(`${bt(e.appConfig)}/${t.token}`,i);o=await a.json()}catch(e){throw mt.create("token-update-failed",{errorInfo:e})}if(o.error){i=o.error.message;throw mt.create("token-update-failed",{errorInfo:i})}if(!o.token)throw mt.create("token-update-no-token");return o.token}(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await ht(t.firebaseDependencies,i),n}catch(e){throw await St(t),e}}(e,{token:s.token,createTime:Date.now(),subscriptionOptions:r}):s.token;try{await yt(e.firebaseDependencies,s.token)}catch(e){console.warn(e)}return Tt(e.firebaseDependencies,r)}return Tt(e.firebaseDependencies,r)}async function St(e){var t=await gt(e.firebaseDependencies);t&&(await yt(e.firebaseDependencies,t.token),await async function(e){e=wt(e);const t=await ft(),n=t.transaction(dt,"readwrite");await n.objectStore(dt).delete(e),await n.complete}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Tt(e,t){t={token:await async function(e,t){var n=await vt(e),t=kt(t),t={method:"POST",headers:n,body:JSON.stringify(t)};let i;try{const o=await fetch(bt(e.appConfig),t);i=await o.json()}catch(e){throw mt.create("token-subscribe-failed",{errorInfo:e})}if(i.error){t=i.error.message;throw mt.create("token-subscribe-failed",{errorInfo:t})}if(!i.token)throw mt.create("token-subscribe-no-token");return i.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await ht(e,t),t.token}async function _t(e,t){t=function(e,t){const n={};e.from&&(n.project_number=e.from);e.fcm_message_id&&(n.message_id=e.fcm_message_id);n.instance_id=t,e.notification?n.message_type=P.DISPLAY_NOTIFICATION.toString():n.message_type=P.DATA_MESSAGE.toString();n.sdk_platform=it.toString(),n.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(n.collapse_key=e.collapse_key);n.event=ot.toString(),null!==(t=e.fcmOptions)&&void 0!==t&&t.analytics_label&&(n.analytics_label=null===(e=e.fcmOptions)||void 0===e?void 0:e.analytics_label);return n}(t,await e.firebaseDependencies.installations.getId());!function(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}(e,t)}function Ct(t,n){const i=[];for(let e=0;e<t.length;e++)i.push(t.charAt(e)),e<n.length&&i.push(n.charAt(e));return i.join("")}async function jt(e,t){var n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(n){t.deliveryMetricsExportedToBigQueryEnabled&&await _t(t,n);var i,o,a=await Dt();if(a.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=A.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(a,n);n.notification&&await function(e){var t=e["actions"],n=Notification["maxActions"];t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(n=e.title)&&void 0!==n?n:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[tt]:e},t}(n)),t&&t.onBackgroundMessageHandler&&(o={from:(i=n).from,collapseKey:i.collapse_key,messageId:i.fcm_message_id},e=o,(a=i).notification&&(e.notification={},(n=a.notification.title)&&(e.notification.title=n),(n=a.notification.body)&&(e.notification.body=n),(a=a.notification.image)&&(e.notification.image=a)),e=o,(a=i).data&&(e.data=a.data),e=o,(a=i).fcmOptions&&(e.fcmOptions={},(i=a.fcmOptions.link)&&(e.fcmOptions.link=i),(a=a.fcmOptions.analytics_label)&&(e.fcmOptions.analyticsLabel=a)),o=o,"function"==typeof t.onBackgroundMessageHandler?t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o))}}async function Ot(e){const t=null===(o=null===(n=e.notification)||void 0===n?void 0:n.data)||void 0===o?void 0:o[tt];if(t&&!e.action){e.stopImmediatePropagation(),e.notification.close();var n=function(e){var t;var n=null!==(t=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==t?t:null===(n=e.notification)||void 0===n?void 0:n.click_action;if(n)return n;return function(e){return"object"==typeof e&&e&&nt in e}(e.data)?self.location.origin:null}(t);if(n){var i,o=new URL(n,self.location.href),e=new URL(self.location.origin);if(o.host===e.host){let e=await async function(e){var t=await Dt();for(const i of t){var n=new URL(i.url,self.location.href);if(e.host===n.host)return i}return null}(o);if(e?e=await e.focus():(e=await self.clients.openWindow(n),i=3e3,await new Promise(e=>{setTimeout(e,i)})),e)return t.messageType=A.NOTIFICATION_CLICKED,t.isFirebaseMessaging=!0,e.postMessage(t)}}}}function Dt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Pt(e){return mt.create("missing-app-config-values",{valueName:e})}Ct("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Ct("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class At{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var i=function(e){if(!e||!e.options)throw Pt("App Configuration Object");if(!e.name)throw Pt("App Name");var t=e["options"];for(const n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw Pt(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}const Et=e=>{const t=new At(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(jt(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){(e=e["newSubscription"])?(e=await gt(t.firebaseDependencies),await St(t),t.vapidKey=null!==(e=null===(e=null==e?void 0:e.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==e?e:Xe,await It(t)):await St(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(Ot(e))}),t};function Kt(e,t){return function(e,t){if(void 0!==self.document)throw mt.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=r(e),t)}Bt._registerComponent(new s("messaging-sw",Et,"PUBLIC"));class Mt{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return async function(e,t){return Ue(e=r(e),t)}(this._delegate,e)}async deleteToken(){return Qe(this._delegate)}onMessage(e){return Ze(this._delegate,e)}onBackgroundMessage(e){return Kt(this._delegate,e)}}const Nt=e=>self&&"ServiceWorkerGlobalScope"in self?new Mt(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new Mt(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),xt={isSupported:function(){return self&&"ServiceWorkerGlobalScope"in self?n()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&n()&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};t.default.INTERNAL.registerComponent(new s("messaging-compat",Nt,"PUBLIC").setServiceProps(xt)),t.default.registerVersion("@firebase/messaging-compat","0.1.1")}.apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging-compat.js.map