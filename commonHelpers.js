import{a as b,S as w,i as c}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="45081240-5f1794f19be8a159ba53eac07",v="https://pixabay.com/api/";async function p(r,t=1,s=15){const a=`${v}?key=${S}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`;try{return(await b.get(a)).data}catch{throw new Error("Network response was not ok")}}function f(r){return r.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:o,comments:i,downloads:h})=>`
    <div class="photo-card">
      <a href="${s}">
        <img src="${t}" alt="${a}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${o}</p>
        <p><b>Comments:</b> ${i}</p>
        <p><b>Downloads:</b> ${h}</p>
      </div>
    </div>
  `).join("")}function L(){document.querySelector(".gallery").innerHTML=""}function m(r){document.querySelector(".gallery").insertAdjacentHTML("beforeend",r)}const u=document.querySelector("#search-form");document.querySelector(".gallery");const y=document.querySelector(".loader"),n=document.querySelector(".load-more");let g=new w(".gallery a"),l=1,d="";u.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.target.elements.searchQuery.value.trim(),!d){c.error({title:"Error",message:"Please enter a search term"});return}L(),l=1,y.style.display="block",n.style.display="none";try{const t=await p(d,l);if(t.hits.length===0)c.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const s=f(t.hits);m(s),g.refresh(),u.elements.searchQuery.value="",t.totalHits>l*15&&(n.style.display="block")}}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{y.style.display="none"}});n.addEventListener("click",async()=>{l+=1,y.style.display="block",n.style.display="none";try{const r=await p(d,l),t=f(r.hits);m(t),g.refresh(),r.totalHits<=l*15?(c.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}),n.style.display="none"):n.style.display="block";const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{y.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map