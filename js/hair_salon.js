let menuBtn = document.querySelector("#menuBtn")
let sideNav = document.querySelector("#sideNav")
let menu = document.querySelector("#menu")

sideNav.style.right = "-250px"

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0"
        menu.src = "./img/close.png"
    } else {
        sideNav.style.right = "-250px" 
        menu.src = "./img/menu.png"
    }
}

// All animations will take exactly 500ms
let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000, speedAsDuration: true
});