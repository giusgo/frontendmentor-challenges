// Change principal image on window width

const principalImg = document.getElementById("principal__img");

function changeImg() {
    if (window.innerWidth <= 900){
        principalImg.src = "./assets/images/image-web-3-mobile.jpg";
    } else {
        principalImg.src = "./assets/images/image-web-3-desktop.jpg";
    }
}

window.onload = changeImg();

// Toggle nav menu

const openMenu = document.getElementById("mobile-menu-button");
const closeMenu = document.getElementById("mobile-menu-close");
const outsideMenu = document.getElementById("mobile-menu-fade");

function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("active");
}

openMenu.onclick = closeMenu.onclick = outsideMenu.onclick = e => {toggleMenu()};