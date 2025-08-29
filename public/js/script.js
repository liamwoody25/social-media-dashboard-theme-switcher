const themeToggle = document.querySelector('.darkmode-toggle');
let body = document.getElementsByTagName('body');
let header = document.querySelector('header');
const data = document.querySelectorAll('.card');
const dataCard = document.querySelectorAll('.card-1');
const headerHd = document.getElementsByTagName('h3');
const cardHd = document.querySelectorAll('h1'); 
const headerTxt = document.getElementsByTagName('p');
const statCard = document.querySelectorAll('.overview-card');
const statCardHd = document.querySelectorAll('h1');

// this function is for when the toggle is clicked 
function themeSwitcher() {

  if (themeToggle.classList.toggle('active')) {
     document.body.style.backgroundColor = '#252B42'
     header.style.backgroundColor = '#20222F'

    // this code is for setting the headings to darkmode
    for (let i = 0; i < headerHd.length; i++) {
      headerHd[i].style.color = '#fff'
      headerTxt[i].style.color = '#AEB3CB'
    }

    // this code is for setting the color of the card to darkmode
    for (let i = 0; i < data.length; i++) {
      data[i].style.backgroundColor = '#333A55'
      dataCard[i].style.backgroundColor = '#333A55'
      cardHd[i].style.color = '#fff'
    }
    // this code is for setting the colour of the card to darkmode
    for (let i = 0;  i < statCard.length; i++){
      statCard[i].style.backgroundColor = '#333A55';
    }
     
  } else {
      document.body.style.backgroundColor = '#fff'
      header.style.backgroundColor = '#f5f7ff'

      for (let i = 0; i < headerHd.length; i++) {
        headerHd[i].style.color = '#1D1F29'
        headerTxt[i].style.color = '#63687D'
      }
       for (let i = 0; i < data.length; i++) {
      data[i].style.backgroundColor = '#f0f2fa'
      dataCard[i].style.backgroundColor = '#f0f2fa'
      cardHd[i].style.color = '#1D1F29'
    }

     for (let i = 0;  i < statCard.length; i++){
      statCard[i].style.backgroundColor = '#f0f2fa';
     
    }
       
   
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