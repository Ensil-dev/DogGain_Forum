import{_ as Va,r as gs,g as Pa,a as ba,S as Sa}from"./@firebase_app@0.10.13-G5arepqD.js";import{C as Da}from"./@firebase_component@0.6.9-BT_Gq3Qq.js";import{L as xa,a as ye}from"./@firebase_logger@0.4.2-CNz1B4Yj.js";import{F as Ca,t as Na,u as ka,g as he,w as Pi,l as yn,a as Fa}from"./@firebase_util@1.10.0-CjACHxc0.js";import{I as lt,M as Ma,X as Oa,E as La,a as nr,c as Ua,g as qa,W as rn,b as Ba,S as ps}from"./@firebase_webchannel-wrapper@1.0.1-7bMYl0c-.js";const ys="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let At="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ge=new xa("@firebase/firestore");function it(){return Ge.logLevel}function g(r,...e){if(Ge.logLevel<=ye.DEBUG){const t=e.map(Vr);Ge.debug(`Firestore (${At}): ${r}`,...t)}}function te(r,...e){if(Ge.logLevel<=ye.ERROR){const t=e.map(Vr);Ge.error(`Firestore (${At}): ${r}`,...t)}}function Ke(r,...e){if(Ge.logLevel<=ye.WARN){const t=e.map(Vr);Ge.warn(`Firestore (${At}): ${r}`,...t)}}function Vr(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function A(r="Unexpected state"){const e=`FIRESTORE (${At}) INTERNAL ASSERTION FAILED: `+r;throw te(e),new Error(e)}function w(r,e){r||A()}function R(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Ca{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _e{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ga{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(W.UNAUTHENTICATED))}shutdown(){}}class Ka{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class za{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){w(this.o===void 0);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new _e;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _e,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _e)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(w(typeof n.accessToken=="string"),new bi(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return w(e===null||typeof e=="string"),new W(e)}}class Qa{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $a{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Qa(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ja{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wa{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){w(this.o===void 0);const n=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(w(typeof t.token=="string"),this.R=t.token,new ja(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ha(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Si{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Ha(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function V(r,e){return r<e?-1:r>e?1:0}function ft(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function Di(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new U(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class v{constructor(e){this.timestamp=e}static fromTimestamp(e){return new v(e)}static min(){return new v(new U(0,0))}static max(){return new v(new U(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lt{constructor(e,t,n){t===void 0?t=0:t>e.length&&A(),n===void 0?n=e.length-t:n>e.length-t&&A(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Lt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Lt?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class N extends Lt{construct(e,t,n){return new N(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new N(t)}static emptyPath(){return new N([])}}const Ya=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class L extends Lt{construct(e,t,n){return new L(e,t,n)}static isValidIdentifier(e){return Ya.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),L.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new L(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new L(t)}static emptyPath(){return new L([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class y{constructor(e){this.path=e}static fromPath(e){return new y(N.fromString(e))}static fromName(e){return new y(N.fromString(e).popFirst(5))}static empty(){return new y(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&N.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return N.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new y(new N(e.slice()))}}/**
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
 */class In{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ar(r){return r.fields.find(e=>e.kind===2)}function Me(r){return r.fields.filter(e=>e.kind!==2)}In.UNKNOWN_ID=-1;class ln{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ut{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ut(0,ue.min())}}function Ja(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=v.fromTimestamp(n===1e9?new U(t+1,0):new U(t,n));return new ue(s,y.empty(),e)}function xi(r){return new ue(r.readTime,r.key,-1)}class ue{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ue(v.min(),y.empty(),-1)}static max(){return new ue(v.max(),y.empty(),-1)}}function Pr(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=y.comparator(r.documentKey,e.documentKey),t!==0?t:V(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ci="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ni{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Je(r){if(r.code!==m.FAILED_PRECONDITION||r.message!==Ci)throw r;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,n)=>{t(e)})}static reject(e){return new f((t,n)=>{n(e)})}static waitFor(e){return new f((t,n)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},u=>n(u))}),o=!0,i===s&&t()})}static or(e){let t=f.resolve(!1);for(const n of e)t=t.next(s=>s?f.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new f((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(l=>{o[c]=l,++a,a===i&&n(o)},l=>s(l))}})}static doWhile(e,t){return new f((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cn{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new _e,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new kt(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=br(n.target.error);this.V.reject(new kt(e,s))}}static open(e,t,n,s){try{return new Cn(t,e.transaction(s,n))}catch(i){throw new kt(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(g("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Za(t)}}class Ve{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Ve.S(yn())===12.2&&te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return g("SimpleDb","Removing database:",e),Oe(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Fa())return!1;if(Ve.v())return!0;const e=yn(),t=Ve.S(e),n=0<t&&t<10,s=ki(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new kt(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new p(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new p(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new kt(e,o))},s.onupgradeneeded=i=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Cn.open(this.db,e,i?"readonly":"readwrite",n),u=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ki(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Xa{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Oe(this.B.delete())}}class kt extends p{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ce(r){return r.name==="IndexedDbTransactionError"}class Za{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(g("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Oe(n)}add(e){return g("SimpleDb","ADD",this.store.name,e,e),Oe(this.store.add(e))}get(e){return Oe(this.store.get(e)).next(t=>(t===void 0&&(t=null),g("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return g("SimpleDb","DELETE",this.store.name,e),Oe(this.store.delete(e))}count(){return g("SimpleDb","COUNT",this.store.name),Oe(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new f((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new f((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){g("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,a)=>a.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new f((n,s)=>{t.onerror=i=>{const o=br(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():n()}):n()}})}W(e,t){const n=[];return new f((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new Xa(a),c=t(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch(h=>(u.done(),f.reject(h)));n.push(l)}u.isDone?s():u.K===null?a.continue():a.continue(u.K)}}).next(()=>f.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Oe(r){return new f((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=br(n.target.error);t(s)}})}let Is=!1;function br(r){const e=Ve.S(yn());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Is||(Is=!0,setTimeout(()=>{throw n},0)),n}}return r}class eu{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){g("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{g("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Ce(t)?g("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Je(t)}await this.X(6e4)})}}class tu{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return f.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return g("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(a=>{s-=a,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(a=>(g("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=xi(i);Pr(o,n)>0&&(n=o)}),new ue(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ce{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ce.oe=-1;function Nn(r){return r==null}function qt(r){return r===0&&1/r==-1/0}function nu(r){return typeof r=="number"&&Number.isInteger(r)&&!qt(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ne(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ts(e)),e=ru(r.get(t),e);return Ts(e)}function ru(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ts(r){return r+""}function fe(r){const e=r.length;if(w(e>=2),e===2)return w(r.charAt(0)===""&&r.charAt(1)===""),N.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&A(),r.charAt(o+1)){case"":const a=r.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:A()}i=o+2}return new N(n)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Es=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
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
 */function hn(r,e){return[r,ne(e)]}function Fi(r,e,t){return[r,ne(e),t]}const su={},iu=["prefixPath","collectionGroup","readTime","documentId"],ou=["prefixPath","collectionGroup","documentId"],au=["collectionGroup","readTime","prefixPath","documentId"],uu=["canonicalId","targetId"],cu=["targetId","path"],lu=["path","targetId"],hu=["collectionId","parent"],du=["indexId","uid"],fu=["uid","sequenceNumber"],mu=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_u=["indexId","uid","orderedDocumentKey"],gu=["userId","collectionPath","documentId"],pu=["userId","collectionPath","largestBatchId"],yu=["userId","collectionGroup","largestBatchId"],Mi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Iu=[...Mi,"documentOverlays"],Oi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Li=Oi,Sr=[...Li,"indexConfiguration","indexState","indexEntries"],Tu=Sr,Eu=[...Sr,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ur extends Ni{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function $(r,e){const t=R(r);return Ve.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function As(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Xe(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ui(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class O{constructor(e,t){this.comparator=e,this.root=t||H.EMPTY}insert(e,t){return new O(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,H.BLACK,null,null))}remove(e){return new O(this.comparator,this.root.remove(e,this.comparator).copy(null,null,H.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sn(this.root,e,this.comparator,!1)}getReverseIterator(){return new sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sn(this.root,e,this.comparator,!0)}}class sn{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class H{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??H.RED,this.left=s??H.EMPTY,this.right=i??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new H(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return H.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,n,s,i){return this}insert(e,t,n){return new H(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class F{constructor(e){this.comparator=e,this.data=new O(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ws(this.data.getIterator())}getIteratorFrom(e){return new ws(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof F)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new F(this.comparator);return t.data=e,t}}class ws{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tt(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class oe{constructor(e){this.fields=e,e.sort(L.comparator)}static empty(){return new oe([])}unionWith(e){let t=new F(L.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ft(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class qi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qi("Invalid base64 string: "+i):i}}(e);return new Q(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Q(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const Au=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Te(r){if(w(!!r),typeof r=="string"){let e=0;const t=Au.exec(r);if(w(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:M(r.seconds),nanos:M(r.nanos)}}function M(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function be(r){return typeof r=="string"?Q.fromBase64String(r):Q.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function kn(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dr(r){const e=r.mapValue.fields.__previous_value__;return kn(e)?Dr(e):e}function Bt(r){const e=Te(r.mapValue.fields.__local_write_time__.timestampValue);return new U(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wu{constructor(e,t,n,s,i,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ze{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ze&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Re={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},dn={nullValue:"NULL_VALUE"};function Qe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?kn(r)?4:Bi(r)?9007199254740991:Fn(r)?10:11:A()}function ge(r,e){if(r===e)return!0;const t=Qe(r);if(t!==Qe(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Bt(r).isEqual(Bt(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Te(s.timestampValue),a=Te(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return be(s.bytesValue).isEqual(be(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=M(s.doubleValue),a=M(i.doubleValue);return o===a?qt(o)===qt(a):isNaN(o)&&isNaN(a)}return!1}(r,e);case 9:return ft(r.arrayValue.values||[],e.arrayValue.values||[],ge);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(As(o)!==As(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ge(o[u],a[u])))return!1;return!0}(r,e);default:return A()}}function Gt(r,e){return(r.values||[]).find(t=>ge(t,e))!==void 0}function Se(r,e){if(r===e)return 0;const t=Qe(r),n=Qe(e);if(t!==n)return V(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(r.booleanValue,e.booleanValue);case 2:return function(i,o){const a=M(i.integerValue||i.doubleValue),u=M(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(r,e);case 3:return vs(r.timestampValue,e.timestampValue);case 4:return vs(Bt(r),Bt(e));case 5:return V(r.stringValue,e.stringValue);case 6:return function(i,o){const a=be(i),u=be(o);return a.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=V(a[c],u[c]);if(l!==0)return l}return V(a.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const a=V(M(i.latitude),M(o.latitude));return a!==0?a:V(M(i.longitude),M(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Rs(r.arrayValue,e.arrayValue);case 10:return function(i,o){var a,u,c,l;const h=i.fields||{},d=o.fields||{},_=(a=h.value)===null||a===void 0?void 0:a.arrayValue,E=(u=d.value)===null||u===void 0?void 0:u.arrayValue,T=V(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((l=E==null?void 0:E.values)===null||l===void 0?void 0:l.length)||0);return T!==0?T:Rs(_,E)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Re.mapValue&&o===Re.mapValue)return 0;if(i===Re.mapValue)return 1;if(o===Re.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=V(u[h],l[h]);if(d!==0)return d;const _=Se(a[u[h]],c[l[h]]);if(_!==0)return _}return V(u.length,l.length)}(r.mapValue,e.mapValue);default:throw A()}}function vs(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return V(r,e);const t=Te(r),n=Te(e),s=V(t.seconds,n.seconds);return s!==0?s:V(t.nanos,n.nanos)}function Rs(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Se(t[s],n[s]);if(i)return i}return V(t.length,n.length)}function mt(r){return cr(r)}function cr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Te(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return be(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return y.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=cr(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${cr(t.fields[o])}`;return s+"}"}(r.mapValue):A()}function $e(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function lr(r){return!!r&&"integerValue"in r}function Kt(r){return!!r&&"arrayValue"in r}function Vs(r){return!!r&&"nullValue"in r}function Ps(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fn(r){return!!r&&"mapValue"in r}function Fn(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ft(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Xe(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ft(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ft(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Bi(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Gi={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function vu(r){return"nullValue"in r?dn:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?$e(ze.empty(),y.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Fn(r)?Gi:{mapValue:{}}:A()}function Ru(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?$e(ze.empty(),y.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Gi:"mapValue"in r?Fn(r)?{mapValue:{}}:Re:A()}function bs(r,e){const t=Se(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ss(r,e){const t=Se(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X{constructor(e){this.value=e}static empty(){return new X({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ft(t)}setAll(e){let t=L.emptyPath(),n={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=Ft(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());fn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];fn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Xe(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new X(Ft(this.value))}}function Ki(r){const e=[];return Xe(r.fields,(t,n)=>{const s=new L([t]);if(fn(n)){const i=Ki(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class G{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new G(e,0,v.min(),v.min(),v.min(),X.empty(),0)}static newFoundDocument(e,t,n,s){return new G(e,1,t,v.min(),n,s,0)}static newNoDocument(e,t){return new G(e,2,t,v.min(),v.min(),X.empty(),0)}static newUnknownDocument(e,t){return new G(e,3,t,v.min(),v.min(),X.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(v.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=X.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=X.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=v.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof G&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class De{constructor(e,t){this.position=e,this.inclusive=t}}function Ds(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=y.comparator(y.fromName(o.referenceValue),t.key):n=Se(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function xs(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ge(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vu(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zi{}class S extends zi{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Pu(e,t,n):t==="array-contains"?new Du(e,n):t==="in"?new Yi(e,n):t==="not-in"?new xu(e,n):t==="array-contains-any"?new Cu(e,n):new S(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new bu(e,n):new Su(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Se(t,this.value)):t!==null&&Qe(this.value)===Qe(t)&&this.matchesComparison(Se(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class k extends zi{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new k(e,t)}matches(e){return _t(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _t(r){return r.op==="and"}function hr(r){return r.op==="or"}function xr(r){return Qi(r)&&_t(r)}function Qi(r){for(const e of r.filters)if(e instanceof k)return!1;return!0}function dr(r){if(r instanceof S)return r.field.canonicalString()+r.op.toString()+mt(r.value);if(xr(r))return r.filters.map(e=>dr(e)).join(",");{const e=r.filters.map(t=>dr(t)).join(",");return`${r.op}(${e})`}}function $i(r,e){return r instanceof S?function(n,s){return s instanceof S&&n.op===s.op&&n.field.isEqual(s.field)&&ge(n.value,s.value)}(r,e):r instanceof k?function(n,s){return s instanceof k&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,a)=>i&&$i(o,s.filters[a]),!0):!1}(r,e):void A()}function ji(r,e){const t=r.filters.concat(e);return k.create(t,r.op)}function Wi(r){return r instanceof S?function(t){return`${t.field.canonicalString()} ${t.op} ${mt(t.value)}`}(r):r instanceof k?function(t){return t.op.toString()+" {"+t.getFilters().map(Wi).join(" ,")+"}"}(r):"Filter"}class Pu extends S{constructor(e,t,n){super(e,t,n),this.key=y.fromName(n.referenceValue)}matches(e){const t=y.comparator(e.key,this.key);return this.matchesComparison(t)}}class bu extends S{constructor(e,t){super(e,"in",t),this.keys=Hi("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Su extends S{constructor(e,t){super(e,"not-in",t),this.keys=Hi("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hi(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>y.fromName(n.referenceValue))}class Du extends S{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kt(t)&&Gt(t.arrayValue,this.value)}}class Yi extends S{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gt(this.value.arrayValue,t)}}class xu extends S{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gt(this.value.arrayValue,t)}}class Cu extends S{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Gt(this.value.arrayValue,n))}}/**
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
 */class Nu{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function fr(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Nu(r,e,t,n,s,i,o)}function je(r){const e=R(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>dr(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Nn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>mt(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>mt(n)).join(",")),e.ue=t}return e.ue}function jt(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Vu(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!$i(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!xs(r.startAt,e.startAt)&&xs(r.endAt,e.endAt)}function Tn(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function En(r,e){return r.filters.filter(t=>t instanceof S&&t.field.isEqual(e))}function Cs(r,e,t){let n=dn,s=!0;for(const i of En(r,e)){let o=dn,a=!0;switch(i.op){case"<":case"<=":o=vu(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=dn}bs({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];bs({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Ns(r,e,t){let n=Re,s=!0;for(const i of En(r,e)){let o=Re,a=!0;switch(i.op){case">=":case">":o=Ru(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Re}Ss({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Ss({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ne{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ku(r,e,t,n,s,i,o,a){return new Ne(r,e,t,n,s,i,o,a)}function Wt(r){return new Ne(r)}function ks(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Cr(r){return r.collectionGroup!==null}function ht(r){const e=R(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new F(L.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new zt(i,n))}),t.has(L.keyField().canonicalString())||e.ce.push(new zt(L.keyField(),n))}return e.ce}function le(r){const e=R(r);return e.le||(e.le=Fu(e,ht(r))),e.le}function Fu(r,e){if(r.limitType==="F")return fr(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zt(s.field,i)});const t=r.endAt?new De(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new De(r.startAt.position,r.startAt.inclusive):null;return fr(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function mr(r,e){const t=r.filters.concat([e]);return new Ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function An(r,e,t){return new Ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Mn(r,e){return jt(le(r),le(e))&&r.limitType===e.limitType}function Ji(r){return`${je(le(r))}|lt:${r.limitType}`}function ot(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Wi(s)).join(", ")}]`),Nn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>mt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>mt(s)).join(",")),`Target(${n})`}(le(r))}; limitType=${r.limitType})`}function Ht(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of ht(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,a,u){const c=Ds(o,a,u);return o.inclusive?c<=0:c<0}(n.startAt,ht(n),s)||n.endAt&&!function(o,a,u){const c=Ds(o,a,u);return o.inclusive?c>=0:c>0}(n.endAt,ht(n),s))}(r,e)}function Mu(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xi(r){return(e,t)=>{let n=!1;for(const s of ht(r)){const i=Ou(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Ou(r,e,t){const n=r.field.isKeyField()?y.comparator(e.key,t.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Se(u,c):A()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ke{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xe(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Ui(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Lu=new O(y.comparator);function ae(){return Lu}const Zi=new O(y.comparator);function Dt(...r){let e=Zi;for(const t of r)e=e.insert(t.key,t);return e}function eo(r){let e=Zi;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function me(){return Mt()}function to(){return Mt()}function Mt(){return new ke(r=>r.toString(),(r,e)=>r.isEqual(e))}const Uu=new O(y.comparator),qu=new F(y.comparator);function P(...r){let e=qu;for(const t of r)e=e.add(t);return e}const Bu=new F(V);function Gu(){return Bu}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Nr(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qt(e)?"-0":e}}function no(r){return{integerValue:""+r}}function ro(r,e){return nu(e)?no(e):Nr(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class On{constructor(){this._=void 0}}function Ku(r,e,t){return r instanceof Qt?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kn(i)&&(i=Dr(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof gt?io(r,e):r instanceof pt?oo(r,e):function(s,i){const o=so(s,i),a=Fs(o)+Fs(s.Pe);return lr(o)&&lr(s.Pe)?no(a):Nr(s.serializer,a)}(r,e)}function zu(r,e,t){return r instanceof gt?io(r,e):r instanceof pt?oo(r,e):t}function so(r,e){return r instanceof yt?function(n){return lr(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Qt extends On{}class gt extends On{constructor(e){super(),this.elements=e}}function io(r,e){const t=ao(e);for(const n of r.elements)t.some(s=>ge(s,n))||t.push(n);return{arrayValue:{values:t}}}class pt extends On{constructor(e){super(),this.elements=e}}function oo(r,e){let t=ao(e);for(const n of r.elements)t=t.filter(s=>!ge(s,n));return{arrayValue:{values:t}}}class yt extends On{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Fs(r){return M(r.integerValue||r.doubleValue)}function ao(r){return Kt(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class uo{constructor(e,t){this.field=e,this.transform=t}}function Qu(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof gt&&s instanceof gt||n instanceof pt&&s instanceof pt?ft(n.elements,s.elements,ge):n instanceof yt&&s instanceof yt?ge(n.Pe,s.Pe):n instanceof Qt&&s instanceof Qt}(r.transform,e.transform)}class $u{constructor(e,t){this.version=e,this.transformResults=t}}class Z{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Z}static exists(e){return new Z(void 0,e)}static updateTime(e){return new Z(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mn(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ln{}function co(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Un(r.key,Z.none()):new wt(r.key,r.data,Z.none());{const t=r.data,n=X.empty();let s=new F(L.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Ee(r.key,n,new oe(s.toArray()),Z.none())}}function ju(r,e,t){r instanceof wt?function(s,i,o){const a=s.value.clone(),u=Os(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(r,e,t):r instanceof Ee?function(s,i,o){if(!mn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Os(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(lo(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ot(r,e,t,n){return r instanceof wt?function(i,o,a,u){if(!mn(i.precondition,o))return a;const c=i.value.clone(),l=Ls(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ee?function(i,o,a,u){if(!mn(i.precondition,o))return a;const c=Ls(i.fieldTransforms,u,o),l=o.data;return l.setAll(lo(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(r,e,t,n):function(i,o,a){return mn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(r,e,t)}function Wu(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=so(n.transform,s||null);i!=null&&(t===null&&(t=X.empty()),t.set(n.field,i))}return t||null}function Ms(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ft(n,s,(i,o)=>Qu(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wt extends Ln{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ee extends Ln{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lo(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Os(r,e,t){const n=new Map;w(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,zu(o,a,t[s]))}return n}function Ls(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Ku(i,o,e))}return n}class Un extends Ln{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ho extends Ln{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kr{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ju(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ot(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ot(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=to();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=co(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(v.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),P())}isEqual(e){return this.batchId===e.batchId&&ft(this.mutations,e.mutations,(t,n)=>Ms(t,n))&&ft(this.baseMutations,e.baseMutations,(t,n)=>Ms(t,n))}}class Fr{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){w(e.mutations.length===n.length);let s=function(){return Uu}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Fr(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Mr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hu{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var z,x;function Yu(r){switch(r){default:return A();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function fo(r){if(r===void 0)return te("GRPC error has no .code"),m.UNKNOWN;switch(r){case z.OK:return m.OK;case z.CANCELLED:return m.CANCELLED;case z.UNKNOWN:return m.UNKNOWN;case z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case z.INTERNAL:return m.INTERNAL;case z.UNAVAILABLE:return m.UNAVAILABLE;case z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case z.NOT_FOUND:return m.NOT_FOUND;case z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case z.ABORTED:return m.ABORTED;case z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case z.DATA_LOSS:return m.DATA_LOSS;default:return A()}}(x=z||(z={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ju(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Xu=new lt([4294967295,4294967295],0);function Us(r){const e=Ju().encode(r),t=new Ma;return t.update(e),new Uint8Array(t.digest())}function qs(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lt([t,n],0),new lt([s,i],0)]}class Or{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new xt(`Invalid padding: ${t}`);if(n<0)throw new xt(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new xt(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new xt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=lt.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(lt.fromNumber(n)));return s.compare(Xu)===1&&(s=new lt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Us(e),[n,s]=qs(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Or(i,s,t);return n.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Us(e),[n,s]=qs(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class xt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qn{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Yt.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qn(v.min(),s,new O(V),ae(),P())}}class Yt{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Yt(n,t,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _n{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class mo{constructor(e,t){this.targetId=e,this.me=t}}class _o{constructor(e,t,n=Q.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Bs{constructor(){this.fe=0,this.ge=Ks(),this.pe=Q.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=P(),t=P(),n=P();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:A()}}),new Yt(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Ks()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,w(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zu{constructor(e){this.Le=e,this.Be=new Map,this.ke=ae(),this.qe=Gs(),this.Qe=new O(V)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Tn(i))if(n===0){const o=new y(i.path);this.Ue(t,o,G.newNoDocument(o,v.min()))}else w(n===1);else{const o=this.Ye(t);if(o!==n){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=be(n).toUint8Array()}catch(u){if(u instanceof qi)return Ke("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Or(o,s,i)}catch(u){return Ke(u instanceof xt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Tn(a.target)){const u=new y(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,G.newNoDocument(u,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=P();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new qn(e,t,this.Qe,this.ke,n);return this.ke=ae(),this.qe=Gs(),this.Qe=new O(V),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Bs,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new F(V),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||g("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Bs),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Gs(){return new O(y.comparator)}function Ks(){return new O(y.comparator)}const ec={asc:"ASCENDING",desc:"DESCENDING"},tc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nc={and:"AND",or:"OR"};class rc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _r(r,e){return r.useProto3Json||Nn(e)?e:{value:e}}function It(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function go(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function sc(r,e){return It(r,e.toTimestamp())}function re(r){return w(!!r),v.fromTimestamp(function(t){const n=Te(t);return new U(n.seconds,n.nanos)}(r))}function Lr(r,e){return gr(r,e).canonicalString()}function gr(r,e){const t=function(s){return new N(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function po(r){const e=N.fromString(r);return w(Vo(e)),e}function wn(r,e){return Lr(r.databaseId,e.path)}function Be(r,e){const t=po(e);if(t.get(1)!==r.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new y(To(t))}function yo(r,e){return Lr(r.databaseId,e)}function Io(r){const e=po(r);return e.length===4?N.emptyPath():To(e)}function pr(r){return new N(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function To(r){return w(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function zs(r,e,t){return{name:wn(r,e),fields:t.value.mapValue.fields}}function ic(r,e,t){const n=Be(r,e.name),s=re(e.updateTime),i=e.createTime?re(e.createTime):v.min(),o=new X({mapValue:{fields:e.fields}}),a=G.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function oc(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(w(l===void 0||typeof l=="string"),Q.fromBase64String(l||"")):(w(l===void 0||l instanceof Buffer||l instanceof Uint8Array),Q.fromUint8Array(l||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:fo(c.code);return new p(l,c.message||"")}(o);t=new _o(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Be(r,n.document.name),i=re(n.document.updateTime),o=n.document.createTime?re(n.document.createTime):v.min(),a=new X({mapValue:{fields:n.document.fields}}),u=G.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new _n(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Be(r,n.document),i=n.readTime?re(n.readTime):v.min(),o=G.newNoDocument(s,i),a=n.removedTargetIds||[];t=new _n([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Be(r,n.document),i=n.removedTargetIds||[];t=new _n([],i,s,null)}else{if(!("filter"in e))return A();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Hu(s,i),a=n.targetId;t=new mo(a,o)}}return t}function vn(r,e){let t;if(e instanceof wt)t={update:zs(r,e.key,e.value)};else if(e instanceof Un)t={delete:wn(r,e.key)};else if(e instanceof Ee)t={update:zs(r,e.key,e.data),updateMask:dc(e.fieldMask)};else{if(!(e instanceof ho))return A();t={verify:wn(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const a=o.transform;if(a instanceof Qt)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yt)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw A()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A()}(r,e.precondition)),t}function yr(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Z.updateTime(re(i.updateTime)):i.exists!==void 0?Z.exists(i.exists):Z.none()}(e.currentDocument):Z.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let u=null;if("setToServerValue"in a)w(a.setToServerValue==="REQUEST_TIME"),u=new Qt;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];u=new gt(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];u=new pt(l)}else"increment"in a?u=new yt(o,a.increment):A();const c=L.fromServerFormat(a.fieldPath);return new uo(c,u)}(r,s)):[];if(e.update){e.update.name;const s=Be(r,e.update.name),i=new X({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new oe(c.map(l=>L.fromServerFormat(l)))}(e.updateMask);return new Ee(s,i,o,t,n)}return new wt(s,i,t,n)}if(e.delete){const s=Be(r,e.delete);return new Un(s,t)}if(e.verify){const s=Be(r,e.verify);return new ho(s,t)}return A()}function ac(r,e){return r&&r.length>0?(w(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?re(s.updateTime):re(i);return o.isEqual(v.min())&&(o=re(i)),new $u(o,s.transformResults||[])}(t,e))):[]}function Eo(r,e){return{documents:[yo(r,e.path)]}}function Ao(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=yo(r,s);const i=function(c){if(c.length!==0)return Ro(k.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:at(d.field),direction:cc(d.dir)}}(l))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=_r(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:s}}function wo(r){let e=Io(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){w(n===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(h){const d=vo(h);return d instanceof k&&xr(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(E){return new zt(ut(E.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Nn(d)?null:d}(t.limit));let u=null;t.startAt&&(u=function(h){const d=!!h.before,_=h.values||[];return new De(_,d)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const d=!h.before,_=h.values||[];return new De(_,d)}(t.endAt)),ku(e,s,o,i,a,"F",u,c)}function uc(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vo(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ut(t.unaryFilter.field);return S.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ut(t.unaryFilter.field);return S.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ut(t.unaryFilter.field);return S.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ut(t.unaryFilter.field);return S.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(r):r.fieldFilter!==void 0?function(t){return S.create(ut(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return k.create(t.compositeFilter.filters.map(n=>vo(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(r):A()}function cc(r){return ec[r]}function lc(r){return tc[r]}function hc(r){return nc[r]}function at(r){return{fieldPath:r.canonicalString()}}function ut(r){return L.fromServerFormat(r.fieldPath)}function Ro(r){return r instanceof S?function(t){if(t.op==="=="){if(Ps(t.value))return{unaryFilter:{field:at(t.field),op:"IS_NAN"}};if(Vs(t.value))return{unaryFilter:{field:at(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ps(t.value))return{unaryFilter:{field:at(t.field),op:"IS_NOT_NAN"}};if(Vs(t.value))return{unaryFilter:{field:at(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:at(t.field),op:lc(t.op),value:t.value}}}(r):r instanceof k?function(t){const n=t.getFilters().map(s=>Ro(s));return n.length===1?n[0]:{compositeFilter:{op:hc(t.op),filters:n}}}(r):A()}function dc(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vo(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ie{constructor(e,t,n,s,i=v.min(),o=v.min(),a=Q.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ie(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ie(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Po{constructor(e){this.ct=e}}function fc(r,e){let t;if(e.document)t=ic(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=y.fromSegments(e.noDocument.path),s=He(e.noDocument.readTime);t=G.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return A();{const n=y.fromSegments(e.unknownDocument.path),s=He(e.unknownDocument.version);t=G.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new U(s[0],s[1]);return v.fromTimestamp(i)}(e.readTime)),t}function Qs(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Rn(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:wn(i,o.key),fields:o.data.value.mapValue.fields,updateTime:It(i,o.version.toTimestamp()),createTime:It(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:We(e.version)};else{if(!e.isUnknownDocument())return A();n.unknownDocument={path:t.path.toArray(),version:We(e.version)}}return n}function Rn(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function We(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function He(r){const e=new U(r.seconds,r.nanoseconds);return v.fromTimestamp(e)}function Le(r,e){const t=(e.baseMutations||[]).map(i=>yr(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>yr(r.ct,i)),s=U.fromMillis(e.localWriteTimeMs);return new kr(e.batchId,s,t,n)}function Ct(r){const e=He(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?He(r.lastLimboFreeSnapshotVersion):v.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return w(i.documents.length===1),le(Wt(Io(i.documents[0])))}(r.query):function(i){return le(wo(i))}(r.query),new Ie(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Q.fromBase64String(r.resumeToken))}function bo(r,e){const t=We(e.snapshotVersion),n=We(e.lastLimboFreeSnapshotVersion);let s;s=Tn(e.target)?Eo(r.ct,e.target):Ao(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:je(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function So(r){const e=wo({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?An(e,e.limit,"L"):e}function rr(r,e){return new Mr(e.largestBatchId,yr(r.ct,e.overlayMutation))}function $s(r,e){const t=e.path.lastSegment();return[r,ne(e.path.popLast()),t]}function js(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:We(n.readTime),documentKey:ne(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class mc{getBundleMetadata(e,t){return Ws(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:He(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Ws(e).put(function(s){return{bundleId:s.id,createTime:We(re(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Hs(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:So(i.bundledQuery),readTime:He(i.readTime)}}(n)})}saveNamedQuery(e,t){return Hs(e).put(function(s){return{name:s.name,readTime:We(re(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ws(r){return $(r,"bundles")}function Hs(r){return $(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Bn{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Bn(e,n)}getOverlay(e,t){return Rt(e).get($s(this.userId,t)).next(n=>n?rr(this.serializer,n):null)}getOverlays(e,t){const n=me();return f.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const a=new Mr(t,o);s.push(this.ht(e,a))}),f.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(ne(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Rt(e).j("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,n){const s=me(),i=ne(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Rt(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=rr(this.serializer,u);s.set(c.getKey(),c)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=me();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Rt(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,l)=>{const h=rr(this.serializer,c);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}ht(e,t){return Rt(e).put(function(s,i,o){const[a,u,c]=$s(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:vn(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Rt(r){return $(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _c{Pt(e){return $(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Q.fromUint8Array(n):Q.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ue{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(M(e.integerValue));else if("doubleValue"in e){const n=M(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),qt(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=Te(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(be(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Bi(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Fn(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):A()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",a=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(M(a)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),y.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Ue.vt=new Ue;function gc(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Ys(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=gc(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class pc{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Ys(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Ys(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class yc{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Ic{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Vt{constructor(){this.jt=new pc,this.Ht=new yc(this.jt),this.Jt=new Ic(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class qe{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new qe(this.indexId,this.documentKey,this.arrayValue,n)}}function Ae(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Js(r.arrayValue,e.arrayValue),t!==0?t:(t=Js(r.directionalValue,e.directionalValue),t!==0?t:y.comparator(r.documentKey,e.documentKey)))}function Js(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Xs{constructor(e){this.Xt=new F((t,n)=>L.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(w(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ar(e);if(t!==void 0&&!this.sn(t))return!1;const n=Me(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=n[i];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new F(L.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ln(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ln(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ln(n.field,n.dir==="asc"?0:1)));return new In(In.UNKNOWN_ID,this.collectionId,t,Ut.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Do(r){var e,t;if(w(r instanceof S||r instanceof k),r instanceof S){if(r instanceof Yi){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>S.create(r.field,"==",i)))||[];return k.create(s,"or")}return r}const n=r.filters.map(s=>Do(s));return k.create(n,r.op)}function Tc(r){if(r.getFilters().length===0)return[];const e=Er(Do(r));return w(xo(e)),Ir(e)||Tr(e)?[e]:e.getFilters()}function Ir(r){return r instanceof S}function Tr(r){return r instanceof k&&xr(r)}function xo(r){return Ir(r)||Tr(r)||function(t){if(t instanceof k&&hr(t)){for(const n of t.getFilters())if(!Ir(n)&&!Tr(n))return!1;return!0}return!1}(r)}function Er(r){if(w(r instanceof S||r instanceof k),r instanceof S)return r;if(r.filters.length===1)return Er(r.filters[0]);const e=r.filters.map(n=>Er(n));let t=k.create(e,r.op);return t=Vn(t),xo(t)?t:(w(t instanceof k),w(_t(t)),w(t.filters.length>1),t.filters.reduce((n,s)=>Ur(n,s)))}function Ur(r,e){let t;return w(r instanceof S||r instanceof k),w(e instanceof S||e instanceof k),t=r instanceof S?e instanceof S?function(s,i){return k.create([s,i],"and")}(r,e):Zs(r,e):e instanceof S?Zs(e,r):function(s,i){if(w(s.filters.length>0&&i.filters.length>0),_t(s)&&_t(i))return ji(s,i.getFilters());const o=hr(s)?s:i,a=hr(s)?i:s,u=o.filters.map(c=>Ur(c,a));return k.create(u,"or")}(r,e),Vn(t)}function Zs(r,e){if(_t(e))return ji(e,r.getFilters());{const t=e.filters.map(n=>Ur(r,n));return k.create(t,"or")}}function Vn(r){if(w(r instanceof S||r instanceof k),r instanceof S)return r;const e=r.getFilters();if(e.length===1)return Vn(e[0]);if(Qi(r))return r;const t=e.map(s=>Vn(s)),n=[];return t.forEach(s=>{s instanceof S?n.push(s):s instanceof k&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:k.create(n,r.op)}/**
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
 */class Ec{constructor(){this.un=new qr}addToCollectionParentIndex(e,t){return this.un.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}deleteAllFieldIndexes(e){return f.resolve()}createTargetIndexes(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(ue.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(ue.min())}updateCollectionGroup(e,t,n){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class qr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new F(N.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new F(N.comparator)).toArray()}}/**
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
 */const on=new Uint8Array(0);class Ac{constructor(e,t){this.databaseId=t,this.cn=new qr,this.ln=new ke(n=>je(n),(n,s)=>jt(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:ne(s)};return ei(e).put(i)}return f.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Di(t),""],!1,!0);return ei(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(fe(o.parent))}return n})}addFieldIndex(e,t){const n=Pt(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=rt(e);return i.next(a=>{o.put(js(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Pt(e),s=rt(e),i=nt(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Pt(e),n=nt(e),s=rt(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return f.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Xs(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=nt(e);let s=!0;const i=new Map;return f.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=P();const a=[];return f.forEach(i,(u,c)=>{g("IndexedDbIndexManager",`Using index ${function(b){return`id=${b.indexId}|cg=${b.collectionGroup}|f=${b.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(u)} to execute ${je(t)}`);const l=function(b,q){const K=ar(q);if(K===void 0)return null;for(const B of En(b,K.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,u),h=function(b,q){const K=new Map;for(const B of Me(q))for(const Y of En(b,B.fieldPath))switch(Y.op){case"==":case"in":K.set(B.fieldPath.canonicalString(),Y.value);break;case"not-in":case"!=":return K.set(B.fieldPath.canonicalString(),Y.value),Array.from(K.values())}return null}(c,u),d=function(b,q){const K=[];let B=!0;for(const Y of Me(q)){const et=Y.kind===0?Cs(b,Y.fieldPath,b.startAt):Ns(b,Y.fieldPath,b.startAt);K.push(et.value),B&&(B=et.inclusive)}return new De(K,B)}(c,u),_=function(b,q){const K=[];let B=!0;for(const Y of Me(q)){const et=Y.kind===0?Ns(b,Y.fieldPath,b.endAt):Cs(b,Y.fieldPath,b.endAt);K.push(et.value),B&&(B=et.inclusive)}return new De(K,B)}(c,u),E=this.In(u,c,d),T=this.In(u,c,_),I=this.Tn(u,c,h),D=this.En(u.indexId,l,E,d.inclusive,T,_.inclusive,I);return f.forEach(D,C=>n.G(C,t.limit).next(b=>{b.forEach(q=>{const K=y.fromSegments(q.documentKey);o.has(K)||(o=o.add(K),a.push(K))})}))}).next(()=>a)}return f.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Tc(k.create(e.filters,"and")).map(n=>fr(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,a){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),c=u/(t!=null?t.length:1),l=[];for(let h=0;h<u;++h){const d=t?this.dn(t[h/c]):on,_=this.An(e,d,n[h%c],s),E=this.Rn(e,d,i[h%c],o),T=a.map(I=>this.An(e,d,I,!0));l.push(...this.createRange(_,E,T))}return l}An(e,t,n,s){const i=new qe(e,y.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new qe(e,y.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new Xs(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)n.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return f.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(u){let c=new F(L.comparator),l=!1;for(const h of u.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:c=c.add(d.field));for(const h of u.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(l?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Vt;for(const s of Me(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);Ue.vt.It(i,o)}return n.zt()}dn(e){const t=new Vt;return Ue.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Vt;return Ue.vt.It($e(this.databaseId,t),n.Yt(function(i){const o=Me(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Vt);let i=0;for(const o of Me(e)){const a=n[i++];for(const u of s)if(this.fn(t,o.fieldPath)&&Kt(a))s=this.gn(s,o,a);else{const c=u.Yt(o.kind);Ue.vt.It(a,c)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const u=new Vt;u.seed(a.zt()),Ue.vt.It(o,u.Yt(t.kind)),i.push(u)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof S&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Pt(e),s=rt(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return f.forEach(i,a=>s.get([a.indexId,this.uid]).next(u=>{o.push(function(l,h){const d=h?new Ut(h.sequenceNumber,new ue(He(h.readTime),new y(fe(h.documentKey)),h.largestBatchId)):Ut.empty(),_=l.fields.map(([E,T])=>new ln(L.fromServerFormat(E),T));return new In(l.indexId,l.collectionGroup,_,d)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:V(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Pt(e),i=rt(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,u=>i.put(js(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return f.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(n.set(s.collectionGroup,a),f.forEach(a,u=>this.wn(e,s,u).next(c=>{const l=this.Sn(i,u);return c.isEqual(l)?f.resolve():this.bn(e,i,u,c,l)}))))})}Dn(e,t,n,s){return nt(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return nt(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=nt(e);let i=new F(Ae);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,a)=>{i=i.add(new qe(n.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Sn(e,t){let n=new F(Ae);const s=this.Vn(t,e);if(s==null)return n;const i=ar(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Kt(o))for(const a of o.arrayValue.values||[])n=n.add(new qe(t.indexId,e.key,this.dn(a),s))}else n=n.add(new qe(t.indexId,e.key,on,s));return n}bn(e,t,n,s,i){g("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,l,h,d){const _=u.getIterator(),E=c.getIterator();let T=tt(_),I=tt(E);for(;T||I;){let D=!1,C=!1;if(T&&I){const b=l(T,I);b<0?C=!0:b>0&&(D=!0)}else T!=null?C=!0:D=!0;D?(h(I),I=tt(E)):C?(d(T),T=tt(_)):(T=tt(_),I=tt(E))}}(s,i,Ae,a=>{o.push(this.Dn(e,t,n,a))},a=>{o.push(this.vn(e,t,n,a))}),f.waitFor(o)}yn(e){let t=1;return rt(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,a)=>Ae(o,a)).filter((o,a,u)=>!a||Ae(o,u[a-1])!==0);const s=[];s.push(e);for(const o of n){const a=Ae(o,e),u=Ae(o,t);if(a===0)s[0]=e.Zt();else if(a>0&&u<0)s.push(o),s.push(o.Zt());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,on,[]],u=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,on,[]];i.push(IDBKeyRange.bound(a,u))}return i}Cn(e,t){return Ae(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ti)}getMinOffset(e,t){return f.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||A())).next(ti)}}function ei(r){return $(r,"collectionParents")}function nt(r){return $(r,"indexEntries")}function Pt(r){return $(r,"indexConfiguration")}function rt(r){return $(r,"indexState")}function ti(r){w(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Pr(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ue(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ni={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ie{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ie(e,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Co(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=n.J({range:o},(l,h,d)=>(a++,d.delete()));i.push(u.next(()=>{w(a===1)}));const c=[];for(const l of t.mutations){const h=Fi(e,l.key.path,t.batchId);i.push(s.delete(h)),c.push(l.key)}return f.waitFor(i).next(()=>c)}function Pn(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw A();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ie.DEFAULT_COLLECTION_PERCENTILE=10,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ie.DEFAULT=new ie(41943040,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ie.DISABLED=new ie(-1,0,0);class Gn{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){w(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Gn(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return we(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=ct(e),o=we(e);return o.add({}).next(a=>{w(typeof a=="number");const u=new kr(a,t,n,s),c=function(_,E,T){const I=T.baseMutations.map(C=>vn(_.ct,C)),D=T.mutations.map(C=>vn(_.ct,C));return{userId:E,batchId:T.batchId,localWriteTimeMs:T.localWriteTime.toMillis(),baseMutations:I,mutations:D}}(this.serializer,this.userId,u),l=[];let h=new F((d,_)=>V(d.canonicalString(),_.canonicalString()));for(const d of s){const _=Fi(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(i.put(_,su))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),f.waitFor(l).next(()=>u)})}lookupMutationBatch(e,t){return we(e).get(t).next(n=>n?(w(n.userId===this.userId),Le(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?f.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return we(e).J({index:"userMutationsIndex",range:s},(o,a,u)=>{a.userId===this.userId&&(w(a.batchId>=n),i=Le(this.serializer,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return we(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return we(e).U("userMutationsIndex",t).next(n=>n.map(s=>Le(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=hn(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return ct(e).J({range:s},(o,a,u)=>{const[c,l,h]=o,d=fe(l);if(c===this.userId&&t.path.isEqual(d))return we(e).get(h).next(_=>{if(!_)throw A();w(_.userId===this.userId),i.push(Le(this.serializer,_))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new F(V);const s=[];return t.forEach(i=>{const o=hn(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=ct(e).J({range:a},(c,l,h)=>{const[d,_,E]=c,T=fe(_);d===this.userId&&i.path.isEqual(T)?n=n.add(E):h.done()});s.push(u)}),f.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=hn(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new F(V);return ct(e).J({range:o},(u,c,l)=>{const[h,d,_]=u,E=fe(d);h===this.userId&&n.isPrefixOf(E)?E.length===s&&(a=a.add(_)):l.done()}).next(()=>this.xn(e,a))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(we(e).get(i).next(o=>{if(o===null)throw A();w(o.userId===this.userId),n.push(Le(this.serializer,o))}))}),f.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Co(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),f.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ct(e).J({range:n},(i,o,a)=>{if(i[0]===this.userId){const u=fe(i[1]);s.push(u)}else a.done()}).next(()=>{w(s.length===0)})})}containsKey(e,t){return No(e,this.userId,t)}Nn(e){return ko(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function No(r,e,t){const n=hn(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return ct(r).J({range:i,H:!0},(a,u,c)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),c.done()}).next(()=>o)}function we(r){return $(r,"mutations")}function ct(r){return $(r,"documentMutations")}function ko(r){return $(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ye{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ye(0)}static kn(){return new Ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wc{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Ye(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>v.fromTimestamp(new U(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>st(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(w(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return st(e).J((o,a)=>{const u=Ct(a);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>f.waitFor(i)).next(()=>s)}forEachTarget(e,t){return st(e).J((n,s)=>{const i=Ct(s);t(i)})}qn(e){return ri(e).get("targetGlobalKey").next(t=>(w(t!==null),t))}Qn(e,t){return ri(e).put("targetGlobalKey",t)}Kn(e,t){return st(e).put(bo(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=je(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return st(e).J({range:s,index:"queryTargetsIndex"},(o,a,u)=>{const c=Ct(a);jt(t,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=ve(e);return t.forEach(o=>{const a=ne(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))}),f.waitFor(s)}removeMatchingKeys(e,t,n){const s=ve(e);return f.forEach(t,i=>{const o=ne(i.path);return f.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=ve(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=ve(e);let i=P();return s.J({range:n,H:!0},(o,a,u)=>{const c=fe(o[1]),l=new y(c);i=i.add(l)}).next(()=>i)}containsKey(e,t){const n=ne(t.path),s=IDBKeyRange.bound([n],[Di(n)],!1,!0);let i=0;return ve(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}ot(e,t){return st(e).get(t).next(n=>n?Ct(n):null)}}function st(r){return $(r,"targets")}function ri(r){return $(r,"targetGlobal")}function ve(r){return $(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function si([r,e],[t,n]){const s=V(r,t);return s===0?V(e,n):s}class vc{constructor(e){this.Un=e,this.buffer=new F(si),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();si(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rc{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){g("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ce(t)?g("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Je(t)}await this.Hn(3e5)})}}class Vc{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return f.resolve(ce.oe);const n=new vc(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(g("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(ni)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ni):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(n=h,a=Date.now(),this.removeTargets(e,n,t))).next(h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(h=>(c=Date.now(),it()<=ye.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function Pc(r,e){return new Vc(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class bc{constructor(e,t){this.db=e,this.garbageCollector=Pc(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return an(e,n)}removeReference(e,t,n){return an(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return an(e,t)}nr(e,t){return function(s,i){let o=!1;return ko(s).Y(a=>No(s,a,i).next(u=>(u&&(o=!0),f.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,v.min()),ve(e).delete(function(h){return[0,ne(h.path)]}(o))))});s.push(u)}}).next(()=>f.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return an(e,t)}tr(e,t){const n=ve(e);let s,i=ce.oe;return n.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==ce.oe&&t(new y(fe(s)),i),i=c,s=u):i=ce.oe}).next(()=>{i!==ce.oe&&t(new y(fe(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function an(r,e){return ve(r).put(function(n,s){return{targetId:0,path:ne(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fo{constructor(){this.changes=new ke(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,G.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?f.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sc{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Fe(e).put(n)}removeEntry(e,t,n){return Fe(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Rn(o),a[a.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=G.newInvalidDocument(t);return Fe(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(bt(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:G.newInvalidDocument(t)};return Fe(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(bt(t))},(s,i)=>{n={document:this.ir(t,i),size:Pn(i)}}).next(()=>n)}getEntries(e,t){let n=ae();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=ae(),s=new O(y.comparator);return this._r(e,t,(i,o)=>{const a=this.ir(i,o);n=n.insert(i,a),s=s.insert(i,Pn(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return f.resolve();let s=new F(ai);t.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(bt(s.first()),bt(s.last())),o=s.getIterator();let a=o.getNext();return Fe(e).J({index:"documentKeyIndex",range:i},(u,c,l)=>{const h=y.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&ai(a,h)<0;)n(a,null),a=o.getNext();a&&a.isEqual(h)&&(n(a,c),a=o.hasNext()?o.getNext():null),a?l.$(bt(a)):l.done()}).next(()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Rn(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Fe(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{i==null||i.incrementDocumentReadCount(c.length);let l=ae();for(const h of c){const d=this.ir(y.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Ht(t,d)||s.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,n,s){let i=ae();const o=oi(t,n),a=oi(t,ue.max());return Fe(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,l)=>{const h=this.ir(y.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new Dc(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ii(e).get("remoteDocumentGlobalKey").next(t=>(w(!!t),t))}rr(e,t){return ii(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=fc(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(v.min())))return n}return G.newInvalidDocument(e)}}function Mo(r){return new Sc(r)}class Dc extends Fo{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new ke(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new F((i,o)=>V(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=Qs(this.cr.serializer,o);s=s.add(i.path.popLast());const c=Pn(u);n+=c-a.size,t.push(this.cr.addEntry(e,i,u))}else if(n-=a.size,this.trackRemovals){const u=Qs(this.cr.serializer,o.convertToNoDocument(v.min()));t.push(this.cr.addEntry(e,i,u))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),f.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function ii(r){return $(r,"remoteDocumentGlobal")}function Fe(r){return $(r,"remoteDocumentsV14")}function bt(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function oi(r,e){const t=e.documentKey.path.toArray();return[r,Rn(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ai(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=V(t[i],n[i]),s)return s;return s=V(t.length,n.length),s||(s=V(t[t.length-2],n[n.length-2]),s||V(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class xc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oo{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Ot(n.mutation,s,oe.empty(),U.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,P()).next(()=>n))}getLocalViewOfDocuments(e,t,n=P()){const s=me();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Dt();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=me();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,P()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,n,s){let i=ae();const o=Mt(),a=function(){return Mt()}();return t.forEach((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Ee)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Ot(l.mutation,c,l.mutation.getFieldMask(),U.now())):o.set(c.key,oe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),t.forEach((c,l)=>{var h;return a.set(c,new xc(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const n=Mt();let s=new O((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||oe.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||P()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=to();l.forEach(d=>{if(!i.has(d)){const _=co(t.get(d),n.get(d));_!==null&&h.set(d,_),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return f.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cr(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):f.resolve(me());let a=-1,u=i;return o.next(c=>f.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,P())).next(l=>({batchId:a,changes:eo(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new y(t)).next(n=>{let s=Dt();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Dt();return this.indexManager.getCollectionParents(e,i).next(a=>f.forEach(a,u=>{const c=function(h,d){return new Ne(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,G.newInvalidDocument(l)))});let a=Dt();return o.forEach((u,c)=>{const l=i.get(u);l!==void 0&&Ot(l.mutation,c,oe.empty(),U.now()),Ht(t,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Cc{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return f.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:re(s.createTime)}}(t)),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:So(s.bundledQuery),readTime:re(s.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Nc{constructor(){this.overlays=new O(y.comparator),this.Ir=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const n=me();return f.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),f.resolve()}getOverlaysForCollection(e,t,n){const s=me(),i=t.length+1,o=new y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return f.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new O((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=me(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=me(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return f.resolve(a)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Mr(t,n));let i=this.Ir.get(t);i===void 0&&(i=P(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kc{constructor(){this.sessionToken=Q.EMPTY_BYTE_STRING}getSessionToken(e){return f.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,f.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Br{constructor(){this.Tr=new F(j.Er),this.dr=new F(j.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new j(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new j(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new y(new N([])),n=new j(t,e),s=new j(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new y(new N([])),n=new j(t,e),s=new j(t,e+1);let i=P();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new j(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class j{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return y.comparator(e.key,t.key)||V(e.wr,t.wr)}static Ar(e,t){return V(e.wr,t.wr)||y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new F(j.Er)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kr(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new j(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new j(t,0),s=new j(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const a=this.Dr(o.wr);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new F(V);return t.forEach(s=>{const i=new j(s,0),o=new j(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{n=n.add(a.wr)})}),f.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;y.isDocumentKey(i)||(i=i.child(""));const o=new j(new y(i),0);let a=new F(V);return this.br.forEachWhile(u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),f.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){w(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return f.forEach(t.mutations,s=>{const i=new j(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new j(t,0),s=this.br.firstAfterOrEqual(n);return f.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mc{constructor(e){this.Mr=e,this.docs=function(){return new O(y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return f.resolve(n?n.document.mutableCopy():G.newInvalidDocument(t))}getEntries(e,t){let n=ae();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():G.newInvalidDocument(s))}),f.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=ae();const o=t.path,a=new y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Pr(xi(l),n)<=0||(s.has(l.key)||Ht(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,n,s){A()}Or(e,t){return f.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Oc(this)}getSize(e){return f.resolve(this.size)}}class Oc extends Fo{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),f.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lc{constructor(e){this.persistence=e,this.Nr=new ke(t=>je(t),jt),this.lastRemoteSnapshotVersion=v.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Br,this.targetCount=0,this.kr=Ye.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),f.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ye(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Kn(t),f.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),f.waitFor(i).next(()=>s)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return f.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),f.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),f.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return f.resolve(n)}containsKey(e,t){return f.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lo{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ce(0),this.Kr=!1,this.Kr=!0,this.$r=new kc,this.referenceDelegate=e(this),this.Ur=new Lc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(s){return new Mc(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Po(t),this.Gr=new Cc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Fc(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const s=new Uc(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return f.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class Uc extends Ni{constructor(e){super(),this.currentSequenceNumber=e}}class Kn{constructor(e){this.persistence=e,this.Jr=new Br,this.Yr=null}static Zr(e){return new Kn(e)}get Xr(){if(this.Yr)return this.Yr;throw A()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),f.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),f.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Xr,n=>{const s=y.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,v.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return f.or([()=>f.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class qc{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Cn("createOrUpgrade",t);n<1&&s>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Es,{unique:!0}),u.createObjectStore("documentMutations")}(e),ui(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return n<3&&s>=3&&(n!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),ui(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:v.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(l=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Es,{unique:!0});const h=c.store("mutations"),d=l.map(_=>h.put(_));return f.waitFor(d)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:gu});c.createIndex("collectionPathOverlayIndex",pu,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",yu,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:iu});c.createIndex("documentKeyIndex",ou),c.createIndex("collectionGroupIndex",au)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:du}).createIndex("sequenceNumberIndex",fu,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:mu}).createIndex("documentKeyIndex",_u,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Pn(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>f.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(a=>f.forEach(a,u=>{w(u.userId===i.userId);const c=Le(this.serializer,u);return Co(e,i.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,a)=>{const u=new N(o),c=function(h){return[0,ne(h)]}(u);i.push(t.get(c).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:ne(h),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:hu});const n=t.store("collectionParents"),s=new qr,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return n.put({collectionId:a,parent:ne(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new N(o);return i(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const l=fe(a);return i(l.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=Ct(s),o=bo(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const a=t.store("remoteDocumentsV14"),u=function(h){return h.document?new y(N.fromString(h.document.name).popFirst(5)):h.noDocument?y.fromSegments(h.noDocument.path):h.unknownDocument?y.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(c))}).next(()=>f.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=Mo(this.serializer),i=new Lo(Kn.Zr,this.serializer.ct);return n.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:P();Le(this.serializer,u).keys().forEach(h=>l=l.add(h)),a.set(u.userId,l)}),f.forEach(a,(u,c)=>{const l=new W(c),h=Bn.lt(this.serializer,l),d=i.getIndexManager(l),_=Gn.lt(l,this.serializer,d,i.referenceDelegate);return new Oo(s,_,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ur(t,ce.oe),u).next()})})}}function ui(r){r.createObjectStore("targetDocuments",{keyPath:cu}).createIndex("documentTargetsIndex",lu,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",uu,{unique:!0}),r.createObjectStore("targetGlobal")}const sr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Gr{constructor(e,t,n,s,i,o,a,u,c,l,h=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=a,this.ci=c,this.li=l,this.hi=h,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!Gr.D())throw new p(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new bc(this,s),this.Ai=t+"main",this.serializer=new Po(u),this.Ri=new Ve(this.Ai,this.hi,new qc(this.serializer)),this.$r=new _c,this.Ur=new wc(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Mo(this.serializer),this.Gr=new mc,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,l===!1&&te("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,sr);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new ce(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>un(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Ce(e))return g("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return g("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return St(e).get("owner").next(t=>f.resolve(this.vi(t)))}Ci(e){return un(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=$(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>n.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?f.resolve(!0):St(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,sr);return!1}}return!(!this.networkEnabled||!this.inForeground)||un(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&g("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ur(e,ce.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>un(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Gn.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ac(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Bn.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){g("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(u){return u===17?Eu:u===16?Tu:u===15?Sr:u===14?Li:u===13?Oi:u===12?Iu:u===11?Mi:void A()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,a=>(o=new ur(a,this.Qr?this.Qr.next():ce.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw te(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new p(m.FAILED_PRECONDITION,Ci);return n(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>n(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return St(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(m.FAILED_PRECONDITION,sr)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return St(e).put("owner",t)}static D(){return Ve.D()}bi(e){const t=St(e);return t.get("owner").next(n=>this.vi(n)?(g("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(te(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Pi()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return g("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return te("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){te("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function St(r){return $(r,"owner")}function un(r){return $(r,"clientMetadata")}function Bc(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kr{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=P(),s=P();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kr(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Gc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Uo{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Pi()?8:ki(yn())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Gc;return this.Xi(e,t,o).next(a=>{if(i.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(it()<=ye.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",ot(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),f.resolve()):(it()<=ye.DEBUG&&g("QueryEngine","Query:",ot(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(it()<=ye.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",ot(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,le(t))):f.resolve())}Yi(e,t){if(ks(t))return f.resolve(null);let n=le(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=An(t,null,"F"),n=le(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=P(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,n).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,An(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,n,s){return ks(t)||s.isEqual(v.min())?f.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?f.resolve(null):(it()<=ye.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ot(t)),this.rs(e,o,t,Ja(s,-1)).next(a=>a))})}ts(e,t){let n=new F(Xi(e));return t.forEach((s,i)=>{Ht(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return it()<=ye.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ot(t)),this.Ji.getDocumentsMatchingQuery(e,t,ue.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Kc{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new O(V),this._s=new ke(i=>je(i),jt),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Oo(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function qo(r,e,t,n){return new Kc(r,e,t,n)}async function Bo(r,e){const t=R(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],a=[];let u=P();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function zc(r,e){const t=R(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let _=f.resolve();return d.forEach(E=>{_=_.next(()=>l.getEntry(u,E)).next(T=>{const I=c.docVersions.get(E);w(I!==null),T.version.compareTo(I)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),l.addEntry(T)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let u=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Go(r){const e=R(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Qc(r,e){const t=R(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Ur.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Ur.addMatchingKeys(i,l.addedDocuments,h)));let _=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Q.EMPTY_BYTE_STRING,v.min()).withLastLimboFreeSnapshotVersion(v.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),function(T,I,D){return T.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,_,l)&&a.push(t.Ur.updateTargetData(i,_))});let u=ae(),c=P();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push($c(i,o,e.documentUpdates).next(l=>{u=l.Ps,c=l.Is})),!n.isEqual(v.min())){const l=t.Ur.getLastRemoteSnapshotVersion(i).next(h=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.os=s,i))}function $c(r,e,t){let n=P(),s=P();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=ae();return t.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(v.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function jc(r,e){const t=R(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Wc(r,e){const t=R(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,f.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new Ie(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Ar(r,e,t){const n=R(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ce(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function ci(r,e,t){const n=R(r);let s=v.min(),i=P();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=R(u),d=h._s.get(l);return d!==void 0?f.resolve(h.os.get(d)):h.Ur.getTargetData(c,l)}(n,o,le(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:v.min(),t?i:P())).next(a=>(Hc(n,Mu(e),a),{documents:a,Ts:i})))}function Hc(r,e,t){let n=r.us.get(e)||v.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}class li{constructor(){this.activeTargetIds=Gu()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ko{constructor(){this.so=new li,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new li,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yc{_o(e){}shutdown(){}}/**
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
 */class hi{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let cn=null;function ir(){return cn===null?cn=function(){return 268435456+Math.round(2147483648*Math.random())}():cn++,"0x"+cn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Jc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xc{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const J="WebChannelConnection";class Zc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const a=ir(),u=this.xo(t,n.toUriEncodedString());g("RestConnection",`Sending RPC '${t}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(t,u,c,s).then(l=>(g("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Ke("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}Lo(t,n,s,i,o,a){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+At}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=Jc[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=ir();return new Promise((o,a)=>{const u=new Oa;u.setWithCredentials(!0),u.listenOnce(La.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case nr.NO_ERROR:const l=u.getResponseJson();g(J,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case nr.TIMEOUT:g(J,`RPC '${e}' ${i} timed out`),a(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const h=u.getStatus();if(g(J,`RPC '${e}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const _=d==null?void 0:d.error;if(_&&_.status&&_.message){const E=function(I){const D=I.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(D)>=0?D:m.UNKNOWN}(_.status);a(new p(E,_.message))}else a(new p(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new p(m.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{g(J,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);g(J,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",c,n,15)})}Bo(e,t,n){const s=ir(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ua(),a=qa(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=i.join("");g(J,`Creating RPC '${e}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,_=!1;const E=new Xc({Io:I=>{_?g(J,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(d||(g(J,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),g(J,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},To:()=>h.close()}),T=(I,D,C)=>{I.listen(D,b=>{try{C(b)}catch(q){setTimeout(()=>{throw q},0)}})};return T(h,rn.EventType.OPEN,()=>{_||(g(J,`RPC '${e}' stream ${s} transport opened.`),E.yo())}),T(h,rn.EventType.CLOSE,()=>{_||(_=!0,g(J,`RPC '${e}' stream ${s} transport closed`),E.So())}),T(h,rn.EventType.ERROR,I=>{_||(_=!0,Ke(J,`RPC '${e}' stream ${s} transport errored:`,I),E.So(new p(m.UNAVAILABLE,"The operation could not be completed")))}),T(h,rn.EventType.MESSAGE,I=>{var D;if(!_){const C=I.data[0];w(!!C);const b=C,q=b.error||((D=b[0])===null||D===void 0?void 0:D.error);if(q){g(J,`RPC '${e}' stream ${s} received error:`,q);const K=q.status;let B=function(Ra){const _s=z[Ra];if(_s!==void 0)return fo(_s)}(K),Y=q.message;B===void 0&&(B=m.INTERNAL,Y="Unknown error status: "+K+" with message "+q.message),_=!0,E.So(new p(B,Y)),h.close()}else g(J,`RPC '${e}' stream ${s} received:`,C),E.bo(C)}}),T(a,Ba.STAT_EVENT,I=>{I.stat===ps.PROXY?g(J,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===ps.NOPROXY&&g(J,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2020 Google LLC
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
 */function el(){return typeof window<"u"?window:null}function gn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function zn(r){return new rc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zo{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qo{constructor(e,t,n,s,i,o,a,u){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zo(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(te(t.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new p(m.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tl extends Qo{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=oc(this.serializer,e),n=function(i){if(!("targetChange"in i))return v.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?v.min():o.readTime?re(o.readTime):v.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=pr(this.serializer),t.addTarget=function(i,o){let a;const u=o.target;if(a=Tn(u)?{documents:Eo(i,u)}:{query:Ao(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=go(i,o.resumeToken);const c=_r(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(v.min())>0){a.readTime=It(i,o.snapshotVersion.toTimestamp());const c=_r(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const n=uc(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=pr(this.serializer),t.removeTarget=e,this.a_(t)}}class nl extends Qo{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return w(!!e.streamToken),this.lastStreamToken=e.streamToken,w(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ac(e.writeResults,e.commitTime),n=re(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=pr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>vn(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rl extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,gr(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,gr(t,n),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new p(m.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(te(t),this.D_=!1):g("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class il{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{Ze(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=R(u);c.L_.add(4),await Jt(c),c.q_.set("Unknown"),c.L_.delete(4),await Qn(c)}(this))})}),this.q_=new sl(n,s)}}async function Qn(r){if(Ze(r))for(const e of r.B_)await e(!0)}async function Jt(r){for(const e of r.B_)await e(!1)}function $o(r,e){const t=R(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jr(t)?$r(t):vt(t).r_()&&Qr(t,e))}function zr(r,e){const t=R(r),n=vt(t);t.N_.delete(e),n.r_()&&jo(t,e),t.N_.size===0&&(n.r_()?n.o_():Ze(t)&&t.q_.set("Unknown"))}function Qr(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(v.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vt(r).A_(e)}function jo(r,e){r.Q_.xe(e),vt(r).R_(e)}function $r(r){r.Q_=new Zu({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),vt(r).start(),r.q_.v_()}function jr(r){return Ze(r)&&!vt(r).n_()&&r.N_.size>0}function Ze(r){return R(r).L_.size===0}function Wo(r){r.Q_=void 0}async function ol(r){r.q_.set("Online")}async function al(r){r.N_.forEach((e,t)=>{Qr(r,e)})}async function ul(r,e){Wo(r),jr(r)?(r.q_.M_(e),$r(r)):r.q_.set("Unknown")}async function cl(r,e,t){if(r.q_.set("Online"),e instanceof _o&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(r,e)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bn(r,n)}else if(e instanceof _n?r.Q_.Ke(e):e instanceof mo?r.Q_.He(e):r.Q_.We(e),!t.isEqual(v.min()))try{const n=await Go(r.localStore);t.compareTo(n)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.N_.get(c);l&&i.N_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=i.N_.get(u);if(!l)return;i.N_.set(u,l.withResumeToken(Q.EMPTY_BYTE_STRING,l.snapshotVersion)),jo(i,u);const h=new Ie(l.target,u,c,l.sequenceNumber);Qr(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(r,t)}catch(n){g("RemoteStore","Failed to raise snapshot:",n),await bn(r,n)}}async function bn(r,e,t){if(!Ce(e))throw e;r.L_.add(1),await Jt(r),r.q_.set("Offline"),t||(t=()=>Go(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Qn(r)})}function Ho(r,e){return e().catch(t=>bn(r,t,e))}async function Xt(r){const e=R(r),t=xe(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ll(e);)try{const s=await jc(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,hl(e,s)}catch(s){await bn(e,s)}Yo(e)&&Jo(e)}function ll(r){return Ze(r)&&r.O_.length<10}function hl(r,e){r.O_.push(e);const t=xe(r);t.r_()&&t.V_&&t.m_(e.mutations)}function Yo(r){return Ze(r)&&!xe(r).n_()&&r.O_.length>0}function Jo(r){xe(r).start()}async function dl(r){xe(r).p_()}async function fl(r){const e=xe(r);for(const t of r.O_)e.m_(t.mutations)}async function ml(r,e,t){const n=r.O_.shift(),s=Fr.from(n,e,t);await Ho(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Xt(r)}async function _l(r,e){e&&xe(r).V_&&await async function(n,s){if(function(o){return Yu(o)&&o!==m.ABORTED}(s.code)){const i=n.O_.shift();xe(n).s_(),await Ho(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xt(n)}}(r,e),Yo(r)&&Jo(r)}async function di(r,e){const t=R(r);t.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const n=Ze(t);t.L_.add(3),await Jt(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qn(t)}async function gl(r,e){const t=R(r);e?(t.L_.delete(2),await Qn(t)):e||(t.L_.add(2),await Jt(t),t.q_.set("Unknown"))}function vt(r){return r.K_||(r.K_=function(t,n,s){const i=R(t);return i.w_(),new tl(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:ol.bind(null,r),Ro:al.bind(null,r),mo:ul.bind(null,r),d_:cl.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),jr(r)?$r(r):r.q_.set("Unknown")):(await r.K_.stop(),Wo(r))})),r.K_}function xe(r){return r.U_||(r.U_=function(t,n,s){const i=R(t);return i.w_(),new nl(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dl.bind(null,r),mo:_l.bind(null,r),f_:fl.bind(null,r),g_:ml.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Xt(r)):(await r.U_.stop(),r.O_.length>0&&(g("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wr{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new _e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new Wr(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hr(r,e){if(te("AsyncQueue",`${e}: ${r}`),Ce(r))return new p(m.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dt{constructor(e){this.comparator=e?(t,n)=>e(t,n)||y.comparator(t.key,n.key):(t,n)=>y.comparator(t.key,n.key),this.keyedMap=Dt(),this.sortedSet=new O(this.comparator)}static emptySet(e){return new dt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new dt;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fi{constructor(){this.W_=new O(y.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):A():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Tt{constructor(e,t,n,s,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Tt(e,t,dt.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pl{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yl{constructor(){this.queries=mi(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=R(t),i=s.queries;s.queries=mi(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(n)})})(this,new p(m.ABORTED,"Firestore shutting down"))}}function mi(){return new ke(r=>Ji(r),Mn)}async function Yr(r,e){const t=R(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new pl,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Hr(o,`Initialization of query '${ot(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Xr(t)}async function Jr(r,e){const t=R(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Il(r,e){const t=R(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(n=!0);o.z_=s}}n&&Xr(t)}function Tl(r,e,t){const n=R(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function Xr(r){r.Y_.forEach(e=>{e.next()})}var wr,_i;(_i=wr||(wr={})).ea="default",_i.Cache="cache";class Zr{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Tt(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Tt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xo{constructor(e){this.key=e}}class Zo{constructor(e){this.key=e}}class El{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=P(),this.mutatedKeys=P(),this.Aa=Xi(e),this.Ra=new dt(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new fi,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),_=Ht(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),T=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;d&&_?d.data.isEqual(_.data)?E!==T&&(n.track({type:3,doc:_}),I=!0):this.ga(d,_)||(n.track({type:2,doc:_}),I=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!d&&_?(n.track({type:0,doc:_}),I=!0):d&&!_&&(n.track({type:1,doc:d}),I=!0,(u||c)&&(a=!0)),I&&(_?(o=o.add(_),i=T?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{Ra:o,fa:n,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((l,h)=>function(_,E){const T=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return T(_)-T(E)}(l.type,h.type)||this.Aa(l.doc,h.doc)),this.pa(n),s=s!=null&&s;const a=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Tt(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fi,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=P(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Zo(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Xo(n))}),t}ba(e){this.Ta=e.Ts,this.da=P();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Tt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Al{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class wl{constructor(e){this.key=e,this.va=!1}}class vl{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ke(a=>Ji(a),Mn),this.Ma=new Map,this.xa=new Set,this.Oa=new O(y.comparator),this.Na=new Map,this.La=new Br,this.Ba={},this.ka=new Map,this.qa=Ye.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rl(r,e,t=!0){const n=ia(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ea(n,e,t,!0),s}async function Vl(r,e){const t=ia(r);await ea(t,e,!0,!1)}async function ea(r,e,t,n){const s=await Wc(r.localStore,le(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await Pl(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&$o(r.remoteStore,s),a}async function Pl(r,e,t,n,s){r.Ka=(h,d,_)=>async function(T,I,D,C){let b=I.view.ma(D);b.ns&&(b=await ci(T.localStore,I.query,!1).then(({documents:Y})=>I.view.ma(Y,b)));const q=C&&C.targetChanges.get(I.targetId),K=C&&C.targetMismatches.get(I.targetId)!=null,B=I.view.applyChanges(b,T.isPrimaryClient,q,K);return pi(T,I.targetId,B.wa),B.snapshot}(r,h,d,_);const i=await ci(r.localStore,e,!0),o=new El(e,i.Ts),a=o.ma(i.documents),u=Yt.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);pi(r,t,c.wa);const l=new Al(e,t,o);return r.Fa.set(e,l),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),c.snapshot}async function bl(r,e,t){const n=R(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Mn(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ar(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&zr(n.remoteStore,s.targetId),vr(n,s.targetId)}).catch(Je)):(vr(n,s.targetId),await Ar(n.localStore,s.targetId,!0))}async function Sl(r,e){const t=R(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),zr(t.remoteStore,n.targetId))}async function Dl(r,e,t){const n=oa(r);try{const s=await function(o,a){const u=R(o),c=U.now(),l=a.reduce((_,E)=>_.add(E.key),P());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=ae(),T=P();return u.cs.getEntries(_,l).next(I=>{E=I,E.forEach((D,C)=>{C.isValidDocument()||(T=T.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,E)).next(I=>{h=I;const D=[];for(const C of a){const b=Wu(C,h.get(C.key).overlayedDocument);b!=null&&D.push(new Ee(C.key,b,Ki(b.value.mapValue),Z.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,D,a)}).next(I=>{d=I;const D=I.applyToLocalDocumentSet(h,T);return u.documentOverlayCache.saveOverlays(_,I.batchId,D)})}).then(()=>({batchId:d.batchId,changes:eo(h)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new O(V)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(n,s.batchId,t),await Zt(n,s.changes),await Xt(n.remoteStore)}catch(s){const i=Hr(s,"Failed to persist write");t.reject(i)}}async function ta(r,e){const t=R(r);try{const n=await Qc(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(w(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?w(o.va):s.removedDocuments.size>0&&(w(o.va),o.va=!1))}),await Zt(t,n,e)}catch(n){await Je(n)}}function gi(r,e,t){const n=R(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=R(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.j_)d.Z_(a)&&(c=!0)}),c&&Xr(u)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function xl(r,e,t){const n=R(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new O(y.comparator);o=o.insert(i,G.newNoDocument(i,v.min()));const a=P().add(i),u=new qn(v.min(),new Map,new O(V),o,a);await ta(n,u),n.Oa=n.Oa.remove(i),n.Na.delete(e),es(n)}else await Ar(n.localStore,e,!1).then(()=>vr(n,e,t)).catch(Je)}async function Cl(r,e){const t=R(r),n=e.batch.batchId;try{const s=await zc(t.localStore,e);ra(t,n,null),na(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Zt(t,s)}catch(s){await Je(s)}}async function Nl(r,e,t){const n=R(r);try{const s=await function(o,a){const u=R(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(w(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(n.localStore,e);ra(n,e,t),na(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Zt(n,s)}catch(s){await Je(s)}}function na(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function ra(r,e,t){const n=R(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function vr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||sa(r,n)})}function sa(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(zr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),es(r))}function pi(r,e,t){for(const n of t)n instanceof Xo?(r.La.addReference(n.key,e),kl(r,n)):n instanceof Zo?(g("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||sa(r,n.key)):A()}function kl(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(g("SyncEngine","New document in limbo: "+t),r.xa.add(n),es(r))}function es(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new y(N.fromString(e)),n=r.qa.next();r.Na.set(n,new wl(t)),r.Oa=r.Oa.insert(t,n),$o(r.remoteStore,new Ie(le(Wt(t.path)),n,"TargetPurposeLimboResolution",ce.oe))}}async function Zt(r,e,t){const n=R(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((a,u)=>{o.push(n.Ka(u,e,t).then(c=>{var l;if((c||t)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))===null||l===void 0?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=Kr.Wi(u.targetId,c);i.push(h)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(u,c){const l=R(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,d=>f.forEach(d.$i,_=>l.persistence.referenceDelegate.addReference(h,d.targetId,_)).next(()=>f.forEach(d.Ui,_=>l.persistence.referenceDelegate.removeReference(h,d.targetId,_)))))}catch(h){if(!Ce(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const _=l.os.get(d),E=_.snapshotVersion,T=_.withLastLimboFreeSnapshotVersion(E);l.os=l.os.insert(d,T)}}}(n.localStore,i))}async function Fl(r,e){const t=R(r);if(!t.currentUser.isEqual(e)){g("SyncEngine","User change. New user:",e.toKey());const n=await Bo(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new p(m.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Zt(t,n.hs)}}function Ml(r,e){const t=R(r),n=t.Na.get(e);if(n&&n.va)return P().add(n.key);{let s=P();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const a=t.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function ia(r){const e=R(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=ta.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ml.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xl.bind(null,e),e.Ca.d_=Il.bind(null,e.eventManager),e.Ca.$a=Tl.bind(null,e.eventManager),e}function oa(r){const e=R(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nl.bind(null,e),e}class $t{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zn(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return qo(this.persistence,new Uo,e.initialUser,this.serializer)}Ga(e){return new Lo(Kn.Zr,this.serializer)}Wa(e){return new Ko}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$t.provider={build:()=>new $t};class Ol extends $t{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await oa(this.Ja.syncEngine),await Xt(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return qo(this.persistence,new Uo,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Rc(n,e.asyncQueue,t)}Ha(e,t){const n=new tu(t,this.persistence);return new eu(e.asyncQueue,n)}Ga(e){const t=Bc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?ie.withCacheSize(this.cacheSizeBytes):ie.DEFAULT;return new Gr(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,el(),gn(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Ko}}class Sn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gi(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fl.bind(null,this.syncEngine),await gl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yl}()}createDatastore(e){const t=zn(e.databaseInfo.databaseId),n=function(i){return new Zc(i)}(e.databaseInfo);return function(i,o,a,u){return new rl(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,a){return new il(n,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>gi(this.syncEngine,t,0),function(){return hi.D()?new hi:new Yc}())}createSyncEngine(e,t){return function(s,i,o,a,u,c,l){const h=new vl(s,i,o,a,u,c);return l&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=R(s);g("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Jt(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Sn.provider={build:()=>new Sn};/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class ts{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):te("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ll{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=W.UNAUTHENTICATED,this.clientId=Si.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{g("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(g("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Hr(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function or(r,e){r.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Bo(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function yi(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Ul(r);g("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>di(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>di(e.remoteStore,s)),r._onlineComponents=e}async function Ul(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await or(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===m.FAILED_PRECONDITION||s.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ke("Error using user provided cache. Falling back to memory cache: "+t),await or(r,new $t)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await or(r,new $t);return r._offlineComponents}async function aa(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await yi(r,r._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await yi(r,new Sn))),r._onlineComponents}function ql(r){return aa(r).then(e=>e.syncEngine)}async function Dn(r){const e=await aa(r),t=e.eventManager;return t.onListen=Rl.bind(null,e.syncEngine),t.onUnlisten=bl.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Vl.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Sl.bind(null,e.syncEngine),t}function Bl(r,e,t={}){const n=new _e;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new ts({next:d=>{l.Za(),o.enqueueAndForget(()=>Jr(i,h));const _=d.docs.has(a);!_&&d.fromCache?c.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&d.fromCache&&u&&u.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Zr(Wt(a.path),l,{includeMetadataChanges:!0,_a:!0});return Yr(i,h)}(await Dn(r),r.asyncQueue,e,t,n)),n.promise}function Gl(r,e,t={}){const n=new _e;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new ts({next:d=>{l.Za(),o.enqueueAndForget(()=>Jr(i,h)),d.fromCache&&u.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Zr(a,l,{includeMetadataChanges:!0,_a:!0});return Yr(i,h)}(await Dn(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ua(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ii=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ca(r,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Kl(r,e,t,n){if(e===!0&&n===!0)throw new p(m.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ti(r){if(!y.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ei(r){if(y.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function $n(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":A()}function se(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$n(r);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function zl(r,e){if(e<=0)throw new p(m.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ai{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ua((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jn{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ai({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ai(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ga;switch(n.type){case"firstParty":return new $a(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ii.get(t);n&&(g("ComponentProvider","Removing Datastore"),Ii.delete(t),n.terminate())}(this),Promise.resolve()}}function Ql(r,e,t,n={}){var s;const i=(r=se(r,jn))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),n.mockUserToken){let a,u;if(typeof n.mockUserToken=="string")a=n.mockUserToken,u=W.MOCK_USER;else{a=ka(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new W(c)}r._authCredentials=new Ka(new bi(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class de{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new de(this.firestore,e,this._query)}}class ee{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ee(this.firestore,e,this._key)}}class Pe extends de{constructor(e,t,n){super(e,t,Wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ee(this.firestore,null,new y(e))}withConverter(e){return new Pe(this.firestore,e,this._path)}}function hh(r,e,...t){if(r=he(r),ca("collection","path",e),r instanceof jn){const n=N.fromString(e,...t);return Ei(n),new Pe(r,null,n)}{if(!(r instanceof ee||r instanceof Pe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(N.fromString(e,...t));return Ei(n),new Pe(r.firestore,null,n)}}function $l(r,e,...t){if(r=he(r),arguments.length===1&&(e=Si.newId()),ca("doc","path",e),r instanceof jn){const n=N.fromString(e,...t);return Ti(n),new ee(r,null,new y(n))}{if(!(r instanceof ee||r instanceof Pe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(N.fromString(e,...t));return Ti(n),new ee(r.firestore,r instanceof Pe?r.converter:null,new y(n))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class wi{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zo(this,"async_queue_retry"),this.Vu=()=>{const n=gn();n&&g("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=gn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=gn();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new _e;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ce(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw te("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Wr.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&A()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function vi(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class pe extends jn{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new wi,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wi(e),this._firestoreClient=void 0,await e}}}function dh(r,e){const t=typeof r=="object"?r:Pa(),n=typeof r=="string"?r:"(default)",s=ba(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Na("firestore");i&&Ql(s,...i)}return s}function Wn(r){if(r._terminated)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||la(r),r._firestoreClient}function la(r){var e,t,n;const s=r._freezeSettings(),i=function(a,u,c,l){return new wu(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ua(l.experimentalLongPollingOptions),l.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Ll(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(r._componentsProvider))}function fh(r,e){Ke("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return jl(r,Sn.provider,{build:n=>new Ol(n,t.cacheSizeBytes,void 0)}),Promise.resolve()}function jl(r,e,t){if((r=se(r,pe))._firestoreClient||r._terminated)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},la(r)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Et(Q.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Et(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Hn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new L(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Yn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ns{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rs{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Wl=/^__.*__$/;class Hl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ee(e,this.data,this.fieldMask,t,this.fieldTransforms):new wt(e,this.data,t,this.fieldTransforms)}}class ha{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ee(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function da(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class ss{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ss(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xn(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(da(this.Cu)&&Wl.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Yl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zn(e)}Qu(e,t,n,s=!1){return new ss({Cu:e,methodName:t,qu:n,path:L.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function en(r){const e=r._freezeSettings(),t=zn(r._databaseId);return new Yl(r._databaseId,!!e.ignoreUndefinedProperties,t)}function fa(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);os("Data must be an object, but it was:",o,n);const a=_a(n,o);let u,c;if(i.merge)u=new oe(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Rr(e,h,t);if(!o.contains(d))throw new p(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);pa(l,d)||l.push(d)}u=new oe(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Hl(new X(a),u,c)}class Jn extends Yn{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jn}}class is extends Yn{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new yt(e.serializer,ro(e.serializer,this.$u));return new uo(e.path,t)}isEqual(e){return e instanceof is&&this.$u===e.$u}}function Jl(r,e,t,n){const s=r.Qu(1,e,t);os("Data must be an object, but it was:",s,n);const i=[],o=X.empty();Xe(n,(u,c)=>{const l=as(e,u,t);c=he(c);const h=s.Nu(l);if(c instanceof Jn)i.push(l);else{const d=tn(c,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new oe(i);return new ha(o,a,s.fieldTransforms)}function Xl(r,e,t,n,s,i){const o=r.Qu(1,e,t),a=[Rr(e,n,t)],u=[s];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Rr(e,i[d])),u.push(i[d+1]);const c=[],l=X.empty();for(let d=a.length-1;d>=0;--d)if(!pa(c,a[d])){const _=a[d];let E=u[d];E=he(E);const T=o.Nu(_);if(E instanceof Jn)c.push(_);else{const I=tn(E,T);I!=null&&(c.push(_),l.set(_,I))}}const h=new oe(c);return new ha(l,h,o.fieldTransforms)}function ma(r,e,t,n=!1){return tn(t,r.Qu(n?4:3,e))}function tn(r,e){if(ga(r=he(r)))return os("Unsupported field value:",e,r),_a(r,e);if(r instanceof Yn)return function(n,s){if(!da(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const a of n){let u=tn(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=he(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ro(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=U.fromDate(n);return{timestampValue:It(s.serializer,i)}}if(n instanceof U){const i=new U(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:It(s.serializer,i)}}if(n instanceof ns)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Et)return{bytesValue:go(s.serializer,n._byteString)};if(n instanceof ee){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lr(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof rs)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Nr(a.serializer,u)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${$n(n)}`)}(r,e)}function _a(r,e){const t={};return Ui(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xe(r,(n,s)=>{const i=tn(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function ga(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof U||r instanceof ns||r instanceof Et||r instanceof ee||r instanceof Yn||r instanceof rs)}function os(r,e,t){if(!ga(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=$n(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Rr(r,e,t){if((e=he(e))instanceof Hn)return e._internalPath;if(typeof e=="string")return as(r,e);throw xn("Field path arguments must be of type string or ",r,!1,void 0,t)}const Zl=new RegExp("[~\\*/\\[\\]]");function as(r,e,t){if(e.search(Zl)>=0)throw xn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hn(...e.split("."))._internalPath}catch{throw xn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function xn(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new p(m.INVALID_ARGUMENT,a+r+u)}function pa(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class us{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eh extends us{data(){return super.data()}}function Xn(r,e){return typeof e=="string"?as(r,e):e instanceof Hn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ya(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cs{}class nn extends cs{}function mh(r,e,...t){let n=[];e instanceof cs&&n.push(e),n=n.concat(t),function(i){const o=i.filter(u=>u instanceof ls).length,a=i.filter(u=>u instanceof Zn).length;if(o>1||o>0&&a>0)throw new p(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Zn extends nn{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Zn(e,t,n)}_apply(e){const t=this._parse(e);return Ta(e._query,t),new de(e.firestore,e.converter,mr(e._query,t))}_parse(e){const t=en(e.firestore);return function(i,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Vi(h,l);const _=[];for(const E of h)_.push(Ri(u,i,E));d={arrayValue:{values:_}}}else d=Ri(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Vi(h,l),d=ma(a,o,h,l==="in"||l==="not-in");return S.create(c,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _h(r,e,t){const n=e,s=Xn("where",r);return Zn._create(s,n,t)}class ls extends cs{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ls(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:k.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)Ta(o,u),o=mr(o,u)}(e._query,t),new de(e.firestore,e.converter,mr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hs extends nn{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new hs(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zt(i,o)}(e._query,this._field,this._direction);return new de(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ne(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function gh(r,e="asc"){const t=e,n=Xn("orderBy",r);return hs._create(n,t)}class ds extends nn{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ds(e,t,n)}_apply(e){return new de(e.firestore,e.converter,An(e._query,this._limit,this._limitType))}}function ph(r){return zl("limit",r),ds._create("limit",r,"F")}class er extends nn{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new er(e,t,n)}_apply(e){const t=Ia(e,this.type,this._docOrFields,this._inclusive);return new de(e.firestore,e.converter,function(s,i){return new Ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function yh(...r){return er._create("startAt",r,!0)}function Ih(...r){return er._create("startAfter",r,!1)}class fs extends nn{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new fs(e,t,n)}_apply(e){const t=Ia(e,this.type,this._docOrFields,this._inclusive);return new de(e.firestore,e.converter,function(s,i){return new Ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function Th(...r){return fs._create("endAt",r,!0)}function Ia(r,e,t,n){if(t[0]=he(t[0]),t[0]instanceof us)return function(i,o,a,u,c){if(!u)throw new p(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of ht(i))if(h.field.isKeyField())l.push($e(o,u.key));else{const d=u.data.field(h.field);if(kn(d))throw new p(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const _=h.field.canonicalString();throw new p(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}l.push(d)}return new De(l,c)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=en(r.firestore);return function(o,a,u,c,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let E=0;E<l.length;E++){const T=l[E];if(d[E].field.isKeyField()){if(typeof T!="string")throw new p(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof T}`);if(!Cr(o)&&T.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${T}' contains a slash.`);const I=o.path.child(N.fromString(T));if(!y.isDocumentKey(I))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const D=new y(I);_.push($e(a,D))}else{const I=ma(u,c,T);_.push(I)}}return new De(_,h)}(r._query,r.firestore._databaseId,s,e,t,n)}}function Ri(r,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new p(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cr(e)&&t.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(N.fromString(t));if(!y.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return $e(r,new y(n))}if(t instanceof ee)return $e(r,t._key);throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$n(t)}.`)}function Vi(r,e){if(!Array.isArray(r)||r.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ta(r,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class th{convertValue(e,t="none"){switch(Qe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return M(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(be(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Xe(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>M(o.doubleValue));return new rs(i)}convertGeoPoint(e){return new ns(M(e.latitude),M(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Dr(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Bt(e));default:return null}}convertTimestamp(e){const t=Te(e);return new U(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=N.fromString(e);w(Vo(n));const s=new ze(n.get(1),n.get(3)),i=new y(n.popFirst(5));return s.isEqual(t)||te(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ea(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Aa extends us{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xn("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class pn extends Aa{data(e={}){return super.data(e)}}class wa{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Nt(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new pn(this._firestore,this._userDataWriter,n.key,n,new Nt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new pn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Nt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new pn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Nt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:nh(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nh(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Eh(r){r=se(r,ee);const e=se(r.firestore,pe);return Bl(Wn(e),r._key).then(t=>va(e,r,t))}class ms extends th{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ee(this.firestore,null,t)}}function Ah(r){r=se(r,de);const e=se(r.firestore,pe),t=Wn(e),n=new ms(e);return ya(r._query),Gl(t,r._query).then(s=>new wa(e,n,r,s))}function wh(r,e,t){r=se(r,ee);const n=se(r.firestore,pe),s=Ea(r.converter,e,t);return tr(n,[fa(en(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Z.none())])}function vh(r,e,t,...n){r=se(r,ee);const s=se(r.firestore,pe),i=en(s);let o;return o=typeof(e=he(e))=="string"||e instanceof Hn?Xl(i,"updateDoc",r._key,e,t,n):Jl(i,"updateDoc",r._key,e),tr(s,[o.toMutation(r._key,Z.exists(!0))])}function Rh(r){return tr(se(r.firestore,pe),[new Un(r._key,Z.none())])}function Vh(r,e){const t=se(r.firestore,pe),n=$l(r),s=Ea(r.converter,e);return tr(t,[fa(en(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Z.exists(!1))]).then(()=>n)}function Ph(r,...e){var t,n,s;r=he(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||vi(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(vi(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(r instanceof ee)c=se(r.firestore,pe),l=Wt(r._key.path),u={next:h=>{e[o]&&e[o](va(c,r,h))},error:e[o+1],complete:e[o+2]};else{const h=se(r,de);c=se(h.firestore,pe),l=h._query;const d=new ms(c);u={next:_=>{e[o]&&e[o](new wa(c,d,h,_))},error:e[o+1],complete:e[o+2]},ya(r._query)}return function(d,_,E,T){const I=new ts(T),D=new Zr(_,I,E);return d.asyncQueue.enqueueAndForget(async()=>Yr(await Dn(d),D)),()=>{I.Za(),d.asyncQueue.enqueueAndForget(async()=>Jr(await Dn(d),D))}}(Wn(c),l,a,u)}function tr(r,e){return function(n,s){const i=new _e;return n.asyncQueue.enqueueAndForget(async()=>Dl(await ql(n),s,i)),i.promise}(Wn(r),e)}function va(r,e,t){const n=t.docs.get(e._key),s=new ms(r);return new Aa(r,s,e._key,n,new Nt(t.hasPendingWrites,t.fromCache),e.converter)}function bh(r){return new is("increment",r)}(function(e,t=!0){(function(s){At=s})(Sa),Va(new Da("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new pe(new za(n.getProvider("auth-internal")),new Wa(n.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(c.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),gs(ys,"4.7.3",e),gs(ys,"4.7.3","esm2017")})();export{Eh as a,Ah as b,hh as c,$l as d,fh as e,Vh as f,dh as g,Rh as h,bh as i,wh as j,Ph as k,ph as l,Th as m,yh as n,gh as o,mh as q,Ih as s,vh as u,_h as w};
