import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [items, setItems] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Añadir item" defaultValue='' />
          <TouchableOpacity style={styles.addButton} onPress={() => setItems(items+1)}>
            <Text>+</Text>
          </TouchableOpacity>
      </View>
      {
        Array.from(Array(items).keys()).map((_, i) => {
         return <Text key={i+1}>Item {i+1}</Text>
      })
      }
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0CAAD',
    alignItems: 'center',
  },
  input: {
    width: '100%',
  },
  inputContainer: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',    
    height: 40, //???????
    width: 150,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    backgroundColor: '#B26E63',
  }
});
