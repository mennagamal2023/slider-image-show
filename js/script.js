
let imgSlideList = document.querySelector('.container .imgSlideList')
let imgSlideItem = document.querySelectorAll('.container .imgSlideList .imgSlideItem')
let dots = document.querySelectorAll(".container .dots li")
let prev = document.getElementById("prev")
let next =document.getElementById("next")

let active = 0;
let lengthItem = imgSlideItem.length -1;

// photos to forward
next.onclick =function(){
   if( active + 1 > lengthItem){
    active =0
   }else{
    active = active + 1
   }
    reloadSlide();
}
//photos to backward
prev.onclick =function(){
    if( active - 1 < 0){
     active = imgSlideItem;
    }else{
     active = active - 1
    }
     reloadSlide();
 }
// automatic play of slideshow
let slideShow =setInterval(()=>{next.click()},5000)

// transfom from active slide to next slide
function reloadSlide(){
    let checkLeft =imgSlideItem[active].offsetLeft;
    imgSlideList.style.left = -checkLeft + "px"

    let lastActiveDot =document.querySelector(".container .dots li.active")
    lastActiveDot.classList.remove("active")
    dots[active].classList.add("active")
    clearInterval(slideShow)
    slideShow =setInterval(()=>{next.click()},5000)
}
// when click on dots slide transform 
dots.forEach((li ,key)=>{
    li.addEventListener("click" ,function(){
        active = key;
        reloadSlide();
    })

})

