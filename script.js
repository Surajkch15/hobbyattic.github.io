// =========================
// Navbar Shadow on Scroll
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        nav.style.background = "rgba(255,255,255,.92)";

    }

    else{

        nav.style.boxShadow = "none";

        nav.style.background = "rgba(255,255,255,.72)";

    }

});


// =========================
// Scroll Reveal
// =========================

const reveals = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

reveals.forEach(section=>{

observer.observe(section);

});
