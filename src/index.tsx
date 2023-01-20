import { StyleSheet, Text, View } from 'react-native'
import SavedItems from './views/savedItems';

export default function App() {
  return (
    <View style={styles.app}>
      <SavedItems />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})