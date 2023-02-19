import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { type DtItem } from '../../../interfaces';
import CustomText from '../../global/customText/customText';
import { TEXT } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { addItemCart } from '../../../store/actions';
import type { ReduxStoreState } from '../../../store';
import styles from './itemStoreInfo.styles';

interface IProps {
	item: DtItem;
}

const { ADD_BUTTON_MESSAGE, CURRENCY_SYMBOL, ALREADY_ADDED_BUTTON_MESSAGE } = TEXT;

const ItemStoreInfo: React.FC<IProps> = ({ item }) => {
	const dispatch = useDispatch();

	const isInCart: boolean = useSelector((state: ReduxStoreState) =>
		state.cart.items.some((cartItem: DtItem) => cartItem.id === item.id),
	);
	const userId = useSelector((state: ReduxStoreState) => state.auth.userId);
	const addToCartButtonStyle = isInCart ? styles.addToCartButtonDisabled : {};

	const handleOnAddToCart = (): void => {
		if (!isInCart) {
			dispatch(addItemCart(userId, { ...item, amount: 1 }) as any);
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
				{`${item.price}${CURRENCY_SYMBOL}`}
			</CustomText>
			<TouchableOpacity
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
					{isInCart ? ALREADY_ADDED_BUTTON_MESSAGE : ADD_BUTTON_MESSAGE}
				</CustomText>
			</TouchableOpacity>
		</View>
	);
};

export default ItemStoreInfo;
