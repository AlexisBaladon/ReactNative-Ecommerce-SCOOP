import React, { useEffect, useState } from 'react'
import Header from '../components/global/header/header'
import Items from '../components/items/items'
import Search from '../components/global/search/search'
import { View, StyleSheet, Dimensions, GestureResponderEvent } from 'react-native'
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

  const handleDeleteAllItems = (event: GestureResponderEvent) => {
    event.preventDefault();
    setItems([]);
  }

  type TButton = {title: string, onPress(e: GestureResponderEvent): void};
  const buttons: Array<TButton> = [
    {title: 'Agregar', onPress: () => setModalVisible(true)},
    {title: 'Borrar todo', onPress: handleDeleteAllItems},
  ]

  return (<View style={styles.app}>
    <CreatorModal modalVisible={modalVisible} setModalVisible={setModalVisible} addItem={ addItem } />
    <View style={styles.header}>
      <Header title={'Lista de productos'}/>
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
const headerHeight = height/8;
const searchHeight = height/12;
const optionsHeight = height/25;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%', height: height,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    height: headerHeight,
    marginBottom: 15,
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