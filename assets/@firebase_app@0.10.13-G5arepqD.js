import{C as d,a as O}from"./@firebase_component@0.6.9-BT_Gq3Qq.js";import{L as H}from"./@firebase_logger@0.4.2-CNz1B4Yj.js";import{E as N,e as S,d as w,f as y,a as P,v as F,F as A}from"./@firebase_util@1.10.0-CjACHxc0.js";import{o as R}from"./idb@7.1.1-BXWtuYvb.js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(M(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function M(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const g="@firebase/app",D="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=new H("@firebase/app"),j="@firebase/app-compat",k="@firebase/analytics-compat",U="@firebase/analytics",L="@firebase/app-check-compat",V="@firebase/app-check",G="@firebase/auth",z="@firebase/auth-compat",J="@firebase/database",Y="@firebase/data-connect",q="@firebase/database-compat",X="@firebase/functions",K="@firebase/functions-compat",W="@firebase/installations",Q="@firebase/installations-compat",Z="@firebase/messaging",ee="@firebase/messaging-compat",te="@firebase/performance",ae="@firebase/performance-compat",re="@firebase/remote-config",ne="@firebase/remote-config-compat",se="@firebase/storage",ie="@firebase/storage-compat",oe="@firebase/firestore",ce="@firebase/vertexai-preview",pe="@firebase/firestore-compat",he="firebase",de="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u="[DEFAULT]",le={[g]:"fire-core",[j]:"fire-core-compat",[U]:"fire-analytics",[k]:"fire-analytics-compat",[V]:"fire-app-check",[L]:"fire-app-check-compat",[G]:"fire-auth",[z]:"fire-auth-compat",[J]:"fire-rtdb",[Y]:"fire-data-connect",[q]:"fire-rtdb-compat",[X]:"fire-fn",[K]:"fire-fn-compat",[W]:"fire-iid",[Q]:"fire-iid-compat",[Z]:"fire-fcm",[ee]:"fire-fcm-compat",[te]:"fire-perf",[ae]:"fire-perf-compat",[re]:"fire-rc",[ne]:"fire-rc-compat",[se]:"fire-gcs",[ie]:"fire-gcs-compat",[oe]:"fire-fst",[pe]:"fire-fst-compat",[ce]:"fire-vertex","fire-js":"fire-js",[he]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new Map,fe=new Map,_=new Map;function E(a,e){try{a.container.addComponent(e)}catch(t){c.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function v(a){const e=a.name;if(_.has(e))return c.debug(`There were multiple attempts to register component ${e}.`),!1;_.set(e,a);for(const t of l.values())E(t,a);for(const t of fe.values())E(t,a);return!0}function Be(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}function Oe(a){return a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},p=new N("app","Firebase",be);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new d("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw p.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=de;function ge(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const r=Object.assign({name:u,automaticDataCollectionEnabled:!1},e),n=r.name;if(typeof n!="string"||!n)throw p.create("bad-app-name",{appName:String(n)});if(t||(t=S()),!t)throw p.create("no-options");const s=l.get(n);if(s){if(w(t,s.options)&&w(r,s.config))return s;throw p.create("duplicate-app",{appName:n})}const i=new O(n);for(const f of _.values())i.addComponent(f);const o=new me(t,r,i);return l.set(n,o),o}function Ne(a=u){const e=l.get(a);if(!e&&a===u&&S())return ge();if(!e)throw p.create("no-app",{appName:a});return e}function b(a,e,t){var r;let n=(r=le[a])!==null&&r!==void 0?r:a;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),c.warn(o.join(" "));return}v(new d(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="firebase-heartbeat-database",_e=1,h="firebase-heartbeat-store";let m=null;function x(){return m||(m=R(ue,_e,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(h)}catch(t){console.warn(t)}}}}).catch(a=>{throw p.create("idb-open",{originalErrorMessage:a.message})})),m}async function ve(a){try{const t=(await x()).transaction(h),r=await t.objectStore(h).get(B(a));return await t.done,r}catch(e){if(e instanceof A)c.warn(e.message);else{const t=p.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});c.warn(t.message)}}}async function $(a,e){try{const r=(await x()).transaction(h,"readwrite");await r.objectStore(h).put(e,B(a)),await r.done}catch(t){if(t instanceof A)c.warn(t.message);else{const r=p.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});c.warn(r.message)}}}function B(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=1024,De=30*24*60*60*1e3;class Ee{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ce(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=C();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=De}),this._storage.overwrite(this._heartbeatsCache))}catch(r){c.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=C(),{heartbeatsToSend:r,unsentEntries:n}=$e(this._heartbeatsCache.heartbeats),s=y(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return c.warn(t),""}}}function C(){return new Date().toISOString().substring(0,10)}function $e(a,e=we){const t=[];let r=a.slice();for(const n of a){const s=t.find(i=>i.agent===n.agent);if(s){if(s.dates.push(n.date),I(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),I(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P()?F().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ve(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return $(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return $(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function I(a){return y(JSON.stringify({version:2,heartbeats:a})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(a){v(new d("platform-logger",e=>new T(e),"PRIVATE")),v(new d("heartbeat",e=>new Ee(e),"PRIVATE")),b(g,D,a),b(g,D,"esm2017"),b("fire-js","")}Ie("");export{He as S,v as _,Be as a,Oe as b,Ne as g,ge as i,b as r};
