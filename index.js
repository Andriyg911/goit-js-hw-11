import{a as p,S as d,i as a}from"./assets/vendor-C3lJ7lpQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="51566476-370d8ae35b5995096aee585ea",g="https://pixabay.com/api/";function y(o){return p.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${i}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r===""){a.warning({message:"Введіть пошуковий запит!",position:"topRight"});return}v(),L(),y(r).then(i=>{if(i.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(()=>{a.error({message:"Сталася помилка при завантаженні зображень.",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
