const links = document.querySelectorAll("header.menu nav ul li a")
const sections = document.querySelectorAll("section")
let i = 0

window.addEventListener("scroll", () => {
  let currentSection = ''
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight / 2) {
      currentSection = section.getAttribute('id')
    } 
  })

  links.forEach(item => {
    item.classList.remove(".active")
  })

  const activeLink = document.querySelector(`header.menu nav ul li a[href="#${currentSection}"]`)
  if (activeLink) activeLink.classList.add("active")
})
