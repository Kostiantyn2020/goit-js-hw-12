import{a as L,S as v,i as a}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="45081240-5f1794f19be8a159ba53eac07",$="https://pixabay.com/api/";async function h(r,t=1,s=15){const i=`${$}?key=${S}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`;try{return(await L.get(i)).data}catch{throw new Error("Network response was not ok")}}function g(r){return r.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:o,comments:d,downloads:w})=>`
    <div class="photo-card">
      <a href="${s}">
        <img src="${t}" alt="${i}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${o}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${w}</p>
      </div>
    </div>
  `).join("")}function q(){document.querySelector(".gallery").innerHTML=""}function p(r){document.querySelector(".gallery").insertAdjacentHTML("beforeend",r)}const f=document.querySelector("#search-form");document.querySelector(".gallery");const m=document.querySelector(".loader"),l=document.querySelector(".load-more");let b=new v(".gallery a"),c=1,u="";const y=100;let n=0;f.addEventListener("submit",async r=>{if(r.preventDefault(),u=r.target.elements.searchQuery.value.trim(),!u){a.error({title:"Error",message:"Please enter a search term"});return}q(),c=1,n=0,m.style.display="block",l.style.display="none";try{const t=await h(u,c);if(t.hits.length===0)a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const s=g(t.hits);p(s),b.refresh(),f.elements.searchQuery.value="",n+=t.hits.length,t.totalHits>c*15&&n<y?l.style.display="block":n>=y&&a.info({title:"Limit Reached",message:"You have reached the maximum number of images."})}}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{m.style.display="none"}});l.addEventListener("click",async()=>{if(n>=y){a.info({title:"Limit Reached",message:"You have reached the maximum number of images."});return}c+=1,m.style.display="block",l.style.display="none";try{const r=await h(u,c),t=g(r.hits);p(t),b.refresh(),n+=r.hits.length,r.totalHits<=c*15||n>=y?(a.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none"):l.style.display="block";const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{m.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map