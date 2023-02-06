import { type NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useContext, useEffect } from 'react';
import { Image, ScrollView, TouchableHighlight, View } from 'react-native';
import { LikeableContainer, Navbar, CustomText, Counter } from '../../components';
import { ImageHandler } from '../../helpers';
import { type NavbarParamList, type RootStackParamList } from '../../navigation/types';
import { TEXT } from '../../constants';
import { CartItemContextComponents } from '../../context';
import { useCounter } from '../../hooks';
import styles from './detail.styles';

const { CURRENCY_SYMBOL, ADD_TO_CART_BUTTON_MESSAGE } = TEXT;

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenNavigationProp> = ({ route, navigation }) => {
	const { item } = route.params;
	const { CartItemContext } = CartItemContextComponents;
	const { addItem, isItemInCart, updateCount, findItem } = useContext(CartItemContext);
	const cartItem = findItem(item.id);
	const [count, countRef, addToCounter, resetCounter] = useCounter(
		1,
		cartItem !== undefined ? cartItem.amount : 1,
		99,
	);

	useEffect(() => {
		resetCounter(cartItem?.amount);
	}, [cartItem?.amount]);

	useEffect(() => {
		if (cartItem == null) return;
		updateCount(cartItem.id, countRef.current);
	}, [count]);

	const { getItemImage } = ImageHandler;
	const image = getItemImage(item.imageURL);
	const itemInCart = isItemInCart(item.id);

	const handleAddItem = (): void => {
		if (itemInCart) return;
		addItem({ ...item, amount: count }); // TODO: Add amount to item
	};

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
								<CustomText textType="bold" size="big" style={styles.title}>
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
									addToCounter={() => {
										addToCounter(1);
									}}
									count={cartItem?.amount??count}
									decToCounter={() => {
										addToCounter(-1);
									}}
								/>
							</View>
						</View>
						<View style={styles.bottomInfo}>
							<View style={styles.bottomItem}>
								<CustomText size="big" textType="bold" style={styles.price}>
									{item.priceDollars * (cartItem?.amount??count)}
									{CURRENCY_SYMBOL}
								</CustomText>
							</View>
							<TouchableHighlight
								style={[
									styles.addButton,
									styles.bottomItem,
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
			<Navbar
				chosenIcon={0}
				setChosenIcon={(index: number) => {
					const pages: Array<keyof NavbarParamList> = ['Store', 'Cart', 'Favourites'];
					const names = ['Tienda', 'Carrito', 'Favoritos'];
					navigation.navigate(pages[index], {
						name: names[index],
					});
				}}
			/>
		</>
	);
};

export default DetailScreen;
