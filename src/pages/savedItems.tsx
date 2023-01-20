import React, { useState } from 'react'
import Header from '../components/global/header'
import Items from '../components/items/items'
import Search from '../components/global/search'
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

    const handleAddItem = (event: GestureResponderEvent) => {
      event.preventDefault();

      setModalVisible(true);

      addItem({
        id: Math.random().toString(),
        title: "aasdasddsa",
        description: "dasdsaasd",
        priceDollars: 3,
        imageURL: "./",
        amount: 0,
      })
    }

    const handleDeleteAllItems = (event: GestureResponderEvent) => {
      event.preventDefault();
      setItems([]);
    }

  type TButton = {title: string, onPress(e: GestureResponderEvent): void};
  const buttons: Array<TButton> = [
    {title: 'Agregar', onPress: handleAddItem},
    {title: 'Borrar todo', onPress: handleDeleteAllItems},
  ]

  return (<View style={styles.app}>
    <CreatorModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    <View style={styles.header}>
      <Header title={'Deseados'}/>
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
const headerHeight = height/8 + height%8;
const searchHeight = height/10 + height%10;
const optionsHeight = height/16 + height%16;

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