import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { BACKGROUND_COLOR } from '../../constants/styles'
import Item from './item'

interface IProps {
    items: Array<string>,
}

const Items: React.FC<IProps> = ({items}) => {
  const RenderItem: React.FC<{item: string}> = ({item}) => {
      return <View style={styles.item}><Item item={item}/></View>
  }

  return (
    <FlatList 
        contentContainerStyle={styles.items}
        data={items}
        renderItem={RenderItem}
        keyExtractor={(item: string) => item}
    />
  )
}

const styles = StyleSheet.create({
    items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        width: '90%', height: 150,
        marginVertical: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    }
});

export default Items;