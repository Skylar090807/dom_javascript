const tag = document.querySelector('.tag')
window.addEventListener('resize', () => {
  tag.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height} <br/>
  window.outer: ${window.outerWidth}, ${window.outerHeight} <br/>
  window.inner: ${window.innerWidth}, ${window.innerHeight} <br/>
  documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `
})
