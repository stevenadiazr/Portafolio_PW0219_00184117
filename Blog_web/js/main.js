let menu1 = document.querySelector("#1");
let menu2 = document.querySelector("#2");
let bars = document.querySelector(".options i:first-child");
let x = document.querySelector(".options i:last-child");
let article = document.querySelector(".article");

menu1.addEventListener("click", ()=>{
    article.classList.toggle('hide-2');
    article.classList.toggle('hide-3');
    article.classList.toggle('hide-4');
    article.classList.toggle('hide-5');
    article.classList.toggle('hide-6');
})

menu2.addEventListener("click", ()=>{
    article.classList.toggle('hide-1');
    article.classList.toggle('hide-3');
    article.classList.toggle('hide-4');
    article.classList.toggle('hide-5');
    article.classList.toggle('hide-6');
})

/*  let options = document.querySelector(".options");
    let bars = document.querySelector(".options i:first-child");
    let x = document.querySelector(".options i:last-child");
    let menu = document.querySelector("#menu");

    articles.addEventListener("click", ()=>{
    menu.classList.toggle('hide-mobile');
    bars.classList.toggle('hide-mobile');
    x.classList.toggle('hide-mobile');
    })
*/
