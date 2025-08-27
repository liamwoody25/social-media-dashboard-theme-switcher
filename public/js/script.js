const themeToggle = document.querySelector('.darkmode-toggle');
let body = document.getElementsByTagName('body')[0];
let data = document.querySelector('.card');
const dataContent = document.querySelector('.stat-card')

function darkMode() {
   if (themeToggle.classList.toggle('active')) {
    document.body.style.backgroundColor = '#252B42'
    data.style.backgroundColor = '#252B42'
    data. 
  } else {
    document.body.style.backgroundColor = '#fff'
  }
}

function lightMode() {
  if (themeToggle.classList.toggle('active')) {
    document.body.style.backgroundColor = '#fff'
  }
}

themeToggle.addEventListener('click', function(){
 darkMode()
 lightMode()
 
})
