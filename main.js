const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-wraper");
const body = document.querySelector("body");
const menuLi = document.querySelectorAll(".menu li");

//---------Styling for the menu--------
menuLi.forEach((li, index)=>{
    li.style.transition = "all " + ( (index + 1) * 0.26) + "s ease";
});

hamburger.addEventListener("click", ()=>{
    
    if(!menu.classList.contains("active")){
        menu.classList.add("active");
        hamburger.classList.add("active");
        body.dataset.menuStatus = "active";
    }else if (menu.classList.contains("active")){
        menu.classList.remove("active");
        hamburger.classList.remove("active");
        body.dataset.menuStatus = "null";
       
    }
})