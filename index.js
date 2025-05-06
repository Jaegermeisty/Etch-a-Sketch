const mainContainer = document.querySelector('.main-container')
const button = document.querySelector('.btn');
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  })
});

function createGrid(dimension) {
  mainContainer.innerHTML = '';

  let squareSize = 640 / dimension;

  for (let i = 0; i < dimension * dimension; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;


    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    })

    mainContainer.appendChild(square);
  }
}

createGrid(16);

button.addEventListener('click', () => {
  newDimension = prompt('Select your new dimesions (max 100).')
  if (newDimension < 0 || newDimension > 100 || isNaN(newDimension)) {
    alert('Select a number between 0-99.');
    return;
  }
  createGrid(newDimension);
});