import React, { useContext } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { CartItemContextComponents } from '../../../context';
import { DtItem } from '../../../interfaces';
import CustomText from '../../global/customText/customText'
import { TEXT } from '../../../constants';

import styles from './itemStoreInfo.styles'

interface IProps {
    item: DtItem
}

const { ADD_BUTTON_MESSAGE, CURRENCY_SYMBOL } = TEXT;

const ItemStoreInfo: React.FC<IProps> = ({item}) => {
    const { CartItemContext } = CartItemContextComponents;
    const { addItem, isItemInCart } = useContext(CartItemContext);

    const isInCart = isItemInCart(item.id);
	const addToCartButtonStyle = isInCart ? styles.addToCartButtonDisabled : {};
    
    const handleOnAddToCart = () => {
        if (!isInCart) addItem({...item, amount: 1});
    }

    return (
        
        <View style={styles.priceContainer}>
            <CustomText style={styles.itemPrice} textType='bold' numberOfLines={1} ellipsizeMode="tail">
                {`${item.priceDollars}${CURRENCY_SYMBOL}`}
            </CustomText>
            <TouchableHighlight 
                style={[styles.addToCartButton, addToCartButtonStyle]} 
                onPress={handleOnAddToCart}
                disabled={isInCart}
            >
                <CustomText style={styles.addToCartButtonText} textType='bold' numberOfLines={1} ellipsizeMode="tail">
                    {ADD_BUTTON_MESSAGE}
                </CustomText>
            </TouchableHighlight>
        </View>
    )
}

export default ItemStoreInfo;