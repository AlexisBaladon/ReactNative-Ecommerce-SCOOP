import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { Image, ScrollView, TouchableHighlight, View } from 'react-native';
import { LikeableContainer, CustomText, Counter } from '../../components';
import { ImageHandler } from '../../helpers';
import { type StoreParamList } from '../../navigation/types/store.types';
import { TEXT, BUSINESS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import styles from './detail.styles';
import { addItemCart, updateCounterCart } from '../../store/actions';
import type { ReduxStoreState } from '../../store';
import { useCounter } from '../../hooks';

const { CURRENCY_SYMBOL, ADD_TO_CART_BUTTON_MESSAGE } = TEXT;
const { MIN_ITEMS_IN_CART, MAX_ITEMS_IN_CART } = BUSINESS;

type DetailScreenNavigationProp = NativeStackScreenProps<StoreParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenNavigationProp> = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const { item } = route.params;
	const cartItem = useSelector((state: ReduxStoreState) => state.cart.items.find((cartItem) => cartItem.id === item.id));
	const itemInCart = cartItem !== undefined;
	const { count, resetCounter } = useCounter(MIN_ITEMS_IN_CART, cartItem?.amount , MAX_ITEMS_IN_CART);
	
	const handleUpdateCount = (count: number): void => {
		resetCounter(count);
		if (!itemInCart) return;
		dispatch(updateCounterCart(item.id, count)); // TODO: after component is no longer focused
	};

	const handleAddCount = (): void => {
		handleUpdateCount(cartItem?.amount !== undefined ? cartItem.amount + 1 : count + 1);
	};

	const handleDecCount = (): void => {
		handleUpdateCount(cartItem?.amount !== undefined ? cartItem.amount - 1 : count - 1);
	};

	const handleAddItem = (): void => {
		if (itemInCart) return;
		dispatch(addItemCart(item.id, count));
	};

	const { getItemImage } = ImageHandler;
	const image = getItemImage(item.imageURL);


	return (
		<>
			<ScrollView style={styles.itemDetailScroll}>
				<View style={styles.itemDetail}>
					<LikeableContainer item={item} width={50}>
						<Image source={image} style={styles.itemImage} />
					</LikeableContainer>
					<View style={styles.itemInfo}>
						<View style={styles.topInfoContainer}>
							<View style={styles.topInfo}>
								<CustomText textType="bold" size="big">
									{item.title}
								</CustomText>
								<CustomText size="medium" style={styles.description}>
									{item.description}
								</CustomText>
							</View>
							<View style={styles.countContainer}>
								<Counter
									addCharacter={'+'}
									decCharacter={'-'}
									addToCounter={handleAddCount}
									count={cartItem?.amount??count}
									decToCounter={handleDecCount}
								/>
							</View>
						</View>
						<View style={styles.bottomInfo}>
							<View>
								<CustomText size="big" textType="bold" style={styles.price}>
									{item.priceDollars * (cartItem?.amount??count)}
									{CURRENCY_SYMBOL}
								</CustomText>
							</View>
							<TouchableHighlight
								style={[
									styles.addButton,
									itemInCart ? styles.disabledButton : null,
								]}
								onPress={handleAddItem}
								disabled={itemInCart}
							>
								<CustomText
									size="small"
									textType="bold"
									style={styles.addButtonText}
								>
									{ADD_TO_CART_BUTTON_MESSAGE}
								</CustomText>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

export default DetailScreen;
