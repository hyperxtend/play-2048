import { GameBoard, Scoreboard } from '@/components';

import { useGameLogic } from '@/hooks';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const { grid, score, gameOver, won, move, reset } = useGameLogic();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Scoreboard score={score} gameOver={gameOver} won={won} />
      <GameBoard grid={grid} move={move} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.modalButton, styles.resetButton]}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Resetting the game will count as a loss. Are you sure you want to reset?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.resetButton]}
                  onPress={() => {
                    reset();
                    setShowModal(false);
                  }}
                >
                  <Text style={styles.buttonText}>Yes, Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.buttonText}>Back to game</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8ef',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  statsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  statsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#776e65',
  },
  statusText: {
    fontSize: 20,
    color: '#776e65',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#27ae60',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: 350,
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});