import { StyleSheet, View } from 'react-native'
import { ItemContextComponents } from './context';
import SavedItems from './views/savedItems';

export default function App() {
  const { ItemContextProvider } = ItemContextComponents;

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