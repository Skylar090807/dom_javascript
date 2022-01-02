const cat = document.querySelector('#cat')
const button = document.querySelector('button')
button.addEventListener('click', () => {
  cat.scrollIntoView({ behavior: 'smooth', block: 'center' })
})
