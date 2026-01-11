const header = document.querySelector(".header")
const burger = header.querySelector(".burger-menu")
const burgerIcon = header.querySelector(".burger-menu__icon")

burger.addEventListener("click", function () {
	header.classList.toggle("header--mobile");
})

