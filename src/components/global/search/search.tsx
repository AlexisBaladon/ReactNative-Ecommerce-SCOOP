import React from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { MAIN_COLOR } from '../../../constants/styles'

interface IProps {
  placeHolder: string;
  defaultValue?: string;
}

const Search: React.FC<IProps> = ({placeHolder, defaultValue=''}) => {
  return (
    <View style={styles.search}>
      <View style={styles.searchInputContainer}>
        <Image 
          style={styles.magnifyingGlass}
          source={require('./search.png')}
        />
        <TextInput style={styles.searchInput} placeholder={placeHolder} defaultValue={defaultValue}/>
      </View>
      <View style={styles.filterContainer}>
        <Image 
            style={styles.filterImage}
            source={require('./filter.png')}
        />
      </View>
    </View>
  )
}


const FILTER_WIDTH = 35;
const FILTER_HEIGHT = 30;
const FILTER_CONTAINER_FACTOR = 1.75; 
const styles = StyleSheet.create({
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInputContainer: {
    backgroundColor: 'white',
    width: 300, height: 45,//TODO: DESHARDCODEAR
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,

    borderColor: 'whitesmoke',
    borderWidth: 1,
    borderRadius: 15,
  },
  searchInput: {
    width: '100%', height: '100%',
    marginVertical: 2.5,
    marginLeft: 12.5,

    fontSize: 17.5,
  },
  magnifyingGlass: {
    height: 28, width: 27,
    marginLeft: 7.5,
  },
  filterContainer: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 12.5,
    width: FILTER_WIDTH*FILTER_CONTAINER_FACTOR,
    height: FILTER_HEIGHT*FILTER_CONTAINER_FACTOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterImage: {
    width: FILTER_WIDTH, height: FILTER_HEIGHT,
  }
})

export default Search;