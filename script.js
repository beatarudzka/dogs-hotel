const menu = document.querySelector(".main-nav")
const header = document.querySelector(".header")
const navLinks = document.querySelectorAll(".nav__link")

const sectionHeaderOptions = {
  rootMargin: "-800px 0px 0px 0px"
}

const sectionHeaderObserver = new IntersectionObserver(function (
  entries,
  sectionHeaderObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      menu.classList.add("nav__scrolled")
      navLinks.forEach(navLink => {
        navLink.classList.add("link__scrolled")
      })
    } else {
      menu.classList.remove("nav__scrolled")
      navLinks.forEach(navLink => {
        navLink.classList.remove("link__scrolled")
      })
    }
  })
}, sectionHeaderOptions)



sectionHeaderObserver.observe(header)
