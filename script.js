const composition = document.querySelector(".info__composition")
const sections = document.querySelectorAll("section")

const options = {}

const observer = new IntersectionObserver(function (
  entries, observer) {
  entries.forEach(entry => {
    console.log(entry)
  })
}, options)


sections.forEach(section => {
  observer.observe(section)
})