import{_ as c}from"./28K3z42_.js";import{h,L as i,A as u,Z as m,N as l,$ as d,o as g,g as p,i as r,ac as f}from"./DfeJJA1g.js";const _=h({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?c:"img",t=e,o=u(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=m(l(i().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return d(s,t.src)}return t.src});return(a,s)=>(g(),p(f(r(n)),{src:r(o),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{_ as default};
