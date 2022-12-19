$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500){
        $(" .scroll-up-button").addClass("show")
    }
    else{
        $(" .scroll-up-button").removeClass("show")
    }
  });
//   typing animation 
var typed= new Typed(".typing",{
    strings:["Developer","Freelancer","Debugger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
})
var typed= new Typed(".typing-2",{
    strings:["Developer","Freelancer","Debugger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
})
//   scrollUp effect
$(" .scroll-up-button").click(()=>
{
    $("html").animate({scrollTop:0})
})
  // toggle menu/navbar
  $(".menu-btn").click(() => {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
// owl carousel script
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive:{
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});
//theme setup
let color=document.querySelectorAll("#theme ul li span").forEach((e)=>{
  e.style.backgroundColor=`${e.getAttribute("data-color")}`
  e.onclick=()=>{
    document.querySelector(":root").style.setProperty("--mainColor",e.getAttribute("data-color"));
    document.querySelector("#theme").classList.remove("active")
  }
})
document.querySelector(".theme").onclick=()=>{
  document.querySelector("#theme").classList.toggle("active")
}
document.querySelector("#color").onchange=()=>{
  let color=document.querySelector("#color").value;
  document.querySelector(":root").style.setProperty("--mainColor",color);
  document.querySelector("#theme").classList.remove("active")
    
}