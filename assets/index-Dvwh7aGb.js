import{j as e,r as c}from"./react-Czkd8yQ6.js";import{c as Tt}from"./react-dom-C_yvnIbR.js";import{H as At}from"./react-router-dom-CZRz3scZ.js";import{d as o,m as v}from"./styled-components-CLVsLs3t.js";import{u as g,a as x,P as Mt}from"./react-redux-BA2miIVm.js";import{F as Bt,M as _t,a as Rt,b as Nt,c as Ft}from"./react-icons-c7W5YCmH.js";import{i as Ut,g as zt,a as Gt,b as Ht,G as Vt,s as Wt,c as K,d as _,e as Xt,f as Q,h as Yt,u as qt}from"./@firebase-BGLqyHMs.js";import"./firebase-Bq9CKGmS.js";import{u as O,a as Kt,b as Qt,c as T}from"./react-router-CDDT6Co5.js";import{Q as Zt,a as Jt}from"./react-query-CE3ziECX.js";import{a as te,c as ee}from"./redux-C4SLyPMG.js";import{p as ne,a as oe,d as ie,P as re}from"./redux-persist-Czj7g6aT.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-C_A-yFnC.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./use-sync-external-store-BTuMPICU.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./@babel-DYE2p76k.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const Z="DARKMODE_CHANGE",se=()=>({type:Z}),J="HAMBURGER_MODAL_CHANGE",tt=()=>({type:J}),et="POST_WRITING_MODAL_CHANGE",w=t=>({type:et,payload:t}),nt="SCROLL_LOCATION_SAVE",ae=t=>({type:nt,payload:t}),ot="SCROLL_ELEMENT_SAVE",le=t=>({type:ot,payload:t}),it="LATEST_POST_DATA_SAVE",rt=t=>({type:it,payload:t}),st="FILTERING_OPTION_SAVE",ce=t=>({type:st,payload:t}),at="POST_ADD",G=t=>({type:at,payload:t}),lt="POST_DELETE",ct=t=>({type:lt,payload:t}),dt="SAVE_EDITING_POST",A=t=>({type:dt,payload:t}),de="POST_UPDATE",pt="LOGIN_USER_SAVE",ut=t=>({type:pt,payload:t}),gt="SAVE_DETAIL_POST",pe=t=>({type:gt,payload:t}),ue=o.button`
    border: ${t=>t.$border||"none"};
    background-color: ${t=>t.$backgroundColor||"white"};
    opacity: ${t=>t.$opacity||"inherit"};
    cursor: ${t=>t.$cursor||"pointer"};

    color: ${t=>t.$color||"brown"};
    font-size: ${t=>t.$fontSize||"larger"};
    font-weight: ${t=>t.$fontWeight||"bold"};

    margin-left: ${t=>t.$marginLeft||"5px"};
    margin-right: ${t=>t.$marginRight||"0px"};

    padding: ${t=>t.$padding||"none"};
    border-radius: ${t=>t.$radius||"0px"};
`;function C({text:t,$border:n,$outline:r,$backgroundColor:s,$opacity:i,$cursor:a,$color:f,$fontSize:l,$fontWeight:p,$marginLeft:h,$marginRight:u,$padding:$,$radius:y,$onClick:j}){return e.jsx(ue,{$border:n,$outline:r,$backgroundColor:s,$opacity:i,$cursor:a,$color:f,$fontSize:l,$fontWeight:p,$marginLeft:h,$marginRight:u,$padding:$,$radius:y,onClick:j,children:t})}const ge={apiKey:"AIzaSyAlzGup5O-c4hvYwZ083wRpm4L1S_m3-kY",authDomain:"dg-forum-1bc7c.firebaseapp.com",projectId:"dg-forum-1bc7c",storageBucket:"dg-forum-1bc7c.appspot.com",messagingSenderId:"431875259033",appId:"1:431875259033:web:882c64e589171164ed1608",measurementId:"G-NB1ZGG7QL6"},R=Ut(ge),N=zt(R);Gt(R);const I=Ht(R);async function fe(t,n){typeof n=="function"?(n(ut(null)),await N.signOut(),t===null&&await ft()):console.log("Please Check your argument")}async function ft(){N.onAuthStateChanged(t=>{})}const xe=o.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    height: 90%;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 2fr 1fr;
    }
`,he=o.div`
    width: 100%;
    font-size: ${t=>t.fontSize};
`,me=o.div`
    display: flex;

    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;

    font-size: ${t=>t.fontSize};
`;o.div.attrs(t=>({role:"dialog"}))`
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
`;const xt=v`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ye=o(_t)`
    width: 28px;
    height: 28px;
    color: lightgray;
    cursor: pointer;
    /* animation: ${xt} 1.5s ease-in-out; */
`,be=o(Rt)`
    width: 28px;
    height: 28px;
    color: white;
    background: black;
    cursor: pointer;
    animation: ${xt} 1.5s ease-in-out;
`;function je({handleClickModeButton:t,handleHamburgerMenuModal:n}){const r=g(l=>l.mode),s=g(l=>l.userInfo),i=x(),a=O();function f(){const l=new Vt;Wt(N,l).then(p=>{i(ut(p.user)),ft()}).catch(p=>{console.log(p)})}return e.jsx("header",{children:e.jsxs(xe,{children:[e.jsx(he,{fontSize:M("HomeLogoBox"),children:e.jsx(C,{text:"Forum",$onClick:()=>a("/")})}),e.jsxs(me,{fontSize:M("MenuOptionBox"),children:[r.isDarkMode===!1?e.jsx(ye,{onClick:()=>t("다크모드")}):e.jsx(be,{onClick:()=>t("다크모드")}),e.jsx(Bt,{style:{width:"24px",height:"24px",color:"lightgray",cursor:"pointer"},onClick:()=>t("검색")}),(s==null?void 0:s.loginUser)===null?e.jsx(C,{$onClick:f,text:"로그인",$marginLeft:"0px",$marginRight:"0px",$fontSize:"medium",$opacity:"0.65",$backgroundColor:"#006699",$color:"white",$radius:"8px",$padding:"4px 8px"}):e.jsx(C,{$onClick:()=>fe(s.loginUser,i),text:"로그아웃",$marginLeft:"0px",$marginRight:"0px",$fontSize:"medium",$opacity:"0.5",$backgroundColor:"#006699",$color:"white",$radius:"8px",$padding:"4px 8px"})]})]})})}const Se=o.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
`,we=o.tr`
    display: grid;
    grid-template-columns: 7fr 4fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 3fr;
    }
    padding: 12px 10px;

    color: gray;
`,E=o.th`
    font-weight: bold;
    text-align: center;
    &:first-child {
        text-align: start;
        padding-right: 5px;
    }
    font-size: small;
`;function ve(){return e.jsx(Se,{children:e.jsx("thead",{children:e.jsxs(we,{children:[e.jsx(E,{children:"글"}),e.jsx(E,{children:"게시자"}),e.jsx(E,{children:"댓글"}),e.jsx(E,{children:"작성일"})]})})})}const $e=o.div`
    padding: ${t=>t.$padding||"none"};
`,Pe=o.hr`
    border: ${t=>t.$border||"2px solid gray"};
    opacity: ${t=>t.$opacity||"0.15"};
`;function k({$padding:t,$border:n,$opacity:r}){return e.jsx(e.Fragment,{children:e.jsx($e,{$padding:t,children:e.jsx(Pe,{$border:n,opacity:r})})})}const Ce=o.table`
    width: 100%;
    border-collapse: collapse;
    cursor: pointer;
`,Ie=o.tr`
    display: grid;
    grid-template-columns: 7fr 4fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 3fr;
    }

    padding: 12px 10px;
`,D=o.td`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    &:first-child {
        justify-content: start;
        flex-direction: column;
        align-items: flex-start;
    }
`,Oe=o.div`
    font-size: medium;
    font-weight: bold;
    color: black;
    opacity: 0.75;
    padding-right: 5px;
`,Ee=o.div`
    font-size: x-small;
`,De=o.div`
    font-size: small;
    font-weight: bold;
    opacity: 0.5;
    padding-left: 5px;
`,ke=o.div`
    font-size: small;
    opacity: 0.5;
`,Le=o.div`
    font-size: x-small;
    opacity: 0.5;
`;function Te({post:t}){const n=O(),r=x(),s=i=>{r(ae(Je())),n(`/post/${i}`)};return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{id:t.postId,onClick:()=>s(t.postId),children:e.jsx("tbody",{children:e.jsxs(Ie,{children:[e.jsxs(D,{children:[e.jsx(Oe,{children:t.title}),e.jsx(Ee,{children:t.category.name})]}),e.jsx(D,{children:e.jsx(De,{children:t.profile.nickname})}),e.jsx(D,{children:e.jsx(ke,{children:t.comments})}),e.jsx(D,{children:e.jsx(Le,{children:t.created})})]})})}),e.jsx(k,{$padding:"0px 10px",$border:"1px solid gray",$opacity:"0.15"})]})}const Ae=v`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Me=o.div`
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${Ae} 2s linear infinite;
`,Be=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;function ht(){return e.jsx(Be,{children:e.jsx(Me,{})})}function _e(){const t=g(i=>i.clickInfo),n=g(i=>i.postInfo),r=g(i=>i.filteringOption),s=x();return c.useLayoutEffect(()=>{t.touchedPostScrollY!==0&&n.latestPostData&&document.getElementById("topLayout").scrollTo(0,t.touchedPostScrollY)},[t.touchedPostScrollY,s,n.latestPostData]),c.useEffect(()=>{if(n.latestPostData===null){async function a(){const l=(await K(_(I,"posts"))).docs.map(h=>({...h.data(),id:h.id})),p=mt(l);s(rt(p))}a()}},[s,n.latestPostData]),e.jsxs("main",{children:[e.jsx(ve,{}),e.jsx(k,{$padding:"0px 10px",$border:"2px solid gray",$opacity:"0.15"}),n.latestPostData===null?e.jsx(ht,{}):tn(n.latestPostData,r.filteringOption).map(i=>e.jsx(Te,{post:i},i.postId))]})}const Re=o.div`
    display: flex;
`,Ne=o.select`
    text-align: center;
    font-size: larger;
    padding: 4px 8px;
    margin-left: 5px;
    border-radius: 8px;
`;function Fe({options:t,...n}){const r=x(),s=g(a=>a.filteringOption),i=a=>{r(ce(a.target.value))};return e.jsx(Re,{children:e.jsx(Ne,{id:"forumOption",...n,onChange:i,value:s.filteringOption,children:t.map(a=>e.jsx("option",{value:a.value,onChange:()=>i(),children:a.label},a.value))})})}const Ue=o.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;

    height: 100%;
    margin-top: 10px;
`,ze=o.div`
    font-size: ${t=>t.fontSize};
    text-align: end;
    margin-right: 10px;
`;function Ge(){const t=g(s=>s.userInfo),n=x(),r=()=>{n(w())};return e.jsxs(Ue,{children:[e.jsx(Fe,{options:B}),e.jsx(ze,{fontSize:M("writeBox"),children:t.loginUser&&e.jsx(C,{$onClick:r,text:"✚ 글쓰기",$backgroundColor:"#E9E9E9",$padding:"6px 12px",$radius:"6px",$fontSize:"18px",$fontWeight:"larger",$color:"orange"})})]})}const He=o.h2`
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    padding-bottom: 0px;
`,Ve=o.div`
    display: grid;
    padding: 12px 10px 0px 10px;

    color: black;
    word-break: keep-all;
`,We=o.div`
    padding: 6px 10px 6px 10px;
    font-size: small;
`;function Xe({title:t,category:n}){return e.jsxs(He,{children:[e.jsx(Ve,{children:t}),e.jsx(We,{children:n})]})}function Ye(t){const n=O();x(),c.useEffect(()=>{const r=s=>{s.preventDefault()};return window.addEventListener("beforeunload",r),()=>{window.removeEventListener("beforeunload",r)}},[n])}const qe=o.div`
    display: flex;
    width: 100%;
    padding: 12px 0px;

    word-break: keep-all;
`,Ke=o.div`
    display: grid;
    grid-template-columns: 9fr 1fr 1fr;
    align-content: center;
    width: 100%;
    padding: 12px 0;
    gap: 4px;
`,Qe=o.div`
    width: 100%;
    padding: 0 20px;
    line-height: 1.5;
    font-weight: 600;
`,H=o.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    gap: 4px;
    border: 2px solid lightgray;
    cursor: pointer;
`,V=o.div`
    width: 24px;
    height: 24px;
    color: lightgray;
`,W=o.div`
    font-size: small;
`;function Ze(){const t=x(),n=O();g(u=>u.detailPostInfo);const r=g(u=>u.userInfo);Ye();const i=Kt().id,f=g(u=>u.postInfo).latestPostData,l=on(f,i);c.useEffect(()=>{if(l===void 0){async function u(){const y=(await K(_(I,"posts"))).docs.map(b=>({...b.data(),id:b.id})),j=mt(y);t(rt(j))}u()}t(pe(l))},[t,n,l,i]);const p=()=>{window.confirm("정말로 이 게시글을 삭제 하시겠습니까?")&&(t(ct(i)),Xt(Q(I,"posts",l.id)),n("/",{replace:!0}),alert("삭제 완료했습니다!"))},h=()=>{window.confirm("이 게시글을 수정 하시겠습니까?")&&(n("/",{replace:!0}),t(A(l)),t(w()),alert("게시글 수정을 시작합니다!"))};return e.jsx("main",{children:l?e.jsxs(e.Fragment,{children:[e.jsx(Xe,{title:l.title,category:l.category.name}),e.jsx(qe,{children:e.jsx("p",{style:{padding:"0px 20px 0px 20px",lineHeight:1.8,whiteSpace:"pre-wrap"},children:l.content})}),e.jsx(k,{$padding:"0px 10px",$border:"1px solid gray",$opacity:"0.15"}),e.jsxs(Ke,{children:[e.jsx(Qe,{children:l.profile.nickname}),r.loginUser&&e.jsxs(H,{onClick:h,children:[e.jsx(V,{as:Nt}),e.jsx(W,{children:"수정"})]}),r.loginUser&&e.jsxs(H,{onClick:p,style:{marginRight:"20px"},children:[e.jsx(V,{as:Ft}),e.jsx(W,{children:"삭제"})]})]}),e.jsx(k,{$padding:"0px 0px",$border:"4px solid gray",$opacity:"0.15"})]}):e.jsx(ht,{})})}const mt=t=>t.sort((n,r)=>{const s=new Date(n.created.replace(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/,"20$1-$2-$3T$4:$5:00"));return new Date(r.created.replace(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/,"20$1-$2-$3T$4:$5:00"))-s}),M=t=>{switch(t){case"HomeLogoBox":return"xx-large";case"MenuOptionBox":return"medium";case"writeBox":return"medium";default:return"medium"}},X=()=>{const t=window.navigator.userAgent,n=/iPhone|iPad|iPod/.test(t),r=/^((?!chrome|android).)*safari/i.test(t);return n&&r},yt=(t,n,r)=>{switch(t){case"Navigation":return e.jsx(je,{handleClickModeButton:n,handleHamburgerMenuModal:r});case"PostControllerBar":return e.jsx(Ge,{});case"PostContentsBox":return e.jsx(_e,{});case"PostDetail":return e.jsx(Ze,{});default:return"black"}};function Je(){const t=document.getElementById("topLayout");return t?t.scrollTop:0}const B=[{value:"최신",label:"최신"},{value:"🟠 자유포럼",label:"🟠 자유포럼"},{value:"🔶 지름후기",label:"🔶 지름후기"},{value:"🛒 핫딜공유",label:"🛒 핫딜공유"},{value:"🔵 꿀팁공유",label:"🔵 꿀팁공유"},{value:"🔘 공지사항",label:"🔘 공지사항"}],tn=(t,n)=>n!=="최신"?t.filter(r=>r.category.name.includes(n)):t;function en(t,n){let r=t.postId,s=r,i=!1;for(const a of n)a.postId===r&&(i=!0),a.postId>s&&(s=a.postId);return i&&(r=s+1),r}function nn(){const t=new Date,n=t.getFullYear().toString().slice(-2),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),i=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");return`${n}/${r}/${s}/${i}:${a}`}const on=(t,n)=>t==null?void 0:t.filter(r=>Number(r.postId)===Number(n))[0],rn=o.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    /* border: 3px solid gray; */
`,sn=o.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
    height: 40px;
`,an=["Navigation","PostControllerBar","PostContentsBox"];function ln(){const t=x(),n=s=>{console.log(s),alert(`${s} 기능은 아직 구현중입니다. 구현 완료 시 공지해드릴게요~ 🐬`)},r=()=>{t(tt())};return e.jsx(rn,{children:an.map(s=>e.jsx(sn,{children:yt(s,n,r)},s))})}const cn=o.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    /* border: 3px solid gray; */
`,dn=o.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.

    height: 40px;
`,pn=["Navigation","PostDetail"];function Y(){const t=x(),n=()=>{t(se())},r=()=>{t(tt())};return e.jsx(cn,{children:pn.map(s=>e.jsx(dn,{children:yt(s,n,r)},s))})}const un=o.div`
    align-content: center;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        align-content: center;
        grid-template-columns: 2fr 1fr;
    }
    height: 60px;
`,gn=o.div`
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
`,fn=o.div`
    margin-top: 6px;
`,xn=o.img`
    padding: 3px 6px;
    width: 36px;
    height: 36px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Added shadow */
`,hn=o.div``,q=o.div`
    width: 28px;
    height: 28px;
`;function mn(){const t=g(s=>s.userInfo),{loginUser:n}=t;O();const r=()=>{window.location.reload()};return e.jsxs(un,{children:[e.jsx(hn,{children:e.jsx(C,{text:"DogGain",$onClick:r})}),e.jsxs(gn,{children:[e.jsx(q,{}),e.jsx(q,{}),e.jsx(fn,{children:n!==null&&e.jsx(xn,{src:n.photoURL?n.photoURL:"https://ensil-dev.github.io/DogGain_Forum/logo512.png",alt:"",referrerPolicy:"no-referrer"})})]})]})}function bt(t,n){c.useEffect(()=>{const r=s=>{!t.current||t.current.contains(s.target)||n()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t,n])}o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 600px;
    position: relative;
`;const yn=v`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,bn=v`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,jn=o.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 0;
    
    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위한 flex */
    display: flex;
    justify-content: flex-start;

    align-items: center;
`;o.button`
    background-color: #4000c7;
    text-decoration: none;
    border: none;
    padding: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
`;const Sn=o.div.attrs(t=>({role:"dialog"}))`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: ${t=>`${t.$width}px`||"330px"};
    height: 100vh;
    background-color: white;
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }

    animation: ${({$modalStore:t})=>t?yn:bn} 0.5s;
`,wn=()=>{const t=g(i=>i.modal),n=x(),r=c.useRef();bt(r,()=>{n({type:"HAMBURGER_MODAL_CHANGE"})});let s=window.innerWidth;return s>=550&&(s=780),e.jsx(e.Fragment,{children:t.isHamburgerModalOpen&&e.jsx(jn,{children:e.jsx(Sn,{ref:r,$width:s-130,$modalStore:t,children:e.jsx("div",{children:"사이드바 메뉴"})})})})},vn=o.form`
    /* display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr; */

    width: 100%;
    margin-top: ${X()&&"7.25rem"};
    height: ${X()?"80%":"100%"};

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);

    @media screen and (min-width: 550px) {
        border-bottom: 1px solid rgb(222, 226, 230);
    }
`,$n=o.div`
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
`,Pn=o.div`
    padding: 8px 0;
    border: none;
    background-color: lightblue;
`,Cn=o.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    height: 30px;
    padding: 0 8px;
    font-size: larger;
    font-weight: bold;
`,In=o.div`
    display: flex;
    justify-content: flex-end;
`,On=o.div`
    padding: 24px 8px 0 8px;
    border: none;
    text-align: center;
`,En=o.input`
    width: 95%;
    height: 50px;
    padding-left: 8px;
`,Dn=o.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    height: 50px;
    padding: 8px;
    font-size: larger;
`,kn=o.div`
    border: none;
    text-align: center;
`,Ln=o.select`
    padding: 4px;
`,Tn=o.div`
    display: flex;
    align-items: center;
`,An=o.div`
    width: 100px;
    font-size: small;
    font-weight: 500;
    text-align: end;
`,Mn=o.input`
    width: 100px;
`,Bn=o.div`
    padding: 0 8px;
    text-align: center;
`,_n=o.textarea`
    width: 95%;
    height: 40vh;
    padding-left: 8px;
    padding-top: 8px;
`,Rn=o.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;
    padding: 12px 8px;
    text-align: center;
`,Nn=o.button`
    color: black;
    background-color: #efefef;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`,Fn=o.input`
    padding: 10px;
    background-color: #606060;
    color: #ffffff;
    opacity: 0.8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;function Un({handleWritingModal:t}){const n=x(),r=g(d=>d.postInfo),{latestPostData:s,informationOfModifyingPost:i}=r,a=g(d=>d.userInfo),{loginUser:f}=a,l=f.displayName.split(" ")[0],[p,h]=c.useState(""),[u,$]=c.useState(B[1].value),[y,j]=c.useState(l),[b,F]=c.useState(""),[U,L]=c.useState(!1),[wt,vt]=c.useState(!1),$t=B.slice(1),z=()=>{n(w())},Pt=()=>{L(!1),n(A(null)),n(w())},Ct=d=>{h(d.target.value)},It=d=>{F(d.target.value)},Ot=d=>{j(d.target.value)},Et=()=>{if(p.length<10)return alert("제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없습니다.");if(y.length<2)return alert("닉네임은 최소 2글자 이상입니다.");const d={postId:s.length,profile:{nickname:y},title:p,category:{name:`${u}`},content:b,comments:0,created:nn()};async function kt(m){try{const P=await Yt(_(I,"posts"),m);n(G(Object.assign({},m,{id:P.id})))}catch(P){console.error("Error adding document: ",P)}}async function Lt(m){i.id&&await qt(Q(I,"posts",String(i.id)),m)}if(U===!1){const m=en(d,s),P={...d,postId:m};kt(P),z()}else{const m={...d,postId:i.postId};n(ct(i.postId)),n(G(m)),Lt(m),n(A(null)),L(!1),z()}},Dt=d=>{$(d.target.value)},S=document.querySelector("#submitBtn");return c.useEffect(()=>{S&&(p.length>=1&&b.length>=1?(S.style.opacity=1,S.removeAttribute("disabled")):(S.setAttribute("disabled",""),S.style.opacity=.7))},[p,b,S,wt]),c.useEffect(()=>{},[u,U]),c.useEffect(()=>{i&&(h(i.title),$(i.category.name),j(i.profile.nickname),F(i.content),L(!0))},[i]),c.useEffect(()=>{vt(!0)},[]),e.jsxs(vn,{id:"writingForm",style:{overflow:"clip",maxWidth:"550px"},children:[e.jsx(Pn,{children:e.jsxs(Cn,{children:[e.jsx("div",{children:"게시판 글쓰기"}),e.jsx(In,{children:e.jsx($n,{onClick:t,children:"×"})})]})}),e.jsx(On,{children:e.jsx(En,{onChange:Ct,type:"text",minLength:"10",maxLength:"100",autoFocus:!0,required:!0,placeholder:"제목을 입력하세요.",value:p})}),e.jsxs(Dn,{children:[e.jsx(kn,{children:e.jsx(Ln,{id:"writingForumOption",onChange:Dt,value:u,children:$t.map(d=>e.jsx("option",{value:d.value,children:d.label},d.value))})}),e.jsxs(Tn,{children:[e.jsx(An,{children:"닉네임:  "}),e.jsx(Mn,{onChange:Ot,type:"text",minLength:"2",maxLength:"10",value:y,style:{textAlign:"center"}})]})]}),e.jsx(Bn,{children:e.jsx(_n,{onChange:It,required:!0,placeholder:"여기에 본문을 입력하세요.",wrap:"hard",value:b})}),e.jsxs(Rn,{children:[e.jsx(Nn,{onClick:Pt,children:"취소"}),e.jsx(Fn,{id:"submitBtn",onClick:Et,type:"submit",value:"작성완료"})]})]})}o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 600px;
    position: relative;
`;const zn=v`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,Gn=v`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,Hn=o.div`
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
`;o.button`
    background-color: #4000c7;
    text-decoration: none;
    border: none;
    padding: 20px;
    color: #ffffff;
    border-radius: 30px;
    cursor: pointer;
`;const Vn=o.div.attrs(t=>({role:"dialog"}))`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: fixed;
    width: ${t=>`${t.$width}px`||"330px"};
    height: 100vh;
    /* border-radius: 1rem; */
    background-color: white;
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }

    /* animation: ${({$modalStore:t})=>t?zn:Gn} 0.5s; */
`,Wn=()=>{const t=g(a=>a.modal),n=x(),r=c.useRef();bt(r,()=>{n(w())});let s=window.innerWidth;const i=()=>{n(w())};return e.jsx(e.Fragment,{children:t.isPostWritingModalOpen&&e.jsx(Hn,{children:e.jsx(Vn,{ref:r,$width:s,$modalStore:t,children:e.jsx(Un,{handleWritingModal:i})})})})},Xn=o.div`
    position: relative;

    max-width: 550px;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        /* background-color: black; */
    }

    min-width: 330px;
    height: 100%;
    overflow-y: scroll;

    margin: 0 auto;

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);
`;function Yn({children:t}){const n=c.useRef(null),r=x();return c.useEffect(()=>{r(le(n.current))},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(Xn,{id:"topLayout",ref:n,children:[e.jsx(mn,{}),t]}),e.jsx(wn,{}),e.jsx(Wn,{})]})}const qn=o.div`
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
`;function jt(){return e.jsx(qn,{children:e.jsx("img",{src:"https://ensil-dev.github.io/DogGain_Forum/logo512.png",alt:"🐬"})})}function Kn(){return e.jsx(At,{children:e.jsx(c.Suspense,{fallback:e.jsx(jt,{}),children:e.jsx(Yn,{children:e.jsxs(Qt,{children:[e.jsx(T,{path:"/",element:e.jsx(ln,{})}),e.jsx(T,{path:"/post",element:e.jsx(Y,{})}),e.jsx(T,{path:"/post/:id",element:e.jsx(Y,{})})]})})})})}const Qn=new Zt;function Zn(){return e.jsx(Jt,{client:Qn,children:e.jsx(Kn,{})})}const Jn={isHamburgerModalOpen:!1,isPostWritingModalOpen:!1,isSearchModalOpen:!1},to=(t=Jn,n)=>{switch(n.type){case J:return{isHamburgerModalOpen:!t.isHamburgerModalOpen};case et:return n.payload,{isPostWritingModalOpen:!t.isPostWritingModalOpen};default:return t}},eo={isDarkMode:!1},no=(t=eo,n)=>{switch(n.type){case Z:return{isDarkMode:!t.isDarkMode};default:return t}},oo={touchedPostScrollY:0,scrollElement:null},io=(t=oo,n)=>{switch(n.type){case nt:return Object.assign({},t,{touchedPostScrollY:n.payload});case ot:return t.scrollElement===null?Object.assign({},t,{scrollElement:n.payload}):t;default:return t}},ro={latestPostData:null,informationOfModifyingPost:null},so=(t=ro,n)=>{switch(n.type){case it:return t.latestPostData===null?Object.assign({},t,{latestPostData:n.payload}):t;case at:const r=t.latestPostData.slice();return r.unshift(n.payload),Object.assign({},t,{latestPostData:r});case lt:const s=t.latestPostData.slice().filter(a=>Number(a.postId)!==Number(n.payload));return Object.assign({},t,{latestPostData:s});case dt:return Object.assign({},t,{informationOfModifyingPost:n.payload});case de:const i=t.latestPostData.slice();return Object.assign({},t,{latestPostData:i});default:return t}},ao={filteringOption:"최신"},lo=(t=ao,n)=>{switch(n.type){case st:return Object.assign({},t,{filteringOption:n.payload});default:return t}},co={loginUser:null},po=(t=co,n)=>{switch(n.type){case pt:if(t.loginUser===null){const{accessToken:r,displayName:s,email:i,emailVerified:a,photoURL:f}=n.payload;return Object.assign({},t,{loginUser:{accessToken:r,displayName:s,email:i,emailVerified:a,photoURL:f}})}else return Object.assign({},t,{loginUser:n.payload});default:return t}},uo={detailPostInfo:null},go=(t=uo,n)=>{switch(n.type){case gt:return Object.assign({},t,{detailPostInfo:n.payload});default:return t}},fo={key:"root",storage:ie,whitelist:["userInfo","detailPostInfo"]},xo=te({mode:no,modal:to,userInfo:po,postInfo:so,detailPostInfo:go,clickInfo:io,filteringOption:lo}),St=ee(oe(fo,xo)),ho=ne(St),mo=Tt.createRoot(document.getElementById("root"));mo.render(e.jsx(Mt,{store:St,children:e.jsx(re,{loading:e.jsx(jt,{}),persistor:ho,children:e.jsx(Zn,{})})}));
