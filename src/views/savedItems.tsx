import React from 'react'
import Items from '../components/items/items'
import Search from '../components/global/search/search'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { BACKGROUND_COLOR } from '../constants/styles'
import CategoriesContainer from '../components/options/categoriesContainer'

const SavedItems = () => {
  return (<View style={styles.app}>
    <View style={styles.header}>
      <Text style={styles.title}>Lista de productos</Text>
    </View>
    <View style={styles.search}>
      <Search placeHolder={'Buscar...'} />
    </View>
    <View style={styles.options}>
      <CategoriesContainer />
    </View>
    <View style={styles.items}>
      <Items />
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