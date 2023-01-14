import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [first, setDsd] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Añadir item" defaultValue='' />
        <Button color='#B26E63' title="+" />
      </View>
      {
        Array.from(Array(5).keys()).map((_, i) => {
         return <Text key={i+1}>Item {i+1}</Text>
      })
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0CAAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',    
    borderRadius: 5,
    borderColor: 'black',
    height: 40, //???????
    width: 150,
  },
});
