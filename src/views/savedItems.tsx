import React from 'react'
import Items from '../components/items/items'
import Search from '../components/global/search/search'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { BACKGROUND_COLOR } from '../constants/styles'
import CategoriesContainer from '../components/options/categoriesContainer'
import { 
  CURRENCY_SYMBOL,
  SEARCH_PLACEHOLDER,
  NO_ITEMS_MESSAGE,
  ADD_BUTTON_MESSAGE,
  DELETE_ALL_BUTTON_MESSAGE,
  HEADER_TITLE,
  ADD_ITEMS_TITLE,
  ACCEPT_ADD_BUTTON_TITLE,
  CANCEL_ADD_BUTTON_TITLE,
} from '../constants/text'

const SavedItems = () => {
  return (<View style={styles.app}>
    <View style={styles.header}>
      <Text style={styles.title}>{HEADER_TITLE}</Text>
    </View>
    <View style={styles.search}>
      <Search placeHolder={SEARCH_PLACEHOLDER} />
    </View>
    <View style={styles.options}>
      <CategoriesContainer 
        currencySymbol={CURRENCY_SYMBOL} 
        addButtonTitle={ADD_BUTTON_MESSAGE}
        deleteAllButtonTitle={DELETE_ALL_BUTTON_MESSAGE}
        modalTitle={ADD_ITEMS_TITLE}
        acceptModalButtonTitle={ACCEPT_ADD_BUTTON_TITLE}
        cancelModalButtonTitle={CANCEL_ADD_BUTTON_TITLE}
      />
    </View>
    <View style={styles.items}>
      <Items 
        itemHeight={itemHeight}
        noItemsMessage={NO_ITEMS_MESSAGE}
        currencySymbol={CURRENCY_SYMBOL}  
      />
    </View>
  </View>
  )
}

const { width, height } = Dimensions.get('window');
const headerHeight = height/9;
const searchHeight = height/12;
const optionsHeight = height/22;
const itemHeight = height/5.25;

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