const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null,d="";t.addEventListener("click",(()=>{t.disabled=!0,a=setInterval((()=>{d=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`,document.body.style.backgroundColor=d}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.6e08bbc6.js.map
