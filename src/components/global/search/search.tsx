import React, { useContext } from 'react'
import { View, TextInput, Image } from 'react-native'
import { ItemContextComponents } from '../../../context/index';
import styles from './search.styles';

interface IProps {
  placeHolder: string;
  defaultValue?: string;
}

const Search: React.FC<IProps> = ({placeHolder, defaultValue=''}) => {
  const { ItemContext } = ItemContextComponents;
  const { filterByText } = useContext(ItemContext);

  return (
    <View style={styles.search}>
      <View style={styles.searchInputContainer}>
        <Image 
          style={styles.magnifyingGlass}
          source={require('./search.png')}
        />
        <TextInput 
          style={styles.searchInput} 
          placeholder={placeHolder} 
          defaultValue={defaultValue}
          onChangeText={filterByText}
        />
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

export default Search;