import { StyleSheet, Text, View } from 'react-native'
import { ItemContextProvider } from './context/itemContext';
import SavedItems from './views/savedItems';

export default function App() {
  return (
    <ItemContextProvider>
      <View style={styles.app}>
        <SavedItems />
      </View>
    </ItemContextProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})