const form = document.querySelector("section#registration form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!form.checkValidity()) {
    const inputs = form.querySelectorAll("input:invalid")
    inputs.forEach(input => {
      const validityState = input.validity
      const label = input.parentElement.firstElementChild
      label.classList.add("error")
      const labelText = label.textContent
      if (validityState.valueMissing) {
        input.setCustomValidity(`O campo ${labelText.toLowerCase()} deve ser preenchido`)
      } else if (validityState.typeMismatch) {
        input.setCustomValidity(`Não é um ${labelText.toLowerCase()} válido`)
      }
      input.classList.add("error")
    })
    form.reportValidity()
    return
  }

  alert("Obrigado por se cadastrar, em breve você receberá mais contato da nossa equipe no seu e-mail")
})
