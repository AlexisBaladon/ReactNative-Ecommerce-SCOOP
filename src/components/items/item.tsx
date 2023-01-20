import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MAIN_COLOR, NEUTRAL_COLOR } from '../../constants/styles';
import DtItem from '../../interfaces/item';
import CloseButton from '../global/buttons/closeButton';
import Counter from '../global/buttons/counter';

interface IProps {
    item: DtItem,
    deleteItem(itemId: DtItem["id"]): void;
}

const Item: React.FC<IProps> = ({item, deleteItem}) => {
    return (
    <View style={styles.item}>
        <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={require('./helado.png')} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.priceDollars}US$</Text>
        </View>
        <View style={styles.buttonContainer}>
            <CloseButton onPress={() => deleteItem(item.id)}/>
            <Counter 
                addCharacter={'+'} 
                decCharacter={'-'}
            />
        </View>
    </View>
  )
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    item: {
        maxWidth: width*0.9,
        width: "100%", height: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '3%',
        backgroundColor: 'white',
        borderRadius: 15,

        //IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        //ANDROID
        elevation: 4,
    },
    imageContainer: {
        height: '60%', aspectRatio: 1,
        flexGrow: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 1,
    },
    itemImage: {
        width: '70%', height: '70%',
    },
    textContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 6,
        marginLeft: '5%', paddingRight: '5%',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    itemDescription: {
        color: NEUTRAL_COLOR,
    },
    itemPrice: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: MAIN_COLOR,

        fontWeight: 'bold',
    },
    buttonContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '10%',
    },
})

export default Item;