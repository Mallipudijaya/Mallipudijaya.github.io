import{_ as S,o as a,c as l,F as y,a as s,h as x,q as w,i as o,b as i,w as g,d as p,t as d,j as z,m as f,e as $,k as T,s as U,l as b,v as A,r as B,x as R,y as N,z as E,n as I,A as q,g as L,B as M,C as V,D as O,E as F}from"./BIu7MkGx.js";import{_ as G,w as W,u as Y}from"./ByxqqjKp.js";import J from"./nko6pMwc.js";import K from"./DTOeIzEy.js";import{u as Q,q as X}from"./CBNmeCSR.js";const Z={},tt=s("div",{class:"fixed w-full h-sm -z-1 right-100 top-0 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"},null,-1),et=s("div",{class:"fixed w-full h-sm -z-1 left-50 top-200 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate--45"},null,-1);function st(u,t){return a(),l(y,null,[tt,et],64)}const ot=S(Z,[["render",st]]),nt={key:0,class:"pb-16 mb-8 lg:mb-0 border-b dark:border-zinc-700 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"},at={class:"space-y-4"},ct={class:"!my-6 font-medium"},rt={class:"text-sm sm:text-base bg-clip-text bg-gradient-to-b from-gray-200 to-sky-400 inline-block text-transparent"},_t={class:"text-sm sm:text-base bg-clip-text bg-gradient-to-b from-gray-200 to-pink-400 inline-block text-transparent"},lt={class:"text-2xl sm:text-3xl font-bold font-headings bg-clip-text text-transparent bg-gradient-to-b from-sky-300 to-pink-300"},it={class:"grid grid-cols-2 justify-between"},dt={key:0},ut=s("h2",{class:"font-medium"}," Technologies ",-1),mt={class:"space-y-3 mt-2"},pt=s("h2",{class:"font-medium"}," Year ",-1),ht={class:"flex justify-center"},gt=["src"],ft=x({__name:"Project",setup(u){const t=w("sharedPostData");return(c,_)=>{const r=$,e=G;return o(t)?(a(),l("header",nt,[s("div",at,[i(r,{to:"/",class:"block"},{default:g(()=>[p(" ← Go back ")]),_:1}),s("h1",ct,[s("span",rt,d(o(t).title),1),p(" · "),s("span",_t,d(o(t).url),1)]),s("span",lt,d(o(t).description),1),s("div",it,[o(t).technologies?(a(),l("section",dt,[ut,s("ul",mt,[(a(!0),l(y,null,z(o(t).technologies,n=>(a(),l("li",{key:n},[i(e,{class:"text-sm",icon:n},{default:g(()=>[p(d(n),1)]),_:2},1032,["icon"])]))),128))])])):f("",!0),s("section",null,[pt,p(" "+d(new Date(o(t).date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),1)])])]),s("div",ht,[s("img",{src:o(t).thumbnail,class:"rounded-2xl w-auto h-64 object-cover"},null,8,gt)])])):f("",!0)}}}),xt={key:0,class:"print:hidden"},bt={class:"pb-8 border-b dark:border-zinc-500 border-zinc-300"},vt={class:"mt-6 text-4xl font-bold text-transparent font-headings 2xl:text-4xl magic w-full"},yt={class:"flex flex-col sm:flex-row mt-6 text-md gap-3 sm:items-center justify-between"},kt={class:"flex flex-wrap gap-4 text-sm w-full"},wt={class:"flex items-center gap-2 font-medium"},$t=s("li",null,null,-1),Pt=x({__name:"Header",setup(u){const t=w("sharedPostData");return(c,_)=>{const r=$,e=T;return o(t)?(a(),l("header",xt,[s("div",bt,[i(r,{to:"/",class:"block"},{default:g(()=>[p(" ← Go back ")]),_:1}),s("h1",vt,d(o(t).title),1),s("div",yt,[s("ul",kt,[s("li",wt,[i(e,{class:"i-ph-notepad-bold w-5 h-5"}),p(" Written on "+d(new Date(o(t).date).toLocaleDateString("en-US",{dateStyle:"long"})||"an unknown date"),1)]),$t])])])])):f("",!0)}}}),zt=x({__name:"index",props:{target:{}},setup(u){const t=u,{target:c}=U(t),_=b(0),r=b(0);return A(()=>{window.addEventListener("scroll",()=>{const{documentElement:e,body:n}=document,h=(n.scrollTop||e.scrollTop)-r.value,m=e.scrollHeight-e.clientHeight-r.value;_.value=Math.min(Math.max(0,h)/m*100,100)})}),W(c,()=>{const e=Y(c.value);e&&(r.value=e.offsetTop)}),(e,n)=>(a(),l("div",null,[B(e.$slots,"default",{progress:o(_)},()=>[s("div",null,d(o(_)),1)])]))}});function Lt(){const u=b(),t=b([]),c=b([]),_=e=>e.forEach(n=>{const h=n.target.id;n.isIntersecting?t.value.push(h):t.value=t.value.filter(m=>m!==h)}),r=e=>e.forEach(n=>{u.value.observe(n)});return R(t,(e,n)=>{e.length===0?c.value=n:c.value=e}),N(()=>u.value=new IntersectionObserver(_)),E(()=>{var e;return(e=u.value)==null?void 0:e.disconnect()}),{visibleHeadings:t,activeHeadings:c,updateHeadings:r}}const St={key:0,class:"pb-3 mb-6 border-b dark:border-zinc-500 border-zinc-300"},Tt=s("span",{class:"text-sm font-bold tracking-tight"}," On this page ",-1),Dt={class:"font-medium"},Ct={key:0,class:"pl-2 ml-4 border-l border-current"},jt=x({__name:"Toc",setup(u){const t=w("sharedPostData"),{activeHeadings:c,updateHeadings:_}=Lt();return setTimeout(()=>{_([...document.querySelectorAll(" h2"),...document.querySelectorAll(" h3")])},300),(r,e)=>{var h;const n=$;return(h=o(t))!=null&&h.body.toc?(a(),l("div",St,[Tt,(a(!0),l(y,null,z(o(t).body.toc.links,(m,k)=>(a(),l("section",{key:m.id,class:"my-4 text-sm"},[s("h2",Dt,[i(n,{class:I([[o(c).includes(m.id)&&"dark:text-zinc-200"],"hover:text-blue-500 dark:hover:text-zinc-200"]),to:`#${m.id}`},{default:g(()=>[p(d(k+1)+". "+d(m.text),1)]),_:2},1032,["class","to"])]),m.children?(a(),l("div",Ct,[(a(!0),l(y,null,z(m.children,(v,P)=>(a(),l("h3",{key:v.id},[i(n,{to:`#${v.id}`,class:"block my-1 hover:text-blue-500 dark:hover:text-zinc-200"},{default:g(()=>[p(d(k+1)+"."+d(P+1)+" - "+d(v.text),1)]),_:2},1032,["to"])]))),128))])):f("",!0)]))),128))])):f("",!0)}}}),Ht=x({__name:"PrintThis",setup(u){function t(){print()}return(c,_)=>{const r=T;return a(),l("button",{type:"button",class:"font-bold tracking-tight text-sm hover:text-white",onClick:t},[i(r,{class:"i-ph-printer w-5 h-5 mr-2"}),p("Print this page ")])}}}),Ut=x({__name:"Twitter",setup(u){const t=w("sharedPostData"),c=q(()=>t?`https://twitter.com/intent/tweet?${new URLSearchParams({text:`Reading ${t.title} by @owln_ai on https://owln.ai

        ${t._path}`})}`:"");return(_,r)=>{const e=T,n=$;return o(t)?(a(),L(n,{key:0,to:o(c),class:"block mt-3 font-bold tracking-tight text-sm hover:text-blue-500 dark:hover:text-blue-400"},{default:g(()=>[i(e,{class:"i-ph-twitter-logo-bold w-5 h-5 mr-2"}),p(" Comment on Twitter ")]),_:1},8,["to"])):f("",!0)}}}),At={},Bt={class:"self-start h-full py-3 pt-6 border-b lg:sticky lg:top-6 lg:pl-6 sm:border-0 print:hidden dark:border-zinc-700"};function Rt(u,t){const c=jt,_=Ht,r=Ut;return a(),l("aside",Bt,[i(c),i(_),i(r)])}const Nt=S(At,[["render",Rt]]),Et={class:"mx-auto container max-w-6xl pt-6 lg:pt-16 sm:py-8 px-6 2xl:px-0 print:p-0 relative isolate overflow-hidden"},It={class:"relative flex flex-col-reverse gap-6 mx-auto lg:grid lg:grid-cols-4"},qt={class:"pt-10 print:p-0 lg:col-span-3 relative isolate"},Mt={class:"flex relative"},Vt={class:"absolute left-0 bottom-0 h-full w-1px dark:bg-zinc-500 bg-zinc-300 overflow-hidden"},Ot=x({__name:"Post",props:{project:{type:Boolean}},async setup(u){let t,c;const _=b(),{path:r}=M(),{data:e}=([t,c]=V(()=>Q(`content-${r}`,()=>X().where({_path:r}).findOne())),t=await t,c(),t);return O("sharedPostData",e),(n,h)=>{const m=ot,k=ft,v=Pt,P=J,D=K,C=zt,j=Nt;return a(),l("article",Et,[i(m),o(e)?(a(),l(y,{key:0},[n.project?(a(),L(k,{key:0,style:{"--stagger":"1"},"data-animate":""})):(a(),L(v,{key:1,style:{"--stagger":"1"},"data-animate":""})),s("div",It,[s("div",qt,[i(P,{style:{"--stagger":"2"},"data-animate":""},{default:g(()=>[p(d(o(e).description),1)]),_:1}),i(D,{id:"doc",ref_key:"el",ref:_,value:o(e),class:"prose text-gray-800 dark:text-gray-200/95 max-w-65ch text-lg xl:text-xl",style:{"--stagger":"3"},"data-animate":""},null,8,["value"])]),s("div",Mt,[i(C,{target:o(_),class:"hidden lg:block"},{default:g(({progress:H})=>[s("div",Vt,[s("div",{class:"w-full bg-gradient-to-t from-sky-400 to-pink-400",style:F({height:`${H}%`})},null,4)])]),_:1},8,["target"]),i(j,{style:{"--stagger":"2"},"data-animate":""})])])],64)):f("",!0)])}}}),Kt=S(Ot,[["__scopeId","data-v-1b34b525"]]);export{Kt as _};