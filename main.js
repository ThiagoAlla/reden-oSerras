window.onScroll = function () {
  var navigation = document.getElementById('navigation')
  if (window.scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
})

ScrollReveal().reveal(`
  #home,
  #home .what,
  #home .gifSerra,
  #home .container, 
  #home .stats, 
  #services,
  #services header,
  #services .card,#about 
  .wrapper, 
  .content, 
  .galpao
  
`)
