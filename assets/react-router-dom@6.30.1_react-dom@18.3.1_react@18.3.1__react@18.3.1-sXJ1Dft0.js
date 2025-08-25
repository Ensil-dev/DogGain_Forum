import{r as e,a as T}from"./react@18.3.1-BAMCOR-o.js";import"./react-dom@18.3.1_react@18.3.1-DKBhee3f.js";import{l as p,R as w}from"./react-router@6.30.1_react@18.3.1-BDoVGAhU.js";import{c as F}from"./@remix-run_router@1.23.0-W5PFqw48.js";/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U="6";try{window.__reactRouterVersion=U}catch{}const E="startTransition",u=T[E];function d(t){let{basename:h,children:S,future:s,window:R}=t,i=e.useRef();i.current==null&&(i.current=F({window:R,v5Compat:!0}));let r=i.current,[o,n]=e.useState({action:r.action,location:r.location}),{v7_startTransition:a}=s||{},c=e.useCallback(l=>{a&&u?u(()=>n(l)):n(l)},[n,a]);return e.useLayoutEffect(()=>r.listen(c),[r,c]),e.useEffect(()=>p(s),[s]),e.createElement(w,{basename:h,children:S,location:o.location,navigationType:o.action,navigator:r,future:s})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var f;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(f||(f={}));export{d as H};
