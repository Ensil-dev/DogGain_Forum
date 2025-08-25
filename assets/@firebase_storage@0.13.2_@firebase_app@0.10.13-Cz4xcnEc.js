import{_ as B,r as U,S as H,g as K,a as j}from"./@firebase_app@0.10.13-G5arepqD.js";import{F as q,g as G,t as W,u as X}from"./@firebase_util@1.10.0-CjACHxc0.js";import{C as Y}from"./@firebase_component@0.6.9-BT_Gq3Qq.js";/**
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
 */const F="firebasestorage.googleapis.com",z="storageBucket",Z=2*60*1e3,J=10*60*1e3;/**
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
 */class p extends q{constructor(e,n,s=0){super(w(e),`Firebase Storage: ${n} (${w(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return w(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_||(_={}));function w(t){return"storage/"+t}function Q(){const t="An unknown error occurred, please check the error payload for server response.";return new p(_.UNKNOWN,t)}function ee(){return new p(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function te(){return new p(_.CANCELED,"User canceled the upload/download.")}function ne(t){return new p(_.INVALID_URL,"Invalid URL '"+t+"'.")}function se(t){return new p(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function y(t){return new p(_.INVALID_ARGUMENT,t)}function M(){return new p(_.APP_DELETED,"The Firebase app was deleted.")}function ie(t){return new p(_.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class d{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=d.makeFromUrl(e,n)}catch{return new d(e,"")}if(s.path==="")return s;throw se(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(h){h.path.charAt(h.path.length-1)==="/"&&(h.path_=h.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),r={bucket:1,path:3};function l(h){h.path_=decodeURIComponent(h.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${f}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},I=n===F?"(?:storage.googleapis.com|storage.cloud.google.com)":n,u="([^?#]*)",b=new RegExp(`^https?://${I}/${i}/${u}`,"i"),T=[{regex:c,indices:r,postModify:o},{regex:k,indices:R,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let h=0;h<T.length;h++){const O=T[h],v=O.regex.exec(e);if(v){const $=v[O.indices.bucket];let D=v[O.indices.path];D||(D=""),s=new d($,D),O.postModify(s);break}}if(s==null)throw ne(e);return s}}class oe{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function re(t,e,n){let s=1,i=null,o=null,a=!1,c=0;function r(){return c===2}let l=!1;function f(...u){l||(l=!0,e.apply(null,u))}function g(u){i=setTimeout(()=>{i=null,t(k,r())},u)}function m(){o&&clearTimeout(o)}function k(u,...b){if(l){m();return}if(u){m(),f.call(null,u,...b);return}if(r()||a){m(),f.call(null,u,...b);return}s<64&&(s*=2);let T;c===1?(c=2,T=0):T=(s+Math.random())*1e3,g(T)}let R=!1;function I(u){R||(R=!0,m(),!l&&(i!==null?(u||(c=2),clearTimeout(i),g(0)):u||(c=1)))}return g(0),o=setTimeout(()=>{a=!0,I(!0)},n),I}function ae(t){t(!1)}/**
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
 */function ce(t){return t!==void 0}function P(t,e,n,s){if(s<e)throw y(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw y(`Invalid value for '${t}'. Expected ${n} or less.`)}function le(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var A;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(A||(A={}));/**
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
 */function ue(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class he{constructor(e,n,s,i,o,a,c,r,l,f,g,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=r,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,R)=>{this.resolve_=k,this.reject_=R,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new E(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const r=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(r,l)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===A.NO_ERROR,r=o.getStatus();if(!c||ue(r,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===A.ABORT;s(!1,new E(!1,null,f));return}const l=this.successCodes_.indexOf(r)!==-1;s(!0,new E(l,o))})},n=(s,i)=>{const o=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const r=this.callback_(c,c.getResponse());ce(r)?o(r):o()}catch(r){a(r)}else if(c!==null){const r=Q();r.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,r)):a(r)}else if(i.canceled){const r=this.appDelete_?M():te();a(r)}else{const r=ee();a(r)}};this.canceled_?n(!1,new E(!1,null,!0)):this.backoffId_=re(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ae(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class E{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function de(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _e(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pe(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fe(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function me(t,e,n,s,i,o,a=!0){const c=le(t.urlParams),r=t.url+c,l=Object.assign({},t.headers);return pe(l,e),de(l,n),_e(l,o),fe(l,s),new he(r,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function ge(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Re(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class N{constructor(e,n){this._service=e,n instanceof d?this._location=n:this._location=d.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new N(e,n)}get root(){const e=new d(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Re(this._location.path)}get storage(){return this._service}get parent(){const e=ge(this._location.path);if(e===null)return null;const n=new d(this._location.bucket,e);return new N(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ie(e)}}function C(t,e){const n=e==null?void 0:e[z];return n==null?null:d.makeFromBucketSpec(n,t)}function Te(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:X(i,t.app.options.projectId))}class ke{constructor(e,n,s,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=F,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Z,this._maxUploadRetryTime=J,this._requests=new Set,i!=null?this._bucket=d.makeFromBucketSpec(i,this._host):this._bucket=C(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=d.makeFromBucketSpec(this._url,e):this._bucket=C(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){P("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){P("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new N(this,e)}_makeRequest(e,n,s,i,o=!0){if(this._deleted)return new oe(M());{const a=me(e,this._appId,s,i,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const x="@firebase/storage",L="0.13.2";/**
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
 */const S="storage";function ve(t=K(),e){t=G(t);const s=j(t,S).getImmediate({identifier:e}),i=W("storage");return i&&Ie(s,...i),s}function Ie(t,e,n,s={}){Te(t,e,n,s)}function be(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ke(n,s,i,e,H)}function Oe(){B(new Y(S,be,"PUBLIC").setMultipleInstances(!0)),U(x,L,""),U(x,L,"esm2017")}Oe();export{ve as g};
