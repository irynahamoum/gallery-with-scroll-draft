import{S,i as a,a as M}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const v=document.querySelector(".form"),l=document.querySelector(".gallery-grid"),f=document.querySelector(".loader");document.querySelector("js-target");let q=new S(".gallery-grid a",{captionsData:"alt"}),c=1,d,p=0;v.addEventListener("submit",E);loadMoreBtn.addEventListener("click",O);const B=(i,o)=>{i.forEach(e=>{})};new IntersectionObserver(B);async function E(i){var o;if(i.preventDefault(),u(),l.innerHTML="",d=i.target.elements.query.value.trim(),!d){l.innerHTML="",a.error({message:"Search field is empty",position:"topRight"});return}y();try{c=1;const e=await h();if((o=e==null?void 0:e.hits)!=null&&o.length){m(),p=Math.ceil(e.totalHits/15),g(),b(e.hits);return}throw Error("Sorry, there are no images matching your search query. Please try again!")}catch(e){a.info({message:typeof e=="string"?e:"Something went wrong, sorry!",position:"topRight"})}i.target.reset()}async function O(i){var o;y(),u();try{c+=1;const e=await h();if((o=e==null?void 0:e.hits)!=null&&o.length){m(),g(),b(e.hits);return}throw Error("Sorry, there are no images matching your search query. Please try again!")}catch(e){a.info({message:typeof e=="string"?e:"Something went wrong, sorry!",position:"topRight"})}i.target.reset()}function g(){p!==c?P():(u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function y(){f.style.display="inline-block"}function m(){f.style.display="none"}function P(){loadMoreBtn.classList.remove("hidden")}function u(){loadMoreBtn.classList.add("hidden")}async function h(){return(await M.get("https://pixabay.com/api/",{params:{key:"42157668-d969611c6fdd34526589fe987",q:d,image_type:"photo",orientation:"horizontal",safeSearch:!0,page:c,per_page:15}})).data}function b(i){const o=i.map(({webformatURL:e,largeImageURL:n,tags:t,likes:r,views:s,comments:L,downloads:w})=>`<a href="${n}" class="gallery-card">
      <img src="${e}" alt="${t}" >
      <div class="img-details-box">
      <p class="detail-item"><b>Likes:</b> ${r}</p>
      <p class="detail-item"><b>Views:</b> ${s}</p>
      <p class="detail-item"><b>Comments:</b> ${L}</p>
      <p class="detail-item"><b>Downloads:</b> ${w}</p></div>
      </a>`).join("");l.insertAdjacentHTML("beforeend",o),q.refresh()}
//# sourceMappingURL=commonHelpers.js.map