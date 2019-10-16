let inicio = document.querySelector("#inicio");
let dia1 = document.querySelector("#dia1");
let dia2 = document.querySelector("#dia2");
let dia3 = document.querySelector("#dia3");
let dia4 = document.querySelector("#dia4");
let dia5 = document.querySelector("#dia5");

let article1 = document.querySelector(".article1");
let article2 = document.querySelector(".article2");
let article3 = document.querySelector(".article3");
let article4 = document.querySelector(".article4");
let article5 = document.querySelector(".article5");
let article6 = document.querySelector(".article6");

inicio.addEventListener("click", ()=>{
    article1.setAttribute("style","display:block")
    article2.setAttribute("style","display:none")
    article3.setAttribute("style","display:none")
    article4.setAttribute("style","display:none")
    article5.setAttribute("style","display:none")
    article6.setAttribute("style","display:none")
})

dia1.addEventListener("click", ()=>{
    article1.setAttribute("style","display:none")
    article2.setAttribute("style","display:block")
    article3.setAttribute("style","display:none")
    article4.setAttribute("style","display:none")
    article5.setAttribute("style","display:none")
    article6.setAttribute("style","display:none")
})

dia2.addEventListener("click", ()=>{
    article1.setAttribute("style","display:none")
    article2.setAttribute("style","display:none")
    article3.setAttribute("style","display:block")
    article4.setAttribute("style","display:none")
    article5.setAttribute("style","display:none")
    article6.setAttribute("style","display:none")
})

dia3.addEventListener("click", ()=>{
    article1.setAttribute("style","display:none")
    article2.setAttribute("style","display:none")
    article3.setAttribute("style","display:none")
    article4.setAttribute("style","display:block")
    article5.setAttribute("style","display:none")
    article6.setAttribute("style","display:none")
})

dia4.addEventListener("click", ()=>{
    article1.setAttribute("style","display:none")
    article2.setAttribute("style","display:none")
    article3.setAttribute("style","display:none")
    article4.setAttribute("style","display:none")
    article5.setAttribute("style","display:block")
    article6.setAttribute("style","display:none")
})

dia5.addEventListener("click", ()=>{
    article1.setAttribute("style","display:none")
    article2.setAttribute("style","display:none")
    article3.setAttribute("style","display:none")
    article4.setAttribute("style","display:none")
    article5.setAttribute("style","display:none")
    article6.setAttribute("style","display:block")
})
