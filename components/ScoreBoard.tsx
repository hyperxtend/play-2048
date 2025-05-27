import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ScoreboardProps {
  score: number;
  gameOver: boolean;
  won: boolean;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ score, gameOver, won }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>Score</Text>
        <Text style={styles.scoreValue}>{score}</Text>
      </View>
      {(gameOver || won) && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            {gameOver ? 'Game Over!' : 'You Win!'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#bbada0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    position: 'relative',
  },
  scoreContainer: {
    backgroundColor: '#cdc1b4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 100,
  },
  scoreLabel: {
    fontSize: 16,
    color: '#776e65',
    fontWeight: 'bold',
  },
  scoreValue: {
    fontSize: 24,
    color: '#776e65',
    fontWeight: 'bold',
  },
  messageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(238, 228, 218, 0.73)',
    borderRadius: 10,
  },
  messageText: {
    fontSize: 24,
    color: '#776e65',
    fontWeight: 'bold',
  },
});