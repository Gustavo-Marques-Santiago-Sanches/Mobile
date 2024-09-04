import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

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
        <Text style={styles.mensagem}>We need your permission to show the camera</Text>
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
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={facing} ref={cameraRef}>
          <View style={styles.botaoContainer}>
            <TouchableOpacity style={styles.botao} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Girar Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={takePicture}>
              <Text style={styles.text}>Tirar Foto</Text>
            </TouchableOpacity>
          </View>
        </Camera>
        {photoUri && <Image source={{ uri: photoUri }} style={styles.foto} />}
      </View>
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
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  botaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    margin: 20,
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