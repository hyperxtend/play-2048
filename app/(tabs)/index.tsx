import { GameBoard } from '@/components/GameBoard';
import { useGameLogic } from '@/hooks/useGameLogic';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const { grid, move } = useGameLogic();

  return (
    <View style={styles.container}>
      <GameBoard grid={grid} move={move} />
      {/* <View style={styles.buttonContainer}>

        <Button title="Up" onPress={() => move('up')} />
        <Button title="Down" onPress={() => move('down')} />
        <Button title="Left" onPress={() => move('left')} />
        <Button title="Right" onPress={() => move('right')} />

      </View> */}
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
});