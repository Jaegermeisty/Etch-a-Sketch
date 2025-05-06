const mainContainer = document.querySelector('.main-container')
const button = document.querySelector('.btn');


for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  mainContainer.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
  square.classList.add('green');
})
});

button.addEventListener('click', () => {
  newDimension = prompt('Select your new dimesions (max 100).')
  if (newDimension < 0 || newDimension > 100 || isNaN(newDimension)) {
    alert('Select a number between 0-99.');
    return;
  }
  mainContainer.innerHTML = '';
});