import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

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
        <Card mode='elevated'>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});