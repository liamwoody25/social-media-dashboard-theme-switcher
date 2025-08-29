const themeToggle = document.querySelector('.darkmode-toggle');
let body = document.getElementsByTagName('body');
let header = document.querySelector('header');
const data = document.querySelector('.card');
const headerHd = document.getElementsByTagName('h3');
const cardHd = document.querySelector('h1'); 
const dataContent = document.querySelector('.data-info');
const headerTxt = document.getElementsByTagName('p');


// this function is for when the toggle is clicked 
function themeSwitcher() {

  if (themeToggle.classList.toggle('active')) {

   for (let i = 0; i < headerHd.length; i++) {
    headerHd[i].style.color = '#fff'
    headerTxt[i].style.color = '#AEB3CB'
   }
    document.body.style.backgroundColor = '#252B42'
    header.style.backgroundColor = '#20222F'
    data.style.backgroundColor = '#252B42'
    dataContent.style.color = '#fff'
  } else {
      for (let i = 0; i < headerHd.length; i++) {
        headerHd[i].style.color = '#1D1F29'
        headerTxt[i].style.color = '#63687D'
      }
    document.body.style.backgroundColor = '#fff'
    header.style.backgroundColor = '#f5f7ff'
    data.style.backgroundColor = '#f0f2fa'
    cardHd.style.color = '#1D1F29'
  }
}


themeToggle.addEventListener('click', function(){
  themeSwitcher()
})



  //  if (themeToggle.classList.toggle('active')) {
  //   document.body.style.backgroundColor = '#252B42';
  //   header.style.backgroundColor = '#20222F';
  //   headerTxt.style.color = '#fff'
  //   data.style.backgroundColor = '#252B42'
  //   dataContent.style.color = '#ffff'
  // } else {
  //   data.style.backgroundColor = '#f0f2fa'
  //   header.style.backgroundColor = '#f5f7ff'
  //   headerTxt.style.color = '#1D1F29'
  // }