import { DOWN_DIRECTION, RIGHT_DIRECTION, UP_DIRECTION } from '@/constants';
import { Directions, Grid, Tile } from '@/types';
import { useState } from 'react';

export const useGameLogic = () => {
  const [grid, setGrid] = useState<Grid>(initializeGrid());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  function initializeGrid(): Grid {
    const grid: Grid = Array(4)
      .fill(null)
      .map(() => Array(4).fill(null));
    addRandomTile(grid);
    addRandomTile(grid);
    return grid;
  }

  function addRandomTile(grid: Grid) {
    const empty: [number, number][] = [];
    grid.forEach((row, i) => {
      if (row && Array.isArray(row) && row.length === 4) {
        row.forEach((cell, j) => {
          if (!cell) empty.push([i, j]);
        });
      }
    });

    if (empty.length) {
      const [i, j] = empty[Math.floor(Math.random() * empty.length)];
      grid[i][j] = { value: Math.random() < 0.9 ? 2 : 4, id: Date.now(), prevPosition: [i, j] };
    }
  }

  function rotateGrid(grid: Grid, times: number): Grid {
    let newGrid = grid.map(row => [...row]); 
    for (let t = 0; t < times; t++) {
      const rotated: Grid = Array(4)
        .fill(null)
        .map(() => Array(4).fill(null));
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const newI = j;
          const newJ = 3 - i;
          rotated[newI][newJ] = newGrid[i][j] ? { ...newGrid[i][j]!, prevPosition: [i, j] } : null;
        }
      }
      newGrid = rotated;
    }
    return newGrid;
  }

  function canMove(grid: Grid): boolean {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (!grid[i][j]) return true;
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = grid[i][j]?.value;
        if (j < 3) {
          const right = grid[i][j + 1]?.value;
          if (current && right && current === right) return true;
        }
        if (i < 3) {
          const below = grid[i + 1][j]?.value;
          if (current && below && current === below) return true;
        }
      }
    }
    return false;
  }

  // Move logic: slide, merge tiles, and update game state
  const move = (direction: Directions) => {
    if (gameOver || won) return;

    let newGrid = grid.map(row => [...row]);
    let moved = false;
    let newScore = score;

    // Store previous positions
    newGrid = newGrid.map((row, i) =>
      row.map((cell, j) => (cell ? { ...cell, prevPosition: [i, j], merged: false } : null))
    );

    if (direction === UP_DIRECTION) newGrid = rotateGrid(newGrid, 3);
    if (direction === DOWN_DIRECTION) newGrid = rotateGrid(newGrid, 1);
    if (direction === RIGHT_DIRECTION) newGrid = rotateGrid(newGrid, 2);

    newGrid = newGrid.map((row) => {
      const tiles = row.filter(cell => cell).map(cell => ({ ...cell! }));
      const newRow: (Tile | null)[] = Array(4).fill(null);
      let pos = 0;

      for (let i = 0; i < tiles.length; i++) {
        if (i < tiles.length - 1 && tiles[i].value === tiles[i + 1].value) {
          const mergedValue = tiles[i].value * 2;
          newRow[pos] = {
            value: mergedValue,
            id: Date.now(),
            prevPosition: tiles[i].prevPosition,
            merged: true,
          };
          newScore += mergedValue;
          i++;
          moved = true;
        } else {
          newRow[pos] = { ...tiles[i], prevPosition: tiles[i].prevPosition, merged: false };
          if (row[pos]?.id !== tiles[i].id) moved = true;
        }
        pos++;
      }
      return newRow;
    });

    if (direction === UP_DIRECTION) newGrid = rotateGrid(newGrid, 1);
    if (direction === DOWN_DIRECTION) newGrid = rotateGrid(newGrid, 3);
    if (direction === RIGHT_DIRECTION) newGrid = rotateGrid(newGrid, 2);

    if (moved) {
      addRandomTile(newGrid);
      setGrid(newGrid);
      setScore(newScore);

      if (!won && newGrid.some(row => row.some(cell => cell?.value === 2048))) {
        setWon(true);
      }

      if (!canMove(newGrid)) {
        setGameOver(true);
      }
    }
  };

  const reset = () => {
    setGrid(initializeGrid());
    setScore(0);
    setGameOver(false);
    setWon(false);
  };

  return { grid, score, gameOver, won, move, reset };
};