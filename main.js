window.addEventListener('scroll', onScroll);

onScroll()
function onScroll() {
  showNavOnScroll()
  showButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  var navigation = document.getElementById('navigation');
  if (window.scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showButtonOnScroll() {
  var backToTopButton = document.getElementById('backToTopButton');
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}


function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou a linha

  const sectionTop = section.offsetTop
  console.log()
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // console.log('o topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine);

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // console.log('o fundo da seção passou da linha?', sectionEndPassedTargetLine);

  // limites da seção
  const sectionBoudaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
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
