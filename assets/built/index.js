!function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");document.querySelector(".gh-burger").addEventListener("click",(function(){document.body.classList.toggle("gh-head-open")})),function(){if(!e)return;new IntersectionObserver(((t,r)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const r=await t.text(),n=(new DOMParser).parseFromString(r,"text/html"),o=n.querySelectorAll(".post"),c=n.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:o,nextLink:c}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:n,nextLink:o}=t;n.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),o?(e=o,r.observe(document.querySelector(".post:last-of-type"))):r.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}(),function(){const e=language;document.documentElement.setAttribute("lang",e)}()}();
//# sourceMappingURL=index.js.map