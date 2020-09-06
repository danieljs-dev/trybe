window.onload = function() {
  let bgColor = localStorage.getItem('backgroundcolor');
  let textColor = localStorage.getItem('textcolor');
  let textSize = localStorage.getItem('textsize');
  let letterSpace = localStorage.getItem('letterspace');
  let fontType = localStorage.getItem('fonttype');


  function backgroundColor() {
    let backgroundColor = document.querySelector('#picker').value;
    let bodyColor = document.querySelector('body');
    bodyColor.style.backgroundColor = backgroundColor;
  }
  
  let buttonBg = document.querySelector('#colorButton');
  buttonBg.addEventListener('click', backgroundColor);


  function fontColor() {
    let hexColor = document.querySelector('#hex').value;
    let colorFont = document.getElementsByTagName('p');
    colorFont.style.backgroundColor = hexColor;
  }
  
  let buttonFont = document.querySelector('#colorFont');
  buttonFont.addEventListener('click', fontColor);




}

