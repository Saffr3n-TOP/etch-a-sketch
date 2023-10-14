const grid = document.querySelector('.grid');
const gridWidth = 16;
const gridHeight = 16;

function populateGrid() {
  const cellsAmount = gridWidth * gridHeight;

  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (j < gridWidth - 1) cell.style.borderRight = '1px solid black';
      if (i < gridHeight - 1) cell.style.borderBottom = '1px solid black';
      grid.appendChild(cell);
    }
  }

  grid.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`;
}

populateGrid();
