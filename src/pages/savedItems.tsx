import React from 'react'
import Header from '../components/global/header'
import Items from '../components/items/items'
import Search from '../components/global/search'
import { View, StyleSheet, Dimensions } from 'react-native'
import { BACKGROUND_COLOR } from '../constants/styles'
import Buttons from '../components/options/buttons'

const SavedItems = () => {
  return (<View style={styles.app}>
    <View style={styles.header}>
      <Header title={'Deseados'}/>
    </View>
    <View style={styles.search}>
      <Search placeHolder={'Buscar...'} />
    </View>
    <View style={styles.options}>
      <Buttons buttons={['Agregar', 'Borrar todo']} />
    </View>
    <View style={styles.items}>
      <Items items={['Item1', 'Item2', 'Item3', 'Item4', 'ITEM5']} />
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