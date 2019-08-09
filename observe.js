var mainOptions = {
    root:null,
    threshold:0,
    rootMargin:"-200px 0px 50px 0px"
}
const navbar = document.querySelector("navbar")
const navLink = document.querySelectorAll(".nav-link")
let mainObserver = new IntersectionObserver((enteries) => {
    if(!enteries[0].isIntersecting)
    {
        navbar.classList.add("navbar-scrolled")
        navLink.forEach(link => link.classList.add("navbar-scrolled"))
    }
    else
    {
        navbar.classList.remove("navbar-scrolled")
        navLink.forEach(link => link.classList.remove("navbar-scrolled"))
    }
    
},mainOptions)

const mainSection = document.querySelector(".main")
mainObserver.observe(mainSection)




const aboutOptions = {
    root:null,
    threshold:0,
    rootMargin:"0px"
}

const aboutSection = document.querySelector(".About")

const aboutObserver = new IntersectionObserver((enteries,aboutObserver) => {
    if(!enteries[0].isIntersecting)
    {
        return;
    }
    aboutSection.classList.add("About-inview")
    aboutObserver.unobserve(aboutSection)
},aboutOptions)

aboutObserver.observe(aboutSection)



const sliderOptions = {
    root:null,
    rootMargin: "0px 0px 50px 0px",
    threshold:.25
}

const sliders = document.querySelectorAll(".slide-in")

const slideObserver = new IntersectionObserver((enteries,slideObserver) => {
    console.log(enteries[0].target,enteries)
    if(!enteries[0].isIntersecting)
    {
        return;
    }
    enteries[0].target.classList.add("appear")
    slideObserver.unobserve(enteries[0].target)
    console.log(enteries[0].target.classList)
},sliderOptions)
sliders.forEach(item =>{
    slideObserver.observe(item)
})