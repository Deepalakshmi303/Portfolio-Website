const text="I am a Developer";
const speed= 200;
let index=0;
function typeEffect(){
    if(index<text.length){
        document.querySelector(".typing-h3").textContent+=text.charAt(index);
        index++;
        setTimeout(typeEffect,speed);
    }
}
typeEffect()

// Reusable function to update values
document.querySelectorAll(".skill").forEach(slider=>{
    slider.addEventListener("input",function(){
        const target=this.getAttribute("data-target");
        const display=document.getElementById(target);
        display.textContent=this.value+"%";
        })
})
