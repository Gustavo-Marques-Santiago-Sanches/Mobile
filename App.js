import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View} from 'react-native';

//Importa a imagem
import miniP from './assets/miniP.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World!</Text>
      <Text>Este é meu primeiro app!</Text>
      <Image style={styles.imagem} source={miniP}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'blue',
  },
  imagem: {
    width: '70%',
    height: '40%',
  },
});
