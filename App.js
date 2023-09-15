import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Japao from './components/japao';
import China from './components/china';
import Botao from './components/botao';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Gabriel Meiki Maeda  Taira
      </Text>
      <Card style={styles.box}>
        <Japao />
      </Card>
      <Card style={styles.box}>
        <China />
      </Card>
      <Botao />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20,
  },

  box: {
    marginTop: 30,
    borderRadius: 30,
  }
});
