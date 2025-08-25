import{c as X,d as s,j as t,r as u,n as oe,i as zt,g as Ft,a as Qt,b as Wt,e as Ht,f as qt,m as q,l as be,u as I,h as A,k as ie,F as Gt,y as de,G as Kt,s as Vt,M as Yt,o as Xt,p as G,q as _,t as F,v as P,w as re,x as Zt,z as U,A as R,B as H,C as K,D as ut,E as Pe,H as se,I as we,J as ke,K as Jt,L as Ee,N as en,R as ne,O as pt,P as Ne,Q as tn,S as nn,T as pe,U as on,V as rn,W as sn,X as an,Y as cn,Z as ln,_ as dn,$ as un,a0 as pn,a1 as fn,a2 as xn,a3 as gn,a4 as hn,a5 as ve,a6 as mn,a7 as yn,a8 as jn,a9 as kn,aa as bn,ab as wn,ac as Ae,ad as Cn,ae as vn,af as $n,ag as te,ah as Sn,ai as In,aj as Bn,ak as Dn,al as Pn,am as En,an as Mn,ao as Tn,ap as Ln,aq as An,ar as On,as as Rn}from"./.pnpm-DMZrl4Ud.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const Un={isHamburgerModalOpen:!1,isPostWritingModalOpen:!1,isSearchModalOpen:!1},ft=X({name:"modal",initialState:Un,reducers:{hamburgerModalChange(e){e.isHamburgerModalOpen=!e.isHamburgerModalOpen},postWritingModalChange(e){e.isPostWritingModalOpen=!e.isPostWritingModalOpen},searchModalChange(e){e.isSearchModalOpen=!e.isSearchModalOpen}}}),{hamburgerModalChange:xt,postWritingModalChange:fe,searchModalChange:ze}=ft.actions,_n=ft.reducer,Nn=s.button`
    border: ${e=>e.$border||"none"};
    background-color: ${e=>e.$backgroundColor||e.theme.buttonBackground};
    opacity: ${e=>e.$opacity||"inherit"};
    cursor: ${e=>e.$cursor||"pointer"};

    color: ${e=>e.$color||e.theme.buttonTextColor};
    font-size: ${e=>e.$fontSize||"larger"};
    font-weight: ${e=>e.$fontWeight||"bold"};

    margin-left: ${e=>e.$marginLeft||"5px"};
    margin-right: ${e=>e.$marginRight||"0px"};

    padding: ${e=>e.$padding||"none"};
    border-radius: ${e=>e.$radius||"0px"};
`;function E({text:e,$onClick:n,...o}){return t.jsx(Nn,{...o,onClick:n,children:e})}function V(e,n){u.useEffect(()=>{function o(i){!e.current||e.current.contains(i.target)||n()}return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,n])}const zn={DUPLICATE_INTERVAL_12HOUR:60*1e3*60*12},B={MODAL_HEIGHT:"600px",MODAL_MAX_WIDTH:"300px",Z_INDEX_MENU:1e3,Z_INDEX_MODAL:1100,COLOR_PRIMARY_GRAY:"#606060",COLOR_ACCENT_PURPLE:"#4000c7",COPY_MSG_DURATION_MS:1e3},Fn=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${B.Z_INDEX_MODAL};
`,Qn=s.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: ${B.MODAL_MAX_WIDTH};
    text-align: center;
`;function Ce({message:e,onClose:n,buttonText:o="확인"}){const i=u.useRef(null);V(i,n);const r=oe();return t.jsx(Fn,{children:t.jsxs(Qn,{ref:i,children:[t.jsx("div",{children:e}),t.jsx(E,{text:o,$backgroundColor:r.primaryButtonBackground,$color:r.primaryButtonTextColor,$padding:"8px",$onClick:n})]})})}const Wn={isDarkMode:!1},gt=X({name:"mode",initialState:Wn,reducers:{darkmodeChange(e){e.isDarkMode=!e.isDarkMode}}}),{darkmodeChange:Hn}=gt.actions,qn=gt.reducer,Gn={apiKey:"AIzaSyCQmFIJTkBsDN9oMOBYdmvKqj8xdWhFoqM",authDomain:"dg-forum-1bc7c.firebaseapp.com",projectId:"dg-forum-1bc7c",storageBucket:"dg-forum-1bc7c.firebasestorage.app",messagingSenderId:"431875259033",appId:"1:431875259033:web:882c64e589171164ed1608",measurementId:"G-NB1ZGG7QL6"},Me=zt(Gn),L=Ft(Me);Qt(Me);Wt(Me);const w=Ht(Me);qt(w).catch(()=>{});const Kn={loginUser:null},ht=X({name:"userInfo",initialState:Kn,reducers:{saveLoginUser(e,n){if(n.payload){const{accessToken:o,displayName:i,email:r,emailVerified:a,photoURL:d,uid:f}=n.payload;e.loginUser={accessToken:o,displayName:i,email:r,emailVerified:a,photoURL:d,uid:f}}else e.loginUser=n.payload}}}),{saveLoginUser:ue}=ht.actions,Vn=ht.reducer;async function Yn(e,n){typeof n=="function"?(n(ue(null)),await L.signOut(),e===null&&await mt()):console.log("Please Check your argument")}async function mt(){L.onAuthStateChanged(e=>{})}const Xn=s.div`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  height: 90%;

  @media screen and (min-width: 550px) {
    // 너비가 550px보다 클 때 적용할 CSS
    grid-template-columns: 2fr 1fr;
  }
`,Zn=s.div`
  width: 100%;
  font-size: ${e=>e.fontSize};
  background-color: ${e=>e.theme.navTitleContainerBackground};
  color: ${e=>e.theme.navTitleContainerText};
`,Jn=s.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;

  font-size: ${e=>e.fontSize};
  background-color: ${e=>e.theme.loginContainerBackground};
  color: ${e=>e.theme.loginContainerText};
`;s.div.attrs(e=>({role:"dialog"}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  background-color: white;
  > .close-btn {
    position: absolute;
    top: 10px;
    cursor: pointer;
  }
`;q`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const yt=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,eo=s(Yt)`
  width: 28px;
  height: 28px;
  color: ${e=>e.theme.darkModeIconColor};
  cursor: pointer;
  ${({$animate:e})=>e&&be`
      animation: ${yt} 0.3s;
    `};
`,to=s(Xt)`
  width: 28px;
  height: 28px;
  color: ${e=>e.theme.darkModeIconColor};
  cursor: pointer;
  ${({$animate:e})=>e&&be`
      animation: ${yt} 0.3s;
    `};
`,Xe=s.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  cursor: pointer;
`;function jt({handleHamburgerMenuModal:e}){const n=I(h=>h.mode),o=I(h=>h.userInfo),i=A(),[r,a]=u.useState(""),[d,f]=u.useState(!1),p=oe(),c=()=>{f(!0),i(Hn()),n.isDarkMode?de.info("라이트 모드로 전환되었습니다"):de.info("다크 모드로 전환되었습니다")},m=ie();function g(){const h=()=>navigator.userAgent.toLowerCase().includes("kakao");if(h()){const v=window.location.href;window.location.href=`kakaotalk://web/openExternal?url=${encodeURIComponent(v)}`;return}const x=new Kt;Vt(L,x).then(v=>{i(ue(v.user)),mt()}).catch(v=>{if(v.code==="auth/popup-blocked"){if(a("카카오톡 인앱브라우저에서는 로그인 팝업이 차단될 수 있습니다. 외부 브라우저에서 다시 시도해주세요."),h()){const b=window.location.href;window.location.href=`kakaotalk://web/openExternal?url=${encodeURIComponent(b)}`}}else console.log(v)})}return t.jsxs(t.Fragment,{children:[t.jsx("header",{children:t.jsxs(Xn,{children:[t.jsx(Zn,{fontSize:We("HomeLogoBox"),children:t.jsx(E,{text:"Forum",$backgroundColor:p.navButtonBgColor,$color:p.navButtonTextColor,$onClick:()=>m("/")})}),t.jsxs(Jn,{fontSize:We("MenuOptionBox"),children:[t.jsx(Xe,{children:n.isDarkMode===!1?t.jsx(eo,{onClick:c,$animate:d,onAnimationEnd:()=>f(!1)}):t.jsx(to,{onClick:c,$animate:d,onAnimationEnd:()=>f(!1)})}),t.jsx(Xe,{children:t.jsx(Gt,{style:{width:"24px",height:"24px",color:"lightgray",cursor:"pointer"},onClick:()=>i(ze())})}),(o==null?void 0:o.loginUser)===null?t.jsx(E,{$onClick:g,text:"로그인",$marginLeft:"0px",$marginRight:"0px",$fontSize:"medium",$opacity:n.isDarkMode?"1":"0.65",$backgroundColor:p.primaryButtonBackground,$color:p.primaryButtonTextColor,$radius:"8px",$padding:"4px 8px"}):t.jsx(E,{$onClick:()=>Yn(o.loginUser,i),text:"로그아웃",$marginLeft:"0px",$marginRight:"0px",$fontSize:"medium",$opacity:n.isDarkMode?"1":"0.5",$backgroundColor:p.primaryButtonBackground,$color:p.primaryButtonTextColor,$radius:"8px",$padding:"4px 8px"})]})]})}),r&&t.jsx(Ce,{message:r,onClose:()=>a("")})]})}const no=s.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`,oo=s.tr`
    display: grid;
    grid-template-columns: 7fr 4fr 2fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 2fr 3fr;
    }
    padding: 12px 10px;

    color: gray;
`,me=s.th`
    font-weight: bold;
    text-align: center;
    &:first-child {
        text-align: start;
        padding-right: 5px;
    }
    font-size: small;
`;function io(){return t.jsx(no,{children:t.jsx("thead",{children:t.jsxs(oo,{children:[t.jsx(me,{children:"글"}),t.jsx(me,{children:"게시자"}),t.jsx(me,{children:"댓글"}),t.jsx(me,{children:"조회수"}),t.jsx(me,{children:"작성일"})]})})})}const ro=s.div`
    padding: ${e=>e.$padding||"none"};
`,so=s.hr`
    border: ${e=>e.$border||"2px solid gray"};
    opacity: ${e=>e.$opacity||"0.15"};
`;function kt({$padding:e,$border:n,$opacity:o}){return t.jsx(t.Fragment,{children:t.jsx(ro,{$padding:e,children:t.jsx(so,{$border:n,opacity:o})})})}const N={DEFAULT:1e3*10,COMMENT:1e3*10,POST_DETAIL:1e3*60,NONE:0};function Ke(e){return G(["posts",e],async()=>{let n=U(w,"posts");return n=R(n,H("created","desc")),(await K(n)).docs.map(r=>({...r.data(),id:r.id}))},{staleTime:N.NONE,refetchOnWindowFocus:!0})}function ao(){const e=_();return F(async n=>{const o=await ut(U(w,"posts"),n);return{...n,id:o.id}},{onSuccess:()=>{e.invalidateQueries("posts"),e.invalidateQueries("postsInfinite"),e.invalidateQueries(["posts","infinite"])}})}function bt(){const e=_();return F(async({id:n})=>{await Pe(P(w,"posts",n))},{onSuccess:()=>{e.invalidateQueries("posts"),e.invalidateQueries("postsInfinite"),e.invalidateQueries(["posts","infinite"])}})}function co(){const e=_();return F(async n=>(await se(P(w,"posts",String(n.id)),n),n),{onSuccess:()=>{e.invalidateQueries("posts"),e.invalidateQueries("postsInfinite"),e.invalidateQueries(["posts","infinite"])}})}function lo(){const e=_();return F(async({id:n})=>{await se(P(w,"posts",String(n)),{views:we(1)})},{onSuccess:()=>{e.invalidateQueries("posts")}})}async function wt(e){if(!e)return null;const n=P(w,"posts",e),o=await re(n);return o.exists()?{...o.data(),id:o.id}:null}function uo(e){return G(["post",e],()=>wt(e),{staleTime:N.POST_DETAIL})}function po(e=20){return Zt(["posts","infinite",e],async({pageParam:n})=>{let o;n?o=R(U(w,"posts"),H("created","desc"),Jt(n),ke(e)):o=R(U(w,"posts"),H("created","desc"),ke(e));const i=await K(o),r=i.docs.map(d=>({...d.data(),id:d.id})),a=i.docs.length>0?i.docs[i.docs.length-1]:void 0;return{posts:r,lastVisible:a}},{getNextPageParam:n=>n.lastVisible,staleTime:N.NONE,refetchOnWindowFocus:!0})}function Ct(){const e=_();return F(async({postId:n,uid:o})=>{const i=P(w,"posts",String(n),"likes",o);if((await re(i)).exists())throw new Error("already liked");await Ee(i,{uid:o,created:Date.now()}),await se(P(w,"posts",String(n)),{likesCount:we(1)})},{onMutate:async n=>{const{postId:o,uid:i}=n;await Promise.all([e.cancelQueries("posts"),e.cancelQueries("postsInfinite"),e.cancelQueries({queryKey:["posts","infinite"]}),e.cancelQueries(["post",o]),e.cancelQueries(["isLiked",o,i])]);const r=e.getQueryData(["post",o]),a=e.getQueryData(["isLiked",o,i]),d=e.getQueriesData({queryKey:["posts"]}),f=e.getQueriesData({queryKey:["posts","infinite"]}),p=c=>({...c,likesCount:(c.likesCount??0)+1});return e.setQueryData(["post",o],c=>c&&p(c)),d.forEach(([c,m])=>{Array.isArray(m)&&e.setQueryData(c,g=>g==null?void 0:g.map(h=>h.id===String(o)||h.postId===o?p(h):h))}),f.forEach(([c,m])=>{if(m&&Array.isArray(m.pages)){const g=m.pages.map(h=>({...h,posts:h.posts.map(x=>x.id===String(o)||x.postId===o?p(x):x)}));e.setQueryData(c,{...m,pages:g})}}),e.setQueryData(["isLiked",o,i],!0),{prevPost:r,prevPosts:d,prevInfinite:f,prevIsLiked:a}},onError:(n,o,i)=>{if(!i)return;const{prevPost:r,prevPosts:a,prevInfinite:d,prevIsLiked:f}=i;r!==void 0&&e.setQueryData(["post",o.postId],r),a==null||a.forEach(([p,c])=>e.setQueryData(p,c)),d==null||d.forEach(([p,c])=>e.setQueryData(p,c)),f!==void 0&&e.setQueryData(["isLiked",o.postId,o.uid],f)},onSettled:(n,o,i)=>{e.invalidateQueries("posts"),e.invalidateQueries("postsInfinite"),e.invalidateQueries(["posts","infinite"]),e.invalidateQueries(["post",i.postId]),e.invalidateQueries(["isLiked",i.postId,i.uid])}})}function vt(){const e=_();return F(async({postId:n,uid:o})=>{const i=P(w,"posts",String(n),"likes",o);if(!(await re(i)).exists())throw new Error("not liked");await Pe(i),await se(P(w,"posts",String(n)),{likesCount:we(-1)})},{onMutate:async n=>{const{postId:o,uid:i}=n;await Promise.all([e.cancelQueries("posts"),e.cancelQueries("postsInfinite"),e.cancelQueries({queryKey:["posts","infinite"]}),e.cancelQueries(["post",o]),e.cancelQueries(["isLiked",o,i])]);const r=e.getQueryData(["post",o]),a=e.getQueryData(["isLiked",o,i]),d=e.getQueriesData({queryKey:["posts"]}),f=e.getQueriesData({queryKey:["posts","infinite"]}),p=c=>({...c,likesCount:(c.likesCount??0)-1});return e.setQueryData(["post",o],c=>c&&p(c)),d.forEach(([c,m])=>{Array.isArray(m)&&e.setQueryData(c,g=>g==null?void 0:g.map(h=>h.id===String(o)||h.postId===o?p(h):h))}),f.forEach(([c,m])=>{if(m&&Array.isArray(m.pages)){const g=m.pages.map(h=>({...h,posts:h.posts.map(x=>x.id===String(o)||x.postId===o?p(x):x)}));e.setQueryData(c,{...m,pages:g})}}),e.setQueryData(["isLiked",o,i],!1),{prevPost:r,prevPosts:d,prevInfinite:f,prevIsLiked:a}},onError:(n,o,i)=>{if(!i)return;const{prevPost:r,prevPosts:a,prevInfinite:d,prevIsLiked:f}=i;r!==void 0&&e.setQueryData(["post",o.postId],r),a==null||a.forEach(([p,c])=>e.setQueryData(p,c)),d==null||d.forEach(([p,c])=>e.setQueryData(p,c)),f!==void 0&&e.setQueryData(["isLiked",o.postId,o.uid],f)},onSettled:(n,o,i)=>{e.invalidateQueries("posts"),e.invalidateQueries("postsInfinite"),e.invalidateQueries(["posts","infinite"]),e.invalidateQueries(["post",i.postId]),e.invalidateQueries(["isLiked",i.postId,i.uid])}})}function $t(e,n){return G(["isLiked",e,n],async()=>{if(!e||!n)return!1;const o=P(w,"posts",String(e),"likes",n);return(await re(o)).exists()},{staleTime:N.NONE})}function St(e,n=null){const[o,i]=u.useState(n);return u.useEffect(()=>{if(!e)return;const r=en(P(w,"posts",String(e)),a=>{a.exists()&&i({...a.data(),id:a.id})});return()=>r()},[e]),o}function fo(e){const n=u.useRef(null),o=_();return u.useEffect(()=>{const i=n.current;if(!i||!e)return;const r=document.getElementById("topLayout"),a=new IntersectionObserver((d,f)=>{const p=d[0];p.isIntersecting&&(o.prefetchQuery(["post",e],()=>wt(e)),f.unobserve(p.target))},{root:r,threshold:.1});return a.observe(i),()=>a.disconnect()},[e,o]),n}const xo={touchedPostScrollY:0,scrollElement:null},It=X({name:"clickInfo",initialState:xo,reducers:{scrollLocationSave(e,n){e.touchedPostScrollY=n.payload},scrollElementSave(e,n){e.scrollElement===null&&(e.scrollElement=n.payload)},resetScrollLocation(e){e.touchedPostScrollY=0}}}),{scrollLocationSave:go,scrollElementSave:ho,resetScrollLocation:mo}=It.actions,yo=It.reducer,jo=s.table`
    width: 100%;
    border-collapse: collapse;
    cursor: pointer;
`,ko=s.tr`
    display: grid;
    grid-template-columns: 7fr 4fr 2fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 2fr 3fr;
    }

    padding: 12px 10px;
`,ye=s.td`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    &:first-child {
        justify-content: start;
        flex-direction: column;
        align-items: flex-start;
    }
`,bo=s.div`
    font-size: medium;
    font-weight: bold;
    color: ${e=>e.theme.containerText};
    opacity: 0.75;
    padding-right: 5px;
`,wo=s.div`
    font-size: x-small;
`,Co=s.div`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
`,vo=s.div`
    font-size: small;
    font-weight: bold;
    opacity: 0.5;
    padding-left: 5px;
`,Oe=s.div`
    font-size: small;
    opacity: 0.5;
`,$o=s.div`
    font-size: x-small;
    opacity: 0.5;
`,So=q`
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
`,Io=s.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    ${({$animate:e})=>e&&be`
            animation: ${So} 0.3s;
        `}
`;function Ve({post:e}){const n=ie(),o=A(),i=I(M=>M.userInfo.loginUser),r=St(e.id,e),a=Ct(),d=vt(),{data:f}=$t(e.id,i&&i.uid),[p,c]=ne.useState(""),[m,g]=ne.useState(!1),h=r||e,x=fo(e.id),v=M=>{o(go(Fi())),n(`/post/${M}`)},b=M=>{if(M.stopPropagation(),!i){c("로그인이 필요합니다.");return}g(!0),Ge(),f?d.mutate({postId:e.id,uid:i.uid}):a.mutate({postId:e.id,uid:i.uid})};return t.jsxs(t.Fragment,{children:[t.jsx(jo,{id:h.postId,onClick:()=>v(h.id),ref:x,children:t.jsx("tbody",{children:t.jsxs(ko,{children:[t.jsxs(ye,{children:[t.jsx(bo,{children:h.title}),t.jsxs(Co,{children:[t.jsx(wo,{children:h.category.name}),t.jsxs(Io,{onClick:b,style:{opacity:f?.5:1},$animate:m,onAnimationEnd:()=>g(!1),children:[f?t.jsx(pt,{color:"blue"}):t.jsx(Ne,{}),t.jsx(Oe,{children:h.likesCount??0})]})]})]}),t.jsx(ye,{children:t.jsx(vo,{children:h.profile.nickname})}),t.jsx(ye,{children:t.jsx(Oe,{children:h.comments})}),t.jsx(ye,{children:t.jsx(Oe,{children:h.views??0})}),t.jsx(ye,{children:t.jsx($o,{children:h.created})})]})})}),t.jsx(kt,{$padding:"0px 10px",$border:"1px solid gray",$opacity:"0.15"}),p&&t.jsx(Ce,{message:p,onClose:()=>c("")})]})}const Bo=q`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Do=s.div`
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${Bo} 2s linear infinite;
`,Po=s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;function Fe(){return t.jsx(Po,{children:t.jsx(Do,{})})}function Bt(e,n="title",o=20){const r=((e==null?void 0:e.trim().toLowerCase())||"").split(/\s+/).filter(a=>a);return G(["searchPosts",r.join(" "),n,o],async()=>{if(r.length===0)return[];const a=U(w,"posts");let d;n==="nickname"?d=R(a,H("profile.nickname"),nn(r[0]),tn(r[0]+""),ke(o)):r.length===1?d=R(a,pe("keywords","array-contains",r[0]),H("created","desc"),ke(o)):d=R(a,pe("keywords","array-contains-any",r),H("created","desc"),ke(o));let p=(await K(d)).docs.map(c=>({...c.data(),id:c.id}));return n==="nickname"&&(p=p.filter(c=>r.every(m=>c.profile.nickname.toLowerCase().includes(m))),p.sort((c,m)=>m.created-c.created)),p},{enabled:r.length>0,staleTime:N.NONE})}function Eo(){const e=I(x=>x.clickInfo),n=I(x=>x.filteringOption),o=I(x=>x.search),i=A(),{data:r,isLoading:a,fetchNextPage:d,hasNextPage:f,isFetchingNextPage:p}=po(10),c=u.useRef(null),m=r?r.pages.flatMap(x=>x.posts):[],{data:g}=Bt(o.keyword,o.type),h=o.keyword.length>=2?g||[]:Wi(Qi(m,n.filteringOption),"",o.type);return u.useLayoutEffect(()=>{e.touchedPostScrollY!==0&&m.length>0&&(document.getElementById("topLayout").scrollTo(0,e.touchedPostScrollY),i(mo()))},[e.touchedPostScrollY,m]),u.useEffect(()=>{const x=c.current;if(!x)return;const v=document.getElementById("topLayout"),b=new IntersectionObserver(M=>{M[0].isIntersecting&&f&&!p&&d()},{root:v,threshold:1});return b.observe(x),()=>b.disconnect()},[d,f,p]),t.jsxs("main",{children:[t.jsx(io,{}),t.jsx(kt,{$padding:"0px 10px",$border:"2px solid gray",$opacity:"0.15"}),a&&m.length===0?t.jsx(Fe,{}):t.jsxs(t.Fragment,{children:[h.map(x=>t.jsx(Ve,{post:x},x.postId)),t.jsx("div",{ref:c}),p&&t.jsx(Fe,{})]})]})}const Mo={filteringOption:"최신"},Dt=X({name:"filteringOption",initialState:Mo,reducers:{filteringOptionSave(e,n){e.filteringOption=n.payload}}}),{filteringOptionSave:To}=Dt.actions,Lo=Dt.reducer,Ao=s.div`
    display: flex;
    background-color: ${e=>e.theme.categoryContainerBackground};
    color: ${e=>e.theme.categoryContainerText};
`,Oo=s.select`
    text-align: center;
    font-size: larger;
    padding: 4px 8px;
    margin-left: 5px;
    border-radius: 8px;
    background-color: ${e=>e.theme.categoryContainerBackground};
    color: ${e=>e.theme.categoryContainerText};
`;function Ro({options:e,...n}){const o=A(),i=I(a=>a.filteringOption),r=a=>{o(To(a.target.value))};return t.jsx(Ao,{children:t.jsx(Oo,{id:"forumOption",...n,onChange:r,value:i.filteringOption,children:e.map(a=>t.jsx("option",{value:a.value,onChange:()=>r(),children:a.label},a.value))})})}const Uo=s.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;

    height: 100%;
    margin-top: 10px;
`,_o=s.div`
    font-size: ${e=>e.fontSize};
    text-align: end;
    margin-right: 10px;
    background-color: ${e=>e.theme.writeContainerBackground};
    color: ${e=>e.theme.writeContainerText};
`;function No(){const e=I(r=>r.userInfo),n=A(),o=oe(),i=()=>{n(fe())};return t.jsxs(Uo,{children:[t.jsx(Ro,{options:He}),t.jsx(_o,{fontSize:We("writeBox"),children:e.loginUser&&t.jsx(E,{$onClick:i,text:"✚ 글쓰기",$padding:"6px 12px",$radius:"6px",$fontSize:"18px",$fontWeight:"larger",$backgroundColor:o.writeButtonBgColor,$color:o.writeButtonTextColor})})]})}function zo(e){const n=String(e);return G(["comments",n],async()=>{if(!e)return[];const o=R(U(w,"comments"),pe("postId","==",n),H("created"));return(await K(o)).docs.map(r=>({...r.data(),id:r.id}))},{staleTime:N.COMMENT})}function Fo(){const e=_();return F(async n=>{const o=await ut(U(w,"comments"),n);return n.postDocId&&await se(P(w,"posts",String(n.postDocId)),{comments:we(1)}),{...n,id:o.id}},{onSuccess:(n,o)=>{e.setQueryData(["comments",String(o.postId)],i=>i?[...i,n]:[n]),e.invalidateQueries("posts")}})}function Pt(){const e=_();return F(async({id:n,postId:o,postDocId:i})=>{await Pe(P(w,"comments",n)),i&&await se(P(w,"posts",String(i)),{comments:we(-1)})},{onSuccess:(n,o)=>{e.setQueryData(["comments",String(o.postId)],i=>i?i.filter(r=>r.id!==o.id):[]),e.invalidateQueries("posts")}})}function Qo(e){return G(["commentsByUser",e],async()=>{if(!e)return[];const n=R(U(w,"comments"),pe("profile.uid","==",e));return(await K(n)).docs.map(i=>({...i.data(),id:i.id}))},{staleTime:N.COMMENT})}function Wo(){return G("allComments",async()=>{const e=R(U(w,"comments"),H("created","desc"));return(await K(e)).docs.map(o=>({...o.data(),id:o.id}))},{staleTime:N.COMMENT})}const Ho=s.div`
    padding: 12px 20px;
`,qo=s.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`,Go=s.div`
    display: flex;
    align-items: center;
`,Ko=s.span`
    font-weight: bold;
    font-size: 15px;
`,Vo=s.span`
    font-size: 13px;
    color: #777;
    margin-left: 8px;
`,Yo=s.p`
    white-space: pre-wrap;
    word-break: keep-all;
    line-height: 1.6;
    font-size: 15px;
    margin-bottom: 4px;
`;function Xo({comment:e,canDelete:n,onDelete:o}){return t.jsxs(Ho,{children:[t.jsxs(qo,{children:[t.jsxs(Go,{children:[t.jsx(Ko,{children:e.profile.nickname}),t.jsx(Vo,{children:e.created})]}),n&&t.jsx(E,{text:"삭제",$fontSize:"small",$padding:"2px 4px",$backgroundColor:"lightgray",$onClick:o})]}),t.jsx(Yo,{children:e.content})]})}const Zo=s.form`
    display: flex;
    gap: 8px;
    padding: 16px 20px;
`,Jo=s.textarea`
    flex-grow: 1;
    min-height: 48px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    line-height: 1.6;
    font-size: 15px;
`,ei=s.button`
    background: ${B.COLOR_PRIMARY_GRAY};
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0 12px;
    cursor: pointer;
`;function ti({postId:e,postDocId:n}){const o=I(p=>p.userInfo.loginUser),[i,r]=u.useState(""),a=Fo();if(!o)return null;const d=p=>{if(p.preventDefault(),!i.trim())return;const c=o.displayName.split(" ")[0],m=o.uid;a.mutate({postId:String(e),postDocId:n,profile:{nickname:c,uid:m},content:i,created:qe()},{onSuccess:()=>r("")})},f=p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),d(p))};return t.jsxs(Zo,{onSubmit:d,children:[t.jsx(Jo,{value:i,onChange:p=>r(p.target.value),onKeyDown:f,placeholder:"여기에 댓글을 입력하세요"}),t.jsx(ei,{type:"submit",children:"등록"})]})}const Et="list";async function ni(){try{const o=await re(P(w,"admins",Et));if(o.exists()){const i=o.data().emails||[];return localStorage.setItem("adminEmails",JSON.stringify(i)),i}}catch(o){console.error(o)}const e=localStorage.getItem("adminEmails");if(e)try{return JSON.parse(e)}catch{}const n=["dlwjd164@gmail.com"];return localStorage.setItem("adminEmails",JSON.stringify(n)),n}async function Ze(e){try{await Ee(P(w,"admins",Et),{emails:e},{merge:!0}),localStorage.setItem("adminEmails",JSON.stringify(e))}catch(n){console.error(n),localStorage.setItem("adminEmails",JSON.stringify(e))}}function Mt(){const e=localStorage.getItem("adminEmails");if(e)try{return JSON.parse(e)}catch{}return["dlwjd164@gmail.com"]}function Ye(e){return e?Mt().includes(e.email):!1}const oi=s.hr`
    border: 1px solid #eee;
    margin: 0 20px;
`;function ii({postId:e,postDocId:n}){const{data:o}=zo(e),i=I(f=>f.userInfo.loginUser),r=Ye(i),a=Pt(),d=f=>{window.confirm("댓글을 삭제하시겠습니까?")&&a.mutate({id:f.id,postId:String(e),postDocId:n})};return t.jsxs("section",{children:[o&&o.map(f=>t.jsxs(ne.Fragment,{children:[t.jsx(Xo,{comment:f,canDelete:i&&i.uid===f.profile.uid||r,onDelete:()=>d(f)}),t.jsx(oi,{})]},f.id)),t.jsx(ti,{postId:e,postDocId:n})]})}const ri=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1200;
`,si=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    border-radius: 16px;
    padding: 24px;
    width: 90%;
    max-width: 500px;
`,ai=s.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`,$e=s.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
`,Se=s.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 4px;
    background-color: ${e=>e.$bgColor||"#f1f1f1"};
`,Ie=s.span`
    font-size: 14px;
`,ci=s.input`
    margin-top: 20px;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
`,li=s.div`
    margin-top: 8px;
    font-size: 12px;
    color: ${B.COLOR_PRIMARY_GRAY};
`,Je=s.div`
    margin-top: 4px;
    font-size: 12px;
    color: green;
`,di=s.button`
    margin-top: 24px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
`,ui=s.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;function pi({title:e,description:n,url:o,trigger:i}){const[r,a]=u.useState(!1),[d,f]=u.useState(!1),[p,c]=u.useState(""),[m,g]=u.useState(""),h=u.useRef(null);V(h,()=>a(!1));const x=o||window.location.href;u.useEffect(()=>{const T=()=>{try{window.Kakao.isInitialized()||window.Kakao.init("dfbc9a8c1ff55dce8f7d4f07a1817162"),f(!0)}catch{c("Kakao SDK 초기화 실패")}};if(window.Kakao)T();else{const C=document.createElement("script");C.src="https://developers.kakao.com/sdk/js/kakao.min.js",C.onload=T,C.onerror=()=>c("Kakao SDK 로딩 실패"),document.head.appendChild(C)}},[]);const v=()=>{if(!d){c("카카오톡을 사용할 수 없습니다");return}window.Kakao.Share.sendDefault({objectType:"feed",content:{title:e,description:n,imageUrl:`${window.location.origin}/logo192.png`,link:{mobileWebUrl:x,webUrl:x}},buttons:[{title:"웹으로 보기",link:{mobileWebUrl:x,webUrl:x}}]})},b=async()=>{try{await navigator.clipboard.writeText(x),g("복사되었습니다"),setTimeout(()=>g(""),B.COPY_MSG_DURATION_MS)}catch{g("복사 실패")}};u.useEffect(()=>{if(!r)return;const T=h.current.querySelectorAll("button, input, a");if(T.length===0)return;const C=T[0],j=T[T.length-1],k=D=>{D.key==="Tab"&&(D.shiftKey?document.activeElement===C&&(D.preventDefault(),j.focus()):document.activeElement===j&&(D.preventDefault(),C.focus()))};return C.focus(),document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[r]);const M=oe(),O=i?ne.cloneElement(i,{onClick:()=>a(!0)}):t.jsx(E,{text:"공유하기",$padding:"4px 8px",$backgroundColor:M.buttonBackground,$color:M.buttonTextColor,$radius:"6px",$fontSize:"small",$onClick:()=>a(!0)});return t.jsxs("div",{children:[O,r&&t.jsx(ri,{children:t.jsxs(si,{ref:h,children:[t.jsx(ui,{children:"공유하기"}),t.jsxs(ai,{children:[t.jsxs($e,{onClick:v,disabled:!d,"aria-label":"kakao",children:[t.jsx(Se,{$bgColor:"#FFE812",children:t.jsx(on,{size:28,color:"#000000"})}),t.jsx(Ie,{children:"카카오톡"})]}),t.jsxs($e,{as:"a",href:`sms:?body=${encodeURIComponent(x)}`,"aria-label":"sms",children:[t.jsx(Se,{$bgColor:"#CCE5FF",children:t.jsx(rn,{size:28,color:"#555555"})}),t.jsx(Ie,{children:"메시지"})]}),t.jsxs($e,{as:"a",href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(x)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"facebook",children:[t.jsx(Se,{$bgColor:"#3b5998",children:t.jsx(sn,{size:28,color:"#ffffff"})}),t.jsx(Ie,{children:"페이스북"})]}),t.jsxs($e,{as:"a",href:`https://twitter.com/intent/tweet?url=${encodeURIComponent(x)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"twitter",children:[t.jsx(Se,{$bgColor:"#1da1f2",children:t.jsx(an,{size:28,color:"#ffffff"})}),t.jsx(Ie,{children:"트위터"})]})]}),t.jsx(ci,{value:x,onClick:b,readOnly:!0}),t.jsx(li,{children:"위 URL을 짧게 누르시면 복사하실 수 있습니다."}),m&&t.jsx(Je,{children:m}),p&&t.jsx(Je,{style:{color:"red"},children:p}),t.jsx(di,{onClick:()=>a(!1),children:"닫기"})]})})]})}function Te(e="A",n="#888"){const o=document.createElement("canvas"),i=40;o.width=i,o.height=i;const r=o.getContext("2d");return r?(r.fillStyle=n,r.fillRect(0,0,i,i),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font="bold 20px sans-serif",r.fillText(e.charAt(0),i/2,i/2),o.toDataURL("image/jpeg",.7)):""}const fi={detailPostInfo:null},Tt=X({name:"detailPostInfo",initialState:fi,reducers:{saveDetailPost(e,n){e.detailPostInfo=n.payload}}}),{saveDetailPost:xi}=Tt.actions,gi=Tt.reducer,hi={latestPostData:null,informationOfModifyingPost:null},Lt=X({name:"postInfo",initialState:hi,reducers:{latestPostDataSave(e,n){e.latestPostData===null&&(e.latestPostData=n.payload)},addPost(e,n){e.latestPostData?e.latestPostData.unshift(n.payload):e.latestPostData=[n.payload]},deletePost(e,n){e.latestPostData&&(e.latestPostData=e.latestPostData.filter(o=>Number(o.postId)!==Number(n.payload)))},saveEditingPost(e,n){e.informationOfModifyingPost=n.payload},updatePost(e){e.latestPostData&&(e.latestPostData=[...e.latestPostData])}}}),{latestPostDataSave:Ms,addPost:Ts,deletePost:Ls,saveEditingPost:Qe,updatePost:As}=Lt.actions,mi=Lt.reducer;function yi(){u.useEffect(()=>{const e=n=>{n.preventDefault()};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[])}function ji(e){return G(["bookmarks",e],async()=>{if(!e)return[];const n=R(U(w,"users",e,"bookmarks"),H("created","desc")),o=await K(n),i=[];for(const r of o.docs){const a=P(w,"posts",r.id),d=await re(a);d.exists()&&i.push({...d.data(),id:d.id})}return i},{staleTime:N.NONE})}function ki(){const e=_();return F(async({postId:n,uid:o})=>{const i=P(w,"users",o,"bookmarks",String(n));await Ee(i,{postId:n,created:Date.now()})},{onSuccess:(n,o)=>{e.invalidateQueries(["bookmarks",o.uid]),e.invalidateQueries(["isBookmarked",o.postId,o.uid])}})}function bi(){const e=_();return F(async({postId:n,uid:o})=>{const i=P(w,"users",o,"bookmarks",String(n));await Pe(i)},{onSuccess:(n,o)=>{e.invalidateQueries(["bookmarks",o.uid]),e.invalidateQueries(["isBookmarked",o.postId,o.uid])}})}function wi(e,n){return G(["isBookmarked",e,n],async()=>{if(!e||!n)return!1;const o=P(w,"users",n,"bookmarks",String(e));return(await re(o)).exists()},{staleTime:N.NONE})}const Ci=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${B.Z_INDEX_MODAL};
`,vi=s.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: ${B.MODAL_MAX_WIDTH};
    text-align: center;
`,$i=s.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;function Si({message:e,onConfirm:n,onCancel:o,confirmText:i="확인",cancelText:r="취소"}){const a=u.useRef(null);V(a,o);const d=oe();return t.jsx(Ci,{children:t.jsxs(vi,{ref:a,children:[t.jsx("div",{children:e}),t.jsxs($i,{children:[t.jsx(E,{text:r,$backgroundColor:d.buttonBackground,$color:d.buttonTextColor,$padding:"8px",$onClick:o}),t.jsx(E,{text:i,$backgroundColor:d.primaryButtonBackground,$color:d.primaryButtonTextColor,$padding:"8px",$onClick:n})]})]})})}const Be=s.main`
  max-width: 680px;
  margin: 0 auto;
  padding: 0px 10px;
`,Ii=s.header`
  padding-top: 10px;
`,Bi=s.h1`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: ${e=>e.theme.containerText};
  overflow-wrap: break-word;
`;s.span`
  display: inline-block;
  background: #f2f2f2;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 6px;
  margin-right: 8px;
`;s.div`
  font-size: 13px;
  color: #888;
`;const Di=s.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`,et=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #777;
  font-size: 15px;
`,Pi=s.article`
  padding: 30px 0;
  line-height: 1.7;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  white-space: pre-wrap;
`;s.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
`;const tt=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  ${({$animate:e})=>e&&be`
      animation: ${At} 0.3s;
    `};
`;s.span`
  font-size: 13px;
  color: #777;
`;const At=q`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`,nt=s.hr`
  border: 1px solid #eee;
  margin: 0px 0;
`,Ei=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
`,Mi=s.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,Ti=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  color: #888;
`,Li=s.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 12px;
`,Ai=s.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 12px;
`,Oi=s.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`,Ri=s.div`
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  ${({$animate:e})=>e&&be`
      animation: ${At} 0.3s;
    `};
`,Ui=s.span`
  font-size: 13px;
  color: ${({$liked:e})=>e?"blue":"inherit"};
`;function _i(){var l;const e=A(),n=ie();I(y=>y.detailPostInfo);const o=I(y=>y.userInfo),i=Ye(o.loginUser);yi();const{id:r}=cn(),{data:a,isLoading:d,error:f}=uo(r),c=St(r,a)||a,m=bt(),g=lo();u.useEffect(()=>{const y=document.getElementById("topLayout");y&&y.scrollTo(0,0)},[]),u.useEffect(()=>{if(!c)return;const y=`view_${c.id}`,$=localStorage.getItem(y),S=Date.now();(!$||S-Number($)>zn.DUPLICATE_INTERVAL_12HOUR)&&(g.mutate({id:c.id}),localStorage.setItem(y,String(S)))},[c,g]);const h=o.loginUser&&o.loginUser.uid,x=Ct(),v=vt(),{data:b}=$t(r,h),M=ki(),O=bi(),{data:T}=wi(r,h),[C,j]=u.useState(""),[k,D]=u.useState(null),[Z,z]=u.useState(!1),[ae,J]=u.useState(!1);u.useEffect(()=>{e(xi(c))},[e,c]),u.useEffect(()=>{if(c){const y=document.getElementById("topLayout");y&&y.scrollTo(0,0)}},[r]);const Q=o.loginUser&&(i||h===(c==null?void 0:c.profile.uid)),Y=()=>{Q&&D({action:"delete",message:"정말로 이 게시글을 삭제하시겠습니까?"})},ce=()=>{if(!h){j("로그인이 필요합니다.");return}c&&(J(!0),Ge(),b?v.mutate({postId:c.id,uid:h}):x.mutate({postId:c.id,uid:h}))},ee=()=>{if(!h){j("로그인이 필요합니다."),Ge();return}c&&(z(!0),T?O.mutate({postId:c.id,uid:h}):M.mutate({postId:c.id,uid:h}))},xe=()=>{Q&&D({action:"edit",message:"이 게시글을 수정하시겠습니까?"})},ge=()=>{k&&(k.action==="delete"&&c?m.mutate({id:c.id},{onSuccess:()=>{n("/",{replace:!0}),D(null),j("삭제 완료했습니다!")}}):k.action==="edit"&&(e(Qe(c)),e(fe()),D(null)))},he=()=>D(null);return d?t.jsx(Be,{children:t.jsx(Fe,{})}):f?t.jsx(Be,{children:t.jsx("p",{style:{padding:"20px"},children:"게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요."})}):c?t.jsx(Be,{children:t.jsxs(t.Fragment,{children:[t.jsx(Ii,{children:t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[t.jsx(Bi,{children:c.title}),t.jsxs(Di,{children:[Q&&t.jsxs(et,{onClick:xe,children:[t.jsx(ln,{})," 수정"]}),Q&&t.jsxs(et,{onClick:Y,children:[t.jsx(dn,{})," 삭제"]})]})]})}),t.jsxs(Ei,{children:[t.jsx(Mi,{src:Te(((l=c.profile.nickname)==null?void 0:l.charAt(0))||"A","#888888"),alt:""}),t.jsx("span",{children:c.profile.nickname})]}),t.jsxs(Ti,{children:[t.jsxs(Li,{children:[t.jsx("span",{children:c.created}),t.jsxs("span",{children:[t.jsx(un,{})," ",c.views??0]}),t.jsxs("span",{children:[t.jsx(pn,{})," ",c.comments]}),t.jsxs("span",{children:[t.jsx(Ne,{})," ",c.likesCount??0]})]}),t.jsxs(Ai,{children:[t.jsx(tt,{onClick:ee,style:{opacity:T?.5:1},$animate:Z,onAnimationEnd:()=>z(!1),children:T?t.jsx(fn,{color:"orange"}):t.jsx(xn,{})}),t.jsx(pi,{title:c.title,description:c.content,trigger:t.jsx(tt,{children:t.jsx(gn,{})})})]})]}),t.jsx(nt,{}),t.jsx(Pi,{children:c.content}),t.jsx(Oi,{children:t.jsxs(Ri,{onClick:ce,style:{opacity:b?.5:1},$animate:ae,onAnimationEnd:()=>J(!1),children:[b?t.jsx(pt,{color:"blue",size:24}):t.jsx(Ne,{size:24}),t.jsx(Ui,{$liked:b,children:"추천하기"})]})}),t.jsx(nt,{}),t.jsx(ii,{postId:c.postId,postDocId:c.id}),k&&t.jsx(Si,{message:k.message,onConfirm:ge,onCancel:he,confirmText:k.action==="delete"?"삭제":"수정",cancelText:"취소"}),C&&t.jsx(Ce,{message:C,onClose:()=>j("")})]})}):t.jsx(Be,{children:t.jsx("p",{style:{padding:"20px"},children:"게시글을 찾을 수 없습니다."})})}function le(e){const n=e.match(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/);if(!n)return new Date;const[,o,i,r,a,d]=n;return new Date(`20${o}-${i}-${r}T${a}:${d}:00`)}const Ni={HomeLogoBox:"xx-large",MenuOptionBox:"medium",writeBox:"medium"},We=e=>Ni[e]||"medium",ot=()=>{const e=window.navigator.userAgent,n=/iPhone|iPad|iPod/.test(e),o=/^((?!chrome|android).)*safari/i.test(e);return n&&o},zi={Navigation:({onOpenMenu:e})=>t.jsx(jt,{handleHamburgerMenuModal:e}),PostControllerBar:No,PostContentsBox:Eo,PostDetail:_i},Ot=(e,n)=>{const o=zi[e];return o?e==="Navigation"?t.jsx(jt,{handleHamburgerMenuModal:n}):t.jsx(o,{}):null};function Fi(){const e=document.getElementById("topLayout");return e?e.scrollTop:0}const He=[{value:"최신",label:"최신"},{value:"🟠 자유포럼",label:"🟠 자유포럼"},{value:"🔶 지름후기",label:"🔶 지름후기"},{value:"🛒 핫딜공유",label:"🛒 핫딜공유"},{value:"🔵 꿀팁공유",label:"🔵 꿀팁공유"},{value:"🔘 공지사항",label:"🔘 공지사항"}],Qi=(e,n)=>n!=="최신"?e.filter(o=>o.category.name.includes(n)):e,Wi=(e,n,o="title")=>e,Hi=(e="",n="")=>{const o=`${e} ${n}`.trim().toLowerCase().split(/\s+/).filter(r=>r),i=new Set;o.forEach(r=>i.add(r));for(let r=0;r<o.length-1;r++)i.add(`${o[r]} ${o[r+1]}`);return Array.from(i)};function qi(e,n){let o=e.postId,i=o,r=!1;for(const a of n)a.postId===o&&(r=!0),a.postId>i&&(i=a.postId);return r&&(o=i+1),o}function qe(){const e=new Date,n=e.getFullYear().toString().slice(-2),o=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0");return`${n}/${o}/${i}/${r}:${a}`}function Ge(e=50){typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(e)}const Gi=s.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    /* border: 3px solid gray; */
`,Ki=s.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
    height: 40px;
`,Vi=["Navigation","PostControllerBar","PostContentsBox"];function Yi(){const e=A(),n=()=>{e(xt())};return t.jsx(Gi,{children:Vi.map(o=>t.jsx(Ki,{children:Ot(o,n)},o))})}const Xi=s.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    /* border: 3px solid gray; */
`,Zi=s.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.

    height: 40px;
`,Ji=["Navigation","PostDetail"];function it(){const e=A(),n=()=>{e(xt())};return t.jsx(Xi,{children:Ji.map(o=>t.jsx(Zi,{children:Ot(o,n)},o))})}async function er(e,n){if(!e||!n)return;const o=["posts","comments"];await Promise.all(o.map(async i=>{const r=R(U(w,i),pe("profile.uid","==",e)),d=(await K(r)).docs.map(f=>se(P(w,i,f.id),{"profile.nickname":n}));await Promise.all(d)}))}const rt="https://ensil-dev.github.io/DogGain_Forum/logo192.png",tr=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${B.Z_INDEX_MENU};
`,nr=s.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 400px;

    @media (max-width: 550px) {
    gap: 2px;
    max-width: 250px;
  }
`,st=s.input`
    padding: 8px;
`,Re=s.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;function or({photoUrl:e,setPhotoUrl:n,defaultChar:o,setDefaultChar:i,bgColor:r,setBgColor:a,onPhotoUpdate:d,onDefaultPhoto:f,onLogoPhoto:p,onClose:c}){const m=u.useRef(null);return V(m,c),t.jsx(tr,{children:t.jsxs(nr,{ref:m,children:[t.jsx("h3",{children:"프로필 사진 변경"}),t.jsx(Re,{src:e||rt,alt:"profile preview",referrerPolicy:"no-referrer"}),t.jsx(st,{value:e,onChange:g=>n(g.target.value),placeholder:"사진 URL"}),t.jsx(E,{text:"URL 적용",$backgroundColor:B.COLOR_PRIMARY_GRAY,$color:"white",$padding:"8px",$onClick:d}),t.jsx("h3",{children:"1글자 프로필 사진 설정"}),t.jsx(Re,{src:Te(o||" ",r),alt:"letter preview"}),t.jsx(st,{value:o,onChange:g=>i(g.target.value.slice(0,1)),placeholder:"한 글자"}),t.jsx("input",{type:"color",value:r,onChange:g=>a(g.target.value),style:{width:"60px",height:"34px",padding:0}}),t.jsx(E,{text:"기본 이미지 적용",$backgroundColor:B.COLOR_PRIMARY_GRAY,$color:"white",$padding:"8px",$onClick:f}),t.jsx("h3",{children:"기본 로고로 변경"}),t.jsx(Re,{src:rt,alt:"logo preview"}),t.jsx(E,{text:"기본 로고 적용",$backgroundColor:B.COLOR_PRIMARY_GRAY,$color:"white",$padding:"8px",$onClick:p})]})})}const at="https://ensil-dev.github.io/DogGain_Forum/logo192.png",ir=s.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
`,Ue=s.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,rr=s.input`
    padding: 8px;
`;s.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;const sr=s.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;function ar(){const e=I(j=>j.userInfo.loginUser),n=A(),[o,i]=u.useState(e?e.displayName.split(" ")[0]:""),[r,a]=u.useState((e==null?void 0:e.photoURL)||""),[d,f]=u.useState(""),[p,c]=u.useState(e?e.displayName.charAt(0):""),[m,g]=u.useState("#888888"),[h,x]=u.useState(!1),v=oe(),b=j=>{f(j)},M=async()=>{const j=o.trim();if(j.length<2||j.length>10){b("프로필 이름은 2글자 이상 10글자 이하여야 합니다.");return}try{if(L.currentUser){const k=L.currentUser.uid,D=U(w,"userProfiles"),Z=R(D,pe("nickname","==",j)),z=await K(Z);if(!z.empty&&z.docs[0].id!==k){b("이미 사용 중인 닉네임입니다.");return}const ae=e.displayName.split(" ")[0];await ve(L.currentUser,{displayName:j}),await er(k,j),await Ee(P(w,"userProfiles",k),{nickname:j},{merge:!0}),n(ue(L.currentUser)),b("프로필 이름이 변경되었습니다.")}}catch(k){console.error(k),b("프로필 이름 변경에 실패했습니다.")}},O=async()=>{const j=r.trim();if(!j){b("사진 URL을 입력해주세요.");return}try{L.currentUser&&(await ve(L.currentUser,{photoURL:j}),n(ue(L.currentUser)),b("프로필 사진이 변경되었습니다."))}catch(k){console.error(k),b((k==null?void 0:k.message)||"프로필 사진 변경에 실패했습니다.")}},T=async()=>{const j=p.trim();if(!j){b("한 글자를 입력해주세요.");return}const k=Te(j[0],m);try{L.currentUser&&(await ve(L.currentUser,{photoURL:k}),n(ue(L.currentUser)),a(k),b("기본 프로필 사진이 설정되었습니다."))}catch(D){console.error(D),b((D==null?void 0:D.message)||"기본 프로필 사진 설정에 실패했습니다.")}},C=async()=>{try{L.currentUser&&(await ve(L.currentUser,{photoURL:at}),n(ue(L.currentUser)),a(at),b("기본 로고로 변경되었습니다."))}catch(j){console.error(j),b((j==null?void 0:j.message)||"기본 로고 변경에 실패했습니다.")}};return e?t.jsxs("main",{children:[t.jsxs(ir,{children:[t.jsx("h2",{children:"프로필 설정"}),t.jsxs(Ue,{children:[t.jsx("h3",{children:"구글 계정"}),t.jsxs(sr,{children:[t.jsx(hn,{size:20}),t.jsx("span",{children:e.email})]})]}),t.jsx(Ue,{children:t.jsx(E,{text:"프로필 사진 변경",$backgroundColor:v.primaryButtonBackground,$color:v.primaryButtonTextColor,$padding:"8px",$onClick:()=>x(!0)})}),t.jsxs(Ue,{children:[t.jsx("h3",{children:"닉네임 변경"}),t.jsxs("p",{children:["현재 닉네임: ",e.displayName.split(" ")[0]]}),t.jsx(rr,{value:o,onChange:j=>i(j.target.value),placeholder:"새 프로필 이름 (2~10자)"}),t.jsx(E,{text:"변경",$backgroundColor:v.primaryButtonBackground,$color:v.primaryButtonTextColor,$padding:"8px",$onClick:M})]})]}),d&&t.jsx(Ce,{message:d,onClose:()=>f("")}),h&&t.jsx(or,{photoUrl:r,setPhotoUrl:a,defaultChar:p,setDefaultChar:c,bgColor:m,setBgColor:g,onPhotoUpdate:O,onDefaultPhoto:T,onLogoPhoto:C,onClose:()=>x(!1)})]}):t.jsx("div",{style:{padding:"20px"},children:"로그인이 필요합니다."})}function cr(){const e=I(g=>g.userInfo.loginUser),n=e?e.uid:"",{data:o}=Ke(),i=o,{data:r}=Qo(n),a=r,d=ie(),[f,p]=u.useState("");if(!e)return t.jsx("div",{style:{padding:"20px"},children:"로그인이 필요합니다."});const c=i?i.filter(g=>g.profile.uid===n):[],m=c.filter(g=>g.title.toLowerCase().includes(f.toLowerCase())||g.content.toLowerCase().includes(f.toLowerCase()));return t.jsx("main",{children:t.jsxs("div",{style:{padding:"20px"},children:[t.jsxs("h2",{children:["내 게시글 (",c.length,")"]}),t.jsx("input",{type:"text",value:f,onChange:g=>p(g.target.value),placeholder:"검색",style:{padding:"4px",marginBottom:"10px"}}),m.length===0?t.jsx("p",{children:"게시글이 없습니다."}):m.map(g=>t.jsx(Ve,{post:g},g.postId)),t.jsxs("h2",{style:{marginTop:"20px"},children:["내 댓글 (",a?a.length:0,")"]}),a&&a.length>0?a.map(g=>t.jsxs("div",{style:{padding:"10px",borderBottom:"1px solid #eee"},children:[t.jsxs("div",{style:{fontSize:"small",marginBottom:"4px"},children:[g.created," |"," ",t.jsx("span",{style:{cursor:"pointer",color:"blue"},onClick:()=>d(`/post/${g.postDocId??g.postId}`),children:"게시글 이동"})]}),t.jsx("div",{style:{whiteSpace:"pre-wrap"},children:g.content})]},g.id)):t.jsx("p",{children:"댓글이 없습니다."})]})})}function lr(){const e=I(r=>r.userInfo.loginUser),n=e&&e.uid;if(!e)return t.jsx("div",{style:{padding:"20px"},children:"로그인이 필요합니다."});const{data:o}=ji(n),i=o;return t.jsx("main",{children:t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h2",{children:"북마크 목록"}),i&&i.length>0?i.map(r=>t.jsx(Ve,{post:r},r.postId)):t.jsx("p",{children:"북마크한 게시글이 없습니다."})]})})}const dr=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${B.Z_INDEX_MODAL};
`,ur=s.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 350px;
`;function pr({user:e,posts:n,comments:o,onClose:i}){const r=u.useRef(null);V(r,i);const a=n?n.filter(f=>f.profile.uid===e.uid).length:0,d=o?o.filter(f=>f.profile.uid===e.uid).length:0;return u.useEffect(()=>{const f=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=f}},[]),t.jsx(dr,{children:t.jsxs(ur,{ref:r,children:[t.jsx("h3",{children:"사용자 정보"}),t.jsxs("div",{children:["닉네임: ",e.nickname]}),t.jsxs("div",{children:["UID: ",e.uid]}),t.jsxs("div",{children:["게시글 수: ",a]}),t.jsxs("div",{children:["댓글 수: ",d]}),t.jsx(E,{text:"닫기",$backgroundColor:B.COLOR_PRIMARY_GRAY,$color:"white",$padding:"8px",$onClick:i})]})})}mn.register(yn,jn,kn,bn,wn);const fr=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`,xr=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,_e=s.div`
  flex: 1;
  min-width: 100px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
  background: ${e=>e.theme.statCard};
  text-align: center;
`,je=s.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,gr=s.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,W=s.input`
  padding: 8px;
`,ct=s.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 4px;
    font-size: small;
  }
  th {
    background: #f5f5f5;
  }
`;function hr(){const e=I(l=>l.userInfo.loginUser),n=ie(),[o,i]=u.useState(()=>Mt()),[r,a]=u.useState(""),[d,f]=u.useState(null),[p,c]=u.useState(""),[m,g]=u.useState(""),[h,x]=u.useState(""),[v,b]=u.useState(""),[M,O]=u.useState(!0),{data:T}=Ke(),C=T,{data:j}=Wo(),k=j,D=bt(),Z=Pt();u.useEffect(()=>{if(!e){n("/",{replace:!0});return}async function l(){const y=await ni();i(y),y.includes(e.email)||n("/",{replace:!0})}l()},[e,n]),u.useEffect(()=>{if(r===""){O(!0);return}O(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.trim()))},[r]);const z=async()=>{if(!e)return;const l=r.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){de.error("올바른 이메일 형식이 아닙니다.");return}if(o.includes(l)){de.error("이미 등록된 이메일입니다.");return}if(l){const $=[...o,l];i($),a(""),await Ze($),de.success("추가되었습니다")}},ae=async l=>{if(e&&window.confirm("삭제하시겠습니까?")){const y=o.filter($=>$!==l);i(y),await Ze(y),de.info("삭제되었습니다")}},J=l=>{window.confirm("게시글을 삭제하시겠습니까?")&&D.mutate({id:l.id})},Q=l=>{window.confirm("댓글을 삭제하시겠습니까?")&&Z.mutate({id:l.id,postId:l.postId,postDocId:l.postDocId})},Y=l=>{f(l)},ce=C==null?void 0:C.filter(l=>!(p&&!l.title.toLowerCase().includes(p.toLowerCase())||m&&l.profile.nickname!==m||h&&le(l.created)<new Date(h)||v&&le(l.created)>new Date(v))),ee=k==null?void 0:k.filter(l=>{var y;return!(p&&!l.content.toLowerCase().includes(p.toLowerCase())||m&&((y=l.profile)==null?void 0:y.nickname)!==m||h&&le(l.created)<new Date(h)||v&&le(l.created)>new Date(v))}),xe=ne.useMemo(()=>{const l={};(C||[]).forEach($=>{const S=le($.created).toLocaleDateString();l[S]=(l[S]||0)+1});const y=Object.keys(l).sort();return{labels:y,datasets:[{label:"게시글 수",data:y.map($=>l[$]),backgroundColor:"#4e79a7"}]}},[C]),ge=ne.useMemo(()=>{const l={};(k||[]).forEach($=>{const S=le($.created).toLocaleDateString();l[S]=(l[S]||0)+1});const y=Object.keys(l).sort();return{labels:y,datasets:[{label:"댓글 수",data:y.map($=>l[$]),backgroundColor:"#f28e2b"}]}},[k]),he=ne.useMemo(()=>{const l={};(C||[]).forEach($=>{l[$.profile.nickname]=(l[$.profile.nickname]||0)+1}),(k||[]).forEach($=>{$.profile&&(l[$.profile.nickname]=(l[$.profile.nickname]||0)+1)});const y=Object.keys(l);return{labels:y,datasets:[{label:"활동량",data:y.map($=>l[$]),backgroundColor:"#76b7b2"}]}},[C,k]);return t.jsx("main",{children:t.jsxs(fr,{children:[t.jsx("h2",{children:"관리자 대시보드"}),t.jsxs(xr,{children:[t.jsxs(_e,{children:[t.jsx("div",{children:"게시글 수"}),t.jsx("strong",{children:C?C.length:0})]}),t.jsxs(_e,{children:[t.jsx("div",{children:"댓글 수"}),t.jsx("strong",{children:k?k.length:0})]}),t.jsxs(_e,{children:[t.jsx("div",{children:"관리자 수"}),t.jsx("strong",{children:o.length})]})]}),t.jsxs(je,{children:[t.jsx("h3",{children:"통계"}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:[t.jsx("div",{style:{flex:1,minWidth:300},children:t.jsx(Ae,{data:xe})}),t.jsx("div",{style:{flex:1,minWidth:300},children:t.jsx(Ae,{data:ge})}),t.jsx("div",{style:{flex:1,minWidth:300},children:t.jsx(Ae,{data:he})})]})]}),t.jsxs(je,{children:[t.jsx("h3",{children:"관리자 이메일"}),t.jsx(gr,{children:o.map(l=>t.jsxs("li",{children:[l," ",t.jsx(E,{text:"삭제",$fontSize:"small",$padding:"2px 4px",$backgroundColor:"lightgray",$onClick:()=>ae(l)})]},l))}),t.jsx(W,{value:r,onChange:l=>a(l.target.value),placeholder:"이메일 추가",style:{border:M?"1px solid #ccc":"1px solid red"}}),t.jsx(E,{text:"추가",$padding:"4px 8px",$backgroundColor:B.COLOR_PRIMARY_GRAY,$color:"white",$fontSize:"small",$onClick:z})]}),t.jsxs(je,{children:[t.jsx("h3",{children:"게시글 관리"}),t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsx(W,{value:p,onChange:l=>c(l.target.value),placeholder:"키워드"}),t.jsx(W,{value:m,onChange:l=>g(l.target.value),placeholder:"작성자"}),t.jsx(W,{type:"date",value:h,onChange:l=>x(l.target.value)}),t.jsx(W,{type:"date",value:v,onChange:l=>b(l.target.value)})]}),t.jsxs(ct,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"제목"}),t.jsx("th",{children:"작성자"}),t.jsx("th",{children:"작성일"}),t.jsx("th",{children:"관리"})]})}),t.jsx("tbody",{children:ce&&ce.map(l=>t.jsxs("tr",{onClick:()=>n(`/post/${l.id}`),style:{cursor:"pointer"},children:[t.jsx("td",{children:l.title}),t.jsx("td",{style:{color:"blue",cursor:"pointer"},onClick:y=>{y.stopPropagation(),Y(l.profile)},children:l.profile.nickname}),t.jsx("td",{children:l.created}),t.jsx("td",{children:t.jsx(E,{text:"삭제",$fontSize:"small",$padding:"2px 4px",$backgroundColor:"lightgray",$onClick:y=>{y.stopPropagation(),J(l)}})})]},l.id))})]})]}),t.jsxs(je,{children:[t.jsx("h3",{children:"댓글 관리"}),t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsx(W,{value:p,onChange:l=>c(l.target.value),placeholder:"키워드"}),t.jsx(W,{value:m,onChange:l=>g(l.target.value),placeholder:"작성자"}),t.jsx(W,{type:"date",value:h,onChange:l=>x(l.target.value)}),t.jsx(W,{type:"date",value:v,onChange:l=>b(l.target.value)})]}),t.jsxs(ct,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"내용"}),t.jsx("th",{children:"작성자"}),t.jsx("th",{children:"작성일"}),t.jsx("th",{children:"관리"})]})}),t.jsx("tbody",{children:ee&&ee.map(l=>{var y;return t.jsxs("tr",{onClick:()=>n(`/post/${l.postDocId??l.postId}`),style:{cursor:"pointer"},children:[t.jsx("td",{style:{whiteSpace:"pre-wrap"},children:l.content}),t.jsx("td",{style:{color:"blue",cursor:"pointer"},onClick:$=>{$.stopPropagation(),l.profile&&Y(l.profile)},children:(y=l.profile)==null?void 0:y.nickname}),t.jsx("td",{children:l.created}),t.jsx("td",{children:t.jsx(E,{text:"삭제",$fontSize:"small",$padding:"2px 4px",$backgroundColor:"lightgray",$onClick:$=>{$.stopPropagation(),Q(l)}})})]},l.id)})})]})]}),t.jsxs(je,{children:[t.jsx("h3",{children:"신고/차단 관리"}),t.jsx("p",{children:"준비 중입니다."})]}),d&&t.jsx(pr,{user:d,posts:C||[],comments:k||[],onClose:()=>f(null)})]})})}const mr=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${B.Z_INDEX_MENU};
`,yr=s.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: ${B.MODAL_MAX_WIDTH};
`,De=s.button`
    padding: 8px;
    background-color: ${B.COLOR_PRIMARY_GRAY};
    color: #ffffff;
    border: none;
    cursor: pointer;
`;function jr({onClose:e}){const n=u.useRef(null),o=ie(),i=I(d=>d.userInfo.loginUser),r=Ye(i);V(n,e),u.useEffect(()=>{const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[]);const a=d=>{o(d),e()};return t.jsx(mr,{children:t.jsxs(yr,{ref:n,children:[t.jsx(De,{onClick:()=>a("/profile"),children:"프로필 설정"}),t.jsx(De,{onClick:()=>a("/history"),children:"히스토리"}),t.jsx(De,{onClick:()=>a("/bookmarks"),children:"북마크"}),r&&t.jsx(De,{onClick:()=>a("/admin"),children:"관리자 대시보드"})]})})}const kr=s.div`
    align-content: center;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25px;
    background-color: ${e=>e.theme.biContainerBackground};
    color: ${e=>e.theme.biContainerText};

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        align-content: center;
        grid-template-columns: 2fr 1fr;
    }
    height: 60px;
`,br=s.div`
    display: flex;

    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;

    text-align: end;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        padding-right: 20px;
    }
`,wr=s.div`
    margin-top: 6px;
`,Cr=s.img`
    width: 36px;
    height: 36px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Added shadow */
    cursor: pointer;
`,vr=s.div``,lt=s.div`
    width: 28px;
    height: 28px;
`;function $r(){var p;const e=I(c=>c.userInfo),{loginUser:n}=e,[o,i]=u.useState(!1),r=oe(),a=ie(),d=()=>{a("/",{replace:!0})},f=()=>{n&&i(!0)};return t.jsxs(kr,{children:[t.jsx(vr,{children:t.jsx(E,{text:"DogGain",$backgroundColor:r.biButtonBgColor,$color:r.biButtonTextColor,$onClick:d})}),t.jsxs(br,{children:[t.jsx(lt,{}),t.jsx(lt,{}),t.jsx(wr,{children:n!==null&&t.jsx(Cr,{src:n.photoURL?n.photoURL:Te(((p=n.displayName)==null?void 0:p.charAt(0))||" ","#888888"),alt:"",referrerPolicy:"no-referrer",onClick:f})})]}),o&&t.jsx(jr,{onClose:()=>i(!1)})]})}s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: ${B.MODAL_HEIGHT};
    position: relative;
`;const Sr=q`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,Ir=q`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,Br=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 0;
    
    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위한 flex */
    display: flex;
    justify-content: flex-start;

    align-items: center;
`;s.button`
    background-color: ${B.COLOR_ACCENT_PURPLE};
    text-decoration: none;
    border: none;
    padding: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
`;const Dr=s.div.attrs(e=>({role:"dialog"}))`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: ${e=>`${e.$width}px`||"330px"};
    height: 100vh;
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }

    animation: ${({$modalStore:e})=>e?Sr:Ir} 0.5s;
`,Pr=()=>{const e=I(r=>r.modal),n=A(),o=u.useRef(null);V(o,()=>{n({type:"HAMBURGER_MODAL_CHANGE"})});let i=window.innerWidth;return i>=550&&(i=780),t.jsx(t.Fragment,{children:e.isHamburgerModalOpen&&t.jsx(Br,{children:t.jsx(Dr,{ref:o,$width:i-130,$modalStore:e,children:t.jsx("div",{children:"사이드바 메뉴"})})})})},Er={keyword:"",type:"title"},Rt=X({name:"search",initialState:Er,reducers:{searchKeywordSave(e,n){e.keyword=n.payload},searchTypeSave(e,n){e.type=n.payload},searchClear(e){e.keyword="",e.type="title"}}}),{searchKeywordSave:Mr,searchTypeSave:Tr,searchClear:Os}=Rt.actions,Lr=Rt.reducer,Ar=s.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,Or=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${e=>e.theme.cardBackground};
  color: ${e=>e.theme.containerText};
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
`,Rr=s.input`
  padding: 8px;
  border-radius: 8px;
  font-size: medium;
`,Ur=s.button`
  padding: 8px;
  background-color: ${B.COLOR_PRIMARY_GRAY};
  color: #ffffff;
  border: none;
  cursor: pointer;
`,_r=s.select`
  padding: 4px 8px;
  border-radius: 6px;
`;function Nr(){const e=I(x=>x.modal),n=I(x=>x.search),o=A(),[i,r]=u.useState(""),[a,d]=u.useState(n.type),[f,p]=u.useState("");u.useEffect(()=>{const x=setTimeout(()=>p(i),300);return()=>clearTimeout(x)},[i]),Bt(f,a,10);const c=u.useRef(null);V(c,()=>{e.isSearchModalOpen&&o(ze())});const m=x=>x.type==="keydown"&&x.key!=="Enter",g=()=>{o(Mr(i.trim())),o(Tr(a)),o(ze())},h=x=>{!x||!x.type||m(x)||g()};return e.isSearchModalOpen?t.jsx(Ar,{children:t.jsxs(Or,{ref:c,children:[t.jsx(Rr,{autoFocus:!0,value:i,onChange:x=>r(x.target.value),onKeyDown:h,placeholder:"검색어를 입력하세요"}),t.jsxs(_r,{value:a,onChange:x=>d(x.target.value),children:[t.jsx("option",{value:"title",children:"제목"}),t.jsx("option",{value:"nickname",children:"닉네임"})]}),t.jsx(Ur,{onClick:h,children:"검색"})]})}):null}const zr=s.form`
    /* display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr; */

    width: 100%;
    margin-top: ${ot()&&"7.25rem"};
    height: ${ot()?"80%":"100%"};

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);

    @media screen and (min-width: 550px) {
        border-bottom: 1px solid rgb(222, 226, 230);
    }
`,Fr=s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    font-weight: 200;
    width: 24px;
    height: 24px;
    padding-right: 10px;

    /* @media screen and (min-width: 550px) {
        font-size: larger;
    } */

    cursor: pointer;
`,Qr=s.div`
    padding: 8px 0;
    border: none;
    /* background-color: lightblue; */
    background-color:  ${e=>e.theme.writingFormHeader};
`,Wr=s.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    height: 30px;
    padding: 0 8px;
    font-size: larger;
    font-weight: bold;
`,Hr=s.div`
    display: flex;
    justify-content: flex-end;
`,qr=s.div`
    padding: 24px 8px 0 8px;
    border: none;
    text-align: center;
`,Gr=s.input`
    width: 95%;
    height: 50px;
    padding-left: 8px;
`,Kr=s.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    height: 50px;
    padding: 8px;
    font-size: larger;
`,Vr=s.div`
    border: none;
    text-align: center;
`,Yr=s.select`
    padding: 4px;
`,Xr=s.div`
    display: flex;
    align-items: center;
`,Zr=s.div`
    width: 100px;
    font-size: small;
    font-weight: 500;
    text-align: end;
`,Jr=s.input`
    width: 100px;
`,es=s.div`
    padding: 0 8px;
    text-align: center;
`,ts=s.textarea`
    width: 95%;
    height: 40vh;
    padding-left: 8px;
    padding-top: 8px;
`,ns=s.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;
    padding: 12px 8px;
    text-align: center;
`,os=s.button`
    color: black;
    background-color: #efefef;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`,is=s.input`
    padding: 10px;
    background-color: ${B.COLOR_PRIMARY_GRAY};
    color: #ffffff;
    opacity: 0.8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;function rs({handleWritingModal:e}){const n=A(),o=I(S=>S.postInfo),{informationOfModifyingPost:i}=o,{data:r}=Ke(),a=ao(),d=co(),f=I(S=>S.userInfo),{loginUser:p}=f,c=p.displayName.split(" ")[0],m=p.uid,[g,h]=u.useState(""),[x,v]=u.useState(He[1].value),[b,M]=u.useState(c),[O,T]=u.useState(""),[C,j]=u.useState(!1),[k,D]=u.useState(!1),[Z,z]=u.useState(!0),[ae,J]=u.useState(.7),[Q,Y]=u.useState(""),ce=He.slice(1),ee=()=>{n(fe())},xe=()=>{j(!1),n(Qe(null)),n(fe())},ge=S=>{h(S.target.value)},he=S=>{T(S.target.value)},l=S=>{M(S.target.value)},y=()=>{if(g.length<10){Y("제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없습니다.");return}if(b.length<2){Y("닉네임은 최소 2글자 이상입니다.");return}const S={postId:r?r.length:0,profile:{nickname:b,uid:m},title:g,keywords:Hi(g,b),category:{name:`${x}`},content:O,comments:C?i.comments:0,views:C?i.views??0:0,likesCount:C?i.likesCount??0:0,created:C?i.created:qe(),...C&&{updated:qe()}};if(C===!1){const Le=qi(S,r||[]),Nt={...S,postId:Le};a.mutate(Nt,{onSuccess:ee})}else if(i){const Le={...S,postId:i.postId,id:i.id};d.mutate(Le,{onSuccess:()=>{n(Qe(null)),j(!1),ee()}})}},$=S=>{v(S.target.value)};return u.useEffect(()=>{g.length>=1&&O.length>=1?(z(!1),J(1)):(z(!0),J(.7))},[g,O]),u.useEffect(()=>{},[x,C]),u.useEffect(()=>{i&&(h(i.title),v(i.category.name),M(i.profile.nickname),T(i.content),j(!0))},[i]),u.useEffect(()=>{D(!0)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(zr,{id:"writingForm",style:{overflow:"clip",maxWidth:"550px"},children:[t.jsx(Qr,{children:t.jsxs(Wr,{children:[t.jsx("div",{children:"게시판 글쓰기"}),t.jsx(Hr,{children:t.jsx(Fr,{onClick:e,children:"×"})})]})}),t.jsx(qr,{children:t.jsx(Gr,{onChange:ge,type:"text",minLength:"10",maxLength:"100",autoFocus:!0,required:!0,placeholder:"제목을 입력하세요.",value:g})}),t.jsxs(Kr,{children:[t.jsx(Vr,{children:t.jsx(Yr,{id:"writingForumOption",onChange:$,value:x,children:ce.map(S=>t.jsx("option",{value:S.value,children:S.label},S.value))})}),t.jsxs(Xr,{children:[t.jsx(Zr,{children:"닉네임:  "}),t.jsx(Jr,{onChange:l,disabled:!0,type:"text",minLength:"2",maxLength:"10",value:b,style:{textAlign:"center"}})]})]}),t.jsx(es,{children:t.jsx(ts,{onChange:he,required:!0,placeholder:"여기에 본문을 입력하세요.",wrap:"hard",value:O})}),t.jsxs(ns,{children:[t.jsx(os,{onClick:xe,children:"취소"}),t.jsx(is,{id:"submitBtn",onClick:y,type:"submit",value:"작성완료",disabled:Z,style:{opacity:ae}})]})]}),Q&&t.jsx(Ce,{message:Q,onClose:()=>Y("")})]})}s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: ${B.MODAL_HEIGHT};
    position: relative;
`;const ss=q`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,as=q`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,cs=s.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: 0;
    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위한 flex */
    display: flex;
    justify-content: flex-start;

    @media screen and (min-width: 550px) {
        justify-content: center;
    }

    align-items: center;
`;s.button`
    background-color: ${B.COLOR_ACCENT_PURPLE};
    text-decoration: none;
    border: none;
    padding: 20px;
    color: #ffffff;
    border-radius: 30px;
    cursor: pointer;
`;const ls=s.div.attrs(e=>({role:"dialog"}))`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: fixed;
    width: ${e=>`${e.$width}px`||"330px"};
    height: 100vh;
    /* border-radius: 1rem; */
    background-color: ${e=>e.theme.cardBackground};
    color: ${e=>e.theme.containerText};
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }

    /* animation: ${({$modalStore:e})=>e?ss:as} 0.5s; */
`,ds=()=>{const e=I(a=>a.modal),n=A(),o=u.useRef(null);V(o,()=>{n(fe())});let i=window.innerWidth;const r=()=>{n(fe())};return t.jsx(t.Fragment,{children:e.isPostWritingModalOpen&&t.jsx(cs,{children:t.jsx(ls,{ref:o,$width:i,$modalStore:e,children:t.jsx(rs,{handleWritingModal:r})})})})},us=s.div`
    position: relative;

    max-width: 550px;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        /* background-color: black; */
    }

    min-width: 330px;
    height: 100%;
    overflow-y: scroll;
    width: 100%;

    margin: 0 auto;

    background-color: ${e=>e.theme.containerBackground};
    color: ${e=>e.theme.containerText};
    border-right: 1px solid ${e=>e.theme.borderColor};
    border-left: 1px solid ${e=>e.theme.borderColor};
`;function ps({children:e}){const n=u.useRef(null),o=A();return u.useEffect(()=>{o(ho(n.current))},[o]),t.jsxs(t.Fragment,{children:[t.jsxs(us,{id:"topLayout",ref:n,children:[t.jsx($r,{}),e]}),t.jsx(Pr,{}),t.jsx(ds,{}),t.jsx(Nr,{}),t.jsx(Cn,{position:"bottom-center",autoClose:1200})]})}const fs=s.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #282c34;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it covers everything */
`;function Ut(){return t.jsx(fs,{children:t.jsx("img",{src:"https://ensil-dev.github.io/DogGain_Forum/logo512.png",alt:"🐬"})})}function xs(){return t.jsx(vn,{children:t.jsx(u.Suspense,{fallback:t.jsx(Ut,{}),children:t.jsx(ps,{children:t.jsxs($n,{children:[t.jsx(te,{path:"/",element:t.jsx(Yi,{})}),t.jsx(te,{path:"/post",element:t.jsx(it,{})}),t.jsx(te,{path:"/post/:id",element:t.jsx(it,{})}),t.jsx(te,{path:"/profile",element:t.jsx(ar,{})}),t.jsx(te,{path:"/history",element:t.jsx(cr,{})}),t.jsx(te,{path:"/bookmarks",element:t.jsx(lr,{})}),t.jsx(te,{path:"/admin",element:t.jsx(hr,{})})]})})})})}function gs(){u.useEffect(()=>{const e=navigator.userAgent.toLowerCase(),n=window.location.href;hs(e,n)},[])}function hs(e,n){ms(e)?js(n):ys(e)&&ks(n)}function ms(e){return e.includes("kakaotalk")}function ys(e){return e.includes("line")}function js(e){const n=`kakaotalk://web/openExternal?url=${encodeURIComponent(e)}`;window.location.href=n}function ks(e){const n=e.includes("?")?`${e}&openExternalBrowser=1`:`${e}?openExternalBrowser=1`;window.location.href=n}const bs={mode:"light",containerBackground:"#ffffff",containerText:"#333333",headerButtonBackground:"#ffffff",pageTitleBackground:"#A5292A",cardRadius:"0.428rem",subTextColor:"#666666",borderColor:"#c8c8c8",cardBackground:"#ffffff",accentColor:"gray",buttonBackground:"#ffffff",buttonTextColor:"#A5292A",primaryButtonBackground:"#4285F4",primaryButtonTextColor:"#ffffff",darkModeIconColor:"gray",biContainerBackground:"#ffffff",biContainerText:"#333333",biButtonBgColor:"#ffffff",biButtonTextColor:"#A5292A",navTitleContainerBackground:"#ffffff",navTitleContainerText:"#333333",navButtonBgColor:"#ffffff",navButtonTextColor:"#A5292A",loginContainerBackground:"#ffffff",loginContainerText:"#333333",loginButtonBackground:"#4285F4",loginButtonTextColor:"#ffffff",writeContainerBackground:"#ffffff",writeContainerText:"#333333",writeButtonBgColor:"#E9E9E9",writeButtonTextColor:"orange",categoryContainerBackground:"#ffffff",categoryContainerText:"#333333",writingFormHeader:"lightblue",statCard:"lightblue"},ws={mode:"dark",containerBackground:"#1a1a1a",containerText:"#ffffff",headerButtonBackground:"#2d2d2d",pageTitleBackground:"#ffffff",cardRadius:"0.428rem",subTextColor:"#b3b3b3",borderColor:"#404040",cardBackground:"#2d2d2d",accentColor:"#ffffff",buttonBackground:"#1a1a1a",buttonTextColor:"#ffffff",darkModeIconColor:"#ffffff",primaryButtonBackground:"lightgray",primaryButtonTextColor:"#ffffff",biContainerBackground:"#1a1a1a",biContainerText:"#ffffff",biButtonBgColor:"#1a1a1a",biButtonTextColor:"#ffffff",navTitleContainerBackground:"#1a1a1a",navTitleContainerText:"#ffffff",navButtonBgColor:"#1a1a1a",navButtonTextColor:"#ffffff",loginContainerBackground:"#1a1a1a",loginContainerText:"#ffffff",loginButtonBackground:"#1a1a1a",loginButtonTextColor:"#ffffff",writeContainerBackground:"#1a1a1a",writeButtonBgColor:"orange",writeButtonTextColor:"white",writeContainerText:"black",categoryContainerBackground:"#1a1a1a",categoryContainerText:"#ffffff",writingFormHeader:"#b3b3b3",statCard:"#b3b3b3"},dt={light:bs,dark:ws},Cs=Sn`

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color : ${e=>e.theme.containerBackground};
        color : ${e=>e.theme.containerText};
    }

    .card-bg {
        background-color: ${e=>e.theme.cardBackground};
    }

    div.header-btn {
        background-color : ${e=>e.theme.headerButtonBackground};
        color : ${e=>e.theme.containerText};
    }

    div.page-title {
        background-color : ${e=>e.theme.pageTitleBackground};
        border : 5px solid ${e=>e.theme.borderColor};
        border-radius : ${e=>e.theme.cardRadius};
    }

    header {
        background-color : ${e=>e.theme.containerBackground};
    }
`,vs=new In({defaultOptions:{queries:{staleTime:N.DEFAULT,refetchOnWindowFocus:!1,refetchOnReconnect:!1}}});function $s(){gs();const n=I(o=>o.mode.isDarkMode)?dt.dark:dt.light;return t.jsxs(Bn,{theme:n,children:[t.jsx(Cs,{}),t.jsx(Dn,{client:vs,children:t.jsx(xs,{})})]})}const Ss={key:"root",storage:Ln,whitelist:["userInfo","detailPostInfo","mode"]},Is=Pn({mode:qn,modal:_n,userInfo:Vn,postInfo:mi,detailPostInfo:gi,clickInfo:yo,filteringOption:Lo,search:Lr}),Bs=Tn(Ss,Is),_t=En({reducer:Bs,middleware:e=>e({serializableCheck:!1})}),Ds=Mn(_t),Ps=An.createRoot(document.getElementById("root"));Ps.render(t.jsx(On,{store:_t,children:t.jsx(Rn,{loading:t.jsx(Ut,{}),persistor:Ds,children:t.jsx($s,{})})}));
