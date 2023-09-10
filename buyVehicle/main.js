/////// menu Animation

window.onload = () =>{
    const links = document.querySelectorAll(".link");
    links.forEach(link =>{
        link.addEventListener(("click"), (e)=>{
            e.preventDefault();
            document.querySelector(e.target.hash).scrollIntoView({
                behavior:"smooth"
            });
        });
    });
   
}
window.addEventListener("scroll" , function(){
    var header = document.querySelector("header");
    header.classList.toggle("stiky" ,scrollY > 5);
})

////////////// Menu button


const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener('click', ()=>{
  const visibality = primaryNav.getAttribute("data-visible");
  
  if(visibality === "false"){
    primaryNav.setAttribute("data-visible",true);
  }else{
    primaryNav.setAttribute("data-visible", false);
  }

})