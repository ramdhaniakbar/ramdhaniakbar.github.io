let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".header .navbar")
const goToTop = document.querySelector("#goToTop")

menu.onclick = () => {
	menu.classList.toggle("fa-times")
	navbar.classList.toggle("active")
}

window.onscroll = () => {
	menu.classList.remove("fa-times")
	navbar.classList.remove("active")
}

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
	if (window.pageYOffset > 300) {
      goToTop.style.opacity = 1
      goToTop.style.pointerEvents = "all"
	} else {
      goToTop.style.opacity = 0
      goToTop.style.pointerEvents = "none"
	}
}

goToTop.onclick = () => {
	return (location.href = "#home")
}
