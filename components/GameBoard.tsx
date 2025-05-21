import React, { useEffect } from 'react';
import { Dimensions, PanResponder, Platform, StyleSheet, Text, View } from 'react-native';
import type { Grid } from '../hooks/useGameLogic'; // Import the correct types

interface GameBoardProps {
  grid: Grid;
  move: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const TILE_MARGIN = 5; // 5px margin between tiles

export const GameBoard: React.FC<GameBoardProps> = ({ grid, move }) => {
  const { width } = Dimensions.get('window');
  const BOARD_SIZE = Math.min(width - 40, 320);
  const TOTAL_GAPS = TILE_MARGIN * 3; // 3 gaps between 4 tiles per row
  const tileSize = (BOARD_SIZE - TOTAL_GAPS) / 4; // Exact size for 4 tiles per row

  // Swipe handling for mobile
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: (e, gesture) => {
      const { dx, dy } = gesture;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      // Determine the dominant direction
      if (absDx > absDy && absDx > 50) {
        // Horizontal swipe
        if (dx > 0) move('right');
        else move('left');
      } else if (absDy > absDx && absDy > 50) {
        // Vertical swipe
        if (dy > 0) move('down');
        else move('up');
      }
    },
  });

  // Keyboard handling for web
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault(); // Prevent scrolling
          move('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          move('down');
          break;
        case 'ArrowLeft':
          e.preventDefault();
          move('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          move('right');
          break;
      }
    };

    if (Platform.OS === 'web') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [move]);

  // Log grid for debugging
  console.log('Grid structure:', grid.map(row => row.map(cell => cell ? cell.value : null)));
  console.log('Tile size:', tileSize, 'Board size:', BOARD_SIZE);

  return (
    <View
      style={[styles.board, { width: BOARD_SIZE, height: BOARD_SIZE, padding: TILE_MARGIN / 2 }]}
      {...(Platform.OS !== 'web' ? panResponder.panHandlers : {})}
    >
      {Array(4).fill(null).map((_, rowIndex) => (
        <View key={`row-${rowIndex}`} style={[styles.row, { height: tileSize }]}>
          {Array(4).fill(null).map((_, colIndex) => {
            const cell = grid[rowIndex]?.[colIndex]; // Defensive access
            return (
              <View
                key={`tile-${rowIndex}-${colIndex}`}
                style={[
                  styles.tile,
                  {
                    width: tileSize -5,
                    height: tileSize -5,
                    marginTop: TILE_MARGIN / 2, // Half margin for inner spacing
                    marginRight: TILE_MARGIN + 2, // Half margin for inner spacing
                  },
                ]}
              >
                <Text style={styles.tileText}>
                  {cell ? cell.value : ''}
                </Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: '#bbada0',
    borderRadius: 10,
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
  },
  tile: {
    backgroundColor: '#cdc1b4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 20,
    color: '#776e65',
    fontWeight: 'bold',
    includeFontPadding: false, // Remove extra padding from font
  },
});