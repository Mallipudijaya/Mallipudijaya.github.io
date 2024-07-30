import{h as I,G as V,l as B,A as G,o,g as f,w as l,a as e,b as n,c as u,F as g,d as c,m as j,t as d,i as w,k as C,e as N,C as $,j as z,H as L,I as M}from"./DUlYt7ic.js";import{a as S,_ as q}from"./DD0wddJN.js";import{_ as A}from"./Co0ziBS1.js";import D from"./DSR4ZXzV.js";import{_ as E}from"./CWoHFx9K.js";import{a as H,q as T}from"./CMCCIuUc.js";import"./CCmCAlOb.js";const F=e("div",{class:"absolute top-0 left-0 z-20 w-full h-full glow"},null,-1),O={class:"flex gap-2 px-4"},U={class:"px-4 @container"},W={class:"text-2xl @sm:text-2xl @sm:py-2 font-semibold text-black dark:text-white"},P={class:"text-sm"},R=I({__name:"Card",props:{path:{},title:{},technologies:{},date:{},thumbnail:{},type:{},description:{},url:{}},setup(x){V(b=>({"4f75d9a0":w(h)}));const t=x,r=B(null),{elementX:s,elementY:i,isOutside:p}=S(r),h=G(()=>p.value?"":`radial-gradient(
      circle at
      ${s.value}px
      ${i.value}px,
      #ffffff55,
      #0000000f)`);return(b,y)=>{const _=C,k=q,m=A,v=N;return o(),f(v,{ref_key:"card",ref:r,to:t.path,class:"relative flex flex-col justify-between h-auto gap-4 pt-4 overflow-hidden bg-white border isolate dark:bg-black border-zinc-300 dark:border-zinc-700 rounded-xl"},{default:l(()=>[F,e("ul",O,[e("li",null,[n(k,{class:"text-sm capitalize"},{default:l(()=>[t.type==="website"?(o(),u(g,{key:0},[n(_,{class:"i-heroicons-globe-alt-20-solid"}),c(" Website ")],64)):t.type==="translation"?(o(),u(g,{key:1},[n(_,{class:"i-ph-translate-bold"}),c(" Translation ")],64)):j("",!0)]),_:1})]),e("li",null,[t.technologies?(o(),f(k,{key:0,class:"text-sm",icon:t.technologies[0]},{default:l(()=>[c(d(t.technologies[0]),1)]),_:1},8,["icon"])):j("",!0)])]),e("div",U,[e("h2",W,d(t.title),1),e("p",P,d(t.description),1)]),n(m,{src:t.thumbnail||"https://placekitten.com/268/168",alt:"",height:"168",width:"268",class:"w-full border-t -z-1 border-zinc-300 dark:border-zinc-700"},null,8,["src"])]),_:1},8,["to"])}}}),X=async()=>{const{data:x,pending:t}=await H("repos",()=>$fetch("https://api.github.com/users/Mallipudijaya/repos",{query:{type:"all"}}),{server:!1,transform:r=>r.filter(s=>!s.fork&&!s.private&&s.name!==".github"&&s.name!=="Mallipudijaya").sort((s,i)=>i.stargazers_count-s.stargazers_count).map(({id:s,name:i,html_url:p,description:h,stargazers_count:b,stargazers_url:y,homepage:_})=>({id:s,name:i,html_url:p,description:h,stargazers_count:b,stargazers_url:y,homepage:_}))});return{pending:t,repos:x}},Y={class:"relative flex flex-col items-center justify-center w-full gap-4 sm:gap-10 pt-12 pb-16 font-sans md:pb-24 md:pt-16 lg:pb-30 lg:pt-30 isolate gradient px-6 2xl:px-0 overflow-hidden"},J={class:"relative isolate flex flex-col items-center"},K=e("div",{class:"absolute w-full h-full -z-1 left-0 top-25 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.8)_0%,_rgba(34,_57,_16,_0)_100%)]"},null,-1),Q=e("div",{class:"max-w-3xl flex flex-col items-center justify-center gap-4 sm:gap-8 mb-8 relative"},[e("h1",{class:"text-4xl sm:text-5xl font-bold font-headings 2xl:text-6xl magic text-center",style:{"--stagger":"1"},"data-animate":""}," I work on projects that make a difference "),e("p",{class:"prose text-center text-lg sm:text-2xl leading-8 dark:text-gray-300",style:{"--stagger":"2"},"data-animate":""}," full-stack web apps, Deep Learning Modals, technical translations and more ")],-1),Z={class:"w-full max-w-6xl relative my-6 lg:my-24"},tt=e("div",{class:"absolute top-0 -left-8 text-2xl floating"}," ✨ ",-1),et=e("div",{class:"absolute -bottom-10 -right-8 transform-scale-x-[-1] text-2xl floating"}," ✨ ",-1),at={class:"grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-4 w-full lg:h-90",style:{"--stagger":"3"},"data-animate":""},st={class:"w-full mt-2 flex flex-col container max-w-4xl justify-center relative"},lt=L('<div class="absolute w-sm h-full -z-1 left-30 bottom-30 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"></div><div class="absolute w-sm h-full -z-1 right-40 top-70 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"></div><div class="flex flex-col w-full max-w-6xl sm:items-center gap-y-6 sm:justify-center"><h2 class="text-3xl font-semibold font-headings 2xl:text-5xl magic" style="--stagger:4;" data-animate> Open-source projects </h2><p class="prose sm:text-center text-lg sm:text-xl leading-8 dark:text-gray-300 max-w-43ch" style="--stagger:5;" data-animate> Star my projects on GitHub if you find them useful! </p></div>',3),ot={class:"items-center flex justify-between"},ut={__name:"index",async setup(x){let t,r;const s=([t,r]=$(()=>T("projects").find()),t=await t,r(),t),{repos:i,pending:p}=([t,r]=$(()=>X()),t=await t,r(),t);return(h,b)=>{const y=R,_=D,k=C,m=N,v=E;return o(),u("div",Y,[e("div",J,[K,Q,e("div",Z,[tt,et,e("div",at,[(o(!0),u(g,null,z(w(s),a=>(o(),f(y,M({key:a._path,path:a._path,class:"mt-6",ref_for:!0},a),null,16,["path"]))),128))])])]),e("div",st,[lt,n(v,{num:"3",class:"mt-12",style:{"--stagger":"6"},"data-animate":""},{default:l(()=>[w(p)?(o(),u(g,{key:0},z(8,a=>n(_,{key:a,class:"min-h-[130px] animate-pulse"})),64)):(o(!0),u(g,{key:1},z(w(i),a=>(o(),f(_,{key:a.id},{type:l(()=>[e("div",ot,[n(m,{to:a.stargazers_url,"aria-label":"Stargazers"},{default:l(()=>[n(k,{class:"i-ph-star-bold"}),c(" "+d(a.stargazers_count),1)]),_:2},1032,["to"]),a.homepage?(o(),f(m,{key:0,"aria-label":"Homepage",class:"lowercase",to:a.homepage},{default:l(()=>[c(d(a.homepage.substring(8)),1)]),_:2},1032,["to"])):j("",!0)])]),description:l(()=>[n(m,{to:a.html_url},{default:l(()=>[c(d(a.description),1)]),_:2},1032,["to"])]),default:l(()=>[n(m,{to:a.html_url},{default:l(()=>[c(d(a.name),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])])}}};export{ut as default};