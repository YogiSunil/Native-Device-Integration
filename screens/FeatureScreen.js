import * as React from 'react';
import { View, Text, Pressable, StyleSheet,Image, Alert,ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function FeatureScreen({ route }) {
  const station = route?.params?.station ?? 'Pick a station in Explore';
  const [imageUri, setImage] = React.useState([]);

const pickImage = async () => {
  const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
  if (!perm.granted) {
    Alert.alert('Permission required', 'Please allow photo access to pick an image.');
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 0.8,
  });

  if (result.canceled) {
    return;
  }

  // ADD new image to array instead of replacing
  setImages([...images, result.assets[0].uri]);
};
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>My Feature</Text>
    <Text style={styles.station}>{station}</Text>

    <Pressable style={styles.button} onPress={pickImage}>
      <Text style={styles.buttonText}>Add Image</Text>
    </Pressable>

    {images.length === 0 ? (
      <Text style={styles.hint}>No images selected yet.</Text>
    ) : (
      <View>
        <Text style={styles.h}>{images.length} Image(s) Selected</Text>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
            <Pressable 
              style={styles.deleteButton} 
              onPress={() => setImages(images.filter((_, i) => i !== index))}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        ))}
      </View>
    )}
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  station: { fontSize: 20, fontWeight: '800', marginBottom: 12 },
  h: { marginTop: 10, marginBottom: 6, fontSize: 18, fontWeight: '700' },
  p: { fontSize: 16, marginBottom: 10, lineHeight: 22 },
  hint: { marginTop: 12, color: '#555', lineHeight: 20 },
  button: {
    marginTop: 10,
    backgroundColor: '#f4511e',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  imageContainer: { 
  marginTop: 12, 
  position: 'relative' 
},
deleteButton: {
  marginTop: 6,
  backgroundColor: '#d32f2f',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 6,
  alignSelf: 'flex-start',
},
deleteText: { 
  color: 'white', 
  fontWeight: '700', 
  fontSize: 14 
},
});