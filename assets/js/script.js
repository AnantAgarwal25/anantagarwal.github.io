// Sticky Navbar

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.boxShadow="0 12px 25px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow="none";

}

});


// =========================
// Typing Animation
// =========================

// const words=[

// "PhD Research Scholar",

// "AI for Wireless Communications",

// "6G Researcher",

// "Integrated Sensing & Communication",

// "Vehicular Networks",

// "Machine Learning",

// "LiFi & VLC Research"

// ];

// let wordIndex=0;

// let charIndex=0;

// let deleting=false;

// const typing=document.getElementById("typing");

// function type(){

// if(!typing) return;

// const current=words[wordIndex];

// if(!deleting){

// typing.textContent=current.substring(0,charIndex++);

// if(charIndex>current.length){

// deleting=true;

// setTimeout(type,1500);

// return;

// }

// }

// else{

// typing.textContent=current.substring(0,charIndex--);

// if(charIndex<0){

// deleting=false;

// wordIndex=(wordIndex+1)%words.length;

// }

// }

// setTimeout(type,deleting?40:90);

// }

// type();

// =========================
// Dark Mode
// =========================

const toggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

toggle.innerHTML='<i class="fas fa-sun"></i>';

}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

toggle.innerHTML='<i class="fas fa-sun"></i>';

}

else{

localStorage.setItem("theme","light");

toggle.innerHTML='<i class="fas fa-moon"></i>';

}

});

// =====================
// Counter Animation
// =====================

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const update=()=>{

count+=Math.ceil(target/80);

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

}

});

});

counters.forEach(c=>observer.observe(c));

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>500

?

"block"

:

"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
