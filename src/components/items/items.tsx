import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ItemContext } from '../../context/itemContext';
import DtItem from '../../interfaces/item'
import Item from './item'
 

interface IProps {
    itemHeight: number | string;
}

const Items: React.FC<IProps> = ({itemHeight}) => {
    const { shownItems, deleteItem } = useContext(ItemContext);
    const styles = createStyles(itemHeight);

    const RenderItem: React.FC<{item: DtItem}> = ({item}) => {
        return <View style={styles.item}>
            <Item item={item} deleteItem={deleteItem} />
        </View>
    }

    return (<>
        {!shownItems.length && <View style={styles.emptyListTextContainer}>
            <Text style={styles.emptyListText}>No hay items que mostrar 😔</Text>
        </View>}
        {shownItems.length > 0 && <FlatList 
            contentContainerStyle={styles.items}
            renderItem={RenderItem}
            data={shownItems}
            keyExtractor={(item: DtItem) => item.id}
        />}
    </>
    )
}

const createStyles = (height: number | string) => StyleSheet.create({
    items: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    item: {
        minHeight: 150, height,
        paddingHorizontal: "6%",
        marginVertical: 15,
        borderColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 15,
    },
    emptyListTextContainer: {
        width: '100%', height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    emptyListText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'gray',
    },
});

export default Items;