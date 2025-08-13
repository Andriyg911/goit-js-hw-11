import{a as f,S as g,i as a}from"./assets/vendor-VIVKUCgE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="51566476-370d8ae35b5995096aee585ea";function d(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return f.get(y,{params:r}).then(i=>i.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let p=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:m})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${n}">
          <img class="gallery__image" src="${i}" alt="${e}" loading="lazy" />
        </a>
        <ul class="gallery__meta">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${s}</li>
          <li><b>Comments:</b> ${u}</li>
          <li><b>Downloads:</b> ${m}</li>
        </ul>
      </li>`).join("");l.innerHTML=r,p.refresh()}function L(){l.innerHTML=""}function _(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",q);function q(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query.",position:"topRight"});return}L(),_(),d(r).then(i=>{const n=Array.isArray(i==null?void 0:i.hits)?i.hits:[];if(n.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(n)}).catch(()=>{a.error({message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
