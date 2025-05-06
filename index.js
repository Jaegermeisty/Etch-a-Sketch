const mainContainer = document.querySelector('.main-container')


  for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  mainContainer.appendChild(square);
  }