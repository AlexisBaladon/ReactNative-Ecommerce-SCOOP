import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import itemImages from '../../assets/items';
import { MAIN_COLOR, NEUTRAL_COLOR } from '../../constants/styles';
import { getItemImage } from '../../helpers/imageHandler';
import DtItem from '../../interfaces/item';
import CloseButton from '../global/buttons/closeButton';
import Counter from '../global/buttons/counter';

interface IProps {
    item: DtItem,
    deleteItem(itemId: DtItem["id"]): void;
}

const Item: React.FC<IProps> = ({item, deleteItem}) => {
    const imageSrc = getItemImage(item.imageURL);

    return (
    <View style={styles.item}>
        <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={imageSrc} />
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
        padding: '4%',
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
        //move image to left like object-fit: cover:
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    itemImage: {
        aspectRatio: 1,
        width: '100%', height: '100%',
        borderRadius: 15,
        borderWidth: 1,

        //IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        //ANDROID
        elevation: 4,
        
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