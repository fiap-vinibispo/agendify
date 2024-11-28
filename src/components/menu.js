const links = document.querySelectorAll("header.menu nav ul li a")
const sections = document.querySelectorAll("section")

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
    if (item.getAttribute("href") == `#${currentSection}`) item.classList.add("active")
  })
})
