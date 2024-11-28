class ImageWithText extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.text = this.getAttribute("text") || ""
    this.imageSrc = this.getAttribute("src")
    this.imageAlt = this.getAttribute("alt")
    this.container = createElementWithClass("div", "image-container")
    const image = createElementWithClass("img")
    image.setAttribute("src", this.imageSrc)
    image.setAttribute("alt", this.imageAlt)
    const overlay = createElementWithClass("div", "overlay")
    const textOverlayContainer = createElementWithClass("div", "text-overlay")
    const span = document.createElement("span")
    span.textContent = this.text
    textOverlayContainer.appendChild(span)
    this.container.appendChild(image)
    this.container.appendChild(overlay)
    this.container.appendChild(textOverlayContainer)
    this.appendChild(this.container)
  }
}

/**
  * This will create a web component that you'll call on the html like this:
  * <image-with-text src="image_url" alt="image_alt" text="Text inside the image"></image-with-text>
*/
customElements.define("image-with-text", ImageWithText)

/**
  * Create a element and add class if class exists
  * @param {keyof HTMLElementTagNameMap} tag The element that will be created
  * @param {String} classList The classes that will be added
  * @return {HTMLElementTagNameMap[tag]}
*/
function createElementWithClass(tag, classList = '') {
  const element = document.createElement(tag)
  if (classList) element.classList.add(classList)
  return element
}
