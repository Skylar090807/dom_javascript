//defer load before DOMContentLoaded

// DOMContentLoaded after defer load, only document
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})

//load after DOMContentLoaded load,after resources (css, images)
window.addEventListener('load', () => {
  console.log('load')
})

//before unload
window.addEventListener('beforeunload', () => {
  console.log('beforeunload')
})

//resource is being unloaded
window.addEventListener('unload', () => {
  console.log('unload')
})
