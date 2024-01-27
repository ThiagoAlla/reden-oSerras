window.onscroll = function () {
  var navigation = document.getElementById('navigation')
  if (window.scrollY > 0) {
    navigation.classList.add('scroll');
    
  } else {
    navigation.classList.remove('scroll');
  }
}
