const a = document.querySelector(
    '.togglerButton');

const brandSelector = document.querySelector(".brand")


a.addEventListener('click', function(){
    let statuss = a.ariaExpanded;
    if(statuss === 'true')
   brandSelector.setAttribute("hidden", "");
else
    brandSelector.removeAttribute("hidden", "");
}) ;
