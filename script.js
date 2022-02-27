const fields = document.querySelectorAll('[required]')

function customValidation(event) {
  event.preventDefault()
  const field = event.target

  function verifyErrors() {
    let foundError = false

    for (let error in field.validity) {
      if (field.validity[error]) {
        foundError = error
      }
    }

    return foundError
  }

  // if (error) {
  //   field.setCustomValidity('Esse campo é obrigatório')
  // }else{
  //   field.setCustomValidity('')
  // }

  

  const error = verifyErrors()
  const spanError = field.parentNode.querySelector('span.error')
  if(error){
    spanError.classList.add("active")
    spanError.innerHTML = "Campo Obrigatório"
    
  }else{
    spanError.classList.remove("active")
    spanError.innerHTML = ""
  }
}

for (field of fields) {
  field.addEventListener('invalid', customValidation)
  field.addEventListener('blur',customValidation)
}

document.querySelector('form').addEventListener('submit', event => {
  console.log('Enviar formulário')

  event.preventDefault()
})
