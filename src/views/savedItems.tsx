import React, { useState } from 'react'
import Items from '../components/items/items'
import Search from '../components/global/search/search'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { BACKGROUND_COLOR } from '../constants/styles'
import Buttons from '../components/options/buttons'
import DtItem from '../interfaces/item'
import CreatorModal from '../components/options/creatorModal'

const SavedItems = () => {
  const [items, setItems] = useState<Array<DtItem>>([]) //TODO: Hacer context
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addItem = (item: DtItem) => {
    setItems([...items, item]);
  }

  type TButton = {title: string, onPress(): void};
  const buttons: Array<TButton> = [
    {title: 'Agregar', onPress: () => setModalVisible(true)},
    {title: 'Borrar todo', onPress: () => setItems([])},
  ]

  return (<View style={styles.app}>
    <CreatorModal modalVisible={modalVisible} setModalVisible={setModalVisible} addItem={ addItem } />
    <View style={styles.header}>
        <Text style={styles.title}>Lista de productos</Text>
    </View>
    <View style={styles.search}>
      <Search placeHolder={'Buscar...'} />
    </View>
    <View style={styles.options}>
      <Buttons buttons={buttons} />
    </View>
    <View style={styles.items}>
      <Items items={items} setItems={setItems} />
    </View>
  </View>
  )
}

const { width, height } = Dimensions.get('window');
const headerHeight = height/9;
const searchHeight = height/12;
const optionsHeight = height/22;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: width, height: height,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    height: headerHeight,
    paddingTop: 30,
  },
  title: {
      fontSize: 28,
      textAlign: 'center',
      fontWeight: 'bold',
  },
  search: {
    height: searchHeight,
  },
  options: {
    height: optionsHeight,
  },
  items: {
    height: height - headerHeight - searchHeight - optionsHeight,
  }
})


export default SavedItems;