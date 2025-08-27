const themeToggle = document.querySelector('.darkmode-toggle');
let body = document.getElementsByTagName('body')[0]


themeToggle.addEventListener('click', function(){
  
  if (themeToggle.classList.toggle('active')) {
    document.body.style.backgroundColor = '#252B42'
  } else {
    document.body.style.backgroundColor = '#fff'
  }
})
