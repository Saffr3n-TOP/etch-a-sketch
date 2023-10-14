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

  cellSize = grid.offsetHeight / gridWidth;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridWidth; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.width = cellSize + 'px';
      cell.style.height = cellSize + 'px';

      cell.addEventListener(
        'mouseover',
        () => (cell.style.background = 'black'),
        { once: true }
      );

      if (j < gridWidth - 1) cell.style.borderRight = '1px solid black';
      if (i < gridWidth - 1) cell.style.borderBottom = '1px solid black';

      grid.appendChild(cell);
    }
  }

  grid.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`;
}

populateGrid();
