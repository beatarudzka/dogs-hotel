const composition = document.querySelector(".info__composition")
const sections = document.querySelectorAll("section")

const options = {
  root: null,
  treshold: 1,
  rootMargin: "-50px"

}

const observer = new IntersectionObserver(function (
  entries, observer) {
  entries.forEach(entry => {
    entry.target.classList.toggle("inverse")
  })
}, options)


sections.forEach(section => {
  observer.observe(section)
})