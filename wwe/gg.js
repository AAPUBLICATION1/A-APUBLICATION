

const scriptURL = 'https://script.google.com/macros/s/AKfycbwCHAKHYZ8xflW88QV1ku2GwiwkwCKB5Ibi9CUehujE_BxYlKw3A1EmM12B5r6oxZ1N/exec"'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
