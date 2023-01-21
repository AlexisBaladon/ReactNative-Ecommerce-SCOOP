import React, { useRef } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import DtItem from '../../interfaces/item'
import Item from './item'

interface IProps {
    items: Array<DtItem>;
    setItems(items: Array<DtItem>): void;
}

const Items: React.FC<IProps> = ({items, setItems}) => {
    const deleteItem = (itemId: DtItem['id']) => {
        const itemsWithoutDeleted = items.filter(item => item.id != itemId);
        setItems(itemsWithoutDeleted);
    }

    const RenderItem: React.FC<{item: DtItem}> = ({item}) => {
        return <View style={styles.item}>
            <Item item={item} deleteItem={deleteItem}/>
        </View>
    }

    return (<>
        {!items.length && <View style={styles.emptyListTextContainer}>
            <Text style={styles.emptyListText}>No hay items que mostrar 😔 Agrega uno! </Text>
        </View>}
        {items.length > 0 && <FlatList 
            contentContainerStyle={styles.items}
            renderItem={RenderItem}
            data={items}
            keyExtractor={(item: DtItem) => item.id}
        />}
    </>
    )
}

const styles = StyleSheet.create({
    emptyListTextContainer: {
        width: '100%', height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 125, paddingHorizontal: 30,
        
    },
    emptyListText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'gray',
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        width: '90%', height: 150,
        marginVertical: 15,
        borderColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 15,
    }
});

export default Items;