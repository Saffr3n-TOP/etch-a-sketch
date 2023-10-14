const minGridWidth = 1;
const maxGridWidth = 100;
let gridWidth = 16;

const grid = document.querySelector('.grid');
const changeGridWidthBtn = document.querySelector('button');

changeGridWidthBtn.addEventListener('click', () => {
  const inputValue = +prompt('Choose the grid width (100 max):');

  if (
    isNaN(inputValue) ||
    inputValue < minGridWidth ||
    inputValue > maxGridWidth
  ) {
    return alert('The grid width can only be a number from 1 to 100');
  }

  gridWidth = inputValue;
  populateGrid();
});

function populateGrid() {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`;

  const cellSize = grid.offsetHeight / gridWidth;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridWidth; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('data-intensity', 0);
      cell.style.width = cellSize + 'px';
      cell.style.height = cellSize + 'px';

      cell.addEventListener('mouseover', () => {
        const intensity = +cell.getAttribute('data-intensity') + 1;

        if (intensity > 10) return;

        const minRgbChannelValue = Math.round(256 - (256 / 9) * intensity);
        const maxRgbChannelValue = Math.round(256 - (256 / 9) * (intensity - 1));

        const redAmount = getRandomRgbChannelValue(
          minRgbChannelValue,
          maxRgbChannelValue
        );
        const greenAmount = getRandomRgbChannelValue(
          minRgbChannelValue,
          maxRgbChannelValue
        );
        const blueAmount = getRandomRgbChannelValue(
          minRgbChannelValue,
          maxRgbChannelValue
        );

        cell.setAttribute('data-intensity', intensity);
        cell.style.background = `rgb(${redAmount}, ${greenAmount}, ${blueAmount}`;
      });

      if (j < gridWidth - 1) cell.style.borderRight = '1px solid black';
      if (i < gridWidth - 1) cell.style.borderBottom = '1px solid black';

      grid.appendChild(cell);
    }
  }
}

function getRandomRgbChannelValue(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

populateGrid();
