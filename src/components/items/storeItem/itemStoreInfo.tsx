import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { type DtItem } from '../../../interfaces';
import CustomText from '../../global/customText/customText';
import { TEXT } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { addItemCart} from '../../../store/actions';
import type { ReduxStoreState } from '../../../store';
import styles from './itemStoreInfo.styles';

interface IProps {
	item: DtItem;
}

const { ADD_BUTTON_MESSAGE, CURRENCY_SYMBOL } = TEXT;

const ItemStoreInfo: React.FC<IProps> = ({ item }) => {
	const dispatch = useDispatch();
	
	const isInCart: boolean = useSelector((state: ReduxStoreState) => state.cart.items.some((cartItem: DtItem) => cartItem.id === item.id));
	const addToCartButtonStyle = isInCart ? styles.addToCartButtonDisabled : {};

	const handleOnAddToCart = (): void => {
		if (!isInCart) {
			dispatch(addItemCart(item.id));
		}
	};

	return (
		<View style={styles.priceContainer}>
			<CustomText
				style={styles.itemPrice}
				textType="bold"
				numberOfLines={1}
				ellipsizeMode="tail"
			>
				{`${item.priceDollars}${CURRENCY_SYMBOL}`}
			</CustomText>
			<TouchableHighlight
				style={[styles.addToCartButton, addToCartButtonStyle]}
				onPress={handleOnAddToCart}
				disabled={isInCart}
			>
				<CustomText
					style={styles.addToCartButtonText}
					textType="bold"
					size="xx-small"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{ADD_BUTTON_MESSAGE}
				</CustomText>
			</TouchableHighlight>
		</View>
	);
};

export default ItemStoreInfo;
