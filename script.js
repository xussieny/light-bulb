const btn =document.getElementById("button-on");
const image= document.getElementById("img");
btn.addEventListener("click", ()=>{
    image.src="https://www.w3schools.com/js/pic_bulbon.gif";
});
const btn2 = document.getElementById("button-off");
btn2.addEventListener("click", ()=>{
    image.src="https://www.w3schools.com/js/pic_bulboff.gif";
});
