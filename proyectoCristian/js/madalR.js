let Modal=document.querySelector(".modal");
let x=document.getElementById("x");
let crear=document.querySelector("Crear");
let aceptar=document.getElementById("aceptar");
let cancelar=document.getElementById("cancelar");

Crear.addEventListener("click",function(){
    Modal.style.visibility="visible";
})
cancelar.addEventListener("click",function(){
    Modal.style.visibility="hidden";
})
aceptar.addEventListener("click",function(){
    Modal.style.visibility="hidden";
})
x.addEventListener("click",function(){
    Modal.style.visibility="hidden";
})