import { DOWN_DIRECTION, LEFT_DIRECTION, RIGHT_DIRECTION, TILE_COLOURS, TILE_MARGIN, UP_DIRECTION } from '@/constants';
import type { Directions, Grid } from '@/types';
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';

interface GameBoardProps {
  grid: Grid;
  move: (direction: Directions) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ grid, move }) => {
  const { width } = Dimensions.get('window');
  const BOARD_SIZE = Math.min(width - 40, 320);
  const TOTAL_GAPS = TILE_MARGIN * 3;
  const tileSize = (BOARD_SIZE - TOTAL_GAPS) / 4;

  const [lastMove, setLastMove] = useState<Directions | null>(null);

  const translateX0 = useSharedValue(0);
  const translateY0 = useSharedValue(0);
  const tileId0 = useSharedValue<number | null>(null);
  const scale0 = useSharedValue(1);

  const translateX1 = useSharedValue(0);
  const translateY1 = useSharedValue(0);
  const tileId1 = useSharedValue<number | null>(null);
  const scale1 = useSharedValue(1);

  const translateX2 = useSharedValue(0);
  const translateY2 = useSharedValue(0);
  const tileId2 = useSharedValue<number | null>(null);
  const scale2 = useSharedValue(1);

  const translateX3 = useSharedValue(0);
  const translateY3 = useSharedValue(0);
  const tileId3 = useSharedValue<number | null>(null);
  const scale3 = useSharedValue(1);

  const translateX4 = useSharedValue(0);
  const translateY4 = useSharedValue(0);
  const tileId4 = useSharedValue<number | null>(null);
  const scale4 = useSharedValue(1);

  const translateX5 = useSharedValue(0);
  const translateY5 = useSharedValue(0);
  const tileId5 = useSharedValue<number | null>(null);
  const scale5 = useSharedValue(1);

  const translateX6 = useSharedValue(0);
  const translateY6 = useSharedValue(0);
  const tileId6 = useSharedValue<number | null>(null);
  const scale6 = useSharedValue(1);

  const translateX7 = useSharedValue(0);
  const translateY7 = useSharedValue(0);
  const tileId7 = useSharedValue<number | null>(null);
  const scale7 = useSharedValue(1);

  const translateX8 = useSharedValue(0);
  const translateY8 = useSharedValue(0);
  const tileId8 = useSharedValue<number | null>(null);
  const scale8 = useSharedValue(1);

  const translateX9 = useSharedValue(0);
  const translateY9 = useSharedValue(0);
  const tileId9 = useSharedValue<number | null>(null);
  const scale9 = useSharedValue(1);

  const translateX10 = useSharedValue(0);
  const translateY10 = useSharedValue(0);
  const tileId10 = useSharedValue<number | null>(null);
  const scale10 = useSharedValue(1);

  const translateX11 = useSharedValue(0);
  const translateY11 = useSharedValue(0);
  const tileId11 = useSharedValue<number | null>(null);
  const scale11 = useSharedValue(1);

  const translateX12 = useSharedValue(0);
  const translateY12 = useSharedValue(0);
  const tileId12 = useSharedValue<number | null>(null);
  const scale12 = useSharedValue(1);

  const translateX13 = useSharedValue(0);
  const translateY13 = useSharedValue(0);
  const tileId13 = useSharedValue<number | null>(null);
  const scale13 = useSharedValue(1);

  const translateX14 = useSharedValue(0);
  const translateY14 = useSharedValue(0);
  const tileId14 = useSharedValue<number | null>(null);
  const scale14 = useSharedValue(1);

  const translateX15 = useSharedValue(0);
  const translateY15 = useSharedValue(0);
  const tileId15 = useSharedValue<number | null>(null);
  const scale15 = useSharedValue(1);

  const animationStates = React.useMemo(() => [
    { translateX: translateX0, translateY: translateY0, tileId: tileId0, scale: scale0 },
    { translateX: translateX1, translateY: translateY1, tileId: tileId1, scale: scale1 },
    { translateX: translateX2, translateY: translateY2, tileId: tileId2, scale: scale2 },
    { translateX: translateX3, translateY: translateY3, tileId: tileId3, scale: scale3 },
    { translateX: translateX4, translateY: translateY4, tileId: tileId4, scale: scale4 },
    { translateX: translateX5, translateY: translateY5, tileId: tileId5, scale: scale5 },
    { translateX: translateX6, translateY: translateY6, tileId: tileId6, scale: scale6 },
    { translateX: translateX7, translateY: translateY7, tileId: tileId7, scale: scale7 },
    { translateX: translateX8, translateY: translateY8, tileId: tileId8, scale: scale8 },
    { translateX: translateX9, translateY: translateY9, tileId: tileId9, scale: scale9 },
    { translateX: translateX10, translateY: translateY10, tileId: tileId10, scale: scale10 },
    { translateX: translateX11, translateY: translateY11, tileId: tileId11, scale: scale11 },
    { translateX: translateX12, translateY: translateY12, tileId: tileId12, scale: scale12 },
    { translateX: translateX13, translateY: translateY13, tileId: tileId13, scale: scale13 },
    { translateX: translateX14, translateY: translateY14, tileId: tileId14, scale: scale14 },
    { translateX: translateX15, translateY: translateY15, tileId: tileId15, scale: scale15 },
  ], [
    translateX0, translateY0, tileId0, scale0,
    translateX1, translateY1, tileId1, scale1,
    translateX2, translateY2, tileId2, scale2,
    translateX3, translateY3, tileId3, scale3,
    translateX4, translateY4, tileId4, scale4,
    translateX5, translateY5, tileId5, scale5,
    translateX6, translateY6, tileId6, scale6,
    translateX7, translateY7, tileId7, scale7,
    translateX8, translateY8, tileId8, scale8,
    translateX9, translateY9, tileId9, scale9,
    translateX10, translateY10, tileId10, scale10,
    translateX11, translateY11, tileId11, scale11,
    translateX12, translateY12, tileId12, scale12,
    translateX13, translateY13, tileId13, scale13,
    translateX14, translateY14, tileId14, scale14,
    translateX15, translateY15, tileId15, scale15,
  ]);

  const animatedStyle0 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX0.value },
      { translateY: translateY0.value },
      { scale: scale0.value },
    ],
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: tileId0.value !== null ? 1 : 0,
  }));
  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX1.value },
      { translateY: translateY1.value },
      { scale: scale1.value },
    ],
    position: 'absolute',
    left: 1 * (tileSize + TILE_MARGIN),
    top: 0,
    opacity: tileId1.value !== null ? 1 : 0,
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX2.value },
      { translateY: translateY2.value },
      { scale: scale2.value },
    ],
    position: 'absolute',
    left: 2 * (tileSize + TILE_MARGIN),
    top: 0,
    opacity: tileId2.value !== null ? 1 : 0,
  }));
  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX3.value },
      { translateY: translateY3.value },
      { scale: scale3.value },
    ],
    position: 'absolute',
    left: 3 * (tileSize + TILE_MARGIN),
    top: 0,
    opacity: tileId3.value !== null ? 1 : 0,
  }));
  const animatedStyle4 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX4.value },
      { translateY: translateY4.value },
      { scale: scale4.value },
    ],
    position: 'absolute',
    left: 0,
    top: 1 * (tileSize + TILE_MARGIN),
    opacity: tileId4.value !== null ? 1 : 0,
  }));
  const animatedStyle5 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX5.value },
      { translateY: translateY5.value },
      { scale: scale5.value },
    ],
    position: 'absolute',
    left: 1 * (tileSize + TILE_MARGIN),
    top: 1 * (tileSize + TILE_MARGIN),
    opacity: tileId5.value !== null ? 1 : 0,
  }));
  const animatedStyle6 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX6.value },
      { translateY: translateY6.value },
      { scale: scale6.value },
    ],
    position: 'absolute',
    left: 2 * (tileSize + TILE_MARGIN),
    top: 1 * (tileSize + TILE_MARGIN),
    opacity: tileId6.value !== null ? 1 : 0,
  }));
  const animatedStyle7 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX7.value },
      { translateY: translateY7.value },
      { scale: scale7.value },
    ],
    position: 'absolute',
    left: 3 * (tileSize + TILE_MARGIN),
    top: 1 * (tileSize + TILE_MARGIN),
    opacity: tileId7.value !== null ? 1 : 0,
  }));
  const animatedStyle8 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX8.value },
      { translateY: translateY8.value },
      { scale: scale8.value },
    ],
    position: 'absolute',
    left: 0,
    top: 2 * (tileSize + TILE_MARGIN),
    opacity: tileId8.value !== null ? 1 : 0,
  }));
  const animatedStyle9 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX9.value },
      { translateY: translateY9.value },
      { scale: scale9.value },
    ],
    position: 'absolute',
    left: 1 * (tileSize + TILE_MARGIN),
    top: 2 * (tileSize + TILE_MARGIN),
    opacity: tileId9.value !== null ? 1 : 0,
  }));
  const animatedStyle10 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX10.value },
      { translateY: translateY10.value },
      { scale: scale10.value },
    ],
    position: 'absolute',
    left: 2 * (tileSize + TILE_MARGIN),
    top: 2 * (tileSize + TILE_MARGIN),
    opacity: tileId10.value !== null ? 1 : 0,
  }));
  const animatedStyle11 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX11.value },
      { translateY: translateY11.value },
      { scale: scale11.value },
    ],
    position: 'absolute',
    left: 3 * (tileSize + TILE_MARGIN),
    top: 2 * (tileSize + TILE_MARGIN),
    opacity: tileId11.value !== null ? 1 : 0,
  }));
  const animatedStyle12 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX12.value },
      { translateY: translateY12.value },
      { scale: scale12.value },
    ],
    position: 'absolute',
    left: 0,
    top: 3 * (tileSize + TILE_MARGIN),
    opacity: tileId12.value !== null ? 1 : 0,
  }));
  const animatedStyle13 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX13.value },
      { translateY: translateY13.value },
      { scale: scale13.value },
    ],
    position: 'absolute',
    left: 1 * (tileSize + TILE_MARGIN),
    top: 3 * (tileSize + TILE_MARGIN),
    opacity: tileId13.value !== null ? 1 : 0,
  }));
  const animatedStyle14 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX14.value },
      { translateY: translateY14.value },
      { scale: scale14.value },
    ],
    position: 'absolute',
    left: 2 * (tileSize + TILE_MARGIN),
    top: 3 * (tileSize + TILE_MARGIN),
    opacity: tileId14.value !== null ? 1 : 0,
  }));
  const animatedStyle15 = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX15.value },
      { translateY: translateY15.value },
      { scale: scale15.value },
    ],
    position: 'absolute',
    left: 3 * (tileSize + TILE_MARGIN),
    top: 3 * (tileSize + TILE_MARGIN),
    opacity: tileId15.value !== null ? 1 : 0,
  }));

  const animatedStyles = [
    animatedStyle0, animatedStyle1, animatedStyle2, animatedStyle3,
    animatedStyle4, animatedStyle5, animatedStyle6, animatedStyle7,
    animatedStyle8, animatedStyle9, animatedStyle10, animatedStyle11,
    animatedStyle12, animatedStyle13, animatedStyle14, animatedStyle15,
  ];

  useEffect(() => {
    animationStates.forEach(state => {
      state.tileId.value = null;
      state.translateX.value = 0;
      state.translateY.value = 0;
      state.scale.value = 1;
    });

    const tileStates: Map<number, { translateX: Animated.SharedValue<number>; translateY: Animated.SharedValue<number>; scale: Animated.SharedValue<number> }> = new Map();
    animationStates.forEach((state, index) => {
      tileStates.set(index, state);
    });

    // Update based on current grid
    grid.forEach((row, rowIndex) => {
      if (!row || !Array.isArray(row)) return;
      row.forEach((cell, colIndex) => {
        const index = rowIndex * 4 + colIndex;
        const state = animationStates[index];

        if (!cell) return;

        const baseX = colIndex * (tileSize + TILE_MARGIN);
        const baseY = rowIndex * (tileSize + TILE_MARGIN);
        const prevRow = cell.prevPosition ? cell.prevPosition[0] : rowIndex;
        const prevCol = cell.prevPosition ? cell.prevPosition[1] : colIndex;
        const slidePath = cell.slidePath || [[prevRow, prevCol]];

        state.tileId.value = cell.id;

        const lastStep = slidePath[slidePath.length - 1];
        const startX = lastStep[1] * (tileSize + TILE_MARGIN);
        const startY = lastStep[0] * (tileSize + TILE_MARGIN);
        let deltaX = startX - baseX;
        let deltaY = startY - baseY;

        if (lastMove === LEFT_DIRECTION) {
          deltaX = startX - baseX;
          deltaY = 0;
        } else if (lastMove === RIGHT_DIRECTION) {
          deltaX = startX - baseX;
          deltaY = 0;
        } else if (lastMove === UP_DIRECTION) {
          deltaX = 0;
          deltaY = startY - baseY;
        } else if (lastMove === DOWN_DIRECTION) {
          deltaX = 0;
          deltaY = startY - baseY;
        }

        state.translateX.value = deltaX;
        state.translateY.value = deltaY;

        state.translateX.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) });
        state.translateY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) });

        if (cell.merged && cell.collisionId) {
          const collisionState = animationStates.find(s => s.tileId.value === cell.collisionId);
          if (collisionState) {
            collisionState.translateX.value = withTiming(0, { duration: 800, easing: Easing.out(Easing.cubic) });
            collisionState.translateY.value = withTiming(0, { duration: 800, easing: Easing.out(Easing.cubic) });

            state.scale.value = withSequence(
              withDelay(500, withTiming(1.2, { duration: 100 })),
              withTiming(0.9, { duration: 100 }),
              withTiming(1, { duration: 100 })
            );
            collisionState.scale.value = withSequence(
              withDelay(500, withTiming(0, { duration: 100 })),
              withTiming(0, { duration: 0 })
            );
          }
        }
      });
    });
  }, [grid, animationStates, tileSize, lastMove]);

  // Touch event handling for mobile web
  useEffect(() => {
    if (Platform.OS === 'web') {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      const handleTouchStart = (e: Event) => {
        const touchEvent = e as TouchEvent;
        touchStartX = touchEvent.touches[0].clientX;
        touchStartY = touchEvent.touches[0].clientY;
      };

      const handleTouchMove = (e: Event) => {
        const touchEvent = e as TouchEvent;
        touchEndX = touchEvent.touches[0].clientX;
        touchEndY = touchEvent.touches[0].clientY;
      };

      const handleTouchEnd = () => {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        if (absDeltaX > absDeltaY && absDeltaX > 50) {
          if (deltaX > 0) {
            setLastMove(RIGHT_DIRECTION);
            move(RIGHT_DIRECTION);
          } else {
            setLastMove(LEFT_DIRECTION);
            move(LEFT_DIRECTION);
          }
        } else if (absDeltaY > absDeltaX && absDeltaY > 50) {
          if (deltaY > 0) {
            setLastMove(DOWN_DIRECTION);
            move(DOWN_DIRECTION);
          } else {
            setLastMove(UP_DIRECTION);
            move(UP_DIRECTION);
          }
        }

        // Reset touch coordinates
        touchStartX = 0;
        touchStartY = 0;
        touchEndX = 0;
        touchEndY = 0;
      };

      const boardElement = document.querySelector('.board');
      if (boardElement) {
        boardElement.addEventListener('touchstart', handleTouchStart, { passive: true });
        boardElement.addEventListener('touchmove', handleTouchMove, { passive: true });
        boardElement.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
          boardElement.removeEventListener('touchstart', handleTouchStart);
          boardElement.removeEventListener('touchmove', handleTouchMove);
          boardElement.removeEventListener('touchend', handleTouchEnd);
        };
      }
    }
  }, [move]);

  // Keyboard handling for web
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setLastMove(UP_DIRECTION);
          move(UP_DIRECTION);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setLastMove(DOWN_DIRECTION);
          move(DOWN_DIRECTION);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setLastMove(LEFT_DIRECTION);
          move(LEFT_DIRECTION);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setLastMove(RIGHT_DIRECTION);
          move(RIGHT_DIRECTION);
          break;
      }
    };

    if (Platform.OS === 'web') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [move]);

  return (
    <View
      style={[styles.board, { width: BOARD_SIZE + 6, height: BOARD_SIZE + 8, padding: TILE_MARGIN / 2, overflow: 'hidden' }]}
      className="board" // Added className for touch event targeting
    >
      {Array(4)
        .fill(null)
        .map((_, rowIndex) =>
          Array(4)
            .fill(null)
            .map((_, colIndex) => (
              <View
                key={`empty-${rowIndex}-${colIndex}`}
                style={[
                  styles.emptyTile,
                  {
                    width: tileSize,
                    height: tileSize,
                    margin: TILE_MARGIN / 2,
                    left: colIndex * (tileSize + TILE_MARGIN),
                    top: rowIndex * (tileSize + TILE_MARGIN),
                    borderRadius: 5,
                  },
                ]}
              />
            ))
        )}
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (!cell) return null;
          const index = rowIndex * 4 + colIndex;
          return (
            <Animated.View
              key={`${cell.id}-${index}`}
              style={[
                animatedStyles[index],
                {
                  width: tileSize,
                  height: tileSize,
                  backgroundColor: TILE_COLOURS[cell.value],
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop: 2,
                  marginLeft: 2
                },
              ]}
            >
              <Text style={styles.tileText}>{cell.value}</Text>
            </Animated.View>
          );
        })
      )}
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
  emptyTile: {
    backgroundColor: '#cdc1b4',
    borderRadius: 5,
    position: 'absolute',
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 20,
    color: '#776e65',
    fontWeight: 'bold',
    includeFontPadding: false,
  },
});