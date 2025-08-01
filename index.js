import{a as m,S as p,i as a}from"./assets/vendor-17bda9aa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="51566476-370d8ae35b5995096aee585ea",g="https://pixabay.com/api/";async function h(n){const t={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:t})).data}const b=new p(".gallery a"),c=document.querySelector(".gallery"),l=document.querySelector(".loader-container");function v(n){const t=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:i,comments:d,downloads:f})=>`
      <li class="photo-card">
        <a href="${s}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function L(){c.innerHTML=""}function S(){l.innerHTML='<div class="ball-beat"><div></div><div></div><div></div></div>'}function w(){l.innerHTML=""}const u=document.querySelector(".form");u.addEventListener("submit",q);async function q(n){n.preventDefault();const t=u.elements["search-text"].value.trim();if(t){L(),S();try{const{hits:o}=await h(t);o.length===0?a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):v(o)}catch(o){console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{w()}}}
//# sourceMappingURL=index.js.map
