import { useState } from 'react';

// Types for game state
export type Tile = { value: number; id: number; prevPosition?: [number, number] };
export type Grid = (Tile | null)[][];
export interface Stats {
  highScore: number;
  gamesPlayed: number;
  wins: number;
}

export const useGameLogic = () => {
  const [grid, setGrid] = useState<Grid>(initializeGrid());

  // Initialize 4x4 grid with two random tiles
  function initializeGrid(): Grid {
    const grid: Grid = Array(4)
      .fill(null)
      .map(() => Array(4).fill(null));
    addRandomTile(grid);
    addRandomTile(grid);
    console.log('Initialized grid:', grid.map(row => row.map(cell => cell ? cell.value : null)));
    return grid;
  }

  // Add a random tile (2 or 4) to an empty spot
  function addRandomTile(grid: Grid) {
    const empty: [number, number][] = [];
    grid.forEach((row, i) => {
      if (row && Array.isArray(row) && row.length === 4) {
        row.forEach((cell, j) => {
          if (!cell) empty.push([i, j]);
        });
      }
    });
    console.log('Empty cells:', empty);
    if (empty.length) {
      const [i, j] = empty[Math.floor(Math.random() * empty.length)];
      grid[i][j] = { value: Math.random() < 0.9 ? 2 : 4, id: Date.now() };
    }
  }

  // Rotate grid 90 degrees clockwise 'times' number of times
  function rotateGrid(grid: Grid, times: number): Grid {
    let newGrid = grid.map(row => [...row]); // Deep copy
    for (let t = 0; t < times; t++) {
      const rotated: Grid = Array(4)
        .fill(null)
        .map(() => Array(4).fill(null));
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          rotated[j][3 - i] = newGrid[i][j] ? { ...newGrid[i][j]! } : null;
        }
      }
      newGrid = rotated;
    }
    return newGrid;
  }

  // Move logic: slide and merge tiles
  const move = (direction: 'up' | 'down' | 'left' | 'right') => {
    let newGrid = grid.map(row => [...row]); // Deep copy
    let moved = false;

    // Rotate grid to treat all moves as "move left"
    if (direction === 'up') newGrid = rotateGrid(newGrid, 3); // 270° clockwise
    if (direction === 'down') newGrid = rotateGrid(newGrid, 1); // 90° clockwise
    if (direction === 'right') newGrid = rotateGrid(newGrid, 2); // 180° clockwise

    // Slide and merge left (base case)
    newGrid = newGrid.map(row => {
      // Filter out null cells and keep only tiles
      const tiles = row.filter(cell => cell).map(cell => ({ ...cell! }));
      const newRow: (Tile | null)[] = Array(4).fill(null);
      let pos = 0;

      // Merge identical tiles
      for (let i = 0; i < tiles.length; i++) {
        if (i < tiles.length - 1 && tiles[i].value === tiles[i + 1].value) {
          newRow[pos] = { value: tiles[i].value * 2, id: Date.now() };
          i++; // Skip the next tile since it was merged
          moved = true;
        } else {
          newRow[pos] = tiles[i];
          // Check if the tile moved to a new position
          if (row[pos]?.id !== tiles[i].id) moved = true;
        }
        pos++;
      }
      return newRow;
    });

    // Rotate back to original orientation
    if (direction === 'up') newGrid = rotateGrid(newGrid, 1); // 90° clockwise
    if (direction === 'down') newGrid = rotateGrid(newGrid, 3); // 270° clockwise
    if (direction === 'right') newGrid = rotateGrid(newGrid, 2); // 180° clockwise

    // Update grid if a move occurred
    if (moved) {
      addRandomTile(newGrid);
      setGrid(newGrid);
      console.log('Updated grid after move:', newGrid.map(row => row.map(cell => cell ? cell.value : null)));
    }
  };

  return { grid, move };
};