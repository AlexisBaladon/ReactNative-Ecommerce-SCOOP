import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MAIN_COLOR, NEUTRAL_COLOR } from '../../constants/styles';
import CloseButton from '../global/buttons/closeButton';
import Counter from '../global/buttons/counter';

interface IProps {
    item: string; //TODO: CAMBIAR
}

const Item: React.FC<IProps> = ({item}) => {
  return (
    <View style={styles.item}>
        <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={require('./helado.png')} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>{item}</Text>
            <Text style={styles.itemDescription}>{item}</Text>
            <Text style={styles.itemPrice}>{50}US$</Text>
        </View>
        <View style={styles.buttonContainer}>
            <CloseButton />
            <Counter addCharacter={'+'} count={0} decCharacter={'-'} />
        </View>
    </View>
  )
}

const imageSize = 100; 

const styles = StyleSheet.create({
    item: {
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