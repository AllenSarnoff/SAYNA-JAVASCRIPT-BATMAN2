const anchors = document.querySelectorAll(".anchor");
anchors.forEach(elem => elem.addEventListener("click", smoothing));

function smoothing(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}

const conf = document.querySelector(".confirmation");
conf.addEventListener("click", takingInformations());

function takingInformations(){
    let mail = document.querySelector("#mail");
    let acceptNewsletter;
    let frequency = document.querySelector("#frequence")
    
    // alert("Hue Cannabis");
}

const animation = document.querySelector("body");
window.onscroll = function(){
    animation.setAttribute("class", "elements")
}