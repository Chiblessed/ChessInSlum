import{j as e,r as c}from"./index-I5bE2Y-k.js";import{F as h}from"./fila-BSIPCOKF.js";import{M as g,B as u}from"./Rectangle 125-Bab1fdZu.js";const x="/ChessInSlum/assets/bolgtenenage-CJS0a1fn.png",C="/ChessInSlum/assets/bolgchess-kWoqautY.png",p="/ChessInSlum/assets/blog%20can-BAefhHYT.png",b="/ChessInSlum/assets/girledu-_Y_M2tQD.png",f="/ChessInSlum/assets/oshodichamp-BM2eKqdu.png",j="/ChessInSlum/assets/bolgceo-Waw_JTzv.png",S="/ChessInSlum/assets/blogimg2-DapQ1PVG.png",d=[{id:1,image:h,title:"Chess Fila has launched and is ready for takeoff",date:"20th June 2023",readCount:"4 mins read",category:"Chess"},{id:2,image:S,title:"Inclusion for every child",date:"19th June 2023",readCount:"3 mins read",category:"Scholarship"},{id:3,image:b,title:"Empowering the girl child: Goal Women Africa X Chess in Slums",date:"19th June 2023",readCount:"3 mins read",category:"Scholarship"},{id:4,image:j,title:"How Tunde Onakoya raised N50 to teach Chess in Slums",date:"19th June 2023",readCount:"3 mins read",category:"Chess"},{id:5,image:p,title:"The Canadian High Commission visits Oshodi Underbridge",date:"17th June 2023",readCount:"3 mins read",category:"Scholarship"},{id:6,image:x,title:"Checkmating Teenage Pregnancy",date:"11th June 2023",readCount:"3 mins read",category:"Scholarship"},{id:7,image:g,title:"Meet the Makoko Champ: Ferdinard Maumo",date:"9th June 2023",readCount:"5 mins read",category:"Chess"},{id:8,image:C,title:"Chess for Education",date:"7th June 2023",readCount:"3 mins read",category:"Scholarship"},{id:9,image:f,title:"Meet the Oshodi Champ: Adeoye Fawas",date:"6th June 2023",readCount:"4 mins read",category:"Chess"},{id:10,image:u,title:"How we started: The Majidun Chess Dream",date:"9th June 2023",readCount:"5 mins read",category:"Chess"}],k=({items:a})=>e.jsx("div",{className:"grid grid-cols-3 mx-10 md:mx-2 gap-4  sm:grid-cols-1",children:a.map(s=>e.jsxs("div",{className:"flex flex-col border-[1px] border-solid border-black rounded w-full",children:[e.jsx("div",{children:e.jsx("img",{className:"w-full h-44 md:h-32",src:s.image,alt:""})}),e.jsxs("div",{className:"mt-2 mb-4",children:[e.jsx("h2",{className:"mx-5 mb-10 text-[#0D101C] text-xl font-semibold",children:s.title}),e.jsxs("p",{className:"text-[#5B5B5B] text-[16px] font-normal mx-5",children:[s.date," . ",s.readCount]})]})]},s.id))});function w({menuItems:a,filterItems:s,setItems:l}){const[i,t]=c.useState(null),r=()=>{l(d),t(null)},m=(o,n)=>{s(o),t(n)};return e.jsxs("div",{className:"flex mx-10 text-xl font-semibold gap-5 lg:mx-2 mt-10 mb-10",children:[e.jsx("button",{className:`w-[89px] sm:w-28 h-[40px] rounded-[32px] ${i===null?"bg-black text-white":" text-black"}`,onClick:r,children:"All"}),a.map((o,n)=>e.jsx("button",{className:`w-[119px] sm:w-28 h-[40px] rounded-[32px] ${i===n?"bg-black text-white w-[125px]":" text-black"}`,onClick:()=>m(o,n),children:o},n))]})}const J=()=>{const[a,s]=c.useState(d),l=[...new Set(d.map(t=>t.category))],i=t=>{const r=d.filter(m=>m.category===t);s(r)};return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs("div",{className:"mx-10 md:mx-3 mt-20 sm:mx-0 lg:mx-24",children:[e.jsx(w,{menuItems:l,filterItems:i,setItems:s}),e.jsx(k,{items:a})]})})})};export{J as default};
