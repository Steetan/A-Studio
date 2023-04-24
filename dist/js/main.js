const menuBurger = document.querySelector(".menu-burger")
const menu = document.querySelector(".menu")
const menuLink = document.querySelectorAll(".menu__link")

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },

});

menuBurger.addEventListener("click", function() {
    menu.classList.toggle("menu--active")
    menuBurger.classList.toggle("menu-burger--open")
    if(menu.classList.contains("menu--active")) {
        document.body.style.cssText = `
            overflow: hidden;
        `
    }
    else if(!menu.classList.contains("menu--active")) {
        document.body.style.cssText = `
            overflow: auto;
        `
    }
})

menuLink.forEach(function(event) {
    event.addEventListener("click", function(e) {
        e.preventDefault()
        if(event.classList.contains("menu__link--home")) {
            menuLinkScroll(".intro")
        }
        if(event.classList.contains("menu__link--clients")) {
            menuLinkScroll(".clients")
        }
        if(event.classList.contains("menu__link--service")) {
            menuLinkScroll(".service")
        }
        if(event.classList.contains("menu__link--project")) {
            menuLinkScroll(".plan")
        }
        if(event.classList.contains("menu__link--blog")) {
            menuLinkScroll(".blog")
        }
        if(event.classList.contains("menu__link--contacts")) {
            menuLinkScroll(".contacts")
        }
        if(menu.classList.contains("menu--active")) {
            menu.classList.remove("menu--active")
            menuBurger.classList.remove("menu-burger--open")
            document.body.style.overflow = "auto"
        }
    })
})

function menuLinkScroll(link) {
    document.querySelector(link).scrollIntoView({
        behavior: "smooth", 
        block: "start"
    })
}