import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MAIN_COLOR, NEUTRAL_COLOR } from '../../constants/styles';
import { getItemImage } from '../../helpers/imageHandler';
import useCounter from '../../hooks/useCounter';
import DtItem from '../../interfaces/item';
import CloseButton from '../global/buttons/closeButton';
import Counter from '../global/buttons/counter';

interface IProps {
    item: DtItem,
    deleteItem(itemId: DtItem["id"]): void;
    minCount?: number,
    maxCount?: number,
}

const Item: React.FC<IProps> = ({item, deleteItem, minCount=1, maxCount=99}) => {
    const [count, addToCounter, decToCounter] = useCounter(minCount, item.amount, maxCount);
    const imageSrc = getItemImage(item.imageURL);
    const currencySymbol = 'US$'

    return (
    <View style={styles.item}>
        <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={imageSrc} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.itemTitle} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
            <Text style={styles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
            <Text style={styles.itemPrice} numberOfLines={1} ellipsizeMode='tail'>{`${item.priceDollars * count} ${currencySymbol}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <View>
            <CloseButton 
                onPress={() => deleteItem(item.id)}
                height={buttonWidth} width={buttonWidth}
            />

            </View>
            <View style={styles.counterButtons}>

            <Counter 
                addCharacter={'+'} 
                decCharacter={'-'}
                addToCounter={addToCounter}
                count={count}
                decToCounter={decToCounter}
            />
                </View>
        </View>
    </View>
  )
}

const buttonWidth = 26;

const styles = StyleSheet.create({
    item: {
        width: "100%", height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: '4%',
        paddingHorizontal: '3%',
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
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden',
    },
    itemImage: {
        
        width: '100%', height: '100%',
        
        //IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        //ANDROID
        elevation: 4,
        overflow: 'visible',
    },
    textContainer: {
        width: '40%',
        
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    itemDescription: {
        color: NEUTRAL_COLOR,
    },
    itemPrice: {
        position: 'absolute',
        bottom: 0,
        color: MAIN_COLOR,

        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '10%', height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    counterButtons: {
        width: buttonWidth
    }
})

export default Item;