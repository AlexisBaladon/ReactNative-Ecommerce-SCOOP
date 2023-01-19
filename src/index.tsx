import { StyleSheet, Text, View } from 'react-native'
import { BACKGROUND_COLOR } from './constants/styles'
import SavedItems from './pages/savedItems';

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