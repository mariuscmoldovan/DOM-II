// Your code goes here

// on click
const body = document.querySelector('.nav-container')
body.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "yellow"
})

// mouseover
const logo = document.querySelector('.logo-heading')
logo.addEventListener("mouseover", ()=>{
    logo.style.color = "red";
})

// focus
 logo.addEventListener("focus", (event) => {
    event.target.style.background = "blue";
 });

// keydown
document.addEventListener("keydown", function(event){
    if (event.code =='KeyQ'){
        alert('You pressed key Q')
    }
});

  //dblclick
  const contentSection = document.querySelector(".content-section");
  contentSection.addEventListener("dblclick", (event) => {
      event.target.style.backgroundColor = "green";
})

// mousedown
  const destination = document.querySelector('.content-destination p')
  destination.addEventListener('mouseover', ()=>{
      destination.style.color = "blue";
})

// mouseenter
const img = document.querySelector(".intro img");
img.addEventListener("mouseenter", ()=> {
    img.style.transform = "scale(1.9)";
    img.style.transition = "all 0.5s";
})

// mouseleave
img.addEventListener("mouseleave",()=>{
    img.style.transform = "scale(1)"
})

// load
window.addEventListener('load', (event) =>{
    console.log('Page is loaded');
})

// scroll
window.addEventListener("scroll", (event) => {
    console.log("You are scrolling");
});


const navLink = document.querySelectorAll(".nav-container")
navLink.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
    })
})