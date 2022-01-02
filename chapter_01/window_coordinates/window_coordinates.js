const special = document.querySelector('.special')
special.addEventListener('click', (event) => {
  const rect = special.getBoundingClientRect()
  console.log(rect)
  console.log(`client: ${event.clientX}, ${event.clientY}`)
  console.log(`page: ${event.pageX}, ${event.pageY}`)
})

const scrollBy = document.querySelector('.scroll-by')
const scrollTo = document.querySelector('.scroll-to')
const scrollInto = document.querySelector('.scroll-into')

scrollBy.addEventListener('click', () => {
  window.scrollBy(0, 100)
})
scrollTo.addEventListener('click', () => {
  window.scrollTo(0, 100)
})
scrollInto.addEventListener('click', () => {
  special.scrollIntoView({ behavior: 'smooth' })
})
