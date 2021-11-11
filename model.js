var btns = document.querySelector(".btn");
var mod = document.querySelector(".model");
var clo = document.querySelector(".close-btn"); 
btns.addEventListener("click",function(){
    mod.classList.add("vis");   
});
clo.addEventListener("click",function(){
    mod.classList.remove("vis");
});