import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

import Texto from '../../componentes/Texto'; //Componente de exibição de texto

export default function App() {
  const [facing, setFacing] = useState(CameraType.back);
  const [permission, setPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermission(status === 'granted');
  };

  if (permission === null) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.mensagem}>Para utilizar a câmera, é necessário sua permissão. Você permite?</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  function toggleCameraFacing() {
    setFacing(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
        <Camera style={styles.camera} type={facing} ref={cameraRef}>
          <View style={styles.botaoContainer}>
            <TouchableOpacity style={styles.botao} onPress={toggleCameraFacing}>
              <Ionicons name='reload' size={30} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={takePicture}>
            <Ionicons name='camera' size={30} color="#FFF"></Ionicons>
            </TouchableOpacity>
          </View>
        </Camera>
        <Card mode='elevated' style={styles.info}>
          <Card.Content>
            <Text>Nome Completo:</Text>
            <TextInput value='Seu nome completo'></TextInput>
            <Text>Email:</Text>
            <TextInput value='Seu e-mail de contato'></TextInput>
            <Text>Whatsapp:</Text>
            <TextInput keyboardType='numeric' value='(11) xxxxx-xxxx'></TextInput>
          </Card.Content>
        </Card>
        {photoUri && <Image source={{ uri: photoUri }} style={styles.foto} />}
        <Texto style={styles.sugestao}>Tem alguma sugestão para o nosso aplicativo? Nos diga, ficaremos agradecidos pelo opoio!</Texto>
        <TextInput style={styles.input_texto} placeholder='Digite sua sugestão'/>
        <TouchableOpacity style={styles.botao_submit} onPress={() => Alert.alert('Sua sugestão foi mandada com sucesso!')}>
          <Texto style={styles.texto_botao}>Mandar Sugestão</Texto>  
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mensagem: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    alignSelf: 'center',
    width: '90%',
    height: '55%',
  },
  botaoContainer: {
    // width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // marginEnd: 10,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  botao: {
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  foto: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  info: {
    marginTop: '2%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: '24%',
    marginLeft: '5%',
  },
  sugestao: {
    fontWeight: 'bold',
    width: '89%',
    marginTop: 10,
    marginBottom: 0,
    marginHorizontal: 20,
    textAlign: 'justify',
  },
  input_texto:{
    height: 40,
    width: '90%',
    color: "black",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  botao_submit:{
    marginHorizontal: 20,
    width: "90%",
    height: 35,
    backgroundColor: "gold",
    borderRadius: 5,
  },
  texto_botao:{
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 7.5,
  }
});